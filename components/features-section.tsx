'use client';

import { motion } from 'framer-motion';
import { Leaf, Zap, Heart, Shield, Droplets, Sun } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function FeaturesSection() {
  const features = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Made with organic ingredients sourced from the finest farms worldwide.",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: Zap,
      title: "Energy Boost",
      description: "Natural caffeine and vitamins to keep you energized throughout the day.",
      color: "from-orange-500 to-yellow-600"
    },
    {
      icon: Heart,
      title: "Heart Healthy",
      description: "Rich in antioxidants and nutrients that support cardiovascular health.",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Immune Support",
      description: "Packed with vitamin C and minerals to strengthen your immune system.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Droplets,
      title: "Hydration Plus",
      description: "Enhanced with electrolytes for superior hydration and recovery.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Sun,
      title: "Vitamin D3",
      description: "Fortified with essential vitamins for optimal health and wellness.",
      color: "from-amber-500 to-orange-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Why Choose
            </span>
            <span className="text-gray-800"> AquaFresh?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the perfect blend of taste, nutrition, and refreshment that makes AquaFresh 
            the premium choice for health-conscious individuals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full bg-white/80 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}