"use client";
import useModal from "@/src/lib/hooks/useModal";
import { cn } from "@/src/lib/helpers/corefunctions";

export const Dialog: React.FC<{
  id: string;
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  outsideClose?: boolean;
}> = ({ id, title, children, className, outsideClose }) => {
  const { isOpen, openModal, closeModal } = useModal(id);

  return (
    <>
      <dialog id={id} className="modal" open={isOpen}>
        <div className={cn("modal-box", className)}>
          {/* close */}
          {/* <ModalCloseForm outsideClose={outsideClose} /> */}
          <button
            type="button"
            className={cn(
              "btn btn-sm btn-circle btn-ghost absolute right-2 top-2",
              {
                ["border border-neutral text-black"]: outsideClose,
              },
            )}
            onClick={closeModal}
          >
            ✕
          </button>

          {/* title */}
          {title && <h3 className="font-bold text-2xl mb-2">{title}</h3>}

          {/* content */}
          {children}
        </div>
      </dialog>
    </>
  );
};

const ModalCloseForm: React.FC<{ outsideClose?: boolean }> = ({
  outsideClose,
}) => {
  return (
    <form method="dialog" className={cn({ ["modal-backdrop"]: outsideClose })}>
      <button
        className={cn(
          "btn btn-sm btn-circle btn-ghost absolute right-2 top-2",
          {
            ["border border-neutral text-black"]: outsideClose,
          },
        )}
      >
        ✕
      </button>
    </form>
  );
};
