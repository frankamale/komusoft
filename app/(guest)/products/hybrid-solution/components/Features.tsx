"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
}

export function Features({ features }: FeaturesProps) {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="mb-12" {...fadeUp()}>
          <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-2" style={{ color: "#05ADEE" }}>Hybrid Features</p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#0A0947" }}>Offline Resilience. Cloud Power.</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {features.map((f, i) => (
            <motion.div key={i} {...fadeUp(i * 0.06)} whileHover={{ y: -5 }}
              className="group rounded-2xl p-6 sm:p-7 cursor-default transition-all duration-300"
              style={{ border: "1px solid #e8edf2" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(5,173,238,0.35)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(5,173,238,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8edf2"; e.currentTarget.style.boxShadow = "none"; }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: "rgba(5,173,238,0.1)" }}>
                <f.icon className="w-5 h-5" style={{ color: "#05ADEE" }} />
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: "#0A0947" }}>{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}