import { useTranslation } from "next-i18next";
import Head from "next/head";

export default function Reviews() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("reviews")}</title>
      </Head>
      <h1>{t("reviews")}</h1>
    </>
  );
}
