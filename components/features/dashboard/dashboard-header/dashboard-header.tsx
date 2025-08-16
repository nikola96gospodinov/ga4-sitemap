import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

export const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <Heading text="GA4 Sitemap" className="text-4xl" />
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit" className="w-full">
          Sign out
        </Button>
      </form>
    </div>
  );
};
