import { auth, signIn } from "@/auth";
import { GoogleLogo } from "@/components/icons/google-logo";
import { Button } from "@/components/ui/button";
import { LandingBackground } from "@/components/ui/layout/background-pattern";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <LandingBackground>
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-50 via-cyan-50 to-indigo-100 bg-clip-text text-transparent mb-5 pb-1">
          Welcome to GA4 Sitemap Clustering
        </h1>

        <p className="text-xl text-gray-200 leading-relaxed mb-8">
          Sign in with your Google account to analyze your website&apos;s
          traffic patterns and visualize your sitemap as an interactive chart.
        </p>

        <form
          action={async () => {
            "use server";
            await signIn("google", {
              redirectTo: "/dashboard",
            });
          }}
        >
          <Button size="xl" type="submit">
            <GoogleLogo />
            <span>Sign in with Google</span>
          </Button>
        </form>

        <p className="text-sm text-slate-200 italic mt-4">
          *This app requires access to your Google Analytics data to create
          visualizations.
        </p>
      </div>
    </LandingBackground>
  );
}
