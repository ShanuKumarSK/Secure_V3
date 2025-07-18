// 'use client';

// import { useState } from 'react';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import {
//   Dashboard as DashboardIcon,
//   DocumentScanner as DocumentScannerIcon,
//   Equalizer as EqualizerIcon,
//   ArrowDropDown as ArrowDropDownIcon,
//   ArrowDropUp as ArrowDropUpIcon,
//   ArrowCircleLeft as ArrowCircleLeftIcon,
//   ArrowCircleRight as ArrowCircleRightIcon,
//   Newspaper as NewspaperIcon,
//   Assignment as AssignmentIcon,
//   Description as DescriptionIcon,
//   Summarize as SummarizeIcon
// } from '@mui/icons-material';
// import { motion } from "framer-motion";
// import SecureLogo from '@/assets/images/secure-logo.png'; // adjust as needed
// import FadeIn from '../TransitionComponents/FadeIn';

// type Route = {
//   type: string;
//   name: string;
//   key: string;
//   icon?: React.ReactNode;
//   route: string;
//   children?: { name: string; route: string }[];
// };

// type SideNavbarProps = {
//   routes: Route[];
// };

// const fadeRightVariant = {
//   hidden: { opacity: 0, x: 50 },
//   visible: { opacity: 1, x: 0 },
// };


// const SideNavbar: React.FC<SideNavbarProps> = ({ routes }) => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

//   const pathname = usePathname();

//   const toggleSidebar = () => setCollapsed(!collapsed);
//   const toggleDropdown = (key: string) => {
//     setOpenDropdowns((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   const isActive = (route: string) => {
//     console.log(route, "Route")
//     return pathname === route || pathname.startsWith(route + '/');
//   };

//   return (
//     <div
//       className={`h-screen fixed flex flex-col justify-between bg-gradient-to-b from-cyan-700 to-cyan-600 text-white transition-all duration-300 ease-in-out
//       ${collapsed ? 'w-20' : 'w-64'} p-4 pb-28 overflow-auto scrollbar-hide`}
//     >
//       {/* Header */}
//       <div>
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center space-x-3">
//             <Image src={SecureLogo} alt="User" width={60} height={60} className="rounded-full" />
//             {!collapsed && <h2 className="font-bold text-white text-md">SECURE</h2>}
//           </div>
//           <button onClick={toggleSidebar}>
//             {collapsed ? <ArrowCircleRightIcon /> : <ArrowCircleLeftIcon />}
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav className='flex flex-col gap-1'>
//           {routes.map((route) => {
//             const active = isActive(route.route);
//             const isDropdown = route.children && route.children.length > 0;

//             return (
//               <div key={route.key}>
//                 {!route.children || route.children.length === 0 ? (
//                   <Link href={route.route} passHref>
//                     <div
//                       className={`flex items-center justify-between px-3 py-4 rounded cursor-pointer transition-all ${active
//                         ? 'text-white font-semibold bg-gradient-to-r from-amber-500 to-yellow-500'
//                         : 'hover:bg-white/20'
//                         }`}
//                       onClick={isDropdown ? (() => toggleDropdown(route.key)) : undefined}
//                     >
//                       <span className="flex items-center space-x-3">
//                         {route.icon}
//                         <FadeIn stagger={0.2} direction="left" duration={0.5}>{!collapsed && <span className="text-base">{route.name}</span>}</FadeIn>
//                       </span>
//                       {!collapsed && isDropdown && (openDropdowns[route.key] ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
//                     </div>
//                   </Link>
//                 ) : (
//                   <div>
//                     <div
//                       onClick={() => toggleDropdown(route.key)}
//                       className={`flex items-center justify-between px-3 py-4 rounded cursor-pointer transition-all ${active
//                         ? 'text-white font-semibold bg-gradient-to-r from-orange-300 to-amber-600'
//                         : 'hover:bg-white/20'
//                         }`}
//                     >
//                       <span className="flex items-center space-x-3">
//                         {route.icon}
//                         <FadeIn stagger={0.2} direction="left" duration={0.5}>{!collapsed && <span className="text-base">{route.name}</span>}</FadeIn>
//                       </span>
//                       {!collapsed && (openDropdowns[route.key] ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
//                     </div>
//                     {!collapsed && openDropdowns[route.key] && isDropdown && (
//                       <div className="ml-8 space-y-1 text-sm">
//                         {route.children?.map((child) => (
//                           <Link href={child.route} key={child.route}>
//                             <div
//                               className={`flex items-center justify-between px-3 py-4 rounded cursor-pointer transition-all ${isActive(child.route)
//                                 ? 'text-white font-semibold bg-gradient-to-r from-amber-500 to-yellow-500'
//                                 : 'hover:bg-white/20'
//                                 }`}
//                             >
//                               {child.name}
//                             </div>
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             );
//           })}

