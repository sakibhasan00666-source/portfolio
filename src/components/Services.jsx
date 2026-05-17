import React from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Monitor,
  Layout,
  Brush,
  BarChart3,
  Megaphone,
} from "lucide-react";

const Services = ({ theme }) => {
  const primary = theme?.primary || "bg-lime-500";

  const services = [
    {
      title: "Graphic Design",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <Palette size={48} className="text-black" />,
    },
    {
      title: "Web Design",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <Monitor size={48} className="text-black" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <Layout size={48} className="text-black" />,
    },
    {
      title: "App Design & Develop",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <Brush size={48} className="text-black" />,
    },
    {
      title: "Business Analysis",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <BarChart3 size={48} className="text-black" />,
    },
    {
      title: "SEO Marketing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <Megaphone size={48} className="text-black" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* HEADER */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* THEME BACKGROUND FIX */}
          <span className={`text-white text-sm font-bold px-4 py-2 uppercase rounded-md ${primary}`}>
            What I Do?
          </span>

          <h2 className="text-4xl font-bold mt-4 text-gray-900">
            How I can help your next project
          </h2>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 rounded-xl hover:shadow-lg transition"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              {/* ICON WITH THEME BORDER */}
              <div
                className={`mb-6 p-4 rounded-full border-2 ${primary} bg-white`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {service.title}
              </h3>

              <p className="text-gray-500 leading-relaxed max-w-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;