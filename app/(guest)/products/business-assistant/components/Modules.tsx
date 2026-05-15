"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

interface Module {
  name: string;
  features: string[];
}

interface ModulesProps {
  modules: Module[];
}

export function Modules({ modules }: ModulesProps) {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="mb-12" {...fadeUp()}>
          <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-2" style={{ color: "#05ADEE" }}>Modules</p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#0A0947" }}>Built-in Business Modules</h2>
          <p className="text-gray-500 mt-3">All modules included — activate what you need.</p>
        </motion.div>
        <motion.div {...fadeUp(0.1)} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod, i) => (
            <div key={i} className="rounded-2xl p-6 transition-all duration-200 hover:shadow-lg"
              style={{ background: "#f8fafc", border: "1px solid rgba(5,173,238,0.08)" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: "#05ADEE" }} />
                <h3 className="font-bold" style={{ color: "#0A0947" }}>{mod.name}</h3>
              </div>
              <ul className="space-y-2">
                {mod.features.map((feat, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm text-gray-500">
                    <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "#05ADEE" }} /> {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}