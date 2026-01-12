
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, FileText, Settings, BarChart, Globe, Heart } from 'lucide-react';

const Skills: React.FC = () => {
  // Use component references instead of pre-rendered elements to allow proper prop passing and avoid TypeScript errors with cloneElement
  const skills = [
    { icon: Brain, title: "Tư duy AI Marketing", desc: "Phát triển tư duy ứng dụng AI vào marketing hiệu quả" },
    { icon: FileText, title: "Content Strategy", desc: "Xây dựng chiến lược content toàn diện với AI" },
    { icon: Settings, title: "Automation Marketing", desc: "Tự động hóa quy trình marketing từ A-Z" },
    { icon: BarChart, title: "Campaign Optimization", desc: "Tối ưu hóa campaign với AI insights" },
    { icon: Globe, title: "Omnichannel Experience", desc: "Xây dựng trải nghiệm khách hàng đa kênh" },
    { icon: Heart, title: "Community Building", desc: "Xây dựng và phát triển cộng đồng bền vững" }
  ];

  return (
    <section className="py-24 bg-[#0a0f1d] relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-wider"
          >
            NHỮNG KỸ NĂNG ĐẠT ĐƯỢC SAU KHOÁ HỌC
          </motion.h2>
          <p className="text-white/50 text-xl">Sẵn sàng trở thành Marketer toàn với bộ kỹ năng được trang bị có tính cạnh tranh cao trên thị trường lao động</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
          {skills.map((skill, idx) => {
            // Store the component in a capitalized variable to render it in JSX
            const Icon = skill.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-indigo-600/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-xl group-hover:shadow-indigo-500/40">
                  {/* Using the component directly with props instead of cloneElement */}
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{skill.title}</h3>
                <p className="text-white/40">{skill.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
