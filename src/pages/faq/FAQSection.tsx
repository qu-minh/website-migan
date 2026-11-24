import { MIGAN_FACEBOOK_URL } from "../../data/miganContact";
import { Link } from "react-router-dom";
import Footer from "../new_home/Footer";
import Navbar from "../new_home/Navbar";

const faqs = [
  { question: "Migan Tarot là gì?", answer: "Migan Tarot là một trang web chuyên cung cấp dịch vụ xem Tarot trực tuyến. Người dùng có thể tìm hiểu về bản thân, tương lai và những cơ hội trong cuộc sống thông qua các lá bài Tarot. Bằng cách kết nối với các chuyên gia có kinh nghiệm, bạn sẽ nhận được nhiều lời khuyên hữu ích giúp bạn đưa ra quyết định đúng đắn và nâng cao nhận thức cá nhân." },
  { question: "Làm thế nào để đặt lịch xem Tarot?", answer: "Nhấn “Đặt lịch xem bài” rồi chọn “Nhắn Migan qua Facebook”. Hãy gửi chủ đề bạn muốn trải bài và thời gian bạn rảnh để Migan xác nhận lịch." },
  { question: "Migan Tarot có cung cấp dịch vụ xem Tarot trực tiếp không?", answer: "Có, Migan Tarot cung cấp dịch vụ xem Tarot trực tiếp tại Cần Thơ. Bạn có thể liên hệ để đặt lịch trực tiếp hoặc thông qua nền tảng trực tuyến. Đối với những người ở xa, chúng tôi cũng hỗ trợ xem bài qua video call, giúp bạn có trải nghiệm trọn vẹn như khi gặp trực tiếp." },
  { question: "Xem Tarot có cần chuẩn bị gì trước không?", answer: "Bạn không cần chuẩn bị gì đặc biệt trước khi xem Tarot. Tuy nhiên, nếu bạn có câu hỏi cụ thể hoặc vấn đề cần tư vấn, hãy ghi chú lại để buổi xem hiệu quả hơn. Sự thành thật và cởi mở sẽ giúp chuyên gia dễ dàng kết nối và đưa ra những lời khuyên sát thực nhất." },
  { question: "Xem Tarot có chính xác không?", answer: "Tarot không phải là bói toán, mà là công cụ giúp bạn hiểu rõ hơn về bản thân và định hướng. Độ chính xác phụ thuộc vào cách bạn đặt câu hỏi và sự kết nối với Reader. Sự chính xác còn nằm ở việc bạn có sẵn sàng tiếp nhận thông điệp một cách cởi mở và chân thành hay không." },
];

const FAQSection = () => (
  <div className="site-journey min-h-screen"><Navbar />
    <main className="inner-page">
      <div className="section-wrap">
        <div className="inner-hero"><span className="eyebrow">Hỏi đáp nhẹ nhàng</span><h1 className="serif-title">Có điều gì bạn muốn biết?</h1><p className="prose-copy">Một vài thông tin để bạn cảm thấy thoải mái hơn trước khi bắt đầu.</p></div>
        <div className="faq-list mx-auto max-w-3xl">
          {faqs.map(({ question, answer }) => <details key={question} className="surface-card faq-item group"><summary className="flex list-none items-center justify-between gap-4 "><span>{question}</span><span className="font-sans text-xl theme-accent transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p className="prose-copy">{answer}</p></details>)}
        </div>
        <p className="mt-10 text-center text-sm theme-muted">Còn điều gì muốn hỏi? <a className="font-semibold theme-accent underline underline-offset-4" href={MIGAN_FACEBOOK_URL} target="_blank" rel="noreferrer">Nhắn tin cho Migan</a>.</p>
        <div className="mt-6 text-center"><Link to="/" className="text-sm theme-muted underline underline-offset-4">Trở về trang chủ</Link></div>
      </div>
    </main><Footer />
  </div>
);

export default FAQSection;
