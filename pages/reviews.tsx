import { useTranslation } from "next-i18next";
import Head from "next/head";
import InfoPageLayout from "../src/components/InfoPageLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { Typography, Box } from "@mui/material";

export default function Reviews() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("reviews")}</title>
      </Head>
      <InfoPageLayout hideFooter={true}>
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
          {t("reviewsTitle")}
        </Typography>

        <Box
          sx={{
            backgroundColor: "#f8f9fa",
            borderLeft: "4px solid #c00b19",
            padding: "2rem",
            margin: "2rem 0",
            borderRadius: "0 8px 8px 0",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "16px",
              fontFamily: "'Poppins', Arial, sans-serif",
              fontWeight: 300,
              color: "#4D4D4D",
              textAlign: "justify",
              lineHeight: 1.6,
              marginBottom: "1.5rem",
              fontStyle: "italic",
            }}
          >
            &ldquo;{t("reviewText")}&rdquo;
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                fontFamily: "'Poppins', Arial, sans-serif",
                fontWeight: 600,
                color: "#1a1a1a",
              }}
            >
              {t("reviewAuthor")}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                fontFamily: "'Poppins', Arial, sans-serif",
                fontWeight: 300,
                color: "#888",
              }}
            >
              {t("reviewDate")}
            </Typography>
          </Box>
        </Box>
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
