import { DAISY_UI_THEMES } from "@/src/lib/helpers/coreconstants";
import { cn } from "@/src/lib/helpers/corefunctions";

export const ThemeChanger: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <>
      <div className={cn("dropdown", className)}>
        <div tabIndex={0} role="button" className="btn w-full">
          Theme
          <svg
            width="12px"
            height="12px"
            className="h-2 w-2 fill-current opacity-60 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box"
        >
          {DAISY_UI_THEMES.map((v, i, arr) => (
            <li
              key={v}
              className={cn({
                "mb-1": i != arr.length - 1,
              })}
            >
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start capitalize"
                aria-label={v}
                value={v}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
