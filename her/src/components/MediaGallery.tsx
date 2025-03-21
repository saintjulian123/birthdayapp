// MediaGallery.tsx
import { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import Modal from './Modal';

interface MediaItem {
  src: string;
  type: 'video' | 'image';
}

interface MediaGalleryProps {
  mediaItems: MediaItem[];
  title: string;
}

export default function MediaGallery({ mediaItems, title }: MediaGalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialIndex, setModalInitialIndex] = useState<number>(0);

  const openModal = (index: number) => {
    if (mediaItems && mediaItems.length > 0) {
      setModalInitialIndex(index);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalInitialIndex(0);
  };

  if (!mediaItems || mediaItems.length === 0) {
    return (
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-pink-800">{title}</h2>
        <p>No media items available.</p>
      </main>
    );
  }

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-pink-800">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mediaItems.map((item, index) => (
          item.type === 'video' ? (
            <div
              key={index}
              className="w-full h-96 cursor-pointer" // Increased height to h-96 for videos
              onClick={() => openModal(index)}
            >
              <VideoPlayer src={item.src} disableInteraction={true} />
            </div>
          ) : (
            <img
              key={index}
              src={item.src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-48 object-contain rounded-xl cursor-pointer" // Kept images at h-48
              onClick={() => openModal(index)}
            />
          )
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        mediaItems={mediaItems}
        initialIndex={modalInitialIndex}
      />
    </main>
  );
}