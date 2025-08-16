export const Legend = () => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-slate-100 rounded-lg">
      <p className="text-slate-950">Does it have subpaths?</p>
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-400 rounded-full border-2 border-slate-700"></div>
          <span className="text-sm text-slate-700">Has subpaths</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
          <span className="text-sm text-slate-700">
            Doesn&apos;t have subpaths
          </span>
        </div>
      </div>

      <p className="text-slate-950 mt-4">
        The bigger the node, the higher the traffic
      </p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-blue-400 rounded-full"></div>
          <span className="text-sm text-slate-700">Large: High traffic</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-blue-400 rounded-full"></div>
          <span className="text-sm text-slate-700">
            Medium: Moderate traffic
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
          <span className="text-sm text-slate-700">Small: Low traffic</span>
        </div>
      </div>

      <p className="text-slate-950 mt-4">
        Similar paths have similar color schemes
      </p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-300 rounded-full border-2 border-slate-700"></div>
          <span className="text-sm text-slate-700">Main path</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-slate-700"></div>
          <span className="text-sm text-slate-700">Subpath</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-700 rounded-full"></div>
          <span className="text-sm text-slate-700">Subpath of subpath</span>
        </div>
      </div>
    </div>
  );
};
