import { cn } from "@/src/lib/helpers/corefunctions";
import { AdminLogin } from "@/src/sections/admin/AdminLogin.section";

export default function AdminPage() {
  return (
    <>
      <div className={cn("flex items-center justify-center pt-16")}>
        <AdminLogin />
      </div>
    </>
  );
}
