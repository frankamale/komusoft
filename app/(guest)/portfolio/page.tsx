"use client";

import PortfolioHero from './components/PortfolioHero';
import PortfolioStatsSection from './components/PortfolioStatsSection';
import FeaturedProjectsSection from './components/FeaturedProjectsSection';
import IndustriesSection from './components/IndustriesSection';
import CallToActionSection from './components/CallToActionSection';



const Portfolio = () => {

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <PortfolioHero />
      <PortfolioStatsSection />
      <FeaturedProjectsSection />
      <IndustriesSection />
      <CallToActionSection />
    </div>
  );
};

export default Portfolio;