import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  ExternalLink,
  Clock,
  BarChart3,
  Zap,
  Database,
  Brain,
  MessageSquare,
} from "lucide-react";
import workflowSample from "@/assets/n8n-workflow-sample.jpg";

const WorkflowsGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Workflows", icon: Zap },
    { id: "pm-operations", label: "PM Operations", icon: BarChart3 },
    { id: "data-processing", label: "Data Processing", icon: Database },
    { id: "ai-integration", label: "AI Integration", icon: Brain },
    { id: "communication", label: "Communication", icon: MessageSquare },
  ];

  const workflows = [
    {
      id: 1,
      name: "Feedback Sentiment Analysis Pipeline",
      description:
        "Automatically collects customer feedback from multiple sources, analyzes sentiment using AI, and creates actionable insights for product teams.",
      category: "ai-integration",
      timeSaved: "15 hours/week",
      downloads: 450,
      useCase: "Product teams processing customer feedback",
      complexity: "Advanced",
      featured: true,
      image: workflowSample,
      templateUrl: "#",
    },
    {
      id: 2,
      name: "Automated Metrics Dashboard",
      description:
        "Pulls data from various analytics platforms, processes KPIs, and automatically updates stakeholder dashboards with real-time insights.",
      category: "pm-operations",
      timeSaved: "12 hours/week",
      downloads: 320,
      useCase: "PMs tracking product metrics",
      complexity: "Intermediate",
      featured: true,
      image: workflowSample,
      templateUrl: "#",
    },
    {
      id: 3,
      name: "Competitive Intelligence Tracker",
      description:
        "Monitors competitor websites, pricing changes, and feature updates. Sends automated alerts when significant changes are detected.",
      category: "data-processing",
      timeSaved: "20 hours/week",
      downloads: 280,
      useCase: "Market research and competitive analysis",
      complexity: "Advanced",
      featured: true,
      image: workflowSample,
      templateUrl: "#",
    },
    {
      id: 4,
      name: "Feature Request Prioritization Engine",
      description:
        "Automatically categorizes and scores feature requests based on user impact, business value, and technical complexity using AI analysis.",
      category: "ai-integration",
      timeSaved: "8 hours/week",
      downloads: 195,
      useCase: "Product prioritization and roadmapping",
      complexity: "Advanced",
      featured: false,
      image: workflowSample,
      templateUrl: "#",
    },
    {
      id: 5,
      name: "Slack Team Standup Automation",
      description:
        "Collects daily standup updates from team members via Slack, compiles reports, and shares progress summaries with stakeholders.",
      category: "communication",
      timeSaved: "5 hours/week",
      downloads: 380,
      useCase: "Team communication and reporting",
      complexity: "Beginner",
      featured: false,
      image: workflowSample,
      templateUrl: "#",
    },
    {
      id: 6,
      name: "User Onboarding Analytics",
      description:
        "Tracks user behavior during onboarding, identifies drop-off points, and automatically creates improvement recommendations.",
      category: "data-processing",
      timeSaved: "10 hours/week",
      downloads: 240,
      useCase: "Onboarding optimization",
      complexity: "Intermediate",
      featured: false,
      image: workflowSample,
      templateUrl: "#",
    },
  ];

  const filteredWorkflows =
    activeCategory === "all"
      ? workflows
      : workflows.filter((workflow) => workflow.category === activeCategory);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Beginner":
        return "bg-success/20 text-success-dark border-success/30";
      case "Intermediate":
        return "bg-primary/20 text-primary-dark border-primary/30";
      case "Advanced":
        return "bg-secondary/20 text-secondary-dark border-secondary/30";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section id="workflows" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-6">
            n8n <span className="text-gradient">Workflows Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Production-ready automation workflows that have saved teams hundreds
            of hours. Download, customize, and deploy in minutes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`${
                  activeCategory === category.id
                    ? "bg-gradient-primary text-primary-foreground shadow-brand"
                    : "hover:bg-muted"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            );
          })}
        </div>

        {/* Workflows Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-scale-in">
          {filteredWorkflows.map((workflow, index) => (
            <Card
              key={workflow.id}
              className={`card-elegant group overflow-hidden ${
                workflow.featured ? "border-primary/50 shadow-brand" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Workflow Preview Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={workflow.image}
                  alt={`${workflow.name} workflow diagram`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {workflow.featured && (
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                  <Badge className={getComplexityColor(workflow.complexity)}>
                    {workflow.complexity}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge className="bg-success/90 text-success-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {workflow.timeSaved}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors duration-200">
                  {workflow.name}
                </CardTitle>
                <CardDescription className="text-sm">
                  {workflow.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Stats */}
                {/* <div className="flex justify-between items-center mb-4 text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">{workflow.downloads}</span>
                    </div>
                  </div>
                </div> */}

                {/* Use Case */}
                <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs font-medium text-muted-foreground mb-1">
                    Use Case:
                  </p>
                  <p className="text-sm">{workflow.useCase}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {/* <Button size="sm" className="flex-1" asChild>
                    <a
                      href={workflow.templateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Get Template
                    </a>
                  </Button> */}
                  {/* <Button size="sm" variant="outline" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 animate-fade-in">
          <div className="text-center card-elegant p-6">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Total Workflows</div>
          </div>
          {/* <div className="text-center card-elegant p-6">
            <div className="text-3xl font-bold text-secondary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Total Downloads</div>
          </div> */}
          <div className="text-center card-elegant p-6">
            <div className="text-3xl font-bold text-success mb-2">500+</div>
            <div className="text-sm text-muted-foreground">
              Hours Saved Weekly
            </div>
          </div>
          <div className="text-center card-elegant p-6">
            <div className="text-3xl font-bold text-purple-500 mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-4">
            Need Custom Automation?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I create bespoke n8n workflows tailored to your specific business
            needs. From simple integrations to complex AI-powered automations.
          </p>
          <Button
            className="btn-hero"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Custom Automation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkflowsGallery;
