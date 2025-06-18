import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121f16] text-white py-8 px-4 text-sm ">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-6 font-medium">
          <a href="#" className="hover:underline">
            Đặt Lịch Hẹn
          </a>
          <a href="faq_section" className="hover:underline">
            Câu Hỏi Thường Gặp
          </a>
        </div>

        <div className="mt-4 md:mt-0 text-xs text-gray-400">
          <a href="#" className="hover:underline">
            Web design by <strong>Migan</strong>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
