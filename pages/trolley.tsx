import { useTranslation } from "next-i18next";
import Head from "next/head";
import InfoPageLayout from "../src/components/InfoPageLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";

export default function Trolley() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("trolleyTitle")}</title>
      </Head>
      <InfoPageLayout>
        <h1 style={{ marginBottom: "2rem", color: "#222" }}>
          {t("trolleyTitle")}
        </h1>
        <div style={{ color: "#444", lineHeight: 1.6 }}>
          <p style={{ marginBottom: "1.5rem" }}>{t("trolleyDescription")}</p>
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
              <b>{t("trolleyFeature1").split(":")[0]}:</b>{" "}
              {t("trolleyFeature1").split(":")[1]}
            </li>
            <li style={{ marginBottom: 12 }}>
              <b>{t("trolleyFeature2").split(":")[0]}:</b>{" "}
              {t("trolleyFeature2").split(":")[1]}
            </li>
            <li>
              <b>{t("trolleyFeature3").split(":")[0]}:</b>{" "}
              {t("trolleyFeature3").split(":")[1]}
            </li>
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
