import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function TopNavbar() {
  return (
    <header style={{ height: 50, background: "#222", color: "#fff", padding: 10 }}>
      States Top Navbar
    </header>
  );
}

function SideNavbar() {
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
      States Side Navbar
    </nav>
  );
}

export default function StatesLayout({ children }: { children: React.ReactNode }) {
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
      <TopNavbar />
      <SideNavbar />
      <main style={{ marginLeft: 200, marginTop: 50, padding: 20 }}>{children}</main>
    </div>
  );
}
