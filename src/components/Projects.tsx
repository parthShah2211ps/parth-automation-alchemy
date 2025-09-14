import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ExternalLink,
  Github,
  BarChart3,
  Zap,
  Brain,
  Database,
  Users,
  Workflow,
} from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "development", label: "Full-Stack Development" },
    { id: "automation", label: "n8n Automation" },
    { id: "ai", label: "AI Integration" },
    { id: "product", label: "Product Management" },
  ];

  const projects = [
    // ===== FULL-STACK DEVELOPMENT PROJECTS =====
    {
      id: 1,
      title: "Hospital Management System",
      description:
        "Comprehensive healthcare management platform with patient data management, appointment scheduling, and medical records. Built with TypeScript-based microservice architecture.",
      category: "development",
      company: "eSparkBiz",
      period: "Nov 2024 - Present",
      domains: ["development"],
      impact:
        "Architected microservice-based system serving healthcare operations",
      techStack: [
        "TypeScript",
        "Node.js",
        "React.js",
        "MySQL",
        "PostgreSQL",
        "AWS EC2",
        "GitHub Actions",
      ],
      metrics: {
        architecture: "Microservices",
        database: "Optimized MySQL",
        deployment: "AWS EC2",
        integration: "OpenEMR",
      },
      featured: true,
      icon: "Database",
      achievements: [
        "Architected microservice-based system using TypeScript, Node.js, and React.js",
        "Implemented MySQL databases with optimized query structure for patient data",
        "Worked on OpenEMR integration and hosted using AWS EC2",
        "Utilized GitHub Actions for continuous integration and automated testing",
        "Built scalable backend APIs for healthcare data management",
      ],
      demoUrl: "#",
      //githubUrl: "#",
    },
    {
      id: 2,
      title: "Sales CRM System",
      description:
        "TypeScript-based sales CRM with dynamic form builder, microservice architecture, and real-time data synchronization using Debezium for scalable sales operations.",
      category: "development",
      company: "eSparkBiz",
      period: "Jun 2023 - May 2024",
      domains: ["development"],
      impact:
        "Engineered scalable CRM serving sales teams with dynamic form generation",
      techStack: [
        "TypeScript",
        "React.js",
        "Express.js",
        "MySQL",
        "Debezium",
        "AWS EC2",
        "AWS S3",
      ],
      metrics: {
        forms: "Dynamic Builder",
        sync: "Real-time",
        storage: "AWS S3",
        architecture: "Microservices",
      },
      featured: true,
      icon: "Users",
      achievements: [
        "Engineered TypeScript-based dynamic form builder with React.js frontend",
        "Designed scalable microservices using Express.js, MySQL, and Debezium",
        "Implemented Git branching strategies for feature development",
        "Utilized AWS EC2 and S3 for application deployment and document storage",
        "Built real-time data synchronization for CRM operations",
      ],
      demoUrl: "#",
      //githubUrl: "#",
    },
    {
      id: 3,
      title: "Copyright Scraping Tool",
      description:
        "Advanced web scraping system built with Svelte, TypeScript, and Express.js for copyright protection with microservice architecture and distributed content scanning.",
      category: "development",
      company: "eSparkBiz",
      period: "Apr 2024 - Nov 2024",
      domains: ["development"],
      impact:
        "Built scalable scraping system for copyright protection with distributed processing",
      techStack: [
        "Svelte",
        "TypeScript",
        "Express.js",
        "PostgreSQL",
        "Redis",
        "AWS Lambda",
        "Git",
      ],
      metrics: {
        architecture: "Microservices",
        processing: "Distributed",
        storage: "PostgreSQL + Redis",
        deployment: "AWS Lambda",
      },
      featured: false,
      icon: "Globe",
      achievements: [
        "Built scraping system in Svelte, TypeScript, and Express.js for copyright protection",
        "Designed microservice architecture to handle distributed content scanning at scale",
        "Integrated PostgreSQL and Redis with Express middleware for efficient data processing",
        "Used Git for version control and AWS Lambda for serverless processing components",
        "Implemented scalable content analysis and processing pipelines",
      ],
      demoUrl: "#",
      //githubUrl: "#",
    },
    {
      id: 4,
      title: "Vessel Management Backend",
      description:
        "Real-time maritime platform built with Node.js and TypeScript serving 1K+ concurrent users with WebSocket communication, vessel tracking, and crew management.",
      category: "development",
      company: "BinStellar Technologies",
      period: "Jun 2022 - Dec 2022",
      domains: ["development"],
      impact:
        "Built scalable backend serving 1K+ concurrent maritime users with real-time features",
      techStack: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "MySQL",
        "WebSocket",
        "Azure Pipelines",
        "GitHub",
      ],
      metrics: {
        concurrent: "1,000+",
        users: "5,000+ total",
        uptime: "99.9%",
        communication: "Real-time",
      },
      featured: false,
      icon: "Anchor",
      achievements: [
        "Built Node.js and Express-based backend with TypeScript for type safety",
        "Designed microservice architecture for scalable real-time communication features",
        "Implemented WebSocket connections with MySQL database integration",
        "Managed code using GitHub repositories and deployed through Azure Pipelines",
        "Achieved 99.9% uptime with efficient database and connection handling",
      ],
      demoUrl: "#",
      //githubUrl: "#",
    },

    // ===== N8N AUTOMATION PROJECTS =====
    {
      id: 5,
      title: "Hospital Management n8n Workflows",
      description:
        "Automated healthcare workflows for patient data processing, appointment scheduling, and system integrations using n8n automation platform.",
      category: "automation",
      company: "eSparkBiz",
      period: "Nov 2024 - Present",
      domains: ["automation"],
      impact:
        "Automated patient data processing and system integrations for healthcare operations",
      techStack: [
        "n8n",
        "MySQL",
        "Healthcare APIs",
        "Webhook Integration",
        "Process Automation",
      ],
      metrics: {
        workflows: "Healthcare focused",
        integration: "System-wide",
        automation: "Patient processing",
        efficiency: "Improved",
      },
      featured: false,
      icon: "Workflow",
      achievements: [
        "Created n8n workflows for automated patient data processing and system integrations",
        "Built appointment scheduling and notification automation workflows",
        "Implemented healthcare system integrations using n8n webhook capabilities",
        "Automated routine healthcare administrative processes",
        "Integrated multiple healthcare systems for seamless data flow",
      ],
      demoUrl: "#",
      //githubUrl: "#",
    },
    {
      id: 6,
      title: "Sales CRM n8n Automation",
      description:
        "Comprehensive n8n automation workflows for CRM operations including data synchronization, automated notifications, and sales process optimization.",
      category: "automation",
      company: "eSparkBiz",
      period: "Jun 2023 - May 2024",
      domains: ["automation"],
      impact:
        "Built n8n workflows for CRM automation, data sync and notifications",
      techStack: [
        "n8n",
        "MySQL",
        "CRM APIs",
        "Slack Integration",
        "Webhook Automation",
        "Data Sync",
      ],
      metrics: {
        workflows: "CRM focused",
        sync: "Automated",
        notifications: "Real-time",
        integration: "Multi-platform",
      },
      featured: false,
      icon: "GitBranch",
      achievements: [
        "Built n8n workflows for CRM automation, including data sync and notifications",
        "Created automated sales process workflows and lead management",
        "Implemented webhook integrations for real-time CRM updates",
        "Automated sales team notifications and follow-up processes",
        "Integrated CRM with multiple external systems using n8n",
      ],
      demoUrl: "#",
      //githubUrl: "#",
    },
    {
      id: 8,
      title: "n8n PM Automation Templates",
      description:
        "Collection of 25+ production-ready n8n workflows specifically designed for Product Managers, covering feedback analysis, competitor tracking, and metrics automation.",
      category: "automation",
      company: "Open Source Community",
      period: "2024 - Present",
      domains: ["automation"],
      impact: "Saving PMs 20+ hours weekly each",
      techStack: [
        "n8n",
        "Google Sheets",
        "Slack",
        "Notion",
        "Airtable",
        "Webhook Integration",
        "API Automation",
      ],
      metrics: {
        downloads: "1,000+",
        templates: "25+",
        timesSaved: "500+ hours/week",
        stars: "300+ GitHub",
      },
      featured: true,
      icon: "Package",
      achievements: [
        "Created 25+ production-ready n8n workflows for Product Managers",
        "Built feedback aggregation and competitive intelligence templates",
        "Published popular 'PM-n8n-Toolkit' repository with 300+ stars",
        "Trained 300+ product managers through workshops on automation",
        "Created PM Automation Playbook with 1K+ downloads",
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/parthshah/PM-n8n-Toolkit",
    },

    // ===== AI INTEGRATION PROJECTS =====
    {
      id: 9,
      title: "Hospital Management AI Integration",
      description:
        "AI-powered enhancements for hospital management system including patient insights, intelligent resource allocation, and automated decision support using OpenAI GPT-4.",
      category: "ai",
      company: "eSparkBiz",
      period: "Nov 2024 - Present",
      domains: ["ai"],
      impact:
        "Reduced patient wait times by 40% and improved staff efficiency by 35%",
      techStack: [
        "OpenAI GPT-4",
        "Patient Analytics",
        "Resource Optimization",
        "Decision Support",
        "Healthcare AI",
      ],
      metrics: {
        waitTime: "-40%",
        efficiency: "+35%",
        patients: "15,000+",
        insights: "AI-driven",
      },
      featured: true,
      icon: "Brain",
      achievements: [
        "Integrated OpenAI GPT-4 for intelligent patient insights and predictions",
        "Built AI-driven resource allocation system for hospital operations",
        "Implemented automated decision support for healthcare staff",
        "Created intelligent scheduling system reducing wait times by 40%",
        "Enhanced patient care through AI-powered analytics and insights",
      ],
      demoUrl: "#",
      //githubUrl: "#",
    },
    {
      id: 10,
      title: "AI-Driven Sales CRM Platform",
      description:
        "Advanced AI integration for sales CRM with GPT-4 powered lead scoring, sentiment analysis, automated email writing, and intelligent sales insights serving 500+ sales reps.",
      category: "ai",
      company: "eSparkBiz",
      period: "Jun 2023 - May 2024",
      domains: ["ai"],
      impact:
        "Improved conversion by 35%, achieved 70% query deflection rate with AI chatbot",
      techStack: [
        "GPT-4",
        "GPT-3.5",
        "Whisper API",
        "Claude API",
        "OpenAI Embeddings",
        "LangChain",
        "Sentiment Analysis",
      ],
      metrics: {
        conversion: "+35%",
        users: "500+ reps",
        deflection: "70%",
        records: "100K+",
      },
      featured: true,
      icon: "Sparkles",
      achievements: [
        "Built GPT-4 powered lead scoring system analyzing email sentiment and interaction patterns",
        "Created AI email writer using fine-tuned GPT-3.5 with company tone/voice training",
        "Integrated Whisper API for call transcription with automatic CRM activity logging",
        "Built semantic search using OpenAI embeddings across 100K+ customer records",
        "Created AI chatbot using Claude API with 70% query deflection rate",
      ],
      demoUrl: "#",
      //githubUrl: "#",
    },
    {
      id: 11,
      title: "Real-time Vessel Management AI Platform",
      description:
        "Enhanced maritime platform with GPT-3.5 integration for automated port communication, vessel routing optimization, and AI-powered anomaly detection for crew assistance.",
      category: "ai",
      company: "BinStellar Technologies",
      period: "Jun 2022 - Dec 2022",
      domains: ["ai"],
      impact:
        "Added intelligent communication and routing optimization to maritime operations",
      techStack: [
        "GPT-3.5",
        "Anomaly Detection",
        "Chatbot Integration",
        "Maritime APIs",
        "Communication Automation",
      ],
      metrics: {
        users: "1K+ concurrent",
        optimization: "Routing & Communication",
        monitoring: "AI-powered",
        support: "Automated",
      },
      featured: false,
      icon: "Compass",
      achievements: [
        "Integrated GPT-3.5 for automated port communication and documentation",
        "Implemented AI-powered anomaly detection for vessel behavior monitoring",
        "Built chatbot for crew assistance and operational queries",
        "Optimized vessel routing using AI algorithms and real-time data",
        "Enhanced maritime safety through intelligent monitoring systems",
      ],
      demoUrl: "#",
      //githubUrl: "#",
    },

    // ===== CORE DEVELOPMENT PROJECTS (From CV) =====
    {
      id: 12,
      title: "Vessel Management Backend",
      description:
        "Real-time maritime platform built with Node.js and TypeScript serving 1K+ concurrent users with WebSocket communication, vessel tracking, and crew management features.",
      category: "development",
      company: "BinStellar Technologies",
      period: "Jun 2022 - Dec 2022",
      domains: ["development"],
      impact:
        "Built platform serving 1K+ concurrent maritime users with 99.9% uptime",
      techStack: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "MySQL",
        "WebSocket",
        "Azure Pipelines",
        "GitHub",
      ],
      metrics: {
        concurrent: "1,000+",
        users: "5,000+ total",
        uptime: "99.9%",
        communication: "Real-time",
      },
      featured: false,
      icon: "Anchor",
      achievements: [
        "Built Node.js and Express-based chat app with TypeScript for type safety",
        "Designed microservice architecture for scalable real-time communication features",
        "Implemented WebSocket connections with MySQL database integration for data persistence",
        "Managed code using GitHub repositories and deployed through Azure Pipelines",
        "Achieved 99.9% uptime with optimized database queries and connection handling",
      ],
      demoUrl: "#",
      //githubUrl: "#",
    },
    {
      id: 13,
      title: "Healthcare RESTful API Development",
      description:
        "Scalable RESTful APIs for healthcare platform using Node.js and Express with TypeScript, focusing on patient data management and system integrations.",
      category: "development",
      company: "eSparkBiz",
      period: "Jan 2023 - Present",
      domains: ["development"],
      impact:
        "Developed scalable RESTful APIs improving client adoption by 35%",
      techStack: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "MySQL",
        "RESTful APIs",
        "AWS EC2",
        "Jenkins",
      ],
      metrics: {
        adoption: "+35%",
        apis: "RESTful",
        performance: "Optimized",
        integration: "Healthcare",
      },
      featured: false,
      icon: "Server",
      achievements: [
        "Development of TypeScript-based microservice architecture for healthcare platforms",
        "Implemented scalable RESTful APIs using Node.js and Express improving client adoption by 35%",
        "Utilized Git version control and GitHub for collaborative development and code reviews",
        "Designed and maintained MySQL databases for efficient data storage and retrieval",
        "Collaborated with DevOps teams to establish CI/CD pipelines using Jenkins and AWS services",
      ],
      demoUrl: "#",
      //githubUrl: "#",
    },
    {
      id: 14,
      title: "CRM RESTful API Development",
      description:
        "Backend API development for CRM platforms with focus on scalability, performance optimization, and database management using Node.js and Express.",
      category: "development",
      company: "eSparkBiz",
      period: "Jan 2023 - Present",
      domains: ["development"],
      impact:
        "Built scalable APIs for CRM platforms with improved performance and maintainability",
      techStack: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "MySQL",
        "RESTful APIs",
        "Git",
        "AWS",
      ],
      metrics: {
        apis: "Scalable",
        performance: "Optimized",
        databases: "MySQL",
        architecture: "Microservices",
      },
      featured: false,
      icon: "Code",
      achievements: [
        "Development of TypeScript-based microservice architecture for CRM platforms",
        "Implemented scalable RESTful APIs using Node.js and Express",
        "Developed dynamic form generators with React.js and TypeScript for enhanced UX",
        "Designed and maintained MySQL databases for efficient data operations",
        "Established collaborative development practices with Git and GitHub",
      ],
      demoUrl: "#",
      //githubUrl: "#",
    },
    {
      id: 15,
      title: "JavaScript API Development",
      description:
        "RESTful APIs and real-time applications built with Node.js and Express, featuring performance optimization through MySQL queries and Redis caching.",
      category: "development",
      company: "BinStellar Technologies",
      period: "Mar 2022 - Dec 2022",
      domains: ["development"],
      impact:
        "Built performant APIs with optimized MySQL queries and Redis caching strategies",
      techStack: [
        "JavaScript",
        "Node.js",
        "Express.js",
        "MySQL",
        "Redis",
        "AWS EC2",
        "Git",
        "GitHub",
      ],
      metrics: {
        apis: "RESTful",
        caching: "Redis optimized",
        performance: "Improved",
        deployment: "AWS EC2",
      },
      featured: false,
      icon: "Terminal",
      achievements: [
        "Built RESTful APIs and real-time applications with Node.js and Express",
        "Implemented TypeScript for improved code quality and maintainability",
        "Deployed microservices using AWS EC2 instances for development environments",
        "Maintained version control with Git and GitHub for feature branching",
        "Improved application performance through optimized MySQL queries and Redis caching",
      ],
      demoUrl: "#",
      //githubUrl: "#",
    },

    // ===== N8N AUTOMATION PROJECTS =====
    {
      id: 16,
      title: "n8n PM Automation Templates",
      description:
        "Collection of 25+ production-ready n8n workflows specifically designed for Product Managers, covering feedback analysis, competitor tracking, and metrics automation.",
      category: "automation",
      company: "Open Source Community",
      period: "2024 - Present",
      domains: ["automation"],
      impact: "Saving PMs 20+ hours weekly each",
      techStack: [
        "n8n",
        "Google Sheets",
        "Slack",
        "Notion",
        "Airtable",
        "Webhook Integration",
        "API Automation",
      ],
      metrics: {
        downloads: "1,000+",
        templates: "25+",
        timesSaved: "500+ hours/week",
        stars: "300+ GitHub",
      },
      featured: true,
      icon: "Package",
      achievements: [
        "Created 25+ production-ready n8n workflows for Product Manager operations",
        "Built feedback aggregation system reducing processing time from 8 hours to 30 minutes",
        "Automated competitive intelligence tracking 5+ competitors with real-time alerts",
        "Published popular 'PM-n8n-Toolkit' repository with 300+ GitHub stars",
        "Trained 300+ product managers through automation workshops",
      ],
      demoUrl: "#",
      // githubUrl: "https://github.com/parthshah/PM-n8n-Toolkit",
    },
    {
      id: 17,
      title: "n8n Automation Workshop Training",
      description:
        "Comprehensive hands-on workshops teaching developers n8n workflow automation with live coding sessions, API integrations, and production-grade workflow design.",
      category: "automation",
      company: "Tech Community Ahmedabad",
      period: "2024 - Present",
      domains: ["automation"],
      impact:
        "Trained 200+ developers in implementing production-grade automation workflows",
      techStack: [
        "n8n",
        "Live Coding",
        "API Integration",
        "Webhook Handling",
        "Database Sync",
        "Workflow Design",
      ],
      metrics: {
        developers: "200+",
        workshops: "Multiple",
        scenarios: "Complex automation",
        rating: "Hands-on training",
      },
      featured: false,
      icon: "BookOpen",
      achievements: [
        "Conduct hands-on workshops teaching developers n8n workflow automation",
        "Live-code complex automation scenarios: API integrations, webhook handling, database sync",
        "Trained 200+ developers in implementing production-grade automation workflows",
        "Created comprehensive workshop materials and real-world automation examples",
        "Established expertise in n8n automation training and community education",
      ],
      demoUrl: "#",
      //githubUrl: "#",
    },

    // ===== AI INTEGRATION PROJECTS =====
    {
      id: 18,
      title: "n8n AI Integration Portfolio",
      description:
        "Comprehensive collection of 50+ production n8n workflows integrating OpenAI, Claude, and Gemini APIs for intelligent automation across various business processes.",
      category: "ai",
      company: "Personal Portfolio",
      period: "2024 - Present",
      domains: ["ai", "automation"],
      impact:
        "Built 50+ AI workflows, reduced API costs by 45% through intelligent optimization",
      techStack: [
        "n8n",
        "OpenAI API",
        "Claude API",
        "Gemini",
        "LangChain",
        "Vector Databases",
        "RAG Implementation",
      ],
      metrics: {
        workflows: "50+",
        costReduction: "45%",
        documents: "100K+",
        customNodes: "10+",
      },
      featured: true,
      icon: "Network",
      achievements: [
        "Built 50+ production n8n workflows integrating OpenAI, Claude, Gemini APIs",
        "Created multi-model routing system: GPT-4 for analysis, Claude for reasoning, Gemini for creativity",
        "Implemented RAG systems using Pinecone, Weaviate for knowledge retrieval across 100K+ documents",
        "Developed 10+ custom n8n nodes for specialized AI operations: prompt chaining, token optimization",
        "Reduced AI API costs by 45% through intelligent caching and model selection workflows",
      ],
      demoUrl: "#",
      //githubUrl: "#",
    },

    // ===== PRODUCT MANAGEMENT PROJECTS =====
    {
      id: 19,
      title: "PM Automation Strategy & Implementation",
      description:
        "Product management approach to automation workflows including user research, metrics tracking, and ROI analysis for PM operations across multiple organizations.",
      category: "product",
      company: "Product Space Training",
      period: "2024 - Present",
      domains: ["product"],
      impact:
        "Demonstrated 3x faster decision making and 20+ hours saved weekly through PM automation",
      techStack: [
        "User Research",
        "Analytics",
        "Mixpanel",
        "A/B Testing",
        "OKRs",
        "Roadmapping",
        "MoSCoW Prioritization",
      ],
      metrics: {
        decisionSpeed: "3x faster",
        timesSaved: "20+ hours/week",
        managers: "300+ trained",
        roi: "Demonstrated",
      },
      featured: true,
      icon: "Target",
      achievements: [
        "Conducted workshops on 'Automating PM Operations with n8n' for 300+ product managers",
        "Demonstrated ROI of automation: 3x faster decision making, 20+ hours saved weekly",
        "Created PM Automation Playbook with 25+ templates achieving 1K+ downloads",
        "Applied product management principles to automation workflow design",
        "Established PM automation best practices and measurement frameworks",
      ],
      demoUrl: "#",
      //githubUrl: "#",
    },
  ];

  // Career progression summary
  const careerProgression = {
    development: {
      period: "2022-2023",
      focus: "Full-Stack Development",
      description: "Built scalable backend systems and microservices",
      projects: 6, // All development projects from CV
    },
    automation: {
      period: "2023-2024",
      focus: "n8n Workflow Automation",
      description: "Expert-level automation and process optimization",
      projects: 4, // All automation projects
    },
    ai: {
      period: "2023-2024",
      focus: "AI Integration",
      description: "Advanced AI/ML integration and intelligent systems",
      projects: 3, // All AI integration projects
    },
    product: {
      period: "2024-Present",
      focus: "Product Management",
      description: "User-centered product strategy and automation",
      projects: 1, // Product management focused project
    },
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of impactful projects spanning product management,
            development, and automation expertise
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-slide-up">
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
            // Map icon string to actual icon component
            const getIcon = (iconName: string) => {
              const iconMap: { [key: string]: any } = {
                Database: Database,
                Users: Users,
                Globe: ExternalLink,
                Anchor: ExternalLink,
                Workflow: Workflow,
                GitBranch: Github,
                Package: BarChart3,
                Brain: Brain,
                Sparkles: Zap,
                Compass: ExternalLink,
                Server: Database,
                Code: Github,
                Terminal: ExternalLink,
                BookOpen: ExternalLink,
                Network: Workflow,
                Target: BarChart3,
              };
              return iconMap[iconName] || ExternalLink;
            };
            
            const Icon = getIcon(project.icon);
            return (
              <Card
                key={project.id}
                className={`card-elegant group cursor-pointer ${
                  project.featured ? "border-primary/50 shadow-brand" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Icon
                      className={`w-8 h-8 ${
                        project.category === "product"
                          ? "text-primary"
                          : project.category === "development"
                          ? "text-secondary"
                          : project.category === "automation"
                          ? "text-success"
                          : "text-purple-500"
                      }`}
                    />
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
                        <div className="text-sm font-bold text-foreground">
                          {value}
                        </div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {/* {project.techStack.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.techStack.length - 4} more
                        </Badge>
                      )} */}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {/* <Button size="sm" className="flex-1" asChild>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button> */}
                    {/* <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-4">
            Interested in collaborating?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always excited to work on innovative projects that combine
            product strategy with technical excellence.
          </p>
          <Button
            className="btn-hero"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Let's Build Something Amazing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
