"use client"; // Error components must be Client Components
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("err: ", error);
  }, [error]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6 text-center">
      <h2 className="text-3xl text-red-500 font-semibold">
        Something went wrong!
      </h2>

      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Try Again
      </button>

      <div className="text-left">
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    </div>
  );
}
