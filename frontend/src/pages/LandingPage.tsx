import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4"
        >
          Save Our Oceans
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-8"
        >
          Join 2,847 Experts Fighting to Save Our Oceans
        </motion.p>
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full inline-flex items-center"
  onClick={() => window.location.href = '/dashboard'}
>
  Get Started
  <ChevronRight className="ml-2" />
</motion.button>
      </div>
    </div>
  );
};

export default LandingPage;
