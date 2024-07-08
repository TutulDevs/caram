import { MODAL_IDS } from "./coreconstants";

export const openModal = (id: MODAL_IDS) => {
  const modal = document.getElementById(id) as HTMLDialogElement;
  if (modal) modal.showModal();
};

export const closeModal = (id: MODAL_IDS) => {
  const modal = document.getElementById(id) as HTMLDialogElement;
  if (modal) modal.close();
};
