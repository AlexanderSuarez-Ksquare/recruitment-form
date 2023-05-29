import React from "react";
import { Modal, Box, Button } from "@mui/material";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  submittedValues: Record<string, any>;
}

const FormModal = ({ isOpen, onClose, submittedValues }: FormModalProps) => {
  const filteredValues: Record<string, any> = {};

  for (const [key, value] of Object.entries(submittedValues)) {
    if (value !== null && value !== "") {
      filteredValues[key] = value;
    }
  }

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2 id="modal-title">Submitted Values</h2>
        <pre id="modal-description">
          {JSON.stringify(filteredValues, null, 2)}
        </pre>
        <Button variant="outlined" color="primary" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default FormModal;
