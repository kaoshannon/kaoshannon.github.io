import frame1 from '../assets/images/frame-1.webp';
import frame2 from '../assets/images/frame-2.png';
import frameSquare1 from '../assets/images/frame-square-1.png';
import frameSquare2 from '../assets/images/frame-square-2.png';
import frameSquare3 from '../assets/images/frame-square-3.png';
import photo from '../assets/photos/IMG_8173.jpg';
import instagram from '../assets/icons/instagram.webp';
import linkedin from '../assets/icons/linkedin.png';
import gmail from '../assets/icons/gmail.png';
import substack from '../assets/icons/substack.png';
import { GalleryItem } from '../components/GalleryItem';

export const galleryItems: GalleryItem[] = [
  {
    id: 'main-photo',
    type: 'photo',
    position: { x: 200, y: 150 },
    size: { width: 400, height: 300 },
    content: { src: photo, alt: 'Elephant photo' },
    frame: frame1
  },
  {
    id: 'youtube-video',
    type: 'video',
    position: { x: 700, y: 200 },
    size: { width: 360, height: 240 },
    content: { 
      url: 'https://www.youtube.com/embed/49LiLYefg30?si=lS_yKP5QWNT9I59Z',
      alt: 'YouTube video'
    },
    frame: frame2
  },
  {
    id: 'email',
    type: 'social',
    position: { x: 300, y: 500 },
    size: { width: 80, height: 80 },
    content: { 
      url: 'mailto:hello@kaoshannon.com',
      icon: gmail,
      alt: 'Email'
    },
    frame: frameSquare1
  },
  {
    id: 'substack',
    type: 'social',
    position: { x: 400, y: 500 },
    size: { width: 80, height: 80 },
    content: { 
      url: 'https://substack.com/@kaoshannon',
      icon: substack,
      alt: 'Substack'
    },
    frame: frameSquare2
  },
  {
    id: 'linkedin',
    type: 'social',
    position: { x: 500, y: 500 },
    size: { width: 80, height: 80 },
    content: { 
      url: 'https://linkedin.com/in/kaoshannon',
      icon: linkedin,
      alt: 'LinkedIn'
    },
    frame: frameSquare3
  },
  {
    id: 'instagram',
    type: 'social',
    position: { x: 600, y: 500 },
    size: { width: 80, height: 80 },
    content: { 
      url: 'https://instagram.com/shannon.kao',
      icon: instagram,
      alt: 'Instagram'
    },
    frame: frameSquare1
  }
];

// Helper function to add new gallery items
export const addGalleryItem = (newItem: GalleryItem) => {
  galleryItems.push(newItem);
};

// Helper function to get gallery items by type
export const getGalleryItemsByType = (type: GalleryItem['type']) => {
  return galleryItems.filter(item => item.type === type);
};

// Example of how to add a new item:
/*
addGalleryItem({
  id: 'new-project',
  type: 'photo',
  position: { x: 1000, y: 300 },
  size: { width: 300, height: 200 },
  content: { 
    src: '/path/to/new-image.jpg', 
    alt: 'New Project' 
  },
  frame: frame1
});
*/ 