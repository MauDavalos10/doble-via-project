import { useTranslation } from "next-i18next";
import Head from "next/head";
import InfoPageLayout from "../src/components/InfoPageLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { Typography, Box } from "@mui/material";

export default function Photos() {
  const { t } = useTranslation("common");

  const photos = [
    {
      src: "/images/index/2_escolas.jpg",
      alt: t("schoolTitle"),
      title: t("schoolTitle"),
    },
    {
      src: "/images/index/3_institucional.jpg",
      alt: t("institutionalTitle"),
      title: t("institutionalTitle"),
    },
    {
      src: "/images/index/1_aeropuerto.jpg",
      alt: t("airportTitle"),
      title: t("airportTitle"),
    },
    {
      src: "/images/index/4_trolley.jpg",
      alt: t("trolleyTitle"),
      title: t("trolleyTitle"),
    },
    {
      src: "/images/index/5_turistico.jpg",
      alt: t("tourismTitle"),
      title: t("tourismTitle"),
    },
  ];

  return (
    <>
      <InfoPageLayout hideFooter={true}>
        {/* Primera fila - 3 fotos */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            marginBottom: "1rem",
          }}
        >
          {photos.slice(0, 3).map((photo, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                position: "relative",
                width: "100%",
                height: "250px",
                overflow: "hidden",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                },
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                  padding: "2rem 1rem 1rem 1rem",
                  color: "white",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    fontFamily: "'Poppins', Arial, sans-serif",
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  {photo.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Segunda fila - 2 fotos centradas */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            justifyContent: "center",
            maxWidth: "66.67%",
            margin: "0 auto",
          }}
        >
          {photos.slice(3, 5).map((photo, index) => (
            <Box
              key={index + 3}
              sx={{
                flex: 1,
                position: "relative",
                width: "100%",
                height: "250px",
                overflow: "hidden",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                },
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                  padding: "2rem 1rem 1rem 1rem",
                  color: "white",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    fontFamily: "'Poppins', Arial, sans-serif",
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  {photo.title}
                </Typography>
              </Box>
            </Box>
          ))}
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
