import React from "react";
import { ImagesAssets } from "../../assets/ImagesAssets";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 lg:px-8 font-mono">
      <div className="max-w-6xl  mx-auto flex flex-col lg:flex-row items-center lg:items-center gap-x-12">
        {/* Hình ảnh */}
        <div className="w-full lg:w-5/12 mb-10 lg:mb-0">
          <img
            src={ImagesAssets.imageTarot1}
            alt="Vì sao chọn chúng tôi"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Tiêu đề và mô tả */}
        <div className="w-full lg:w-7/12">
          <h2 className=" mb-4 text-2xl font-semibold uppercase text-gray-900 mb-">
            Vì sao chọn chúng tôi?
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
            Chúng tôi mang đến dịch vụ tư vấn chuyên nghiệp, giúp bạn giải quyết
            các vấn đề trong cuộc sống, công việc và tình yêu. Với đội ngũ
            Reader giàu kinh nghiệm và tận tâm, mỗi buổi xem bài không chỉ là
            một trải nghiệm tâm linh mà còn là một hành trình khám phá bản thân.
            Dù bạn đang bối rối trước những ngã rẽ cuộc đời, cần lời khuyên
            trong tình cảm, hay đang tìm hướng đi cho sự nghiệp – chúng tôi luôn
            ở đây để lắng nghe, đồng hành và giúp bạn nhìn thấy những điều chưa
            rõ. Hãy để Migan Tarot trở thành người bạn đáng tin cậy trên con
            đường tìm kiếm sự thịnh vượng, bình an và hạnh phúc thật sự trong
            tâm hồn bạn.
          </p>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-2xl shadow-md transition duration-300 tracking-wider uppercase text-sm font-medium">
            Đặt lịch ngay
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
