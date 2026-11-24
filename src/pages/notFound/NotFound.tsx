import { ArrowLeft, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return <main className="not-found site-journey"><div className="max-w-lg"><Sparkles className="mx-auto mb-5 text-[#b89b66]" size={28} aria-hidden="true" /><p className="eyebrow">Có lẽ lối rẽ này chưa có trong bản đồ</p><p className="font-display text-[clamp(6rem,18vw,10rem)] leading-none theme-accent">404</p><h1 className="serif-title">Trang này đang ẩn mình</h1><p className="prose-copy mb-7">Địa chỉ bạn tìm có thể đã thay đổi. Mình cùng quay lại nơi bắt đầu nhé.</p><button onClick={() => navigate(-1)} className="button-primary"><ArrowLeft size={16} aria-hidden="true" /> Quay lại</button></div></main>;
};

export default NotFoundPage;
