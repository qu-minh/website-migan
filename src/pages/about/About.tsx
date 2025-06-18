import React from "react";
import { FaPhone } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24 sm:py-32 lg:px-8 bg-gray-100">
      <div className="text-center max-w-5xl mx-auto">
        {/* PHẦN DỊCH VỤ */}
        <div>
          <h2 className="text-5xl font-medium text-gray-800 mb-20">
            Dịch vụ của chúng tôi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: "🔮",
                title: "Tư vấn tình yêu",
                desc: "Giải mã các mối quan hệ, giúp bạn tìm được hạnh phúc trong tình yêu.",
              },
              {
                icon: "💼",
                title: "Tư vấn công việc",
                desc: "Nhận định và tư vấn về sự nghiệp, giúp bạn phát triển và thăng tiến.",
              },
              {
                icon: "🌿",
                title: "Tư vấn cuộc sống",
                desc: "Khám phá các lựa chọn trong cuộc sống, giúp bạn đưa ra quyết định đúng đắn.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
              >
                <div className="mb-4 w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-3xl shadow">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-center text-gray-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PHẦN CAM KẾT */}
        <div className="mt-20">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Chúng tôi cam kết
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
            Tarot Migan cam kết mang đến những trải nghiệm tư vấn chân thành,
            chính xác và đầy tâm huyết. Chúng tôi sẽ giúp bạn giải mã những câu
            hỏi lớn trong cuộc đời, giúp bạn tìm được con đường đúng đắn.
          </p>
        </div>

        {/* NÚT LIÊN HỆ */}
        <div className="mt-16">
          <button
            onClick={() => alert("0123456789")}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-lg font-medium text-white transition-all hover:bg-indigo-500 hover:scale-105 focus:outline-none shadow-lg hover:shadow-2xl"
          >
            <FaPhone /> Liên hệ với chúng tôi
          </button>
        </div>
      </div>
    </main>
  );
};

export default About;
