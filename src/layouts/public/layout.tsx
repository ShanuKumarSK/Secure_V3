export default function PublicLayout({ children }: { children: React.ReactNode }) {

    function TopNavbar() {
  return (
    <header style={{ height: 50, background: "#222", color: "#fff", padding: 10 }}>
      Public Top Navbar
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
      Public Side Navbar
    </nav>
  );
}
  return (
    <div>
      {/* You can add a public header or navbar here if needed */}
      <TopNavbar />
      <SideNavbar />
      <main>{children}</main>
    </div>
  );
}