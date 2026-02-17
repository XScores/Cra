import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { useState } from 'react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface ApplyCanadaLearningBondScreenProps {
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
}

export function ApplyCanadaLearningBondScreen({ onBack, onViewMail, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome }: ApplyCanadaLearningBondScreenProps) {
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
          <div>
            <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[1.1]">Apply for the Canada<br />Learning Bond</h1>
            <p className="text-black text-[15px] m-0 opacity-80 mt-1">Get up to $2,000 in free education savings for your child</p>
          </div>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Overview */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Overview</h2>
            <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
              The Canada Learning Bond (CLB) is money that the Government of Canada adds to a Registered Education Savings Plan (RESP) for children from low-income families. The best part? You don't need to contribute your own money to receive it.
            </p>
          </div>
        </div>

        {/* How Much */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] overflow-hidden">
            <div className="px-4 pt-4 pb-3 border-b border-[#c6c6c8]">
              <h2 className="text-black text-[20px] m-0">How much can you receive?</h2>
            </div>
            <div className="divide-y divide-[#c6c6c8]">
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">Initial payment (first year)</span>
                <span className="text-[#28a745] text-[17px] text-right">$500</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">Annual payment (each eligible year)</span>
                <span className="text-[#28a745] text-[17px] text-right">$100</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 bg-[#f2f2f7]">
                <span className="text-black text-[17px]">Maximum lifetime CLB</span>
                <span className="text-[#28a745] text-[17px] text-right">$2,000</span>
              </div>
            </div>
            <div className="px-4 py-3 bg-[#f2f2f7]">
              <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
                Payments continue annually until the child turns 15, as long as your family income remains below the threshold.
              </p>
            </div>
          </div>
        </div>

        {/* Eligibility */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Eligibility requirements</h2>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              To receive the CLB, the child must:
            </p>
            <ul className="list-disc m-0 pl-5 space-y-2">
              <li className="text-[#3c3c43] text-[17px] leading-snug">Be born in 2004 or later</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Be a Canadian resident</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Have a valid Social Insurance Number</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Be named as beneficiary in an RESP</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Come from a family that receives the Canada Child Benefit with adjusted family net income below the threshold</li>
            </ul>
          </div>
        </div>

        {/* Income Requirements */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">Income requirements (2024)</h3>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              Your family's adjusted net income must be below these thresholds:
            </p>
            <div className="bg-[#f2f2f7] rounded-[10px] p-4 mb-2">
              <div className="flex justify-between items-center">
                <span className="text-[#3c3c43] text-[17px]">Maximum adjusted family net income</span>
                <span className="text-black text-[17px] text-right">$53,359</span>
              </div>
            </div>
            <p className="text-[#3c3c43] text-[15px] m-0 leading-snug opacity-80">
              This threshold is indexed to inflation and may change annually.
            </p>
          </div>
        </div>

        {/* How to Apply */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">How to apply</h3>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              Applying for the CLB is simple:
            </p>
            <div className="space-y-2 ml-4">
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">1.</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Open an RESP for your child with any provider</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">2.</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Provide your child's Social Insurance Number</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">3.</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Your RESP provider will apply for the CLB on your behalf</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">4.</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">The government will deposit the CLB directly into the RESP</p>
              </div>
            </div>
          </div>
        </div>

        {/* No Contributions Required */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">No contributions required</h2>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              Unlike the Canada Education Savings Grant (CESG), you don't need to make any contributions to receive the CLB. Simply open an RESP and the money will be deposited automatically if you're eligible.
            </p>
            <ul className="list-disc m-0 pl-5 space-y-2">
              <li className="text-[#3c3c43] text-[17px] leading-snug">You can open an RESP with a $0 contribution</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Many providers offer no-fee options for CLB-only accounts</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">The bond will grow tax-free in the RESP</li>
            </ul>
          </div>
        </div>

        {/* Retroactive Payments */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Retroactive payments</h2>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              If you didn't open an RESP when your child was young, you can still receive retroactive payments for eligible years:
            </p>
            <ul className="list-disc m-0 pl-5 space-y-2">
              <li className="text-[#3c3c43] text-[17px] leading-snug">CLB payments can be claimed retroactively until age 20</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">You'll receive the $500 initial payment plus $100 for each eligible year</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">The government reviews your income for each past year to determine eligibility</li>
            </ul>
          </div>
        </div>

        {/* Important Note */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <div className="bg-[#fff9e6] rounded-[10px] p-4 border-l-4 border-[#ffcc00]">
              <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
                <strong className="text-black">Note:</strong> Don't leave free money on the table! Even if you can't afford to contribute to an RESP, opening one to receive the CLB can provide your child with up to $2,000 for their education at no cost to you.
              </p>
            </div>
          </div>
        </div>

        {/* Using the CLB */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Using the CLB</h2>
            <ul className="list-disc m-0 pl-5 space-y-2">
              <li className="text-[#3c3c43] text-[17px] leading-snug">Can be withdrawn as Educational Assistance Payments (EAPs) when your child enrolls in post-secondary education</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Taxed as income to the student (usually little or no tax)</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">If not used for education, CLB funds must be repaid to the government</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}