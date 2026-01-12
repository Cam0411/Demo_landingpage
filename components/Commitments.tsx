
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle2, Award, Briefcase } from 'lucide-react';

const Commitments: React.FC = () => {
  const topCommitments = [
    {
      title: "Kiến Thức Được Sàng Lọc",
      desc: "Mỗi nội dung đều được kiểm chứng trong thực tế và cập nhật xu hướng mới nhất",
      color: "from-blue-600/20 to-blue-900/40 border-blue-500/30",
      textColor: "text-cyan-400"
    },
    {
      title: "Hỗ Trợ Tận Tình",
      desc: "Đội ngũ chăm sóc và hối thúc học tập mỗi ngày, đảm bảo tiến độ và chất lượng",
      color: "from-purple-600/20 to-purple-900/40 border-purple-500/30",
      textColor: "text-purple-400"
    },
    {
      title: "Kết Quả Đo Lường Được",
      desc: "Mỗi học viên sẽ có bảng đánh giá năng lực và kết nối cơ hội việc làm cụ thể với các doanh nghiệp trong chương trình",
      color: "from-green-600/20 to-green-900/40 border-green-500/30",
      textColor: "text-green-400"
    }
  ];

  const roadmapItems = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Nền Tảng Vững Chắc",
      desc: "Tư duy chiến lược và kiến thức cơ bản",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-green-500" />,
      title: "Phát Triển Kỹ Năng",
      desc: "Thực hành và ứng dụng công cụ AI",
      bgColor: "bg-green-500/10"
    },
    {
      icon: <Award className="w-6 h-6 text-purple-500" />,
      title: "Trình Độ Chuyên Gia",
      desc: "Tối ưu hóa và xây dựng thương hiệu cá nhân",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-blue-500" />,
      title: "Thành Công Nghề Nghiệp",
      desc: "Cơ hội việc làm và phát triển sự nghiệp",
      bgColor: "bg-blue-500/10"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0f1d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-12 uppercase text-white"
          >
            CAM KẾT KHÓA HỌC
          </motion.h2>
        </div>

        {/* Top Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {topCommitments.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 rounded-[32px] border bg-gradient-to-br ${item.color} backdrop-blur-xl flex flex-col gap-4 group hover:scale-[1.02] transition-transform cursor-default`}
            >
              <h3 className={`text-2xl font-black ${item.textColor}`}>{item.title}</h3>
              <p className="text-white/60 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Roadmap Section */}
        <div className="bg-[#111827]/40 border border-white/5 rounded-[48px] p-8 md:p-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-black text-cyan-400">
              Khai mở tư duy giúp học viên hình dung và xây dựng lộ trình phát triển cá nhân
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col gap-4 p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.bgColor}`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-white/40 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitments;
