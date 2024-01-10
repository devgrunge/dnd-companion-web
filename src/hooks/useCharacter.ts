import { useState } from "react";

export const useCharacter = () => {
  const image =
    "https://images.unsplash.com/photo-1559999831-7deaf136d4a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  return {
    image,
    isEditModalOpen,
    setIsEditModalOpen,
    handleEditClick,
    handleEditModalClose,
  };
};
