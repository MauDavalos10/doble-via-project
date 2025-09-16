import type React from "react";
import { useState } from "react";
import Head from "next/head";
import InfoPageLayout from "../src/components/InfoPageLayout";
import LoadingOverlay from "../src/components/LoadingOverlay";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { Typography, TextField, Button, Box, Alert } from "@mui/material";

const EmailTest = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-email-test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: `Email de prueba enviado exitosamente a ${email}. Revisa tu bandeja de entrada.`,
        });
        setEmail("");
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Error al enviar el email de prueba.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Error de conexión. Por favor intente nuevamente.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <LoadingOverlay isVisible={isLoading} />
      <NextSeo
        title="Prueba de Email - DobleVia"
        description="Página de prueba para diagnosticar problemas de envío de emails."
      />
      <Head>
        <title>Prueba de Email</title>
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
          {submitStatus.type && (
            <Alert
              severity={submitStatus.type}
              sx={{
                width: "100%",
                marginBottom: "20px",
              }}
              onClose={() => setSubmitStatus({ type: null, message: "" })}
            >
              {submitStatus.message}
            </Alert>
          )}

          <Typography
            variant="h4"
            sx={{
              fontSize: "24px",
              marginBottom: "1.5rem",
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              fontWeight: 600,
              color: "#2d3748",
              textAlign: "center",
            }}
          >
            Prueba de Email
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              marginBottom: "2rem",
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              fontWeight: 400,
              color: "#4a5568",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            Esta página te permite probar el envío de emails para diagnosticar
            problemas. Ingresa tu email y presiona &quot;Enviar Prueba&quot;.
          </Typography>

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                fullWidth
                label="Email para prueba"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    background: "#c00b19",
                    padding: "10px 28px",
                    fontSize: "14px",
                    fontWeight: 500,
                    fontFamily: "'Inter', sans-serif",
                    borderRadius: "6px",
                    textTransform: "none",
                    letterSpacing: "0.3px",
                    transition: "all 0.2s ease-in-out",
                    border: "1px solid #c00b19",
                    minWidth: "120px",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(192, 11, 25, 0.15)",
                    "&:hover": {
                      background: "#a00915",
                      borderColor: "#a00915",
                      transform: "translateY(-1px)",
                      boxShadow: "0 4px 12px rgba(192, 11, 25, 0.2)",
                    },
                    "&:active": {
                      transform: "translateY(0px)",
                    },
                  }}
                >
                  Enviar Prueba
                </Button>
              </Box>
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

export default EmailTest;
