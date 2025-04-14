
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
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
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
              Vivekkumar Patel
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
            I’m a Software Engineer who really enjoys solving problems and building things that don’t just work, but work efficiently and reliably. 
            Whether it’s designing APIs or optimizing systems, I like being the person who keeps everything running smoothly behind the scenes.
            </p>
            {/* <div className="flex flex-wrap gap-4 pt-4">
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
            </div> */}

              {/* View My Work Button */}
<div className="pt-4">
  <Button 
    variant="outline"
    className="border-primary text-primary hover:bg-primary/10 px-6 py-6"
    onClick={scrollDown}
  >
    View My Work
  </Button>
</div>

{/* Contact & Social Info */}
<div className="mt-6 space-y-2 text-muted-foreground text-sm">
  <div className="flex items-center gap-2">
    <Mail className="w-4 h-4" />
    <span>vivekcanbe@gmail.com</span>
  </div>
  <div className="flex items-center gap-2">
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17 2H7C4.79 2 3 3.79 3 6v12c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm0 16H7V6h10v12z"/></svg>
    <span>+1 902 412 7741</span>
  </div>
  <div className="flex items-center gap-2">
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 4.27 7 13 7 13s7-8.73 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/></svg>
    <span>Halifax, Canada</span>
  </div>
  <div className="flex gap-4 pt-2">
    <a 
      href="https://github.com/VivekkumarRPatel" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:text-primary transition-colors"
      aria-label="GitHub"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0.5C5.4 0.5 0 5.9 0 12.5C0 17.9 3.4 22.4 8.2 23.9C8.8 24 9 23.6 9 23.3C9 23 9 22.3 9 21.6C6 22.2 5.2 20.3 5.2 20.3C4.7 19 4 18.7 4 18.7C3 18 4.1 18 4.1 18C5.2 18.1 5.8 19.2 5.8 19.2C6.8 21 8.5 20.5 9.2 20.2C9.3 19.5 9.6 19.1 9.9 18.9C7.3 18.6 4.4 17.5 4.4 12.5C4.4 11.1 4.9 10 5.7 9.2C5.6 9 5.2 7.7 5.8 6C5.8 6 6.9 5.7 9 7.1C9.9 6.9 10.9 6.8 12 6.8C13.1 6.8 14.1 6.9 15 7.1C17.1 5.7 18.2 6 18.2 6C18.8 7.7 18.4 9 18.3 9.2C19.1 10 19.6 11.1 19.6 12.5C19.6 17.5 16.7 18.6 14.1 18.9C14.5 19.2 14.8 19.8 14.8 20.6C14.8 21.9 14.7 22.9 14.7 23.3C14.7 23.6 14.9 24 15.6 23.9C20.5 22.4 24 17.9 24 12.5C24 5.9 18.6 0.5 12 0.5Z"/></svg>
    </a>
    <a 
      href="https://www.linkedin.com/in/vivekpatel12/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:text-primary transition-colors"
      aria-label="LinkedIn"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.983 3.5C4.983 4.604 4.104 5.5 3 5.5C1.896 5.5 1 4.604 1 3.5C1 2.396 1.896 1.5 3 1.5C4.104 1.5 4.983 2.396 4.983 3.5ZM5 8H1V23H5V8ZM8.5 8H12.062V10.016H12.111C12.555 9.078 13.646 8.056 15.313 8.056C19.25 8.056 20 10.48 20 14.07V23H16V14.75C16 12.75 15.5 11.5 14.156 11.5C12.812 11.5 12 12.594 12 14.75V23H8.5V8Z"/></svg>
    </a>
  </div>
</div>

          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Main image with border radius and shadow */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl bg-gradient-to-br from-buff-100 to-cinnamon-200 shadow-xl overflow-hidden">
                {/* Add your profile image here */}
                <div className="w-full h-full bg-cover bg-center"  style={{ backgroundImage: "url('/linkedin.png')" }}></div>
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
