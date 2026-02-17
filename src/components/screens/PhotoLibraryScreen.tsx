import { useState } from 'react';
import { motion } from 'motion/react';
import photoLibraryImg from 'figma:asset/560622d990ba0012425689469c82b6217a137d37.png';
import selectedPhotoImg from 'figma:asset/2a83eae2182e2d30347a7afa0e4be27f0bd84bd7.png';
import readyToSendImg from 'figma:asset/8454d210fbe960a7f57daca2d4b124b6921eb1b3.png';

interface PhotoLibraryScreenProps {
  onBack: () => void;
  onSelect: () => void;
}

export function PhotoLibraryScreen({ onBack, onSelect }: PhotoLibraryScreenProps) {
  const [screenState, setScreenState] = useState<'library' | 'selected' | 'readyToSend'>('library');

  const handleLibraryClick = () => {
    if (screenState === 'library') {
      setScreenState('selected');
    } else if (screenState === 'selected') {
      setScreenState('readyToSend');
    }
  };

  const getCurrentImage = () => {
    switch (screenState) {
      case 'library':
        return photoLibraryImg;
      case 'selected':
        return selectedPhotoImg;
      case 'readyToSend':
        return readyToSendImg;
      default:
        return photoLibraryImg;
    }
  };

  return (
    <motion.div 
      className="h-full bg-black flex flex-col relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Full-screen photo library image */}
      <img 
        src={getCurrentImage()}
        alt="iPhone Photo Library" 
        className="w-full h-full object-cover"
      />

      {screenState === 'readyToSend' ? (
        // Ready to send state - click anywhere to go back to ID photo screen with photo captured
        <div
          onClick={onSelect}
          className="absolute inset-0 cursor-pointer"
          style={{ zIndex: 10 }}
        />
      ) : (
        // Library or Selected state - click anywhere to advance
        <div
          onClick={handleLibraryClick}
          className="absolute inset-0 cursor-pointer"
          style={{ zIndex: 10 }}
        />
      )}
    </motion.div>
  );
}