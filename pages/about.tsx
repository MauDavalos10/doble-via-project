import { useTranslation } from "next-i18next";
import Head from "next/head";
import InfoPageLayout from "../src/components/InfoPageLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { Typography, Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { useRouter } from "next/router";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

export default function About() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;
  const [currentSlide, setCurrentSlide] = useState(0);

  const timelineDataEs: TimelineItem[] = [
    {
      year: "Historia",
      title: "Historia",
      description:
        "Transportamos vidas; en dobleVIA tomamos en serio nuestra razón de ser en la industria del transporte nos especializamos en brindar un servicio de transporte confiable adaptado a sus necesidades y como un compromiso inquebrantable hacia la seguridad y comodidad de cada pasajero en cada uno de nuestros viajes.",
      image: "/images/about/historia.jpg",
    },
    {
      year: "1999",
      title: "1999",
      description:
        "Surge la idea de doble vía como servicios de transporte complementario. Nos enfocamos en cubrir el mercado de servicios de transporte para eventos puntuales actividades extracurriculares para centros de educativos, turismo de fin de semana y eventos de hasta una semana de duración.",
      image: "/images/about/1999.jpg",
    },
    {
      year: "2005",
      title: "2005",
      description:
        "Se formaliza la actividad económica de dobleVIA con la creación de movilizaciones dobleVIA. Empresa enfocada en ofrecer logística de transporte para empresas públicas privadas y centros educativos.",
      image: "/images/about/2005.jpg",
    },
    {
      year: "2014",
      title: "2014",
      description:
        "Por cambio en la normativa legal ecuatoriana para la actividad de Transporte; la superintendencia de compañías informa el plazo para el cese de actividades de Movilizaciones dobleVIA. Se procede a cumplir con el trámite legal dispuesto por la superintendencia de compañías.",
      image: "/images/about/2014.jpg",
    },
    {
      year: "2015",
      title: "2015",
      description:
        "Nace la marca dobleVIA con el único propósito de ofrecer normas, procesos y procedimientos para la industria del transporte. De esta forma la marca dobleVIA se convierte en un potencial aliado para cualquier segmento de transporte que existe en el territorio nacional. Sale a la luz nuestro lema transportamos vidas.",
      image: "/images/about/2015.jpg",
    },
    {
      year: "2016",
      title: "2016",
      description:
        "Comienza Doblevia Transportes S. A., Empresa cuya actividad económica del servicio de transporte escolar e institucional. Esta empresa se adhiere a las normas y procesos de la marca dobleVIA para su operación de transporte escolar e institucional.",
      image: "/images/about/2016.jpg",
    },
    {
      year: "2022",
      title: "2022",
      description:
        "En Pifo y a ocho minutos del aeropuerto Mariscal Sucre de Tababela se adquiere una propiedad de 3.350 m2 para construir el centro de negocios dobleVIA.",
      image: "/images/about/2022.jpg",
    },
    {
      year: "2024",
      title: "2024",
      description:
        "La empresa de transporte de turismo BusCharter S. A., Creada en 2009, se asocia a Doblevia para realizar sus operaciones de transporte de turismo bajo la marca dobleVIA. Se crea el servicio 593 Transfer como un segmento especializado de servicio de transporte para turistas que viajan por vía aérea. Nos enfocamos en el turista que requiere transporte terrestre ciudad-aeropuerto y hotel-aeropuerto.",
      image: "/images/about/2024.jpeg",
    },
    {
      year: "Actualidad",
      title: "En la actualidad",
      description:
        "La marca dobleVIA, con el conocimiento acumulado a lo largo de los años y el respaldo operativo de Doblevia Transportes S. A. y BusCharter S. A., está preparada para ofrecer un servicio de transporte que cumple con todas las regulaciones y normativas en los segmentos escolar, institucional y turístico a nivel nacional. Nuestra operación es flexible y personalizada, adaptándose a las necesidades de cada cliente, desde un único vehículo para un solo viaje hasta los requerimientos más amplios que nuestros usuarios pueden imaginar. Trabajamos las 24 horas del día, los 365 días del año, garantizando la continuidad e incluso en fines de semana y días festivos. Con más de 25 años de experiencia, aplicamos normas y procesos validados que nos permiten asegurar un servicio seguro confiable de alta calidad. En dobleVIA transportamos vidas, y nuestra mayor responsabilidad será siempre su satisfacción mientras recorremos juntos cada kilómetro.",
      image: "/images/about/actualidad.jpg",
    },
  ];

  const timelineDataEn: TimelineItem[] = [
    {
      year: "History",
      title: "History",
      description:
        "We transport lives; at dobleVIA we take seriously our reason for being in the transportation industry. We specialize in providing reliable transportation service adapted to your needs and as an unwavering commitment to the safety and comfort of each passenger on each of our trips.",
      image: "/images/about/historia.jpg",
    },
    {
      year: "1999",
      title: "1999",
      description:
        "The idea of doble vía emerges as complementary transportation services. We focus on covering the transportation services market for specific events, extracurricular activities for educational centers, weekend tourism and events lasting up to one week.",
      image: "/images/about/1999.jpg",
    },
    {
      year: "2005",
      title: "2005",
      description:
        "The economic activity of dobleVIA is formalized with the creation of dobleVIA mobilizations. Company focused on offering transportation logistics for public and private companies and educational centers.",
      image: "/images/about/2005.jpg",
    },
    {
      year: "2014",
      title: "2014",
      description:
        "Due to changes in Ecuadorian legal regulations for Transportation activity; the superintendency of companies informs the deadline for the cessation of activities of Movilizaciones dobleVIA. We proceed to comply with the legal procedure established by the superintendency of companies.",
      image: "/images/about/2014.jpg",
    },
    {
      year: "2015",
      title: "2015",
      description:
        "The dobleVIA brand is born with the sole purpose of offering standards, processes and procedures for the transportation industry. In this way, the dobleVIA brand becomes a potential ally for any transportation segment that exists in the national territory. Our motto 'we transport lives' comes to light.",
      image: "/images/about/2015.jpg",
    },
    {
      year: "2016",
      title: "2016",
      description:
        "Doblevia Transportes S. A. begins, a company whose economic activity is school and institutional transportation service. This company adheres to the standards and processes of the dobleVIA brand for its school and institutional transportation operation.",
      image: "/images/about/2016.jpg",
    },
    {
      year: "2022",
      title: "2022",
      description:
        "In Pifo and eight minutes from Mariscal Sucre airport in Tababela, a 3,350 m2 property is acquired to build the dobleVIA business center.",
      image: "/images/about/2022.jpg",
    },
    {
      year: "2024",
      title: "2024",
      description:
        "The tourism transportation company BusCharter S. A., created in 2009, partners with Doblevia to carry out its tourism transportation operations under the dobleVIA brand. The 593 Transfer service is created as a specialized segment of transportation service for tourists traveling by air. We focus on tourists who require ground transportation city-airport and hotel-airport.",
      image: "/images/about/2024.jpeg",
    },
    {
      year: "Present",
      title: "At present",
      description:
        "The dobleVIA brand, with the knowledge accumulated over the years and the operational support of Doblevia Transportes S. A. and BusCharter S. A., is prepared to offer a transportation service that complies with all regulations and standards in the school, institutional and tourism segments at the national level. Our operation is flexible and personalized, adapting to the needs of each client, from a single vehicle for a single trip to the broadest requirements that our users can imagine. We work 24 hours a day, 365 days a year, guaranteeing continuity even on weekends and holidays. With more than 25 years of experience, we apply validated standards and processes that allow us to ensure a safe, reliable, high-quality service. At dobleVIA we transport lives, and our greatest responsibility will always be your satisfaction as we travel together every kilometer.",
      image: "/images/about/actualidad.jpg",
    },
  ];

  const timelineData = locale === "es" ? timelineDataEs : timelineDataEn;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % timelineData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + timelineData.length) % timelineData.length
    );
  };

  return (
    <>
      <Head>
        <title>{t("about")}</title>
      </Head>
      <InfoPageLayout hideFooter={true}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#000",
            color: "white",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            padding: { xs: "1rem", md: "2rem" },
            fontFamily: "'Poppins', sans-serif",
            margin: { xs: "-2rem", md: "-3rem" },
          }}
        >
          {/* Timeline Container */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            {/* Navigation Arrow Left */}
            <IconButton
              onClick={prevSlide}
              sx={{
                color: "#FFD700",
                fontSize: "2rem",
                position: "absolute",
                left: { xs: "10px", md: "20px" },
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                "&:hover": {
                  backgroundColor: "rgba(255, 215, 0, 0.1)",
                  transform: "translateY(-50%) scale(1.1)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <ArrowBackIosIcon sx={{ fontSize: "inherit" }} />
            </IconButton>

            {/* Timeline Items */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                gap: { xs: 2, md: 4 },
                px: { xs: 6, md: 8 },
              }}
            >
              {/* Current Item (Focused) */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  maxWidth: { xs: "280px", md: "400px" },
                  width: "100%",
                  opacity: 1,
                  transform: "scale(1)",
                  transition: "all 0.5s ease-in-out",
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    width: { xs: "250px", md: "350px" },
                    height: { xs: "180px", md: "250px" },
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.6)",
                    marginBottom: "1.5rem",
                  }}
                >
                  <img
                    src={timelineData[currentSlide].image}
                    alt={timelineData[currentSlide].title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                {/* Date */}
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    fontWeight: 700,
                    color: "#FFD700",
                    textAlign: "center",
                    marginBottom: "1rem",
                    fontFamily: "'Poppins', sans-serif",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  {timelineData[currentSlide].title}
                </Typography>

                {/* Text */}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.95rem", md: "1.1rem" },
                    lineHeight: 1.6,
                    color: "white",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 300,
                    textAlign: "justify",
                    maxHeight: { xs: "150px", md: "200px" },
                    overflow: "auto",
                    "&::-webkit-scrollbar": {
                      width: "4px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "2px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "#FFD700",
                      borderRadius: "2px",
                    },
                  }}
                >
                  {timelineData[currentSlide].description}
                </Typography>
              </Box>

              {/* Timeline Line */}
              <Box
                sx={{
                  width: "4px",
                  height: { xs: "300px", md: "400px" },
                  background:
                    "linear-gradient(to bottom, #FFD700 0%, rgba(255, 215, 0, 0.3) 50%, rgba(255, 255, 255, 0.1) 100%)",
                  borderRadius: "2px",
                  position: "relative",
                  mx: { xs: 1, md: 2 },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: `${
                      (currentSlide / (timelineData.length - 1)) * 80 + 10
                    }%`,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "12px",
                    height: "12px",
                    backgroundColor: "#FFD700",
                    borderRadius: "50%",
                    boxShadow: "0 0 10px rgba(255, 215, 0, 0.6)",
                    transition: "top 0.5s ease-in-out",
                  },
                }}
              />

              {/* Next Items (Preview) */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  alignItems: "flex-start",
                }}
              >
                {[1, 2].map((offset) => {
                  const nextIndex =
                    (currentSlide + offset) % timelineData.length;
                  const item = timelineData[nextIndex];
                  const scale = offset === 1 ? 0.7 : 0.5;
                  const opacity = offset === 1 ? 0.6 : 0.3;

                  return (
                    <Box
                      key={nextIndex}
                      onClick={() => setCurrentSlide(nextIndex)}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        cursor: "pointer",
                        transform: `scale(${scale})`,
                        opacity: opacity,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          opacity: opacity + 0.2,
                          transform: `scale(${scale + 0.05})`,
                        },
                      }}
                    >
                      {/* Mini Image */}
                      <Box
                        sx={{
                          width: "120px",
                          height: "80px",
                          borderRadius: "8px",
                          overflow: "hidden",
                          marginBottom: "0.5rem",
                          filter: "grayscale(50%)",
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Box>

                      {/* Mini Date */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight: 600,
                          color: "rgba(255, 215, 0, 0.8)",
                          textAlign: "center",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>

            {/* Navigation Arrow Right */}
            <IconButton
              onClick={nextSlide}
              sx={{
                color: "#FFD700",
                fontSize: "2rem",
                position: "absolute",
                right: { xs: "10px", md: "20px" },
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                "&:hover": {
                  backgroundColor: "rgba(255, 215, 0, 0.1)",
                  transform: "translateY(-50%) scale(1.1)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: "inherit" }} />
            </IconButton>
          </Box>

          {/* Slide Indicators */}
          <Box
            sx={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 1,
            }}
          >
            {timelineData.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentSlide(index)}
                sx={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor:
                    index === currentSlide
                      ? "#FFD700"
                      : "rgba(255, 255, 255, 0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor:
                      index === currentSlide
                        ? "#FFD700"
                        : "rgba(255, 255, 255, 0.6)",
                    transform: "scale(1.2)",
                  },
                }}
              />
            ))}
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
