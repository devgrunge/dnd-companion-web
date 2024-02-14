import { useState } from "react";

export const useMenu = () => {
  const [charactersModalOpen, setCharactersModalOpen] = useState(false);
  const [configurationsModalOpen, setConfigurationsModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const handleOpenCharactersModal = () => {
    console.log("Opening Characters Modal");
    setCharactersModalOpen(true);
  };

  const handleOpenConfigurationsModal = () => {
    console.log("Opening Configurations Modal");
    setConfigurationsModalOpen(true);
  };

  const handleOpenShareModal = () => {
    console.log("Opening Share Modal");
    setShareModalOpen(true);
  };

  return {
    charactersModalOpen,
    configurationsModalOpen,
    shareModalOpen,
    handleOpenCharactersModal,
    handleOpenConfigurationsModal,
    handleOpenShareModal,
  };
};
