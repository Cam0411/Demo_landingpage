
import React from 'react';

interface Props {
  onRegisterClick: () => void;
}

const Navbar: React.FC<Props> = ({ onRegisterClick }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#020617]/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl italic tracking-tighter shadow-lg group-hover:bg-blue-500 transition-all shrink-0">
            W
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-sm md:text-base tracking-tighter uppercase text-white">CHIẾN BINH</span>
            <span className="text-[8px] font-bold text-blue-400 tracking-[0.1em] uppercase">FULL-STACK</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-8">
          {['Triết lý', 'Lộ trình', 'Chuyên gia', 'Trợ giá'].map((item) => (
            <a 
              key={item}
              href={`#${item === 'Lộ trình' ? 'process' : item === 'Trợ giá' ? 'pricing' : 'about'}`} 
              className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button 
          onClick={onRegisterClick}
          className="btn-premium bg-white text-slate-950 px-5 md:px-7 py-2.5 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-wider"
        >
          ĐĂNG KÝ NGAY
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
