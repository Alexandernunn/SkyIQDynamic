import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Info, Phone, Download } from 'lucide-react';

export default function BulkCallerView() {
  const [uploadMethod, setUploadMethod] = useState<'csv' | 'manual'>('csv');
  const [campaignName, setCampaignName] = useState('');

  return (
    <div className="space-y-6">
      <div>
        <Button variant="ghost" size="sm" className="mb-4" data-testid="button-back">
          ← Back to Dashboard
        </Button>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">Bulk Caller</h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Reach multiple contacts simultaneously with AI-powered batch calling. Personalize each call with dynamic variables like names, cities, and custom fields.
        </p>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <div className="flex gap-3">
          <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium text-blue-900 dark:text-blue-100 mb-1">
              Pro tip: Add custom fields like <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">name</code>, <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">city</code>, or <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">industry</code> to personalize each call. Use <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">{"{{name}}"}</code> in your AI agent's prompt to reference them!
            </p>
          </div>
        </div>
      </div>

      {/* Create Campaign */}
      <div className="border rounded-lg p-6 bg-card space-y-6">
        <h2 className="text-lg font-semibold">Create Batch Campaign</h2>
        <p className="text-sm text-muted-foreground">
          Choose between manual entry or CSV upload to add your recipients
        </p>

        <div>
          <label className="text-sm font-medium mb-2 block">Campaign Name</label>
          <Input
            placeholder="e.g., Q1 Sales Outreach"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
            data-testid="input-campaign-name"
          />
        </div>

        {/* Upload Method Tabs */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setUploadMethod('csv')}
              className={`p-4 border-2 rounded-lg text-left transition-all ${
                uploadMethod === 'csv' 
                  ? 'border-primary bg-primary/5' 
                  : 'border-border hover:border-primary/50'
              }`}
              data-testid="button-option-csv"
            >
              <div className="flex items-center gap-2 mb-2">
                <Upload className="w-4 h-4 text-primary" />
                <span className="font-medium">Option 1: Upload CSV</span>
              </div>
              <p className="text-xs text-muted-foreground">Import contacts from a spreadsheet</p>
            </button>

            <button
              onClick={() => setUploadMethod('manual')}
              className={`p-4 border-2 rounded-lg text-left transition-all ${
                uploadMethod === 'manual' 
                  ? 'border-primary bg-primary/5' 
                  : 'border-border hover:border-primary/50'
              }`}
              data-testid="button-option-manual"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium">Option 2: Manual Entry</span>
              </div>
              <p className="text-xs text-muted-foreground">Enter phone numbers (one per line)</p>
            </button>
          </div>

          {uploadMethod === 'csv' ? (
            <div className="space-y-4">
              <div className="border-2 border-dashed rounded-lg p-12 text-center bg-muted/20">
                <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm mb-2">Choose File - No file chosen</p>
                <Button variant="outline" size="sm" data-testid="button-choose-file">
                  Choose File
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="w-full" data-testid="button-download-template">
                <Download className="w-4 h-4 mr-2" />
                Download CSV Template
              </Button>
              
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-sm font-medium mb-2">CSV Format Requirements:</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• <strong>Required:</strong> phone_number column with valid phone numbers in E.164 format</li>
                  <li>• <strong>Optional:</strong> Each column header becomes a variable</li>
                  <li>• <strong>Example:</strong> name, city, company, industry</li>
                </ul>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 font-mono text-xs">
                <p className="mb-2 font-sans font-medium text-sm">Example CSV:</p>
                <pre className="text-muted-foreground">
phone_number, first_name, company<br/>
+12025550123, Robert, ABC Corp<br/>
+12025550456, Sarah, XYZ Inc
                </pre>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <Textarea
                placeholder="Enter phone numbers (one per line)...&#10;&#10;+12025550123&#10;+12025550456&#10;+12025550789"
                className="min-h-48 font-mono text-sm"
                data-testid="textarea-phone-numbers"
              />
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-sm font-medium mb-2">Format Options:</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• <strong>Phone only:</strong> +12025550789, +12025556666</li>
                  <li>• <strong>With name:</strong> +12025558888 (First Name)</li>
                  <li>• <strong>Name first:</strong> First Name +12025551919</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Schedule Section */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold">Schedule for Later (Optional)</h3>
          <Input type="datetime-local" data-testid="input-schedule" />
          <p className="text-xs text-muted-foreground">
            Leave empty to start immediately when campaign is created
          </p>
        </div>

        <Button 
          className="w-full" 
          size="lg"
          disabled={!campaignName}
          data-testid="button-create-campaign"
          onClick={() => console.log('Creating campaign:', campaignName)}
        >
          <Phone className="w-4 h-4 mr-2" />
          Create Batch Call Campaign
        </Button>
      </div>

      {/* Batch Call History */}
      <div className="border rounded-lg p-6 bg-card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Batch Call History</h2>
          <Button variant="outline" size="sm" data-testid="button-view-calls">View Calls</Button>
        </div>
        <p className="text-sm text-muted-foreground text-center py-8">
          No batch campaigns yet. Create your first campaign above!
        </p>
      </div>
    </div>
  );
}

