const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-8 pt-24 pb-16 overflow-hidden z-10"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Glow Effect */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(255,95,31,.15) 0%, transparent 70%)",
        }}
      />

      {/* Badge */}
      <div className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-cyan border border-cyan-dim py-[0.3rem] px-[0.9rem] mb-6 inline-block relative z-10 animate-[fadeSlideUp_0.8s_ease_both]">
        Coming soon!! &nbsp;·&nbsp; San Antonio, TX
      </div>

      {/* Title */}
      <h1 className="font-display font-black text-[clamp(3.5rem,10vw,8rem)] leading-[0.95] tracking-tight relative z-10 animate-[fadeSlideUp_0.8s_0.1s_ease_both]">
        <span className="block text-text">Rowdy</span>
        <span
          className="block text-transparent"
          style={{ WebkitTextStroke: "2px #ff5f1f" }}
        >
          CyberCon
        </span>
      </h1>

      {/* Subtitle */}
      <p className="font-mono text-[clamp(0.8rem,2vw,1rem)] text-text-dim my-6 tracking-[0.08em] relative z-10 animate-[fadeSlideUp_0.8s_0.2s_ease_both]">
        San Antonio's Premier Student-Led Cybersecurity Conference &amp; CTF
        &nbsp;—&nbsp; UTSA
      </p>

      {/* CTAs */}
      <div className="flex gap-4 flex-wrap justify-center relative z-10 animate-[fadeSlideUp_0.8s_0.3s_ease_both]">
        <a className="btn-primary" href="#sponsor">
          Sponsor Us
        </a>
        <a className="btn-secondary" href="#about">
          Learn More
        </a>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-[0.4rem] font-mono text-[0.65rem] tracking-[0.15em] text-text-dim uppercase z-10 animate-[fadeSlideUp_0.8s_0.6s_ease_both]">
        scroll
        <div
          className="w-px h-10 animate-pulse-custom"
          style={{ background: "linear-gradient(#8a96a8, transparent)" }}
        />
      </div>
    </section>
  );
};

export default Hero;
