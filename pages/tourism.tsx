import { useTranslation } from "next-i18next";
import Head from "next/head";
import InfoPageLayout from "../src/components/InfoPageLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { Typography } from "@mui/material";

export default function Tourism() {
  const { t } = useTranslation("common");
  return (
    <>
      <NextSeo
        title="Transporte Turístico"
        description="Servicio de transporte turístico de alta calidad. Viajes cómodos y seguros para grupos y turistas individuales."
        canonical="https://doblevia.org/tourism"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "transporte turístico, servicio de turismo, transporte para turistas, viajes turísticos, transporte de grupos",
          },
        ]}
      />
      <Head>
        <title>{t("tourismTitle")}</title>
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
          {t("tourismTitle")}
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
          {t("tourismDescription")}
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
            <strong>{t("tourismFeature1").split(":")[0]}:</strong>{" "}
            {t("tourismFeature1").split(":")[1] || t("tourismFeature1")}
          </div>
          <div>
            <strong>{t("tourismFeature2").split(":")[0]}:</strong>{" "}
            {t("tourismFeature2").split(":")[1] || t("tourismFeature2")}
          </div>
          <div>
            <strong>{t("tourismFeature3").split(":")[0]}:</strong>{" "}
            {t("tourismFeature3").split(":")[1] || t("tourismFeature3")}
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
