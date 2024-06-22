"use client";
import { signOut } from "next-auth/react";
import cn from "classnames";
import { REDIRECT_URLS } from "@/src/lib/helpers/coreconstants";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

export const LogoutButton: React.FC<{ className?: string }> = ({
  className,
}) => {
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      await signOut({
        callbackUrl: `${REDIRECT_URLS.LOGIN}?callbackUrl=${encodeURIComponent(pathname)}`,
      });

      toast.success("Logout Successful");
    } catch (error) {
      toast.error("Logout Failed!");
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className={cn("btn btn-accent text-white", className)}
    >
      Logout
    </button>
  );
};
