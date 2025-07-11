"use client";

import React, { useState } from "react";
import { ChartCard } from "@/components/chartCard";
import { FaArrowDown, FaDollarSign } from 'react-icons/fa';
import StatCard from "@/components/statCard";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, LabelList, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import clsx from 'clsx';

const data = [
    { state: 'UP', "workReceived": 1800, "workSanctioned": 1450, "workSpilled": 200, "workRevised": 150 },
    { state: 'MH', "workReceived": 1550, "workSanctioned": 1200, "workSpilled": 180, "workRevised": 170 },
    { state: 'BR', "workReceived": 1700, "workSanctioned": 1300, "workSpilled": 250, "workRevised": 100 },
    { state: 'WB', "workReceived": 1400, "workSanctioned": 1000, "workSpilled": 300, "workRevised": 100 },
    { state: 'TN', "workReceived": 1300, "workSanctioned": 1100, "workSpilled": 100, "workRevised": 100 },
    { state: 'RJ', "workReceived": 1600, "workSanctioned": 1250, "workSpilled": 200, "workRevised": 150 },
    { state: 'MP', "workReceived": 1750, "workSanctioned": 1400, "workSpilled": 220, "workRevised": 130 },
    { state: 'GJ', "workReceived": 1200, "workSanctioned": 950, "workSpilled": 180, "workRevised": 70 },
    { state: 'AP', "workReceived": 1250, "workSanctioned": 1050, "workSpilled": 100, "workRevised": 100 },
    { state: 'KL', "workReceived": 1000, "workSanctioned": 800, "workSpilled": 150, "workRevised": 50 },
    { state: 'KA', "workReceived": 1350, "workSanctioned": 1100, "workSpilled": 170, "workRevised": 80 },
    { state: 'OR', "workReceived": 1450, "workSanctioned": 1000, "workSpilled": 350, "workRevised": 100 },
    { state: 'AS', "workReceived": 1100, "workSanctioned": 800, "workSpilled": 200, "workRevised": 100 },
    { state: 'PB', "workReceived": 900, "workSanctioned": 750, "workSpilled": 100, "workRevised": 50 },
    { state: 'HR', "workReceived": 850, "workSanctioned": 700, "workSpilled": 100, "workRevised": 50 },
    { state: 'UK', "workReceived": 750, "workSanctioned": 600, "workSpilled": 100, "workRevised": 50 },
];


const areaConfigs = [
    { key: 'workReceived', label: 'No of work Received', color: '#003f5c' },
    { key: 'workSanctioned', label: 'No of work Sanctioned', color: '#bc5090' },
    { key: 'workSpilled', label: 'No of work Spilled', color: '#ffa600' },
    { key: 'workRevised', label: 'No of work Revised', color: '#58508d' },
];

