'use client';

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedin, FaTiktok } from "react-icons/fa";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const fadeInCenter = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const MainPage = () => {
  return (
    <div className="">
      <motion.div
        className="bg-[#3a2c29] text-[#f3efe8] w-full p-6 grid grid-cols-1 md:grid-cols-3 gap-4 font-serif min-h-screen px-24 py-12"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Title */}
        <motion.div
          variants={fadeInCenter}
          transition={{ duration: 0.6 }}
          className="col-span-3 text-center text-xl md:text-2xl font-thin tracking-widest bg-[#c3a98f]  rounded-xl py-8 text-black"
        >
          <p>Ruhee Awargaonkar</p>
        </motion.div>

        {/* Creative Direction Text */}
        <motion.div
          variants={fadeInLeft}
          transition={{ duration: 0.6 }}
          className="bg-[#1f1c1b] p-6 rounded-xl flex flex-col justify-between"
        >
          <div>
            <div className="text-xl md:text-3xl leading-snug">
              Creative <em>direction</em> grounded in clarity <em>and</em> emotion.
            </div>
          </div>
        </motion.div>

        {/* Profile Image Placeholder */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden bg-[#1f1c1b] flex items-center justify-center min-h-[240px] md:min-h-[320px]"
        >
          <span className="text-gray-500 text-sm">[Profile Image Placeholder]</span>
        </motion.div>

        {/* Soft Form Image + List */}
        <motion.div
          variants={fadeInRight}
          transition={{ duration: 0.6 }}
          className="bg-[#1f1c1b] p-4 rounded-xl flex flex-col gap-4"
        >
          <div>
            <div className="text-sm mb-2">Soft Form</div>
            <div className="bg-[#3a2c29] rounded-lg h-40 md:h-48 w-full flex items-center justify-center text-gray-500 text-sm">
              [Product Image Placeholder]
            </div>
          </div>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>Balm Body</li>
            <li>Morning Coffee</li>
            <li>Ritual Stone</li>
          </ul>
        </motion.div>

        {/* About Section */}
        <motion.div
          variants={fadeInLeft}
          transition={{ duration: 0.6 }}
          className="bg-[#1f1c1b] p-6 rounded-xl text-sm leading-relaxed"
        >
          Mira Chen is a creative director specializing in brand storytelling and visual identity for fashion, beauty, and lifestyle. Her work merges minimalism with emotional depth to create thoughtful, compelling design systems.
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={fadeInRight}
          transition={{ duration: 0.6 }}
          className="bg-[#c3a98f] text-[#3a2c29] p-6 rounded-xl flex flex-col justify-between"
        >
          <div className="text-sm mb-4">Have some questions?</div>
          <div className="text-xl font-medium">Contact <em>me</em></div>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="col-span-3 flex flex-col sm:flex-row items-center justify-center gap-6 text-xl mt-4 text-[#f3efe8]"
        >
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
          <FaTiktok />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MainPage;
