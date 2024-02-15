import { ReactNode } from "react";

export interface ModalContextProps {
  children: ReactNode;
}

export interface ModalContextValue {
  modalType: string | null;
  isModalOpen: boolean;
  openModal: (type: string) => void;
  closeModal: () => void;
}
