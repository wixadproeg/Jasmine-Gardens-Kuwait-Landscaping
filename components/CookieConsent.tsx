import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('jasmine_cookie_consent');
    if (!consent) {
      // Delay to avoid immediate intrusion
      const timer = setTimeout(() => setShow(true), 3000); 
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('jasmine_cookie_consent', 'accepted');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-24 right-4 left-4 md:left-auto md:right-8 md:bottom-8 z-[1100] max-w-sm animate-slide-up">
      <div className="bg-slate-900/95 backdrop-blur-2xl border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-3xl p-5 md:p-6 overflow-hidden">
        {/* Progress bar effect for aesthetic flair */}
        <div className="absolute top-0 left-0 h-1 bg-green-500 w-full opacity-30"></div>
        
        <div className="flex flex-col gap-4 text-right">
          <div className="flex items-center justify-between mb-1">
            <span className="bg-green-500/10 text-green-500 p-2 rounded-lg text-xs">
              <i className="fa-solid fa-cookie-bite"></i>
            </span>
            <h5 className="text-white font-black text-sm">خصوصية البيانات</h5>
          </div>
          
          <p className="text-slate-400 font-bold text-xs leading-relaxed">
            نستخدم ملفات تعريف الارتباط لضمان أفضل تجربة تصفح لك في موقعنا. استمرارك يعني موافقتك على ذلك.
          </p>
          
          <div className="grid grid-cols-2 gap-2 mt-2">
            <button 
              onClick={handleAccept}
              className="bg-green-600 text-white py-2.5 rounded-xl font-black text-xs hover:bg-green-700 transition-all shadow-lg"
            >
              موافق
            </button>
            <button 
              onClick={() => setShow(false)}
              className="bg-slate-800 text-slate-400 py-2.5 rounded-xl font-bold text-xs hover:bg-slate-700 transition-all border border-slate-700"
            >
              رفض
            </button>
          </div>
          
          <button 
            onClick={() => setShow(false)}
            className="text-[9px] text-slate-500 font-bold hover:text-slate-300 underline underline-offset-4"
          >
            إدارة الخصوصية
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;