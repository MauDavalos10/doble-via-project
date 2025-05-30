import React from "react";
import VideoBackground from "./VideoBackground";
import { Box, Container, Typography, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

interface InfoPageLayoutProps {
  children: React.ReactNode;
}

const whatsappNumber = "593987063904";
const whatsappMessage = encodeURIComponent(
  "Hola, necesito atención inmediata."
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const InfoPageLayout: React.FC<InfoPageLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* Left: GIF */}
      <Box
        sx={{
          flex: { xs: "1", md: "0 0 40%" },
          background: "#222",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          minHeight: { xs: "300px", md: "auto" },
        }}
      >
        <VideoBackground
          src="/videos/doble-via-compressed.mp4"
          fallbackImage="/images/car.gif"
          fullHeight
        />
      </Box>
      {/* Right: Content */}
      <Box
        sx={{
          flex: "1",
          padding: { xs: "2rem 1rem", md: "3rem 2rem" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="md">
          {children}
          <Box
            component="hr"
            sx={{
              margin: "2.5rem 0 1.5rem 0",
              border: "none",
              borderTop: "1px solid #bbb",
            }}
          />
          <Typography
            variant="body1"
            align="center"
            sx={{ marginBottom: "1rem", color: "#444" }}
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
              startIcon={<WhatsAppIcon />}
              sx={{
                background: "#25D366",
                color: "#222",
                "&:hover": {
                  background: "#128C7E",
                },
                padding: "0.5rem 1.2rem",
                fontSize: 18,
                fontWeight: 500,
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              }}
            >
              + 593 98 706 3904
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default InfoPageLayout;
