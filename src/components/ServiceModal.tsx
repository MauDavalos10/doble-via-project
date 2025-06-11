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
import { useTranslation } from "next-i18next";

interface ServiceModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const whatsappNumber = "593987063904";

const ServiceModal: React.FC<ServiceModalProps> = ({
  open,
  onClose,
  title,
  content,
}) => {
  const { t } = useTranslation("common");

  const whatsappMessage = encodeURIComponent(t("whatsappContact"));
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Función para formatear el contenido
  const formatContent = (text: string) => {
    const lines = text.split("\n").filter((line) => line.trim() !== "");
    const elements: React.JSX.Element[] = [];

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Si la línea contiene ":" y no es la primera línea, es una característica
      if (trimmedLine.includes(":") && index > 0) {
        const [boldPart, ...restParts] = trimmedLine.split(":");
        const description = restParts.join(":").trim();

        elements.push(
          <Typography
            key={index}
            variant="body1"
            sx={{
              fontSize: "15px",
              margin: "0px 20px 15px 20px",
              fontFamily: "'Poppins', Arial, sans-serif",
              fontWeight: 300,
              color: "#4D4D4D",
              textAlign: "justify",
              lineHeight: 1.5,
            }}
          >
            <strong>{boldPart.trim()}:</strong> {description}
          </Typography>
        );
      } else {
        // Es un párrafo normal
        elements.push(
          <Typography
            key={index}
            variant="body1"
            sx={{
              fontSize: "15px",
              margin: "0px 20px 15px 20px",
              fontFamily: "'Poppins', Arial, sans-serif",
              fontWeight: 300,
              color: "#4D4D4D",
              textAlign: "justify",
              lineHeight: 1.5,
            }}
          >
            {trimmedLine}
          </Typography>
        );
      }
    });

    return elements;
  };

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
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "1px",
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
        <Box sx={{ marginBottom: "24px" }}>{formatContent(content)}</Box>

        <Divider sx={{ marginY: "24px" }} />

        <Typography
          variant="body1"
          align="center"
          sx={{
            marginBottom: "24px",
            color: "#4a4a4a",
            fontSize: "1rem",
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          {t("whatsappModalText")}
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
