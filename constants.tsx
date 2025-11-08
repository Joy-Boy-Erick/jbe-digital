
import * as React from 'react';

// Logo
export const JbeLogo = ({ className }: { className?: string }) => (
    <svg 
        className={className}
        viewBox="0 0 190 65" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="JBE Logo"
    >
        <defs>
            <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
        </defs>
        <text 
            x="0" 
            y="50" 
            fontFamily="'Space Grotesk', sans-serif" 
            fontSize="60" 
            fontWeight="700" 
            fill="url(#logoGradient)"
        >
            JBE
        </text>
        <path d="M 5 60 Q 95 68 185 58" stroke="url(#logoGradient)" strokeWidth="5" fill="none" strokeLinecap="round"/>
    </svg>
);


// Icons
export const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

export const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

export const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

// Services
export const SERVICES = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: 'Brand Strategy',
    description: 'We define your brand’s voice and position it for success with a comprehensive, research-backed strategy.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    title: 'Web Development',
    description: 'Creating high-performance, visually stunning websites that are optimized for user experience and conversion.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    title: 'SEO & Content',
    description: 'Driving organic traffic and building authority with targeted SEO strategies and high-quality content creation.',
  },
];

// Portfolio
export const PORTFOLIO_ITEMS = [
  { id: 1, title: 'Project Nova', category: 'Web Design', imageUrl: 'https://picsum.photos/seed/nova/600/500' },
  { id: 2, title: 'Quantum Leap', category: 'Branding', imageUrl: 'https://picsum.photos/seed/quantum/600/500' },
  { id: 3, title: 'EcoVerse', category: 'E-commerce', imageUrl: 'https://picsum.photos/seed/ecoverse/600/500' },
  { id: 4, title: 'Fintech Future', category: 'App Development', imageUrl: 'https://picsum.photos/seed/fintech/600/500' },
  { id: 5, title: 'HealthHub', category: 'Content Strategy', imageUrl: 'https://picsum.photos/seed/healthhub/600/500' },
  { id: 6, title: 'Artisan Corner', category: 'Social Media', imageUrl: 'https://picsum.photos/seed/artisan/600/500' },
];

export const QuoteIcon = () => (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.333 22.667h4L16 16V9.333H6.667v9.334L9.333 22.667zM22.667 22.667h4L29.333 16V9.333H20v9.334l2.667 4z"></path>
    </svg>
);


// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Working with JBE was a game-changer for our brand. Their strategic approach and creative execution increased our engagement by 300%.",
    name: 'Jessica Miller',
    title: 'CEO of Project Nova',
    avatarUrl: 'https://picsum.photos/seed/person1/100/100',
  },
  {
    id: 2,
    quote: "The team's dedication and attention to detail are unmatched. They delivered a website that not only looks incredible but also performs flawlessly.",
    name: 'David Chen',
    title: 'Founder of Quantum Leap',
    avatarUrl: 'https://picsum.photos/seed/person2/100/100',
  },
];
