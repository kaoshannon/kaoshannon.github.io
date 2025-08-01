import React, { useState } from 'react';
import logo from './assets/icons/logo.svg';
import frame1 from './assets/images/frame-1.webp';
import frame2 from './assets/images/frame-2.png';
import frameCircle from './assets/images/frame-circular.png';
import frameSquare1 from './assets/images/frame-square-1.png';
import frameSquare2 from './assets/images/frame-square-2.png';
import frameSquare3 from './assets/images/frame-square-3.png';
import bench from './assets/images/bench.png';
import photo from './assets/photos/IMG_8173.jpg';
import instagram from './assets/icons/instagram.webp';
import linkedin from './assets/icons/linkedin.png';
import gmail from './assets/icons/gmail.png';
import substack from './assets/icons/substack.png';

function App() {
  const [currentSection, setCurrentSection] = useState('gallery');

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Green gallery wall background */}
      <div className="absolute inset-0 bg-gallery-green"></div>

      {/* Red carpet at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gallery-red"></div>

      {/* Main large artwork frame - left side */}
      <div className="absolute" style={{ top: '15%', left: '8%' }}>
        <div className="relative w-[600px] h-[400px]">
          <img
            src={photo}
            alt="Elephant photo"
            className="absolute w-full h-[400px] object-contain z-0"
          />
          <img
            src={frame1}
            alt="Ornate Frame"
            className="absolute w-full h-[400px] rotate-90 z-10 pointer-events-none"
          />
        </div>
      </div>

      {/* YouTube video frame - center right */}
      <div className="absolute cursor-pointer" style={{ top: '18%', left: '52%' }} onClick={() => window.open('https://www.youtube.com/embed/49LiLYefg30?si=lS_yKP5QWNT9I59Z', '_blank')}>
        <div className="relative w-[360px] h-[240px] flex items-center justify-center">
          <img
            src={frame2}
            alt="Ornate Frame"
            className="absolute inset-0 w-full h-[240px] z-10 pointer-events-none"
          />
          <iframe
            className="relative z-0"
            style={{
              width: '280px',
              height: '160px',
              border: 'none',
              position: 'relative',
              top: '0px',
              left: '0px',
              display: 'block',
            }}
            src="https://www.youtube.com/embed/49LiLYefg30?si=lS_yKP5QWNT9I59Z"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Logo frame - top right */}
      <div className="absolute" style={{ top: '8%', right: '8%' }}>
        <div className="relative">
          <div className="relative w-32 h-auto">
            <div className="absolute inset-0 flex items-center justify-center z-0" style={{ top: '15%', left: '15%', right: '15%', bottom: '15%' }}>
              <div className="w-full h-full bg-emerald-800 rounded-full flex items-center justify-center">
                <img src={logo} alt="logo" className="w-16 h-16" />
              </div>
            </div>
            <img src={frameCircle} alt="Ornate Frame" className="w-32 h-auto relative z-1" />
          </div>
        </div>
      </div>

      {/* Small social media frames */}
      {/* Email frame */}
      <div className="absolute cursor-pointer" style={{ top: '45%', left: '48%' }} onClick={() => window.open('mailto:hello@kaoshannon.com', '_blank')}>
        <div className="relative w-30 h-30">
          <div className="absolute inset-0 flex items-center justify-center z-0" style={{ top: '20%', left: '20%', right: '20%', bottom: '20%' }}>
            <div className="w-30 h-full bg-gray-700 flex items-center justify-center">
              <img src={gmail} alt="Gmail" className="w-26 h-26 object-contain" />
            </div>
          </div>
          <img
            src={frameSquare1}
            alt="Square Frame"
            className="w-24 h-24 z-10 relative"
            style={{ pointerEvents: 'none' }}
          />
        </div>
      </div>

      {/* Substack frame */}
      <div className="absolute cursor-pointer" style={{ top: '45%', left: '58%' }} onClick={() => window.open('https://substack.com/@kaoshannon', '_blank')}>
        <div className="relative">
          <img
            src={frameSquare2}
            alt="Square Frame"
            className="w-24 h-24"
          />
          <div className="absolute inset-0 flex items-center justify-center" style={{ top: '20%', left: '20%', right: '20%', bottom: '20%' }}>
            <div className="w-full h-full flex items-center justify-center">
              <img src={substack} alt="substack" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* LinkedIn frame */}
      <div className="absolute cursor-pointer" style={{ top: '58%', left: '45%' }} onClick={() => window.open('https://linkedin.com/in/kaoshannon', '_blank')}>
        <div className="relative w-24 h-24">
          {/* LinkedIn logo below */}
          <div className="absolute inset-0 flex items-center justify-center z-0" style={{ top: '20%', left: '20%', right: '20%', bottom: '20%' }}>
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-full h-full object-contain"
            />
          </div>
          <img
            src={frameSquare3}
            alt="Small Frame"
            className="w-24 h-24 relative z-10"
          />
        </div>
      </div>

      {/* Instagram frame */}
      <div className="absolute cursor-pointer" style={{ top: '58%', left: '55%' }} onClick={() => window.open('https://instagram.com/shannon.kao', '_blank')}>
        <div className="relative w-24 h-24">
          <img
            src={frameSquare1}
            alt="Square Frame"
            className="w-24 h-24 relative z-10"
          />
          <div
            className="absolute inset-0 flex items-center justify-center z-0"
            style={{
              top: '20%',
              left: '20%',
              right: '20%',
              bottom: '20%',
              backgroundColor: '#14532d',
            }}
          >
            <img
              src={instagram}
              alt="Instagram"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Gallery bench */}
      <div className="absolute bottom-36 left-2/3 transform -translate-x-1/2">
        <img
          src={bench}
          alt="Gallery Bench"
          className="w-96 h-auto"
        />
      </div>

      {/* Navigation menu - right side */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20">
        <nav className="space-y-6">
          <button
            onClick={() => setCurrentSection('theatre')}
            className="block text-right font-serif italic text-lg text-white hover:text-yellow-200 transition-colors"
          >
            theatre →
          </button>
          <button
            onClick={() => setCurrentSection('listening')}
            className="block text-right font-serif italic text-lg text-white hover:text-yellow-200 transition-colors"
          >
            listening room →
          </button>
          <button
            onClick={() => setCurrentSection('writers')}
            className="block text-right font-serif italic text-lg text-white hover:text-yellow-200 transition-colors"
          >
            writer's room →
          </button>
        </nav>
      </div>

      {/* Section overlays */}
      {/* {renderSection()} */}
    </div >
  );
}

export default App;