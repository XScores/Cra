import { CheckCircle, Calendar, FileText, DollarSign } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';

interface RegisterFormalDisputeConfirmationScreenProps {
  onDone: () => void;
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
}

export function RegisterFormalDisputeConfirmationScreen({
  onDone,
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
  onNonResidentAccount
}: RegisterFormalDisputeConfirmationScreenProps) {
  const referenceNumber = `FD${new Date().getFullYear()}${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
  const submissionDate = new Date().toLocaleDateString('en-CA', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

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
        onBecomeRepresentative={onBecomeRepresentative}
        onRemittanceVoucher={onRemittanceVoucher}
        onCPPEIRuling={onCPPEIRuling}
        onAuditEnquiries={onAuditEnquiries}
        onCarryoverAmounts={onCarryoverAmounts}
        onChangeMyReturn={onChangeMyReturn}
        onRegisterFormalDispute={onRegisterFormalDispute}
        onNonResidentAccount={onNonResidentAccount}
        onHelp={onHelp}
        onSignOut={onSignOut}
      />

      {/* Fixed Page Title Header */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Dispute registered</h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 pt-4 pb-24">

          {/* Success message */}
          <div className="bg-white rounded-xl p-6 mb-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#34C759] rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="mb-2">Formal dispute registered</h2>
            <p className="text-gray-ios">
              Your formal dispute has been successfully registered and submitted for review.
            </p>
          </div>

          {/* Reference details */}
          <div className="bg-white rounded-xl p-4 mb-6">
            <h3 className="mb-4">Reference details</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-[13px] text-[#3C3C43] mb-1">Reference number</p>
                  <p className="text-black font-medium">{referenceNumber}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-[13px] text-[#3C3C43] mb-1">Submission date</p>
                  <p className="text-black">{submissionDate}</p>
                </div>
              </div>
            </div>
          </div>

          {/* What happens next */}
          <div className="bg-white rounded-xl p-4 mb-6">
            <h3 className="mb-3">What happens next</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-ios">
                The CRA will review your dispute and supporting documents
              </li>
              <li className="text-gray-ios">
                You will receive a notice of confirmation by mail
              </li>
              <li className="text-gray-ios">
                Processing time is typically 90 to 180 days
              </li>
              <li className="text-gray-ios">
                You can check your mail for updates on your dispute status
              </li>
            </ul>
          </div>

          {/* Important information */}
          <div className="bg-white rounded-xl p-4 mb-6">
            <h3 className="mb-3">Important information</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-ios">
                Save your reference number for future inquiries
              </li>
              <li className="text-gray-ios">
                If you have additional documents, you can submit them by mail or through your CRA account
              </li>
              <li className="text-gray-ios">
                Your payment obligations remain in effect while your dispute is being reviewed
              </li>
            </ul>
          </div>

          {/* Done button */}
          <button
            className="w-full py-3 px-4 bg-[#007AFF] text-white rounded-lg active:bg-[#0051D5] cursor-pointer transition-all"
            onClick={onNavigateHome}
          >
            Return to home
          </button>
        </div>
      </div>
    </div>
  );
}