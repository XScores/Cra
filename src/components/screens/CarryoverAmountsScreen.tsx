import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';

interface CarryoverAmountsScreenProps {
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
  onViewCarryForwardRules?: () => void;
  onChangeMyReturn?: () => void;
  onRegisterFormalDispute?: () => void;
  onNonResidentAccount?: () => void;
  onResidencyDetermination?: () => void;
  onPersonalIdentificationNumber?: () => void;
  onProgressTrackerService?: () => void;
  onReliefOfPenalties?: () => void;
  onSubmitDocuments?: () => void;
}

interface CarryoverAmount {
  title: string;
  amount: string;
  description: string;
  year: string;
}

const carryoverData: CarryoverAmount[] = [
  {
    title: 'Tuition and education amounts',
    amount: '$8,450',
    description: 'Available federal tuition amount to carry forward',
    year: '2024'
  },
  {
    title: 'Capital losses',
    amount: '$2,350',
    description: 'Net capital losses available to carry forward',
    year: '2023'
  },
  {
    title: 'Non-capital losses',
    amount: '$0',
    description: 'No non-capital losses available',
    year: '2024'
  },
  {
    title: 'Charitable donations',
    amount: '$1,200',
    description: 'Unused charitable donations from previous years',
    year: '2023-2024'
  },
  {
    title: 'Medical expenses',
    amount: '$0',
    description: 'No medical expenses available to carry forward',
    year: '2024'
  },
  {
    title: 'Home buyers\' amount',
    amount: '$0',
    description: 'Home buyers\' amount not previously claimed',
    year: '2024'
  },
  {
    title: 'Pension income amount',
    amount: '$0',
    description: 'No pension income amount to carry forward',
    year: '2024'
  }
];

export function CarryoverAmountsScreen({
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
  onViewCarryForwardRules,
  onChangeMyReturn,
  onRegisterFormalDispute,
  onNonResidentAccount,
  onResidencyDetermination,
  onPersonalIdentificationNumber,
  onProgressTrackerService,
  onReliefOfPenalties,
  onSubmitDocuments
}: CarryoverAmountsScreenProps) {
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Carryover amounts</h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 pt-4 pb-24">
          {/* Intro Text */}
          <div className="mb-6">
            <p className="text-[15px] text-text-gray-ios leading-relaxed">
              View amounts that you can carry forward from previous years to reduce your taxable income. These amounts are based on your most recent tax return.
            </p>
          </div>

          {/* Summary Card */}
          <div className="card-ios overflow-hidden mb-6">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <div className="text-[13px] text-[#3C3C43] mb-1">Total carryover value</div>
              <div className="text-[28px] font-semibold text-[#007AFF]">$12,000</div>
            </div>
            <div className="px-4 py-3">
              <p className="text-[13px] text-[#3C3C43]">
                This is the total value of amounts available to carry forward to future tax years.
              </p>
            </div>
          </div>

          {/* Carryover Amounts List */}
          <div className="mb-2">
            <h2 className="text-[13px] text-[#3C3C43] mb-1.5 ml-4">
              Available amounts
            </h2>
          </div>

          <div className="card-ios overflow-hidden">
            {carryoverData.map((item, index) => (
              <div
                key={index}
                className={`px-4 py-3 flex items-center justify-between ${
                  index < carryoverData.length - 1 ? 'border-b border-[#E5E5EA]' : ''
                }`}
              >
                <div className="flex-1 min-w-0 pr-3">
                  <div className="text-[17px] text-text-gray-ios mb-0.5">{item.title}</div>
                  <div className="text-[13px] text-[#3C3C43] mb-0.5">{item.description}</div>
                  <div className="text-[13px] text-[#3C3C43]">Tax year: {item.year}</div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className={`text-[17px] font-semibold ${
                    item.amount === '$0' ? 'text-[#3C3C43]' : 'text-[#007AFF]'
                  }`}>
                    {item.amount}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Information Section */}
          <div className="mt-6 card-ios overflow-hidden">
            <div className="px-4 py-4">
              <h3 className="text-[17px] font-semibold text-text-gray-ios mb-2">
                About carryover amounts
              </h3>
              <p className="text-[15px] text-text-gray-ios leading-relaxed mb-3">
                Carryover amounts are deductions and credits that you didn't fully use in previous years. You can apply these amounts to future tax returns to reduce your taxable income.
              </p>
              <p className="text-[15px] text-text-gray-ios leading-relaxed">
                <span className="font-semibold">Important:</span> Some amounts have time limits. For example, non-capital losses can be carried forward for 20 years, while capital losses can be carried forward indefinitely.
              </p>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-6 card-ios overflow-hidden">
            <div className="px-4 py-3 border-b border-[#E5E5EA]">
              <h3 className="text-[17px] font-semibold text-text-gray-ios">
                Need more information?
              </h3>
            </div>
            <button 
              onClick={onViewCarryForwardRules}
              className="w-full px-4 py-3 flex items-center justify-between active:bg-[#E5E5EA] transition-colors"
            >
              <span className="text-[17px] text-[#007AFF]">View carry forward rules</span>
              <ChevronRight className="w-5 h-5 text-[#007AFF]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}