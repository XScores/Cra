import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft } from 'lucide-react';

interface ViewFHSAContributionRoomScreenProps {
  onBack: () => void;
  onNavigateHome: () => void;
  onViewMail: () => void;
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

export function ViewFHSAContributionRoomScreen({ onBack, onNavigateHome, onViewMail, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onBecomeRepresentative, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments }: ViewFHSAContributionRoomScreenProps) {
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
        onBecomeRepresentative={onBecomeRepresentative}
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
        onHelp={onHelp}
        onSignOut={onSignOut}
      />

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-start gap-3 mb-1">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[1.1]">View your FHSA<br />contribution room</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Check your available contribution room and contribution history</p>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7]">
        {/* Current Contribution Room */}
        <div className="bg-white px-4 py-5 border-b border-[#e1e4e7]">
          <h2 className="text-[#26374a] font-bold mb-3">Your FHSA contribution room for 2024</h2>
          <div className="bg-[#f5f5f5] p-4 rounded">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[#333333] text-[14px]">Available contribution room:</span>
              <span className="text-[#2e7d32]">$16,000.00</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-[#333333] text-[14px]">Contributions made in 2024:</span>
              <span className="text-[#333333]">$0.00</span>
            </div>
            <div className="border-t border-[#e1e4e7] pt-3 mt-3">
              <div className="flex justify-between items-center">
                <span className="text-[#26374a]">Remaining room for 2024:</span>
                <span className="text-[#2e7d32]">$16,000.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* How Contribution Room Works */}
        <div className="bg-white px-4 py-5 border-b border-[#e1e4e7]">
          <h2 className="text-[#26374a] font-bold mb-3">How FHSA contribution room works</h2>
          <ul className="space-y-3 ml-5 text-[#333333] text-[14px] list-disc pl-0">
            <li className="pl-2">Annual limit: $8,000 per year</li>
            <li className="pl-2">Lifetime limit: $40,000 total</li>
            <li className="pl-2">Unused annual contribution room carries forward to future years</li>
            <li className="pl-2">Contribution room starts accumulating when you open your first FHSA</li>
            <li className="pl-2">Room accumulation stops after 15 years or when you turn 71</li>
          </ul>
        </div>

        {/* Contribution History */}
        <div className="bg-white px-4 py-5 border-b border-[#e1e4e7]">
          <h2 className="text-[#26374a] font-bold mb-3">Your contribution history</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#f5f5f5]">
                  <th className="border border-[#e1e4e7] px-1.5 py-2 text-left text-[#26374a] text-[14px]">Year</th>
                  <th className="border border-[#e1e4e7] px-1.5 py-2 text-left text-[#26374a] text-[14px]">Room Available</th>
                  <th className="border border-[#e1e4e7] px-1.5 py-2 text-left text-[#26374a] text-[14px]">Contributions</th>
                  <th className="border border-[#e1e4e7] px-1.5 py-2 text-left text-[#26374a] text-[14px]">Remaining</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#e1e4e7] px-1.5 py-2 text-[#333333] text-[14px]">2024</td>
                  <td className="border border-[#e1e4e7] px-1.5 py-2 text-[#333333] text-[14px]">$16,000.00</td>
                  <td className="border border-[#e1e4e7] px-1.5 py-2 text-[#333333] text-[14px]">$0.00</td>
                  <td className="border border-[#e1e4e7] px-1.5 py-2 text-[#2e7d32] text-[14px]">$16,000.00</td>
                </tr>
                <tr>
                  <td className="border border-[#e1e4e7] px-1.5 py-2 text-[#333333] text-[14px]">2023</td>
                  <td className="border border-[#e1e4e7] px-1.5 py-2 text-[#333333] text-[14px]">$8,000.00</td>
                  <td className="border border-[#e1e4e7] px-1.5 py-2 text-[#333333] text-[14px]">$0.00</td>
                  <td className="border border-[#e1e4e7] px-1.5 py-2 text-[#2e7d32] text-[14px]">$8,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Lifetime Summary */}
        <div className="mb-4 p-4 bg-white border-l-4 border-[#26374a] mt-3 ml-[15px]">
          <h3 className="text-[#26374a] mb-2 font-bold">Lifetime summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[#333333] text-[14px]">Total contributions to date:</span>
              <span className="text-[#333333] text-[14px]">$0.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#333333] text-[14px]">Lifetime limit:</span>
              <span className="text-[#333333] text-[14px]">$40,000.00</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-[#e1e4e7]">
              <span className="text-[#26374a]">Remaining lifetime room:</span>
              <span className="text-[#2e7d32]">$40,000.00</span>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-white px-4 py-5 border-b border-[#e1e4e7]">
          <div className="bg-[#fef9e7] p-3 border-l-4 border-[#fcba19]">
            <p className="text-[#333333] text-[13px] m-0">
              <strong className="text-[#26374a]">Note:</strong> Your FHSA contribution room is updated based on information from your financial institution. Contributions made in the current year may take time to appear. Always verify your current room with your FHSA issuer before making large contributions to avoid over-contributions.
            </p>
          </div>
        </div>

        {/* Where to Find This Information */}
        <div className="bg-white px-4 py-5 border-b border-[#e1e4e7] mb-20">
          <h2 className="text-[#26374a] font-bold mb-3">Where to find this information</h2>
          <ul className="list-disc list-outside ml-5 space-y-2">
            <li className="text-[#333333] text-[15px] pl-1">In My Account under Registered plans</li>
            <li className="text-[#333333] text-[15px] pl-1">On your Notice of Assessment after filing your tax return</li>
            <li className="text-[#333333] text-[15px] pl-1">By contacting your FHSA issuer (bank or financial institution)</li>
            <li className="text-[#333333] text-[15px] pl-1">By calling the CRA at 1-800-959-8281</li>
          </ul>
        </div>
      </div>
    </div>
  );
}