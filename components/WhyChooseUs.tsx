'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  '20+ Successful Clients',
  'International Service Standards',
  'Fast Communication',
  'Modern Technology Stack',
  'Custom Designs',
  'SEO Friendly Websites',
  'Mobile Responsive',
  'Affordable Pricing',
  'Long-Term Support',
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#020202]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-sm font-semibold tracking-widest text-blue-400 uppercase">Our Edge</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold">Why Choose <span className="text-gradient">Us</span></h3>
            </div>
             <p className="text-lg text-white/60 leading-relaxed max-w-lg">
                We don't just build websites; we craft digital experiences engineered for conversion, performance, and scalability. Partner with a team that values quality and clear communication.
             </p>

             <div className="flex items-center gap-4 pt-4">
                <div className="px-6 py-4 rounded-2xl glass border-blue-500/20 bg-blue-500/5">
                  <div className="text-3xl font-heading font-bold text-white mb-1">100%</div>
                  <div className="text-sm font-medium text-blue-400 uppercase tracking-wide">Satisfaction Rate</div>
                </div>
                <div className="px-6 py-4 rounded-2xl glass border-purple-500/20 bg-purple-500/5">
                  <div className="text-3xl font-heading font-bold text-white mb-1">5★</div>
                  <div className="text-sm font-medium text-purple-400 uppercase tracking-wide">Client Rating</div>
                </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 p-4 rounded-xl glass border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-colors cursor-default"
              >
                <CheckCircle2 size={20} className="text-blue-500 shrink-0" />
                <span className="text-sm font-medium text-white/80">{benefit}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
