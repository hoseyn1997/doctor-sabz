import React from "react";
import { Icons } from "../common/Icons/Icons";

interface Props {
  showPlayPauseIcon: boolean;
  isPlaying: boolean;
  togglePlayPause: () => void;
}

export default function ShowPlayPauseIcon({
  showPlayPauseIcon,
  isPlaying,
  togglePlayPause,
}: Props) {
  return (
    <>
      {/* Play/Pause Icon Overlay */}
      {showPlayPauseIcon && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          onClick={togglePlayPause} // Toggle play/pause when clicking the icon
        >
          {isPlaying ? (
            <Icons.Pause className="w-12 h-12 text-white bg-black/25 p-1 rounded-full" />
          ) : (
            <Icons.Play className="w-12 h-12 text-white bg-black/25 p-1 rounded-full" />
          )}
        </div>
      )}
    </>
  );
}
