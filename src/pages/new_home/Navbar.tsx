import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + id);
      return;
    }
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const goHome = () => {
    setIsOpen(false);
    if (location.pathname !== "/") navigate("/");
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="Điều hướng chính">
        <button className="brand" onClick={goHome} aria-label="Migan Tarot — về đầu trang">
          <span className="brand-mark" aria-hidden="true"><Sparkles size={20} /></span>
          <span className="brand-name">Migan<small>Tarot & reflection</small></span>
        </button>
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Đóng menu" : "Mở menu"}
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
        <div id="primary-navigation" className={`nav-links${isOpen ? " is-open" : ""}`}>
          <button className="nav-link" onClick={() => goToSection("#about")}>Về Migan</button>
          <button className="nav-link" onClick={() => goToSection("#tarot-table")}>Rút bài</button>
          <button className="nav-link" onClick={() => { setIsOpen(false); navigate("/blog/"); }}>Góc chiêm nghiệm</button>
          <button className="nav-link" onClick={() => { setIsOpen(false); navigate("/faq_section/"); }}>Hỏi đáp</button>
          <button className="button-primary nav-book" onClick={() => goToSection("#contact")}>Đặt lịch xem bài</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
