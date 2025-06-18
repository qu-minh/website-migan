import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "5 Lá Bài Tarot Về Nội Tâm",
    description: "Khám phá những lá bài tiết lộ con người thật của bạn...",
    image: "/images/blog1.jpg",
  },
  {
    id: 2,
    title: "Tình Yêu Đến Rồi Đi – Có Phải Do Số Phận?",
    description: "Phân tích các lá bài Tarot trong chuyện tình cảm...",
    image: "/images/blog2.jpg",
  },
  {
    id: 3,
    title: "3 Điều Bạn Chưa Bao Giờ Được Nói Về Bản Thân Mình",
    description: "Dẫn dụ từ Tarot để hiểu rõ bản thân hơn...",
    image: "/images/blog3.jpg",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fdfdfd] text-gray-800 font-sans">
      <div className="max-w-5xl mx-auto px-4 py-20">
        <motion.h1
          className="text-4xl md:text-5xl font-semibold text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Blog – Khám Phá Bí Mật Cuộc Sống
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{post.description}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Đọc thêm →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
