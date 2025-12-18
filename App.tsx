import React, { useState, useEffect, useRef, useMemo } from 'react';
import { COMPANY_INFO, SERVICES, BLOG_POSTS, TESTIMONIALS, MAIN_LOGO, HERO_IMAGES } from './constants';
import { Service, Testimonial } from './types';
import CountdownTimer from './components/CountdownTimer';
import DiscountPopup from './components/DiscountPopup';
import CookieConsent from './components/CookieConsent';

/**
 * Jasmine Neural Background Engine - Dark Version
 * High-performance canvas-based particle system with dark theme
 */
const JasmineNeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      rotation: number;
      rotationSpeed: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.size = Math.random() * 6 + 3;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.03;
        // Vibrant colors for dark background
        const colors = [
          'rgba(34, 197, 94, 0.7)',  // Green
          'rgba(255, 255, 255, 0.8)', // White (Jasmine)
          'rgba(187, 247, 208, 0.6)', // Light Green
          'rgba(74, 222, 128, 0.5)'   // Bright Green
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        if (this.x < 0) this.x = canvas!.width;
        if (this.x > canvas!.width) this.x = 0;
        if (this.y < 0) this.y = canvas!.height;
        if (this.y > canvas!.height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.beginPath();
        // Drawing a refined jasmine leaf shape
        ctx.moveTo(0, -this.size);
        ctx.bezierCurveTo(this.size * 0.8, -this.size * 0.5, this.size * 0.8, this.size * 0.5, 0, this.size);
        ctx.bezierCurveTo(-this.size * 0.8, this.size * 0.5, -this.size * 0.8, -this.size * 0.5, 0, -this.size);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.min(Math.floor(window.innerWidth / 25), 80);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const drawConnections = () => {
      if (!ctx) return;
      const maxDistance = 180;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34, 197, 94, ${0.25 * (1 - distance / maxDistance)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      // Dark background fill
      ctx.fillStyle = '#020617'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[0]"
    />
  );
};

/**
 * Metric Counter - Dynamic Digital Circle Version
 */
const MetricCounter: React.FC<{ value: number, label: string, suffix?: string }> = ({ value, label, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2500;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = value / steps;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="flex flex-col items-center group">
      <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
        {/* Animated Circle Border */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            className="stroke-slate-800 fill-none"
            strokeWidth="4"
          />
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            className="stroke-green-500 fill-none transition-all duration-1000 ease-out"
            strokeWidth="4"
            strokeDasharray="283"
            strokeDashoffset={isVisible ? 283 - (283 * Math.min(count/value, 1)) : 283}
            strokeLinecap="round"
          />
        </svg>
        <div className="text-xl md:text-2xl font-black text-white group-hover:scale-110 transition-transform flex flex-col items-center">
          <span className="leading-none">{count.toLocaleString()}{suffix}</span>
        </div>
      </div>
      <div className="mt-4 text-slate-400 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-center max-w-[100px] leading-tight">{label}</div>
    </div>
  );
};

/**
 * Rebalanced Testimonial Card
 */
const TestimonialCard: React.FC<{ item: Testimonial }> = ({ item }) => (
  <div className="bg-slate-900/60 backdrop-blur-md p-8 rounded-[2.5rem] shadow-2xl border border-slate-800 relative group hover:shadow-green-900/20 transition-all duration-500">
    <div className="absolute -top-4 right-8 w-10 h-10 bg-green-600 text-white rounded-xl flex items-center justify-center text-xl shadow-lg">
      <i className="fa-solid fa-quote-right"></i>
    </div>
    <div className="flex gap-1 text-yellow-400 mb-4 scale-90 origin-right">
      {[...Array(item.rating)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
    </div>
    <p className="text-base md:text-lg text-slate-300 font-bold leading-relaxed mb-6 italic">"{item.text}"</p>
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-xl text-slate-400 font-black">
        {item.name.charAt(0)}
      </div>
      <div>
        <h4 className="font-black text-white text-base">{item.name}</h4>
        <span className="text-green-500 font-bold text-xs">عميل موثق</span>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [view, setView] = useState<'home' | 'service-details' | 'blog' | 'privacy'>('home');
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('الكل');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    const heroTimer = setInterval(() => setHeroIndex(p => (p + 1) % HERO_IMAGES.length), 4000);
    return () => { window.removeEventListener('scroll', handleScroll); clearInterval(heroTimer); };
  }, []);

  const openWhatsApp = (msg: string = "أهلاً حدائق الياسمين، أرغب في حجز موعد معاينة مجانية لمشروعي") => {
    window.open(`${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const navigateToHome = () => { setView('home'); window.scrollTo(0,0); setMenuOpen(false); };
  const navigateToService = (s: Service) => { setActiveService(s); setView('service-details'); window.scrollTo(0,0); setMenuOpen(false); };

  const filteredServices = useMemo(() => {
    if (filter === 'الكل') return SERVICES;
    return SERVICES.filter(s => s.title.includes(filter) || s.description.includes(filter));
  }, [filter]);

  const Layout = ({ children }: { children?: React.ReactNode }) => (
    <div className="min-h-screen selection:bg-green-600 selection:text-white bg-slate-950 relative overflow-hidden text-white">
      {/* High-Performance Neural Background */}
      <JasmineNeuralBackground />
      
      {/* Essential Notifications */}
      <CookieConsent />
      <DiscountPopup />
      
      {/* Navigation - Enhanced with Visual Links */}
      <nav className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-500 ${scrolled || menuOpen ? 'bg-slate-950/80 backdrop-blur-xl shadow-2xl py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={navigateToHome}>
            <img src={MAIN_LOGO} alt="Logo" className="h-12 md:h-16 transition-all group-hover:scale-105" />
            <div className={`hidden lg:block leading-none text-white`}>
              <h1 className="font-black text-lg tracking-tight">حدائق الياسمين</h1>
              <span className="text-[8px] font-bold opacity-60 tracking-[0.2em] uppercase">Premium Kuwait Landscape</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
            {SERVICES.slice(0, 4).map(s => (
              <button key={s.id} onClick={() => navigateToService(s)} className={`text-sm font-bold hover:text-green-500 transition-colors text-white/80`}>
                {s.title}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => setMenuOpen(!menuOpen)} className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-md transition-all ${scrolled || menuOpen ? 'bg-green-600 text-white' : 'bg-white/10 text-white backdrop-blur-md'}`}>
              <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
            </button>
            <button onClick={() => openWhatsApp()} className="hidden md:flex bg-green-600 text-white px-8 py-3 rounded-xl font-black text-base shadow-lg pulse-btn">اطلب معاينة</button>
          </div>
        </div>

        {/* Dynamic Menu Panel */}
        <div className={`absolute top-full left-0 right-0 bg-slate-900 shadow-2xl overflow-hidden transition-all duration-700 ${menuOpen ? 'max-h-[100vh] border-t border-slate-800' : 'max-h-0'}`}>
          <div className="container mx-auto px-6 py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="space-y-4">
              <h4 className="text-green-500 font-black text-[10px] uppercase tracking-widest border-b border-slate-800 pb-2">خدماتنا الرئيسية</h4>
              <div className="grid grid-cols-1 gap-2">
                {SERVICES.map((s) => (
                  <button key={s.id} onClick={() => navigateToService(s)} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 text-slate-300 font-bold transition-all text-right group">
                    <span className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center text-green-500 group-hover:bg-green-600 group-hover:text-white transition-all"><i className={`fa-solid ${s.icon}`}></i></span>
                    {s.title}
                  </button>
                ))}
              </div>
            </div>
            <div className="hidden lg:block space-y-4">
              <h4 className="text-slate-500 font-black text-[10px] uppercase tracking-widest border-b border-slate-800 pb-2">روابط سريعة</h4>
              <div className="flex flex-col gap-4 py-4">
                <button onClick={navigateToHome} className="text-2xl font-black text-white hover:text-green-500 text-right">الرئيسية</button>
                <button onClick={() => { setView('blog'); setMenuOpen(false); }} className="text-2xl font-black text-white hover:text-green-500 text-right">المدونة</button>
                <button onClick={() => { setView('privacy'); setMenuOpen(false); }} className="text-2xl font-black text-white hover:text-green-500 text-right">سياسة الخصوصية</button>
              </div>
            </div>
            <div className="bg-slate-950 p-8 rounded-[2rem] text-white flex flex-col justify-between border border-slate-800">
              <div>
                <h4 className="text-green-500 font-black mb-4">اتصال مباشر</h4>
                <p className="text-3xl font-black mb-2">{COMPANY_INFO.phone}</p>
                <p className="text-slate-500 text-sm font-bold">{COMPANY_INFO.location}</p>
              </div>
              <button onClick={() => openWhatsApp()} className="w-full bg-green-600 text-white py-4 rounded-xl font-black text-lg mt-8 shadow-xl">تحدث معنا الآن</button>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10">{children}</main>

      {/* Optimized Footer with Visual Navigation */}
      <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-right">
            <div className="space-y-6">
              <img src={MAIN_LOGO} className="h-20" alt="Footer Logo" />
              <p className="text-slate-400 font-bold text-base leading-relaxed">الرواد في الكويت لتنسيق الحدائق والمظلات العصرية. نحول المساحات الفارغة إلى جنات غناء بضمانات ملكية.</p>
              <div className="flex gap-4 justify-end">
                <a href={COMPANY_INFO.whatsapp} target="_blank" className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-xl hover:bg-green-700 transition"><i className="fa-brands fa-whatsapp"></i></a>
                <a href={COMPANY_INFO.socials.instagram} target="_blank" className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-xl hover:bg-pink-600 transition"><i className="fa-brands fa-instagram"></i></a>
                <a href={COMPANY_INFO.socials.snapchat} target="_blank" className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-xl hover:bg-yellow-500 transition"><i className="fa-brands fa-snapchat"></i></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-black mb-6 text-green-500">خدماتنا</h4>
              <ul className="space-y-3 text-slate-400 font-bold">
                {SERVICES.map(s => (
                  <li key={s.id} onClick={() => navigateToService(s)} className="cursor-pointer hover:text-white transition-colors flex items-center justify-end gap-2 text-right">
                    {s.title} <i className="fa-solid fa-chevron-left text-[8px]"></i>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-black mb-6 text-green-500">تواصل معنا</h4>
              <ul className="space-y-4 text-slate-400 font-bold">
                <li className="flex gap-3 justify-end items-center text-right"><span>{COMPANY_INFO.location}</span> <i className="fa-solid fa-map-pin text-green-500"></i></li>
                <li className="flex gap-3 justify-end items-center text-right"><span>{COMPANY_INFO.phone}</span> <i className="fa-solid fa-phone text-green-500"></i></li>
                <li className="flex gap-3 justify-end items-center text-right"><span>{COMPANY_INFO.email}</span> <i className="fa-solid fa-envelope text-green-500"></i></li>
              </ul>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl text-center border border-slate-800 shadow-2xl">
              <h4 className="text-xl font-black mb-4">عرض محدود</h4>
              <CountdownTimer />
              <button onClick={() => openWhatsApp("تفعيل الخصم 15%")} className="w-full bg-green-600 py-3 rounded-xl font-black text-lg mt-6 shadow-xl hover:bg-green-700">احصل على الخصم</button>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-600">
            <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. جميع الحقوق محفوظة.</p>
            <p className="flex items-center gap-1">تم التطوير بواسطة <span className="text-slate-400">Wixadpro-Eg 2025</span></p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-[600] flex flex-col gap-4">
        <button onClick={() => openWhatsApp()} className="w-16 h-16 bg-green-500 text-white rounded-2xl flex items-center justify-center text-4xl shadow-2xl pulse-btn active:scale-90 transition-all"><i className="fa-brands fa-whatsapp"></i></button>
        <a href={`tel:${COMPANY_INFO.phone}`} className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl shadow-2xl active:scale-90 transition-all"><i className="fa-solid fa-phone"></i></a>
      </div>
    </div>
  );

  if (view === 'privacy') {
    return (
      <Layout>
        <section className="pt-32 pb-20 container mx-auto px-4 text-right">
          <h1 className="text-4xl font-black mb-10 text-white">سياسة الخصوصية</h1>
          <div className="bg-slate-900/80 backdrop-blur-md p-10 rounded-3xl shadow-sm prose prose-lg text-slate-300 font-bold leading-relaxed border border-slate-800">
            <p>نلتزم في حدائق الياسمين بحماية خصوصية عملائنا. بياناتكم تُستخدم فقط للتواصل المهني وتنسيق المواعيد.</p>
          </div>
          <button onClick={navigateToHome} className="mt-10 bg-green-600 text-white px-10 py-4 rounded-xl font-black">العودة للرئيسية</button>
        </section>
      </Layout>
    );
  }

  if (view === 'service-details' && activeService) {
    return (
      <Layout>
        {/* Service Landing Page Design */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column: Content */}
              <div className="space-y-8 text-right order-2 lg:order-1">
                <button onClick={navigateToHome} className="text-green-500 font-bold flex items-center justify-end gap-2 hover:gap-4 transition-all">العودة للرئيسية <i className="fa-solid fa-arrow-left"></i></button>
                <div className="inline-flex items-center gap-3 bg-green-500/10 px-4 py-2 rounded-xl text-green-500 font-black text-sm uppercase border border-green-500/20">
                  <span>خدمة معتمدة</span>
                  <i className={`fa-solid ${activeService.icon}`}></i>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">{activeService.title}</h1>
                <p className="text-xl text-slate-300 font-bold leading-relaxed">{activeService.fullContent}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "ضمان حقيقي لمدة 10 سنوات",
                    "خامات ألمانية عالية الجودة",
                    "تركيب مهني دقيق وسريع",
                    "صيانة دورية مجانية لأول سنة",
                    "مقاومة تامة لحرارة الكويت",
                    "تصاميم عصرية مبتكرة"
                  ].map((f, i) => (
                    <div key={i} className="flex items-center justify-end gap-3 bg-slate-900/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-800 shadow-sm font-bold text-slate-200">
                      <span>{f}</span>
                      <i className="fa-solid fa-check-circle text-green-500"></i>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-900 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-slate-800">
                  <div className="text-right">
                    <p className="text-slate-400 text-sm font-bold mb-1">ابدأ مشروعك اليوم بخصم 15%</p>
                    <h3 className="text-white text-2xl font-black">جاهز للمعاينة المجانية؟</h3>
                  </div>
                  <button onClick={() => openWhatsApp(`أرغب في حجز خدمة: ${activeService.title}`)} className="w-full md:w-auto bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-lg pulse-btn">اطلب الخدمة الآن</button>
                </div>
              </div>

              {/* Right Column: Visuals */}
              <div className="space-y-6 order-1 lg:order-2">
                <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl border-[8px] border-slate-800">
                   <img src={activeService.images[0]} className="w-full h-[500px] object-cover transition-transform duration-[5s] group-hover:scale-110" alt={activeService.title} />
                   <div className="absolute top-6 left-6 bg-green-600 text-white px-6 py-2 rounded-full font-black shadow-xl">
                    {activeService.price ? `يبدأ من ${activeService.price}` : 'معاينة مجانية'}
                   </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {activeService.images.slice(1).map((img, i) => (
                    <div key={i} className="h-32 rounded-2xl overflow-hidden border-4 border-slate-800 shadow-lg group">
                      <img src={img} className="w-full h-full object-cover group-hover:scale-125 transition-all" alt="Service Gallery" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Choose Section in Landing Page */}
            <div className="mt-24 text-center space-y-12">
               <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">لماذا يختارنا أصحاب النخبة؟</h2>
               <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-slate-900/40 backdrop-blur-md p-10 rounded-[3rem] shadow-sm border border-slate-800 space-y-4">
                    <i className="fa-solid fa-medal text-5xl text-yellow-500"></i>
                    <h4 className="text-2xl font-black text-white">جودة لا تضاهى</h4>
                    <p className="text-slate-400 font-bold leading-relaxed">نختار أجود الخامات العالمية التي تناسب مناخ الخليج القاسي لضمان استدامة مشروعك.</p>
                  </div>
                  <div className="bg-slate-900/40 backdrop-blur-md p-10 rounded-[3rem] shadow-sm border border-slate-800 space-y-4">
                    <i className="fa-solid fa-clock text-5xl text-blue-500"></i>
                    <h4 className="text-2xl font-black text-white">التزام بالمواعيد</h4>
                    <p className="text-slate-400 font-bold leading-relaxed">نقدر وقت عملائنا ونلتزم بجدول زمني دقيق يبدأ من المعاينة وحتى التسليم النهائي.</p>
                  </div>
                  <div className="bg-slate-900/40 backdrop-blur-md p-10 rounded-[3rem] shadow-sm border border-slate-800 space-y-4">
                    <i className="fa-solid fa-hand-holding-dollar text-5xl text-green-500"></i>
                    <h4 className="text-2xl font-black text-white">أسعار تنافسية</h4>
                    <p className="text-slate-400 font-bold leading-relaxed">نقدم لك أفضل قيمة مقابل السعر مع تسهيلات وخصومات حقيقية لأول 20 عميل.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Sticky Action Bar for Mobile Conversions */}
        <div className="fixed bottom-0 left-0 right-0 z-[550] lg:hidden bg-slate-950/90 backdrop-blur-xl border-t border-slate-800 p-4 shadow-2xl flex items-center justify-between animate-popup">
          <div className="text-right">
            <p className="text-[10px] font-black text-green-500 mb-1 uppercase tracking-widest">تواصل فوري</p>
            <p className="text-sm font-black text-white line-clamp-1">{activeService.title}</p>
          </div>
          <button onClick={() => openWhatsApp(`طلب مباشر للخدمة: ${activeService.title}`)} className="bg-green-600 text-white px-8 py-3 rounded-xl font-black shadow-lg">احجز الآن</button>
        </div>
      </Layout>
    );
  }

  if (view === 'blog') {
    return (
      <Layout>
        <section className="pt-32 pb-20 container mx-auto px-4 text-right">
          <h1 className="text-5xl font-black mb-16 text-white tracking-tight">مدونة <span className="text-green-500">الخبير</span></h1>
          <div className="grid md:grid-cols-2 gap-10">
            {BLOG_POSTS.map(post => (
              <div key={post.id} className="bg-slate-900/60 backdrop-blur-md rounded-[3rem] overflow-hidden shadow-2xl hover:shadow-green-900/10 transition-all border border-slate-800">
                <img src={post.image} className="w-full h-80 object-cover" alt={post.title} />
                <div className="p-10 space-y-4">
                  <span className="text-green-500 font-black text-sm">{post.date}</span>
                  <h3 className="text-3xl font-black text-white">{post.title}</h3>
                  <p className="text-slate-400 font-bold text-lg leading-relaxed">{post.excerpt}</p>
                  <button onClick={() => openWhatsApp(`أرغب في معرفة المزيد عن: ${post.title}`)} className="text-white font-black text-xl border-b-4 border-green-500 pb-2">اقرأ المزيد</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Sales-Focused Hero Section */}
      <header className="relative min-h-[95svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {HERO_IMAGES.map((img, idx) => (
            <img key={idx} src={img} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2s] ${heroIndex === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`} alt="Hero Background" />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="inline-block mb-6 p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="bg-green-600 px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase">رقم #1 في الكويت لتنسيق الحدائق</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight drop-shadow-2xl">
            نحول حديقتك <br /> <span className="text-green-500 italic">إلى جنة خضراء</span>
          </h2>
          <p className="text-lg md:text-2xl mb-12 text-slate-100 font-bold opacity-90 leading-snug max-w-4xl mx-auto">نقدم أرقى حلول تنسيق الحدائق، تركيب الثيل، والمظلات العصرية بأعلى جودة عالمية وضمان حقيقي لمدة 10 سنوات.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button onClick={() => openWhatsApp()} className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-2xl font-black text-2xl shadow-2xl transition-all pulse-btn border-b-8 border-green-800">ابدأ معاينتك المجانية</button>
            <button onClick={() => document.getElementById('services')?.scrollIntoView({behavior:'smooth'})} className="w-full md:w-auto bg-white/10 hover:bg-white/20 text-white px-12 py-6 rounded-2xl font-black text-2xl backdrop-blur-md border border-white/20 transition-all">استعرض أعمالنا</button>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-70 scale-90">
             <div className="flex items-center gap-2"><i className="fa-solid fa-shield-check text-green-500"></i> <span className="font-bold">ضمان 10 سنوات</span></div>
             <div className="flex items-center gap-2"><i className="fa-solid fa-truck text-green-500"></i> <span className="font-bold">خدمة لجميع مناطق الكويت</span></div>
             <div className="flex items-center gap-2"><i className="fa-solid fa-award text-green-500"></i> <span className="font-bold">خامات ألمانية معتمدة</span></div>
          </div>
        </div>
      </header>

      {/* Counter Hub - Digital Circle Style */}
      <section className="py-20 bg-transparent relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around gap-10">
            <MetricCounter value={1500} label="عميل متميز" />
            <MetricCounter value={1850} label="تصميم عصري" />
            <MetricCounter value={35} label="مهندس وخبير" />
            <MetricCounter value={15} label="سنة خبرة" />
          </div>
        </div>
      </section>

      {/* Direct Conversion Services Hub */}
      <section id="services" className="py-24 bg-transparent">
        <div className="container mx-auto px-4 text-right">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">خدماتنا <span className="text-green-500">المتميزة</span></h2>
            <p className="text-slate-400 font-bold text-xl max-w-2xl mx-auto">نقدم حلولاً متكاملة لتجميل المساحات الخارجية وتحويلها لبيئة مريحة وفخمة.</p>
            <div className="flex justify-center gap-3 flex-wrap mt-10">
              {['الكل', 'حدائق', 'مظلات', 'ديوانيات', 'ثيل', 'بديل الخشب'].map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setFilter(cat)}
                  className={`px-8 py-3 rounded-xl font-black text-lg transition-all shadow-md ${filter === cat ? 'bg-green-600 text-white' : 'bg-slate-900/80 text-slate-400 hover:bg-slate-800'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((s) => (
              <div key={s.id} className="group bg-slate-900/60 backdrop-blur-md rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-green-900/20 transition-all duration-700 border border-slate-800 flex flex-col">
                <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => navigateToService(s)}>
                  <img src={s.images[0]} alt={s.title} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
                  <div className="absolute top-6 left-6 bg-green-600 text-white px-4 py-1.5 rounded-full font-black text-xs shadow-lg">{s.price ? s.price : 'معاينة مجانية'}</div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center justify-end gap-5 mb-6">
                     <h3 className="text-2xl font-black text-white group-hover:text-green-500 transition-colors">{s.title}</h3>
                     <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-2xl text-green-500 group-hover:bg-green-600 group-hover:text-white transition-all"><i className={`fa-solid ${s.icon}`}></i></div>
                  </div>
                  <p className="text-slate-400 font-bold text-base mb-8 leading-relaxed line-clamp-2">{s.description}</p>
                  <div className="mt-auto flex gap-4">
                    <button onClick={() => navigateToService(s)} className="flex-1 bg-slate-800/80 text-white py-3 rounded-xl font-black text-base hover:bg-slate-700 transition border border-slate-700">التفاصيل</button>
                    <button onClick={() => openWhatsApp(`أرغب في حجز خدمة: ${s.title}`)} className="flex-1 bg-green-600 text-white py-3 rounded-xl font-black text-base hover:bg-green-700 shadow-lg border-b-4 border-green-800 active:border-b-0">اطلب الآن</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Hub */}
      <section className="py-24 bg-transparent overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">ماذا يقول عملاؤنا؟</h2>
            <p className="text-slate-500 text-xl font-bold italic">نفتخر بتقديم أفضل تجربة لخدمة العملاء في الكويت.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TESTIMONIALS.map(item => <TestimonialCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      {/* Visual Map Footer */}
      <section className="h-[500px] relative overflow-hidden group border-t border-slate-900">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111283.47966774619!2d47.88636415714417!3d29.280145455806655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9ae2f57a3e83%3A0xc3f9547d25e4c023!2z2KfZhNmB2LHZiNin2YbZitipLCDYp9mE2YPZiNmK2Ko!5e0!3m2!1sar!2skw!4v1716382900000!5m2!1sar!2skw" 
          className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-[4s]"
          style={{ border: 0 }} allowFullScreen loading="lazy" 
        ></iframe>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950/95 backdrop-blur-md p-10 rounded-[3rem] shadow-2xl border-[10px] border-slate-800 text-center pointer-events-none transform group-hover:scale-105 transition-all">
          <i className="fa-solid fa-location-dot text-green-500 text-6xl mb-6 float-animation"></i>
          <h4 className="text-2xl font-black text-white mb-2">تفضل بزيارتنا</h4>
          <p className="font-bold text-slate-400 text-base">{COMPANY_INFO.location}</p>
          <div className="mt-6 pt-6 border-t border-slate-800 font-black text-lg text-green-500 uppercase tracking-tighter">نغطي كافة مناطق الكويت</div>
        </div>
      </section>
    </Layout>
  );
};

export default App;