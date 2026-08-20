import React, { useState, useMemo } from 'react';
import { 
  Wrench, 
  Download, 
  FileText, 
  CheckCircle2, 
  ChevronLeft, 
  Search, 
  SlidersHorizontal,
  Sparkles,
  Zap,
  Tag
} from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { PRODUCTS, CATEGORIES_DATA } from '../data/mockData';

interface ProductCatalogSectionProps {
  selectedCategory: ProductCategory | 'all';
  onSelectCategory: (cat: ProductCategory | 'all') => void;
  onSelectProduct: (product: Product) => void;
  onRequestQuoteForProduct: (product: Product) => void;
}

export const ProductCatalogSection: React.FC<ProductCatalogSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onSelectProduct,
  onRequestQuoteForProduct,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyIndustrialMachines, setOnlyIndustrialMachines] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCat = selectedCategory === 'all' || p.category === selectedCategory;
      const matchSearch = 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      const matchIndustrial = !onlyIndustrialMachines || p.isIndustrialMachine;
      return matchCat && matchSearch && matchIndustrial;
    });
  }, [selectedCategory, searchQuery, onlyIndustrialMachines]);

  return (
    <section className="py-12 bg-[#F8FAFC] border-b border-slate-200" id="products-catalog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003F86] bg-blue-50 px-3 py-1 rounded-full mb-2 border border-blue-100">
              <Wrench className="w-3.5 h-3.5 text-amber-500" />
              <span>کاتالوگ فنی تجهیزات مرغداری و ماشین‌آلات خط خوراک</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              نمایشگاه و فروشگاه محصولات
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
              مشخصات دقیق مهندسی، استاندارد قطعات و امکان دریافت کاتالوگ و پیش‌فاکتور رسمی
            </p>
          </div>

          {/* Quick Industrial Machine Toggle */}
          <button
            onClick={() => setOnlyIndustrialMachines(!onlyIndustrialMachines)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              onlyIndustrialMachines
                ? 'bg-amber-400 text-slate-950 shadow-sm ring-2 ring-amber-200'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Zap className="w-4 h-4 text-amber-600" />
            <span>فقط ماشین‌آلات خط تولید خوراک (پرس پلت، آسیاب، میکسر)</span>
          </button>
        </div>

        {/* Category Tabs & Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs mb-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Categories Horizontal Scroll */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#003F86] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              همه دسته‌ها
            </button>
            {CATEGORIES_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id as ProductCategory)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#003F86] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجوی نام یا کد قطعه (مثلا: ۴۲۰ یا فن)..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pr-9 pl-3 py-2 text-xs focus:bg-white focus:outline-none focus:border-[#003F86] transition-colors"
            />
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-2.5" />
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
            <p className="text-slate-500 text-sm font-medium">
              محصولی با این مشخصات یافت نشد. لطفاً عبارت جستجو یا دسته‌بندی را تغییر دهید.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between group overflow-hidden bg-white ${
                  product.isIndustrialMachine
                    ? 'border-amber-300 shadow-sm hover:shadow-xl'
                    : 'border-slate-200 hover:border-[#003F86] hover:shadow-md'
                }`}
              >
                {/* Image & Code Tag */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                    {product.categoryTitle}
                  </div>

                  {/* Code Badge */}
                  <div className="absolute top-3 left-3 bg-amber-400 text-slate-950 text-[11px] font-mono font-black px-2.5 py-1 rounded-lg shadow-xs">
                    {product.code}
                  </div>

                  {product.isIndustrialMachine && (
                    <div className="absolute bottom-3 right-3 bg-[#003F86] text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                      <Zap className="w-3 h-3 text-amber-400" />
                      <span>ماشین‌آلات سنگین صنعتی</span>
                    </div>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base group-hover:text-[#003F86] transition-colors leading-snug mb-1.5">
                      {product.name}
                    </h3>
                    
                    {product.nameEn && (
                      <span className="text-[11px] font-mono text-slate-400 block mb-2">
                        {product.nameEn}
                      </span>
                    )}

                    <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4 line-clamp-2">
                      {product.shortDescription}
                    </p>

                    {/* Technical Specs Key Values Preview */}
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 space-y-1.5 mb-4 text-xs">
                      {product.specs.slice(0, 2).map((spec, i) => (
                        <div key={i} className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-500">{spec.label}:</span>
                          <strong className="text-slate-800 font-semibold">{spec.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="flex-1 bg-slate-100 hover:bg-[#003F86] text-slate-700 hover:text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>مشخصات و کاتالوگ</span>
                    </button>

                    <button
                      onClick={() => onRequestQuoteForProduct(product)}
                      className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1 transition-colors shadow-xs"
                      title="استعلام پیش‌فاکتور"
                    >
                      <span>قیمت</span>
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
