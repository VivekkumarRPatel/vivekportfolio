
import { ArrowDownCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute -z-10 w-96 h-96 bg-gradient-radial from-buff-200/30 to-transparent rounded-full blur-3xl top-1/4 -left-48" />
      <div className="absolute -z-10 w-96 h-96 bg-gradient-radial from-cinnamon-200/20 to-transparent rounded-full blur-3xl bottom-1/4 -right-48" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-6">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
            <h2 className="text-xl md:text-2xl font-medium text-primary">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              YOUR NAME
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
              A passionate professional with expertise in design, development, and problem-solving.
              I craft digital experiences that connect people.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="bg-primary hover:bg-primary/80 text-white px-6 py-6"
                onClick={scrollToContact}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-6 py-6"
                onClick={scrollDown}
              >
                View My Work
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Main image with border radius and shadow */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl bg-gradient-to-br from-buff-100 to-cinnamon-200 shadow-xl overflow-hidden">
                {/* Add your profile image here */}
                <div className="w-full h-full bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-0 -right-16 floating-card">
                <div className="bg-white rounded-xl shadow-lg p-3 w-32">
                  <div className="text-xs font-medium text-muted-foreground mb-1">Experience</div>
                  <div className="text-lg font-bold">5+ Years</div>
                </div>
              </div>
              
              <div className="absolute bottom-10 -left-16 floating-card-slow">
                <div className="bg-white rounded-xl shadow-lg p-3 w-32">
                  <div className="text-xs font-medium text-muted-foreground mb-1">Projects</div>
                  <div className="text-lg font-bold">20+ Done</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse">
          <button onClick={scrollDown} className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDownCircle size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
