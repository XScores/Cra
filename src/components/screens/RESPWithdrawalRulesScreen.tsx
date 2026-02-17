import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { useState } from 'react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface RESPWithdrawalRulesScreenProps {
  onBack: () => void;
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

export function RESPWithdrawalRulesScreen({ onBack, onViewMail, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onBecomeRepresentative, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments }: RESPWithdrawalRulesScreenProps) {
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
          <div>
            <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[1.1]">RESP withdrawal rules</h1>
            <p className="text-black text-[15px] m-0 opacity-80 mt-1">Learn how to access RESP funds for post-secondary education</p>
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
              Understanding RESP withdrawal rules helps you maximize the benefits for your beneficiary's education while minimizing taxes.
            </p>
          </div>
        </div>

        {/* Types of Withdrawals */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-4">Types of RESP withdrawals</h2>
            <div className="space-y-4">
              <div className="bg-[#f2f2f7] rounded-[10px] p-4">
                <p className="text-black text-[17px] mb-2">Educational Assistance Payment (EAP)</p>
                <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">Includes government grants and investment earnings. Taxable to the student.</p>
              </div>
              <div className="bg-[#f2f2f7] rounded-[10px] p-4">
                <p className="text-black text-[17px] mb-2">Post-Secondary Education (PSE) withdrawal</p>
                <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">Your original contributions. Not taxable as they were made with after-tax dollars.</p>
              </div>
              <div className="bg-[#f2f2f7] rounded-[10px] p-4">
                <p className="text-black text-[17px] mb-2">Accumulated Income Payment (AIP)</p>
                <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">Investment earnings if beneficiary doesn't pursue education. Taxable to the subscriber.</p>
              </div>
            </div>
          </div>
        </div>

        {/* EAP Requirements */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">EAP withdrawal requirements</h3>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              To withdraw EAPs, the beneficiary must:
            </p>
            <ul className="list-disc m-0 pl-5 space-y-2">
              <li className="text-[#3c3c43] text-[17px] leading-snug">Be enrolled in a qualifying educational program</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Provide proof of enrollment to the RESP provider</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Meet program duration requirements (at least 3 consecutive weeks, 10 hours/week minimum)</li>
            </ul>
          </div>
        </div>

        {/* EAP Limits */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-3">EAP limits</h3>
            <ul className="list-disc m-0 pl-5 space-y-2">
              <li className="text-[#3c3c43] text-[17px] leading-snug"><strong className="text-black">First 13 weeks:</strong> Maximum $8,000 if enrolled full-time, $4,000 if part-time</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug"><strong className="text-black">After 13 weeks:</strong> No limit on withdrawal amounts</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug"><strong className="text-black">Part-time students:</strong> Lower limits apply if studying less than full-time</li>
            </ul>
          </div>
        </div>

        {/* Qualifying Programs */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-4">Qualifying educational programs</h2>
            <div className="space-y-4">
              <div>
                <p className="text-black text-[17px] mb-2">Full-time programs</p>
                <ul className="list-disc m-0 pl-5 space-y-2">
                  <li className="text-[#3c3c43] text-[17px] leading-snug">At least 3 consecutive weeks</li>
                  <li className="text-[#3c3c43] text-[17px] leading-snug">Minimum 10 hours per week of instruction or work</li>
                  <li className="text-[#3c3c43] text-[17px] leading-snug">At a post-secondary institution (university, college, CEGEP)</li>
                </ul>
              </div>
              <div>
                <p className="text-black text-[17px] mb-2">Part-time programs</p>
                <ul className="list-disc m-0 pl-5 space-y-2">
                  <li className="text-[#3c3c43] text-[17px] leading-snug">At least 3 consecutive weeks</li>
                  <li className="text-[#3c3c43] text-[17px] leading-snug">Minimum 12 hours per month of instruction</li>
                  <li className="text-[#3c3c43] text-[17px] leading-snug">At a post-secondary institution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tax Implications */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Tax implications</h2>
            <ul className="list-disc m-0 pl-5 space-y-2">
              <li className="text-[#3c3c43] text-[17px] leading-snug"><strong className="text-black">EAPs:</strong> Taxed as income to the student (usually low or no tax due to student tax credits)</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug"><strong className="text-black">PSE withdrawals:</strong> Not taxable</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug"><strong className="text-black">AIPs:</strong> Taxed at subscriber's rate plus 20% penalty (12% in Quebec)</li>
            </ul>
          </div>
        </div>

        {/* Important Note */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <div className="bg-[#fff9e6] rounded-[10px] p-4 border-l-4 border-[#ffcc00]">
              <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
                <strong className="text-black">Note:</strong> If your beneficiary doesn't pursue post-secondary education, you have options. You can transfer the plan to another child, transfer earnings to an RRSP (if you have room), or take an AIP (subject to tax and penalties). Government grants must be repaid.
              </p>
            </div>
          </div>
        </div>

        {/* RESP Must Close */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">RESP must close when</h2>
            <ul className="list-disc m-0 pl-5 space-y-2">
              <li className="text-[#3c3c43] text-[17px] leading-snug">The beneficiary has completed or left their program</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">All funds have been withdrawn</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">By the end of the 35th year after the plan was opened</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">The beneficiary turns 36 years old (in some cases)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}