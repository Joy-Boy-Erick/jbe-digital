
import * as React from 'react';
import { SunIcon, MoonIcon, MenuIcon, XIcon, JbeLogo } from '../constants';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Work" },
    { href: "#contact", label: "Contact" },
];

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          <JbeLogo className="h-8 w-auto" />
        </a>
        <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={handleLinkClick} className="hover:text-purple-400 transition-colors duration-300">{link.label}</a>
            ))}
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="relative w-8 h-8 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 focus:ring-purple-500 transition-transform duration-300 hover:scale-110" aria-label="Toggle theme">
            <div className={`absolute transition-all duration-300 ease-in-out transform ${theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'}`}>
              <SunIcon />
            </div>
            <div className={`absolute transition-all duration-300 ease-in-out transform ${theme === 'light' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}>
              <MoonIcon />
            </div>
          </button>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full focus:outline-none" aria-label="Toggle menu">
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg py-4">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={handleLinkClick} className="hover:text-purple-400 transition-colors duration-300 text-center">{link.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
