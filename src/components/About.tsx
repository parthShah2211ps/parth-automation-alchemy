import { useState, useEffect } from "react";
import professionalHeadshot from "@/assets/professional-headshot.jpg";

const About = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const rotatingTexts = [
    "Building products that save 20+ hours weekly",
    "Bridging technical and business teams",
    "Teaching 300+ PMs automation strategies",
    "Turning complex workflows into simple solutions"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <img
                  src={professionalHeadshot}
                  alt="Parth Shah - Professional Headshot"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-primary rounded-full opacity-20" />
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-success rounded-full opacity-30" />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="animate-slide-up">
            <h2 className="mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            
            {/* Dynamic rotating text */}
            <div className="mb-8">
              <div className="h-16 flex items-center">
                <p className="text-xl md:text-2xl font-semibold text-foreground transition-all duration-500">
                  {rotatingTexts[currentTextIndex]}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a <span className="text-primary font-semibold">Technical Product Manager</span> with a unique combination of hands-on development experience and strategic product thinking. My journey began as a full-stack developer, where I spent 3+ years building scalable applications and diving deep into the technical challenges that teams face every day.
              </p>
              
              <p>
                What sets me apart is my expertise in <span className="text-secondary font-semibold">n8n automation</span>. I've built over 50 production workflows that save teams hundreds of hours weekly. From automated feedback analysis to complex data pipelines, I turn manual processes into intelligent, self-running systems.
              </p>
              
              <p>
                Now, as a Product Manager, I bridge the gap between technical and business teams. I speak both languages fluently - whether it's discussing API architectures with engineers or ROI metrics with executives. This dual perspective helps me build products that are not just user-friendly, but also technically sound and scalable.
              </p>

              <p>
                Through workshops and community contributions, I've helped 300+ Product Managers learn automation strategies, sharing practical workflows that transform how teams operate. My <span className="text-success font-semibold">PM Automation Playbook</span> has been downloaded over 1,000 times and continues to help PMs worldwide.
              </p>
            </div>

            {/* Skills Preview */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="card-elegant p-4">
                <h4 className="font-semibold text-primary mb-2">Product Skills</h4>
                <p className="text-sm text-muted-foreground">User Research, Analytics, A/B Testing, Roadmapping</p>
              </div>
              <div className="card-elegant p-4">
                <h4 className="font-semibold text-secondary mb-2">Technical Skills</h4>
                <p className="text-sm text-muted-foreground">JavaScript, React, n8n, AI Integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;