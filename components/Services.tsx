
import * as React from 'react';
import { SERVICES } from '../constants';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ServiceCard: React.FC<{ service: typeof SERVICES[0]; index: number; isVisible: boolean }> = ({ service, index, isVisible }) => {
    return (
        <div 
            className={`p-8 rounded-2xl border bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 backdrop-blur-xl shadow-lg hover:-translate-y-2 hover:shadow-2xl hover:border-purple-400/50 transition-all duration-500`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="mb-4 text-purple-400">{service.icon}</div>
            <h3 className="font-display text-xl font-bold mb-2 tracking-tight">{service.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{service.description}</p>
        </div>
    );
};

const Services: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="services" className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-950">
            <div ref={ref} className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">What We Do</h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        From strategy to execution, we provide a full suite of services to amplify your brand.
                    </p>
                </div>
                <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    {SERVICES.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} isVisible={isVisible} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;