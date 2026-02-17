import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, CreditCard, Building2, Smartphone, AlertTriangle, Calendar, Globe } from 'lucide-react';

interface FAQMakePaymentScreenProps {
  onBack: () => void;
  onViewMail?: () => void;
  onNavigateHome?: () => void;
  onMakePayment?: () => void;
  onFileTaxes?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  hasUnreadMail?: boolean;
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

export function FAQMakePaymentScreen({ onBack, onMakePayment, onViewMail, onNavigateHome, onFileTaxes, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onBecomeRepresentative, onBecomeRepresentativeAsRep, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments }: FAQMakePaymentScreenProps) {
  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      <HeaderMaster 
        title="My Account"
        largeTitle={true}
        showSearch={true}
        showMenu={true}
        onNavigateHome={onNavigateHome}
        onLogoClick={onNavigateHome}
        onSearchClick={onNavigateHome}
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
        <div className="flex items-start gap-3 mb-1">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0 mt-[3px]"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[1.2]">How do I make a payment to the CRA?</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Learn about payment methods and how to pay your balance owing</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        <div className="px-4 py-2">
          <div className="bg-white rounded-[10px] p-4 mb-4">
            <p className="text-[#3c3c43] text-[17px] m-0">
              There are several convenient ways to make a payment to the CRA. Choose the option that works best for you.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Payment methods</h2>
            
            <div className="bg-white rounded-[10px] mb-3 p-4">
              <div className="flex items-start gap-3 mb-3">
                <Smartphone className="h-6 w-6 text-[#007AFF] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-black text-[20px] m-0 mb-2">CRA My Account (Mobile or Online)</h3>
                  <p className="text-[#3c3c43] text-[17px] m-0 mb-3">
                    Make a payment directly from your bank account using pre-authorized debit. Fast, secure, and convenient.
                  </p>
                  <button
                    onClick={onMakePayment}
                    className="w-full bg-[#007AFF] hover:opacity-90 active:opacity-80 text-white px-4 py-3 rounded-[10px] transition-opacity border-0 flex items-center justify-center"
                  >
                    <span className="text-[17px]">Make a payment</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[10px] mb-3 p-4">
              <div className="flex items-start gap-3">
                <Building2 className="h-6 w-6 text-[#007AFF] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-black text-[20px] m-0 mb-2">Online banking</h3>
                  <p className="text-[#3c3c43] text-[17px] m-0 mb-2">
                    Use your bank's online or mobile banking service to make a payment to the CRA.
                  </p>
                  <div className="bg-[#f2f2f7] rounded-[10px] p-3 mt-2">
                    <p className="text-black text-[15px] m-0 mb-2">How to pay:</p>
                    <ol className="list-decimal m-0 pl-4 space-y-1">
                      <li className="text-[#3c3c43] text-[15px]">Sign in to your online banking</li>
                      <li className="text-[#3c3c43] text-[15px]">Add CRA as a payee (if not already added)</li>
                      <li className="text-[#3c3c43] text-[15px]">Enter your 9-digit business number or SIN</li>
                      <li className="text-[#3c3c43] text-[15px]">Enter the payment amount</li>
                      <li className="text-[#3c3c43] text-[15px]">Select the payment date</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[10px] mb-3 p-4">
              <div className="flex items-start gap-3">
                <CreditCard className="h-6 w-6 text-[#007AFF] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-black text-[20px] m-0 mb-2">Debit or credit card</h3>
                  <p className="text-[#3c3c43] text-[17px] m-0 mb-2">
                    Pay using a Visa Debit, Debit Mastercard, or credit card through a third-party service provider.
                  </p>
                  <div className="bg-[#fff9e6] rounded-[10px] border-l-4 border-[#ffcc00] p-3">
                    <p className="text-[#3c3c43] text-[15px] m-0">
                      <strong className="text-black">Note:</strong> Service fees apply when paying by credit card (approximately 1.5% to 2.5% of the payment amount).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[10px] mb-3 p-4">
              <div className="flex items-start gap-3">
                <Building2 className="h-6 w-6 text-[#007AFF] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-black text-[20px] m-0 mb-2">In person at your bank</h3>
                  <p className="text-[#3c3c43] text-[17px] m-0">
                    Visit your bank or credit union in person with your remittance voucher or account information to make a payment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[10px] p-4">
              <div className="flex items-start gap-3">
                <Globe className="h-6 w-6 text-[#007AFF] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-black text-[20px] m-0 mb-2">Wire transfer or cheque</h3>
                  <p className="text-[#3c3c43] text-[17px] m-0">
                    For large payments or international transfers, you can send a wire transfer or mail a cheque to your tax centre. Allow extra processing time for these methods.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">When to make your payment</h2>
            <div className="bg-white rounded-[10px] p-4">
              <div className="flex items-start gap-3 mb-3">
                <Calendar className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="mb-3">
                    <div className="flex justify-between mb-2">
                      <span className="text-[#3c3c43] text-[17px]">Balance owing deadline:</span>
                      <span className="text-black text-[17px]">April 30, 2026</span>
                    </div>
                    <p className="text-[#3c3c43] text-[15px] m-0">
                      Payment must be received by this date to avoid interest charges, regardless of when you file your return.
                    </p>
                  </div>
                  <div className="bg-[#e3f2fd] rounded-[10px] border-l-4 border-[#007AFF] p-3">
                    <p className="text-[#3c3c43] text-[15px] m-0">
                      <strong className="text-black">Tip:</strong> If you can't pay the full amount by the deadline, pay as much as you can to reduce interest charges. You can also set up a payment arrangement with the CRA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Need help paying?</h2>
            <div className="bg-white rounded-[10px] p-4">
              <p className="text-[#3c3c43] text-[17px] m-0 mb-3">
                If you're unable to pay your full balance by the deadline, you may be able to arrange a payment plan with the CRA.
              </p>
              <ul className="list-none m-0 p-0 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] flex-shrink-0 mt-1">•</span>
                  <span className="text-[#3c3c43] text-[17px]">Call the CRA at 1-888-863-8662 to discuss payment options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] flex-shrink-0 mt-1">•</span>
                  <span className="text-[#3c3c43] text-[17px]">Set up a pre-authorized debit agreement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] flex-shrink-0 mt-1">•</span>
                  <span className="text-[#3c3c43] text-[17px]">Make partial payments to reduce interest charges</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">After you make a payment</h3>
            <p className="text-[#3c3c43] text-[17px] m-0 mb-2">
              Your payment will be applied to your account within:
            </p>
            <ul className="list-none m-0 p-0 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#007AFF] flex-shrink-0 mt-1">•</span>
                <span className="text-[#3c3c43] text-[17px]"><span className="text-black">1-2 business days</span> for online banking or My Account payments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#007AFF] flex-shrink-0 mt-1">•</span>
                <span className="text-[#3c3c43] text-[17px]"><span className="text-black">Up to 10 business days</span> for cheques or wire transfers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}