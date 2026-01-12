
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Philosophy from './components/Philosophy';
import WhyUs from './components/WhyUs';
import Skills from './components/Skills';
import CourseModules from './components/CourseModules';
import Instructors from './components/Instructors';
import Commitments from './components/Commitments';
import CaseStudySlider from './components/CaseStudySlider';
import TargetAudience from './components/TargetAudience';
import Registration from './components/Registration';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';

const App: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterSuccess = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      setIsModalOpen(false);
    }, 5000);
  };

  const openModal = () => setIsModalOpen(true);

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#020617]">
      {/* Dynamic Enhanced Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-[#1d3883]/20 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-blue-600/10 blur-[180px] rounded-full"></div>
      </div>

      <Navbar onRegisterClick={openModal} />
      
      <main className="relative z-10">
        <Hero onRegisterClick={openModal} />
        <Partners />
        <Philosophy />
        <WhyUs />
        <Skills />
        <Instructors />
        <CourseModules />
        <CaseStudySlider />
        <Commitments />
        <TargetAudience />
        <Pricing onRegisterClick={openModal} />
      </main>

      {/* Registration Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto no-scrollbar outline-none"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 sm:top-5 sm:right-5 md:top-10 md:right-10 z-[110] p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white shadow-lg transition-all active:scale-90"
                aria-label="Close"
              >
                <X className="w-5 h-5 md:w-7 md:h-7" />
              </button>
              <Registration onSuccess={handleRegisterSuccess} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-16 border-t border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
             <div className="font-black text-xl md:text-2xl tracking-tighter mb-2 uppercase text-white">
                CHIẾN BINH <span className="text-blue-500">FULL-STACK MARKETING</span>
             </div>
             <p className="text-white/40 text-[10px] md:text-sm font-medium uppercase tracking-[0.2em]">
                Đào tạo Marketer thực chiến thế hệ mới.
             </p>
          </div>
          <p className="text-white/30 text-[10px] md:text-sm">
            © 2025 Chiến binh Full-stack Marketing. Nền tảng thực chiến tối ưu.
          </p>
        </div>
      </footer>

      <AnimatePresence>
        {showConfetti && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-[200] flex items-center justify-center"
          >
             <div className="relative w-full h-full flex items-center justify-center bg-black/80 backdrop-blur-xl">
                {Array.from({ length: 80 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 0, y: 0, opacity: 1, scale: Math.random() * 0.5 + 0.5, rotate: 0 }}
                    animate={{ 
                      x: (Math.random() - 0.5) * 1600, 
                      y: (Math.random() - 0.5) * 1600,
                      opacity: 0,
                      rotate: Math.random() * 1080
                    }}
                    transition={{ duration: 4, ease: "easeOut" }}
                    className="absolute w-3 h-3 md:w-5 md:h-5 rounded-full"
                    style={{ backgroundColor: ['#3b82f6', '#1d3883', '#60a5fa', '#ffffff', '#fbbf24'][i % 5] }}
                  />
                ))}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0, y: 40 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  className="bg-white/5 backdrop-blur-3xl px-8 py-10 md:px-16 md:py-16 rounded-[40px] md:rounded-[60px] border border-white/20 text-center shadow-[0_0_120px_rgba(59,130,246,0.6)] mx-4 max-w-xl"
                >
                  <Sparkles className="w-16 h-16 md:w-28 md:h-28 text-blue-400 mx-auto mb-6 animate-pulse" />
                  <h2 className="text-2xl md:text-6xl font-black mb-4 text-white uppercase tracking-tighter">SUCCESS!</h2>
                  <p className="text-white/80 text-sm md:text-2xl font-medium leading-relaxed">Chào mừng bạn đã gia nhập đội ngũ Chiến Binh Marketing thế hệ mới.</p>
                </motion.div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
