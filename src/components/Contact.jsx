import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin,
  FaPaperPlane, FaCheckCircle,
} from 'react-icons/fa';

const CONTACT_INFO = [
  {
    Icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Chennai, India',
    link: null,
  },
  {
    Icon: FaPhone,
    label: 'Phone',
    value: '+91 9566152020',
    link: 'tel:+919566152020',
  },
  {
    Icon: FaEnvelope,
    label: 'Email',
    value: 'arunachalamsv408@gmail.com',
    link: 'mailto:arunachalamsv408@gmail.com',
  },
  {
    Icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/arunachalamsv408',
    link: 'https://www.linkedin.com/in/arunachalamsv408',
  },
];

/* ─── Info Card ─────────────────────────────────────────────── */
function InfoCard({ Icon, label, value, link, delay }) {
  const content = (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(212,175,55,0.18)', borderColor: 'rgba(212,175,55,0.5)' }}
      className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
      style={{
        background: 'rgba(20,27,45,0.7)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(212,175,55,0.15)',
        cursor: link ? 'pointer' : 'default',

      }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(212,175,55,0.1)' }}
      >
        <Icon size={18} style={{ color: '#D4AF37' }} />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-poppins mb-0.5" style={{ color: '#B0B8CC' }}>{label}</p>
        <p className="text-sm font-semibold text-white font-poppins truncate">{value}</p>
      </div>
    </motion.div>
  );

  if (link) {
    return (
      <a href={link} target={link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
        {content}

      </a>
    );
  }
  return content;
}

/* ─── Contact Form ──────────────────────────────────────────── */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    setErrors(er => ({ ...er, [name]: undefined }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 1800));
    setLoading(false);
    setSuccess(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
          style={{ background: 'rgba(34,197,94,0.1)', border: '2px solid rgba(34,197,94,0.4)' }}
        >
          <FaCheckCircle size={36} color="#4ade80" />
        </motion.div>
        <h3 className="font-playfair text-2xl font-bold text-white mb-3">Message Sent!</h3>
        <p className="font-poppins text-sm mb-6" style={{ color: '#B0B8CC' }}>
          Thank you for reaching out. I'll get back to you shortly.
        </p>
        <button
          onClick={() => setSuccess(false)}
        className="px-6 py-2.5 rounded-full text-sm font-semibold font-poppins border transition-all duration-200"
          style={{ borderColor: '#D4AF37', color: '#D4AF37', cursor: 'pointer' }}

        >
          Send Another
        </button>
      </motion.div>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-xl text-sm font-poppins text-white placeholder-[#B0B8CC] transition-all duration-200 input-gold";
  const inputStyle = { background: '#141B2D', border: '1px solid rgba(212,175,55,0.2)' };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Name */}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className={inputClass}
          style={inputStyle}
          aria-label="Full Name"
        />
        {errors.name && <p className="text-xs mt-1 font-poppins" style={{ color: '#f87171' }}>{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          style={inputStyle}
          aria-label="Email Address"
        />
        {errors.email && <p className="text-xs mt-1 font-poppins" style={{ color: '#f87171' }}>{errors.email}</p>}
      </div>

      {/* Subject */}
      <div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className={inputClass}
          style={inputStyle}
          aria-label="Subject"
        />
        {errors.subject && <p className="text-xs mt-1 font-poppins" style={{ color: '#f87171' }}>{errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        <textarea
          name="message"
          placeholder="Your message..."
          value={form.message}
          onChange={handleChange}
          rows={5}
          className={inputClass + ' resize-none'}
          style={inputStyle}
          aria-label="Message"
        />
        {errors.message && <p className="text-xs mt-1 font-poppins" style={{ color: '#f87171' }}>{errors.message}</p>}
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={loading}
        whileHover={!loading ? { scale: 1.02, boxShadow: '0 0 30px rgba(212,175,55,0.4)' } : {}}
        whileTap={!loading ? { scale: 0.98 } : {}}
        className="w-full py-4 rounded-xl font-semibold font-poppins text-sm flex items-center justify-center gap-2 transition-all duration-200"
        style={{
          background: loading ? 'rgba(212,175,55,0.5)' : 'linear-gradient(135deg, #D4AF37, #F0D060)',
          color: '#0A0F1E',
          cursor: 'pointer',
        }}

      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-[#0A0F1E] border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <FaPaperPlane size={14} />
          </>
        )}
      </motion.button>
    </form>
  );
}

/* ─── Contact Section ───────────────────────────────────────── */
export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#0A0F1E' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(212,175,55,0.06) 0%, transparent 70%)' }}
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
            REACH OUT
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-3">
            Let's Connect
          </h2>
          <p className="font-poppins text-base italic" style={{ color: '#B0B8CC' }}>
            Open to opportunities, collaborations &amp; conversations
          </p>
          <div
            className="w-16 h-0.5 rounded-full mx-auto mt-5"
            style={{ background: 'linear-gradient(90deg, #D4AF37, #F0D060)' }}
          />
        </motion.div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── Left: Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair text-2xl font-bold text-white mb-3">Get In Touch</h3>
            <p className="text-sm leading-relaxed font-poppins mb-7" style={{ color: '#B0B8CC' }}>
              Feel free to reach out for opportunities, collaborations, or just a conversation about finance.
            </p>

            <div className="flex flex-col gap-4">
              {CONTACT_INFO.map((item, i) => (
                <InfoCard key={item.label} {...item} delay={i * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl"
            style={{
              background: 'rgba(20,27,45,0.6)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(212,175,55,0.15)',
            }}
          >
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
