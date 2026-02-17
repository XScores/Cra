import { ChevronLeft, ChevronRight, AlertCircle, FileText, Info } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';

interface NonResidentAccountScreenProps {
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
  onSubmitDocuments?: () => void;
}

export function NonResidentAccountScreen({
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
  onReliefOfPenalties,
  onSubmitDocuments
}: NonResidentAccountScreenProps) {
  // Mock data - in a real app this would come from an API
  const hasNonResidentAccount = false;
  const accountStatus = 'Not Registered';

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
        onSubmitDocuments={onSubmitDocuments}
      />

      {/* Fixed Page Title Header with Back Button */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Non-resident account</h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 pt-4 pb-24">
          
          {/* Status Card */}
          <div className="card-ios overflow-hidden mb-6">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <div className="text-[13px] text-[#3C3C43] mb-1">Account status</div>
              <div className="text-[22px] font-semibold text-black">{accountStatus}</div>
            </div>
            <div className="px-4 py-3">
              <p className="text-[13px] text-[#3C3C43]">
                {hasNonResidentAccount 
                  ? 'You have a non-resident account with the CRA.' 
                  : 'You do not currently have a non-resident account registered.'}
              </p>
            </div>
          </div>

          {/* Information Alert */}
          <div className="bg-[#FFF4E5] border border-[#FFE0B2] rounded-xl p-4 mb-6 flex gap-3">
            <Info className="w-5 h-5 text-[#F57C00] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[15px] text-black mb-2">
                <span className="font-semibold">What is a non-resident account?</span>
              </p>
              <p className="text-[13px] text-[#3C3C43]">
                A non-resident account is for individuals who no longer reside in Canada but need to file Canadian tax returns or have Canadian income sources.
              </p>
            </div>
          </div>

          {/* Who needs a non-resident account */}
          <div className="card-ios overflow-hidden mb-6">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <h2 className="text-[17px] font-semibold text-black">Who needs a non-resident account</h2>
            </div>
            <div className="px-4 py-4">
              <p className="text-[15px] text-text-gray-ios leading-relaxed mb-3">
                You may need a non-resident account if you:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-text-gray-ios">
                  Have left Canada and established residential ties in another country
                </li>
                <li className="text-text-gray-ios">
                  Receive income from Canadian sources (rental, pension, investments)
                </li>
                <li className="text-text-gray-ios">
                  Need to file Canadian tax returns as a non-resident
                </li>
                <li className="text-text-gray-ios">
                  Have Part XIII tax obligations on Canadian income
                </li>
              </ul>
            </div>
          </div>

          {/* How to open account */}
          <div className="card-ios overflow-hidden mb-6">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <h2 className="text-[17px] font-semibold text-black">How to open a non-resident account</h2>
            </div>
            <div className="px-4 py-4">
              <p className="text-[15px] text-text-gray-ios leading-relaxed mb-3">
                To open a non-resident account, you'll need to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-text-gray-ios">
                  Complete Form NR73 (Determination of Residency Status)
                </li>
                <li className="text-text-gray-ios">
                  Provide proof of your departure from Canada
                </li>
                <li className="text-text-gray-ios">
                  Submit documentation of your residential ties abroad
                </li>
                <li className="text-text-gray-ios">
                  Wait for CRA to review and confirm your non-resident status
                </li>
              </ul>
            </div>
          </div>

          {/* Actions */}
          <div className="mb-2">
            <h2 className="text-[13px] text-[#3C3C43] mb-1.5 ml-4">
              Actions
            </h2>
          </div>

          <div className="card-ios overflow-hidden mb-6">
            <button className="w-full px-4 py-3 flex items-center justify-between active:bg-[#E5E5EA] transition-colors border-b border-[#E5E5EA]">
              <span className="text-[17px] text-[#007AFF]">Download Form NR73</span>
              <ChevronRight className="w-5 h-5 text-[#007AFF]" />
            </button>
            <button 
              onClick={onResidencyDetermination}
              className="w-full px-4 py-3 flex items-center justify-between active:bg-[#E5E5EA] transition-colors"
            >
              <span className="text-[17px] text-[#007AFF]">Learn about residency determination</span>
              <ChevronRight className="w-5 h-5 text-[#007AFF]" />
            </button>
          </div>

          {/* Important information */}
          <div className="card-ios overflow-hidden">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <h2 className="text-[17px] font-semibold text-black">Important information</h2>
            </div>
            <div className="px-4 py-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-text-gray-ios">
                  Processing time for residency determination can take 4-6 months
                </li>
                <li className="text-text-gray-ios">
                  You must notify CRA within 30 days of leaving Canada
                </li>
                <li className="text-text-gray-ios">
                  Non-resident status affects your eligibility for certain benefits
                </li>
                <li className="text-text-gray-ios">
                  You may be subject to departure tax on certain assets
                </li>
                <li className="text-text-gray-ios">
                  Keep all documentation proving your non-resident status
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}