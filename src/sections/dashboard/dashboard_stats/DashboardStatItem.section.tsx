import { cn } from "@/src/lib/helpers/corefunctions";

export const DashboardStatItem: React.FC<{
  icon: React.ReactNode;
  classNameIcon?: string;
  title: string;
  value: string | number;
  classNameValue?: string;
  desc?: string;
  err?: string;
}> = ({ icon, classNameIcon, title, value, classNameValue, desc, err }) => {
  return (
    <div className="stat min-h-32">
      <div className={cn("stat-figure", classNameIcon)}>{icon}</div>
      <div className="stat-title">{title}</div>
      {!err ? (
        <div className={cn("stat-value", classNameValue)}>{value}</div>
      ) : (
        <div className={cn("stat-value text-base text-red-500")}>{err}</div>
      )}
      {desc && <div className="stat-desc">{desc}</div>}
    </div>
  );
};
