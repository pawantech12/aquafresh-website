'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, Award, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-emerald-50 overflow-hidden">
      {/* Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-cyan-300/20 to-blue-300/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-emerald-300/20 to-cyan-300/20 rounded-full blur-xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Star className="w-4 h-4 text-yellow-500 mr-2" fill="currentColor" />
                <span className="text-sm font-medium text-gray-700">Award-Winning Formula</span>
                <Award className="w-4 h-4 text-cyan-500 ml-2" />
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Pure Refreshment
              </span>
              <br />
              <span className="text-gray-800">
                Redefined
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Experience the perfect blend of natural flavors and essential nutrients in every refreshing sip. 
              Our premium beverage is crafted with the finest ingredients for your active lifestyle.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Order Now
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-cyan-200 text-cyan-700 hover:bg-cyan-50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start mt-8 space-x-6 text-sm text-gray-500"
            >
              <div className="flex items-center">
                <Sparkles className="w-4 h-4 text-cyan-500 mr-1" />
                <span>100% Natural</span>
              </div>
              <div className="flex items-center">
                <Sparkles className="w-4 h-4 text-emerald-500 mr-1" />
                <span>Zero Sugar</span>
              </div>
              <div className="flex items-center">
                <Sparkles className="w-4 h-4 text-blue-500 mr-1" />
                <span>Organic</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <motion.div
              variants={floatingVariants}
              animate="float"
              className="relative"
            >
              {/* Product Container */}
              <div className="relative w-80 h-96 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-sm rounded-3xl border border-white/30 shadow-2xl flex items-center justify-center">
                {/* Mock Beverage Bottle */}
                <div className="relative">
                  <div className="w-24 h-64 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-600 rounded-full relative overflow-hidden shadow-2xl">
                    {/* Liquid Animation */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-full"
                    />
                    {/* Bubbles Effect */}
                    <motion.div
                      animate={{ y: [100, -20], opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/60 rounded-full"
                    />
                    <motion.div
                      animate={{ y: [100, -20], opacity: [0, 1, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="absolute bottom-0 left-1/3 w-1.5 h-1.5 bg-white/40 rounded-full"
                    />
                    {/* Bottle Cap */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-b from-gray-300 to-gray-500 rounded-t-full border-2 border-gray-400" />
                  </div>
                  {/* Product Label */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xs font-bold text-cyan-600">AQUA</div>
                      <div className="text-xs font-bold text-blue-600">FRESH</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [-5, 15, -5],
                  x: [-3, 3, -3],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-60 blur-sm"
              />
              <motion.div
                animate={{
                  y: [10, -5, 10],
                  x: [3, -3, 3],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-50 blur-sm"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}