import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Activity, 
  CheckCircle2, 
  ArrowLeft, 
  Sparkles,
  FileCheck,
  ChevronLeft,
  Filter
} from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/mockData';

interface FeaturedProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onOpenConsultation: () => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  onSelectProject,
  onOpenConsultation,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'همه پروژه‌ها' },
    { id: 'broiler', label: 'مرغداری گوشتی' },
    { id: 'layer', label: 'مرغداری تخم‌گذار' },
    { id: 'feed_mill', label: 'کارخانه خوراک' },
    { id: 'breeder', label: 'مادر و اجداد' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.type === activeFilter);

  return (
    <section className="py-12 bg-white border-b border-slate-200" id="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003F86] bg-blue-50 px-3 py-1 rounded-full mb-2 border border-blue-100">
              <FileCheck className="w-3.5 h-3.5 text-amber-500" />
              <span>مستندات اجرایی و مطالعات موردی (Case Studies)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              پروژه‌های شاخص اجرا شده
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
              اثبات عملکرد با نتایج واقعی در ظرفیت، بهبود ضریب تبدیل (FCR) و کاهش تلفات
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  activeFilter === tab.id
                    ? 'bg-[#003F86] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid (Proof-Driven Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-[#003F86] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image & Meta Tags */}
              <div className="relative h-48 overflow-hidden bg-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                
                {/* Type Badge */}
                <div className="absolute top-3 right-3 bg-[#003F86] text-white font-bold text-xs px-3 py-1 rounded-lg shadow-sm">
                  {project.typeTitle}
                </div>

                {/* Location & Year */}
                <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    سال {project.year}
                  </span>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base group-hover:text-[#003F86] transition-colors leading-snug mb-2">
                    {project.title}
                  </h3>

                  {/* Capacity & Key Specs */}
                  <div className="bg-white p-3 rounded-xl border border-slate-200 mb-3 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">ظرفیت پروژه:</span>
                      <strong className="text-slate-800 font-bold">{project.capacity}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">دستاورد کلیدی:</span>
                      <strong className="text-emerald-700 font-bold">{project.keyOutcome}</strong>
                    </div>
                  </div>

                  {/* Equipment Summary Bullets */}
                  <div className="space-y-1 mb-4">
                    <span className="text-[11px] font-bold text-slate-500 block mb-1">
                      تجهیزات و خدمات انجام‌شده:
                    </span>
                    {project.equipmentSummary.slice(0, 2).map((eq, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#003F86] shrink-0" />
                        <span className="line-clamp-1">{eq}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Study CTA Button */}
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full bg-white hover:bg-[#003F86] text-[#003F86] hover:text-white border border-[#003F86] font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <span>مشاهده مطالعه موردی (Case Study)</span>
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Similar Project CTA Box */}
        <div className="mt-10 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-lg sm:text-xl font-bold text-amber-400 mb-1">
              آیا قصد احداث یا ارتقای فارم مرغداری یا کارخانه خوراک دارید؟
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-light">
              کارشناسان مهندسی طیوران صنعت پویا آماده ارائه پیش‌طرح، برآورد اولیه سرمایه‌گذاری و تحلیل بار تهویه پروژه شما هستند.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="shrink-0 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs transition-colors shadow-md flex items-center gap-2"
          >
            <span>درخواست مشاوره و برآورد پروژه</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
