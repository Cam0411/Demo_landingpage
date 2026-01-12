
import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Timer, ArrowRight } from 'lucide-react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: '02',
    minutes: '45',
    seconds: '12'
  });

  useEffect(() => {
    const target = new Date();
    target.setHours(23, 59, 59, 999);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
        clearInterval(timer);
      } else {
        const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const m = Math.floor((difference / 1000 / 60) % 60);
        const s = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          hours: h.toString().padStart(2, '0'),
          minutes: m.toString().padStart(2, '0'),
          seconds: s.toString().padStart(2, '0')
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-1.5 font-mono text-white font-black text-sm md:text-lg">
      <span className="w-8 md:w-10 text-center bg-white/10 rounded-lg py-1 shadow-inner border border-white/5">{timeLeft.hours}</span>
      <span className="animate-pulse opacity-50 text-blue-400">:</span>
      <span className="w-8 md:w-10 text-center bg-white/10 rounded-lg py-1 shadow-inner border border-white/5">{timeLeft.minutes}</span>
      <span className="animate-pulse opacity-50 text-blue-400">:</span>
      <span className="w-8 md:w-10 text-center bg-blue-500/20 text-blue-400 rounded-lg py-1 border border-blue-500/30">{timeLeft.seconds}</span>
    </div>
  );
};

interface HeroProps {
  onRegisterClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useSpring(0, { stiffness: 40, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 40, damping: 30 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / (innerWidth / 2));
      mouseY.set((clientY - innerHeight / 2) / (innerHeight / 2));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [mouseX, mouseY]);

  const rotateX = useTransform(mouseY, [-1, 1], [4, -4]);
  const rotateY = useTransform(mouseX, [-1, 1], [-4, 4]);

  return (
    <section className="relative pt-28 pb-16 md:pt-56 md:pb-48 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[10%] left-1/4 w-[600px] md:w-[1200px] h-[400px] md:h-[600px] bg-blue-600/10 blur-[150px] rounded-full opacity-60"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 mb-10 backdrop-blur-xl"
        >
          <Sparkles className="w-4 h-4 text-blue-400 fill-blue-400/20" />
          <span className="text-[10px] md:text-xs font-black tracking-[0.2em] text-blue-100 uppercase">Cộng đồng AI Marketing Thực Chiến</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black mb-8 leading-[1.05] tracking-tight text-white uppercase"
        >
          <span className="block opacity-90">Chiến binh</span>
          <span className="text-gradient inline-block drop-shadow-[0_0_40px_rgba(59,130,246,0.35)]">
            Full-stack Marketing
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-300 text-base md:text-2xl max-w-2xl md:max-w-4xl mb-14 md:mb-20 font-medium leading-relaxed opacity-80"
        >
          Làm chủ nghệ thuật thương hiệu và khoa học công nghệ. <br className="hidden md:block" />
          Khoá học Hybrid thực chiến, đột phá tư duy cùng AI đỉnh cao.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: "spring", damping: 20 }}
          style={{ rotateX: !isMobile ? rotateX : 0, rotateY: !isMobile ? rotateY : 0 }}
          className="w-full max-w-5xl"
        >
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-[40px] md:rounded-[64px] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity"></div>
            
            <div className="relative bg-[#0a0f1d]/95 border border-white/10 rounded-[36px] md:rounded-[60px] p-8 md:p-14 backdrop-blur-3xl shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
                
                <div className="flex flex-col items-center lg:items-start">
                   <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded-lg mb-5">
                     <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                     <span className="text-red-500 text-[10px] font-black uppercase tracking-widest">Ưu đãi giới hạn</span>
                   </div>
                   <p className="text-slate-500 text-xs md:text-sm font-bold line-through mb-1 tracking-widest uppercase opacity-60">Giá gốc 3.000.000đ</p>
                   <div className="flex items-baseline gap-2">
                     <span className="text-5xl md:text-8xl font-black text-white tracking-tighter">1.299</span>
                     <span className="text-2xl md:text-4xl font-black text-blue-500 italic">.000đ</span>
                   </div>
                </div>

                <div className="hidden lg:block w-px h-28 bg-white/10"></div>

                <div className="flex flex-col gap-6 md:gap-8 items-center lg:items-end w-full lg:w-auto">
                  <div className="flex items-center gap-4 text-slate-300 font-bold text-sm md:text-base bg-white/5 px-5 md:px-7 py-3 md:py-4 rounded-2xl border border-white/5 shadow-xl">
                    <Timer className="w-5 md:w-6 h-5 md:h-6 text-blue-400" />
                    <div className="flex flex-col items-center lg:items-end">
                      <span className="uppercase tracking-[0.2em] text-[9px] text-slate-500 mb-1">Kết thúc sau</span>
                      <CountdownTimer />
                    </div>
                  </div>
                  
                  <button 
                    onClick={onRegisterClick}
                    className="btn-premium w-full lg:w-auto bg-gradient-to-br from-blue-600 to-indigo-600 text-white px-10 md:px-16 py-5 md:py-7 rounded-2xl font-black text-sm md:text-2xl flex items-center justify-center gap-3 shadow-2xl"
                  >
                    GIA NHẬP ĐỘI NGŨ <ArrowRight className="w-5 md:w-8 h-5 md:h-8" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
