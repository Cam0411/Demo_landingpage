
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, User, Phone, Mail, Sparkles, Loader2, CheckCircle2, Send, Zap, ExternalLink, Ticket, Gift } from 'lucide-react';

interface Props {
  onSuccess: () => void;
}

const Registration: React.FC<Props> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // URL Google Script Web App
  const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbwjIChjBziuF5yBOvJdiNLGMP81qVGef4IGHxhEhQcboxKQD3ZLPxCR13JkIZ_wehpMIQ/exec';
  const ZALO_COMMUNITY_LINK = 'https://zalo.me/g/ajjuyi572';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Thu thập dữ liệu Touchpoint chi tiết
      const touchpoints = {
        ...formData,
        timestamp: new Date().toLocaleString('vi-VN'),
        device: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'Direct Access',
        screenSize: `${window.innerWidth}x${window.innerHeight}`,
        sourceUrl: window.location.href,
        campaign: 'Warrior_FullStack_2025'
      };

      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(touchpoints),
      });

      // Giả lập delay để tạo cảm giác hệ thống đang xử lý dữ liệu lớn
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
      onSuccess();
      
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
        {/* Success State Overlay */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-50 bg-[#020617] flex flex-col items-center justify-center text-center p-6 md:p-12"
            >
              <motion.div 
                initial={{ scale: 0.5, rotate: -15 }}
                animate={{ scale: 1, rotate: 0 }}
                className="relative mb-8"
              >
                <div className="absolute inset-0 bg-blue-500/40 blur-3xl rounded-full animate-pulse"></div>
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(59,130,246,0.6)]">
                  <Gift className="w-12 h-12 md:w-16 md:h-16 text-white" />
                </div>
              </motion.div>

              <h3 className="text-3xl md:text-5xl font-black mb-4 text-white uppercase tracking-tighter">XÁC NHẬN CHIẾN BINH!</h3>
              <p className="text-blue-400 font-bold text-lg md:text-2xl mb-8 italic">Đặc quyền "Elite Warrior" đã được gửi tới Email của bạn.</p>
              
              <div className="space-y-6 w-full max-w-md">
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center justify-between gap-4">
                  <div className="text-left">
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Mã Ưu Đãi Trợ Giá</p>
                    <p className="text-white font-black text-xl tracking-widest">WARRIOR2025</p>
                  </div>
                  <Ticket className="w-8 h-8 text-blue-500 opacity-50" />
                </div>

                <a 
                  href={ZALO_COMMUNITY_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-premium w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg md:text-xl flex items-center justify-center gap-3 shadow-2xl"
                >
                  GIA NHẬP DOANH TRẠI ZALO <ExternalLink className="w-6 h-6" />
                </a>

                <p className="text-slate-500 text-[10px] md:text-xs font-bold leading-relaxed">
                  Lộ trình huấn luyện & tài liệu 500+ Plan mẫu đang chờ bạn tại cộng đồng Zalo.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-center mb-8 md:mb-12 relative z-10">
          <div className="inline-flex items-center gap-2 text-blue-400 font-bold mb-3 md:mb-5 uppercase tracking-[0.3em] text-[9px] md:text-[11px] bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
             <Sparkles className="w-4 h-4" /> Bắt đầu hành trình đột phá
          </div>
          <h2 className="text-3xl md:text-6xl font-black mb-3 md:mb-5 tracking-tighter text-white uppercase leading-tight">
            GIA NHẬP <span className="text-blue-500 italic drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">QUÂN ĐOÀN FULL-STACK</span>
          </h2>
          <p className="text-slate-400 text-[11px] sm:text-sm md:text-xl font-medium max-w-md mx-auto leading-relaxed opacity-80">
            Làm chủ Marketing đa kênh & Sức mạnh AI thực chiến cùng 16 chuyên gia. Đăng ký để nhận "Bộ quà tặng Chiến binh" qua Email.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2">
              <label className="text-[9px] md:text-[11px] font-black text-slate-500 uppercase tracking-widest ml-1">Danh tính chiến binh</label>
              <div className="relative group">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Họ tên của bạn" 
                  className="w-full bg-black/40 border border-white/10 rounded-xl md:rounded-2xl py-4 md:py-5 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all text-sm md:text-base font-bold text-white placeholder:text-slate-700"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[9px] md:text-[11px] font-black text-slate-500 uppercase tracking-widest ml-1">Số Zalo liên lạc</label>
              <div className="relative group">
                <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                <input 
                  required
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="Số điện thoại" 
                  className="w-full bg-black/40 border border-white/10 rounded-xl md:rounded-2xl py-4 md:py-5 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all text-sm md:text-base font-bold text-white placeholder:text-slate-700"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[9px] md:text-[11px] font-black text-slate-500 uppercase tracking-widest ml-1">Email nhận quà tặng</label>
            <div className="relative group">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
              <input 
                required
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Nhận Voucher & Tài liệu qua đây" 
                className="w-full bg-black/40 border border-white/10 rounded-xl md:rounded-2xl py-4 md:py-5 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all text-sm md:text-base font-bold text-white placeholder:text-slate-700"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 pt-4 items-center">
            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="btn-premium w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-5 md:py-7 rounded-xl md:rounded-2xl font-black text-sm md:text-2xl flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 md:w-8 md:h-8 animate-spin" /> ĐANG KÍCH HOẠT...
                </>
              ) : (
                <>
                  NHẬN QUÀ & GIA NHẬP NGAY <ArrowRight className="w-5 h-5 md:w-8 md:h-8" />
                </>
              )}
            </button>
            
            <div className="flex flex-col sm:flex-row items-center gap-y-2 gap-x-6 text-slate-500 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-500" /> Bảo mật 256-bit TAS Global
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                Đồng bộ CRM Warrior v3.0
              </div>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Registration;
