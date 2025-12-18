import React, { useState, useEffect, useRef } from 'react';
import { COMPANY_INFO } from '../constants';
import CountdownTimer from './CountdownTimer';

const DiscountPopup: React.FC = () => {
  const [show, setShow] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show popup after EXACTLY 40 seconds of presence
    const timer = setTimeout(() => {
      setShow(true);
    }, 40000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (show) {
      // Auto close after EXACTLY 15 seconds of visibility
      const autoCloseTimer = setTimeout(() => {
        setShow(false);
      }, 15000);

      // Close on click outside
      const handleClickOutside = (event: MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
          setShow(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        clearTimeout(autoCloseTimer);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-all animate-fade-in">
      <div 
        ref={popupRef}
        className="animate-popup relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        <button 
          onClick={() => setShow(false)}
          className="absolute top-6 right-6 bg-slate-800 hover:bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-white z-10 transition-colors"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        
        <div className="relative h-40 overflow-hidden">
          <img 
            src="https://i.ibb.co/ZzqBPMrQ/15-20.png" 
            className="w-full h-full object-cover" 
            alt="خصم خاص"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        
        <div className="p-8 text-center space-y-6">
          <div className="inline-block bg-green-500/10 text-green-500 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-500/20">
            عرض حصري اليوم
          </div>
          
          <h2 className="text-3xl font-black text-white tracking-tight">
            خصم <span className="text-green-500">15%</span> فوري
          </h2>
          
          <p className="text-slate-400 font-bold text-sm leading-relaxed">
            لأول <span className="text-white font-black text-lg">20 طلب</span> فقط! احجز موعدك الآن قبل انتهاء الوقت المتبقي.
          </p>
          
          <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
            <CountdownTimer />
          </div>
          
          <a 
            href={`${COMPANY_INFO.whatsapp}?text=أهلاً، أرغب بتفعيل كود الخصم 15% المخصص لأول 20 طلب`}
            target="_blank"
            className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-black text-lg shadow-xl transition-all pulse-btn border-b-4 border-green-800 active:border-b-0"
          >
            <i className="fa-brands fa-whatsapp text-2xl"></i>
            احجز بخصمك الآن
          </a>
          
          <p className="text-[10px] text-slate-500 font-bold">
            هذه النافذة ستختفي تلقائياً خلال ثوانٍ
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscountPopup;