import type React from "react";
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
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
      }}
    >
      {/* Left: Video */}
      <Box
        sx={{
          flex: { xs: "1", md: "0 0 45%" },
          background: "var(--dark-gray)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          minHeight: { xs: "40vh", md: "100vh" },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 100%)",
            zIndex: 1,
          },
        }}
      >
        <VideoBackground
          src="/videos/doble-via.mp4"
          fallbackImage="/images/car.gif"
          fullHeight
        />
      </Box>

      {/* Right: Content */}
      <Box
        sx={{
          flex: "1",
          padding: { xs: "3rem 1.5rem", md: "4rem 3rem" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          position: "relative",
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: "24px",
            padding: { xs: "2.5rem 2rem", md: "3.5rem 3rem" },
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          {children}

          <Box
            sx={{
              margin: "3rem 0 2rem 0",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent 0%, var(--medium-gray) 50%, transparent 100%)",
              opacity: 0.3,
            }}
          />

          <Typography
            variant="body1"
            align="center"
            sx={{
              marginBottom: "2rem",
              color: "var(--dark-gray)",
              fontFamily: "'Poppins', sans-serif",
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.6,
              fontWeight: 400,
              opacity: 0.85,
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
                transform: "translateY(-2px)",
                boxShadow: "0 12px 32px rgba(228, 13, 31, 0.3)",
                "&:active": {
                  transform: "translateY(0px)",
                },
                padding: "0.75rem 2rem",
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: 600,
                fontFamily: "'Poppins', sans-serif",
                borderRadius: "50px",
                textTransform: "none",
                letterSpacing: "0.5px",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                border: "none",
                minWidth: "200px",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: "50px",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)",
                  zIndex: 1,
                },
                "& .MuiButton-startIcon": {
                  marginRight: "8px",
                },
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
