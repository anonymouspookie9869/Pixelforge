'use client';

import { motion } from 'motion/react';
import { Code2, PenTool, Layout, Video, Sparkles, Fingerprint } from 'lucide-react';

export default function About() {
  const focusAreas = [
    { icon: <Code2 size={20} />, label: 'Website Development' },
    { icon: <Layout size={20} />, label: 'UI/UX Design' },
    { icon: <PenTool size={20} />, label: 'Graphic Design' },
    { icon: <Video size={20} />, label: 'Video Editing' },
    { icon: <Fingerprint size={20} />, label: 'Brand Identity' },
    { icon: <Sparkles size={20} />, label: 'AI-Assisted Development' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-sm font-semibold tracking-widest text-blue-400 uppercase">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                Your Digital <br/><span className="text-gradient">Growth Partner</span>
              </h3>
            </div>
            
            <div className="space-y-6 text-lg text-white/60 leading-relaxed max-w-lg">
              <p>
                We are a premium <strong>remote web development agency</strong> and creative partner, helping startups and businesses transform ideas into powerful digital experiences worldwide. 
              </p>
              <p>
                As an <strong>international web design agency</strong>, we combine <strong>custom website development</strong>, advanced <strong>UI UX design services</strong>, and modern tech like React and Next.js. With experience serving over 20 global clients, our team of expert <strong>website designers</strong> and <strong>freelance web developers</strong> delivers high-converting solutions tailored for <strong>small business website development</strong> and ambitious startups.
              </p>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
               <div className="flex -space-x-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-black overflow-hidden bg-gray-800">
                      <img src={`https://picsum.photos/seed/${i + 15}/100/100`} alt="Client" className="w-full h-full object-cover" />
                    </div>
                  ))}
               </div>
               <div className="text-sm text-white/60">
                 Trusted by <strong className="text-white">20+ global clients</strong>
               </div>
            </div>
          </motion.div>

          {/* Right: Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4"
          >
            {focusAreas.map((area, idx) => (
              <div 
                key={idx} 
                className="glass rounded-2xl p-6 flex flex-col gap-4 group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all">
                  {area.icon}
                </div>
                <span className="font-medium text-white/90">{area.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
