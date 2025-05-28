import { useTranslation } from "next-i18next";
import Head from "next/head";

export default function Clients() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("clients")}</title>
      </Head>
      <h1>{t("clients")}</h1>
    </>
  );
}
