import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getProfile, updateProfile, Profile } from '@/lib/admin';
import { useToast } from '@/hooks/use-toast';
import AdminLayout from '@/components/AdminLayout';

const AdminProfile = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const { data, error } = await getProfile();
      if (error) {
        toast({
          title: "Error loading profile",
          description: error.message,
          variant: "destructive",
        });
      } else {
        setProfile(data);
      }
    } catch (error) {
      toast({
        title: "Error loading profile",
        description: "Failed to load profile data",
        variant: "destructive",
      });
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) return;

    setLoading(true);
    try {
      const { error } = await updateProfile(profile);
      if (error) {
        toast({
          title: "Error saving profile",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Profile updated",
          description: "Your profile has been saved successfully.",
        });
      }
    } catch (error) {
      toast({
        title: "Error saving profile",
        description: "Failed to save profile",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSkillsChange = (field: keyof Profile, value: string) => {
    if (!profile) return;
    const skills = value.split(',').map(skill => skill.trim()).filter(skill => skill);
    setProfile({ ...profile, [field]: skills });
  };

  if (!profile) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading profile...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile & Skills Management</CardTitle>
            <CardDescription>
              Update your personal information and skills
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSave} className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={profile.title || ''}
                    onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                    placeholder="Product Manager | Developer"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={profile.location || ''}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    placeholder="City, State, Country"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={profile.bio || ''}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  placeholder="Brief description about yourself"
                  rows={3}
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="years_experience">Years Experience</Label>
                  <Input
                    id="years_experience"
                    type="number"
                    value={profile.years_experience || 0}
                    onChange={(e) => setProfile({ ...profile, years_experience: parseInt(e.target.value) || 0 })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projects_completed">Projects Completed</Label>
                  <Input
                    id="projects_completed"
                    type="number"
                    value={profile.projects_completed || 0}
                    onChange={(e) => setProfile({ ...profile, projects_completed: parseInt(e.target.value) || 0 })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="users_served">Users Served</Label>
                  <Input
                    id="users_served"
                    type="number"
                    value={profile.users_served || 0}
                    onChange={(e) => setProfile({ ...profile, users_served: parseInt(e.target.value) || 0 })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="automations_built">Automations Built</Label>
                  <Input
                    id="automations_built"
                    type="number"
                    value={profile.automations_built || 0}
                    onChange={(e) => setProfile({ ...profile, automations_built: parseInt(e.target.value) || 0 })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hours_saved">Hours Saved Weekly</Label>
                  <Input
                    id="hours_saved"
                    type="number"
                    value={profile.hours_saved || 0}
                    onChange={(e) => setProfile({ ...profile, hours_saved: parseInt(e.target.value) || 0 })}
                  />
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="technical_skills">Technical Skills</Label>
                  <Textarea
                    id="technical_skills"
                    value={profile.technical_skills?.join(', ') || ''}
                    onChange={(e) => handleSkillsChange('technical_skills', e.target.value)}
                    placeholder="JavaScript, React, Node.js, etc. (comma separated)"
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product_skills">Product Skills</Label>
                  <Textarea
                    id="product_skills"
                    value={profile.product_skills?.join(', ') || ''}
                    onChange={(e) => handleSkillsChange('product_skills', e.target.value)}
                    placeholder="User Research, A/B Testing, etc. (comma separated)"
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tools">Tools</Label>
                  <Textarea
                    id="tools"
                    value={profile.tools?.join(', ') || ''}
                    onChange={(e) => handleSkillsChange('tools', e.target.value)}
                    placeholder="n8n, Figma, JIRA, etc. (comma separated)"
                    rows={2}
                  />
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="linkedin_url">LinkedIn URL</Label>
                  <Input
                    id="linkedin_url"
                    value={profile.linkedin_url || ''}
                    onChange={(e) => setProfile({ ...profile, linkedin_url: e.target.value })}
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="github_url">GitHub URL</Label>
                  <Input
                    id="github_url"
                    value={profile.github_url || ''}
                    onChange={(e) => setProfile({ ...profile, github_url: e.target.value })}
                    placeholder="https://github.com/username"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="medium_url">Medium URL</Label>
                  <Input
                    id="medium_url"
                    value={profile.medium_url || ''}
                    onChange={(e) => setProfile({ ...profile, medium_url: e.target.value })}
                    placeholder="https://medium.com/@username"
                  />
                </div>
              </div>

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? 'Saving...' : 'Save Profile'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminProfile;