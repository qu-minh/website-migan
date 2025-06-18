import { motion } from "framer-motion";
import React from "react";
import { ImagesAssets } from "../../assets/ImagesAssets";
import AboutSection from "./AboutSections"; // hoặc đường dẫn phù hợp
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ServiceSections from "./ServiceSections";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const NewHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-white  text-gray-900">
      {/* Thanh Navbar */}
      <Navbar />

      <motion.header
        className="absolute top-0 left-0 w-full z-30 py-5"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      ></motion.header>

      {/* Hình nền */}
      <section className="relative w-full h-screen flex items-center justify-center text-center px-4 py-4">
        <img
          src={ImagesAssets.banner3}
          alt="Hero"
          className="absolute  bg-white inset-0 w-full h-full object-cover brightness-50"
        />
        <motion.h1
          className="relative z-10 text-5xl md:text-7xl font-light tracking-widest font-serif text-white uppercase"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Migan Tarot
        </motion.h1>
      </section>

      {/* Giới thiệu */}
      <motion.section
        id="about"
        className=" bg-white text-center scroll-mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <AboutSection />
      </motion.section>

      {/* Dịch vụ */}
      <motion.section
        id="service"
        className="px-6 py-40 bg-[#EEF1EF] text-center font-mono scroll-mt-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <ServiceSections />
      </motion.section>

      {/* Liên hệ  */}
      <motion.section
        id="contact"
        className="px-6 py-40 bg-white text-center scroll-mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <ContactSection />
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NewHome;
