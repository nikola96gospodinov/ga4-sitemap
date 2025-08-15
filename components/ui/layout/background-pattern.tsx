import { PropsWithChildren } from "react";

export const LandingBackground = ({ children }: PropsWithChildren) => (
  <div className="min-h-screen bg-white relative overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400/50 rounded-full"></div>
      <div className="absolute top-40 right-32 w-24 h-24 border border-indigo-400/50 rotate-45"></div>
      <div className="absolute bottom-32 left-32 w-20 h-20 border border-purple-400/50 rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-28 h-28 border border-violet-400/30 rotate-12"></div>

      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"></div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
    </div>
    <div className="z-10 relative max-w-5xl mx-auto">{children}</div>
  </div>
);
