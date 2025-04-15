import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Plus } from "lucide-react";

const IntegrationsTab = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">
          System Integrations
        </CardTitle>
        <CardDescription>Connect with other tools and services</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5 flex items-center">
              <div className="h-10 w-10 rounded bg-slate-100 flex items-center justify-center mr-3">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path d="M10.5 13.5H13.5V16.5H10.5V13.5Z" fill="#0084FF" />
                  <path d="M7.5 10.5H10.5V13.5H7.5V10.5Z" fill="#0084FF" />
                  <path d="M13.5 10.5H16.5V13.5H13.5V10.5Z" fill="#0084FF" />
                  <path d="M10.5 7.5H13.5V10.5H10.5V7.5Z" fill="#0084FF" />
                </svg>
              </div>
              <div>
                <Label>Slack Integration</Label>
                <p className="text-sm text-slate-500">
                  Send notifications to Slack channels
                </p>
              </div>
            </div>
            <Switch />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5 flex items-center">
              <div className="h-10 w-10 rounded bg-slate-100 flex items-center justify-center mr-3">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19.2 5H4.8C3.81 5 3 5.81 3 6.8V17.2C3 18.19 3.81 19 4.8 19H19.2C20.19 19 21 18.19 21 17.2V6.8C21 5.81 20.19 5 19.2 5Z"
                    fill="#F2F2F2"
                    stroke="#4285F4"
                    strokeWidth="2"
                  />
                  <path d="M3 9H21V11H3V9Z" fill="#4285F4" />
                </svg>
              </div>
              <div>
                <Label>Google Workspace</Label>
                <p className="text-sm text-slate-500">
                  Sync calendar and contacts
                </p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5 flex items-center">
              <div className="h-10 w-10 rounded bg-slate-100 flex items-center justify-center mr-3">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L21 7V17L12 22L3 17V7L12 2Z"
                    fill="#FFD600"
                    stroke="#FFD600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22V12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 12L21 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 12L3 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <Label>Power BI</Label>
                <p className="text-sm text-slate-500">
                  Advanced analytics and reporting
                </p>
              </div>
            </div>
            <Switch />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5 flex items-center">
              <div className="h-10 w-10 rounded bg-slate-100 flex items-center justify-center mr-3">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="4" fill="#1F83F7" />
                  <path d="M19 8.5H15V5H19V8.5Z" fill="white" />
                  <path d="M19 19H15V15H19V19Z" fill="white" />
                  <path d="M8.5 19H5V15H8.5V19Z" fill="white" />
                  <path d="M13.5 13.5H10.5V10.5H13.5V13.5Z" fill="white" />
                  <path d="M8.5 8.5H5V5H8.5V8.5Z" fill="white" />
                </svg>
              </div>
              <div>
                <Label>Jira</Label>
                <p className="text-sm text-slate-500">
                  Project management integration
                </p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
          <Button variant="outline" className="mt-2 w-full">
            <Plus className="mr-2 h-4 w-4" />
            Add New Integration
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default IntegrationsTab;
