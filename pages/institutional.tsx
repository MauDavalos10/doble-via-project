import { useTranslation } from "next-i18next";
import Head from "next/head";

export default function Institutional() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("institutional")}</title>
      </Head>
      <h1>{t("institutional")}</h1>
    </>
  );
}
