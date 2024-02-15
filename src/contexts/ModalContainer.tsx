import { Modal } from "@mui/material";
import { useModal } from "./modalContext";

export const ModalContainer: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();
  const modalContent = (
    <div>
      <button onClick={closeModal}>Close Modal</button>
    </div>
  );

  return (
    <Modal open={isModalOpen} onClose={closeModal}>
      {modalContent}
    </Modal>
  );
};