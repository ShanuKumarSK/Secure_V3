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
    <header className="bg-sky-50 backdrop-blur-md border border-white/20 shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-cyan-700 text-white text-sm flex justify-between items-center px-36 py-1">
        <span>A Digital India Initiative</span>
        <div className="flex items-center gap-3 text-white">
          <span className="text-xs">Choose your theme</span>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-500 rounded-full border border-white" />
            {/* <Image src="/facebook.svg" alt="Facebook" width={16} height={16} />
            <Image src="/cross.svg" alt="Cross" width={16} height={16} />
            <Image src="/rss.svg" alt="RSS" width={16} height={16} />
            <Image src="/accessible.svg" alt="Accessibility" width={16} height={16} /> */}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 flex flex-wrap items-center justify-between px-36 py-2">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <Image src={Emblem} alt="Emblem" width={36} height={36} />
          <div className="flex flex-col items-left gap-1">
            <h3 className="text-lg text-cyan-900 font-bold leading-none">Software for Estimate Calculation Using <br /> Rural Rates for Employment</h3>
            <span className="text-xs text-sky-700 font-semibold">
              Ministry of Rural Development
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 mt-2 sm:mt-0 tracking-wider text-base text-cyan-900">
          <motion.div
            key={1}
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {},
            }}
            className="flex flex-row gap-6"
          >
            <motion.p
              key={2}
              className="description"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            >
              <Link href="/" className="relative font-semibold hover:text-amber-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Home</Link>
            </motion.p>
            <motion.p
              key={3}
              className="description"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              <Link href="/about" className="relative font-semibold hover:text-amber-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">About</Link>
            </motion.p>
            <motion.p
              key={4}
              className="description"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <Link href="/services" className="relative font-semibold hover:text-amber-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Services</Link>
            </motion.p>
            <motion.p
              key={5}
              className="description"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Link href="/dashboard" className="relative font-semibold hover:text-amber-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Reports</Link>
            </motion.p>
          </motion.div>




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

