import { HeaderMaster } from '../HeaderMaster';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, X } from 'lucide-react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface FHSAEligibilityScreenProps {
  onBack: () => void;
  onViewMail: () => void;
  onNavigateHome: () => void;
  onNavigateToRegisteredPlans?: () => void;
  onFileTaxes: () => void;
  onMakePayment: () => void;
  onBenefitsAndCredits: () => void;
  onRegisteredPlans: () => void;
  onHelp: () => void;
  onSignOut: () => void;
  onTaxSlips: () => void;
  onProofOfIncome: () => void;
  onHowToOpenFHSA: () => void;
  onFHSAQualifyingWithdrawal: () => void;
  onFHSAvsHBP: () => void;
  onViewFHSAContributionRoom: () => void;
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

export function FHSAEligibilityScreen({ onBack, onViewMail, onNavigateHome, onNavigateToRegisteredPlans, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onHowToOpenFHSA, onFHSAQualifyingWithdrawal, onFHSAvsHBP, onViewFHSAContributionRoom, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onBecomeRepresentative, onBecomeRepresentativeAsRep, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments }: FHSAEligibilityScreenProps) {
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
        onHelp={onHelp}
        onSignOut={onSignOut}
        onViewRefundDetails={onViewRefundDetails}
        onViewNoticeOfAssessment={onViewNoticeOfAssessment}
        onGSTHSTCredit={onGSTHSTCredit}
        onAccountDetails={onAccountDetails}
        onProfile={onProfile}
        onViewTaxReturns={onViewTaxReturns}
        onHomeBuyersPlan={onHomeBuyersPlan}
        onFHSAEligibility={onFHSAEligibility}
        onBecomeRepresentative={onBecomeRepresentative}
        onBecomeRepresentativeAsRep={onBecomeRepresentativeAsRep}
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[1.1]">FHSA eligibility<br />requirements</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Learn who can open and contribute to a First Home Savings Account</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* What is FHSA */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">What is a First Home Savings Account?</h2>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              The FHSA is a registered savings plan that allows first-time home buyers to save up to $40,000 tax-free toward the purchase of their first home.
            </p>
            <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
              Contributions are tax-deductible (like an RRSP) and qualifying withdrawals to buy your first home are tax-free (like a TFSA).
            </p>
          </div>
        </div>

        {/* Eligibility Requirements */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-4">You can open an FHSA if you meet all of these conditions:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-[#28a745] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">You are a resident of Canada</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-[#28a745] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">You are at least 18 years old</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-[#28a745] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">You have a valid Social Insurance Number (SIN)</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-[#28a745] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">You are a first-time home buyer (see definition below)</p>
              </div>
            </div>
          </div>
        </div>

        {/* First-time Home Buyer Definition */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-3">Who qualifies as a first-time home buyer?</h3>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              You are considered a first-time home buyer if you meet this requirement:
            </p>
            <div className="bg-[#f2f2f7] rounded-[10px] p-4 mb-3">
              <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
                You (or your spouse or common-law partner) did not live in a qualifying home that you owned at any time in the current calendar year before opening the account, or at any time in the preceding 4 calendar years.
              </p>
            </div>
            <div className="bg-[#fff9e6] rounded-[10px] p-4 border-l-4 border-[#ffcc00]">
              <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
                <strong className="text-black">Example:</strong> If you open an FHSA in 2025, you must not have owned and lived in a home in 2025, 2024, 2023, 2022, or 2021.
              </p>
            </div>
          </div>
        </div>

        {/* Contribution Rules */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] overflow-hidden">
            <div className="px-4 pt-4 pb-3 border-b border-[#c6c6c8]">
              <h3 className="text-black text-[20px] m-0">Contribution limits</h3>
            </div>
            <div className="divide-y divide-[#c6c6c8]">
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">Annual contribution limit</span>
                <span className="text-black text-[17px] text-right">$8,000</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">Lifetime contribution limit</span>
                <span className="text-black text-[17px] text-right">$40,000</span>
              </div>
            </div>
            <div className="px-4 py-3 bg-[#f2f2f7]">
              <p className="text-[#3c3c43] text-[15px] m-0 leading-snug opacity-80">
                Unused annual contribution room cannot be carried forward to future years. You must open the account before you can start accumulating contribution room.
              </p>
            </div>
          </div>
        </div>

        {/* Account Closure Rules */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-3">Important account closure rules</h3>
            <p className="text-[#3c3c43] text-[17px] m-0 mb-3 leading-snug">
              Your FHSA must be closed by the earlier of:
            </p>
            <ul className="list-disc m-0 pl-5 space-y-2 mb-3">
              <li className="text-[#3c3c43] text-[17px] leading-snug">The 15th anniversary of opening your first FHSA</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">The year you turn 71</li>
            </ul>
            <div className="bg-[#fff9e6] rounded-[10px] p-4 border-l-4 border-[#ffcc00]">
              <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
                <strong className="text-black">Note:</strong> If you buy a qualifying home, you must make a qualifying withdrawal within 15 years of opening the account.
              </p>
            </div>
          </div>
        </div>

        {/* Who Cannot Open an FHSA */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-4">You cannot open or contribute to an FHSA if:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <X className="h-6 w-6 text-[#ff3b30] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">You are not a resident of Canada</p>
              </div>
              <div className="flex items-start gap-3">
                <X className="h-6 w-6 text-[#ff3b30] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">You are under 18 years old</p>
              </div>
              <div className="flex items-start gap-3">
                <X className="h-6 w-6 text-[#ff3b30] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">You owned and lived in a qualifying home in the current or previous 4 calendar years</p>
              </div>
              <div className="flex items-start gap-3">
                <X className="h-6 w-6 text-[#ff3b30] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Your spouse or common-law partner owned and lived in a qualifying home in the current or previous 4 calendar years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <div className="px-4 mb-4">
          <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Related links</h2>
          <div className="bg-white rounded-[10px] overflow-hidden divide-y divide-[#c6c6c8]">
            {onHowToOpenFHSA && (
              <button 
                onClick={onHowToOpenFHSA}
                className="w-full px-4 py-3 flex items-center justify-between bg-white hover:opacity-70 active:opacity-50 transition-opacity border-0 cursor-pointer"
              >
                <span className="text-[#007AFF] text-[17px] text-left">How to open an FHSA</span>
                <ChevronRight className="h-5 w-5 text-[#c7c7cc] flex-shrink-0" strokeWidth={2.5} />
              </button>
            )}
            {onFHSAQualifyingWithdrawal && (
              <button 
                onClick={onFHSAQualifyingWithdrawal}
                className="w-full px-4 py-3 flex items-center justify-between bg-white hover:opacity-70 active:opacity-50 transition-opacity border-0 cursor-pointer"
              >
                <span className="text-[#007AFF] text-[17px] text-left">Making a qualifying withdrawal from your FHSA</span>
                <ChevronRight className="h-5 w-5 text-[#c7c7cc] flex-shrink-0" strokeWidth={2.5} />
              </button>
            )}
            {onFHSAvsHBP && (
              <button 
                onClick={onFHSAvsHBP}
                className="w-full px-4 py-3 flex items-center justify-between bg-white hover:opacity-70 active:opacity-50 transition-opacity border-0 cursor-pointer"
              >
                <span className="text-[#007AFF] text-[17px] text-left">FHSA vs Home Buyers' Plan comparison</span>
                <ChevronRight className="h-5 w-5 text-[#c7c7cc] flex-shrink-0" strokeWidth={2.5} />
              </button>
            )}
            {onViewFHSAContributionRoom && (
              <button 
                onClick={onViewFHSAContributionRoom}
                className="w-full px-4 py-3 flex items-center justify-between bg-white hover:opacity-70 active:opacity-50 transition-opacity border-0 cursor-pointer"
              >
                <span className="text-[#007AFF] text-[17px] text-left">View your FHSA contribution room</span>
                <ChevronRight className="h-5 w-5 text-[#c7c7cc] flex-shrink-0" strokeWidth={2.5} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}