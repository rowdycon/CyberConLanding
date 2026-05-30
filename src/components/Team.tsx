import { useReveal } from "@/hooks/useReveal";

export const TEAM = [
  { initials: "DD", name: "Drew", role: "RCC Co-Director" },
  { initials: "CM", name: "Carlington", role: "RCC Co-Director" },
  { initials: "SR", name: "Spencer", role: "Logistics" },
  { initials: "GR", name: "Gizelle", role: "Media & Comms" },
  { initials: "A", name: "Aidan", role: "Competitions Co-Lead" },
  { initials: "N", name: "Nat", role: "Competitions Co-Lead" },
];

const Team = () => {
  const labelRef = useReveal();
  const titleRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="team" className="bg-bg relative z-10">
      <div className="section-inner">
        <div className="section-label reveal" ref={labelRef}>
          The Organizers
        </div>
        <h2 className="section-title reveal" ref={titleRef}>
          Meet the Team
        </h2>
        <div
          className="reveal grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6 mt-12"
          ref={gridRef}
        >
          {TEAM.map((m) => (
            <div
              className="flex flex-col items-center text-center gap-[0.6rem]"
              key={m.name}
            >
              <div className="w-20 h-20 rounded bg-surface2 border border-border flex items-center justify-center font-display font-black text-[1.6rem] text-orange transition-colors duration-200 group-hover:border-cyan hover:border-cyan">
                {m.initials}
              </div>
              <div className="font-display font-semibold text-[0.95rem]">
                {m.name}
              </div>
              <div className="font-mono text-[0.65rem] tracking-[0.1em] text-cyan uppercase">
                {m.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
