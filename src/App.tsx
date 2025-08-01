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

      {/* Gallery bench */}
      <div className="absolute bottom-0 mb-20 left-1/2 lg:left-3/4 z-30 transform -translate-x-1/2 pointer-events-none">
        <div className="w-56 min-w-56 sm:w-64 lg:w-80 xl:w-96">
          <img
            src={bench}
            alt="Gallery Bench"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Red carpet at bottom */}
      <div className="absolute bottom-0 left-0 w-full min-h-32 h-32 xs:h-32 sm:h-32 md:h-32 lg:h-64 bg-gallery-red"></div>

      {/* Main content container */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16">

        {/* Logo frame - top right */}
        <div className="absolute top-4 sm:top-8 lg:top-12 right-4 sm:right-8 lg:right-12 z-30">
          <div className="relative">
            <div className="relative w-16 h-auto sm:w-20 lg:w-32">
              <div className="absolute inset-0 flex items-center justify-center z-0" style={{ top: '15%', left: '15%', right: '15%', bottom: '15%' }}>
                <div className="w-full h-full bg-emerald-800 rounded-full flex items-center justify-center">
                  <img src={logo} alt="logo" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16" />
                </div>
              </div>
              <img src={frameCircle} alt="Ornate Frame" className="w-full h-auto relative z-1" />
            </div>
          </div>
        </div>

        {/* Main frames section - organic layout */}
        <div className="mt-16 sm:mt-20 lg:mt-24 relative">

          {/* Main large artwork frame - positioned organically */}
          <div className="flex justify-center lg:justify-start lg:ml-8 xl:ml-16">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg">
              <div className="relative w-full aspect-[3/2] sm:aspect-[3/2] lg:w-[350px] lg:h-[230px] xl:w-[480px] xl:h-full">
                <img
                  src={photo}
                  alt="Elephant photo"
                  className="absolute w-full h-full object-contain z-0"
                />
                <img
                  src={frame1}
                  alt="Ornate Frame"
                  className="absolute w-full h-full rotate-90 z-10 pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* YouTube video frame - offset from main frame */}
          <div className="mt-8 sm:mt-12 lg:mt-0 lg:absolute lg:top-16 lg:right-48 xl:top-20 xl:right-60">
            <div className="flex justify-center lg:justify-end">
              <div className="cursor-pointer" onClick={() => window.open('https://www.youtube.com/embed/49LiLYefg30?si=lS_yKP5QWNT9I59Z', '_blank')}>
                <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
                  <div className="relative w-full aspect-[3/2] sm:aspect-[3/2] lg:w-[400px] lg:h-full xl:w-[480px] xl:h-full flex items-center justify-center">
                    <img
                      src={frame2}
                      alt="Ornate Frame"
                      className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                    />
                    <iframe
                      className="relative z-0 w-4/5 h-2/3 lg:w-[320px] lg:h-[200px] xl:w-[360px] xl:h-[220px]"
                      style={{
                        border: 'none',
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
              </div>
            </div>
          </div>
        </div>

        {/* Social media frames - organic positioning */}
        <div className="mt-12 sm:mt-16 lg:mt-12 xl:mt-0 relative">
          {/* Mobile: Grid layout */}
          <div className="lg:hidden flex justify-center">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-xs sm:max-w-sm">
              {/* Email frame */}
              <div className="cursor-pointer flex justify-center" onClick={() => window.open('mailto:hello@kaoshannon.com', '_blank')}>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <div className="absolute inset-0 flex items-center justify-center z-0" style={{ top: '20%', left: '20%', right: '20%', bottom: '20%' }}>
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                      <img src={gmail} alt="Gmail" className="w-3/4 h-3/4 object-contain" />
                    </div>
                  </div>
                  <img
                    src={frameSquare1}
                    alt="Square Frame"
                    className="w-full h-full z-10 relative"
                    style={{ pointerEvents: 'none' }}
                  />
                </div>
              </div>

              {/* Substack frame */}
              <div className="cursor-pointer flex justify-center" onClick={() => window.open('https://substack.com/@kaoshannon', '_blank')}>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <img
                    src={frameSquare2}
                    alt="Square Frame"
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ top: '20%', left: '20%', right: '20%', bottom: '20%' }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <img src={substack} alt="substack" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>
              </div>

              {/* LinkedIn frame */}
              <div className="cursor-pointer flex justify-center" onClick={() => window.open('https://linkedin.com/in/kaoshannon', '_blank')}>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
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
                    className="w-full h-full relative z-10"
                  />
                </div>
              </div>

              {/* Instagram frame */}
              <div className="cursor-pointer flex justify-center" onClick={() => window.open('https://instagram.com/shannon.kao', '_blank')}>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <img
                    src={frameSquare1}
                    alt="Square Frame"
                    className="w-full h-full relative z-10"
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
            </div>
          </div>

          {/* Desktop: Organic positioning */}
          <div className="hidden lg:block relative" style={{ height: '100px' }}>
            {/* Email frame - top left area */}
            <div className="absolute cursor-pointer" style={{ top: '-80%', left: '40%' }} onClick={() => window.open('mailto:hello@kaoshannon.com', '_blank')}>
              <div className="relative w-20 h-20 xl:w-24 xl:h-24">
                <div className="absolute inset-0 flex items-center justify-center z-0" style={{ top: '20%', left: '20%', right: '20%', bottom: '20%' }}>
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <img src={gmail} alt="Gmail" className="w-3/4 h-3/4 object-contain" />
                  </div>
                </div>
                <img
                  src={frameSquare1}
                  alt="Square Frame"
                  className="w-full h-full z-10 relative"
                  style={{ pointerEvents: 'none' }}
                />
              </div>
            </div>

            {/* Substack frame - top right area */}
            <div className="absolute cursor-pointer" style={{ top: '24%', left: '40%' }} onClick={() => window.open('https://substack.com/@kaoshannon', '_blank')}>
              <div className="relative w-20 h-20 xl:w-24 xl:h-24">
                <img
                  src={frameSquare2}
                  alt="Square Frame"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center" style={{ top: '20%', left: '20%', right: '20%', bottom: '20%' }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <img src={substack} alt="substack" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>

            {/* LinkedIn frame - bottom left area */}
            <div className="absolute cursor-pointer" style={{ top: '-20%', left: '35%' }} onClick={() => window.open('https://linkedin.com/in/kaoshannon', '_blank')}>
              <div className="relative w-20 h-20 xl:w-24 xl:h-24">
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
                  className="w-full h-full relative z-10"
                />
              </div>
            </div>

            {/* Instagram frame - bottom right area */}
            <div className="absolute cursor-pointer" style={{ top: '70%', left: '30%' }} onClick={() => window.open('https://instagram.com/shannon.kao', '_blank')}>
              <div className="relative w-20 h-20 xl:w-24 xl:h-24">
                <img
                  src={frameSquare1}
                  alt="Square Frame"
                  className="w-full h-full relative z-10"
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
          </div>
        </div>
      </div>

      {/* Navigation menu - responsive positioning */}
      <div className="fixed z-20 bottom-4 right-4 sm:bottom-32 sm:right-6 lg:right-8 lg:top-1/2 lg:transform lg:-translate-y-1/2">
        <nav className="space-y-2 sm:space-y-4 lg:space-y-6">
          <button
            onClick={() => setCurrentSection('theatre')}
            className="block text-right font-serif italic text-sm sm:text-base lg:text-lg text-white hover:text-yellow-200 transition-colors"
          >
            theatre →
          </button>
          <button
            onClick={() => setCurrentSection('listening')}
            className="block text-right font-serif italic text-sm sm:text-base lg:text-lg text-white hover:text-yellow-200 transition-colors"
          >
            listening room →
          </button>
          <button
            onClick={() => setCurrentSection('writers')}
            className="block text-right font-serif italic text-sm sm:text-base lg:text-lg text-white hover:text-yellow-200 transition-colors"
          >
            writer's room →
          </button>
        </nav>
      </div>

      {/* Section overlays */}
      {/* {renderSection()} */}
    </div>
  );
}

export default App;