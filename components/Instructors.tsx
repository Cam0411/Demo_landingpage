
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Award, ExternalLink } from 'lucide-react';

const Instructors: React.FC = () => {
  const lecturers = [
    { 
      name: "Mr. Phùng Thái Học", 
      role: "Founder Tâm Sự Con Sen", 
      img: "https://w.ladicdn.com/s550x650/66af1bde8826300012e8f152/phung-thai-hoc-20251111131726-sfugo.jpg",
      bio: "Với hơn 10 năm kinh nghiệm trong lĩnh vực Content và Digital. Sáng lập và đồng sáng lập các Agency, học viện, cộng đồng như: Tâm Sự Con Sen, DigiLife Agency, M&P Academy, Chủ quán trà đá. Tác giả sách “Hơi Thở Con Sen”, Giảng viên tại VietMoz, FPT Skilling."
    },
    { 
      name: "Mr. Huỳnh Xuân Tùng", 
      role: "Founder & CEO TAS GLOBAL", 
      img: "https://w.ladicdn.com/s550x550/66af1bde8826300012e8f152/mr-tung-20251111131758-75qsb.jpg",
      bio: "Với 13 năm kinh nghiệm và từng là cựu nhân sự tại ByteDance (TikTok), anh đã đào tạo cho hơn 10.000 học viên và 500 doanh nghiệp, giúp họ tối ưu 80% chi phí và tăng 5 lần hiệu suất nhờ AI."
    },
    { 
      name: "Ms. Trần Hoàng Ngọc Tâm", 
      role: "Founder & CEO Ngáo Content", 
      img: "https://w.ladicdn.com/s550x600/66af1bde8826300012e8f152/tam-20251111131722-yvr28.jpg",
      bio: "Hơn 9 năm trong ngành Marketing, chị đã đào tạo 4.500+ học viên, coaching doanh nghiệp và triển khai hơn 100 website vệ tinh đa lĩnh vực chuyên sâu."
    },
    { 
      name: "Ms. Nguyễn Thùy Khanh", 
      role: "Founder KH Content", 
      img: "https://w.ladicdn.com/s550x550/66af1bde8826300012e8f152/ms-ka-nguyen-20251111131758-mirgq.jpg",
      bio: "Hơn 20 năm kinh nghiệm làm Giám đốc Sáng tạo tại các agency toàn cầu, triển khai hơn 100 chiến dịch IMC cho các thương hiệu lớn như Manulife, Lazada, Castrol."
    },
    { 
      name: "Mr. Đặng Lê Nam", 
      role: "CEO VU Long & 2D Digital", 
      img: "https://w.ladicdn.com/s550x550/66af1bde8826300012e8f152/mr-dang-le-nam-20251111131750-b1t4k.jpg",
      bio: "Triển khai hơn 1000 dự án SEO đạt triệu traffic, giúp doanh nghiệp scale doanh số lên 10 tỷ/tháng và là Speaker chính của các sự kiện Google lớn nhất Việt Nam."
    },
    { 
      name: "Mr. Ngô Nguyễn Xuân Việt", 
      role: "Co-Founder LPG Agency", 
      img: "https://w.ladicdn.com/s550x650/66af1bde8826300012e8f152/anh-viet--20251111131758-9aqpq.png",
      bio: "Xây dựng các chiến dịch TikTok đạt hiệu suất hơn 1000 đơn/ngày và triển khai hơn 1 triệu sản phẩm bán ra cho Panasonic, Đồng hồ Hải Triều."
    },
    { 
      name: "Ms. Emily Lê", 
      role: "Founder DigiSource", 
      img: "https://w.ladicdn.com/s550x550/66af1bde8826300012e8f152/chi-nga-20251111131806-kn5fh.png",
      bio: "10 năm kinh nghiệm cố vấn, diễn giả tại FPT, HUTECH và các sự kiện lớn, chuyên định hướng năng lực và xây dựng thương hiệu cá nhân cho thế hệ trẻ."
    },
    { 
      name: "Mr. Nguyễn Ngọc Cảm", 
      role: "Co-Founder AIA", 
      img: "https://w.ladicdn.com/s550x500/66af1bde8826300012e8f152/ngoc-cam-20251111131806-4nsgj.jpg",
      bio: "Ứng dụng AI xây dựng các phễu Marketing phức tạp, giúp doanh nghiệp tự động hóa đến 90% quy trình và rút ngắn thời gian triển khai từ tuần xuống ngày."
    },
    { 
      name: "Mr. Tấn Lê", 
      role: "Founder & CEO tại JOBVUI", 
      img: "https://w.ladicdn.com/s550x600/66af1bde8826300012e8f152/mr-tan-le-20251111131758-dnfe3.jpg",
      bio: "Sáng lập và xây dựng thành công hệ thống cộng đồng việc làm và marketing lớn nhất Việt Nam, thu hút quản lý hơn 2.000.000 thành viên."
    },
    { 
      name: "Mr. Tuấn Hùng", 
      role: "Cố vấn chiến lược", 
      img: "https://w.ladicdn.com/s550x650/66af1bde8826300012e8f152/tuan-hung-20251111131758-awsw6.jpg",
      bio: "Cố vấn chiến lược cấp cao tại Cỏ May Sadec, Hoàng Nam Group và nhiều tập đoàn đa ngành khác tại Việt Nam."
    },
    { 
      name: "Ms. Lê Bùi", 
      role: "Giám đốc Talent House", 
      img: "https://w.ladicdn.com/s550x500/66af1bde8826300012e8f152/ms-le-bui-20251111131758-1qm9v.jpg",
      bio: "Đào tạo affiliate cho hơn 100.000 KOC từ năm 2019, đứng sau thành công của nhiều nhà sáng tạo nội dung và cộng đồng ACCESSTRADE lớn."
    },
    { 
      name: "Mr. Thành Bobber", 
      role: "Founder UPG Agency", 
      img: "https://w.ladicdn.com/s550x650/66af1bde8826300012e8f152/a-thanh-bobber-20251111131852-xtg22.jpg",
      bio: "12 năm kinh nghiệm, tác giả sách Facebook Marketing và mentor trực tiếp cho 30Shines, Đồng hồ Hải Triều tối ưu hiệu quả quảng cáo vượt trội."
    },
    { 
      name: "Ms. Vân Nguyễn", 
      role: "Trưởng phòng tại SEO NGON", 
      img: "https://w.ladicdn.com/s550x650/66af1bde8826300012e8f152/anh-van-20251111131729-q2zm8.png",
      bio: "Hơn 6 năm quản lý sản xuất nội dung website cho FPT, Viettel, BIDV. Giảng viên SEO AI MAX và đồng tác giả sách 'SEO - hiểu đúng làm đúng'."
    },
    { 
      name: "Mr. Anh Trần", 
      role: "Phó tổng giám đốc MeeyGroup", 
      img: "https://w.ladicdn.com/s550x450/66af1bde8826300012e8f152/tuan-anh-20251111131742-swbeq.jpg",
      bio: "Chuyên gia công nghệ, điều hành cấp cao tại các tập đoàn 500 - 5000+ nhân sự như F99, MeeyGroup, kiến tạo các sản phẩm đột phá."
    },
    { 
      name: "Mr. Quốc Cajon", 
      role: "Founder & CEO Pidu Digital", 
      img: "https://w.ladicdn.com/s550x600/66af1bde8826300012e8f152/quoc_avar198-20251111131738--gjqk.png",
      bio: "Hơn 10 năm kinh nghiệm Digital thực chiến. Từng đào tạo cho tập đoàn Đức Giang, Hội Môi giới Bất động sản Việt Nam (VARS)."
    },
    { 
      name: "Mr. Võ Đức Thái", 
      role: "Head of Digital TAS Global", 
      img: "https://w.ladicdn.com/s550x550/66af1bde8826300012e8f152/z7117012188844_aa15dea2393cd6dc40869daaa03f696c-20251111131733-cuouc.jpg",
      bio: "5+ năm kinh nghiệm triển khai chiến dịch Digital & Performance thực chiến cho các nhãn hàng hàng đầu Việt Nam."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-40 bg-transparent relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-6"
          >
            Elite Mentors
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-8xl font-black mb-6 md:mb-10 uppercase tracking-tighter text-white"
          >
            HỘI TỤ <span className="text-blue-500 italic drop-shadow-[0_0_30px_rgba(59,130,246,0.4)]">TINH HOA</span>
          </motion.h2>
          <div className="relative max-w-4xl mx-auto">
             <Quote className="absolute -top-6 -left-4 md:-top-10 md:-left-12 w-8 h-8 md:w-16 md:h-16 text-blue-500/20" />
             <p className="text-slate-400 text-sm md:text-3xl font-medium opacity-90 leading-relaxed italic">
               "Học từ những người đang trực tiếp làm nghề. Tiếp cận tư duy thực chiến và mạng lưới quan hệ từ những chuyên gia hàng đầu."
             </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8">
          {lecturers.map((lec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1, duration: 0.5 }}
              className="group relative aspect-[3/4.5] md:aspect-[3/4.2] rounded-[24px] md:rounded-[40px] overflow-hidden border border-white/5 bg-[#0b1426] shadow-2xl"
            >
              {/* Image Layer */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={lec.img} 
                  alt={lec.name} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                {/* Dynamic Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500"></div>
              </div>

              {/* Content Layer (Visible) */}
              <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 md:px-3 md:py-1 rounded-md bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-2 md:mb-3">
                   <Award className="w-2 h-2 md:w-3 md:h-3" /> Expert
                </div>
                <h4 className="text-sm md:text-2xl font-black mb-0.5 md:mb-1 text-white uppercase tracking-tight leading-tight">
                  {lec.name}
                </h4>
                <p className="text-[9px] md:text-xs text-slate-400 font-bold uppercase tracking-wider mb-2 line-clamp-1 group-hover:text-blue-300 transition-colors">
                  {lec.role}
                </p>
                
                {/* Mobile tap hint */}
                <div className="md:hidden flex items-center gap-1 text-[8px] text-blue-500/60 font-black uppercase tracking-tighter">
                   Tap to read bio <ExternalLink className="w-2 h-2" />
                </div>
              </div>

              {/* Hover Detail Layer (Bio) */}
              <motion.div 
                className="absolute inset-0 z-20 bg-[#020617]/95 p-5 md:p-10 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-full group-hover:translate-y-0 backdrop-blur-md"
              >
                <div className="w-8 h-1 bg-blue-500 mb-6 rounded-full"></div>
                <h5 className="text-lg md:text-2xl font-black text-white uppercase mb-2 leading-none">{lec.name}</h5>
                <p className="text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-widest mb-6">{lec.role}</p>
                <div className="readable-text text-slate-300 text-[11px] md:text-sm font-medium leading-relaxed mb-8 line-clamp-6 md:line-clamp-none">
                  {lec.bio}
                </div>
                <div className="mt-auto">
                  <div className="w-full h-px bg-white/10 mb-4"></div>
                  <div className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
                    Chiến binh Full-stack Mentorship
                  </div>
                </div>
              </motion.div>

              {/* Decorative Border Glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-[24px] md:rounded-[40px] transition-all duration-500 pointer-events-none z-30"></div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 md:mt-32 text-center"
        >
          <p className="text-slate-500 text-xs md:text-xl font-medium mb-8 max-w-2xl mx-auto italic">
            "Bạn không chỉ học kiến thức, bạn học cách họ đã thành công."
          </p>
          <a href="#pricing" className="btn-premium inline-flex bg-blue-600 text-white px-10 md:px-14 py-4 md:py-6 rounded-2xl font-black text-sm md:text-xl uppercase tracking-widest shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
            ĐĂNG KÝ HỌC CÙNG CHUYÊN GIA
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Instructors;
