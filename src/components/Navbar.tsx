
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-primary">
              Portfolio
            </a>
          </div>
          
          {/* Desktop nav */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="nav-link active">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="nav-link">
                About
              </button>
              <button onClick={() => scrollToSection('journey')} className="nav-link">
                Journey
              </button>
              <button onClick={() => scrollToSection('experience')} className="nav-link">
                Experience & Edu
              </button>
              <button onClick={() => scrollToSection('skills')} className="nav-link">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="nav-link">
                Projects
              </button>
            </div>
          </div>
          
          {/* Contact button */}
          {/* <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/80 text-white"
            >
              Let's Talk
            </Button>
          </div>
           */}
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 rounded-md w-full text-left hover:bg-accent"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 rounded-md w-full text-left hover:bg-accent"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('journey')}
              className="block px-3 py-2 rounded-md w-full text-left hover:bg-accent"
            >
              Journey
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="block px-3 py-2 rounded-md w-full text-left hover:bg-accent"
            >
              Experience & Edu
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="block px-3 py-2 rounded-md w-full text-left hover:bg-accent"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block px-3 py-2 rounded-md w-full text-left hover:bg-accent"
            >
              Projects
            </button>
            {/* <button 
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 rounded-md w-full text-left hover:bg-accent"
            >
              Contact
            </button> */}
            {/* <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/80 text-white w-full mt-4"
            >
              Let's Talk
            </Button> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
