import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { useState } from 'react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface ViewTFSAContributionRoomScreenProps {
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

export function ViewTFSAContributionRoomScreen({ onBack, onViewMail, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onBecomeRepresentative, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments }: ViewTFSAContributionRoomScreenProps) {
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[1.1]">View your TFSA<br />contribution room</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Check your available contribution room and transaction history for your Tax-Free Savings Account</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Current Contribution Room */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] overflow-hidden">
            <div className="px-4 pt-4 pb-3 border-b border-[#c6c6c8]">
              <h2 className="text-black text-[20px] m-0">Your TFSA contribution room for 2024</h2>
            </div>
            <div className="divide-y divide-[#c6c6c8]">
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">Contribution room at start of year</span>
                <span className="text-[#28a745] text-[17px] text-right">$45,500.00</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">Contributions made in 2024</span>
                <span className="text-[#ff3b30] text-[17px] text-right">$5,000.00</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-black text-[17px]">Withdrawals made in 2024</span>
                <span className="text-[#28a745] text-[17px] text-right">$2,000.00</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 bg-[#f2f2f7]">
                <span className="text-black text-[17px]">Current contribution room</span>
                <span className="text-[#28a745] text-[17px] text-right">$42,500.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* How Contribution Room Works */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">How TFSA contribution room works</h2>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Annual TFSA dollar limit for 2024: $7,000</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Contribution room accumulates every year starting from age 18</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Unused contribution room carries forward indefinitely</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Withdrawals are re-added to your contribution room the following year</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Investment gains and losses do not affect your contribution room</p>
              </div>
            </div>
          </div>
        </div>

        {/* Annual Limits History */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] overflow-hidden">
            <div className="px-4 pt-4 pb-3 border-b border-[#c6c6c8]">
              <h2 className="text-black text-[20px] m-0">TFSA annual limits by year</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#f2f2f7] border-b border-[#c6c6c8]">
                    <th className="px-4 py-2 text-left text-black text-[15px]">Year</th>
                    <th className="px-4 py-2 text-left text-black text-[15px]">Annual Limit</th>
                    <th className="px-4 py-2 text-left text-black text-[15px]">Cumulative Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c6c6c8]">
                  <tr>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">2024</td>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">$7,000</td>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">$95,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">2023</td>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">$6,500</td>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">$88,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">2019-2022</td>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">$6,000</td>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">$81,500</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">2016-2018</td>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">$5,500</td>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">$57,500</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">2015</td>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">$10,000</td>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">$41,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">2013-2014</td>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">$5,500</td>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">$31,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">2009-2012</td>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">$5,000</td>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">$20,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Transaction Summary */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-3">Your 2024 transaction summary</h3>
            <div className="space-y-3">
              <div>
                <p className="text-black text-[17px] mb-2">Contributions</p>
                <div className="ml-4 space-y-1">
                  <p className="text-[#3c3c43] text-[17px] leading-snug">January 15, 2024: $3,000.00</p>
                  <p className="text-[#3c3c43] text-[17px] leading-snug">June 1, 2024: $2,000.00</p>
                </div>
              </div>
              <div>
                <p className="text-black text-[17px] mb-2">Withdrawals</p>
                <div className="ml-4 space-y-1">
                  <p className="text-[#3c3c43] text-[17px] leading-snug">March 10, 2024: $2,000.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Withdrawal Impact */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">How withdrawals affect your room</h2>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              The $2,000 you withdrew in 2024 will be added back to your contribution room on January 1, 2025. This means:
            </p>
            <div className="bg-[#f2f2f7] rounded-[10px] p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#3c3c43] text-[17px]">Current room (2024)</span>
                <span className="text-[#28a745] text-[17px] text-right">$42,500.00</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#3c3c43] text-[17px]">2025 annual limit</span>
                <span className="text-[#28a745] text-[17px] text-right">$7,000.00</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[#3c3c43] text-[17px]">2024 withdrawals re-added</span>
                <span className="text-[#28a745] text-[17px] text-right">$2,000.00</span>
              </div>
              <div className="border-t border-[#c6c6c8] pt-2">
                <div className="flex justify-between items-center">
                  <span className="text-black text-[17px]">Estimated room for 2025</span>
                  <span className="text-[#28a745] text-[17px] text-right">$51,500.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <div className="bg-[#fff9e6] rounded-[10px] p-4 border-l-4 border-[#ffcc00]">
              <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
                <strong className="text-black">Note:</strong> Your TFSA contribution room is updated based on information from your financial institutions. It may take several weeks for transactions to appear. Over-contributing to your TFSA results in a penalty tax of 1% per month on the excess amount. Always verify your current room before making contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}