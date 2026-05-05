import React, { useState, useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import Navbar from "./Navbar";
import About from "./About";

export default function Home() {
  const [theme, setTheme] = useState({
    bg: "bg-lime-400",
    primary: "bg-lime-500",
    nav: "bg-white text-black",
    btn: "bg-black text-white hover:bg-gray-800",
  });

  const [open, setOpen] = useState(false);

  // 🔥 TEXT LOOP ANIMATION
  const words = ["DESIGNER", "DEVELOPER"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    let timeout;

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          timeout = setTimeout(() => setIsDeleting(true), 1000);
        }
      }, 150);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }, 80);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);
<About theme={theme} />

  const themes = [
    {
      name: "Green",
      bg: "bg-lime-400",
      primary: "bg-lime-500",
      btn: "bg-black text-white hover:bg-gray-800",
    },
    {
      name: "Blue",
      bg: "bg-blue-400",
      primary: "bg-blue-500",
      btn: "bg-blue-600 text-white hover:bg-blue-800",
    },
    {
      name: "Yellow",
      bg: "bg-yellow-400",
      primary: "bg-yellow-500",
      btn: "bg-yellow-600 text-white hover:bg-yellow-800",
    },
    {
      name: "Pink",
      bg: "bg-pink-400",
      primary: "bg-pink-500",
      btn: "bg-pink-600 text-white hover:bg-pink-800",
    },
    {
      name: "Orange",
      bg: "bg-orange-400",
      primary: "bg-orange-500",
      btn: "bg-orange-600 text-white hover:bg-orange-800",
    },
    {
      name: "Purple",
      bg: "bg-purple-400",
      primary: "bg-purple-500",
      btn: "bg-purple-600 text-white hover:bg-purple-800",
    },
    {
      name: "Red",
      bg: "bg-red-400",
      primary: "bg-red-500",
      btn: "bg-red-600 text-white hover:bg-red-800",
    },
    {
      name: "Teal",
      bg: "bg-teal-400",
      primary: "bg-teal-500",
      btn: "bg-teal-600 text-white hover:bg-teal-800",
    },
  ];

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`${theme.bg} min-h-screen flex flex-col transition-all duration-500`}>
      <Navbar theme={theme} />
      <main className="flex-1 flex items-center justify-center">
        <div
          id="home"
          className="container mx-auto flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16"
        >
          <section className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl text-black mb-4">
              HI, I'M A FREELANCER
            </h1>

            {/* ANIMATED TEXT */}
            <h2 className="text-4xl md:text-8xl font-bold text-black mb-6">
              {text}
              <span className="animate-pulse">|</span>
            </h2>

            <p className="text-lg text-black mb-7">
              based in Dhaka, Bangladesh.
            </p>

            <button className=" px-8 py-4 font-bold bg-black text-white">
              View My Works
            </button>

            <button
              onClick={scrollToContact}
              className="px-8 py-4 font-bold ml-4 underline text-xl"
            >
              Contact Me →
            </button>
          </section>

          {/* RIGHT IMAGE (SLIGHT RIGHT FIX) */}
          <figure className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
            <img
              src="https://i.ibb.co.com/397PrJf9/Gemini-Generated-Image-xqz6l0xqz6l0xqz6.png"
              alt="hero"
              className="w-[450px] rounded-full shadow-lg md:mr-6"
            />
          </figure>
        </div>
      </main>

      {/* SETTINGS */}
      <div className="fixed right-4 top-1/3">
        <button
          onClick={() => setOpen(!open)}
          className="bg-white p-3 rounded-full shadow-lg"
        >
          <FiSettings />
        </button>

        {open && (
          <div className="mt-3 bg-white p-3 rounded-lg shadow-lg">
            <div className="grid grid-cols-4 gap-2">
              {themes.map((t) => (
                <button
                  key={t.name}
                  onClick={() => setTheme(t)}
                  className={`${t.bg} w-8 h-8 rounded-full border`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
