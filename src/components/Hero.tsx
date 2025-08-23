import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Calendar, Github, Linkedin, ExternalLink } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-32 w-48 h-48 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/3 w-32 h-32 bg-success/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="animate-fade-in">
          {/* Main Heading */}
          <h1 className="mb-6">
            Hi, I'm <span className="text-gradient">Parth Shah</span>
          </h1>
          
          {/* Dynamic Tagline */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Product Manager | Full-Stack Developer | n8n Automation Expert
            </p>
            <p className="text-lg md:text-xl text-muted-dark max-w-3xl mx-auto leading-relaxed">
              Technical Product Manager with <span className="font-semibold text-primary">3+ years</span> of development experience and <span className="font-semibold text-secondary">50+ production automations</span>
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <div className="card-metric">
              <div className="text-2xl md:text-3xl font-bold text-primary">15K+</div>
              <div className="text-sm text-muted-foreground">Users Served</div>
            </div>
            <div className="card-metric">
              <div className="text-2xl md:text-3xl font-bold text-secondary">50+</div>
              <div className="text-sm text-muted-foreground">Automations Built</div>
            </div>
            <div className="card-metric">
              <div className="text-2xl md:text-3xl font-bold text-success">100+</div>
              <div className="text-sm text-muted-foreground">Hours Saved Weekly</div>
            </div>
            <div className="card-metric">
              <div className="text-2xl md:text-3xl font-bold text-primary">300+</div>
              <div className="text-sm text-muted-foreground">Workshop Attendees</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              className="btn-hero"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="btn-hero-outline"
              onClick={() => window.open('/resume-parth-shah.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              className="btn-hero-outline"
              onClick={() => scrollToSection('contact')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://linkedin.com/in/parth-shah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/parth-shah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://medium.com/@parth-shah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <ExternalLink className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          className="h-8 w-8 text-muted-foreground cursor-pointer hover:text-primary transition-colors duration-200" 
          onClick={() => scrollToSection('about')}
        />
      </div>
    </section>
  );
};

export default Hero;