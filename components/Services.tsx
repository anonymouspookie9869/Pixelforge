'use client';

import { motion } from 'motion/react';
import { Monitor, Paintbrush, Camera, Film, LayoutTemplate, Cpu, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Website Development',
    slug: '/website-development',
    icon: <Monitor className="w-8 h-8" />,
    features: ['Business Websites', 'Portfolio Websites', 'Landing Pages', 'Startup Websites', 'E-commerce Websites']
  },
  {
    title: 'Graphic Design',
    slug: '/graphic-design',
    icon: <Paintbrush className="w-8 h-8" />,
    features: ['Social Media Posts', 'Thumbnail Design Services', 'Brand Assets', 'Marketing Creatives']
  },
  {
    title: 'Photo Editing',
    slug: '/graphic-design',
    icon: <Camera className="w-8 h-8" />,
    features: ['Professional Retouching', 'Product Editing', 'Branding Images']
  },
  {
    title: 'Video Editing',
    slug: '/video-editing',
    icon: <Film className="w-8 h-8" />,
    features: ['Reels', 'YouTube Videos', 'Promotional Videos', 'Short Form Content']
  },
  {
    title: 'UI/UX Design',
    slug: '/graphic-design',
    icon: <LayoutTemplate className="w-8 h-8" />,
    features: ['Wireframes', 'Prototypes', 'User Experience Design']
  },
  {
    title: 'AI-Powered Solutions',
    slug: '/website-development',
    icon: <Cpu className="w-8 h-8" />,
    features: ['AI Integrations', 'Automation Workflows', 'AI-Assisted Development']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-sm font-semibold tracking-widest text-blue-400 uppercase">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold">Services We <span className="text-gradient">Offer</span></h3>
          </div>
          <p className="text-white/60 max-w-sm md:text-right">
            Comprehensive digital solutions built on modern tech stacks and creative excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <Link href={service.slug} className="block w-full h-full glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 relative cursor-pointer">
                <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowUpRight size={18} className="text-white" />
                </div>

                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400 mb-8 mt-2 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-300">
                  {service.icon}
                </div>

                <h4 className="text-2xl font-bold font-heading mb-6">{service.title}</h4>

                <ul className="space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex gap-3 text-white/60 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
