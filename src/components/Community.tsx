import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Video, Star, Download, Calendar, ExternalLink, TrendingUp } from "lucide-react";

const Community = () => {
  const workshopStats = [
    { label: "Workshops Conducted", value: "50+", icon: Calendar },
    { label: "Professionals Trained", value: "300+", icon: Users },
    { label: "Average Rating", value: "4.9/5", icon: Star },
    { label: "Hours of Content", value: "100+", icon: Video },
  ];

  const resources = [
    {
      id: 1,
      title: "PM Automation Playbook",
      description: "Comprehensive guide covering 25+ automation strategies specifically designed for Product Managers. Includes templates, best practices, and real-world case studies.",
      type: "E-book",
      stats: "1,000+ downloads",
      rating: 4.8,
      link: "#",
      featured: true,
      icon: BookOpen
    },
    {
      id: 2,
      title: "n8n Mastery Workshop Series",
      description: "8-part video series teaching advanced n8n automation techniques. From basic workflows to complex AI integrations.",
      type: "Video Course",
      stats: "5,000+ views",
      rating: 4.9,
      link: "#",
      featured: true,
      icon: Video
    },
    {
      id: 3,
      title: "Automation ROI Calculator",
      description: "Interactive tool to calculate time savings and ROI for automation projects. Includes industry benchmarks and optimization suggestions.",
      type: "Tool",
      stats: "2,000+ uses",
      rating: 4.7,
      link: "#",
      featured: false,
      icon: TrendingUp
    }
  ];

  const testimonials = [
    {
      id: 1,
      text: "Parth's automation workshop transformed how our team operates. We've saved 20+ hours weekly and improved our decision-making speed by 40%.",
      author: "Sarah Chen",
      role: "Senior Product Manager",
      company: "TechFlow"
    },
    {
      id: 2,
      text: "The n8n templates are incredible. What used to take our team days now happens automatically. Parth's expertise is unmatched.",
      author: "Mike Rodriguez",
      role: "Head of Operations", 
      company: "GrowthLabs"
    },
    {
      id: 3,
      text: "Best investment we made this year. The PM Automation Playbook is a game-changer for any product team serious about efficiency.",
      author: "Emily Watson",
      role: "VP of Product",
      company: "InnovateCorp"
    }
  ];

  const upcomingWorkshops = [
    {
      id: 1,
      title: "AI-Powered Product Analytics with n8n",
      date: "March 15, 2024",
      time: "2:00 PM PST",
      duration: "2 hours",
      attendees: 45,
      maxAttendees: 50,
      level: "Intermediate"
    },
    {
      id: 2,
      title: "Automated Customer Feedback Analysis",
      date: "March 22, 2024", 
      time: "10:00 AM PST",
      duration: "90 minutes",
      attendees: 32,
      maxAttendees: 40,
      level: "Beginner"
    }
  ];

  return (
    <section id="community" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-6">
            Community & <span className="text-gradient">Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing knowledge and empowering teams through workshops, resources, and community contributions
          </p>
        </div>

        {/* Workshop Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 animate-slide-up">
          {workshopStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="card-elegant p-6 text-center">
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Resources */}
        <div className="mb-16 animate-scale-in">
          <h3 className="text-2xl font-semibold text-center mb-8">Popular Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card 
                  key={resource.id} 
                  className={`card-elegant group ${
                    resource.featured ? 'border-primary/50 shadow-brand' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                      <div className="flex items-center space-x-2">
                        {resource.featured && (
                          <Badge className="bg-gradient-primary text-primary-foreground">
                            Popular
                          </Badge>
                        )}
                        <Badge variant="secondary">{resource.type}</Badge>
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors duration-200">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{resource.rating}</span>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{resource.stats}</span>
                    </div>
                    
                    <Button className="w-full" asChild>
                      <a href={resource.link} target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 mr-2" />
                        Access Resource
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Upcoming Workshops */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-semibold text-center mb-8">Upcoming Workshops</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {upcomingWorkshops.map((workshop) => (
              <Card key={workshop.id} className="card-elegant">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {workshop.level}
                    </Badge>
                    <Badge className="bg-success/20 text-success-dark border-success/30">
                      {workshop.attendees}/{workshop.maxAttendees} spots
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{workshop.title}</CardTitle>
                  <CardDescription>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{workshop.date} at {workshop.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Video className="w-4 h-4" />
                        <span>Duration: {workshop.duration}</span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="animate-slide-up">
          <h3 className="text-2xl font-semibold text-center mb-8">What People Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="card-elegant"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-4">Want to learn automation?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of professionals who have transformed their workflows with proven automation strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero">
              Book a Workshop
            </Button>
            <Button variant="outline" className="btn-hero-outline">
              Download Free Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;