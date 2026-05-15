"use client";

import {
  ShoppingCart, Cloud, Layers, Check, ArrowRight,
  Zap, Database, BarChart, Shield, RefreshCw, Users, Star,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

const Products = () => {
  const products = [
    {
      icon: ShoppingCart,
      name: "Business Manager",
      tagline: "Offline-Ready POS & Inventory System",
      badge: "On-Premise",
      description:
        "Powerful point-of-sale and inventory management system with LAN support for uninterrupted operations, even without internet connectivity. Purpose-built for African retail environments where connectivity can't be guaranteed.",
      features: [
        "Offline POS capabilities",
        "Real-time inventory tracking",
        "LAN-based synchronization",
        "Multi-location support",
        "Receipt printing & invoicing",
        "Stock alerts & reporting",
        "EFRIS-compliant receipting",
        "Role-based access control",
      ],
      tags: ["POS", "Inventory", "Offline"],
      accent: "#05ADEE",
    },
    {
      icon: Cloud,
      name: "Business Assistant",
      tagline: "Cloud Business Operations Platform",
      badge: "SaaS",
      description:
        "Web-based platform for comprehensive business operations management, accessible anywhere, anytime. Advanced analytics, team collaboration, and automated workflows — all in one dashboard designed for modern teams.",
      features: [
        "Cloud-based infrastructure",
        "Advanced analytics & reporting",
        "Team collaboration tools",
        "API integrations",
        "Mobile responsive design",
        "Automated workflows",
        "Custom dashboards",
        "Audit trail & compliance",
      ],
      tags: ["Cloud", "Analytics", "SaaS"],
      accent: "#38d2f5",
    },
    {
      icon: Layers,
      name: "Hybrid Solution",
      tagline: "Integrated Business Ecosystem",
      badge: "Enterprise",
      description:
        "The best of both worlds — seamlessly combines offline POS capabilities with cloud business management for ultimate flexibility. Ideal for enterprises needing resilience across unreliable networks while maintaining cloud-level visibility.",
      features: [
        "Offline + Cloud synchronization",
        "Unified command dashboard",
        "Automated nightly backups",
        "Advanced reporting suite",
        "Multi-device access",
        "Scalable architecture",
        "Enterprise SSO",
        "Dedicated SLA support",
      ],
      tags: ["Hybrid", "Enterprise", "Integration"],
      accent: "#05ADEE",
    },
  ];

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

  const testimonials = [
    { name: "Mega Standard Supermarket", role: "Retail Chain, Kampala", quote: "Business Manager transformed our multi-location stock control. We went from daily stock discrepancies to near-zero errors." },
    { name: "Lifecare Diagnostics", role: "Healthcare, Uganda", quote: "The workflow automation alone saved our lab team hours every day. Turnaround times improved dramatically." },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>

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
                {products.map((p, i) => (
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
                    {[["50+", "Deployments"], ["100%", "Uptime SLA"], ["24/7", "Support"]].map(([v, l], i) => (
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

        {/* Scroll */}
        <motion.div className="flex justify-center pb-8" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="flex flex-col items-center gap-1" style={{ color: "rgba(255,255,255,0.25)" }}>
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-8 rounded-full" style={{ background: "linear-gradient(to bottom, rgba(5,173,238,0.6), transparent)" }} />
          </div>
        </motion.div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 70L1440 70L1440 28C1200 70 900 5 720 28C540 50 240 5 0 28L0 70Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ─── PRODUCTS DETAIL ──────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" {...fadeUp()}>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "#05ADEE" }}>Product Suite</p>
            <h2 className="text-4xl font-bold" style={{ color: "#0A0947" }}>Choose Your Solution</h2>
          </motion.div>

          <div className="space-y-32">
            {products.map((product, index) => (
              <motion.div key={index} {...fadeUp(0.1)}
                className={`grid lg:grid-cols-2 gap-16 items-center`}>

                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                    style={{ background: "rgba(5,173,238,0.1)" }}>
                    <product.icon className="w-4 h-4" style={{ color: "#05ADEE" }} />
                    <span className="text-sm font-bold" style={{ color: "#05ADEE" }}>{product.name}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ml-1"
                      style={{ background: "rgba(10,9,71,0.08)", color: "#0A0947" }}>{product.badge}</span>
                  </div>

                  <h2 className="text-4xl font-bold mb-5" style={{ color: "#0A0947" }}>{product.tagline}</h2>
                  <p className="text-lg text-gray-500 mb-8 leading-relaxed">{product.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {product.features.map((f, fi) => (
                      <div key={fi} className="flex items-center gap-2">
                        <Check className="w-4 h-4 shrink-0" style={{ color: "#05ADEE" }} />
                        <span className="text-sm text-gray-600">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.tags.map((tag, ti) => (
                      <span key={ti} className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                        style={{ background: "rgba(10,9,71,0.05)", color: "#0A0947" }}>{tag}</span>
                    ))}
                  </div>

                  <Link href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
                    style={{ background: "linear-gradient(135deg, #05ADEE, #0496d5)", boxShadow: "0 6px 24px rgba(5,173,238,0.28)" }}>
                    Request Demo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {/* Decorative frame */}
                  <div className="absolute -inset-4 rounded-[2.5rem] pointer-events-none"
                    style={{ background: "linear-gradient(135deg, rgba(5,173,238,0.08), rgba(10,9,71,0.05))" }} />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl"
                    style={{ border: "1px solid rgba(5,173,238,0.15)" }}>
                    <div className="w-full h-80 flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg, #0A0947, #0d1575)` }}>
                      <div className="text-center">
                        <div className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-4"
                          style={{ background: "rgba(5,173,238,0.2)" }}>
                          <product.icon className="w-12 h-12" style={{ color: "#05ADEE" }} />
                        </div>
                        <p className="text-white font-bold text-xl">{product.name}</p>
                        <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>{product.badge}</p>
                      </div>
                    </div>
                  </div>
                  {/* Floating tag */}
                  <div className="absolute -bottom-5 -right-5 rounded-2xl px-5 py-4 shadow-xl"
                    style={{ background: "white", border: "1px solid rgba(5,173,238,0.15)" }}>
                    <p className="text-xs text-gray-400 mb-0.5">Includes</p>
                    <p className="text-sm font-bold" style={{ color: "#0A0947" }}>{product.features.length} features</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─────────────────────────────────────────────── */}
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

      {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" {...fadeUp()}>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "#05ADEE" }}>Client Voices</p>
            <h2 className="text-4xl font-bold" style={{ color: "#0A0947" }}>Trusted by Leading Organisations</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} {...fadeUp(i * 0.12)}
                className="relative rounded-3xl p-8"
                style={{ background: "#f8fafc", border: "1px solid rgba(5,173,238,0.1)" }}>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-current" style={{ color: "#05ADEE" }} />)}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #0A0947, #05ADEE)" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#0A0947" }}>{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()}
            className="relative overflow-hidden rounded-[2.5rem] p-14 md:p-20"
            style={{ background: "linear-gradient(135deg, #0A0947 0%, #0d1168 55%, #0a3070 100%)" }}>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
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
    </div>
  );
};

export default Products;