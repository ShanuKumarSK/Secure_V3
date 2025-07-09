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
import Footer from "@/components/footer";
import Breadcrumb from "@/components/Breadcrumb";

const SideNavRoutes = [
  {
    type: 'link',
    name: 'Dashboard',
    key: 'Dashboard',
    icon: <DashboardIcon />,
    route: '/states/dashboard',
  },
  {
    type: 'dropdown',
    name: 'Estimates',
    key: 'Estimates',
    icon: <NewspaperIcon />,
    route: '/states/estimates',
    children: [
      { name: 'MGNREGA Works', route: '/states/estimates/mgnrega-works' },
      { name: 'Draft Estimate', route: '/states/estimates/draft-estimate' },
      { name: 'Actual Estimate', route: '/states/estimates/actual-estimate' },
      { name: 'AS Approved', route: '/states/estimates/as-approved' },
      { name: 'TS Approved', route: '/states/estimates/ts-approved' },
      { name: 'Inbox', route: '/states/estimates/inbox' },
      { name: 'File Status', route: '/states/estimates/file-status' },
    ],
  },
  {
    type: 'dropdown',
    name: 'Spill Over Works',
    key: 'SpillOverWorks',
    icon: <NewspaperIcon />,
    route: '/states/spill-over-works',
    children: [
      { name: 'Spill Over', route: '/states/spill-over-works/spill-over' },
      { name: 'Spill AS Approved', route: '/states/estimates/spill-as-approved' },
      { name: 'Spill TS Approved', route: '/states/estimates/spill-ts-approved' },
    ],
  },
  {
    type: 'dropdown',
    name: 'Revised Works',
    key: 'RevisedWorks',
    icon: <NewspaperIcon />,
    route: '/states/revised-works',
    children: [
      { name: 'Revise Estimate', route: '/states/revised-works/revise-estimate' },
      { name: 'Inbox-R', route: '/states/revised-works/inbox-R' },
      { name: 'AS Approved-R', route: '/states/revised-works/as-approved-R' },
      { name: 'TS Approved-R', route: '/states/revised-works/ts-approved-R' },
      { name: 'File Status-R', route: '/states/revised-works/file-status-R' },
      { name: 'To be Revised', route: '/states/revised-works/to-be-revised' },
      { name: 'Previous Year Works', route: '/states/revised-works/previous-year-works' },
    ],
  },
   {
    type: 'dropdown',
    name: 'Publish',
    key: 'Publish',
    icon: <NewspaperIcon />,
    route: '/states/publish',
    children: [
      { name: 'Pull Works', route: '/states/publish/pull-works' },
    ],
  },
  {
    type: 'dropdown',
    name: 'Last Year Works',
    key: 'LastYearWorks',
    icon: <NewspaperIcon />,
    route: '/states/last-year-works',
    children: [
      { name: 'To be Cancelled', route: '/states/last-year-works/to-be-cancelled' },
    ],
  },

];


export default function StatesLayout({ children, routes }: { children: React.ReactNode, routes: any[] }) {
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
       <Breadcrumb />
      <main style={{ marginLeft: 200, marginTop: 50, padding: 20 }}>{children}</main>
      <Footer />
    </div>
  );
}
