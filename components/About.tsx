
import * as React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section id="about" className="py-20 lg:py-32 bg-slate-100 dark:bg-slate-950">
            <div ref={ref} className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center mb-12">
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">We Are JBE</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        A creative digital agency blending innovation with artistry to build unforgettable brand experiences.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-64 md:h-full w-full rounded-2xl overflow-hidden">
                        <img 
                            src="https://picsum.photos/800/600?grayscale&blur=2" 
                            alt="Abstract creative background" 
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/70 to-pink-500/70"></div>
                    </div>
                    <div>
                        <h3 className="font-display text-2xl font-semibold mb-4 tracking-tight">Our Philosophy</h3>
                        <p className="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                            At JBE, we believe that great marketing isn't just about numbers; it's about connection. We dive deep into your brand's DNA to uncover its unique story, then tell that story in the most compelling way possible across all digital channels.
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            Our team of strategists, creatives, and technologists work in synergy to push boundaries and deliver results that don't just meet expectations—they shatter them.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
