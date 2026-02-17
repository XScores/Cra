import { ChevronLeft, Info, AlertCircle, Shield, Lock } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';

interface PersonalIdentificationNumberScreenProps {
  onBack: () => void;
  onCreatePIN?: () => void;
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
  onBecomeRepresentativeAsRep?: () => void;
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

export function PersonalIdentificationNumberScreen({
  onBack,
  onCreatePIN,
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
  onBecomeRepresentativeAsRep,
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
}: PersonalIdentificationNumberScreenProps) {
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
        onBecomeRepresentativeAsRep={onBecomeRepresentativeAsRep}
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
        <div className="flex items-start gap-3">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0 mt-[6px]"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[34px]">Personal Identification Number</h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 pt-4 pb-24">
          
          {/* Security Alert */}
          <div className="bg-[#FFE5E5] border border-[#FFCCCC] rounded-xl p-4 mb-6 flex gap-3">
            <Shield className="w-5 h-5 text-[#D32F2F] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[15px] text-black mb-2">
                <span className="font-semibold">Protect your PIN</span>
              </p>
              <p className="text-[13px] text-[#3C3C43]">
                Never share your Personal Identification Number with anyone, including CRA representatives. The CRA will never ask for your full PIN.
              </p>
            </div>
          </div>

          {/* What is a PIN */}
          <div className="card-ios overflow-hidden mb-6">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <h2 className="text-[17px] font-semibold text-black">What is a Personal Identification Number (PIN)</h2>
            </div>
            <div className="px-4 py-4">
              <p className="text-[15px] text-text-gray-ios leading-relaxed mb-3">
                Your Personal Identification Number (PIN) is a secure code that you use along with your social insurance number (SIN) to access certain CRA services, such as:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-text-gray-ios">
                  Telephone Information Service (TIP)
                </li>
                <li className="text-text-gray-ios">
                  Tax Information Phone Service (TIPS)
                </li>
                <li className="text-text-gray-ios">
                  Some automated phone services
                </li>
                <li className="text-text-gray-ios">
                  Authorize a representative by phone
                </li>
              </ul>
            </div>
          </div>

          {/* How to get a PIN */}
          <div className="card-ios overflow-hidden mb-6">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <h2 className="text-[17px] font-semibold text-black">How to get a PIN</h2>
            </div>
            <div className="px-4 py-4">
              <p className="text-[15px] text-text-gray-ios leading-relaxed mb-3">
                If you don't have a PIN or have forgotten it, you can request one by:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-text-gray-ios">
                  Calling the CRA at 1-800-959-8281
                </li>
                <li className="text-text-gray-ios">
                  Visiting a Service Canada office with valid identification
                </li>
                <li className="text-text-gray-ios">
                  Through My Account online (for PIN resets)
                </li>
              </ul>
              <p className="text-[15px] text-text-gray-ios leading-relaxed mt-3">
                The CRA will mail your PIN to your address on file within 5 to 10 business days for security purposes.
              </p>
            </div>
          </div>

          {/* PIN vs CRA user ID and password */}
          <div className="card-ios overflow-hidden mb-6">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <h2 className="text-[17px] font-semibold text-black">PIN vs CRA user ID and password</h2>
            </div>
            <div className="px-4 py-4">
              <p className="text-[15px] text-text-gray-ios leading-relaxed mb-3">
                It's important to understand the difference:
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-[15px] font-semibold text-black mb-1">Personal Identification Number (PIN)</p>
                  <p className="text-[13px] text-text-gray-ios">
                    Used with your SIN for telephone services and some automated phone systems.
                  </p>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-black mb-1">CRA user ID and password</p>
                  <p className="text-[13px] text-text-gray-ios">
                    Used to sign in to My Account and other online CRA services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Create PIN Button */}
          <button 
            onClick={onCreatePIN}
            className="btn-filled-ios w-full"
          >
            Create PIN
          </button>

        </div>
      </div>
    </div>
  );
}