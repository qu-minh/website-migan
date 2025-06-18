import React from "react";
import { FaBars } from "react-icons/fa";

const AppBar: React.FC = () => {
  return (
    <header className="relative flex justify-between items-center px-6 py-4 bg-indigo-50">
      {/* Bên trái */}
      <div className="text-2xl font-bold text-gray-800">Migan*</div>

      {/* Tabs chính giữa, dùng absolute để canh giữa */}
      <nav className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-6 text-gray-700 font-medium text-lg">
        <a href="#about" className="hover:text-indigo-500">
          Giới thiệu
        </a>
        <a href="#services" className="hover:text-indigo-500">
          Dịch vụ
        </a>
        <a href="#booking" className="hover:text-indigo-500">
          Đặt lịch
        </a>
        <a href="#contact" className="hover:text-indigo-500">
          Liên hệ
        </a>
      </nav>

      {/* Bên phải */}
      <div className="text-2xl text-gray-700 cursor-pointer">
        <FaBars />
      </div>
    </header>
  );
};

export default AppBar;
