import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Upload, Link as LinkIcon } from 'lucide-react';

const mockCallLog = [
  { id: 1, date: '10/27/2025', time: '12:12 AM', number: '+19556237266', duration: '5m 17s', status: 'completed' },
  { id: 2, date: '10/24/2025', time: '11:49 PM', number: '6102891010', duration: '3m 23s', status: 'completed' },
  { id: 3, date: '10/24/2025', time: '12:39 PM', number: '+12025783435', duration: '6m 16s', status: 'completed' },
  { id: 4, date: '10/24/2025', time: '12:12 AM', number: '+19556237266', duration: '5m 46s', status: 'completed' },
];

export default function CallLogView() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-1">Sky IQ Dashboard Example</h1>
      </div>

      {/* Call Log Table */}
      <div className="border rounded-lg overflow-x-auto bg-card">
        <table className="w-full min-w-[600px]">
          <thead className="bg-muted/50 border-b">
            <tr>
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Date</th>
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Time</th>
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Phone Number</th>
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Duration</th>
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockCallLog.map((call) => (
              <tr key={call.id} className="border-b last:border-b-0 hover:bg-muted/20">
                <td className="py-3 px-4 text-sm">{call.date}</td>
                <td className="py-3 px-4 text-sm">{call.time}</td>
                <td className="py-3 px-4 text-sm">{call.number}</td>
                <td className="py-3 px-4 text-sm">{call.duration}</td>
                <td className="py-3 px-4">
                  <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    completed
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 text-center border-t">
          <Button variant="ghost" size="sm" data-testid="button-view-all-calls">View All Calls</Button>
        </div>
      </div>

      {/* Business Context Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Business Context</h2>
          <Button variant="outline" size="sm" data-testid="button-upload-file">Upload File</Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Help us personalize your AI's behavior. Upload any files, links, or notes that help explain your business, services, or customer experience.
        </p>
        
        <div className="border-2 border-dashed rounded-lg p-12 text-center bg-muted/20">
          <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-sm text-muted-foreground mb-1">Upload PDF's, DOCX, .doc, or PNG files (5MB)</p>
        </div>
      </div>

      {/* Links Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Links</h2>
        <div className="border rounded-lg p-8 text-center bg-muted/20">
          <LinkIcon className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
          <p className="text-sm text-muted-foreground mb-4">Add links to websites, social media, or other resources</p>
          <Button size="sm" data-testid="button-add-link">Add</Button>
        </div>
      </div>

      {/* Notes Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Notes & Instructions</h2>
          <Button variant="outline" size="sm" data-testid="button-save-notes">Save Notes</Button>
        </div>
        <Textarea 
          placeholder="e.g. 'Our business improves their online presence.'"
          className="min-h-32 resize-none"
          defaultValue="e.g. 'Our business improves their online presence.'"
          data-testid="textarea-notes"
        />
        <p className="text-xs text-muted-foreground">
          Tip: The more context you provide, the better your AI assistant will represent your business.
        </p>
      </div>
    </div>
  );
}
