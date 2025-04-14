
import { useState, useEffect } from 'react';
import { GraduationCap, Briefcase, ArrowRight, BookOpen } from 'lucide-react';

const CareerJourneySection = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimationTriggered(true);
        }
      },
      { threshold: 0.3 }
    );
    
    const section = document.getElementById('journey');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  const journeySteps = [
    { 
      id: 1, 
      title: 'Undergrad',
      subtitle: 'GTU',
      link: 'https://www.gtu.ac.in/',
      year: 'Sep 2014 - June 2018',
      icon: <GraduationCap className="h-8 w-8" />,
      delay: 0.1
    },
    { 
      id: 2, 
      title: 'Internship',
      subtitle: 'Spec India',
      link: 'https://www.spec-india.com/',
      year: 'Jan 2018 - June 2018',
      icon: <BookOpen className="h-8 w-8" />,
      delay: 0.3
    },
    { 
      id: 3, 
      title: 'Full-time Job',
      subtitle: 'Spec India',
      link: 'https://www.spec-india.com/',
      year: 'July 2018 - Aug 2021',
      icon: <Briefcase className="h-8 w-8" />,
      delay: 0.5
    },
    { 
      id: 4, 
      title: "Master's",
      subtitle: 'Dalhousie University',
      link: 'https://www.dal.ca/',
      year: 'Sep 2021 - April 2023',
      icon: <GraduationCap className="h-8 w-8" />,
      delay: 0.7
    },
    { 
      id: 5, 
      title: 'Internship',
      subtitle: 'Canada Revenue Agency',
      link: 'https://www.canada.ca/en/revenue-agency.html',
      year: 'Jan 2023 - April 2023',
      icon: <BookOpen className="h-8 w-8" />,
      delay: 0.9
    },
    { 
      id: 6, 
      title: 'Full-time Job',
      subtitle: 'Canada Revenue Agency',
      link: 'https://www.canada.ca/en/revenue-agency.html',
      year: 'May 2023 - Mar 2025',
      icon: <Briefcase className="h-8 w-8" />,
      delay: 1.1
    }
  ];

  return (
    <section id="journey" className="py-20 relative overflow-hidden">
      <div className="absolute -z-10 w-96 h-96 bg-gradient-radial from-cinnamon-200/20 to-transparent rounded-full blur-3xl top-1/3 -left-48" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-primary font-medium mb-2">MY JOURNEY</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Career Path & Progression</h2>
        </div>
        
        <div className="career-graph">
          <div className="hidden md:flex justify-between items-center relative py-16">
            {journeySteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center z-10" style={{
                animation: animationTriggered ? 'slideUp 0.5s ease-out forwards' : 'none',
                opacity: 0,
                animationDelay: `${step.delay}s`
              }}>
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 border border-accent cursor-pointer group transition-transform hover:rotate-12 hover:scale-110"
                  onClick={() => {
                    const subtitleEl = document.getElementById(`subtitle-${step.id}`);
                    if (subtitleEl) {
                      subtitleEl.classList.add('animate-ping-once');
                      setTimeout(() => subtitleEl.classList.remove('animate-ping-once'), 500);
                    }
                  }}>
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center transition-transform group-hover:scale-110 group-hover:animate-bounce">
                    <div className="text-primary">
                      {step.icon}
                    </div>
                  </div>
                </div>
                <div className="w-32 text-center">
                  <h4 className="font-bold">{step.title}</h4>
                  <p id={`subtitle-${step.id}`} className="text-sm text-muted-foreground transition-transform"> 
                  <a  href={step.link}  target="_blank" rel="noopener noreferrer" className="hover:underline  text-inherit">    
                    {step.subtitle}</a></p>
                  <p className="text-xs font-medium text-primary mt-1">{step.year}</p>
                </div>
                
                {index < journeySteps.length - 1 && (
                  <div 
                    className="absolute"
                    style={{
                      left: `calc(${(index + 0.5) * 100 / (journeySteps.length - 1)}% - 12px)`,
                      opacity: 0,
                      animation: animationTriggered ? 'fadeIn 0.5s ease-out forwards 1s' : 'none',
                      animationDelay: `${step.delay + 0.2}s`
                    }}
                  >
                    <ArrowRight className="text-primary" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile view - vertical timeline */}
          <div className="md:hidden">
            <div className="relative pl-10 border-l-2 border-dashed border-primary/50">
              {journeySteps.map((step) => (
                <div key={step.id} className="mb-12 relative" style={{
                  animation: animationTriggered ? 'slideUp 0.5s ease-out forwards' : 'none',
                  opacity: 0,
                  animationDelay: `${step.delay}s`
                }}>
                  <div className="timeline-dot">
                    <div className="w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="flex items-center mb-2 gap-3">
                      <div className="p-2 rounded-lg bg-secondary">
                        <div className="text-primary">
                          {step.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{step.title}</h4>
                        <p id={`subtitle-${step.id}`} className="text-sm text-muted-foreground transition-transform">
                          <a  href={step.link} target="_blank" rel="noopener noreferrer" className="hover:underline  text-inherit">
                          {step.subtitle}</a></p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-primary">{step.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerJourneySection;
