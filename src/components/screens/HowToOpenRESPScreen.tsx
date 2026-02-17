import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { useState } from 'react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface HowToOpenRESPScreenProps {
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

export function HowToOpenRESPScreen({ onBack, onViewMail, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome }: HowToOpenRESPScreenProps) {
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
            <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[1.1]">How to open an RESP</h1>
            <p className="text-black text-[15px] m-0 opacity-80 mt-1">Step-by-step guide to opening a Registered Education Savings Plan</p>
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
              Opening a Registered Education Savings Plan (RESP) allows you to save for a child's post-secondary education while receiving government grants. Here's how to get started.
            </p>
          </div>
        </div>

        {/* Before You Begin */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Before you begin</h2>
            <ul className="list-disc m-0 pl-5 space-y-2">
              <li className="text-[#3c3c43] text-[17px] leading-snug">Have the child's Social Insurance Number (SIN)</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Have your own SIN ready</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Decide on the type of RESP (individual, family, or group)</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Choose your contribution strategy</li>
            </ul>
          </div>
        </div>

        {/* Types of RESPs */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-3">Types of RESPs</h3>
            <div className="space-y-3">
              <div>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug"><strong className="text-black">Individual RESP:</strong> For one beneficiary, can be opened by anyone</p>
              </div>
              <div>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug"><strong className="text-black">Family RESP:</strong> For multiple children who are related by blood or adoption, subscribers must be related</p>
              </div>
              <div>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug"><strong className="text-black">Group RESP:</strong> Pooled plan managed by scholarship plan dealers, age-based groups</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 1 */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">Step 1: Choose a provider</h3>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              RESPs are offered by:
            </p>
            <ul className="list-disc m-0 pl-5 space-y-2">
              <li className="text-[#3c3c43] text-[17px] leading-snug">Banks and credit unions</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Investment firms and mutual fund companies</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Group plan dealers (scholarship trust companies)</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Financial advisors</li>
            </ul>
          </div>
        </div>

        {/* Step 2 */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">Step 2: Complete the application</h3>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              You'll need to provide:
            </p>
            <ul className="list-disc m-0 pl-5 space-y-2">
              <li className="text-[#3c3c43] text-[17px] leading-snug">Your identification and SIN</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">The beneficiary's name, date of birth, and SIN</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Relationship to the beneficiary</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Initial contribution amount</li>
            </ul>
          </div>
        </div>

        {/* Step 3 */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">Step 3: Apply for government grants</h3>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              Your RESP provider will help you apply for:
            </p>
            <ul className="list-disc m-0 pl-5 space-y-2">
              <li className="text-[#3c3c43] text-[17px] leading-snug"><strong className="text-black">CESG:</strong> Canada Education Savings Grant (20% on first $2,500 annually)</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug"><strong className="text-black">CLB:</strong> Canada Learning Bond (for lower-income families)</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug"><strong className="text-black">Provincial grants:</strong> Available in some provinces</li>
            </ul>
          </div>
        </div>

        {/* Contribution Limits */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Contribution limits</h2>
            <ul className="list-disc m-0 pl-5 space-y-2">
              <li className="text-[#3c3c43] text-[17px] leading-snug">Lifetime limit: $50,000 per beneficiary</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">No annual limit (but CESG limited to $2,500/year contribution)</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Contributions can continue until 31 years after opening</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Plan must close by the end of the 35th year after opening</li>
            </ul>
          </div>
        </div>

        {/* Important Note */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <div className="bg-[#fff9e6] rounded-[10px] p-4 border-l-4 border-[#ffcc00]">
              <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
                <strong className="text-black">Note:</strong> The earlier you open an RESP, the more time your investments have to grow tax-free and the more grant money you can receive. You can open an RESP for a newborn and start receiving the Canada Learning Bond immediately if eligible.
              </p>
            </div>
          </div>
        </div>

        {/* After Opening */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">After opening your RESP</h2>
            <ul className="list-disc m-0 pl-5 space-y-2">
              <li className="text-[#3c3c43] text-[17px] leading-snug">Make regular contributions to maximize grants</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Review your investment options annually</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Update beneficiary information if needed</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Keep track of contribution room and grant eligibility</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}