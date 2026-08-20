import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Factory, 
  Layers, 
  CheckCircle2, 
  PhoneCall, 
  MapPin, 
  Clock, 
  Sparkles,
  Users,
  Target
} from 'lucide-react';
import { COMPANY_INFO, TESTIMONIALS_AND_PROOF } from '../data/mockData';

interface AboutPageProps {
  onOpenConsultation: () => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenConsultation,
  onOpenQuote,
}) => {
  const milestones = [
    { year: '۱۳۵۳', title: 'تأسیس و آغاز فعالیت', desc: 'شروع ساخت ادوات اولیه سالن‌های پرورش طیور با بهره‌گیری از دانش روز.' },
    { year: '۱۳۷۵', title: 'توسعه خطوط ماشین‌آلات دانخوری بشقابی', desc: 'طراحی نخستین سیستم‌های دانخوری بشقابی اتوماتیک اوگماتیک در کشور.' },
    { year: '۱۳۸۸', title: 'احداث کارخانه شماره ۲ و تولید خطوط خوراک', desc: 'ورود به حوزه ساخت پرس پلت‌های سنگین صنعتی و اکسترودر پخت خوراک.' },
    { year: '۱۴۰۱', title: 'هوشمندسازی و اتوماسیون کامل سالن‌ها', desc: 'پیاده‌سازی سامانه‌های پایش اقلیم و PLC با مانیتورینگ آنلاین.' },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003F86] bg-blue-50 px-3 py-1 rounded-full mb-3 border border-blue-100">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>نیم قرن پیشگامی در صنعت طیور و دام کشور</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            درباره شرکت طیوران صنعت پویا
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal leading-relaxed">
            بیش از ۵۰ سال تجربه مهندسی در طراحی، ساخت و تجهیز بیش از ۲۰۰ مجتمع بزرگ مرغداری، کارخانه خوراک و فارم‌های پرورشی
          </p>
        </div>

        {/* Story & Core Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              تعهد ما: مهندسی دقیق برای بیشینه‌سازی سودآوری و راندمان
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              طیوران صنعت پویا از زمان تأسیس همواره بر این اصل استوار بوده است که مرغداری صنعتی یک دانش چندرشته‌ای شامل مهندسی سازه، مکانیک سیالات، بهداشت و تغذیه است. از این رو، ما هیچ‌گاه خود را صرفاً فروشنده تجهیزات ندانسته‌ایم؛ بلکه به عنوان شریک فنی و مهندسی پروژه در کنار سرمایه‌گذار و تولیدکننده حضور داریم.
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              استفاده از آلیاژهای فوق‌مقاوم به گاز آمونیاک، ورق‌های گالوانیزه گرم با پوشش ۲۷۵ گرم بر مترمربع و بهینه‌سازی مداوم دینامیک جریان هوا در فن‌ها و پدها، گواه کیفیت بی‌رقیب محصولات ما در اقلیم‌های گوناگون ایران است.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-3">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <span className="text-2xl font-black text-[#003F86] font-mono">۵۰+ سال</span>
                <span className="text-xs text-slate-600 block mt-1">سابقه مهندسی مستمر</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <span className="text-2xl font-black text-[#003F86] font-mono">۲۰۰+</span>
                <span className="text-xs text-slate-600 block mt-1">پروژه صنعتی موفق</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-80 sm:h-96">
            <img
              src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80"
              alt="Toyooran Factory"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 right-6 left-6 text-white text-xs">
              <strong className="block text-sm font-bold text-amber-400 mb-1">
                کارخانجات صنعتی طیوران صنعت پویا
              </strong>
              <span>مجهز به خطوط برش لیزر CNC، پرس برک سنگین و تست‌روم داینامیک هوادهی فن‌ها</span>
            </div>
          </div>
        </div>

        {/* Historical Timeline */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200">
          <h3 className="text-lg sm:text-xl font-black text-slate-900 text-center mb-8">
            مسیر ۵۰ ساله رشد و نوآوری صنعتی
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs relative">
                <span className="text-xs font-mono font-black text-amber-500 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 inline-block mb-3">
                  {m.year}
                </span>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  {m.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Proof & Testimonials */}
        <div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 text-center mb-6">
            دیدگاه مشتریان و مدیران پروژه‌ها
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_AND_PROOF.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4 font-normal">
                  «{item.text}»
                </p>
                <div className="pt-3 border-t border-slate-100">
                  <strong className="text-xs font-bold text-slate-900 block">
                    {item.author}
                  </strong>
                  <span className="text-[11px] text-slate-500">
                    {item.role} ({item.location})
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
