import { Box, Typography, Link as MuiLink } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TikTokIcon from "@mui/icons-material/MusicNote";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useTranslation } from "next-i18next";

const socialLinks = [
  {
    icon: <FacebookIcon fontSize="large" />,
    label: "Facebook",
    url: "https://www.facebook.com/dobleVIA.Transporte",
  },
  {
    icon: <InstagramIcon fontSize="large" />,
    label: "Instagram",
    url: "http://instagram.com/doblevia_transporte",
  },
  {
    icon: <LinkedInIcon fontSize="large" />,
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/dobleviatransporte/posts/?feedView=all",
  },
  {
    icon: <TikTokIcon fontSize="large" />,
    label: "TikTok",
    url: "http://tiktok.com/@dobleviatransporte",
  },
  {
    icon: <GoogleIcon fontSize="large" />,
    label: "Google",
    url: "https://www.google.com/maps/place/dobleVIA+Transporte/@-0.2197236,-78.3359575,19z/data=!3m1!4b1!4m6!3m5!1s0x91d5950a0af14dfb:0xcc8f9c35fa3b3fdb!8m2!3d-0.2197236!4d-78.3353124!16s%2Fg%2F11sf9yv7rz?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: <YouTubeIcon fontSize="large" />,
    label: "YouTube",
    url: "https://www.youtube.com/@dobleviatransporte",
  },
];

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #000000 100%)",
        color: "#a0a0a0",
        pt: { xs: 6, md: 8 },
        pb: 3,
        mt: { xs: 6, md: 8 },
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, var(--primary-red) 50%, transparent 100%)",
          opacity: 0.4,
        },
      }}
    >
      {/* Social Links Grid */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          px: { xs: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(6, 1fr)",
            },
            gap: { xs: 3, md: 4 },
            justifyItems: "center",
            alignItems: "center",
            mb: { xs: 6, md: 8 },
          }}
        >
          {socialLinks.map((item) => (
            <MuiLink
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                color: "#a0a0a0",
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: "center",
                gap: { xs: 0.5, lg: 1 },
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: 500,
                fontFamily: "'Poppins', sans-serif",
                padding: { xs: "0.75rem", md: "1rem" },
                borderRadius: "3px",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                "&:hover": {
                  color: "#ffffff",
                  transform: "translateY(-2px)",
                  "& .MuiSvgIcon-root": {
                    color: "var(--primary-red)",
                    transform: "scale(1.1)",
                  },
                },
                "& .MuiSvgIcon-root": {
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                },
              }}
            >
              {item.icon}
              <Typography
                variant="caption"
                sx={{
                  fontSize: { xs: "0.75rem", lg: "0.9rem" },
                  fontWeight: 500,
                  fontFamily: "'Poppins', sans-serif",
                  textAlign: "center",
                }}
              >
                {item.label}
              </Typography>
            </MuiLink>
          ))}
        </Box>

        {/* Elegant Divider */}
        <Box
          sx={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, #404040 20%, #404040 80%, transparent 100%)",
            opacity: 0.2,
            mb: { xs: 4, md: 6 },
          }}
        />

        {/* Content Section */}
        <Box sx={{ textAlign: "center", px: { xs: 1, md: 2 } }}>
          <Typography
            variant="body1"
            sx={{
              mb: { xs: 3, md: 4 },
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.7,
              color: "#a0a0a0",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              maxWidth: "800px",
              margin: "0 auto",
              opacity: 0.8,
            }}
          >
            {t("footerDescription", {
              defaultValue:
                "Transportamos vidas. En dobleVIA, nos especializamos en brindar un servicio de transporte confiable, adaptado a tus necesidades y con un compromiso inquebrantable hacia la seguridad y comodidad de cada pasajero.",
            })}
          </Typography>

          {/* Contact Information */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              mb: 3,
              "& > *": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                color: "#a0a0a0",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                opacity: 0.7,
              },
            }}
          >
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: 600, color: "#ffffff" }}>
                WhatsApp:
              </Box>{" "}
              <MuiLink
                href="https://wa.me/593987063904"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: 500,
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#a0a0a0",
                  },
                }}
              >
                +593 98 706 3904
              </MuiLink>{" "}
              |{" "}
              <Box component="span" sx={{ fontWeight: 600, color: "#ffffff" }}>
                Teléfono celular:
              </Box>{" "}
              <MuiLink
                href="https://wa.me/593987063904"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: 500,
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#a0a0a0",
                  },
                }}
              >
                +593 98 706 3904
              </MuiLink>{" "}
              |{" "}
              <Box component="span" sx={{ fontWeight: 600, color: "#ffffff" }}>
                Teléfono convencional:
              </Box>{" "}
              <MuiLink
                href="tel:+59322380008"
                sx={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: 500,
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#a0a0a0",
                  },
                }}
              >
                +593 2 238 0008
              </MuiLink>
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: 600, color: "#ffffff" }}>
                Correo:
              </Box>{" "}
              <MuiLink
                href="mailto:ventas@doblevia.org?subject=Consulta sobre servicios de transporte&body=Hola, me gustaría obtener más información sobre sus servicios de transporte."
                sx={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: 500,
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#a0a0a0",
                  },
                }}
              >
                ventas@doblevia.org
              </MuiLink>
            </Typography>
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: 600, color: "#ffffff" }}>
                Dirección:
              </Box>{" "}
              <MuiLink
                href="https://maps.app.goo.gl/xoEY8hnsEsLcfkrQA"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: 500,
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#a0a0a0",
                  },
                }}
              >
                Av. María Teresa Velásquez y E35. Sector Pifo
              </MuiLink>
            </Typography>
            <Typography variant="body2">
              Quito - Ecuador - Suramérica
            </Typography>
          </Box>

          {/* Copyright */}
          <Box
            sx={{
              pt: 3,
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#a0a0a0",
                fontSize: "0.9rem",
                fontFamily: "'Poppins', sans-serif",
                opacity: 0.6,
              }}
            >
              © 2025{" "}
              <Box
                component="span"
                sx={{
                  fontWeight: 600,
                  color: "var(--primary-red)",
                }}
              >
                dobleVIA
              </Box>
              .{" "}
              {t("footerRights", {
                defaultValue: "Todos los derechos reservados.",
              })}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
