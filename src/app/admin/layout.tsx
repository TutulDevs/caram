import { ThemeChanger } from "@/src/components/theme_changer/ThemeChanger.component";
import { DashboardSideLinks } from "@/src/sections/dashboard/DashboardSideLinks.section";
import { LogoutButton } from "@/src/components/logout_button/LogoutButton.component";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin | Caram - Game of Joy",
  description: "Enjoy the moment & compete for the trophy",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="drawer md:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        {/* Page content here */}
        <article className="drawer-content p-4">
          <div className="flex md:hidden justify-between items-center mb-4">
            <span className="text-xl font-bold">Caram</span>
            <label
              htmlFor="my-drawer"
              className="btn btn-primary btn-sm btn-circle swap swap-rotate drawer-button"
            >
              {/* <input type="checkbox" /> */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>

          {children}
        </article>

        {/* drawer inner items */}
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          />

          <aside className="bg-green-600 min-w-min py-4 min-h-screen flex flex-col gap-2">
            <h2 className="text-2xl text-center">
              <Link href={"/"} className="text-white">
                {"Caram"}
              </Link>
            </h2>

            <DashboardSideLinks />

            <LogoutButton className="mt-auto mx-2" />
            <ThemeChanger className="dropdown-top px-2" />
          </aside>
        </div>
      </div>
    </>
  );
}
