import React from 'react';

const Theatre: React.FC = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* EXIT sign - top center with red glow */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="relative">
          {/* Red glow effect */}
          <div className="absolute inset-0 bg-red-500 blur-xl opacity-60 scale-150"></div>
          {/* EXIT sign PNG */}
          <img 
            src="https://images.pexels.com/photos/6045/red-sign-exit-emergency.jpg?auto=compress&cs=tinysrgb&w=200&h=80&fit=crop"
            alt="EXIT Sign"
            className="relative z-10 w-24 h-12 object-cover rounded-sm"
            style={{
              filter: 'brightness(1.2) contrast(1.3) saturate(1.5)',
            }}
          />
          {/* Additional red glow overlay */}
          <div className="absolute inset-0 bg-red-500 opacity-20 rounded-sm"></div>
        </div>
      </div>

      {/* Theatre stage with curtains and video */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative">
          {/* Red curtains frame */}
          <div className="relative w-[800px] h-[450px]">
            {/* Left curtain */}
            <img 
              src="https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=200&h=450&fit=crop&crop=left"
              alt="Left Curtain"
              className="absolute left-0 top-0 w-32 h-full object-cover z-30"
              style={{
                filter: 'hue-rotate(0deg) saturate(1.5) brightness(0.8)',
                clipPath: 'polygon(0 0, 85% 0, 70% 100%, 0 100%)'
              }}
            />
            
            {/* Right curtain */}
            <img 
              src="https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=200&h=450&fit=crop&crop=right"
              alt="Right Curtain"
              className="absolute right-0 top-0 w-32 h-full object-cover z-30"
              style={{
                filter: 'hue-rotate(0deg) saturate(1.5) brightness(0.8)',
                clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 30% 100%)',
                transform: 'scaleX(-1)'
              }}
            />

            {/* Top curtain valance */}
            <img 
              src="https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=800&h=80&fit=crop&crop=top"
              alt="Top Curtain"
              className="absolute top-0 left-0 w-full h-20 object-cover z-30"
              style={{
                filter: 'hue-rotate(0deg) saturate(1.5) brightness(0.8)',
                clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
              }}
            />

            {/* YouTube video embed - centered in the stage opening */}
            <div className="absolute top-16 left-24 right-24 bottom-0 z-10 flex items-center justify-center">
              <div className="w-full h-full max-w-[550px] max-h-[310px] bg-black rounded-sm overflow-hidden shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/49LiLYefg30?si=lS_yKP5QWNT9I59Z&autoplay=0&mute=0"
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

            {/* Stage lighting effects */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Spotlight effect on video area */}
              <div 
                className="absolute top-16 left-24 right-24 bottom-0 opacity-30"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)'
                }}
              ></div>
              
              {/* Ambient red lighting from curtains */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  background: 'radial-gradient(ellipse at center, transparent 30%, rgba(139,69,19,0.3) 60%, rgba(139,69,19,0.1) 100%)'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to gallery button - bottom left */}
      <button
        onClick={() => window.history.back()}
        className="absolute bottom-8 left-8 z-30 text-white font-serif italic text-lg hover:text-red-300 transition-colors duration-300"
        style={{
          textShadow: '0 0 10px rgba(255,255,255,0.3)'
        }}
      >
        ← back to gallery
      </button>

      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floor lighting */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 opacity-10"
          style={{
            background: 'linear-gradient(to top, rgba(139,69,19,0.5) 0%, transparent 100%)'
          }}
        ></div>
        
        {/* Side wall lighting */}
        <div 
          className="absolute inset-y-0 left-0 w-32 opacity-5"
          style={{
            background: 'linear-gradient(to right, rgba(139,69,19,0.3) 0%, transparent 100%)'
          }}
        ></div>
        
        <div 
          className="absolute inset-y-0 right-0 w-32 opacity-5"
          style={{
            background: 'linear-gradient(to left, rgba(139,69,19,0.3) 0%, transparent 100%)'
          }}
        ></div>
      </div>
    </div>
  );
};

export default Theatre;