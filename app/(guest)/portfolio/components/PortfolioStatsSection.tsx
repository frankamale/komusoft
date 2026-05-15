"use client";

import { TrendingUp, Globe, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

const PortfolioStatsSection = () => {
  return (
    <section className="md:py-24 py-12 bg-white" style={{ borderBottom: "1px solid #f0f4f8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: TrendingUp, v: "50+", l: "Projects Delivered" },
            { icon: Globe, v: "8+", l: "Industries Served" },
            { icon: Award, v: "100%", l: "Client Satisfaction" },
            { icon: Users, v: "3+", l: "Countries Covered" },
          ].map((s, i) => (
            <motion.div key={i} {...fadeUp(i * 0.08)} className="flex flex-col items-center gap-2">
              <s.icon className="w-6 h-6" style={{ color: "#05ADEE" }} />
              <p className="text-4xl font-bold" style={{ color: "#0A0947" }}>{s.v}</p>
              <p className="text-sm text-gray-400">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioStatsSection;