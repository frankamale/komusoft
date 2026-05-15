"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

const CustomSolutionCTASection = () => {
  return (
    <section className="md:py-20 py-12  bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()}
          className="relative overflow-hidden rounded-[2.5rem] p-14 md:p-20"
          style={{ background: "linear-gradient(135deg, #0A0947 0%, #0d1168 55%, #0a3070 100%)" }}>
          <div className="absolute top-0 right-0 w-125 h-125 rounded-full pointer-events-none opacity-20"
            style={{ background: "radial-gradient(circle, #05ADEE 0%, transparent 65%)", transform: "translate(30%, -40%)" }} />
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }} />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-5" style={{ color: "#05ADEE" }}>Get Started</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Need a <span style={{
                background: "linear-gradient(90deg, #05ADEE, #38d2f5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Custom Solution?</span>
            </h2>
            <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.55)" }}>
              We can customise any product or build something entirely new around your specific needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-2xl"
                style={{ background: "linear-gradient(135deg, #05ADEE, #0496d5)", boxShadow: "0 8px 32px rgba(5,173,238,0.3)" }}>
                Request Custom Development
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all hover:bg-white/20"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)" }}>
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomSolutionCTASection;