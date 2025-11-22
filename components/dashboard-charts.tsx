"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

// --- Data ---

export const monthlyFinancialData = [
  { name: "ม.ค.", revenue: 2345670, expense: 1234560 },
  { name: "ก.พ.", revenue: 2100500, expense: 1100200 },
  { name: "มี.ค.", revenue: 2540000, expense: 1350000 },
  { name: "เม.ย.", revenue: 2200000, expense: 1150000 },
  { name: "พ.ค.", revenue: 2600000, expense: 1400000 },
  { name: "มิ.ย.", revenue: 2800000, expense: 1500000 },
];

export const loanStatusData = [
  { name: "ปกติ", value: 850, color: "#10b981" }, // emerald-500
  { name: "ค้างชำระ", value: 45, color: "#f59e0b" }, // amber-500
  { name: "หนี้เสีย", value: 15, color: "#ef4444" }, // red-500
  { name: "ปิดบัญชีแล้ว", value: 320, color: "#3b82f6" }, // blue-500
];

export const memberGrowthData = [
  { name: "2019", members: 850 },
  { name: "2020", members: 920 },
  { name: "2021", members: 1050 },
  { name: "2022", members: 1150 },
  { name: "2023", members: 1247 },
];

// --- Components ---

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    maximumFractionDigits: 0,
  }).format(value);
};

export function FinancialBarChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={monthlyFinancialData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
        <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#64748b"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `฿${value / 1000}k`}
        />
        <Tooltip
          formatter={(value: number) => formatCurrency(value)}
          contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
        />
        <Legend wrapperStyle={{ paddingTop: "20px" }} />
        <Bar dataKey="revenue" name="รายรับ" fill="#0a6ed1" radius={[4, 4, 0, 0]} barSize={30} />
        <Bar dataKey="expense" name="รายจ่าย" fill="#ef4444" radius={[4, 4, 0, 0]} barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function LoanStatusPieChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={loanStatusData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={5}
          dataKey="value"
        >
          {loanStatusData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip 
            formatter={(value: number) => `${value} สัญญา`}
            contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
        />
        <Legend layout="vertical" verticalAlign="middle" align="right" />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function MemberGrowthAreaChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={memberGrowthData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0a6ed1" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#0a6ed1" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
        <Tooltip 
            contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
        />
        <Area
          type="monotone"
          dataKey="members"
          name="จำนวนสมาชิก"
          stroke="#0a6ed1"
          fillOpacity={1}
          fill="url(#colorMembers)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
