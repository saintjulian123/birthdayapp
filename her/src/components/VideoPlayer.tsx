// VideoPlayer.tsx
import { useRef, useState } from 'react';

interface VideoPlayerProps {
  src: string;
  disableInteraction?: boolean;
}

export default function VideoPlayer({ src, disableInteraction = false }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        className="w-full h-auto rounded-xl aspect-video"
        onClick={disableInteraction ? undefined : togglePlay}
        playsInline
        controls={false} // Disable browser controls to remove PiP
      />

      {/* Controls Overlay */}
      {!disableInteraction && (
        <div className="absolute bottom-0 left-0 right-0 p-2 flex justify-start items-center bg-black bg-opacity-50 rounded-b-xl">
          <button
            onClick={togglePlay}
            className="text-white focus:outline-none"
          >
            {isPlaying ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
}