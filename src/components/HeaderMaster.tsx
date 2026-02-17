import { useState, useEffect } from 'react';
import { HeaderIOS } from './HeaderIOS';
import { HamburgerMenu } from './HamburgerMenu';
import { SearchMenu } from './SearchMenu';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut, X, MessageSquare } from 'lucide-react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface HeaderMasterProps {
  // Display configuration
  title?: string;
  showBackButton?: boolean;
  largeTitle?: boolean;
  showSearch?: boolean;
  showMenu?: boolean;
  
  // Navigation handlers
  onBack?: () => void;
  onNavigateHome?: () => void;
  onLogoClick?: () => void;
  
  // Menu item handlers
  onFileTaxes?: () => void;
  onViewAllBenefits?: () => void;
  onMakePayment?: () => void;
  onViewMail?: () => void;
  onRegisteredPlans?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onBecomeRepresentative?: () => void;
  onBecomeRepresentativeAsRep?: () => void; // New handler for becoming a rep
  onUserFeedback?: () => void;
  
  // Search navigation handlers
  onViewRefundDetails?: () => void;
  onViewNoticeOfAssessment?: () => void;
  onGSTHSTCredit?: () => void;
  onAccountDetails?: () => void;
  onProfile?: () => void;
  onViewTaxReturns?: () => void;
  onHomeBuyersPlan?: () => void;
  onFHSAEligibility?: () => void;
  onLifelongLearningPlan?: () => void;
  onCustomize?: () => void;
  onUncashedCheques?: () => void;
  onRemittanceVoucher?: () => void;
  onCPPEIRuling?: () => void;
  onAuditEnquiries?: () => void;
  onCarryoverAmounts?: () => void;
  onChangeMyReturn?: () => void;
  onRegisterFormalDispute?: () => void;
  onNonResidentAccount?: () => void;
  onResidencyDetermination?: () => void;
  onPersonalIdentificationNumber?: () => void;
  onProgressTrackerService?: () => void;
  onReliefOfPenalties?: () => void;
  onSubmitDocuments?: () => void;
  
  // Account switching handlers (for dashboard large header)
  onPersonalClick?: () => void;
  onBusinessClick?: () => void;
  onRepresentativeClick?: () => void;
  activeAccountType?: 'personal' | 'business' | 'representative';
  
  // Custom menu items (for customized dashboard)
  customMenuItems?: any[];
  
  // Other props
  hasUnreadMail?: boolean;
}

