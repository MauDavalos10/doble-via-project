import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

interface LoadingOverlayProps {
  isVisible: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <img
          src="https://via.placeholder.com/200x80/c00b19/ffffff?text=DobleVia+Logo"
          alt="DobleVia Logo"
          style={{
            maxWidth: "200px",
            height: "auto",
            marginBottom: "20px",
          }}
        />

        <Typography
          variant="h4"
          sx={{
            color: "#c00b19",
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Transportamos vidas
        </Typography>

        <CircularProgress
          size={60}
          sx={{
            color: "#c00b19",
            marginBottom: "20px",
          }}
        />

        <Typography
          variant="h6"
          sx={{
            color: "white",
            textAlign: "center",
            maxWidth: "400px",
            lineHeight: 1.5,
          }}
        >
          Enviando su solicitud...
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#cccccc",
            textAlign: "center",
            maxWidth: "400px",
            marginTop: "10px",
          }}
        >
          Por favor espere mientras procesamos su información
        </Typography>
      </Box>
    </Box>
  );
};

export default LoadingOverlay;
