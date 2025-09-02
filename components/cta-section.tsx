'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-full opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0, 25px 25px'
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-6"
          >
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
              <Star className="w-5 h-5 text-yellow-300 mr-2" fill="currentColor" />
              <span className="text-white font-medium">Limited Time Offer</span>
              <Star className="w-5 h-5 text-yellow-300 ml-2" fill="currentColor" />
            </div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Experience
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Pure Refreshment?
            </span>
          </h2>

          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have made AquaFresh their daily choice. 
            Order now and get free shipping on your first purchase!
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-white text-cyan-700 hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold group"
            >
              Order Now - Free Shipping
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-cyan-200 text-sm mt-6"
          >
            30-day money-back guarantee • Free shipping on orders over $50
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}