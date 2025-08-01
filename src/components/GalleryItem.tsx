import React from 'react';

// Frame Components
interface FrameProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const PhotoFrame: React.FC<FrameProps> = ({ children, className = "", onClick, style }) => (
  <div 
    className={`relative cursor-pointer hover:scale-105 transition-transform duration-200 ${className}`}
    onClick={onClick}
    style={style}
  >
    {children}
  </div>
);

export const VideoFrame: React.FC<FrameProps> = ({ children, className = "", onClick, style }) => (
  <div 
    className={`relative cursor-pointer hover:scale-105 transition-transform duration-200 ${className}`}
    onClick={onClick}
    style={style}
  >
    {children}
  </div>
);

export const SocialFrame: React.FC<FrameProps> = ({ children, className = "", onClick, style }) => (
  <div 
    className={`relative cursor-pointer hover:scale-105 transition-transform duration-200 ${className}`}
    onClick={onClick}
    style={style}
  >
    {children}
  </div>
);

// Gallery Item Data Structure
export interface GalleryItem {
  id: string;
  type: 'photo' | 'video' | 'social';
  position: { x: number; y: number };
  size: { width: number; height: number };
  content: {
    src?: string;
    alt?: string;
    url?: string;
    icon?: string;
  };
  frame: string;
}

// Gallery Item Renderer Component
interface GalleryItemRendererProps {
  item: GalleryItem;
  canvasOffset: { x: number; y: number };
}

export const GalleryItemRenderer: React.FC<GalleryItemRendererProps> = ({ item, canvasOffset }) => {
  const style = {
    position: 'absolute' as const,
    left: item.position.x,
    top: item.position.y,
    width: item.size.width,
    height: item.size.height,
    transform: `translate(${canvasOffset.x}px, ${canvasOffset.y}px)`
  };

  switch (item.type) {
    case 'photo':
      return (
        <PhotoFrame key={item.id} style={style}>
          <div className="relative w-full h-full">
            <img
              src={item.content.src}
              alt={item.content.alt}
              className="absolute w-full h-full object-contain z-0"
            />
            <img
              src={item.frame}
              alt="Ornate Frame"
              className="absolute w-full h-full rotate-90 z-10 pointer-events-none"
            />
          </div>
        </PhotoFrame>
      );

    case 'video':
      return (
        <VideoFrame 
          key={item.id} 
          style={style}
          onClick={() => window.open(item.content.url, '_blank')}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={item.frame}
              alt="Ornate Frame"
              className="absolute inset-0 w-full h-full z-10 pointer-events-none"
            />
            <iframe
              className="relative z-0 w-4/5 h-2/3"
              style={{ border: 'none', display: 'block' }}
              src={item.content.url}
              title={item.content.alt}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </VideoFrame>
      );

    case 'social':
      return (
        <SocialFrame 
          key={item.id} 
          style={style}
          onClick={() => window.open(item.content.url, '_blank')}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 flex items-center justify-center z-0" style={{ top: '20%', left: '20%', right: '20%', bottom: '20%' }}>
              <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                <img src={item.content.icon} alt={item.content.alt} className="w-3/4 h-3/4 object-contain" />
              </div>
            </div>
            <img
              src={item.frame}
              alt="Square Frame"
              className="w-full h-full z-10 relative"
              style={{ pointerEvents: 'none' }}
            />
          </div>
        </SocialFrame>
      );

    default:
      return null;
  }
}; 