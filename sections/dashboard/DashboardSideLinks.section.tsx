"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "classnames";

const dashboardLinks = [
  { id: 1, title: "Dashboard", icon: "", href: "/admin/dashboard" },
  { id: 2, title: "Tournaments", icon: "", href: "/admin/tournaments" },
  { id: 3, title: "Players", icon: "", href: "/admin/players" },
];

export const DashboardSideLinks: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex flex-col py-4">
        {dashboardLinks.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={cn("btn rounded-none text-start justify-start", {
              "btn-primary btn-active": pathname == item.href,
              "btn-neutral": pathname !== item.href,
            })}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </>
  );
};
