"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  RefreshCw, ArrowRight, Download, FileText,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

export function ProductOverview() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          {...fadeUp()}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10"
        >
          {/* Left */}
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{
                background: "rgba(5,173,238,0.08)",
                border: "1px solid rgba(5,173,238,0.15)",
                color: "#05ADEE",
              }}
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Hybrid · On-Premise + Cloud
            </div>

            <h1
              className="text-4xl sm:text-5xl font-bold leading-tight mb-5"
              style={{ color: "#0A0947" }}
            >
              Hybrid Manager
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              Experience the reliability of on-premise operations with the flexibility of cloud services.
              Work offline when needed, sync automatically, and access data remotely — all in one platform.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-4 min-w-75">
            {[
              ["Offline + Cloud", "Seamless sync"],
              ["EFRIS Compliant", "URA approved"],
              ["Enterprise Ready", "Unlimited scale"],
              ["Dual Performance", "Local & cloud speed"],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="rounded-2xl p-5"
                style={{
                  background: "#f8fafc",
                  border: "1px solid rgba(5,173,238,0.1)",
                }}
              >
                <p
                  className="font-semibold text-sm mb-1"
                  style={{ color: "#0A0947" }}
                >
                  {title}
                </p>

                <p className="text-xs text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          {...fadeUp(0.1)}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg,#05ADEE,#0496d5)",
              boxShadow: "0 6px 24px rgba(5,173,238,0.2)",
            }}
          >
            Request Demo <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
            style={{
              background: "#f8fafc",
              border: "1px solid rgba(5,173,238,0.1)",
              color: "#0A0947",
            }}
          >
            <Download className="w-4 h-4" />
            Download Brochure
          </button>

          <Link
            href="/products/docs/hybrid-solution"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
            style={{
              background: "#f8fafc",
              border: "1px solid rgba(5,173,238,0.1)",
              color: "#0A0947",
            }}
          >
            <FileText className="w-4 h-4" />
            Documentation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}