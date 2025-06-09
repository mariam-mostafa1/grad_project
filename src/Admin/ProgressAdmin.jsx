// import React from 'react';
// import './ProgressAdmin.css';

// const ProgressAdmin = () => {
//   // Sample stats — in real case, fetch from backend
//   const stats = [
//     { title: 'Total Orders', value: 1520 },
//     { title: 'Completed Orders', value: 1348 },
//     { title: 'Pending Orders', value: 172 },
//     { title: 'Revenue', value: '$24,300' },
//     { title: 'Active Clients', value: 312 },
//     { title: 'Feedbacks Received', value: 215 },
//   ];

//   return (
//     <div className="progress-admin">
//       <h2>📊 Our Progress Dashboard</h2>
//       <div className="stats-grid">
//         {stats.map((item, index) => (
//           <div className="stat-card" key={index}>
//             <h3>{item.title}</h3>
//             <p>{item.value}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProgressAdmin;


import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import "./ProgressAdmin.css";

const dataLine = [
  { name: "Jan", orders: 30 },
  { name: "Feb", orders: 45 },
  { name: "Mar", orders: 60 },
  { name: "Apr", orders: 50 },
  { name: "May", orders: 75 },
  { name: "Jun", orders: 90 },
];

const dataPie = [
  { name: "Completed", value: 70 },
  { name: "In Progress", value: 20 },
  { name: "Canceled", value: 10 },
];

const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];

function ProgressAdmin() {
  return (
    <div className="progress-admin">
      <h2>Our Progress</h2>
      <div className="charts-container">
        <div className="chart-box">
          <h3>Monthly Orders</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataLine}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="orders" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>Order Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={dataPie}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {dataPie.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default ProgressAdmin;
