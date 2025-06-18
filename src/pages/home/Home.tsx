import React from "react";
import AppBar from "./appbar/appbar";
import BannerSlider from "./BannerSlider";
import ServiceList from "./ServiceList";
import WhyChooseUs from "./WhyChooseUs";

const Home: React.FC = () => {
  return (
    <div className="font-sans bg-indigo-50">
      <AppBar />
      <BannerSlider />
      <ServiceList />
      <WhyChooseUs />

      {/* Lời chứng thực */}
      <section className="px-6 py-16 sm:py-24 bg-indigo-50">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6">
            Những lời chứng thực từ khách hàng
          </h2>
          <div className="text-lg text-gray-600">
            <p>
              "Dịch vụ tư vấn tình yêu của Migan đã giúp tôi giải quyết nhiều
              vấn đề trong mối quan hệ của mình. Cảm ơn đội ngũ chuyên gia đã
              giúp tôi nhìn nhận rõ hơn về bản thân và tương lai."
            </p>
            <p className="mt-6 font-semibold">Nguyễn Lan - Khách hàng</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-indigo-600 text-white">
        <h3 className="text-3xl font-bold mb-4">Sẵn sàng tìm hiểu thêm?</h3>
        <p className="mb-6">
          Hãy liên hệ với chúng tôi để bắt đầu hành trình của bạn.
        </p>
        <button className="bg-indigo-700 hover:bg-indigo-800 px-8 py-4 rounded-lg">
          Liên hệ ngay
        </button>
      </section>
    </div>
  );
};

export default Home;
