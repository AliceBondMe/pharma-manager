import { useState, useCallback } from "react";

const useSnackbar = () => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleOpenSnackbar = useCallback(() => {
    setIsSnackbarOpen(true);
  }, []);

  const handleCloseSnackbar = useCallback(() => {
    setIsSnackbarOpen(false);
  }, []);

  return {
    isSnackbarOpen,
    handleOpenSnackbar,
    handleCloseSnackbar,
  };
};

export default useSnackbar;
