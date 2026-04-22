import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaBook, FaCrown, FaRocket } from 'react-icons/fa';

const ACHIEVEMENTS = [
  {
    Icon: FaTrophy,
    title: 'CA Cleared — First Attempt',
    desc: 'Demonstrated exceptional dedication and discipline by successfully clearing all levels of the Chartered Accountancy examination in the very first attempt — a feat achieved by less than 10% of candidates.',
    highlight: 'Top 10% Achievement',
  },
  {
    Icon: FaBook,
    title: 'Proactive Self-Learning',
    desc: 'Continuously upskills through self-driven learning in finance, technology, market trends, and business strategy beyond the formal CA curriculum.',
    highlight: 'Always Learning',
  },
  {
    Icon: FaCrown,
    title: 'Leadership Initiatives',
    desc: 'Took active leadership roles in academic and professional settings, driving team initiatives, organizing events, and mentoring fellow CA aspirants.',
    highlight: 'Natural Leader',
  },
  {
    Icon: FaRocket,
    title: 'Continuous Skill Development',
    desc: 'Consistently builds technical and soft skills through online courses, research projects, content creation, and hands-on finance practice beyond standard requirements.',
    highlight: 'Growth Mindset',
  },
];

/* ─── Variants ──────────────────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

import ElectricBorder from './ElectricBorder';

/* ─── Achievement Card ──────────────────────────────────────── */
function AchievementCard({ Icon, title, desc, highlight }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -6,
        backgroundColor: '#1a2238',
      }}
      className="flex flex-col rounded-2xl transition-all duration-300 group h-full"
    >
      <ElectricBorder
        color="#D4AF37"
        speed={1}
        chaos={0.1}
        borderRadius={16}
      >
        <div 
          className="flex flex-col items-center text-center p-8 h-full rounded-2xl transition-all duration-300"
          style={{
            background: '#141B2D',
            border: '1px solid rgba(212,175,55,0.2)',
          }}
        >
          {/* Icon */}
          <motion.div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300"
            style={{ background: 'rgba(212,175,55,0.1)' }}
            whileHover={{ scale: 1.12 }}
          >
            <Icon
              size={30}
              className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
              style={{ color: '#D4AF37' }}
            />
          </motion.div>

          {/* Highlight badge */}
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold font-poppins mb-4"
            style={{
              background: 'rgba(212,175,55,0.12)',
              color: '#D4AF37',
              border: '1px solid rgba(212,175,55,0.3)',
            }}
          >
            {highlight}
          </span>

          {/* Title */}
          <h3 className="font-playfair text-xl font-bold text-white mb-4 leading-snug">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed font-poppins" style={{ color: '#B0B8CC' }}>
            {desc}
          </p>
        </div>
      </ElectricBorder>
    </motion.article>
  );
}

/* ─── Achievements Section ──────────────────────────────────── */
export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#0F1628' }}
    >
      {/* Radial gold glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Decorative rings */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ border: '1px solid rgba(212,175,55,0.04)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ border: '1px solid rgba(212,175,55,0.02)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs tracking-[0.35em] uppercase font-poppins font-semibold mb-3"
            style={{ color: '#D4AF37' }}
          >
            HIGHLIGHTS
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4">
            Achievements & Highlights
          </h2>
          <div
            className="w-16 h-0.5 rounded-full mx-auto"
            style={{ background: 'linear-gradient(90deg, #D4AF37, #F0D060)' }}
          />
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-7"
        >
          {ACHIEVEMENTS.map(a => (
            <AchievementCard key={a.title} {...a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
