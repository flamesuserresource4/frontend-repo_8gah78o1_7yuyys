import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'Git', level: 80 },
  { name: 'Bootstrap', level: 75 },
  { name: 'Python (Learning)', level: 50 },
];

const softSkills = ['Communication', 'Problem Solving', 'Attention to Detail', 'Collaboration', 'Adaptability'];

const AboutSkills = () => {
  return (
    <section id="about" className="relative py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">About</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m Joshua, a web developer focused on crafting clean, performant interfaces. I enjoy turning ideas into
              functional products with thoughtful UI/UX. My toolkit includes HTML, CSS, JavaScript, Git, and Bootstrap.
              I’m currently expanding my backend capabilities by learning Python to round out my skills.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert('CV download not linked yet. Replace with your file URL.'); }}
                className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-white shadow-sm ring-1 ring-black/10 transition hover:opacity-90 dark:bg-white dark:text-black dark:ring-white/10"
              >
                Download CV
              </a>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-medium">Technical Skills</h3>
              <div className="mt-4 space-y-4">
                {skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{s.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{s.level}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-neutral-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full bg-black dark:bg-white"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="mt-8 text-xl font-medium">Soft Skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span key={s} className="rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700 shadow-sm dark:border-neutral-800 dark:text-gray-300">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="mx-auto aspect-square w-56 sm:w-72 md:w-80 rounded-2xl bg-gray-100 p-2 shadow-sm ring-1 ring-gray-200 dark:bg-neutral-900 dark:ring-neutral-800">
              <div className="h-full w-full rounded-xl bg-gradient-to-br from-gray-200 to-gray-50 dark:from-neutral-800 dark:to-neutral-900 grid place-items-center text-gray-400 dark:text-gray-500">
                <span className="text-sm">Profile Photo</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSkills;
