import { ChevronLeft, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut, Plus, X } from 'lucide-react';
import { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { IPhoneKeyboard } from '../IPhoneKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';
import { toast } from 'sonner';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';
import { HeaderMaster } from '../HeaderMaster';
import { HamburgerMenu } from '../HamburgerMenu';

interface EditNameScreenProps {
  onBack: () => void;
  onViewMail?: () => void;
  onNavigateHome?: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  // Search navigation handlers
  onViewRefundDetails?: () => void;
  onViewNoticeOfAssessment?: () => void;
  onGSTHSTCredit?: () => void;
  onAccountDetails?: () => void;
  onProfile?: () => void;
  onViewTaxReturns?: () => void;
  onHomeBuyersPlan?: () => void;
  onFHSAEligibility?: () => void;
  onBecomeRepresentative?: () => void;
  onBecomeRepresentativeAsRep?: () => void;
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
}

export function EditNameScreen({ 
  onBack, 
  onViewMail, 
  onNavigateHome, 
  onFileTaxes, 
  onMakePayment, 
  onBenefitsAndCredits, 
  onRegisteredPlans, 
  onHelp, 
  onSignOut, 
  onTaxSlips,
  onProofOfIncome,
  // Search navigation handlers
  onViewRefundDetails,
  onViewNoticeOfAssessment,
  onGSTHSTCredit,
  onAccountDetails,
  onProfile,
  onViewTaxReturns,
  onHomeBuyersPlan,
  onFHSAEligibility,
  onBecomeRepresentative,
  onBecomeRepresentativeAsRep,
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
  onSubmitDocuments
}: EditNameScreenProps) {
  const [firstName, setFirstName] = useState('Jonathan');
  const [middleNames, setMiddleNames] = useState<string[]>(['']);
  const [lastName, setLastName] = useState('Rath');
  const [sin, setSin] = useState('***-***-456');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Default menu items
  const defaultMenuItems = [
    { icon: Send, label: 'File taxes', id: 'file-taxes', type: 'lucide' as const, onClick: () => { setShowMenu(false); onBack(); if (onFileTaxes) onFileTaxes(); } },
    { icon: Gift, label: 'Benefits and credits', id: 'benefits-credits', type: 'lucide' as const, onClick: () => { setShowMenu(false); onBack(); if (onBenefitsAndCredits) onBenefitsAndCredits(); } },
    { icon: CreditCard, label: 'Make a payment', id: 'make-payment', type: 'lucide' as const, onClick: () => { setShowMenu(false); onBack(); if (onMakePayment) onMakePayment(); } },
    { icon: Mail, label: 'CRA mail', id: 'mail', type: 'lucide' as const, onClick: () => { setShowMenu(false); onBack(); if (onViewMail) onViewMail(); } },
    { icon: null, label: 'Registered plans', id: 'registered-plans', type: 'image' as const, imageSrc: mapleLeafIcon, onClick: () => { setShowMenu(false); onBack(); if (onRegisteredPlans) onRegisteredPlans(); } },
    { icon: Receipt, label: 'Tax slips and documents', id: 'tax-slips', type: 'lucide' as const, onClick: () => { setShowMenu(false); onBack(); if (onTaxSlips) onTaxSlips(); } },
    { icon: FileCheck, label: 'Proof of income', id: 'proof-income', type: 'lucide' as const, onClick: () => { setShowMenu(false); onBack(); if (onProofOfIncome) onProofOfIncome(); } },
    { icon: HelpCircle, label: 'Help and support', id: 'help', type: 'lucide' as const, onClick: () => { setShowMenu(false); onBack(); if (onHelp) onHelp(); } },
    { icon: LogOut, label: 'Sign out and exit', id: 'sign-out', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onSignOut) onSignOut(); }, danger: true },
  ];

  // Middle names management
  const addMiddleName = () => {
    setMiddleNames([...middleNames, '']);
  };

  const removeMiddleName = (index: number) => {
    if (middleNames.length > 1) {
      setMiddleNames(middleNames.filter((_, i) => i !== index));
    }
  };

  const updateMiddleName = (index: number, value: string) => {
    const newMiddleNames = [...middleNames];
    newMiddleNames[index] = value;
    setMiddleNames(newMiddleNames);
  };

  // Use keyboard scroll hook
  const { keyboardPadding } = useKeyboardScroll({ 
    isKeyboardVisible: showKeyboard, 
    activeField: activeField || 'input',
    keyboardHeight: 260,
    scrollContainerRef
  });

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      if (activeField === 'firstName') {
        setFirstName(prev => prev.slice(0, -1));
      } else if (activeField === 'lastName') {
        setLastName(prev => prev.slice(0, -1));
      } else if (activeField?.startsWith('middleName')) {
        const index = parseInt(activeField.split('-')[1]);
        updateMiddleName(index, middleNames[index].slice(0, -1));
      }
    } else {
      if (activeField === 'firstName') {
        setFirstName(prev => prev + key);
      } else if (activeField === 'lastName') {
        setLastName(prev => prev + key);
      } else if (activeField?.startsWith('middleName')) {
        const index = parseInt(activeField.split('-')[1]);
        updateMiddleName(index, middleNames[index] + key);
      }
    }
  };

  const handleKeyboardDone = () => {
    setShowKeyboard(false);
    setActiveField(null);
  };

  const handleSave = () => {
    toast.success('Your name has been updated successfully.');
    onBack();
  };

  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      {/* Header with integrated menu */}
      <HeaderMaster 
        title="My Account"
        largeTitle={true}
        showSearch={true}
        showMenu={true}
        onNavigateHome={onNavigateHome}
        onLogoClick={onNavigateHome}
        onSearchClick={onNavigateHome}
        hasUnreadMail={false}
        onFileTaxes={onFileTaxes}
        onViewAllBenefits={onBenefitsAndCredits}
        onMakePayment={onMakePayment}
        onViewMail={onViewMail}
        onRegisteredPlans={onRegisteredPlans}
        onTaxSlips={onTaxSlips}
        onProofOfIncome={onProofOfIncome}
        onHelp={onHelp}
        onSignOut={onSignOut}
        onBecomeRepresentative={onBecomeRepresentative}
        onBecomeRepresentativeAsRep={onBecomeRepresentativeAsRep}
        onViewRefundDetails={onViewRefundDetails}
        onViewNoticeOfAssessment={onViewNoticeOfAssessment}
        onGSTHSTCredit={onGSTHSTCredit}
        onAccountDetails={onAccountDetails}
        onProfile={onProfile}
        onViewTaxReturns={onViewTaxReturns}
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
      />

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7] sticky top-[47px] z-10">
        <div className="flex items-center gap-3 mb-1">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Edit name</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Update your legal name as it appears on your tax documents</p>
      </div>

      {/* Scrollable Content Area */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7]"
        style={{ paddingBottom: `${keyboardPadding + 80}px` }}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (!target.closest('input') && !target.closest('button[type="button"]')) {
            setShowKeyboard(false);
          }
        }}
      >
        {/* Form */}
        <div className="px-4 pb-3">
          <div className="card-ios p-4">
            <div className="mb-4">
              <label htmlFor="firstName" className="text-black text-[15px] block mb-2">
                First name
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onFocus={() => { setShowKeyboard(true); setActiveField('firstName'); }}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              />
            </div>

            {middleNames.map((middleName, index) => (
              <div key={index} className="mb-4">
                <label htmlFor={`middleName${index}`} className="text-black text-[15px] block mb-2">
                  Middle name(s) {middleNames.length > 1 ? `${index + 1}` : ''}
                  <span className="text-[#8e8e93] font-normal ml-1">(optional)</span>
                </label>
                <div className="relative">
                  <input
                    id={`middleName${index}`}
                    type="text"
                    value={middleName}
                    onChange={(e) => updateMiddleName(index, e.target.value)}
                    onFocus={() => { setShowKeyboard(true); setActiveField(`middleName-${index}`); }}
                    className={`w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] ${middleNames.length > 1 ? 'pr-20' : 'pr-12'}`}
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                    {middleNames.length > 1 && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          removeMiddleName(index);
                        }}
                        className="p-1.5 text-[#ff3b30] hover:opacity-70 transition-opacity bg-transparent border-0"
                      >
                        <X size={20} />
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        addMiddleName();
                      }}
                      className="p-1.5 text-[#007AFF] hover:opacity-70 transition-opacity bg-transparent border-0"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="mb-4">
              <label htmlFor="lastName" className="text-black text-[15px] block mb-2">
                Last name
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onFocus={() => { setShowKeyboard(true); setActiveField('lastName'); }}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              />
            </div>

            <div className="bg-[#e3f2fd] border-l-4 border-[#007AFF] p-3 rounded-[8px]">
              <p className="text-black text-[15px] m-0 opacity-80">
                To update your Social Insurance Number, please contact the CRA directly.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-4 pb-3 flex gap-3">
          <button
            onClick={onBack}
            className="flex-1 bg-white text-[#007AFF] px-6 py-3 rounded-[10px] border border-[#007AFF] hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-[17px] text-center"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="flex-1 bg-[#007AFF] text-white px-6 py-3 rounded-[10px] hover:opacity-90 active:opacity-80 transition-opacity text-[17px] text-center"
          >
            Save changes
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {showKeyboard && <IPhoneKeyboard key="keyboard" onKeyPress={handleKeyPress} onDone={handleKeyboardDone} />}
      </AnimatePresence>

      {/* Hamburger Menu */}
      <HamburgerMenu 
        isOpen={showMenu}
        onClose={() => setShowMenu(false)}
        menuItems={defaultMenuItems}
      />
    </div>
  );
}