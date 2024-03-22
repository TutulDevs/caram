import { DashboardSideLinks } from "@/sections/dashboard/DashboardSideLinks.section";
import { Box, Flex, Grid, Heading } from "@radix-ui/themes";
import Link from "next/link";

const dashboardLinks = [
  { id: 1, title: "Dashboard", icon: "", href: "/dashboard" },
  { id: 2, title: "Tournaments", icon: "", href: "/tournaments" },
  { id: 3, title: "Players", icon: "", href: "/players" },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Flex className="h-screen">
        <Box asChild color="green" className="bg-green-600 w-36 py-4">
          <aside>
            <Heading as="h2" align={"center"} mb={"4"}>
              {"Caram"}
            </Heading>

            <Flex direction={"column"} py={"4"}>
              <DashboardSideLinks />
            </Flex>
          </aside>
        </Box>

        <Box asChild p={"4"}>
          <article>{children}</article>
        </Box>
      </Flex>
    </>
  );
}
