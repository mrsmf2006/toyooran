import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Sparkles, 
  Building2, 
  Wrench, 
  Layers, 
  ArrowLeft,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';
import { PageSection, ProductCategory } from '../types';

interface HeroProps {
  onNavigate: (section: PageSection) => void;
  onSelectCategory: (cat: ProductCategory) => void;
  onOpenConsultation: () => void;
  onOpenQuote: () => void;
  onOpenAiAssistant?: () => void;
}

interface HexCard {
  id: ProductCategory;
  title: string;
  categoryEn: string;
  image: string;
  desc: string;
  badge: string;
  specs: string[];
}

export const Hero: React.FC<HeroProps> = ({
  onNavigate,
  onSelectCategory,
  onOpenConsultation,
  onOpenQuote,
  onOpenAiAssistant,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Exact 4 Categories + Brand Card from Reference UI/UX Mockup
  const hexCards: HexCard[] = [
    {
      id: 'feed_pharma',
      title: 'خوراک',
      categoryEn: 'Feed & Nutrition',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=700&q=80',
      desc: 'کنسانتره، پری‌میکس و جیره متعادل با فرمولاسیون استاندارد جهت رشد بهینه و کاهش ضریب تبدیل',
      badge: 'کیفیت و بازدهی',
      specs: ['کنسانتره ۲.۵٪ و ۵٪ گوشتی', 'جیره پلت و مش استاندارد', 'فرمولاسیون اختصاصی اقلیمی']
    },
    {
      id: 'feed_pharma',
      title: 'دارو و مکمل',
      categoryEn: 'Pharma & Supplements',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=700&q=80',
      desc: 'ویتامین‌های محلول در آب، پروبیوتیک‌ها، پری‌بیوتیک‌ها، محرک‌های رشد طبیعی و ضدعفونی‌کننده‌ها',
      badge: 'سلامت گله',
      specs: ['ویتامینه و اسیدهای آمینه', 'پروبیوتیک‌های تخصصی روده', 'ضدعفونی‌کننده‌های سالن']
    },
    {
      id: 'machinery',
      title: 'ماشین آلات و تجهیزات',
      categoryEn: 'Heavy Machinery & Mills',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=700&q=80',
      desc: 'پرس پلت‌های گیربکسی، کاندیشنرهای دوجداره تمام استیل، اکسترودر، آسیاب چکشی و کولر جریان متقاطع',
      badge: 'مهندسی سنگین',
      specs: ['پرس پلت ۲ الی ۲۰ تن/ساعت', 'کاندیشنر استیل ۳۰۴ دوجداره', 'شاخص PDI بالای ۹۶٪']
    },
    {
      id: 'structure',
      title: 'ساخت و تجهیز سوله',
      categoryEn: 'Shed & Farm Construction',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80',
      desc: 'طراحی سازه مهندسی، اسکلت فلزی با ساندویچ پانل، تجهیز خطوط دانخوری، آبخوری، تهویه و گرمایش اتوماتیک',
      badge: 'پروژه صفر تا صد',
      specs: ['محاسبه دقیق اقلیمی و CFM', 'دانخوری بشقابی و آبخوری نیپل', 'هواکش ۱۴۰ و پد سلولزی']
    },
  ];

  return (
    <section className="relative w-full h-[calc(100vh-65px)] min-h-[600px] flex flex-col justify-between overflow-hidden bg-white bg-subtle-waves selection:bg-amber-400">
      
      {/* Background Decorative Vector Waves (As seen on the right side of the UI/UX image) */}
      <div className="absolute right-0 top-0 bottom-0 w-2/3 pointer-events-none opacity-35 overflow-hidden z-0">
        <svg 
          viewBox="0 0 800 800" 
          className="w-full h-full object-cover transform translate-x-1/4 -translate-y-10"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M200,100 C400,250 150,550 500,700 C700,800 650,400 750,200" 
            stroke="#003F86" 
            strokeWidth="1.5" 
            strokeDasharray="4 6" 
            opacity="0.25"
          />
          <path 
            d="M300,50 C550,200 350,600 650,650 C850,700 700,300 800,100" 
            stroke="#FF9F14" 
            strokeWidth="2" 
            opacity="0.3"
          />
          <path 
            d="M100,200 C300,350 200,700 600,600 C750,550 800,250 850,50" 
            stroke="#003F86" 
            strokeWidth="1" 
            opacity="0.2"
          />
        </svg>
      </div>

      {/* Main Center Area: Exact 5 Hexagons on Desktop / 2x2 Grid on Mobile */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2 max-w-7xl mx-auto w-full">
        
        {/* Desktop & Laptop Layout: 5 Columns side by side */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-3.5 xl:gap-5 w-full items-center justify-center">
          
          {/* 4 Category Hexagons */}
          {hexCards.map((card, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onSelectCategory(card.id)}
                className="group relative cursor-pointer flex flex-col items-center justify-between p-3.5 xl:p-4 rounded-3xl transition-all duration-300 bg-white/70 hover:bg-white border border-slate-200/80 hover:border-amber-400 shadow-sm hover:shadow-xl h-[420px] xl:h-[460px] backdrop-blur-sm"
              >
                {/* Top Badge */}
                <div className="w-full flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-500 font-mono tracking-wider">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] font-bold text-[#003F86] bg-blue-50/80 px-2 py-0.5 rounded-full border border-blue-100/60">
                    {card.badge}
                  </span>
                </div>

                {/* Hexagon Image Container */}
                <div className="relative w-36 h-36 xl:w-44 xl:h-44 my-auto flex items-center justify-center">
                  
                  {/* Hexagon Outer Glow Frame */}
                  <div className="w-full h-full clip-hexagon bg-slate-100 p-1.5 group-hover:bg-gradient-to-tr group-hover:from-amber-400 group-hover:to-[#FF9F14] transition-all duration-300 shadow-inner">
                    
                    {/* Inner Masked Image */}
                    <div className="w-full h-full clip-hexagon bg-white overflow-hidden relative">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                  </div>

                </div>

                {/* Card Bottom Details */}
                <div className="w-full text-center flex flex-col items-center">
                  <h3 className="font-extrabold text-[#333132] group-hover:text-[#003F86] text-sm xl:text-base transition-colors">
                    {card.title}
                  </h3>
                  <span className="text-[11px] font-medium text-slate-500 mt-0.5 line-clamp-1">
                    {card.categoryEn}
                  </span>
                  
                  {/* Floating Amber/Orange Circular Button (Matching UI/UX reference) */}
                  <div className="mt-3 w-8 h-8 rounded-full bg-[#FF9F14] group-hover:bg-amber-400 text-white group-hover:text-slate-950 flex items-center justify-center shadow-sm group-hover:scale-110 transition-all duration-200">
                    <ChevronLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}

          {/* 5th Hexagon: Toyooran Brand Emblem (Deep Navy Solid Card from Mockup) */}
          <div className="relative flex flex-col items-center justify-between p-4 xl:p-5 rounded-3xl bg-[#003F86] text-white shadow-xl h-[420px] xl:h-[460px] overflow-hidden group border border-blue-900">
            
            {/* Ambient Background Glow */}
            <div className="absolute -right-12 -top-12 w-36 h-36 bg-amber-400/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -left-12 -bottom-12 w-36 h-36 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>

            {/* Top Indicator */}
            <div className="w-full flex items-center justify-between z-10">
              <span className="text-[10px] font-bold text-amber-400 font-mono tracking-wider">
                EST. 1974
              </span>
              <span className="bg-amber-400/20 text-amber-300 text-[10px] font-black px-2 py-0.5 rounded-full border border-amber-400/30">
                ۵۰+ سال سابقه
              </span>
            </div>

            {/* Hexagon Brand Logo Emblem in Center */}
            <div className="relative w-28 h-28 xl:w-36 xl:h-36 my-auto flex items-center justify-center z-10">
              <div className="w-full h-full clip-hexagon bg-amber-400 p-1 shadow-lg">
                <div className="w-full h-full clip-hexagon bg-[#003F86] flex flex-col items-center justify-center p-2 text-center">
                  <div className="w-6 h-6 border-2 border-amber-400 rounded transform rotate-45 flex items-center justify-center mb-1">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  </div>
                  <span className="text-amber-400 font-black text-xs xl:text-sm">طیوران</span>
                  <span className="text-white text-[8px] xl:text-[9px] tracking-widest uppercase">POUYA</span>
                </div>
              </div>
            </div>

            {/* Brand Titles & Consultation CTA */}
            <div className="w-full text-center z-10">
              <h2 className="text-base xl:text-lg font-black text-white tracking-tight">
                طیوران صنعت پویا
              </h2>
              <span className="text-amber-400 text-xs font-extrabold tracking-wider block mt-0.5">
                TOYOORAN
              </span>
              <p className="text-[11px] xl:text-xs text-blue-100 font-normal mt-1 leading-tight line-clamp-2">
                راهکارهای جامع برای صنعت دام، طیور و آبزیان
              </p>

              <button
                onClick={onOpenConsultation}
                id="hero-brand-consultation-btn"
                className="mt-3 w-full bg-gradient-to-r from-amber-400 to-[#FF9F14] hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
              >
                <span>مشاوره تخصصی رایگان</span>
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* Mobile & Tablet Layout (Exact 2x2 Grid + Bottom Brand Section from Mobile Screenshot) */}
        <div className="lg:hidden flex flex-col items-center gap-4 w-full py-2">
          
          {/* 2x2 Grid of Hexagons */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
            {hexCards.map((card, idx) => (
              <div
                key={idx}
                onClick={() => onSelectCategory(card.id)}
                className="bg-white p-3 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col items-center text-center cursor-pointer hover:border-amber-400 active:scale-95 transition-all"
              >
                <div className="w-20 h-20 clip-hexagon bg-slate-100 p-1 mb-2">
                  <div className="w-full h-full clip-hexagon bg-white overflow-hidden">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <h4 className="font-bold text-xs text-slate-900">{card.title}</h4>
                <div className="mt-1.5 w-6 h-6 rounded-full bg-[#FF9F14] text-white flex items-center justify-center">
                  <ChevronLeft className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Brand Section */}
          <div className="w-full max-w-sm text-center bg-slate-50 border border-slate-200/80 p-4 rounded-2xl">
            <h3 className="text-base font-extrabold text-[#003F86]">طیوران صنعت پویا</h3>
            <span className="text-xs font-bold text-amber-500 tracking-wider">TOYOORAN</span>
            <p className="text-xs text-slate-600 mt-1">راهکارهای جامع برای صنعت دام، طیور و آبزیان</p>

            <div className="mt-3 flex items-center gap-2">
              <button
                onClick={onOpenConsultation}
                className="flex-1 bg-[#003F86] text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1"
              >
                <span>درخواست مشاوره</span>
                <ChevronLeft className="w-3.5 h-3.5 text-amber-400" />
              </button>

              {onOpenAiAssistant && (
                <button
                  onClick={onOpenAiAssistant}
                  className="bg-amber-400 text-slate-950 text-xs font-bold py-2.5 px-3 rounded-xl flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>دستیار AI</span>
                </button>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Minimal Status Bar (Fits within 100vh with no scrollbar!) */}
      <div className="relative z-10 border-t border-slate-100 bg-white/80 backdrop-blur-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              پشتیبانی مهندسی و خطوط تولید در سراسر کشور
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline text-slate-500">
              تلفن مرکزی: <strong className="font-mono text-slate-800">۰۲۱-۸۸۸۸۱۴۰۳</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="text-[#003F86] hover:text-amber-500 font-bold flex items-center gap-1 transition-colors"
            >
              <span>استعلام قیمت آنلاین</span>
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            {onOpenAiAssistant && (
              <button
                onClick={onOpenAiAssistant}
                className="bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 hover:bg-amber-100 transition-colors"
              >
                <Sparkles className="w-3 h-3 text-[#FF9F14]" />
                <span>محاسبه‌گر هوشمند CFM & FCR</span>
              </button>
            )}
          </div>

        </div>
      </div>

    </section>
  );
};
