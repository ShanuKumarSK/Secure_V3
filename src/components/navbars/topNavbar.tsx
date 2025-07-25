""
// components/TopNavbar.tsx
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Emblem from "@/assets/images/Emblem.png";
import { Tooltip, Menu, MenuItem, IconButton } from '@mui/material';
import logout from "@/utils/logout";
import { useRouter } from "next/navigation";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RandomDirectionText from "../TransitionComponents/RandomDirectionText";
import FadeIn from "../TransitionComponents/FadeIn";
import AccessibilityPanel from "../AccessibilityPanel";
import flagIcon from '@/assets/images/flag.svg';

type Route = {
  type: string;
  name: string;
  key: string;
  icon?: React.ReactNode;
  route: string;
  component?: React.ReactNode;
};

type TopNavbarProps = {
  routes: Route[];
};

const TopNavbar: React.FC<TopNavbarProps> = ({ routes }) => {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Simulated auth state, or replace with real logic
    const loggedIn = Boolean(localStorage.getItem("userId"));
    setIsLoggedIn(loggedIn);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout(); // calls your utility function
  };

  const handleProfile = () => {
    router.push('/profile'); // or your profile route
    handleMenuClose();
  };

  console.log(routes, "Routes in TopNavbar");

  return (
    <>
      <header className="bg-[#eff7f5] backdrop-blur-md border border-white/20 shadow-lg sticky top-0 z-50 w-full">
        <div className="bg-cyan-700 text-white text-xs sm:text-sm flex flex-wrap justify-between items-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-36 py-1">
          <span className="flex items-center gap-2 sm:gap-3">
            <Image src={flagIcon} alt="Logo" width={20} height={20} className="w-4 sm:w-6 h-auto" />
            <ul className="flex flex-col sm:flex-row sm:gap-2 whitespace-nowrap">
              <FadeIn stagger={0.2} direction="right" duration={1.0}>
                <li>भारत सरकार</li>
              </FadeIn>
              <FadeIn stagger={0.2} direction="left" duration={1.0}>
                <li>Government of India</li>
              </FadeIn>
            </ul>
          </span>
          <div className="flex items-center gap-2 sm:gap-3 text-white">
            <AccessibilityPanel />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 w-full px-4 sm:px-8 md:px-12 lg:px-24 xl:px-36 py-2 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div className="flex items-center justify-between">
            <div>
              <Link href={!isLoggedIn ? "/" : "/states/dashboard"} className="flex items-center sm:gap-3">
                <div className="relative w-9 sm:w-20 sm:h-20 aspect-square">
                  <Image
                    src={Emblem}
                    alt="Emblem"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 36px, 48px"
                  />
                </div>
                <div className={`hidden text-center sm:text-left sm:block`}>
                  <h2 className="text-sm sm:text-lg text-cyan-900 font-bold leading-tight">
                    <RandomDirectionText sentence="Software for Estimate Calculation Using" />
                    <br />
                    <RandomDirectionText sentence="Rural Rates for Employment" />
                  </h2>
                  <span className="text-xs text-sky-700 font-semibold">
                    Ministry of Rural Development
                  </span>
                </div>
                <span className="text-xl text-cyan-900 font-bold sm:hidden">
                  SECURE
                </span>
              </Link>
            </div>
            <div className="sm:hidden w-full flex justify-end">
              <button
                onClick={toggleMobileMenu}
                className="text-cyan-900 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          <nav
            className={`w-1/3 right-0 sm:w-2/3 flex flex-col  sm:flex sm:flex-row sm:items-center sm:justify-end sm:gap-6 text-sm sm:text-base text-cyan-900 font-medium transition-all duration-300 ease-in-out ${mobileMenuOpen ? "flex" : "hidden"
              } sm:flex`}
          >
            {!isLoggedIn ? (
              <>
                {[
                  { href: '/', label: 'Home', delay: 1.5 },
                  { href: '/#workflow-system', label: 'About', delay: 1.2 },
                  { href: '/#services', label: 'Services', delay: 0.9 },
                  { href: '/dashboard', label: 'Reports', delay: 0.6 },
                ].map(({ href, label, delay }) => (
                  <FadeIn key={href} stagger={0.2} direction="left" duration={delay}>
                    <Link
                      href={href}
                      className="block py-1 px-2 font-semibold text-lg hover:text-amber-600 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                    >
                      {label}
                    </Link>
                  </FadeIn>
                ))}
                <Link
                  href="/auth/signIn"
                  className="mt-2 sm:mt-0 relative px-6 py-2 border border-amber-500 text-orange-500 rounded-md overflow-hidden transition duration-300 ease-in-out group cursor-pointer"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
                  <span className="relative z-10 group-hover:text-white">Login</span>
                </Link>
              </>
            ) : (
              <>
                <Tooltip title="Account">
                  <IconButton onClick={handleMenuClick} className="text-cyan-900">
                    <AccountCircleIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  <MenuItem onClick={handleProfile}>Profile</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            )}
          </nav>
        </div>
      </header >
    </>
  );
};

export default TopNavbar;

