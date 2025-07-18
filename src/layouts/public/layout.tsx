"use client";

import { usePathname } from "next/navigation";
import SideNavbar from "@/components/navbars/sideNavbar";
import TopNavbar from "@/components/navbars/topNavbar";
import React, { useState } from "react";
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
import Footer from "@/components/footer";
import Breadcrumb from "@/components/Breadcrumb";

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
    name: 'States Dashboard',
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
      { name: 'State SoR', route: '/sor-reports/state-sor' },
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
  const [collapsed, setCollapsed] = useState(false);

  // Hide SideNavbar for "/auth" routes and homepage "/"
  const hideSidebar = pathname === "/" || pathname.startsWith("/auth");

  return (
    <div >
      <TopNavbar routes={routes} />

      {!hideSidebar && <SideNavbar
        routes={SideNavRoutes}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />}
      <main
         style={{
          marginLeft: hideSidebar ? 0 : collapsed ? 80 : 256, // ✅ dynamic
          transition: 'margin-left 0.3s ease',
        }}
      >
        {!hideSidebar && <Breadcrumb />}
        {children}
      </main>
      <Footer />
    </div>
  );
}
