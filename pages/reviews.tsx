import { useTranslation } from "next-i18next";
import Head from "next/head";
import InfoPageLayout from "../src/components/InfoPageLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

export default function Reviews() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("reviews")}</title>
      </Head>
      <InfoPageLayout>
        <h1 style={{ marginBottom: "2rem", color: "#222" }}>{t("reviews")}</h1>
        <div style={{ color: "#444", lineHeight: 1.6 }}>
          <p style={{ marginBottom: "1.5rem" }}>
            La satisfacción de nuestros clientes es nuestra mejor carta de
            presentación. Aquí algunas de sus experiencias.
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
            <li style={{ marginBottom: 12 }}>
              <b>Colegio San José:</b> &ldquo;Excelente servicio de transporte
              escolar. Puntualidad y seguridad garantizadas.&rdquo;
            </li>
            <li style={{ marginBottom: 12 }}>
              <b>Empresa XYZ:</b> &ldquo;El mejor servicio corporativo que hemos
              tenido. Profesionalismo y eficiencia.&rdquo;
            </li>
            <li>
              <b>Hotel Grand:</b> &ldquo;Transporte confiable para nuestros
              huéspedes. Siempre a tiempo y con excelente atención.&rdquo;
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
