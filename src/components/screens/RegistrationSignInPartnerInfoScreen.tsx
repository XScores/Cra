import { ChevronRight, ChevronLeft, Shield, Building2, Info, HelpCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import regHeaderImg from 'figma:asset/f3f82fb93af1b2177d8464ea9850e7d9c259ddc7.png';
import { TDSignInPartnerScreen } from './TDSignInPartnerScreen';

interface RegistrationSignInPartnerInfoScreenProps {
  onBack: () => void;
  onSelectBank: (bankName: string) => void;
  onShowPrivacy?: () => void;
  onShowTerms?: () => void;
  onShowHelp?: () => void;
}

const SIGNIN_PARTNERS = [
  'Affinity Credit Union',
  'ATB Financial',
  'BMO Financial Group',
  'Caisse Alliance',
  'CIBC Canadian Imperial Bank of Commerce',
  'Coast Capital Savings',
  'connectFirst Credit Union',
  'Conexus Credit Union',
  'Desjardins Group (Caisses Populaires)',
  'Libro',
  'Meridian Credit Union',
  'National Bank of Canada',
  'RBC Royal Bank',
  'Scotiabank',
  'Servus Credit Union',
  'Simplii Financial',
  'Steinbach Credit Union',
  'Tangerine',
  'TD Bank Group',
  'UNI',
  'Vancity',
  'Wealthsimple',
];

export function RegistrationSignInPartnerInfoScreen({ onBack, onSelectBank, onShowPrivacy, onShowTerms, onShowHelp }: RegistrationSignInPartnerInfoScreenProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [showTDSignIn, setShowTDSignIn] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // If TD Sign-In screen is active, show it
  if (showTDSignIn) {
    return (
      <TDSignInPartnerScreen
        onCancel={() => setShowTDSignIn(false)}
        onLoginSuccess={() => {
          setShowTDSignIn(false);
          onSelectBank('TD Bank Group');
        }}
      />
    );
  }

  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      {/* Registration Header - Fixed at top */}
      <div className="flex-shrink-0 relative sticky top-0 z-10">
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

      {/* Page Title - Sticky below header */}
      <div className="flex-shrink-0 sticky top-[73px] z-10 bg-[#f2f2f7] px-4 pt-6 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0">Sign-In Partner</h1>
        </div>
        <p className="text-[15px] text-black opacity-80 m-0 ml-[42.6px]">
          Choose your financial institution to continue
        </p>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 overflow-y-auto px-4 pb-6">
        {/* Privacy Information Cards */}
        <div className="space-y-3 mb-6">
          {/* Banking Privacy Card */}
          <div className="card-ios p-4 border-l-4 border-[#007AFF]">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <p className="text-[15px] text-black m-0">
                  Your banking information and the identity of your financial institution are not shared with the Government of Canada.
                </p>
              </div>
            </div>
          </div>

          {/* Tax Information Privacy Card */}
          <div className="card-ios p-4 border-l-4 border-[#28a745]">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-[#28a745] flex-shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <p className="text-[15px] text-black m-0">
                  None of your personal tax information will be shared with your financial institution.
                </p>
              </div>
            </div>
          </div>

          {/* Requirement Card */}
          <div className="card-ios p-4 border-l-4 border-[#ff9500]">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-[#ff9500] flex-shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <p className="text-[15px] text-black m-0">
                  You must have an online account with one of our Sign-In Partners shown below:
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="mb-4">
          <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Available Sign-In Partners</h2>
        </div>

        {/* Partners List - Clickable */}
        <div className="card-ios overflow-hidden mb-4">
          {SIGNIN_PARTNERS.map((partner, index) => (
            <div key={partner}>
              <button
                onClick={() => {
                  if (partner === 'TD Bank Group') {
                    setShowTDSignIn(true);
                  } else {
                    onSelectBank(partner);
                  }
                }}
                className="w-full px-4 py-3.5 flex items-center justify-between gap-3 bg-transparent border-0 cursor-pointer hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left"
              >
                <div className="flex items-center gap-3 flex-1">
                  <Building2 className="h-5 w-5 text-[#007AFF] flex-shrink-0" strokeWidth={2} />
                  <span className="text-[17px] text-black">{partner}</span>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </button>
              {index < SIGNIN_PARTNERS.length - 1 && (
                <div className="border-b border-[#c7c7cc] ml-[52px]" />
              )}
            </div>
          ))}
        </div>

        {/* Help Text */}
        <div className="card-ios p-4 mb-4">
          <p className="text-[15px] text-black m-0">
            Contact your bank for assistance with registering for online banking.
          </p>
        </div>

        {/* Privacy Link */}
        <div className="card-ios p-4 bg-[#f9f9f9]">
          <p className="text-[15px] text-black m-0">
            Learn more about our commitment to your privacy:{' '}
            <button 
              onClick={onShowPrivacy}
              className="text-[#007AFF] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity"
            >
              Privacy Statement
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}