import { useReveal } from "@/hooks/useReveal";

const CARDS = [
  {
    icon: "🏆",
    title: "Capture the Flag Competition",
    body: "24 hours. 50+ challenges. Teams from across Texas competing in web, pwn, crypto, forensics, and OSINT. Last year's winning team solved 42 challenges and walked away with top-tier prizes.",
    wide: true,
  },
  {
    icon: "🎙️",
    title: "Keynotes & Talks",
    body: "Hear from active CISOs, red team operators, and researchers on the frontlines of cybersecurity.",
  },
  {
    icon: "🛠️",
    title: "Hands-on Workshops",
    body: "From beginner Linux to advanced binary exploitation — workshops run all day for every skill level.",
  },
  {
    icon: "🤝",
    title: "Networking & Recruiting",
    body: "Direct access to 300+ students actively seeking internships and full-time roles in cybersecurity.",
  },
  {
    icon: "🎁",
    title: "Merch, Food & Fun",
    body: "Custom shirts, stickers, catered meals, and a few surprises. RCC takes care of its people.",
  },
];

const Highlights = () => {
  const labelRef = useReveal();
  const titleRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="highlights" className="bg-surface relative z-10">
      <div className="section-inner">
        <div className="section-label reveal" ref={labelRef}>
          Previous Year Highlights
        </div>
        <h2 className="section-title reveal" ref={titleRef}>
          What to Expect
        </h2>
        <div
          className="reveal grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
          ref={gridRef}
        >
          {CARDS.map((c) => (
            <div
              className={`bg-surface2 border border-border p-8 relative overflow-hidden transition-all duration-200 hover:border-cyan-dim hover:-translate-y-1 after:content-[''] after:absolute after:top-0 after:left-0 after:w-[3px] after:h-full after:bg-cyan after:opacity-0 after:transition-opacity after:duration-250 hover:after:opacity-100 ${
                c.wide ? "md:col-span-2" : ""
              }`}
              key={c.title}
            >
              <div className="text-[1.8rem] mb-4">{c.icon}</div>
              <div className="font-display font-bold text-[1.3rem] mb-2">
                {c.title}
              </div>
              <div className="text-[0.9rem] text-text-dim">{c.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
