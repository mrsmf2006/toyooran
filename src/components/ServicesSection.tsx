import React, { useState } from 'react';
import { 
  Compass, 
  Building2, 
  Boxes, 
  Wrench, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  ArrowLeft, 
  ChevronLeft,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { Service } from '../types';
import { SERVICES } from '../data/mockData';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenConsultation,
}) => {
  const iconMap: Record<string, React.ElementType> = {
    Compass,
    Building2,
    Boxes,
    Wrench,
    ShieldCheck,
    TrendingUp,
  };

  return (
    <section className="py-12 bg-white border-b border-slate-200" id="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003F86] bg-blue-50 px-3 py-1 rounded-full mb-2 border border-blue-100">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>خدمات مبتنی بر نتیجه و خروجی ملموس (Outcome-Driven)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              خدمات مهندسی و پیمانکاری تخصصی
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
              پوشش کامل چرخه عمر فارم از طراحی سوله و تأمین خطوط تا کالیبراسیون و افزایش بهره‌وری
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="bg-[#003F86] hover:bg-[#003366] text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-colors shadow-sm self-start md:self-auto"
          >
            <span>درخواست مشاوره رایگان پروژه</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] || Wrench;
            return (
              <div
                key={service.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#003F86] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Service Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-[#003F86] group-hover:bg-[#003F86] group-hover:text-amber-400 flex items-center justify-center mb-4 transition-colors shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-[#003F86] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4">
                    {service.tagline}
                  </p>

                  {/* Problem Solved Box */}
                  <div className="bg-amber-50/70 border border-amber-200/70 rounded-xl p-3 mb-4">
                    <span className="text-[11px] font-bold text-amber-900 block mb-1">
                      مسئله‌ای که حل می‌کنیم:
                    </span>
                    <p className="text-xs text-amber-950/80 leading-relaxed">
                      {service.problemSolved}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-1.5 mb-6">
                    <span className="text-[11px] font-bold text-slate-600 block mb-1">
                      چه چیزی تحویل می‌گیرید؟
                    </span>
                    {service.whatWeProvide.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full bg-white hover:bg-[#003F86] text-[#003F86] hover:text-white border border-[#003F86] font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                  >
                    <span>جزئیات خدمت و فرآیند اجرا</span>
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
