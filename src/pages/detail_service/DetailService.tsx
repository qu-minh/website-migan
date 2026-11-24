import { MIGAN_FACEBOOK_URL } from "../../data/miganContact";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../new_home/Footer";
import Navbar from "../new_home/Navbar";

const DetailService = () => {
  const location = useLocation();
  const service = location.state?.item;

  return (
    <div className="site-journey min-h-screen"><Navbar />
      <main className="inner-page">
        <div className="section-wrap">
          {service ? <>
            <Link to="/#service" className="mb-8 inline-flex items-center gap-2 text-sm theme-muted "><ArrowLeft size={16} aria-hidden="true" /> Tất cả trải bài</Link>
            <div className="detail-grid">
              <img className="detail-image" src={service.image} alt={service.name} />
              <div className="detail-copy"><span className="eyebrow">Trải bài cùng Migan</span><h1 className="serif-title">{service.name}</h1><p className="mb-5 text-[15px] theme-accent">{service.desc}</p><p className="prose-copy whitespace-pre-line">{service.detail}</p><a className="button-primary mt-5" href={MIGAN_FACEBOOK_URL} target="_blank" rel="noreferrer">Hỏi thêm và đặt lịch <ArrowRight size={16} aria-hidden="true" /></a></div>
            </div>
          </> : <div className="mx-auto max-w-xl py-16 text-center"><span className="eyebrow">Chưa có trải bài được chọn</span><h1 className="serif-title mt-3 text-[clamp(2rem,3.6vw,2.65rem)]">Hãy chọn điều bạn muốn khám phá</h1><p className="prose-copy my-5">Quay lại danh sách trải bài để tìm chủ đề phù hợp với câu hỏi của bạn.</p><Link to="/#service" className="button-primary">Xem các trải bài <ArrowRight size={16} aria-hidden="true" /></Link></div>}
        </div>
      </main><Footer />
    </div>
  );
};

export default DetailService;
