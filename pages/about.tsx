import { useTranslation } from "next-i18next";
import Head from "next/head";
import InfoPageLayout from "../src/components/InfoPageLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { Typography } from "@mui/material";

export default function About() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("about")}</title>
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
          {t("about")}
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
          {t("aboutDescription")}
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
            <strong>{t("mission")}:</strong> {t("missionDescription")}
          </div>
          <div>
            <strong>{t("vision")}:</strong> {t("visionDescription")}
          </div>
          <div>
            <strong>{t("values")}:</strong> {t("valuesDescription")}
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
