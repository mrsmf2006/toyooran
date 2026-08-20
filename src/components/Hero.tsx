import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import heroPoultryImg from '../assets/images/poultry_livestock_hero_1787240267874.jpg';
import { 
  ChevronLeft, 
  ChevronDown,
  Building2, 
  Factory,
  Fan,
  Pill,
  ShieldCheck,
  ArrowDown,
  PhoneCall,
  Package,
  Layers,
  Sparkles
} from 'lucide-react';
import { PageSection, ProductCategory } from '../types';

interface HeroProps {
  onNavigate: (section: PageSection) => void;
  onSelectCategory: (cat: ProductCategory) => void;
  onOpenConsultation: () => void;
  onOpenQuote: () => void;
  onOpenAiAssistant?: () => void;
}

interface CircleCategoryCard {
  id: ProductCategory;
  title: string;
  categoryEn: string;
  icon: React.ElementType;
  desc: string;
  badge: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
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
  const cardsSectionRef = useRef<HTMLDivElement>(null);

  const scrollToCards = () => {
    if (cardsSectionRef.current) {
      cardsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Exact 4 Categories in required order:
  // 1. ماشین آلات (Machinery)
  // 2. تجهیزات (Equipment)
  // 3. ساخت سوله و سالن (Shed & Hall Construction)
  // 4. خوراک و دارو (Feed & Pharma)
  const categoryCards: CircleCategoryCard[] = [
    {
      id: 'machinery',
      title: 'ماشین آلات',
      categoryEn: 'Heavy Machinery & Mills',
      icon: Factory,
      desc: 'پرس پلت‌های گیربکسی، کاندیشنرهای دوجداره تمام استیل، اکسترودر، آسیاب چکشی و میکسر دوشفت صنعتی',
      badge: 'مهندسی سنگین',
      accentColor: '#003F86',
      badgeBg: 'bg-blue-50',
      badgeText: 'text-[#003F86]',
      specs: ['پرس پلت ۲ الی ۲۰ تن/ساعت', 'کاندیشنر استیل ۳۰۴ دوجداره', 'شاخص استحکام PDI بالای ۹۶٪']
    },
    {
      id: 'ventilation',
      title: 'تجهیزات',
      categoryEn: 'Farm Systems & Automation',
      icon: Fan,
      desc: 'سیستم‌های اتوماتیک دانخوری بشقابی، خطوط آبخوری نیپل ضدچکه، هواکش‌های ۱۴۰ و کنترل هوشمند اقلیم سالن',
      badge: 'اتوماسیون سالن',
      accentColor: '#FF9F14',
      badgeBg: 'bg-amber-50',
      badgeText: 'text-amber-700',
      specs: ['دانخوری بشقابی اوگماتیک', 'آبخوری نیپل ۳۶۰ درجه استیل', 'هواکش ۱۴۰ با دمپر گالوانیزه']
    },
    {
      id: 'structure',
      title: 'ساخت سوله و سالن',
      categoryEn: 'Shed & Farm Construction',
      icon: Building2,
      desc: 'طراحی محاسباتی سازه، ساخت اسکلت فلزی با دهانه استاندارد، پوشش ساندویچ پانل و عایق‌بندی کامل اقلیمی',
      badge: 'پروژه صفر تا صد',
      accentColor: '#003F86',
      badgeBg: 'bg-emerald-50',
      badgeText: 'text-emerald-700',
      specs: ['محاسبه دقیق بار باد و برف', 'ساندویچ پانل پلی‌یورتان استاندارد', 'نصب سریع با ضمانت مهندسی']
    },
    {
      id: 'feed_pharma',
      title: 'خوراک و دارو',
      categoryEn: 'Feed, Pharma & Supplements',
      icon: Pill,
      desc: 'کنسانتره، پری‌میکس، جیره متعادل، ویتامین‌های محلول، پروبیوتیک‌های تخصصی و ضدعفونی‌کننده‌های سالن',
      badge: 'سلامت و رشد گله',
      accentColor: '#FF9F14',
      badgeBg: 'bg-purple-50',
      badgeText: 'text-purple-700',
      specs: ['کنسانتره ۲.۵٪ و ۵٪ گوشتی', 'ویتامینه و اسیدهای آمینه ضروری', 'بهینه‌سازی ضریب تبدیل FCR']
    },
  ];

  return (
    <div className="w-full">
      
      {/* ========================================================================= */}
      {/* 1. MINIMAL CORPORATE HERO SECTION: (Header + Subheader + Slogan + Image + 2 Buttons) */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[calc(100vh-64px)] min-h-[580px] flex flex-col justify-between overflow-hidden bg-white bg-subtle-waves selection:bg-amber-400">
        
        {/* Subtle Ambient Decorative Vector Waves & Light Accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.08, 1],
              opacity: [0.35, 0.5, 0.35]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.12, 1],
              opacity: [0.3, 0.45, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-3xl"
          />
          
          <svg 
            viewBox="0 0 1000 800" 
            className="absolute right-0 top-0 w-full h-full object-cover opacity-20"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M100,200 C400,100 300,600 800,500 C950,450 900,200 1000,100" 
              stroke="#003F86" 
              strokeWidth="1.2" 
              strokeDasharray="4 6" 
            />
            <path 
              d="M50,400 C300,250 500,750 900,600" 
              stroke="#FF9F14" 
              strokeWidth="1.5" 
            />
          </svg>
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 flex-1 flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
            
            {/* Right Column: Slogan, Header, Subheader, 2 Buttons */}
            <motion.div 
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col items-start text-right space-y-5 sm:space-y-6"
            >
              
              {/* Short Slogan / Tagline Badge */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="inline-flex items-center gap-2.5 bg-slate-100/90 border border-slate-200/90 px-3.5 py-1.5 rounded-full shadow-2xs"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF9F14]"></span>
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  نیم قرن نوآوری و مهندسی پایدار در صنعت دام و طیور کشور
                </span>
                <span className="bg-amber-400/20 text-amber-800 text-[10px] font-black px-2 py-0.5 rounded-full">
                  EST. 1974
                </span>
              </motion.div>

              {/* Main Header */}
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#003F86] leading-[1.25] tracking-tight"
              >
                شرکت طیوران صنعت پویا
              </motion.h1>

              {/* Subheader */}
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal"
              >
                طراحی و ساخت پیشرفته‌ترین خطوط ماشین‌آلات پلت و خوراک دام و طیور، اتوماسیون سالن‌های مرغداری و اجرای تخصصی سازه و سوله‌های صنعتی با بالاترین استانداردهای مهندسی.
              </motion.p>

              {/* EXACTLY 2 BUTTONS: محصولات & تماس با ما */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex items-center gap-3.5 pt-2 w-full sm:w-auto"
              >
                {/* 1. محصولات (Products Button) */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={scrollToCards}
                  id="hero-products-btn"
                  className="bg-[#003F86] hover:bg-blue-900 text-white font-bold px-6 py-3.5 rounded-2xl text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-xl transition-all cursor-pointer"
                >
                  <Package className="w-5 h-5 text-amber-400" />
                  <span>محصولات</span>
                  <ChevronDown className="w-4 h-4 text-white/80" />
                </motion.button>

                {/* 2. تماس با ما (Contact Us Button) */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onNavigate('contact')}
                  id="hero-contact-btn"
                  className="bg-white hover:bg-slate-50 text-slate-800 hover:text-[#003F86] font-bold px-6 py-3.5 rounded-2xl text-sm sm:text-base flex items-center justify-center gap-2 border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <PhoneCall className="w-5 h-5 text-[#003F86]" />
                  <span>تماس با ما</span>
                  <ChevronLeft className="w-4 h-4 text-slate-400" />
                </motion.button>
              </motion.div>

              {/* Subtle Trust Indicators */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="pt-4 flex flex-wrap items-center gap-5 text-xs text-slate-500 border-t border-slate-100 w-full"
              >
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="font-medium text-slate-700">گارانتی معتبر و پشتیبانی فنی مهندسی</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span className="font-medium text-slate-700">بیش از ۵۰ سال سابقه درخشان صنعتی</span>
                </div>
              </motion.div>

            </motion.div>

            {/* Left Column: Creative Animated Image Showcase */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center w-full"
            >
              <div className="relative w-full max-w-md lg:max-w-none">
                
                {/* Decorative Glowing Backdrop Frame */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#003F86] via-amber-400 to-[#003F86] rounded-[32px] opacity-20 blur-lg transition duration-1000 group-hover:opacity-40 pointer-events-none"></div>
                
                {/* Main Image Container */}
                <motion.div 
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-[28px] overflow-hidden border border-slate-200/90 shadow-2xl bg-white"
                >
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-slate-900">
                    <img 
                      src={heroPoultryImg}
                      alt="فناوری و تجهیزات مدرن مرغداری و دامپروری طیوران صنعت پویا" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent pointer-events-none" />

                    {/* Image Caption / Overlay Badge */}
                    <div className="absolute bottom-4 right-4 left-4 flex items-center justify-between text-white z-10">
                      <div>
                        <span className="text-[11px] font-medium text-amber-300 block">
                          مهندسی و تجهیز سالن‌های مدرن دام و طیور
                        </span>
                        <h3 className="text-sm font-bold text-white drop-shadow-sm">
                          خطوط اتوماسیون، تهویه و تغذیه هوشمند
                        </h3>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-amber-300">
                        <Factory className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Micro-Badge */}
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-3 sm:-right-4 bg-white/95 backdrop-blur-md border border-slate-200/90 p-3 rounded-2xl shadow-xl flex items-center gap-3 z-20"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#003F86] flex items-center justify-center font-black">
                    <Building2 className="w-5 h-5 text-[#003F86]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-medium block">تجهیز و احداث</span>
                    <span className="text-xs font-black text-slate-800">بیش از ۲۴۰ پروژه موفق</span>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll Down Indicator to Section 2 (Category Cards) */}
        <div className="relative z-10 border-t border-slate-100 bg-white/90 backdrop-blur-xs py-2.5 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>دفتر مرکزی و نمایشگاه ماشین‌آلات: تهران | کارخانه: شهرک صنعتی</span>
            </div>

            <button
              onClick={scrollToCards}
              className="flex items-center gap-1.5 text-xs font-bold text-[#003F86] hover:text-[#FF9F14] bg-slate-50 hover:bg-amber-50 border border-slate-200 px-3.5 py-1.5 rounded-full transition-all group shadow-2xs cursor-pointer"
            >
              <span>مشاهده دسته‌بندی محصولات و تجهیزات</span>
              <ArrowDown className="w-3.5 h-3.5 text-amber-500 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 2. CATEGORY CARDS SECTION: Reached with 1 Scroll / Click (Screen 2) */}
      {/* ========================================================================= */}
      <section 
        ref={cardsSectionRef}
        id="categories-section"
        className="relative w-full min-h-[calc(100vh-64px)] flex flex-col justify-between overflow-hidden bg-slate-50/70 border-t border-slate-200/80 bg-subtle-waves selection:bg-amber-400 py-6 sm:py-8"
      >
        
        {/* Section Title Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-3 text-center sm:text-right flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60 inline-block mb-1">
              دسته‌بندی تخصصی طیوران
            </span>
            <h2 className="text-lg sm:text-xl font-black text-[#003F86]">
              خطوط تولید، تجهیزات و خدمات صفر تا صد مرغداری
            </h2>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="self-center sm:self-auto text-xs bg-white hover:bg-slate-100 text-[#003F86] font-bold px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs transition-colors flex items-center gap-1 cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-500" />
            <span>ارتباط با واحد فروش و مهندسی</span>
          </button>
        </div>

        {/* Main Center Area: 5 Columns on Desktop (4 Category Circles + 1 Brand Card) */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2 max-w-7xl mx-auto w-full">
          
          {/* Desktop & Laptop Layout: 5 Columns side by side */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-3.5 xl:gap-5 w-full items-center justify-center">
            
            {/* 4 Circular Category Cards */}
            {categoryCards.map((card, idx) => {
              const Icon = card.icon;
              const isHovered = hoveredIndex === idx;
              return (
                <div
                  key={idx}
                  id={`hero-category-card-${card.id}`}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => onSelectCategory(card.id)}
                  className="group relative cursor-pointer flex flex-col items-center justify-between p-3.5 xl:p-4 rounded-3xl transition-all duration-300 bg-white hover:bg-white border border-slate-200/80 hover:border-amber-400 shadow-sm hover:shadow-xl h-[420px] xl:h-[460px] backdrop-blur-sm"
                >
                  {/* Top Badge & Number */}
                  <div className="w-full flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider">
                      0{idx + 1}
                    </span>
                    <span className={`text-[10px] font-bold ${card.badgeBg} ${card.badgeText} px-2.5 py-0.5 rounded-full border border-slate-200/60 shadow-2xs`}>
                      {card.badge}
                    </span>
                  </div>

                  {/* Circular Icon Container (Replaced Hexagon & Photos with Multi-Ring Circles) */}
                  <div className="relative w-36 h-36 xl:w-44 xl:h-44 my-auto flex items-center justify-center">
                    
                    {/* Outer Pulsing Decorative Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-100/40 to-blue-50/50 border border-slate-200/90 group-hover:border-amber-400/80 group-hover:scale-105 transition-all duration-300 shadow-xs"></div>
                    
                    {/* Secondary Inner Ring */}
                    <div className="relative w-28 h-28 xl:w-34 xl:h-34 rounded-full bg-gradient-to-br from-white to-slate-50 border border-slate-200 group-hover:border-amber-300 shadow-inner flex items-center justify-center group-hover:shadow-md transition-all duration-300">
                      
                      {/* Background Soft Color Accent */}
                      <div className="w-20 h-20 xl:w-24 xl:h-24 rounded-full bg-slate-50 group-hover:bg-amber-50/70 flex items-center justify-center transition-colors duration-300">
                        
                        {/* Vector Icon */}
                        <Icon className="w-10 h-10 xl:w-12 xl:h-12 text-[#003F86] group-hover:text-[#FF9F14] group-hover:scale-110 transition-all duration-300 stroke-[1.8]" />
                        
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
                    
                    {/* Circular Action Button */}
                    <div className="mt-3 w-8 h-8 rounded-full bg-[#FF9F14] group-hover:bg-amber-400 text-white group-hover:text-slate-950 flex items-center justify-center shadow-sm group-hover:scale-110 transition-all duration-200">
                      <ChevronLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                </div>
              );
            })}

            {/* 5th Brand Card: Toyooran Brand Emblem (Deep Navy Solid Card) */}
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

              {/* Circular Brand Logo Emblem in Center */}
              <div className="relative w-28 h-28 xl:w-36 xl:h-36 my-auto flex items-center justify-center z-10">
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-amber-400 to-[#FF9F14] p-1 shadow-lg group-hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full bg-[#003F86] flex flex-col items-center justify-center p-2 text-center border-2 border-amber-400/30">
                    <div className="w-6 h-6 border-2 border-amber-400 rounded-sm transform rotate-45 flex items-center justify-center mb-1 bg-[#003F86]">
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
                  className="mt-3 w-full bg-gradient-to-r from-amber-400 to-[#FF9F14] hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>مشاوره تخصصی رایگان</span>
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

          {/* Mobile & Tablet Layout (2x2 Grid + Bottom Brand Section) */}
          <div className="lg:hidden flex flex-col items-center gap-4 w-full py-2">
            
            {/* 2x2 Grid of Circular Category Cards */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              {categoryCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    onClick={() => onSelectCategory(card.id)}
                    className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col items-center text-center cursor-pointer hover:border-amber-400 active:scale-95 transition-all"
                  >
                    <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-200/80 p-2 mb-2 flex items-center justify-center shadow-inner">
                      <Icon className="w-8 h-8 text-[#003F86]" />
                    </div>
                    <h4 className="font-bold text-xs text-slate-900">{card.title}</h4>
                    <span className="text-[10px] text-slate-500">{card.categoryEn}</span>
                    <div className="mt-2 w-6 h-6 rounded-full bg-[#FF9F14] text-white flex items-center justify-center">
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Brand Section */}
            <div className="w-full max-w-sm text-center bg-white border border-slate-200/80 p-4 rounded-2xl shadow-sm">
              <h3 className="text-base font-extrabold text-[#003F86]">طیوران صنعت پویا</h3>
              <span className="text-xs font-bold text-amber-500 tracking-wider">TOYOORAN</span>
              <p className="text-xs text-slate-600 mt-1">راهکارهای جامع برای صنعت دام، طیور و آبزیان</p>

              <div className="mt-3 flex items-center gap-2">
                <button
                  onClick={onOpenConsultation}
                  className="flex-1 bg-[#003F86] text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>درخواست مشاوره</span>
                  <ChevronLeft className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Minimal Status Bar */}
        <div className="relative z-10 border-t border-slate-200/80 bg-white/80 backdrop-blur-xs py-2 px-4 sm:px-8">
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
                onClick={() => onNavigate('contact')}
                className="text-[#003F86] hover:text-amber-500 font-bold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>مشاوره و تماس با ما</span>
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
};


