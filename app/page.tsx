import { auth, signIn } from "@/auth";
import { GoogleLogo } from "@/components/icons/google-logo";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { LandingBackground } from "@/components/ui/layout/background-pattern";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <LandingBackground>
      <div className="text-center max-w-2xl h-screen flex flex-col justify-center items-center mx-auto">
        <Heading
          text="Welcome to GA4 Sitemap Clustering"
          className="text-6xl mb-3 pb-1"
        />

        <p className="text-2xl text-slate-800 leading-relaxed mb-8">
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

        <p className="text-sm text-slate-700 italic mt-4">
          *This app requires access to your Google Analytics data to create
          visualizations.
        </p>
      </div>
    </LandingBackground>
  );
}
