import { ChevronLeft, User, Building2, Users, Mail, Clock } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';

interface CPPEIRulingScreenProps {
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
  onStartForm?: () => void; // New handler to start the form
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

export function CPPEIRulingScreen({
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
  onSubmitDocuments,
  onStartForm // New handler to start the form
}: CPPEIRulingScreenProps) {
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
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">
            CPP/EI ruling
          </h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-20">
        {/* What is a CPP/EI Ruling */}
        <div className="bg-white rounded-[10px] overflow-hidden mb-4">
          <div className="p-4 border-b border-[#E5E5EA]">
            <h2 className="text-[17px] text-black">
              What is a CPP/EI ruling?
            </h2>
          </div>
          <div className="p-4">
            <p className="text-[15px] text-[#1D1D1F] leading-[20px]">
              Request a Canada Pension Plan (CPP) and Employment Insurance ruling to determine if a worker is an employee or self-employed, whether employment or earnings are pensionable, insurable, or both.
            </p>
          </div>
        </div>

        {/* Request Type Selection */}
        <div className="bg-white rounded-[10px] overflow-hidden mb-4">
          <div className="p-4 border-b border-[#E5E5EA]">
            <h2 className="text-[17px] text-black">
              Select the type of CPP/EI ruling request
            </h2>
          </div>
          
          <div className="divide-y divide-[#E5E5EA]">
            {/* My Account */}
            <button
              onClick={onStartForm}
              className="w-full p-4 flex items-start gap-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#007AFF]/10 flex-shrink-0">
                <User className="h-5 w-5 text-[#007AFF]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[15px] text-black font-semibold mb-1">
                  My Account
                </h3>
                <p className="text-[15px] text-[#8E8E93] leading-[20px]">
                  Available for individuals (workers) and payers to request a ruling
                </p>
              </div>
              <svg className="w-5 h-5 text-[#C7C7CC] flex-shrink-0 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* My Business Account */}
            <button
              onClick={onStartForm}
              className="w-full p-4 flex items-start gap-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#007AFF]/10 flex-shrink-0">
                <Building2 className="h-5 w-5 text-[#007AFF]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[15px] text-black font-semibold mb-1">
                  My Business Account
                </h3>
                <p className="text-[15px] text-[#8E8E93] leading-[20px]">
                  Available for payers who have a business payroll account to request a ruling
                </p>
              </div>
              <svg className="w-5 h-5 text-[#C7C7CC] flex-shrink-0 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Represent a Client */}
            <button
              onClick={onStartForm}
              className="w-full p-4 flex items-start gap-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#007AFF]/10 flex-shrink-0">
                <Users className="h-5 w-5 text-[#007AFF]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[15px] text-black font-semibold mb-1">
                  Represent a Client
                </h3>
                <p className="text-[15px] text-[#8E8E93] leading-[20px]">
                  Available for authorized representatives to request a ruling on behalf of a worker or payer
                </p>
              </div>
              <svg className="w-5 h-5 text-[#C7C7CC] flex-shrink-0 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Other Ways to Request */}
        <div className="bg-white rounded-[10px] overflow-hidden mb-4">
          <div className="p-4 border-b border-[#E5E5EA]">
            <h2 className="text-[17px] text-black">
              Other ways to request a ruling
            </h2>
          </div>
          
          <div className="divide-y divide-[#E5E5EA]">
            {/* Mail */}
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8E8E93]/10 flex-shrink-0 mt-0.5">
                  <Mail className="h-4 w-4 text-[#8E8E93]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[15px] text-black font-semibold mb-1">
                    Mail
                  </h3>
                  <p className="text-[15px] text-[#1D1D1F] leading-[20px]">
                    Complete and mail the paper Form CPT1, "Request for a CPP/EI Ruling – Employee or Self-Employed?" to your designated tax services office.
                  </p>
                </div>
              </div>
            </div>

            {/* Authorized Representative */}
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8E8E93]/10 flex-shrink-0 mt-0.5">
                  <Users className="h-4 w-4 text-[#8E8E93]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[15px] text-black font-semibold mb-1">
                    Authorized Representative
                  </h3>
                  <p className="text-[15px] text-[#1D1D1F] leading-[20px]">
                    An authorized representative can use the online service or mail the form on your behalf.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Time Limits Warning */}
        <div className="bg-[#FFF3CD] rounded-[10px] p-4 mb-4 border-l-4 border-[#FFC107]">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#856404] flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-[15px] text-[#856404] leading-[20px] font-semibold mb-1">
                Time limits
              </p>
              <p className="text-[15px] text-[#856404] leading-[20px]">
                A payer or worker must generally ask for a ruling by <strong>June 29 of the year after the calendar year</strong> the question relates to.
              </p>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-white rounded-[10px] overflow-hidden mb-4">
          <div className="p-4 border-b border-[#E5E5EA]">
            <h2 className="text-[17px] text-black">
              Need help?
            </h2>
          </div>
          <div className="p-4">
            <p className="text-[15px] text-[#1D1D1F] leading-[20px] mb-3">
              If you have questions about CPP/EI rulings or need assistance:
            </p>
            <div className="space-y-2">
              <button className="w-full text-left text-[#007AFF] text-[15px] py-2 hover:opacity-70 active:opacity-50 transition-opacity">
                Call 1-800-959-8281
              </button>
              {onHelp && (
                <button
                  onClick={onHelp}
                  className="w-full text-left text-[#007AFF] text-[15px] py-2 hover:opacity-70 active:opacity-50 transition-opacity"
                >
                  Visit Help & Support →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}