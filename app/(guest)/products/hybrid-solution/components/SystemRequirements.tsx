"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

interface SpecRow {
  label: string;
  value: string;
}

interface SystemRequirementsProps {
  specRows: SpecRow[];
}

export function SystemRequirements({ specRows }: SystemRequirementsProps) {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="mb-10" {...fadeUp()}>
          <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-2" style={{ color: "#05ADEE" }}>Technical</p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#0A0947" }}>Deployment Requirements</h2>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="overflow-x-auto rounded-2xl shadow-sm" style={{ border: "1px solid rgba(5,173,238,0.12)" }}>
          <table className="w-full min-w-[440px]">
            <thead>
              <tr style={{ background: "#0A0947" }}>
                <th className="text-left px-6 py-4 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.5)", width: "35%" }}>Specification</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-white">Requirement</th>
              </tr>
            </thead>
            <tbody>
              {specRows.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#f8fafc" }}>
                  <td className="px-6 py-3.5 text-sm font-medium text-gray-500">{row.label}</td>
                  <td className="px-6 py-3.5 text-sm font-semibold" style={{ color: "#0A0947" }}>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}