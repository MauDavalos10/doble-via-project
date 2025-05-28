import { useTranslation } from "next-i18next";
import Head from "next/head";

export default function Tourism() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("tourism")}</title>
      </Head>
      <h1>{t("tourism")}</h1>
    </>
  );
}
