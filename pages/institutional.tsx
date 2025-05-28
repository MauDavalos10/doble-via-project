import { useTranslation } from "next-i18next";
import Head from "next/head";
import InfoPageLayout from "../src/components/InfoPageLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";

export default function Institutional() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("institutionalTitle")}</title>
      </Head>
      <InfoPageLayout>
        <h1 style={{ marginBottom: "2rem", color: "#222" }}>
          {t("institutionalTitle")}
        </h1>
        <div style={{ color: "#444", lineHeight: 1.6 }}>
          <p style={{ marginBottom: "1.5rem" }}>
            {t("institutionalDescription")}
          </p>
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
            <li style={{ marginBottom: 12 }}>{t("institutionalFeature1")}</li>
            <li style={{ marginBottom: 12 }}>{t("institutionalFeature2")}</li>
            <li>{t("institutionalFeature3")}</li>
          </ul>
        </div>
      </InfoPageLayout>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "es", ["common"])),
    },
  };
}
