"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "classnames";

const dashboardLinks = [
  { id: 1, title: "Dashboard", icon: "", href: "/dashboard" },
  { id: 2, title: "Tournaments", icon: "", href: "/dashboard/tournaments" },
  { id: 3, title: "Players", icon: "", href: "/dashboard/players" },
];

export const DashboardSideLinks: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      {dashboardLinks.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={cn(
            "p-2 transition-all duration-200 hover:bg-black hover:text-green-700",
            { "bg-black text-green-700": pathname == item.href },
          )}
        >
          {item.title}
        </Link>
      ))}
    </>
  );
};
