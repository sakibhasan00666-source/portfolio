import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Navbar({ theme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const links = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "RESUME", link: "#resume" },
    { name: "SERVICES", link: "#services" },
    { name: "PORTFOLIO", link: "#portfolio" },
    { name: "FAQ", link: "#faq" },
    { name: "CLIENT", link: "#client" },
    { name: "CONTACT", link: "#contact" },
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
    <header className="fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <h1 className="text-3xl font-extrabold tracking-wider">
        Portfolio
        </h1>

        {/* MENU */}
        <nav className="hidden md:flex space-x-8">
          {links.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={(e) => scrollTo(e, item.link)}
              className="relative group font-bold text-sm text-gray-600 hover:text-black transition"
            >
              <span
                className={
                  active === item.link
                    ? "text-black font-extrabold"
                    : ""
                }
              >
                {item.name}
              </span>

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

        {/* SOCIAL ICONS */}
        <div className="hidden md:flex items-center space-x-4">

          <a
            href="https://www.facebook.com/profile.php?id=100085485154422"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-100 transition"
          >
            <FaFacebookF className="text-lg hover:text-blue-600" />
          </a>

          <a
            href="https://www.linkedin.com/in/sakib-hasan-a3777b35b/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-100 transition"
          >
            <FaLinkedinIn className="text-lg hover:text-blue-700" />
          </a>

          <a
            href="https://wa.me/8801302631009?text=Hi%20Sakib,%20I%20want%20to%20contact%20you"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-green-100 transition"
          >
            <FaWhatsapp className="text-lg hover:text-green-500" />
          </a>

        </div>

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
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-white border-t">
          {links.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={(e) => scrollTo(e, item.link)}
              className={`text-lg font-bold ${
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