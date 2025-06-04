import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  Box,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

interface ServiceModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const whatsappNumber = "593987063904";
const whatsappMessage = encodeURIComponent(
  "Hola, necesito información sobre sus servicios."
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const ServiceModal: React.FC<ServiceModalProps> = ({
  open,
  onClose,
  title,
  content,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "3px",
          maxHeight: "80vh",
        },
      }}
    >
      <DialogTitle
        sx={{
          padding: "24px 24px 16px 24px",
          fontSize: "1.5rem",
          fontWeight: 600,
          color: "#1a1a1a",
          position: "relative",
        }}
      >
        {title}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 16,
            top: 16,
            color: "#666",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ padding: "0 24px 24px 24px" }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1rem",
            lineHeight: 1.7,
            color: "#4a4a4a",
            fontWeight: 400,
            marginBottom: "24px",
            whiteSpace: "pre-line",
          }}
        >
          {content}
        </Typography>

        <Divider sx={{ marginY: "24px" }} />

        <Typography
          variant="body1"
          align="center"
          sx={{
            marginBottom: "24px",
            color: "#4a4a4a",
            fontSize: "1rem",
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          Si necesita atención inmediata, contáctenos directamente a través de
          WhatsApp.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            startIcon={<WhatsAppIcon sx={{ fontSize: "1.2rem" }} />}
            sx={{
              background: "linear-gradient(135deg, #c00b19 0%, #a00915 100%)",
              color: "white",
              padding: "12px 24px",
              fontSize: "1rem",
              fontWeight: 600,
              borderRadius: "3px",
              textTransform: "none",
              letterSpacing: "0.5px",
              transition: "all 0.3s ease",
              border: "none",
              minWidth: "200px",
              "&:hover": {
                background: "linear-gradient(135deg, #a00915 0%, #800712 100%)",
                transform: "translateY(-2px)",
                boxShadow: "0 12px 32px rgba(192, 11, 25, 0.3)",
              },
              "&:active": {
                transform: "translateY(0px)",
              },
            }}
          >
            + 593 98 706 3904
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
