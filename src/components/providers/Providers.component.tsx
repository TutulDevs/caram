"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { reactQueryClient } from "@/src/lib/config/reactQuery.config";
import { Toaster } from "react-hot-toast";

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <SessionProvider>
        <QueryClientProvider client={reactQueryClient}>
          <Toaster position="top-center" />

          {children}
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
};
