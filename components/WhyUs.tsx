
import React from 'react';
import { motion } from 'framer-motion';

const WhyUs: React.FC = () => {
  const reasons = [
    { title: "95%", subtitle: "Học phí tiết kiệm", desc: "Tối ưu hóa chi phí đến 20 lần so với các khóa học cùng phân cấp trên thị trường." },
    { title: "20+", subtitle: "Chuyên gia đào tạo", desc: "Học trực tiếp từ đội ngũ chuyên gia thực chiến hàng đầu Việt Nam." },
    { title: "30+", subtitle: "Buổi học thực chiến", desc: "Lộ trình học tập chuyên sâu, giải đáp thắc mắc 1-1 cho từng học viên." },
    { title: "500+", subtitle: "Tài liệu chuyên sâu", desc: "Kho tài liệu đồ sộ gồm Video, Slide, Plan mẫu và Case Study độc quyền." },
    { title: "200+", subtitle: "Năm kinh nghiệm", desc: "Tổng hòa tinh hoa kinh nghiệm từ dàn giảng viên hàng đầu trực tiếp đứng lớp." },
    { title: "06", subtitle: "Tháng đồng hành", desc: "Được mentor liên tục trong 6 tháng để đảm bảo sự tiến bộ và thăng tiến." },
    { title: "100%", subtitle: "Hỗ trợ sự nghiệp", desc: "Kết nối mạng lưới doanh nghiệp uy tín và xây dựng lộ trình sự nghiệp riêng." },
    { title: "TOP 1", subtitle: "Chứng chỉ giá trị", desc: "Sở hữu chứng chỉ uy tín chứng nhận năng lực Marketer Full-stack thế hệ mới." }
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-8xl font-black mb-8 uppercase text-white tracking-tighter"
          >
            TẠI SAO CHỌN <span className="text-blue-500 italic drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">CHÚNG TÔI?</span>
          </motion.h2>
          <p className="text-slate-400 text-base md:text-2xl max-w-3xl mx-auto font-medium opacity-80">Phổ cập kiến thức Marketing chuẩn quốc tế với mức chi phí tối ưu nhất cho học viên.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="p-10 md:p-12 rounded-[40px] bg-[#0b1426]/40 border border-white/5 hover:border-blue-500/40 hover:bg-slate-900/60 transition-all duration-500 text-center group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-5xl md:text-7xl font-black text-blue-500 mb-6 group-hover:scale-110 transition-transform tracking-tighter drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">{item.title}</div>
              <div className="text-base md:text-xl font-black mb-4 text-white uppercase tracking-tight">{item.subtitle}</div>
              <p className="text-slate-400 text-sm md:text-lg leading-relaxed font-medium opacity-80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
