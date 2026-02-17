import { Switch } from '../ui/switch';
import { ChevronLeft } from 'lucide-react';
import { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { IPhoneEmailKeyboard } from '../IPhoneEmailKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';
import { toast } from 'sonner';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';
import { HeaderMaster } from '../HeaderMaster';
import { HamburgerMenu } from '../HamburgerMenu';

interface EditEmailScreenProps {
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

export function EditEmailScreen({ 
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
}: EditEmailScreenProps) {
  const [email, setEmail] = useState('jonathan.rath@example.com');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [electronicCorrespondence, setElectronicCorrespondence] = useState(true);
  const [showError, setShowError] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Use keyboard scroll hook
  const { keyboardPadding } = useKeyboardScroll({ 
    isKeyboardVisible: showKeyboard, 
    activeField: activeField || 'input',
    keyboardHeight: 260,
    scrollContainerRef
  });

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      if (activeField === 'email') {
        setEmail(prev => prev.slice(0, -1));
      } else if (activeField === 'confirmEmail') {
        setConfirmEmail(prev => prev.slice(0, -1));
      }
    } else {
      if (activeField === 'email') {
        setEmail(prev => prev + key);
      } else if (activeField === 'confirmEmail') {
        setConfirmEmail(prev => prev + key);
      }
    }
  };

  const handleKeyboardDone = () => {
    setShowKeyboard(false);
    setActiveField(null);
  };

  const emailsMatch = email === confirmEmail;
  const canSave = email.length > 0 && confirmEmail.length > 0 && emailsMatch;

  const handleSave = () => {
    if (!emailsMatch) {
      setShowError(true);
      return;
    }
    toast.success('Your email address has been updated successfully.');
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
        // Search navigation handlers
        onViewRefundDetails={onViewRefundDetails}
        onViewNoticeOfAssessment={onViewNoticeOfAssessment}
        onGSTHSTCredit={onGSTHSTCredit}
        onAccountDetails={onAccountDetails}
        onProfile={onProfile}
        onViewTaxReturns={onViewTaxReturns}
        onHomeBuyersPlan={onHomeBuyersPlan}
        onFHSAEligibility={onFHSAEligibility}
        onBecomeRepresentative={onBecomeRepresentative}
        onBecomeRepresentativeAsRep={onBecomeRepresentativeAsRep}
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Edit email address</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Update the email address where you receive CRA notifications</p>
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
              <label htmlFor="email" className="text-black text-[15px] block mb-2">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onFocus={() => { setShowKeyboard(true); setActiveField('email'); }}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="confirmEmail" className="text-black text-[15px] block mb-2">
                Confirm email address
              </label>
              <input
                id="confirmEmail"
                type="email"
                value={confirmEmail}
                onChange={(e) => {
                  setConfirmEmail(e.target.value);
                }}
                onFocus={() => { setShowKeyboard(true); setActiveField('confirmEmail'); }}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              />
            </div>

            {showError && !emailsMatch && (
              <div className="bg-[#ffebee] border-l-4 border-[#ff3b30] p-3 mb-4 rounded-[8px]">
                <p className="text-black text-[15px] m-0">
                  <strong>Error:</strong> Email addresses do not match. Please ensure both fields contain the same email address.
                </p>
              </div>
            )}

            <div className="bg-[#e3f2fd] border-l-4 border-[#007AFF] p-3 mb-4 rounded-[8px]">
              <p className="text-black text-[15px] m-0">
                <strong>Important:</strong> You will receive a verification email at your new address before the change is confirmed.
              </p>
            </div>

            {/* Electronic Correspondence */}
            <div className="border-t border-[rgba(60,60,67,0.29)] pt-4">
              <h3 className="text-black text-[17px] mb-3">Correspondence preferences</h3>
              
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <label htmlFor="electronic-mail" className="text-black text-[15px] block mb-1">
                    Receive correspondence electronically
                  </label>
                  <p className="text-black text-[15px] m-0 opacity-80">
                    All CRA correspondence will be sent to your CRA Mail inbox in My Account instead of by postal mail.
                  </p>
                </div>
                <Switch 
                  id="electronic-mail"
                  checked={electronicCorrespondence}
                  onCheckedChange={setElectronicCorrespondence}
                  className="mt-1"
                />
              </div>

              {electronicCorrespondence && (
                <div className="bg-[#e8f5e9] border-l-4 border-[#28a745] p-3 mt-3 rounded-[8px]">
                  <p className="text-black text-[15px] m-0">
                    <strong>Active:</strong> You are currently receiving all correspondence electronically in your CRA Mail inbox.
                  </p>
                </div>
              )}
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
            disabled={!canSave}
            className={`flex-1 px-6 py-3 rounded-[10px] transition-opacity text-[17px] text-center ${
              canSave 
                ? 'bg-[#007AFF] text-white hover:opacity-90 active:opacity-80 cursor-pointer' 
                : 'bg-[#c7c7cc] text-white cursor-not-allowed opacity-50'
            }`}
          >
            Save changes
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {showKeyboard && <IPhoneEmailKeyboard key="keyboard" onKeyPress={handleKeyPress} onDone={handleKeyboardDone} />}
      </AnimatePresence>
    </div>
  );
}