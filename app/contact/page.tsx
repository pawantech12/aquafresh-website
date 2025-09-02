'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/navigation';
import ContactForm from '@/components/contact-form';
import CompanyInfo from '@/components/company-info';
import Footer from '@/components/footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-emerald-50">
      <Navigation />
      
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

      <div className="relative pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Contact
              </span>
              <span className="text-gray-800"> Us</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about our products? Want to partner with us? We're here to help and 
              would love to hear from you.
            </p>
          </motion.div>

          {/* Contact Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <CompanyInfo />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}