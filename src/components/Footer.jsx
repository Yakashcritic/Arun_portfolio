import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaLinkedin, FaArrowUp, FaHeart } from 'react-icons/fa';

const NAV_LINKS = [
  { label: 'Home',      to: 'home'      },
  { label: 'About',     to: 'about'     },
  { label: 'Skills',    to: 'skills'    },
  { label: 'Projects',  to: 'projects'  },
  { label: 'Education', to: 'education' },
  { label: 'Contact',   to: 'contact'   },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* ── Footer ── */}
      <footer
        className="relative pt-14 pb-8 overflow-hidden"
        style={{
          backgroundColor: '#060A14',
          borderTop: '1px solid rgba(212,175,55,0.3)',
        }}
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 100%, rgba(212,175,55,0.04) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Row 1: Monogram + Tagline ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-10"
          >
            <span
              className="font-cinzel text-5xl font-bold mb-2"
              style={{
                background: 'linear-gradient(135deg, #F0D060, #D4AF37, #B8960C)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 12px rgba(212,175,55,0.4))',
              }}
            >
              ASV
            </span>
            <p className="font-poppins text-sm" style={{ color: '#B0B8CC' }}>
              Chartered Accountant &nbsp;|&nbsp; Chennai
            </p>
          </motion.div>

          {/* ── Row 2: Quick links + LinkedIn ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center gap-6 mb-10"
          >
            {/* Nav links */}
            <ul className="flex flex-wrap justify-center gap-1">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} smooth duration={600} offset={-80}>
                    <span
                      className="px-4 py-2 text-sm font-poppins rounded-lg transition-all duration-200 block"
                      style={{ color: '#B0B8CC', cursor: 'pointer' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#D4AF37')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#B0B8CC')}
                    >

                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/arunachalamsv408"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.12, boxShadow: '0 0 20px rgba(212,175,55,0.5)' }}
              whileTap={{ scale: 0.9 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold font-poppins transition-all duration-200"
              style={{ borderColor: 'rgba(212,175,55,0.4)', color: '#D4AF37', cursor: 'pointer' }}

              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={16} />
              Connect on LinkedIn
            </motion.a>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px mb-8" style={{ background: 'rgba(212,175,55,0.1)' }} />

          {/* ── Row 3: Copyright ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-poppins"
            style={{ color: '#B0B8CC' }}
          >
            <p>© 2025 Arunachalam S V. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Crafted with precision — just like accounting
              <span style={{ color: '#D4AF37' }}>✨</span>
            </p>
          </motion.div>
        </div>
      </footer>

      {/* ── Back to Top Button ── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.12, boxShadow: '0 0 24px rgba(212,175,55,0.6)' }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #B8960C)',
                cursor: 'pointer',
              }}

            aria-label="Back to top"
          >
            <FaArrowUp size={16} color="#0A0F1E" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
