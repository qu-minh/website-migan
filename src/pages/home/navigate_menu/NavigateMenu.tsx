import { motion } from "framer-motion";
import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom"; // Thêm import Link

const menuItems = [
  { name: "Giới thiệu", path: "/about" },
  { name: "Dịch vụ", path: "/service" },
  { name: "Đặt lịch", path: "/booking" },
  { name: "Liên hệ", path: "/contract" },
];

const NavigateMenu: React.FC = () => {
  return (
    <div>
      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <Link to={item.path} key={index}>
          {" "}
          {/* Thêm Link quanh menu item */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-4 px-6 py-3 text-center bg-white/10 rounded-xl text-white text-lg font-semibold shadow-lg backdrop-blur-sm transition duration-300 cursor-pointer hover:bg-white/20"
          >
            {item.name}
          </motion.div>
        </Link>
      ))}

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-6 mt-6 text-3xl">
        {[FaFacebookF, FaInstagram, FaTiktok].map((Icon, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2, rotate: 2 }}
            className="p-3 rounded-full bg-white/10 text-white shadow-md hover:bg-white/20 transition cursor-pointer"
          >
            <Icon />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NavigateMenu;
