import { useState } from "react";

interface VideoBackgroundProps {
  src: string;
  fallbackImage: string;
  fullHeight?: boolean;
}

export default function VideoBackground({
  src,
  fallbackImage,
  fullHeight = false,
}: VideoBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const containerStyle = fullHeight
    ? {
        position: "relative" as const,
        width: "100%",
        height: "100%",
        overflow: "hidden" as const,
      }
    : {
        position: "absolute" as const,
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden" as const,
      };

  const videoStyle = {
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    transition: "opacity 0.5s",
    opacity: isLoaded ? 1 : 0,
    zIndex: 1,
  };

  return (
    <div style={containerStyle}>
      {!isLoaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${fallbackImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}
      <video
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        style={videoStyle}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
