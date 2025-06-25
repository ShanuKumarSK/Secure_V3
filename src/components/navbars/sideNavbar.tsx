'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Dashboard as DashboardIcon,
  DocumentScanner as DocumentScannerIcon,
  Equalizer as EqualizerIcon,
  ArrowDropDown as ArrowDropDownIcon,
  ArrowDropUp as ArrowDropUpIcon,
  ArrowCircleLeft as ArrowCircleLeftIcon,
  ArrowCircleRight as ArrowCircleRightIcon,
  Newspaper as NewspaperIcon,
  Assignment as AssignmentIcon,
  Description as DescriptionIcon,
  Summarize as SummarizeIcon
} from '@mui/icons-material';

import SecureLogo from '@/assets/images/secure-logo.png'; // adjust as needed

type Route = {
  type: string;
  name: string;
  key: string;
  icon?: React.ReactNode;
  route: string;
  children?: { name: string; route: string }[];
};

type SideNavbarProps = {
  routes: Route[];
};

const SideNavbar: React.FC<SideNavbarProps> = ({ routes }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const pathname = usePathname();

  const toggleSidebar = () => setCollapsed(!collapsed);
  const toggleDropdown = () => setOpenDropdown(!openDropdown);

  const isActive = (route: string) =>
    pathname === route || pathname.startsWith(route + '/');

  return (
    <div
      className={`h-screen fixed flex flex-col justify-between bg-gradient-to-b from-cyan-700 to-cyan-600 text-white transition-all duration-300 ease-in-out
      ${collapsed ? 'w-20' : 'w-60'} p-4`}
    >
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Image src={SecureLogo} alt="User" width={60} height={60} className="rounded-full" />
            {!collapsed && <h2 className="font-bold text-white text-md">SECURE</h2>}
          </div>
          <button onClick={toggleSidebar}>
            {collapsed ? <ArrowCircleRightIcon /> : <ArrowCircleLeftIcon />}
          </button>
        </div>

        {/* Navigation */}
        <nav>
          {routes.map((route) => {
            const active = isActive(route.route);
            const isDropdown = route.children && route.children.length > 0;

            return (
              <div key={route.key}>
                <Link href={route.route} passHref>
                  <div
                    className={`flex items-center justify-between px-3 py-2 rounded cursor-pointer transition-all ${
                      active ? 'bg-white/30 text-orange-400 font-semibold' : 'hover:bg-white/20'
                    }`}
                    onClick={isDropdown ? toggleDropdown : undefined}
                  >
                    <span className="flex items-center space-x-3">
                      {route.icon}
                      {!collapsed && <span className="text-sm">{route.name}</span>}
                    </span>
                    {!collapsed && isDropdown && (openDropdown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
                  </div>
                </Link>

                {/* Dropdown children */}
                {!collapsed && openDropdown && isDropdown && (
                  <div className="ml-8 space-y-1 text-sm">
                    {route.children.map((child) => (
                      <Link href={child.route} key={child.route}>
                        <div
                          className={`block w-full text-left py-1 cursor-pointer ${
                            isActive(child.route)
                              ? 'text-orange-400 font-medium'
                              : 'hover:text-orange-400'
                          }`}
                        >
                          {child.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default SideNavbar;
