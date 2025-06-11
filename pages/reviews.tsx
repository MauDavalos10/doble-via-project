import { useTranslation } from "next-i18next";
import Head from "next/head";
import InfoPageLayout from "../src/components/InfoPageLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { Typography } from "@mui/material";

export default function Reviews() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("reviews")}</title>
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
          {t("reviews")}
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
          La satisfacción de nuestros clientes es nuestra mejor carta de
          presentación. Aquí algunas de sus experiencias.
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
            <strong>Colegio San José:</strong> &ldquo;Excelente servicio de
            transporte escolar. Puntualidad y seguridad garantizadas.&rdquo;
          </div>
          <div>
            <strong>Empresa XYZ:</strong> &ldquo;El mejor servicio corporativo
            que hemos tenido. Profesionalismo y eficiencia.&rdquo;
          </div>
          <div>
            <strong>Hotel Grand:</strong> &ldquo;Transporte confiable para
            nuestros huéspedes. Siempre a tiempo y con excelente
            atención.&rdquo;
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
