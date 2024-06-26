import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { DAISY_UI_LIGHT_THEME } from "../lib/helpers/coreconstants";
import { Providers } from "../components/providers/Providers.component";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Caram - Game of Joy",
  description: "Enjoy the moment & compete for the trophy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir={"ltr"}
      data-theme={DAISY_UI_LIGHT_THEME}
      suppressHydrationWarning
    >
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
