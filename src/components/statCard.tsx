// components/StatCard.tsx
// import React from "react";

// interface StatCardProps {
//   icon: string;
//   title: string;
//   value: string;
//   change: string;
//   iconBg: string;        // e.g., bg-blue-600
//   changeColor: string;   // e.g., text-green-500
// }

// export const StatCard: React.FC<StatCardProps> = ({
//   icon,
//   title,
//   value,
//   change,
//   iconBg,
//   changeColor,
// }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4">
//       <div className={`rounded-xl p-3 text-white shadow-md ${iconBg}`}>
//         <span className="material-icons text-2xl">{icon}</span>
//       </div>
//       <div className="flex-1">
//         <div className="text-xs text-gray-500">{title}</div>
//         <div className="text-2xl font-semibold text-gray-800">{value}</div>
//         <div className={`text-sm ${changeColor} font-medium`}>{change}</div>
//       </div>
//     </div>
//   );
// };


'use client';

import React, { useEffect, useState } from 'react';
import { FaDollarSign } from 'react-icons/fa'; // Add more icons if needed
import { MdDescription } from "react-icons/md";

type StatCardProps = {
  icon?: 'description'; // You can extend this list (e.g., 'user', 'order', etc.)
  iconColor?: string;
  title: string;
  value: number | string;
  label: string;
  progress: number; // percentage (0-100)
};

const iconMap: Record<string, React.ReactNode> = {
  description: <MdDescription />,
  // Extend with more icons here if needed
};

const gradientMap: Record<string, string> = {
  'bg-green-500': 'from-green-300 via-green-400 to-green-500',
  'bg-amber-500': 'from-amber-300 via-amber-400 to-amber-500',
  'bg-blue-500': 'from-blue-200 via-blue-400 to-blue-600',
  'bg-red-500': 'from-red-200 via-red-400 to-red-600',
  'bg-yellow-500': 'from-yellow-200 via-yellow-400 to-yellow-600',
  'bg-purple-500': 'from-purple-200 via-purple-400 to-purple-600',
};

const StatCard: React.FC<StatCardProps> = ({
  icon = 'description',
  iconColor = 'bg-green-500',
  title,
  value,
  label,
  progress,
}) => {

  const gradientColor = gradientMap[iconColor] || 'from-gray-200 via-gray-400 to-gray-600';

  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 300); // optional delay before animating
    return () => clearTimeout(timeout);
  }, [progress]);


  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col sm:flex-col sm:items-center sm:justify-between w-full max-w-md mx-auto gap-4">
      {/* Icon & Text */}
      <div className="flex items-center justify-between space-x-4 w-full">
        <div className={`w-12 h-12 rounded-sm flex items-center justify-center ${iconColor} text-white text-3xl bg-gradient-to-br ${gradientColor} shadow-lg`}>
          {iconMap[icon]}
        </div>
        <div>
          <div className="text-gray-800 text-lg font-semibold">{value}</div>
          <div className="text-sm text-gray-500">{title}</div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="mt-4 sm:mt-0 sm:text-right w-full sm:w-full">
        <div className="flex justify-between items-center text-xs text-gray-600 mb-1">
          <span className="text-base font-bold">{label}</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded overflow-hidden">
          <div
            className={`h-full rounded transition-all duration-1000 ease-out bg-gradient-to-r ${gradientColor}`}
            style={{
              width: `${animatedProgress}%`,
              // background: `linear-gradient(to right, #a7f3d0, #10b981, #065f46)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StatCard;


