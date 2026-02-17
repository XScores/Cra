import { ChevronLeft, CheckCircle } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { StepIndicator } from '../StepIndicator';

interface CPPEIRulingFormStep4ScreenProps {
  onBack: () => void;
  onNext?: () => void;
  onStepClick?: (step: number) => void;
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

export function CPPEIRulingFormStep4Screen({
  onBack,
  onNext,
  onStepClick,
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
}: CPPEIRulingFormStep4ScreenProps) {
  const [declarationAccepted, setDeclarationAccepted] = useState(false);

  const handleContinue = () => {
    if (declarationAccepted && onNext) {
      onNext();
    }
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
        <div className="flex items-center gap-3 mb-2">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">
            Request a ruling
          </h1>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="flex-shrink-0 bg-[#f2f2f7]">
        <StepIndicator currentStep={5} totalSteps={5} onStepClick={onStepClick} />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-6">
        <div className="mb-4">
          <h2 className="text-[20px] font-semibold text-black mb-1">Part E – Declaration</h2>
          <p className="text-[15px] text-[#8E8E93]">
            Please review and confirm the declaration below.
          </p>
        </div>

        <div className="space-y-4">
          {/* Declaration Card */}
          <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px]">
            <div className="mb-4">
              <p className="text-[17px] text-black leading-relaxed">
                The information given on this form and the documents included with it are true, accurate, and complete.
              </p>
            </div>

            <button
              onClick={() => setDeclarationAccepted(!declarationAccepted)}
              className="flex items-start gap-3 p-3 rounded-[10px] hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors w-full text-left"
            >
              <div className={`w-5 h-5 flex-shrink-0 rounded border-2 flex items-center justify-center ${
                declarationAccepted 
                  ? 'border-[#007AFF] bg-[#007AFF]' 
                  : 'border-[#8E8E93]'
              }`}>
                {declarationAccepted && (
                  <CheckCircle className="w-4 h-4 text-white" strokeWidth={3} />
                )}
              </div>
              <span className="text-[15px] text-black flex-1">I confirm that the information provided on this form and the documents included with it are true, accurate, and complete.</span>
            </button>
          </div>

          {/* Information Notice */}
          <div className="p-4 bg-[#E3F2FD] border border-[#90CAF9] rounded-[10px]">
            <div className="flex gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-5 h-5 rounded-full bg-[#007AFF] flex items-center justify-center">
                  <span className="text-white text-[12px] font-bold">i</span>
                </div>
              </div>
              <div>
                <p className="text-[15px] text-[#1565C0] leading-relaxed">
                  By submitting this form, you certify that the information you have provided is accurate to the best of your knowledge. Providing false or misleading information may result in penalties.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy Information Accordion */}
          <div className="bg-white border border-[#E5E5EA] rounded-[10px] overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="privacy-info" className="border-0">
                <AccordionTrigger className="px-4 text-[17px] font-medium text-black hover:no-underline">
                  How your information will be used
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  <div className="text-[15px] text-[#3C3C43] leading-relaxed space-y-3">
                    <p>
                      Personal information, including the social insurance number and the temporary tax number, is collected to apply section 26.1 of the Canada Pension Plan (CPP) and section 90 of the Employment Insurance Act (EIA). The Canada Revenue Agency (CRA) can use personal information to administer or apply either act, such as for employer compliance audits, trust account examinations, and objections to CPP/EI rulings.
                    </p>
                    <p>
                      The CRA may send this information to other government institutions, such as Employment and Social Development Canada or Service Canada and verify it with them, and vice versa. The social insurance number or temporary tax number is collected to identify a worker, since this number is used to process data, such as a record of employment, T4 slips, and statement of contributions to the Canada Pension Plan.
                    </p>
                    <p>
                      If required information is not given, the processing of a request may be delayed or the CRA can deny the request. Under the Privacy Act, individuals have a right of protection, access to and correction of their personal information, and to file a complaint with the Privacy Commissioner of Canada regarding the handling of their personal information.
                    </p>
                    <p>
                      Refer to Personal Information Bank CRA PPU 070 on Info Source at <span className="text-[#007AFF]">canada.ca/cra-info-source</span>
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="flex-shrink-0 bg-white border-t border-[#E5E5EA] p-4">
        <button
          onClick={handleContinue}
          disabled={!declarationAccepted}
          className={`w-full py-3 px-4 rounded-[10px] transition-all ${
            declarationAccepted
              ? 'bg-[#007AFF] text-white hover:bg-[#0051D5] active:bg-[#004BB8]'
              : 'bg-[#E5E5EA] text-[#8E8E93] cursor-not-allowed'
          }`}
        >
          Submit ruling request
        </button>
      </div>
    </div>
  );
}