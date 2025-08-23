import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { 
  getInquiries, 
  getDownloads,
  updateInquiry,
  deleteInquiry,
  createDownload,
  updateDownload,
  deleteDownload,
  Inquiry, 
  Download 
} from '@/lib/admin';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Eye, Mail, Download as DownloadIcon } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';

const AdminManage = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [downloads, setDownloads] = useState<Download[]>([]);
  const [viewingInquiry, setViewingInquiry] = useState<Inquiry | null>(null);
  const [editingDownload, setEditingDownload] = useState<Download | null>(null);
  const [inquiryDialogOpen, setInquiryDialogOpen] = useState(false);
  const [downloadDialogOpen, setDownloadDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [inquiriesResult, downloadsResult] = await Promise.all([
        getInquiries(),
        getDownloads()
      ]);

      if (inquiriesResult.error) {
        toast({
          title: "Error loading inquiries",
          description: inquiriesResult.error.message,
          variant: "destructive",
        });
      } else {
        setInquiries(inquiriesResult.data || []);
      }

      if (downloadsResult.error) {
        toast({
          title: "Error loading downloads",
          description: downloadsResult.error.message,
          variant: "destructive",
        });
      } else {
        setDownloads(downloadsResult.data || []);
      }
    } catch (error) {
      toast({
        title: "Error loading data",
        description: "Failed to load inquiries and downloads",
        variant: "destructive",
      });
    }
  };

  const handleInquiryUpdate = async (id: string, updates: Partial<Inquiry>) => {
    try {
      const { error } = await updateInquiry(id, updates);
      if (error) throw error;
      
      toast({
        title: "Inquiry updated",
        description: "Inquiry status has been updated.",
      });
      loadData();
    } catch (error: any) {
      toast({
        title: "Error updating inquiry",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDeleteInquiry = async (id: string) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;
    
    try {
      const { error } = await deleteInquiry(id);
      if (error) throw error;
      
      toast({
        title: "Inquiry deleted",
        description: "Inquiry has been deleted successfully.",
      });
      loadData();
    } catch (error: any) {
      toast({
        title: "Error deleting inquiry",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDownloadSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingDownload) return;

    setLoading(true);
    try {
      if (editingDownload.id) {
        const { error } = await updateDownload(editingDownload.id, editingDownload);
        if (error) throw error;
      } else {
        const { error } = await createDownload(editingDownload);
        if (error) throw error;
      }

      toast({
        title: "Download saved",
        description: "Download has been saved successfully.",
      });
      
      loadData();
      setDownloadDialogOpen(false);
      setEditingDownload(null);
    } catch (error: any) {
      toast({
        title: "Error saving download",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteDownload = async (id: string) => {
    if (!confirm('Are you sure you want to delete this download?')) return;
    
    try {
      const { error } = await deleteDownload(id);
      if (error) throw error;
      
      toast({
        title: "Download deleted",
        description: "Download has been deleted successfully.",
      });
      loadData();
    } catch (error: any) {
      toast({
        title: "Error deleting download",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const openDownloadDialog = (download?: Download) => {
    if (download) {
      setEditingDownload(download);
    } else {
      setEditingDownload({
        file_name: '',
        file_type: 'resume_pm',
        file_url: '',
        description: '',
        download_count: 0,
        is_active: true
      });
    }
    setDownloadDialogOpen(true);
  };

  const viewInquiry = (inquiry: Inquiry) => {
    setViewingInquiry(inquiry);
    setInquiryDialogOpen(true);
    
    // Mark as read if not already
    if (!inquiry.is_read) {
      handleInquiryUpdate(inquiry.id, { is_read: true });
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="inquiries" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
            <TabsTrigger value="downloads">Downloads</TabsTrigger>
          </TabsList>

          {/* Inquiries Tab */}
          <TabsContent value="inquiries" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Inquiries Management</h2>
              <div className="flex gap-2">
                <Badge variant="outline">{inquiries.filter(i => !i.is_read).length} Unread</Badge>
                <Badge variant="outline">{inquiries.filter(i => !i.is_replied).length} Pending Reply</Badge>
              </div>
            </div>

            <div className="grid gap-4">
              {inquiries.map((inquiry) => (
                <Card key={inquiry.id} className={inquiry.is_read ? '' : 'border-primary'}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold">{inquiry.name}</h3>
                          {!inquiry.is_read && <Badge variant="destructive">New</Badge>}
                          {inquiry.is_replied && <Badge variant="default">Replied</Badge>}
                        </div>
                        <p className="text-muted-foreground mb-1">{inquiry.email}</p>
                        <p className="text-sm text-muted-foreground mb-2">{inquiry.subject}</p>
                        <p className="text-sm line-clamp-2 mb-2">{inquiry.message}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(inquiry.created_at).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => viewInquiry(inquiry)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleInquiryUpdate(inquiry.id, { is_replied: !inquiry.is_replied })}
                        >
                          <Mail className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteInquiry(inquiry.id)}
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

          {/* Downloads Tab */}
          <TabsContent value="downloads" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Downloads Management</h2>
              <Button onClick={() => openDownloadDialog()}>
                <Plus className="w-4 h-4 mr-2" />
                Add Download
              </Button>
            </div>

            <div className="grid gap-4">
              {downloads.map((download) => (
                <Card key={download.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold">{download.file_name}</h3>
                          <Badge variant="outline">{download.file_type}</Badge>
                          <Badge variant={download.is_active ? "default" : "secondary"}>
                            {download.is_active ? 'Active' : 'Inactive'}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-2">{download.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <DownloadIcon className="w-4 h-4" />
                            {download.download_count} downloads
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openDownloadDialog(download)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteDownload(download.id!)}
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

        {/* Inquiry View Dialog */}
        <Dialog open={inquiryDialogOpen} onOpenChange={setInquiryDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Inquiry Details</DialogTitle>
            </DialogHeader>
            {viewingInquiry && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Name</Label>
                    <p className="mt-1">{viewingInquiry.name}</p>
                  </div>
                  <div>
                    <Label>Email</Label>
                    <p className="mt-1">{viewingInquiry.email}</p>
                  </div>
                </div>
                
                {viewingInquiry.phone && (
                  <div>
                    <Label>Phone</Label>
                    <p className="mt-1">{viewingInquiry.phone}</p>
                  </div>
                )}
                
                <div>
                  <Label>Subject</Label>
                  <p className="mt-1">{viewingInquiry.subject}</p>
                </div>
                
                <div>
                  <Label>Message</Label>
                  <div className="mt-1 p-3 bg-muted rounded-md">
                    <p className="whitespace-pre-wrap">{viewingInquiry.message}</p>
                  </div>
                </div>
                
                <div className="flex justify-between pt-4">
                  <p className="text-sm text-muted-foreground">
                    Received: {new Date(viewingInquiry.created_at).toLocaleString()}
                  </p>
                  <Button
                    onClick={() => handleInquiryUpdate(viewingInquiry.id, { is_replied: !viewingInquiry.is_replied })}
                  >
                    Mark as {viewingInquiry.is_replied ? 'Pending' : 'Replied'}
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Download Dialog */}
        <Dialog open={downloadDialogOpen} onOpenChange={setDownloadDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingDownload?.id ? 'Edit Download' : 'Add New Download'}
              </DialogTitle>
            </DialogHeader>
            {editingDownload && (
              <form onSubmit={handleDownloadSave} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="file_name">File Name *</Label>
                  <Input
                    id="file_name"
                    value={editingDownload.file_name}
                    onChange={(e) => setEditingDownload({...editingDownload, file_name: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file_type">File Type</Label>
                  <Select 
                    value={editingDownload.file_type} 
                    onValueChange={(value) => setEditingDownload({...editingDownload, file_type: value})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="resume_pm">Product Manager Resume</SelectItem>
                      <SelectItem value="resume_dev">Developer Resume</SelectItem>
                      <SelectItem value="n8n_template">n8n Template</SelectItem>
                      <SelectItem value="playbook">Playbook</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file_url">File URL *</Label>
                  <Input
                    id="file_url"
                    value={editingDownload.file_url}
                    onChange={(e) => setEditingDownload({...editingDownload, file_url: e.target.value})}
                    required
                    placeholder="https://example.com/file.pdf"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={editingDownload.description}
                    onChange={(e) => setEditingDownload({...editingDownload, description: e.target.value})}
                    rows={3}
                  />
                </div>

                <Button type="submit" disabled={loading}>
                  {loading ? 'Saving...' : 'Save Download'}
                </Button>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
};

export default AdminManage;