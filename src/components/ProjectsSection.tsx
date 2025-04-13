
import { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Github, Youtube, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
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
    
    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "https://github.com/yourusername/ecommerce",
      youtubeLink: "https://youtube.com/watch?v=demo1",
      liveLink: "#",
      imagePath: "/placeholder.svg"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, user authentication, and file sharing.",
      techStack: ["Angular", "Firebase", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/yourusername/taskmanager",
      youtubeLink: "https://youtube.com/watch?v=demo2",
      liveLink: "#",
      imagePath: "/placeholder.svg"
    },
    {
      title: "AI Chat Assistant",
      description: "An intelligent chat assistant powered by natural language processing that answers questions and provides recommendations.",
      techStack: ["Python", "TensorFlow", "Flask", "React"],
      githubLink: "https://github.com/yourusername/aichat",
      youtubeLink: "https://youtube.com/watch?v=demo3",
      liveLink: "#",
      imagePath: "/placeholder.svg"
    },
    {
      title: "Financial Dashboard",
      description: "A comprehensive financial dashboard with data visualization, portfolio management, and predictive analytics.",
      techStack: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
      githubLink: "https://github.com/yourusername/finance",
      youtubeLink: "https://youtube.com/watch?v=demo4",
      liveLink: "#",
      imagePath: "/placeholder.svg"
    },
    {
      title: "Fitness Tracker",
      description: "A mobile-first fitness tracking application with workout plans, progress monitoring, and social features.",
      techStack: ["React Native", "GraphQL", "Node.js", "MongoDB"],
      githubLink: "https://github.com/yourusername/fitness",
      youtubeLink: "https://youtube.com/watch?v=demo5",
      liveLink: "#",
      imagePath: "/placeholder.svg"
    },
    {
      title: "Social Media Platform",
      description: "A feature-rich social media platform with real-time messaging, content sharing, and user engagement analytics.",
      techStack: ["Next.js", "Socket.io", "Redis", "AWS"],
      githubLink: "https://github.com/yourusername/socialmedia",
      youtubeLink: "https://youtube.com/watch?v=demo6",
      liveLink: "#",
      imagePath: "/placeholder.svg"
    }
  ];

  const showMoreProjects = () => {
    setVisibleProjects(prevState => Math.min(prevState + 3, projects.length));
  };

  const showLessProjects = () => {
    setVisibleProjects(3);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute -z-10 w-96 h-96 bg-gradient-radial from-cinnamon-200/20 to-transparent rounded-full blur-3xl top-1/3 -left-48" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-primary font-medium mb-2">MY WORK</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <Card 
              key={index} 
              className="hover-card overflow-hidden"
              style={{
                opacity: animationTriggered ? 1 : 0,
                transform: animationTriggered ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease ${0.1 * index}s`
              }}
            >
              <div className="h-48 bg-muted overflow-hidden">
                <img 
                  src={project.imagePath} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="px-6 py-4 border-t flex justify-between">
                <div className="flex gap-3">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Youtube size={20} />
                  </a>
                </div>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 text-sm">
                  <span>View Project</span>
                  <ExternalLink size={16} />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          {visibleProjects < projects.length ? (
            <Button 
              onClick={showMoreProjects}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Load More Projects
            </Button>
          ) : (
            projects.length > 3 && (
              <Button 
                onClick={showLessProjects}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Show Less
              </Button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
