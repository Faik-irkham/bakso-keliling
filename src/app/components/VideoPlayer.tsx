"use client";

import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

// --- SOLUSI UTAMA ADA DI SINI ---
// Kita tidak mengimpor tipe Player/PlayerOptions secara manual.
// Sebaliknya, kita "mengekstrak" tipe tersebut langsung dari library.

// 1. Dapatkan tipe 'Player' dari apa yang dikembalikan oleh fungsi videojs()
type VideoJsPlayer = ReturnType<typeof videojs>;

// 2. Dapatkan tipe 'PlayerOptions' dari parameter kedua fungsi videojs()
type VideoJsPlayerOptions = Parameters<typeof videojs>[1];

// Gunakan tipe yang sudah kita ekstrak di dalam interface
interface IVideoPlayerProps {
  options: VideoJsPlayerOptions;
  onReady?: (player: VideoJsPlayer) => void;
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ options, onReady }) => {
  const videoNode = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);

  useEffect(() => {
    if (!playerRef.current && videoNode.current) {
      const player: VideoJsPlayer = videojs(
        videoNode.current,
        options,
        function onPlayerReady() {
          console.log("Video.js player is ready");
          if (onReady) {
            onReady(this); // 'this' dalam konteks ini adalah player
          }
        }
      );
      playerRef.current = player;
    }

    // Fungsi cleanup
    return () => {
      if (playerRef.current && !playerRef.current.isDisposed()) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [options, onReady]);

  return (
    <div data-vjs-player>
      <video ref={videoNode} className="video-js vjs-fill"></video>
    </div>
  );
};

export default VideoPlayer;
