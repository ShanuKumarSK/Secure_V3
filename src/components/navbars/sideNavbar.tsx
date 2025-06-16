// components/SideNavbar.tsx
import React from "react";
import Link from "next/link";
import Button from "../button";

type Route = {
    type: string;
    name: string;
    key: string;
    icon?: React.ReactNode;
    route: string;
    component?: React.ReactNode;
};

type SideNavbarProps = {
    routes: Route[];
};

const SideNavbar: React.FC<SideNavbarProps> = ({ routes }) => {
    return (
        <nav
            style={{
                width: 200,
                background: "#333",
                color: "#fff",
                height: "calc(100vh - 50px)",
                padding: 10,
                position: "fixed",
                top: 50,
                left: 0,
            }}
        >
            <ul style={{ listStyle: "none", padding: 0 }}>
                {routes?.map((route) => (
                    <li key={route.key} style={{ marginBottom: 10 }}>
                        <Link href={route.route} passHref>
                            <span style={{ color: "#fff", textDecoration: "none", cursor: "pointer", display: "flex", alignItems: "center" }}>
                                {route.icon && <span style={{ marginRight: 8 }}>{route.icon}</span>}
                                {route.name}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
            <Button color="primary" variant="contained" size="large">
                Click me
            </Button>
        </nav>
    );
};

export default SideNavbar;

