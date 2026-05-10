import React from "react";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex items-center justify-center min-h-screen p-6 bg-cyan-400"
    >
      <article className="relative flex flex-col w-full max-w-6xl rounded-lg md:flex-row">

        {/* LEFT SIDE */}
        <motion.aside
          className="w-full md:w-1/2 text-black p-10 flex flex-col justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-20">
            Let's get in touch
          </h2>

          <p className="text-black mb-6">
            I enjoy discussing new projects and design challenges. Please share as much info as possible so we can get the most out of our first catch-up.
          </p>

          <div className="mb-4">
            <h4 className="font-semibold text-black">Living In:</h4>
            <p className="text-black">
              30 Shacham street, Los Angeles, USA.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold">Call:</h4>
            <p className="text-black">+880 1302 631009</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-2xl">
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
            <FaGithub />
            <FaDribbble />
          </div>
        </motion.aside>

        {/* RIGHT SIDE */}
        <motion.section
          className="w-full md:w-1/2 p-10"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-black mb-6">
            Estimate your Project?
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                What is Your Name:
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Your Email Address:
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                How can I Help you?
              </label>
              <textarea
                placeholder="Your message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 font-bold text-lg rounded-lg border border-black text-black hover:bg-black hover:text-white transition"
            >
              Send
            </button>
          </form>
        </motion.section>

      </article>
    </section>
  );
}
