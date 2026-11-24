import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ImagesAssets } from "../../assets/ImagesAssets";

const AboutSection = () => (
  <div className="section-wrap section-space">
    <div className="intro-grid">
      <div className="intro-image-wrap">
        <img className="intro-image" src={ImagesAssets.imageTarot1} alt="Không gian trải bài Tarot của Migan" loading="lazy" />
      </div>
      <div className="intro-copy">
        <span className="eyebrow">Về Migan Tarot</span>
        <h2 className="serif-title">Một khoảng lặng cho riêng bạn</h2>
        <p className="prose-copy">
          Mỗi lá bài mở ra một góc nhìn để bạn hiểu cảm xúc của mình và nhận ra những lựa chọn đang có.
        </p>
        <p className="prose-copy">
          Migan lắng nghe câu chuyện của bạn trong một không gian riêng tư, chân thành và không phán xét.
        </p>
        <div className="intro-actions">
          <Link to="/about" className="button-primary">Tìm hiểu về Migan <ArrowUpRight size={16} aria-hidden="true" /></Link>
          <Link to="/#tarot-table" className="intro-text-link">Thử rút một lá <ArrowDown size={15} aria-hidden="true" /></Link>
        </div>
      </div>
    </div>
  </div>
);

export default AboutSection;
