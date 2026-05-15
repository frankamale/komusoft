"use client";

import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <section
      className="relative overflow-hidden md:py-36 py-12"
      style={{ background: "linear-gradient(135deg, #0A0947 0%, #0d0f5e 45%, #0a2a6e 75%, #0c4a8a 100%)" }}
    >
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-125 h-125 rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #05ADEE 0%, transparent 65%)", transform: "translate(35%, -35%)" }} />
      <div className="absolute bottom-0 left-0 w-100 h-100 rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #05ADEE 0%, transparent 70%)", transform: "translate(-40%, 40%)" }} />

      {/* Grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }} />

      {/* Diagonal accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-40 top-0 bottom-0 w-150 opacity-[0.06]"
          style={{ background: "linear-gradient(135deg, transparent 40%, #05ADEE 100%)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
            style={{ background: "rgba(5,173,238,0.15)", border: "1px solid rgba(5,173,238,0.4)", color: "#05ADEE" }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Our Services
          </motion.span>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.04] mb-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-white">End-to-End </span>
            <span style={{
              background: "linear-gradient(90deg, #05ADEE, #38d2f5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Technology
            </span>
            <br />
            <span className="text-white">Solutions</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            From concept to deployment — comprehensive IT services that drive business
            growth and digital transformation across East Africa.
          </motion.p>

          {/* Service count chips */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
          >
            {["9 Core Services", "12+ Years", "50+ Delivered", "3+ Countries"].map((chip, i) => (
              <span key={i}
                className="px-5 py-2 rounded-full text-sm font-medium"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.75)" }}
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
};

export default ServicesHero;