//         </nav>
//       </div>
//     </div>
//   );
// };

// export default SideNavbar;



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
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import SecureLogo from '@/assets/images/secure-logo.png';
import FadeIn from '../TransitionComponents/FadeIn';

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
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
};

const SideNavbar: React.FC<SideNavbarProps> = ({ routes, collapsed, setCollapsed }) => {
  // const [collapsed, setCollapsed] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();

  const toggleSidebar = () => setCollapsed(!collapsed);
  const toggleMobileSidebar = () => setMobileOpen(!mobileOpen);

  const toggleDropdown = (key: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isActive = (route: string) =>
    pathname === route || pathname.startsWith(route + '/');

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-cyan-700 text-white p-2 rounded-full"
        onClick={toggleMobileSidebar}
      >
        {mobileOpen ? <ArrowCircleLeftIcon /> : <ArrowCircleRightIcon />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-32 left-0 h-[calc(100vh-4rem)] z-40 transition-all duration-300 ease-in-out
          bg-gradient-to-b from-cyan-700 to-cyan-600 text-white
          ${collapsed ? 'w-20' : 'w-64'}
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:flex md:flex-col p-4 pb-28 overflow-auto scrollbar-hide
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Image src={SecureLogo} alt="User" width={60} height={60} className="rounded-full" />
            {!collapsed && <h2 className="font-bold text-white text-md">SECURE</h2>}
          </div>
          <button onClick={toggleSidebar} className="hidden md:block">
            {collapsed ? <ArrowCircleRightIcon /> : <ArrowCircleLeftIcon />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1">
          {routes.map((route) => {
            const active = isActive(route.route);
            const isDropdown = route.children && route.children.length > 0;

            return (
              <div key={route.key}>
                {!isDropdown ? (
                  <Link href={route.route}>
                    <div
                      className={`flex items-center justify-between px-3 py-4 rounded cursor-pointer transition-all ${
                        active
                          ? 'text-white font-semibold bg-gradient-to-r from-amber-500 to-yellow-500'
                          : 'hover:bg-white/20'
                      }`}
                    >
                      <span className="flex items-center space-x-3">
                        {route.icon}
                        {!collapsed && (
                          <FadeIn stagger={0.2} direction="left" duration={0.5}>
                            <span className="text-base">{route.name}</span>
                          </FadeIn>
                        )}
                      </span>
                    </div>
                  </Link>
                ) : (
                  <div>
                    <div
                      onClick={() => toggleDropdown(route.key)}
                      className={`flex items-center justify-between px-3 py-4 rounded cursor-pointer transition-all ${
                        active
                          ? 'text-white font-semibold bg-gradient-to-r from-orange-300 to-amber-600'
                          : 'hover:bg-white/20'
                      }`}
                    >
                      <span className="flex items-center space-x-3">
                        {route.icon}
                        {!collapsed && (
                          <FadeIn stagger={0.2} direction="left" duration={0.5}>
                            <span className="text-base">{route.name}</span>
                          </FadeIn>
                        )}
                      </span>
                      {!collapsed &&
                        (openDropdowns[route.key] ? (
                          <ArrowDropUpIcon />
                        ) : (
                          <ArrowDropDownIcon />
                        ))}
                    </div>

                    {!collapsed && openDropdowns[route.key] && (
                      <div className="ml-8 space-y-1 text-sm">
                        {route.children?.map((child) => (
                          <Link href={child.route} key={child.route}>
                            <div
                              className={`flex items-center justify-between px-3 py-3 rounded cursor-pointer transition-all ${
                                isActive(child.route)
                                  ? 'text-white font-semibold bg-gradient-to-r from-amber-500 to-yellow-500'
                                  : 'hover:bg-white/20'
                              }`}
                            >
                              {child.name}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

export default SideNavbar;
