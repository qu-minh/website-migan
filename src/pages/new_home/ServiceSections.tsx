import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { ServiceImage } from "../../assets/ImagesAssets";
import { ServiceModel } from "../../model/service_model";

const services = [
  new ServiceModel({
    name: "Xem Tarot cá nhân",
    desc: "Khám phá thông điệp dành riêng cho hành trình của bạn.",
    detail: "Dịch vụ xem tarot cá nhân giúp bạn khám phá sâu hơn về những khía cạnh riêng tư trong cuộc sống như tình cảm, công việc, tài chính hoặc sức khỏe tinh thần. Mỗi buổi xem sẽ là một không gian an toàn để bạn chia sẻ vấn đề đang gặp phải. Chuyên viên Tarot sẽ sử dụng kỹ thuật trải bài chuyên sâu để phân tích và đưa ra thông điệp phù hợp với tình huống cụ thể của bạn, giúp bạn có cái nhìn rõ ràng hơn và tìm ra định hướng tích cực trong tương lai.",
    image: ServiceImage.service1,
  }),
  new ServiceModel({
    name: "Xem Tarot tình cảm",
    desc: "Nhìn rõ những kết nối, cảm xúc và điều bạn thật sự cần.",
    detail: "Gói xem Tarot tình cảm chuyên biệt dành cho những ai đang băn khoăn về các mối quan hệ yêu đương, tình bạn hoặc gia đình. Dịch vụ này sẽ giúp bạn hiểu rõ hơn về cảm xúc thật sự của bản thân và người khác, nhận diện được các rào cản trong tình cảm hiện tại và hướng đi phù hợp cho tương lai. Buổi trải bài sẽ tập trung vào những câu hỏi về sự thấu hiểu, mức độ kết nối, cơ hội tiến xa hoặc cần buông bỏ điều gì đó.",
    image: ServiceImage.service2,
  }),
  new ServiceModel({
    name: "Tư vấn tâm lý qua tarot",
    desc: "Gỡ rối suy nghĩ, tìm lại điểm tựa và hướng đi bình yên.",
    detail: "Dịch vụ tư vấn tâm lý qua Tarot là sự kết hợp giữa tâm linh và phân tích nội tâm. Bằng việc đặt ra những câu hỏi sâu sắc và sử dụng các lá bài như một công cụ soi sáng, chuyên viên sẽ giúp bạn nhận diện những cảm xúc bị kìm nén, những mô thức suy nghĩ tiêu cực, và gợi mở hướng đi lành mạnh hơn trong cuộc sống. Dịch vụ này phù hợp với những ai đang cảm thấy mất phương hướng, stress hoặc mong muốn phát triển bản thân một cách bền vững.",
    image: ServiceImage.service3,
  }),
];

const ServiceSections = () => (
  <div className="section-wrap section-space">
    <div className="section-heading">
      <span className="eyebrow">Những hành trình cùng Migan</span>
      <h2 className="serif-title">Một trải bài, một góc nhìn mới</h2>
      <p className="prose-copy">Chọn chủ đề bạn đang muốn lắng nghe. Mỗi buổi xem được dành riêng cho câu hỏi và nhịp điệu của bạn.</p>
    </div>
    <div className="service-grid">
      {services.map((item) => (
        <Link
          key={item.name}
          to="/detail_service/"
          state={{ item: { name: item.name, desc: item.desc, detail: item.detail, image: item.image } }}
          className="surface-card service-card"
        >
          <div className="service-image-wrap"><img className="service-image" src={item.image} alt="" loading="lazy" /></div>
          <div className="service-content">

            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <span className="text-link">Khám phá dịch vụ <ArrowRight size={16} aria-hidden="true" /></span>
          </div>
        </Link>
      ))}
    </div>
    <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm theme-muted"><Sparkles size={16} className="text-[#b89b66]" aria-hidden="true" /> Một buổi trò chuyện nhẹ nhàng, tôn trọng lựa chọn của bạn.</p>
  </div>
);

export default ServiceSections;
