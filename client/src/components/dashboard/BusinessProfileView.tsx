import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Upload, Link as LinkIcon } from 'lucide-react';

export default function BusinessProfileView() {
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Business Profile</h1>
          <p className="text-sm text-muted-foreground">Manage your business information and branding</p>
        </div>
        <Button data-testid="button-edit-profile">Edit Profile</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Avatar and Basic Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center text-3xl font-bold mb-4">
                UV
              </div>
              <Button variant="outline" size="sm" data-testid="button-change-logo">
                Change Logo
              </Button>
            </div>
          </div>

          <div className="border rounded-lg p-6 bg-card space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Business Name</label>
              <Input
                placeholder="e.g., Acme Corp"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                data-testid="input-business-name"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Email Address</label>
              <Input
                type="email"
                placeholder="info@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="input-email"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Phone Number</label>
              <Input
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                data-testid="input-phone"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Business Address</label>
              <Input
                placeholder="Denver, CO"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                data-testid="input-address"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Tabs */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="description" className="flex-1" data-testid="tab-description">Description</TabsTrigger>
              <TabsTrigger value="links" className="flex-1" data-testid="tab-links">Links</TabsTrigger>
              <TabsTrigger value="files" className="flex-1" data-testid="tab-files">Files</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <div className="border rounded-lg p-6 bg-card space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Business Description</label>
                  <Textarea
                    placeholder="e.g. 'Our business improves their online presence.'"
                    className="min-h-48"
                    defaultValue="e.g. 'Our business improves their online presence.'"
                    data-testid="textarea-description"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    Help your AI agent understand your business better. This description will be used to personalize conversations.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="links" className="mt-6">
              <div className="border rounded-lg p-8 bg-card text-center">
                <LinkIcon className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-4">
                  Add links to your website, social media, or other resources
                </p>
                <Button data-testid="button-add-link">Add Link</Button>
              </div>
            </TabsContent>

            <TabsContent value="files" className="mt-6">
              <div className="border rounded-lg p-6 bg-card space-y-4">
                <p className="text-sm text-muted-foreground">
                  Upload files to help your AI agent better understand your business
                </p>
                <div className="border-2 border-dashed rounded-lg p-12 text-center bg-muted/20">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-1">
                    Upload PDF's, DOCX, .doc, or PNG files (5MB)
                  </p>
                  <Button variant="outline" className="mt-4" data-testid="button-choose-files">
                    Choose Files
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
