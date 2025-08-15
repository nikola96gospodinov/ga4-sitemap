import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import GA4Properties from "@/components/dashboard/ga4-properties";
import { LandingBackground } from "@/components/ui/layout/background-pattern";
import { Heading } from "@/components/ui/heading";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <LandingBackground>
      <div className="sticky top-0 left-0 w-full z-20 flex justify-between items-center py-4">
        <Heading text="Google Analytics 4 Sitemap" className="text-2xl" />
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button type="submit">Sign out</Button>
        </form>
      </div>
      <GA4Properties />
    </LandingBackground>
  );
}
