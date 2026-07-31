import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={clsx(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'py-4 glass dark:glass-dark' : 'py-6 bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-gradient">
          Ayush<span className="text-foreground">.dev</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass dark:glass-dark absolute top-full left-0 right-0 py-4 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
