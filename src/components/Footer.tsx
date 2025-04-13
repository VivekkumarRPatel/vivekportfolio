
import { ArrowUpCircle } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-8 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-primary">Your Name</h3>
            <p className="text-muted-foreground">Portfolio & Personal Showcase</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="mb-4 p-2 rounded-full hover:bg-muted transition-colors flex items-center gap-2"
            >
              <span className="text-sm">Back to Top</span>
              <ArrowUpCircle size={20} className="text-primary" />
            </button>
            
            <p className="text-sm text-muted-foreground">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
