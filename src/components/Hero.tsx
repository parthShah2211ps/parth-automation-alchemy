import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Download,
  Calendar,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
      aria-label="Hero section introducing Parth Shah"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
        role="img"
        aria-label="Abstract technology background pattern"
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-40 right-32 w-48 h-48 bg-secondary/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-32 left-1/3 w-32 h-32 bg-success/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container-custom relative z-10 text-center">
        <header className="animate-fade-in">
          {/* Main Heading */}
          <h1 className="mb-6">
            Hi, I'm <span className="text-gradient">Parth Shah</span>
          </h1>

          {/* Dynamic Tagline */}
          <div className="mb-6">
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2">
              Full-Stack Developer | n8n Automation Expert | Product Manager
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-dark max-w-3xl mx-auto leading-relaxed">
              Technical Product Manager with{" "}
              <span className="font-semibold text-primary">3+ years</span> of
              development experience and{" "}
              <span className="font-semibold text-secondary">
                20+ production automations
              </span>
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 max-w-4xl mx-auto">
            <div className="card-metric p-4 sm:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary">
                50+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Automations Built
              </div>
            </div>
            <div className="card-metric p-4 sm:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-success">
                100+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Hours Saved Weekly
              </div>
            </div>
            <div className="card-metric p-4 sm:p-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                5+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Workshop Attendees
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6">
            <Button
              className="btn-hero"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="btn-hero-outline"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1hiMVRkzBHgp0jz71TWAjn7PPYRd5xixP/view?usp=sharing",
                  "_blank"
                )
              }
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <nav
            className="flex justify-center space-x-6 mb-12"
            aria-label="Social media links"
          >
            <a
              href="https://www.linkedin.com/in/parth-shah-8a041514b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Parth Shah's LinkedIn profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            {/* <a
              href="https://github.com/shahparthsp11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Parth Shah's GitHub profile"
            >
              <Github className="h-6 w-6" />
            </a> */}
          </nav>
        </header>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown
          className="h-8 w-8 text-muted-foreground cursor-pointer hover:text-primary transition-colors duration-200"
          onClick={() => scrollToSection("about")}
        />
      </div>
    </section>
  );
};

export default Hero;
