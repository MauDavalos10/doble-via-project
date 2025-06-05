import { useTranslation } from "next-i18next";
import Head from "next/head";
import InfoPageLayout from "../src/components/InfoPageLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

export default function About() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("about")}</title>
      </Head>
      <InfoPageLayout>
        <h1 style={{ marginBottom: "2rem", color: "#222" }}>{t("about")}</h1>
        <div style={{ color: "#444", lineHeight: 1.6 }}>
          <p style={{ marginBottom: "1.5rem" }}>{t("aboutDescription")}</p>
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
            <li style={{ marginBottom: 12 }}>
              <b>{t("mission")}:</b> {t("missionDescription")}
            </li>
            <li style={{ marginBottom: 12 }}>
              <b>{t("vision")}:</b> {t("visionDescription")}
            </li>
            <li>
              <b>{t("values")}:</b> {t("valuesDescription")}
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
