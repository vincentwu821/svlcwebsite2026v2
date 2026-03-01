import { useEffect, useState } from "react";

type VideoThumbnailProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function VideoThumbnail({ src, alt, className }: VideoThumbnailProps) {
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const video = document.createElement("video");
    video.src = src;
    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;
    video.crossOrigin = "anonymous";

    const captureFirstFrame = () => {
      if (!video.videoWidth || !video.videoHeight) {
        return;
      }

      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const context = canvas.getContext("2d");
      if (!context) {
        return;
      }

      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/jpeg", 0.92);

      if (!isCancelled) {
        setThumbnail(dataUrl);
      }
    };

    const onLoadedData = () => {
      if (video.currentTime > 0) {
        captureFirstFrame();
        return;
      }

      const onSeeked = () => {
        captureFirstFrame();
        video.removeEventListener("seeked", onSeeked);
      };

      video.addEventListener("seeked", onSeeked);

      try {
        // Use a tiny offset to ensure a decoded frame is available across browsers.
        video.currentTime = 0.01;
      } catch {
        captureFirstFrame();
        video.removeEventListener("seeked", onSeeked);
      }
    };

    video.addEventListener("loadeddata", onLoadedData);
    video.load();

    return () => {
      isCancelled = true;
      video.removeEventListener("loadeddata", onLoadedData);
      video.pause();
      video.src = "";
      video.load();
    };
  }, [src]);

  if (thumbnail) {
    return <img src={thumbnail} alt={alt} className={className} />;
  }

  return (
    <video
      src={src}
      muted
      playsInline
      preload="auto"
      className={className}
    />
  );
}
