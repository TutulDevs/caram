"use client";
import { cn } from "@/src/lib/helpers/corefunctions";
import Swal, { SweetAlertOptions } from "sweetalert2";

export const SwalAlert: React.FC<{
  onConfirm?: Function;
  onCancel?: Function;
  options?: SweetAlertOptions;
  btnProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  tooltip?: string;
}> = ({ onConfirm, onCancel, options, btnProps, tooltip }) => {
  const handleClick = (e: React.SyntheticEvent) => {
    Swal.mixin({
      customClass: {
        cancelButton: cn("btn btn-neutral btn-outline order-0"),
        confirmButton: cn("btn btn-primary order-1"),
        denyButton: cn("btn btn-accent order-2"),
      },
      buttonsStyling: false,
    })
      .fire({
        title: "Are you sure?",
        confirmButtonText: "Confirm",
        denyButtonText: "No",
        showCancelButton: true,
        ...options,
      })
      .then((res) => {
        if (res.isConfirmed && onConfirm) {
          onConfirm(e);
        }

        if (res.isDismissed && onCancel) {
          onCancel();
        }
      });
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        data-tip={tooltip}
        {...btnProps}
      >
        {btnProps?.children || "Open"}
      </button>
    </>
  );
};
