import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, BarChart3, Zap, Brain, Database, Users, Workflow } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'product', label: 'Product Management' },
    { id: 'development', label: 'Development' },
    { id: 'automation', label: 'n8n Automation' },
    { id: 'ai', label: 'AI Integration' },
  ];

  const projects = [
    {
      id: 1,
      title: "AI-Powered Hospital Management System",
      description: "Comprehensive healthcare management platform with AI-driven patient insights, automated scheduling, and intelligent resource allocation.",
      category: "product",
      impact: "Reduced patient wait times by 40% and improved staff efficiency by 35%",
      techStack: ["React", "Node.js", "PostgreSQL", "OpenAI GPT-4", "n8n"],
      metrics: {
        users: "15,000+",
        timesSaved: "200 hours/week",
        satisfaction: "98%"
      },
      featured: true,
      icon: Brain,
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "n8n PM Automation Templates",
      description: "Collection of 25+ production-ready n8n workflows specifically designed for Product Managers, covering feedback analysis, competitor tracking, and metrics automation.",
      category: "automation",
      impact: "Downloaded 1,000+ times, saving PMs 20+ hours weekly each",
      techStack: ["n8n", "OpenAI API", "Google Sheets", "Slack", "Notion"],
      metrics: {
        downloads: "1,000+",
        timesSaved: "500+ hours/week",
        workflows: "25+"
      },
      featured: true,
      icon: Workflow,
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Sales CRM with GPT-4 Integration",
      description: "Modern CRM platform with AI-powered lead scoring, automated follow-ups, and intelligent sales insights to boost conversion rates.",
      category: "development",
      impact: "Increased sales team productivity by 60% and lead conversion by 45%",
      techStack: ["TypeScript", "React", "Express.js", "MongoDB", "GPT-4 API"],
      metrics: {
        conversion: "+45%",
        productivity: "+60%",
        leads: "10,000+"
      },
      featured: true,
      icon: BarChart3,
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Copyright Detection Platform",
      description: "Automated content copyright detection system using AI to identify potential violations across multiple platforms and channels.",
      category: "ai",
      impact: "Protected 500+ brands from copyright infringement with 95% accuracy",
      techStack: ["Python", "TensorFlow", "OpenCV", "n8n", "AWS"],
      metrics: {
        accuracy: "95%",
        brands: "500+",
        scanned: "1M+ items"
      },
      featured: false,
      icon: Database,
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Feedback Intelligence System",
      description: "Automated customer feedback analysis platform that aggregates reviews from multiple sources and provides actionable insights using sentiment analysis.",
      category: "product",
      impact: "Processed 100K+ feedback items, improving product decisions by 70%",
      techStack: ["React", "Python", "NLP Models", "n8n", "PostgreSQL"],
      metrics: {
        feedback: "100K+",
        accuracy: "92%",
        insights: "1,000+"
      },
      featured: false,
      icon: Users,
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Automated Competitive Intelligence",
      description: "n8n-powered workflow that automatically tracks competitor activities, pricing changes, and feature updates across multiple platforms.",
      category: "automation",
      impact: "Monitors 50+ competitors 24/7, providing real-time market insights",
      techStack: ["n8n", "Web Scraping", "Slack", "Notion", "Chart.js"],
      metrics: {
        competitors: "50+",
        updates: "Daily",
        alerts: "Real-time"
      },
      featured: false,
      icon: Zap,
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of impactful projects spanning product management, development, and automation expertise
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`${
                activeFilter === filter.id 
                  ? "bg-gradient-primary text-primary-foreground shadow-brand" 
                  : "hover:bg-muted"
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-scale-in">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={project.id} 
                className={`card-elegant group cursor-pointer ${
                  project.featured ? 'border-primary/50 shadow-brand' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Icon className={`w-8 h-8 ${
                      project.category === 'product' ? 'text-primary' :
                      project.category === 'development' ? 'text-secondary' :
                      project.category === 'automation' ? 'text-success' :
                      'text-purple-500'
                    }`} />
                    {project.featured && (
                      <Badge className="bg-gradient-primary text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {/* Impact */}
                  <div className="mb-4 p-3 bg-success/10 rounded-lg border border-success/20">
                    <p className="text-sm font-medium text-success-dark">
                      Impact: {project.impact}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-bold text-foreground">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.techStack.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-4">Interested in collaborating?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always excited to work on innovative projects that combine product strategy with technical excellence.
          </p>
          <Button className="btn-hero" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Let's Build Something Amazing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;