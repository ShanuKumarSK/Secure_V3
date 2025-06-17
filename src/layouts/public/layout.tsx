"use client";

import { usePathname } from "next/navigation";
import SideNavbar from "@/components/navbars/sideNavbar";
import TopNavbar from "@/components/navbars/topNavbar";
import React from "react";

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
      {!hideSidebar && <SideNavbar routes={routes} />}
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
