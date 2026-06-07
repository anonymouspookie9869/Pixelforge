'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'Websites', 'Graphics', 'Videos', 'Branding'];

const projects = [
  {
    id: 1,
    title: 'Fintech Dashboard',
    category: 'Websites',
    image: 'https://picsum.photos/seed/p1/800/600',
  },
  {
    id: 2,
    title: 'E-commerce Redesign',
    category: 'Websites',
    image: 'https://picsum.photos/seed/p2/800/600',
  },
  {
    id: 3,
    title: 'Tech Startup Brand',
    category: 'Branding',
    image: 'https://picsum.photos/seed/p3/800/600',
  },
  {
    id: 4,
    title: 'Social Media Campaign',
    category: 'Graphics',
    image: 'https://picsum.photos/seed/p4/800/600',
  },
  {
    id: 5,
    title: 'Product Promo',
    category: 'Videos',
    image: 'https://picsum.photos/seed/p5/800/600',
  },
  {
    id: 6,
    title: 'SaaS Landing Page',
    category: 'Websites',
    image: 'https://picsum.photos/seed/p6/800/600',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    proj => activeCategory === 'All' || proj.category === activeCategory
  );

  return (
    <section id="work" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
           <h2 className="text-sm font-semibold tracking-widest text-blue-400 uppercase">Portfolio</h2>
           <h3 className="text-4xl md:text-5xl font-heading font-bold">Recent <span className="text-gradient">Work</span></h3>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-white text-black' 
                  : 'glass text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer"
              >
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                   <span className="text-blue-400 text-sm font-medium mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.category}</span>
                   <div className="flex items-end justify-between translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                     <h4 className="text-2xl font-bold font-heading text-white">{project.title}</h4>
                     <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500">
                       <ArrowRight size={18} />
                     </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
