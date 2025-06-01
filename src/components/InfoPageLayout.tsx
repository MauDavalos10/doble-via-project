import type React from "react";
import VideoBackground from "./VideoBackground";
import {
  Box,
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

interface InfoPageLayoutProps {
  children: React.ReactNode;
}

const whatsappNumber = "593987063904";
const whatsappMessage = encodeURIComponent(
  "Hola, necesito atención inmediata."
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const InfoPageLayout: React.FC<InfoPageLayoutProps> = ({ children }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuOptions =
    locale === "es"
      ? [
          { label: "Escolar", path: "/school" },
          { label: "Institucional", path: "/institutional" },
          { label: "Trolley", path: "/trolley" },
          { label: "Turismo", path: "/tourism" },
          { label: "Acerca de", path: "/about" },
          { label: "Nuestros Clientes", path: "/clients" },
          { label: "Reseñas Escritas", path: "/reviews" },
        ]
      : [
          { label: t("school"), path: "/school" },
          { label: t("institutional"), path: "/institutional" },
          { label: t("trolley"), path: "/trolley" },
          { label: t("tourism"), path: "/tourism" },
          { label: t("about"), path: "/about" },
          { label: t("clients"), path: "/clients" },
          { label: t("reviews"), path: "/reviews" },
        ];

  const toggleLanguage = () => {
    const newLocale = locale === "es" ? "en" : "es";
    router.push({ pathname: router.pathname, query: router.query }, undefined, {
      locale: newLocale,
    });
  };

  useEffect(() => {
    setDrawerOpen(false);
  }, [locale]);

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
      }}
    >
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "#0f0f0f",
          boxShadow: "none",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 48, md: 56 } }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setDrawerOpen(true)}
            sx={{ padding: "8px" }}
          >
            <MenuIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 300,
              letterSpacing: "0.5px",
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            {t("menu")}
          </Typography>
          <Button
            color="inherit"
            startIcon={<LanguageIcon sx={{ fontSize: "1.2rem" }} />}
            onClick={toggleLanguage}
            sx={{
              fontWeight: 300,
              letterSpacing: "0.5px",
              padding: "4px 12px",
              borderRadius: "20px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                transform: "translateY(-1px)",
              },
              fontSize: "0.9rem",
            }}
          >
            {locale === "es" ? t("switchToEnglish") : t("switchToSpanish")}
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        key={locale}
        sx={{
          "& .MuiDrawer-paper": {
            background: "linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%)",
            borderRight: "1px solid rgba(255,255,255,0.1)",
          },
        }}
      >
        <List
          sx={{
            width: 280,
            height: "100%",
            color: "white",
            pt: 4,
          }}
        >
          {menuOptions.map((option) => (
            <ListItem key={option.path} disablePadding>
              <ListItemButton
                onClick={() => {
                  setDrawerOpen(false);
                  router.push(option.path);
                }}
                sx={{
                  py: 2,
                  px: 3,
                  mx: 2,
                  mb: 1,
                  borderRadius: "12px",
                  transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.08)",
                    transform: "translateX(8px)",
                  },
                }}
              >
                <ListItemText
                  primary={option.label}
                  primaryTypographyProps={{
                    fontWeight: 300,
                    letterSpacing: "0.5px",
                    fontSize: "1.1rem",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: { xs: "column", md: "row" },
          pt: { xs: 6, md: 7 }, // Reduced padding top to account for the smaller AppBar
        }}
      >
        {/* Left: Video */}
        <Box
          sx={{
            flex: { xs: "1", md: "0 0 45%" },
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            minHeight: { xs: "40vh", md: "100vh" },
          }}
        >
          <VideoBackground
            youtubeId="rCH0d_KBoqM"
            fallbackImage="/images/logo-rojo.png"
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
              Si necesita atención inmediata, contáctenos directamente a través
              de WhatsApp.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                startIcon={<WhatsAppIcon sx={{ fontSize: "1.2rem" }} />}
                sx={{
                  background:
                    "linear-gradient(135deg, #c00b19 0%, #a00915 100%)",
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
    </Box>
  );
};

export default InfoPageLayout;
