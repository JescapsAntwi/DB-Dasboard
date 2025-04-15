import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GeneralTab from "@/components/settings/GeneralTab";
import NotificationsTab from "@/components/settings/NotificationsTab";
import SecurityTab from "@/components/settings/SecurityTab";
import IntegrationsTab from "@/components/settings/IntegrationsTab";

const Settings = () => {
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
          <GeneralTab />
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <NotificationsTab />
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <SecurityTab />
        </TabsContent>

        <TabsContent value="integration" className="space-y-4">
          <IntegrationsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
