
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy-dark py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-mono font-bold text-highlight">
              DEV<span className="text-slate-light">.FOLIO</span>
            </Link>
            <p className="text-slate mt-2 text-sm">
              Crafting digital experiences with code.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Zunair890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate hover:text-highlight transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/zunair-ali890/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate hover:text-highlight transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://x.com/zunairali05?s=08" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate hover:text-highlight transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:ranazunairali007@gmail.com" 
                className="text-slate hover:text-highlight transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-navy-light text-center text-slate text-xs">
          <p className='font-medium text-base'>©     Zunair Ali. All rights reserved.</p>
       
        </div>
      </div>
    </footer>
  );
};

export default Footer;
