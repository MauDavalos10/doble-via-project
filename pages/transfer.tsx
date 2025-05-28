import { useTranslation } from "next-i18next";
import Head from "next/head";

export default function Transfer() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("transfer")}</title>
      </Head>
      <h1>{t("transfer")}</h1>
    </>
  );
}
