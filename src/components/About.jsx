import React from "react";

export default function About({ theme }) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-20">
        {/* HEADER */}
        <div className="text-center mb-12">
          <p
            className={`inline-block px-4 py-1 rounded-full text-sm tracking-[4px] mb-3 uppercase font-semibold text-white ${
              theme?.primary || "bg-lime-500"
            }`}
          >
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">Know Me More</h2>
        </div>

        {/* FULL WIDTH CONTENT */}
        <div className="text-start">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            <span className="text-gray-600 font-normal">Hi, I'm </span>
            <span className="text-black">SAKIB HASAN</span>
          </h3>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            I am a designer & developer with a passion for web design. I enjoy
            creating simple, clean and modern websites that deliver real value
            to users. I have worked on several personal and practice projects to
            improve my skills and build real-world experience. My main focus is
            to create responsive and user-friendly websites while continuously
            learning and improving. I always try to complete my work on time and
            ensure good quality — this is my main goal.
          </p>
        </div>

        {/* DETAILS GRID (kept same) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 text-start justify-between">
          <div>
            <p className="font-bold">Name:</p>
            <p className="text-gray-600">Sakib Hasan</p>
          </div>

          <div>
            <p className="font-bold">Email:</p>
            <p className="text-gray-600">sakibhasan00666@gmail.com</p>
          </div>

          <div>
            <p className="font-bold">Date of birth:</p>
            <p className="text-gray-600">09 March, 2007</p>
          </div>

          <div>
            <p className="font-bold">From:</p>
            <p className="text-gray-600">Mymensingh, Dhaka, BD</p>
          </div>
        </div>
      </div>
    </section>
  );
}
