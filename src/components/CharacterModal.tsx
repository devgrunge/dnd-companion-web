import React from "react";
import {
  Button,
  Typography,
  Modal,
  Box,
  Paper,
  IconButton,
  DialogContent,
  DialogActions,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CreateCharacter } from "./CreateCharacter";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  type: string;
}

export const CharacterModal: React.FC<ModalProps> = ({
  open,
  onClose,
  type,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
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
          <Typography variant="h6">Edit Character</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent
          sx={{
            overflowY: "auto",
            maxHeight: "400px",
          }}
        >
          {type === "editCharacter" && <CreateCharacter type="editCharacter" />}
          <Typography variant="body1">
            Edit your character details here.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Paper>
    </Modal>
  );
};
