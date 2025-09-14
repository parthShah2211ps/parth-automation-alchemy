import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Linkedin,
  Github,
  ExternalLink,
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (formData.message.length < 50) {
      toast({
        title: "Message Too Short",
        description: "Please provide a message with at least 50 characters.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast({
        title: "Message Sent Successfully!",
        description:
          "Thank you for reaching out. I'll get back to you within 24 hours.",
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description:
          "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your workflows with automation or discuss your
            next product challenge? Let's start a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 animate-slide-up">
            <div className="space-y-6">
              {/* Quick Contact Info */}
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Mail className="w-5 h-5 mr-2 text-primary" />
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">
                      parthshah@buildwithparth.tech
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">+91 6359088600</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Ahmedabad, India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">
                      Usually responds within 24 hours
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">Connect on Social</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a
                      href="https://www.linkedin.com/in/parth-shah-8a041514b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors duration-200 group"
                    >
                      <Linkedin className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                      <div>
                        <div className="font-medium">LinkedIn</div>
                        <div className="text-sm text-muted-foreground">
                          Professional network
                        </div>
                      </div>
                    </a>
                    {/* <a 
                      href="https://github.com/parth-shah" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors duration-200 group"
                    >
                      <Github className="w-5 h-5 text-foreground group-hover:text-primary" />
                      <div>
                        <div className="font-medium">GitHub</div>
                        <div className="text-sm text-muted-foreground">Code repositories</div>
                      </div>
                    </a>
                    <a 
                      href="https://medium.com/@parth-shah" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors duration-200 group"
                    >
                      <ExternalLink className="w-5 h-5 text-foreground group-hover:text-primary" />
                      <div>
                        <div className="font-medium">Medium</div>
                        <div className="text-sm text-muted-foreground">Articles & insights</div>
                      </div>
                    </a> */}
                  </div>
                </CardContent>
              </Card>

              {/* Workshop Info */}
              {/* <Card className="card-elegant bg-gradient-to-br from-success/10 to-success/5 border-success/20">
                <CardHeader>
                  <CardTitle className="text-lg text-success-dark">
                    Workshop Inquiries
                  </CardTitle>
                  <CardDescription>
                    Interested in n8n automation workshops for your team?
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    I offer customized automation workshops that have helped
                    300+ professionals save hours weekly.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-success/30 hover:bg-success/10"
                  >
                    Learn About Workshops
                  </Button>
                </CardContent>
              </Card> */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  Tell me about your project or question. I'd love to help you
                  succeed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone and Company Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("subject", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="What would you like to discuss?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="product-opportunity">
                          Product Management Opportunity
                        </SelectItem>
                        <SelectItem value="development-project">
                          Development Project
                        </SelectItem>
                        <SelectItem value="automation-consulting">
                          n8n Automation Consulting
                        </SelectItem>
                        <SelectItem value="workshop-inquiry">
                          Workshop Inquiry
                        </SelectItem>
                        <SelectItem value="collaboration">
                          Collaboration Proposal
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Tell me about your project, goals, or how I can help you. Please include relevant details about timeline, scope, and expectations. (Minimum 50 characters)"
                      rows={6}
                      required
                    />
                    <div className="text-xs text-muted-foreground">
                      {formData.message.length}/50 characters minimum
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-hero w-full"
                  >
                    {isSubmitting ? (
                      "Sending Message..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* Form Note */}
                  <p className="text-xs text-muted-foreground">
                    * Required fields. Your information is secure and will never
                    be shared with third parties.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
