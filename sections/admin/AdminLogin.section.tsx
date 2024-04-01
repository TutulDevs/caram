"use client";

import { loginStuffFormState, loginStuffSchema } from "@/src/lib/form_schemas";
import { loginStuffAction } from "@/src/lib/server-actions";
import { zodResolver } from "@hookform/resolvers/zod";
import cn from "classnames";
import Link from "next/link";
import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { FormProvider, useForm } from "react-hook-form";

export const AdminLogin = () => {
  const [state, formAction] = useFormState(loginStuffAction, {
    email: "",
    password: "",
  });

  const form = useForm<loginStuffFormState>({
    resolver: zodResolver(loginStuffSchema),
    defaultValues: {
      // email: "",
      // password: "",
      ...(state?.fields ?? {}),
    },
  });

  console.log("caram: state", state);
  // console.log("caram: form", form);

  const formRef = useRef<HTMLFormElement>(null);

  const { pending } = useFormStatus();

  return (
    <>
      <FormProvider {...form}>
        <div className="min-w-full sm:min-w-96">
          <h2 className={"text-center text-4xl font-bold text-primary mb-4"}>
            Hello Stuff
          </h2>

          {state?.message !== "" && !state?.issues && (
            <div className="text-red-500">{state?.message}</div>
          )}
          {state?.issues && (
            <div className="text-red-500">
              <ul>
                {state.issues.map((issue) => (
                  <li key={issue} className="flex gap-1">
                    {/* <X fill="red" /> */}
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <form
            ref={formRef}
            action={formAction}
            onSubmit={(evt) => {
              evt.preventDefault();
              form.handleSubmit(() => {
                formAction(new FormData(formRef.current!));
              })(evt);
            }}
            className="flex flex-col gap-4"
          >
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
                required
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
                required
              />
            </label>

            {/* btn */}
            <button
              type="submit"
              disabled={pending}
              className="btn btn-primary disabled:bg-red-500 mt-4"
            >
              {pending ? "..." : "Login"}
            </button>

            <Link
              href={"/admin/forgot-password"}
              className="link link-secondary text-xs text-center"
            >
              {"Forgot password?"}
            </Link>
          </form>
        </div>
      </FormProvider>
    </>
  );
};
