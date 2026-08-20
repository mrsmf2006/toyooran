import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// In-memory data store for full-stack persistence
interface QuoteItem {
  id: string;
  fullName: string;
  phoneNumber: string;
  companyName: string;
  projectType: string;
  targetCategory: string;
  selectedEquipment: string[];
  capacity: string;
  deliveryLocation: string;
  additionalNotes: string;
  status: 'new' | 'reviewed' | 'quoted' | 'closed';
  createdAt: string;
}

interface ConsultationItem {
  id: string;
  fullName: string;
  phoneNumber: string;
  requestType: string;
  projectType: string;
  projectCapacity: string;
  location: string;
  message: string;
  status: 'pending' | 'contacted' | 'completed';
  createdAt: string;
}

const inMemoryQuotes: QuoteItem[] = [
  {
    id: "Q-101",
    fullName: "مهندس رضا کریمی",
    phoneNumber: "09123456789",
    companyName: "مجتمع مرغ گوشتی آریا",
    projectType: "broiler",
    targetCategory: "feeding",
    selectedEquipment: ["خط دانخوری بشقابی اوگر استیل", "سنسور قطع کن مکانیکی"],
    capacity: "۵۰,۰۰۰ قطعه",
    deliveryLocation: "قزوین، شهرک صنعتی کاسپین",
    additionalNotes: "درخواست پیش‌فاکتور با زمان تحویل فوری و گارانتی نصب",
    status: "new",
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    id: "Q-102",
    fullName: "دکتر مسعود خسروی",
    phoneNumber: "09139876543",
    companyName: "کارخانه خوراک و مکمل مهرگان",
    projectType: "feed_mill",
    targetCategory: "machinery",
    selectedEquipment: ["پرس پلت مدل TYR-P350 با موتور ۱۱۰ کیلووات", "کاندیشنر بخار دوجداره استیل"],
    capacity: "۱۰ تن در ساعت",
    deliveryLocation: "اصفهان، شهرک صنعتی مورچه‌خورت",
    additionalNotes: "نیاز به مشاوره فنی در خصوص دای استیل و فیدر متغیر",
    status: "reviewed",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
  }
];

const inMemoryConsultations: ConsultationItem[] = [
  {
    id: "C-201",
    fullName: "حاج علی اصغری",
    phoneNumber: "09112233445",
    requestType: "project-design",
    projectType: "مرغداری گوشتی",
    projectCapacity: "۶۰,۰۰۰ قطعه",
    location: "مازندران، ساری",
    message: "طراحی نقشه و فونداسیون سوله و محاسبه تهویه تونلی تابستانه",
    status: "pending",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
  },
  {
    id: "C-202",
    fullName: "مهندس بهنام رحمانی",
    phoneNumber: "09355551234",
    requestType: "efficiency-audit",
    projectType: "مزرعه پرورش پولت و تخم‌گذار",
    projectCapacity: "۱۰۰,۰۰۰ قطعه",
    location: "خراسان رضوی، چناران",
    message: "افت راندمان مصرف دان و افزایش رطوبت بستر در فصول سرد",
    status: "contacted",
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
  }
];

// Lazy-initialize Gemini AI Client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// ----------------------------------------------------
// API ROUTES
// ----------------------------------------------------

// 1. Health check
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    company: "طیوران صنعت پویا | Toyooran Sanat Pouya",
    timestamp: new Date().toISOString(),
    aiAvailable: !!process.env.GEMINI_API_KEY,
  });
});

