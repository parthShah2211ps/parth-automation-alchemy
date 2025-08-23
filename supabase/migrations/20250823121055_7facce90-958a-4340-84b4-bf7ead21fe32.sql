-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Admin User Table (for login - only me)
CREATE TABLE admin_user (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(255) DEFAULT 'shahparthsp11@gmail.com',
  password VARCHAR(255) DEFAULT 'Admin@2024', -- Change this after first login
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insert admin credentials
INSERT INTO admin_user (email, password) 
VALUES ('shahparthsp11@gmail.com', 'Admin@2024');

-- 2. My Profile Table (single row for all my info)
CREATE TABLE my_profile (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  -- Basic Info
  name VARCHAR(255) DEFAULT 'Parth Shah',
  title VARCHAR(255),
  bio TEXT,
  email VARCHAR(255) DEFAULT 'shahparthsp11@gmail.com',
  phone VARCHAR(20) DEFAULT '+91-63590-88600',
  location VARCHAR(255) DEFAULT 'Godhra, Gujarat, IN',
  
  -- Social Links
  linkedin_url VARCHAR(500),
  github_url VARCHAR(500),
  medium_url VARCHAR(500),
  
  -- Stats (for hero section)
  years_experience INT DEFAULT 3,
  projects_completed INT DEFAULT 15,
  users_served INT DEFAULT 15000,
  automations_built INT DEFAULT 50,
  hours_saved INT DEFAULT 100,
  
  -- Skills (stored as JSON)
  technical_skills TEXT[], -- ['JavaScript', 'React', 'Node.js', etc.]
  product_skills TEXT[], -- ['User Research', 'A/B Testing', etc.]
  tools TEXT[], -- ['n8n', 'Figma', 'JIRA', etc.]
  
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Insert default profile
INSERT INTO my_profile (title, bio, linkedin_url, github_url) 
VALUES (
  'Product Manager | Full-Stack Developer | n8n Expert',
  'Technical Product Manager with 3+ years of development experience',
  'https://linkedin.com/in/parthshah',
  'https://github.com/shahparthsp11'
);

-- 3. Projects Table
CREATE TABLE projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(50), -- 'product', 'development', 'automation', 'ai'
  tech_stack TEXT[], -- ['React', 'Node.js', 'MongoDB']
  
  -- Key metrics/impact
  impact_metric VARCHAR(255), -- e.g., "Saved 20+ hours weekly"
  users_count VARCHAR(100), -- e.g., "10K+ users"
  
  -- Links & Media
  demo_url VARCHAR(500),
  github_url VARCHAR(500),
  image_url VARCHAR(500),
  
  -- Dates
  start_date DATE,
  end_date DATE,
  is_featured BOOLEAN DEFAULT false,
  display_order INT DEFAULT 0,
  
  created_at TIMESTAMP DEFAULT NOW()
);

-- 4. Experience Table  
CREATE TABLE experience (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  company VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  type VARCHAR(20), -- 'product' or 'engineering'
  location VARCHAR(255),
  start_date DATE,
  end_date DATE,
  is_current BOOLEAN DEFAULT false,
  
  -- Simple bullet points
  responsibilities TEXT[], -- Array of strings
  achievements TEXT[], -- Array of strings with metrics
  
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 5. Inquiries Table (from contact form)
CREATE TABLE inquiries (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  is_replied BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 6. Downloads Table (for resume, templates, etc.)
CREATE TABLE downloads (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  file_name VARCHAR(255) NOT NULL,
  file_type VARCHAR(50), -- 'resume_pm', 'resume_dev', 'n8n_template', 'playbook'
  file_url VARCHAR(500) NOT NULL,
  description TEXT,
  download_count INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE admin_user ENABLE ROW LEVEL SECURITY;
ALTER TABLE my_profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE downloads ENABLE ROW LEVEL SECURITY;

-- Allow public read for portfolio content
CREATE POLICY "Public read access" ON my_profile FOR SELECT USING (true);
CREATE POLICY "Public read access" ON projects FOR SELECT USING (true);
CREATE POLICY "Public read access" ON experience FOR SELECT USING (true);
CREATE POLICY "Public read access" ON downloads FOR SELECT USING (true);

-- Allow public insert for inquiries
CREATE POLICY "Public insert inquiries" ON inquiries FOR INSERT WITH CHECK (true);

-- Admin full access policies
CREATE POLICY "Admin full access" ON admin_user FOR ALL USING (true);
CREATE POLICY "Admin full access" ON my_profile FOR ALL USING (true);
CREATE POLICY "Admin full access" ON projects FOR ALL USING (true);
CREATE POLICY "Admin full access" ON experience FOR ALL USING (true);
CREATE POLICY "Admin full access" ON inquiries FOR ALL USING (true);
CREATE POLICY "Admin full access" ON downloads FOR ALL USING (true);