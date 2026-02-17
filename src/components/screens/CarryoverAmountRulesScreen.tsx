import { ChevronLeft } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';

interface CarryoverAmountRulesScreenProps {
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
}

interface CarryForwardRule {
  title: string;
  timeLimit: string;
  description: string;
  details: string[];
}

const carryForwardRules: CarryForwardRule[] = [
  {
    title: 'Tuition and education amounts',
    timeLimit: 'Indefinite',
    description: 'You can carry forward unused federal tuition, education, and textbook amounts indefinitely.',
    details: [
      'Must be used as soon as you have taxable income',
      'Cannot be transferred to another person once carried forward',
      'Provincial amounts may have different rules'
    ]
  },
  {
    title: 'Capital losses',
    timeLimit: 'Indefinite',
    description: 'Net capital losses can be carried forward indefinitely to offset capital gains in future years.',
    details: [
      'Can only be applied against capital gains',
      'May be carried back 3 years',
      'Must maintain documentation of original transactions'
    ]
  },
  {
    title: 'Non-capital losses',
    timeLimit: '20 years',
    description: 'Non-capital losses can be carried forward for 20 years and applied against any type of income.',
    details: [
      'Can be applied to any type of income',
      'May be carried back 3 years',
      'Losses expire after 20 years if unused'
    ]
  },
  {
    title: 'Charitable donations',
    timeLimit: '5 years',
    description: 'Unclaimed charitable donation amounts can be carried forward for up to 5 years.',
    details: [
      'Must have official donation receipts',
      'Can claim any amount up to 75% of net income',
      'First-time donor super credit available for eligible donors'
    ]
  },
  {
    title: 'Medical expenses',
    timeLimit: 'None',
    description: 'Medical expenses cannot be carried forward. You can only claim expenses paid in any 12-month period ending in the tax year.',
    details: [
      'Choose the best 12-month period within the tax year',
      'Must exceed 3% of net income or $2,635 (2024)',
      'Can claim for yourself, spouse, or eligible dependants'
    ]
  },
  {
    title: 'Home buyers\' amount',
    timeLimit: 'Current year only',
    description: 'The home buyers\' amount is a one-time credit and cannot be carried forward.',
    details: [
      'Available for first-time home buyers',
      'Maximum credit of $10,000',
      'Must be claimed in the year of purchase'
    ]
  },
  {
    title: 'Investment tax credits',
    timeLimit: '20 years',
    description: 'Unused investment tax credits can generally be carried forward for 20 years.',
    details: [
      'Can be carried back 3 years',
      'Different types have different rules',
      'May be refundable in certain circumstances'
    ]
  }
];

export function CarryoverAmountRulesScreen({
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
  onCarryoverAmounts
}: CarryoverAmountRulesScreenProps) {
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Carry forward rules</h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 pt-4 pb-24">
          {/* Intro Text */}
          <div className="mb-6">
            <p className="text-[15px] text-text-gray-ios leading-relaxed">
              Learn about the rules and time limits for carrying forward various tax credits and deductions. Understanding these rules can help you maximize your tax benefits.
            </p>
          </div>

          {/* Important Notice */}
          <div className="card-ios overflow-hidden mb-6 bg-[#FFF3CD] border border-[#FFE69C]">
            <div className="px-4 py-3">
              <h3 className="text-[15px] font-semibold text-[#856404] mb-2">
                Important
              </h3>
              <p className="text-[14px] text-[#856404] leading-relaxed">
                These rules are general guidelines. Tax laws can change, and your specific situation may have unique considerations. Consult a tax professional for advice tailored to your circumstances.
              </p>
            </div>
          </div>

          {/* Rules List */}
          {carryForwardRules.map((rule, index) => (
            <div key={index} className="mb-4">
              <div className="card-ios overflow-hidden">
                <div className="px-4 py-4 border-b border-[#E5E5EA]">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-[17px] font-semibold text-text-gray-ios flex-1">
                      {rule.title}
                    </h3>
                    <div className="ml-3 px-2.5 py-1 bg-[#007AFF] rounded-[6px] flex-shrink-0">
                      <span className="text-[12px] text-white font-medium">
                        {rule.timeLimit}
                      </span>
                    </div>
                  </div>
                  <p className="text-[15px] text-text-gray-ios leading-relaxed">
                    {rule.description}
                  </p>
                </div>
                <div className="px-4 py-3">
                  <h4 className="text-[13px] text-[#3C3C43] mb-2 font-semibold">
                    Key points:
                  </h4>
                  <ul className="space-y-2">
                    {rule.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <span className="text-[#007AFF] mr-2 flex-shrink-0">•</span>
                        <span className="text-[14px] text-text-gray-ios leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* Additional Resources */}
          <div className="mt-6 card-ios overflow-hidden">
            <div className="px-4 py-3 border-b border-[#E5E5EA]">
              <h3 className="text-[17px] font-semibold text-text-gray-ios">
                Need more help?
              </h3>
            </div>
            <div className="px-4 py-4">
              <p className="text-[15px] text-text-gray-ios leading-relaxed mb-3">
                For detailed information about specific carry forward amounts and how they apply to your situation, you can:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#007AFF] mr-2 flex-shrink-0">•</span>
                  <span className="text-[15px] text-text-gray-ios leading-relaxed">
                    Review your Notice of Assessment for your current carryover balances
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007AFF] mr-2 flex-shrink-0">•</span>
                  <span className="text-[15px] text-text-gray-ios leading-relaxed">
                    Contact CRA for personalized assistance
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007AFF] mr-2 flex-shrink-0">•</span>
                  <span className="text-[15px] text-text-gray-ios leading-relaxed">
                    Consult with a tax professional or accountant
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 px-4 py-3 bg-[#f2f2f7] rounded-[10px]">
            <p className="text-[12px] text-[#3C3C43] leading-relaxed">
              This information is provided for general reference only and should not be considered legal or tax advice. Tax rules and limits are subject to change. Always refer to the latest CRA guidelines or consult with a qualified tax professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}