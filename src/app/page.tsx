import Link from "next/link";
import { getAuthInfo } from "../lib/helpers/api_call";

export default async function Home() {
  const { isLoggedIn } = await getAuthInfo();
  // console.log("page: home session: ", session);

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

            <Link
              href={!isLoggedIn ? "/login" : "/admin"}
              className="btn btn-primary px-8"
            >
              {!isLoggedIn ? "Login" : "Dashboard"}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
