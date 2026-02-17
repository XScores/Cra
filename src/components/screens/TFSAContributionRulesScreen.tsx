import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface TFSAContributionRulesScreenProps {
  onBack: () => void;
  onViewMail: () => void;
  onNavigateHome: () => void;
  onFileTaxes: () => void;
  onMakePayment: () => void;
  onBenefitsAndCredits: () => void;
  onRegisteredPlans: () => void;
  onHelp: () => void;
  onSignOut: () => void;
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

export function TFSAContributionRulesScreen({ onBack, onViewMail, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onBecomeRepresentative, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments }: TFSAContributionRulesScreenProps) {
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
        onViewRefundDetails={onViewRefundDetails}
        onViewNoticeOfAssessment={onViewNoticeOfAssessment}
        onGSTHSTCredit={onGSTHSTCredit}
        onAccountDetails={onAccountDetails}
        onProfile={onProfile}
        onViewTaxReturns={onViewTaxReturns}
        onHomeBuyersPlan={onHomeBuyersPlan}
        onFHSAEligibility={onFHSAEligibility}
        onBecomeRepresentative={onBecomeRepresentative}
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
        onHelp={onHelp}
        onSignOut={onSignOut}
      />

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-center gap-3 mb-1">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">TFSA contribution rules</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80">Understand how TFSA contribution room works and avoid penalties</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Overview */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">How TFSA contribution room works</h2>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              Your TFSA contribution room is the maximum amount you can contribute to your TFSA in a given year. The CRA tracks your contribution room automatically.
            </p>
            <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
              Unlike RRSPs, TFSA contributions are not tax-deductible, but all investment income and withdrawals are completely tax-free.
            </p>
          </div>
        </div>

        {/* Annual Contribution Limits */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] overflow-hidden">
            <div className="px-4 pt-4 pb-3 border-b border-[#c6c6c8]">
              <h3 className="text-black text-[20px] m-0 mb-2">Annual TFSA contribution limits</h3>
              <p className="text-black text-[15px] m-0 opacity-80">
                The annual limit is set by the federal government and indexed to inflation
              </p>
            </div>
            <div className="divide-y divide-[#c6c6c8]">
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">2025</span>
                <span className="text-black text-[17px] text-right">$7,000</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">2024</span>
                <span className="text-black text-[17px] text-right">$7,000</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">2023</span>
                <span className="text-black text-[17px] text-right">$6,500</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">2019-2022</span>
                <span className="text-black text-[17px] text-right">$6,000/year</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">2009-2018</span>
                <span className="text-black text-[17px] text-right">$5,000-$5,500/year</span>
              </div>
            </div>
            <div className="px-4 py-3 bg-[#f2f2f7]">
              <p className="text-[#3c3c43] text-[15px] m-0 leading-snug opacity-80">
                If you were 18 or older in 2009 and have never contributed to a TFSA, your cumulative contribution room as of 2025 would be $95,000.
              </p>
            </div>
          </div>
        </div>

        {/* Contribution Room Calculation */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-3">Your TFSA contribution room is calculated as:</h3>
            <div className="bg-[#f2f2f7] rounded-[10px] p-4 mb-3">
              <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
                Current year's annual limit
                <br />+ Unused contribution room from previous years
                <br />+ Any withdrawals made in the previous year
                <br />- Contributions made in the current year
                <br />= Available TFSA contribution room
              </p>
            </div>
            <div className="space-y-2">
              <ul className="list-disc m-0 pl-5 space-y-2">
                <li className="text-[#3c3c43] text-[17px] leading-snug">Your contribution room starts accumulating the year you turn 18</li>
                <li className="text-[#3c3c43] text-[17px] leading-snug">You don't need to file a tax return to accumulate room</li>
                <li className="text-[#3c3c43] text-[17px] leading-snug">Unused room carries forward indefinitely</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Withdrawals and Re-contributions */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-3">Withdrawals and re-contributions</h3>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              One of the key benefits of a TFSA is that you can withdraw funds at any time, tax-free. However, there are important rules about re-contributing:
            </p>
            <div className="bg-[#f2f2f7] rounded-[10px] p-4 mb-3">
              <p className="text-black text-[17px] mb-2">Important re-contribution rule:</p>
              <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
                The amount you withdraw is added back to your contribution room at the beginning of the following year, not immediately.
              </p>
            </div>
            <div className="bg-[#fff9e6] rounded-[10px] p-4 border-l-4 border-[#ffcc00]">
              <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
                <strong className="text-black">Example:</strong> If you withdraw $5,000 in October 2025, you cannot re-contribute that $5,000 until January 1, 2026 (unless you have other available contribution room).
              </p>
            </div>
          </div>
        </div>

        {/* Over-contribution Penalties */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <div className="flex items-start gap-3 mb-3">
              <AlertCircle className="h-6 w-6 text-[#ff3b30] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
              <h3 className="text-black text-[20px] m-0">Over-contribution penalties</h3>
            </div>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              If you exceed your TFSA contribution room, the CRA will charge a penalty tax:
            </p>
            <div className="bg-[#fff5f5] rounded-[10px] p-4 mb-3">
              <p className="text-[#ff3b30] text-[24px] m-0 mb-1">1% per month</p>
              <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
                You will be charged 1% per month on the highest excess amount for each month that the excess remains in your account.
              </p>
            </div>
            <div className="space-y-2">
              <ul className="list-disc m-0 pl-5 space-y-2">
                <li className="text-[#3c3c43] text-[17px] leading-snug">The penalty continues until you remove the excess amount</li>
                <li className="text-[#3c3c43] text-[17px] leading-snug">You must file Form RC243 to report and pay the tax</li>
                <li className="text-[#3c3c43] text-[17px] leading-snug">The CRA may waive the tax if the over-contribution was a reasonable error</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common Scenarios */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-4">Common contribution scenarios</h3>
            
            <div className="space-y-4">
              {/* Scenario 1 */}
              <div className="pb-4 border-b border-[#c6c6c8]">
                <p className="text-black text-[17px] mb-2">Scenario 1: First-time contributor</p>
                <p className="text-[#3c3c43] text-[15px] mb-3 leading-snug">
                  Jonathan turned 18 in 2020 and has never contributed to a TFSA.
                </p>
                <div className="bg-[#f2f2f7] rounded-[10px] p-3">
                  <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
                    2020-2022 room: $18,000 (3 years × $6,000)<br />
                    2023 room: $6,500<br />
                    2024 room: $7,000<br />
                    2025 room: $7,000<br />
                    <strong className="text-black">Total available in 2025: $38,500</strong>
                  </p>
                </div>
              </div>

              {/* Scenario 2 */}
              <div className="pb-4 border-b border-[#c6c6c8]">
                <p className="text-black text-[17px] mb-2">Scenario 2: Withdraw and re-contribute</p>
                <p className="text-[#3c3c43] text-[15px] mb-3 leading-snug">
                  John has $10,000 in his TFSA. In June 2025, he withdraws $5,000 for an emergency.
                </p>
                <div className="bg-[#f2f2f7] rounded-[10px] p-3">
                  <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
                    2025 contribution room used: $7,000 (maxed out before withdrawal)<br />
                    Withdrawal: $5,000 (added back January 1, 2026)<br />
                    <strong className="text-black">2026 contribution room: $12,000 ($7,000 new + $5,000 from withdrawal)</strong>
                  </p>
                </div>
              </div>

              {/* Scenario 3 */}
              <div>
                <p className="text-black text-[17px] mb-2">Scenario 3: Multiple accounts</p>
                <p className="text-[#3c3c43] text-[15px] mb-3 leading-snug">
                  Maria has TFSAs at two different financial institutions.
                </p>
                <div className="bg-[#f2f2f7] rounded-[10px] p-3">
                  <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
                    <strong className="text-black">Important:</strong> Your contribution room applies to all your TFSAs combined. If you have $7,000 of room and contribute $4,000 to Bank A, you only have $3,000 remaining for Bank B.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-3">Tips to avoid over-contributions</h3>
            <ul className="list-disc m-0 pl-5 space-y-2">
              <li className="text-[#3c3c43] text-[17px] leading-snug">Check your contribution room on My Account before contributing</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Keep track of all your TFSA accounts across different financial institutions</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Remember that withdrawals don't create immediate re-contribution room</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Wait for your annual Notice of Assessment to confirm your official room</li>
            </ul>
          </div>
        </div>

        {/* Related Links */}
        <div className="px-4 mb-4">
          <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Related links</h2>
          <div className="bg-white rounded-[10px] overflow-hidden divide-y divide-[#c6c6c8]">
            {onViewMail && (
              <button 
                onClick={onViewMail}
                className="w-full px-4 py-3 flex items-center justify-between bg-white hover:opacity-70 active:opacity-50 transition-opacity border-0 cursor-pointer"
              >
                <span className="text-[#007AFF] text-[17px] text-left">View your TFSA contribution room</span>
                <ChevronRight className="h-5 w-5 text-[#c7c7cc] flex-shrink-0" strokeWidth={2.5} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}