export function HeaderMaster({
  title = 'My Account',
  showBackButton = false,
  largeTitle = false,
  showSearch = true,
  showMenu = true,
  onBack,
  onNavigateHome,
  onLogoClick,
  onFileTaxes,
  onViewAllBenefits,
  onMakePayment,
  onViewMail,
  onRegisteredPlans,
  onTaxSlips,
  onProofOfIncome,
  onHelp,
  onSignOut,
  onBecomeRepresentative,
  onBecomeRepresentativeAsRep, // New handler for becoming a rep
  onUserFeedback,
  onViewRefundDetails,
  onViewNoticeOfAssessment,
  onGSTHSTCredit,
  onAccountDetails,
  onProfile,
  onViewTaxReturns,
  onHomeBuyersPlan,
  onFHSAEligibility,
  onLifelongLearningPlan,
  onCustomize,
  onUncashedCheques,
  onRemittanceVoucher,
  onCPPEIRuling,
  onAuditEnquiries,
  onCarryoverAmounts,
  onChangeMyReturn,
  onRegisterFormalDispute,
  onNonResidentAccount,
  onResidencyDetermination,
  onPersonalIdentificationNumber,
  onProgressTrackerService,
  onReliefOfPenalties,
  onSubmitDocuments,
  onPersonalClick,
  onBusinessClick,
  onRepresentativeClick,
  activeAccountType = 'personal',
  customMenuItems,
  hasUnreadMail = false
}: HeaderMasterProps) {
  const [showMenuDrawer, setShowMenuDrawer] = useState(false);
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [showPersonalToast, setShowPersonalToast] = useState(false);
  const [showBusinessToast, setShowBusinessToast] = useState(false);
  const [showRepresentativeToast, setShowRepresentativeToast] = useState(false);
  const [showKeypad, setShowKeypad] = useState(false);
  const [businessNumber, setBusinessNumber] = useState('');
  const [businessConfirmationStep, setBusinessConfirmationStep] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState('');
  const [lastClickedToast, setLastClickedToast] = useState<'personal' | 'business' | 'representative' | null>(null);
  
  const toggleMenuDrawer = () => setShowMenuDrawer(!showMenuDrawer);

  // Default menu items
  const defaultMenuItems = [
    { icon: Send, label: 'File taxes', id: 'file-taxes', type: 'lucide' as const, onClick: () => { setShowMenuDrawer(false); if (onFileTaxes) onFileTaxes(); } },
    { icon: Gift, label: 'Benefits and credits', id: 'benefits-credits', type: 'lucide' as const, onClick: () => { setShowMenuDrawer(false); if (onViewAllBenefits) onViewAllBenefits(); } },
    { icon: CreditCard, label: 'Make a payment', id: 'make-payment', type: 'lucide' as const, onClick: () => { setShowMenuDrawer(false); if (onMakePayment) onMakePayment(); } },
    { icon: Mail, label: 'CRA mail', id: 'mail', type: 'lucide' as const, onClick: () => { setShowMenuDrawer(false); if (onViewMail) onViewMail(); } },
    { icon: null, label: 'Registered plans', id: 'registered-plans', type: 'image' as const, imageSrc: mapleLeafIcon, onClick: () => { setShowMenuDrawer(false); if (onRegisteredPlans) onRegisteredPlans(); } },
    { icon: Receipt, label: 'Tax slips and documents', id: 'tax-slips', type: 'lucide' as const, onClick: () => { setShowMenuDrawer(false); if (onTaxSlips) onTaxSlips(); } },
    { icon: FileCheck, label: 'Proof of income', id: 'proof-income', type: 'lucide' as const, onClick: () => { setShowMenuDrawer(false); if (onProofOfIncome) onProofOfIncome(); } },
    { icon: HelpCircle, label: 'Help and support', id: 'help', type: 'lucide' as const, onClick: () => { setShowMenuDrawer(false); if (onHelp) onHelp(); } },
    { icon: MessageSquare, label: 'User feedback', id: 'user-feedback', type: 'lucide' as const, onClick: () => { setShowMenuDrawer(false); if (onUserFeedback) onUserFeedback(); } },
    { icon: LogOut, label: 'Sign out and exit', id: 'sign-out', type: 'lucide' as const, onClick: () => { setShowMenuDrawer(false); if (onSignOut) onSignOut(); }, danger: true },
  ];

  // Function to get handler for menu item ID
  function getHandlerForId(id: string) {
    switch(id) {
      case 'file-taxes': return () => { setShowMenuDrawer(false); if (onFileTaxes) onFileTaxes(); };
      case 'benefits-credits': return () => { setShowMenuDrawer(false); if (onViewAllBenefits) onViewAllBenefits(); };
      case 'make-payment': return () => { setShowMenuDrawer(false); if (onMakePayment) onMakePayment(); };
      case 'mail': return () => { setShowMenuDrawer(false); if (onViewMail) onViewMail(); };
      case 'registered-plans': return () => { setShowMenuDrawer(false); if (onRegisteredPlans) onRegisteredPlans(); };
      case 'tax-slips': return () => { setShowMenuDrawer(false); if (onTaxSlips) onTaxSlips(); };
      case 'proof-income': return () => { setShowMenuDrawer(false); if (onProofOfIncome) onProofOfIncome(); };
      case 'help': return () => { setShowMenuDrawer(false); if (onHelp) onHelp(); };
      case 'user-feedback': return () => { setShowMenuDrawer(false); if (onUserFeedback) onUserFeedback(); };
      case 'sign-out': return () => { setShowMenuDrawer(false); if (onSignOut) onSignOut(); };
      default: return undefined;
    }
  }

  // IDs that must always be visible in the menu
  const alwaysVisibleIds = ['make-payment', 'proof-income', 'help', 'sign-out'];

  // Use custom menu items if provided and has items, otherwise use default
  let menuItems;
  if (customMenuItems && customMenuItems.length > 0) {
    // Force always-visible items to be visible, then filter and map
    const processedItems = customMenuItems.map(item => ({
      ...item,
      visible: alwaysVisibleIds.includes(item.id) ? true : item.visible
    }));
    
    menuItems = processedItems
      .filter(item => item.visible)
      .map(item => ({
        ...item,
        onClick: getHandlerForId(item.id)
      }));
  } else {
    menuItems = defaultMenuItems;
  }

  // Disable body scroll when menu is open
  useEffect(() => {
    if (showMenuDrawer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showMenuDrawer]);

  // Internal handlers for account switching - always show toasts
  const handlePersonalClick = () => {
    // Close other toasts
    setShowBusinessToast(false);
    setShowRepresentativeToast(false);
    setShowKeypad(false);
    // Show personal toast
    setShowPersonalToast(true);
    setLastClickedToast('personal');
    // Call external handler if provided
    if (onPersonalClick) onPersonalClick();
  };

  const handleBusinessClick = () => {
    // Close other toasts
    setShowPersonalToast(false);
    setShowRepresentativeToast(false);
    // Show business toast
    setShowBusinessToast(true);
    setLastClickedToast('business');
    // Call external handler if provided
    if (onBusinessClick) onBusinessClick();
  };

  const handleRepresentativeClick = () => {
    // Close other toasts
    setShowPersonalToast(false);
    setShowBusinessToast(false);
    setShowKeypad(false);
    // Show representative toast
    setShowRepresentativeToast(true);
    setLastClickedToast('representative');
    // Call external handler if provided
    if (onRepresentativeClick) onRepresentativeClick();
  };

  // Handle keypad number press
  const handleKeypadPress = (num: string) => {
    if (businessNumber.length < 9) {
      setBusinessNumber(businessNumber + num);
    }
  };

  // Handle keypad delete
  const handleKeypadDelete = () => {
    setBusinessNumber(businessNumber.slice(0, -1));
  };

  return (
    <div className="relative">
      <div className="flex-shrink-0">
        <HeaderIOS 
          title={title}
          showBackButton={showBackButton}
          onBack={onBack}
          onNavigateHome={onNavigateHome}
          onLogoClick={onLogoClick}
          hasUnreadMail={hasUnreadMail}
          onMenuClick={toggleMenuDrawer}
          showSearch={showSearch}
          showMenu={showMenu}
          largeTitle={largeTitle}
          onPersonalClick={largeTitle ? handlePersonalClick : undefined}
          onBusinessClick={largeTitle ? handleBusinessClick : undefined}
          onRepresentativeClick={largeTitle ? handleRepresentativeClick : undefined}
          activeAccountType={activeAccountType}
          onSearchClick={() => setShowSearchMenu(true)}
        />
      </div>

      {/* Personal Account Toast */}
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
              {/* Close button */}
              <button
                onClick={() => setShowPersonalToast(false)}
                className="absolute top-2 right-2 text-gray-ios hover:text-black bg-transparent border-0 p-1 cursor-pointer z-10 transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              
              <div className="pt-5 px-4 pb-4">
                <p className="text-[15px] text-black m-0">
                  You are currently in your Personal My Account.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Business Account Toast */}
      <AnimatePresence>
        {showBusinessToast && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`absolute top-[90px] left-0 right-0 px-4 ${
              showKeypad 
                ? 'z-[105]' 
                : lastClickedToast === 'business' ? 'z-[70]' : 'z-[60]'
            }`}
          >
            <div className="bg-white rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-hidden border border-[rgba(60,60,67,0.18)] relative">
              {/* Close button */}
              <button
                onClick={() => {
                  setShowBusinessToast(false);
                  setBusinessConfirmationStep(false);
                  setBusinessNumber('');
                  setConfirmationNumber('');
                }}
                className="absolute top-2 right-2 text-gray-ios hover:text-black bg-transparent border-0 p-1 cursor-pointer z-10 transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              
              <div className="pt-5 px-4 pb-4 pr-8">
                {!businessConfirmationStep ? (
                  <>
                    <p className="text-[15px] text-black mb-3">
                      You do not currently have a linked Business account. To link an account, enter the 9 digit Business Number.
                    </p>
                    <input
                      type="text"
                      placeholder="Business Number"
                      value={businessNumber}
                      onFocus={() => setShowKeypad(true)}
                      readOnly
                      className="w-full px-3 py-2 mb-3 border border-[rgba(60,60,67,0.29)] rounded-[8px] text-[15px] focus:outline-none focus:border-[#007AFF] transition-colors cursor-pointer"
                    />
                    <button
                      onClick={() => {
                        if (businessNumber.length === 9) {
                          // Move to confirmation step
                          setBusinessConfirmationStep(true);
                          setShowKeypad(false);
                        }
                      }}
                      disabled={businessNumber.length !== 9}
                      className={`w-full py-2 rounded-[8px] text-[15px] font-medium transition-colors ${
                        businessNumber.length === 9
                          ? 'bg-[#007AFF] text-white cursor-pointer hover:bg-[#0051D5]'
                          : 'bg-[rgba(60,60,67,0.12)] text-[rgba(60,60,67,0.3)] cursor-not-allowed'
                      }`}
                    >
                      Add Business
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-[15px] text-black mb-3">
                      You will receive a confirmation number in your CRA Mail within the next 3 days. Enter the confirmation number to activate your Business Account.
                    </p>
                    <input
                      type="text"
                      placeholder="Confirmation Number"
                      value={confirmationNumber}
                      onChange={(e) => setConfirmationNumber(e.target.value.replace(/\D/g, ''))}
                      className="w-full px-3 py-2 mb-3 border border-[rgba(60,60,67,0.29)] rounded-[8px] text-[15px] focus:outline-none focus:border-[#007AFF] transition-colors"
                    />
                    <button
                      disabled
                      className="w-full py-2 rounded-[8px] text-[15px] font-medium transition-colors bg-[rgba(60,60,67,0.12)] text-[rgba(60,60,67,0.3)] cursor-not-allowed"
                    >
                      Activate business
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Representative Account Toast */}
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
              {/* Close button */}
              <button
                onClick={() => setShowRepresentativeToast(false)}
                className="absolute top-2 right-2 text-gray-ios hover:text-black bg-transparent border-0 p-1 cursor-pointer z-10 transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              
              <div className="pt-5 px-4 pb-4 pr-8">
                <ul className="text-[15px] text-black m-0 pl-5 space-y-1 list-disc">
                  <li>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        setShowRepresentativeToast(false);
                        if (onBecomeRepresentative) onBecomeRepresentative();
                      }}
                      className="text-[#007AFF] no-underline hover:underline"
                    >
                      Authorize a representative
                    </a> to allow another business or person to file your taxes.
                  </li>
                  <li>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        setShowRepresentativeToast(false);
                        if (onBecomeRepresentativeAsRep) onBecomeRepresentativeAsRep();
                      }}
                      className="text-[#007AFF] no-underline hover:underline"
                    >
                      Become a representative
                    </a> to file taxes for a business or other person.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hamburger Menu */}
      <HamburgerMenu 
        isOpen={showMenuDrawer}
        onClose={() => setShowMenuDrawer(false)}
        menuItems={menuItems}
      />

      {/* iOS Numeric Keypad */}
      <AnimatePresence>
        {showKeypad && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-[100]"
              onClick={() => setShowKeypad(false)}
            />
            
            {/* Keypad */}
            <motion.div
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              exit={{ y: 300 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-[#D1D5DB] z-[101]"
            >
              {/* Toolbar */}
              <div className="bg-[#F7F7F8] border-b border-[#C6C6C8] px-3 py-2 flex justify-end">
                <button
                  onClick={() => setShowKeypad(false)}
                  className="text-[#007AFF] text-[17px] px-3 py-1 bg-transparent border-0 cursor-pointer"
                >
                  Done
                </button>
              </div>

              {/* Number pad */}
              <div className="p-2 pb-[max(8px,env(safe-area-inset-bottom))]">
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <button
                      key={num}
                      onClick={() => handleKeypadPress(num.toString())}
                      className="bg-white rounded-[8px] h-[57px] flex items-center justify-center text-[28px] border-0 cursor-pointer active:bg-[#E5E5EA] transition-colors shadow-[0_1px_0_rgba(0,0,0,0.1)]"
                    >
                      {num}
                    </button>
                  ))}
                  
                  {/* Empty space */}
                  <div className="h-[57px]"></div>
                  
                  {/* Zero */}
                  <button
                    onClick={() => handleKeypadPress('0')}
                    className="bg-white rounded-[8px] h-[57px] flex items-center justify-center text-[28px] border-0 cursor-pointer active:bg-[#E5E5EA] transition-colors shadow-[0_1px_0_rgba(0,0,0,0.1)]"
                  >
                    0
                  </button>
                  
                  {/* Delete */}
                  <button
                    onClick={handleKeypadDelete}
                    className="bg-white rounded-[8px] h-[57px] flex items-center justify-center border-0 cursor-pointer active:bg-[#E5E5EA] transition-colors shadow-[0_1px_0_rgba(0,0,0,0.1)]"
                  >
                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                      <path d="M7.5 1.5L1.5 9L7.5 16.5H21C21.825 16.5 22.5 15.825 22.5 15V3C22.5 2.175 21.825 1.5 21 1.5H7.5Z" stroke="black" strokeWidth="1.5" fill="none"/>
                      <path d="M13.5 6L18 10.5M18 6L13.5 10.5" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search Menu */}
      <SearchMenu
        isOpen={showSearchMenu}
        onClose={() => setShowSearchMenu(false)}
        onViewRefundDetails={onViewRefundDetails}
        onViewNoticeOfAssessment={onViewNoticeOfAssessment}
        onRegisteredPlans={onRegisteredPlans}
        onViewAllBenefits={onViewAllBenefits}
        onTaxSlips={onTaxSlips}
        onGSTHSTCredit={onGSTHSTCredit}
        onAccountDetails={onAccountDetails}
        onProfile={onProfile}
        onViewMail={onViewMail}
        onProofOfIncome={onProofOfIncome}
        onViewTaxReturns={onViewTaxReturns}
        onBecomeRepresentative={onBecomeRepresentative}
        onBecomeRepresentativeAsRep={onBecomeRepresentativeAsRep}
        onHomeBuyersPlan={onHomeBuyersPlan}
        onFHSAEligibility={onFHSAEligibility}
        onLifelongLearningPlan={onLifelongLearningPlan}
        onCustomize={onCustomize}
        onUncashedCheques={onUncashedCheques}
        onRemittanceVoucher={onRemittanceVoucher}
        onCPPEIRuling={onCPPEIRuling}
        onAuditEnquiries={onAuditEnquiries}
        onCarryoverAmounts={onCarryoverAmounts}
        onChangeMyReturn={onChangeMyReturn}
        onRegisterFormalDispute={onRegisterFormalDispute}
        onNonResidentAccount={onNonResidentAccount}
        onResidencyDetermination={onResidencyDetermination}
        onPersonalIdentificationNumber={onPersonalIdentificationNumber}
        onProgressTrackerService={onProgressTrackerService}
        onReliefOfPenalties={onReliefOfPenalties}
        onSubmitDocuments={onSubmitDocuments}
        onUserFeedback={onUserFeedback}
      />
    </div>
  );
}