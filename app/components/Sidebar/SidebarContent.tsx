import React from "react";
import test from "../../assets/phase.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const routes = [
  {
    path: "/dashboard",
    icon: test,
    name: "Dashboard",
  },
  {
    path: "/bet",
    icon: test,
    name: "Bet",
  },
  {
    path: "/accound",
    icon: test,
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
            className={`px-3 py-2 rounded-lg space-x-3 flex items-center mx-4 ${
              pathname == route.path ? "bg-primary font-semibold" : ""
            }`}
          >
            <Image
              className="w-5 h-5"
              aria-hidden="true"
              src={route.icon}
              alt={route.path}
            />
            <span>{route.name}</span>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SidebarContent;
