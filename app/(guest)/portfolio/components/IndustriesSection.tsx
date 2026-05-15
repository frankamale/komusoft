"use client";

import {
  HeartPulse, ShoppingBag, Building2, Globe, Truck, Database, FlaskConical, Users,
} from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

const IndustriesSection = () => {
  const industries = [
    { icon: HeartPulse, name: "Healthcare", count: "3 projects" },
    { icon: ShoppingBag, name: "Retail", count: "5 projects" },
    { icon: Building2, name: "Government", count: "8 projects" },
    { icon: Globe, name: "NGOs & INGOs", count: "6 projects" },
    { icon: Truck, name: "Logistics", count: "4 projects" },
    { icon: Database, name: "Telecommunications", count: "3 projects" },
    { icon: FlaskConical, name: "Manufacturing", count: "4 projects" },
    { icon: Users, name: "Education", count: "2 projects" },
  ];

  return (
    <section className="md:py-24 py-12 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A0947 0%, #0d1168 60%, #0a3070 100%)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(5,173,238,0.07) 0%, transparent 70%)" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" {...fadeUp()}>
          <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "#05ADEE" }}>Sectors</p>
          <h2 className="text-4xl font-bold text-white">Diverse Industry Experience</h2>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            From regulated government systems to fast-moving retail operations.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {industries.map((ind, i) => (
            <motion.div key={i} {...fadeUp(i * 0.06)} whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl cursor-default transition-all"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(5,173,238,0.15)" }}>
                <ind.icon className="w-6 h-6" style={{ color: "#05ADEE" }} />
              </div>
              <p className="font-bold text-white text-sm">{ind.name}</p>
              <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>{ind.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;