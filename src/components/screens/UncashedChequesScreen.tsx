import { ChevronLeft } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';

interface UncashedChequesScreenProps {
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
  onBecomeRepresentative?: () => void;
  onBecomeRepresentativeAsRep?: () => void;
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

export function UncashedChequesScreen({
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
  onBecomeRepresentative,
  onBecomeRepresentativeAsRep,
  onUncashedCheques,
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
}: UncashedChequesScreenProps) {
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
        onBecomeRepresentative={onBecomeRepresentative}
        onBecomeRepresentativeAsRep={onBecomeRepresentativeAsRep}
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
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">
            Uncashed cheques
          </h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-20">
        {/* No Uncashed Cheques Message */}
        <div className="bg-white rounded-[10px] overflow-hidden mb-4">
          <div className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#34C759]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#34C759]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-[17px] text-black mb-1">
                  No uncashed cheques
                </h2>
                <p className="text-[15px] text-[#8E8E93] leading-[20px]">
                  You currently have no outstanding cheques to cash because you have direct deposit active for your CRA payments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Deposit Information */}
        <div className="bg-white rounded-[10px] overflow-hidden mb-4">
          <div className="p-4 border-b border-[#E5E5EA]">
            <h2 className="text-[17px] text-black">
              Direct deposit information
            </h2>
          </div>
          
          <div className="divide-y divide-[#E5E5EA]">
            {/* Status */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-[15px] text-[#8E8E93]">Status</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#34C759]"></div>
                  <span className="text-[17px] text-black">Active</span>
                </div>
              </div>
            </div>

            {/* Financial Institution */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-[15px] text-[#8E8E93]">Financial institution</span>
                <span className="text-[17px] text-black">TD Canada Trust</span>
              </div>
            </div>

            {/* Institution Number */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-[15px] text-[#8E8E93]">Institution number</span>
                <span className="text-[17px] text-black font-mono">004</span>
              </div>
            </div>

            {/* Branch Number */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-[15px] text-[#8E8E93]">Branch number</span>
                <span className="text-[17px] text-black font-mono">12345</span>
              </div>
            </div>

            {/* Account Number */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-[15px] text-[#8E8E93]">Account number</span>
                <span className="text-[17px] text-black font-mono">••••••7890</span>
              </div>
            </div>

            {/* Account Type */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-[15px] text-[#8E8E93]">Account type</span>
                <span className="text-[17px] text-black">Chequing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Information Card */}
        <div className="bg-[#007AFF]/5 rounded-[10px] p-4 mb-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#007AFF] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div className="flex-1">
              <p className="text-[15px] text-[#1D1D1F] leading-[20px]">
                With direct deposit, your CRA payments are automatically deposited into your bank account. This includes tax refunds, benefit payments, and credits.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits List */}
        <div className="bg-white rounded-[10px] overflow-hidden mb-4">
          <div className="p-4 border-b border-[#E5E5EA]">
            <h2 className="text-[17px] text-black">
              Benefits of direct deposit
            </h2>
          </div>
          
          <div className="divide-y divide-[#E5E5EA]">
            <div className="p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34C759] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[15px] text-[#1D1D1F]">
                  Faster access to your money
                </p>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34C759] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[15px] text-[#1D1D1F]">
                  No need to visit the bank to deposit cheques
                </p>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34C759] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[15px] text-[#1D1D1F]">
                  No risk of lost or stolen cheques
                </p>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#34C759] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[15px] text-[#1D1D1F]">
                  Secure and environmentally friendly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}