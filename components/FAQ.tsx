'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How long does a project take?',
    a: 'Project timelines vary depending on scope and complexity. A standard business website typically takes 2-4 weeks, while complex full-stack applications may take 8-12 weeks. We provide a detailed timeline during the discovery phase.'
  },
  {
    q: 'Do you work with international clients?',
    a: 'Absolutely. We serve clients globally (USA, UK, Canada, Europe, Australia). We accommodate different time zones for meetings and ensure seamless communication regardless of your location.'
  },
  {
    q: 'Do you provide revisions?',
    a: 'Yes, we include a specific number of revision rounds in all our contracts to ensure the final product perfectly aligns with your vision. Your satisfaction is our priority.'
  },
  {
    q: 'Can you redesign existing websites?',
    a: 'Yes! We specialize in modernizing outdated web experiences. We can revamp your UI/UX, improve performance, and migrate you to a modern tech stack while preserving your SEO rankings.'
  },
  {
    q: 'Do you provide maintenance?',
    a: 'Yes, we offer ongoing support and maintenance packages to keep your website secure, updated, and performing optimally long after the initial launch.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
           <h2 className="text-sm font-semibold tracking-widest text-blue-400 uppercase">Got Questions?</h2>
           <h3 className="text-4xl md:text-5xl font-heading font-bold">Frequently Asked <span className="text-gradient">Questions</span></h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass rounded-2xl overflow-hidden border border-white/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-white/90 pr-8">{faq.q}</span>
                <ChevronDown 
                  className={`shrink-0 text-white/50 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-blue-400' : ''}`} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="p-6 pt-0 text-white/60 text-sm leading-relaxed border-t border-white/5 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
