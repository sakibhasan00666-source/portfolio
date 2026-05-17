import React from "react";
import { motion } from "framer-motion";

export default function Resume({ theme }) {
  const skillColor = theme?.primary || "bg-lime-500";

  const education = [
    {
      title: "Higher Secondary Certificate",
      place: "Agricultural University College, Mymensingh",
      time: "2025",
      desc: "Group: Business Studies | GPA: 3.58",
    },
    {
      title: "Secondary School Certificate",
      place: "Brac Secondary School, Mymensingh",
      time: "2023",
      desc: "Group: Science | GPA: 4.33",
    },
    {
      title: "MERN Stack Development",
      place: "Freelance Corner",
      time: "2026",
      desc: "12 Months Full Stack Training Completed",
    },
  ];

  const experience = [
    {
      title: "Frontend Developer",
      place: "React.js & Next.js Projects",
      time: "2025 - Present",
      desc: "Built modern responsive web applications.",
    },
    {
      title: "E-Commerce Project",
      place: "Personal Project",
      time: "2024 - 2025",
      desc: "Product listing, cart & UI system.",
    },
    {
      title: "Portfolio Website",
      place: "React.js Project",
      time: "2023 - 2024",
      desc: "Personal portfolio with modern design.",
    },
  ];

  const skills = [
    { name: "React JS", percent: 85 },
    { name: "Next JS", percent: 80 },
    { name: "JavaScript", percent: 98 },
    { name: "HTML/CSS", percent: 90 },
    { name: "Tailwind CSS", percent: 85 },
    { name: "Node JS", percent: 75 },
    { name: "MongoDB", percent: 75 },
    { name: "Git/GitHub", percent: 85 },
  ];

  // ANIMATION VARIANT (RIGHT TO LEFT)
  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section id="resume" className="bg-white py-20 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-20">

        {/* Header */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className={`inline-block px-5 py-2 text-sm tracking-[4px] mb-3 uppercase font-semibold text-white rounded-md ${skillColor}`}
          >
            Resume
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-black">
            A summary of My Resume
          </h2>
        </motion.div>

        {/* Education + Experience */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-black">
              My Education
            </h3>

            <div className="border-l-2 border-gray-300 pl-6 space-y-10">
              {education.map((item, index) => (
                <div key={index} className="pb-6 border-b border-gray-200 last:border-none">
                  <h4 className="text-lg font-bold text-black">
                    {item.title}
                  </h4>

                  <div className="text-sm text-gray-600 mt-1 mb-2">
                    {item.place} | {item.time}
                  </div>

                  <p className="text-gray-500 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-black">
              My Experience
            </h3>

            <div className="border-l-2 border-gray-300 pl-6 space-y-10">
              {experience.map((item, index) => (
                <div key={index} className="pb-6 border-b border-gray-200 last:border-none">
                  <h4 className="text-lg font-bold text-black">
                    {item.title}
                  </h4>

                  <div className="text-sm text-gray-600 mt-1 mb-2">
                    {item.place} | {item.time}
                  </div>

                  <p className="text-gray-500 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Skills */}
        <motion.h3
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-8 text-black"
        >
          My Skills
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-black font-medium">
                  {skill.name}
                </span>
                <span>{skill.percent}%</span>
              </div>

              <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
                <div
                  className={`${skillColor} h-2 rounded-full`}
                  style={{ width: `${skill.percent}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-14"
        >
          <a href="/cv.pdf" download>
            <button className="px-10 py-4 font-bold text-lg rounded-lg border border-black text-black hover:bg-black hover:text-white transition">
              Download CV
            </button>
          </a>
        </motion.div>

      </div>
    </section>
  );
}