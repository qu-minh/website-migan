import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ContactSection from "./ContactSection";
import AboutSection from "./AboutSections";
import DailyTarotSection from "./DailyTarotSection";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ServiceSections from "./ServiceSections";

const ease = [.2, .75, .25, 1] as const;
const heroCards = [
  { image: "/assets/cards/18-the-moon.jpg", position: "moon" },
  { image: "/assets/cards/19-the-sun.jpg", position: "sun" },
  { image: "/assets/cards/17-the-star.jpg", position: "star" },
];

const NewHome = () => {
  const { hash, key } = useLocation();
  const [cardName, setCardName] = useState("");
  const reduceMotion = useReducedMotion();
  const revealInView = {
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: .12 },
    transition: { duration: .65, ease },
  };

  useEffect(() => {
    if (!hash) return;
    const destination = document.getElementById(hash.slice(1));
    destination?.scrollIntoView();
    if (hash === "#tarot-table") destination?.focus({ preventScroll: true });
  }, [hash, key]);

  return (
    <div className="site-journey min-h-screen">
      <Navbar />
      <main>
        <section className="hero sanctuary-hero" aria-labelledby="hero-title">
          <div className="section-wrap sanctuary-grid">
            <div className="sanctuary-copy">
              <span className="eyebrow sanctuary-enter"><Sparkle size={16} aria-hidden="true" /> Migan Tarot</span>
              <h1 id="hero-title" className="serif-title sanctuary-enter">Dành một chút<br /><em>lắng nghe</em><br />chính mình.</h1>
              <p className="prose-copy sanctuary-enter">Rút một lá trong bộ Tarot 78 lá và dành vài phút nhìn lại điều bạn đang cảm thấy hôm nay.</p>
              <div className="hero-actions sanctuary-enter">
                <Link className="button-primary" to="/#tarot-table">Rút lá bài hôm nay <ArrowDown size={16} aria-hidden="true" /></Link>
                <a className="button-outline" href="#service">Xem trải bài 1-1 <ArrowUpRight size={16} aria-hidden="true" /></a>
              </div>
            </div>

            <div className="sanctuary-art" aria-hidden="true">
              <div className="sanctuary-orbit" />
              <Sparkle className="sanctuary-sparkle is-north" size={24} strokeWidth={1} />
              <Sparkle className="sanctuary-sparkle is-east" size={18} strokeWidth={1} />
              <Sparkle className="sanctuary-sparkle is-south" size={14} strokeWidth={1} />
              {heroCards.map(({ image, position }) => (
                <div key={image} className={`sanctuary-card is-${position}`}>
                  <img src={image} alt="" fetchPriority={position === "star" ? "high" : "auto"} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <DailyTarotSection onBook={(card) => setCardName(card.name)} />

        <motion.section id="service" className="journey-divider" {...revealInView}>
          <ServiceSections />
        </motion.section>

        <motion.section id="about" className="journey-divider" {...revealInView}>
          <AboutSection />
        </motion.section>

        <ContactSection key={cardName} cardName={cardName} />
        <div className="section-wrap journey-help">
          <Link to="/blog/">Góc chiêm nghiệm <ArrowUpRight size={15} aria-hidden="true" /></Link>
          <Link to="/faq_section/">Câu hỏi thường gặp <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewHome;
