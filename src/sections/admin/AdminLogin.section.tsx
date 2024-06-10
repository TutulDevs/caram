"use client";
import { LoginInput } from "@/src/components/inputs_fields/LoginInput.component";
import {
  loginStuffFormState,
  loginStuffSchema,
} from "@/src/lib/helpers/form_schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const AdminLogin = () => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<loginStuffFormState>({
    resolver: zodResolver(loginStuffSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: loginStuffFormState) => {
    try {
      console.log("caram: data", data);
      toast.success("Logged In Successfully");
      router.push("/admin/dashboard");
    } catch (error) {
      toast.error("Logged In Failed!");
    }
  };

  const { pending } = useFormStatus();

  return (
    <>
      <div className="min-w-full sm:min-w-96">
        <h2 className={"text-center text-4xl font-bold text-primary mb-4"}>
          Hello Stuff
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* email */}
          <LoginInput
            label="Email"
            err={errors.email?.message}
            inputProps={{
              type: "email",
              placeholder: "admin@mail.com",
              autoComplete: "off",
              required: true,
              ...register("email", {
                required: "Email is required",
              }),
            }}
          />

          {/* password */}
          <LoginInput
            label="Password"
            err={errors.password?.message}
            inputProps={{
              type: "password",
              placeholder: "Enter password",
              autoComplete: "off",
              required: true,
              ...register("password", {
                required: "Password is required",
              }),
            }}
          />

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
    </>
  );
};
