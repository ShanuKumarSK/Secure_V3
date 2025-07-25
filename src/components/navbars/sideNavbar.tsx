// 'use client';

// import { useState } from 'react';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import SecureLogo from '@/assets/images/secure-logo.png';
// import FadeIn from '../TransitionComponents/FadeIn';
// import { LuPanelLeftOpen, LuPanelLeftClose } from "react-icons/lu";
// import { FaCaretDown, FaCaretUp  } from "react-icons/fa";

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
//   collapsed: boolean;
//   setCollapsed: (value: boolean) => void;
// };

// const SideNavbar: React.FC<SideNavbarProps> = ({ routes, collapsed, setCollapsed }) => {

//   const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
//   const pathname = usePathname();
//   const toggleSidebar = () => setCollapsed(!collapsed);
//   const toggleDropdown = (key: string) => {
//     setOpenDropdowns((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   const isActive = (route: string) =>
//     pathname === route || pathname.startsWith(route + '/');

//   return (
//     <>
//       <button
//         className="md:hidden fixed top-28 left-4 z-50 bg-cyan-700 text-lg text-white p-1 rounded-md shadow-xl"
//         onClick={toggleSidebar}
//       >
//         {collapsed ? <LuPanelLeftOpen className='w-8 h-8' /> : <LuPanelLeftClose className='w-8 h-8' />}
//       </button>
//       <div
//         className={`
//           fixed top-24 md:top-32 left-0 h-[calc(100vh-4rem)] z-40 transition-all duration-300 ease-in-out
//           bg-gradient-to-b from-cyan-700 to-cyan-600 text-white
//           ${collapsed ? 'w-0 md:w-20' : 'w-64'}
//           translate-x-0 flex flex-col p-4 pb-28 overflow-auto scrollbar-hide
//         `}
//       >
//         <div className="flex items-center justify-between mb-6 h-24">
//           <div className="flex items-center space-x-3">
//             <Image
//               src={SecureLogo}
//               alt="User"
//               width={60}
//               height={60}
//               className={`rounded-full transition-all duration-300 ${collapsed ? 'hidden' : 'opacity-100 w-[60px]'}`}
//             />
//             <h2 className={`font-bold text-white text-md transition-all duration-300 ${collapsed ? 'hidden' : 'opacity-100 w-auto'}`}>
//               SECURE
//             </h2>
//           </div>
//           <button onClick={toggleSidebar} className="hidden md:block cursor-pointer">
//             {collapsed ? (
//               <LuPanelLeftOpen className="w-8 h-8" />
//             ) : (
//               <LuPanelLeftClose className="w-8 h-8" />
//             )}
//           </button>
//         </div>
//         <nav className="flex flex-col gap-1">
//           {routes.map((route) => {
//             const active = isActive(route.route);
//             const isDropdown = route.children && route.children.length > 0;

//             return (
//               <div key={route.key}>
//                 {!isDropdown ? (
//                   <Link href={route.route}>
//                     <div
//                       className={`flex items-center justify-between px-3 py-4 rounded cursor-pointer transition-all ${active
//                         ? 'text-white font-semibold bg-gradient-to-r from-amber-500 to-yellow-500'
//                         : 'hover:bg-white/20'
//                         }`}
//                     >
//                       <span className="flex items-center space-x-3">
//                         {route.icon}
//                         {!collapsed && (
//                           <FadeIn stagger={0.2} direction="left" duration={0.5}>
//                             <span className="text-base">{route.name}</span>
//                           </FadeIn>
//                         )}
//                       </span>
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
//                         {!collapsed && (
//                           <FadeIn stagger={0.2} direction="left" duration={0.5}>
//                             <span className="text-base">{route.name}</span>
//                           </FadeIn>
//                         )}
//                       </span>
//                       {!collapsed &&
//                         (openDropdowns[route.key] ? (
//                           <FaCaretUp />
//                         ) : (
//                           <FaCaretDown />
//                         ))}
//                     </div>

//                     {!collapsed && openDropdowns[route.key] && (
//                       <div className="ml-8 space-y-1 text-sm">
//                         {route.children?.map((child) => (
//                           <Link href={child.route} key={child.route}>
//                             <div
//                               className={`flex items-center justify-between px-3 py-3 rounded cursor-pointer transition-all ${isActive(child.route)
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
//     </>
//   );
// };

