import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Highlights",
      url: "#highlights",
    },
    {
      name: "Tracks",
      url: "#tracks",
    },
    {
      name: "Sponsor Us",
      url: "#sponsor",
    },
    // {
    //   name: "Team",
    //   url: "#team",
    // },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-10 py-4 border-b border-border backdrop-blur-xl bg-bg/85">
        <a
          className="font-display font-bold text-[1.2rem] text-orange tracking-[0.08em] no-underline"
          href="#hero"
        >
          Rowdy<span className="text-cyan">CyberCon</span>
        </a>
        <ul className="hidden md:flex gap-8 list-none">
          {menuItems.map((item) => (
            <li>
              <a
                href={item.url}
                className="font-mono text-[0.75rem] tracking-[0.12em] text-text-dim no-underline uppercase transition-colors duration-200 hover:text-cyan"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {/* <a
          className="hidden md:inline-block font-mono text-[0.75rem] tracking-[0.12em] uppercase py-[0.45rem] px-[1.1rem] border border-orange text-orange bg-transparent cursor-pointer no-underline transition-all duration-200 hover:bg-orange hover:text-white"
          href="https://www.rowdycybercon.org/"
          target="_blank"
          rel="noreferrer"
        >
          Register
        </a> */}
        <div
          className="flex md:hidden flex-col gap-[5px] cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="w-6 h-0.5 bg-text block" />
          <span className="w-6 h-0.5 bg-text block" />
          <span className="w-6 h-0.5 bg-text block" />
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[99] text-xl bg-bg/[0.97] flex flex-col items-center justify-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ display: "contents" }}
          >
            {menuItems.map((item) => (
              <a
                href={item.url}
                onClick={() => setMenuOpen(false)}
                className="font-display font-bold  text-text no-underline hover:text-orange transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}

            {/* <a
              href="https://www.rowdycybercon.org/"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="font-mono text-[0.75rem] tracking-[0.12em] uppercase py-[0.45rem] px-[1.1rem] border border-orange text-orange bg-transparent cursor-pointer no-underline transition-all duration-200 hover:bg-orange hover:text-white"
            >
              Register
            </a> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
