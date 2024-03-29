import { loginStuff } from "@/src/lib/server-actions";
import cn from "classnames";
import Link from "next/link";

type FORM = {
  email: string;
  password: string;
};

export const AdminLogin = () => {
  return (
    <form
      action={async (e) => {
        "use server";
        const res: any = await loginStuff(e);

        if (res.type == "error") {
          alert(res?.message ?? "error");
          return;
        }

        console.log("caram: res", res);
      }}
      className="min-w-full sm:min-w-96 flex flex-col gap-4"
    >
      <h2 className={"text-center text-4xl font-bold text-primary mb-4"}>
        Hello Stuff
      </h2>

      {/* email */}
      <label
        className={cn(
          "input input-bordered input-primary flex items-center gap-2",
          {
            "input-error": false,
          },
        )}
      >
        Email
        <input
          type="email"
          name="email"
          className="grow"
          placeholder="admin@mail.com"
          autoComplete="off"
        />
      </label>

      {/* password */}
      <label
        className={cn(
          "input input-bordered input-primary flex items-center gap-2",
          {
            "input-error": false,
          },
        )}
      >
        Password
        <input
          type="password"
          name="password"
          className="grow"
          placeholder="Enter password"
          autoComplete="off"
        />
      </label>

      {/* btn */}
      <button type="submit" className="btn btn-primary mt-4">
        Login
      </button>

      <Link
        href={"/admin/forgot-password"}
        className="link link-secondary text-xs text-center"
      >
        {"Forgot password?"}
      </Link>
    </form>
  );
};
