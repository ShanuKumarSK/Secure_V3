// components/LayoutWrapper.tsx (Client Component ✅)
"use client";

import { useEffect, useState } from "react";
import PublicLayout from "./public/layout";
import StatesLayout from "./states/layout";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(true);

//   useEffect(() => {
//     // Replace with real auth logic
//     const loggedIn = Boolean(localStorage.getItem("loggedIn"));
//     setIsLoggedIn(loggedIn);
//   }, []);

  if (isLoggedIn === null) {
    return <div>Loading...</div>;
  }

  return isLoggedIn ? (
    <StatesLayout>{children}</StatesLayout>
  ) : (
    <PublicLayout>{children}</PublicLayout>
  );
}
