import React from "react";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#121f16] text-white py-8 px-4 text-sm">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-6 font-medium">
          <button
            onClick={() => navigate("/booking")}
            className="hover:underline"
          >
            Đặt Lịch Hẹn
          </button>
          <button
            onClick={() => navigate("/faq_section")}
            className="hover:underline"
          >
            Câu Hỏi Thường Gặp
          </button>
        </div>

        <div className="mt-4 md:mt-0 text-xs text-gray-400">
          <button onClick={() => navigate("/")} className="hover:underline">
            Web design by <strong>Migan</strong>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
