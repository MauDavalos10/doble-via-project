import { useTranslation } from "next-i18next";
import Head from "next/head";
import InfoPageLayout from "../src/components/InfoPageLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

export default function Tourism() {
  const { t } = useTranslation("common");
  return (
    <>
      <NextSeo
        title="Transporte Turístico"
        description="Servicio de transporte turístico de alta calidad. Viajes cómodos y seguros para grupos y turistas individuales."
        canonical="https://doblevia.org/tourism"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "transporte turístico, servicio de turismo, transporte para turistas, viajes turísticos, transporte de grupos",
          },
        ]}
      />
      <Head>
        <title>{t("tourismTitle")}</title>
      </Head>
      <InfoPageLayout>
        <h1 style={{ marginBottom: "2rem", color: "#222" }}>
          {t("tourismTitle")}
        </h1>
        <div style={{ color: "#444", lineHeight: 1.6 }}>
          <p style={{ marginBottom: "1.5rem" }}>{t("tourismDescription")}</p>
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
            <li style={{ marginBottom: 12 }}>{t("tourismFeature1")}</li>
            <li style={{ marginBottom: 12 }}>{t("tourismFeature2")}</li>
            <li style={{ marginBottom: 12 }}>
              <b>{t("tourismFeature1").split(":")[0]}:</b>{" "}
              {t("tourismFeature1").split(":")[1]}
            </li>
            <li style={{ marginBottom: 12 }}>
              <b>{t("tourismFeature2").split(":")[0]}:</b>{" "}
              {t("tourismFeature2").split(":")[1]}
            </li>
            <li>
              <b>{t("tourismFeature3").split(":")[0]}:</b>{" "}
              {t("tourismFeature3").split(":")[1]}
            </li>
          </ul>
        </div>
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
