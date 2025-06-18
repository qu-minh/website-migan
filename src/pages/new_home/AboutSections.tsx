import { useNavigate } from "react-router-dom";

import { ImagesAssets } from "../../assets/ImagesAssets";

const AboutSection: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/blog");
  };

  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-0 text-left font-sans">
        {/* Left content */}
        <div className="text-gray-800">
          <h3 className="text-sm uppercase tracking-widest text-[#45ad27] mb-2 font-bold">
            Khám phá Tarot
          </h3>
          <h2 className="text-3xl font-bold tracking-wide mb-4 text-[#532e2e]">
            Tìm hiểu bí mật cuộc sống
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Thông qua những lá bài Tarot, Migan giúp bạn lắng nghe nội tâm, hiểu
            rõ bản thân và những cảm xúc ẩn sâu bên trong. Khi hiểu mình hơn,
            bạn sẽ dễ dàng nhận ra con đường phù hợp để sống trọn vẹn và chân
            thật với chính mình. Migan không chỉ là nơi xem Tarot, mà còn là
            người bạn đồng hành trên hành trình khám phá và chữa lành.
          </p>
          {/* <button
            onClick={handleNavigate}
            className="bg-[#9e5a5a] text-white px-5 py-2 rounded-md text-sm tracking-wide shadow-md hover:bg-[#864b4b] transition-colors"
          >
            Xem thêm
          </button> */}
        </div>

        {/* Right image */}
        <div className="relative flex justify-center md:justify-end">
          <div className="bg-white p-2 rounded-md shadow-lg inline-block transform rotate-1 max-w-md w-full">
            <img
              src={ImagesAssets.imageTarot1}
              alt="Migan Tarot"
              className="rounded-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
