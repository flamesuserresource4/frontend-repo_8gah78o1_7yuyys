import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been noted.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Contact
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-300">Name</label>
                <input required type="text" className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none ring-offset-0 focus:ring-2 focus:ring-black dark:border-neutral-800 dark:bg-neutral-900 dark:focus:ring-white" />
              </div>
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-300">Email</label>
                <input required type="email" className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none ring-offset-0 focus:ring-2 focus:ring-black dark:border-neutral-800 dark:bg-neutral-900 dark:focus:ring-white" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-gray-600 dark:text-gray-300">Message</label>
              <textarea required rows={5} className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none ring-offset-0 focus:ring-2 focus:ring-black dark:border-neutral-800 dark:bg-neutral-900 dark:focus:ring-white" />
            </div>
            <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-white shadow-sm ring-1 ring-black/10 transition hover:opacity-90 dark:bg-white dark:text-black dark:ring-white/10">
              <Send className="h-4 w-4" /> Send Message
            </button>
            {status && <p className="mt-3 text-sm text-green-600 dark:text-green-400">{status}</p>}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="text-gray-600 dark:text-gray-300">
                I’m open to freelance work, collaborations, and interesting opportunities. Drop a message and I’ll get back to you.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-700 transition hover:bg-gray-50 dark:border-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-900">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-700 transition hover:bg-gray-50 dark:border-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-900">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-700 transition hover:bg-gray-50 dark:border-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-900">
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </div>
            </div>
            <div className="mt-10 text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Joshua. All rights reserved.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
