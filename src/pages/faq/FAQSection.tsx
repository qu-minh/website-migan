import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "../new_home/Footer";
import Navbar from "../new_home/Navbar";

const faqs = [
  {
    question: "Migan Tarot là gì?",
    answer:
      "Migan Tarot là một trang web chuyên cung cấp dịch vụ xem Tarot trực tuyến. Người dùng có thể tìm hiểu về bản thân, tương lai và những cơ hội trong cuộc sống thông qua các lá bài Tarot. Bằng cách kết nối với các chuyên gia có kinh nghiệm, bạn sẽ nhận được nhiều lời khuyên hữu ích giúp bạn đưa ra quyết định đúng đắn và nâng cao nhận thức cá nhân.",
  },
  {
    question: "Làm thế nào để đặt lịch xem Tarot?",
    answer:
      "Để đặt lịch xem Tarot tại Migan Tarot, bạn chỉ cần truy cập vào trang web và nhấn vào liên kết đến Facebook, Instagram hoặc TikTok của chúng tôi. Tại đây, bạn sẽ tìm thấy thông tin cụ thể về cách thức đặt lịch và những chuyên gia sẵn sàng phục vụ bạn. Quá trình đặt lịch rất nhanh chóng và linh hoạt, phù hợp với mọi lịch trình của bạn.",
  },
  {
    question: "Migan Tarot có cung cấp dịch vụ xem Tarot trực tiếp không?",
    answer:
      "Có, Migan Tarot cung cấp dịch vụ xem Tarot trực tiếp tại Cần Thơ, VN. Bạn có thể liên hệ để đặt lịch trực tiếp hoặc thông qua nền tảng trực tuyến. Đối với những người ở xa, chúng tôi cũng hỗ trợ xem bài qua video call, giúp bạn có trải nghiệm trọn vẹn như khi gặp trực tiếp.",
  },
  {
    question: "Xem Tarot có cần chuẩn bị gì trước không?",
    answer:
      "Bạn không cần chuẩn bị gì đặc biệt trước khi xem Tarot. Tuy nhiên, nếu bạn có câu hỏi cụ thể hoặc vấn đề cần tư vấn, hãy ghi chú lại để buổi xem hiệu quả hơn. Sự thành thật và cởi mở sẽ giúp chuyên gia dễ dàng kết nối và đưa ra những lời khuyên sát thực nhất.",
  },
  {
    question: "Xem Tarot có chính xác không?",
    answer:
      "Tarot không phải là bói toán, mà là công cụ giúp bạn hiểu rõ hơn về bản thân và định hướng. Độ chính xác phụ thuộc vào cách bạn đặt câu hỏi và sự kết nối với Reader. Sự chính xác còn nằm ở việc bạn có sẵn sàng tiếp nhận thông điệp một cách cởi mở và chân thành hay không.",
  },
];

// Animation config
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

const FAQSection = () => {
  const [selectedFaq, setSelectedFaq] = useState<null | {
    question: string;
    answer: string;
  }>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />

      <motion.section
        className="flex-grow bg-white py-16 px-4 md:px-6"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="max-w-3xl mx-auto  text-left mt-10">
          <p className="text-sm font-semibold text-green-600 uppercase">
            Hỏi đáp nhanh
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Giải đáp thắc mắc của bạn
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mt-10 space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-xl rounded-xl p-6 text-left"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-700 mb-3 line-clamp-3">{faq.answer}</p>
              <button
                onClick={() => setSelectedFaq(faq)}
                className="text-sm underline text-gray-800 hover:text-green-700 transition"
              >
                Xem thêm
              </button>
            </motion.div>
          ))}
        </div>

        {/* Dialog */}
        <Dialog
          open={!!selectedFaq}
          onClose={() => setSelectedFaq(null)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white max-w-lg mx-auto rounded-xl p-6 shadow-xl">
              <Dialog.Title className="text-xl font-bold mb-2">
                {selectedFaq?.question}
              </Dialog.Title>
              <Dialog.Description className="text-gray-700 whitespace-pre-line">
                {selectedFaq?.answer}
              </Dialog.Description>
              <button
                onClick={() => setSelectedFaq(null)}
                className="mt-6 text-sm underline text-gray-800 hover:text-red-600"
              >
                Đóng
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </motion.section>

      <Footer />
    </div>
  );
};

export default FAQSection;
