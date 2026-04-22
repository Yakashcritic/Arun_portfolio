import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBookOpen, FaSchool } from 'react-icons/fa';

const TIMELINE = [
  {
    year: '2024',
    Icon: FaGraduationCap,
    title: 'Chartered Accountant (CA)',
    institution: 'ICAI — Institute of Chartered Accountants of India',
    desc: 'Successfully cleared the CA Final examination on the FIRST ATTEMPT. Comprehensive coverage of Financial Reporting, Advanced Taxation, Audit & Assurance, Strategic Financial Management, Corporate & Economic Laws.',
    badge: '⭐ First Attempt',
    badgeBg: 'linear-gradient(135deg, #D4AF37, #B8960C)',
    badgeColor: '#0A0F1E',
  },
  {
    year: '2021',
    Icon: FaBookOpen,
    title: 'CA Intermediate',
    institution: 'ICAI — Institute of Chartered Accountants of India',
    desc: 'Cleared CA Intermediate covering Accounting, Corporate Laws, Cost Accounting, Taxation, Auditing and Financial Management.',
    badge: '✓ Cleared',
    badgeBg: 'rgba(34,197,94,0.15)',
    badgeColor: '#4ade80',
    badgeBorder: 'rgba(34,197,94,0.4)',
  },
  {
    year: '2019',
    Icon: FaSchool,
    title: 'Commerce Background',
    institution: 'Higher Secondary Education',
    desc: 'Strong academic foundation in Commerce stream with Accountancy, Economics, Business Studies and Mathematics.',
    badge: '📚 Commerce',
    badgeBg: 'rgba(59,130,246,0.15)',
    badgeColor: '#93c5fd',
    badgeBorder: 'rgba(59,130,246,0.4)',
  },
];

import ElectricBorder from './ElectricBorder';

/* ─── Timeline Card ─────────────────────────────────────────── */
function TimelineCard({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex w-full items-start gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* ── Card ── */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="relative flex-1 rounded-2xl transition-all duration-300 group"
      >
        <ElectricBorder
          color="#D4AF37"
          speed={1}
          chaos={0.1}
          borderRadius={16}
        >
          <div 
            className="relative p-6 rounded-2xl transition-all duration-300"
            style={{
              background: 'rgba(20,27,45,0.8)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(212,175,55,0.15)',
              borderLeft: '3px solid #D4AF37',
            }}
          >
            {/* Badge */}
            <span
              className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-semibold font-poppins border"
              style={{
                background: item.badgeBg,
                color: item.badgeColor,
                borderColor: item.badgeBorder || 'rgba(212,175,55,0.4)',
              }}
            >
              {item.badge}
            </span>

            {/* Icon + Title Row */}
            <div className="flex items-center gap-3 mb-3 pr-24">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(212,175,55,0.12)' }}
              >
                <item.Icon size={18} style={{ color: '#D4AF37' }} />
              </div>
              <h3 className="font-playfair text-xl font-bold text-white leading-tight">{item.title}</h3>
            </div>

            {/* Institution */}
            <p className="text-sm font-semibold font-poppins mb-3" style={{ color: '#D4AF37' }}>
              {item.institution}
            </p>

            {/* Description */}
            <p className="text-sm leading-relaxed font-poppins" style={{ color: '#B0B8CC' }}>
              {item.desc}
            </p>

            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.03) 0%, transparent 60%)' }} />
          </div>
        </ElectricBorder>
      </motion.div>

      {/* ── Year Dot (center) — hidden on mobile ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        className="hidden md:flex flex-col items-center flex-shrink-0 z-10"
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center font-cinzel text-sm font-bold"
          style={{
            background: 'linear-gradient(135deg, #D4AF37, #B8960C)',
            color: '#0A0F1E',
            boxShadow: '0 0 0 4px rgba(212,175,55,0.2)',
          }}
        >
          {item.year}
        </div>
      </motion.div>

      {/* Spacer (fills opposite half on desktop) */}
      <div className="hidden md:block flex-1" />
    </div>
  );
}

/* ─── Education Section ─────────────────────────────────────── */
export default function Education() {
  return (
    <section
      id="education"
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#0A0F1E' }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            CREDENTIALS
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4">
            Education & Credentials
          </h2>
          <div
            className="w-16 h-0.5 rounded-full mx-auto"
            style={{ background: 'linear-gradient(90deg, #D4AF37, #F0D060)' }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gold line — desktop only */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 rounded-full"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, #D4AF37 10%, #D4AF37 90%, transparent 100%)',
            }}
          />

          {/* Cards */}
          <div className="flex flex-col gap-10">
            {TIMELINE.map((item, i) => (
              <TimelineCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
