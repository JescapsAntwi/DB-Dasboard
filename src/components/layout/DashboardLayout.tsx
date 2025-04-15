import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import { cn } from "@/lib/utils";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-humanix-background">
        <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <div
          className={cn(
            "flex-1 transition-all duration-300 w-full",
            sidebarOpen ? "md:ml-64" : "ml-0"
          )}
        >
          <DashboardHeader toggleSidebar={toggleSidebar} />
          <main className="p-4 md:p-6 animate-fade-in">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
