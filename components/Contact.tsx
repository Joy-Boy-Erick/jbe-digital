
import * as React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Contact: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

    return (
        <section id="contact" className="relative py-20 lg:py-32 overflow-hidden bg-slate-100 dark:bg-slate-950">
             <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5 gradient-bg"></div>
             <div className="relative z-10 container mx-auto px-6">
                <div ref={ref} className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-4 tracking-tighter">
                        Ready to Start a Project?
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Let's collaborate to create something extraordinary. We're excited to learn about your goals and how we can help you achieve them.
                    </p>
                    <a
                        href="mailto:hello@jbe.com"
                        className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out"
                    >
                        Let's Work Together
                    </a>
                </div>
             </div>
        </section>
    );
};

export default Contact;
