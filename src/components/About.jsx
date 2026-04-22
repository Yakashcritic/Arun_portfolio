import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─── Animated Counter ─────────────────────────────────────── */
function AnimatedCounter({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    if (target === '∞' || isNaN(Number(target))) {
      setCount(target);
      return;
    }
    const end = parseFloat(target);
    const duration = 1800;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end * 10) / 10;
      setCount(current);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  const displayVal = typeof count === 'string' ? count : (Number.isInteger(parseFloat(target)) ? Math.round(count) : count);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{displayVal}{suffix}
    </span>
  );
}

/* ─── Stat Card ─────────────────────────────────────────────── */
function StatCard({ value, label, suffix, prefix, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(212,175,55,0.2)' }}
      className="p-5 rounded-xl text-center relative overflow-hidden transition-all duration-300"
      style={{
        background: 'rgba(20,27,45,0.7)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(212,175,55,0.15)',
        borderTop: '2px solid #D4AF37',
      }}
    >
      <div
        className="text-3xl font-bold font-cinzel mb-1"
        style={{
          background: 'linear-gradient(135deg, #F0D060, #D4AF37)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        <AnimatedCounter target={value} suffix={suffix} prefix={prefix} />
      </div>
      <p className="text-xs font-poppins" style={{ color: '#B0B8CC' }}>{label}</p>
    </motion.div>
  );
}

/* ─── About ─────────────────────────────────────────────────── */
export default function About() {
  return (
    <section
      id="about"
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#0F1628' }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Avatar ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            {/* Rotating ring + circle */}
            <div className="relative flex items-center justify-center mb-6">
              {/* Outer dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute w-64 h-64 rounded-full"
                style={{ border: '2px dashed rgba(212,175,55,0.4)' }}
              />
              {/* Inner dashed ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute w-52 h-52 rounded-full"
                style={{ border: '1px dashed rgba(212,175,55,0.2)' }}
              />

              {/* Avatar Circle */}
              <motion.div
                whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(212,175,55,0.35)' }}
                className="relative w-44 h-44 rounded-full flex items-center justify-center z-10 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F0D060 40%, #B8960C 100%)',
                  boxShadow: '0 0 30px rgba(212,175,55,0.25)',
                }}
              >
                <span className="font-cinzel text-6xl font-bold" style={{ color: '#0A0F1E' }}>
                  ASV
                </span>
              </motion.div>
            </div>

            {/* Tag pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="px-5 py-2 rounded-full text-sm font-semibold font-poppins border"
              style={{
                borderColor: 'rgba(212,175,55,0.5)',
                color: '#D4AF37',
                background: 'rgba(212,175,55,0.08)',
              }}
            >
              Chartered Accountant
            </motion.div>
          </motion.div>

          {/* ── Right: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Section label */}
            <p
              className="text-xs tracking-[0.35em] uppercase font-poppins mb-3 font-semibold"
              style={{ color: '#D4AF37' }}
            >
              WHO I AM
            </p>

            {/* Heading */}
            <h2
              className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
            >
              About Me
            </h2>

            {/* Gold divider */}
            <div
              className="w-16 h-0.5 rounded-full mb-7"
              style={{ background: 'linear-gradient(90deg, #D4AF37, #F0D060)' }}
            />

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base leading-relaxed font-poppins mb-4"
              style={{ color: '#B0B8CC' }}
            >
              I am a{' '}
              <span style={{ color: '#D4AF37', fontWeight: 600 }}>Qualified Chartered Accountant</span>{' '}
              based in Chennai, with a deep passion for finance, taxation, audit, and strategic business growth.
              I bring analytical thinking, research-driven insights, and a proactive self-learning mindset to every
              challenge I take on.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base leading-relaxed font-poppins mb-8"
              style={{ color: '#B0B8CC' }}
            >
              I cleared my CA qualification on the{' '}
              <span style={{ color: '#D4AF37', fontWeight: 600 }}>FIRST ATTEMPT</span>{' '}
              — a reflection of my dedication and discipline. I am actively seeking opportunities to contribute,
              learn, and grow in the finance and business domain.
            </motion.p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatCard value="1"   suffix="st" label="Attempt CA Clear"    delay={0}    />
              <StatCard value="3"   suffix="+"  label="Finance Domains"     delay={0.1}  />
              <StatCard value="4"   suffix="+"  label="Projects Completed"  delay={0.2}  />
              <StatCard value="∞"   suffix=""   label="Learning Mindset"    delay={0.3}  />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
