import React from 'react';
import { motion } from 'framer-motion';
import { FaFlask, FaPen, FaChartLine, FaGraduationCap } from 'react-icons/fa';

const PROJECTS = [
  {
    category: 'Research',
    CategoryIcon: FaFlask,
    title: 'Internship Platform Research',
    desc: 'Conceptualized and researched an internship platform tailored for CA students and finance professionals, identifying market gaps and proposing structured solutions.',
    tags: ['Research', 'Strategy', 'Finance', 'Ideation'],
  },
  {
    category: 'Content Creation',
    CategoryIcon: FaPen,
    title: 'Business Content Creation',
    desc: 'Created structured finance and business content for professional platforms, simplifying complex accounting concepts to make them accessible for wider audiences.',
    tags: ['Content', 'Finance', 'Communication', 'LinkedIn'],
  },
  {
    category: 'Analysis',
    CategoryIcon: FaChartLine,
    title: 'Finance & Market Analysis',
    desc: 'Conducted in-depth market research and financial analysis reports, studying industry trends, company fundamentals, and investment patterns using Excel and data tools.',
    tags: ['Analysis', 'Excel', 'Research', 'Markets'],
  },
  {
    category: 'Academic',
    CategoryIcon: FaGraduationCap,
    title: 'Practical CA Assignments',
    desc: 'Completed comprehensive practical assignments covering GST, Income Tax, audit procedures, financial statement analysis, and compliance frameworks during CA articleship training.',
    tags: ['Taxation', 'Audit', 'Accounting', 'ICAI'],
  },
];

/* ─── Variants ──────────────────────────────────────────────── */
const gridVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

import ElectricBorder from './ElectricBorder';

/* ─── Project Card ──────────────────────────────────────────── */
function ProjectCard({ category, CategoryIcon, title, desc, tags }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6 }}
      className="relative flex flex-col rounded-2xl transition-all duration-300 group h-full"
    >
      <ElectricBorder
        color="#D4AF37"
        speed={1}
        chaos={0.1}
        borderRadius={16}
      >
        <div 
          className="relative flex flex-col p-7 h-full rounded-2xl overflow-hidden"
          style={{
            background: '#141B2D',
            border: '1px solid rgba(212,175,55,0.12)',
            borderLeft: '3px solid #D4AF37',
          }}
        >
          {/* Card inner glow on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(212,175,55,0.04) 0%, transparent 60%)',
              boxShadow: 'inset 0 0 0 1px rgba(212,175,55,0.3)',
            }}
          />

          <div className="flex flex-col flex-1 relative z-10">
            {/* Category badge */}
            <div className="flex items-center gap-2 mb-5">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-poppins"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37, #B8960C)',
                  color: '#0A0F1E',
                }}
              >
                <CategoryIcon size={11} />
                {category}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-playfair text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-200">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed font-poppins mb-6 flex-1" style={{ color: '#B0B8CC' }}>
              {desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-poppins font-medium border"
                  style={{
                    borderColor: 'rgba(212,175,55,0.35)',
                    color: '#D4AF37',
                    background: 'rgba(212,175,55,0.07)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ElectricBorder>
    </motion.article>
  );
}

/* ─── Projects Section ──────────────────────────────────────── */
export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#0F1628' }}
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 40% at 50% 100%, rgba(212,175,55,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="text-xs tracking-[0.35em] uppercase font-poppins font-semibold mb-3"
            style={{ color: '#D4AF37' }}
          >
            MY WORK
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4">
            Projects & Work
          </h2>
          <div
            className="w-16 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #D4AF37, #F0D060)' }}
          />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-7"
        >
          {PROJECTS.map(p => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
