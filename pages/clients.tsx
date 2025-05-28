import { useTranslation } from "next-i18next";
import Head from "next/head";
import InfoPageLayout from "../src/components/InfoPageLayout";

export default function Clients() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("clients")}</title>
      </Head>
      <InfoPageLayout>
        <h1 style={{ marginBottom: "2rem", color: "#222" }}>{t("clients")}</h1>
        <div style={{ color: "#444", lineHeight: 1.6 }}>
          <p style={{ marginBottom: "1.5rem" }}>
            Nos enorgullece servir a una amplia gama de clientes, desde
            instituciones educativas hasta empresas líderes.
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
              <b>Instituciones Educativas:</b> Colegios, universidades y centros
              de formación profesional.
            </li>
            <li style={{ marginBottom: 12 }}>
              <b>Empresas Corporativas:</b> Compañías nacionales e
              internacionales para el transporte de su personal.
            </li>
            <li>
              <b>Organizaciones de Eventos:</b> Empresas de eventos, hoteles y
              centros de convenciones.
            </li>
          </ul>
        </div>
      </InfoPageLayout>
    </>
  );
}