// 2. AI Smart Poultry & Livestock Engineer Chat
app.post("/api/chat", async (req, res) => {
  try {
    const { message, context, calculationType } = req.body;

    if (!message) {
      return res.status(400).json({ error: "پیام ارسالی نمی‌تواند خالی باشد." });
    }

    const ai = getGeminiClient();

    const systemInstruction = `
شما «مهندس هوشمند طیوران» (Toyooran AI Senior Engineer) هستید؛ دستیار هوش مصنوعی رسمی شرکت طیوران صنعت پویا (با ۵۰ سال سابقه در طراحی، مهندسی، ساخت سوله و تأمین تجهیزات و ماشین‌آلات صنعت دام، طیور و آبزیان در ایران).

حوزه‌های تخصص شما:
۱. خوراک و تغذیه (فرمولاسیون جیره، کنسانتره، مکمل‌های ویتامینه، پروبیوتیک، ضریب تبدیل FCR).
۲. دارو و بهداشت دام و طیور (پیشگیری از بیماری‌ها، ضدعفونی سالن‌ها، داروهای مجاز).
۳. ماشین‌آلات صنعتی (پرس پلت، اکسترودر، کاندیشنر، آسیاب چکشی، میکسر، دای و رولر).
۴. ساخت و تجهیز سوله (ابعاد استاندارد سوله مرغداری، عایق‌بندی، ارتفاع تاج، اسکلت فلزی).
۵. تجهیزات سالن (دانخوری بشقابی اتوماتیک، آبخوری نیپل با رگلاتور، هواکش ۱۴۰ گریز از مرکز، پد سلولزی، مه پاش، هیتر جت و گرمایش تابشی).

دستورالعمل لحن و فرمت پاسخ:
- پاسخ‌ها باید کاملاً فارسی، حرفه‌ای، فنی، دقیق، محترمانه و کاربردی باشند.
- در صورت درخواست محاسبات (مانند CFM تهویه سالن، ظرفیت دانخوری، تعداد نیپل، فرمول خوراک، ضریب تبدیل)، محاسبات را گام‌به‌گام با اعداد و فرمول‌های مهندسی شفاف بنویسید.
- در انتهای پاسخ‌های مرتبط، کاربر را به ثبت استعلام پیش‌فاکتور یا دریافت مشاوره رایگان با مهندسان شرکت طیوران صنعت پویا دعوت کنید.
- از به کار بردن کلمات انگلیسی در متن‌های عادی پرهیز کنید مگر در اصطلاحات فنی استاندارد صنعتی (مانند FCR, CFM, PDI, RPM).
`;

    if (ai) {
      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: `زمینه / درخواست کاربر: ${message} ${context ? `\nاطلاعات تکمیلی: ${JSON.stringify(context)}` : ""} ${calculationType ? `\nنوع محاسبه فنی: ${calculationType}` : ""}`,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      return res.json({
        reply: response.text || "پاسخی از مدل دریافت نشد.",
        source: "gemini-ai",
      });
    } else {
      // Intelligent fallback responses tailored to poultry & feed engineering
      let simulatedReply = "";
      const lower = message.toLowerCase();

      if (lower.includes("تهویه") || lower.includes("هواکش") || lower.includes("cfm")) {
        simulatedReply = `💨 **محاسبه مهندسی تهویه سالن مرغداری (طیوران صنعت پویا):**\n\nبرای محاسبه تهویه تونلی تابستانه استاندارد:\n۱. سرعت جریان هوای مطلوب: ۲.۵ الی ۳ متر بر ثانیه.\n۲. ظرفیت هوادهی مورد نیاز = مساحت مقطع عرضی سالن (عرض × ارتفاع متوسط) × سرعت هوا × ۳۶۰۰.\n۳. برای یک سالن ۱۲×۸۰ با ارتفاع متوسط ۳ متر:\n   - حجم هوای مورد نیاز: حدود ۲۷۰,۰۰۰ الی ۳۰۰,۰۰۰ مترمکعب در ساعت.\n   - تعداد هواکش ۱۴۰ سانتیمتر گریز از مرکز شرکت طیوران (با دبی ۴۴,۵۰۰ m³/h): **۷ دستگاه هواکش ۱۴۰** به همراه پد سلولزی با ضخامت ۱۵ سانتی‌متر.\n\nجهت دریافت نقشه جایمایی دقیق و پیش‌فاکتور رسمی، می‌توانید از طریق بخش استعلام اقدام فرمایید.`;
      } else if (lower.includes("پرس پلت") || lower.includes("ماشین") || lower.includes("اکسترودر")) {
        simulatedReply = `⚙️ **راهنمای انتخاب ماشین‌آلات تولید پلت (طیوران صنعت پویا):**\n\n- **پرس پلت‌های سری TYR-P:** با سیستم انتقال قدرت گیربکسی، راندمان ۹۷٪ و شاخص پایداری پلت (PDI) بالای ۹۶٪.\n- **کاندیشنر دوجداره استیل ۳۰۴:** با زمان ماند ۶۰ الی ۹۰ ثانیه جهت ژلاتیناسیون کامل نشاسته و حذف پاتوژن‌ها.\n- ظرفیت‌های قابل سفارش: ۲ تن، ۵ تن، ۱۰ تن و ۲۰ تن در ساعت.\n\nتوصیه فنی: برای تولید خوراک آبزیان از اکسترودرهای دومحوره با بخار سوپرهیت استفاده نمایید.`;
      } else if (lower.includes("سوله") || lower.includes("ساخت") || lower.includes("ابعاد")) {
        simulatedReply = `🏗️ **استاندارد مهندسی ساخت سوله مرغداری مدرن:**\n\n- **عرض استاندارد:** ۱۲ الی ۱۶ متر (بهترین کنترل تهویه در عرض ۱۲ الی ۱۴ متر حاصل می‌شود).\n- **طول استاندارد:** ۸۰ الی ۱۲۰ متر.\n- **ارتفاع کناره:** ۲.۸ الی ۳.۲ متر | **ارتفاع تاج:** ۳.۸ الی ۴.۲ متر.\n- **پوشش سقف:** ساندویچ پانل پلی‌یورتان با ضخامت ۵ سانتی‌متر با ضریب انتقال حرارت پایین.\n\nطیوران صنعت پویا کلیه مراحل از طراحی فونداسیون، ساخت اسکلت فلزی تا تجهیز کامل را انجام می‌دهد.`;
      } else {
        simulatedReply = `✅ **پاسخ کارشناس هوشمند طیوران صنعت پویا:**\n\nدرخواست شما با موفقیت بررسی گردید. شرکت طیوران صنعت پویا به عنوان تولیدکننده و مجری پروژه‌های صنعتی مرغداری، دامپروری و خطوط تولید خوراک و مکمل، آمادگی دارد بر اساس ظرفیت و شرایط اقلیمی منطقه شما، بهینه‌ترین مشخصات فنی و مالی را ارائه نماید.\n\nجهت دریافت کاتالوگ دقیق و پیش‌فاکتور رسمی، مشخصات واحد تولیدی خود را در بخش استعلام ثبت فرمایید یا با واحد مهندسی فروش ما تماس بگیرید.`;
      }

      return res.json({
        reply: simulatedReply,
        source: "domain-engine",
      });
    }
  } catch (error: any) {
    console.error("AI Chat Error:", error);
    res.status(500).json({
      error: "خطا در پردازش هوش مصنوعی. لطفاً دوباره تلاش کنید.",
      details: error?.message,
    });
  }
});

