// components/TopNavbar.tsx
import React from "react";
import Link from "next/link";

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
  return (
    <header
      style={{
        height: 50,
        background: "#222",
        color: "#fff",
        padding: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>States Top Navbar</div>
      <nav>
        {routes?.map((route) => (
          <Link key={route.key} href={route.route} passHref>
            <span style={{ color: "#fff", marginLeft: 20, textDecoration: "none", cursor: "pointer" }}>
              {route.name}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default TopNavbar;

