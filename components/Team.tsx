'use client';

import { motion } from 'motion/react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const team = [
  {
    name: 'Ayush Yadav',
    role: 'Creative Designer',
    image: '/ayush.png',
    bio: 'Ayush leads creative design and visual content production. He specializes in graphic design, social media creatives, thumbnails, branding assets, photo editing, and video editing. He combines creativity with modern design tools to help brands stand out online.',
    skills: ['Canva', 'Adobe Creative Tools', 'Thumbnail Design', 'Photo Editing', 'Video Editing', 'Content Design', 'Brand Graphics', 'Social Media Assets'],
    highlights: ['Content & Video Editing Leader', 'Event Creative Management', 'Visual Branding Specialist']
  },
  {
    name: 'Shivam',
    role: 'Full Stack Developer',
    image: '/shivam.png',
    bio: 'Shivam is a Full Stack Developer specializing in modern web technologies and scalable digital products. He has experience building custom client websites and interactive web applications. He brings expertise in frontend development, Git workflows, deployment, and modern AI-assisted development tools.',
    skills: ['React.js', 'JavaScript', 'HTML/CSS', 'Python', 'Git', 'UI/UX', 'Google AI Studio', 'Lovable', 'Modern Web Dev'],
    highlights: ['Freelance Web Developer', 'Event Team Lead', 'Multiple successful client projects', 'Strong client communication']
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold tracking-widest text-blue-400 uppercase">The Experts</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold">Meet Our <span className="text-gradient">Team</span></h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass rounded-3xl p-8 flex flex-col md:flex-row gap-8 relative overflow-hidden group"
            >
              {/* Highlight Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-colors duration-500" />
              
              <div className="w-full md:w-1/3 shrink-0">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-800">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="flex gap-4 mt-6 justify-center">
                  <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Linkedin size={18} className="text-white/70" />
                  </button>
                  <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Github size={18} className="text-white/70" />
                  </button>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <h4 className="text-2xl font-heading font-bold text-white">{member.name}</h4>
                  <p className="text-blue-400 font-medium mt-1">{member.role}</p>
                </div>
                
                <p className="text-white/60 leading-relaxed text-sm">
                  {member.bio}
                </p>

                <div className="space-y-3">
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-white/40">Technical Skills</h5>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 shrink-0">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-white/40">Key Highlights</h5>
                  <ul className="space-y-2">
                    {member.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex gap-2 text-sm text-white/70 items-start">
                        <span className="text-blue-400 mt-0.5 shrink-0">✦</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