// 3. Quotes Management
app.get("/api/quotes", (_req, res) => {
  res.json({ quotes: inMemoryQuotes, total: inMemoryQuotes.length });
});

app.post("/api/quotes", (req, res) => {
  const data = req.body;
  if (!data.fullName || !data.phoneNumber) {
    return res.status(400).json({ error: "نام و شماره تماس الزامی است." });
  }

  const newQuote: QuoteItem = {
    id: `Q-${Date.now().toString().slice(-4)}`,
    fullName: data.fullName,
    phoneNumber: data.phoneNumber,
    companyName: data.companyName || "شخصی / بدون نام شرکت",
    projectType: data.projectType || "broiler",
    targetCategory: data.targetCategory || "all",
    selectedEquipment: data.selectedEquipment || [],
    capacity: data.capacity || "نامشخص",
    deliveryLocation: data.deliveryLocation || "ایران",
    additionalNotes: data.additionalNotes || "",
    status: "new",
    createdAt: new Date().toISOString(),
  };

  inMemoryQuotes.unshift(newQuote);
  res.status(201).json({ success: true, quote: newQuote });
});

app.patch("/api/quotes/:id/status", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const item = inMemoryQuotes.find((q) => q.id === id);
  if (!item) {
    return res.status(404).json({ error: "پیش‌فاکتور یافت نشد." });
  }
  item.status = status;
  res.json({ success: true, quote: item });
});

// 4. Consultation Bookings
app.get("/api/consultations", (_req, res) => {
  res.json({ consultations: inMemoryConsultations, total: inMemoryConsultations.length });
});

app.post("/api/consultations", (req, res) => {
  const data = req.body;
  if (!data.fullName || !data.phoneNumber) {
    return res.status(400).json({ error: "نام و شماره تماس الزامی است." });
  }

  const newConsultation: ConsultationItem = {
    id: `C-${Date.now().toString().slice(-4)}`,
    fullName: data.fullName,
    phoneNumber: data.phoneNumber,
    requestType: data.requestType || "project-design",
    projectType: data.projectType || "مرغداری",
    projectCapacity: data.projectCapacity || "نامشخص",
    location: data.location || "ایران",
    message: data.message || "",
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  inMemoryConsultations.unshift(newConsultation);
  res.status(201).json({ success: true, consultation: newConsultation });
});

app.patch("/api/consultations/:id/status", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const item = inMemoryConsultations.find((c) => c.id === id);
  if (!item) {
    return res.status(404).json({ error: "درخواست مشاوره یافت نشد." });
  }
  item.status = status;
  res.json({ success: true, consultation: item });
});

// 5. Admin Analytics & Stats
app.get("/api/stats", (_req, res) => {
  res.json({
    totalQuotes: inMemoryQuotes.length,
    newQuotes: inMemoryQuotes.filter((q) => q.status === "new").length,
    totalConsultations: inMemoryConsultations.length,
    pendingConsultations: inMemoryConsultations.filter((c) => c.status === "pending").length,
    totalProjectsCompleted: 240,
    yearsOfExperience: 50,
    activeEquipmentLines: 48,
    systemStatus: "active",
  });
});

// 6. Admin Auth simulation
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "toyooran1403") {
    res.json({
      success: true,
      token: "toyooran_sec_admin_token_" + Date.now(),
      user: { name: "مدیر ارشد طیوران", role: "superadmin" },
    });
  } else {
    res.status(401).json({ error: "نام کاربری یا رمز عبور اشتباه است." });
  }
});

// ----------------------------------------------------
// VITE OR STATIC SERVING
// ----------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Toyooran Sanat Pouya server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
