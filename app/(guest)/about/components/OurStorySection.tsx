"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

const OurStorySection = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        {...fadeUp()}
      >
        {/* Section label */}
        <div className="mb-10 sm:mb-16">
          <p
            className="text-xs uppercase tracking-[0.25em] font-semibold mb-3"
            style={{ color: "#05ADEE" }}
          >
            Our Story
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: "#0A0947" }}
          >
            Building Technology That Drives Growth
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Text column */}
          <div>
            <div className="space-y-5 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
                Established in 2012, Komusoft Solutions is a private limited
                company managed by highly experienced IT professionals offering
                consulting services in software development, infrastructure
                management, security design, quality assurance, and
                implementation.
              </p>
              <p>
                Our team of office-based staff and expert consultants is
                dedicated to delivering tailor-made software solutions that
                align with customer goals and operational needs.
              </p>
              <p>
                Komusoft operates with a win-win philosophy built on trust,
                commitment, and long-term partnerships — implementing
                multi-sector digital solutions across healthcare, government,
                enterprise, and development organisations.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-5">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "99+", label: "Projects Delivered" },
                { value: "100%", label: "Client Focus" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background:
                      "linear-gradient(135deg, #f0f9ff 0%, #e0f5ff 100%)",
                    border: "1px solid rgba(5,173,238,0.15)",
                  }}
                >
                  <div
                    className="text-2xl sm:text-3xl font-bold mb-1"
                    style={{ color: "#0A0947" }}
                  >
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 leading-tight">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image column */}
          <div className="relative mt-6 lg:mt-0">
            {/* Decorative accent — hidden on small screens to avoid overflow */}
            <div
              className="hidden sm:block absolute -top-5 -right-5 w-24 h-24 rounded-2xl -z-10"
              style={{
                background: "linear-gradient(135deg, #0A0947, #05ADEE)",
                opacity: 0.12,
              }}
            />

            <div
              className="rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-xl"
              style={{ border: "1px solid rgba(5,173,238,0.2)" }}
            >
              <Image
                src="/about_image.png"
                alt="Komusoft team"
                className="w-full object-cover"
                /* clamp keeps it proportional from mobile → desktop */
                style={{ height: "clamp(220px, 42vw, 540px)" }}
                width={600}
                height={540}
                priority
              />
            </div>

            {/* Floating card — flows below image on mobile, overlaps on desktop */}
            <div
              className="mt-4 sm:absolute sm:mt-0 sm:-bottom-6 sm:-left-6 rounded-2xl p-4 sm:p-6 shadow-lg"
              style={{
                background: "white",
                border: "1px solid rgba(5,173,238,0.15)",
              }}
            >
              <p
                className="text-2xl sm:text-3xl font-bold mb-1"
                style={{ color: "#05ADEE" }}
              >
                12+ Years
              </p>
              <p className="text-gray-500 text-sm">
                Delivering innovative digital solutions.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurStorySection;