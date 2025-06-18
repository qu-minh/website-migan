import {
  BriefcaseIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  HeartIcon,
  LightBulbIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const services = [
  {
    icon: <HeartIcon className="w-10 h-10 text-indigo-600" />,
    title: "Tư vấn tình yêu",
    desc: "Giải mã các mối quan hệ, giúp bạn tìm được hạnh phúc trong tình yêu.",
  },
  {
    icon: <BriefcaseIcon className="w-10 h-10 text-indigo-600" />,
    title: "Tư vấn công việc",
    desc: "Nhận định và tư vấn về sự nghiệp, giúp bạn phát triển và thăng tiến.",
  },
  {
    icon: <CheckCircleIcon className="w-10 h-10 text-indigo-600" />,
    title: "Tư vấn cuộc sống",
    desc: "Khám phá các lựa chọn trong cuộc sống, giúp bạn đưa ra quyết định đúng đắn.",
  },
  {
    icon: <UserGroupIcon className="w-10 h-10 text-indigo-600" />,
    title: "Tư vấn gia đình",
    desc: "Cân bằng giữa các mối quan hệ trong gia đình để tạo sự hài hòa và gắn kết.",
  },
  {
    icon: <LightBulbIcon className="w-10 h-10 text-indigo-600" />,
    title: "Khơi nguồn cảm hứng",
    desc: "Giúp bạn tìm lại động lực, ý nghĩa và mục tiêu trong cuộc sống.",
  },
  {
    icon: <GlobeAltIcon className="w-10 h-10 text-indigo-600" />,
    title: "Định hướng tương lai",
    desc: "Phân tích các lựa chọn phía trước, đưa ra hướng đi rõ ràng cho hành trình sắp tới.",
  },
];

// const services1 = [
//   {
//     img: "/web-design.png", // đường dẫn ảnh minh họa
//     title: "Web Design",
//     desc: "Custom web design for small businesses, we help you capture new audiences and increase your sales.",
//   },
//   {
//     img: "/graphic-design.png",
//     title: "Graphic Design",
//     desc: "Logos, merchandise and more. Anyone can create nice graphics. We think it’s better to create memorable ones.",
//   },
//   {
//     img: "/content-creation.png",
//     title: "Content Creation",
//     desc: "Want to attract people to your website? You have to have the best content in the world. That’s what we do.",
//   },
// ];

const ServiceList: React.FC = () => (
  <section className="bg-indigo-50 px-6 py-16 sm:py-24 lg:px-12">
    <div className="text-center max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
        Dịch vụ của chúng tôi
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 hover:translate-y-2"
          >
            <div className="mb-6 w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center shadow-md">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h3>
            <p className="text-center text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceList;
