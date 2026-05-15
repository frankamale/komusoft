"use client";

import { Zap, Database, BarChart, Shield, Cloud, RefreshCw, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

const BenefitsSection = () => {
  const benefits = [
    { icon: Zap, title: "Increased Efficiency", description: "Automate repetitive tasks and reduce manual errors by up to 80%." },
    { icon: BarChart, title: "Better Insights", description: "Real-time analytics and dashboards to make confident decisions." },
    { icon: Database, title: "Data Security", description: "Enterprise-grade encryption and role-based access control." },
    { icon: Cloud, title: "Always Accessible", description: "Cloud and offline modes keep you running no matter the conditions." },
    { icon: Shield, title: "EFRIS Compliant", description: "Built-in URA EFRIS compliance for Ugandan businesses." },
    { icon: RefreshCw, title: "Seamless Sync", description: "Automatic synchronisation between offline and cloud environments." },
    { icon: Users, title: "Multi-User", description: "Support for unlimited users with granular role permissions." },
    { icon: Star, title: "Local Support", description: "Kampala-based team available for on-site training and support." },
  ];

  return (
    <section className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A0947 0%, #0d1168 60%, #0a3070 100%)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(5,173,238,0.07) 0%, transparent 70%)" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeUp()}>
          <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "#05ADEE" }}>Why Choose Us</p>
          <h2 className="text-4xl font-bold text-white">Built for African Business Reality</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Designed with the unique challenges of East African operations in mind.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div key={i} {...fadeUp(i * 0.07)}
              whileHover={{ y: -6 }}
              className="rounded-3xl p-7 cursor-default"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", backdropFilter: "blur(8px)" }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: "rgba(5,173,238,0.2)" }}>
                <b.icon className="w-6 h-6" style={{ color: "#05ADEE" }} />
              </div>
              <h3 className="font-bold text-white mb-2">{b.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;