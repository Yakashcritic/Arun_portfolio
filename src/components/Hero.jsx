import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

import GridScan from './GridScan';

/* ─── Stagger variants ────────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

/* ─── Hero ──────────────────────────────────────────────────── */
export default function Hero() {
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesReady(true);
    });
  }, []);

  const particleOptions = useMemo(() => ({
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: false },
        resize: true,
      },
    },
    particles: {
      color: { value: '#D4AF37' },
      links: {
        color: '#D4AF37',
        distance: 130,
        enable: true,
        opacity: 0.08,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        random: true,
        speed: 0.6,
        straight: false,
      },
      number: { density: { enable: true, area: 900 }, value: 60 },
      opacity: { value: 0.25 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0A0F1E' }}
    >
      {/* Grid Scan Effect */}
      <div className="absolute inset-0 z-0">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#1A2035"
          gridScale={0.1}
          scanColor="#D4AF37"
          scanOpacity={0.3}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      {/* Particles */}
      {particlesReady && (
        <Particles
          id="hero-particles"
          options={particleOptions}
          className="absolute inset-0 z-[1]"
        />
      )}

      {/* Radial glow background */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(212,175,55,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
          opacity: 0.4,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base tracking-[0.35em] uppercase font-poppins mb-4"
            style={{ color: '#B0B8CC' }}
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{
              background: 'linear-gradient(135deg, #F0D060 0%, #D4AF37 50%, #B8960C 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(212,175,55,0.4))',
            }}
          >
            Arunachalam S V
          </motion.h1>

          {/* Typing Animation */}
          <motion.div variants={itemVariants} className="h-10 flex items-center mb-5">
            <TypeAnimation
              sequence={[
                'Chartered Accountant',   2000,
                'Finance Enthusiast',     1800,
                'Tax & Audit Expert',     1800,
                'Business Growth Advisor',1800,
              ]}
              wrapper="span"
              speed={50}
              deletionSpeed={60}
              repeat={Infinity}
              className="text-xl sm:text-2xl font-semibold font-poppins"
              style={{ color: '#D4AF37' }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg italic font-poppins mb-10"
            style={{ color: '#B0B8CC' }}
          >
            Turning Numbers into Narratives &nbsp;|&nbsp; Chennai
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8"
          >
            {/* View Work */}
            <Link to="projects" smooth duration={700} offset={-80}>
              <motion.button
                whileHover={{ scale: 1.06, boxShadow: '0 0 30px rgba(212,175,55,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold font-poppins text-sm transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
                  color: '#0A0F1E',
                  cursor: 'pointer',
                }}
              >
                View My Work
                <FaArrowRight className="text-sm" />
              </motion.button>
            </Link>

            {/* Download CV */}
            <motion.a
              href="mailto:arunachalamsv408@gmail.com?subject=CV Request&body=Hi Arunachalam, I would like to request your CV."
              whileHover={{
                scale: 1.06,
                backgroundColor: 'rgba(212,175,55,0.12)',
                boxShadow: '0 0 25px rgba(212,175,55,0.3)',
              }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold font-poppins text-sm border-2 transition-all duration-200"
              style={{
                borderColor: '#D4AF37',
                color: '#D4AF37',
                cursor: 'pointer',
              }}
            >
              <FaDownload className="text-sm" />
              Download CV
            </motion.a>
          </motion.div>

          {/* LinkedIn Icon */}
          <motion.div variants={itemVariants}>
            <motion.a
              href="https://www.linkedin.com/in/arunachalamsv408"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(212,175,55,0.5)' }}
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-200"
              style={{ borderColor: 'rgba(212,175,55,0.4)', color: '#D4AF37', cursor: 'pointer' }}
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="absolute bottom-24 right-4 sm:right-10 lg:right-20 float-animation"
        >
          <div
            className="px-4 py-2.5 rounded-xl text-sm font-semibold font-poppins border glass flex items-center gap-2"
            style={{ borderColor: 'rgba(212,175,55,0.5)', color: '#D4AF37' }}
          >
            <span>✓</span>
            <span>CA Cleared — First Attempt</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest font-poppins" style={{ color: '#B0B8CC' }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-0.5 h-8 rounded-full"
            style={{ background: 'linear-gradient(180deg, #D4AF37, transparent)' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
