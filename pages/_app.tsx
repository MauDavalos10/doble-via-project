import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { appWithTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const DEFAULT_SEO = {
  titleTemplate: "%s | Doble Vía Transport",
  defaultTitle:
    "Doble Vía Transport - Servicios de Transporte Escolar, Institucional y Turístico",
  description:
    "Servicios de transporte escolar, institucional y turístico de alta calidad. Ofrecemos soluciones de transporte seguras y confiables para escuelas, empresas y turismo.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://doblevia.org/",
    siteName: "Doble Vía Transport",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Doble Vía Transport",
      },
    ],
  },
  twitter: {
    handle: "@doblevia",
    site: "@doblevia",
    cardType: "summary_large_image",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="content-language" content="es" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Doble Vía Transport - Servicios de transporte escolar, institucional y turístico"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>Doble Vía Transport</title>
      </Head>
      <ThemeProvider theme={theme}>
        <DefaultSeo {...DEFAULT_SEO} />
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
