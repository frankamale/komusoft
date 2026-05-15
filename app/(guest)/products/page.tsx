import React from 'react'
import ProductShowcaseSection from './components/ProductShowcaseSection'
import ProductsHero from './components/ProductsHero'
import BenefitsSection from './components/BenefitsSection'
import TestimonialsSection from './components/TestimonialsSection'
import CustomSolutionCTASection from './components/CustomSolutionCTASection'

const Products = () => {
  return (
    <div>
      <ProductsHero />

      <ProductShowcaseSection />

      <BenefitsSection />

      <TestimonialsSection />

      <CustomSolutionCTASection />

    </div>
  )
}

export default Products