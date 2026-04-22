import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Eager-load Navbar & Hero (above the fold)
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy-load below-the-fold sections
const About        = lazy(() => import('./components/About'));
const Skills       = lazy(() => import('./components/Skills'));
const Projects     = lazy(() => import('./components/Projects'));
const Education    = lazy(() => import('./components/Education'));
const Achievements = lazy(() => import('./components/Achievements'));
const Contact      = lazy(() => import('./components/Contact'));
const Footer       = lazy(() => import('./components/Footer'));



/* ─── Loading Screen ─────────────────────────────────────── */
function LoadingScreen() {
  return (
    <motion.div
      key="loading"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ backgroundColor: '#0A0F1E' }}
    >
      {/* Outer rotating ring */}
      <div className="relative flex items-center justify-center mb-6">
        <div
          className="absolute w-36 h-36 rounded-full border-2 border-dashed spin-slow"
          style={{ borderColor: 'rgba(212,175,55,0.5)' }}
        />
        <div
          className="absolute w-28 h-28 rounded-full border border-dashed spin-slow"
          style={{ borderColor: 'rgba(212,175,55,0.25)', animationDirection: 'reverse', animationDuration: '5s' }}
        />
        {/* Monogram */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center loading-monogram"
          style={{ background: 'linear-gradient(135deg, #D4AF37, #B8960C)' }}
        >
          <span className="font-cinzel text-2xl font-bold text-[#0A0F1E]">ASV</span>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-cinzel text-gold text-sm tracking-[0.3em] uppercase mt-2"
        style={{ color: '#D4AF37' }}
      >
        Arunachalam S V
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-xs tracking-widest mt-2 font-poppins"
        style={{ color: '#B0B8CC' }}
      >
        Chartered Accountant
      </motion.p>

      {/* Loading bar */}
      <div className="mt-8 w-48 h-0.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(212,175,55,0.2)' }}>
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #D4AF37, #F0D060)' }}
        />
      </div>
    </motion.div>
  );
}

/* ─── Section Fallback ───────────────────────────────────── */
function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-32">
      <div
        className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
        style={{ borderColor: '#D4AF37', borderTopColor: 'transparent' }}
      />
    </div>
  );
}

/* ─── App ────────────────────────────────────────────────── */
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Navbar />
            <main>
              <Hero />
              <Suspense fallback={<SectionFallback />}>
                <About />
                <Skills />
                <Projects />
                <Education />
                <Achievements />
                <Contact />
              </Suspense>
            </main>
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
