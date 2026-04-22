import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCalculator, FaFileInvoiceDollar, FaSearch, FaTable,
  FaComments, FaBrain, FaMicroscope, FaLightbulb,
} from 'react-icons/fa';

const SKILLS = [
  {
    Icon: FaCalculator,
    title: 'Accounting',
    desc: 'Financial record keeping, bookkeeping, and accurate financial reporting',
  },
  {
    Icon: FaFileInvoiceDollar,
    title: 'Taxation',
    desc: 'Direct & Indirect tax planning, compliance and filing expertise',
  },
  {
    Icon: FaSearch,
    title: 'Audit Support',
    desc: 'Internal & statutory audit assistance with attention to detail',
  },
  {
    Icon: FaTable,
    title: 'Excel & Data',
    desc: 'Advanced Excel, data modeling, pivot tables, and MIS reports',
  },
  {
    Icon: FaComments,
    title: 'Communication',
    desc: 'Clear, professional communication in written and verbal forms',
  },
  {
    Icon: FaBrain,
    title: 'Analytical Thinking',
    desc: 'Data-driven decision making and logical problem analysis',
  },
  {
    Icon: FaMicroscope,
    title: 'Research',
    desc: 'In-depth financial and business research with structured insights',
  },
  {
    Icon: FaLightbulb,
    title: 'Problem Solving',
    desc: 'Creative solution building for complex financial challenges',
  },
];

/* ─── Variants ──────────────────────────────────────────────── */
const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

import ElectricBorder from './ElectricBorder';

/* ─── SkillCard ─────────────────────────────────────────────── */
function SkillCard({ Icon, title, desc }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="relative flex flex-col rounded-2xl transition-all duration-300 group h-full"
    >
      <ElectricBorder
        color="#D4AF37"
        speed={1}
        chaos={0.1}
        borderRadius={16}
      >
        <div 
          className="relative flex flex-col p-6 h-full rounded-2xl overflow-hidden"
          style={{
            background: '#141B2D',
            border: '1px solid rgba(212,175,55,0.12)',
          }}
        >
          {/* Icon circle */}
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
            style={{ background: 'rgba(212,175,55,0.1)' }}
          >
            <Icon size={26} style={{ color: '#D4AF37' }} />
          </div>

          {/* Title */}
          <h3 className="text-white font-bold text-lg font-poppins mb-2">{title}</h3>

          {/* Description */}
          <p className="text-sm leading-relaxed font-poppins flex-1" style={{ color: '#B0B8CC' }}>
            {desc}
          </p>

          {/* Bottom gold line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #D4AF37, #F0D060)' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          {/* Hover glow corner */}
          <div
            className="absolute top-0 right-0 w-20 h-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle at top right, rgba(212,175,55,0.08) 0%, transparent 70%)',
            }}
          />
        </div>
      </ElectricBorder>
    </motion.div>
  );
}

/* ─── Skills Section ─────────────────────────────────────────── */
export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#0A0F1E' }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(212,175,55,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            WHAT I DO
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4">
            Core Competencies
          </h2>
          <p className="font-poppins text-base mb-6" style={{ color: '#B0B8CC' }}>
            Skills that drive results
          </p>
          <div
            className="w-16 h-0.5 rounded-full mx-auto"
            style={{ background: 'linear-gradient(90deg, #D4AF37, #F0D060)' }}
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {SKILLS.map(({ Icon, title, desc }) => (
            <SkillCard key={title} Icon={Icon} title={title} desc={desc} />
          ))}
        </motion.div>

        {/* Bottom decorative tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-14"
        >
          {['GST Filing', 'Income Tax', 'IFRS', 'Tally', 'MS Excel', 'MIS Reports', 'Financial Analysis', 'ICAI Standards'].map(tag => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full text-xs font-poppins font-medium border"
              style={{
                borderColor: 'rgba(212,175,55,0.3)',
                color: '#D4AF37',
                background: 'rgba(212,175,55,0.06)',
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
