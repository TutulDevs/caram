"use client";
import { cn } from "@/src/lib/helpers/corefunctions";
import { AiOutlinePlus } from "react-icons/ai";
import { CreateOrUpdatePlayerForm } from "./CreateOrUpdatePlayerForm.section";
import { TbEditCircle } from "react-icons/tb";
import { Player } from "@prisma/client";
import { Modal } from "@/src/components/modal/Modal.component";
import { useState } from "react";
import { SwalAlert } from "@/src/components/swal/Swal.component";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FiUserMinus } from "react-icons/fi";

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
            data-tip={`Update ${player?.name}`}
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

export const DeletePlayerActionBtn: React.FC<{ player: Player }> = ({
  player,
}) => {
  const name = player.name;
  const router = useRouter();

  const onConfirm = async () => {
    try {
      const res = await fetch("/api/players/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ player_id: player.player_id }),
      });

      if (res.ok) {
        toast.success("Player removed!");
        router.refresh();
      } else {
        toast.error("Failed to remove player!");
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  return (
    <>
      <SwalAlert
        btnProps={{
          children: <FiUserMinus />,
          className:
            "btn btn-accent btn-circle btn-sm flex items-center tooltip tooltip-accent",
        }}
        options={{
          title: `Do you want to delete ${name}?`,
          text: "ladj aalkfja aldfkja aldfaj",
        }}
        onConfirm={onConfirm}
        tooltip={`Remove ${name}`}
      />
    </>
  );
};
