
import React from 'react';
import { motion } from 'framer-motion';

const TargetAudience: React.FC = () => {
  const targets = [
    { title: "Marketer", desc: "Muốn xây dựng nền tảng vững chắc và học hỏi từ chuyên gia", color: "bg-red-500/20 border-red-500/20 text-yellow-500" },
    { title: "Chủ Doanh Nghiệp", desc: "Cần hiểu sâu về AI Marketing để tăng doanh số và phát triển thương hiệu bền vững", color: "bg-blue-600/20 border-blue-600/20 text-blue-400" },
    { title: "Freelancer/Agency", desc: "Muốn nâng cao kỹ năng và mở rộng dịch vụ với AI", color: "bg-purple-600/20 border-purple-600/20 text-purple-400" },
    { title: "Người Chuyển Ngành", desc: "Muốn trang bị kiến thức toàn diện để bước vào lĩnh vực marketing", color: "bg-green-600/20 border-green-600/20 text-green-400" }
  ];

  return (
    <section className="py-24 bg-[#0a0f1d]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-12">ĐỐI TƯỢNG PHÙ HỢP</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((target, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 rounded-3xl border ${target.color} flex flex-col items-start gap-4 hover:scale-105 transition-transform cursor-default`}
            >
              <h3 className={`text-2xl font-black ${target.color.split(' ').pop()}`}>{target.title}</h3>
              <p className="text-white/60 leading-relaxed font-medium">{target.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
