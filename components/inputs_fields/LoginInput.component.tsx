import cn from "classnames";

export const LoginInput: React.FC<{
  label?: string;
  err?: string;
  className?: string;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
}> = ({ label, err, className, inputProps }) => {
  return (
    <>
      <div className={cn(className)}>
        <label
          className={cn(
            "input input-bordered input-primary flex items-center gap-2",
            {
              "input-error": !!err,
            },
          )}
        >
          {label}

          <input
            {...inputProps}
            className={cn("grow", inputProps?.className)}
          />
        </label>

        {err && <small className="block mt-1 text-error">{err}</small>}
      </div>
    </>
  );
};
