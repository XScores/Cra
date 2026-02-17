import { ChevronLeft, Info, Clock, CheckCircle, XCircle, AlertTriangle, FileText, Calendar, TrendingUp } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';

interface ProgressTrackerServiceScreenProps {
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

export function ProgressTrackerServiceScreen({
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
}: ProgressTrackerServiceScreenProps) {
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
        <div className="flex items-start gap-3">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0 mt-[6px]"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[34px]">Progress Tracker Service</h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 pt-4 pb-24">
          
          {/* Info Alert */}
          <div className="bg-[#E5F0FF] border border-[#B3D7FF] rounded-xl p-4 mb-6 flex gap-3">
            <Info className="w-5 h-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[15px] text-black mb-2">
                <span className="font-semibold">Track your requests in real-time</span>
              </p>
              <p className="text-[13px] text-[#3C3C43]">
                Use the Progress Tracker Service to monitor the status of your CRA applications, requests, and submissions.
              </p>
            </div>
          </div>

          {/* What is Progress Tracker */}
          <div className="card-ios overflow-hidden mb-6">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <h2 className="text-[17px] font-semibold text-black">What is the Progress Tracker Service</h2>
            </div>
            <div className="px-4 py-4">
              <p className="text-[15px] text-text-gray-ios leading-relaxed mb-3">
                The Progress Tracker Service allows you to check the status of various CRA requests and applications in real-time, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-text-gray-ios">
                  Benefit applications (CCB, GST/HST credit, etc.)
                </li>
                <li className="text-text-gray-ios">
                  Tax return processing status
                </li>
                <li className="text-text-gray-ios">
                  Refund status updates
                </li>
                <li className="text-text-gray-ios">
                  Objections and disputes
                </li>
                <li className="text-text-gray-ios">
                  Adjustment requests
                </li>
                <li className="text-text-gray-ios">
                  Document submission confirmations
                </li>
              </ul>
            </div>
          </div>

          {/* Current Tracked Items */}
          <div className="card-ios overflow-hidden mb-6">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <h2 className="text-[17px] font-semibold text-black">Your tracked items</h2>
            </div>
            <div>
              {/* Item 1 - In Progress */}
              <div className="px-4 py-4 border-b border-[#E5E5EA]">
                <div className="flex items-start gap-3 mb-2">
                  <Clock className="w-5 h-5 text-[#FF9500] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-[15px] font-semibold text-black mb-1">2024 Tax Return</p>
                    <p className="text-[13px] text-text-gray-ios mb-2">Filed on November 15, 2024</p>
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-semibold text-[#FF9500]">In Progress</span>
                      <span className="text-[13px] text-[#3C3C43]">•</span>
                      <span className="text-[13px] text-[#3C3C43]">Processing</span>
                    </div>
                  </div>
                </div>
                <div className="ml-8">
                  <div className="h-1.5 bg-[#E5E5EA] rounded-full overflow-hidden">
                    <div className="h-full bg-[#FF9500] rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <p className="text-[11px] text-[#3C3C43] mt-1">Expected completion: December 10, 2024</p>
                </div>
              </div>

              {/* Item 2 - Completed */}
              <div className="px-4 py-4 border-b border-[#E5E5EA]">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#34C759] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-[15px] font-semibold text-black mb-1">GST/HST Credit Application</p>
                    <p className="text-[13px] text-text-gray-ios mb-2">Submitted on October 5, 2024</p>
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-semibold text-[#34C759]">Completed</span>
                      <span className="text-[13px] text-[#3C3C43]">•</span>
                      <span className="text-[13px] text-[#3C3C43]">Approved on November 20, 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 3 - Action Required */}
              <div className="px-4 py-4">
                <div className="flex items-start gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-[#FF3B30] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-[15px] font-semibold text-black mb-1">2023 Notice of Objection</p>
                    <p className="text-[13px] text-text-gray-ios mb-2">Filed on September 30, 2024</p>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[13px] font-semibold text-[#FF3B30]">Action Required</span>
                      <span className="text-[13px] text-[#3C3C43]">•</span>
                      <span className="text-[13px] text-[#3C3C43]">Additional documents needed</span>
                    </div>
                    <button className="text-[13px] text-[#007AFF] font-semibold">
                      View requirements →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How to use Progress Tracker */}
          <div className="card-ios overflow-hidden mb-6">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <h2 className="text-[17px] font-semibold text-black">How to use the Progress Tracker</h2>
            </div>
            <div className="px-4 py-4">
              <div className="space-y-4">
                <div>
                  <p className="text-[15px] font-semibold text-black mb-1">1. Automatic tracking</p>
                  <p className="text-[13px] text-text-gray-ios">
                    Most submissions through My Account are automatically added to your Progress Tracker.
                  </p>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-black mb-1">2. Manual tracking</p>
                  <p className="text-[13px] text-text-gray-ios">
                    You can manually add items by entering a reference number or confirmation code from paper submissions.
                  </p>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-black mb-1">3. Receive notifications</p>
                  <p className="text-[13px] text-text-gray-ios">
                    Get email or push notifications when the status of your tracked items changes.
                  </p>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-black mb-1">4. View detailed timeline</p>
                  <p className="text-[13px] text-text-gray-ios">
                    Tap on any item to see a detailed timeline of all processing steps and actions taken.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Status meanings */}
          <div className="card-ios overflow-hidden mb-6">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <h2 className="text-[17px] font-semibold text-black">Understanding status indicators</h2>
            </div>
            <div className="px-4 py-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#FF9500] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[15px] font-semibold text-black mb-1">In Progress</p>
                    <p className="text-[13px] text-text-gray-ios">
                      Your request is being processed. No action required at this time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#34C759] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[15px] font-semibold text-black mb-1">Completed</p>
                    <p className="text-[13px] text-text-gray-ios">
                      Your request has been processed and completed successfully.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#FF3B30] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[15px] font-semibold text-black mb-1">Action Required</p>
                    <p className="text-[13px] text-text-gray-ios">
                      We need additional information or documents from you to continue processing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#8E8E93] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[15px] font-semibold text-black mb-1">Closed</p>
                    <p className="text-[13px] text-text-gray-ios">
                      This request has been closed or cancelled. View details for more information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Processing times */}
          <div className="card-ios overflow-hidden">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <h2 className="text-[17px] font-semibold text-black">Typical processing times</h2>
            </div>
            <div className="px-4 py-4">
              <p className="text-[15px] text-text-gray-ios leading-relaxed mb-3">
                Processing times vary depending on the type of request:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-text-gray-ios">
                  <span className="font-semibold text-black">Tax returns (online):</span> 2 weeks
                </li>
                <li className="text-text-gray-ios">
                  <span className="font-semibold text-black">Tax returns (paper):</span> 8 weeks
                </li>
                <li className="text-text-gray-ios">
                  <span className="font-semibold text-black">Benefit applications:</span> 11 weeks
                </li>
                <li className="text-text-gray-ios">
                  <span className="font-semibold text-black">Adjustment requests:</span> 8 weeks
                </li>
                <li className="text-text-gray-ios">
                  <span className="font-semibold text-black">Objections:</span> 180 days
                </li>
              </ul>
              <p className="text-[13px] text-[#3C3C43] mt-3">
                Note: These are estimated times. Actual processing times may vary based on complexity and volume.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}