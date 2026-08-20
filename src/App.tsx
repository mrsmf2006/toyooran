import React, { useState, useEffect } from 'react';
import { PageSection, ProductCategory, Project, Product, Service, Article } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProjectsSection } from './components/FeaturedProjectsSection';
import { ProductCatalogSection } from './components/ProductCatalogSection';
import { ServicesSection } from './components/ServicesSection';
import { KnowledgeSection } from './components/KnowledgeSection';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';

// Modals
import { CaseStudyModal } from './components/Modals/CaseStudyModal';
import { ProductDetailModal } from './components/Modals/ProductDetailModal';
import { ServiceDetailModal } from './components/Modals/ServiceDetailModal';
import { ArticleDetailModal } from './components/Modals/ArticleDetailModal';
import { QuoteModal } from './components/Modals/QuoteModal';
import { ConsultationModal } from './components/Modals/ConsultationModal';
import { GlobalSearchModal } from './components/Modals/GlobalSearchModal';
import { AiEngineerAssistantModal } from './components/AiEngineerAssistantModal';
import { AdminPanelModal } from './components/AdminPanelModal';
import { PRODUCTS } from './data/mockData';
import { Sparkles, Bot, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [currentSection, setCurrentSection] = useState<PageSection>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');

  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialProduct, setQuoteInitialProduct] = useState<Product | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);

  // Keyboard shortcut (Alt+A) for Admin
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === 'a' || e.key === 'A' || e.key === 'ش')) {
        setIsAdminPanelOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Navigation handlers
  const handleNavigate = (section: PageSection) => {
    setCurrentSection(section);
    if (section !== 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (cat: ProductCategory) => {
    setSelectedCategory(cat);
    setCurrentSection('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestQuoteForProduct = (product: Product) => {
    setQuoteInitialProduct(product);
    setIsQuoteOpen(true);
  };

  const handleOpenGeneralQuote = () => {
    setQuoteInitialProduct(null);
    setIsQuoteOpen(true);
  };

  const handleSelectProductById = (productId: string) => {
    const found = PRODUCTS.find((p) => p.id === productId);
    if (found) {
      setSelectedProduct(found);
    }
  };

  const isLandingView = currentSection === 'home';

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#333132] font-['Vazirmatn',sans-serif] scroll-smooth">
      
      {/* Top Navbar */}
      <Navbar
        currentSection={currentSection}
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenQuote={handleOpenGeneralQuote}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
        onOpenAdminPanel={() => setIsAdminPanelOpen(true)}
      />

      {/* Main Content Area based on Section */}
      <main className="flex-1 w-full overflow-y-auto">
        
        {/* Home Page: 100vh Top Hero + Circular Category Cards */}
        {currentSection === 'home' && (
          <Hero
            onNavigate={handleNavigate}
            onSelectCategory={handleSelectCategory}
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenQuote={handleOpenGeneralQuote}
            onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
          />
        )}

        {currentSection === 'projects' && (
          <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-[#003F86]">پروژه‌ها و سالن‌های احداث‌شده</h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">نمونه‌های اجراشده مرغداری گوشتی، تخم‌گذار و کارخانجات خوراک</p>
              </div>
              <button
                onClick={() => handleNavigate('home')}
                className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-4 py-2 rounded-xl"
              >
                بازگشت به صفحه اصلی
              </button>
            </div>
            <FeaturedProjectsSection
              onSelectProject={(p) => setSelectedProject(p)}
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
          </div>
        )}

        {currentSection === 'products' && (
          <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-[#003F86]">محصولات، تجهیزات و ماشین‌آلات</h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">خطوط دانخوری، آبخوری، تهویه، پرس پلت و مکمل‌های استاندارد</p>
              </div>
              <button
                onClick={() => handleNavigate('home')}
                className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-4 py-2 rounded-xl"
              >
                بازگشت به صفحه اصلی
              </button>
            </div>
            <ProductCatalogSection
              selectedCategory={selectedCategory}
              onSelectCategory={(cat) => setSelectedCategory(cat)}
              onSelectProduct={(prod) => setSelectedProduct(prod)}
              onRequestQuoteForProduct={handleRequestQuoteForProduct}
            />
          </div>
        )}

        {currentSection === 'services' && (
          <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-[#003F86]">خدمات مهندسی و اجرای پروژه</h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">از نقشه محاسباتی سوله تا نصب خطوط اتوماسیون و خدمات پس از فروش</p>
              </div>
              <button
                onClick={() => handleNavigate('home')}
                className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-4 py-2 rounded-xl"
              >
                بازگشت به صفحه اصلی
              </button>
            </div>
            <ServicesSection
              onSelectService={(s) => setSelectedService(s)}
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
          </div>
        )}

        {currentSection === 'knowledge' && (
          <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-[#003F86]">مجله فنی و مقالات تخصصی</h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">راهنماهای تهویه، بهبود ضریب تبدیل FCR و نگهداری تجهیزات</p>
              </div>
              <button
                onClick={() => handleNavigate('home')}
                className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-4 py-2 rounded-xl"
              >
                بازگشت به صفحه اصلی
              </button>
            </div>
            <KnowledgeSection
              onSelectArticle={(a) => setSelectedArticle(a)}
              onSelectProductById={handleSelectProductById}
            />
          </div>
        )}

        {currentSection === 'about' && (
          <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
              <button
                onClick={() => handleNavigate('home')}
                className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-4 py-2 rounded-xl"
              >
                بازگشت به صفحه اصلی
              </button>
            </div>
            <AboutPage
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onOpenQuote={handleOpenGeneralQuote}
            />
          </div>
        )}

        {currentSection === 'contact' && (
          <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
              <button
                onClick={() => handleNavigate('home')}
                className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-4 py-2 rounded-xl"
              >
                بازگشت به صفحه اصلی
              </button>
            </div>
            <ContactPage
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onOpenQuote={handleOpenGeneralQuote}
            />
          </div>
        )}
      </main>

      {/* Interactive Modals */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={handleRequestQuoteForProduct}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onSelectProductById={handleSelectProductById}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <QuoteModal
        initialProduct={quoteInitialProduct}
        isOpen={isQuoteOpen}
        onClose={() => {
          setIsQuoteOpen(false);
          setQuoteInitialProduct(null);
        }}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onSelectProject={(pr) => setSelectedProject(pr)}
        onSelectArticle={(art) => setSelectedArticle(art)}
      />

      {/* Smart AI Engineer Assistant Modal */}
      <AiEngineerAssistantModal
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
        onOpenQuote={handleOpenGeneralQuote}
      />

      {/* Admin Panel Modal */}
      <AdminPanelModal
        isOpen={isAdminPanelOpen}
        onClose={() => setIsAdminPanelOpen(false)}
      />

    </div>
  );
}
