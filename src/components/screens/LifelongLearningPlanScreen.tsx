import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, GraduationCap, BookOpen, DollarSign, Calendar, AlertCircle, FileText, CheckCircle, Info } from 'lucide-react';

interface LifelongLearningPlanScreenProps {
  onBack: () => void;
  onNavigateHome?: () => void;
  onViewMail?: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onHelp?: () => void;
  onBecomeRepresentative?: () => void;
  onBecomeRepresentativeAsRep?: () => void;
  hasUnreadMail?: boolean;
  // Search navigation handlers (IOSFIX pattern)
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

export function LifelongLearningPlanScreen({
  onBack,
  onNavigateHome,
  onViewMail,
  onFileTaxes,
  onMakePayment,
  onBenefitsAndCredits,
  onRegisteredPlans,
  onSignOut,
  onTaxSlips,
  onProofOfIncome,
  onHelp,
  onBecomeRepresentative,
  onBecomeRepresentativeAsRep,
  hasUnreadMail = false,
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
}: LifelongLearningPlanScreenProps) {
  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      {/* Header */}
      <HeaderMaster 
        title="Lifelong Learning Plan"
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Lifelong Learning Plan</h1>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Overview Card */}
        <div className="px-4 pt-3 pb-3">
          <div className="card-ios p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-[#007AFF]/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-6 w-6 text-[#007AFF]" />
              </div>
              <div className="flex-1">
                <h2 className="text-black text-[20px] mb-2">What is the Lifelong Learning Plan?</h2>
                <p className="text-gray-ios text-[15px] leading-relaxed">
                  The Lifelong Learning Plan (LLP) allows you to withdraw funds from your RRSP to finance full-time training or education for you or your spouse/common-law partner.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Your LLP Status */}
        <div className="section-header-ios">
          Your LLP Status
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios overflow-hidden">
            <div className="px-4 py-3">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="h-5 w-5 text-[#34C759] flex-shrink-0" />
                <div className="text-black text-[17px]">Active Plan</div>
              </div>
              <div className="text-gray-ios text-[15px] leading-relaxed">
                You have an active Lifelong Learning Plan with funds withdrawn from your RRSP.
              </div>
            </div>
          </div>
        </div>

        {/* Balance Summary */}
        <div className="section-header-ios">
          Balance Summary
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios overflow-hidden">
            <div className="list-item-ios px-4 py-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-ios text-[15px]">Total Withdrawn</span>
                <span className="text-black text-[17px]">$15,000.00</span>
              </div>
            </div>
            
            <div className="list-item-ios px-4 py-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-ios text-[15px]">Amount Repaid</span>
                <span className="text-black text-[17px]">$3,000.00</span>
              </div>
            </div>
            
            <div className="list-item-ios px-4 py-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-ios text-[15px]">Outstanding Balance</span>
                <span className="text-black text-[17px]">$12,000.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Repayment Information */}
        <div className="section-header-ios">
          Repayment Information
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios overflow-hidden">
            <div className="list-item-ios px-4 py-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-ios text-[15px]">Repayment Period Starts</span>
                <span className="text-black text-[17px]">2025</span>
              </div>
            </div>
            
            <div className="list-item-ios px-4 py-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-ios text-[15px]">Years Remaining</span>
                <span className="text-black text-[17px]">7 years</span>
              </div>
            </div>
            
            <div className="list-item-ios px-4 py-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-ios text-[15px]">Minimum Annual Repayment</span>
                <span className="text-black text-[17px]">$1,714.29</span>
              </div>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="section-header-ios">
          Important Information
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios p-4">
            <div className="flex items-start gap-3 mb-4">
              <Info className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-black text-[17px] mb-2">Key Points</h3>
                <ul className="list-disc ml-5 space-y-2">
                  <li className="text-gray-ios text-[15px] leading-relaxed">
                    You can withdraw up to $10,000 per calendar year, to a maximum of $20,000
                  </li>
                  <li className="text-gray-ios text-[15px] leading-relaxed">
                    You have up to 10 years to repay the amounts withdrawn
                  </li>
                  <li className="text-gray-ios text-[15px] leading-relaxed">
                    Repayments begin the earlier of: the sixth year after your first withdrawal, or 60 days after you cease full-time studies
                  </li>
                  <li className="text-gray-ios text-[15px] leading-relaxed">
                    If you don't repay the minimum amount, it will be included in your income for that year
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Eligible Education Programs */}
        <div className="section-header-ios">
          Eligible Education Programs
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios p-4">
            <div className="flex items-start gap-3">
              <BookOpen className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-black text-[17px] mb-2">Qualifying Programs</h3>
                <p className="text-gray-ios text-[15px] leading-relaxed mb-3">
                  To qualify, the training or education must be for you or your spouse/common-law partner at a designated educational institution.
                </p>
                <p className="text-gray-ios text-[15px] leading-relaxed">
                  The program must qualify for the education amount on a tax return and require at least 10 hours per week on courses or work in the program.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Need Help */}
        <div className="section-header-ios">
          Need Help?
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-black text-[17px] mb-2">Contact Us</h3>
                <p className="text-gray-ios text-[15px] leading-relaxed">
                  If you have questions about your Lifelong Learning Plan or need assistance with repayment, please contact us through the Help section or call 1-800-959-8281.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}