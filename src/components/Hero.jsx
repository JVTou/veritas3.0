import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { fadeIn, staggerContainer } from "../utils/motion";

const Hero = () => {
  return (
    <>
      {/* Background graphics - bottom right triangular area */}
      <div className="w-1/2 h-1/2 overflow-hidden -z-10">
        <div className="absolute inset-0">
          <img
            src="/images/icons/graphics.svg"
            alt="Background graphics"
            className="pointer-events-none select-none absolute object-cover"
          />
        </div>
      </div>
      {/* White triangle overlay - bottom left to top right */}
      <div className="absolute inset-0 pointer-events-none -z-5">
        <div 
          className="absolute top-0 right-0 w-full h-full bg-white shadow-lg"
            style={{
              clipPath: 'polygon(0 0, 80vw 0, 30vw 100vh, 0 100vh)',
              filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4))'
}}
        ></div>
      </div>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="home"
      className="hero py-10 flex justify-center "
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="z-10 hero-content flex-col lg:flex-row-reverse items-center lg:items-end"
      >
        {/* Veritas Logo */}
        <div className="hidden lg:flex justify-end items-end mb-0">
          <img
            src="/images/icons/veritas_logo.svg"
            alt="Veritas logo"
            className="w-80"
          />
        </div>
        <div className="text-center lg:text-start flex flex-col justify-center items-center lg:items-start min-w-2/3">
          <div className="font-garamond text-3xl font-black md:text-7xl">
            veritas managed solutions, inc.
            <div className="h-[3rem] md:h-[6rem] md:w-[720px]">
               <Typewriter
                 onInit={(typewriter) => {
                   typewriter
                     .pauseFor(1000)
                     .typeString(`<span class="text-primary">Low Voltage Systems</span>`)
                     .start();
                 }}
                options={{
                  loop: false,
                  delay: 30,
                  cursor: "",
                  parseHTML: true,
                }}
              />
            </div>
            <span className="text-base-content font-garamond">est. 2009</span>
          </div>
          <div className="py-6 flex gap-2 max-lg:justify-center">
            <a
              href="#contactus"
              className="btn btn-neutral md:btn-lg rounded-full font-garamond shadow-md"
            >
              Contact Us
            </a>
            <a
              href="#projects"
              className="btn btn-ghost md:btn-lg rounded-full font-garamond font-light"
            >
              See our work
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
    </>
  );
};

export default Hero;
