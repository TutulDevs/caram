import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="min-h-screen bg-gray-100">
        <nav className="navbar bg-base-100">
          <Link href={"/"} className="text-primary font-bold text-2xl">
            Caram
          </Link>
        </nav>

        <div className="m-8">{children}</div>
      </main>
    </>
  );
}
