"use client";

import ProductsHero from "./components/ProductsHero";
import ProductShowcaseSection from "./components/ProductShowcaseSection";
import BenefitsSection from "./components/BenefitsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CustomSolutionCTASection from "./components/CustomSolutionCTASection";

const Products = () => {

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <ProductsHero />
      <ProductShowcaseSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CustomSolutionCTASection />
    </div>
  );
};

export default Products;