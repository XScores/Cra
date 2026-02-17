import { ChevronRight, ChevronLeft, CheckCircle2, CreditCard, Building2, Smartphone, Camera, Clock, HelpCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import regHeaderImg from 'figma:asset/f3f82fb93af1b2177d8464ea9850e7d9c259ddc7.png';

interface RegistrationMethodChoiceScreenProps {
  onSelectMethod: (method: string, usePhotoID: boolean) => void;
  onBack: () => void;
  onShowSignInPartnerInfo?: () => void;
  onShowHelp?: () => void;
}

export function RegistrationMethodChoiceScreen({ onSelectMethod, onBack, onShowSignInPartnerInfo, onShowHelp }: RegistrationMethodChoiceScreenProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [usePhotoIDVerification, setUsePhotoIDVerification] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const registrationMethods = [
    {
      id: 'online',
      title: 'Online Registration',
      icon: Smartphone,
      description: 'Register using your personal information',
      requirements: [
        'Social Insurance Number (SIN)',
        'Information from a recent tax return',
        'Valid email address and phone number'
      ]
    },
    {
      id: 'bank',
      title: 'Sign-In Partner',
      icon: Building2,
      description: 'Use your online banking credentials',
      requirements: [
        'Account with a participating bank',
        'Online banking username and password',
        'No CRA security code required'
      ]
    },
    {
      id: 'provincial',
      title: 'Provincial Sign-In Partner',
      icon: CreditCard,
      description: 'Available only for British Columbia and Alberta.',
      requirements: [
        'Provincial government account',
        'Valid credentials for your province'
      ]
    }
  ];

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
              className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0 mt-[2px]"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={3} />
            </button>
            <h1 className="text-[28px] font-bold text-black m-0">Registration methods</h1>
          </div>
          <p className="text-[15px] text-black opacity-80 m-0 ml-[42.6px]">
            Select how you'd like to create your CRA My Account. Each method has different requirements.
          </p>
        </div>

        {/* Registration Methods */}
        <div className="space-y-3">
          {registrationMethods.map((method) => {
            const Icon = method.icon;
            return (
              <button
                key={method.id}
                onClick={() => {
                  if (method.id === 'bank' && onShowSignInPartnerInfo) {
                    onShowSignInPartnerInfo();
                  } else {
                    onSelectMethod(method.id, usePhotoIDVerification);
                  }
                }}
                className="w-full card-ios p-4 text-left hover:bg-[#f9f9f9] active:bg-[#ebebeb] transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <Icon className="h-6 w-6 text-[#007AFF]" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-[17px] font-semibold text-black m-0">
                        {method.title}
                      </h3>
                      <div className="chevron-button-ios">
                        <ChevronRight />
                      </div>
                    </div>
                    <p className="text-[15px] text-black opacity-80 m-0 mb-3">
                      {method.description}
                    </p>
                  </div>
                </div>
                
                {/* Requirements */}
                <div className="pl-[36px]">
                  <p className="text-[13px] text-black opacity-60 m-0 mb-2 font-semibold">
                    You'll need:
                  </p>
                  <ul className="list-none pl-0 m-0 space-y-1">
                    {method.requirements.map((req, index) => (
                      <li key={index} className="text-[13px] text-black opacity-80 flex items-start gap-2">
                        <span className="text-[#34C759] mt-0.5 flex-shrink-0">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </button>
            );
          })}
        </div>

        {/* Info box */}
        <div className="card-ios p-4 bg-[#007AFF]/5 border border-[#007AFF]/20 border-l-4 border-l-[#007AFF] mt-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" strokeWidth={2} />
            <div>
              <p className="text-[15px] text-black m-0">
                <span className="font-semibold">All methods are secure.</span> Choose the option that works best for you based on what you have available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}