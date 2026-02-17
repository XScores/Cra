import { HeaderMaster } from '../HeaderMaster';
import { FileText, AlertCircle, CheckCircle, Mail, Calendar, ChevronLeft } from 'lucide-react';

interface FAQNoticeOfAssessmentScreenProps {
  onBack: () => void;
  onViewMail?: () => void;
  onNavigateHome?: () => void;
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
  onBecomeRepresentativeAsRep?: () => void;
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

export function FAQNoticeOfAssessmentScreen({ onBack, onViewMail, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onBecomeRepresentative, onBecomeRepresentativeAsRep, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments }: FAQNoticeOfAssessmentScreenProps) {
  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      <HeaderMaster 
        title="My Account"
        largeTitle={true}
        showSearch={true}
        showMenu={true}
        onNavigateHome={onNavigateHome}
        onLogoClick={onNavigateHome}
        onSearchClick={onNavigateHome}
        hasUnreadMail={false}
        onFileTaxes={onFileTaxes}
        onViewAllBenefits={onBenefitsAndCredits}
        onMakePayment={onMakePayment}
        onViewMail={onViewMail}
        onRegisteredPlans={onRegisteredPlans}
        onTaxSlips={onTaxSlips}
        onProofOfIncome={onProofOfIncome}
        onHelp={onHelp}
        onSignOut={onSignOut}
        onViewRefundDetails={onViewRefundDetails}
        onViewNoticeOfAssessment={onViewNoticeOfAssessment}
        onGSTHSTCredit={onGSTHSTCredit}
        onAccountDetails={onAccountDetails}
        onProfile={onProfile}
        onViewTaxReturns={onViewTaxReturns}
        onHomeBuyersPlan={onHomeBuyersPlan}
        onFHSAEligibility={onFHSAEligibility}
        onBecomeRepresentative={onBecomeRepresentative}
        onBecomeRepresentativeAsRep={onBecomeRepresentativeAsRep}
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
      />

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-start gap-3 mb-1">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0 mt-[3px]"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[1.2]">What is a Notice of Assessment?</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Understanding your notice of assessment and what to do if you disagree</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        <div className="px-4">
          {/* What is it */}
          <div className="mb-4">
            <div className="card-ios p-4">
              <div className="flex items-start gap-3 mb-3">
                <FileText className="h-6 w-6 text-[#007AFF] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-black text-[15px] m-0 mb-3 opacity-80">
                    A Notice of Assessment (NOA) is an official document from the CRA that shows the results of your income tax return assessment. It's sent to you after the CRA processes your tax return.
                  </p>
                  <p className="text-black text-[15px] m-0 opacity-80">
                    Think of it as a detailed receipt showing what the CRA calculated based on the information you provided in your tax return.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What's included */}
          <div className="mb-4">
            <h3 className="text-black mb-3">What information is included?</h3>
            <div className="card-ios p-4">
              <p className="text-black text-[15px] m-0 mb-3 opacity-80">
                Your Notice of Assessment includes:
              </p>
              <ul className="list-none m-0 p-0 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] mt-1 text-[20px] leading-none">•</span>
                  <div>
                    <span className="text-black text-[15px] font-semibold">Refund or balance owing</span>
                    <p className="text-black text-[14px] m-0 mt-1 opacity-80">Whether you're receiving a refund or need to pay a balance</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] mt-1 text-[20px] leading-none">•</span>
                  <div>
                    <span className="text-black text-[15px] font-semibold">RRSP deduction limit</span>
                    <p className="text-black text-[14px] m-0 mt-1 opacity-80">Your available RRSP contribution room for the next year</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] mt-1 text-[20px] leading-none">•</span>
                  <div>
                    <span className="text-black text-[15px] font-semibold">TFSA contribution room</span>
                    <p className="text-black text-[14px] m-0 mt-1 opacity-80">Your available TFSA contribution limit</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] mt-1 text-[20px] leading-none">•</span>
                  <div>
                    <span className="text-black text-[15px] font-semibold">Benefit and credit entitlements</span>
                    <p className="text-black text-[14px] m-0 mt-1 opacity-80">Information about GST/HST credit and Canada Child Benefit</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] mt-1 text-[20px] leading-none">•</span>
                  <div>
                    <span className="text-black text-[15px] font-semibold">Any changes made</span>
                    <p className="text-black text-[14px] m-0 mt-1 opacity-80">Details of any adjustments the CRA made to your return</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* When you receive it */}
          <div className="mb-4">
            <h3 className="text-black mb-3">When will I receive it?</h3>
            <div className="card-ios p-4">
              <div className="flex items-start gap-3 mb-3">
                <Calendar className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-black text-[15px] m-0 mb-3 opacity-80">
                    The timing depends on how you filed:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-[#f2f2f7] p-3 rounded-[10px]">
                      <p className="text-black text-[15px] m-0 mb-1 font-semibold">NETFILE (online filing)</p>
                      <p className="text-black text-[14px] m-0 opacity-80">Within 2 weeks of filing</p>
                    </div>
                    <div className="bg-[#f2f2f7] p-3 rounded-[10px]">
                      <p className="text-black text-[15px] m-0 mb-1 font-semibold">Paper return</p>
                      <p className="text-black text-[14px] m-0 opacity-80">Within 8 weeks of the CRA receiving your return</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How to access */}
          <div className="mb-4">
            <h3 className="text-black mb-3">How to access your Notice of Assessment</h3>
            <div className="card-ios p-4">
              <div className="flex items-start gap-3 mb-3">
                <Mail className="h-6 w-6 text-[#007AFF] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-black text-[15px] m-0 mb-3 opacity-80">
                    You can access your Notice of Assessment in several ways:
                  </p>
                  <ul className="list-none m-0 p-0 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#007AFF] mt-1 text-[20px] leading-none">•</span>
                      <span className="text-black text-[15px] opacity-80">CRA My Account (online or through this app)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#007AFF] mt-1 text-[20px] leading-none">•</span>
                      <span className="text-black text-[15px] opacity-80">By mail (if you haven't registered for email notifications)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#007AFF] mt-1 text-[20px] leading-none">•</span>
                      <span className="text-black text-[15px] opacity-80">Through your NETFILE-certified tax software</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Review carefully */}
          <div className="mb-4">
            <h3 className="text-black mb-3">Review your NOA carefully</h3>
            <div className="card-ios p-4">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="h-5 w-5 text-[#34C759] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-black text-[15px] m-0 mb-3 opacity-80">
                    When you receive your NOA, review it carefully to:
                  </p>
                  <ul className="list-none m-0 p-0 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#007AFF] mt-1 text-[20px] leading-none">•</span>
                      <span className="text-black text-[15px] opacity-80">Verify all information is correct</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#007AFF] mt-1 text-[20px] leading-none">•</span>
                      <span className="text-black text-[15px] opacity-80">Check if the CRA made any changes to your return</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#007AFF] mt-1 text-[20px] leading-none">•</span>
                      <span className="text-black text-[15px] opacity-80">Note your RRSP and TFSA contribution limits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#007AFF] mt-1 text-[20px] leading-none">•</span>
                      <span className="text-black text-[15px] opacity-80">Keep it for your records</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Disagree with assessment */}
          <div className="mb-4">
            <h3 className="text-black mb-3">What if I disagree with my assessment?</h3>
            <div className="card-ios p-4">
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle className="h-5 w-5 text-[#FF9500] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-black text-[15px] m-0 mb-3 opacity-80">
                    If you disagree with your assessment, you have options:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-black text-[15px] m-0 mb-1 font-semibold">Request an adjustment</p>
                      <p className="text-black text-[14px] m-0 opacity-80">
                        If you notice an error or have additional information, you can request an adjustment through My Account or by calling the CRA.
                      </p>
                    </div>
                    <div>
                      <p className="text-black text-[15px] m-0 mb-1 font-semibold">File a formal objection</p>
                      <p className="text-black text-[14px] m-0 mb-2 opacity-80">
                        You have 90 days from the date on your NOA to file a formal objection using Form T400A.
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#FFF8E1] border-l-4 border-[#FF9500] p-3 mt-3 rounded-[6px]">
                    <p className="text-black text-[14px] m-0 opacity-80">
                      <strong className="text-black">Note:</strong> Even if you disagree with your assessment, you must still pay any balance owing by the due date to avoid interest charges. If your objection is successful, you'll receive a refund with interest.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Keep your NOA */}
          <div className="bg-[#E3F2FD] border-l-4 border-[#007AFF] p-4 rounded-[6px]">
            <h4 className="text-black mb-2">Keep your Notice of Assessment</h4>
            <p className="text-black text-[15px] m-0 opacity-80">
              Your NOA is an important document that may be required when applying for a mortgage, student loans, or other financial services. Keep all your NOAs in a safe place for future reference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}