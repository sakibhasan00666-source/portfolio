import React from "react";

export default function Resume({ theme = { bg: "bg-gray-100" } }) {
  const education = [
    {
      title: "Higher Secondary Certificate",
      place: "Agricultural University College, Mymensingh / 2025",
      desc: "Group: Business Studies | GPA: 3.58",
    },
    {
      title: "Secondary School Certificate",
      place: "Brac Secondary School, Mymensingh / 2023",
      desc: "Group: Science | GPA: 4.33",
    },
    {
      title: "Complete MERN Stack Development",
      place: "Freelance Corner / 2026",
      desc: "Course Duration: 12 Months | Certificate Completed: March 25, 2026",
    },
  ];

  const experience = [
    {
      title: "Junior Frontend Developer",
      place: "React.js & Next.js Projects",
      desc: "Worked on modern, responsive, and user-friendly web applications.",
    },
    {
      title: "E-Commerce Website (Next.js)",
      place: "Personal Project",
      desc: "Developed product listing, shopping cart, and user interaction features.",
    },
    {
      title: "Blog Website (Next.js)",
      place: "Personal Project",
      desc: "Built responsive blog platform with animations and clean layout.",
    },
    {
      title: "Portfolio Website (React.js)",
      place: "Personal Project",
      desc: "Showcased projects, skills, and contact info in a structured way.",
    },
  ];

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
        {/* Resume Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-black text-center mb-12">
          A summary of My Resume
        </h2>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-6">
              My Education
            </h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-8">
                <h4 className="text-xl font-bold text-black">{edu.title}</h4>
                <span className="block text-gray-700 mb-2">{edu.place}</span>
                <p className="text-gray-600 text-sm">{edu.desc}</p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-6">
              My Experience
            </h3>
            {experience.map((exp, index) => (
              <div key={index} className="mb-8">
                <h4 className="text-xl font-bold text-black">{exp.title}</h4>
                <span className="block text-gray-700 mb-2">{exp.place}</span>
                <p className="text-gray-600 text-sm">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <h3 className="text-2xl font-semibold text-black mb-6 text-center">
          My Skills
        </h3>
        <div className="space-y-6 mb-12">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-black font-medium">{skill.name}</span>
                <span className="text-black">{skill.percent}%</span>
              </div>
              <div className="w-full bg-gray-300 h-3 rounded-full">
                <div
                  className="bg-black h-3 rounded-full transition-all duration-500"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Download CV Button */}
        <div className="text-center">
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
