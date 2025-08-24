import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Workflows", href: "#workflows" },
    { label: "Community", href: "#community" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div
            className="font-bold text-xl cursor-pointer hover:text-primary transition-colors duration-200"
            onClick={scrollToTop}
          >
            <span className="text-gradient">Parth Shah</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/14j702R9qTkHXqpT5cdWVFSNDL1fn8Y61/view?usp=sharing",
                  "_blank"
                )
              }
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-border mt-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 rounded-lg hover:bg-muted transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/14j702R9qTkHXqpT5cdWVFSNDL1fn8Y61/view?usp=sharing",
                    "_blank"
                  )
                }
                className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
