import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart4,
  ShieldCheck,
  FileText,
  BookOpen,
  Briefcase,
  TrendingUp,
  Calendar,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  open: boolean;
}

const DashboardSidebar = ({ open }: SidebarProps) => {
  const mainMenuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Analytics", icon: BarChart4, path: "/analytics" },
  ];

  const humanCapitalItems = [
    { name: "Employees", icon: Users, path: "/human-capital/employees" },
    { name: "Talent", icon: Award, path: "/human-capital/talent" },
    {
      name: "Performance",
      icon: TrendingUp,
      path: "/human-capital/performance",
    },
    { name: "Learning", icon: BookOpen, path: "/human-capital/learning" },
    {
      name: "Recruitment",
      icon: Briefcase,
      path: "/human-capital/recruitment",
    },
    { name: "Calendar", icon: Calendar, path: "/human-capital/calendar" },
  ];

  const adminItems = [
    { name: "Settings", icon: Settings, path: "/admin/settings" },
    { name: "Security", icon: ShieldCheck, path: "/admin/security" },
    { name: "Reports", icon: FileText, path: "/admin/reports" },
  ];

  const SidebarLink = ({
    item,
  }: {
    item: { name: string; icon: any; path: string };
  }) => {
    return (
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all",
            "hover:bg-humanix-primary hover:text-white",
            isActive
              ? "bg-humanix-primary text-white"
              : "text-slate-600 hover:text-white"
          )
        }
      >
        <item.icon size={18} />
        <span
          className={cn(
            "transition-opacity",
            open ? "opacity-100" : "opacity-0 md:opacity-100"
          )}
        >
          {item.name}
        </span>
      </NavLink>
    );
  };

  const SidebarSection = ({
    title,
    items,
  }: {
    title: string;
    items: any[];
  }) => {
    return (
      <div className="mb-6">
        <h3
          className={cn(
            "mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500",
            open ? "opacity-100" : "opacity-0 md:opacity-100"
          )}
        >
          {title}
        </h3>
        <div className="space-y-1">
          {items.map((item) => (
            <SidebarLink key={item.path} item={item} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 shadow-sm",
        "flex flex-col transition-all duration-300 ease-in-out",
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0 md:w-16"
      )}
    >
      <div className="flex h-16 items-center justify-center border-b px-4">
        <h1
          className={cn(
            "font-bold text-xl text-humanix-primary flex items-center gap-2",
            open ? "opacity-100" : "opacity-0 md:opacity-100"
          )}
        >
          <span className="text-humanix-secondary text-2xl">DB</span>
          <span
            className={cn("transition-opacity", !open && "hidden md:hidden")}
          >
            DATABANK
          </span>
        </h1>
      </div>
      <div className="flex-1 overflow-auto p-3">
        <SidebarSection title="Main" items={mainMenuItems} />
        <SidebarSection title="Human Capital" items={humanCapitalItems} />
        <SidebarSection title="Administration" items={adminItems} />
      </div>
      <div className="border-t border-slate-200 p-3">
        <div className="flex items-center gap-3 rounded-md px-3 py-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-humanix-primary to-humanix-secondary flex items-center justify-center text-white font-medium">
            AD
          </div>
          <div
            className={cn(
              "transition-opacity",
              open ? "opacity-100" : "opacity-0 md:opacity-100"
            )}
          >
            <div className="text-sm font-medium">Admin User</div>
            <div className="text-xs text-slate-500">admin@databank.com</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
