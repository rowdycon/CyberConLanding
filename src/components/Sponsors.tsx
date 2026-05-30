import React from "react";

const SPONSORS = [
  "Company 1",
  "Sponsor Slot",
  "Company 2",
  "Sponsor Slot",
  "Company 3",
  "Sponsor Slot",
];

const Sponsors = () => {
  const items = [...SPONSORS];

  return (
    <section className="bg-surface py-16 overflow-hidden relative z-10">
      <p className="font-mono text-[0.7rem] tracking-[0.25em] uppercase text-text-dim text-center mb-8">
        Our Sponsors &amp; Partners
      </p>
      <div className="overflow-hidden">
        <div className="flex gap-12 items-center animate-marquee w-max">
          {items.map((name, i) => (
            <React.Fragment key={i}>
              <span className="font-display font-bold text-[1.3rem] text-text-dim tracking-[0.05em] whitespace-nowrap transition-colors duration-200 hover:text-orange">
                {name}
              </span>
              <span className="text-border text-2xl">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
