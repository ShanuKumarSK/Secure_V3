'use client';

import { useState } from 'react';
import Image from 'next/image';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DescriptionIcon from '@mui/icons-material/Description';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SecureLogo from '@/assets/images//secure-logo.png'; // Adjust the path as necessary

type Route = {
    type: string;
    name: string;
    key: string;
    icon?: React.ReactNode;
    route: string;
    component?: React.ReactNode;
};

type SideNavbarProps = {
    routes: Route[];
};

const SideNavbar: React.FC<SideNavbarProps> = ({ routes }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);

    const toggleSidebar = () => setCollapsed(!collapsed);

    const toggleDropdown = () => setOpenDropdown(!openDropdown);

    return (
        <div
            className={`h-screen fixed flex flex-col justify-between bg-gradient-to-b from-cyan-700 to-cyan-600 text-white transition-all duration-300 ease-in-out
      ${collapsed ? 'w-20' : 'w-60'} p-4`}
        >
            {/* Header */}
            <div>
                {/* User Info */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <Image
                            src={SecureLogo} // replace with actual image
                            alt="User"
                            width={60}
                            height={60}
                            className="rounded-full"
                        />
                        {!collapsed && (
                            <div>
                                <h2 className="font-bold text-white text-md">SECURE</h2>
                            </div>
                        )}
                    </div>
                    <button onClick={toggleSidebar} className="text-white-400">
                        {collapsed ? <ArrowCircleRightIcon /> : <ArrowCircleLeftIcon />}
                    </button>
                </div>

                {/* Navigation */}
                <div>
                    <div>
                        <button
                            className="flex items-center space-x-3 px-3 py-2 hover:bg-white/20 rounded"
                        >
                            <DashboardIcon className="text-lg" />
                            {!collapsed && <span className='text-sm'>National Dashboard</span>}
                        </button>
                        <button className="flex items-center space-x-3 px-3 py-2 hover:bg-white/20 rounded">
                            <DocumentScannerIcon className="text-lg" />
                            {!collapsed && <span className='text-sm'>State-wise Dashboard</span>}
                        </button>
                        <button className="flex items-center space-x-3 px-3 py-2 hover:bg-white/20 rounded">
                            <EqualizerIcon className="text-lg" />
                            {!collapsed && <span className='text-sm'>Works Sanctioned</span>}
                        </button>
                        <button
                            className="flex items-center justify-between w-full py-2 px-3 rounded bg-white/10 hover:bg-white/20 mb-1"
                            onClick={toggleDropdown}
                        >
                            <span className="flex items-center space-x-3">
                                <NewspaperIcon className="text-lg" />
                                {!collapsed && <span className='text-sm'>SoR Reports</span>}
                            </span>
                            {!collapsed && (openDropdown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
                        </button>
                        {!collapsed && openDropdown && (
                            <div className="ml-8 space-y-1 text-sm">
                                <button className="block w-full text-left py-1 hover:text-orange-400">Activity</button>
                                <button className="block w-full text-left py-1 hover:text-orange-400">Traffic</button>
                                <button className="block w-full text-left py-1 hover:text-orange-400">Statistic</button>
                            </div>
                        )}
                        <button className="flex items-center space-x-3 px-3 py-2 hover:bg-white/20 rounded">
                            <AssignmentIcon className="text-lg" />
                            {!collapsed && <span className='text-sm'>Templates</span>}
                        </button>
                        <button className="flex items-center space-x-3 px-3 py-2 hover:bg-white/20 rounded">
                            <DescriptionIcon className="text-lg" />
                            {!collapsed && <span className='text-sm'>CIB Report</span>}
                        </button>
                        <button className="flex items-center space-x-3 px-3 py-2 hover:bg-white/20 rounded">
                            <SummarizeIcon className="text-lg" />
                            {!collapsed && <span className='text-sm'>Works Category</span>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideNavbar;


