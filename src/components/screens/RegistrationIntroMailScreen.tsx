import { ChevronRight, ChevronLeft, Shield, Lock, CheckCircle2, UserCheck, HelpCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import myAccountLogo from 'figma:asset/410ea9c9d166fa940bdb6bca126988eb10ac0278.png';
import regHeaderImg from 'figma:asset/f3f82fb93af1b2177d8464ea9850e7d9c259ddc7.png';

interface RegistrationIntroMailScreenProps {
  onStart: () => void;
  onBack: () => void;
  onShowHelp?: () => void;
}

export function RegistrationIntroMailScreen({ onStart, onBack, onShowHelp }: RegistrationIntroMailScreenProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [largeHeaderHeight, setLargeHeaderHeight] = useState<number>(0);
  const [smallHeaderHeight, setSmallHeaderHeight] = useState<number>(0);
  const largeHeaderRef = useRef<HTMLImageElement>(null);
  const smallHeaderRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setIsMounted(true);
    
    // Measure actual header heights from the rendered images
    const measureHeights = () => {
      if (largeHeaderRef.current && smallHeaderRef.current) {
        setLargeHeaderHeight(largeHeaderRef.current.offsetHeight);
        setSmallHeaderHeight(smallHeaderRef.current.offsetHeight);
      }
    };
    
    // Measure after images load
    const largeImg = largeHeaderRef.current;
    const smallImg = smallHeaderRef.current;
    
    if (largeImg?.complete && smallImg?.complete) {
      measureHeights();
    } else {
      largeImg?.addEventListener('load', measureHeights);
      smallImg?.addEventListener('load', measureHeights);
    }
    
    // Start animation after a delay to ensure smooth transition
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 600);
    
    return () => {
      clearTimeout(timer);
      largeImg?.removeEventListener('load', measureHeights);
      smallImg?.removeEventListener('load', measureHeights);
    };
  }, []);

  return (
    <motion.div 
      className="h-full bg-[#f2f2f7] flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: isMounted ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Registration Header - Fixed at top, smoothly slides from large to compact */}
      <motion.div 
        className="flex-shrink-0 bg-white relative overflow-hidden"
        animate={{ 
          height: hasAnimated && smallHeaderHeight > 0 ? smallHeaderHeight : largeHeaderHeight
        }}
        transition={{ duration: 2.5, ease: [0.32, 0.72, 0, 1] }}
      >
        {/* Large header - positioned absolutely, fades out and slides up */}
        <motion.div
          className="absolute top-0 left-0 right-0"
          animate={{ 
            opacity: hasAnimated ? 0 : 1,
            y: hasAnimated ? -30 : 0
          }}
          transition={{ duration: 2, ease: [0.32, 0.72, 0, 1] }}
        >
          <img 
            ref={largeHeaderRef}
            src={myAccountLogo} 
            alt="My Account" 
            className="w-full h-auto block" 
          />
        </motion.div>
        
        {/* Compact header - positioned absolutely, fades in and slides up */}
        <motion.div
          className="absolute top-0 left-0 right-0"
          animate={{ 
            opacity: hasAnimated ? 1 : 0,
            y: hasAnimated ? 0 : 30
          }}
          transition={{ duration: 2, ease: [0.32, 0.72, 0, 1] }}
        >
          <img 
            ref={smallHeaderRef}
            src={regHeaderImg} 
            alt="My Account" 
            className="w-full h-auto block"
          />
        </motion.div>
        
        {/* Help Button - positioned absolutely on the right */}
        {onShowHelp && (
          <button
            onClick={onShowHelp}
            className="absolute top-[23px] right-4 flex items-center gap-1.5 bg-transparent border-0 cursor-pointer hover:opacity-70 active:opacity-50 transition-opacity z-10"
          >
            <HelpCircle className="h-5 w-5 text-[#007AFF]" strokeWidth={2} />
            <span className="text-[#007AFF] text-[15px]">Help</span>
          </button>
        )}
      </motion.div>

      <div className="flex-1 overflow-y-auto px-4 pb-24">

        {/* Sticky Header */}
        <div className="sticky top-0 bg-[#f2f2f7] z-10 mb-6 pt-6 pb-2">
          <div className="flex items-center gap-3 mb-2">
            <button
              onClick={onBack}
              className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={3} />
            </button>
            <h1 className="text-[28px] font-bold text-black m-0">Create your account</h1>
          </div>
          <p className="text-[15px] text-black opacity-80 m-0 mb-0 ml-[42.6px]">
            Before you begin, have your SIN and previous years' tax information ready, as your session will expire after 20 minutes of inactivity.
          </p>
        </div>

        {/* What you'll need */}
        <div className="mb-6">
          <h2 className="text-[22px] font-semibold text-black m-0 mb-4">What you'll need</h2>
          
          <div className="space-y-3">
            <div className="card-ios p-4 flex items-start gap-3 border-l-4 border-[#007AFF]">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-[#007AFF]/10 flex items-center justify-center">
                  <span className="text-[#007AFF] text-[14px]">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-black m-0 mb-1">Personal information</h3>
                <p className="text-[15px] text-black opacity-80 m-0">
                  Social Insurance Number (SIN), full legal name, and date of birth
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
                <h3 className="text-[17px] font-semibold text-black m-0 mb-1">Address verification</h3>
                <p className="text-[15px] text-black opacity-80 m-0">
                  Your current mailing address on file with the Canada Revenue Agency
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
                <h3 className="text-[17px] font-semibold text-black m-0 mb-1">Security setup</h3>
                <p className="text-[15px] text-black opacity-80 m-0">
                  Email address and phone number for account verification
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
                <h3 className="text-[17px] font-semibold text-black m-0 mb-1">Identity verification</h3>
                <p className="text-[15px] text-black opacity-80 m-0">
                  Information from a recent tax return or notice of assessment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Time estimate */}
        <div className="card-ios p-4 bg-[#007AFF]/5 border border-[#007AFF]/20 border-l-4 border-l-[#007AFF]">
          <p className="text-[15px] text-black m-0">
            <span className="font-semibold">Registration time:</span> Approximately 5-10 minutes
          </p>
        </div>
      </div>

      {/* Fixed bottom button */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#c7c7cc] px-4 pt-3 pb-[20px]">
        <button
          onClick={onStart}
          className="btn-filled-ios w-full flex items-center justify-center gap-2"
        >
          <span>Get started</span>
          <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
        </button>
      </div>
    </motion.div>
  );
}