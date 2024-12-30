import { FC } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

export interface SnackbarMessageProps {
  message: string;
  open: boolean;
  onClose: () => void;
  severity?: "success" | "info" | "warning" | "error";
}

const SnackbarMessage: FC<SnackbarMessageProps> = ({
  message,
  open,
  onClose,
  severity = "info",
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3500}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      sx={{ width: "fit-content" }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        sx={{ width: "fit-content" }}
        variant="filled"
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarMessage;
