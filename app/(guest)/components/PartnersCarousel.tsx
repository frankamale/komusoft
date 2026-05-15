"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

const PartnersCarousel = () => {
  const partners = [
    { name: '2 friends', logo: '/2friendslogo.png' },
    { name: 'cdc logo', logo: '/cdclogo.png' },
    { name: 'gov logo', logo: '/govlogo.png' },
    { name: 'mets logo', logo: '/metslogo.png' },
    { name: 'ministry logo', logo: '/ministrylogo.png' },
    { name: 'tomosi logo', logo: '/tomosilogo.png' },
    { name: 'usaid logo', logo: '/usaidlogo.png' },
    { name: 'uvr logo', logo: '/uvrlogo.png' },

  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-[#05ADEE] font-semibold mb-3">
            Our Partners
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Trusted by Leading Organizations
          </h2>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: '-50%' }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="shrink-0">
                <Image 
                src={partner.logo}
                 alt={partner.name} 
                 className="h-12 w-auto hover:grayscale-0 transition-all" 
                 width={200}
                 height={200}
                 />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;