"use client";

import {
  Target,
  Users,
  Award,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

const ValuesSection = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "Empowering businesses through technology innovation and digital transformation.",
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description:
        "Your success is our success. We build lasting partnerships, not just projects.",
    },
    {
      icon: Award,
      title: "Quality First",
      description:
        "Enterprise-grade solutions with rigorous testing and quality assurance.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Staying ahead with cutting-edge technologies and best practices.",
    },
  ];

  return (
    <section
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0A0947 0%, #0d1168 60%, #0a3070 100%)",
      }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(5,173,238,0.08) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        {...fadeUp()}
      >
        <div className="text-center mb-10 sm:mb-16">
          <p
            className="text-xs uppercase tracking-[0.25em] font-semibold mb-3"
            style={{ color: "#05ADEE" }}
          >
            Our Values
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What Drives Us
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 cursor-default"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(5,173,238,0.2)" }}
              >
                <value.icon
                  className="w-6 h-6"
                  style={{ color: "#05ADEE" }}
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {value.title}
              </h3>
              <p
                className="leading-relaxed text-sm"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ValuesSection;