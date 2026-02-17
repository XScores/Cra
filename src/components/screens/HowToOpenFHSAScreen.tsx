import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { useState } from 'react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface HowToOpenFHSAScreenProps {
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

export function HowToOpenFHSAScreen({ onBack, onViewMail, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onBecomeRepresentative, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments }: HowToOpenFHSAScreenProps) {
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
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">How to open an FHSA</h1>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Introduction */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
              Opening a First Home Savings Account (FHSA) is a straightforward process. You can open an FHSA with most Canadian financial institutions that offer registered plans.
            </p>
          </div>
        </div>

        {/* Before You Begin */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Before you begin</h2>
            <ul className="space-y-2 ml-5 text-[#3c3c43] text-[17px] list-disc pl-0">
              <li className="pl-2 leading-snug">Confirm you meet the eligibility requirements (Canadian resident, 18 years or older, first-time home buyer)</li>
              <li className="pl-2 leading-snug">Gather your Social Insurance Number (SIN)</li>
              <li className="pl-2 leading-snug">Have valid government-issued identification ready</li>
              <li className="pl-2 leading-snug">Decide how much you want to contribute initially</li>
            </ul>
          </div>
        </div>

        {/* Step 1 */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">Step 1: Choose a financial institution</h3>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              Select a bank, credit union, or other financial institution that offers FHSAs. Consider comparing:
            </p>
            <ul className="space-y-2 ml-5 text-[#3c3c43] text-[17px] list-disc pl-0">
              <li className="pl-2 leading-snug">Investment options available (savings accounts, GICs, mutual funds, stocks)</li>
              <li className="pl-2 leading-snug">Fees and account charges</li>
              <li className="pl-2 leading-snug">Interest rates or investment returns</li>
              <li className="pl-2 leading-snug">Online banking features and accessibility</li>
            </ul>
          </div>
        </div>

        {/* Step 2 */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">Step 2: Complete the application</h3>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              You can typically open an FHSA online, by phone, or in person. You'll need to:
            </p>
            <ul className="space-y-2 ml-5 text-[#3c3c43] text-[17px] list-disc pl-0">
              <li className="pl-2 leading-snug">Fill out the FHSA application form</li>
              <li className="pl-2 leading-snug">Provide your SIN and identification</li>
              <li className="pl-2 leading-snug">Confirm your eligibility as a first-time home buyer</li>
              <li className="pl-2 leading-snug">Choose your investment options</li>
            </ul>
          </div>
        </div>

        {/* Step 3 */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">Step 3: Make your first contribution</h3>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              Once your account is open, you can start contributing:
            </p>
            <ul className="space-y-2 ml-5 text-[#3c3c43] text-[17px] list-disc pl-0">
              <li className="pl-2 leading-snug">Annual contribution limit is $8,000</li>
              <li className="pl-2 leading-snug">Lifetime maximum is $40,000</li>
              <li className="pl-2 leading-snug">Unused contribution room carries forward to future years</li>
              <li className="pl-2 leading-snug">You can transfer funds from your RRSP to your FHSA (subject to limits)</li>
            </ul>
          </div>
        </div>

        {/* Important Note */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <div className="bg-[#fff9e6] rounded-[10px] p-4 border-l-4 border-[#ffcc00]">
              <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
                <strong className="text-black">Note:</strong> Your FHSA participation period begins when you open your first FHSA. You have 15 years from opening the account or until you turn 71, whichever comes first, to use the funds for a qualifying home purchase.
              </p>
            </div>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">What happens next</h2>
            <ul className="space-y-2 ml-5 text-[#3c3c43] text-[17px] list-disc pl-0">
              <li className="pl-2 leading-snug">Your financial institution will register your FHSA with the CRA</li>
              <li className="pl-2 leading-snug">You'll receive a confirmation and account number</li>
              <li className="pl-2 leading-snug">Contributions can be deducted on your income tax return</li>
              <li className="pl-2 leading-snug">You can view your contribution room in My Account</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}