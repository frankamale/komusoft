"use client";

import { CheckCircle2, ArrowRight, Globe2 } from "lucide-react";
import { motion } from "framer-motion";
import { GrTechnology, GrUser } from "react-icons/gr";
import { FaIndustry } from "react-icons/fa";

const ExpertiseSection = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f0f9ff 0%, #e8f4fd 50%, #f0faff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text */}
          <div>
            <p
              className="text-xs uppercase tracking-[0.25em] font-semibold mb-3"
              style={{ color: "#05ADEE" }}
            >
              Expertise
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6"
              style={{ color: "#0A0947" }}
            >
              Deep Technical Knowledge
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              Our team combines technical expertise, strategic thinking, and
              industry experience to build scalable and secure digital
              solutions.
            </p>

            <div className="space-y-3">
              {[
                "Full-stack web & mobile development",
                "Cloud infrastructure & DevOps",
                "Enterprise system integration",
                "Quality assurance & testing",
                "24/7 technical support",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-md cursor-default"
                  style={{
                    background: "white",
                    border: "1px solid rgba(5,173,238,0.12)",
                  }}
                  whileHover={{ x: 4 }}
                >
                  <CheckCircle2
                    className="w-5 h-5 shrink-0"
                    style={{ color: "#05ADEE" }}
                  />
                  <span className="text-sm sm:text-base text-gray-700">
                    {item}
                  </span>
                  <ArrowRight
                    className="w-4 h-4 ml-auto shrink-0 opacity-30"
                    style={{ color: "#05ADEE" }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div className="hidden md:grid grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-0">
            {[
              { label: "Technologies", value: "20+", icon: <GrTechnology /> },
              { label: "Team Members", value: "15+", icon: <GrUser /> },
              { label: "Industries", value: "8+", icon: <FaIndustry /> },
              { label: "Countries", value: "3+", icon: <Globe2 /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-center shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-default"
                style={{
                  background:
                    index % 2 === 0
                      ? "linear-gradient(135deg, #0A0947, #0d1168)"
                      : "white",
                  border: "1px solid rgba(5,173,238,0.15)",
                }}
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div
                    className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-xl sm:text-3xl ${index % 2 === 0 ? "text-[#05ADEE]" : "text-[#0A0947]"
                      }`}
                  >
                    {stat.icon}
                  </div>
                </div>
                <div
                  className="text-3xl sm:text-4xl font-bold mb-1"
                  style={{ color: index % 2 === 0 ? "#05ADEE" : "#0A0947" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs sm:text-sm font-medium"
                  style={{
                    color:
                      index % 2 === 0 ? "rgba(255,255,255,0.65)" : "#6b7280",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;