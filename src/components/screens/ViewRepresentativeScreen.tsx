import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, Info } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface ViewRepresentativeScreenProps {
  onBack: () => void;
  onNavigateHome?: () => void;
  onViewMail?: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  hasUnreadMail?: boolean;
  onBecomeRepresentative?: () => void;
  onBecomeRepresentativeAsRep?: () => void;
  // Search navigation handlers
  onViewRefundDetails?: () => void;
  onViewNoticeOfAssessment?: () => void;
  onGSTHSTCredit?: () => void;
  onAccountDetails?: () => void;
  onProfile?: () => void;
  onViewTaxReturns?: () => void;
  onHomeBuyersPlan?: () => void;
  onFHSAEligibility?: () => void;
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
  onLifelongLearningPlan?: () => void;
  onCustomize?: () => void;
  onUncashedCheques?: () => void;
  onRemittanceVoucher?: () => void;
}

export function ViewRepresentativeScreen({
  onBack,
  onNavigateHome,
  onViewMail,
  onFileTaxes,
  onMakePayment,
  onBenefitsAndCredits,
  onRegisteredPlans,
  onTaxSlips,
  onProofOfIncome,
  onHelp,
  onSignOut,
  hasUnreadMail = false,
  onBecomeRepresentative,
  onBecomeRepresentativeAsRep,
  // Search navigation handlers
  onViewRefundDetails,
  onViewNoticeOfAssessment,
  onGSTHSTCredit,
  onAccountDetails,
  onProfile,
  onViewTaxReturns,
  onHomeBuyersPlan,
  onFHSAEligibility,
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
  onLifelongLearningPlan,
  onCustomize,
  onUncashedCheques,
  onRemittanceVoucher
}: ViewRepresentativeScreenProps) {
  const handleCancelAuthorization = () => {
    toast(
      <div className="flex flex-col gap-3 w-full">
        <div className="text-[17px] leading-snug">
          The representative will no longer have access to your accounts.
        </div>
        <div className="flex gap-2 w-full">
          <button
            onClick={() => {
              toast.dismiss();
            }}
            className="flex-1 h-[44px] bg-[#f2f2f7] text-[#007AFF] rounded-[10px] font-semibold text-[17px] hover:bg-[#e5e5ea] active:bg-[#d1d1d6] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              toast.dismiss();
              toast.success('Representative authorization has been cancelled.', {
                style: {
                  fontSize: '17px',
                },
              });
              setTimeout(() => {
                onBack();
              }, 1000);
            }}
            className="flex-1 h-[44px] bg-[#007AFF] text-white rounded-[10px] font-semibold text-[17px] hover:bg-[#0051D5] active:bg-[#004BB8] transition-colors"
          >
            Confirm
          </button>
        </div>
      </div>,
      {
        duration: Infinity,
        style: {
          padding: '16px',
          maxWidth: '90vw',
        },
      }
    );
  };

  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      {/* Header */}
      <HeaderMaster 
        title="Current Representative"
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
        onBecomeRepresentative={onBecomeRepresentative}
        onViewRefundDetails={onViewRefundDetails}
        onViewNoticeOfAssessment={onViewNoticeOfAssessment}
        onGSTHSTCredit={onGSTHSTCredit}
        onAccountDetails={onAccountDetails}
        onProfile={onProfile}
        onViewTaxReturns={onViewTaxReturns}
        onHomeBuyersPlan={onHomeBuyersPlan}
        onFHSAEligibility={onFHSAEligibility}
        onCPPEIRuling={onCPPEIRuling}
        onAuditEnquiries={onAuditEnquiries}
        onCarryoverAmounts={onCarryoverAmounts}
        onChangeMyReturn={onChangeMyReturn}
        onRegisterFormalDispute={onRegisterFormalDispute}
        onNonResidentAccount={onNonResidentAccount}
        onResidencyDetermination={onResidencyDetermination}
        onProgressTrackerService={onProgressTrackerService}
        onReliefOfPenalties={onReliefOfPenalties}
        onSubmitDocuments={onSubmitDocuments}
        onLifelongLearningPlan={onLifelongLearningPlan}
        onCustomize={onCustomize}
        onUncashedCheques={onUncashedCheques}
        onRemittanceVoucher={onRemittanceVoucher}
        onBecomeRepresentativeAsRep={onBecomeRepresentativeAsRep}
      />

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Current Representative</h1>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Main Content */}
        <div className="px-4">
          <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Representative Details</h2>
          
          {/* Info Card */}
          <div className="mb-4 card-ios overflow-hidden border-l-4 border-[#007AFF] p-4">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-[#8e8e93] text-[15px] m-0">
                  This representative is authorized to access your CRA account and file tax returns on your behalf.
                </p>
              </div>
            </div>
          </div>

          {/* Representative Information Card */}
          <div className="card-ios overflow-hidden mb-4 border-l-4 border-[#34C759]">
            <div className="px-4 py-3 space-y-4">
              {/* RepID Number */}
              <div>
                <div className="text-[#8e8e93] text-[13px] mb-1 uppercase tracking-wider">RepID Number</div>
                <div className="text-black text-[17px]">INDA2K5P</div>
              </div>

              {/* GroupID */}
              <div>
                <div className="text-[#8e8e93] text-[13px] mb-1 uppercase tracking-wider">GroupID</div>
                <div className="text-black text-[17px]">GRP-HRB-2024</div>
              </div>

              {/* Business Number */}
              <div>
                <div className="text-[#8e8e93] text-[13px] mb-1 uppercase tracking-wider">Business Number</div>
                <div className="text-black text-[17px]">123456789 RC0001</div>
              </div>

              {/* Full Name */}
              <div>
                <div className="text-[#8e8e93] text-[13px] mb-1 uppercase tracking-wider">Full Name</div>
                <div className="text-black text-[17px]">John Smith</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <button
            onClick={handleCancelAuthorization}
            className="w-full py-3 px-4 rounded-[10px] text-[17px] font-semibold transition-colors text-center mb-6 bg-[#007AFF] text-white hover:bg-[#0051d5] active:bg-[#004bb8]"
          >
            Cancel Authorization
          </button>
        </div>
      </div>
    </div>
  );
}