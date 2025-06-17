import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import InfoPageLayout from "../src/components/InfoPageLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
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
  Paper,
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
            alignItems: "center",
            justifyContent: "center",
            minHeight: "calc(100vh - 200px)",
            padding: { xs: "1rem", md: "2rem" },
          }}
        >
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              maxWidth: "600px",
              padding: { xs: "2rem", md: "3rem" },
              borderRadius: "8px",
              backgroundColor: "#fafafa",
              border: "1px solid #e0e0e0",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                marginBottom: "2rem",
                fontFamily: "'Poppins', Arial, sans-serif",
                fontWeight: 400,
                color: "#4D4D4D",
                textAlign: "justify",
                lineHeight: 1.6,
              }}
            >
              {t("salesForm.title")}
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontSize: "1.2rem",
                marginBottom: "1.5rem",
                fontFamily: "'Poppins', Arial, sans-serif",
                fontWeight: 600,
                color: "#1a1a1a",
              }}
            >
              {t("salesForm.yourData")}
            </Typography>

            <form onSubmit={handleSubmit}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                <TextField
                  fullWidth
                  label={`${t("salesForm.fullName")} *`}
                  value={formData.fullName}
                  onChange={handleChange("fullName")}
                  required
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "0px",
                      backgroundColor: "white",
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label={`${t("salesForm.phone")} *`}
                  value={formData.phone}
                  onChange={handleChange("phone")}
                  required
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "0px",
                      backgroundColor: "white",
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
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "0px",
                      backgroundColor: "white",
                    },
                  }}
                />

                <FormControl
                  fullWidth
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "0px",
                      backgroundColor: "white",
                    },
                  }}
                >
                  <InputLabel>{t("salesForm.serviceType")} *</InputLabel>
                  <Select
                    value={formData.serviceType}
                    onChange={handleChange("serviceType")}
                    label={`${t("salesForm.serviceType")} *`}
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      {t("salesForm.selectService")}
                    </MenuItem>
                    <MenuItem value={t("salesForm.serviceOptions.school")}>
                      {t("salesForm.serviceOptions.school")}
                    </MenuItem>
                    <MenuItem
                      value={t("salesForm.serviceOptions.institutional")}
                    >
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
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "0px",
                      backgroundColor: "white",
                    },
                  }}
                >
                  <InputLabel>{t("salesForm.contactPreference")} *</InputLabel>
                  <Select
                    value={formData.contactPreference}
                    onChange={handleChange("contactPreference")}
                    label={`${t("salesForm.contactPreference")} *`}
                    displayEmpty
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
                      background:
                        "linear-gradient(135deg, #c00b19 0%, #a00915 100%)",
                      padding: "1rem 3rem",
                      fontSize: "1rem",
                      fontWeight: 600,
                      fontFamily: "'Poppins', sans-serif",
                      borderRadius: "0px",
                      textTransform: "none",
                      letterSpacing: "0.5px",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      border: "none",
                      minWidth: "150px",
                      cursor: "pointer",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #a00915 0%, #800712 100%)",
                        transform: "translateY(-2px)",
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
                    fontSize: "14px",
                    marginTop: "1.5rem",
                    fontFamily: "'Poppins', Arial, sans-serif",
                    fontWeight: 300,
                    color: "#666",
                    textAlign: "center",
                    lineHeight: 1.5,
                  }}
                >
                  {t("salesForm.disclaimer")}
                </Typography>
              </Box>
            </form>
          </Paper>
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
