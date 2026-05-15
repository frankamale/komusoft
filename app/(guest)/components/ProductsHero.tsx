"use client";

import {
  ShoppingCart, Cloud, Layers, ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const ProductsHero = () => {
  const productsPreview = [
    {
      icon: ShoppingCart,
      name: "Business Manager",
      tagline: "Offline-Ready POS & Inventory System",
      badge: "On-Premise",
    },
    {
      icon: Cloud,
      name: "Business Assistant",
      tagline: "Cloud Business Operations Platform",
      badge: "SaaS",
    },
    {
      icon: Layers,
      name: "Hybrid Solution",
      tagline: "Integrated Business Ecosystem",
      badge: "Enterprise",
    },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A0947 0%, #0d0f5e 40%, #0a2a6e 72%, #0c4a8a 100%)" }}
    >
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-200 h-200 rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #05ADEE 0%, transparent 65%)", transform: "translate(35%, -35%)" }} />
      <div className="absolute bottom-0 left-0 w-125 h-125 rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #05ADEE 0%, transparent 70%)", transform: "translate(-40%, 40%)" }} />

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }} />

      {/* Floating dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${[5, 4, 7, 4, 6, 3][i]}px`, height: `${[5, 4, 7, 4, 6, 3][i]}px`,
            background: "#05ADEE",
            top: `${[25, 60, 40, 78, 18, 68][i]}%`,
            left: `${[12, 78, 48, 22, 68, 38][i]}%`,
            opacity: 0.3,
          }}
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: [4, 5.5, 3.5, 4.5, 3.2, 5][i], repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}

      <div className="pt-20" />

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
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
              transition={{ delay: 0.15 }}
            >
              Our Products
            </motion.span>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.04] mb-7"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-white">Ready-to-Deploy </span>
              <br />
              <span style={{
                background: "linear-gradient(90deg, #05ADEE, #38d2f5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Business
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.6)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Enterprise software products purpose-built for African businesses — combining
              powerful features, offline resilience, and local compliance in one suite.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
            >
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-2xl"
                style={{ background: "linear-gradient(135deg, #05ADEE, #0496d5)", boxShadow: "0 8px 32px rgba(5,173,238,0.35)" }}>
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-semibold text-white transition-all hover:bg-white/15"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: product cards preview */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-4">
              {productsPreview.map((p, i) => (
                <motion.div key={i}
                  className="flex items-center gap-5 rounded-2xl px-6 py-5"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)" }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.7 }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(5,173,238,0.2)" }}>
                    <p.icon className="w-6 h-6" style={{ color: "#05ADEE" }} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white text-sm">{p.name}</p>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{p.tagline}</p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: "rgba(5,173,238,0.15)", color: "#05ADEE", border: "1px solid rgba(5,173,238,0.3)" }}>
                    {p.badge}
                  </span>
                </motion.div>
              ))}

              {/* Stat bar */}
              <motion.div
                className="rounded-2xl p-6 mt-2"
                style={{ background: "rgba(5,173,238,0.1)", border: "1px solid rgba(5,173,238,0.25)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85 }}>
                <div className="flex justify-between">
                  {[
                    ["50+", "Deployments"],
                    ["100%", "Uptime SLA"],
                    ["24/7", "Support"],
                  ].map(([v, l], i) => (
                    <div key={i} className="text-center">
                      <p className="text-2xl font-bold" style={{ color: "#05ADEE" }}>{v}</p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{l}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default ProductsHero;