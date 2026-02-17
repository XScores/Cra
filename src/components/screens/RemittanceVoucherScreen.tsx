import { ChevronLeft, Mail, Printer, Download } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface RemittanceVoucherScreenProps {
  onBack: () => void;
  onNavigateHome?: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onViewMail?: () => void;
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
}

export function RemittanceVoucherScreen({
  onBack,
  onNavigateHome,
  onFileTaxes,
  onMakePayment,
  onBenefitsAndCredits,
  onRegisteredPlans,
  onHelp,
  onSignOut,
  onTaxSlips,
  onProofOfIncome,
  onViewMail,
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
}: RemittanceVoucherScreenProps) {
  const [showToast, setShowToast] = useState(false);
  const [selectedVouchers, setSelectedVouchers] = useState({
    inns3: false,
    rc160: false,
    remit: false
  });

  const handleRequestVoucher = () => {
    // Show iOS-style toast
    setShowToast(true);
    
    // Auto-hide after 4 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  const toggleVoucher = (voucher: 'inns3' | 'rc160' | 'remit') => {
    setSelectedVouchers(prev => ({
      ...prev,
      [voucher]: !prev[voucher]
    }));
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
        onHelp={onHelp}
        onSignOut={onSignOut}
      />

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">
            Remittance voucher
          </h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-20">
        {/* What is a Remittance Voucher */}
        <div className="bg-white rounded-[10px] overflow-hidden mb-4">
          <div className="p-4 border-b border-[#E5E5EA]">
            <h2 className="text-[17px] text-black">
              What is a remittance voucher?
            </h2>
          </div>
          <div className="p-4">
            <p className="text-[15px] text-[#1D1D1F] leading-[20px] mb-3">
              A remittance voucher is a personalized form that helps the CRA identify your payment and apply it to your account correctly.
            </p>
            <p className="text-[15px] text-[#1D1D1F] leading-[20px]">
              You use this voucher when making payments by mail with a cheque or money order.
            </p>
          </div>
        </div>

        {/* Request Voucher Card - Merged with Types */}
        <div className="bg-white rounded-[10px] overflow-hidden mb-4">
          <div className="p-4 border-b border-[#E5E5EA]">
            <h2 className="text-[17px] text-black">
              Request a remittance voucher
            </h2>
          </div>
          <div className="p-4 border-b border-[#E5E5EA]">
            <p className="text-[15px] text-[#8E8E93] leading-[20px]">
              Your personalized remittance voucher will be mailed to your address on file within 10 business days.
            </p>
          </div>
          
          <div className="divide-y divide-[#E5E5EA]">
            {/* INNS3 */}
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div 
                  className="flex items-center justify-center w-5 h-5 border-2 border-[#8E8E93] rounded-[4px] cursor-pointer flex-shrink-0 mt-0.5"
                  onClick={() => toggleVoucher('inns3')}
                  style={{
                    backgroundColor: selectedVouchers.inns3 ? '#007AFF' : 'transparent',
                    borderColor: selectedVouchers.inns3 ? '#007AFF' : '#8E8E93'
                  }}
                >
                  {selectedVouchers.inns3 && (
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-[15px] text-black font-semibold mb-1">
                    Form INNS3
                  </h3>
                  <p className="text-[15px] text-[#8E8E93] leading-[20px]">
                    For individuals making instalment payments or paying personal income tax balances
                  </p>
                </div>
              </div>
            </div>

            {/* RC160 */}
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div 
                  className="flex items-center justify-center w-5 h-5 border-2 border-[#8E8E93] rounded-[4px] cursor-pointer flex-shrink-0 mt-0.5"
                  onClick={() => toggleVoucher('rc160')}
                  style={{
                    backgroundColor: selectedVouchers.rc160 ? '#007AFF' : 'transparent',
                    borderColor: selectedVouchers.rc160 ? '#007AFF' : '#8E8E93'
                  }}
                >
                  {selectedVouchers.rc160 && (
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-[15px] text-black font-semibold mb-1">
                    Form RC160
                  </h3>
                  <p className="text-[15px] text-[#8E8E93] leading-[20px]">
                    For corporations making tax payments
                  </p>
                </div>
              </div>
            </div>

            {/* REMIT */}
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div 
                  className="flex items-center justify-center w-5 h-5 border-2 border-[#8E8E93] rounded-[4px] cursor-pointer flex-shrink-0 mt-0.5"
                  onClick={() => toggleVoucher('remit')}
                  style={{
                    backgroundColor: selectedVouchers.remit ? '#007AFF' : 'transparent',
                    borderColor: selectedVouchers.remit ? '#007AFF' : '#8E8E93'
                  }}
                >
                  {selectedVouchers.remit && (
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-[15px] text-black font-semibold mb-1">
                    Form REMIT
                  </h3>
                  <p className="text-[15px] text-[#8E8E93] leading-[20px]">
                    For GST/HST, payroll deductions, and other business account payments
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <button
              onClick={handleRequestVoucher}
              className="w-full bg-[#007AFF] text-white rounded-[10px] px-4 py-3 flex items-center justify-center gap-2 hover:bg-[#0051D5] active:bg-[#004BB8] transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Request voucher by mail</span>
            </button>
          </div>
        </div>

        {/* How to Use */}
        <div className="bg-white rounded-[10px] overflow-hidden mb-4">
          <div className="p-4 border-b border-[#E5E5EA]">
            <h2 className="text-[17px] text-black">
              How to use your remittance voucher
            </h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#007AFF] text-white flex items-center justify-center flex-shrink-0 text-[13px] font-semibold">
                  1
                </div>
                <div className="flex-1">
                  <p className="text-[15px] text-[#1D1D1F] leading-[20px]">
                    Write a cheque or obtain a money order payable to the <strong>Receiver General for Canada</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#007AFF] text-white flex items-center justify-center flex-shrink-0 text-[13px] font-semibold">
                  2
                </div>
                <div className="flex-1">
                  <p className="text-[15px] text-[#1D1D1F] leading-[20px]">
                    Write your social insurance number (SIN) or business number on the back of the cheque
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#007AFF] text-white flex items-center justify-center flex-shrink-0 text-[13px] font-semibold">
                  3
                </div>
                <div className="flex-1">
                  <p className="text-[15px] text-[#1D1D1F] leading-[20px]">
                    Attach the remittance voucher to your cheque or money order
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#007AFF] text-white flex items-center justify-center flex-shrink-0 text-[13px] font-semibold">
                  4
                </div>
                <div className="flex-1">
                  <p className="text-[15px] text-[#1D1D1F] leading-[20px]">
                    Mail to the address shown on the voucher
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-[#FFF3CD] rounded-[10px] p-4 mb-4 border-l-4 border-[#FFC107]">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#856404] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div className="flex-1">
              <p className="text-[15px] text-[#856404] leading-[20px] font-semibold mb-1">
                Important
              </p>
              <p className="text-[15px] text-[#856404] leading-[20px]">
                Allow 10 business days for mailing plus additional time for Canada Post delivery. Payments sent by mail may take 2-3 weeks to be processed and reflected in your account.
              </p>
            </div>
          </div>
        </div>

        {/* Faster Payment Methods */}
        <div className="bg-[#007AFF]/5 rounded-[10px] p-4 mb-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#007AFF] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div className="flex-1">
              <p className="text-[15px] text-[#1D1D1F] leading-[20px] mb-2">
                <strong>Tip:</strong> For faster payment processing, consider using:
              </p>
              <ul className="space-y-1 ml-5">
                <li className="text-[15px] text-[#1D1D1F] leading-[20px] list-disc">
                  Online banking (instant)
                </li>
                <li className="text-[15px] text-[#1D1D1F] leading-[20px] list-disc">
                  Pre-authorized debit
                </li>
                <li className="text-[15px] text-[#1D1D1F] leading-[20px] list-disc">
                  CRA My Payment service
                </li>
              </ul>
              {onMakePayment && (
                <button
                  onClick={onMakePayment}
                  className="mt-3 text-[#007AFF] text-[15px] font-semibold hover:opacity-70 active:opacity-50 transition-opacity"
                >
                  View all payment options →
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-[10px] overflow-hidden mb-4">
          <div className="p-4 border-b border-[#E5E5EA]">
            <h2 className="text-[17px] text-black">
              Need help?
            </h2>
          </div>
          <div className="p-4">
            <p className="text-[15px] text-[#1D1D1F] leading-[20px] mb-3">
              If you have questions about remittance vouchers or need assistance:
            </p>
            <div className="space-y-2">
              <button className="w-full text-left text-[#007AFF] text-[15px] py-2 hover:opacity-70 active:opacity-50 transition-opacity">
                Call 1-800-959-8281
              </button>
              {onHelp && (
                <button
                  onClick={onHelp}
                  className="w-full text-left text-[#007AFF] text-[15px] py-2 hover:opacity-70 active:opacity-50 transition-opacity"
                >
                  Visit Help & Support →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* iOS-style Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-[#007AFF] text-white px-4 py-3 rounded-[10px] shadow-lg z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-[15px] leading-[20px]">
              Your remittance voucher request has been submitted. You will receive it by mail within 10 business days.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}