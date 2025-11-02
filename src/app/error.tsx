"use client";
import MasterButton from "@/components/buttons/MasterButton";
import { useRouter } from "next/navigation";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="bg-gray-100">
      <div className="container">
        <div className="h-[75vh] flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            Oops! Something went wrong.
          </h1>
          <p className="text-gray-600 text-lg">
            We couldn’t load the page or find the data you’re looking for.
          </p>
          <p className="text-gray-500 mt-2">
            This might have happened due to a broken link, missing data, or a
            server issue. Please try again.
            <br/>
            {error.message}
          </p>
          <div className="flex items-center gap-4 mt-6">
            <MasterButton
              onClick={() => router.back()}
              size="lg"
              text="Go Back"
              variant="orange"
              containerClass="w-[120px] px-4 py-2 rounded"
            />
            <MasterButton
              onClick={() => {
                reset();
                window.location.reload();
              }}
              size="lg"
              text="Try Again"
              variant="orange"
              containerClass="min-w-[120px] px-4 py-2 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
