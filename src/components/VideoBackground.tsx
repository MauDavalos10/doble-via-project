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
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&vq=hd1080`}
        style={iframeStyle}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
