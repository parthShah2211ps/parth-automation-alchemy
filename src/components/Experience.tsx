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
  Building,
  Code,
  Briefcase,
  Calendar,
  MapPin,
  TrendingUp,
} from "lucide-react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("product");

  const productExperience = [
    {
      id: 1,
      title: "Software Engineer (Product-Focused)",
      company: "eSparkBiz",
      location: "Ahmedabad, India",
      duration: "Jan 2023 - Present",
      type: "Full-time",
      achievements: [
        "Built TypeScript-based microservice architecture for healthcare and CRM platforms serving 10,000+ daily users",
        "Conducted 20+ user interviews for Hospital Management System, reduced patient wait time by 40%",
        "Improved client adoption by 35% through scalable RESTful APIs and user-centered design approach",
        "Created 20+ n8n automation workflows saving teams 15+ hours weekly in manual processes",
        "Implemented feature flagging system for A/B testing, improving conversion rates by 25%",
      ],
      technologies: [
        "TypeScript",
        "React.js",
        "Node.js",
        "MySQL",
        "n8n",
        "AWS",
        "OpenAI API",
        "Product Analytics",
      ],
      impact:
        "Contributing to $2M+ ARR through product improvements and automation solutions",
    },
    {
      id: 2,
      title: "Product Management Transition",
      company: "Product Space + Self-Learning",
      location: "Pan-India",
      duration: "2023 - Present",
      type: "Training + Practical Application",
      achievements: [
        "Completed 8-month intensive PM training at Product Space with hands-on projects",
        "Conducted 100+ user interviews across healthcare, CRM, and maritime product domains",
        "Built PM Automation Playbook with 25+ n8n templates",
        "Trained 300+ product managers on automation strategies through workshops",
        "Ran 20+ A/B experiments leading to cumulative 30% conversion improvement across projects",
      ],
      technologies: [
        "Product Analytics",
        "A/B Testing",
        "User Research",
        "n8n Platform",
        "Automation Strategy",
        "OKRs",
      ],
      impact: "Achieved 300% engagement growth in PM automation community",
    },
  ];

  const engineeringExperience = [
    {
      id: 1,
      title: "Software Engineer",
      company: "eSparkBiz",
      location: "Ahmedabad, India",
      duration: "Jan 2023 - Present",
      type: "Full-time",
      achievements: [
        "Developed TypeScript-based microservice architecture for healthcare and CRM platforms",
        "Built dynamic form generators with React.js increasing user engagement by 25%",
        "Collaborated with DevOps teams to establish CI/CD pipelines using Jenkins and AWS services",
        "Created n8n workflows for automated patient data processing and system integrations",
        "Maintained 99.9% uptime across multiple production systems serving 15,000+ users",
      ],
      technologies: [
        "TypeScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "MongoDB",
        "n8n",
        "AWS",
        "Jenkins",
      ],
      impact:
        "Delivered projects 30% faster through automation and optimized development processes",
    },
    {
      id: 2,
      title: "JavaScript Developer",
      company: "BinStellar Technologies Pvt. Ltd.",
      location: "Ahmedabad, India",
      duration: "Mar 2022 - Dec 2022",
      type: "Full-time",
      achievements: [
        "Built RESTful APIs and real-time applications with Node.js serving 5,000+ maritime users",
        "Implemented TypeScript for improved code quality reducing bug reports by 40%",
        "Deployed microservices using AWS EC2 instances achieving 99.9% uptime",
        "Improved application performance by 50% through optimized MySQL queries and Redis caching",
        "Built real-time chat application with WebSocket connections and microservice architecture",
      ],
      technologies: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MySQL",
        "Redis",
        "AWS EC2",
        "WebSocket",
      ],
      impact:
        "Platform served 1K+ concurrent users with real-time capabilities and zero downtime",
    },
    {
      id: 3,
      title: "n8n Automation Specialist",
      company: "Community Workshops & Freelance",
      location: "Remote",
      duration: "2024 - Present",
      type: "Part-time + Community",
      achievements: [
        "Built 50+ production n8n workflows integrating OpenAI, Claude, and Gemini APIs",
        "Trained 100+ developers through hands-on automation workshops across India",
        "Created custom n8n nodes for specialized AI operations and workflow optimization",
        "Reduced AI API costs by 45% through intelligent caching and model selection workflows",
        // "Published 20+ automation templates",
        // with 2, 500+ downloads on n8n community
      ],
      technologies: [
        "n8n Platform",
        "OpenAI API",
        "Claude API",
        "Webhook Integration",
        "JavaScript",
        "API Automation",
      ],
      impact:
        "Community automations save 100+ hours weekly across organizations",
    },
  ];

  // Key Projects Array
  const keyProjects = [
    {
      id: 1,
      title: "AI-Powered Hospital Management System",
      company: "eSparkBiz",
      duration: "Nov 2024 - Present",
      role: "Technical Lead & Product Owner",
      achievements: [
        "Architected microservice system serving 10,000+ daily users across 5 hospitals",
        "Conducted user research with 20+ healthcare professionals to identify workflow bottlenecks",
        "Built feature flagging system for gradual rollouts and A/B testing capabilities",
        "Created n8n workflows automating appointment scheduling (saves 3 hours daily)",
        "Integrated OpenEMR with custom modules hosted on AWS EC2 infrastructure",
      ],
      technologies: [
        "TypeScript",
        "React.js",
        "Node.js",
        "MySQL",
        "OpenEMR",
        "AWS EC2",
        "n8n",
        "GitHub Actions",
      ],
      automationFeatures: [
        "Patient appointment scheduling automation",
        "Automated report generation and patient follow-ups",
        "Real-time bed availability tracking system",
        "Insurance verification workflow automation",
      ],
      impact:
        "40% reduction in patient wait time, 35% increase in staff efficiency",
    },
    {
      id: 2,
      title: "AI-Driven Sales CRM Platform",
      company: "eSparkBiz",
      duration: "Jun 2023 - May 2024",
      role: "Full-Stack Developer & Product Analyst",
      achievements: [
        "Built CRM serving 500+ sales reps with GPT-4 powered lead scoring system",
        "Improved deal closure rate by 25% through AI-powered insights and automation",
        "Implemented semantic search using OpenAI embeddings across 100K+ customer records",
        "Created AI email writer using fine-tuned GPT-3.5 with company-specific training",
        "Built n8n workflow: Slack → GPT analysis → CRM update → automated follow-up",
      ],
      technologies: [
        "TypeScript",
        "React.js",
        "Node.js",
        "MySQL",
        "GPT-4",
        "OpenAI API",
        "Claude API",
        "n8n",
      ],
      automationFeatures: [
        "Automated lead scoring with real-time alerts",
        "Whisper API call transcription with CRM logging",
        "AI chatbot for customer queries (70% deflection rate)",
        "Predictive analytics for churn prediction",
      ],
      impact:
        "35% improvement in conversion rates, 15 hours/week saved per sales rep",
    },
    {
      id: 3,
      title: "Real-time Vessel Management Platform",
      company: "BinStellar Technologies",
      duration: "Jun 2022 - Dec 2022",
      role: "Backend Developer & Product Contributor",
      achievements: [
        "Built Node.js backend serving 1K+ concurrent maritime users with 99.9% uptime",
        "Integrated GPT-3.5 for automated port communication and vessel routing optimization",
        "Implemented WebSocket connections for real-time vessel tracking and updates",
        "Conducted user sessions with 10+ vessel operators, improved engagement by 45%",
        "Built AI-powered anomaly detection for vessel behavior monitoring",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "MySQL",
        "WebSocket",
        "GPT-3.5",
        "Azure Pipelines",
      ],
      automationFeatures: [
        "Real-time vessel position tracking automation",
        "Port arrival/departure documentation generation",
        "Crew management and scheduling workflows",
        "Maintenance scheduling based on usage patterns",
      ],
      impact:
        "Platform serving 5K+ maritime users, 30% reduction in support tickets",
    },
    {
      id: 4,
      title: "Copyright Detection Platform",
      company: "eSparkBiz",
      duration: "Apr 2024 - Nov 2024",
      role: "Full-Stack Developer & Product Strategist",
      achievements: [
        "Built scraping system processing 1M+ documents daily with 92% detection accuracy",
        "Designed microservice architecture for distributed content scanning at scale",
        "Conducted competitive analysis of 10+ similar tools to identify differentiation strategy",
        "Integrated PostgreSQL and Redis with Express middleware for efficient processing",
        "Reduced customer churn by 20% through feature prioritization based on user feedback",
      ],
      technologies: [
        "Svelte",
        "TypeScript",
        "Express.js",
        "PostgreSQL",
        "Redis",
        "AWS Lambda",
        "n8n",
      ],
      automationFeatures: [
        "Automated content scraping and analysis workflows",
        "Real-time copyright violation alerting system",
        "Batch processing automation for large document sets",
        "Automated reporting and compliance documentation",
      ],
      impact:
        "Processing 1M+ documents daily, 92% detection accuracy, 20% churn reduction",
    },
  ];

  // n8n Automation Portfolio
  const automationPortfolio = {
    title: "n8n Automation Expert & Community Instructor",
    duration: "2024 - Present",
    totalWorkflows: "50+ Production Workflows",
    communityImpact: "200+ Developers Trained",

    keyWorkflows: [
      {
        name: "Feedback Intelligence System",
        description: "Slack → Notion automation with sentiment analysis",
        impact: "Reduced processing time from 8 hours to 30 minutes",
        technologies: ["n8n", "Slack API", "Notion API", "OpenAI API"],
      },
      {
        name: "Real-time Metrics Dashboard",
        description: "Automated funnel tracking with threshold alerts",
        impact: "3x faster response to conversion drops",
        technologies: ["n8n", "Google Analytics API", "Slack API", "Airtable"],
      },
      {
        name: "Competitive Intelligence System",
        description: "Web scraping + Airtable workflow tracking competitors",
        impact: "Identified opportunities leading to 12% revenue increase",
        technologies: ["n8n", "Web Scraping", "Airtable API", "Claude API"],
      },
      {
        name: "AI-Powered Lead Scoring",
        description: "Multi-model routing: GPT-4 analysis + Claude reasoning",
        impact: "Improved lead qualification accuracy by 40%",
        technologies: ["n8n", "OpenAI API", "Claude API", "CRM Integration"],
      },
      {
        name: "User Research Pipeline",
        description:
          "Interview scheduling → transcription → insight extraction",
        impact: "Automated 80% of user research workflow",
        technologies: ["n8n", "Calendar API", "Whisper API", "Notion API"],
      },
    ],

    communityContributions: [
      {
        type: "Templates Published",
        count: "20+ PM-specific templates",
        downloads: "15+ downloads globally",
      },
      {
        type: "Workshop Training",
        count: "300+ product managers trained",
        topic: "PM Operations Automation",
      },
      {
        type: "Content Creation",
        count: "PM Automation 101 video series",
        reach: "5,000+ views",
      },
      {
        type: "Open Source",
        count: "PM-n8n-Toolkit repository",
        stars: "300+ GitHub stars",
      },
    ],
  };

  // Skills organized by category
  const technicalSkills = {
    languages: ["JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
    frameworks: ["React.js", "Node.js", "Express.js", "Svelte", "Next.js"],
    databases: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
    cloud: ["AWS EC2", "AWS S3", "AWS Lambda", "Azure Pipelines"],
    automation: [
      "n8n (Expert)",
      "API Integration",
      "Webhook Architecture",
      "Workflow Design",
    ],
    ai: [
      "OpenAI API",
      "Claude API",
      "LangChain",
      "Vector Databases",
      "RAG Implementation",
    ],
  };

  const productSkills = {
    research: [
      "User Interviews",
      "A/B Testing",
      "Analytics",
      "Competitive Analysis",
    ],
    frameworks: ["RICE Prioritization", "OKRs", "Agile/Scrum", "MoSCoW Method"],
    tools: [
      "Mixpanel",
      "Google Analytics",
      "Amplitude",
      "Figma",
      "JIRA",
      "Notion",
    ],
    leadership: [
      "Workshop Instruction",
      "Community Building",
      "Technical Documentation",
      "Stakeholder Management",
    ],
  };

  const tabs = [
    {
      id: "engineering",
      label: "Engineering",
      icon: Code,
      data: engineeringExperience,
    },
    {
      id: "product",
      label: "Product Management",
      icon: Briefcase,
      data: productExperience,
    },
  ];

  const activeData = tabs.find((tab) => tab.id === activeTab)?.data || [];

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey from hands-on development to strategic product leadership,
            bridging technical expertise with business impact
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
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-primary rounded-full transform -translate-x-1/2 md:translate-x-[-50%] border-4 border-background shadow-lg z-10" />

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
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
                        <h4 className="font-semibold mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-2">
                          Technologies & Skills:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {experience.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs"
                            >
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
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">
                Years Total Experience
              </div>
            </div>
            <div className="card-elegant p-6">
              <div className="text-3xl font-bold text-secondary mb-2">1+</div>
              <div className="text-sm text-muted-foreground">
                Years in Product Management
              </div>
            </div>
            <div className="card-elegant p-6">
              <div className="text-3xl font-bold text-success mb-2">3+</div>
              <div className="text-sm text-muted-foreground">
                Years in Development
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
