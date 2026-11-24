import { BookOpen, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import { tarotCards as cardDeck } from "../../data/tarotCards";
import Footer from "../new_home/Footer";
import Navbar from "../new_home/Navbar";

const blogPosts = [
  { id: 1, title: "5 Lá Bài Tarot Về Nội Tâm", description: "Khám phá những lá bài tiết lộ con người thật của bạn...", image: "/images/blog1.jpg", cover: cardDeck[6].image, tag: "Thấu hiểu bản thân", readTime: "5 phút đọc" },
  { id: 2, title: "Tình Yêu Đến Rồi Đi – Có Phải Do Số Phận?", description: "Phân tích các lá bài Tarot trong chuyện tình cảm...", image: "/images/blog2.jpg", cover: cardDeck[45].image, tag: "Kết nối", readTime: "4 phút đọc" },
  { id: 3, title: "3 Điều Bạn Chưa Bao Giờ Được Nói Về Bản Thân Mình", description: "Dẫn dụ từ Tarot để hiểu rõ bản thân hơn...", image: "/images/blog3.jpg", cover: cardDeck[71].image, tag: "Chiêm nghiệm", readTime: "3 phút đọc" },
];

const Blog = () => (
  <div className="site-journey min-h-screen"><Navbar />
    <main className="inner-page">
      <div className="section-wrap">
        <div className="inner-hero"><span className="eyebrow">Góc chiêm nghiệm</span><h1 className="serif-title">Một chút dịu dàng để mang theo</h1><p className="prose-copy">Những ghi chú nhỏ về Tarot, cảm xúc và hành trình trở về với chính mình.</p></div>
        <div className="blog-grid">
          {blogPosts.map((post) => <article key={post.id} className="surface-card blog-card"><img src={post.cover} alt="" loading="lazy" /><div className="blog-card-body"><span className="eyebrow">{post.tag}</span><h2>{post.title}</h2><p>{post.description}</p><span className="mt-5 inline-flex items-center gap-2 text-xs theme-accent"><BookOpen size={15} aria-hidden="true" /> <Clock3 size={14} aria-hidden="true" /> {post.readTime}</span></div></article>)}
        </div>
        <div className="mt-14 surface-card px-6 py-9 text-center"><p className="font-display text-2xl">“Mình có thể bắt đầu lại, theo nhịp độ của riêng mình.”</p><Link to="/#tarot-table" className="button-outline mt-4">Rút một lá để tự chiêm nghiệm</Link></div>
      </div>
    </main><Footer />
  </div>
);

export default Blog;
