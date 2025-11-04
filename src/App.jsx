import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Sun, Moon, Menu } from 'lucide-react';

const App = () => {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white scroll-smooth">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800/60 dark:bg-black/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-semibold tracking-tight">Joshua</a>
          <nav className="hidden gap-6 md:flex">
            <a href="#about" className="text-sm text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white">About</a>
            <a href="#projects" className="text-sm text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white">Projects</a>
            <a href="#contact" className="text-sm text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <button aria-label="Toggle theme" onClick={() => setDark((v) => !v)} className="grid h-9 w-9 place-items-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-50 dark:border-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-900">
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button aria-label="Menu" onClick={() => setOpen((v) => !v)} className="grid h-9 w-9 place-items-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-50 md:hidden dark:border-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-900">
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-gray-200 dark:border-neutral-800">
            <nav className="mx-auto max-w-6xl px-6 py-3 flex flex-col gap-2">
              <a onClick={() => setOpen(false)} href="#about" className="py-2 text-sm text-gray-700 dark:text-gray-300">About</a>
              <a onClick={() => setOpen(false)} href="#projects" className="py-2 text-sm text-gray-700 dark:text-gray-300">Projects</a>
              <a onClick={() => setOpen(false)} href="#contact" className="py-2 text-sm text-gray-700 dark:text-gray-300">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Sections */}
      <Hero />
      <AboutSkills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
