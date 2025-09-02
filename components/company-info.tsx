'use client';

import { motion, easeOut } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function CompanyInfo() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Refresh Avenue, Beverage City, BC 12345",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@aquafresh.com",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon - Fri: 9AM - 6PM EST",
      color: "from-purple-500 to-indigo-600"
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: easeOut }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-md space-y-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
          Contact Information
        </h2>
        <p className="text-gray-600">Reach out to us through any of these channels</p>
      </motion.div>

      {contactInfo.map((item, index) => (
        <motion.div key={index} variants={cardVariants}>
          <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-shadow duration-300`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.info}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-200/20"
      >
        <h3 className="font-semibold text-gray-800 mb-3">Quick Response Promise</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          We typically respond to all inquiries within 24 hours. For urgent matters,
          please call us directly during business hours.
        </p>
      </motion.div>
    </motion.div>
  );
}