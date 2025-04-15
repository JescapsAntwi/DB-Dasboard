import { useState } from "react";
import { Check, PenLine, Save } from "lucide-react";
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
import { useToast } from "@/components/ui/use-toast";
import { ChevronRight } from "lucide-react";

const GeneralTab = () => {
  const { toast } = useToast();
  const [companyInfo, setCompanyInfo] = useState({
    name: "Humanix Inc.",
    email: "info@humanix.io",
    website: "https://humanix.io",
    phone: "+1 (555) 123-4567",
    address: "123 Business Ave, Suite 100, San Francisco, CA 94107",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleCompanyInfoChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo((prev) => ({
      ...prev,
      [name]: value,
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

  return (
    <div className="space-y-4">
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
          <CardDescription>Customize how the system operates</CardDescription>
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
    </div>
  );
};

export default GeneralTab;
