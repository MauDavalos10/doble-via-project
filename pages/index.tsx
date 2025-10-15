import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
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
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: "5%",
              width: "90%",
              height: "1px",
              background: `rgba(255, 255, 255, ${Math.max(
                1 - scrollPosition / 300,
                0
              )})`,
              transition: "opacity 0.3s ease",
            },
          }}
        >
          <Toolbar
            sx={{
              minHeight: { xs: 80, md: 100 },
              display: "flex",
              flexDirection: { xs: "row", md: "column" },
              alignItems: "center",
              justifyContent: { xs: "space-between", md: "center" },
              py: { xs: 1, md: 2 },
              px: { xs: 2, md: 3 },
            }}
          >
            {/* Layout para Desktop */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              {/* Primera fila: Menu, Logo/Isotipo y ContactSales */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <IconButton
                    color="inherit"
                    edge="start"
                    onClick={() => setDrawerOpen(true)}
                    sx={{ alignSelf: "center" }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 300,
                      letterSpacing: "0.5px",
                      fontSize: "0.9rem",
                      color: "white",
                    }}
                  >
                    MENU
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Image
                    src={
                      scrollPosition > 50
                        ? "/images/isotipo-texto.png"
                        : "/images/isotipo-blanco.png"
                    }
                    alt="Doble Vía"
                    width={scrollPosition > 50 ? 90 : 60}
                    height={scrollPosition > 50 ? 90 : 60}
                    style={{
                      height: scrollPosition > 50 ? "90px" : "60px",
                      width: "auto",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onClick={() => router.push("/")}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: 1,
                  }}
                >
                  <Button
                    color="inherit"
                    onClick={() => window.open("/sales", "_blank")}
                    sx={{
                      fontWeight: 600,
                      letterSpacing: "0.5px",
                      padding: "8px 20px",
                      borderRadius: "3px",
                      transition: "all 0.3s ease",
                      backgroundColor: "rgba(192, 11, 25, 0.9)",
                      "&:hover": {
                        backgroundColor: "rgba(192, 11, 25, 1)",
                        transform: "translateY(-1px)",
                      },
                    }}
                  >
                    {t("contactSales")}
                  </Button>

                  {/* Botones de idioma debajo del botón de sales */}
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Button
                      onClick={() => {
                        if (locale !== "es") {
                          router.push(
                            { pathname: router.pathname, query: router.query },
                            undefined,
                            {
                              locale: "es",
                            }
                          );
                        }
                      }}
                      sx={{
                        fontWeight: 300,
                        letterSpacing: "0.5px",
                        padding: "6px 16px",
                        borderRadius: "3px",
                        transition: "all 0.3s ease",
                        color: locale === "es" ? "#000000" : "#ffffff",
                        backgroundColor:
                          locale === "es"
                            ? "rgba(255,255,255,0.9)"
                            : "transparent",
                        "&:hover": {
                          backgroundColor:
                            locale === "es"
                              ? "rgba(255,255,255,1)"
                              : "rgba(255,255,255,0.1)",
                          transform: "translateY(-1px)",
                        },
                      }}
                    >
                      ESPAÑOL
                    </Button>
                    <Button
                      onClick={() => {
                        if (locale !== "en") {
                          router.push(
                            { pathname: router.pathname, query: router.query },
                            undefined,
                            {
                              locale: "en",
                            }
                          );
                        }
                      }}
                      sx={{
                        fontWeight: 300,
                        letterSpacing: "0.5px",
                        padding: "6px 16px",
                        borderRadius: "3px",
                        transition: "all 0.3s ease",
                        color: locale === "en" ? "#000000" : "#ffffff",
                        backgroundColor:
                          locale === "en"
                            ? "rgba(255,255,255,0.9)"
                            : "transparent",
                        "&:hover": {
                          backgroundColor:
                            locale === "en"
                              ? "rgba(255,255,255,1)"
                              : "rgba(255,255,255,0.1)",
                          transform: "translateY(-1px)",
                        },
                      }}
                    >
                      ENGLISH
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Layout para Mobile */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mr: 2,
                }}
              >
                <IconButton
                  color="inherit"
                  edge="start"
                  onClick={() => setDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 300,
                    letterSpacing: "0.5px",
                    fontSize: "0.8rem",
                    color: "white",
                  }}
                >
                  MENU
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  flexGrow: 1,
                  justifyContent: "center",
                }}
              >
                <Image
                  src={
                    scrollPosition > 50
                      ? "/images/isotipo-texto.png"
                      : "/images/isotipo-blanco.png"
                  }
                  alt="Doble Vía"
                  width={scrollPosition > 50 ? 72 : 48}
                  height={scrollPosition > 50 ? 72 : 48}
                  style={{
                    height: scrollPosition > 50 ? "72px" : "48px",
                    width: "auto",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onClick={() => router.push("/")}
                />
              </Box>

              <Box sx={{ display: "flex", gap: 0.5 }}>
                <Button
                  onClick={() => {
                    if (locale !== "es") {
                      router.push(
                        { pathname: router.pathname, query: router.query },
                        undefined,
                        {
                          locale: "es",
                        }
                      );
                    }
                  }}
                  sx={{
                    fontWeight: 300,
                    letterSpacing: "0.5px",
                    padding: "4px 8px",
                    borderRadius: "3px",
                    transition: "all 0.3s ease",
                    color: locale === "es" ? "#000000" : "#ffffff",
                    backgroundColor:
                      locale === "es" ? "rgba(255,255,255,0.9)" : "transparent",
                    minWidth: "auto",
                    fontSize: "0.85rem",
                    "&:hover": {
                      backgroundColor:
                        locale === "es"
                          ? "rgba(255,255,255,1)"
                          : "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  ES
                </Button>
                <Button
                  onClick={() => {
                    if (locale !== "en") {
                      router.push(
                        { pathname: router.pathname, query: router.query },
                        undefined,
                        {
                          locale: "en",
                        }
                      );
                    }
                  }}
                  sx={{
                    fontWeight: 300,
                    letterSpacing: "0.5px",
                    padding: "4px 8px",
                    borderRadius: "3px",
                    transition: "all 0.3s ease",
                    color: locale === "en" ? "#000000" : "#ffffff",
                    backgroundColor:
                      locale === "en" ? "rgba(255,255,255,0.9)" : "transparent",
                    minWidth: "auto",
                    fontSize: "0.85rem",
                    "&:hover": {
                      backgroundColor:
                        locale === "en"
                          ? "rgba(255,255,255,1)"
                          : "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  EN
                </Button>
              </Box>
            </Box>

            {/* Botón ContactSales para mobile - posicionado absolutamente */}
            <Button
              color="inherit"
              onClick={() => window.open("/sales", "_blank")}
              sx={{
                display: { xs: "block", md: "none" },
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                fontWeight: 600,
                letterSpacing: "0.5px",
                padding: "6px 16px",
                borderRadius: "3px",
                transition: "all 0.3s ease",
                backgroundColor: "rgba(192, 11, 25, 0.9)",
                mt: 1,
                fontSize: "0.9rem",
                "&:hover": {
                  backgroundColor: "rgba(192, 11, 25, 1)",
                  transform: "translateX(-50%) translateY(-1px)",
                },
              }}
            >
              {t("contactSales")}
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
            {/* SERVICIOS Section */}
            <ListItem sx={{ pb: 0 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  letterSpacing: "1px",
                  fontSize: "1rem",
                  color: "#ffffff",
                  pl: 2,
                }}
              >
                {locale === "es" ? "SERVICIOS" : "SERVICES"}
              </Typography>
            </ListItem>

            {/* Service Items */}
            {[
              {
                labelEs: "Escolar",
                labelEn: locale === "es" ? "Escolar" : t("school"),
                path: "/school",
              },
              {
                labelEs: "Institucional",
                labelEn: locale === "es" ? "Institucional" : t("institutional"),
                path: "/institutional",
              },
              {
                labelEs: "Transfer",
                labelEn: "Transfer",
                path: "https://593transfer.com/",
                external: true,
              },
              {
                labelEs: "Trolley",
                labelEn: locale === "es" ? "Trolley" : t("trolley"),
                path: "/trolley",
              },
              {
                labelEs: "Turismo",
                labelEn: locale === "es" ? "Turismo" : t("tourism"),
                path: "/tourism",
              },
            ].map((item) => (
              <ListItem key={item.path} disablePadding sx={{ pl: 2 }}>
                <ListItemButton
                  onClick={() => {
                    setDrawerOpen(false);
                    if (item.external) {
                      window.open(item.path, "_blank");
                    } else {
                      router.push(item.path);
                    }
                  }}
                  sx={{
                    py: 1.5,
                    px: 3,
                    mx: 1,
                    mb: 0.5,
                    borderRadius: "3px",
                    transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.08)",
                      transform: "translateX(8px)",
                    },
                  }}
                >
                  <ListItemText
                    primary={locale === "es" ? item.labelEs : item.labelEn}
                    primaryTypographyProps={{
                      fontWeight: 300,
                      letterSpacing: "0.5px",
                      fontSize: "1rem",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}

            {/* Spacing */}
            <Box sx={{ height: 16 }} />

            {/* About and Clients Section */}
            {[
              {
                labelEs: "Quienes Somos",
                labelEn: "Who We Are",
                path: "/about",
              },
              {
                labelEs: "Nuestros Clientes",
                labelEn: locale === "es" ? "Nuestros Clientes" : t("clients"),
                path: "/clients",
              },
            ].map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  onClick={() => {
                    setDrawerOpen(false);
                    router.push(item.path);
                  }}
                  sx={{
                    py: 1.5,
                    px: 3,
                    mx: 2,
                    mb: 0.5,
                    borderRadius: "3px",
                    transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.08)",
                      transform: "translateX(8px)",
                    },
                  }}
                >
                  <ListItemText
                    primary={locale === "es" ? item.labelEs : item.labelEn}
                    primaryTypographyProps={{
                      fontWeight: 300,
                      letterSpacing: "0.5px",
                      fontSize: "1rem",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}

            {/* Spacing */}
            <Box sx={{ height: 16 }} />

            {/* RESEÑAS Section */}
            <ListItem sx={{ pb: 0 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  letterSpacing: "1px",
                  fontSize: "1rem",
                  color: "#ffffff",
                  pl: 2,
                }}
              >
                {locale === "es" ? "RESEÑAS" : "REVIEWS"}
              </Typography>
            </ListItem>

            {/* Review Items */}
            {[
              {
                labelEs: "Escritas",
                labelEn: locale === "es" ? "Escritas" : t("reviews"),
                path: "/reviews",
              },
              {
                labelEs: "Fotográficas",
                labelEn: locale === "es" ? "Fotográficas" : t("photos"),
                path: "/photos",
              },
            ].map((item) => (
              <ListItem key={item.path} disablePadding sx={{ pl: 2 }}>
                <ListItemButton
                  onClick={() => {
                    setDrawerOpen(false);
                    router.push(item.path);
                  }}
                  sx={{
                    py: 1.5,
                    px: 3,
                    mx: 1,
                    mb: 0.5,
                    borderRadius: "3px",
                    transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.08)",
                      transform: "translateX(8px)",
                    },
                  }}
                >
                  <ListItemText
                    primary={locale === "es" ? item.labelEs : item.labelEn}
                    primaryTypographyProps={{
                      fontWeight: 300,
                      letterSpacing: "0.5px",
                      fontSize: "1rem",
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
                  <Image
                    src={item.img || "/placeholder.svg"}
                    alt={t(item.titleKey)}
                    fill
                    style={{
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
                        borderWidth: "1px",
                        minHeight: "50px",
                        flex: 1,
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
                      onClick={() => {
                        const phoneNumber =
                          idx === 2 ? "593981804561" : "593987063904";
                        const message = encodeURIComponent(
                          "Hola, necesito información sobre sus servicios."
                        );
                        const url = `https://wa.me/${phoneNumber}?text=${message}`;
                        window.open(url, "_blank");
                      }}
                      sx={{
                        borderColor: "rgb(77, 77, 77)",
                        color: "rgb(77, 77, 77)",
                        borderRadius: "0px",
                        px: 4,
                        py: 2,
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: "1rem",
                        borderWidth: "1px",
                        minHeight: "50px",
                        flex: 1,
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
                      {idx === 2 ? "+593 98 180 4561" : "+593 98 706 3904"}
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
