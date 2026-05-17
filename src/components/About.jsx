import React from "react";
import { motion } from "framer-motion";

export default function About({ theme }) {

  // ✅ SAFE FALLBACK (IMPORTANT)
  const safeTheme = theme || { primary: "bg-lime-500" };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-20">

        {/* HEADER */}
        <motion.div
          className="text-center mb-16 mt-10"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >

          {/* 🔥 ABOUT BADGE */}
          <p
            className={`inline-block px-5 py-2 text-sm tracking-[4px] mb-3 uppercase font-semibold text-white rounded-md ${safeTheme.primary}`}
          >
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Know Me More
          </h2>

        </motion.div>

        {/* ABOUT TEXT */}
        <motion.div
          className="text-start"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >

          <h3 className="text-2xl md:text-3xl font-bold mb-6 relative inline-block">

            <span className="text-gray-600 font-normal">Hi, I'm </span>

            {/* 🔥 NAME WITH UNDERLINE */}
            <span className="relative text-black font-extrabold">
              SAKIB HASAN

              <span
                className={`absolute left-0 -bottom-1 h-[3px] w-full ${safeTheme.primary}`}
              ></span>
            </span>

          </h3>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            I am a designer & developer with a passion for web design. I enjoy
            creating simple, clean and modern websites that deliver real value
            to users. I have worked on several personal and practice projects to
            improve my skills and build real-world experience.
          </p>

        </motion.div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 mb-10 text-start">

          {[
            { label: "Name:", value: "Sakib Hasan" },
            { label: "Email:", value: "sakibhasan00666@gmail.com" },
            { label: "Date of birth:", value: "09 March, 2007" },
            { label: "From:", value: "Mymensingh, Dhaka, BD" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <p className="font-bold">{item.label}</p>
              <p className="text-gray-600">{item.value}</p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}