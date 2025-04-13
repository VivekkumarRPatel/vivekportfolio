
import { useState, useEffect } from 'react';
import { Code, Layers, Server, Users } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimationTriggered(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-10 w-10" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML", "CSS"],
      delay: 0
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="h-10 w-10" />,
      skills: ["React", "Angular", "Vue.js", "Node.js", "Express", "Django", "Flask"],
      delay: 0.2
    },
    {
      title: "Tools & Platforms",
      icon: <Server className="h-10 w-10" />,
      skills: ["Git", "Docker", "AWS", "Azure", "MongoDB", "PostgreSQL", "Firebase"],
      delay: 0.4
    },
    {
      title: "Soft/Collaboration Skills",
      icon: <Users className="h-10 w-10" />,
      skills: ["Team Leadership", "Communication", "Problem Solving", "Agile Methodology", "Project Management"],
      delay: 0.6
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50 relative">
      <div className="absolute -z-10 w-96 h-96 bg-gradient-radial from-buff-100/30 to-transparent rounded-full blur-3xl bottom-1/4 -right-48" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-primary font-medium mb-2">MY SKILLS</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Expertise</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="hover-card"
              style={{
                opacity: animationTriggered ? 1 : 0,
                transform: animationTriggered ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease ${category.delay}s`
              }}
            >
              <CardContent className="p-6">
                <div className="text-primary mb-4">{category.icon}</div>
                <h3 className="font-bold text-xl mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-pill bg-accent text-accent-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
