'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Github, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const links = [
    { name: 'Web Dev', href: '#services' },
    { name: 'Design', href: '#services' },
    { name: 'Portfolio', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#020202] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="flex-1">
            <Link href="/" className="flex flex-col items-start group inline-block">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded shrink-0 overflow-hidden">
                  <Image src="/logo.png" alt="PixelForge Studio Logo" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="text-2xl font-heading font-black tracking-widest uppercase flex items-center">
                  <span className="text-white">PIXEL</span>
                  <span className="text-blue-500">FORGE</span>
                </div>
              </div>
              <span className="text-[0.6rem] font-medium tracking-[0.3em] text-white/50 w-full text-center mt-0.5 uppercase group-hover:text-blue-400/80 transition-colors pl-11">Studio</span>
            </Link>
            <p className="mt-4 text-sm text-white/50 max-w-sm">
              We build premium websites and digital experiences that help modern businesses scale globally.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 justify-center">
            {links.map(link => (
              <Link key={link.name} href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} PixelForge Studio. All Rights Reserved.
          </p>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full glass hover:bg-white/10 flex items-center justify-center transition-colors text-white/70 hover:text-white">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass hover:bg-white/10 flex items-center justify-center transition-colors text-white/70 hover:text-white">
              <Github size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass hover:bg-white/10 flex items-center justify-center transition-colors text-white/70 hover:text-white">
              <Instagram size={18} />
            </a>
            <a href="mailto:hello@agency.com" className="w-10 h-10 rounded-full glass hover:bg-white/10 flex items-center justify-center transition-colors text-white/70 hover:text-white">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
