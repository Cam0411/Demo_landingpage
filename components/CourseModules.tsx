
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, User2, Target, Cpu, Calendar, Sparkles, BookOpen, Brain, Zap } from 'lucide-react';

interface Session {
  id: number;
  badge: string;
  title: string;
  instructor: string;
  content: string[];
  subHeader?: string;
}

interface ModuleGroup {
  title: string;
  icon: React.ReactNode;
  sessions: Session[];
}

const CourseModules: React.FC = () => {
  const [openSessions, setOpenSessions] = useState<Record<number, boolean>>({ 1: true });

  const toggleSession = (id: number) => {
    setOpenSessions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const curriculum: ModuleGroup[] = [
    {
      title: "MODULE 1: TƯ DUY NỀN TẢNG & KIẾN TRÚC CHIẾN LƯỢC CÙNG AI",
      icon: <Target className="w-6 h-6 text-blue-400" />,
      sessions: [
        {
          id: 1,
          badge: "Buổi 1 (Học qua E-learning)",
          title: "KHAI GIẢNG",
          instructor: "Tất cả các giảng viên",
          content: [
            "Phần 1 (1h): Giới thiệu mục đích của chương trình; Giới thiệu về đội ngũ giảng viên; Hướng dẫn học tập; Giới thiệu về quy định lớp học, quyền lợi học viên,...",
            "Phần 2 (30p): Chân dung Marketer trong kỷ nguyên mới và lý do anh Tùng tổ chức khoá học này",
            "Phần 3: Hỏi đáp"
          ]
        },
        {
          id: 2,
          badge: "Buổi 2 (Học qua E-learning)",
          title: "Giải mã Gen sản phẩm & kiến tạo giải pháp giá trị",
          instructor: "Phùng Thái Học",
          content: [
            "Thấu hiểu sản phẩm: 3 tầng giá trị của sản phẩm",
            "Nghệ thuật sử dụng Lợi ích và Tính năng",
            "Ứng dụng Lợi ích và Tính năng cho sản phẩm vật lý và phi vật lý",
            "Lợi ích lý tính & lợi ích cảm tính",
            "Bộ câu hỏi khai thác triệt để thông tin sản phẩm"
          ]
        },
        {
          id: 3,
          badge: "Buổi 3 (Học qua E-learning)",
          title: "Đọc vị thị trường & thấu hiểu Insight ngầm của khách hàng",
          instructor: "Phùng Thái Học",
          content: [
            "Thấu hiểu khách hàng: Khách hàng thực sự là ai?",
            "Từ chân dung khách hàng đến ý tưởng quảng cáo",
            "Cấp độ nhu cầu của khách hàng",
            "Insight là gì? 3 phương pháp tìm kiếm insight cực đỉnh"
          ]
        },
        {
          id: 4,
          badge: "Buổi 4 (Học qua E-learning)",
          title: "Vẽ bản đồ hành trình khách hàng & tối ưu điểm chạm",
          instructor: "Huỳnh Xuân Tùng",
          content: [
            "1. Bản đồ hành trình khách hàng (So sánh 2 phễu truyền thống và Mô hình bánh đà) => Làm chủ kỹ thuật Customer Journey Mapping để tìm ra những 'điểm chết' và 'điểm vàng' trong trải nghiệm của khách hàng.",
            "2. Hoạch định chiến lược và kế hoạch nội dung tích hợp => Nối liền mạch từ chiến lược kinh doanh của doanh nghiệp đến chiến lược nội dung của Marketer."
          ]
        },
        {
          id: 5,
          badge: "Buổi 5 (Học qua E-learning)",
          title: "Xây dựng kế hoạch IMC Toàn diện",
          instructor: "Ms. Nguyễn Thùy Khanh",
          content: [
            "Nắm vững quy trình 7 bước để lập một kế hoạch IMC bài bản, từ nghiên cứu thị trường, xác định mục tiêu, lựa chọn kênh cho đến đo lường hiệu quả. Sử dụng AI để hỗ trợ phân tích đối thủ và brainstorm chiến lược."
          ]
        },
        {
          id: 6,
          badge: "Buổi 6 (Học qua E-learning)",
          title: "Xây dựng, phát triển Big Idea & Triển khai Big Idea qua Key Assets",
          instructor: "Ms. Nguyễn Thùy Khanh",
          content: [
            "Tập trung vào việc tìm ra 'linh hồn' của chiến dịch. Học các phương pháp để khai thác Insight, Mâu thuẫn văn hoá, và Sự thật sản phẩm để tạo ra Big Idea. Nắm các tiêu chí để đánh giá một ý tưởng mạnh và thực hành xây dựng kế hoạch IMC dựa trên Big Idea đã chọn.",
            "Học cách biến Big Idea thành những sản phẩm cụ thể. Nắm bắt quy trình sáng tạo Key Visual, kịch bản TVC, và Slogan cho chiến dịch. Đảm bảo tính nhất quán của ý tưởng trên mọi ấn phẩm và thực hành tạo concept bằng các công cụ AI."
          ]
        }
      ]
    },
    {
      title: "MODULE 2: THỰC THI & TỐI ƯU HÓA TRÊN ĐA NỀN TẢNG",
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      sessions: [
        {
          id: 7,
          badge: "Buổi 7 (Học qua E-learning)",
          title: "Xây kênh Fanpage (từ cơ bản đến nâng cao - P1)",
          instructor: "Ngáo Content",
          subHeader: "FACEBOOK",
          content: ["Xây dựng và phát triển Fanpage Facebook từ cơ bản đến nâng cao - Phần 1"]
        },
        {
          id: 8,
          badge: "Buổi 8 (Học qua E-learning)",
          title: "Xây kênh Fanpage (từ cơ bản đến nâng cao - P2)",
          instructor: "Ngáo Content",
          subHeader: "FACEBOOK",
          content: ["Xây dựng và phát triển Fanpage Facebook từ cơ bản đến nâng cao - Phần 2"]
        },
        {
          id: 9,
          badge: "Buổi 9 (Học qua E-learning)",
          title: "Hướng dẫn triển khai Facebook Ads P1 - Cơ bản",
          instructor: "Thành Bobber",
          subHeader: "FACEBOOK",
          content: ["Hướng dẫn triển khai Facebook Ads từ cơ bản"]
        },
        {
          id: 10,
          badge: "Buổi 10 (Học qua E-learning)",
          title: "Tối ưu triển khai Facebook Ads P2 - Nâng cao",
          instructor: "Thành Bobber",
          subHeader: "FACEBOOK",
          content: ["Tối ưu hoá chiến dịch Facebook Ads nâng cao"]
        },
        {
          id: 11,
          badge: "Buổi 11 (Học qua E-learning)",
          title: "Nghệ thuật Xây dựng & Vận hành cộng đồng",
          instructor: "Tấn Lê",
          subHeader: "FACEBOOK",
          content: [
            "Tìm hiểu về cộng đồng đúng chuẩn trên Facebook.",
            "- Hiểu đúng về Cộng đồng",
            "- 4 kim chỉ nam để xây dựng cộng đồng bền vững"
          ]
        },
        {
          id: 12,
          badge: "Buổi 12 (Học qua E-learning)",
          title: "Xây kênh Tiktok bán hàng hiệu quả (Phần 1)",
          instructor: "Dương",
          subHeader: "TIKTOK",
          content: ["Xây dựng kênh Tiktok bán hàng hiệu quả - Phần 1"]
        },
        {
          id: 13,
          badge: "Buổi 13 (Học qua E-learning)",
          title: "Xây kênh Tiktok bán hàng hiệu quả (Phần 2)",
          instructor: "Dương",
          subHeader: "TIKTOK",
          content: ["Xây dựng kênh Tiktok bán hàng hiệu quả - Phần 2"]
        },
        {
          id: 14,
          badge: "Buổi 14 (06/01/2026)",
          title: "Quản lý tài nguyên quảng cáo trên nền tảng Tiktok",
          instructor: "Võ Đức Thái",
          subHeader: "TIKTOK",
          content: [
            "Hệ thống hoá được điều kiện cần và đủ để có thể chạy quảng cáo, mở rộng góc nhìn về kỹ thuật xử lý với nền tảng để cùng với chiến lược nội dung thu về kết quả tốt nhất",
            "Khám phá góc nhìn mới về ngành tài nguyên quảng cáo - Thực trạng và giải pháp để quảng cáo khoẻ hơn mỗi ngày"
          ]
        },
        {
          id: 15,
          badge: "Buổi 15 (08/01/2026)",
          title: "Xử lý các vấn đề khi bị hạn chế quảng cáo Tiktok (Đúng policy của nền tảng)",
          instructor: "Võ Đức Thái",
          subHeader: "TIKTOK",
          content: [
            "Lý thuyết của policy các nền tảng social (Fb, Tiktok, Gg...)",
            "Sự thật đang diễn ra góc nhìn bao quát hơn về các quảng cáo lách qua được policy đang chạy trên thị trường (Nguyên nhân và hệ quả)",
            "Cách vận hành, xử lý khi bị hạn chế quảng cáo để quảng cáo khoẻ hơn mỗi ngày"
          ]
        },
        {
          id: 16,
          badge: "Buổi 16 (13/01/2026)",
          title: "Bùng nổ doanh thu với Video ngắn (TikTok/YouTube) (P1)",
          instructor: "Việt Ngô",
          subHeader: "VIDEO NGẮN",
          content: ["Chiến lược viral và tăng trưởng nhanh trên nền tảng video ngắn TikTok và YouTube Shorts - Phần 1"]
        },
        {
          id: 17,
          badge: "Buổi 17 (15/01/2026)",
          title: "Bùng nổ doanh thu với Video ngắn (TikTok/YouTube) (P2)",
          instructor: "Việt Ngô",
          subHeader: "VIDEO NGẮN",
          content: ["Chiến lược viral và tăng trưởng nhanh trên nền tảng video ngắn TikTok và YouTube Shorts - Phần 2"]
        },
        {
          id: 18,
          badge: "Buổi 18 (20/01/2026)",
          title: "AI Video",
          instructor: "Quốc Cajon",
          content: [
            "Làm chủ quy trình làm Video-AI: quy trình sản xuất video full-step hoàn toàn từ AI:",
            "Dùng AI tự động dịch & lồng tiếng cho video gốc với hơn 170 ngôn ngữ trên thế giới.",
            "Ứng dụng AI tạo sinh Avatar/MC ảo (Generate, hyper-realistic, custom photo) ứng dụng làm video dạng Podcast và UGC review sản phẩm.",
            "Thực hành Interactive Avatar realtime cho FAQ/CS/Sale; biến PPT/PDF thành Video; dùng AI cắt highlights từ video dài/video livestream để đăng lại trên TikTok/Reels/Shorts.",
            "Kết thúc buổi học: học viên có cái nhìn tổng quan về Video-AI và có thể áp dụng ngay lập tức vào việc tạo video có mục đích thực tiễn rõ ràng cho công việc và marketing."
          ]
        },
        {
          id: 19,
          badge: "Buổi 19 (22/01/2026)",
          title: "Website cơ bản (kéo-thả WordPress)",
          instructor: "Đặng Lê Nam",
          subHeader: "WEBSITE & SEO",
          content: [
            "Sử dụng và setup mẫu theme wordpress hoàn chỉnh",
            "Cài đặt các plugin SEO và 1 số đoạn code để cấu hình website chuẩn SEO và chuẩn người dùng.",
            "Tối ưu Pagespeed và technical cho Website Cũ và Mới bằng Screaming Frog"
          ]
        },
        {
          id: 20,
          badge: "Buổi 20 (27/01/2026)",
          title: "SEO kỷ nguyên AI",
          instructor: "Đặng Lê Nam",
          subHeader: "WEBSITE & SEO",
          content: [
            "Cách nghiên cứu từ khóa và lập kế hoạch triển khai content SEO",
            "Entity Onsite, schema khai báo chuẩn tác dụng lớn",
            "Cách triển khai Internal Link theo trải nghiệm người dùng",
            "Cách triển khai backlink dùng trong kỷ nguyên AI",
            "Hiểu đúng làm đúng cách kéo traffic, bí quyết lên tóp nhanh và bền vững nhất"
          ]
        },
        {
          id: 21,
          badge: "Buổi 21 (29/01/2026)",
          title: "Hướng dẫn lên dàn ý content chuẩn SEO & AI",
          instructor: "Vân Nguyễn",
          subHeader: "WEBSITE & SEO",
          content: [
            "Search intent & Tư duy 'chuẩn' khi tạo content trên Google trong kỷ nguyên AI",
            "Quy trình lên dàn ý chuẩn SEO, AI",
            "25+ Checklist dàn ý chuẩn SEO",
            "Tư duy tạo content AI & Gợi ý Prompt 'ăn ngay'"
          ]
        },
        {
          id: 22,
          badge: "Buổi 22 (03/02/2026)",
          title: "Hướng dẫn viết bài chuẩn SEO & quản lý sản xuất nội dung số lượng lớn",
          instructor: "Vân Nguyễn",
          subHeader: "WEBSITE & SEO",
          content: [
            "Quy trình triển khai bài viết chuẩn SEO & AI",
            "50+ checklist bài viết chuẩn SEO",
            "Tư duy tạo content AI & Gợi ý Prompt 'ăn ngay'",
            "Hướng dẫn quản lý sản xuất nội dung số lượng lớn"
          ]
        }
      ]
    },
    {
      title: "MODULE 3: THCN & TỰ ĐỘNG HOÁ",
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      sessions: [
        {
          id: 23,
          badge: "Buổi 23 (24/02/2026)",
          title: "Xây dựng thương hiệu cá nhân & mạng lưới chuyên gia trên LinkedIn",
          instructor: "Nga Lê",
          content: [
            "TẠI SAO LINKEDIN LÀ 'CỬA NHÌN' ĐẦU TIÊN CỦA NHÀ TUYỂN DỤNG?",
            "CÔNG THỨC A.C.T. - TỐI ƯU PROFILE ĐỂ GÂY ẤN TƯỢNG VỚI NHÀ TUYỂN DỤNG",
            "CHIẾN LƯỢC NỘI DUNG - ĐỂ NHÀ TUYỂN DỤNG TÌM ĐẾN BẠN",
            "XÂY DỰNG MẠNG LƯỚI - NETWORKING LÀ 'OXYGEN' CỦA SỰ NGHIỆP"
          ]
        },
        {
          id: 24,
          badge: "Buổi 24 (26/02/2026)",
          title: "Từ 'Công cụ' đến 'Công nghệ' – Tư duy & ứng dụng (P1)",
          instructor: "Tuấn Anh",
          content: [
            "Hành trình nâng cấp từ người làm đến người dẫn dắt.",
            "Phát triển tư duy và năng lực ứng dụng công nghệ trong business và marketing hiện đại.",
            "Không chỉ biết dùng công cụ mà còn làm chủ công nghệ."
          ]
        },
        {
          id: 25,
          badge: "Buổi 25 (03/03/2026)",
          title: "Từ 'Công cụ' đến 'Công nghệ' – Tư duy & ứng dụng (P2)",
          instructor: "Tuấn Anh",
          content: [
            "Hành trình nâng cấp từ người làm đến người dẫn dắt.",
            "Phát triển tư duy và năng lực ứng dụng công nghệ trong business và marketing hiện đại.",
            "Không chỉ biết dùng công cụ mà còn làm chủ công nghệ."
          ]
        },
        {
          id: 26,
          badge: "Buổi 26 (05/03/2026)",
          title: "Kiến tạo cỗ máy Marketing & Bán hàng tự động (P1)",
          instructor: "Nguyễn Ngọc Cảm",
          content: ["Xây dựng hệ thống automation marketing để tối ưu hóa quy trình bán hàng và marketing tự động - Phần 1"]
        },
        {
          id: 27,
          badge: "Buổi 27 (12/03/2026)",
          title: "Kiến tạo cỗ máy Marketing & Bán hàng tự động (P2)",
          instructor: "Nguyễn Ngọc Cảm",
          content: ["Xây dựng hệ thống automation marketing để tối ưu hóa quy trình bán hàng và marketing tự động - Phần 2"]
        }
      ]
    },
    {
      title: "MODULE 4: QUY TRÌNH SẢN XUẤT NỘI DUNG CHUYÊN NGHIỆP CÙNG AI",
      icon: <Brain className="w-6 h-6 text-green-400" />,
      sessions: [
        {
          id: 28,
          badge: "Buổi 28 (17/03/2026)",
          title: "Xây dựng Content Brief hoàn hảo, Công thức & Dàn ý nội dung chiến lược",
          instructor: "Huỳnh Xuân Tùng",
          content: [
            "Nắm vững nghệ thuật tạo ra những bản brief 'biết nói' - tài liệu định hướng quan trọng nhất của mọi dự án. Học cách tích hợp toàn bộ kết quả nghiên cứu vào brief, tuỳ chỉnh độ chi tiết (Co & Giãn) để làm việc hiệu quả với mọi đối tượng, từ team nội bộ, agency đến freelancer, đảm bảo đầu ra luôn đúng ý đồ chiến lược.",
            "Quay sẵn Demo: Thực hành xây dựng một bản Content Brief 'co giãn' bằng AI, từ phiên bản siêu chi tiết cho team nội bộ đến phiên bản tinh gọn để làm việc với KOL/Influencer.",
            "Giải mã các công thức nội dung kinh điển (AIDA, PAS...) để hiểu bản chất tâm lý đằng sau chúng. Từ đó, học cách sáng tạo ra những công thức và cấu trúc dàn ý mới, kết hợp nghệ thuật kể chuyện (Storytelling) để dẫn dắt cảm xúc người đọc. Sử dụng AI để sắp xếp luận điểm, gợi ý cấu trúc và phân tích hiệu quả của từng công thức.",
            "Quay sẵn demo: Sử dụng AI để phân tích cấu trúc của 5 bài viết thành công, từ đó sáng tạo ra một công thức nội dung mới mang dấu ấn cá nhân. Output là 3 dàn ý chi tiết cho 3 bài viết theo công thức vừa tạo."
          ]
        },
        {
          id: 29,
          badge: "Buổi 29 (19/03/2026)",
          title: "Giải mã Tâm lý học trong Marketing, Branding & Bán hàng",
          instructor: "Tuấn Hùng",
          content: [
            "Ứng dụng tâm lý học hành vi để tối ưu hoá chiến lược marketing và bán hàng. Hiểu rõ cách khách hàng ra quyết định và cách thúc đẩy họ hành động."
          ]
        },
        {
          id: 30,
          badge: "Buổi 30 (31/03/2026)",
          title: "Tổng kết",
          instructor: "Anh Tùng + các giảng viên khác",
          content: [
            "- Tổng kết lại toàn bộ nội dung của khoá học",
            "- Giới thiệu về những sự kiện hỗ trợ tiếp theo"
          ]
        }
      ]
    }
  ];

  return (
    <section id="process" className="py-24 md:py-32 relative bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4"
          >
             Warrior Roadmap
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-8xl font-black mb-8 uppercase tracking-tighter text-white"
          >
            LỘ TRÌNH <span className="text-blue-500 italic drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">30 BUỔI HỌC</span>
          </motion.h2>
          <p className="text-slate-400 text-base md:text-2xl max-w-3xl mx-auto font-medium opacity-80 leading-relaxed italic">
            "Từ tư duy chiến lược đến thực thi đa kênh chuyên sâu. <br className="hidden md:block"/> Chương trình huấn luyện khắt khe nhất dành cho Marketer thực chiến."
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {curriculum.map((module, modIdx) => (
            <div key={modIdx} className="space-y-10 md:space-y-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-6 group"
              >
                 <div className="w-14 h-14 md:w-20 md:h-20 rounded-[24px] bg-blue-600/10 flex items-center justify-center border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.1)] shrink-0 group-hover:scale-110 transition-transform duration-500">
                    {module.icon}
                 </div>
                 <h3 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
                   {module.title}
                 </h3>
              </motion.div>

              <div className="grid grid-cols-1 gap-5 md:gap-8">
                {module.sessions.map((session) => (
                  <motion.div 
                    key={session.id}
                    layout
                    className="bg-[#0b1426]/60 border border-white/5 rounded-[32px] md:rounded-[48px] overflow-hidden backdrop-blur-xl hover:bg-[#0f172a]/80 transition-all group shadow-2xl"
                  >
                    <button 
                      onClick={() => toggleSession(session.id)}
                      className="w-full text-left p-7 md:p-12 flex items-start justify-between gap-6"
                    >
                      <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 text-blue-400 text-[9px] md:text-[11px] font-black mb-5 bg-blue-500/5 uppercase tracking-[0.2em]">
                          <Calendar className="w-3.5 h-3.5" />
                          {session.badge}
                        </div>
                        <h4 className="text-lg md:text-3xl font-black text-white mb-6 group-hover:text-blue-400 transition-colors leading-tight uppercase tracking-tight">
                          {session.title}
                        </h4>
                        <div className="flex items-center gap-3 text-slate-500 font-bold text-[10px] md:text-xs uppercase tracking-widest">
                           <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-600/20 flex items-center justify-center">
                             <User2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400" />
                           </div>
                           <span>Giảng viên: <span className="text-slate-200">{session.instructor}</span></span>
                        </div>
                      </div>
                      <div className={`mt-2 p-3 md:p-4 rounded-2xl bg-white/5 text-white/40 transition-all duration-500 ${openSessions[session.id] ? 'rotate-180 bg-blue-600/20 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)]' : ''}`}>
                        <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {openSessions[session.id] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-7 md:px-16 pb-12 pt-4 border-t border-white/5 bg-black/20">
                            {session.subHeader && (
                              <div className="text-blue-500 font-black uppercase text-[10px] md:text-xs tracking-[0.4em] mb-8 flex items-center gap-4">
                                <div className="h-5 w-1.5 bg-blue-500 rounded-full"></div>
                                {session.subHeader}
                              </div>
                            )}
                            <div className="space-y-5 md:space-y-7">
                              {session.content.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-5 text-slate-300 text-sm md:text-xl leading-relaxed font-medium">
                                  <div className="mt-2.5 md:mt-3 w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.8)] shrink-0"></div>
                                  <span className="readable-text opacity-90">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 md:mt-32 p-10 md:p-20 rounded-[48px] bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-white/10 text-center backdrop-blur-3xl"
        >
           <BookOpen className="w-12 h-12 md:w-20 md:h-20 text-blue-400 mx-auto mb-8 animate-bounce" />
           <h3 className="text-2xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Bạn đã sẵn sàng để đột phá?</h3>
           <p className="text-slate-400 text-sm md:text-xl mb-10 max-w-2xl mx-auto font-medium">Đăng ký ngay để nhận trọn bộ Syllabus chi tiết 30 Module và kho tài liệu 500+ Planning mẫu.</p>
           <a href="#pricing" className="btn-premium inline-flex bg-white text-black px-12 py-5 rounded-2xl font-black text-sm md:text-lg uppercase tracking-wider shadow-2xl">
              XEM BẢNG GIÁ ƯU ĐÃI
           </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseModules;
