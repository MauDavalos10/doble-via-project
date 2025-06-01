import { GetServerSideProps } from "next";
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
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [locale]);

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
              {t("menu")}
            </Typography>
            <Button
              color="inherit"
              startIcon={<LanguageIcon />}
              onClick={toggleLanguage}
              sx={{
                fontWeight: 300,
                letterSpacing: "0.5px",
                padding: "8px 20px",
                borderRadius: "25px",
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
            fallbackImage="/images/logo-rojo.png"
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
                img: "/images/img1.jpeg",
                titleKey: "schoolTitle",
                descKey: "schoolDescription",
              },
              {
                img: "/images/img2.jpg",
                titleKey: "institutionalTitle",
                descKey: "institutionalDescription",
              },
              {
                img: "/images/img3.jpeg",
                titleKey: "airportTitle",
                descKey: "airportDescription",
              },
              {
                img: "/images/img4.jpeg",
                titleKey: "trolleyTitle",
                descKey: "trolleyDescription",
              },
              {
                img: "/images/img5.jpeg",
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
                    borderRadius: "24px",
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
                      borderRadius: "24px",
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
                      fontSize: { xs: "1.1rem", md: "1.2rem" },
                      lineHeight: 1.7,
                      color: "#4a4a4a",
                      fontWeight: 300,
                      letterSpacing: "0.3px",
                    }}
                  >
                    {t(item.descKey)}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Container>
        </Box>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale, req } = context;
  // Solo redirigir si la ruta es exactamente '/' (sin idioma)
  if (req.url === "/" && locale !== "es") {
    return {
      redirect: {
        destination: "/es",
        permanent: false,
      },
    };
  }
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "es", ["common"])),
    },
  };
};
