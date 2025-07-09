'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { FaHome } from 'react-icons/fa';

// const Breadcrumb = () => {
//     const pathname = usePathname();

//     const paths = pathname.split('/').filter(Boolean);
//     const generatePath = (index: number) =>
//         '/' + paths.slice(0, index + 1).join('/');

//     return (
//         <div className="w-full bg-gradient-to-b from-cyan-700 to-cyan-600 py-4 px-4 shadow-sm text-white text-sm">
//             <nav className="max-w-screen-2xl mx-auto flex space-x-2 items-center">
//                 <Link href="/" className="flex items-center gap-1 hover:underline text-white font-bold">
//                     <FaHome className="text-sm" />
//                     <span>Home</span>
//                 </Link>
//                 {paths.map((segment, index) => (
//                     <div key={index} className="flex items-center space-x-2">
//                         <span>/</span>
//                         {index === paths.length - 1 ? (
//                             <span className="text-white font-medium capitalize">
//                                 {decodeURIComponent(segment.replace(/-/g, ' '))}
//                             </span>
//                         ) : (
//                             <Link
//                                 href={generatePath(index)}
//                                 className="hover:underline capitalize"
//                             >
//                                 {decodeURIComponent(segment.replace(/-/g, ' '))}
//                             </Link>
//                         )}
//                     </div>
//                 ))}
//             </nav>
//         </div>
//     );
// };

// export default Breadcrumb;

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";

export default function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  const generatePath = (index: number) =>
    '/' + paths.slice(0, index + 1).join('/');

  const oneStepBackIndex = paths.length - 2;

  return (
    <div className="w-full bg-gradient-to-b from-cyan-700 to-cyan-600 py-4 px-4 shadow-sm text-white text-sm">
      <nav className="max-w-screen-2xl mx-auto flex space-x-2 items-center">
        {/* Home Link Always Clickable */}
        <Link
          href="/"
          className="flex items-center gap-1 hover:underline text-white font-bold"
        >
          <FaHome className="text-sm" />
          <span>Home</span>
        </Link>

        {paths.map((segment, index) => {
          const isLast = index === paths.length - 1;
          const isOneStepBack = index === oneStepBackIndex;

          const decodedSegment = decodeURIComponent(
            segment.replace(/-/g, ' ')
          );

          return (
            <div key={index} className="flex items-center space-x-2">
              <span>/</span>
              {isLast ? (
                <span className="text-white font-bold capitalize">
                  {decodedSegment}
                </span>
              ) : isOneStepBack ? (
                <Link
                  href={generatePath(index)}
                  className="hover:underline text-white/70 capitalize"
                >
                  {decodedSegment}
                </Link>
              ) : (
                <span className="text-white/40 capitalize">
                  {decodedSegment}
                </span>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}


