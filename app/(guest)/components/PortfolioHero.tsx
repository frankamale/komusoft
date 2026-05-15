"use client";

import { motion } from "framer-motion";

const PortfolioHero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A0947 0%, #0d0f5e 40%, #0a2a6e 72%, #0c4a8a 100%)" }}
    >
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #05ADEE 0%, transparent 65%)", transform: "translate(35%, -35%)" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #05ADEE 0%, transparent 70%)", transform: "translate(-40%, 40%)" }} />

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }} />

      {/* Floating particles */}
      {[...Array(7)].map((_, i) => (
        <motion.div key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${[5, 3, 7, 4, 6, 4, 3][i]}px`, height: `${[5, 3, 7, 4, 6, 4, 3][i]}px`,
            background: "#05ADEE",
            top: `${[22, 58, 38, 72, 16, 64, 45][i]}%`,
            left: `${[8, 76, 45, 18, 66, 35, 88][i]}%`,
            opacity: 0.3,
          }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: [4, 5.5, 3.5, 4.5, 3.2, 5, 4.2][i], repeat: Infinity, ease: "easeInOut", delay: i * 0.45 }}
        />
      ))}

      <div className="pt-20" />

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

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
              transition={{ delay: 0.15 }}>
              Our Portfolio
            </motion.span>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.04] mb-7"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
              <span className="text-white">Proven Track </span>
              <br />
              <span style={{
                background: "linear-gradient(90deg, #05ADEE, #38d2f5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Record</span>
              <br />
              <span className="text-white">of Success</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.6)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}>
              Mission-critical systems delivered across government, NGOs, healthcare,
              and enterprise — from Kampala to the field.
            </motion.p>

            {/* Stat row */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}>
              {[
                { v: "50+", l: "Projects" },
                { v: "8+", l: "Industries" },
                { v: "100%", l: "Satisfaction" },
                { v: "12+", l: "Years" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center py-4 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <span className="text-2xl font-bold" style={{ color: "#05ADEE" }}>{s.v}</span>
                  <span className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{s.l}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: project previews */}
          <motion.div
            className="relative hidden lg:grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            {[
              {
                icon: "Building2",
                client: "United Nations",
                title: "Various Digital Platforms",
                industry: "International Development",
                year: "2015–Present",
              },
              {
                icon: "ShoppingBag",
                client: "Mega Standard Supermarket",
                title: "Retail Operations Management",
                industry: "Retail",
                year: "2019",
              },
              {
                icon: "HeartPulse",
                client: "Lifecare Diagnostics",
                title: "Diagnostic Systems (LIMS)",
                industry: "Healthcare",
                year: "2018",
              },
              {
                icon: "Truck",
                client: "APONYE Uganda Ltd",
                title: "Weighbridge Management",
                industry: "Logistics",
                year: "2020",
              },
            ].map((p, i) => (
              <motion.div key={i}
                className="rounded-2xl p-5 cursor-default"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.03 }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "rgba(5,173,238,0.2)" }}>
                  {/* Assuming icons are passed or imported */}
                  <div className="w-5 h-5 bg-[#05ADEE]" />
                </div>
                <p className="text-white font-bold text-sm mb-1">{p.client}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{p.industry}</p>
                <div className="mt-3 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#05ADEE" }} />
                  <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>{p.year}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;