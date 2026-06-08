'use client';

import { motion } from 'motion/react';
import { Send, MessageCircle, Calendar } from 'lucide-react';
import { useState } from 'react';

const serviceBudgetMap: Record<string, { label: string; value: string }[]> = {
  web: [
    { label: 'Under $200', value: 'under-200' },
    { label: '$200 - $500', value: '200-500' },
    { label: '$500 - $1,000', value: '500-1000' },
    { label: '$1,000+', value: '1000-plus' },
    { label: 'Let\'s Discuss', value: 'discuss' },
  ],
  uiux: [
    { label: 'Under $100', value: 'under-100' },
    { label: '$100 - $300', value: '100-300' },
    { label: '$300 - $700', value: '300-700' },
    { label: '$700+', value: '700-plus' },
    { label: 'Let\'s Discuss', value: 'discuss' },
  ],
  branding: [
    { label: 'Under $100', value: 'under-100' },
    { label: '$100 - $300', value: '100-300' },
    { label: '$300 - $700', value: '300-700' },
    { label: '$700+', value: '700-plus' },
    { label: 'Let\'s Discuss', value: 'discuss' },
  ],
  video: [
    { label: 'Under $50', value: 'under-50' },
    { label: '$50 - $150', value: '50-150' },
    { label: '$150 - $400', value: '150-400' },
    { label: '$400+', value: '400-plus' },
    { label: 'Let\'s Discuss', value: 'discuss' },
  ]
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const [formData, setFormData] = useState({
    name: '', businessName: '', email: '', phone: '', country: '', type: '', budget: '', message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'type') {
      setFormData((prev) => ({ ...prev, type: value, budget: '' }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage({ type: 'success', text: "Message sent! We'll be in touch shortly." });
        setFormData({ name: '', businessName: '', email: '', phone: '', country: '', type: '', budget: '', message: '' });
      } else {
        setStatusMessage({ type: 'error', text: result.error || 'Failed to submit form.' });
      }
    } catch (error) {
      setStatusMessage({ type: 'error', text: 'An unexpected error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#020202]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16">
          
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold tracking-widest text-blue-400 uppercase">Start a Project</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold">Let's Build Something <span className="text-gradient">Amazing</span></h3>
            </div>
            
            <p className="text-white/60 leading-relaxed text-lg">
              Ready to transform your digital presence? Fill out the form or reach out directly. We typically respond within 24 hours.
            </p>

            <div className="space-y-4 pt-8">
               <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="w-full glass glass-hover p-4 rounded-2xl flex items-center gap-4 text-left group">
                 <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                   <Calendar size={24} />
                 </div>
                 <div>
                   <div className="font-semibold text-white">Schedule via Calendly</div>
                   <div className="text-sm text-white/50">Pick a time that works for you</div>
                 </div>
               </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass rounded-3xl p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Name</label>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-white/20" placeholder="Rahul Kumar" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Business Name</label>
                  <input name="businessName" value={formData.businessName} onChange={handleChange} type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-white/20" placeholder="Company Inc." />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Email Address</label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-white/20" placeholder="rahul@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Phone Number</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-white/20" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Country</label>
                  <input required name="country" value={formData.country} onChange={handleChange} type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-white/20" placeholder="India" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Project Type</label>
                  <select required name="type" value={formData.type} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all appearance-none [&>option]:bg-neutral-900">
                    <option value="">Select a service</option>
                    <option value="web">Website Development</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="branding">Branding</option>
                    <option value="video">Video Editing</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-white/70">Budget</label>
                  <select disabled={!formData.type} required name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all appearance-none [&>option]:bg-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed">
                    <option value="">Select budget range</option>
                    {formData.type && serviceBudgetMap[formData.type]?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Project Details</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-white/20 resize-none" placeholder="Tell us about your project goals and requirements..."></textarea>
              </div>

              {statusMessage && (
                <div className={`p-4 rounded-xl text-sm font-medium ${statusMessage.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                  {statusMessage.text}
                </div>
              )}

              <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-xl font-medium bg-blue-600 hover:bg-blue-500 text-white transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Get Free Quote
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
