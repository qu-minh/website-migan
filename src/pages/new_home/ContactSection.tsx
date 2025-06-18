import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1fr] gap-10 font-sans text-left items-center">
        {/* FORM */}
        <motion.div
          className="w-full max-w-xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          <p className="text-green-600 font-semibold uppercase">
            Kết nối với Migan
          </p>
          <h2 className="text-3xl font-bold mt-2 mb-6">
            Hãy đặt lịch xem tarot ngay!
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block font-semibold mb-1">
                Tên của bạn <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Jane Smith"
                className="w-full border border-gray-400 p-3 rounded"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="email@website.com"
                className="w-full border border-gray-400 p-3 rounded"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Số điện thoại <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="0979xxx..."
                className="w-full border border-gray-400 p-3 rounded"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Tin nhắn</label>
              <textarea
                className="w-full border border-gray-400 p-3 rounded h-28"
                placeholder="Bạn cần xem về điều gì?"
              />
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" required />
              <p className="text-sm">
                Tôi đồng ý để website lưu thông tin này để liên hệ lại.{" "}
                <span className="text-red-500">*</span>
              </p>
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded w-full transition"
            >
              GỬI THÔNG TIN
            </button>
          </form>
        </motion.div>

        {/* CONTACT INFO */}
        <motion.div
          className="bg-gray-100 p-6 rounded shadow-md w-full max-w-md mx-auto h-fit"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          <h3 className="font-bold text-lg">Kết nối với Migan</h3>
          <p className="flex items-center gap-2 text-gray-700 mt-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:migan@gmail.com" className="underline">
              migan@gmail.com
            </a>
          </p>

          <h3 className="font-bold text-lg mt-6">Địa chỉ</h3>
          <p className="flex items-center gap-2 text-gray-700 mt-2">
            <MapPin className="w-4 h-4" />
            <a
              href="https://www.google.com/maps/place/Can+Tho"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Can Tho, CT VN
            </a>
          </p>

          <h3 className="font-bold text-lg mt-6">Giờ hoạt động</h3>
          <div className="mt-2 text-gray-700 space-y-1 text-sm">
            {[
              ["Thứ Hai", "9:00 – 22:00"],
              ["Thứ Ba", "9:00 – 22:00"],
              ["Thứ Tư", "9:00 – 22:00"],
              ["Thứ Năm", "9:00 – 22:00"],
              ["Thứ Sáu", "9:00 – 22:00"],
              ["Thứ Bảy", "9:00 – 18:00"],
              ["Chủ nhật", "9:00 – 24:00"],
            ].map(([day, time]) => (
              <div key={day} className="flex justify-between w-full">
                <span>{day}</span>
                <span>{time}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
