
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-black tracking-[0.3em] uppercase text-xs mb-4"
          >
            Vision & Strategy
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black tracking-tight uppercase"
          >
            TRIẾT LÝ ĐÀO TẠO
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-b from-[#0f172a] to-[#020617] border border-white/10 rounded-[48px] md:rounded-[64px] p-8 md:p-20 mb-20 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 p-10 opacity-5">
            <Quote className="w-32 h-32 text-blue-500" />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h3 className="text-2xl md:text-4xl font-black text-blue-400 mb-12 leading-[1.4] italic tracking-tight">
              "Marketing hiện đại là sự giao thoa hoàn hảo giữa nghệ thuật xây dựng thương hiệu và khoa học tối ưu hiệu suất từ công nghệ."
            </h3>
            <p className="text-slate-300 text-lg md:text-2xl leading-relaxed font-medium opacity-80">
              Chương trình đào tạo ra những nhà chiến lược marketing toàn diện, có khả năng kiến tạo câu chuyện thương hiệu lay động và thúc đẩy tăng trưởng bền vững dựa vào xu hướng công nghệ được cập nhật mỗi ngày.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#0b1426]/60 backdrop-blur-3xl border border-white/5 rounded-[48px] p-10 md:p-20 shadow-2xl relative"
        >
           <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
           
           <div className="text-center mb-16 relative z-10">
              <h3 className="text-3xl md:text-5xl font-black text-gradient mb-6">Kết hợp cùng AI Chuyên Gia</h3>
              <p className="text-slate-400 text-base md:text-xl font-medium">Nối liền lý thuyết & thực tiễn với bộ công cụ AI level chuyên gia thực hành ngay tại lớp</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 relative z-10">
              {[
                { step: "01", title: "Học Lý Thuyết", desc: "Tiếp thu kiến thức từ các chuyên gia đầu ngành" },
                { step: "02", title: "Thực Hành Ngay", desc: "Áp dụng trực tiếp vào sản phẩm của doanh nghiệp" },
                { step: "03", title: "Kết Quả Tức Thì", desc: "Ra sản phẩm chất lượng có thể sử dụng được ngay" }
              ].map((item, idx) => (
                <div key={idx} className="text-center group">
                  <div className="text-5xl md:text-7xl font-black text-blue-500/20 group-hover:text-blue-500/40 transition-all duration-500 mb-6 group-hover:-translate-y-2">{item.step}</div>
                  <h4 className="text-2xl md:text-3xl font-black mb-4 text-white uppercase">{item.title}</h4>
                  <p className="text-slate-500 text-sm md:text-lg font-medium">{item.desc}</p>
                </div>
              ))}
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
