'use client';

import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Professional communication and excellent website quality. They transformed our outdated platform into a modern masterpiece.",
    author: "Sarah Jenkins",
    role: "Marketing Director, TechFlow",
    image: "https://picsum.photos/seed/t1/100/100"
  },
  {
    quote: "Our conversion rate improved significantly after the redesign. The team's attention to UI/UX details is unmatched.",
    author: "David Chen",
    role: "Founder, Elevate App",
    image: "https://picsum.photos/seed/t2/100/100"
  },
  {
    quote: "Fast delivery and outstanding support. They handled our complex branding and web development needs perfectly.",
    author: "Emma Thompson",
    role: "CEO, Nexa Retail",
    image: "https://picsum.photos/seed/t3/100/100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative bg-[#020202]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
           <h2 className="text-sm font-semibold tracking-widest text-blue-400 uppercase">Client Stories</h2>
           <h3 className="text-4xl md:text-5xl font-heading font-bold">Trusted <span className="text-gradient">Worldwide</span></h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass rounded-3xl p-8 relative"
            >
              <Quote size={40} className="text-blue-500/20 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-blue-500 text-blue-500" />
                ))}
              </div>

              <p className="text-white/80 leading-relaxed mb-8 relative z-10 text-lg font-medium">"{test.quote}"</p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800 shrink-0 border border-white/10">
                  <Image src={test.image} alt={test.author} width={48} height={48} className="object-cover w-full h-full" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-white tracking-tight">{test.author}</h4>
                  <p className="text-xs text-white/50">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
