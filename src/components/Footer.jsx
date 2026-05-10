import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-5 text-white bg-gradient-to-r from-purple-700 to-blue-700">
      <div className="container mx-auto px-6">

        <motion.div
          className="flex flex-col items-center justify-between md:flex-row"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <h1 className="mb-4 text-3xl italic font-bold md:mb-0">
            Portfolio
          </h1>

          {/* Text */}
          <p className="text-sm text-center md:text-left">
            2025 My Website. All rights reserved
          </p>
        </motion.div>

      </div>
    </footer>
  );
}