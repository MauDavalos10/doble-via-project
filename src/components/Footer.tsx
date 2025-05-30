import React from "react";
import { Box, Typography, Divider, Link as MuiLink } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TikTokIcon from "@mui/icons-material/MusicNote"; // TikTok no está en MUI, usamos MusicNote como placeholder
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
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
    url: "https://www.linkedin.com/company/doblevia-transportes-s-a/",
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
    icon: <XIcon fontSize="large" />,
    label: "X",
    url: "https://x.com/dobleVIA_TRANSP",
  },
  {
    icon: <YouTubeIcon fontSize="large" />,
    label: "YouTube",
    url: "https://www.youtube.com/",
  },
];

export default function Footer() {
  const { t } = useTranslation("common");
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#181818", color: "#aaa", pt: 8, pb: 2, mt: 8 }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
          gap: 6,
          justifyItems: "center",
          alignItems: "center",
          mb: 8,
        }}
      >
        {socialLinks.slice(0, 4).map((item) => (
          <MuiLink
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{
              color: "#aaa",
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: 20,
              fontWeight: 400,
              "&:hover": { color: "#fff" },
            }}
          >
            {item.icon}
            {item.label}
          </MuiLink>
        ))}
        {socialLinks.slice(4).map((item) => (
          <MuiLink
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{
              color: "#aaa",
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: 20,
              fontWeight: 400,
              "&:hover": { color: "#fff" },
            }}
          >
            {item.icon}
            {item.label}
          </MuiLink>
        ))}
      </Box>
      <Divider sx={{ bgcolor: "#333", mb: 4 }} />
      <Box sx={{ textAlign: "center", px: 2 }}>
        <Typography variant="body1" sx={{ mb: 2, fontSize: 20, color: "#aaa" }}>
          {t("footerDescription", {
            defaultValue:
              "Transportamos vidas. En dobleVIA, nos especializamos en brindar un servicio de transporte confiable, adaptado a tus necesidades y con un compromiso inquebrantable hacia la seguridad y comodidad de cada pasajero.",
          })}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1, color: "#aaa" }}>
          WhatsApp: +593 98 706 3904 | Teléfono celular: +593 98 706 3904 |
          Teléfono convencional: +593 2 238 0008
        </Typography>
        <Typography variant="body2" sx={{ mb: 1, color: "#aaa" }}>
          Correo: ventas@doblevia.org
        </Typography>
        <Typography variant="body2" sx={{ mb: 1, color: "#aaa" }}>
          Dirección: Av. María Teresa Velásquez y E35. Sector Pifo
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: "#aaa" }}>
          Quito - Ecuador - Suramérica
        </Typography>
        <Typography variant="caption" sx={{ color: "#666" }}>
          © 2025 dobleVIA.{" "}
          {t("footerRights", {
            defaultValue: "Todos los derechos reservados.",
          })}
        </Typography>
      </Box>
    </Box>
  );
}
