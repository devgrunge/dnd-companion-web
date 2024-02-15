import { useState } from "react";
import { useModal } from "../contexts/modalContext";

interface MenuFunctions {
  handleOpenCharactersModal: () => void;
  handleOpenConfigurationsModal: () => void;
  handleOpenShareModal: () => void;
}

export const useMenu = (): MenuFunctions => {
  const { openModal, closeModal } = useModal();
  const handleOpenCharactersModal = () => {
    openModal("character");
  };

  const handleOpenConfigurationsModal = () => {
    openModal("config");
  };

  const handleOpenShareModal = () => {
    openModal("share");
  };

  return {
    handleOpenCharactersModal,
    handleOpenConfigurationsModal,
    handleOpenShareModal,
  };
};
