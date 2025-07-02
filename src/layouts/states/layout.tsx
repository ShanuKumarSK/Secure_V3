import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TopNavbar from "@/components/navbars/topNavbar";
import SideNavbar from "@/components/navbars/sideNavbar";
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
      <SideNavbar routes={SideNavRoutes} />
      <main style={{ marginLeft: 200, marginTop: 50, padding: 20 }}>{children}</main>
    </div>
  );
}