// export default SideNavbar;




'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import SecureLogo from '@/assets/images/secure-logo.png';
import FadeIn from '../TransitionComponents/FadeIn';
import { LuPanelLeftOpen, LuPanelLeftClose } from "react-icons/lu";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

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
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  const toggleSidebar = () => setCollapsed(!collapsed);
  const toggleDropdown = (key: string) =>
    setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));

  const isActive = (route: string) =>
    pathname === route || pathname.startsWith(route + '/');

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed top-28 left-4 z-50 text-white p-2 rounded-md shadow-xl bg-gradient-to-b from-cyan-600 to-cyan-500 cursor-pointer"
        onClick={toggleSidebar}
      >
        {collapsed ? <LuPanelLeftOpen className="w-6 h-6" /> : <LuPanelLeftClose className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-24 md:top-32 left-0 z-40 h-[calc(100vh-6rem)]
          bg-gradient-to-b from-cyan-700 to-cyan-600 text-white overflow-auto scrollbar-hide
          flex flex-col transition-all duration-300 ease-in-out
          ${collapsed ? 'w-20' : 'w-64'}
          ${collapsed && !collapsed ? '-translate-x-64' : 'translate-x-0'}
          md:translate-x-0 p-4 pb-28
        `}
      >
        {/* Logo and toggle */}
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'justify-between'} mb-2 h-16`}>
          <div className={`flex items-center ${collapsed ? 'hidden' : 'opacity-100'} gap-2 `}>
            <div className="w-10 h-10 relative">
              <Image
                src={SecureLogo}
                alt="Logo"
                fill
                className={`rounded-full object-contain transition-opacity duration-300 ${collapsed ? 'opacity-0' : 'opacity-100'}`}
              />
            </div>
            <h2 className={`text-md md:text-xl font-bold text-white transition-all duration-300 ${collapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'}`}>
              SECURE
            </h2>
          </div>
          <button onClick={toggleSidebar} className="hidden md:block cursor-pointer">
            {collapsed ? <LuPanelLeftOpen className="w-8 h-8" /> : <LuPanelLeftClose className="w-8 h-8" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1">
          {routes.map((route) => {
            const active = isActive(route.route);
            const isDropdown = !!route.children?.length;

            return (
              <div key={route.key}>
                {!isDropdown ? (
                  <Link href={route.route}>
                    <div
                      className={`flex items-center justify-between px-3 py-3 rounded cursor-pointer transition-all
                        ${active
                          ? 'text-white font-semibold bg-gradient-to-r from-amber-500 to-yellow-500'
                          : 'hover:bg-white/20'}
                      `}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-lg md:text-xl">{route.icon}</span>
                        {!collapsed && (
                          <FadeIn stagger={0.2} direction="left" duration={0.5}>
                            <span className="text-sm md:text-base">{route.name}</span>
                          </FadeIn>
                        )}
                      </span>
                    </div>
                  </Link>
                ) : (
                  <>
                    <div
                      onClick={() => toggleDropdown(route.key)}
                      className={`flex items-center justify-between px-3 py-3 rounded cursor-pointer transition-all
                        ${active
                          ? 'text-white font-semibold bg-gradient-to-r from-orange-300 to-amber-600'
                          : 'hover:bg-white/20'}
                      `}
                    >
                      <span className="flex items-center gap-3">
                        {route.icon}
                        {!collapsed && (
                          <FadeIn stagger={0.2} direction="left" duration={0.5}>
                            <span className="text-sm md:text-base">{route.name}</span>
                          </FadeIn>
                        )}
                      </span>
                      {!collapsed && (
                        openDropdowns[route.key] ? <FaCaretUp /> : <FaCaretDown />
                      )}
                    </div>
                    {!collapsed && openDropdowns[route.key] && (
                      <div className="ml-8 space-y-1 text-sm">
                        {route.children?.map((child) => (
                          <Link key={child.route} href={child.route}>
                            <div
                              className={`flex items-center px-3 py-2 rounded cursor-pointer transition-all
                                ${isActive(child.route)
                                  ? 'text-white font-semibold bg-gradient-to-r from-amber-500 to-yellow-500'
                                  : 'hover:bg-white/20'}
                              `}
                            >
                              {child.name}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default SideNavbar;
