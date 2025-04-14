
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
      degree: "Master of Applied Computer Science",
      institution: "Dalhousie University",
      duration: "Sep 2021 - Jan 2023",
      description: "GPA : 3.89/4.00",
      achievements: [
        "Teaching Assistant for CSCI 2134 Software Development Concept for 3 terms",
        "Marker for CSCI 2134 Software Development Concept "
      ]
    },
    {
      degree: "Bachelor of Engineering, Computer Engineering",
      institution: "Gujarat Technological University",
      duration: "Sep 2014 - June 2018",
      description: "Comprehensive program covering software development, algorithms, data structures, and computer architecture.",
      achievements: [
      ]
    }
  ];

  const workData = [
    {
      position: "SDE2 (IT Developer CS02)",
      company: "Canada Revenue Agency",
      duration: "Jan 2023 - March 2025 | Halifax, Nova Scotia, Remote",
      description: "Delivering scalable, secure, and efficient enterprise solutions to support millions of Canadian taxpayers.",
      responsibilities: [
        "Led delivery of scalable enterprise features for 2M+ users.",
        "Improved system performance and reduced latency by 60%.",
        "Automated error handling, cutting 1,500+ monthly support calls.",
        "Migrated legacy builds to Maven, speeding up CI/CD pipelines.",
        "Prevented 250K+ redundant emails via data deduplication fix.",
        "Built and maintained RESTful microservices with Java & Spring.",
        "Mentored junior developers and supported critical deployments."
      ]
    },
    {
      position: "Software Engineer",
      company: "Spec India",
      duration: "July 2018 - Aug 2021 | India, On-site",
      description: "Delivered enterprise-grade solutions to streamline operations, enhance reliability, and modernize legacy systems for 3M+ users.",
      responsibilities: [
        "Digitized invoice tracking, saving 100+ labor hours weekly.",
        "Built LMS module with Spring Boot & Angular for course tracking.",
        "Followed Agile practices and CI/CD for faster, quality delivery.",
        "Achieved 85% test coverage using JUnit & Mockito, reducing bugs by 25%.",
        "Improved legacy systems and managed incidents via ServiceNow.",
        "Collaborated cross-functionally to scope features and remove blockers.",
        "Debugged, upgraded, and documented enterprise web applications."
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

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-2">Achievements:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {edu.achievements.map((item, i) => (
                          <li key={i} className="text-muted-foreground">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
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
