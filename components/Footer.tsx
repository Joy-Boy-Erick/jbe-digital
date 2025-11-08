
import * as React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} JBE. All rights reserved.</p>
        <p className="text-sm mt-2">Crafted with passion by a digital visionary.</p>
      </div>
    </footer>
  );
};

export default Footer;
