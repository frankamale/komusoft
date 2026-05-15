"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

export function CTA() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()} className="relative overflow-hidden rounded-[2rem] p-10 sm:p-16 text-center"
          style={{ background: "linear-gradient(135deg,#0A0947 0%,#0d1168 55%,#0a3070 100%)" }}>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-20"
            style={{ background: "radial-gradient(circle,#05ADEE 0%,transparent 65%)", transform: "translate(30%,-40%)" }} />
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "44px 44px" }} />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Move Your Business to the <span style={{ background: "linear-gradient(90deg,#05ADEE,#38d2f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Cloud?</span>
            </h2>
            <p className="text-base sm:text-lg mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
              Start a free 14-day trial — no credit card required, no infrastructure needed.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-2xl"
              style={{ background: "linear-gradient(135deg,#05ADEE,#0496d5)", boxShadow: "0 8px 28px rgba(5,173,238,0.3)" }}>
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}