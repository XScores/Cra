import { CheckCircle2, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import myAccountLogo from 'figma:asset/410ea9c9d166fa940bdb6bca126988eb10ac0278.png';

interface RegistrationSuccessScreenProps {
  onContinue: () => void;
  verificationType?: 'instant' | 'mail';
}

export function RegistrationSuccessScreen({ onContinue, verificationType }: RegistrationSuccessScreenProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div 
      className="h-full bg-[#f2f2f7] flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: isMounted ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-1 overflow-y-auto px-4 pb-24 flex flex-col items-center justify-center">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            delay: 0.2 
          }}
          className="mb-6 mt-12"
        >
          <div className="relative">
            {/* Checkmark Circle */}
            <div className="bg-[#28a745] rounded-full p-5 shadow-lg">
              <CheckCircle2 className="h-[51px] w-[51px] text-white" strokeWidth={2.5} />
            </div>
            
            {/* Success Ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 0 }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeOut"
              }}
              className="absolute inset-0 border-4 border-[#28a745] rounded-full"
            />
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-8"
        >
          <h1 className="text-[28px] font-bold text-black m-0 mb-3">Registration complete!</h1>
          <p className="text-[17px] text-black opacity-80 m-0 mb-2">
            Your CRA My Account has been successfully created.
          </p>
          <p className="text-[15px] text-black opacity-60 m-0">
            You can now sign in and access your tax and benefit information.
          </p>
        </motion.div>

        {/* Welcome Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card-ios p-6 w-full max-w-sm"
        >
          <div className="text-center mb-4">
            <img src={myAccountLogo} alt="My Account" className="w-32 h-auto mx-auto" />
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-[#f2f2f7] rounded-[8px]">
              <div className="flex-shrink-0 mt-0.5">
                <div className="h-6 w-6 rounded-full bg-[#007AFF] flex items-center justify-center">
                  <span className="text-white text-[13px] font-semibold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-black m-0 mb-1">View your tax information</h3>
                <p className="text-[13px] text-black opacity-60 m-0">
                  Access returns, notices, and statements
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-[#f2f2f7] rounded-[8px]">
              <div className="flex-shrink-0 mt-0.5">
                <div className="h-6 w-6 rounded-full bg-[#007AFF] flex items-center justify-center">
                  <span className="text-white text-[13px] font-semibold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-black m-0 mb-1">Track benefits and credits</h3>
                <p className="text-[13px] text-black opacity-60 m-0">
                  Monitor payments and eligibility
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-[#f2f2f7] rounded-[8px]">
              <div className="flex-shrink-0 mt-0.5">
                <div className="h-6 w-6 rounded-full bg-[#007AFF] flex items-center justify-center">
                  <span className="text-white text-[13px] font-semibold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-black m-0 mb-1">Manage your account</h3>
                <p className="text-[13px] text-black opacity-60 m-0">
                  Update personal and banking details
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fixed bottom button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#c7c7cc] px-4 pt-3 pb-[20px]"
      >
        <button
          onClick={onContinue}
          className="btn-filled-ios w-full mb-3 flex items-center justify-center gap-2"
        >
          <span>{verificationType === 'mail' ? 'Proceed to your account' : 'Sign in to your account'}</span>
          <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
        </button>
      </motion.div>
    </motion.div>
  );
}