// components/ChartCard.tsx
"use client";

import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

interface ChartCardProps {
  title: string;
  subtitle: string;
  color: "blue" | "green" | "slate";
}

const data = [
  { name: "Apr", value: 50 },
  { name: "May", value: 60 },
  { name: "Jun", value: 100 },
  { name: "Jul", value: 80 },
  { name: "Aug", value: 130 },
  { name: "Sep", value: 90 },
  { name: "Oct", value: 110 },
  { name: "Nov", value: 70 },
  { name: "Dec", value: 140 },
];

const colorMap = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  slate: "bg-slate-800",
};

const lineColorMap = {
  blue: "#E5E7EB",
  green: "#E5E7EB",
  slate: "#E5E7EB",
};

export const ChartCard: React.FC<ChartCardProps> = ({ title, subtitle, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <div className={`rounded-xl p-4 mb-2 ${colorMap[color]}`}>
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={data}>
            {/* <CartesianGrid strokeDasharray="3 3" stroke="#ccc" /> */}
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke={lineColorMap[color]}
              strokeWidth={3}
              dot={{ fill: "#fff" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2">
        <div className="font-semibold text-gray-700">{title}</div>
        <div className="text-sm text-gray-500">{subtitle}</div>
        <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
          <span className="material-icons text-sm">schedule</span> just updated
        </div>
      </div>
    </div>
  );
};
