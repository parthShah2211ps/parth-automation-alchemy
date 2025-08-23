import { supabase } from "@/integrations/supabase/client";

export interface AdminUser {
  id: string;
  email: string;
}

export interface Profile {
  id: string;
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  linkedin_url: string;
  github_url: string;
  medium_url: string;
  years_experience: number;
  projects_completed: number;
  users_served: number;
  automations_built: number;
  hours_saved: number;
  technical_skills: string[];
  product_skills: string[];
  tools: string[];
  updated_at: string;
}

export interface Project {
  id?: string;
  title: string;
  description: string;
  category: string;
  tech_stack: string[];
  impact_metric: string;
  users_count: string;
  demo_url: string;
  github_url: string;
  image_url: string;
  start_date: string;
  end_date: string;
  is_featured: boolean;
  display_order: number;
  created_at?: string;
}

export interface Experience {
  id?: string;
  company: string;
  role: string;
  type: string;
  location: string;
  start_date: string;
  end_date: string;
  is_current: boolean;
  responsibilities: string[];
  achievements: string[];
  display_order: number;
  created_at?: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  is_read: boolean;
  is_replied: boolean;
  created_at: string;
}

export interface Download {
  id?: string;
  file_name: string;
  file_type: string;
  file_url: string;
  description: string;
  download_count: number;
  is_active: boolean;
  created_at?: string;
}

// Authentication
export const adminLogin = async (email: string, password: string) => {
  const { data, error } = await supabase
    .from('admin_user')
    .select('*')
    .eq('email', email)
    .eq('password', password)
    .maybeSingle();
  
  if (data) {
    localStorage.setItem('isAdmin', 'true');
    localStorage.setItem('adminUser', JSON.stringify(data));
    return { success: true };
  }
  return { success: false, error: error?.message || 'Invalid credentials' };
};

export const adminLogout = () => {
  localStorage.removeItem('isAdmin');
  localStorage.removeItem('adminUser');
};

export const isAdminLoggedIn = () => {
  return localStorage.getItem('isAdmin') === 'true';
};

// Profile operations
export const getProfile = async () => {
  const { data, error } = await supabase
    .from('my_profile')
    .select('*')
    .maybeSingle();
  return { data, error };
};

export const updateProfile = async (profileData: Partial<Profile>) => {
  const { data, error } = await supabase
    .from('my_profile')
    .update(profileData)
    .eq('id', profileData.id);
  return { data, error };
};

// Projects CRUD
export const getProjects = async () => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('display_order', { ascending: true });
  return { data, error };
};

export const createProject = async (project: Omit<Project, 'id' | 'created_at'>) => {
  const { data, error } = await supabase
    .from('projects')
    .insert([project])
    .select()
    .single();
  return { data, error };
};

export const updateProject = async (id: string, project: Partial<Project>) => {
  const { data, error } = await supabase
    .from('projects')
    .update(project)
    .eq('id', id)
    .select()
    .single();
  return { data, error };
};

export const deleteProject = async (id: string) => {
  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id);
  return { error };
};

// Experience CRUD
export const getExperience = async () => {
  const { data, error } = await supabase
    .from('experience')
    .select('*')
    .order('display_order', { ascending: true });
  return { data, error };
};

export const createExperience = async (experience: Omit<Experience, 'id' | 'created_at'>) => {
  const { data, error } = await supabase
    .from('experience')
    .insert([experience])
    .select()
    .single();
  return { data, error };
};

export const updateExperience = async (id: string, experience: Partial<Experience>) => {
  const { data, error } = await supabase
    .from('experience')
    .update(experience)
    .eq('id', id)
    .select()
    .single();
  return { data, error };
};

export const deleteExperience = async (id: string) => {
  const { error } = await supabase
    .from('experience')
    .delete()
    .eq('id', id);
  return { error };
};

// Inquiries operations
export const getInquiries = async () => {
  const { data, error } = await supabase
    .from('inquiries')
    .select('*')
    .order('created_at', { ascending: false });
  return { data, error };
};

export const updateInquiry = async (id: string, updates: Partial<Inquiry>) => {
  const { data, error } = await supabase
    .from('inquiries')
    .update(updates)
    .eq('id', id);
  return { data, error };
};

export const deleteInquiry = async (id: string) => {
  const { error } = await supabase
    .from('inquiries')
    .delete()
    .eq('id', id);
  return { error };
};

// Downloads CRUD
export const getDownloads = async () => {
  const { data, error } = await supabase
    .from('downloads')
    .select('*')
    .order('created_at', { ascending: false });
  return { data, error };
};

export const createDownload = async (download: Omit<Download, 'id' | 'created_at'>) => {
  const { data, error } = await supabase
    .from('downloads')
    .insert([download])
    .select()
    .single();
  return { data, error };
};

export const updateDownload = async (id: string, download: Partial<Download>) => {
  const { data, error } = await supabase
    .from('downloads')
    .update(download)
    .eq('id', id)
    .select()
    .single();
  return { data, error };
};

export const deleteDownload = async (id: string) => {
  const { error } = await supabase
    .from('downloads')
    .delete()
    .eq('id', id);
  return { error };
};