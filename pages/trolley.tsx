import { useTranslation } from "next-i18next";
import Head from "next/head";

export default function Trolley() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("trolley")}</title>
      </Head>
      <h1>{t("trolley")}</h1>
    </>
  );
}
