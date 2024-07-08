"use client";
import cn from "classnames";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal } from "@/src/components/modal/Modal.component";
import { MODAL_IDS } from "@/src/lib/helpers/coreconstants";
import { CreateOrUpdatePlayerForm } from "./CreateOrUpdatePlayerForm.section";
import { closeModal, openModal } from "@/src/lib/helpers/corefunctions_clients";
import { TbEditCircle } from "react-icons/tb";
import { Player } from "@prisma/client";
import useModal from "@/src/lib/hooks/useModal";

export const AddPlayerActionBtn: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <>
      <button
        type="button"
        className={cn(className)}
        onClick={() => openModal(MODAL_IDS.CREATE_OR_UPDATE_PLAYER)}
      >
        <AiOutlinePlus className="w-5 h-5" />
        Add Player
      </button>

      <Modal id={MODAL_IDS.CREATE_OR_UPDATE_PLAYER}>
        <CreateOrUpdatePlayerForm
          onSuccess={() => closeModal(MODAL_IDS.CREATE_OR_UPDATE_PLAYER)}
        />
      </Modal>
    </>
  );
};

export const UpdatePlayerActionBtn: React.FC<{
  className?: string;
  player: Player;
}> = ({ className, player }) => {


  const {isOpen, openModal, closeModal} = useModal(MODAL_IDS.CREATE_OR_UPDATE_PLAYER)


  return (
    <>
      <button
        type="button"
        className={cn(className)}
        data-tip={`update ${player?.name}`}
        onClick={openModal}
      >
        <TbEditCircle />

        {isOpen ? '-tr': '-fl'}
      </button>

   {isOpen &&   <Modal id={MODAL_IDS.CREATE_OR_UPDATE_PLAYER}>
        <CreateOrUpdatePlayerForm
          player={player}
          onSuccess={closeModal}
        />
      </Modal>}
    </>
  );
};
