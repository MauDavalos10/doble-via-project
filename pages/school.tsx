import React from "react";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import InfoPageLayout from "../src/components/InfoPageLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

const School = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo
        title="Transporte Escolar"
        description="Servicio de transporte escolar seguro y confiable. Garantizamos la seguridad de tus hijos con conductores certificados y vehículos modernos."
        canonical="https://doblevia.org/school"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "transporte escolar, transporte de estudiantes, ruta escolar, servicio escolar, transporte seguro para niños",
          },
        ]}
      />
      <Head>
        <title>{t("schoolTitle")}</title>
      </Head>
      <InfoPageLayout>
        <h1 style={{ marginBottom: "2rem", color: "#222" }}>
          {t("schoolTitle")}
        </h1>
        <div style={{ color: "#444", lineHeight: 1.6 }}>
          <p style={{ marginBottom: "1.5rem" }}>{t("schoolDescription")}</p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              color: "#222",
              marginBottom: 24,
              paddingLeft: 24,
            }}
          >
            <li style={{ marginBottom: 12 }}>{t("schoolFeature1")}</li>
            <li style={{ marginBottom: 12 }}>{t("schoolFeature2")}</li>
            <li>{t("schoolFeature3")}</li>
          </ul>
        </div>
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

export default School;
