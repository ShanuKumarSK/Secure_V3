"use client";

import { usePathname } from "next/navigation";
import SideNavbar from "@/components/navbars/sideNavbar";
import TopNavbar from "@/components/navbars/topNavbar";
import React from "react";
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

const SideNavRoutes = [
  {
    type: 'link',
    name: 'National Dashboard',
    key: 'dashboard',
    icon: <DashboardIcon />,
    route: '/dashboard',
  },
  {
    type: 'link',
    name: 'State-wise Dashboard',
    key: 'state-dashboard',
    icon: <DocumentScannerIcon />,
    route: '/state-dashboard',
  },
  {
    type: 'link',
    name: 'Works Sanctioned',
    key: 'works-sanctioned',
    icon: <EqualizerIcon />,
    route: '/works-sanctioned',
  },
  {
    type: 'dropdown',
    name: 'SoR Reports',
    key: 'sor-reports',
    icon: <NewspaperIcon />,
    route: '/sor-reports',
    children: [
      { name: 'Activity', route: '/sor-reports/activity' },
      { name: 'Traffic', route: '/sor-reports/traffic' },
      { name: 'Statistic', route: '/sor-reports/statistic' },
    ],
  },
  {
    type: 'link',
    name: 'Templates',
    key: 'templates',
    icon: <AssignmentIcon />,
    route: '/templates',
  },
  {
    type: 'link',
    name: 'CIB Report',
    key: 'cib-report',
    icon: <DescriptionIcon />,
    route: '/cib-report',
  },
  {
    type: 'link',
    name: 'Works Category',
    key: 'works-category',
    icon: <SummarizeIcon />,
    route: '/works-category',
  },
];

type PublicLayoutProps = {
  children: React.ReactNode;
  routes: any[];
};

export default function PublicLayout({ children, routes }: PublicLayoutProps) {
  const pathname = usePathname();

  // Hide SideNavbar for "/auth" routes and homepage "/"
  const hideSidebar = pathname === "/" || pathname.startsWith("/auth");

  return (
    <div >
      <TopNavbar routes={routes} />
      {!hideSidebar && <SideNavbar routes={SideNavRoutes} />}
      <main
        style={{
          marginLeft: hideSidebar ? 0 : 250,
        }}
      >
        {children}
      </main>
    </div>
  );
}
