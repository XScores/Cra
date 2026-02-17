import { HeaderMaster } from '../HeaderMaster';
import { useState } from 'react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface CorrectTFSAOverContributionScreenProps {
  onBack: () => void;
  onViewMail?: () => void;
  onNavigateHome: () => void;
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

export function CorrectTFSAOverContributionScreen({ onBack, onViewMail, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome }: CorrectTFSAOverContributionScreenProps) {
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
      />

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-start gap-3 mb-1">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[1.1]">How to correct a TFSA<br />over-contribution</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Steps to fix an over-contribution and minimize penalty taxes on your TFSA</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Overview */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Overview</h2>
            <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
              If you've contributed more than your available TFSA contribution room, you'll be subject to a tax of 1% per month on the highest excess amount for each month it remains in your account. Here's how to correct it.
            </p>
          </div>
        </div>

        {/* Important Note */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <div className="bg-[#fff9e6] rounded-[10px] p-4 border-l-4 border-[#ffcc00]">
              <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
                <strong className="text-black">Important:</strong> Act quickly to minimize penalty taxes. The 1% monthly tax applies until you withdraw the excess amount or gain new contribution room.
              </p>
            </div>
          </div>
        </div>

        {/* Step 1 */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">Step 1: Calculate your excess amount</h3>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              Determine how much you've over-contributed:
            </p>
            <div className="space-y-2 ml-4">
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Check your TFSA contribution room in My Account</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Add up all contributions made in the current year</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Subtract your available room from your total contributions</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">The difference is your excess contribution</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">Step 2: Withdraw the excess amount</h3>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              Contact your financial institution to:
            </p>
            <div className="space-y-2 ml-4">
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Request a withdrawal of the excess contribution amount</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Specify that it's to correct an over-contribution</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Complete the withdrawal as soon as possible to minimize tax penalties</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Keep records of the withdrawal date and amount</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">Step 3: File RC243 form</h3>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              Complete and submit Form RC243, Tax-Free Savings Account (TFSA) Return:
            </p>
            <div className="space-y-2 ml-4">
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Download Form RC243 from the CRA website</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Calculate the tax owed (1% per month on the excess)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">File by June 30 of the year following the over-contribution</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Pay any tax owing by the deadline</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">Step 4: Consider requesting a waiver</h3>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              If the over-contribution was due to reasonable error, you may request a waiver of the penalty tax:
            </p>
            <div className="space-y-2 ml-4">
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Complete Form RC4288, Request for Taxpayer Relief</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Explain why the over-contribution occurred</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Show that you withdrew the excess amount promptly</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Wait for CRA review (typically 4-8 weeks)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Example Calculation */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Example calculation</h2>
            <div className="bg-[#f2f2f7] rounded-[10px] p-4">
              <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">Sarah over-contributed $3,000 to her TFSA on March 1, 2024 and withdrew it on May 15, 2024:</p>
              <div className="space-y-2">
                <p className="text-[#3c3c43] text-[17px] leading-snug">March: $3,000 × 1% = $30.00</p>
                <p className="text-[#3c3c43] text-[17px] leading-snug">April: $3,000 × 1% = $30.00</p>
                <p className="text-[#3c3c43] text-[17px] leading-snug">May: $3,000 × 1% = $30.00</p>
                <div className="border-t border-[#c6c6c8] pt-2 mt-2">
                  <p className="text-black text-[17px] m-0"><strong>Total tax owed: $90.00</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preventing Future Over-contributions */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Preventing future over-contributions</h2>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-[#28a745] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Check your contribution room regularly in My Account</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#28a745] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Keep track of all contributions and withdrawals</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#28a745] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Remember that withdrawals only create room the following year</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#28a745] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Contact your financial institution before making large contributions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}