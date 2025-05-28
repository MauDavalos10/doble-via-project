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
import { useState, useEffect } from "react";

export default function Home() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;
  const [drawerOpen, setDrawerOpen] = useState(false);

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
    setDrawerOpen(false);
  }, [locale]);

  return (
    <>
      <Head>
        <title>{t("welcome")}</title>
        <meta
          name="description"
          content="A simple landing page with language switching"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="static">
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

      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {t("welcome")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("description")}
          </Typography>
        </Box>
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
