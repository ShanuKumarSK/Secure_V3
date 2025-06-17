// components/StatCard.tsx
import React from "react";

interface StatCardProps {
  icon: string;
  title: string;
  value: string;
  change: string;
  iconBg: string;        // e.g., bg-blue-600
  changeColor: string;   // e.g., text-green-500
}

export const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  value,
  change,
  iconBg,
  changeColor,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4">
      <div className={`rounded-xl p-3 text-white shadow-md ${iconBg}`}>
        <span className="material-icons text-2xl">{icon}</span>
      </div>
      <div className="flex-1">
        <div className="text-xs text-gray-500">{title}</div>
        <div className="text-2xl font-semibold text-gray-800">{value}</div>
        <div className={`text-sm ${changeColor} font-medium`}>{change}</div>
      </div>
    </div>
  );
};
