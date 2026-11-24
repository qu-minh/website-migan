import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, RotateCcw, Shuffle, Sparkles } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { tarotDeckData, type TarotDeckCard } from "../../data/tarotDeckData";

const STORAGE_KEY = "migan-tarot-daily-v1";
const ease = [.2, .75, .25, 1] as const;
const BACK_OF_CARD = "/assets/cards/card-back.jpg";
type Stage = "idle" | "shuffling" | "spread" | "revealing" | "result";

function todayKey() {
  const today = new Date();
  return [today.getFullYear(), String(today.getMonth() + 1).padStart(2, "0"), String(today.getDate()).padStart(2, "0")].join("-");
}

function shuffleCards() {
  const cards = [...tarotDeckData];
  for (let index = cards.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [cards[index], cards[swapIndex]] = [cards[swapIndex], cards[index]];
  }
  return cards;
}

function readSavedCard(): TarotDeckCard | null {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return null;
    const parsed: { date?: string; cardId?: number } = JSON.parse(saved);
    if (parsed.date !== todayKey() || typeof parsed.cardId !== "number") return null;
    return tarotDeckData.find((card) => card.id === parsed.cardId) ?? null;
  } catch {
    return null;
  }
}

const readingItems = [
  { key: "overall", label: "Năng lượng tổng quan" },
  { key: "work", label: "Công việc & học tập" },
  { key: "love", label: "Tình cảm & kết nối" },
  { key: "healing", label: "Lời nhắn chữa lành" },
] as const;

