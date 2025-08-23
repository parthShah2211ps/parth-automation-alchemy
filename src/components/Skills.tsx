import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Zap, Brain, Database, LineChart } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: Brain },
    { id: 'product', label: 'Product', icon: LineChart },
    { id: 'technical', label: 'Technical', icon: Code },
    { id: 'automation', label: 'Automation', icon: Zap },
    { id: 'leadership', label: 'Leadership', icon: Users },
  ];

  const skills = [
    // Product Skills
    { name: 'User Research', level: 95, category: 'product', description: 'Expert in user interviews, surveys, and behavioral analysis' },
    { name: 'Analytics & Metrics', level: 90, category: 'product', description: 'Advanced proficiency in Google Analytics, Mixpanel, and custom dashboards' },
    { name: 'A/B Testing', level: 85, category: 'product', description: 'Statistical significance, test design, and result interpretation' },
    { name: 'Roadmapping', level: 88, category: 'product', description: 'Strategic planning, prioritization frameworks, and stakeholder alignment' },
    { name: 'Agile/Scrum', level: 92, category: 'product', description: 'Certified Scrum Master with 3+ years of experience' },
    
    // Technical Skills
    { name: 'JavaScript/TypeScript', level: 95, category: 'technical', description: 'Full-stack development with modern frameworks' },
    { name: 'React.js/Node.js', level: 90, category: 'technical', description: 'Building scalable web applications and APIs' },
    { name: 'SQL/Databases', level: 85, category: 'technical', description: 'PostgreSQL, MongoDB, query optimization' },
    { name: 'AI Integration', level: 80, category: 'technical', description: 'GPT-4, Anthropic Claude, custom AI workflows' },
    { name: 'System Design', level: 82, category: 'technical', description: 'Scalable architecture, microservices, cloud platforms' },
    
    // Automation Skills
    { name: 'n8n Workflows', level: 98, category: 'automation', description: 'Expert-level automation designer with 50+ production workflows' },
    { name: 'Zapier/Make', level: 85, category: 'automation', description: 'Alternative automation platforms and integrations' },
    { name: 'API Integration', level: 92, category: 'automation', description: 'REST, GraphQL, webhooks, and custom connectors' },
    { name: 'Data Processing', level: 88, category: 'automation', description: 'ETL pipelines, data transformation, and analysis' },
    { name: 'Process Optimization', level: 90, category: 'automation', description: 'Identifying bottlenecks and creating efficient workflows' },
    
    // Leadership Skills
    { name: 'Team Leadership', level: 85, category: 'leadership', description: 'Managing cross-functional teams and projects' },
    { name: 'Stakeholder Management', level: 88, category: 'leadership', description: 'Executive communication and alignment' },
    { name: 'Workshop Facilitation', level: 92, category: 'leadership', description: 'Conducted 50+ workshops for 300+ professionals' },
    { name: 'Mentoring', level: 85, category: 'leadership', description: 'Guiding junior PMs and developers' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getSkillIcon = (category: string) => {
    switch (category) {
      case 'product': return LineChart;
      case 'technical': return Code;
      case 'automation': return Zap;
      case 'leadership': return Users;
      default: return Brain;
    }
  };

  const getSkillColor = (category: string) => {
    switch (category) {
      case 'product': return 'text-primary';
      case 'technical': return 'text-secondary';
      case 'automation': return 'text-success';
      case 'leadership': return 'text-purple-500';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive blend of product management expertise, technical proficiency, and automation mastery
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {skillCategories.map((category) => {
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

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
          {filteredSkills.map((skill, index) => {
            const Icon = getSkillIcon(skill.category);
            return (
              <div 
                key={skill.name} 
                className="card-elegant p-6 hover:shadow-brand transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-5 h-5 ${getSkillColor(skill.category)}`} />
                    <h4 className="font-semibold">{skill.name}</h4>
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    {skill.level}%
                  </Badge>
                </div>
                
                {/* Progress Bar */}
                <div className="skill-bar mb-3">
                  <div 
                    className="skill-progress"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1 + 0.5}s`
                    }}
                  />
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 animate-fade-in">
          <div className="text-center card-elegant p-6">
            <div className="text-3xl font-bold text-primary mb-2">4+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center card-elegant p-6">
            <div className="text-3xl font-bold text-secondary mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Technologies Mastered</div>
          </div>
          <div className="text-center card-elegant p-6">
            <div className="text-3xl font-bold text-success mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Automation Workflows</div>
          </div>
          <div className="text-center card-elegant p-6">
            <div className="text-3xl font-bold text-purple-500 mb-2">300+</div>
            <div className="text-sm text-muted-foreground">People Trained</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;