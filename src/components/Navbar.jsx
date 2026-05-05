import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ theme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Resume", link: "#resume" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "FAQ", link: "#faq" },
    { name: "Client", link: "#client" },
    { name: "Contact", link: "#contact" },
  ];

  // scroll spy
  useEffect(() => {
    const handleScroll = () => {
      links.forEach((item) => {
        const section = document.querySelector(item.link);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(item.link);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e, link) => {
    e.preventDefault();
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(link);
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-5">

        {/* LOGO */}
        <h1 className="text-4xl font-bold">Portfolio</h1>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex space-x-8">

          {links.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={(e) => scrollTo(e, item.link)}
              className={`relative group font-bold ${
                active === item.link ? "text-black" : "text-gray-600"
              }`}
            >
              {item.name}

              {/* UNDERLINE */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
                  active === item.link
                    ? `w-full ${theme.primary}`
                    : `w-0 ${theme.primary} group-hover:w-full`
                }`}
              />
            </a>
          ))}

        </nav>

        {/* MOBILE BUTTON */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 py-10 bg-white">

          {links.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={(e) => scrollTo(e, item.link)}
              className={`text-xl font-bold ${
                active === item.link ? "text-black" : "text-gray-600"
              }`}
            >
              {item.name}
            </a>
          ))}

        </div>
      )}
    </header>
  );
}