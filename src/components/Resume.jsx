
import React from "react";

export default function Resume({ theme = { bg: "bg-gray-100" } }) {
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
      title: "Complete MERN Stack Development",
      place: "Freelance Corner",
      time: "2026",
      desc: "Course Duration: 12 Months | Certificate Completed: March 25, 2026",
    },
  ];

  const experience = [
    {
      title: "Junior Frontend Developer",
      place: "React.js & Next.js Projects",
      time: "2025 - Present",
      desc: "Worked on modern, responsive, and user-friendly web applications.",
    },
    {
      title: "E-Commerce Website (Next.js)",
      place: "Personal Project",
      time: "2024 - 2025",
      desc: "Developed product listing, shopping cart, and user interaction features.",
    },
    {
      title: "Blog Website (Next.js)",
      place: "Personal Project",
      time: "2024",
      desc: "Built responsive blog platform with animations and clean layout.",
    },
    {
      title: "Portfolio Website (React.js)",
      place: "Personal Project",
      time: "2023 - 2024",
      desc: "Showcased projects, skills, and contact info in a structured way.",
    },
  ];

  const Timeline = ({ title, items }) => (
    <div>
      <h3 className="text-2xl font-semibold mb-8 text-black">
        {title}
      </h3>

      <div className="relative border-l-2 border-lime-500 pl-6 space-y-10">

        {items.map((item, index) => (
          <div key={index} className="relative">

            {/* CONTENT BOX */}
            <div className="pb-6 border-b border-gray-200 last:border-none">

              <h4 className="text-lg font-bold text-black">
                {item.title}
              </h4>

              <div className="text-sm text-gray-600 mt-1 mb-2">
                {item.place} <span className="mx-2">|</span> {item.time}
              </div>

              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>

          </div>
        ))}
      </div>
    </div>
  );

  const skills = [
    { name: "React JS", percent: 85 },
    { name: "Next JS", percent: 80 },
    { name: "JavaScript", percent: 98 },
    { name: "HTML/CSS", percent: 80 },
    { name: "Tailwind CSS", percent: 80 },
    { name: "Bootstrap", percent: 70 },
    { name: "Node JS", percent: 75 },
    { name: "Express JS", percent: 70 },
    { name: "MongoDB", percent: 75 },
    { name: "Firebase", percent: 70 },
    { name: "Git/GitHub", percent: 85 },
  ];

  return (
    <section id="resume" className={`${theme.bg} py-20`}>
      <div className="container mx-auto px-6 md:px-20">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="inline-block px-4 py-1 text-sm tracking-[4px] mb-3 uppercase font-semibold text-white bg-lime-500">
            Resume
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-black">
            A Summary of My Resume
          </h2>
        </div>

        {/* EDUCATION + EXPERIENCE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">

          <Timeline title="My Education" items={education} />
          <Timeline title="My Experience" items={experience} />

        </div>

        {/* SKILLS */}
        <h3 className="text-2xl font-semibold mb-8 text-black">
          My Skills
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-black font-medium">
                  {skill.name}
                </span>
                <span className="text-black">
                  {skill.percent}%
                </span>
              </div>

              <div className="w-full bg-gray-300 h-2 rounded-full">
                <div
                  className="bg-lime-500 h-2 rounded-full"
                  style={{ width: `${skill.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="text-center mt-14">
          <a href="/CV SAKIB HASAN.pdf" download>
            <button className="px-10 py-4 font-bold text-lg rounded-lg border border-black text-black hover:bg-black hover:text-white transition">
              Download CV
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}