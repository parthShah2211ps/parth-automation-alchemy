import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { 
  getProjects, 
  getExperience,
  createProject, 
  updateProject, 
  deleteProject,
  createExperience,
  updateExperience,
  deleteExperience,
  Project, 
  Experience 
} from '@/lib/admin';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2 } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';

const AdminContent = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [editingExperience, setEditingExperience] = useState<Experience | null>(null);
  const [projectDialogOpen, setProjectDialogOpen] = useState(false);
  const [experienceDialogOpen, setExperienceDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [projectsResult, experienceResult] = await Promise.all([
        getProjects(),
        getExperience()
      ]);

      if (projectsResult.error) {
        toast({
          title: "Error loading projects",
          description: projectsResult.error.message,
          variant: "destructive",
        });
      } else {
        setProjects(projectsResult.data || []);
      }

      if (experienceResult.error) {
        toast({
          title: "Error loading experience",
          description: experienceResult.error.message,
          variant: "destructive",
        });
      } else {
        setExperiences(experienceResult.data || []);
      }
    } catch (error) {
      toast({
        title: "Error loading data",
        description: "Failed to load projects and experience",
        variant: "destructive",
      });
    }
  };

  const handleProjectSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    setLoading(true);
    try {
      if (editingProject.id) {
        const { error } = await updateProject(editingProject.id, editingProject);
        if (error) throw error;
      } else {
        const { error } = await createProject(editingProject);
        if (error) throw error;
      }

      toast({
        title: "Project saved",
        description: "Project has been saved successfully.",
      });
      
      loadData();
      setProjectDialogOpen(false);
      setEditingProject(null);
    } catch (error: any) {
      toast({
        title: "Error saving project",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleExperienceSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingExperience) return;

    setLoading(true);
    try {
      if (editingExperience.id) {
        const { error } = await updateExperience(editingExperience.id, editingExperience);
        if (error) throw error;
      } else {
        const { error } = await createExperience(editingExperience);
        if (error) throw error;
      }

      toast({
        title: "Experience saved",
        description: "Experience has been saved successfully.",
      });
      
      loadData();
      setExperienceDialogOpen(false);
      setEditingExperience(null);
    } catch (error: any) {
      toast({
        title: "Error saving experience",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    
    try {
      const { error } = await deleteProject(id);
      if (error) throw error;
      
      toast({
        title: "Project deleted",
        description: "Project has been deleted successfully.",
      });
      loadData();
    } catch (error: any) {
      toast({
        title: "Error deleting project",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDeleteExperience = async (id: string) => {
    if (!confirm('Are you sure you want to delete this experience?')) return;
    
    try {
      const { error } = await deleteExperience(id);
      if (error) throw error;
      
      toast({
        title: "Experience deleted",
        description: "Experience has been deleted successfully.",
      });
      loadData();
    } catch (error: any) {
      toast({
        title: "Error deleting experience",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const openProjectDialog = (project?: Project) => {
    if (project) {
      setEditingProject(project);
    } else {
      setEditingProject({
        title: '',
        description: '',
        category: 'development',
        tech_stack: [],
        impact_metric: '',
        users_count: '',
        demo_url: '',
        github_url: '',
        image_url: '',
        start_date: '',
        end_date: '',
        is_featured: false,
        display_order: 0
      });
    }
    setProjectDialogOpen(true);
  };

  const openExperienceDialog = (experience?: Experience) => {
    if (experience) {
      setEditingExperience(experience);
    } else {
      setEditingExperience({
        company: '',
        role: '',
        type: 'engineering',
        location: '',
        start_date: '',
        end_date: '',
        is_current: false,
        responsibilities: [],
        achievements: [],
        display_order: 0
      });
    }
    setExperienceDialogOpen(true);
  };

  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Projects Management</h2>
              <Button onClick={() => openProjectDialog()}>
                <Plus className="w-4 h-4 mr-2" />
                Add Project
              </Button>
            </div>

            <div className="grid gap-4">
              {projects.map((project) => (
                <Card key={project.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold">{project.title}</h3>
                          <Badge variant={project.is_featured ? "default" : "secondary"}>
                            {project.is_featured ? 'Featured' : 'Regular'}
                          </Badge>
                          <Badge variant="outline">{project.category}</Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {project.tech_stack.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        {project.impact_metric && (
                          <p className="text-sm text-primary font-medium">{project.impact_metric}</p>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openProjectDialog(project)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteProject(project.id!)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Experience Management</h2>
              <Button onClick={() => openExperienceDialog()}>
                <Plus className="w-4 h-4 mr-2" />
                Add Experience
              </Button>
            </div>

            <div className="grid gap-4">
              {experiences.map((experience) => (
                <Card key={experience.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold">{experience.role}</h3>
                          <Badge variant="outline">{experience.type}</Badge>
                          {experience.is_current && (
                            <Badge variant="default">Current</Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground mb-1">{experience.company}</p>
                        <p className="text-sm text-muted-foreground mb-3">{experience.location}</p>
                        <div className="text-sm">
                          <p className="font-medium mb-1">Key Responsibilities:</p>
                          <ul className="list-disc list-inside mb-2 text-muted-foreground">
                            {experience.responsibilities.slice(0, 2).map((resp, index) => (
                              <li key={index}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openExperienceDialog(experience)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteExperience(experience.id!)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Project Dialog */}
        <Dialog open={projectDialogOpen} onOpenChange={setProjectDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingProject?.id ? 'Edit Project' : 'Add New Project'}
              </DialogTitle>
            </DialogHeader>
            {editingProject && (
              <form onSubmit={handleProjectSave} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={editingProject.title}
                      onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select 
                      value={editingProject.category} 
                      onValueChange={(value) => setEditingProject({...editingProject, category: value})}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="product">Product</SelectItem>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="automation">Automation</SelectItem>
                        <SelectItem value="ai">AI</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={editingProject.description}
                    onChange={(e) => setEditingProject({...editingProject, description: e.target.value})}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tech_stack">Tech Stack (comma separated)</Label>
                  <Input
                    id="tech_stack"
                    value={editingProject.tech_stack?.join(', ') || ''}
                    onChange={(e) => {
                      const techStack = e.target.value.split(',').map(item => item.trim());
                      setEditingProject({...editingProject, tech_stack: techStack});
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="impact_metric">Impact Metric</Label>
                    <Input
                      id="impact_metric"
                      value={editingProject.impact_metric}
                      onChange={(e) => setEditingProject({...editingProject, impact_metric: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="users_count">Users Count</Label>
                    <Input
                      id="users_count"
                      value={editingProject.users_count}
                      onChange={(e) => setEditingProject({...editingProject, users_count: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="demo_url">Demo URL</Label>
                    <Input
                      id="demo_url"
                      type="url"
                      value={editingProject.demo_url}
                      onChange={(e) => setEditingProject({...editingProject, demo_url: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="github_url">GitHub URL</Label>
                    <Input
                      id="github_url"
                      type="url"
                      value={editingProject.github_url}
                      onChange={(e) => setEditingProject({...editingProject, github_url: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="image_url">Image URL</Label>
                    <Input
                      id="image_url"
                      type="url"
                      value={editingProject.image_url}
                      onChange={(e) => setEditingProject({...editingProject, image_url: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="display_order">Display Order</Label>
                    <Input
                      id="display_order"
                      type="number"
                      value={editingProject.display_order}
                      onChange={(e) => setEditingProject({...editingProject, display_order: parseInt(e.target.value)})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start_date">Start Date</Label>
                    <Input
                      id="start_date"
                      type="date"
                      value={editingProject.start_date}
                      onChange={(e) => setEditingProject({...editingProject, start_date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end_date">End Date</Label>
                    <Input
                      id="end_date"
                      type="date"
                      value={editingProject.end_date}
                      onChange={(e) => setEditingProject({...editingProject, end_date: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="is_featured">Is Featured</Label>
                  <Input
                    id="is_featured"
                    type="checkbox"
                    checked={editingProject.is_featured}
                    onChange={(e) => setEditingProject({...editingProject, is_featured: e.target.checked})}
                  />
                </div>

                <Button type="submit" disabled={loading}>
                  {loading ? 'Saving...' : 'Save Project'}
                </Button>
              </form>
            )}
          </DialogContent>
        </Dialog>

        {/* Experience Dialog */}
        <Dialog open={experienceDialogOpen} onOpenChange={setExperienceDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingExperience?.id ? 'Edit Experience' : 'Add New Experience'}
              </DialogTitle>
            </DialogHeader>
            {editingExperience && (
              <form onSubmit={handleExperienceSave} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      value={editingExperience.company}
                      onChange={(e) => setEditingExperience({...editingExperience, company: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role *</Label>
                    <Input
                      id="role"
                      value={editingExperience.role}
                      onChange={(e) => setEditingExperience({...editingExperience, role: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <Select 
                    value={editingExperience.type} 
                    onValueChange={(value) => setEditingExperience({...editingExperience, type: value})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="product">Product</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={editingExperience.location}
                    onChange={(e) => setEditingExperience({...editingExperience, location: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start_date">Start Date</Label>
                    <Input
                      id="start_date"
                      type="date"
                      value={editingExperience.start_date}
                      onChange={(e) => setEditingExperience({...editingExperience, start_date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end_date">End Date</Label>
                    <Input
                      id="end_date"
                      type="date"
                      value={editingExperience.end_date}
                      onChange={(e) => setEditingExperience({...editingExperience, end_date: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="is_current">Is Current</Label>
                  <Input
                    id="is_current"
                    type="checkbox"
                    checked={editingExperience.is_current}
                    onChange={(e) => setEditingExperience({...editingExperience, is_current: e.target.checked})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="responsibilities">Responsibilities (comma separated)</Label>
                  <Input
                    id="responsibilities"
                    value={editingExperience.responsibilities?.join(', ') || ''}
                    onChange={(e) => {
                      const responsibilities = e.target.value.split(',').map(item => item.trim());
                      setEditingExperience({...editingExperience, responsibilities: responsibilities});
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="achievements">Achievements (comma separated)</Label>
                  <Input
                    id="achievements"
                    value={editingExperience.achievements?.join(', ') || ''}
                    onChange={(e) => {
                      const achievements = e.target.value.split(',').map(item => item.trim());
                      setEditingExperience({...editingExperience, achievements: achievements});
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="display_order">Display Order</Label>
                  <Input
                    id="display_order"
                    type="number"
                    value={editingExperience.display_order}
                    onChange={(e) => setEditingExperience({...editingExperience, display_order: parseInt(e.target.value)})}
                  />
                </div>

                <Button type="submit" disabled={loading}>
                  {loading ? 'Saving...' : 'Save Experience'}
                </Button>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
};

export default AdminContent;
