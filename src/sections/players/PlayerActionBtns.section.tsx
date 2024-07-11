"use client";
import { cn } from "@/src/lib/helpers/corefunctions";
import { AiOutlinePlus } from "react-icons/ai";
import { CreateOrUpdatePlayerForm } from "./CreateOrUpdatePlayerForm.section";
import { TbEditCircle } from "react-icons/tb";
import { Player } from "@prisma/client";
import { Modal } from "@/src/components/modal/Modal.component";
import { useState } from "react";

export const AddPlayerActionBtn: React.FC<{ className?: string }> = ({
  className,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal
        open={open}
        onOpenChange={setOpen}
        stopOutsideClose
        size="md"
        trigger={
          <button type="button" className={cn(className)}>
            <AiOutlinePlus className="w-5 h-5" />
            Add Player
          </button>
        }
      >
        <CreateOrUpdatePlayerForm onSuccess={() => setOpen(false)} />
      </Modal>
    </>
  );
};

export const UpdatePlayerActionBtn: React.FC<{
  className?: string;
  player: Player;
}> = ({ className, player }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal
        open={open}
        onOpenChange={setOpen}
        stopOutsideClose
        size="md"
        trigger={
          <button
            type="button"
            className={cn(className)}
            data-tip={`update ${player?.name}`}
          >
            <TbEditCircle />
          </button>
        }
      >
        <CreateOrUpdatePlayerForm
          player={player}
          onSuccess={() => setOpen(false)}
        />
      </Modal>
    </>
  );
};
