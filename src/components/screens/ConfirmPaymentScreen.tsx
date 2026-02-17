import { HeaderMaster } from '../HeaderMaster';
import { Card } from '../ui/card';
import { ChevronLeft, Check, Building2, CreditCard, X, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface ConfirmPaymentScreenProps {
  onBack: () => void;
  onConfirmPayment: () => void;
  paymentData: {
    amount: string;
    account: 'checking' | 'savings';
    date: string;
    paymentMethod?: string;
  };
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
  onMakePayment?: () => void;
}

const formatPaymentDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-CA', { month: 'long', day: 'numeric', year: 'numeric' });
};

export function ConfirmPaymentScreen({ onBack, onConfirmPayment, paymentData, onViewMail, onNavigateHome, onLogoClick, hasUnreadMail, onFileTaxes, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onLifelongLearningPlan, onCustomize, onUncashedCheques, onBecomeRepresentative, onBecomeRepresentativeAsRep, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments, onMakePayment }: ConfirmPaymentScreenProps) {
  const [confirmChecked, setConfirmChecked] = useState(false);

  // Get bank name and account details based on payment method
  const getBankDetails = () => {
    if (paymentData.paymentMethod === 'td-chequing') {
      return { bankName: 'Toronto Dominion Bank', accountType: 'Chequing', accountNumber: '8863' };
    }
    // Default to Royal Bank
    const accountDetails = paymentData.account === 'checking' 
      ? { accountType: 'Chequing', accountNumber: '1234' }
      : { accountType: 'Savings', accountNumber: '5678' };
    return { bankName: 'Royal Bank', ...accountDetails };
  };

  const bankDetails = getBankDetails();

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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Confirm your payment</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Review your payment details</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7]">
        <div className="px-4 pb-4">
          {/* Important Notice */}
          <div className="mb-4 p-4 bg-[#fff9e6] border-l-4 border-[#ffcc00] rounded-[10px]">
            <div className="flex gap-3">
              <AlertCircle className="h-5 w-5 text-[#cc9900] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-[#cc9900] mb-1 text-[17px]">Important</h3>
                <p className="text-black text-[15px] m-0">
                  Please review all details carefully. Once confirmed, this payment cannot be cancelled or modified.
                </p>
              </div>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="mb-4 p-4 card-ios border-l-4 border-[#ff3b30]">
            <div className="mb-4">
              <h3 className="text-black mb-1 text-[17px]">Payment summary</h3>
              <p className="text-black opacity-80 text-[15px] m-0">Amount to be paid</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-[#c6c6c8]">
                <span className="text-black opacity-80 text-[17px]">Payment type:</span>
                <span className="text-black text-[17px]">Balance owing</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#c6c6c8]">
                <span className="text-black opacity-80 text-[17px]">Tax year:</span>
                <span className="text-black text-[17px]">2024</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#c6c6c8]">
                <span className="text-black opacity-80 text-[17px]">Payment withdrawal date:</span>
                <span className="text-black text-[17px]">{formatPaymentDate(paymentData.date)}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-black text-[17px]">Total amount:</span>
                <span className="text-[#ff3b30] text-[22px] font-bold">
                  <span className="text-[16px] font-bold">$</span>{paymentData.amount}
                </span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-4 p-4 card-ios border-l-4 border-[#ff3b30]">
            <h3 className="text-black mb-4 text-[17px]">Payment method</h3>

            <div className="p-3 bg-[#f2f2f7] border border-[#c6c6c8] rounded-[8px]">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 bg-[#007AFF] rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="text-black text-[17px]">{bankDetails.bankName}</div>
                      <div className="text-black opacity-80 text-[15px]">{bankDetails.accountType}</div>
                    </div>
                    <div className="h-6 w-6 bg-[#007AFF] rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[15px]">
                    <span className="text-black opacity-80">Account ending in {bankDetails.accountNumber}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Processing Information */}
          <div className="mb-4 p-4 card-ios">
            <h3 className="text-black mb-3 text-[17px]">Processing information</h3>
            <ul className="space-y-2 ml-5 text-black text-[15px] list-disc pl-0">
              <li className="pl-2">Funds will be withdrawn from your account on the date indicated above</li>
              <li className="pl-2">Payment will be posted to your CRA account within 1-2 business days</li>
              <li className="pl-2">When the payment is processed, you will receive a confirmation in your My CRA Mail</li>
            </ul>
          </div>

          {/* Confirmation Checkbox */}
          <div className="mb-4 p-4 card-ios">
            <p className="text-black text-[15px] mb-3 m-0">
              I confirm that I have reviewed all payment details and authorize the Canada Revenue Agency to withdraw from my {bankDetails.accountType} ending in {bankDetails.accountNumber} the amount of <span className="text-[#ff3b30] font-bold">${paymentData.amount}</span>.
            </p>
            <div className="flex items-center gap-3">
              <Checkbox 
                id="confirm" 
                checked={confirmChecked}
                onCheckedChange={(checked) => setConfirmChecked(checked as boolean)}
                className="border-2 border-[#007AFF]"
              />
              <Label 
                htmlFor="confirm" 
                className="text-[#007AFF] text-[17px] cursor-pointer"
              >
                I confirm
              </Label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={onBack}
              className="flex-1 bg-white border border-[#007AFF] py-3 rounded-[10px] transition-colors hover:bg-[#f2f2f7] active:bg-[#e5e5ea] h-12 flex items-center justify-center text-[#007AFF]"
            >
              <span className="text-[17px]">Cancel</span>
            </button>

            <button 
              onClick={onConfirmPayment}
              disabled={!confirmChecked}
              className={`flex-1 py-3 rounded-[10px] transition-opacity h-12 flex items-center justify-center text-white border-0 ${
                confirmChecked 
                  ? 'bg-[#007AFF] hover:opacity-90 active:opacity-80' 
                  : 'bg-[#c6c6c8] cursor-not-allowed'
              }`}
            >
              <span className="text-[17px]">Submit payment</span>
            </button>
          </div>

          {/* Help Text */}
          <div className="mt-6 p-4 card-ios">
            <h4 className="text-black mb-2 text-[17px]">Need help?</h4>
            <p className="text-black text-[15px] m-0 mb-3">
              If you're having trouble completing your payment, contact CRA support.
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