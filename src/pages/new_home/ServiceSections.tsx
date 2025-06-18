import { useNavigate } from "react-router-dom";
import { ServiceImage } from "../../assets/ImagesAssets";
import { ServiceModel } from "../../model/service_model";

const services = [
  new ServiceModel({
    name: "Xem tarot cá nhân",
    desc: "Khám phá thông điệp từ các lá bài.",
    detail:
      "Dịch vụ xem tarot cá nhân giúp bạn khám phá sâu hơn về những khía cạnh riêng tư trong cuộc sống như tình cảm, công việc, tài chính hoặc sức khỏe tinh thần. Mỗi buổi xem sẽ là một không gian an toàn để bạn chia sẻ vấn đề đang gặp phải. Chuyên viên Tarot sẽ sử dụng kỹ thuật trải bài chuyên sâu để phân tích và đưa ra thông điệp phù hợp với tình huống cụ thể của bạn, giúp bạn có cái nhìn rõ ràng hơn và tìm ra định hướng tích cực trong tương lai.",
    image: ServiceImage.service1,
  }),
  new ServiceModel({
    name: "Xem Tarot tình cảm",
    desc: "Tìm hiểu về mối quan hệ và cảm xúc.",
    detail:
      "Gói xem Tarot tình cảm chuyên biệt dành cho những ai đang băn khoăn về các mối quan hệ yêu đương, tình bạn hoặc gia đình. Dịch vụ này sẽ giúp bạn hiểu rõ hơn về cảm xúc thật sự của bản thân và người khác, nhận diện được các rào cản trong tình cảm hiện tại và hướng đi phù hợp cho tương lai. Buổi trải bài sẽ tập trung vào những câu hỏi về sự thấu hiểu, mức độ kết nối, cơ hội tiến xa hoặc cần buông bỏ điều gì đó.",
    image: ServiceImage.service2,
  }),
  new ServiceModel({
    name: "Tư vấn tâm lý qua tarot",
    desc: "Giải tỏa căng thẳng và tìm hiểu bản thân.",
    detail:
      "Dịch vụ tư vấn tâm lý qua Tarot là sự kết hợp giữa tâm linh và phân tích nội tâm. Bằng việc đặt ra những câu hỏi sâu sắc và sử dụng các lá bài như một công cụ soi sáng, chuyên viên sẽ giúp bạn nhận diện những cảm xúc bị kìm nén, những mô thức suy nghĩ tiêu cực, và gợi mở hướng đi lành mạnh hơn trong cuộc sống. Dịch vụ này phù hợp với những ai đang cảm thấy mất phương hướng, stress hoặc mong muốn phát triển bản thân một cách bền vững.",
    image: ServiceImage.service3,
  }),
];

const ServiceSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="service"
      className="py-10 max-w-6xl mx-auto font-sans text-left px-4"
    >
      <h3 className="text-sm uppercase tracking-widest text-[#45ad27] mb-2 font-bold">
        Chiêm tinh tarot
      </h3>
      <h2 className="text-3xl font-bold tracking-wide mb-12 text-[#532e2e]">
        Khám phá bí ẩn cuộc sống của bạn
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out group overflow-hidden"
          >
            <div
              onClick={() => {
                const { name, desc, detail, image } = item;
                navigate("/detail_service", {
                  state: { item: { name, desc, detail, image } },
                });
              }}
              className="relative w-full h-48 overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-90"
              />
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-900 flex items-center justify-between">
                {item.name}
                <span className="text-lg ml-1 transition-transform group-hover:translate-x-1">{`>`}</span>
              </h3>
              <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
