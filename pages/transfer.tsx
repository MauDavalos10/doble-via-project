import { useTranslation } from "next-i18next";
import Head from "next/head";
import InfoPageLayout from "../src/components/InfoPageLayout";

export default function Transfer() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("transfer")}</title>
      </Head>
      <InfoPageLayout>
        <h1 style={{ marginBottom: "2rem", color: "#222" }}>{t("transfer")}</h1>
        <div style={{ color: "#444", lineHeight: 1.6 }}>
          <p style={{ marginBottom: "1.5rem" }}>
            Servicio de traslado personalizado para cualquier destino, con la
            máxima comodidad y seguridad.
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
              <b>Traslados Aeropuerto:</b> Servicio puerta a puerta desde y
              hacia el aeropuerto, con seguimiento de vuelos.
            </li>
            <li style={{ marginBottom: 12 }}>
              <b>Eventos Especiales:</b> Transporte para bodas, fiestas y
              eventos corporativos.
            </li>
            <li>
              <b>Servicio 24/7:</b> Disponibles en cualquier momento para
              atender sus necesidades de transporte.
            </li>
          </ul>
        </div>
      </InfoPageLayout>
    </>
  );
}
