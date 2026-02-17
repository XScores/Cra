import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeaderMaster } from '../HeaderMaster';
import { Check, X, Send, Gift, CreditCard, FileText, Mail, Users, Settings, LogOut, HelpCircle } from 'lucide-react';

interface DashboardLimitedMailScreenProps {
  onNavigateHome?: () => void;
  onLogoClick?: () => void;
  onFileTaxes?: () => void;
  onBenefitsAndCredits?: () => void;
  onMakePayment?: () => void;
  onViewMail?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  hasUnreadMail?: boolean;
  onViewAllBenefits?: () => void;
  onViewRefundDetails?: () => void;
  onViewNoticeOfAssessment?: () => void;
  onGSTHSTCredit?: () => void;
  onAccountDetails?: () => void;
  onProfile?: () => void;
  onViewTaxReturns?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onRemittanceVoucher?: () => void;
}

export function DashboardLimitedMailScreen({ 
  onNavigateHome,
  onLogoClick,
  onFileTaxes,
  onBenefitsAndCredits,
  onMakePayment,
  onViewMail,
  onRegisteredPlans,
  onHelp,
  onSignOut,
  hasUnreadMail = false,
  onViewAllBenefits,
  onViewRefundDetails,
  onViewNoticeOfAssessment,
  onGSTHSTCredit,
  onAccountDetails,
  onProfile,
  onViewTaxReturns,
  onTaxSlips,
  onProofOfIncome,
  onRemittanceVoucher
}: DashboardLimitedMailScreenProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [showPersonalToast, setShowPersonalToast] = useState(false);
  const [showBusinessToast, setShowBusinessToast] = useState(false);
  const [showRepresentativeToast, setShowRepresentativeToast] = useState(false);
  const [lastClickedToast, setLastClickedToast] = useState<'personal' | 'business' | 'representative' | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleVerificationSubmit = () => {
    // If any code is entered, validate and navigate to home
    if (verificationCode.trim().length > 0 && onNavigateHome) {
      onNavigateHome();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleVerificationSubmit();
    }
  };

  return (
    <motion.div 
      className="h-full bg-[#f2f2f7] flex flex-col relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: isMounted ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header - Fixed */}
      <div className="flex-shrink-0">
        <HeaderMaster 
          title="My Account"
          onNavigateHome={onNavigateHome}
          onLogoClick={onLogoClick}
          hasUnreadMail={hasUnreadMail}
          showSearch={true}
          showMenu={true}
          largeTitle={true}
          onPersonalClick={() => {
            setShowPersonalToast(true);
            setLastClickedToast('personal');
          }}
          onBusinessClick={() => {
            setShowBusinessToast(true);
            setLastClickedToast('business');
          }}
          onRepresentativeClick={() => {
            setShowRepresentativeToast(true);
            setLastClickedToast('representative');
          }}
          activeAccountType="personal"
          onFileTaxes={onFileTaxes}
          onViewAllBenefits={onViewAllBenefits || onBenefitsAndCredits}
          onMakePayment={onMakePayment}
          onViewMail={onViewMail}
          onRegisteredPlans={onRegisteredPlans}
          onTaxSlips={onTaxSlips}
          onProofOfIncome={onProofOfIncome}
          onHelp={onHelp}
          onSignOut={onSignOut}
          onViewRefundDetails={onViewRefundDetails}
          onViewNoticeOfAssessment={onViewNoticeOfAssessment}
          onGSTHSTCredit={onGSTHSTCredit}
          onAccountDetails={onAccountDetails}
          onProfile={onProfile}
          onViewTaxReturns={onViewTaxReturns}
        />
      </div>

      {/* Account Type Toasts */}
      <AnimatePresence>
        {showPersonalToast && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`absolute top-[90px] left-0 right-0 px-4 ${lastClickedToast === 'personal' ? 'z-[70]' : 'z-[60]'}`}
          >
            <div className="bg-white rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-hidden border border-[rgba(60,60,67,0.18)] relative">
              <button
                onClick={() => setShowPersonalToast(false)}
                className="absolute top-2 right-2 text-[#8e8e93] hover:text-black bg-transparent border-0 p-1 cursor-pointer transition-colors z-10"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="p-4 pr-10">
                <h3 className="text-[17px] font-semibold text-black m-0 mb-2">Personal account active</h3>
                <p className="text-[15px] text-[#3c3c43] m-0 mb-4 opacity-80">
                  This Personal account allows you to file your taxes, view benefits and credits, and manage and update your individual tax information.
                </p>
                <button
                  onClick={() => {
                    setShowPersonalToast(false);
                  }}
                  className="w-full bg-[#34C759] text-white text-[17px] font-semibold py-3 px-4 rounded-[10px] border-0 cursor-pointer hover:bg-[#2FB04D] active:bg-[#2A9E46] transition-colors flex items-center justify-center"
                >
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBusinessToast && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`absolute top-[90px] left-0 right-0 px-4 ${lastClickedToast === 'business' ? 'z-[70]' : 'z-[60]'}`}
          >
            <div className="bg-white rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-hidden border border-[rgba(60,60,67,0.18)] relative">
              <button
                onClick={() => setShowBusinessToast(false)}
                className="absolute top-2 right-2 text-[#8e8e93] hover:text-black bg-transparent border-0 p-1 cursor-pointer transition-colors z-10"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="p-4 pr-10">
                <h3 className="text-[17px] font-semibold text-black m-0 mb-2">Business Account</h3>
                <p className="text-[15px] text-[#3c3c43] m-0 mb-4 opacity-80">
                  A Business account allows you to manage GST/HST, payroll, and corporate income tax for your business.
                </p>
                <button
                  onClick={() => {
                    setShowBusinessToast(false);
                  }}
                  className="w-full bg-[#34C759] text-white text-[17px] font-semibold py-3 px-4 rounded-[10px] border-0 cursor-pointer hover:bg-[#2FB04D] active:bg-[#2A9E46] transition-colors flex items-center justify-center"
                >
                  Register Your Business
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showRepresentativeToast && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`absolute top-[90px] left-0 right-0 px-4 ${lastClickedToast === 'representative' ? 'z-[70]' : 'z-[60]'}`}
          >
            <div className="bg-white rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-hidden border border-[rgba(60,60,67,0.18)] relative">
              <button
                onClick={() => setShowRepresentativeToast(false)}
                className="absolute top-2 right-2 text-[#8e8e93] hover:text-black bg-transparent border-0 p-1 cursor-pointer transition-colors z-10"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="p-4 pr-10">
                <h3 className="text-[17px] font-semibold text-black m-0 mb-2">Representative Account</h3>
                <p className="text-[15px] text-[#3c3c43] m-0 mb-4 opacity-80">
                  A Representative account allows you to file taxes and manage accounts for family members or clients.
                </p>
                <button
                  onClick={() => {
                    setShowRepresentativeToast(false);
                  }}
                  className="w-full bg-[#34C759] text-white text-[17px] font-semibold py-3 px-4 rounded-[10px] border-0 cursor-pointer hover:bg-[#2FB04D] active:bg-[#2A9E46] transition-colors flex items-center justify-center"
                >
                  Become a Representative
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content - Scrollable */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        <div className="px-4 py-4">
          {/* Welcome Message Section */}
          <div className="mb-4">
            <h2 className="text-[22px] font-semibold text-black m-0 mb-2">Limited Account Access</h2>
          </div>

          {/* Verification Code Entry Card */}
          <div className="card-ios p-4 mb-4">
            <p className="text-[15px] text-black m-0 mb-4 leading-relaxed">
              This is a limited version of your CRA Personal Account. When you receive the code in the mail from the CRA, enter it here to unlock all of the features.
            </p>
            
            <div className="relative mb-4">
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="Enter verification code"
                maxLength={8}
                className="w-full h-11 bg-[#f2f2f7] border border-[#c7c7cc] rounded-[10px] px-3 pr-12 focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] text-[17px] placeholder:text-[#8e8e93]"
                onKeyPress={handleKeyPress}
              />
              <div className={`absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full ${
                verificationCode.trim().length > 0 
                  ? 'bg-[#34C759]' 
                  : 'bg-[#8e8e93] opacity-30'
              }`}>
                <Check className="h-4 w-4 text-white" strokeWidth={3} />
              </div>
            </div>

            {verificationCode.trim().length > 0 && (
              <button
                onClick={handleVerificationSubmit}
                className="btn-filled-ios w-full"
              >
                Continue to My Account
              </button>
            )}
          </div>

          {/* Information Card */}
          <div className="card-ios p-4 bg-[#007AFF]/5 border border-[#007AFF]/20 mb-4">
            <h3 className="text-[17px] font-semibold text-black m-0 mb-3">What you can do now:</h3>
            <ul className="space-y-2 m-0 pl-0 list-none">
              <li className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-0.5 text-[20px] leading-none flex-shrink-0">•</span>
                <button className="text-[15px] text-[#007AFF] text-left bg-transparent border-0 p-0 cursor-pointer hover:opacity-70 active:opacity-50 transition-opacity underline">
                  View status of tax return
                </button>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-0.5 text-[20px] leading-none flex-shrink-0">•</span>
                <button className="text-[15px] text-[#007AFF] text-left bg-transparent border-0 p-0 cursor-pointer hover:opacity-70 active:opacity-50 transition-opacity underline">
                  View RRSP deduction limit and TFSA contribution room
                </button>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-0.5 text-[20px] leading-none flex-shrink-0">•</span>
                <button className="text-[15px] text-[#007AFF] text-left bg-transparent border-0 p-0 cursor-pointer hover:opacity-70 active:opacity-50 transition-opacity underline">
                  View notice of assessment or reassessment
                </button>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-0.5 text-[20px] leading-none flex-shrink-0">•</span>
                <button 
                  onClick={onRemittanceVoucher}
                  className="text-[15px] text-[#007AFF] text-left bg-transparent border-0 p-0 cursor-pointer hover:opacity-70 active:opacity-50 transition-opacity underline"
                >
                  Request a remittance voucher
                </button>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-0.5 text-[20px] leading-none flex-shrink-0">•</span>
                <button className="text-[15px] text-[#007AFF] text-left bg-transparent border-0 p-0 cursor-pointer hover:opacity-70 active:opacity-50 transition-opacity underline">
                  Pay by pre-authorized debit (create new agreement)
                </button>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-0.5 text-[20px] leading-none flex-shrink-0">•</span>
                <button className="text-[15px] text-[#007AFF] text-left bg-transparent border-0 p-0 cursor-pointer hover:opacity-70 active:opacity-50 transition-opacity underline">
                  Set notification preferences
                </button>
              </li>
            </ul>
          </div>

          {/* Waiting Period Card */}
          <div className="card-ios p-4">
            <h3 className="text-[17px] font-semibold text-black m-0 mb-2">Expected delivery time</h3>
            <p className="text-[15px] text-black opacity-80 m-0">
              Your verification code will arrive by mail within <span className="font-semibold">10 business days</span>. 
              If you don't receive it after this time, please contact CRA support.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}