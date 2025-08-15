import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LandingBackground } from "@/components/ui/layout/background-pattern";

export default async function AuthError() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <LandingBackground>
      <div className="text-center px-6 max-w-md">
        <div className="bg-white/90 border border-red-500 rounded-lg p-8 mb-6">
          <h1 className="text-3xl font-bold text-red-800 mb-4">
            Authentication Error
          </h1>
          <p className="text-slate-800">
            There was a problem signing you in. Please try again.
          </p>
        </div>

        <Link href="/">
          <Button size="lg" className="w-full">
            Try Again
          </Button>
        </Link>
      </div>
    </LandingBackground>
  );
}
