import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  FileText, 
  Wrench, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronLeft,
  Headphones,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface ContactPageProps {
  onOpenConsultation: () => void;
  onOpenQuote: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onOpenConsultation,
  onOpenQuote,
}) => {
  const [activeFormTab, setActiveFormTab] = useState<'consultation' | 'quote' | 'technical' | 'support'>('consultation');
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    projectType: 'مرغداری گوشتی',
    capacity: '',
    city: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003F86] bg-blue-50 px-3 py-1 rounded-full mb-3 border border-blue-100">
            <Headphones className="w-3.5 h-3.5 text-amber-500" />
            <span>مرکز جامع ارتباط و تبدیل (Conversion Hub)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            ارتباط با شرکت طیوران صنعت پویا
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            چهار مسیر اختصاصی جهت دریافت سریع‌ترین پاسخ از واحدهای مهندسی، فروش و خدمات پس از فروش
          </p>
        </div>

        {/* 4 Direct Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div 
            onClick={onOpenConsultation}
            className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#003F86] hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#003F86] group-hover:bg-[#003F86] group-hover:text-amber-400 flex items-center justify-center mb-4 transition-colors">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-1">
                ۱. مشاوره پروژه و سوله
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                بررسی امکان‌سنجی، محاسبات تهویه و جانمایی سالن برای پروژه‌های جدید.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#003F86]">
              <span>ثبت درخواست</span>
              <ChevronLeft className="w-4 h-4" />
            </div>
          </div>

          <div 
            onClick={onOpenQuote}
            className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 group-hover:bg-amber-400 group-hover:text-slate-950 flex items-center justify-center mb-4 transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-1">
                ۲. درخواست پیش‌فاکتور
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                استعلام قیمت رسمی تجهیزات دانخوری، آبخوری، فن‌ها و ماشین‌آلات خوراک.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600">
              <span>دریافت پیش‌فاکتور</span>
              <ChevronLeft className="w-4 h-4" />
            </div>
          </div>

          <div 
            onClick={() => setActiveFormTab('technical')}
            className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#003F86] hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-[#003F86] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-1">
                ۳. ارتباط با واحد فنی
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                پاسخ به سوالات کالیبراسیون، دیاگرام سیم‌کشی و نقشه‌های جانمایی.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
              <span>ارتباط با مهندس</span>
              <ChevronLeft className="w-4 h-4" />
            </div>
          </div>

          <div 
            onClick={() => setActiveFormTab('support')}
            className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-1">
                ۴. خدمات پس از فروش
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                سفارش قطعات یدکی فوری، اعزام تکنسین، سرویس دای و رولر و اورهال.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600">
              <span>درخواست پشتیبانی</span>
              <ChevronLeft className="w-4 h-4" />
            </div>
          </div>

        </div>

        {/* Central Form & Location Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Integrated Progressive Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-black text-slate-900 mb-1">
              ثبت مستقیم پیام و درخواست به مدیریت فنی
            </h3>
            <p className="text-xs text-slate-500 mb-6 font-normal">
              اطلاعات پروژه خود را وارد نمایید تا کارشناس مربوطه در کمترین زمان با شما تماس حاصل نماید.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-2xl space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-900">
                  پیام شما با موفقیت به واحد مربوطه ارجاع گردید
                </h4>
                <p className="text-xs text-emerald-800">
                  به زودی با شماره {form.phone} تماس حاصل خواهیم کرد.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-bold text-[#003F86] underline"
                >
                  ثبت پیام جدید
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      نام و نام خانوادگی: *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="مثال: مهندس حسینی"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:bg-white focus:outline-none focus:border-[#003F86]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      شماره تماس همراه: *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:bg-white focus:outline-none focus:border-[#003F86] font-mono text-left"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      نوع پروژه / فعالیت:
                    </label>
                    <select
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:bg-white focus:outline-none focus:border-[#003F86]"
                    >
                      <option value="مرغداری گوشتی">مرغداری گوشتی</option>
                      <option value="مرغداری تخم‌گذار">مرغداری تخم‌گذار</option>
                      <option value="کارخانه خوراک و مکمل">کارخانه خوراک و مکمل</option>
                      <option value="مادر و اجداد">مادر و اجداد</option>
                      <option value="دامپروری">دامپروری و گاو شیری</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      استان و شهر پروژه:
                    </label>
                    <input
                      type="text"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      placeholder="مثال: مازندران، بابل"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:bg-white focus:outline-none focus:border-[#003F86]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    شرح درخواست یا سوال فنی:
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="نکات مهم، ظرفیت مورد نظر، مدل دستگاه یا قطعه یدکی..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:bg-white focus:outline-none focus:border-[#003F86]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-8 py-3 rounded-xl text-xs transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <span>ارسال پیام به واحد مهندسی</span>
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Direct Info Box */}
          <div className="space-y-4">
            
            <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 space-y-4">
              <h3 className="font-extrabold text-amber-400 text-sm">
                اطلاعات تماس مستقیم
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">تلفن دفتر مرکزی:</span>
                    <span className="font-mono font-bold text-white">{COMPANY_INFO.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">واحد فروش مستقیم:</span>
                    <span className="font-mono font-bold text-white">{COMPANY_INFO.directSalesPhone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Wrench className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">امداد فنی و خدمات پس از فروش:</span>
                    <span className="font-mono font-bold text-white">{COMPANY_INFO.technicalSupportPhone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">پست الکترونیک:</span>
                    <span className="font-mono text-slate-200">{COMPANY_INFO.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">ساعات پاسخگویی:</span>
                    <span className="text-slate-200">{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900">
                موقعیت کارخانجات و دفاتر
              </h4>
              <div className="space-y-2 text-slate-600">
                <p>
                  <strong className="text-slate-800">دفتر مرکزی:</strong> {COMPANY_INFO.address}
                </p>
                <p>
                  <strong className="text-slate-800">کارخانه:</strong> {COMPANY_INFO.factoryAddress}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
