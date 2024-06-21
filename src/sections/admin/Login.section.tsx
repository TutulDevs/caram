"use client";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";

type FORM = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = decodeURIComponent(params.get("callbackUrl") ?? "");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FORM>({ mode: "all" });

  const onSubmit = async (data: FORM) => {
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: callbackUrl || "/admin",
      });

      console.log("res: ", res);

      if (res?.error) {
        setError("Invalid email or password");
      } else {
        router.push(res?.url || "/admin");
      }
    } catch (error) {
      console.log("err: ", error);
    }
  };

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-md shadow-sm">
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full px-3 py-2 border border-gray-300 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Email address"
              {...register("email", {
                required: "Email is required!",
              })}
            />
            {errors.email?.message && (
              <small className="text-accent px-1">{errors.email.message}</small>
            )}
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full px-3 py-2 border border-gray-300 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password?.message && (
              <small className="text-accent px-1">
                {errors.password.message}
              </small>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  );
};
