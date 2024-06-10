import cn from "classnames";
import { PiUsersThreeBold } from "react-icons/pi";
import { RiGameLine } from "react-icons/ri";

export const DashboardStats: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <>
      <div
        className={cn(
          "stats stats-vertical md:stats-horizontal shadow w-full",
          className,
        )}
      >
        <DashboardStatItem
          title="Total Players"
          value={16}
          classNameIcon="text-primary"
          classNameValue="text-primary"
          icon={<PiUsersThreeBold className="w-8 h-8 stroke-current" />}
        />

        <DashboardStatItem
          title="Total Tournaments"
          value={0}
          classNameIcon="text-secondary"
          classNameValue="text-secondary"
          icon={<RiGameLine className="w-8 h-8 stroke-current" />}
        />
      </div>
    </>
  );
};

export const DashboardStatItem: React.FC<{
  icon: React.ReactNode;
  classNameIcon?: string;
  title: string;
  value: string | number;
  classNameValue?: string;
  desc?: string;
}> = ({ icon, classNameIcon, title, value, classNameValue, desc }) => {
  return (
    <div className="stat min-h-32">
      <div className={cn("stat-figure", classNameIcon)}>{icon}</div>
      <div className="stat-title">{title}</div>
      <div className={cn("stat-value", classNameValue)}>{value}</div>
      {desc && <div className="stat-desc">{desc}</div>}
    </div>
  );
};

/* <div className="my-2 flex gap-1">
        {[1, 2].map((el) => (
          <div
            key={el}
            className="flex-1 flex justify-between p-4 skeleton w-1/2 h-28"
          >
            <div className="">
              <div className="skeleton w-32 h-4 mb-4" />
              <div className="skeleton w-12 h-8" />
            </div>
            <div className="skeleton w-12 h-12 rounded-full "></div>
          </div>
        ))}
      </div> */
