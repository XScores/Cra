import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, Eye, EyeOff, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { AnimatePresence } from 'motion/react';
import { IPhoneKeyboard } from '../IPhoneKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';
import { toast } from 'sonner@2.0.3';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';
import { useState, useRef } from 'react';

interface ChangePasswordScreenProps {
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
  hasUnreadMail?: boolean;
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

export function ChangePasswordScreen({ 
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
  hasUnreadMail,
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
}: ChangePasswordScreenProps) {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Use keyboard scroll hook
  const { keyboardPadding } = useKeyboardScroll({ 
    isKeyboardVisible: showKeyboard, 
    activeField: 'input',
    keyboardHeight: 260,
    scrollContainerRef
  });

  const handleSave = () => {
    toast.success('Your password has been changed successfully.');
    onBack();
  };

  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      <HeaderMaster 
        title="My Account"
        largeTitle={true}
        showSearch={true}
        showMenu={true}
        onNavigateHome={onNavigateHome}
        onLogoClick={onNavigateHome}
        onSearchClick={onNavigateHome}
        hasUnreadMail={hasUnreadMail}
        onFileTaxes={onFileTaxes}
        onViewAllBenefits={onBenefitsAndCredits}
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Change password</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Create a new password for your CRA My Account</p>
      </div>

      {/* Scrollable Content Area */}
      <div 
        className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7]"
        style={{ paddingBottom: keyboardPadding }}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (!target.closest('input') && !target.closest('button[type="button"]')) {
            setShowKeyboard(false);
          }
        }}
        ref={scrollContainerRef}
      >
        <div className="px-4 pb-3">
          <div className="card-ios p-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="current-password" className="text-black text-[15px] mb-2 block">
                  Current password
                </Label>
                <div className="relative">
                  <Input
                    id="current-password"
                    type={showCurrentPassword ? "text" : "password"}
                    onFocus={() => setShowKeyboard(true)}
                    className="pr-10 bg-white border-[#c7c7cc] rounded-[8px] h-12 text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-ios hover:text-black"
                  >
                    {showCurrentPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div>
                <Label htmlFor="new-password" className="text-black text-[15px] mb-2 block">
                  New password
                </Label>
                <div className="relative">
                  <Input
                    id="new-password"
                    type={showNewPassword ? "text" : "password"}
                    onFocus={() => setShowKeyboard(true)}
                    className="pr-10 bg-white border-[#c7c7cc] rounded-[8px] h-12 text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-ios hover:text-black"
                  >
                    {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                <p className="text-black text-[15px] mt-2 m-0 opacity-80">
                  Password must be at least 8 characters and include a mix of letters, numbers, and symbols.
                </p>
              </div>

              <div>
                <Label htmlFor="confirm-password" className="text-black text-[15px] mb-2 block">
                  Confirm new password
                </Label>
                <div className="relative">
                  <Input
                    id="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    onFocus={() => setShowKeyboard(true)}
                    className="pr-10 bg-white border-[#c7c7cc] rounded-[8px] h-12 text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-ios hover:text-black"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleSave}
                className="w-full py-3 px-4 bg-[#007AFF] text-white rounded-[10px] hover:opacity-90 active:opacity-80 transition-opacity mb-3 text-center text-[17px]"
              >
                Change password
              </button>

              <button
                onClick={onBack}
                className="w-full py-3 px-4 bg-white border border-[#007AFF] text-[#007AFF] rounded-[10px] hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-center text-[17px]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {showKeyboard && <IPhoneKeyboard key="keyboard" />}
      </AnimatePresence>
    </div>
  );
}