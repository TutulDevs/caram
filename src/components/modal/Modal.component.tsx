"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/src/lib/helpers/corefunctions";

type ModalSizeType =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl";

interface ModalProps extends Dialog.DialogProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title?: React.ReactNode;
  classNameTitle?: string;
  desc?: React.ReactNode;
  classNameDesc?: string;
  stopOutsideClose?: boolean;
  size?: ModalSizeType;
  className?: string;
}

const sizeVariants: {
  [key in ModalSizeType]: string;
} = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

export const Modal: React.FC<ModalProps> = ({
  trigger,
  children,
  title,
  classNameTitle,
  desc,
  classNameDesc,
  stopOutsideClose,
  size = "3xl",
  className,
  ...props
}) => {
  return (
    <>
      <Dialog.Root {...props}>
        {/* trigger btn */}
        <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

        <Dialog.Portal>
          {/* overlay */}
          <Dialog.Overlay
            className={cn(
              "bg-base-200/50 data-[state=open]:animate-overlayShow fixed inset-0",
            )}
          />

          <Dialog.Content
            className={cn(
              "data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none",
              "modal-box",
              { [sizeVariants[size]]: size },
              className,
            )}
            onEscapeKeyDown={(e) => stopOutsideClose && e.preventDefault()}
            onPointerDownOutside={(e) => stopOutsideClose && e.preventDefault()}
          >
            {/* title */}
            {title && (
              <Dialog.Title className={cn("text-xl font-bold", classNameTitle)}>
                {title}
              </Dialog.Title>
            )}

            {/* description */}
            {desc && (
              <Dialog.Description
                className={cn(
                  "text-base-content/80 mt-3 mb-5 leading-normal",
                  classNameDesc,
                )}
              >
                {desc}
              </Dialog.Description>
            )}

            {/* content */}
            {children}

            {/* close */}
            <Dialog.Close asChild>
              <button
                className={cn(
                  "btn btn-sm btn-circle btn-ghost absolute right-2 top-2 appearance-none",
                )}
                aria-label="Close"
              >
                {"✕"}
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
