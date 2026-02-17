import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { useState } from 'react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface FHSAvsHBPScreenProps {
  onBack: () => void;
  onNavigateHome: () => void;
  onLogoClick: () => void;
  hasUnreadMail?: boolean;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onViewMail?: () => void;
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

export function FHSAvsHBPScreen({ onBack, onViewMail, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome }: FHSAvsHBPScreenProps) {
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[1.1]">FHSA vs Home Buyers'<br />Plan comparison</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Compare two programs that help Canadians purchase their first home</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Overview */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Overview</h2>
            <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
              The First Home Savings Account (FHSA) and the Home Buyers' Plan (HBP) are two different programs designed to help Canadians purchase their first home. Understanding the differences can help you choose the right option for your situation.
            </p>
          </div>
        </div>

        {/* Key Differences */}
        <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Key differences</h2>
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#f2f2f7]">
                    <th className="border-b border-[rgba(60,60,67,0.36)] px-3 py-3 text-left text-black text-[15px] font-semibold">Feature</th>
                    <th className="border-b border-[rgba(60,60,67,0.36)] px-3 py-3 text-left text-black text-[15px] font-semibold">FHSA</th>
                    <th className="border-b border-[rgba(60,60,67,0.36)] px-3 py-3 text-left text-black text-[15px] font-semibold">HBP</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-[rgba(60,60,67,0.18)] px-3 py-3 text-black text-[15px]">Account type</td>
                    <td className="border-b border-[rgba(60,60,67,0.18)] px-3 py-3 text-[#3c3c43] text-[15px]">Standalone registered plan</td>
                    <td className="border-b border-[rgba(60,60,67,0.18)] px-3 py-3 text-[#3c3c43] text-[15px]">Withdrawal from existing RRSP</td>
                  </tr>
                  <tr>
                    <td className="border-b border-[rgba(60,60,67,0.18)] px-3 py-3 text-black text-[15px]">Contribution limit</td>
                    <td className="border-b border-[rgba(60,60,67,0.18)] px-3 py-3 text-[#3c3c43] text-[15px]">$8,000/year, $40,000 lifetime</td>
                    <td className="border-b border-[rgba(60,60,67,0.18)] px-3 py-3 text-[#3c3c43] text-[15px]">Up to $35,000 withdrawal</td>
                  </tr>
                  <tr>
                    <td className="border-b border-[rgba(60,60,67,0.18)] px-3 py-3 text-black text-[15px]">Tax deduction</td>
                    <td className="border-b border-[rgba(60,60,67,0.18)] px-3 py-3 text-[#3c3c43] text-[15px]">Yes, on contributions</td>
                    <td className="border-b border-[rgba(60,60,67,0.18)] px-3 py-3 text-[#3c3c43] text-[15px]">Yes, when initially contributed to RRSP</td>
                  </tr>
                  <tr>
                    <td className="border-b border-[rgba(60,60,67,0.18)] px-3 py-3 text-black text-[15px]">Withdrawal tax</td>
                    <td className="border-b border-[rgba(60,60,67,0.18)] px-3 py-3 text-[#3c3c43] text-[15px]">Tax-free if qualifying</td>
                    <td className="border-b border-[rgba(60,60,67,0.18)] px-3 py-3 text-[#3c3c43] text-[15px]">Tax-free (temporary)</td>
                  </tr>
                  <tr>
                    <td className="border-b border-[rgba(60,60,67,0.18)] px-3 py-3 text-black text-[15px]">Repayment required</td>
                    <td className="border-b border-[rgba(60,60,67,0.18)] px-3 py-3 text-[#3c3c43] text-[15px]">No</td>
                    <td className="border-b border-[rgba(60,60,67,0.18)] px-3 py-3 text-[#3c3c43] text-[15px]">Yes, over 15 years</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 text-black text-[15px]">Time limit</td>
                    <td className="px-3 py-3 text-[#3c3c43] text-[15px]">15 years or age 71</td>
                    <td className="px-3 py-3 text-[#3c3c43] text-[15px]">No time limit on RRSP</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FHSA Advantages */}
        <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">FHSA advantages</h2>
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4 border-l-4 border-[#34C759]">
            <ul className="space-y-3 ml-5 text-[#3c3c43] text-[17px] list-disc pl-0">
              <li className="pl-2 leading-snug"><span className="font-semibold text-black">No repayment required:</span> Unlike the HBP, you don't need to repay funds withdrawn for a qualifying home purchase</li>
              <li className="pl-2 leading-snug"><span className="font-semibold text-black">Double tax benefit:</span> Contributions are tax-deductible and withdrawals are tax-free</li>
              <li className="pl-2 leading-snug"><span className="font-semibold text-black">Dedicated savings:</span> Specifically designed for first-time home buyers</li>
              <li className="pl-2 leading-snug"><span className="font-semibold text-black">Flexibility:</span> Can transfer unused funds to RRSP without tax consequences</li>
            </ul>
          </div>
        </div>

        {/* HBP Advantages */}
        <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">HBP advantages</h2>
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4 border-l-4 border-[#007AFF]">
            <ul className="space-y-3 ml-5 text-[#3c3c43] text-[17px] list-disc pl-0">
              <li className="pl-2 leading-snug"><span className="font-semibold text-black">Higher withdrawal limit:</span> Can access up to $35,000 from your RRSP</li>
              <li className="pl-2 leading-snug"><span className="font-semibold text-black">Use existing savings:</span> No need to open a new account if you already have an RRSP</li>
              <li className="pl-2 leading-snug"><span className="font-semibold text-black">Repayment flexibility:</span> Missed repayments are added to taxable income but don't incur penalties</li>
              <li className="pl-2 leading-snug"><span className="font-semibold text-black">Established program:</span> Has been available since 1992</li>
            </ul>
          </div>
        </div>

        {/* Using Both Programs */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Can you use both?</h2>
            <p className="text-[#3c3c43] text-[17px] m-0 mb-3 leading-snug">
              Yes! You can use both the FHSA and HBP for the same home purchase, potentially giving you access to:
            </p>
            <ul className="space-y-3 ml-5 text-[#3c3c43] text-[17px] list-disc pl-0">
              <li className="pl-2 leading-snug">Up to $40,000 from your FHSA (tax-free, no repayment)</li>
              <li className="pl-2 leading-snug">Plus up to $35,000 from your RRSP through HBP (must be repaid)</li>
              <li className="pl-2 leading-snug"><span className="font-semibold text-black">Total potential: $75,000</span> for your first home</li>
            </ul>
          </div>
        </div>

        {/* Important Note */}
        <div className="px-4 mb-4">
          <div className="bg-[#fff9e6] rounded-[10px] p-4 border-l-4 border-[#ffcc00]">
            <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
              <span className="font-semibold text-black">Note:</span> Both programs require you to be a first-time home buyer. Consider your financial situation, timeline, and whether you want to repay funds when choosing between them. Many first-time buyers benefit from using both programs together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}