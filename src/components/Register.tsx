const EVENT_URL = "https://www.rowdycybercon.org/";

export default function Register() {
  return (
    <section
      id="register"
      className="bg-bg relative z-10 border-t border-border"
    >
      <div className="max-w-[700px] mx-auto py-24 px-8 text-center flex flex-col items-center gap-5">
        <p className="font-mono text-[0.7rem] tracking-[0.25em] uppercase text-cyan">
          Fall 2026
        </p>
        <h2 className="font-display font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-none">
          Ready to Compete?
        </h2>
        <p className="text-text-dim text-base leading-[1.75] max-w-[500px]">
          Registration is free and open to all students. Head to our event
          portal to sign up, form a team, and get updates as we get closer to
          the con.
        </p>
        <a
          className="btn-primary"
          href={EVENT_URL}
          target="_blank"
          rel="noreferrer"
        >
          Register for the Event →
        </a>
      </div>
    </section>
  );
}