const DailyTarotSection = ({ onBook }: { onBook: (card: TarotDeckCard) => void }) => {
  const reduceMotion = useReducedMotion();
  const [deck, setDeck] = useState(tarotDeckData);
  const [card, setCard] = useState(readSavedCard);
  const [stage, setStage] = useState<Stage>(() => card ? "result" : "idle");
  const [flight, setFlight] = useState<CSSProperties>();
  const locked = useRef(false);
  const target = useRef<HTMLDivElement>(null);
  const prompt = useRef<HTMLParagraphElement>(null);
  const result = useRef<HTMLHeadingElement>(null);
  const didDraw = useRef(false);

  useEffect(() => {
    if (stage === "spread") {
      locked.current = false;
      prompt.current?.focus({ preventScroll: true });
    }
    if (stage === "result" && didDraw.current) {
      result.current?.focus({ preventScroll: true });
      result.current?.scrollIntoView({ block: "nearest" });
    }
    if (stage !== "shuffling" && stage !== "revealing") return;
    const timer = window.setTimeout(() => {
      if (stage === "shuffling") {
        setStage("spread");
        return;
      }
      if (!card) return;
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: todayKey(), cardId: card.id }));
      } catch { /* The reading remains available without storage. */ }
      didDraw.current = true;
      setStage("result");
    }, reduceMotion ? 0 : stage === "shuffling" ? 1500 : 1050);
    return () => window.clearTimeout(timer);
  }, [stage, card, reduceMotion]);

  const startShuffle = () => {
    locked.current = true;
    setDeck(shuffleCards());
    setCard(null);
    setStage("shuffling");
    if (stage === "result") document.getElementById("tarot-table")?.scrollIntoView({ block: "nearest" });
  };

  const chooseCard = (event: MouseEvent<HTMLButtonElement>, chosen: TarotDeckCard) => {
    if (stage !== "spread" || locked.current || !target.current) return;
    locked.current = true;
    const source = event.currentTarget.getBoundingClientRect();
    const center = target.current.getBoundingClientRect();
    setFlight({
      "--flight-x": (source.left + source.height / 3 - center.left - center.width / 2) + "px",
      "--flight-y": (source.top + source.height / 2 - center.top - center.height / 2) + "px",
      "--flight-scale": (source.height * 2 / 3) / center.width,
    } as CSSProperties);
    setCard(chosen);
    setStage("revealing");
  };

  return (
    <section id="daily-tarot" className="daily-tarot section-space" aria-labelledby="daily-tarot-title">
      <div className="section-wrap">
        <div className="section-heading daily-heading">
          <span className="eyebrow"><Sparkles size={14} aria-hidden="true" /> Thông điệp Tarot hôm nay</span>
          <h2 id="daily-tarot-title" className="serif-title">Hôm nay bạn thế nào?</h2>
          <p className="prose-copy">Hít một hơi thật sâu, giữ trong lòng điều bạn muốn lắng nghe rồi để trực giác dẫn lối.</p>
        </div>
        <div className="daily-table" id="tarot-table" tabIndex={-1}>
          {stage === "idle" && (
            <div className="daily-idle">
              <div className="daily-idle-stack" aria-hidden="true">
                {Array.from({ length: 9 }, (_, index) => (
                  <span key={index} className="daily-stack-layer" style={{ transform: `translate3d(${index * 1.3}px, ${-index * 1.5}px, 0) rotate(${(index - 4) * .5}deg)` }} />
                ))}
                <img src={BACK_OF_CARD} alt="" />
              </div>
              <p>78 lá bài đang chờ bạn chọn theo trực giác.</p>
              <button type="button" className="button-primary" onClick={startShuffle}><Sparkles size={16} aria-hidden="true" /> Trải bài &amp; Rút thông điệp hôm nay</button>
            </div>
          )}

          {stage === "shuffling" && (
            <div className="daily-shuffling" role="status">
              <div className="daily-shuffle-piles" aria-hidden="true">
                <span className="daily-shuffle-glow" />
                {Array.from({ length: 18 }, (_, index) => (
                  <span key={index} className="daily-shuffle-card" style={{
                    "--pile-x": [-76, 0, 76][index % 3] + "px",
                    "--cross-x": [65, -62, 0][index % 3] + "px",
                    "--pile-y": ((index % 2 ? -25 : 24) + Math.floor(index / 3) * 2) + "px",
                    "--tilt": (index % 2 ? -15 : 15) + "deg",
                    "--delay": (index % 6) * 12 + "ms",
                  } as CSSProperties} />
                ))}
              </div>
              <p>Đang xào bài. Hãy giữ câu hỏi trong lòng bạn.</p>
            </div>
          )}

          {(stage === "spread" || stage === "revealing") && (
            <div className={`daily-spread${stage === "revealing" ? " is-revealing" : ""}`}>
              <div className="daily-spread-toolbar">
                <p ref={prompt} tabIndex={-1} aria-live="polite">
                  {stage === "revealing" ? "Đang lật lá bài của bạn…" : "Chọn một trong 78 lá theo trực giác."}
                </p>
                <span className="daily-swipe-hint">Vuốt ngang để xem thêm</span>
              </div>
              <div className="daily-spread-board">
                <div className="daily-spread-scroll" role="group" aria-label="Bộ Tarot 78 lá">
                  <div className="daily-spread-grid">
                    {deck.map((item, index) => (
                      <button key={item.id} type="button" className={`daily-spread-card${card?.id === item.id ? " is-selected" : ""}`}
                        style={{ "--delay": (index % 26) * 9 + "ms" } as CSSProperties}
                        onClick={(event) => chooseCard(event, item)} disabled={stage !== "spread"}
                        aria-label={`Chọn lá bài úp số ${index + 1} trong 78`} />
                    ))}
                  </div>
                </div>
                <div className="daily-flight-target" ref={target} aria-hidden="true">
                  {stage === "revealing" && card && (
                    <div className="daily-flight" style={flight}>
                      <div className="daily-flip">
                        <span className="daily-flip-back" />
                        <img className="daily-flip-front" src={card.image} alt="" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <button type="button" className="daily-redraw" onClick={startShuffle} disabled={stage !== "spread"}>
                <Shuffle size={14} aria-hidden="true" /> Xào lại bài
              </button>
            </div>
          )}

          {stage === "result" && card && (
            <motion.div className="daily-reading" initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : .38, ease }}>
              <div className="daily-reading-image-wrap"><img className="daily-reading-image" src={card.image} alt={card.name} /></div>
              <div className="daily-reading-content">
                <span className="eyebrow">Lá bài dành cho hôm nay</span>
                <h3 ref={result} tabIndex={-1} className="serif-title">{card.name}</h3>
                <div className="daily-interpretations">
                  {readingItems.map(({ key, label }) => (
                    <div className={`daily-interpretation${key === "healing" ? " is-healing" : ""}`} key={key}>
                      <h4>{label}</h4><p>{card[key]}</p>
                    </div>
                  ))}
                </div>
                <div className="daily-reading-actions">
                  <a className="button-primary" href="#contact" onClick={() => onBook(card)}>Đào sâu thông điệp từ lá {card.name} cùng Migan <ArrowRight size={15} aria-hidden="true" /></a>
                  <button type="button" className="daily-redraw" onClick={startShuffle}><RotateCcw size={14} aria-hidden="true" /> Xào &amp; rút lại</button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DailyTarotSection;
