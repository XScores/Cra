import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, ChevronRight, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { useState } from 'react';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface TwoStepVerificationScreenProps {
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

export function TwoStepVerificationScreen({ 
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
}: TwoStepVerificationScreenProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleSave = () => {
    toast.success('Your settings have been saved successfully.');
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Two-step verification</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Add an extra layer of security to your account</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        <div className="px-4 pb-3">
          <div className="card-ios p-4">
            <div className="mb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <Label htmlFor="two-step" className="text-black text-[17px] mb-2 block">
                    Enable two-step verification
                  </Label>
                  <p className="text-black text-[15px] m-0 opacity-80">
                    When enabled, you'll need to enter a verification code sent to your phone or email in addition to your password when signing in.
                  </p>
                </div>
                <Switch 
                  id="two-step"
                  checked={isEnabled}
                  onCheckedChange={setIsEnabled}
                  className="ml-4"
                />
              </div>
            </div>

            {isEnabled && (
              <div className="border-t border-[rgba(60,60,67,0.29)] pt-4">
                <h3 className="text-black mb-3">Verification method</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-3 border border-[#c7c7cc] rounded-[8px] hover:bg-[#f2f2f7] cursor-pointer">
                    <input type="radio" name="method" value="sms" defaultChecked className="h-4 w-4 accent-[#007AFF]" />
                    <div>
                      <div className="text-black text-[17px]">Text message (SMS)</div>
                      <div className="text-gray-ios text-[15px]">Send codes to (555) 123-4567</div>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-[#c7c7cc] rounded-[8px] hover:bg-[#f2f2f7] cursor-pointer">
                    <input type="radio" name="method" value="email" className="h-4 w-4 accent-[#007AFF]" />
                    <div>
                      <div className="text-black text-[17px]">Email</div>
                      <div className="text-gray-ios text-[15px]">Send codes to jonathan.rath@email.com</div>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-[#c7c7cc] rounded-[8px] hover:bg-[#f2f2f7] cursor-pointer">
                    <input type="radio" name="method" value="app" className="h-4 w-4 accent-[#007AFF]" />
                    <div>
                      <div className="text-black text-[17px]">Authenticator app</div>
                      <div className="text-gray-ios text-[15px]">Use an authenticator app like Google Authenticator</div>
                    </div>
                  </label>
                </div>
              </div>
            )}

            <div className="mt-6 flex gap-3">
              <button
                onClick={onBack}
                className="flex-1 py-3 px-4 bg-white border border-[#007AFF] text-[#007AFF] rounded-[10px] hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-center text-[17px]"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="flex-1 py-3 px-4 bg-[#007AFF] text-white rounded-[10px] hover:opacity-90 active:opacity-80 transition-opacity text-center text-[17px]"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}