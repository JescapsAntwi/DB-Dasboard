import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, PenLine, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [companyInfo, setCompanyInfo] = useState({
    name: "Databank Inc.",
    email: "info@databank.io",
    website: "https://www.databankgroup.com/",
    phone: "+1 (555) 123-4567",
    address: "123 Business Ave, Suite 100, San Francisco, CA 94107",
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailAlerts: true,
    newEmployees: true,
    leaveRequests: true,
    performanceReviews: true,
    securityAlerts: true,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleCompanyInfoChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNotificationChange = (key) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const saveCompanyInfo = () => {
    setIsEditing(false);
    toast({
      title: "Company information updated",
      description: "Your changes have been saved successfully.",
      action: (
        <div className="h-8 w-8 bg-emerald-500 rounded-full flex items-center justify-center text-white">
          <Check className="h-4 w-4" />
        </div>
      ),
    });
  };

  const saveNotificationSettings = () => {
    toast({
      title: "Notification settings updated",
      description: "Your preferences have been saved successfully.",
      action: (
        <div className="h-8 w-8 bg-emerald-500 rounded-full flex items-center justify-center text-white">
          <Check className="h-4 w-4" />
        </div>
      ),
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-humanix-text mb-1">
          System Settings
        </h1>
        <p className="text-humanix-muted">
          Manage your system preferences and configuration
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="bg-slate-100 p-1">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security & Privacy</TabsTrigger>
          <TabsTrigger value="integration">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-lg font-semibold">
                  Company Information
                </CardTitle>
                <CardDescription>
                  Manage your company details and contact information
                </CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
                className="h-8"
              >
                {isEditing ? (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save
                  </>
                ) : (
                  <>
                    <PenLine className="mr-2 h-4 w-4" />
                    Edit
                  </>
                )}
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input
                    id="company-name"
                    name="name"
                    defaultValue={companyInfo.name}
                    onChange={handleCompanyInfoChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-email">Email Address</Label>
                  <Input
                    id="company-email"
                    name="email"
                    defaultValue={companyInfo.email}
                    onChange={handleCompanyInfoChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-website">Website</Label>
                  <Input
                    id="company-website"
                    name="website"
                    defaultValue={companyInfo.website}
                    onChange={handleCompanyInfoChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-phone">Phone Number</Label>
                  <Input
                    id="company-phone"
                    name="phone"
                    defaultValue={companyInfo.phone}
                    onChange={handleCompanyInfoChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="company-address">Address</Label>
                  <Input
                    id="company-address"
                    name="address"
                    defaultValue={companyInfo.address}
                    onChange={handleCompanyInfoChange}
                    disabled={!isEditing}
                  />
                </div>
              </div>
              {isEditing && (
                <Button
                  className="mt-4 bg-humanix-primary hover:bg-humanix-primary/90"
                  onClick={saveCompanyInfo}
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">
                System Preferences
              </CardTitle>
              <CardDescription>
                Customize how the system operates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Use 24-hour time format</Label>
                    <p className="text-sm text-slate-500">
                      Display time in 24-hour format instead of AM/PM
                    </p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Default language</Label>
                    <p className="text-sm text-slate-500">
                      Set the default language for the system
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-sm">English (US)</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Date format</Label>
                    <p className="text-sm text-slate-500">
                      Set how dates are displayed throughout the system
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-sm">MM/DD/YYYY</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">
                Notification Preferences
              </CardTitle>
              <CardDescription>
                Control which notifications you receive and how they're
                delivered
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-slate-500">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.emailAlerts}
                    onCheckedChange={() =>
                      handleNotificationChange("emailAlerts")
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>New Employee Alerts</Label>
                    <p className="text-sm text-slate-500">
                      Get notified when new employees join
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.newEmployees}
                    onCheckedChange={() =>
                      handleNotificationChange("newEmployees")
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Leave Requests</Label>
                    <p className="text-sm text-slate-500">
                      Get notified about leave requests
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.leaveRequests}
                    onCheckedChange={() =>
                      handleNotificationChange("leaveRequests")
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Performance Reviews</Label>
                    <p className="text-sm text-slate-500">
                      Get notified about upcoming and completed reviews
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.performanceReviews}
                    onCheckedChange={() =>
                      handleNotificationChange("performanceReviews")
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Security Alerts</Label>
                    <p className="text-sm text-slate-500">
                      Receive notifications about security events
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.securityAlerts}
                    onCheckedChange={() =>
                      handleNotificationChange("securityAlerts")
                    }
                  />
                </div>
                <Button
                  className="mt-2 bg-humanix-primary hover:bg-humanix-primary/90"
                  onClick={saveNotificationSettings}
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">
                Security Settings
              </CardTitle>
              <CardDescription>
                Manage security and privacy settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-slate-500">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Session Timeout</Label>
                    <p className="text-sm text-slate-500">
                      Automatically log out after period of inactivity
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-sm">30 minutes</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Password Requirements</Label>
                    <p className="text-sm text-slate-500">
                      Set minimum requirements for passwords
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-sm">Strong</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Data Privacy</Label>
                    <p className="text-sm text-slate-500">
                      Manage how your data is used and stored
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integration" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">
                System Integrations
              </CardTitle>
              <CardDescription>
                Connect with other tools and services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5 flex items-center">
                    <div className="h-10 w-10 rounded bg-slate-100 flex items-center justify-center mr-3">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M10.5 13.5H13.5V16.5H10.5V13.5Z"
                          fill="#0084FF"
                        />
                        <path
                          d="M7.5 10.5H10.5V13.5H7.5V10.5Z"
                          fill="#0084FF"
                        />
                        <path
                          d="M13.5 10.5H16.5V13.5H13.5V10.5Z"
                          fill="#0084FF"
                        />
                        <path
                          d="M10.5 7.5H13.5V10.5H10.5V7.5Z"
                          fill="#0084FF"
                        />
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
                        <path
                          d="M13.5 13.5H10.5V10.5H13.5V13.5Z"
                          fill="white"
                        />
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
