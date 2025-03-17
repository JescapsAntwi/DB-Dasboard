import { useState } from "react";
import {
  ArrowUpDown,
  ChevronDown,
  Download,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  UserPlus,
  Pencil,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const Employees = () => {
  // Mock employee data
  const employees = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.johnson@databank.com",
      department: "Engineering",
      position: "Senior Developer",
      status: "Active",
      joined: "Jan 12, 2022",
    },
    {
      id: 2,
      name: "Samantha Lee",
      email: "samantha.lee@databank.com",
      department: "Marketing",
      position: "Marketing Manager",
      status: "Active",
      joined: "Mar 15, 2021",
    },
    {
      id: 3,
      name: "David Chen",
      email: "david.chen@databank.com",
      department: "Sales",
      position: "Account Executive",
      status: "On Leave",
      joined: "Nov 5, 2022",
    },
    {
      id: 4,
      name: "Emily Wilson",
      email: "emily.wilson@databank.com",
      department: "HR",
      position: "HR Specialist",
      status: "Active",
      joined: "Jun 23, 2021",
    },
    {
      id: 5,
      name: "Michael Thompson",
      email: "michael.thompson@databank.com",
      department: "Finance",
      position: "Financial Analyst",
      status: "Active",
      joined: "Sep 8, 2020",
    },
    {
      id: 6,
      name: "Olivia Martinez",
      email: "olivia.martinez@databank.com",
      department: "Engineering",
      position: "QA Engineer",
      status: "Inactive",
      joined: "Feb 17, 2023",
    },
  ];

  // Department Distribution Data
  const departmentData = [
    { name: "Engineering", value: 42 },
    { name: "Marketing", value: 18 },
    { name: "Sales", value: 25 },
    { name: "HR", value: 8 },
    { name: "Finance", value: 12 },
  ];

  const COLORS = ["#5d5fef", "#8c63e2", "#06b6d4", "#f472b6", "#f59e0b"];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-emerald-100 text-emerald-800";
      case "Inactive":
        return "bg-rose-100 text-rose-800";
      case "On Leave":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-humanix-text mb-1">
            Employees
          </h1>
          <p className="text-humanix-muted">Manage your company's workforce</p>
        </div>
        <Button className="bg-humanix-primary hover:bg-humanix-primary/90">
          <UserPlus className="mr-2 h-4 w-4" />
          Add Employee
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="dashboard-card md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold text-humanix-text">
              Employee Directory
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-humanix-muted" />
                <Input
                  type="search"
                  placeholder="Search employees..."
                  className="pl-8 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Button variant="outline" size="sm" className="h-9">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="h-9">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        Department
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEmployees.map((employee) => (
                    <TableRow key={employee.id} className="h-16">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8 bg-gradient-to-r from-humanix-primary to-humanix-secondary text-white">
                            <AvatarFallback>
                              {getInitials(employee.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{employee.name}</div>
                            <div className="text-xs text-humanix-muted">
                              {employee.email}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{employee.department}</TableCell>
                      <TableCell>{employee.position}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={getStatusColor(employee.status)}
                        >
                          {employee.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{employee.joined}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                              <Pencil className="h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="flex items-center gap-2 text-rose-600 cursor-pointer">
                              <Trash2 className="h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {filteredEmployees.length === 0 && (
                <div className="flex items-center justify-center h-32 text-humanix-muted">
                  No employees found matching your search.
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold text-humanix-text">
              Department Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {departmentData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [`${value} employees`, "Count"]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-1">
              {departmentData.map((dept, index) => (
                <div
                  key={dept.name}
                  className="flex justify-between items-center text-sm"
                >
                  <div className="flex items-center">
                    <div
                      className="h-3 w-3 rounded-full mr-2"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span>{dept.name}</span>
                  </div>
                  <span className="font-medium">{dept.value} employees</span>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              <Plus className="mr-2 h-4 w-4" />
              Add Department
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Employees;
