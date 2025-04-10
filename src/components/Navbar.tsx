import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';

import { Toggle } from '@/components/ui/toggle';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();


  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <header className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-navy/95 shadow-md backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="ml-4 text-2xl font-mono font-bold text-highlight">
          DEV<span className="text-slate-light">.FOLIO</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          
          
          {navLinks.map((link, index) => (
            <Link 
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
            >
              <span className="text-highlight mr-1">{`0${index + 1}.`}</span> {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-3">
         
          
          <button 
            className="text-slate-light p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`
          md:hidden fixed inset-0 z-40 bg-navy-dark/95 backdrop-blur-md flex flex-col justify-center items-center
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <nav className="flex flex-col items-center space-y-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xl font-mono ${location.pathname === link.path ? 'text-highlight' : 'text-slate-light'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-highlight mr-1 text-sm">{`0${index + 1}.`}</span> {link.name}
            </Link>
          ))}
        </nav>
        <button 
          className="absolute top-6 right-6 text-slate-light p-2"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close Menu"
        >
          <X size={24} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
