import React from "react";
import test from "../../assets/phase.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { PlayIcon, Home, ActivityIcon, User } from "lucide-react";

const routes = [
  {
    path: "/dashboard",
    icon: Home,
    name: "Dashboard",
  },
  {
    path: "/bet",
    icon: PlayIcon,
    name: "Bet",
  },
  {
    path: "/account",
    icon: User,
    name: "Account",
  },
];

function SidebarContent() {
  const pathname = usePathname();
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a
        className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
        href="/"
      >
        MyBetFunds
      </a>
      <ul className="mt-10 space-y-4 flex flex-col">
        {routes.map((route: any, index: number) => (
          <div
            key={index}
            className={`cursor-pointer px-3 py-2 rounded-lg space-x-3 flex items-center mx-4 ${
              pathname == route.path ? "bg-primary font-semibold text-black" : ""
            }`}
          >
            <route.icon className="w-6 h-6" />
            <Link href={route.path}>{route.name}</Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SidebarContent;
