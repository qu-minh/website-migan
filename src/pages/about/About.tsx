import { MIGAN_FACEBOOK_URL } from "../../data/miganContact";
import { HeartHandshake, LockKeyhole, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../new_home/Footer";
import Navbar from "../new_home/Navbar";
import { ImagesAssets } from "../../assets/ImagesAssets";

const principles = [
  { icon: HeartHandshake, title: "Lắng nghe không phán xét", copy: "Mỗi câu chuyện được đón nhận với sự chân thành và tôn trọng." },
  { icon: LockKeyhole, title: "Không gian riêng tư", copy: "Bạn được chủ động chia sẻ điều mình cảm thấy thoải mái." },
  { icon: Sparkles, title: "Trao quyền lựa chọn", copy: "Trải bài gợi mở góc nhìn; quyết định luôn thuộc về bạn." },
];

const About = () => (
  <div className="site-journey min-h-screen"><Navbar />
    <main className="inner-page">
      <div className="section-wrap">
        <div className="inner-hero"><span className="eyebrow">Câu chuyện của Migan</span><h1 className="serif-title">Một nơi để trở về với mình</h1><p className="prose-copy">Tarot là điểm bắt đầu cho một cuộc trò chuyện sâu hơn — với những cảm xúc, mong muốn và lựa chọn đang chờ được lắng nghe.</p></div>
        <div className="detail-grid">
          <img className="detail-image" src={ImagesAssets.imageTarot1} alt="Không gian trải bài Migan Tarot" />
          <div className="detail-copy"><span className="eyebrow">Tarot như tấm gương soi chiếu</span><h2 className="serif-title">Không cần biết trước tương lai để hiểu mình hơn</h2><p className="prose-copy">Thông qua những lá bài Tarot, Migan cùng bạn nhìn lại điều đang diễn ra bên trong: cảm xúc, niềm tin, những điều bạn trân trọng và các khả năng phía trước.</p><p className="prose-copy">Không có câu trả lời nào thay bạn quyết định. Migan ở đây để lắng nghe và đồng hành bằng một góc nhìn nhẹ nhàng, để bạn tự tìm thấy điều phù hợp với mình.</p><a className="button-primary mt-4" href={MIGAN_FACEBOOK_URL} target="_blank" rel="noreferrer">Trò chuyện cùng Migan</a></div>
        </div>
        <div className="section-space">
          <div className="section-heading"><span className="eyebrow">Giá trị Migan gìn giữ</span><h2 className="serif-title">Dịu dàng, riêng tư, tôn trọng</h2></div>
          <div className="service-grid">{principles.map(({ icon: Icon, title, copy }) => <article key={title} className="surface-card p-7"><span className="mb-5 grid h-12 w-12 place-items-center rounded-full theme-icon"><Icon size={21} aria-hidden="true" /></span><h3 className="font-display text-2xl font-semibold">{title}</h3><p className="prose-copy mb-0 text-sm">{copy}</p></article>)}</div>
        </div>
        <div className="text-center"><Link to="/#tarot-table" className="button-outline">Rút một lá để tự chiêm nghiệm</Link></div>
      </div>
    </main><Footer />
  </div>
);

export default About;
