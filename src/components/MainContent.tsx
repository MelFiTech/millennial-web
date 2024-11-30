import { motion } from 'framer-motion';

const MainContent = () => (
  <motion.div
    initial={{ x: '-100vw' }}
    animate={{ x: 0 }}
    transition={{ type: 'spring', stiffness: 50 }}
    className="container-custom py-16 md:py-24"
  >
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
        Welcome to Millennial Real Estate
      </h2>
      <p className="text-xl text-gray-600 leading-relaxed">
        Find your dream home today! We offer a curated selection of premium properties 
        tailored to your lifestyle needs.
      </p>
      <div className="mt-8">
        <button className="btn-primary">
          Browse Properties
        </button>
      </div>
    </div>
  </motion.div>
);

export default MainContent;