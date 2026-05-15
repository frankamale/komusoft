"use client";

import { motion } from "framer-motion";
import { Monitor, Globe, Check } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

interface BrowserRow {
  browser: string;
  version: string;
  status: boolean;
}

interface SysRow {
  label: string;
  value: string;
}

interface SystemRequirementsProps {
  browserRows: BrowserRow[];
  sysRows: SysRow[];
}

export function SystemRequirements({ browserRows, sysRows }: SystemRequirementsProps) {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="mb-10" {...fadeUp()}>
          <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-2" style={{ color: "#05ADEE" }}>Technical</p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#0A0947" }}>System Requirements</h2>
          <p className="text-gray-500 mt-2">Cloud-based — no local installation required.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Browser support table */}
          <motion.div {...fadeUp(0.08)} className="overflow-hidden rounded-2xl"
            style={{ border: "1px solid rgba(5,173,238,0.12)" }}>
            <div className="px-6 py-4" style={{ background: "#0A0947" }}>
              <p className="text-white font-semibold flex items-center gap-2">
                <Monitor className="w-4 h-4" style={{ color: "#05ADEE" }} /> Browser Support
              </p>
            </div>
            <table className="w-full">
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Browser</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Min. Version</th>
                  <th className="px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody>
                {browserRows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#f8fafc" }}>
                    <td className="px-5 py-3 text-sm font-medium" style={{ color: "#0A0947" }}>{row.browser}</td>
                    <td className="px-5 py-3 text-sm text-gray-500">{row.version}</td>
                    <td className="px-5 py-3 text-center"><Check className="w-4 h-4 mx-auto" style={{ color: "#05ADEE" }} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Requirements list */}
          <motion.div {...fadeUp(0.12)} className="overflow-hidden rounded-2xl"
            style={{ border: "1px solid rgba(5,173,238,0.12)" }}>
            <div className="px-6 py-4" style={{ background: "#0A0947" }}>
              <p className="text-white font-semibold flex items-center gap-2">
                <Globe className="w-4 h-4" style={{ color: "#05ADEE" }} /> Access Requirements
              </p>
            </div>
            <table className="w-full">
              <tbody>
                {sysRows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#f8fafc" }}>
                    <td className="px-5 py-3.5 text-sm font-medium text-gray-500 w-2/5">{row.label}</td>
                    <td className="px-5 py-3.5 text-sm font-semibold" style={{ color: "#0A0947" }}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
}