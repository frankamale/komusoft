"use client";

import {
  ShoppingCart, Cloud, Layers, Check, ArrowRight,
  Zap, Database, BarChart, Shield, RefreshCw, Users, Star,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import ProductsHero from "../components/ProductsHero";

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

      <ProductsHero />
      <section className="md:py-28 sm:py-20 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center md:mb-20 mb-8" {...fadeUp()}>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "#05ADEE" }}>Product Suite</p>
            <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold" style={{ color: "#0A0947" }}>Choose Your Solution</h2>
          </motion.div>

          <div className="flex flex-col gap-20">
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

                  <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold mb-5" style={{ color: "#0A0947" }}>{product.tagline}</h2>
                  <p className="md:text-lg text-sm text-gray-500 mb-8 leading-relaxed">{product.description}</p>

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

      <section className="md:py-24 sm:py-20 py-12 bg-white">
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
    </div>
  );
};

export default Products;