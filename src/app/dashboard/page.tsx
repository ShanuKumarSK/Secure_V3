import React from "react";
import { ChartCard } from "@/components/chartCard";
import { FaDollarSign } from 'react-icons/fa';
import StatCard from "@/components/statCard";

const Dashboard = () => {
    return (
        <div className="p-6 space-y-6 min-h-screen">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-600">
                <span className="text-gray-400">/</span> National Dashboard
            </div>

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
        </div>
    );
};

export default Dashboard;