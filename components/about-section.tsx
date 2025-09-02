'use client';

import { motion } from 'framer-motion';
import { Leaf, Beaker, Heart, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and sustainable sourcing",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: Beaker,
      title: "Innovation",
      description: "Cutting-edge research and development for superior products",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Heart,
      title: "Wellness",
      description: "Promoting health and well-being through premium nutrition",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Target,
      title: "Quality",
      description: "Uncompromising standards in every aspect of production",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-800">About </span>
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                AquaFresh
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded in 2018, AquaFresh has been at the forefront of the premium beverage industry, 
              combining traditional craftsmanship with modern innovation to create exceptional products 
              that nourish both body and soul.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our mission is simple: to provide the world's finest beverages while maintaining our 
              commitment to sustainability, quality, and customer satisfaction. Every bottle represents 
              our dedication to excellence and our passion for creating moments of pure refreshment.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-200/20"
            >
              <h3 className="font-semibold text-gray-800 mb-3">Our Promise</h3>
              <p className="text-gray-600 leading-relaxed">
                Every AquaFresh product is crafted with the finest natural ingredients, 
                rigorously tested for quality, and designed to exceed your expectations.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300`}
                    >
                      <value.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}