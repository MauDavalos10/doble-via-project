import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { useState, useEffect, useRef } from "react";
import VideoBackground from "../src/components/VideoBackground";
import Footer from "../src/components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ServiceModal from "../src/components/ServiceModal";

const theme = createTheme({
  typography: {
    fontFamily: "Body-Font, sans-serif",
  },
});

export default function Home() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const heroRef = useRef(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  console.log("locale:", locale);
  console.log("school:", t("school"));
  console.log("institutional:", t("institutional"));
  console.log("transfer:", t("transfer"));
  console.log("trolley:", t("trolley"));
  console.log("tourism:", t("tourism"));
  console.log("about:", t("about"));
  console.log("clients:", t("clients"));
  console.log("reviews:", t("reviews"));

  const menuOptions =
    locale === "es"
      ? [
          { label: "Escolar", path: "/school" },
          { label: "Institucional", path: "/institutional" },
          {
            label: "Transfer",
            path: "https://593transfer.com/",
            external: true,
          },
          { label: "Trolley", path: "/trolley" },
          { label: "Turismo", path: "/tourism" },
          { label: "Quienes Somos", path: "/about" },
          { label: "Nuestros Clientes", path: "/clients" },
          { label: "Reseñas Escritas", path: "/reviews" },
          { label: "Fotografías", path: "/photos" },
        ]
      : [
          { label: t("school"), path: "/school" },
          { label: t("institutional"), path: "/institutional" },
          {
            label: "Transfer",
            path: "https://593transfer.com/",
            external: true,
          },
          { label: t("trolley"), path: "/trolley" },
          { label: t("tourism"), path: "/tourism" },
          { label: "Who We Are", path: "/about" },
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
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [locale]);

  const handleServiceClick = (serviceKey: string, index: number) => {
    // Si es el servicio de aeropuerto (índice 2), redirigir a la URL externa
    if (index === 2) {
      window.open("https://593transfer.com/", "_blank");
      return;
    }

    setSelectedService(serviceKey);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  const whatsappNumber = "593987063904";
  const whatsappMessage = encodeURIComponent(
    "Hola, necesito información sobre sus servicios."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const serviceKeys = [
    "schoolTransport",
    "institutionalTransport",
    "airportTransport",
    "trolleyTransport",
    "touristTransport",
  ];

  return (
    <ThemeProvider theme={theme}>
      <NextSeo
        title="Inicio"
        description="Doble Vía Transport - Tu socio confiable en servicios de transporte escolar, institucional y turístico. Ofrecemos soluciones de transporte seguras y de alta calidad."
        canonical="https://doblevia.org/"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "transporte escolar, transporte institucional, transporte turístico, servicios de transporte, transporte seguro, transporte confiable",
          },
        ]}
      />
      <>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: `linear-gradient(135deg, 
              rgba(15, 15, 15, ${Math.min(scrollPosition / 200, 0.95)}) 0%, 
              rgba(25, 25, 25, ${Math.min(scrollPosition / 200, 0.9)}) 100%)`,
            boxShadow:
              scrollPosition > 50 ? "0 8px 32px rgba(0,0,0,0.3)" : "none",
            transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            backdropFilter:
              scrollPosition > 10 ? "blur(20px) saturate(180%)" : "none",
            borderBottom:
              scrollPosition > 50 ? "1px solid rgba(255,255,255,0.1)" : "none",
          }}
        >
          <Toolbar sx={{ minHeight: { xs: 64, md: 80 } }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 300,
                letterSpacing: "0.5px",
                fontSize: { xs: "1.1rem", md: "1.3rem" },
              }}
            >
              Doble Vía
            </Typography>
            <Button
              color="inherit"
              onClick={() => router.push("/sales")}
              sx={{
                fontWeight: 600,
                letterSpacing: "0.5px",
                padding: "8px 20px",
                borderRadius: "3px",
                transition: "all 0.3s ease",
                marginRight: 2,
                backgroundColor: "rgba(192, 11, 25, 0.9)",
                "&:hover": {
                  backgroundColor: "rgba(192, 11, 25, 1)",
                  transform: "translateY(-1px)",
                },
              }}
            >
              {t("contactSales")}
            </Button>
            <Button
              color="inherit"
              startIcon={<LanguageIcon />}
              onClick={toggleLanguage}
              sx={{
                fontWeight: 300,
                letterSpacing: "0.5px",
                padding: "8px 20px",
                borderRadius: "3px",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                  transform: "translateY(-1px)",
                },
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
                    if (option.external) {
                      window.open(option.path, "_blank");
                    } else {
                      router.push(option.path);
                    }
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
          ref={heroRef}
          sx={{
            width: "100vw",
            height: "100vh",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(45deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)",
              zIndex: 1,
            },
          }}
        >
          <VideoBackground
            youtubeId="rCH0d_KBoqM"
            fallbackImage="/images/glitch-logo.gif"
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              pointerEvents: "none",
            }}
          >
            {/* Aquí puedes poner texto/logo si lo deseas */}
          </Box>
        </Box>

        <Box
          sx={{
            background: "linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%)",
            minHeight: "100vh",
            pt: { xs: 8, md: 12 },
            pb: { xs: 6, md: 8 },
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
            {/* Servicios en dos columnas alternadas */}
            {[
              {
                img: "/images/index/2_escolas.jpg",
                titleKey: "schoolTitle",
                descKey: "schoolDescription",
              },
              {
                img: "/images/index/3_institucional.jpg",
                titleKey: "institutionalTitle",
                descKey: "institutionalDescription",
              },
              {
                img: "/images/index/1_aeropuerto.jpg",
                titleKey: "airportTitle",
                descKey: "airportDescription",
              },
              {
                img: "/images/index/4_trolley.jpg",
                titleKey: "trolleyTitle",
                descKey: "trolleyDescription",
              },
              {
                img: "/images/index/5_turistico.jpg",
                titleKey: "tourismTitle",
                descKey: "tourismDescription",
              },
            ].map((item, idx) => (
              <Box
                key={item.titleKey}
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    md: idx % 2 === 0 ? "row" : "row-reverse",
                  },
                  alignItems: "center",
                  mb: { xs: 8, md: 12 },
                  gap: { xs: 4, md: 8 },
                  opacity: 0,
                  transform: "translateY(60px)",
                  animation: `fadeInUp 1s ease-out ${idx * 0.2}s forwards`,
                  "@keyframes fadeInUp": {
                    to: {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    minWidth: { xs: "100%", md: 400 },
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                    height: "400px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt={t(item.titleKey)}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    flex: 1.2,
                    minWidth: { xs: "100%", md: 400 },
                    px: { xs: 2, md: 4 },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 200,
                      mb: 3,
                      fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
                      lineHeight: 1.2,
                      color: "#1a1a1a",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {t(item.titleKey)}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "18px",
                      lineHeight: 1.5,
                      color: "#4D4D4D",
                      fontWeight: 300,
                      fontFamily: "'Poppins', Arial, sans-serif",
                      textAlign: "justify",
                      letterSpacing: "0.3px",
                    }}
                  >
                    {t(item.descKey)}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      mt: 4,
                      flexDirection: { xs: "column", sm: "row" },
                    }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => handleServiceClick(serviceKeys[idx], idx)}
                      sx={{
                        borderColor: "rgb(77, 77, 77)",
                        color: "rgb(77, 77, 77)",
                        borderRadius: "0px",
                        px: 4,
                        py: 2,
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: "1rem",
                        borderWidth: "2px",
                        minHeight: "50px",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          borderColor: "rgb(77, 77, 77)",
                          backgroundColor: "rgba(77, 77, 77, 0.1)",
                          color: "rgb(77, 77, 77)",
                        },
                      }}
                    >
                      {t("readMore")}
                    </Button>

                    <Button
                      variant="outlined"
                      startIcon={<WhatsAppIcon />}
                      onClick={() => window.open(whatsappUrl, "_blank")}
                      sx={{
                        borderColor: "rgb(77, 77, 77)",
                        color: "rgb(77, 77, 77)",
                        borderRadius: "0px",
                        px: 4,
                        py: 2,
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: "1rem",
                        borderWidth: "2px",
                        minHeight: "50px",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          borderColor: "rgb(77, 77, 77)",
                          backgroundColor: "rgba(77, 77, 77, 0.1)",
                          color: "rgb(77, 77, 77)",
                        },
                        "& .MuiButton-startIcon": {
                          marginRight: "8px",
                        },
                      }}
                    >
                      +593 98 706 3904
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Container>
        </Box>

        <ServiceModal
          open={modalOpen}
          onClose={handleModalClose}
          title={selectedService ? t(`services.${selectedService}.title`) : ""}
          content={
            selectedService ? t(`services.${selectedService}.modal`) : ""
          }
        />

        <Footer />
      </>
    </ThemeProvider>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "es", ["common"])),
    },
  };
};
