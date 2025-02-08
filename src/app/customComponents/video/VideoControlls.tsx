"use client";
import React, { useState } from "react";
import { Icons } from "../common/Icons/Icons";

interface Props {
  videoControlsRef: React.RefObject<HTMLDivElement | null>;
  videoContainerRef: React.RefObject<HTMLDivElement | null>;
  togglePlayPause: () => void;
  isPlaying: boolean;
  isMuted: boolean;
  currentTime: number;
  duration: number | null;
  changePlaybackSpeed: () => void;
  playbackSpeed: number;
  handleSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleVolume: () => void;
  formatTime: (seconds: number) => string;
}

export default function VideoControlls({
  videoControlsRef,
  videoContainerRef,
  togglePlayPause,
  isPlaying,
  isMuted,
  currentTime,
  duration,
  changePlaybackSpeed,
  playbackSpeed,
  handleSeek,
  toggleVolume,
  formatTime,
}: Props) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  // Fullscreen functionality
  const toggleFullscreen = async () => {
    if (videoContainerRef.current) {
      if (!isFullscreen) {
        if (videoContainerRef.current.requestFullscreen) {
          await videoContainerRef.current.requestFullscreen();

          // Lock orientation to landscape on mobile devices
          const isMobile = /Mobi|Android/i.test(navigator.userAgent);
          if (
            isMobile &&
            "orientation" in screen &&
            typeof (screen.orientation as any).lock === "function"
          ) {
            try {
              await (screen.orientation as any).lock("landscape");
            } catch (error) {
              console.error("Failed to lock orientation:", error);
            }
          }
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();

          // Unlock orientation on exiting fullscreen
          if (
            "orientation" in screen &&
            typeof (screen.orientation as any).unlock === "function"
          ) {
            (screen.orientation as any).unlock();
          }
        }
      }
      setIsFullscreen(!isFullscreen);
    }
  };
  return (
    <>
      {/* Custom Controls */}
      <div
        ref={videoControlsRef}
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-black/0 p-3 flex items-center space-x-2 text-xs transition-all duration-300"
      >
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="text-white hover:bg-white/15 p-1 rounded-full"
        >
          {isPlaying ? (
            <Icons.Pause className="w-6" />
          ) : (
            <Icons.Play className="w-6" />
          )}
        </button>

        {/* Volume Toggle Button */}
        <button
          onClick={toggleVolume}
          className="text-white hover:bg-white/15 p-1 rounded-full transition-colors duration-200"
        >
          {isMuted ? (
            <Icons.VolOff className="w-6" />
          ) : (
            <Icons.VolOn className="w-6" />
          )}
        </button>

        {/* Speed Control Button */}
        <button
          onClick={changePlaybackSpeed}
          className="text-white hover:bg-white/15 p-0 rounded-full"
        >
          {playbackSpeed}x
        </button>

        {/* Seek Bar */}
        <input
          type="range"
          min="0"
          max="100"
          value={duration ? (currentTime / duration) * 100 : 0}
          onChange={handleSeek}
          className="flex-1 focus:outline-none"
          style={{
            // Dynamically set the --progress CSS variable
            // This controls the green portion of the seek bar
            ["--progress" as any]: `${(currentTime / (duration || 1)) * 100}%`,
          }}
        />

        {/* Time Display */}
        <span className="text-white">
          {formatTime(currentTime)} /{" "}
          {duration ? formatTime(duration) : "00:00"}
        </span>

        {/* Fullscreen Button */}
        <button
          onClick={toggleFullscreen}
          className="text-white hover:bg-white/15 p-1 rounded-full"
        >
          {isFullscreen ? (
            <Icons.FullScreen className="w-6" />
          ) : (
            <Icons.FullScreen className="w-6" />
          )}
        </button>
      </div>
    </>
  );
}
