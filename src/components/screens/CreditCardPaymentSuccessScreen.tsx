import { ChevronLeft, CheckCircle, FileText, Home, CreditCard, Mail, Gift, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';

interface CreditCardPaymentSuccessScreenProps {
  paymentAmount: string;
  selectedPaymentMethod: 'visa' | 'mastercard';
  onReturnHome: () => void;
  onExitApp: () => void;
  onViewMail?: () => void;
  onNavigateHome?: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  hasUnreadMail?: boolean;
  onViewAllBenefits?: () => void;
  onViewRefundDetails?: () => void;
  onViewNoticeOfAssessment?: () => void;
  onGSTHSTCredit?: () => void;
  onAccountDetails?: () => void;
  onProfile?: () => void;
  onViewTaxReturns?: () => void;
}

export function CreditCardPaymentSuccessScreen({ 
  paymentAmount,
  selectedPaymentMethod,
  onReturnHome,
  onExitApp,
  onViewMail,
  onNavigateHome,
  onFileTaxes,
  onMakePayment,
  onBenefitsAndCredits,
  onRegisteredPlans,
  onHelp,
  onSignOut,
  onTaxSlips,
  onProofOfIncome,
  hasUnreadMail = false,
  onViewAllBenefits,
  onViewRefundDetails,
  onViewNoticeOfAssessment,
  onGSTHSTCredit,
  onAccountDetails,
  onProfile,
  onViewTaxReturns
}: CreditCardPaymentSuccessScreenProps) {
  const cardDetails = selectedPaymentMethod === 'visa' 
    ? { name: 'Visa', number: '8921', type: 'Visa' }
    : { name: 'Mastercard', number: '3456', type: 'Mastercard' };

  const confirmationNumber = `CRA${Date.now().toString().slice(-8)}`;
  
  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col relative">
      {/* Header - Sticky */}
      <div className="flex-shrink-0 sticky top-0 z-10 bg-white">
        <HeaderMaster 
          title="My Account"
          onNavigateHome={onNavigateHome}
          onLogoClick={onNavigateHome}
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

      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7]">
        {/* Page Title */}
        <div className="px-4 pt-2 pb-3 bg-[#f2f2f7]">
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight mb-1">Payment submitted</h1>
          <p className="text-black text-[15px] m-0 opacity-80">For 2024 taxes</p>
        </div>

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
                <h2 className="text-[#28a745] mb-2 m-0 text-[20px]">Payment successful</h2>
                <p className="text-black text-[15px] m-0">
                  Your payment of <span className="text-[#28a745]">${paymentAmount}</span> has been charged to your credit card and submitted to the Canada Revenue Agency.
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
                  <div className="text-black text-[17px]">{confirmationNumber}</div>
                </div>
              </div>
              <div className="flex justify-between items-start pb-3 border-b border-[#c6c6c8]">
                <span className="text-black opacity-80 text-[17px]">Payment amount:</span>
                <div className="text-right">
                  <div className="text-[#28a745] text-[17px]">${paymentAmount}</div>
                </div>
              </div>
              <div className="flex justify-between items-start pb-3 border-b border-[#c6c6c8]">
                <span className="text-black opacity-80 text-[17px]">Transaction date:</span>
                <div className="text-right">
                  <div className="text-black text-[17px]">{new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric' })}</div>
                </div>
              </div>
              <div className="flex justify-between items-start pb-3 border-b border-[#c6c6c8]">
                <span className="text-black opacity-80 text-[17px]">Payment method:</span>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-2 mb-1">
                    <CreditCard className="h-4 w-4 text-[#007AFF]" />
                    <div className="text-black text-[17px]">{cardDetails.type}</div>
                  </div>
                  <div className="text-black opacity-80 text-[15px]">Card ending in {cardDetails.number}</div>
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
                    Your credit card has been charged immediately for ${paymentAmount}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-[15px]">
                  2
                </div>
                <div className="flex-1">
                  <p className="text-black text-[15px] m-0">
                    The payment will be posted to your CRA account<br />within 1-2 business days
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-[15px]">
                  3
                </div>
                <div className="flex-1">
                  <p className="text-black text-[15px] m-0">
                    The charge will appear on your credit card statement as "CRA PAYMENT"
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-[15px]">
                  4
                </div>
                <div className="flex-1">
                  <p className="text-black text-[15px] m-0">
                    You will receive a confirmation email in your CRA Mail account.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-[15px]">
                  5
                </div>
                <div className="flex-1">
                  <p className="text-black text-[15px] m-0">
                    Your account balance will be updated once the payment is posted
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-[15px]">
                  6
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

          {/* Credit Card Notice */}
          <div className="mb-4 p-4 bg-[#fff9e6] border-l-4 border-[#ffcc00] rounded-[10px]">
            <p className="text-black text-[15px] m-0">
              <strong className="text-black">Note:</strong> Please keep your credit card statement for your tax records. The transaction will appear as "CRA PAYMENT" on your statement.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mb-4">
            <button 
              onClick={onReturnHome}
              className="w-full bg-[#007AFF] text-white py-3 rounded-[10px] transition-opacity hover:opacity-90 active:opacity-80 h-12 flex items-center justify-center gap-2 border-0"
            >
              <Home className="h-5 w-5" />
              <span className="text-[17px]">Return to home</span>
            </button>
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