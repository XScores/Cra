import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface LearnRegisteredPlansScreenProps {
  onBack: () => void;
  onHowToOpenFHSA: () => void;
  onFHSAvsHBP: () => void;
  onViewTFSAContributionRoom: () => void;
  onCorrectTFSAOverContribution: () => void;
  onViewMail?: () => void;
  onNavigateHome: () => void;
  onLogoClick: () => void;
  hasUnreadMail?: boolean;
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

export function LearnRegisteredPlansScreen({ onBack, onHowToOpenFHSA, onFHSAvsHBP, onViewTFSAContributionRoom, onCorrectTFSAOverContribution, onViewMail, onNavigateHome, onLogoClick, hasUnreadMail, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onBecomeRepresentative, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments }: LearnRegisteredPlansScreenProps) {
  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      <HeaderMaster 
        title="My Account"
        largeTitle={true}
        showSearch={true}
        showMenu={true}
        onNavigateHome={onNavigateHome}
        onLogoClick={onLogoClick}
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
        // Search navigation handlers
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[1.1]">Learn about<br />registered plans</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Understanding tax-advantaged savings accounts for your financial goals</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Overview */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Overview</h2>
            <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
              Registered plans are savings accounts that offer tax advantages to help you save for retirement, a first home, education, and other goals. The Canada Revenue Agency (CRA) administers these plans and tracks your contribution room.
            </p>
          </div>
        </div>

        {/* Important Warning */}
        <div className="px-4 mb-4">
          <div className="bg-[#fff9e6] rounded-[10px] p-4 border-l-4 border-[#ffcc00]">
            <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
              <strong className="text-black">Note:</strong> Over-contributions to RRSPs, FHSA, and TFSA can result in penalties. The CRA charges 1% per month on excess contributions. Always verify your contribution room before making contributions.
            </p>
          </div>
        </div>

        {/* RRSP Section */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">RRSP - Registered Retirement Savings Plan</h3>
            <p className="text-[#3c3c43] text-[17px] mb-4 leading-snug">
              An RRSP is a retirement savings plan that you establish, and the CRA registers and contributes to. Contributions are tax-deductible, and investment growth is tax-deferred.
            </p>
            <ul className="list-disc space-y-2 m-0 pl-5">
              <li className="text-[#3c3c43] text-[17px] leading-snug">Contributions reduce your taxable income</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Annual contribution limit is 18% of previous year's income, up to a maximum</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Unused contribution room carries forward indefinitely</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Withdrawals are taxable as income</li>
            </ul>
          </div>
        </div>

        {/* FHSA Section */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">FHSA - First Home Savings Account</h3>
            <p className="text-[#3c3c43] text-[17px] mb-4 leading-snug">
              The FHSA combines the benefits of an RRSP and TFSA for first-time home buyers. Contributions are tax-deductible, and withdrawals for a first home are tax-free.
            </p>
            <ul className="list-disc space-y-2 m-0 pl-5">
              <li className="text-[#3c3c43] text-[17px] leading-snug">Annual contribution limit of $8,000</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Lifetime contribution limit of $40,000</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Must be a first-time home buyer to qualify</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Account must be closed within 15 years or by age 71</li>
            </ul>
          </div>
        </div>

        {/* TFSA Section */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">TFSA - Tax-Free Savings Account</h3>
            <p className="text-[#3c3c43] text-[17px] mb-4 leading-snug">
              A TFSA is a flexible savings account where investment income and withdrawals are completely tax-free. It can be used for any savings goal.
            </p>
            <ul className="list-disc space-y-2 m-0 pl-5">
              <li className="text-[#3c3c43] text-[17px] leading-snug">Contributions are not tax-deductible</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Investment income and gains are tax-free</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Annual contribution room accumulates from age 18</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Withdrawals create contribution room for the following year</li>
            </ul>
          </div>
        </div>

        {/* RESP Section */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">RESP - Registered Education Savings Plan</h3>
            <p className="text-[#3c3c43] text-[17px] mb-4 leading-snug">
              An RESP is a savings plan to help fund a child's post-secondary education. The government provides grants that match a portion of your contributions.
            </p>
            <ul className="list-disc space-y-2 m-0 pl-5">
              <li className="text-[#3c3c43] text-[17px] leading-snug">Lifetime contribution limit of $50,000 per beneficiary</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Canada Education Savings Grant (CESG) matches 20% of contributions</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Maximum CESG of $500 per year, $7,200 lifetime</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Investment growth is tax-deferred until withdrawn</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}