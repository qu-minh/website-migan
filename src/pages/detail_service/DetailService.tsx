import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../new_home/Footer";
import Navbar from "../new_home/Navbar";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const DetailService: React.FC = () => {
  const location = useLocation();
  const service = location.state?.item;

  if (!service) return <div>Không có dữ liệu</div>;

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <motion.main
        className="flex-grow max-w-6xl mx-auto py-16 px-4 md:px-6 flex flex-col md:flex-row items-start md:items-center justify-center gap-10"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={service.image}
            alt={service.name}
            className="rounded-lg w-full object-cover shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 w-full">
          <h3 className="text-base uppercase tracking-widest text-green-600 font-bold mb-3">
            {service.name}
          </h3>
          <p className="text-[#808080] leading-relaxed mb-6 whitespace-pre-line text-xl font-normal">
            {service.detail}
          </p>
          <a
            href="#"
            className="text-sm underline text-gray-800 hover:text-green-700 transition"
          >
            Lên lịch hẹn
          </a>
        </div>
      </motion.main>

      {/* Footer luôn ở dưới */}
      <Footer />
    </div>
  );
};

export default DetailService;
