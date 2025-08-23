import { ReactNode, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { isAdminLoggedIn, adminLogout } from '@/lib/admin';
import { User, FileText, MessageSquare, LogOut, Settings } from 'lucide-react';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAdminLoggedIn()) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    adminLogout();
    navigate('/admin/login');
  };

  const navItems = [
    {
      href: '/admin/profile',
      label: 'Profile & Skills',
      icon: User,
    },
    {
      href: '/admin/content',
      label: 'Projects & Experience',
      icon: FileText,
    },
    {
      href: '/admin/manage',
      label: 'Inquiries & Downloads',
      icon: MessageSquare,
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  if (!isAdminLoggedIn()) {
    return null;
  }

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r border-border flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-primary">Portfolio Admin</h2>
        </div>
        
        <nav className="flex-1 px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-md mb-2 transition-colors ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="w-full justify-start gap-3"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-card border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-foreground">
              Admin Dashboard
            </h1>
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              View Portfolio →
            </Link>
          </div>
        </header>

        <main className="flex-1 p-6 bg-muted/50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;