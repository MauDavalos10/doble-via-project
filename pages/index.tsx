import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useRouter } from "next/router";
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
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: `rgba(24, 24, 24, ${Math.min(
            scrollPosition / 200,
            1
          )})`,
          boxShadow: "none",
          transition: "background-color 0.4s cubic-bezier(.4,0,.2,1)",
          backdropFilter: scrollPosition > 10 ? "blur(8px)" : "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t("menu")}
          </Typography>
          <Button
            color="inherit"
            startIcon={<LanguageIcon />}
            onClick={toggleLanguage}
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
      >
        <List
          sx={{
            width: 250,
            bgcolor: "#181818",
            height: "100%",
            color: "white",
          }}
        >
          {menuOptions.map((option) => (
            <ListItem key={option.path} disablePadding>
              <ListItemButton
                onClick={() => {
                  setDrawerOpen(false);
                  router.push(option.path);
                }}
              >
                <ListItemText primary={option.label} />
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
        }}
      >
        <img
          src="/images/car.gif"
          alt="Hero GIF"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
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

      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
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
              mb: 6,
              gap: 4,
            }}
          >
            <Box sx={{ flex: 1, minWidth: 260 }}>
              <img
                src={item.img}
                alt={t(item.titleKey)}
                style={{
                  width: "100%",
                  borderRadius: 12,
                  boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                }}
              />
            </Box>
            <Box sx={{ flex: 2, minWidth: 260 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                {t(item.titleKey)}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: 18 }}>
                {t(item.descKey)}
              </Typography>
            </Box>
          </Box>
        ))}
      </Container>
    </>
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
