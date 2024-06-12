import cn from "classnames";

export const DashboardStatCardSkeleton = () => {
  return (
    <div
      className={cn("stats stats-vertical md:stats-horizontal shadow w-full")}
    >
      <div className="stat min-h-32">
        <div
          className={cn(
            "stat-figure text-primary skeleton w-8 h-8 rounded-full",
          )}
        />
        <div className="stat-title skeleton w-1/3 h-4 rounded-lg" />
        <div
          className={cn(
            "stat-value text-primary skeleton w-16 h-8 rounded-full",
          )}
        />
        <div className="stat-desc skeleton w-1/2 h-3 rounded-lg" />
      </div>

      <div className="stat min-h-32">
        <div
          className={cn(
            "stat-figure text-secondary skeleton w-8 h-8 rounded-full",
          )}
        />
        <div className="stat-title skeleton w-1/3 h-4 rounded-lg" />
        <div
          className={cn(
            "stat-value text-secondary skeleton w-16 h-8 rounded-full",
          )}
        />
        <div className="stat-desc skeleton w-1/2 h-3 rounded-lg" />
      </div>
    </div>
  );
};
