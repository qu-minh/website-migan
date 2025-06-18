import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ImagesAssets } from "../../assets/ImagesAssets";

const BannerSlider: React.FC = () => {
  const images = [ImagesAssets.banner3, ImagesAssets.banner2];
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(false);

  const switchImage = (direction: "prev" | "next") => {
    setFade(true);
    setTimeout(() => {
      setCurrentImage((prev) =>
        direction === "prev"
          ? prev === 0
            ? images.length - 1
            : prev - 1
          : prev === images.length - 1
          ? 0
          : prev + 1
      );
      setFade(false);
    }, 500);
  };

  return (
    <section className="relative w-full h-[70vh] overflow-hidden px-4  bg-indigo-50">
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
        <img
          src={images[currentImage]}
          alt="Banner"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-start px-6 md:px-16 py-12">
          <div className="text-white text-left max-w-xl space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Chào mừng <br />
              đến với <span className="text-indigo-400">Migan Tarot</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              Nơi những lá bài mở ra con đường cho bạn. Hãy để chúng tôi đồng
              hành cùng bạn.
            </p>
            <a
              href="#booking"
              className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-lg sm:text-xl font-semibold py-4 px-10 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Đặt lịch ngay
            </a>
            <div className="mt-6 flex items-center gap-6">
              <button
                onClick={() => switchImage("prev")}
                className="w-14 h-14 rounded-full bg-white text-indigo-600 hover:bg-indigo-200 hover:text-indigo-800 shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
                aria-label="Lùi"
              >
                <FaArrowLeft className="text-xl" />
              </button>
              <button
                onClick={() => switchImage("next")}
                className="w-14 h-14 rounded-full bg-white text-indigo-600 hover:bg-indigo-200 hover:text-indigo-800 shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
                aria-label="Tiến"
              >
                <FaArrowRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;