const Dashboard = () => {

    const barConfigs = [
        { key: 'totalNregaWork', label: 'NREGA Work', color: '#003f5c' },
        { key: 'totalSanctioned', label: 'Sanctioned', color: '#bc5090' },
        { key: 'totalRevised', label: 'Revised', color: '#ffa600' },
        { key: 'totalSpill', label: 'Spill', color: '#58508d' },
    ];

    const [visibleBars, setVisibleBars] = useState<Record<string, boolean>>(
        () => barConfigs.reduce((acc, cur) => ({ ...acc, [cur.key]: true }), {})
    );

    const toggleBar = (key: string) => {
        setVisibleBars(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const data2 = [
        { month: "January", totalNregaWork: 101000, totalSanctioned: 40500, totalRevised: 1800, totalSpill: 7000 },
        { month: "February", totalNregaWork: 97000, totalSanctioned: 39000, totalRevised: 1600, totalSpill: 6800 },
        { month: "March", totalNregaWork: 113000, totalSanctioned: 43000, totalRevised: 2000, totalSpill: 7400 },
        { month: "April", totalNregaWork: 111431, totalSanctioned: 40496, totalRevised: 0, totalSpill: 7868 },
        { month: "May", totalNregaWork: 98000, totalSanctioned: 38000, totalRevised: 2000, totalSpill: 7000 },
        { month: "June", totalNregaWork: 102500, totalSanctioned: 39000, totalRevised: 1500, totalSpill: 7200 },
        { month: "July", totalNregaWork: 110000, totalSanctioned: 40000, totalRevised: 1800, totalSpill: 7500 },
        { month: "August", totalNregaWork: 95000, totalSanctioned: 37000, totalRevised: 1700, totalSpill: 6800 },
        { month: "September", totalNregaWork: 98000, totalSanctioned: 38500, totalRevised: 1600, totalSpill: 6900 },
        { month: "October", totalNregaWork: 104000, totalSanctioned: 41000, totalRevised: 1900, totalSpill: 7100 },
        { month: "November", totalNregaWork: 99000, totalSanctioned: 39500, totalRevised: 1750, totalSpill: 7050 },
        { month: "December", totalNregaWork: 107000, totalSanctioned: 42000, totalRevised: 2100, totalSpill: 7200 },
    ];

    const [visibleAreas, setVisibleAreas] = useState<Record<string, boolean>>({
        'workReceived': true,
        'workSanctioned': true,
        'workSpilled': true,
        'workRevised': true,
    });

    const toggleArea = (key: string) => {
        setVisibleAreas((prev) => ({ ...prev, [key]: !prev[key] }));
    };
    return (
        <div className="p-6 space-y-6 min-h-screen">

            <h1 className="text-2xl font-semibold text-gray-800">National Dashboard</h1>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    icon="description"
                    iconColor="bg-green-500"
                    title="No of state enrolled in SECURE"
                    value={32}
                    label="+55% than last week"
                    progress={55}
                />
                <StatCard
                    icon="description"
                    iconColor="bg-gray-500"
                    title="Today's Users"
                    value={2300}
                    label="+3% than last month"
                    progress={3}
                />
                <StatCard
                    icon="description"
                    iconColor="bg-amber-500"
                    title="Revenue"
                    value={34000}
                    label="+1% than yesterday"
                    progress={1}
                />
                <StatCard
                    icon="description"
                    iconColor="bg-purple-500"
                    title="Followers"
                    value={91}
                    label=""
                    progress={0}
                />
                {/* <StatCard
                    icon="description"
                    title="No of state enrolled in SECURE"
                    value="32"
                    change="+55% than last week"
                    iconBg="bg-gray-800"
                    changeColor="text-green-500"
                />
                <StatCard
                    icon="bar_chart"
                    title="Today's Users"
                    value="2,300"
                    change="+3% than last month"
                    iconBg="bg-blue-600"
                    changeColor="text-green-500"
                />
                <StatCard
                    icon="store"
                    title="Revenue"
                    value="34k"
                    change="+1% than yesterday"
                    iconBg="bg-green-600"
                    changeColor="text-green-500"
                />
                <StatCard
                    icon="group"
                    title="Followers"
                    value="+91"
                    change="Just updated"
                    iconBg="bg-pink-600"
                    changeColor="text-gray-500"
                /> */}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ChartCard title="Website Views" subtitle="Last Campaign Performance" color="blue" />
                <ChartCard title="Daily Sales" subtitle="(+15%) increase in today sales." color="green" />
                <ChartCard title="Completed Tasks" subtitle="Last Campaign Performance" color="slate" />
            </div>

            <div className="bg-white text-white rounded-lg p-6 shadow-xl w-full max-w-full overflow-x-auto">
                <div className="flex flex-wrap gap-3 mb-6 justify-center">
                    {areaConfigs.map(({ key, label, color }) => (
                        <button
                            key={key}
                            onClick={() => toggleArea(key)}
                            // className={clsx(
                            //     'px-4 py-1 rounded-full font-medium transition border text-sm',
                            //     visibleAreas[key] ? 'bg-white text-gray-800' : 'bg-transparent text-white'
                            // )}
                            // style={{
                            //     borderColor: color,
                            //     color: visibleAreas[key] ? color : 'white',
                            // }}
                            className={clsx(
                                'px-3 py-1 rounded text-sm font-medium border transition-all duration-200',
                                visibleAreas[key]
                                    ? 'text-white'
                                    : 'text-gray-700 bg-white border border-gray-300'
                            )}
                            style={{
                                backgroundColor: visibleAreas[key] ? color : 'white',
                                color: visibleAreas[key] ? 'white' : color,
                                borderColor: color,
                            }}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className="w-full h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                {areaConfigs.map(({ key, color }) => (
                                    <linearGradient id={`color${key}`} x1="0" y1="0" x2="0" y2="1" key={key}>
                                        <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                                        <stop offset="95%" stopColor={color} stopOpacity={0} />
                                    </linearGradient>
                                ))}
                            </defs>

                            {/* <CartesianGrid stroke="#374151" strokeDasharray="3 3" /> */}
                            <XAxis dataKey="state" tick={{ fill: '#9CA3AF' }} />
                            <YAxis tick={{ fill: '#9CA3AF' }} />
                            <Tooltip
                                contentStyle={{ backgroundColor: 'whitesmoke', borderRadius: '8px', boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)' }}
                                labelStyle={{ color: '#000' }}
                            />

                            {areaConfigs.map(
                                ({ key, color }) =>
                                    visibleAreas[key] && (
                                        <Area
                                            key={key}
                                            type="monotone"
                                            dataKey={key}
                                            stroke={color}
                                            fillOpacity={1}
                                            fill={`url(#color${key})`}
                                            strokeWidth={1.5}
                                        />
                                    )
                            )}
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            {/* Bar Chart */}

            <div className="w-full bg-white rounded-lg p-4 sm:p-6 shadow-md">
                {/* Toggle Buttons */}
                <div className="flex flex-wrap gap-2 justify-start mb-4">
                    {barConfigs.map(({ key, label, color }) => (
                        <button
                            key={key}
                            onClick={() => toggleBar(key)}
                            className={clsx(
                                'px-3 py-1 rounded text-sm font-medium border transition-all duration-200',
                                visibleBars[key]
                                    ? 'text-white'
                                    : 'text-gray-700 bg-white border border-gray-300'
                            )}
                            style={{
                                backgroundColor: visibleBars[key] ? color : 'white',
                                color: visibleBars[key] ? 'white' : color,
                                borderColor: color,
                            }}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Responsive Chart */}
                <div className="w-full h-[300px] sm:h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data2} barCategoryGap={8}>
                            <XAxis
                                dataKey="month"
                                tick={{ fontSize: 12, fill: '#444' }}
                                axisLine={false}
                            />
                            <YAxis
                                tick={{ fontSize: 12, fill: '#444' }}
                                tickLine={false}
                                axisLine={false}
                            />
                            <Tooltip />

                            {barConfigs.map(({ key, color }) =>
                                visibleBars[key] ? (
                                    <Bar key={key} dataKey={key} fill={color} radius={[6, 6, 0, 0]}>
                                        {/* Label + Arrow */}
                                        <LabelList
                                            content={({ x, y, width }) => {
                                                const centerX = Number(x) + Number(width) / 2;
                                                return (
                                                    <g>
                                                        <text
                                                            x={centerX}
                                                            y={Number(y) - 10}
                                                            textAnchor="middle"
                                                            fill="#000"
                                                            fontSize="12"
                                                            fontWeight="bold"
                                                        >
                                                            99%
                                                        </text>
                                                        <text
                                                            x={centerX}
                                                            y={Number(y)}
                                                            textAnchor="middle"
                                                            fontSize="12"
                                                            fill="red"
                                                        >
                                                            ▼
                                                        </text>
                                                    </g>
                                                );
                                            }}
                                        />
                                    </Bar>
                                ) : null
                            )}
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;