import { Camera, ChevronLeft, Check, AlertCircle, ImagePlus, HelpCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import regHeaderImg from 'figma:asset/f3f82fb93af1b2177d8464ea9850e7d9c259ddc7.png';
import licenseImage from 'figma:asset/226dacabf2ad6526e89bf62aaa713f50dec7fc46.png';

interface RegistrationIDPhotoScreenProps {
  onContinue: () => void;
  onBack: () => void;
  onShowHelp?: () => void;
  onChooseFromLibrary?: () => void;
  startWithPhotoCaptured?: boolean;
}

export function RegistrationIDPhotoScreen({ onContinue, onBack, onShowHelp, onChooseFromLibrary, startWithPhotoCaptured = false }: RegistrationIDPhotoScreenProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [showLicense, setShowLicense] = useState(startWithPhotoCaptured);
  const [shouldShrink, setShouldShrink] = useState(startWithPhotoCaptured);
  const [photoTaken, setPhotoTaken] = useState(startWithPhotoCaptured);

  useEffect(() => {
    setIsMounted(true);
    
    // Skip animation if we're starting with photo captured
    if (startWithPhotoCaptured) {
      return;
    }
    
    // After 1.5 seconds, slide in the license
    const timer = setTimeout(() => {
      setShowLicense(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [startWithPhotoCaptured]);

  useEffect(() => {
    if (showLicense) {
      // After 2 seconds of wobble animation, shrink it to fit the frame
      const shrinkTimer = setTimeout(() => {
        setShouldShrink(true);
      }, 2000);

      return () => clearTimeout(shrinkTimer);
    }
  }, [showLicense]);

  const handleTakePhoto = () => {
    // Freeze the license and show checkmark
    setPhotoTaken(true);
  };

  return (
    <motion.div 
      className="h-full bg-[#f2f2f7] flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: isMounted ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Registration Header - Fixed at top */}
      <div className="flex-shrink-0 relative">
        <img 
          src={regHeaderImg} 
          alt="My Account" 
          className="w-full h-auto block"
          style={{ objectFit: 'cover' }}
        />
        {/* Help Button */}
        {onShowHelp && (
          <button
            onClick={onShowHelp}
            className="absolute top-[23px] right-4 flex items-center gap-1.5 bg-transparent border-0 cursor-pointer hover:opacity-70 active:opacity-50 transition-opacity z-10"
          >
            <HelpCircle className="h-5 w-5 text-[#007AFF]" strokeWidth={2} />
            <span className="text-[#007AFF] text-[15px]">Help</span>
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-24">
        {/* Sticky Header */}
        <div className="sticky top-0 bg-[#f2f2f7] z-10 mb-6 pt-6 pb-2">
          <div className="flex items-start gap-3 mb-2">
            <button
              onClick={onBack}
              className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0 mt-[3px]"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={3} />
            </button>
            <h1 className="text-[28px] font-bold text-black m-0 leading-[34px]">Take a photo of your ID</h1>
          </div>
          <p className="text-[15px] text-black opacity-80 m-0 ml-[42.6px]">
            Position your government-issued photo ID within the frame and take a clear photo.
          </p>
        </div>

        {/* Camera viewfinder */}
        <div className="mb-6">
          <div className="relative rounded-[20px] overflow-hidden bg-black aspect-[3/2]">
            {/* Camera preview background - dark with subtle noise */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
              {!showLicense && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="h-16 w-16 text-white/40 mx-auto mb-3" strokeWidth={1.5} />
                    <p className="text-white/60 text-[15px] m-0">Camera preview</p>
                  </div>
                </div>
              )}
            </div>

            {/* License image sliding in with wobble animation */}
            {showLicense && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center p-4"
                initial={{ y: 100, opacity: 0, scale: 1 }}
                animate={photoTaken ? {
                  y: 0,
                  opacity: 1,
                  rotate: 0,
                  scale: 0.75
                } : shouldShrink ? {
                  y: 0,
                  opacity: 1,
                  rotate: 0,
                  scale: 0.75
                } : {
                  y: 0,
                  opacity: 1,
                  rotate: [0, 2, -2, 2, -2, 2, -2, 1, -1, 0],
                  scale: 1
                }}
                transition={photoTaken ? {
                  duration: 0.3
                } : shouldShrink ? {
                  scale: { duration: 0.5, ease: "easeOut" },
                  rotate: { duration: 0.3 }
                } : {
                  y: { duration: 0.5, ease: "easeOut" },
                  opacity: { duration: 0.5 },
                  rotate: {
                    repeat: Infinity,
                    duration: 1,
                    ease: "easeInOut"
                  }
                }}
              >
                <img 
                  src={licenseImage} 
                  alt="Driver's License" 
                  className="w-full h-auto max-h-full object-contain rounded-lg"
                  style={{
                    filter: photoTaken ? 'none' : shouldShrink ? 'none' : 'blur(0.3px)'
                  }}
                />
              </motion.div>
            )}

            {/* ID card frame overlay */}
            <div className="absolute inset-8 border-2 border-white/50 border-dashed rounded-lg pointer-events-none"></div>

            {/* Photo captured overlay */}
            {photoTaken && (
              <motion.div 
                className="absolute inset-0 bg-black/40 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-[#34C759] flex items-center justify-center mx-auto mb-3"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Check className="h-8 w-8 text-white" strokeWidth={3} />
                  </motion.div>
                  <p className="text-white text-[15px] m-0 font-semibold">Photo captured</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Tips for best results */}
        <div className="mb-6">
          <h2 className="text-[22px] font-semibold text-black m-0 mb-4">Tips for best results</h2>
          
          <div className="space-y-3">
            <div className="card-ios p-4 flex items-start gap-3 border-l-4 border-[#007AFF]">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-[#007AFF]/10 flex items-center justify-center">
                  <span className="text-[#007AFF] text-[14px]">1</span>
                </div>
              </div>
              <div>
                <p className="text-[15px] text-black m-0">
                  Ensure your ID is placed on a flat, contrasting surface
                </p>
              </div>
            </div>

            <div className="card-ios p-4 flex items-start gap-3 border-l-4 border-[#007AFF]">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-[#007AFF]/10 flex items-center justify-center">
                  <span className="text-[#007AFF] text-[14px]">2</span>
                </div>
              </div>
              <div>
                <p className="text-[15px] text-black m-0">
                  Make sure all text and photo on your ID are clearly visible
                </p>
              </div>
            </div>

            <div className="card-ios p-4 flex items-start gap-3 border-l-4 border-[#007AFF]">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-[#007AFF]/10 flex items-center justify-center">
                  <span className="text-[#007AFF] text-[14px]">3</span>
                </div>
              </div>
              <div>
                <p className="text-[15px] text-black m-0">
                  Avoid glare and shadows by using good lighting
                </p>
              </div>
            </div>

            <div className="card-ios p-4 flex items-start gap-3 border-l-4 border-[#007AFF]">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-[#007AFF]/10 flex items-center justify-center">
                  <span className="text-[#007AFF] text-[14px]">4</span>
                </div>
              </div>
              <div>
                <p className="text-[15px] text-black m-0">
                  Keep your iPhone steady and parallel to your ID
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Acceptable ID types reminder */}
        <div className="card-ios p-4 bg-[#007AFF]/5 border-l-4 border-[#007AFF]">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" strokeWidth={2} />
            <div>
              <p className="text-[15px] text-black m-0">
                <span className="font-semibold">Acceptable ID:</span> Canadian passport, driver's license, or provincial photo ID card
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed bottom buttons */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#d1d1d6] px-4 pt-3 pb-[20px]">
        {!photoTaken ? (
          <>
            <button
              onClick={handleTakePhoto}
              className="btn-filled-ios w-full mb-3 flex items-center justify-center gap-2"
            >
              <Camera className="h-5 w-5" strokeWidth={2.5} />
              <span>Take photo</span>
            </button>
            
            <button
              onClick={onChooseFromLibrary}
              className="w-full flex items-center justify-center gap-2 text-[#007AFF] bg-transparent border border-[#007AFF] rounded-[12px] px-4 py-3 cursor-pointer hover:opacity-70 active:opacity-50 transition-opacity"
            >
              <ImagePlus className="h-5 w-5" strokeWidth={2.5} />
              <span className="text-[17px]">Choose from library</span>
            </button>
          </>
        ) : (
          <>
            <button
              onClick={onContinue}
              className="btn-filled-ios w-full mb-3 flex items-center justify-center gap-2"
            >
              <span>Continue</span>
              <Check className="h-5 w-5" strokeWidth={2.5} />
            </button>
            
            <button
              onClick={() => setPhotoTaken(false)}
              className="w-full flex items-center justify-center gap-2 text-[#007AFF] bg-transparent border border-[#007AFF] rounded-[12px] px-4 py-3 cursor-pointer hover:opacity-70 active:opacity-50 transition-opacity"
            >
              <Camera className="h-5 w-5" strokeWidth={2.5} />
              <span className="text-[17px]">Retake photo</span>
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
}