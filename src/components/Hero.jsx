import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-white text-black dark:bg-black dark:text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* subtle gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90 dark:from-black/80 dark:via-black/40 dark:to-black/90" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight"
        >
          Joshua — Web Developer & UI Enthusiast
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-5 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300"
        >
          Building clean and functional digital experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projects" className="rounded-full bg-black px-5 py-3 text-white shadow-sm ring-1 ring-black/10 transition hover:opacity-90 dark:bg-white dark:text-black dark:ring-white/10">
            View Projects
          </a>
          <a href="#contact" className="rounded-full bg-white px-5 py-3 text-black ring-1 ring-gray-200 shadow-sm transition hover:bg-gray-50 dark:bg-black dark:text-white dark:ring-gray-800 dark:hover:bg-neutral-900">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
