
import * as React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 gradient-bg"></div>
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tighter animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
          JBE — Joy Boy Erick
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          We are a creative powerhouse crafting digital experiences that resonate, engage, and inspire.
        </p>
        <a 
          href="#contact"
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          Let's Grow Together
        </a>
      </div>
    </section>
  );
};

export default Hero;