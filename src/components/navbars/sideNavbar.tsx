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
import { motion } from "framer-motion";
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

const fadeRightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};


const SideNavbar: React.FC<SideNavbarProps> = ({ routes }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const pathname = usePathname();

  const toggleSidebar = () => setCollapsed(!collapsed);
  const toggleDropdown = () => setOpenDropdown(!openDropdown);

  const isActive = (route: string) => {
    console.log(route, "Route")
    return pathname === route || pathname.startsWith(route + '/');
  };

  return (
    <div
      className={`h-screen fixed flex flex-col justify-between bg-gradient-to-b from-cyan-700 to-cyan-600 text-white transition-all duration-300 ease-in-out
      ${collapsed ? 'w-20' : 'w-64'} p-4`}
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
        <nav className='flex flex-col gap-1'>
          {routes.map((route) => {
            const active = isActive(route.route);
            const isDropdown = route.children && route.children.length > 0;

            return (
              <div key={route.key}>
                <Link href={route.route} passHref>
                  <div
                    className={`flex items-center justify-between px-3 py-4 rounded cursor-pointer transition-all ${active ? 'text-white font-semibold bg-gradient-to-r from-amber-500 to-yellow-500' : 'hover:bg-white/20'
                      }`}
                    onClick={isDropdown ? toggleDropdown : undefined}
                  >
                    <span className="flex items-center space-x-3">
                      {route.icon}
                      <motion.div
                        key={route.name}
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: { transition: { staggerChildren: 0.15 } },
                          hidden: {},
                        }}
                      >
                        {/* <motion.p
                          key={active ? route.name : ''}
                          className="description"
                          variants={fadeRightVariant}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          {!collapsed && <span className="text-base">{route.name}</span>}
                        </motion.p> */}

                        <motion.p
                          key={active ? `active-${route.key}` : `inactive-${route.key}`} // forces re-mount only for newly active
                          className="description"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          {!collapsed && <span className="text-base">{route.name}</span>}
                        </motion.p>


                      </motion.div>
                    </span>
                    {!collapsed && isDropdown && (openDropdown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
                  </div>
                </Link>

                {/* Dropdown children */}
                {!collapsed && openDropdown && isDropdown && (
                  <div className="ml-8 space-y-1 text-sm">
                    {route.children?.map((child) => (
                      <Link href={child.route} key={child.route}>
                        <div
                          className={`block w-full text-left py-1 cursor-pointer ${isActive(child.route)
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
