// Modal.tsx
import { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';

interface MediaItem {
  src: string;
  type: 'video' | 'image';
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  mediaItems: MediaItem[];
  initialIndex: number;
}

export default function Modal({ isOpen, onClose, mediaItems, initialIndex }: ModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Reset currentIndex when the modal opens or initialIndex changes
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  if (!isOpen) return null;

  // Ensure mediaItems is not empty and currentIndex is valid
  if (!mediaItems || mediaItems.length === 0 || currentIndex < 0 || currentIndex >= mediaItems.length) {
    return null;
  }

  const currentMedia = mediaItems[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      {/* Modal Content */}
      <div className="relative w-[56%] max-w-xl p-4"> {/* Set width to 56% using Tailwind CSS v4 arbitrary value */}
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Content (Video or Image) */}
        {currentMedia.type === 'video' ? (
          <div className="w-full">
            <VideoPlayer src={currentMedia.src} />
          </div>
        ) : (
          <img src={currentMedia.src} alt="Enlarged view" className="w-full h-auto rounded-xl" />
        )}
      </div>
    </div>
  );
}