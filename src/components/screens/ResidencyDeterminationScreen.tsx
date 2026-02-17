import { ChevronLeft, Info, Calendar, MapPin, Home, Briefcase, Users } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';

interface ResidencyDeterminationScreenProps {
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

export function ResidencyDeterminationScreen({
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
}: ResidencyDeterminationScreenProps) {
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Residency determination</h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 pt-4 pb-24">
          
          {/* Introduction */}
          <div className="mb-6">
            <p className="text-[15px] text-text-gray-ios leading-relaxed">
              Your residency status determines your tax obligations in Canada. The CRA uses specific criteria to determine whether you are a resident, non-resident, or deemed resident of Canada for tax purposes.
            </p>
          </div>

          {/* Residency Status Types */}
          <div className="mb-2">
            <h2 className="text-[13px] text-[#3C3C43] mb-1.5 ml-4">
              Types of residency status
            </h2>
          </div>

          <div className="card-ios overflow-hidden mb-6">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <div className="flex items-start gap-3">
                <Home className="w-5 h-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[17px] font-semibold text-black mb-2">Resident of Canada</h3>
                  <p className="text-[15px] text-text-gray-ios leading-relaxed mb-2">
                    You are generally considered a resident if you have significant residential ties to Canada, such as:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li className="text-text-gray-ios">A home in Canada</li>
                    <li className="text-text-gray-ios">A spouse or common-law partner in Canada</li>
                    <li className="text-text-gray-ios">Dependants in Canada</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[17px] font-semibold text-black mb-2">Non-resident of Canada</h3>
                  <p className="text-[15px] text-text-gray-ios leading-relaxed mb-2">
                    You are generally considered a non-resident if you:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li className="text-text-gray-ios">Left Canada and established residential ties in another country</li>
                    <li className="text-text-gray-ios">Do not have significant residential ties to Canada</li>
                    <li className="text-text-gray-ios">Stayed outside Canada for 183 days or more in the tax year</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="px-4 py-4">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[17px] font-semibold text-black mb-2">Deemed resident</h3>
                  <p className="text-[15px] text-text-gray-ios leading-relaxed mb-2">
                    You may be considered a deemed resident if you:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li className="text-text-gray-ios">Stayed in Canada for 183 days or more in the tax year</li>
                    <li className="text-text-gray-ios">Do not have significant residential ties to Canada</li>
                    <li className="text-text-gray-ios">Are not considered a resident of another country under a tax treaty</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Significant Residential Ties */}
          <div className="card-ios overflow-hidden mb-6">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <h2 className="text-[17px] font-semibold text-black">Significant residential ties</h2>
            </div>
            <div className="px-4 py-4">
              <p className="text-[15px] text-text-gray-ios leading-relaxed mb-3">
                Significant residential ties to Canada include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-text-gray-ios">
                  <span className="font-semibold">Dwelling place:</span> A home in Canada available for your use
                </li>
                <li className="text-text-gray-ios">
                  <span className="font-semibold">Spouse or common-law partner:</span> Who remains in Canada while you are abroad
                </li>
                <li className="text-text-gray-ios">
                  <span className="font-semibold">Dependants:</span> Children or other dependants who remain in Canada
                </li>
              </ul>
            </div>
          </div>

          {/* Secondary Residential Ties */}
          <div className="card-ios overflow-hidden mb-6">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <h2 className="text-[17px] font-semibold text-black">Secondary residential ties</h2>
            </div>
            <div className="px-4 py-4">
              <p className="text-[15px] text-text-gray-ios leading-relaxed mb-3">
                Secondary residential ties may also be considered and include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-text-gray-ios">Personal property in Canada (furniture, clothing, automobile)</li>
                <li className="text-text-gray-ios">Social ties in Canada (memberships in Canadian organizations)</li>
                <li className="text-text-gray-ios">Economic ties in Canada (employment, business, bank accounts, credit cards)</li>
                <li className="text-text-gray-ios">Provincial or territorial health insurance coverage</li>
                <li className="text-text-gray-ios">Canadian driver's license</li>
                <li className="text-text-gray-ios">Canadian passport</li>
              </ul>
            </div>
          </div>

          {/* Determining Your Status */}
          <div className="card-ios overflow-hidden mb-6">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <h2 className="text-[17px] font-semibold text-black">How to determine your status</h2>
            </div>
            <div className="px-4 py-4">
              <p className="text-[15px] text-text-gray-ios leading-relaxed mb-3">
                To determine your residency status, you can:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-text-gray-ios">
                  Complete Form NR73 (Determination of Residency Status - Leaving Canada)
                </li>
                <li className="text-text-gray-ios">
                  Complete Form NR74 (Determination of Residency Status - Entering Canada)
                </li>
                <li className="text-text-gray-ios">
                  Contact the CRA International Tax Services Office for guidance
                </li>
                <li className="text-text-gray-ios">
                  Review your residential ties and consider how long you've been outside Canada
                </li>
              </ul>
            </div>
          </div>

          {/* Tax Implications */}
          <div className="card-ios overflow-hidden mb-6">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <h2 className="text-[17px] font-semibold text-black">Tax implications by status</h2>
            </div>
            <div className="px-4 py-4">
              <div className="mb-4">
                <h3 className="text-[15px] font-semibold text-black mb-2">Residents of Canada</h3>
                <p className="text-[15px] text-text-gray-ios leading-relaxed">
                  Taxed on worldwide income. Must report all income from Canadian and foreign sources.
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-[15px] font-semibold text-black mb-2">Non-residents of Canada</h3>
                <p className="text-[15px] text-text-gray-ios leading-relaxed">
                  Taxed only on Canadian-source income. Part XIII tax may apply to certain types of Canadian income.
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-black mb-2">Deemed residents</h3>
                <p className="text-[15px] text-text-gray-ios leading-relaxed">
                  Taxed on worldwide income similar to residents, but may not be eligible for certain benefits and credits.
                </p>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-[#FFF4E5] border border-[#FFE0B2] rounded-xl p-4 mb-6 flex gap-3">
            <Info className="w-5 h-5 text-[#F57C00] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[15px] text-black mb-2">
                <span className="font-semibold">Important</span>
              </p>
              <p className="text-[13px] text-[#3C3C43]">
                Your residency status can change over time. If your situation changes, you should inform the CRA and may need to complete a new determination form. Processing time for residency determinations typically takes 4 to 6 months.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}