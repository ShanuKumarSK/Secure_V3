import Link from "next/link";
import { ReactNode } from "react";

interface DefaultNavbarLinkProps {
  icon: ReactNode; // You can pass an SVG or any React element here
  name: string;
  route: string;
  light: boolean;
}

const DefaultNavbarLink: React.FC<DefaultNavbarLinkProps> = ({ icon, name, route, light }) => {
  return (
    <Link href={route} passHref>
      <a
        className={`
          mx-1 p-1 flex items-center cursor-pointer select-none
          ${light ? "text-white" : "text-gray-800"}
          hover:opacity-80
          transition
        `}
        aria-label={name}
      >
        <span
          className={`
            ${light ? "text-white" : "text-indigo-600"}
            align-middle
            mr-1
          `}
          aria-hidden="true"
        >
          {icon}
        </span>
        <span className="font-bold text-lg capitalize leading-none">{name}</span>
      </a>
    </Link>
  );
};

export default DefaultNavbarLink;
