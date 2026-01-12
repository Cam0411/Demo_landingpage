
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Flame } from 'lucide-react';

interface Props {
  onRegisterClick: () => void;
}

const Pricing: React.FC<Props> = ({ onRegisterClick }) => {
  const benefits = [
    "30 Module chuyên sâu & bài bản",
    "500+ tài liệu học tập & Plan mẫu",
    "Group Zalo hỗ trợ giải đáp 1-1",
    "Cộng đồng Warrior kết nối chuyên gia",
    "Chứng chỉ Chiến binh Full-stack",
    "Update kiến thức AI mới nhất hàng tháng"
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-4xl mx-auto px-5 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-5xl font-black mb-3 md:mb-4 tracking-tighter text-white uppercase"
          >
            Thông Tin <span className="text-blue-500 text-glow">Gói Học</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-400 text-xs md:text-base font-medium opacity-80"
          >
            Học phí siêu tiết kiệm cho giá trị của 30 Module thực chiến
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-[#0b1426]/90 border border-white/10 rounded-[32px] md:rounded-[48px] overflow-hidden backdrop-blur-3xl shadow-2xl relative"
        >
          <div className="p-6 md:p-14 text-center">
            <h3 className="text-xl md:text-4xl font-black text-cyan-400 mb-2 uppercase tracking-tight">Gói Cá Nhân</h3>
            <p className="text-slate-500 font-bold mb-6 md:mb-10 uppercase tracking-[0.1em] text-[9px] md:text-xs">TAS Global hỗ trợ ưu đãi</p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-500/20 text-orange-500 text-[8px] md:text-xs font-black uppercase tracking-[0.1em] mb-8 md:mb-12">
              <Flame className="w-3 md:w-4 h-3 md:h-4 fill-orange-500" />
              EARLY BIRD - GIẢM NGAY 67%
            </div>

            <div className="mb-1">
              <span className="text-slate-500 line-through text-xs md:text-lg font-bold opacity-50 tracking-tight">Giá gốc: 3.000.000 VND</span>
            </div>
            
            <div className="mb-4">
              <span className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter block md:inline">
                1.299.000 <span className="text-cyan-400 text-2xl md:text-4xl">VNĐ</span>
              </span>
            </div>
            
            <p className="text-blue-400/70 text-[9px] md:text-xs font-bold mb-10 md:mb-14 uppercase tracking-wider">
              Cơ hội sở hữu 30 Module với mức giá tốt nhất
            </p>

            <div className="bg-[#050b18]/80 rounded-[24px] md:rounded-[32px] p-6 md:p-12 text-left border border-white/5 mb-10 md:mb-14 shadow-inner">
              <div className="flex items-center gap-2.5 mb-8">
                <Sparkles className="w-4 md:w-6 h-4 md:h-6 text-orange-400 fill-orange-400" />
                <h4 className="text-sm md:text-2xl font-black text-white uppercase tracking-tight">Quyền lợi học viên:</h4>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 md:gap-4">
                    <div className="mt-1 w-4 md:w-5 h-4 md:h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 md:w-3 h-2.5 md:h-3 text-green-400 stroke-[4]" />
                    </div>
                    <p className="text-slate-300 text-xs md:text-lg font-semibold leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={onRegisterClick}
              className="btn-premium w-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white py-5 md:py-7 rounded-xl md:rounded-2xl font-black text-base md:text-2xl uppercase tracking-wider flex items-center justify-center gap-2 shadow-2xl"
            >
              🎯 ĐĂNG KÝ NGAY
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
