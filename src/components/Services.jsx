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

const services = [
  {
    title: "Graphic Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    icon: <Palette size={48} className="text-[#d4ff00]" />,
  },
  {
    title: "Web Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    icon: <Monitor size={48} className="text-[#d4ff00]" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    icon: <Layout size={48} className="text-[#d4ff00]" />,
  },
  {
    title: "App Design & Develop",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    icon: <Brush size={48} className="text-[#d4ff00]" />,
  },
  {
    title: "Business Analysis",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    icon: <BarChart3 size={48} className="text-[#d4ff00]" />,
  },
  {
    title: "SEO Marketing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    icon: <Megaphone size={48} className="text-[#d4ff00]" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-[#d4ff00] text-black text-sm font-bold px-3 py-1 uppercase">
            What I Do?
          </span>

          <h2 className="text-4xl font-bold mt-4 text-gray-900">
            How I can help your next project
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
            >
              <div className="mb-6">
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