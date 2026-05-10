import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Faq() {
  const [open, setOpen] = useState(null);

  const data = [
    {
      q: "What is Callum?",
      a: "Callum is a modern multi-purpose website template for personal, business, and portfolio use.",
    },
    {
      q: "How Can I Help You?",
      a: "You can use Callum to build websites easily, showcase work, and grow your online presence.",
    },
    {
      q: "Simple process for workflow?",
      a: "Choose a layout → Customize content → Publish your website.",
    },
    {
      q: "Is Callum a Multi-purpose template?",
      a: "Yes, it works for portfolio, business, startup, and personal websites.",
    },
    {
      q: "Why responsive one page template?",
      a: "It works perfectly on all devices (mobile, tablet, desktop) and uses a single scrollable page design.",
    },
  ];

  return (
    <section
      id="faq"
      className="bg-gray-50 py-20 px-6 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-lime-400 px-2 py-1 text-sm font-semibold">
            FAQ
          </span>

          <h2 className="text-4xl font-bold mt-4 mb-8">
            Have any questions?
          </h2>

          <div className="space-y-3">
            {data.map((item, i) => (
              <motion.div
                key={i}
                className="border-b pb-3 cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.2,
                }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-gray-700 font-medium">
                    {item.q}
                  </h3>

                  <span className="text-xl">
                    {open === i ? "−" : "+"}
                  </span>
                </div>

                {open === i && (
                  <p className="text-gray-500 mt-2 text-sm">
                    {item.a}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
            alt="FAQ"
            className="w-[320px]"
          />
        </motion.div>

      </div>
    </section>
  );
}