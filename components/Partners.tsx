
import React from 'react';
import { motion } from 'framer-motion';

const Partners: React.FC = () => {
  return (
    <section className="py-12 bg-transparent overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[10px] md:text-xs font-black text-white/30 uppercase tracking-[0.5em]"
        >
          Đối tác & Đơn vị đồng hành
        </motion.p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap items-center py-4">
          <img 
            src="https://w.ladicdn.com/66af1bde8826300012e8f152/thiet-ke-chua-co-ten-20251111132151-7v1sl.png" 
            alt="Partners Banner" 
            className="h-16 md:h-24 object-contain mx-4 opacity-40 hover:opacity-100 transition-opacity"
          />
          <img 
            src="https://w.ladicdn.com/66af1bde8826300012e8f152/thiet-ke-chua-co-ten-20251111132151-7v1sl.png" 
            alt="Partners Banner" 
            className="h-16 md:h-24 object-contain mx-4 opacity-40 hover:opacity-100 transition-opacity"
          />
        </div>

        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap items-center py-4">
          <img 
            src="https://w.ladicdn.com/66af1bde8826300012e8f152/thiet-ke-chua-co-ten-20251111132151-7v1sl.png" 
            alt="Partners Banner" 
            className="h-16 md:h-24 object-contain mx-4 opacity-40 hover:opacity-100 transition-opacity"
          />
          <img 
            src="https://w.ladicdn.com/66af1bde8826300012e8f152/thiet-ke-chua-co-ten-20251111132151-7v1sl.png" 
            alt="Partners Banner" 
            className="h-16 md:h-24 object-contain mx-4 opacity-40 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
          @keyframes marquee2 {
            0% { transform: translateX(100%); }
            100% { transform: translateX(0%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .animate-marquee2 {
            animation: marquee2 40s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Partners;
