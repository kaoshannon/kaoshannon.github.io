import React, { useState, useRef, useCallback } from 'react';
import logo from './assets/icons/logo.svg';
import frameCircle from './assets/images/frame-circular.png';
import bench from './assets/images/bench.png';
import { GalleryItemRenderer } from './components/GalleryItem';
import { galleryItems } from './data/galleryItems';

function App() {
  const [currentSection, setCurrentSection] = useState('gallery');
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [canvasOffset, setCanvasOffset] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);

  // Drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - canvasOffset.x,
      y: e.clientY - canvasOffset.y
    });
  }, [canvasOffset]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;

    setCanvasOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  }, [isDragging, dragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fixed Red carpet at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 lg:h-64 bg-gallery-red z-20"></div>

      {/* Fixed Gallery bench */}
      <div className="absolute bottom-0 mb-20 left-1/2 lg:left-3/4 z-30 transform -translate-x-1/2 pointer-events-none">
        <div className="w-56 min-w-56 sm:w-64 lg:w-80 xl:w-96">
          <img
            src={bench}
            alt="Gallery Bench"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Fixed Logo frame - top right */}
      <div className="absolute top-4 sm:top-8 lg:top-12 right-4 sm:right-8 lg:right-12 z-40">
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

      {/* Fixed Navigation menu */}
      <div className="fixed z-40 bottom-4 right-4 sm:bottom-32 sm:right-6 lg:right-8 lg:top-1/2 lg:transform lg:-translate-y-1/2">
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

      {/* Draggable Canvas Container */}
      <div
        ref={canvasRef}
        className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Green gallery wall background - extends beyond viewport */}
        <div
          className="absolute bg-gallery-green"
          style={{
            width: '200%',
            height: '200%',
            left: '-50%',
            top: '-50%',
            transform: `translate(${canvasOffset.x}px, ${canvasOffset.y}px)`
          }}
        />

        {/* Gallery Items */}
        {galleryItems.map(item => (
          <GalleryItemRenderer
            key={item.id}
            item={item}
            canvasOffset={canvasOffset}
          />
        ))}
      </div>

      {/* Section overlays */}
      {/* {renderSection()} */}
    </div>
  );
}

export default App;