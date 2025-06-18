import type React from "react";
import VideoBackground from "./VideoBackground";
import {
  Box,
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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

interface InfoPageLayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

const whatsappNumber = "593987063904";
const whatsappMessage = encodeURIComponent(
  "Hola, necesito atención inmediata."
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const InfoPageLayout: React.FC<InfoPageLayoutProps> = ({
  children,
  hideFooter = false,
}) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale, pathname } = router;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const shouldShowWhatsApp = pathname !== "/clients" && !hideFooter;

  // Function to get section name based on current path and locale
  const getSectionName = () => {
    const pathToSectionMap = {
      "/school": locale === "es" ? "Escolar" : t("school"),
      "/institutional": locale === "es" ? "Institucional" : t("institutional"),
      "/trolley": locale === "es" ? "Trolley" : t("trolley"),
      "/tourism": locale === "es" ? "Turismo" : t("tourism"),
      "/about": locale === "es" ? "Quienes somos" : t("about"),
      "/clients": locale === "es" ? "Nuestros Clientes" : t("clients"),
      "/reviews": locale === "es" ? "Reseñas Escritas" : t("reviews"),
      "/photos": locale === "es" ? "Fotografías" : t("photos"),
      "/sales": t("sales"),
    };

    return pathToSectionMap[pathname as keyof typeof pathToSectionMap] || "";
  };

  const menuOptions =
    locale === "es"
      ? [
          { label: "Escolar", path: "/school" },
          { label: "Institucional", path: "/institutional" },
          { label: "Trolley", path: "/trolley" },
          { label: "Turismo", path: "/tourism" },
          { label: t("about"), path: "/about" },
          { label: "Nuestros Clientes", path: "/clients" },
          { label: "Reseñas Escritas", path: "/reviews" },
          { label: "Fotografías", path: "/photos" },
        ]
      : [
          { label: t("school"), path: "/school" },
          { label: t("institutional"), path: "/institutional" },
          { label: t("trolley"), path: "/trolley" },
          { label: t("tourism"), path: "/tourism" },
          { label: t("about"), path: "/about" },
          { label: t("clients"), path: "/clients" },
          { label: t("reviews"), path: "/reviews" },
          { label: t("photos"), path: "/photos" },
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
        maxHeight: "100vh",
        flexDirection: "column",
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
        overflow: "hidden",
      }}
    >
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "#0f0f0f",
          boxShadow: "none",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 48, md: 56 }, px: { xs: 1, md: 2 } }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setDrawerOpen(true)}
            sx={{ padding: "8px", mr: { xs: 1, md: 2 } }}
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
              fontSize: { xs: "0.9rem", md: "1.1rem" },
            }}
          >
            Menú
          </Typography>
          <Button
            color="inherit"
            onClick={() => router.push("/sales")}
            sx={{
              fontWeight: 600,
              letterSpacing: "0.5px",
              padding: { xs: "2px 6px", md: "4px 12px" },
              borderRadius: "3px",
              transition: "all 0.3s ease",
              marginRight: { xs: 0.5, md: 1 },
              backgroundColor: "rgba(192, 11, 25, 0.9)",
              "&:hover": {
                backgroundColor: "rgba(192, 11, 25, 1)",
                transform: "translateY(-1px)",
              },
              fontSize: { xs: "0.7rem", md: "0.8rem" },
              minWidth: { xs: "auto", md: "auto" },
            }}
          >
            {isMobile ? "VENTAS" : t("contactSales")}
          </Button>
          <Button
            color="inherit"
            startIcon={
              !isMobile ? <LanguageIcon sx={{ fontSize: "1.2rem" }} /> : null
            }
            onClick={toggleLanguage}
            sx={{
              fontWeight: 300,
              letterSpacing: "0.5px",
              padding: { xs: "2px 6px", md: "4px 12px" },
              borderRadius: "3px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                transform: "translateY(-1px)",
              },
              fontSize: { xs: "0.7rem", md: "0.9rem" },
              minWidth: { xs: "auto", md: "auto" },
            }}
          >
            {isMobile
              ? locale === "es"
                ? "EN"
                : "ES"
              : locale === "es"
              ? t("switchToEnglish")
              : t("switchToSpanish")}
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
                  borderRadius: "3px",
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
          pt: { xs: 6, md: 7 },
          height: "calc(100vh - 56px)",
          overflow: "hidden",
        }}
      >
        {/* Left: Video - Solo en desktop */}
        {!isMobile && (
          <Box
            sx={{
              flex: "0 0 33.33%",
              background: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              height: "calc(100vh - 56px)",
            }}
          >
            <VideoBackground
              youtubeId="rCH0d_KBoqM"
              fallbackImage="/images/glitch-logo.gif"
              fullHeight
            />

            {/* Section Name Overlay with X button */}
            {getSectionName() && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(0, 0, 0, 0.4)",
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  {/* Circular X Button */}
                  <Box
                    onClick={() => router.push("/")}
                    sx={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      cursor: "pointer",
                      transition: "transform 0.3s ease",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: "50%",
                        border: "2px solid #888",
                        transition: "opacity 0.3s ease",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: "50%",
                        background:
                          "conic-gradient(from 0deg, #c00b19 0%, #888 0%)",
                        mask: "radial-gradient(circle at center, transparent 21px, black 23px)",
                        WebkitMask:
                          "radial-gradient(circle at center, transparent 21px, black 23px)",
                        opacity: 0,
                        transition: "opacity 0.2s ease",
                      },
                      "&:hover::before": {
                        opacity: 0,
                      },
                      "&:hover::after": {
                        opacity: 1,
                        animation: "progressiveBorderFill 1s ease-out forwards",
                      },
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                      "@keyframes progressiveBorderFill": {
                        "0%": {
                          background:
                            "conic-gradient(from 0deg, #c00b19 0%, #888 0%)",
                        },
                        "25%": {
                          background:
                            "conic-gradient(from 0deg, #c00b19 90deg, #888 90deg)",
                        },
                        "50%": {
                          background:
                            "conic-gradient(from 0deg, #c00b19 180deg, #888 180deg)",
                        },
                        "75%": {
                          background:
                            "conic-gradient(from 0deg, #c00b19 270deg, #888 270deg)",
                        },
                        "100%": {
                          background:
                            "conic-gradient(from 0deg, #c00b19 360deg, #888 360deg)",
                        },
                      },
                    }}
                  >
                    <CloseIcon
                      sx={{
                        color: "white",
                        fontSize: "24px",
                        zIndex: 1,
                      }}
                    />
                  </Box>

                  {/* Section Name */}
                  <Typography
                    variant="h2"
                    sx={{
                      color: "white",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      letterSpacing: "1px",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                      textAlign: "center",
                    }}
                  >
                    {getSectionName()}
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        )}

        {/* Right: Content - 100% en móvil, 66.67% en desktop */}
        <Box
          sx={{
            flex: isMobile ? "1" : "0 0 66.67%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch",
            backgroundColor: "#ffffff",
            position: "relative",
            height: "calc(100vh - 56px)",
            padding: { xs: "2rem", md: "3rem" },
            overflow: "auto",
          }}
        >
          {children}

          {shouldShowWhatsApp && (
            <>
              <Box
                sx={{
                  margin: "1.5rem 0 1rem 0",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(77, 77, 77, 0.3) 50%, transparent 100%)",
                  opacity: 0.6,
                }}
              />

              <Typography
                variant="body1"
                sx={{
                  marginBottom: "1rem",
                  fontSize: "15px",
                  fontFamily: "'Poppins', Arial, sans-serif",
                  fontWeight: 300,
                  color: "#4D4D4D",
                  textAlign: "center",
                  lineHeight: 1.4,
                  letterSpacing: "0.3px",
                  px: { xs: 2, md: 4 },
                }}
              >
                {t("whatsappText")}
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    borderColor: "rgb(77, 77, 77)",
                    color: "rgb(77, 77, 77)",
                    borderRadius: "0px",
                    px: 3,
                    py: 1.5,
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "0.9rem",
                    borderWidth: "2px",
                    minHeight: "42px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      borderColor: "rgb(77, 77, 77)",
                      backgroundColor: "rgba(77, 77, 77, 0.1)",
                      color: "rgb(77, 77, 77)",
                    },
                    "& .MuiButton-startIcon": {
                      marginRight: "6px",
                    },
                  }}
                >
                  + 593 98 706 3904
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default InfoPageLayout;
