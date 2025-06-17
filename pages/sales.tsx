import type React from "react";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import InfoPageLayout from "../src/components/InfoPageLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import {
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";

const Sales = () => {
  const { t } = useTranslation("common");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceType: "",
    contactPreference: "",
  });

  const handleChange =
    (field: string) =>
    (
      event:
        | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        | { target: { value: string } }
    ) => {
      setFormData({
        ...formData,
        [field]: event.target.value,
      });
    };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Create WhatsApp message
    const message = `Hola, solicito información sobre sus servicios.

Mis datos:
• Nombre: ${formData.fullName}
• Teléfono: ${formData.phone}
• Email: ${formData.email}
• Servicio de interés: ${formData.serviceType}
• Preferencia de contacto: ${formData.contactPreference}

Gracias.`;

    const whatsappNumber = "593987063904";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <NextSeo
        title="Ventas - Contactar con Ventas"
        description="Contáctanos para solicitar información personalizada sobre nuestros servicios de transporte. Formulario de contacto directo con nuestro equipo de ventas."
        canonical="https://doblevia.org/sales"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "contacto ventas, cotización transporte, servicios transporte, información ventas",
          },
        ]}
      />
      <Head>
        <title>{t("sales")}</title>
      </Head>
      <InfoPageLayout>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              marginBottom: "1.5rem",
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              fontWeight: 400,
              color: "#4a5568",
              textAlign: "justify",
              lineHeight: 1.5,
              letterSpacing: "0.2px",
            }}
          >
            {t("salesForm.title")}
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontSize: "16px",
              marginBottom: "1.5rem",
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              fontWeight: 600,
              color: "#2d3748",
              letterSpacing: "0.3px",
            }}
          >
            {t("salesForm.yourData")}
          </Typography>

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                fullWidth
                label={`${t("salesForm.fullName")} *`}
                value={formData.fullName}
                onChange={handleChange("fullName")}
                required
                variant="standard"
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#718096",
                    fontSize: "14px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                  },
                  "& .MuiInput-root": {
                    fontSize: "15px",
                    fontFamily: "'Inter', sans-serif",
                    color: "#2d3748",
                    "&:before": {
                      borderBottomColor: "#e2e8f0",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottomColor: "#cbd5e0",
                    },
                    "&:after": {
                      borderBottomColor: "#c00b19",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#c00b19",
                  },
                }}
              />

              <TextField
                fullWidth
                label={`${t("salesForm.phone")} *`}
                value={formData.phone}
                onChange={handleChange("phone")}
                required
                variant="standard"
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#718096",
                    fontSize: "14px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                  },
                  "& .MuiInput-root": {
                    fontSize: "15px",
                    fontFamily: "'Inter', sans-serif",
                    color: "#2d3748",
                    "&:before": {
                      borderBottomColor: "#e2e8f0",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottomColor: "#cbd5e0",
                    },
                    "&:after": {
                      borderBottomColor: "#c00b19",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#c00b19",
                  },
                }}
              />

              <TextField
                fullWidth
                label={`${t("salesForm.email")} *`}
                type="email"
                value={formData.email}
                onChange={handleChange("email")}
                required
                variant="standard"
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#718096",
                    fontSize: "14px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                  },
                  "& .MuiInput-root": {
                    fontSize: "15px",
                    fontFamily: "'Inter', sans-serif",
                    color: "#2d3748",
                    "&:before": {
                      borderBottomColor: "#e2e8f0",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottomColor: "#cbd5e0",
                    },
                    "&:after": {
                      borderBottomColor: "#c00b19",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#c00b19",
                  },
                }}
              />

              <FormControl
                fullWidth
                required
                variant="standard"
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#718096",
                    fontSize: "14px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                  },
                  "& .MuiSelect-root": {
                    fontSize: "15px",
                    fontFamily: "'Inter', sans-serif",
                    color: "#2d3748",
                    "&:before": {
                      borderBottomColor: "#e2e8f0",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottomColor: "#cbd5e0",
                    },
                    "&:after": {
                      borderBottomColor: "#c00b19",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#c00b19",
                  },
                }}
              >
                <InputLabel>{t("salesForm.serviceType")} *</InputLabel>
                <Select
                  value={formData.serviceType}
                  onChange={handleChange("serviceType")}
                  label={`${t("salesForm.serviceType")} *`}
                >
                  <MenuItem value="" disabled>
                    {t("salesForm.selectService")}
                  </MenuItem>
                  <MenuItem value={t("salesForm.serviceOptions.school")}>
                    {t("salesForm.serviceOptions.school")}
                  </MenuItem>
                  <MenuItem value={t("salesForm.serviceOptions.institutional")}>
                    {t("salesForm.serviceOptions.institutional")}
                  </MenuItem>
                  <MenuItem value={t("salesForm.serviceOptions.tourism")}>
                    {t("salesForm.serviceOptions.tourism")}
                  </MenuItem>
                  <MenuItem value={t("salesForm.serviceOptions.trolley")}>
                    {t("salesForm.serviceOptions.trolley")}
                  </MenuItem>
                  <MenuItem value={t("salesForm.serviceOptions.transfer")}>
                    {t("salesForm.serviceOptions.transfer")}
                  </MenuItem>
                </Select>
              </FormControl>

              <FormControl
                fullWidth
                required
                variant="standard"
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#718096",
                    fontSize: "14px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                  },
                  "& .MuiSelect-root": {
                    fontSize: "15px",
                    fontFamily: "'Inter', sans-serif",
                    color: "#2d3748",
                    "&:before": {
                      borderBottomColor: "#e2e8f0",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottomColor: "#cbd5e0",
                    },
                    "&:after": {
                      borderBottomColor: "#c00b19",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#c00b19",
                  },
                }}
              >
                <InputLabel>{t("salesForm.contactPreference")} *</InputLabel>
                <Select
                  value={formData.contactPreference}
                  onChange={handleChange("contactPreference")}
                  label={`${t("salesForm.contactPreference")} *`}
                >
                  <MenuItem value="" disabled>
                    {t("salesForm.selectContact")}
                  </MenuItem>
                  <MenuItem value={t("salesForm.contactOptions.whatsapp")}>
                    {t("salesForm.contactOptions.whatsapp")}
                  </MenuItem>
                  <MenuItem value={t("salesForm.contactOptions.phone")}>
                    {t("salesForm.contactOptions.phone")}
                  </MenuItem>
                  <MenuItem value={t("salesForm.contactOptions.email")}>
                    {t("salesForm.contactOptions.email")}
                  </MenuItem>
                </Select>
              </FormControl>

              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    background: "#2d3748",
                    padding: "10px 28px",
                    fontSize: "14px",
                    fontWeight: 500,
                    fontFamily: "'Inter', sans-serif",
                    borderRadius: "6px",
                    textTransform: "none",
                    letterSpacing: "0.3px",
                    transition: "all 0.2s ease-in-out",
                    border: "1px solid #2d3748",
                    minWidth: "120px",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(45, 55, 72, 0.15)",
                    "&:hover": {
                      background: "#1a202c",
                      borderColor: "#1a202c",
                      transform: "translateY(-1px)",
                      boxShadow: "0 4px 12px rgba(45, 55, 72, 0.2)",
                    },
                    "&:active": {
                      transform: "translateY(0px)",
                    },
                  }}
                >
                  {t("salesForm.submit")}
                </Button>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  fontSize: "11px",
                  marginTop: "1rem",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  color: "#a0aec0",
                  textAlign: "center",
                  lineHeight: 1.4,
                  letterSpacing: "0.1px",
                }}
              >
                {t("salesForm.disclaimer")}
              </Typography>
            </Box>
          </form>
        </Box>
      </InfoPageLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "es", ["common"])),
    },
  };
};

export default Sales;
