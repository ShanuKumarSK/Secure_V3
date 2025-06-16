import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TopNavbar from "@/components/navbars/topNavbar";
import SideNavbar from "@/components/navbars/sideNavbar";


export default function StatesLayout({ children, routes  }: { children: React.ReactNode, routes: any[] }) {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);

  // Simulate authentication check (replace with real auth logic)
//   useEffect(() => {
//     const loggedIn = Boolean(localStorage.getItem("loggedIn")); // example
//     if (!loggedIn) {
//       router.push("/public"); // redirect to public dashboard if not logged in
//     } else {
//       setLoading(false);
//     }
//   }, [router]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

  return (
    <div>
      <TopNavbar routes={routes} />
      <SideNavbar routes={routes} />
      <main style={{ marginLeft: 200, marginTop: 50, padding: 20 }}>{children}</main>
    </div>
  );
}
