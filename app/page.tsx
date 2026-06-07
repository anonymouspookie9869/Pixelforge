import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Team from '@/components/Team';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />


    </main>
  );
}
