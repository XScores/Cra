import { ChevronLeft, CheckCircle } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';

interface CPPEIRulingConfirmationScreenProps {
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
}

export function CPPEIRulingConfirmationScreen({
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
  onCPPEIRuling
}: CPPEIRulingConfirmationScreenProps) {
  return (
    <div className="flex flex-col h-full bg-[#f2f2f7]">
      {/* Header - Fixed */}
      <div className="flex-shrink-0 bg-white border-b border-[#E5E5EA]">
        <div className="flex items-center h-[58px] px-2">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-10 h-10 -ml-2 hover:opacity-70 active:opacity-50 transition-opacity"
          >
            <ChevronLeft className="h-8 w-8 text-[#007AFF]" strokeWidth={2} />
          </button>
          <h1 className="flex-1 text-center pr-8 text-[17px] font-semibold text-black">
            Confirmation
          </h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 py-6 pb-24">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[#34C759] flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
          </div>
        </div>

        {/* Success Message */}
        <div className="bg-white rounded-[10px] overflow-hidden mb-4 p-6">
          <h2 className="text-[22px] font-semibold text-black text-center mb-2">
            Request submitted
          </h2>
          <p className="text-[17px] text-center text-black opacity-80">
            Your CPP/EI ruling request has been successfully submitted.
          </p>
        </div>

        {/* What happens next */}
        <div className="bg-white rounded-[10px] overflow-hidden mb-4">
          <div className="p-4 border-b border-[#E5E5EA]">
            <h3 className="text-[17px] font-semibold text-black">
              What happens next
            </h3>
          </div>
          <div className="p-4 space-y-4">
            <p className="text-[15px] text-black leading-relaxed">
              Once a Ruling has been requested, an authorized CRA Rulings officer will contact the worker and the payer to discuss the working arrangement that was (or is) in place. Sometimes the officer has to ask the employer for more information such as payroll records, copies of written contracts or other related documents.
            </p>
            <p className="text-[15px] text-black leading-relaxed">
              On receipt of the necessary information, the officer will decide whether or not the worker was (or is) an employee working in pensionable or insurable employment for purposes of the Canada Pension Plan (CPP), the Employment Insurance Act (EIA), or both.
            </p>
            <p className="text-[15px] text-black leading-relaxed">
              Once a Ruling has been made, the Rulings officer sends a letter informing the worker and the payer of the decision.
            </p>
          </div>
        </div>

        {/* Appeal Process */}
        <div className="bg-white rounded-[10px] overflow-hidden mb-4">
          <div className="p-4 border-b border-[#E5E5EA]">
            <h3 className="text-[17px] font-semibold text-black">
              The Appeal process for CPP/EI
            </h3>
          </div>
          <div className="p-4 space-y-4">
            <p className="text-[15px] text-black leading-relaxed">
              Every Ruling can be appealed and the procedure for doing so is explained in a letter that is sent to the worker and the payer. You can file an appeal by writing to the Chief of Appeals at your local tax services office. If you prefer, you can use Form CPT100, Appeal Under the Canada Pension Plan and/or Employment Insurance Act. A printable copy of this form is available under the "Forms and publications" section on the CRA welcome page.
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="flex-shrink-0 bg-white border-t border-[#E5E5EA] p-4">
        <button
          onClick={onNavigateHome}
          className="w-full py-3 px-4 rounded-[10px] bg-[#007AFF] text-white hover:bg-[#0051D5] active:bg-[#004BB8] transition-all"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}
