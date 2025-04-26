import React from 'react';
import { PieChart, Pie, Cell, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, BarChart, Bar, AreaChart, Area } from "recharts";

const COLORS = ["#7C3AED", "#F59E0B", "#10B981"]; // purple, amber, emerald

const CareerAnalytics = ({ appliedJobs, savedJobs, viewedJobs }) => {
  const pieData = [
    { name: "Applied Jobs", value: appliedJobs.length },
    { name: "Saved Jobs", value: savedJobs.length },
    { name: "Viewed Jobs", value: viewedJobs.length },
  ];

  // Create timeline data
  const generateTimelineData = (jobs, fieldName) => 
    jobs.map((job, index) => ({
      date: new Date(job[fieldName] || Date.now() - index * 86400000).toLocaleDateString(),
      count: index + 1,
    }));

  const appliedTimeline = generateTimelineData(appliedJobs, 'applied_at');
  const savedTimeline = generateTimelineData(savedJobs, 'saved_at');
  const viewedTimeline = generateTimelineData(viewedJobs, 'viewed_at');

  // Cumulative Data for Area Chart
  const cumulativeTimeline = appliedTimeline.map((item, index) => ({
    date: item.date,
    total: index + 1,
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-8">
      <h3 className="text-xl font-semibold mb-6">Career Analytics Dashboard</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Pie Chart */}
        <div>
          <h4 className="text-lg font-medium mb-2">Compare Saved vs Applied vs Viewed</h4>
          <PieChart width={300} height={300}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* Timeline of Applied Jobs */}
        <div>
          <h4 className="text-lg font-medium mb-2">Timeline of Applied Jobs</h4>
          <LineChart
            width={350}
            height={300}
            data={appliedTimeline}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#7C3AED" activeDot={{ r: 8 }} />
          </LineChart>
        </div>

        {/* Timeline of Saved Jobs */}
        <div>
          <h4 className="text-lg font-medium mb-2">Timeline of Saved Jobs</h4>
          <LineChart
            width={350}
            height={300}
            data={savedTimeline}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#F59E0B" activeDot={{ r: 8 }} />
          </LineChart>
        </div>

        {/* Timeline of Recently Viewed Jobs */}
        <div>
          <h4 className="text-lg font-medium mb-2">Timeline of Recently Viewed Jobs</h4>
          <LineChart
            width={350}
            height={300}
            data={viewedTimeline}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#10B981" activeDot={{ r: 8 }} />
          </LineChart>
        </div>

        {/* New Visualization 1: Bar Chart */}
        <div>
          <h4 className="text-lg font-medium mb-2">Overall Jobs Activity (Bar Chart)</h4>
          <BarChart width={350} height={300} data={pieData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#7C3AED" />
          </BarChart>
        </div>

        {/* New Visualization 2: Area Chart */}
        <div>
          <h4 className="text-lg font-medium mb-2">Cumulative Applied Jobs Over Time</h4>
          <AreaChart width={350} height={300} data={cumulativeTimeline} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#7C3AED" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="total" stroke="#7C3AED" fillOpacity={1} fill="url(#colorTotal)" />
          </AreaChart>
        </div>

      </div>
    </div>
  );
};

export default CareerAnalytics;
