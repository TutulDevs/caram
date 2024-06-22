import { LoginForm } from "@/src/sections/admin/Login.section";
import { Suspense } from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <Suspense
          fallback={<span className="loading loading-ring loading-lg" />}
        >
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
};

export default LoginPage;
