import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, Home, Info } from 'lucide-react';

interface HomeBuyersPlanScreenProps {
  onBack: () => void;
  onNavigateHome?: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onViewMail?: () => void;
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
  onLifelongLearningPlan?: () => void;
  onCustomize?: () => void;
  onUncashedCheques?: () => void;
  onBecomeRepresentative?: () => void;
  onBecomeRepresentativeAsRep?: () => void;
  onFHSA?: () => void;
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

export function HomeBuyersPlanScreen({
  onBack,
  onNavigateHome,
  onFileTaxes,
  onMakePayment,
  onBenefitsAndCredits,
  onRegisteredPlans,
  onTaxSlips,
  onProofOfIncome,
  onHelp,
  onSignOut,
  onViewMail,
  hasUnreadMail = false,
  onBecomeRepresentative,
  onBecomeRepresentativeAsRep,
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
  onFHSA,
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
}: HomeBuyersPlanScreenProps) {
  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      {/* Header */}
      <HeaderMaster 
        title="Home Buyers' Plan"
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
        onBecomeRepresentativeAsRep={onBecomeRepresentativeAsRep}
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
        onFHSA={onFHSA}
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
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Home Buyers' Plan</h1>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Program Description */}
        <div className="section-header-ios">
          About the Home Buyers' Plan
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios p-4">
            <p className="text-black text-[15px] leading-relaxed m-0 mb-4">
              The Home Buyers' Plan (HBP) is a program that allows you to withdraw from your registered retirement savings plans (RRSPs) to buy or build a qualifying home for yourself or for a specified disabled person.
            </p>
            <p className="text-black text-[15px] leading-relaxed m-0">
              Currently the HBP withdrawal limit is <span className="font-semibold">$60,000</span>.
            </p>
          </div>
        </div>

        {/* Note Section */}
        <div className="section-header-ios">
          Important Information
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios overflow-hidden">
            <div className="p-4 bg-[#007AFF]/5 border-l-4 border-[#007AFF]">
              <div className="flex gap-3">
                <Info className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-black text-[15px] font-semibold mb-2">Note</div>
                  <p className="text-black text-[15px] leading-relaxed m-0">
                    You can withdraw amounts from your RRSP under the HBP and make a qualifying withdrawal from your first home savings account (FHSA) for the same qualifying home, as long as you meet all of the conditions at the time of each withdrawal.
                  </p>
                  {onFHSAEligibility && (
                    <button
                      onClick={onFHSAEligibility}
                      className="mt-3 text-[#007AFF] text-[15px] hover:opacity-70 active:opacity-50 transition-opacity"
                    >
                      Learn more about First Home Savings Account (FHSA) →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="section-header-ios">
          Related Plans
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios overflow-hidden">
            <button onClick={onRegisteredPlans} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3">
                <Home className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px]">RRSP</div>
                  <div className="text-gray-ios text-[15px]">View your RRSP information</div>
                </div>
              </div>
            </button>

            {onFHSAEligibility && (
              <button onClick={onFHSAEligibility} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-black text-[17px]">FHSA</div>
                    <div className="text-gray-ios text-[15px]">View your FHSA information</div>
                  </div>
                </div>
              </button>
            )}

            {onLifelongLearningPlan && (
              <button onClick={onLifelongLearningPlan} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-black text-[17px]">LLP</div>
                    <div className="text-gray-ios text-[15px]">View your LLP information</div>
                  </div>
                </div>
              </button>
            )}

            {onCustomize && (
              <button onClick={onCustomize} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-black text-[17px]">Customize</div>
                    <div className="text-gray-ios text-[15px]">Customize your plan</div>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}