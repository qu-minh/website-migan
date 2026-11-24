import { MIGAN_FACEBOOK_URL } from "../../data/miganContact";
import { Instagram, Facebook, Music2, ArrowUpRight, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const socials = [
    { label: "Facebook Migan Tarot", href: MIGAN_FACEBOOK_URL, icon: Facebook },
    { label: "Instagram Migan Tarot", href: "https://www.instagram.com/migantarot/", icon: Instagram },
    { label: "TikTok Migan Tarot", href: "https://www.tiktok.com/@tarot_migan", icon: Music2 },
  ];

  return (
    <footer className="site-footer">
      <div className="section-wrap footer-main">
        <div className="footer-brand">
          <button className="brand !text-white" onClick={() => navigate("/")} aria-label="Migan Tarot — về trang chủ">
            <span className="brand-mark" aria-hidden="true"><Sparkles size={20} /></span>
            <span className="brand-name">Migan<small>Tarot & reflection</small></span>
          </button>
          <p>Một khoảng lặng để lắng nghe, chiêm nghiệm và hiểu mình hơn — với sự dịu dàng và tôn trọng.</p>
          <div className="mt-5 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => <a key={href} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition hover:border-[#d4bc8d] hover:text-[#d4bc8d]"><Icon size={17} aria-hidden="true" /></a>)}
          </div>
        </div>
        <div>
          <h2 className="footer-title">Khám phá</h2>
          <div className="footer-links">
            <Link to="/about">Về Migan</Link>
            <Link to="/blog/">Góc chiêm nghiệm</Link>
            <Link to="/faq_section/">Câu hỏi thường gặp</Link>
          </div>
        </div>
        <div>
          <h2 className="footer-title">Kết nối</h2>
          <div className="footer-links">
            <a href="/#contact">Đặt lịch trải bài <ArrowUpRight size={14} className="inline" aria-hidden="true" /></a>

            <span className="text-sm text-white/65">Cần Thơ, Việt Nam</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom"><div className="section-wrap flex flex-wrap justify-between gap-2"><span>© {new Date().getFullYear()} Migan Tarot</span><span>Tarot như một tấm gương — lựa chọn luôn thuộc về bạn.</span></div></div>
    </footer>
  );
};

export default Footer;
