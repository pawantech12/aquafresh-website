'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Gift, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type EmailData = z.infer<typeof emailSchema>;

export default function NewsletterSection() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailData>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = async (data: EmailData) => {
    setIsLoading(true);
    // Simulate subscription
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Newsletter subscription:', data);
    setIsLoading(false);
    setIsSubscribed(true);
    reset();
    setTimeout(() => setIsSubscribed(false), 4000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-2xl overflow-hidden">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
                >
                  <Mail className="w-8 h-8 text-white" />
                </motion.div>

                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  <span className="text-gray-800">Stay </span>
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    Refreshed
                  </span>
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Subscribe to our newsletter and be the first to know about new flavors, 
                  exclusive offers, and wellness tips. Plus, get 15% off your first order!
                </p>

                {isSubscribed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Welcome to the Family!</h3>
                    <p className="text-gray-600">Check your email for your 15% discount code.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <Input
                          {...register('email')}
                          type="email"
                          placeholder="Enter your email address"
                          className={`h-12 text-center sm:text-left transition-all duration-300 ${
                            errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-cyan-500'
                          }`}
                        />
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="text-red-500 text-sm mt-2 text-center sm:text-left"
                          >
                            {errors.email.message}
                          </motion.p>
                        )}
                      </div>
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="h-12 px-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        {isLoading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                        ) : (
                          <>
                            Subscribe
                            <Gift className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="flex items-center justify-center mt-6 space-x-6 text-sm text-gray-500"
                >
                  <div className="flex items-center">
                    <Gift className="w-4 h-4 text-cyan-500 mr-2" />
                    <span>15% Off First Order</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-blue-500 mr-2" />
                    <span>Weekly Updates</span>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}