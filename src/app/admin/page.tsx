import { AdminLogin } from "@/src/sections/admin/AdminLogin.section";
import cn from "classnames";

export default function AdminPage() {
  return (
    <>
      <div className={cn("flex items-center justify-center pt-16")}>
        <AdminLogin />
      </div>
    </>
  );
}
