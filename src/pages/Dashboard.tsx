
import { Activity, ArrowUp, Award, BarChart4, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  AreaChart, Area, BarChart, Bar, PieChart, Pie, ResponsiveContainer, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell 
} from "recharts";

const Dashboard = () => {
  // Mock data for charts
  const performanceData = [
    { month: "Jan", performance: 65 },
    { month: "Feb", performance: 59 },
    { month: "Mar", performance: 80 },
    { month: "Apr", performance: 81 },
    { month: "May", performance: 56 },
    { month: "Jun", performance: 55 },
    { month: "Jul", performance: 40 },
    { month: "Aug", performance: 70 },
    { month: "Sep", performance: 90 },
  ];

  const departmentData = [
    { name: "Engineering", value: 35 },
    { name: "Marketing", value: 25 },
    { name: "Sales", value: 20 },
    { name: "HR", value: 10 },
    { name: "Finance", value: 10 },
  ];

  const recruitmentData = [
    { month: "Jan", applications: 45, hires: 10 },
    { month: "Feb", applications: 52, hires: 12 },
    { month: "Mar", applications: 48, hires: 8 },
    { month: "Apr", applications: 61, hires: 15 },
    { month: "May", applications: 55, hires: 11 },
    { month: "Jun", applications: 67, hires: 14 },
  ];

  const COLORS = ['#5d5fef', '#8c63e2', '#06b6d4', '#f472b6', '#f59e0b'];

  const MetricCard = ({ icon: Icon, title, value, trend, isTrendUp = true }) => (
    <Card className="dashboard-card animate-hover">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="dashboard-metric-label">{title}</p>
            <h3 className="dashboard-metric text-2xl">{value}</h3>
            <div className={`flex items-center text-xs font-medium ${isTrendUp ? 'text-emerald-500' : 'text-rose-500'}`}>
              <ArrowUp className={`h-3 w-3 ${!isTrendUp && 'rotate-180'} mr-1`} />
              <span>{trend}</span>
            </div>
          </div>
          <div className="h-10 w-10 rounded-full bg-humanix-primary/10 flex items-center justify-center text-humanix-primary">
            <Icon size={20} />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-humanix-text mb-1">Dashboard</h1>
        <p className="text-humanix-muted">Welcome back, Admin! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard 
          icon={Users}
          title="Total Employees"
          value="1,248"
          trend="4% from last month"
          isTrendUp={true}
        />
        <MetricCard 
          icon={Activity}
          title="Engagement Rate"
          value="78%"
          trend="2% from last month"
          isTrendUp={true}
        />
        <MetricCard 
          icon={Award}
          title="Retention Rate"
          value="92.3%"
          trend="1.4% from last month"
          isTrendUp={false}
        />
        <MetricCard 
          icon={Clock}
          title="Avg. Time to Hire"
          value="18 days"
          trend="3 days from last month"
          isTrendUp={false}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="dashboard-card">
          <CardContent className="p-6">
            <h3 className="dashboard-section-title flex items-center">
              <BarChart4 className="mr-2 h-5 w-5 text-humanix-secondary" />
              Employee Performance
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={performanceData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="performance" 
                    stroke="#5d5fef" 
                    fill="url(#colorPerformance)" 
                  />
                  <defs>
                    <linearGradient id="colorPerformance" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#5d5fef" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#5d5fef" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardContent className="p-6">
            <h3 className="dashboard-section-title flex items-center">
              <Users className="mr-2 h-5 w-5 text-humanix-secondary" />
              Department Distribution
            </h3>
            <div className="h-80 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={4}
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-card col-span-1 lg:col-span-2">
          <CardContent className="p-6">
            <h3 className="dashboard-section-title flex items-center">
              <Award className="mr-2 h-5 w-5 text-humanix-secondary" />
              Recruitment Analytics
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={recruitmentData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="applications" name="Applications" fill="#5d5fef" />
                  <Bar dataKey="hires" name="Hires" fill="#06b6d4" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
