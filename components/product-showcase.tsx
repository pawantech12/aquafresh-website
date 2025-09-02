'use client';

import { motion, easeOut } from 'framer-motion';
import { Zap, Leaf, Heart, Award, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ProductShowcase() {
  const products = [
    {
      name: "AquaFresh Original",
      flavor: "Classic Refreshing",
      image: "https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      price: "$2.99",
      features: ["Zero Sugar", "Natural Flavors", "Vitamin Enhanced"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "AquaFresh Energy",
      flavor: "Citrus Burst",
      image: "https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      price: "$3.49",
      features: ["Natural Caffeine", "B-Vitamins", "Electrolytes"],
      color: "from-orange-500 to-yellow-600"
    },
    {
      name: "AquaFresh Wellness",
      flavor: "Berry Antioxidant",
      image: "https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      price: "$3.99",
      features: ["Antioxidants", "Immune Support", "Organic"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut }
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
            <span className="text-gray-800">Our </span>
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Product Line
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully crafted collection of premium beverages, each designed to meet your unique lifestyle needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full bg-white border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2"
                  >
                    <Award className="w-5 h-5 text-yellow-500" />
                  </motion.div>
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{product.flavor}</p>
                    </div>
                    <span className={`text-2xl font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                      {product.price}
                    </span>
                  </div>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 bg-gradient-to-r ${product.color} rounded-full mr-3`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className={`w-full bg-gradient-to-r ${product.color} hover:shadow-lg transition-all duration-300 group`}>
                      Add to Cart
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}