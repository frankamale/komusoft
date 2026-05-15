"use client";

import { Mail, Phone, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A0947 0%, #0d0f5e 40%, #0a2a6e 72%, #0c4a8a 100%)" }}
    >
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-200 h-200 rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #05ADEE 0%, transparent 65%)", transform: "translate(35%, -35%)" }} />
      <div className="absolute bottom-0 left-0 w-125 h-125 rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #05ADEE 0%, transparent 70%)", transform: "translate(-40%, 40%)" }} />

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }} />

      {/* Diagonal light sweep */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 bottom-0 -left-20 w-[55%] opacity-[0.04]"
          style={{ background: "linear-gradient(135deg, #05ADEE 0%, transparent 60%)", transform: "skewX(-8deg)" }} />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${[6, 4, 8, 5, 7, 3][i]}px`,
            height: `${[6, 4, 8, 5, 7, 3][i]}px`,
            background: "#05ADEE",
            top: `${[20, 55, 35, 75, 15, 65][i]}%`,
            left: `${[10, 80, 50, 20, 70, 40][i]}%`,
            opacity: 0.3,
          }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: [4, 5, 3.5, 4.5, 3, 5.5][i], repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}

      {/* Nav spacer */}
      <div className="pt-20" />

      {/* Hero content */}
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex gap-16 justify-center">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
              style={{ background: "rgba(5,173,238,0.15)", border: "1px solid rgba(5,173,238,0.4)", color: "#05ADEE" }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
            >
              Get In Touch
            </motion.span>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.04] mb-7"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-white">Let&apos;s Build </span>
              <br />
              <span style={{
                background: "linear-gradient(90deg, #05ADEE, #38d2f5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Something Great
              </span>
              <br />
              <span className="text-white">Together</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.6)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Ready to transform your business with innovative technology?
              Our team is here — tell us your challenge and we&apos;ll craft the right solution.
            </motion.p>

            {/* Quick contact chips */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
            >
              <a href="mailto:komusoft@gmail.com"
                className="flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.13)" }}>
                <Mail className="w-4 h-4" style={{ color: "#05ADEE" }} />
                <span className="text-sm text-white font-medium">komusoft@gmail.com</span>
              </a>
              <a href="tel:+256765916207"
                className="flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.13)" }}>
                <Phone className="w-4 h-4" style={{ color: "#05ADEE" }} />
                <span className="text-sm text-white font-medium">+256 765 916 207</span>
              </a>
            </motion.div>

            {/* Promises row */}
            <motion.div
              className="mt-10 flex flex-wrap gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {["Response within 24h", "Free consultation", "No obligation quote"].map((p, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#05ADEE" }} />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{p}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default ContactHero;