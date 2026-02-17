import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, ChevronRight, FileText, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { useState } from 'react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface RegisteredPlansScreenProps {
  onBack: () => void;
  onLearnRegisteredPlans: () => void;
  onRRSPCalculator: () => void;
  onFHSAEligibility: () => void;
  onTFSAContributionRules: () => void;
  onRESPGrantPrograms: () => void;
  onViewMail?: () => void;
  onViewNoticeOfAssessment?: () => void;
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
  onGSTHSTCredit?: () => void;
  onAccountDetails?: () => void;
  onProfile?: () => void;
  onViewTaxReturns?: () => void;
  onHomeBuyersPlan?: () => void;
  onLifelongLearningPlan?: () => void;
  onCustomize?: () => void;
  onUncashedCheques?: () => void;
  onBecomeRepresentative?: () => void;
  onBecomeRepresentativeAsRep?: () => void;
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
  onUserFeedback?: () => void;
  hasUnreadMail?: boolean;
}

export function RegisteredPlansScreen({ onBack, onLearnRegisteredPlans, onRRSPCalculator, onFHSAEligibility, onTFSAContributionRules, onRESPGrantPrograms, onViewMail, onViewNoticeOfAssessment, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onViewRefundDetails, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onLifelongLearningPlan, onCustomize, onUncashedCheques, onBecomeRepresentative, onBecomeRepresentativeAsRep, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments, onUserFeedback, hasUnreadMail }: RegisteredPlansScreenProps) {
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
        onViewRefundDetails={onViewRefundDetails}
        onViewNoticeOfAssessment={onViewNoticeOfAssessment}
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
        onBecomeRepresentativeAsRep={onBecomeRepresentativeAsRep}
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
        onUserFeedback={onUserFeedback}
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Registered plans</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">View your RRSP, TFSA, FHSA, and RESP contribution information</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Notice of Assessment */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] overflow-hidden">
            <button 
              onClick={onViewNoticeOfAssessment}
              className="w-full px-4 py-3 flex items-center gap-3 bg-white hover:opacity-70 active:opacity-50 transition-opacity border-0 cursor-pointer"
            >
              <FileText className="h-[22px] w-[22px] text-[#007AFF] flex-shrink-0" strokeWidth={2} />
              <span className="text-black text-[17px] flex-1 text-left">View full Notice of Assessment (NOA)</span>
              <div className="chevron-button-ios">
                <ChevronRight />
              </div>
            </button>
          </div>
        </div>

        {/* Important Note */}
        <div className="px-4 mb-4">
          <div className="bg-[#fff9e6] rounded-[10px] p-4 border-l-4 border-[#ffcc00]">
            <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
              <strong className="text-black">Important:</strong> Over-contributions to RRSPs, FHSA, and TFSA can lead to significant penalties and tax implications.{' '}
              <button 
                onClick={onLearnRegisteredPlans}
                className="text-[#007AFF] hover:opacity-70 active:opacity-50 bg-transparent border-0 p-0 text-[15px] cursor-pointer"
              >
                Learn about registered plans
              </button>
            </p>
          </div>
        </div>

        {/* RRSP Section */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] overflow-hidden">
            <div className="px-4 pt-4 pb-3 border-b border-[#c6c6c8]">
              <h3 className="text-black text-[20px] m-0 mb-1">RRSP</h3>
              <p className="text-black text-[15px] m-0 opacity-80">Registered Retirement Savings Plan</p>
            </div>

            <div className="divide-y divide-[#c6c6c8]">
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">2025 deduction limit</span>
                <span className="text-black text-[17px] text-right">$31,560.00</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">Unused contributions</span>
                <span className="text-black text-[17px] text-right">$2,450.00</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">Available contribution room</span>
                <span className="text-[#28a745] text-[17px] text-right">$29,110.00</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">2025 contributions</span>
                <span className="text-black text-[17px] text-right">$8,500.00</span>
              </div>
            </div>

            <div className="px-4 py-3 bg-[#f2f2f7]">
              <p className="text-[#3c3c43] text-[15px] m-0 leading-snug opacity-80">
                Your RRSP deduction limit is based on your 2025 earned income and unused contributions from previous years.
              </p>
            </div>
          </div>
        </div>

        {/* FHSA Section */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] overflow-hidden">
            <div className="px-4 pt-4 pb-3 border-b border-[#c6c6c8]">
              <h3 className="text-black text-[20px] m-0 mb-1">FHSA</h3>
              <p className="text-black text-[15px] m-0 opacity-80">First Home Savings Account</p>
            </div>

            <div className="divide-y divide-[#c6c6c8]">
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">2025 annual limit</span>
                <span className="text-black text-[17px] text-right">$8,000.00</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">Lifetime limit</span>
                <span className="text-black text-[17px] text-right">$40,000.00</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">Available contribution room</span>
                <span className="text-[#28a745] text-[17px] text-right">$24,000.00</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">Total contributions to date</span>
                <span className="text-black text-[17px] text-right">$16,000.00</span>
              </div>
            </div>

            <div className="px-4 py-3 bg-[#f2f2f7]">
              <p className="text-[#3c3c43] text-[15px] m-0 leading-snug opacity-80">
                The FHSA allows you to save up to $40,000 tax-free to purchase your first home. Account opened in 2023.
              </p>
            </div>
          </div>
        </div>

        {/* TFSA Section */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] overflow-hidden">
            <div className="px-4 pt-4 pb-3 border-b border-[#c6c6c8]">
              <h3 className="text-black text-[20px] m-0 mb-1">TFSA</h3>
              <p className="text-black text-[15px] m-0 opacity-80">Tax-Free Savings Account</p>
            </div>

            <div className="divide-y divide-[#c6c6c8]">
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">2025 annual limit</span>
                <span className="text-black text-[17px] text-right">$7,000.00</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">Accumulated room from previous years</span>
                <span className="text-black text-[17px] text-right">$12,500.00</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">Available contribution room</span>
                <span className="text-[#28a745] text-[17px] text-right">$19,500.00</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">2025 contributions</span>
                <span className="text-black text-[17px] text-right">$7,000.00</span>
              </div>
            </div>

            <div className="px-4 py-3 bg-[#f2f2f7]">
              <p className="text-[#3c3c43] text-[15px] m-0 leading-snug opacity-80">
                Unused TFSA contribution room carries forward indefinitely. Your contribution room includes any withdrawals made in previous years.
              </p>
            </div>
          </div>
        </div>

        {/* RESP Section */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] overflow-hidden">
            <div className="px-4 pt-4 pb-3 border-b border-[#c6c6c8]">
              <h3 className="text-black text-[20px] m-0 mb-1">RESP</h3>
              <p className="text-black text-[15px] m-0 opacity-80">Registered Education Savings Plan</p>
            </div>

            <div className="divide-y divide-[#c6c6c8]">
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">Lifetime contribution limit per child</span>
                <span className="text-black text-[17px] text-right">$50,000.00</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">Annual CESG grant limit</span>
                <span className="text-black text-[17px] text-right">$500.00</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">Available contribution room</span>
                <span className="text-[#28a745] text-[17px] text-right">$35,400.00</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">Total contributions to date</span>
                <span className="text-black text-[17px] text-right">$14,600.00</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">CESG received to date</span>
                <span className="text-[#28a745] text-[17px] text-right">$2,920.00</span>
              </div>
            </div>

            <div className="px-4 py-3 bg-[#f2f2f7]">
              <p className="text-[#3c3c43] text-[15px] m-0 leading-snug opacity-80">
                The Canada Education Savings Grant (CESG) matches 20% of your contributions up to $500 per year. Beneficiary: Emma Rath, born 2018.
              </p>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="px-4 mb-4">
          <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Need help?</h2>
          <div className="bg-white rounded-[10px] overflow-hidden divide-y divide-[#c6c6c8]">
            <button 
              onClick={onLearnRegisteredPlans}
              className="w-full px-4 py-3 flex items-center justify-between bg-white hover:opacity-70 active:opacity-50 transition-opacity border-0 cursor-pointer"
            >
              <span className="text-[#007AFF] text-[17px] text-left">Learn about registered plans</span>
              <div className="chevron-button-ios">
                <ChevronRight />
              </div>
            </button>
            <button 
              onClick={onRRSPCalculator}
              className="w-full px-4 py-3 flex items-center justify-between bg-white hover:opacity-70 active:opacity-50 transition-opacity border-0 cursor-pointer"
            >
              <span className="text-[#007AFF] text-[17px] text-left">Calculate your RRSP deduction limit</span>
              <div className="chevron-button-ios">
                <ChevronRight />
              </div>
            </button>
            <button 
              onClick={onFHSAEligibility}
              className="w-full px-4 py-3 flex items-center justify-between bg-white hover:opacity-70 active:opacity-50 transition-opacity border-0 cursor-pointer"
            >
              <span className="text-[#007AFF] text-[17px] text-left">FHSA eligibility requirements</span>
              <div className="chevron-button-ios">
                <ChevronRight />
              </div>
            </button>
            <button 
              onClick={onTFSAContributionRules}
              className="w-full px-4 py-3 flex items-center justify-between bg-white hover:opacity-70 active:opacity-50 transition-opacity border-0 cursor-pointer"
            >
              <span className="text-[#007AFF] text-[17px] text-left">TFSA contribution rules</span>
              <div className="chevron-button-ios">
                <ChevronRight />
              </div>
            </button>
            <button 
              onClick={onRESPGrantPrograms}
              className="w-full px-4 py-3 flex items-center justify-between bg-white hover:opacity-70 active:opacity-50 transition-opacity border-0 cursor-pointer"
            >
              <span className="text-[#007AFF] text-[17px] text-left">RESP grant programs</span>
              <div className="chevron-button-ios">
                <ChevronRight />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}