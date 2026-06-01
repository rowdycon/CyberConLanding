import { useReveal } from "@/hooks/useReveal";

const TIERS = [
  {
    badge: "bronze",
    label: "Beacon",
    price: "$500",
    perks: ["Discord Announcement", "Logo on Website", "Logo on T-Shirt"],
    featured: true,
  },
  {
    badge: "silver",
    label: "Gateway",
    price: "$1,000",
    perks: [
      "Everything in Beacon",
      "Dedicated Discord Channel",
      "Prominent Career Booth Placement",
      "Prominent Logo Placement",
    ],
    featured: true,
  },
  {
    badge: "gold",
    label: "Horizon",
    price: "$2,000",
    perks: [
      "Everything in Gateway",
      "Social Media Post",
      "Named Prize Sponsorship",
    ],
    featured: true,
  },
  {
    badge: "platinum",
    label: "Cloud",
    price: "$3,000",
    perks: [
      "Everything in Horizon",
      "Ceremony Spotlight",
      "Photo Book",
      "Named CTF Track",
    ],
    featured: true,
  },
];

const CONTACT_EMAIL = "pr@rowdycybercon.org";

const SponsorUs = () => {
  const labelRef = useReveal();
  const titleRef = useReveal();
  const descRef = useReveal();
  const gridRef = useReveal();
  const ctaRef = useReveal();

  return (
    <section id="sponsor" className="bg-surface relative z-10">
      <div className="section-inner">
        <div className="section-label reveal" ref={labelRef}>
          Become a Partner
        </div>
        <h2 className="section-title reveal" ref={titleRef}>
          Sponsorship Tiers
        </h2>
        <p className="section-desc reveal" ref={descRef}>
          Your sponsorship directly funds prizes, meals, venue, and programming
          — and puts your brand in front of hundreds of motivated cybersecurity
          students actively seeking employers.
        </p>

        <div
          className="reveal grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 mt-12"
          ref={gridRef}
        >
          {TIERS.map((t) => (
            <div
              className={`border ${
                t.featured
                  ? "border-orange bg-gradient-to-br from-orange/[0.08] to-bg2"
                  : "border-border bg-bg2"
              } p-8 flex flex-col gap-4 transition-transform duration-200 hover:-translate-y-1`}
              key={t.label}
            >
              <div
                className={`font-mono text-[0.65rem] tracking-[0.2em] uppercase py-1 px-[0.7rem] w-fit border ${
                  t.badge === "bronze"
                    ? "bg-[rgba(205,127,50,.15)] text-[#cd7f32] border-[#cd7f32]"
                    : t.badge === "silver"
                    ? "bg-[rgba(192,192,192,.15)] text-[#c0c0c0] border-[#c0c0c0]"
                    : t.badge === "gold"
                    ? "bg-[rgba(255,215,0,.15)] text-[#ffd700] border-[#ffd700]"
                    : "bg-cyan/15 text-cyan border-cyan"
                }`}
              >
                {t.label}
              </div>
              <div className="font-display font-black text-[2.2rem] text-text">
                {t.price}
              </div>
              <ul className="list-none flex flex-col gap-2 flex-1">
                {t.perks.map((p) => (
                  <li
                    key={p}
                    className="text-[0.85rem] text-text-dim pl-5 relative before:content-['▸'] before:text-cyan before:absolute before:left-0"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-12" ref={ctaRef}>
          <p className="font-mono text-[0.85rem] text-text-dim mb-6">
            Interested in something different - reach out and we'll create a
            custom package!
          </p>
          <a className="btn-primary" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsorUs;
