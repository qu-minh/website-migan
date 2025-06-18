import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Trong component Navbar
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoHome = () => {
    if (location.pathname !== "/") {
      navigate("/"); // Chuyển về trang chủ
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100); // delay nhỏ để đợi trang chủ render
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setIsOpen(false); // nếu đang mở menu mobile
  };

  const handleNavigateToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");

      // Đợi trang chủ load xong mới scroll
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // delay đủ để đảm bảo trang chủ render xong
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    setIsOpen(false); // Đóng menu nếu đang mở trên mobile
  };
  const sections = [
    { text: "Dịch vụ", id: "#service" },
    { text: "Giới thiệu", id: "#about" },
    { text: "Liên hệ", id: "#contact" },
  ];
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          onClick={handleGoHome}
          className="self-center text-3xl uppercase font-bold whitespace-nowrap dark:text-white cursor-pointer bg-transparent border-none"
        >
          Migan Tarot
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:items-center md:space-x-6 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 transition-all">
            {sections.map(({ text, id }) => (
              <li key={text}>
                <button
                  onClick={() => handleNavigateToSection(id)}
                  className="block py-2 px-3 md:py-1 md:px-2 text-gray-900 rounded-md hover:text-blue-600 hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-blue-400 transition-all duration-150 ease-in-out"
                >
                  {text}
                </button>
              </li>
            ))}

            <ul className="flex space-x-3 mt-3 md:mt-0">
              <li>
                <a
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/migan.Tarot/",
                      "_blank"
                    )
                  }
                  className="w-10 h-10 rounded-full flex items-center justify-center
                 bg-gray-200 hover:bg-blue-600 text-blue-600 hover:text-white
                 dark:bg-gray-700 dark:hover:bg-blue-500 dark:text-white
                 cursor-pointer transition"
                >
                  <FaFacebookF size={18} />
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/migantarot/#",
                      "_blank"
                    )
                  }
                  className="w-10 h-10 rounded-full flex items-center justify-center
                 bg-gray-200 hover:bg-pink-500 text-pink-500 hover:text-white
                 dark:bg-gray-700 dark:hover:bg-pink-400 dark:text-white
                 cursor-pointer transition"
                >
                  <FaInstagram size={18} />
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    window.open("https://www.tiktok.com/@tarot_migan", "_blank")
                  }
                  className="w-10 h-10 rounded-full flex items-center justify-center
                 bg-gray-200 hover:bg-black text-black hover:text-white
                 dark:bg-gray-700 dark:hover:bg-white dark:text-white
                 cursor-pointer transition"
                >
                  <FaTiktok size={18} />
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
