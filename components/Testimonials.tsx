
import * as React from 'react';
import { TESTIMONIALS, QuoteIcon } from '../constants';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const TestimonialCard: React.FC<{ testimonial: typeof TESTIMONIALS[0]; index: number; isVisible: boolean }> = ({ testimonial, index, isVisible }) => {
    return (
        <div className={`p-8 rounded-2xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
            <div className="text-purple-400 mb-4">
                <QuoteIcon />
            </div>
            <p className="text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
            <div className="flex items-center">
                <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-purple-400" />
                <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.title}</p>
                </div>
            </div>
        </div>
    );
};

const Testimonials: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    
    return (
        <section id="testimonials" className="py-20 lg:py-32 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">What Our Clients Say</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Partnerships built on trust and results.
                    </p>
                </div>
                <div ref={ref} className="grid lg:grid-cols-2 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} isVisible={isVisible}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
