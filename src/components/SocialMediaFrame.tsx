import React from "react";

interface SocialMediaFrameProps {
  platform: string;
  url: string;
  frameImage: string;
  iconImage: string;
}

const SocialMediaFrame: React.FC<SocialMediaFrameProps> = ({
  platform,
  url,
  frameImage,
  iconImage,
}) => {
  return (
    <div className="justify-center min-w-20">
      <div
        className="cursor-pointer flex justify-center"
        onClick={() => window.open(url, "_blank")}
      >
        <div className="w-20 h-20 relative">
          <img
            src={frameImage}
            alt="Square Frame"
            className="w-full h-full relative z-content"
            style={{ pointerEvents: "none" }}
          />
          <div
            className="absolute inset-0 flex items-center justify-center z-frame"
            style={{ top: "20%", left: "20%", right: "20%", bottom: "20%" }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={iconImage}
                alt={platform + " icon"}
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaFrame;
