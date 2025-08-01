import React, { useState } from 'react';
import logo from './assets/icons/logo.svg';
import frame1 from './assets/images/frame-1.webp';
import frame2 from './assets/images/frame-2.png';
import frame3 from './assets/images/frame-3.png';
import frameCircle from './assets/images/frame-circular.png';
import bench from './assets/images/bench.png';
import photo from './assets/photos/IMG_8173.jpg';

function App() {
  const [currentSection, setCurrentSection] = useState('gallery');

  const renderSection = () => {
    switch (currentSection) {
      case 'theatre':
        return (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg max-w-2xl">
              <h2 className="text-3xl font-serif text-gray-800 mb-4">Theatre</h2>
              <p className="text-gray-600 mb-4">Software Development Projects</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded">
                  <h3 className="text-gray-800 font-semibold">TaskFlow Pro</h3>
                  <p className="text-gray-600 text-sm">Project management platform</p>
                </div>
                <div className="bg-gray-100 p-4 rounded">
                  <h3 className="text-gray-800 font-semibold">CodeSync</h3>
                  <p className="text-gray-600 text-sm">Developer productivity suite</p>
                </div>
              </div>
              <button
                onClick={() => setCurrentSection('gallery')}
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors"
              >
                Back to Gallery
              </button>
            </div>
          </div>
        );
      case 'listening':
        return (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg max-w-2xl">
              <h2 className="text-3xl font-serif text-gray-800 mb-4">Listening Room</h2>
              <p className="text-gray-600 mb-4">Data Visualization Projects</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded">
                  <h3 className="text-gray-800 font-semibold">Climate Dashboard</h3>
                  <p className="text-gray-600 text-sm">Interactive climate data viz</p>
                </div>
                <div className="bg-gray-100 p-4 rounded">
                  <h3 className="text-gray-800 font-semibold">Market Analyzer</h3>
                  <p className="text-gray-600 text-sm">Financial sentiment analysis</p>
                </div>
              </div>
              <button
                onClick={() => setCurrentSection('gallery')}
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors"
              >
                Back to Gallery
              </button>
            </div>
          </div>
        );
      case 'writers':
        return (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg max-w-2xl">
              <h2 className="text-3xl font-serif text-gray-800 mb-4">Writer's Room</h2>
              <p className="text-gray-600 mb-4">Creative Coding Projects</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded">
                  <h3 className="text-gray-800 font-semibold">Generative Art</h3>
                  <p className="text-gray-600 text-sm">AI-powered art platform</p>
                </div>
                <div className="bg-gray-100 p-4 rounded">
                  <h3 className="text-gray-800 font-semibold">Sonic Landscapes</h3>
                  <p className="text-gray-600 text-sm">Audio-reactive visuals</p>
                </div>
              </div>
              <button
                onClick={() => setCurrentSection('gallery')}
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors"
              >
                Back to Gallery
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Green gallery wall background */}
      <div className="absolute inset-0 bg-gallery-green"></div>

      {/* Red carpet at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gallery-red"></div>

      {/* Main large artwork frame - left side */}
      <div className="absolute" style={{ top: '15%', left: '8%' }}>
        <div className="relative">
          <div className="relative w-96">
            <img
              src={photo}
              alt="Elephant photo"
              className="absolute w-full h-64 object-contain z-0"
            />
            <img
              src={frame1}
              alt="Ornate Frame"
              className="absolute w-full h-480 rotate-90 z-10 pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* YouTube video frame - center right */}
      <div className="absolute cursor-pointer" style={{ top: '18%', left: '52%' }} onClick={() => window.open('https://www.youtube.com/embed/49LiLYefg30?si=lS_yKP5QWNT9I59Z', '_blank')}>
        <div className="relative w-100 h-auto">
          <iframe
            className="w-70 h-auto z-0 relative"
            src="https://www.youtube.com/embed/49LiLYefg30?si=lS_yKP5QWNT9I59Z"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <img
            src={frame2}
            alt="Ornate Frame"
            className="absolute inset-0 w-full h-full z-10 pointer-events-none"
          />
        </div>
      </div>

      {/* Monogram frame - top right */}
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
      {/* MeshGradient/Substack frame */}
      <div className="absolute cursor-pointer" style={{ top: '45%', left: '48%' }} onClick={() => window.open('https://substack.com', '_blank')}>
        <div className="relative">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/13/01/22/vintage-1976312_1280.png"
            alt="Small Frame"
            className="w-16 h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center" style={{ top: '20%', left: '20%', right: '20%', bottom: '20%' }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/MeshGradient_logo.svg/512px-MeshGradient_logo.svg.png"
              alt="MeshGradient"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Substack frame */}
      <div className="absolute cursor-pointer" style={{ top: '45%', left: '58%' }} onClick={() => window.open('https://substack.com', '_blank')}>
        <div className="relative">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/13/01/22/vintage-1976312_1280.png"
            alt="Small Frame"
            className="w-16 h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center" style={{ top: '20%', left: '20%', right: '20%', bottom: '20%' }}>
            <div className="w-full h-full bg-orange-500 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* LinkedIn frame */}
      <div className="absolute cursor-pointer" style={{ top: '58%', left: '45%' }} onClick={() => window.open('https://linkedin.com', '_blank')}>
        <div className="relative">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/13/01/22/vintage-1976312_1280.png"
            alt="Small Frame"
            className="w-16 h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center" style={{ top: '20%', left: '20%', right: '20%', bottom: '20%' }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
              alt="LinkedIn"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Instagram frame */}
      <div className="absolute cursor-pointer" style={{ top: '58%', left: '55%' }} onClick={() => window.open('https://instagram.com', '_blank')}>
        <div className="relative">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/13/01/22/vintage-1976312_1280.png"
            alt="Small Frame"
            className="w-16 h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center" style={{ top: '20%', left: '20%', right: '20%', bottom: '20%' }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png"
              alt="Instagram"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Gallery bench */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
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
      {renderSection()}
    </div >
  );
}

export default App;