import React from 'react';
import exitSign from '../assets/images/exit.png';
import curtain from '../assets/images/curtain.png';

const Theatre: React.FC = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* EXIT sign - top center with red glow, with hover label */}
      <div className="absolute top-8 left-56 transform -translate-x-1/2 z-30">
        <div className="relative group">
          {/* EXIT sign PNG */}
          <img
            src={exitSign}
            onClick={() => window.location.href = '/'}
            alt="EXIT Sign"
            className="relative z-10 w-56 h-full object-cover rounded-sm"
            style={{
              filter: 'brightness(1.2) contrast(1.3) saturate(1.5)',
              cursor: 'pointer',
            }}
          />
          {/* Hover label */}
          {/* Cursor-tracking hover label */}
          {(() => {
            const [labelPos, setLabelPos] = React.useState<{ x: number; y: number } | null>(null);
            const labelRef = React.useRef<HTMLDivElement>(null);

            // Attach mousemove/mouseleave handlers to the parent group
            React.useEffect(() => {
              const group = labelRef.current?.parentElement;
              if (!group) return;

              const handleMouseMove = (e: MouseEvent) => {
                // Get bounding rect of the group (EXIT sign)
                const rect = group.getBoundingClientRect();
                setLabelPos({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              };
              const handleMouseLeave = () => setLabelPos(null);

              group.addEventListener('mousemove', handleMouseMove);
              group.addEventListener('mouseleave', handleMouseLeave);

              return () => {
                group.removeEventListener('mousemove', handleMouseMove);
                group.removeEventListener('mouseleave', handleMouseLeave);
              };
            }, []);

            return (
              <div
                ref={labelRef}
                style={
                  labelPos
                    ? {
                      position: 'absolute',
                      left: labelPos.x + 12,
                      top: labelPos.y + 12,
                      pointerEvents: 'none',
                      zIndex: 40,
                      transition: 'opacity 0.2s',
                      opacity: 1,
                      whiteSpace: 'nowrap',
                    }
                    : {
                      opacity: 0,
                      pointerEvents: 'none',
                      position: 'absolute',
                    }
                }
                className="bg-black bg-opacity-80 text-white text-xs px-3 py-1 rounded shadow-lg"
              >
                Return to gallery
              </div>
            );
          })()}
        </div>
      </div>

      {/* Theatre stage with curtains and video */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative">
          {/* Red curtains frame */}
          <div className="relative w-[1200px] h-[675px]">
            <img
              src={curtain}
              alt="Theatre"
              className="absolute top-0 left-0 w-full h-full object-cover z-30 pointer-events-none"
            />

            {/* YouTube video embed - centered in the stage opening */}
            <div className="absolute h-full top-8 left-0 right-0 bottom-0 z-10 flex items-center justify-center">
              <div className="w-full h-full max-w-[1100px] max-h-[520px] bg-black rounded-sm overflow-hidden shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/8QmE59LZ-7o?si=uZjFXoexz9PW2bg6"
                  title="Theatre Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{
                    border: 'none',
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theatre;