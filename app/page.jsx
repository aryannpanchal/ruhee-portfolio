/* eslint-disable @next/next/no-img-element */
'use client';

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedin, FaTiktok } from "react-icons/fa";
import Testimonials from './../components/Testimonials';
import Stats from './../components/Stats';
import Projects from './../components/Projects';


// Animation variants
const fadeIn = (direction = "up", delay = 0) => {
  const dirMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return {
    hidden: { opacity: 0, ...dirMap[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        duration: 0.9,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };
};

const scaleFade = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration: 0.9,
      ease: [0.33, 1, 0.68, 1],
    },
  },
});

const MainPage = () => {
  return (
    <>
    <div>
      <motion.div
        className="bg-[#f3efe8] text-[#f3efe8] w-full px-4 py-10 mt-18 md:px-24 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-6 font-serif "
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div
          variants={scaleFade(0.1)}
          className="col-span-1 md:col-span-3 text-center text-xl md:text-6xl font-thin tracking-widest rounded-xl text-black"
        >
          <h1 className="font-world opacity-40 italic">Ruhee Awargaonkar</h1>
        </motion.div>

        {/* Creative Direction */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          className="bg-[#1f1c1b] p-6 rounded-xl flex flex-col justify-between"
        >
          <div className="text-xl md:text-6xl leading-snug text-[#c3a98f] ">
            Crafting <em>spaces</em> that <em>breathe</em> life and soul.
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          className="rounded-xl overflow-hidden bg-[#1f1c1b] flex items-center justify-center min-h-[240px] md:min-h-[320px]"
        >
          <motion.img
            src="/ruhee.jpg"
            alt="Ruhee Awargaonkar profile"
            className="object-cover w-full h-full"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.div>

        {/* Soft Form Image + List */}
        <motion.div
          variants={fadeIn("right", 0.5)}
          className="bg-[#1f1c1b] p-4 rounded-xl flex flex-col gap-4"
        >
          <div>
            {/* <div className="text-sm mb-2">Soft Form</div> */}
            <div className="bg-[#3a2c29] rounded-lg h-40 md:h-48 w-full flex items-center justify-center overflow-hidden">
              <motion.img
                src="/projects.png"
                alt="Soft Form Federico Babina"
                className="object-fill w-full h-full"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>
          </div>
          <ul className="text-sm space-y-6 text-gray-300 font-bold md:text-2xl gap-4">
            <a href=''>Balm Body</a><br />
            <a href=''>Morning Coffee</a><br />
            <a href=''>Ritual Stone</a><br />
            <a href=''>Ritual Stone</a><br />
            <a href=''>Ritual Stone</a><br />
            <a href=''>Ritual Stone</a><br />
          </ul>
        </motion.div>

        {/* About Section */}
        <motion.div
          variants={fadeIn("left", 0.7)}
          className="bg-[#1f1c1b] p-6 rounded-xl text-sm leading-relaxed"
        >
          I'm Ruhee Awargaonkar, an architecture graduate passionate about designing meaningful and user-centric spaces. With a strong foundation in urban design, sustainability, and spatial storytelling, I aim to create architecture that blends function with emotion. From concept to execution, I approach each project with creativity, empathy, and a commitment to enhancing the built environment.

        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={fadeIn("right", 0.8)}
          className="bg-[#c3a98f] text-[#3a2c29] p-6 rounded-xl flex flex-col"
        >
          <div className="md:text-4xl">Have some questions?</div>
          <div className="text-xl font-medium">Contact <em>me</em></div>
        </motion.div>

         {/* last Section */}
         <motion.div
          variants={fadeIn("right", 0.8)}
          className="bg-black text-white p-6 rounded-xl flex flex-col justify-between"
        >
          <div className="text-sm mb-4">Have some questions?</div>
          <div className="text-xl font-medium">Contact <em>me</em></div>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          variants={fadeIn("up", 1.0)}
          className="col-span-1 md:col-span-3 flex flex-row items-center justify-center gap-6 text-xl mt-4 sm:mb-24 text-[#1f1c1b]"
        >
          <FaInstagram className="hover:scale-110 transition-transform duration-300" />
          <FaTwitter className="hover:scale-110 transition-transform duration-300" />
          <FaLinkedin className="hover:scale-110 transition-transform duration-300" />
          <FaTiktok className="hover:scale-110 transition-transform duration-300" />
        </motion.div>
      </motion.div>
     
    </div>
    <Stats />
     <Testimonials />
     <Projects />
    
    </>
 
    
  );
};

export default MainPage;
