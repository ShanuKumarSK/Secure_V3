'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';


const ChartData = [
  { month: 'JAN', sanctioned: 0, nrega: 0 },
  { month: 'FEB', sanctioned: 0, nrega: 0 },
  { month: 'MAR', sanctioned: 0, nrega: 0 },
  { month: 'APR', sanctioned: 40500, nrega: 111431 },
  { month: 'MAY', sanctioned: 1000, nrega: 3335 },
  { month: 'JUN', sanctioned: 800, nrega: 1953 },
  { month: 'JUL', sanctioned: 0, nrega: 0 },
  { month: 'AUG', sanctioned: 0, nrega: 0 },
  { month: 'SEP', sanctioned: 0, nrega: 0 },
  { month: 'OCT', sanctioned: 0, nrega: 0 },
  { month: 'NOV', sanctioned: 0, nrega: 1 },
  { month: 'DEC', sanctioned: 0, nrega: 0 },
];

type ChartDatum = { month: string; sanctioned: number; nrega: number };

export default function WorksSanctioned() {
  const [data, setData] = useState<ChartDatum[]>([]);

  useEffect(() => {
    // Fetch or mock data
    setData(ChartData);
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Card */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Works Sanctioned</h1>
          <p className="text-gray-600 mb-6">Total Works Sanctioned across India (monthly)</p>

          {/* Chart Container */}
          <div className="w-full h-[400px] md:h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" label={{ value: 'Sanctioned', angle: -90, position: 'insideLeft', fill: '#2563eb' }} />
                <YAxis yAxisId="right" orientation="right" label={{ value: 'MGNREGA Works', angle: 90, position: 'insideRight', fill: '#16a34a' }} />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="sanctioned" fill="#3b82f6" name="Total Sanctioned" />
                <Line yAxisId="right" dataKey="nrega" stroke="#10b981" strokeWidth={2} dot name="Total NREGA works" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
