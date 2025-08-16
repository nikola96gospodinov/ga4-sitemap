import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { LandingBackground } from "@/components/ui/layout/background-pattern";
import { DashboardHeader } from "@/components/features/dashboard/dashboard-header/dashboard-header";
import { DashboardContent } from "@/components/features/dashboard/dashboard-content/dashboard-content";

export default async function Dashboard() {
  const session = await auth();

  if (!session || !session.accessToken) {
    redirect("/");
  }

  return (
    <LandingBackground>
      <DashboardHeader />

      <DashboardContent />
    </LandingBackground>
  );
}
