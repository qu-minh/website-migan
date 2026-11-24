import { useState } from "react";
import { ArrowUpRight, Copy, MessageCircle, MoonStar } from "lucide-react";
import { MIGAN_FACEBOOK_URL } from "../../data/miganContact";

export default function ContactSection({ cardName }: { cardName: string }) {
  const [copyStatus, setCopyStatus] = useState("");
  const message = cardName ? `Chào Migan, mình muốn đặt lịch trải bài 1-1 để tìm hiểu sâu hơn về lá ${cardName} mình vừa rút.` : "";

  return (
    <section id="contact" className="section-space section-wrap" aria-labelledby="booking-title">
      <div className="booking-panel">
        <MoonStar className="booking-decoration" strokeWidth={.6} aria-hidden="true" />
        <div className="booking-copy">
          <span className="eyebrow">Trải bài riêng 1-1</span>
          <h2 id="booking-title" className="serif-title">{cardName ? `Khám phá sâu hơn lá ${cardName}` : "Khi bạn sẵn sàng, Migan ở đây."}</h2>
          <p className="prose-copy">Nhắn Migan trên Facebook để chia sẻ chủ đề bạn muốn xem và chọn thời gian phù hợp.</p>
          {message && (
            <div className="booking-message">
              <p>{message}</p>
              <button className="button-outline" type="button" onClick={async () => {
                try {
                  await navigator.clipboard.writeText(message);
                  setCopyStatus("Đã sao chép. Bạn có thể dán vào cuộc trò chuyện.");
                } catch {
                  setCopyStatus("Bạn có thể bôi đen lời nhắn ở trên để sao chép.");
                }
              }}><Copy size={15} aria-hidden="true" /> Sao chép lời nhắn</button>
              <p role="status">{copyStatus}</p>
            </div>
          )}
          <a className="button-primary" href={MIGAN_FACEBOOK_URL} target="_blank" rel="noreferrer"><MessageCircle size={17} aria-hidden="true" /> Nhắn Migan qua Facebook <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
