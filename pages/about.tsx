import { useTranslation } from "next-i18next";
import Head from "next/head";
import InfoPageLayout from "../src/components/InfoPageLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

export default function About() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("about")}</title>
      </Head>
      <InfoPageLayout>
        <h1 style={{ marginBottom: "2rem", color: "#222" }}>{t("about")}</h1>
        <div style={{ color: "#444", lineHeight: 1.6 }}>
          <p style={{ marginBottom: "1.5rem" }}>
            Somos una empresa líder en servicios de transporte, comprometida con
            la excelencia y la satisfacción de nuestros clientes.
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
              <b>Misión:</b> Proporcionar servicios de transporte seguros,
              confiables y de alta calidad que superen las expectativas de
              nuestros clientes.
            </li>
            <li style={{ marginBottom: 12 }}>
              <b>Visión:</b> Ser reconocidos como la empresa líder en servicios
              de transporte en Ecuador, innovando y creciendo continuamente.
            </li>
            <li>
              <b>Valores:</b> Seguridad, puntualidad, profesionalismo y
              compromiso con la excelencia en el servicio.
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
