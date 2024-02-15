import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  IconButton,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useModal } from "./modalContext";
import { CreateCharacter } from "../components/CreateCharacter";

export const ModalContainer: React.FC = () => {
  const { isModalOpen, closeModal, modalType } = useModal();
  const modalContent = (
    <Modal open={isModalOpen} onClose={closeModal}>
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
            {(modalType === "character" && "Character") ||
              (modalType === "config" && "Configurations") ||
              (modalType === "share" && "Share your profile")}
          </Typography>
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent
          sx={{
            overflowY: "auto",
            maxHeight: "400px",
          }}
        >
          {/*
          1. Pass character props to character form
          2. Change component name to CharacterStatuses
          3. Create and pass a boolean props to render existent character data or mock data
          */}
          {modalType === "character" && <CreateCharacter />}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary">
            Cancel
          </Button>
          <Button onClick={closeModal} color="primary">
            Save
          </Button>
        </DialogActions>
      </Paper>
    </Modal>
  );

  return (
    <Modal open={isModalOpen} onClose={closeModal}>
      {modalContent}
    </Modal>
  );
};
