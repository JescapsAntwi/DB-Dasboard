import { useState } from "react";
import { Check, Save } from "lucide-react";
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
import { useToast } from "@/components/ui/use-toast";

const NotificationsTab = () => {
  const { toast } = useToast();
  const [notificationSettings, setNotificationSettings] = useState({
    emailAlerts: true,
    newEmployees: true,
    leaveRequests: true,
    performanceReviews: true,
    securityAlerts: true,
  });

  const handleNotificationChange = (key) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
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
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">
          Notification Preferences
        </CardTitle>
        <CardDescription>
          Control which notifications you receive and how they're delivered
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
              onCheckedChange={() => handleNotificationChange("emailAlerts")}
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
              onCheckedChange={() => handleNotificationChange("newEmployees")}
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
              onCheckedChange={() => handleNotificationChange("leaveRequests")}
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
              onCheckedChange={() => handleNotificationChange("securityAlerts")}
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
  );
};

export default NotificationsTab;
