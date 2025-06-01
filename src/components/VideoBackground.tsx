import { useState } from "react";

interface VideoBackgroundProps {
  youtubeId: string;
  fallbackImage: string;
  fullHeight?: boolean;
}

export default function VideoBackground({
  youtubeId,
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

  const iframeStyle = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    width: "100vw",
    height: "56.25vw", // 16:9 aspect ratio
    minHeight: "100vh",
    minWidth: "177.77vh", // 16:9 aspect ratio
    transform: "translate(-50%, -50%)",
    pointerEvents: "none" as const,
    zIndex: 1,
  };

  const fallbackStyle = {
    position: "absolute" as const,
    inset: 0,
    background: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    zIndex: 0,
  };

  const imageStyle = {
    maxWidth: "40%",
    maxHeight: "40%",
    objectFit: "contain" as const,
    animation: "pulse 2s ease-in-out infinite",
  };

  return (
    <div style={containerStyle}>
      {!isLoaded && (
        <div style={fallbackStyle}>
          <img src={fallbackImage} alt="Loading" style={imageStyle} />
        </div>
      )}
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&vq=hd1080`}
        style={iframeStyle}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoaded(true)}
      />
      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: 0.4;
            transform: scale(0.95);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0.4;
            transform: scale(0.95);
          }
        }
      `}</style>
    </div>
  );
}
