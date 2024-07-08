import { useState, useCallback } from 'react';

const useModal = (modalId: string) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal && !modal.open) {
      modal.showModal();
      setIsOpen(true);
    }
  }, [modalId]);

  const closeModal = useCallback(() => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal && modal.open) {
      modal.close();
      setIsOpen(false);
    }
  }, [modalId]);

  return { isOpen, openModal, closeModal };
};

export default useModal;
