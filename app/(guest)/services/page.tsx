"use client";

import ServicesHero from "./components/ServicesHero";
import ServicesListSection from "./components/ServicesListSection";
import ProcessSection from "./components/ProcessSection";
import WhyUsSection from "./components/WhyUsSection";
import ServicesCTASection from "./components/ServicesCTASection";

const Services = () => {

  return (
    <div className="min-h-screen pt-20 bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <ServicesHero />
      <ServicesListSection />
      <ProcessSection />
      <WhyUsSection />
      <ServicesCTASection />
    </div>
  );
};

export default Services;