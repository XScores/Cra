import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface OnlineBankingScreenProps {
  onBack: () => void;
  onViewMail?: () => void;
  onNavigateHome?: () => void;
  onLogoClick?: () => void;
  hasUnreadMail?: boolean;
  onFileTaxes?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onMakePayment?: () => void;
  onViewAllBenefits?: () => void;
  onViewRefundDetails?: () => void;
  onViewNoticeOfAssessment?: () => void;
  onGSTHSTCredit?: () => void;
  onAccountDetails?: () => void;
  onProfile?: () => void;
  onViewTaxReturns?: () => void;
}

export function OnlineBankingScreen({ 
  onBack, 
  onViewMail, 
  onNavigateHome, 
  onLogoClick, 
  hasUnreadMail, 
  onFileTaxes, 
  onBenefitsAndCredits, 
  onRegisteredPlans, 
  onHelp, 
  onSignOut, 
  onTaxSlips, 
  onProofOfIncome,
  onMakePayment,
  onViewAllBenefits,
  onViewRefundDetails,
  onViewNoticeOfAssessment,
  onGSTHSTCredit,
  onAccountDetails,
  onProfile,
  onViewTaxReturns
}: OnlineBankingScreenProps) {
  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col relative">
      {/* Header - Sticky */}
      <div className="flex-shrink-0 sticky top-0 z-10 bg-white">
        <HeaderMaster 
          title="My Account"
          onNavigateHome={onNavigateHome}
          onLogoClick={onLogoClick}
          hasUnreadMail={hasUnreadMail}
          showSearch={true}
          showMenu={true}
          largeTitle={true}
          onFileTaxes={onFileTaxes}
          onViewAllBenefits={onViewAllBenefits || onBenefitsAndCredits}
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
        />
      </div>

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Online Banking</h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        <div className="px-4 pb-4 pt-4">
          {/* Section Header */}
          <div className="section-header-ios -mx-4">
            Step-by-step guide
          </div>

          {/* Step-by-step guide */}
          <div className="space-y-3 mb-4">
            {/* Step 1 */}
            <div className="card-ios p-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#007AFF] text-white">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="text-[17px] font-semibold text-black mb-2">Sign in to your online banking</h4>
                  <p className="text-[15px] text-[#8e8e93] m-0">
                    Log in to your bank or credit union's online banking service or mobile app.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="card-ios p-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#007AFF] text-white">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="text-[17px] font-semibold text-black mb-2">Add the CRA as a payee</h4>
                  <p className="text-[15px] text-[#8e8e93] m-0">
                    Go to the "Add a payee" or "Pay a bill" section. You may need to look for options like "Canada Revenue Agency," "Federal – Corporation Tax Payments – TXINS" for businesses, or a similar designation.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="card-ios p-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#007AFF] text-white">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="text-[17px] font-semibold text-black mb-2">Enter your account number</h4>
                  <p className="text-[15px] text-[#8e8e93] m-0 mb-3">
                    The account number you will need to enter is:
                  </p>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[15px] font-semibold text-black">For individuals:</div>
                        <div className="text-[15px] text-[#8e8e93]">Your 9-digit Social Insurance Number (SIN).</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[15px] font-semibold text-black">For businesses:</div>
                        <div className="text-[15px] text-[#8e8e93]">Your business number (BN) plus the relevant suffix, as indicated on your CRA communication.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="card-ios p-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#007AFF] text-white">
                  4
                </div>
                <div className="flex-1">
                  <h4 className="text-[17px] font-semibold text-black mb-2">Enter the payment amount</h4>
                  <p className="text-[15px] text-[#8e8e93] m-0">
                    Input the amount you wish to pay.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="card-ios p-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#007AFF] text-white">
                  5
                </div>
                <div className="flex-1">
                  <h4 className="text-[17px] font-semibold text-black mb-2">Confirm the payment</h4>
                  <p className="text-[15px] text-[#8e8e93] m-0">
                    Review the details and confirm the transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section Header */}
          <div className="section-header-ios">
            Important notes
          </div>

          {/* Important Notes */}
          <div className="space-y-3">
            <div className="card-ios p-4">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-[15px] font-semibold text-black mb-1">Payment processing time</h4>
                  <p className="text-[15px] text-[#8e8e93] m-0">
                    Payments are considered made on the date they are initiated online. However, it can take up to 3 business days for the CRA to update your CRA account with the payment information.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-ios p-4">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-[#ff3b30] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-[15px] font-semibold text-black mb-1">Avoid penalties</h4>
                  <p className="text-[15px] text-[#8e8e93] m-0">
                    To avoid penalties and interest, make sure your payment is received by the CRA on or before the due date.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-ios p-4">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-[#ffc107] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-[15px] font-semibold text-black mb-1">Be careful</h4>
                  <p className="text-[15px] text-[#8e8e93] m-0">
                    Double-check that you have entered the account number correctly to avoid misapplied payments.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-ios p-4">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-[15px] font-semibold text-black mb-1">Business payments</h4>
                  <p className="text-[15px] text-[#8e8e93] m-0">
                    For businesses, look for specific options like "Federal – Corporation Tax Payments – TXINS" or "Federal – GST/HST Return – GST 34" when adding the payee.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-ios p-4">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-[15px] font-semibold text-black mb-1">Other options</h4>
                  <p className="text-[15px] text-[#8e8e93] m-0">
                    You can also pay directly through the CRA website using the "My Payment" service, which allows you to pay with a debit card or through a pre-authorized debit (PAD).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}