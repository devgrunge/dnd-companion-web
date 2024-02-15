import React, { createContext, useContext, useState } from "react";
import { ModalContextProps, ModalContextValue } from "./types/contextTypes";
import { ModalContainer } from "./ModalContainer";

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export const ModalProvider: React.FC<ModalContextProps> = ({ children }) => {
  const [modalType, setModalType] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (type: string) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalType(null);
    setIsModalOpen(false);
  };

  const contextValue: ModalContextValue = {
    modalType,
    isModalOpen,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      <ModalContainer />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
