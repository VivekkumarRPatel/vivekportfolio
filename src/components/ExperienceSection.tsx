
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ExperienceSection = () => {
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
    
    const section = document.getElementById('experience');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University Name",
      duration: "2021 - 2022",
      description: "Specialized in Artificial Intelligence and Machine Learning with a focus on Neural Networks and Deep Learning. Graduated with honors.",
      achievements: [
        "Published research paper on efficient deep learning algorithms",
        "Developed an AI-powered recommendation system for course selection",
        "Teaching assistant for undergraduate programming courses"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      duration: "2015 - 2019",
      description: "Comprehensive program covering software development, algorithms, data structures, and computer architecture.",
      achievements: [
        "Dean's List for academic excellence",
        "Led student software development club",
        "Developed a mobile application for campus navigation"
      ]
    }
  ];

  const workData = [
    {
      position: "Senior Software Engineer",
      company: "Company Name",
      duration: "2022 - Present",
      description: "Leading a team of developers in building scalable web applications and services.",
      responsibilities: [
        "Architected and implemented microservices infrastructure",
        "Optimized application performance resulting in 40% faster load times",
        "Mentored junior developers and conducted code reviews",
        "Collaborated with product managers to define feature roadmaps"
      ]
    },
    {
      position: "Software Engineer",
      company: "Previous Company",
      duration: "2019 - 2021",
      description: "Developed and maintained full-stack applications for client projects.",
      responsibilities: [
        "Built responsive web applications using React and Node.js",
        "Implemented RESTful APIs and database integrations",
        "Participated in agile development processes",
        "Troubleshot and resolved complex technical issues"
      ]
    },
    {
      position: "Software Development Intern",
      company: "Internship Company",
      duration: "2019 (6 months)",
      description: "Assisted in developing and testing web applications.",
      responsibilities: [
        "Developed frontend components using HTML, CSS, and JavaScript",
        "Fixed bugs and implemented small features",
        "Participated in daily stand-up meetings",
        "Learned industry best practices for software development"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/50 relative">
      <div className="absolute -z-10 w-96 h-96 bg-gradient-radial from-buff-100/30 to-transparent rounded-full blur-3xl bottom-1/4 -right-48" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-primary font-medium mb-2">MY BACKGROUND</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Education & Experience</h2>
        </div>
        
        <Tabs defaultValue="work" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="work">Work Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          
          <TabsContent value="work" className="space-y-6">
            {workData.map((job, index) => (
              <Card 
                key={index}
                className="hover-card overflow-hidden"
                style={{
                  opacity: animationTriggered ? 1 : 0,
                  transform: animationTriggered ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease ${0.1 * index}s`
                }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-bold text-xl">{job.position}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <span className="text-muted-foreground text-sm px-3 py-1 bg-muted rounded-full w-fit">
                      {job.duration}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  
                  <div>
                    <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {job.responsibilities.map((item, i) => (
                        <li key={i} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="education" className="space-y-6">
            {educationData.map((edu, index) => (
              <Card 
                key={index}
                className="hover-card overflow-hidden"
                style={{
                  opacity: animationTriggered ? 1 : 0,
                  transform: animationTriggered ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease ${0.1 * index}s`
                }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-bold text-xl">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                    <span className="text-muted-foreground text-sm px-3 py-1 bg-muted rounded-full w-fit">
                      {edu.duration}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                  
                  <div>
                    <h4 className="font-medium mb-2">Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {edu.achievements.map((item, i) => (
                        <li key={i} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceSection;
