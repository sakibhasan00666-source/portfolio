import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ theme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Resume", link: "#resume" },
    { name: "Services", link: "#services" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "FAQ", link: "#faq" },
    { name: "Client", link: "#client" },
    { name: "Contact", link: "#contact" },
  ];

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      let current = "#home";

      links.forEach((item) => {
        const section = document.querySelector(item.link);
        if (section) {
          const top = section.offsetTop - 200;
          const bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            current = item.link;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const scrollTo = (e, link) => {
    e.preventDefault();

    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setActive(link);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-5">

        {/* LOGO */}
        <h1 className="text-3xl font-bold">Portfolio</h1>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex space-x-8">
          {links.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={(e) => scrollTo(e, item.link)}
              className={`relative font-semibold transition ${
                active === item.link ? "text-black" : "text-gray-600"
              }`}
            >
              {item.name}

              {/* underline */}
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
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 py-8 bg-white border-t">
          {links.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={(e) => scrollTo(e, item.link)}
              className={`text-lg font-semibold ${
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