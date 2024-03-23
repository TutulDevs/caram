import { ThemeChanger } from "@/components/theme_changer/ThemeChanger.component";
import { DashboardSideLinks } from "@/sections/dashboard/DashboardSideLinks.section";
import { Box, Flex, Heading } from "@radix-ui/themes";
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
      <Box
        asChild
        color="jade"
        height={"100%"}
        className="bg-green-600 w-36 py-4 fixed top-0 left-0 z-[1]"
      >
        <aside>
          <Flex direction={"column"} height={"100%"}>
            <Heading as="h2" align={"center"} mb={"4"}>
              <Link href={"/"} className="text-white">
                {"Caram"}
              </Link>
            </Heading>

            <Flex direction={"column"} py={"4"}>
              <DashboardSideLinks />
            </Flex>

            <Box px={"2"} className="mt-auto">
              <ThemeChanger />
            </Box>
          </Flex>
        </aside>
      </Box>

      <Box asChild p={"4"} className="ml-36">
        <article>{children}</article>
      </Box>
    </>
  );
}
