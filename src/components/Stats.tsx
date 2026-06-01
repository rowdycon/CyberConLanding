import { useReveal } from "@/hooks/useReveal";

const STATS = [
  { num: "400+", label: "Attendees", color: "" },
  { num: "9", label: "Sponsors", color: "cyan" },
  { num: "19", label: "Workshops", color: "" },
  { num: "15", label: "Organizers", color: "cyan" },
  { num: "25", label: "Volunteers", color: "" },
  { num: "100%", label: "Free to Attend", color: "green" },
];

const Stats = () => {
  const labelRef = useReveal();
  const titleRef = useReveal();
  const descRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="stats" className="bg-surface relative z-10">
      <div className="section-inner">
        <div className="section-label" ref={labelRef}>
          Spring 2026 Impact Metrics
        </div>
        <h2 className="section-title" ref={titleRef}>
          By the Numbers
        </h2>
        <p className="section-desc" ref={descRef}>
          Rowdy CyberCon brings together the best cybersecurity minds in South
          Texas. Here's what we've built — and where we're going.
        </p>
        <div
          className="reveal flex flex-wrap border border-border bg-border gap-px mt-12"
          ref={gridRef}
        >
          {STATS.map((s) => (
            <div
              className="bg-surface2 p-8 px-6 text-center transition-colors duration-200 hover:bg-[#1c2535] flex-1 basis-[180px]"
              key={s.label}
            >
              <div
                className={`font-display font-black text-[clamp(2.5rem,5vw,4rem)] leading-none ${
                  s.color === "cyan"
                    ? "text-cyan"
                    : s.color === "green"
                    ? "text-green"
                    : "text-orange"
                }`}
              >
                {s.num}
              </div>
              <div className="font-mono text-[0.75rem] tracking-[0.15em] uppercase text-text-dim mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
