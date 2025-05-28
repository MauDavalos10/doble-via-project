import { useTranslation } from "next-i18next";
import Head from "next/head";

export default function About() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("about")}</title>
      </Head>
      <h1>{t("about")}</h1>
    </>
  );
}
