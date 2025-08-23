import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '@/components/AdminLayout';

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to profile page by default
    navigate('/admin/profile');
  }, [navigate]);

  return (
    <AdminLayout>
      <div className="flex items-center justify-center h-64">
        <div className="text-lg">Redirecting to profile...</div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;