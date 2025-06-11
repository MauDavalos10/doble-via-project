import { useTranslation } from "next-i18next";
import Head from "next/head";
import InfoPageLayout from "../src/components/InfoPageLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { Typography } from "@mui/material";

export default function Institutional() {
  const { t } = useTranslation("common");
  return (
    <>
      <NextSeo
        title="Transporte Institucional"
        description="Servicio de transporte institucional para empresas y organizaciones. Soluciones de transporte corporativo eficientes y profesionales."
        canonical="https://doblevia.org/institutional"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "transporte institucional, transporte corporativo, transporte empresarial, servicio de transporte para empresas",
          },
        ]}
      />
      <Head>
        <title>{t("institutionalTitle")}</title>
      </Head>
      <InfoPageLayout>
        <Typography
          variant="h1"
          sx={{
            fontSize: "2rem",
            marginBottom: "2rem",
            fontFamily: "'Poppins', Arial, sans-serif",
            fontWeight: 600,
            color: "#1a1a1a",
            textAlign: "left",
          }}
        >
          {t("institutionalTitle")}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "15px",
            margin: "0px 20px 15px 20px",
            fontFamily: "'Poppins', Arial, sans-serif",
            fontWeight: 300,
            color: "#4D4D4D",
            textAlign: "justify",
            lineHeight: 1.5,
          }}
        >
          {t("institutionalDescription")}
        </Typography>
        <Typography
          component="div"
          sx={{
            fontSize: "15px",
            margin: "0px 20px 15px 20px",
            fontFamily: "'Poppins', Arial, sans-serif",
            fontWeight: 300,
            color: "#4D4D4D",
            textAlign: "justify",
            lineHeight: 1.5,
            "& > div": {
              marginBottom: "12px",
            },
          }}
        >
          <div>
            <strong>{t("institutionalFeature1").split(":")[0]}:</strong>{" "}
            {t("institutionalFeature1").split(":")[1] ||
              t("institutionalFeature1")}
          </div>
          <div>
            <strong>{t("institutionalFeature2").split(":")[0]}:</strong>{" "}
            {t("institutionalFeature2").split(":")[1] ||
              t("institutionalFeature2")}
          </div>
          <div>
            <strong>{t("institutionalFeature3").split(":")[0]}:</strong>{" "}
            {t("institutionalFeature3").split(":")[1] ||
              t("institutionalFeature3")}
          </div>
        </Typography>
      </InfoPageLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "es", ["common"])),
    },
  };
};
