
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CaseStudySlider: React.FC = () => {
  const images = [
    {
      url: "https://w.ladicdn.com/s750x650/66af1bde8826300012e8f152/z7095464105287_92fe1a1bafa05ec5827d065a0d9eb5ac-20251111132244-rr5yx.jpg",
      title: "Hoạt động giảng dạy trực tiếp",
      desc: "Chuyên gia hướng dẫn thực hành trên sản phẩm thực tế."
    },
    {
      url: "https://w.ladicdn.com/s800x650/66af1bde8826300012e8f152/z7095447717735_97508186ca4cc2d81a96e39d1a27ce4a-20251111132237-kmpzz.jpg",
      title: "Case Study Doanh Nghiệp",
      desc: "Phân tích chiến lược tăng trưởng cho Startup công nghệ."
    },
    {
      url: "https://w.ladicdn.com/s700x600/66af1bde8826300012e8f152/481906691_2182192332197593_3738450335336769284_n-20251111132338-iz-gh.jpg",
      title: "Thảo luận nhóm & Brainstorming",
      desc: "Sáng tạo Big Idea cùng đội ngũ chuyên môn."
    },
    {
      url: "https://w.ladicdn.com/s750x600/66af1bde8826300012e8f152/485753215_970578605256361_5397847747186337382_n-20251111132338-lcz09.jpg",
      title: "Ứng dụng AI vào quy trình",
      desc: "Tối ưu hóa nội dung bằng các công cụ AI hiện đại nhất."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#0a0f1d]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter"
          >
            HÌNH ẢNH HOẠT ĐỘNG & CASE STUDY
          </motion.h2>
          <p className="text-white/50 text-lg md:text-xl font-medium">Cái nhìn thực tế về môi trường đào tạo và kết quả thực thi từ học viên</p>
        </div>

        <div className="relative group max-w-6xl mx-auto">
          <div className="aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-[40px] border border-white/10 relative shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img 
                  src={images[currentIndex].url} 
                  alt={images[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                {/* Robust gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-3xl z-10">
                  <motion.h4 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-5xl font-black mb-4 text-blue-400 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] leading-[1.3] pb-1 uppercase italic"
                  >
                    {images[currentIndex].title}
                  </motion.h4>
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-base md:text-xl text-white/90 font-semibold readable-text drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-relaxed"
                  >
                    {images[currentIndex].desc}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <button 
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-blue-600 active:scale-90 z-20"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button 
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-blue-600 active:scale-90 z-20"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 transition-all duration-300 rounded-full ${currentIndex === idx ? 'w-12 bg-blue-500' : 'w-4 bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySlider;
