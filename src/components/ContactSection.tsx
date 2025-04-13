
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "New York, NY, USA",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      link: "https://github.com/yourusername"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/yourusername"
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      label: "YouTube",
      link: "https://youtube.com/@yourusername"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute -z-10 w-96 h-96 bg-gradient-radial from-cinnamon-200/20 to-transparent rounded-full blur-3xl top-1/3 -left-48" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-primary font-medium mb-2">GET IN TOUCH</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="hover-card overflow-hidden">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-4">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/80 text-white w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="hover-card overflow-hidden">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a 
                      href={item.link}
                      key={index}
                      className="flex items-start gap-4 hover:bg-accent p-2 rounded-md transition-colors"
                    >
                      <div className="p-2 bg-secondary rounded-md text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-card overflow-hidden">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-4">Connect With Me</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((item, index) => (
                    <a 
                      href={item.link}
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-4 bg-secondary rounded-md hover:bg-accent transition-colors w-24"
                    >
                      <div className="text-primary mb-2">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium">{item.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
