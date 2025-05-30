import React from "react";
import VideoBackground from "./VideoBackground";

interface InfoPageLayoutProps {
  children: React.ReactNode;
}

const whatsappNumber = "593987063904";
const whatsappMessage = encodeURIComponent(
  "Hola, necesito atención inmediata."
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const InfoPageLayout: React.FC<InfoPageLayoutProps> = ({ children }) => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Left: GIF */}
      <div
        style={{
          flex: "0 0 40%",
          background: "#222",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <VideoBackground
          src="/videos/doble-via.mp4"
          fallbackImage="/images/car.gif"
          fullHeight
        />
      </div>
      {/* Right: Content */}
      <div
        style={{
          flex: "1",
          padding: "3rem 2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: 700 }}>
          {children}
          <hr
            style={{
              margin: "2.5rem 0 1.5rem 0",
              border: "none",
              borderTop: "1px solid #bbb",
            }}
          />
          <div
            style={{ textAlign: "center", marginBottom: "1rem", color: "#444" }}
          >
            Si necesita atención inmediata, contáctenos directamente a través de
            WhatsApp.
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                background: "#25D366",
                color: "#222",
                border: "none",
                borderRadius: 6,
                padding: "0.5rem 1.2rem",
                fontSize: 18,
                fontWeight: 500,
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                gap: 8,
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: 8 }}
              >
                <circle cx="16" cy="16" r="16" fill="#fff" />
                <path
                  d="M16 6C10.477 6 6 10.477 6 16c0 2.01.59 3.885 1.61 5.46L6 26l4.66-1.56A9.94 9.94 0 0016 26c5.523 0 10-4.477 10-10S21.523 6 16 6zm0 18c-1.7 0-3.29-.5-4.63-1.36l-.33-.21-2.77.93.93-2.7-.22-.34A7.96 7.96 0 018 16c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.36-6.19c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.36.1-.48.1-.1.24-.26.36-.4.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.54.58.2 1.04.32 1.4.4.58.12 1.1.1 1.52.06.46-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"
                  fill="#25D366"
                />
              </svg>
              + 593 98 706 3904
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPageLayout;
