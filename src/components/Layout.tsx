import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, Linkedin, Github, Mail, Feather } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isStandaloneCalendly = location.pathname === '/calendly';

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Compétences', path: '/skills' },
    { name: 'Parcours', path: '/experience' },
    { name: 'Témoignages', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      {!isStandaloneCalendly && (
        <>
          {/* Header */}
          <nav className="bg-background/80 backdrop-blur-md border-b border-outline-variant/20 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
              <Link to="/" className="font-headline text-2xl font-black text-slate-900 tracking-tighter flex items-center gap-2 group">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-500">
                  <Feather size={20} />
                </div>
                <span className="hidden sm:inline">Irotori Baroka</span>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex gap-10 items-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "font-headline text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-primary relative group",
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-slate-500"
                    )}
                  >
                    {link.name}
                    <span className={cn(
                      "absolute -bottom-2 left-0 h-1 bg-primary transition-all duration-300 rounded-full",
                      location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                    )}></span>
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden text-on-surface"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden bg-background border-b border-outline-variant/20 overflow-hidden"
                >
                  <div className="px-6 py-8 flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={cn(
                          "font-body text-lg font-medium",
                          location.pathname === link.path ? "text-primary" : "text-on-surface-variant"
                        )}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {!isStandaloneCalendly && (
        <footer className="bg-white border-t border-slate-100 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex gap-6">
                <a href="#" className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-500 shadow-sm">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-500 shadow-sm">
                  <Github size={20} />
                </a>
                <a href="mailto:birotori@gmail.com" className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-500 shadow-sm">
                  <Mail size={20} />
                </a>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <p className="font-body text-xs text-slate-400">
                  © 2024 Irotori Baroka. Tous droits réservés.
                </p>
                <p className="font-body text-xs text-slate-400 italic">
                  Innovation . Leadership . Impact
                </p>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
