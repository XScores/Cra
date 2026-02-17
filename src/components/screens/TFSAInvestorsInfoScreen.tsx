import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { useState } from 'react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface TFSAInvestorsInfoScreenProps {
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

export function TFSAInvestorsInfoScreen({ onBack, onViewMail, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onBecomeRepresentative, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments }: TFSAInvestorsInfoScreenProps) {
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
        <div className="flex items-start gap-3 mb-1">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[1.1]">TFSA investors'<br />information</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Learn about qualified investments, prohibited investments, and trading rules for your TFSA</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Overview */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Overview</h2>
            <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
              Your TFSA can hold various types of investments. Understanding what you can invest in and the rules around trading can help you make the most of your tax-free savings.
            </p>
          </div>
        </div>

        {/* Qualified Investments */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Qualified investments</h2>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              You can hold the following investments in your TFSA:
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Cash</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Mutual funds</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Securities listed on a designated stock exchange (stocks, bonds, ETFs)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Guaranteed Investment Certificates (GICs)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Bonds and other government and corporate debt</p>
              </div>
            </div>
          </div>
        </div>

        {/* Prohibited Investments */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">Prohibited investments</h3>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              The following are generally not allowed in a TFSA:
            </p>
            <div className="space-y-2 ml-4">
              <div className="flex items-start gap-2">
                <span className="text-[#ff3b30] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Investments in entities you control or have significant interest in</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#ff3b30] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Investments in entities that don't deal at arm's length with you</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#ff3b30] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Certain shares of private corporations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Day Trading */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">Day trading and business activities</h3>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              While you can buy and sell investments in your TFSA, there are important considerations:
            </p>
            <div className="space-y-2 ml-4">
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug"><strong className="text-black">Investment income is tax-free:</strong> All gains, interest, and dividends earned in your TFSA are not taxable</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug"><strong className="text-black">Day trading caution:</strong> If the CRA determines your trading activity constitutes carrying on a business, income may be taxable</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug"><strong className="text-black">Frequency matters:</strong> Occasional trading is fine, but frequent day trading may be considered business income</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug"><strong className="text-black">Professional advice:</strong> If in doubt about your trading activity, consult a tax professional</p>
              </div>
            </div>
          </div>
        </div>

        {/* Foreign Investments */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Foreign investments</h2>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              You can hold foreign investments in your TFSA with these considerations:
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug"><strong className="text-black">No Canadian tax:</strong> You won't pay Canadian tax on foreign investment income or gains</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug"><strong className="text-black">Foreign withholding tax:</strong> Foreign governments may withhold tax on dividends (e.g., 15% on U.S. dividends)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug"><strong className="text-black">No foreign tax credit:</strong> Withholding taxes cannot be recovered or claimed as a credit</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug"><strong className="text-black">Currency considerations:</strong> Exchange rate fluctuations can affect your returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <div className="bg-[#fff9e6] rounded-[10px] p-4 border-l-4 border-[#ffcc00]">
              <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
                <strong className="text-black">Note:</strong> Holding a prohibited investment in your TFSA can result in a tax of 50% on the fair market value of the investment, plus other penalties. Ensure all investments comply with CRA rules.
              </p>
            </div>
          </div>
        </div>

        {/* Investment Losses */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Investment losses</h2>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-[#ff3b30] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Investment losses in your TFSA cannot be claimed as capital losses</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#ff3b30] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Losses do not reduce your contribution room</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#ff3b30] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">If your account value drops below your contributions, you can still only withdraw the current market value</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}