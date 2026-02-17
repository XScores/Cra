import { ChevronLeft, CheckCircle, Shield, AlertCircle } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';
import { useState, useEffect } from 'react';

interface CreatePINConfirmationScreenProps {
  onBack: () => void;
  onNavigateHome?: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onViewMail?: () => void;
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
  onBecomeRepresentative?: () => void;
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
}

// Generate random 6-digit alphanumeric code
function generateRandomPIN(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Removed confusing characters like 0, O, I, 1
  let pin = '';
  for (let i = 0; i < 6; i++) {
    pin += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pin;
}

export function CreatePINConfirmationScreen({
  onBack,
  onNavigateHome,
  onFileTaxes,
  onMakePayment,
  onBenefitsAndCredits,
  onRegisteredPlans,
  onHelp,
  onSignOut,
  onTaxSlips,
  onProofOfIncome,
  onViewMail,
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
  onBecomeRepresentative,
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
  onReliefOfPenalties
}: CreatePINConfirmationScreenProps) {
  const [pin] = useState(() => generateRandomPIN());

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
        hasUnreadMail={false}
        onFileTaxes={onFileTaxes}
        onViewAllBenefits={onBenefitsAndCredits}
        onMakePayment={onMakePayment}
        onViewMail={onViewMail}
        onRegisteredPlans={onRegisteredPlans}
        onTaxSlips={onTaxSlips}
        onProofOfIncome={onProofOfIncome}
        onViewRefundDetails={onViewRefundDetails}
        onGSTHSTCredit={onGSTHSTCredit}
        onAccountDetails={onAccountDetails}
        onProfile={onProfile}
        onViewTaxReturns={onViewTaxReturns}
        onHomeBuyersPlan={onHomeBuyersPlan}
        onFHSAEligibility={onFHSAEligibility}
        onLifelongLearningPlan={onLifelongLearningPlan}
        onCustomize={onCustomize}
        onUncashedCheques={onUncashedCheques}
        onBecomeRepresentative={onBecomeRepresentative}
        onRemittanceVoucher={onRemittanceVoucher}
        onCPPEIRuling={onCPPEIRuling}
        onViewNoticeOfAssessment={onViewNoticeOfAssessment}
        onHelp={onHelp}
        onSignOut={onSignOut}
        onAuditEnquiries={onAuditEnquiries}
        onCarryoverAmounts={onCarryoverAmounts}
        onChangeMyReturn={onChangeMyReturn}
        onRegisterFormalDispute={onRegisterFormalDispute}
        onNonResidentAccount={onNonResidentAccount}
        onResidencyDetermination={onResidencyDetermination}
        onPersonalIdentificationNumber={onPersonalIdentificationNumber}
        onProgressTrackerService={onProgressTrackerService}
        onReliefOfPenalties={onReliefOfPenalties}
      />

      {/* Fixed Page Title Header with Back Button */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-start gap-3">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0 mt-[6px]"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[34px]">PIN Created</h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 pt-4 pb-24">
          
          {/* Success Alert */}
          <div className="bg-[#E5F5E5] border border-[#B2E5B2] rounded-xl p-4 mb-6 flex gap-3">
            <CheckCircle className="w-5 h-5 text-[#28a745] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[15px] text-black mb-2">
                <span className="font-semibold">PIN successfully created</span>
              </p>
              <p className="text-[13px] text-[#3C3C43]">
                Your Personal Identification Number has been generated. Please save it in a secure location.
              </p>
            </div>
          </div>

          {/* PIN Display */}
          <div className="card-ios overflow-hidden mb-6">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <h2 className="text-[17px] font-semibold text-black">Your PIN</h2>
            </div>
            <div className="px-4 py-6 text-center">
              <div className="text-[48px] font-bold text-[#007AFF] tracking-[0.2em] mb-2 select-all">
                {pin}
              </div>
              <p className="text-[13px] text-text-gray-ios">
                Write this down and keep it secure
              </p>
            </div>
          </div>

          {/* Security tips */}
          <div className="card-ios overflow-hidden mb-6">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <h2 className="text-[17px] font-semibold text-black">Security tips</h2>
            </div>
            <div className="px-4 py-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-text-gray-ios">
                  Keep your PIN in a secure location
                </li>
                <li className="text-text-gray-ios">
                  Never write your PIN on your tax documents
                </li>
                <li className="text-text-gray-ios">
                  Don't share your PIN via email or text message
                </li>
                <li className="text-text-gray-ios">
                  Change your PIN if you suspect it has been compromised
                </li>
                <li className="text-text-gray-ios">
                  The CRA will never ask for your complete PIN
                </li>
                <li className="text-text-gray-ios">
                  Be cautious of phishing scams asking for your PIN
                </li>
              </ul>
            </div>
          </div>

          {/* Lost or compromised PIN */}
          <div className="card-ios overflow-hidden">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <h2 className="text-[17px] font-semibold text-black">Lost or compromised PIN</h2>
            </div>
            <div className="px-4 py-4">
              <p className="text-[15px] text-text-gray-ios leading-relaxed mb-3">
                If you've lost your PIN or believe it has been compromised:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-text-gray-ios">
                  Contact the CRA immediately at 1-800-959-8281
                </li>
                <li className="text-text-gray-ios">
                  Request a new PIN to be mailed to your address on file
                </li>
                <li className="text-text-gray-ios">
                  Monitor your account for any suspicious activity
                </li>
                <li className="text-text-gray-ios">
                  Update your contact information if needed to ensure you receive the new PIN
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}