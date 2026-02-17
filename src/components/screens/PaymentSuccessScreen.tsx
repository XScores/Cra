import { HeaderMaster } from '../HeaderMaster';
import { Card } from '../ui/card';
import { CheckCircle, Home, ChevronLeft, Download, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface PaymentSuccessScreenProps {
  paymentAmount: string;
  selectedAccount: 'checking' | 'savings';
  paymentDate: string;
  onGoHome: () => void;
  onDownloadReceipt: () => void;
  onViewMail?: () => void;
  onNavigateHome?: () => void;
  onFileTaxes?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  hasUnreadMail?: boolean;
  paymentMethod?: string;
  // Search navigation handlers
  onViewRefundDetails?: () => void;
  onViewNoticeOfAssessment?: () => void;
  onGSTHSTCredit?: () => void;
  onAccountDetails?: () => void;
  onProfile?: () => void;
  onViewTaxReturns?: () => void;
  onHomeBuyersPlan?: () => void;
  onFHSAEligibility?: () => void;
  onLifelongLearningPlan?: () => void;
  onCustomize?: () => void;
  onUncashedCheques?: () => void;
  onBecomeRepresentative?: () => void;
  onBecomeRepresentativeAsRep?: () => void;
  onRemittanceVoucher?: () => void;
}

export function PaymentSuccessScreen({ 
  paymentAmount,
  selectedAccount,
  paymentDate,
  onGoHome,
  onDownloadReceipt,
  onViewMail,
  onNavigateHome,
  onFileTaxes,
  onBenefitsAndCredits,
  onRegisteredPlans,
  onHelp,
  onSignOut,
  onTaxSlips,
  onProofOfIncome,
  hasUnreadMail,
  onViewRefundDetails,
  onViewNoticeOfAssessment,
  onGSTHSTCredit,
  onAccountDetails,
  onProfile,
  onViewTaxReturns,
  onHomeBuyersPlan,
  onFHSAEligibility,
  onLifelongLearningPlan,
  onCustomize,
  onUncashedCheques,
  onBecomeRepresentative,
  onBecomeRepresentativeAsRep,
  onRemittanceVoucher,
  paymentMethod
}: PaymentSuccessScreenProps) {
  const transactionId = `TR-${Date.now().toString().slice(-8)}`;

  // Get bank name and account details based on payment method
  const getBankDetails = () => {
    if (paymentMethod === 'td-chequing') {
      return { bankName: 'Toronto Dominion Bank', accountType: 'Chequing', accountNumber: '****8863' };
    }
    // Default to Royal Bank
    const accountDetails = selectedAccount === 'checking' 
      ? { accountType: 'Chequing', accountNumber: '****1234' }
      : { accountType: 'Savings', accountNumber: '****5678' };
    return { bankName: 'Royal Bank', ...accountDetails };
  };

  const bankDetails = getBankDetails();

  // Helper function to format payment date
  const formatPaymentDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      {/* Header with integrated menu */}
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
        onMakePayment={() => {}}
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
      />

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-center gap-3 mb-1">
          <button
            onClick={onNavigateHome}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Payment submitted</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">For 2024 taxes</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7]">
        <div className="px-4 pb-4">
          {/* Success Banner */}
          <div className="mb-4 p-6 card-ios border-l-4 border-[#28a745]">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 bg-[#28a745] rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-[#28a745] font-semibold mb-2 m-0 text-[20px]">Payment successful</h2>
                <p className="text-black text-[15px] m-0">
                  Your payment of <span className="text-[#28a745] font-semibold">${paymentAmount}</span> has been submitted to the Canada Revenue Agency.
                </p>
              </div>
            </div>
          </div>

          {/* Confirmation Details */}
          <div className="mb-4 p-4 card-ios border-l-4 border-[#007AFF]">
            <div className="mb-4">
              <h3 className="text-black mb-1 text-[17px]">Confirmation details</h3>
              <p className="text-black opacity-80 text-[15px] m-0">The details of this transaction will be sent to your CRA mailbox</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-start pb-3 border-b border-[#c6c6c8]">
                <span className="text-black opacity-80 text-[17px]">Confirmation number:</span>
                <div className="text-right">
                  <div className="text-black text-[17px]">{transactionId}</div>
                </div>
              </div>
              <div className="flex justify-between items-start pb-3 border-b border-[#c6c6c8]">
                <span className="text-black opacity-80 text-[17px]">Payment amount:</span>
                <div className="text-right">
                  <div className="text-[#28a745] font-semibold text-[17px]">${paymentAmount}</div>
                </div>
              </div>
              <div className="flex justify-between items-start pb-3 border-b border-[#c6c6c8]">
                <span className="text-black opacity-80 text-[17px]">Payment withdrawal date:</span>
                <div className="text-right">
                  <div className="text-black text-[17px]">{formatPaymentDate(paymentDate)}</div>
                </div>
              </div>
              <div className="flex justify-between items-start pb-3 border-b border-[#c6c6c8]">
                <span className="text-black opacity-80 text-[17px]">Payment method:</span>
                <div className="text-right">
                  <div className="text-black text-[17px]">{bankDetails.bankName}</div>
                  <div className="text-black opacity-80 text-[15px]">{bankDetails.accountType} - {bankDetails.accountNumber}</div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-black opacity-80 text-[17px]">Payment for:</span>
                <div className="text-right">
                  <div className="text-black text-[17px]">2024 Tax balance</div>
                </div>
              </div>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="mb-4 p-4 card-ios">
            <h3 className="text-black mb-3 text-[17px]">What happens next</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-[15px]">
                  1
                </div>
                <div className="flex-1">
                  <p className="text-black text-[15px] m-0">
                    Your payment will be processed<br />within 1-2 business days
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-[15px]">
                  2
                </div>
                <div className="flex-1">
                  <p className="text-black text-[15px] m-0">
                    You will receive a confirmation email in your CRA Mail account.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-[15px]">
                  3
                </div>
                <div className="flex-1">
                  <p className="text-black text-[15px] m-0">
                    Your account balance will be updated once the payment is posted
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-[15px]">
                  4
                </div>
                <div className="flex-1">
                  <p className="text-black text-[15px] m-0">
                    A payment receipt will be available in your My CRA Mail area
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Receipt Notice */}
          <div className="mb-4 p-4 bg-[#fff9e6] border-l-4 border-[#ffcc00] rounded-[10px]">
            <div className="flex gap-3">
              <FileText className="h-5 w-5 text-[#cc9900] flex-shrink-0" />
              <div>
                <h4 className="text-[#cc9900] mb-1 m-0 text-[17px]">Payment receipt</h4>
                <p className="text-black text-[15px] m-0">
                  A detailed payment receipt will be available in your My CRA Mail area within 24 hours. You can download or print it for your records.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="p-4 card-ios">
            <h4 className="text-black mb-2 text-[17px]">Questions about your payment?</h4>
            <p className="text-black text-[15px] m-0 mb-3">
              If you have any questions or concerns about your payment, please contact CRA support.
            </p>
            <button className="text-[#007AFF] text-[17px] bg-transparent border-0 p-0 transition-opacity hover:opacity-70 active:opacity-50">
              Contact CRA support →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}