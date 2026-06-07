'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const stats = [
    { label: 'Clients Served', value: '20+' },
    { label: 'Custom Solutions', value: '100%' },
    { label: 'Client Focus', value: 'Global' },
    { label: 'Delivery', value: 'Fast' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8 } 
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full space-y-16">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-block"
          >
            <span className="glass px-4 py-2 rounded-full text-sm font-medium tracking-wide text-blue-200 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Accepting New Clients
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter leading-[1.1]"
          >
            Website Development & Graphic Design Agency for <span className="text-gradient">Businesses Worldwide</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Custom websites, graphic design, branding, and digital solutions for startups, creators, and businesses worldwide.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-all flex items-center justify-center gap-2 group"
            >
              Book Free Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass glass-hover text-white font-medium transition-all flex items-center justify-center gap-2 group"
            >
              <Play size={18} className="fill-white/20 group-hover:fill-white/50 transition-colors" />
              View Our Work
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-10"
        >
          {stats.map((stat, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center border-white/5">
              <div className="text-3xl md:text-4xl font-heading font-semibold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-white/50 tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
