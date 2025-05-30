import Head from "next/head";
import { Typography, Box } from "@mui/material";
import InfoPageLayout from "../components/InfoPageLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Doble Vía - Transporte Escolar</title>
        <meta
          name="description"
          content="Servicio de transporte escolar seguro y confiable"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <InfoPageLayout>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: 32, sm: 36, md: 40 },
              fontWeight: 700,
              marginBottom: 3,
              textAlign: { xs: "center", md: "left" },
              color: "var(--dark-gray)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            TRANSPORTE ESCOLAR
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: 16, sm: 17, md: 18 },
              color: "var(--dark-gray)",
              marginBottom: 3,
              textAlign: { xs: "center", md: "left" },
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Con más de 22 años de experiencia, dobleVIA se especializa en el
            traslado seguro y puntual de estudiantes. Nuestro servicio de
            transporte escolar ofrece tranquilidad a instituciones educativas y
            familias al contar con:
          </Typography>
          <Box
            component="ul"
            sx={{
              fontSize: { xs: 15, sm: 16, md: 17 },
              color: "var(--dark-gray)",
              marginBottom: 3,
              paddingLeft: { xs: 2, md: 3 },
              fontFamily: "'Poppins', sans-serif",
              "& li": {
                marginBottom: 1.5,
                textAlign: { xs: "center", md: "left" },
              },
            }}
          >
            <Typography component="li">
              <Box component="span" sx={{ fontWeight: "bold" }}>
                Monitoreo GPS en Tiempo Real:
              </Box>{" "}
              Cada vehículo está equipado con rastreo GPS para que las familias
              puedan verificar la ubicación y ruta en tiempo real.
            </Typography>
            <Typography component="li">
              <Box component="span" sx={{ fontWeight: "bold" }}>
                Personal Capacitado:
              </Box>{" "}
              Conductores y asistentes altamente capacitados en servicio al
              cliente, garantizando un entorno seguro y amigable para los
              estudiantes.
            </Typography>
            <Typography component="li">
              <Box component="span" sx={{ fontWeight: "bold" }}>
                Mantenimiento Preventivo:
              </Box>{" "}
              Riguroso plan de para asegurar la óptima condición de los
              vehículos en cada traslado.
            </Typography>
          </Box>
        </InfoPageLayout>
      </Box>
    </>
  );
}
