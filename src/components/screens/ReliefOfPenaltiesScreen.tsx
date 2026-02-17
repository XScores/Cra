import { ChevronLeft, Info, FileText, DollarSign, Calendar, AlertCircle, ChevronDown } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';
import { useState } from 'react';

interface ReliefOfPenaltiesScreenProps {
  onBack: () => void;
  onRequestRelief?: () => void;
  onViewReliefRequestPDF?: () => void;
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
  onSearchClick?: () => void;
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

export function ReliefOfPenaltiesScreen({
  onBack,
  onRequestRelief,
  onViewReliefRequestPDF,
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
  onSearchClick,
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
}: ReliefOfPenaltiesScreenProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
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
        onSearchClick={onSearchClick}
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[34px]">Relief of penalties and interest</h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 pt-4 pb-24">

          {/* Current Requests */}
          <div className="card-ios overflow-hidden mb-6">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <h2 className="text-[17px] font-semibold text-black">Your relief requests</h2>
            </div>
            <div>
              {/* Request 1 - In Review */}
              <div className="px-4 py-4 border-b border-[#E5E5EA]">
                <div className="flex items-start gap-3 mb-2">
                  <FileText className="w-5 h-5 text-[#FF9500] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-[15px] font-semibold text-black mb-1">2023 Tax Year Relief Request</p>
                    <p className="text-[13px] text-text-gray-ios mb-1">Reference: REF-2023-847392</p>
                    <p className="text-[13px] text-text-gray-ios mb-2">Submitted on October 15, 2024</p>
                    <p className="text-[13px] font-semibold text-[#FF9500] mb-1">Under Review</p>
                    <p className="text-[13px] text-[#3C3C43] mb-2">Expected decision: January 15, 2025</p>
                    <div className="bg-[#F2F2F7] rounded-lg p-3 mt-2">
                      <p className="text-[13px] font-semibold text-black mb-2">Relief Requested for:</p>
                      <div className="flex justify-between mb-1">
                        <span className="text-[13px] text-text-gray-ios">Penalties:</span>
                        <span className="text-[13px] font-semibold text-black">$245.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[13px] text-text-gray-ios">Interest:</span>
                        <span className="text-[13px] font-semibold text-black">$128.50</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* No more requests */}
              <div className="px-4 py-4">
                <button 
                  onClick={onViewReliefRequestPDF}
                  className="w-full flex items-center justify-center gap-2 bg-white border border-[#007AFF] text-[#007AFF] rounded-xl py-3 px-4 font-semibold text-[15px] active:bg-[#F2F2F7] transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  View submitted relief request
                </button>
              </div>
            </div>
          </div>

          {/* Request New Relief Button */}
          <button className="w-full bg-[#007AFF] text-white rounded-xl py-[14px] px-4 font-semibold text-[17px] hover:bg-[#0051D5] active:bg-[#004BBD] transition-colors mb-6" onClick={onRequestRelief}>
            Request penalty or interest relief
          </button>

