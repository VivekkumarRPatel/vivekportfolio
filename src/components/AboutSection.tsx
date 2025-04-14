
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute -z-10 w-96 h-96 bg-gradient-radial from-buff-200/20 to-transparent rounded-full blur-3xl top-1/2 -right-48" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="w-64 h-80 md:w-80 md:h-96 rounded-2xl bg-gradient-to-br from-buff-100 to-cinnamon-100 overflow-hidden shadow-xl">
                {/* Add your image here */}
                <div className="w-full h-full  bg-cover bg-center" style={{ backgroundImage: "url('/about_image.png')" }}></div>
              </div>
              
              <Card className="absolute -bottom-6 -right-6 w-48 floating-card">
                <CardContent className="p-4">
                  <h4 className="font-medium text-primary">5+ Years</h4>
                  <p className="text-sm text-muted-foreground">Professional Experience</p>
                </CardContent>
              </Card>
              
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-primary"></div>
              <div className="absolute top-1/3 -right-6 w-8 h-8 rounded-full bg-cinnamon-300"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h3 className="text-primary font-medium mb-2">ABOUT ME</h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A dedicated professional who loves creating amazing solutions</h2>
              <p className="text-muted-foreground mb-6">
              💻 I break things, Google things, Stack Overflow things — and somehow end up building reliable backend systems.

With 5+ years of experience, I speak fluent Java, occasionally argue with Spring Boot, and have a love-hate relationship with YAML 😅. I build APIs that don’t ghost you, databases that mind their indexes, and systems that (usually) behave — unless it’s a Monday.

☕ Fueled by caffeine and questionable variable names, I'm not just married to Java — I’m always up for new tech adventures. Throw me a challenge in a new language or tool, and I’ll probably break it first... but I’ll learn fast, fix it, and make it awesome.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div className="flex items-start">
    <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-1" />
    <div>
      <h4 className="font-medium">🧠 Problem Solver</h4>
      <p className="text-sm text-muted-foreground">Can untangle bugs like spaghetti code on a Monday morning.</p>
    </div>
  </div>

  <div className="flex items-start">
    <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-1" />
    <div>
      <h4 className="font-medium">⚡ Fast Learner</h4>
      <p className="text-sm text-muted-foreground">Give me a new tech stack and 2 cups of coffee — I’ll figure it out.</p>
    </div>
  </div>

  <div className="flex items-start">
    <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-1" />
    <div>
      <h4 className="font-medium">🤝 Team Player</h4>
      <p className="text-sm text-muted-foreground">Fluent in code, memes, and Slack threads.</p>
    </div>
  </div>

  <div className="flex items-start">
    <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-1" />
    <div>
      <h4 className="font-medium">🔍 Detail Oriented</h4>
      <p className="text-sm text-muted-foreground">I see that missing semicolon — and I *will* fix it.</p>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
