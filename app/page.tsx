import { Box, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-4xl md:text-7xl font-bold animate-pulse">
              {" "}
              {"Coming Soon"}
            </h1>
            <p className="py-6">
              {"I'm working hard to bring you something amazing. Stay tuned!"}
            </p>

            <Link href={"/admin"} className="btn btn-primary px-8">
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
