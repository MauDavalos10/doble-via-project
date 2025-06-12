import Image from "next/image";
import InfoPageLayout from "../src/components/InfoPageLayout";
import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

export default function Clients() {
  const [currentPage, setCurrentPage] = useState(0);

  const clientImages = ["clientes-1.png", "clientes-2.png"];

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % clientImages.length);
  };

  const handlePrev = () => {
    setCurrentPage(
      (prev) => (prev - 1 + clientImages.length) % clientImages.length
    );
  };

  return (
    <InfoPageLayout>
      <Image
        src={`/images/clients/${clientImages[currentPage]}`}
        alt={`Client image ${currentPage + 1}`}
        fill
        style={{
          objectFit: "contain",
        }}
        priority
      />

      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: { xs: 8, sm: 16 },
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "white",
          boxShadow: 2,
          width: { xs: 36, sm: 40 },
          height: { xs: 36, sm: 40 },
          "&:hover": { bgcolor: "grey.100" },
          zIndex: 2,
        }}
      >
        <ArrowBackIosNewIcon
          sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" } }}
        />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: { xs: 8, sm: 16 },
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "white",
          boxShadow: 2,
          width: { xs: 36, sm: 40 },
          height: { xs: 36, sm: 40 },
          "&:hover": { bgcolor: "grey.100" },
          zIndex: 2,
        }}
      >
        <ArrowForwardIosIcon
          sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" } }}
        />
      </IconButton>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          position: "absolute",
          bottom: { xs: 16, sm: 24 },
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      >
        {clientImages.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentPage(index)}
            sx={{
              width: { xs: 8, sm: 10 },
              height: { xs: 8, sm: 10 },
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
    </InfoPageLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "es", ["common"])),
    },
  };
};
