import { LoginForm } from "@/src/sections/admin/Login.section";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;