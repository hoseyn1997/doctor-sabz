import React from "react";

interface Props {
  skipFeedback: any;
}

export default function SkipFeedback({ skipFeedback }: Props) {
  return (
    <div>
      {/* Skip Feedback Overlay */}
      {skipFeedback.visible && (
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 bg-black/25 text-white text-sm font-bold p-2 rounded-full animate-fade ${
            skipFeedback.position === "left" ? "left-10" : "right-10"
          }`}
        >
          {skipFeedback.text}
        </div>
      )}
    </div>
  );
}
