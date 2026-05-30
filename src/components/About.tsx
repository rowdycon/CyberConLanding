import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const FAQ = [
  {
    q: "Where is Rowdy CyberCon held?",
    a: "In the San Pedro 1 & 2 buidlings at UTSA's downtown campus in San Antonio, TX.",
  },
  {
    q: "Who can attend?",
    a: "Any student, professional, or enthusiast.",
  },
  {
    q: "What is a CTF?",
    a: 'Capture the Flag — a cybersecurity competition where teams solve challenges to find hidden "flags."',
  },
  {
    q: "Is it free?",
    a: "Yes. 100% free to attend, thanks to our amazing sponsors. Meals and merch are provided on-site.",
  },
];

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border py-4">
      <div
        className={`font-display font-semibold text-base text-text cursor-pointer flex justify-between items-center select-none  after:text-cyan after:text-[1.2rem]`}
        onClick={() => setOpen(!open)}
      >
        {q}
      </div>
      <div
        className={`text-[0.9rem] text-text-dim overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-[200px] pt-[0.6rem]" : "max-h-0"
        }`}
      >
        {a}
      </div>
    </div>
  );
};

const About = () => {
  const labelRef = useReveal();
  const titleRef = useReveal();
  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section id="about" className="bg-bg relative z-10">
      <div className="section-inner">
        <div className="section-label reveal" ref={labelRef}>
          Who We Are
        </div>
        <h2 className="section-title reveal" ref={titleRef}>
          Defending the
          <br />
          Rowdy Frontier
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-12">
          <div className="reveal" ref={leftRef}>
            <p className="section-desc mb-6">
              RowdyCyberCon is a one-day cybersecurity conference where San
              Antonio area-based students can learn new skills, participate in
              challenges, and network! You'll also have the opportunity to
              attend a plethora of different workshops and meet employers.
            </p>
            <p className="section-desc mb-8">
              We unite students, professionals, and researchers for a day of
              workshops, talks, and competition, no matter what major or skill
              level, so go ahead and register today to secure your spot!
            </p>
            <div className="mt-8">
              {FAQ.map((item) => (
                <FaqItem key={item.q} {...item} />
              ))}
            </div>
          </div>

          <div
            className="reveal relative border border-border bg-surface p-8 overflow-hidden before:content-['>_RCC_2026.exe'] before:font-mono before:text-[0.7rem] before:text-cyan before:block before:mb-4"
            ref={rightRef}
          >
            <div className="font-mono text-[0.8rem] text-text-dim py-[0.2rem]">
              <span className="text-green">▶ </span>
              <span className="text-text">whoami</span>
            </div>
            <div className="font-mono text-[0.8rem] text-text-dim py-[0.2rem]">
              <span className="text-orange">rowdy_cybercon_2026</span>
            </div>
            <div className="font-mono text-[0.8rem] text-text-dim py-[0.2rem] mt-[0.8rem]">
              <span className="text-green">▶ </span>
              <span className="text-text">cat mission.txt</span>
            </div>
            <div className="font-mono text-[0.8rem] text-text-dim py-[0.2rem]">
              <span className="text-orange">Building SA's cyber community</span>
            </div>
            <div className="font-mono text-[0.8rem] text-text-dim py-[0.2rem]">
              <span className="text-orange">one flag at a time.</span>
            </div>
            <div className="font-mono text-[0.8rem] text-text-dim py-[0.2rem] mt-[0.8rem]">
              <span className="text-green">▶ </span>
              <span className="text-text">date</span>
            </div>
            <div className="font-mono text-[0.8rem] text-text-dim py-[0.2rem]">
              <span className="text-orange">Coming Soon...</span>
            </div>
            <div className="font-mono text-[0.8rem] text-text-dim py-[0.2rem] mt-[0.8rem]">
              <span className="text-green">▶ </span>
              <span className="text-text">nmap -sV utsa.edu</span>
            </div>
            <div className="font-mono text-[0.8rem] text-text-dim py-[0.2rem]">
              <span className="text-orange">PORT STATE SERVICE</span>
            </div>
            <div className="font-mono text-[0.8rem] text-text-dim py-[0.2rem]">
              <span className="text-orange">443/tcp open https</span>
            </div>
            <div className="font-mono text-[0.8rem] text-text-dim py-[0.2rem]">
              <span className="text-orange">22/tcp open ssh</span>
            </div>
            <div className="font-mono text-[0.8rem] text-text-dim py-[0.2rem] mt-[0.8rem]">
              <span className="text-green">▶ </span>
              <span className="text-text">./register_sponsor.sh</span>
            </div>
            <div className="font-mono text-[0.8rem] text-text-dim py-[0.2rem]">
              <span className="text-green">▶ </span>
              <span className="inline-block w-2 h-[14px] bg-cyan align-text-bottom animate-blink" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
