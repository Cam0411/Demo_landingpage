
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, User, Phone, Mail, Sparkles, Loader2, CheckCircle2, AlertCircle, Send } from 'lucide-react';

interface Props {
  onSuccess: () => void;
}

const Registration: React.FC<Props> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // URL Google Script Web App của bạn
  const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbz-ertGGYoGR7M2a5svJly2XCyXMEXiKlKImBS07Nx5Oqr6t61VrRz1KUJ8ZKppfvcjVA/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Kiểm tra sơ bộ URL
    if (GOOGLE_SHEET_URL.includes('YOUR_SCRIPT_ID')) {
       alert("Vui lòng cấu hình URL Google Apps Script trong code!");
       return;
    }

    setStatus('submitting');

    try {
      // Gửi dữ liệu sang Google Apps Script
      // Lưu ý: GAS yêu cầu dùng mode: 'no-cors' nếu không cấu hình CORS phức tạp
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // Giả lập chờ xử lý để tạo hiệu ứng chuyên nghiệp
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus('success');
      onSuccess(); // Kích hoạt confetti từ App.tsx
      
    } catch (error) {
      console.error('Lỗi đăng ký:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="relative w-full max-w-full overflow-hidden">
      <motion.div 
        className="bg-[#0b1426]/98 border border-white/10 rounded-[28px] md:rounded-[60px] p-5 sm:p-8 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] relative overflow-hidden backdrop-blur-3xl"
      >
        {/* Success Overlay with Email Animation */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-50 bg-[#020617] flex flex-col items-center justify-center text-center p-6 md:p-12"
            >
              <motion.div 
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                className="relative mb-8"
              >
                <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full animate-pulse"></div>
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(59,130,246,0.5)]">
                  <Send className="w-10 h-10 md:w-16 md:h-16 text-white" />
                </div>
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -top-2 -right-2 bg-green-500 p-2 rounded-full shadow-lg z-20"
                >
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>

              <h3 className="text-3xl md:text-5xl font-black mb-4 text-white uppercase tracking-tight">WOW! ĐÃ XÁC NHẬN</h3>
              <p className="text-blue-400 font-bold text-lg md:text-2xl mb-6 italic">Chào mừng Chiến binh {formData.name.split(' ').pop()}!</p>
              
              <div className="space-y-4 max-w-md mx-auto">
                <p className="text-slate-300 font-medium text-sm md:text-lg leading-relaxed">
                  Hệ thống đã tự động gửi <span className="text-white font-bold underline decoration-blue-500 underline-offset-4">Email xác nhận</span> kèm bộ quà tặng <span className="text-blue-400">500+ Planning</span> cho bạn.
                </p>
                <p className="text-slate-500 text-xs md:text-sm font-medium italic">
                  *Vui lòng kiểm tra cả hòm thư Spam nếu không thấy trong Inbox.
                </p>
              </div>

              <button 
                onClick={() => setStatus('idle')}
                className="mt-10 text-slate-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
              >
                Quay lại trang chủ
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Notification */}
        <AnimatePresence>
          {status === 'error' && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-10 left-1/2 -translate-x-1/2 z-[60] bg-red-500 text-white px-6 py-3 rounded-full font-bold flex items-center gap-3 shadow-2xl"
            >
              <AlertCircle className="w-5 h-5" /> Lỗi kết nối! Vui lòng thử lại.
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-center mb-8 md:mb-12 relative z-10">
          <div className="inline-flex items-center gap-2 text-blue-400 font-bold mb-3 md:mb-5 uppercase tracking-[0.2em] md:tracking-[0.4em] text-[9px] md:text-[11px] bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
             <Sparkles className="w-3 h-3 md:w-4 md:h-4 fill-blue-400/30" /> CHIẾN BINH FULL-STACK MARKETING
          </div>
          <h2 className="text-3xl md:text-6xl font-black mb-3 md:mb-5 tracking-tighter text-white uppercase leading-none">
            GIA NHẬP <span className="text-blue-500 italic drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">NGAY BÂY GIỜ</span>
          </h2>
          <p className="text-slate-400 text-[11px] sm:text-sm md:text-xl font-medium max-w-md mx-auto leading-relaxed opacity-80">
            Nhận ngay lộ trình chi tiết và ưu đãi <span className="text-white font-bold">67% Học phí</span> chỉ dành cho thành viên mới.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-1.5 md:space-y-2">
              <label className="text-[9px] md:text-[11px] font-black text-slate-500 uppercase tracking-widest ml-1">Họ và Tên</label>
              <div className="relative group">
                <User className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 md:w-4 md:h-4 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Họ và tên của bạn" 
                  className="w-full bg-black/40 border border-white/10 rounded-xl md:rounded-2xl py-3.5 md:py-5 pl-11 md:pl-12 pr-4 md:pr-6 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all text-sm md:text-base font-bold text-white placeholder:text-slate-700"
                />
              </div>
            </div>
            <div className="space-y-1.5 md:space-y-2">
              <label className="text-[9px] md:text-[11px] font-black text-slate-500 uppercase tracking-widest ml-1">Số điện thoại (Zalo)</label>
              <div className="relative group">
                <Phone className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 md:w-4 md:h-4 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                <input 
                  required
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="Ví dụ: 0901234567" 
                  className="w-full bg-black/40 border border-white/10 rounded-xl md:rounded-2xl py-3.5 md:py-5 pl-11 md:pl-12 pr-4 md:pr-6 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all text-sm md:text-base font-bold text-white placeholder:text-slate-700"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1.5 md:space-y-2">
            <label className="text-[9px] md:text-[11px] font-black text-slate-500 uppercase tracking-widest ml-1">Email nhận tài liệu</label>
            <div className="relative group">
              <Mail className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 md:w-4 md:h-4 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
              <input 
                required
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="email@example.com" 
                className="w-full bg-black/40 border border-white/10 rounded-xl md:rounded-2xl py-3.5 md:py-5 pl-11 md:pl-12 pr-4 md:pr-6 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all text-sm md:text-base font-bold text-white placeholder:text-slate-700"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 pt-4 md:pt-6 items-center">
            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="btn-premium w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 md:py-7 rounded-xl md:rounded-2xl font-black text-sm md:text-xl flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 md:w-6 md:h-6 animate-spin" /> ĐANG XỬ LÝ...
                </>
              ) : (
                <>
                  XÁC NHẬN ĐĂNG KÝ & NHẬN MAIL <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
                </>
              )}
            </button>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-y-2 gap-x-6 text-slate-500 text-[8px] md:text-[10px] font-bold uppercase tracking-widest opacity-70">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500" /> Dữ liệu được bảo mật bởi TAS Global
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                Tự động gửi mail quà tặng ngay lập tức
              </div>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Registration;
