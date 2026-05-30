import { useReveal } from "@/hooks/useReveal";

// Add more Tracks from Competitions Team
const TRACKS = [
  {
    num: "01",
    title: "Web Exploitation",
    desc: "SQL injection, XSS, SSRF, and beyond. Attack real-world web vulnerabilities in controlled CTF environments.",
  },
  {
    num: "02",
    title: "Cryptography",
    desc: "Break ciphers, crack RSA, and exploit flawed implementations of modern cryptographic protocols.",
  },
  {
    num: "03",
    title: "Binary & Pwn",
    desc: "Buffer overflows, ROP chains, heap exploitation. Get shell access and prove your low-level skills.",
  },
  {
    num: "04",
    title: "Forensics & OSINT",
    desc: "Recover deleted files, analyze network captures, and hunt for flags hidden in plain sight.",
  },
];

const Tracks = () => {
  const labelRef = useReveal();
  const titleRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="tracks" className="bg-bg relative z-10">
      <div className="section-inner">
        <div className="section-label reveal" ref={labelRef}>
          Competition Tracks
        </div>
        <h2 className="section-title reveal" ref={titleRef}>
          CTF Challenge Categories
        </h2>
        <div
          className="reveal grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 mt-12"
          ref={gridRef}
        >
          {TRACKS.map((t) => (
            <div
              className="border border-border p-8 bg-surface transition-colors duration-250 hover:border-orange"
              key={t.num}
            >
              <div className="font-mono text-[0.65rem] text-orange tracking-[0.2em] mb-[0.8rem]">
                {t.num} TRACK
              </div>
              <div className="font-display font-bold text-[1.4rem] mb-[0.6rem]">
                {t.title}
              </div>
              <div className="text-[0.85rem] text-text-dim">{t.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
