'use client';

import { motion } from 'motion/react';

const steps = [
  { num: '01', title: 'Discovery Call', desc: 'We start by understanding your business goals, target audience, and project requirements.' },
  { num: '02', title: 'Planning & Strategy', desc: 'Developing a comprehensive roadmap, wireframes, and technical architecture.' },
  { num: '03', title: 'Design & Development', desc: 'Crafting pixel-perfect designs and writing clean, scalable, and secure code.' },
  { num: '04', title: 'Feedback & Revisions', desc: 'Collaborative review process to ensure the final product aligns perfectly with your vision.' },
  { num: '05', title: 'Launch & Support', desc: 'Smooth deployment to production environments with ongoing maintenance and support.' },
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
           <h2 className="text-sm font-semibold tracking-widest text-blue-400 uppercase">Workflow</h2>
           <h3 className="text-4xl md:text-5xl font-heading font-bold">How We <span className="text-gradient">Work</span></h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 relative">
           {steps.map((step, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: idx * 0.15 }}
               viewport={{ once: true, margin: "-50px" }}
               className="flex-1 relative flex flex-col lg:items-center text-left lg:text-center group"
             >
                <div className="flex lg:flex-col items-center gap-6 lg:gap-0 lg:mb-6 z-10">
                  <div className="w-16 h-16 rounded-full glass border border-blue-500/20 flex items-center justify-center text-xl font-heading font-bold text-white group-hover:scale-110 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300 relative shadow-[0_0_30px_rgba(0,71,255,0)] group-hover:shadow-[0_0_30px_rgba(0,71,255,0.3)] shrink-0">
                    {step.num}
                  </div>
                  {/* Mobile timeline connector */}
                  {idx !== steps.length - 1 && (
                     <div className="absolute top-16 left-8 bottom-[-24px] w-[1px] bg-white/10 lg:hidden" />
                  )}
                </div>
                
                <div className="lg:px-4">
                  <h4 className="text-xl font-bold font-heading mb-3 text-white">{step.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
