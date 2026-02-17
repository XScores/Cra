import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, AlertTriangle, FileText, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { useState } from 'react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface BalanceOwingDetailsScreenProps {
  onBack: () => void;
  onMakePayment: () => void;
  onNavigateHome?: () => void;
  onLogoClick?: () => void;
  onViewMail?: () => void;
  onFileTaxes?: () => void;
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

export function BalanceOwingDetailsScreen({ 
  onBack, 
  onMakePayment,
  onNavigateHome,
  onLogoClick,
  onViewMail,
  onFileTaxes,
  onBenefitsAndCredits,
  onRegisteredPlans,
  onHelp,
  onSignOut,
  onTaxSlips,
  onProofOfIncome,
  onViewRefundDetails,
  onViewNoticeOfAssessment,
  onGSTHSTCredit,
  onAccountDetails,
  onProfile,
  onViewTaxReturns,
  onHomeBuyersPlan,
  onFHSAEligibility,
  onBecomeRepresentative,
  onBecomeRepresentativeAsRep,
  onLifelongLearningPlan,
  onCustomize,
  onUncashedCheques,
  onRemittanceVoucher,
  onCPPEIRuling,
  onAuditEnquiries,
  onCarryoverAmounts,
  onChangeMyReturn,
  onRegisterFormalDispute,
  onNonResidentAccount,
  onResidencyDetermination,
  onPersonalIdentificationNumber,
  onProgressTrackerService,
  onReliefOfPenalties,
  onSubmitDocuments
}: BalanceOwingDetailsScreenProps) {
  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      <HeaderMaster 
        title="My Account"
        largeTitle={true}
        showSearch={true}
        showMenu={true}
        onNavigateHome={onNavigateHome}
        onLogoClick={onNavigateHome}
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Balance owing details</h1>
        </div>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        <div className="px-4 py-4">
          {/* Alert Box */}
          <div className="mb-4 card-ios overflow-hidden border-l-4 border-[#ff3b30]">
            <div className="flex gap-3 p-4">
              <AlertTriangle className="h-5 w-5 text-[#ff3b30] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h2 className="text-black mb-2 text-[17px] font-semibold">Payment due</h2>
                <p className="text-gray-ios text-[15px] m-0">
                  Your payment is due by <strong className="text-black">April 30, 2026</strong>. Late payments may result in interest charges.
                </p>
              </div>
            </div>
          </div>

          {/* Total Balance */}
          <div className="mb-4 card-ios overflow-hidden border-l-4 border-[#ff3b30]">
            <div className="p-4">
              <h2 className="text-black mb-3 text-[17px] font-semibold">Total balance owing</h2>
              <div className="flex justify-between items-center mb-3 pb-3 border-b border-[rgba(60,60,67,0.29)]">
                <span className="text-gray-ios text-[15px]">Amount due:</span>
                <span className="text-[#ff3b30] font-semibold text-[24px]">$1,250.00</span>
              </div>
              <div className="flex justify-between items-center text-[15px]">
                <span className="text-gray-ios">Due date:</span>
                <span className="text-black font-semibold">April 30, 2026</span>
              </div>
            </div>
          </div>

          {/* Breakdown */}
          <div className="mb-4 card-ios">
            <div className="p-4">
              <h2 className="text-black mb-3 text-[17px] font-semibold">Balance breakdown</h2>
              
              <div className="space-y-3">
                {/* 2024 Tax Year */}
                <div className="pb-3 border-b border-[rgba(60,60,67,0.29)]">
                  <div className="flex items-start gap-2 mb-2">
                    <FileText className="h-4 w-4 text-[#007AFF] mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-black mb-1 font-semibold">2024 Tax Year</div>
                      <div className="text-gray-ios text-[14px] mb-2">Notice of Assessment issued: March 20, 2026</div>
                    </div>
                  </div>
                  <div className="space-y-2 ml-6">
                    <div className="flex justify-between text-[15px]">
                      <span className="text-gray-ios">Balance owing on assessment</span>
                      <span className="text-[#ff3b30]">$1,250.00</span>
                    </div>
                    <div className="flex justify-between text-[15px]">
                      <span className="text-gray-ios">Payments applied</span>
                      <span className="text-[#34C759]">$0.00</span>
                    </div>
                    <div className="flex justify-between text-[15px] pt-2 border-t border-[rgba(60,60,67,0.29)]">
                      <span className="text-black font-semibold">Subtotal for 2024</span>
                      <span className="text-[#ff3b30] font-semibold">$1,250.00</span>
                    </div>
                  </div>
                </div>

                {/* Total */}
                <div className="pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-black font-semibold text-[17px]">Total balance owing</span>
                    <span className="text-[#ff3b30] font-semibold text-[24px]">$1,250.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="mb-4 card-ios">
            <div className="p-4">
              <h2 className="text-black mb-3 text-[17px] font-semibold">Payment options</h2>
              <p className="text-gray-ios text-[15px] mb-4">
                You can make a payment using your bank account, credit card, or through your financial institution.
              </p>
              <button 
                onClick={onMakePayment}
                className="btn-filled-ios w-full text-center"
              >
                Make a payment
              </button>
            </div>
          </div>

          {/* Important Information */}
          <div className="mb-4 p-4 bg-[#FFF9E6] border-l-4 border-[#FFCC00] rounded-[12px]">
            <h3 className="text-black mb-2 text-[15px] font-semibold">Note:</h3>
            <p className="text-gray-ios text-[15px] m-0">
              Interest is charged on any unpaid balance after the due date. The prescribed interest rate is set quarterly and compounded daily. Payment arrangements may be available if you cannot pay the full amount.
            </p>
          </div>

          {/* Contact Information */}
          <div className="card-ios">
            <div className="p-4">
              <h2 className="text-black mb-3 text-[17px] font-semibold">Need help?</h2>
              <div className="space-y-2 text-[15px]">
                <div className="flex items-start gap-2">
                  <div className="flex-1">
                    <div className="text-black font-semibold mb-1">Call us</div>
                    <button 
                      onClick={() => onCall?.('1-800-959-8281', 'CRA')}
                      className="text-[#007AFF] hover:opacity-70 active:opacity-50 text-left bg-transparent border-0 p-0 transition-opacity"
                    >
                      1-800-959-8281
                    </button>
                    <div className="text-gray-ios text-[14px]">Monday to Friday, 9 AM to 6 PM ET</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}