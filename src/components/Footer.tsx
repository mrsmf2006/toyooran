import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronLeft, 
  Building2, 
  ShieldCheck, 
  Award,
  Factory,
  FileText
} from 'lucide-react';
import { PageSection, ProductCategory } from '../types';
import { COMPANY_INFO, CATEGORIES_DATA } from '../data/mockData';

interface FooterProps {
  onNavigate: (section: PageSection) => void;
  onSelectCategory: (cat: ProductCategory) => void;
  onOpenConsultation: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectCategory,
  onOpenConsultation,
  onOpenQuote,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      
      {/* Top Pre-Footer Callout */}
      <div className="bg-[#002b5e] border-b border-blue-900/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-right">
            <h3 className="text-lg sm:text-xl font-black text-white">
              آماده شروع پروژه جدید یا نوسازی سالن مرغداری خود هستید؟
            </h3>
            <p className="text-xs sm:text-sm text-blue-200 mt-1 font-light">
              مشاوران فنی ما آماده بررسی نقشه‌ها و ارائه پیش‌فاکتور مهندسی هستند.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-3 rounded-xl text-xs flex items-center gap-1.5 transition-colors shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>درخواست پیش‌فاکتور آنلاین</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-slate-900/90 hover:bg-slate-900 text-white font-bold px-5 py-3 rounded-xl text-xs flex items-center gap-1.5 border border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>تماس فوری: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Company Profile & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#003F86] border border-amber-400 rounded-xl flex items-center justify-center font-black text-amber-400 text-sm">
                TY
              </div>
              <div>
                <span className="text-base font-black text-white block">
                  طیوران صنعت پویا
                </span>
                <span className="text-[11px] font-mono text-amber-400 font-bold tracking-wider">
                  TOYOORAN INDUSTRIAL GROUP
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              شرکت طیوران صنعت پویا با بیش از نیم قرن سابقه تخصصی، طراح و مجری بزرگ‌ترین پروژه‌های پرورش طیور گوشتی، تخم‌گذار و کارخانجات صنعتی تولید خوراک دام، طیور و آبزیان در ایران و منطقه است.
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Award className="w-4 h-4 text-amber-400" />
                ۵۰+ سال تجربه مهندسی
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                ۲۰۰+ پروژه اجرا شده
              </span>
            </div>
          </div>

          {/* Col 2: Fast Navigation */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider mb-4 border-r-2 border-amber-400 pr-2">
              دسترسی سریع
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-3 h-3 text-slate-600" />
                  صفحه اصلی
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('projects')} 
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-3 h-3 text-slate-600" />
                  پروژه‌ها و مطالعات موردی
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('products')} 
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-3 h-3 text-slate-600" />
                  محصولات و تجهیزات
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')} 
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-3 h-3 text-slate-600" />
                  خدمات مهندسی و سوله
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('knowledge')} 
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-3 h-3 text-slate-600" />
                  پایگاه دانش و آموزش
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-3 h-3 text-slate-600" />
                  ارتباط با ما و ثبت مشاوره
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider mb-4 border-r-2 border-amber-400 pr-2">
              دسته‌بندی تجهیزات
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES_DATA.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onNavigate('products');
                      onSelectCategory(cat.id as ProductCategory);
                    }}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1 text-slate-400"
                  >
                    <ChevronLeft className="w-3 h-3 text-slate-600" />
                    {cat.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Addresses */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-wider mb-4 border-r-2 border-amber-400 pr-2">
              ارتباط با دفتر مرکزی و کارخانه
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>دفتر مرکزی: {COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <Factory className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>کارخانه: {COMPANY_INFO.factoryAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono">{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono">{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} تمامی حقوق مادی و معنوی متعلق به شرکت طیوران صنعت پویا (TOYOORAN) می‌باشد.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>استاندارد ISO 9001:2015</span>
            <span>|</span>
            <span>تأییدیه نظام مهندسی کشاورزی</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
