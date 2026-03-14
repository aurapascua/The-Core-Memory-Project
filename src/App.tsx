/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Camera, PenTool, Share2, ArrowRight, Mail, Instagram, Twitter, Menu, X } from 'lucide-react';

const colors = {
  teal: '#3eb4b8',
  beige: '#e0d1c1',
  gray: '#b5c1c8',
  dark: '#1a1a1a',
  light: '#faf9f7'
};

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md border-b" style={{ backgroundColor: `${colors.dark}f2`, borderColor: '#333' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="The Core Memory Project Logo" 
              className="max-h-12 w-auto object-contain" 
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#mediums" className="text-gray-300 hover:text-white transition-colors">Mediums</a>
            <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a>
            <button 
              className="px-6 py-2 rounded-full text-white font-medium transition-transform hover:scale-105"
              style={{ backgroundColor: colors.teal }}
            >
              Join Us
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t" style={{ backgroundColor: colors.dark, borderColor: '#333' }}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white">About</a>
            <a href="#mediums" className="block px-3 py-2 text-gray-300 hover:text-white">Mediums</a>
            <a href="#gallery" className="block px-3 py-2 text-gray-300 hover:text-white">Gallery</a>
            <button 
              className="w-full text-left px-3 py-2 text-white font-medium mt-4 rounded-md"
              style={{ backgroundColor: colors.teal }}
            >
              Join Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" style={{ backgroundColor: colors.light }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6 text-gray-900">
              Preserving <br />
              <span style={{ color: colors.teal }}>Creative</span> <br />
              Expressions.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              A sanctuary for creatives to express, share, and immortalize their art. Whether through words, lenses, or digital canvases, your core memories belong here.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                className="px-8 py-4 rounded-full text-white font-medium flex items-center gap-2 transition-transform hover:scale-105"
                style={{ backgroundColor: colors.teal }}
              >
                Start Creating <ArrowRight size={20} />
              </button>
              <button 
                className="px-8 py-4 rounded-full font-medium transition-colors hover:bg-gray-50"
                style={{ color: colors.dark, border: `2px solid ${colors.beige}` }}
              >
                Explore Gallery
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[80%] mx-auto"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop" 
                alt="Creative workspace" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div 
              className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full -z-10"
              style={{ backgroundColor: colors.beige }}
            ></div>
            <div 
              className="absolute -top-6 -right-6 w-32 h-32 rounded-full -z-10 opacity-50"
              style={{ backgroundColor: colors.gray }}
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="pt-24 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: colors.teal }}>About Us</h2>
            <h3 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              More than just a platform. A collective memory.
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The Core Memory Project was born from a simple idea: that every creative expression holds a piece of our collective human experience. We are a media company dedicated to providing a safe, inspiring, and professional space for creatives of all kinds.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you are a writer weaving tales, a photographer capturing fleeting moments, or a social media creator building communities, your work is a core memory that deserves to be preserved and shared.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
              alt="Creative collaboration" 
              className="rounded-2xl w-full h-64 object-cover mt-8"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop" 
              alt="Writing process" 
              className="rounded-2xl w-full h-64 object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Mediums() {
  const mediums = [
    {
      icon: <PenTool size={32} />,
      title: "Writing",
      description: "Essays, poetry, and stories that capture the human experience."
    },
    {
      icon: <Camera size={32} />,
      title: "Photography",
      description: "Visual narratives frozen in time, speaking louder than words."
    },
    {
      icon: <Share2 size={32} />,
      title: "Social Media",
      description: "Digital curation and modern storytelling formats."
    }
  ];

  return (
    <section id="mediums" className="pt-12 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: colors.teal }}>Our Mediums</h2>
          <h3 className="text-4xl font-serif font-bold text-gray-900 mb-6">Every form of expression matters</h3>
          <p className="text-gray-600 text-lg">
            We provide the platform, you provide the vision. Explore the different ways our community brings their core memories to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {mediums.map((medium, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl transition-shadow hover:shadow-xl border border-gray-100"
              style={{ backgroundColor: colors.light }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: `${colors.teal}15`, color: colors.teal }}
              >
                {medium.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">{medium.title}</h4>
              <p className="text-gray-600 leading-relaxed">{medium.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    "https://picsum.photos/seed/gallery1/1920/1080",
    "https://picsum.photos/seed/gallery2/1920/1080",
    "https://picsum.photos/seed/gallery3/1920/1080",
    "https://picsum.photos/seed/gallery4/1920/1080"
  ];

  return (
    <section id="gallery" className="py-24" style={{ backgroundColor: colors.dark }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: colors.teal }}>Featured Works</h2>
            <h3 className="text-4xl font-serif font-bold text-white">A glimpse into our collective memory</h3>
          </div>
          <button className="mt-6 md:mt-0 text-white flex items-center gap-2 hover:opacity-80 transition-opacity">
            View full gallery <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden relative group aspect-square"
            >
              <img 
                src={src} 
                alt={`Gallery piece ${index + 1}`} 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium tracking-wider uppercase border border-white/50 px-6 py-2 rounded-full backdrop-blur-sm">
                  View Project
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/footer-logo.png" 
              alt="The Core Memory Project Logo" 
              className="max-h-32 w-auto object-contain mb-6" 
            />
            <p className="text-gray-500 max-w-sm mb-8">
              A space for creatives to freely express themselves in any form.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-500 hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="#mediums" className="text-gray-500 hover:text-gray-900 transition-colors">Mediums</a></li>
              <li><a href="#gallery" className="text-gray-500 hover:text-gray-900 transition-colors">Gallery</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Submit Work</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} The Core Memory Project. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <span style={{ color: colors.teal }}>♥</span> for creatives
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mediums />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

