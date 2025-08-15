import { GoogleLogo } from "@/components/icons/google-logo";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-indigo-400/20 rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 border border-purple-400/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-cyan-400/20 rotate-12 animate-pulse delay-1500"></div>

        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-50 via-cyan-50 to-indigo-100 bg-clip-text text-transparent mb-6">
          Welcome to GA4 Sitemap Clustering
        </h1>

        <p className="text-xl text-gray-200 leading-relaxed mb-8">
          Sign in with your Google account to analyze your website&apos;s
          traffic patterns and visualize your sitemap as an interactive chart.
        </p>

        <Button size="xl">
          <GoogleLogo />
          <span>Sign in with Google </span>
        </Button>

        <p className="text-sm text-slate-200 italic mt-4">
          *This app requires access to your Google Analytics data to create
          visualizations.
        </p>
      </div>
    </div>
  );
}
