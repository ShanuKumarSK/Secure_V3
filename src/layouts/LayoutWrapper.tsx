"use client";

import { useEffect, useState } from "react";
import PublicLayout from "./public/layout";
import StatesLayout from "./states/layout";

// Replace with your actual mock API base URL
const BASE_URL = "https://faecd848-e969-473b-9020-619bc8a364e6.mock.pstmn.io/";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [routes, setRoutes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated auth state, or replace with real logic
    const loggedIn = Boolean(localStorage.getItem("loggedIn"));
    setIsLoggedIn(loggedIn);
  }, []);

  useEffect(() => {
    if (isLoggedIn === null) return;

    const endpoint = isLoggedIn ? `${BASE_URL}/api/menu/private` : `${BASE_URL}/api/menu/public`;

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched menu routes:", data);
        setRoutes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch menu routes:", err);
        setLoading(false);
      });
  }, [isLoggedIn]);

  if (isLoggedIn === null || loading) {
    return <div>Loading...</div>;
  }

  return isLoggedIn ? (
    <StatesLayout routes={routes}>{children}</StatesLayout>
  ) : (
    <PublicLayout routes={routes}>{children}</PublicLayout>
  );
}
