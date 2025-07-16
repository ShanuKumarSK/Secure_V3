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
import { motion } from "framer-motion";
import FloatingTextReveal from "@/components/TransitionComponents/FloatingTextReveal";
import RandomDirectionText from "../TransitionComponents/RandomDirectionText";
import Rotating from "../TransitionComponents/Rotating";
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

  useEffect(() => {
    // Simulated auth state, or replace with real logic
    const loggedIn = Boolean(localStorage.getItem("userId"));
    setIsLoggedIn(loggedIn);
  }, []);

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
    <header className="bg-[#eff7f5] backdrop-blur-md border border-white/20 shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-cyan-700 text-white text-sm flex justify-between items-center px-36 py-1">
        <span className="flex items-center gap-3">
          <Image src={flagIcon} alt="Logo" width={24} height={24} />
          <ul className="space-y-1 text-sm text-white leading-tight flex flex-row gap-2">
            <FadeIn stagger={0.2} direction="right" duration={1.0}>
              <li>भारत सरकार</li>
            </FadeIn>
            <FadeIn stagger={0.2} direction="left" duration={1.0}>
              <li>Government of India</li>
            </FadeIn>
          </ul>
        </span>
        <div className="flex items-center gap-3 text-white">
          <AccessibilityPanel />
          {/* <span className="text-xs">Choose your theme</span>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-500 rounded-full border border-white" />
          </div> */}
          {/* <Image src="/facebook.svg" alt="Facebook" width={16} height={16} />
            <Image src="/cross.svg" alt="Cross" width={16} height={16} />
            <Image src="/rss.svg" alt="RSS" width={16} height={16} />
            <Image src="/accessible.svg" alt="Accessibility" width={16} height={16} /> */}

        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 flex flex-wrap items-center justify-between px-36 py-2">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          {/* <Rotating angle={360} speed={2} repeat={Infinity}> */}
          <Image src={Emblem} alt="Emblem" width={36} height={36} />
          {/* </Rotating> */}
          <div className="flex flex-col items-left gap-1">
            {/* <h3 className="text-lg text-cyan-900 font-bold leading-none">
              <FloatingTextReveal sentence="Software for Estimate Calculation Using" angle={180} distance={200} speed={0.4} />
              <br />
              <FloatingTextReveal sentence="Rural Rates for Employment" angle={225} distance={200} speed={0.4} />
            </h3> */}
            <h3 className="text-lg text-cyan-900 font-bold leading-none">
              <RandomDirectionText sentence="Software for Estimate Calculation Using" />
              <br />
              <RandomDirectionText sentence="Rural Rates for Employment" />
            </h3>
            <span className="text-xs text-sky-700 font-semibold">
              Ministry of Rural Development
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 mt-2 sm:mt-0 tracking-wider text-base text-cyan-900">



          <FadeIn stagger={0.2} direction="left" duration={1.5}>
            <Link href="/" className="relative font-semibold hover:text-amber-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Home</Link>
          </FadeIn>
          <FadeIn stagger={0.2} direction="left" duration={1.2}>
            <Link href="#workflow-system" className="relative font-semibold hover:text-amber-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">About</Link>
          </FadeIn>
          <FadeIn stagger={0.2} direction="left" duration={0.9}>
            <Link href="#services" className="relative font-semibold hover:text-amber-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Services</Link>
          </FadeIn>
          <FadeIn stagger={0.2} direction="left" duration={0.6}>
            <Link href="/dashboard" className="relative font-semibold hover:text-amber-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Reports</Link>
          </FadeIn>
          {
            !isLoggedIn ? <Link href="/auth/signIn" className="relative px-6 py-2 border-1 border-amber-500 text-orange-500 rounded-md overflow-hidden transition duration-300 ease-in-out group cursor-pointer">
              <span className="absolute inset-0 bg-linear-to-r from-amber-500 to-orange-500 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
              <span className="relative z-10 group-hover:text-white">Login</span>
            </Link> : <>
              <Tooltip title="Account">
                <IconButton onClick={handleMenuClick} className="text-white">
                  <AccountCircleIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          }

          {/* {routes?.map((route) => (
          <Link key={route.key} href={route.route} passHref className="text-black font-semibold text-sm hover:text-blue-600 cursor-pointer">
              {route?.name}
          </Link>
        ))} */}
        </nav>
      </div>
    </header>
  );
};

export default TopNavbar;