          {/* Accordion 1: Important Information */}
          <div className="card-ios overflow-hidden mb-3">
            <button
              onClick={() => toggleAccordion('important')}
              className="w-full px-4 py-4 flex items-center justify-between active:opacity-70 transition-opacity"
            >
              <h2 className="text-[17px] font-semibold text-black">Important information</h2>
              <ChevronDown 
                className={`w-5 h-5 text-[#007AFF] transition-transform ${openAccordion === 'important' ? 'rotate-180' : ''}`} 
              />
            </button>
            {openAccordion === 'important' && (
              <div className="px-4 pb-4 border-t border-[#E5E5EA]">
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[15px] text-text-gray-ios">
                        You may be eligible for relief if circumstances beyond your control prevented you from meeting your tax obligations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[15px] text-text-gray-ios">
                        Relief is considered on a case-by-case basis and is not automatically granted. You must demonstrate that the circumstances were beyond your control.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#FF9500] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[15px] font-semibold text-black mb-1">Time limits</p>
                      <p className="text-[15px] text-text-gray-ios">
                        Requests must be made within 10 years from the end of the calendar year in which the tax year ended.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[15px] font-semibold text-black mb-1">Processing time</p>
                      <p className="text-[15px] text-text-gray-ios">
                        Most requests are processed within 90 days. Complex cases may take longer.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-[#34C759] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[15px] font-semibold text-black mb-1">Continue making payments</p>
                      <p className="text-[15px] text-text-gray-ios">
                        While your request is being reviewed, you should continue making payments on your account to avoid additional interest charges.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Accordion 2: What is Taxpayer Relief */}
          <div className="card-ios overflow-hidden mb-3">
            <button
              onClick={() => toggleAccordion('what')}
              className="w-full px-4 py-4 flex items-center justify-between active:opacity-70 transition-opacity"
            >
              <h2 className="text-[17px] font-semibold text-black">What is Taxpayer Relief</h2>
              <ChevronDown 
                className={`w-5 h-5 text-[#007AFF] transition-transform ${openAccordion === 'what' ? 'rotate-180' : ''}`} 
              />
            </button>
            {openAccordion === 'what' && (
              <div className="px-4 pb-4 border-t border-[#E5E5EA]">
                <div className="pt-4">
                  <p className="text-[15px] text-text-gray-ios leading-relaxed">
                    The Taxpayer Relief provisions allow the CRA to grant relief from penalties and interest when taxpayers are unable to meet their tax obligations due to circumstances beyond their control.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Accordion 3: Types of Relief */}
          <div className="card-ios overflow-hidden mb-3">
            <button
              onClick={() => toggleAccordion('types')}
              className="w-full px-4 py-4 flex items-center justify-between active:opacity-70 transition-opacity"
            >
              <h2 className="text-[17px] font-semibold text-black">Types of relief available</h2>
              <ChevronDown 
                className={`w-5 h-5 text-[#007AFF] transition-transform ${openAccordion === 'types' ? 'rotate-180' : ''}`} 
              />
            </button>
            {openAccordion === 'types' && (
              <div className="px-4 pb-4 border-t border-[#E5E5EA]">
                <div className="space-y-4 pt-4">
                  <div>
                    <p className="text-[15px] font-semibold text-black mb-1">Cancel or waive penalties</p>
                    <p className="text-[15px] text-text-gray-ios">
                      Relief from penalties for late filing, failure to remit, or other penalty assessments.
                    </p>
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-black mb-1">Cancel or waive interest</p>
                    <p className="text-[15px] text-text-gray-ios">
                      Relief from interest charges on outstanding amounts or penalties.
                    </p>
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-black mb-1">Accept late, amended, or revoked returns or elections</p>
                    <p className="text-[15px] text-text-gray-ios">
                      Permission to file late returns or make changes to previously filed returns beyond normal time limits.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Accordion 4: Eligibility */}
          <div className="card-ios overflow-hidden mb-3">
            <button
              onClick={() => toggleAccordion('eligibility')}
              className="w-full px-4 py-4 flex items-center justify-between active:opacity-70 transition-opacity"
            >
              <h2 className="text-[17px] font-semibold text-black">Eligibility criteria</h2>
              <ChevronDown 
                className={`w-5 h-5 text-[#007AFF] transition-transform ${openAccordion === 'eligibility' ? 'rotate-180' : ''}`} 
              />
            </button>
            {openAccordion === 'eligibility' && (
              <div className="px-4 pb-4 border-t border-[#E5E5EA]">
                <div className="pt-4">
                  <p className="text-[15px] text-text-gray-ios leading-relaxed mb-3">
                    You may be eligible for relief if you were unable to meet your tax obligations due to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-[15px] text-text-gray-ios">
                      Extraordinary circumstances such as natural disasters, serious illness, or accident
                    </li>
                    <li className="text-[15px] text-text-gray-ios">
                      Errors or delays by the CRA
                    </li>
                    <li className="text-[15px] text-text-gray-ios">
                      Financial hardship
                    </li>
                    <li className="text-[15px] text-text-gray-ios">
                      Inability to pay or financial hardship that would result from collecting the full amount
                    </li>
                    <li className="text-[15px] text-text-gray-ios">
                      Other circumstances beyond your control
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Accordion 5: How to Request */}
          <div className="card-ios overflow-hidden">
            <button
              onClick={() => toggleAccordion('how')}
              className="w-full px-4 py-4 flex items-center justify-between active:opacity-70 transition-opacity"
            >
              <h2 className="text-[17px] font-semibold text-black">How to request relief</h2>
              <ChevronDown 
                className={`w-5 h-5 text-[#007AFF] transition-transform ${openAccordion === 'how' ? 'rotate-180' : ''}`} 
              />
            </button>
            {openAccordion === 'how' && (
              <div className="px-4 pb-4 border-t border-[#E5E5EA]">
                <div className="space-y-4 pt-4">
                  <div>
                    <p className="text-[15px] font-semibold text-black mb-1">1. Complete Form RC4288</p>
                    <p className="text-[15px] text-text-gray-ios">
                      Use the online steps linked to the "Request penalty or interest relief" button above, or fill out the Request for Taxpayer Relief form (RC4288) with details about your situation and the tax years affected.
                    </p>
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-black mb-1">2. Provide supporting documents</p>
                    <p className="text-[15px] text-text-gray-ios">
                      Include documentation that supports your claim, such as medical records, insurance documents, or other relevant evidence.
                    </p>
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-black mb-1">3. Submit your request</p>
                    <p className="text-[15px] text-text-gray-ios">
                      Send your completed form and supporting documents through My Account, by mail, or by fax to your tax centre.
                    </p>
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-black mb-1">4. Receive a decision</p>
                    <p className="text-[15px] text-text-gray-ios">
                      The CRA will review your request and send you a letter with their decision, typically within 90 days.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}