import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, CheckCircle, CircleDollarSign, Calendar, FileText, Info, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { useState } from 'react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface GSTHSTCreditScreenProps {
  onBack: () => void;
  onMakePayment?: () => void;
  onNavigateHome?: () => void;
  onLogoClick?: () => void;
  onViewMail?: () => void;
  onFileTaxes?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onUserFeedback?: () => void;
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

export function GSTHSTCreditScreen({ 
  onBack, 
  onMakePayment,
  onNavigateHome,
  onLogoClick,
  onViewMail,
  onFileTaxes,
  onBenefitsAndCredits,
  onRegisteredPlans,
  onHelp,
  onSignOut,
  onTaxSlips,
  onProofOfIncome,
  onUserFeedback,
  // Search navigation handlers
  onViewRefundDetails,
  onViewNoticeOfAssessment,
  onGSTHSTCredit,
  onAccountDetails,
  onProfile,
  onViewTaxReturns,
  onHomeBuyersPlan,
  onFHSAEligibility,
  onBecomeRepresentative,
  onBecomeRepresentativeAsRep,
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
}: GSTHSTCreditScreenProps) {
  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
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
        onHelp={onHelp}
        onSignOut={onSignOut}
        onUserFeedback={onUserFeedback}
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">GST/HST Credit</h1>
        </div>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        <div className="px-4 py-4">
          {/* Eligibility Status */}
          <div className="mb-4 card-ios overflow-hidden border-l-4 border-[#34C759]">
            <div className="flex gap-3 p-4">
              <CheckCircle className="h-5 w-5 text-[#34C759] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h2 className="text-black mb-2 text-[17px] font-semibold">You are eligible</h2>
                <p className="text-[#8e8e93] text-[15px] m-0">
                  Based on your 2024 tax return, you qualify for the GST/HST credit.
                </p>
              </div>
            </div>
          </div>

          {/* Next Payment */}
          <div className="mb-4 card-ios overflow-hidden border-l-4 border-[#007AFF] p-4">
            <h2 className="text-black mb-3 text-[17px] font-semibold">Next payment</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-[rgba(60,60,67,0.174)]">
                <span className="text-[#8e8e93] text-[15px]">Payment amount:</span>
                <span className="text-[#34C759] font-semibold text-[24px]">$145.00</span>
              </div>
              <div className="flex justify-between items-center text-[15px]">
                <span className="text-[#8e8e93]">Payment date:</span>
                <span className="text-black font-semibold">January 5, 2026</span>
              </div>
              <div className="flex justify-between items-center text-[15px]">
                <span className="text-[#8e8e93]">Payment method:</span>
                <span className="text-black font-semibold">Direct deposit</span>
              </div>
              <div className="flex justify-between items-center text-[15px]">
                <span className="text-[#8e8e93]">Payment period:</span>
                <span className="text-black font-semibold">October - December 2025</span>
              </div>
            </div>
          </div>

          {/* Annual Summary */}
          <div className="mb-4 card-ios p-4">
            <h2 className="text-black mb-3 text-[17px] font-semibold">2025-2026 benefit year</h2>
            <div className="flex items-start gap-3 mb-3">
              <CircleDollarSign className="h-5 w-5 text-[#34C759] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="text-[#8e8e93] text-[15px] mb-3">
                  Your annual GST/HST credit amount based on your 2024 tax return:
                </div>
                <div className="flex justify-between items-center mb-3 pb-3 border-b border-[rgba(60,60,67,0.174)]">
                  <span className="text-black font-semibold text-[17px]">Total annual credit:</span>
                  <span className="text-[#34C759] font-semibold text-[24px]">$580.00</span>
                </div>
                <div className="space-y-2 text-[15px]">
                  <div className="flex justify-between">
                    <span className="text-[#8e8e93]">Quarterly payment:</span>
                    <span className="text-black font-semibold">$145.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8e8e93]">Benefit period:</span>
                    <span className="text-black font-semibold">July 2025 - June 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Schedule */}
          <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Payment schedule</h2>
          <div className="mb-4 card-ios p-4">
            <div className="flex items-start gap-3 mb-3">
              <Calendar className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="text-[#8e8e93] text-[15px] mb-3">
                  Payments are issued quarterly on the 5th of:
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[15px]">
                    <div className="w-2 h-2 rounded-full bg-[#007AFF]"></div>
                    <span className="text-black font-semibold">January</span>
                  </div>
                  <div className="flex items-center gap-2 text-[15px]">
                    <div className="w-2 h-2 rounded-full bg-[#007AFF]"></div>
                    <span className="text-black font-semibold">April</span>
                  </div>
                  <div className="flex items-center gap-2 text-[15px]">
                    <div className="w-2 h-2 rounded-full bg-[#007AFF]"></div>
                    <span className="text-black font-semibold">July</span>
                  </div>
                  <div className="flex items-center gap-2 text-[15px]">
                    <div className="w-2 h-2 rounded-full bg-[#007AFF]"></div>
                    <span className="text-black font-semibold">October</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment History */}
          <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Payment history</h2>
          <div className="mb-4 card-ios overflow-hidden">
            {/* Oct 2025 */}
            <div className="p-4 border-b border-[rgba(60,60,67,0.174)]">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-black font-semibold text-[17px]">October 2025</div>
                  <div className="text-[#8e8e93] text-[13px]">October 5, 2025</div>
                </div>
                <div className="text-right">
                  <div className="text-[#34C759] font-semibold text-[18px]">$145.00</div>
                  <div className="text-[#8e8e93] text-[13px]">Direct deposit</div>
                </div>
              </div>
            </div>

            {/* Jul 2025 */}
            <div className="p-4 border-b border-[rgba(60,60,67,0.174)]">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-black font-semibold text-[17px]">July 2025</div>
                  <div className="text-[#8e8e93] text-[13px]">July 5, 2025</div>
                </div>
                <div className="text-right">
                  <div className="text-[#34C759] font-semibold text-[18px]">$145.00</div>
                  <div className="text-[#8e8e93] text-[13px]">Direct deposit</div>
                </div>
              </div>
            </div>

            {/* Apr 2025 */}
            <div className="p-4 border-b border-[rgba(60,60,67,0.174)]">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-black font-semibold text-[17px]">April 2025</div>
                  <div className="text-[#8e8e93] text-[13px]">April 5, 2025</div>
                </div>
                <div className="text-right">
                  <div className="text-[#34C759] font-semibold text-[18px]">$145.00</div>
                  <div className="text-[#8e8e93] text-[13px]">Direct deposit</div>
                </div>
              </div>
            </div>

            {/* Jan 2025 */}
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-black font-semibold text-[17px]">January 2025</div>
                  <div className="text-[#8e8e93] text-[13px]">January 5, 2025</div>
                </div>
                <div className="text-right">
                  <div className="text-[#34C759] font-semibold text-[18px]">$145.00</div>
                  <div className="text-[#8e8e93] text-[13px]">Direct deposit</div>
                </div>
              </div>
            </div>
          </div>

          {/* How it's calculated */}
          <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">How your credit is calculated</h2>
          <div className="mb-4 card-ios p-4">
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="text-[#8e8e93] text-[15px] mb-3">
                  Your GST/HST credit is based on:
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-[15px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0 mt-2"></div>
                    <span className="text-black">Your adjusted family net income</span>
                  </div>
                  <div className="flex items-start gap-2 text-[15px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0 mt-2"></div>
                    <span className="text-black">Your marital status</span>
                  </div>
                  <div className="flex items-start gap-2 text-[15px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0 mt-2"></div>
                    <span className="text-black">Number of children under 19</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-[rgba(60,60,67,0.174)] text-[#8e8e93] text-[15px]">
                  Your credit is recalculated each July based on information from your previous year's tax return.
                </div>
              </div>
            </div>
          </div>

          {/* About GST/HST Credit */}
          <div className="mb-4 card-ios overflow-hidden border-l-4 border-[#007AFF] p-4">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-black mb-2 font-semibold text-[17px]">About this credit</h3>
                <p className="text-[#8e8e93] text-[15px] m-0">
                  The GST/HST credit is a tax-free quarterly payment that helps individuals and families with low and modest incomes offset all or part of the GST or HST that they pay.
                </p>
              </div>
            </div>
          </div>

          {/* Information Note */}
          <div className="mb-4 card-ios overflow-hidden border-l-4 border-[#FF9500] p-4">
            <h3 className="text-black mb-2 font-semibold text-[17px]">Keep your information up to date</h3>
            <p className="text-[#8e8e93] text-[15px] m-0">
              To continue receiving your GST/HST credit, make sure to file your tax return every year, even if you have no income to report. Update your marital status and number of children within 1 month of any changes.
            </p>
          </div>

          {/* Contact Information */}
          <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Questions about your credit?</h2>
          <div className="card-ios mb-4 p-4">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-[#007AFF] mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-black font-semibold mb-2 text-[15px]">Call us</div>
                <button 
                  onClick={() => onCall?.('1-800-387-1193', 'GST/HST Credit')}
                  className="text-[#007AFF] hover:opacity-70 active:opacity-50 text-[17px] text-left bg-transparent border-0 p-0 mb-1 transition-opacity"
                >
                  1-800-387-1193
                </button>
                <div className="text-[#8e8e93] text-[13px]">Monday to Friday, 9 AM to 6 PM ET</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}