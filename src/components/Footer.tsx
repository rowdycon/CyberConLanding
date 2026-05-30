const Footer = () => {
  return (
    <footer className="bg-bg2 border-t border-border py-12 px-8 flex flex-col md:flex-row justify-between items-center flex-wrap gap-6 relative z-10 md:text-left text-center">
      <div className="font-display font-bold text-[1.2rem] text-orange">
        Rowdy<span className="text-cyan">CyberCon</span>{" "}
      </div>

      <div className="font-mono text-[0.7rem] text-text-dim tracking-[0.1em]">
        © {new Date().getFullYear()} Rowdy CyberCon · UTSA · San Antonio, TX
      </div>
    </footer>
  );
};

export default Footer;
