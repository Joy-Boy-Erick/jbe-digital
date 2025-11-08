
import * as React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const PortfolioItem: React.FC<{ item: typeof PORTFOLIO_ITEMS[0]; index: number; isVisible: boolean }> = ({ item, index, isVisible }) => {
    return (
        <div 
            className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="font-display text-2xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 tracking-tight">{item.title}</h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{item.category}</p>
            </div>
        </div>
    );
};

const Portfolio: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="portfolio" className="py-20 lg:py-32 bg-slate-100 dark:bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">Our Recent Work</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        We're proud of the impact we've made. Here are some of our favorite projects.
                    </p>
                </div>
                <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PORTFOLIO_ITEMS.map((item, index) => (
                        <PortfolioItem key={item.id} item={item} index={index} isVisible={isVisible} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
