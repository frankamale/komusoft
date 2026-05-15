"use client";

import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section
      className="relative overflow-hidden md:py-32 py-12"
      style={{ background: "linear-gradient(135deg, #0A0947 0%, #0d0f5e 40%, #0a2a6e 70%, #0c4a8a 100%)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-150 h-150 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #05ADEE 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-100 h-100 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #05ADEE 0%, transparent 70%)", transform: "translate(-40%, 40%)" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Pill badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span
              className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
              style={{
                background: "rgba(5,173,238,0.15)",
                border: "1px solid rgba(5,173,238,0.4)",
                color: "#05ADEE",
              }}
            >
              About Komusoft
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-white">Pioneering Digital </span>
            <span
              style={{
                background: "linear-gradient(90deg, #05ADEE, #38d2f5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Transformation
            </span>
            <br />
            <span className="text-white">in East Africa</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-12"
            style={{ color: "rgba(255,255,255,0.65)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
          >
            Since 2012, we&apos;ve been delivering world-class software solutions
            that empower organizations to operate smarter, scale faster, and
            achieve more.
          </motion.p>

          {/* Stats row */}
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              { value: "12+", label: "Years" },
              { value: "50+", label: "Projects" },
              { value: "8+", label: "Industries" },
              { value: "3+", label: "Countries" },
            ].map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center px-8 py-5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span
                  className="text-3xl font-bold"
                  style={{ color: "#05ADEE" }}
                >
                  {s.value}
                </span>
                <span className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
};

export default AboutHero;