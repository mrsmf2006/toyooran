import React, { useState } from 'react';
import { 
  Home, 
  User, 
  Package, 
  Wrench, 
  Building, 
  BookOpen, 
  Compass, 
  Sparkles, 
  Settings, 
  Menu, 
  X, 
  Search, 
  FileText,
  Phone,
  ChevronLeft
} from 'lucide-react';
import { PageSection } from '../types';

interface NavbarProps {
  currentSection: PageSection;
  onNavigate: (section: PageSection) => void;
  onOpenConsultation: () => void;
  onOpenQuote: () => void;
  onOpenSearch: () => void;
  onOpenAiAssistant?: () => void;
  onOpenAdminPanel?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSection,
  onNavigate,
  onOpenConsultation,
  onOpenQuote,
  onOpenSearch,
  onOpenAiAssistant,
  onOpenAdminPanel,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact 7 items from the reference UI/UX mockup
  const navItems: { id: PageSection; label: string; icon: React.ElementType }[] = [
    { id: 'home', label: 'خانه', icon: Home },
    { id: 'about', label: 'درباره ما', icon: User },
    { id: 'products', label: 'محصولات', icon: Package },
    { id: 'services', label: 'خدمات', icon: Wrench },
    { id: 'projects', label: 'پروژه‌ها', icon: Building },
    { id: 'knowledge', label: 'مجله', icon: BookOpen },
    { id: 'contact', label: 'تماس با ما', icon: Compass },
  ];

  const handleNavClick = (section: PageSection) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative z-40 bg-white/90 backdrop-blur-md border-b border-slate-100/80 px-4 sm:px-6 lg:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Side: Brand Logo (From UI Mockup) */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer select-none group"
          id="brand-logo-btn"
        >
          {/* Logo Mark: Orange and Blue Bird/Hammer Symbol */}
          <div className="w-10 h-10 rounded-xl bg-[#003F86] flex items-center justify-center relative shadow-sm group-hover:scale-105 transition-transform">
            <div className="w-5 h-5 border-2 border-amber-400 rounded-sm transform rotate-45 flex items-center justify-center bg-[#003F86]">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            </div>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FF9F14] rounded-full border-2 border-white"></span>
          </div>

          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-black text-[#003F86] tracking-tight group-hover:text-blue-900 transition-colors">
              TOYOORAN
            </span>
            <span className="text-[10px] font-bold text-slate-500 tracking-normal -mt-0.5">
              طیوران صنعت پویا
            </span>
          </div>
        </div>

        {/* Center / Right Nav Items (Exact Icons & Labels from UI/UX image) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#FF9F14] bg-amber-50/70 border border-amber-200/50 shadow-xs'
                    : 'text-[#333132] hover:text-[#003F86] hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#FF9F14]' : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls: AI Assistant, Admin Panel, Quote */}
        <div className="hidden lg:flex items-center gap-2">
          
          {/* Smart AI Assistant Button */}
          {onOpenAiAssistant && (
            <button
              onClick={onOpenAiAssistant}
              id="header-ai-btn"
              className="bg-gradient-to-r from-amber-400 to-[#FF9F14] hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-sm hover:shadow active:scale-95 transition-all"
              title="دستیار هوشمند محاسبات و مهندسی طیوران"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>مشاور هوشمند AI</span>
            </button>
          )}

          {/* Admin Portal Button */}
          {onOpenAdminPanel && (
            <button
              onClick={onOpenAdminPanel}
              id="header-admin-btn"
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold p-2 rounded-xl transition-all"
              title="پنل مدیریت یکپارچه طیوران"
            >
              <Settings className="w-4 h-4" />
            </button>
          )}

          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-slate-500 hover:text-[#003F86] hover:bg-slate-100 rounded-xl transition-colors"
            title="جستجوی سریع"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu & Action Buttons */}
        <div className="flex items-center gap-2 lg:hidden">
          {onOpenAiAssistant && (
            <button
              onClick={onOpenAiAssistant}
              className="bg-amber-400 text-slate-950 px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              <span>AI</span>
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Slide-Out Drawer (Exact items matching the second mobile screen in UI/UX image) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[62px] bg-white border-b border-slate-200 shadow-2xl p-4 z-50 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between p-3 rounded-xl text-right font-bold text-sm transition-colors ${
                    isActive
                      ? 'bg-amber-50 text-[#FF9F14] border border-amber-200/60'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#FF9F14]' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  <ChevronLeft className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
            {onOpenAdminPanel && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdminPanel();
                }}
                className="w-full bg-slate-100 text-slate-800 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2"
              >
                <Settings className="w-4 h-4" />
                <span>ورود به پنل ادمین</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full bg-[#003F86] text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>درخواست پیش‌فاکتور سریع</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
