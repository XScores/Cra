import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, CheckCircle, Building2, Calendar, FileText, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { useState } from 'react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface RefundDetailsScreenProps {
  onBack: () => void;
  onMakePayment?: () => void;
  onNavigateHome?: () => void;
  onLogoClick?: () => void;
  onViewMail?: () => void;
  onFileTaxes?: () => void;
  onRegisteredPlans?: () => void;
  hasUnreadMail?: boolean;
  onShowPrivacy?: () => void;
  onShowTerms?: () => void;
  onShowHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onCall?: (phoneNumber: string, label: string) => void;
  onBenefitsAndCredits?: () => void;
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

export function RefundDetailsScreen({ onBack, onViewMail, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onBecomeRepresentative, onBecomeRepresentativeAsRep, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments }: RefundDetailsScreenProps) {
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
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Refund details</h1>
        </div>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        <div className="px-4 py-4">
          {/* Success Box */}
          <div className="mb-4 card-ios overflow-hidden border-l-4 border-[#34C759]">
            <div className="flex gap-3 p-4">
              <CheckCircle className="h-5 w-5 text-[#34C759] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h2 className="text-black mb-2 text-[17px] font-semibold">Refund processed</h2>
                <p className="text-gray-ios text-[15px] m-0">
                  Your refund has been issued and deposited to your account.
                </p>
              </div>
            </div>
          </div>

          {/* Latest Refund */}
          <div className="mb-4 card-ios overflow-hidden border-l-4 border-[#007AFF] p-4">
            <h2 className="text-black mb-3 text-[17px] font-semibold">Latest refund</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-[rgba(60,60,67,0.174)]">
                <span className="text-gray-ios text-[15px]">Refund amount:</span>
                <span className="text-[#34C759] font-semibold text-[24px]">$850.00</span>
              </div>
              <div className="flex justify-between items-center text-[15px]">
                <span className="text-gray-ios">Tax year:</span>
                <span className="text-black font-semibold">2024</span>
              </div>
              <div className="flex justify-between items-center text-[15px]">
                <span className="text-gray-ios">Issue date:</span>
                <span className="text-black font-semibold">March 12, 2025</span>
              </div>
              <div className="flex justify-between items-center text-[15px]">
                <span className="text-gray-ios">Payment method:</span>
                <span className="text-black font-semibold">Direct deposit</span>
              </div>
            </div>
          </div>

          {/* Breakdown */}
          <div className="mb-4 card-ios p-4">
            <h2 className="text-black mb-3 text-[17px] font-semibold">Refund breakdown</h2>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2 mb-2">
                <FileText className="h-4 w-4 text-[#007AFF] mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black mb-1 font-semibold text-[15px]">2024 Tax Year</div>
                  <div className="text-gray-ios text-[13px] mb-3">Notice of Assessment issued: March 10, 2025</div>
                </div>
              </div>

              <div className="space-y-2 ml-6">
                <div className="flex justify-between text-[15px]">
                  <span className="text-gray-ios">Total income tax deducted</span>
                  <span className="text-[#34C759] font-semibold">$8,420.00</span>
                </div>
                <div className="flex justify-between text-[15px]">
                  <span className="text-gray-ios">Total federal tax</span>
                  <span className="text-[#ff3b30] font-semibold">$6,240.00</span>
                </div>
                <div className="flex justify-between text-[15px]">
                  <span className="text-gray-ios">Total provincial tax</span>
                  <span className="text-[#ff3b30] font-semibold">$1,330.00</span>
                </div>
                <div className="flex justify-between text-[15px] pt-2 border-t border-[rgba(60,60,67,0.174)]">
                  <span className="text-black font-semibold">Refund amount</span>
                  <span className="text-[#34C759] font-semibold">$850.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Deposit Information */}
          <div className="mb-4 card-ios p-4">
            <h2 className="text-black mb-3 text-[17px] font-semibold">Direct deposit information</h2>
            <div className="flex items-start gap-3">
              <Building2 className="h-5 w-5 text-[#007AFF] mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-gray-ios text-[15px] mb-3">
                  Your refund was deposited to the following account:
                </div>
                <div className="space-y-2 text-[15px]">
                  <div className="flex justify-between">
                    <span className="text-gray-ios">Financial institution:</span>
                    <span className="text-black font-semibold">Royal Bank</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-ios">Account number:</span>
                    <span className="text-black font-semibold">****7890</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-ios">Deposit date:</span>
                    <span className="text-black font-semibold">March 12, 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Refund History */}
          <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Refund history</h2>
          <div className="mb-4 card-ios overflow-hidden">
            {/* 2024 */}
            <div className="p-4 border-b border-[rgba(60,60,67,0.174)]">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-black font-semibold text-[17px]">2024 Tax Year</div>
                  <div className="text-gray-ios text-[13px]">March 12, 2025</div>
                </div>
                <div className="text-right">
                  <div className="text-[#34C759] font-semibold text-[18px]">$850.00</div>
                  <div className="text-gray-ios text-[13px]">Direct deposit</div>
                </div>
              </div>
            </div>

            {/* 2023 */}
            <div className="p-4 border-b border-[rgba(60,60,67,0.174)]">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-black font-semibold text-[17px]">2023 Tax Year</div>
                  <div className="text-gray-ios text-[13px]">April 5, 2024</div>
                </div>
                <div className="text-right">
                  <div className="text-[#34C759] font-semibold text-[18px]">$1,240.00</div>
                  <div className="text-gray-ios text-[13px]">Direct deposit</div>
                </div>
              </div>
            </div>

            {/* 2022 */}
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-black font-semibold text-[17px]">2022 Tax Year</div>
                  <div className="text-gray-ios text-[13px]">March 28, 2023</div>
                </div>
                <div className="text-right">
                  <div className="text-[#34C759] font-semibold text-[18px]">$675.00</div>
                  <div className="text-gray-ios text-[13px]">Direct deposit</div>
                </div>
              </div>
            </div>
          </div>

          {/* Information Note */}
          <div className="mb-4 card-ios overflow-hidden border-l-4 border-[#FF9500] p-4">
            <h3 className="text-black mb-2 font-semibold text-[17px]">Note</h3>
            <p className="text-gray-ios text-[15px] m-0">
              Refunds are typically issued within 2 weeks of your return being assessed. Direct deposit is the fastest and most secure way to receive your refund.
            </p>
          </div>

          {/* Contact Information */}
          <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Questions about your refund?</h2>
          <div className="card-ios mb-4 p-4">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-[#007AFF] mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-black font-semibold mb-2 text-[15px]">Call us</div>
                <button 
                  onClick={() => onCall?.('1-800-959-8281', 'CRA')}
                  className="text-[#007AFF] hover:opacity-70 active:opacity-50 text-[17px] text-left bg-transparent border-0 p-0 mb-1 transition-opacity"
                >
                  1-800-959-8281
                </button>
                <div className="text-gray-ios text-[13px]">Monday to Friday, 9 AM to 6 PM ET</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}