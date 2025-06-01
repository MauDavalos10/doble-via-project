import Image from "next/image";
import InfoPageLayout from "../src/components/InfoPageLayout";
import { useState } from "react";
import { Box, IconButton, Paper } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Clients() {
  const [currentPage, setCurrentPage] = useState(0);

  const clientLogos = [
    "ONWAY.png",
    "REINVENTET.png",
    "sek.png",
    "REPSOL.png",
    "EOMMT.png",
    "CASTILLO .png",
    "ECUAQUIMICA.png",
    "CRSF.png",
    "ROSAPRIMA.png",
    "JACARANDA.png",
    "CARVAJAL.png",
    "QUIPORT.png",
    "UNIDAD EDUCATIVA.png",
    "FESA.png",
    "PRONACA.png",
    "JETBLUE.png",
    "GARLANDS.png",
  ];

  const clientsPerPage = 6;
  const totalPages = Math.ceil(clientLogos.length / clientsPerPage);
  const currentClients = clientLogos.slice(
    currentPage * clientsPerPage,
    (currentPage + 1) * clientsPerPage
  );

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <InfoPageLayout>
      <Box
        sx={{
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto",
          px: { xs: 2, md: 4 },
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: { xs: -20, md: -40 },
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "white",
            boxShadow: 2,
            "&:hover": { bgcolor: "grey.100" },
            zIndex: 2,
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
            position: "relative",
          }}
        >
          {currentClients.map((logo) => (
            <Paper
              key={logo}
              elevation={3}
              sx={{
                position: "relative",
                aspectRatio: "1",
                overflow: "hidden",
                borderRadius: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
                bgcolor: "white",
                p: 2,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={`/images/clients/${logo}`}
                  alt={logo.replace(".png", "")}
                  fill
                  style={{
                    objectFit: "contain",
                    padding: "1rem",
                  }}
                />
              </Box>
            </Paper>
          ))}
        </Box>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: { xs: -20, md: -40 },
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "white",
            boxShadow: 2,
            "&:hover": { bgcolor: "grey.100" },
            zIndex: 2,
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            mt: 4,
          }}
        >
          {Array.from({ length: totalPages }).map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentPage(index)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: currentPage === index ? "primary.main" : "grey.300",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  bgcolor: currentPage === index ? "primary.dark" : "grey.400",
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </InfoPageLayout>
  );
}
