import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';

const NAV_LINKS = [
  { label: 'Home',      to: 'home'      },
  { label: 'About',     to: 'about'     },
  { label: 'Skills',    to: 'skills'    },
  { label: 'Projects',  to: 'projects'  },
  { label: 'Education', to: 'education' },
  { label: 'Contact',   to: 'contact'   },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll position for background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver for active section
  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.getElementById(l.to)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach(s => observer.observe(s));
    return () => sections.forEach(s => observer.unobserve(s));
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(10,15,30,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212,175,55,0.15)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link to="home" smooth duration={600} offset={-80}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="font-cinzel text-2xl font-bold select-none"
                style={{
                  background: 'linear-gradient(135deg, #F0D060, #D4AF37, #B8960C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  cursor: 'pointer',
                  filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.5))',

                }}
              >
                ASV
              </motion.div>
            </Link>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth
                    duration={600}
                    offset={-80}
                    spy
                    onSetActive={() => setActiveSection(to)}
                  >
                    <motion.span
                      whileHover={{ color: '#D4AF37' }}
                      className="relative px-3 py-2 text-sm font-medium font-poppins transition-colors duration-200 block"
                      style={{
                        color: activeSection === to ? '#D4AF37' : '#B0B8CC',
                        cursor: 'pointer',

                      }}
                    >
                      {label}
                      {activeSection === to && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                          style={{ background: 'linear-gradient(90deg, #D4AF37, #F0D060)' }}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger */}
            <button
            className="md:hidden p-2 rounded-md transition-colors"
              style={{ cursor: 'pointer', color: '#D4AF37' }}

              onClick={() => setMobileOpen(o => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                {mobileOpen ? <HiX size={26} /> : <HiMenu size={26} />}
              </motion.div>
            </button>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -20, scaleY: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-16 left-0 right-0 z-[99] py-4 px-6"
            style={{
              background: 'rgba(10,15,30,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(212,175,55,0.2)',
              transformOrigin: 'top',
            }}
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map(({ label, to }, i) => (
                <motion.li
                  key={to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={to}
                    smooth
                    duration={600}
                    offset={-70}
                    onClick={closeMobile}
                  >
                    <span
                      className="block py-3 px-4 text-base font-medium font-poppins rounded-lg transition-all duration-200"
                      style={{
                        color: activeSection === to ? '#D4AF37' : '#B0B8CC',
                        background: activeSection === to ? 'rgba(212,175,55,0.08)' : 'transparent',
                        borderLeft: activeSection === to ? '3px solid #D4AF37' : '3px solid transparent',
                        cursor: 'pointer',

                      }}
                    >
                      {label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
