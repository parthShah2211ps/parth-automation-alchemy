import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Code, Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState('product');

  const productExperience = [
    {
      id: 1,
      title: "Senior Product Manager",
      company: "TechFlow Solutions",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      type: "Full-time",
      achievements: [
        "Led product strategy for healthcare automation platform serving 15,000+ users",
        "Reduced customer onboarding time by 60% through workflow optimization",
        "Increased user engagement by 45% with AI-powered feature recommendations",
        "Managed cross-functional team of 12 engineers, designers, and data analysts"
      ],
      technologies: ["Product Analytics", "A/B Testing", "User Research", "Agile", "n8n"],
      impact: "Drove $2M ARR growth through product innovation"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "AutomateNow",
      location: "Remote",
      duration: "2021 - 2022",
      type: "Full-time",
      achievements: [
        "Built and launched n8n automation marketplace from 0 to 1,000+ templates",
        "Established product metrics framework, improving decision-making speed by 40%",
        "Conducted 100+ user interviews to identify key pain points and opportunities",
        "Collaborated with engineering team to deliver 15+ major feature releases"
      ],
      technologies: ["n8n Platform", "API Design", "User Testing", "Roadmapping"],
      impact: "Achieved 300% user growth in 12 months"
    }
  ];

  const engineeringExperience = [
    {
      id: 1,
      title: "Full-Stack Developer",
      company: "DevCraft Studios",
      location: "Austin, TX",
      duration: "2020 - 2021",
      type: "Full-time",
      achievements: [
        "Developed and maintained 8+ client applications using React and Node.js",
        "Built automated testing framework reducing bug reports by 70%",
        "Optimized database queries improving application performance by 50%",
        "Mentored 3 junior developers and established code review processes"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      impact: "Delivered projects 25% faster than industry average"
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "StartupLab",
      location: "San Jose, CA",
      duration: "2019 - 2020",
      type: "Full-time",
      achievements: [
        "Built MVP for SaaS platform that secured $1M seed funding",
        "Implemented real-time features using WebSocket and Redis",
        "Created automated deployment pipeline reducing deployment time by 80%",
        "Contributed to open-source projects with 500+ GitHub stars"
      ],
      technologies: ["JavaScript", "Python", "MongoDB", "Redis", "CI/CD"],
      impact: "Helped company achieve Series A funding"
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "CodeFirst Agency",
      location: "Los Angeles, CA",
      duration: "2018 - 2019",
      type: "Full-time",
      achievements: [
        "Developed responsive websites for 20+ clients across various industries",
        "Learned and implemented modern JavaScript frameworks and tools",
        "Collaborated with design team to create pixel-perfect implementations",
        "Maintained and updated legacy systems while learning best practices"
      ],
      technologies: ["HTML/CSS", "JavaScript", "PHP", "WordPress", "MySQL"],
      impact: "Achieved 98% client satisfaction rate"
    }
  ];

  const tabs = [
    { id: 'product', label: 'Product Management', icon: Briefcase, data: productExperience },
    { id: 'engineering', label: 'Engineering', icon: Code, data: engineeringExperience },
  ];

  const activeData = tabs.find(tab => tab.id === activeTab)?.data || [];

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey from hands-on development to strategic product leadership, bridging technical expertise with business impact
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 animate-slide-up">
          <div className="flex p-1 bg-muted rounded-lg">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  className={`${
                    activeTab === tab.id 
                      ? "bg-background text-foreground shadow-md" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="relative animate-scale-in">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-success transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {activeData.map((experience, index) => (
              <div 
                key={experience.id}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-primary rounded-full transform -translate-x-1/2 md:translate-x-[-50%] border-4 border-background shadow-lg z-10" />

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <Card className="card-elegant group hover:shadow-brand transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Building className="w-5 h-5 text-primary" />
                          <Badge variant="secondary">{experience.type}</Badge>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1 mt-1">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors duration-200">
                        {experience.title}
                      </CardTitle>
                      <CardDescription className="text-base font-medium">
                        {experience.company}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      {/* Impact Highlight */}
                      <div className="mb-4 p-3 bg-success/10 rounded-lg border border-success/20">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-success" />
                          <span className="text-sm font-medium text-success-dark">
                            {experience.impact}
                          </span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-2">Technologies & Skills:</h4>
                        <div className="flex flex-wrap gap-1">
                          {experience.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Summary */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-elegant p-6">
              <div className="text-3xl font-bold text-primary mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Years Total Experience</div>
            </div>
            <div className="card-elegant p-6">
              <div className="text-3xl font-bold text-secondary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years in Product Management</div>
            </div>
            <div className="card-elegant p-6">
              <div className="text-3xl font-bold text-success mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years in Development</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;