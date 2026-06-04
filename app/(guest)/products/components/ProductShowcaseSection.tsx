"use client";

import {  Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

const ProductShowcaseSection = () => {
  const products = [
    {
      image: "/business_manager.png",
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
      image: "/business_assistant.png",
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
      image: "/hybridSolution.png",
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

  return (
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

                <Link href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  style={{ background: "linear-gradient(135deg, #05ADEE, #0496d5)", boxShadow: "0 6px 24px rgba(5,173,238,0.28)" }}>
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                {/* Decorative frame */}
                
                    <Image src={product.image} alt={product.name} className="object-contain" height={400} width={480} />
                 
                </div>
              
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;