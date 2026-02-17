import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, CheckCircle, Clock, AlertTriangle, CreditCard } from 'lucide-react';

interface FAQRefundScreenProps {
  onBack: () => void;
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

export function FAQRefundScreen({ onBack, onViewMail, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onBecomeRepresentative, onBecomeRepresentativeAsRep, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments }: FAQRefundScreenProps) {
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[1.2]">When will I receive my&nbsp;refund?</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Learn about tax refund processing times and how to receive your refund faster</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        <div className="px-4 py-2">
          <div className="mb-4">
            <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Processing times</h2>
            
            <div className="bg-white rounded-[10px] mb-3 p-4">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="h-6 w-6 text-[#28a745] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-black text-[20px] m-0 mb-2">Online filing (NETFILE)</h3>
                  <p className="text-[#3c3c43] text-[17px] m-0">
                    If you file online and choose direct deposit, you can expect your refund within <span className="text-black">2 weeks</span> of the CRA receiving your return.
                  </p>
                </div>
              </div>
              <div className="bg-[#e3f2fd] rounded-[10px] border-l-4 border-[#007AFF] p-3">
                <p className="text-[#3c3c43] text-[15px] m-0">
                  <strong className="text-black">Fastest option:</strong> File online with NETFILE and set up direct deposit for the quickest refund.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[10px] p-4">
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-[#ffcc00] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-black text-[20px] m-0 mb-2">Paper filing</h3>
                  <p className="text-[#3c3c43] text-[17px] m-0">
                    If you file a paper return, it can take up to <span className="text-black">8 weeks</span> to receive your refund.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Check your refund status</h2>
            <div className="bg-white rounded-[10px] p-4">
              <p className="text-[#3c3c43] text-[17px] m-0 mb-3">
                You can check the status of your refund in several ways:
              </p>
              <ul className="list-disc m-0 pl-5 space-y-3">
                <li className="text-[#3c3c43] text-[17px]">
                  <span className="text-black">CRA My Account</span>
                  <p className="text-[#3c3c43] text-[15px] m-0 mt-1">View your refund status in real-time through this app or online</p>
                </li>
                <li className="text-[#3c3c43] text-[17px]">
                  <span className="text-black">MyCRA mobile app</span>
                  <p className="text-[#3c3c43] text-[15px] m-0 mt-1">Check your refund status on the go</p>
                </li>
                <li className="text-[#3c3c43] text-[17px]">
                  <span className="text-black">Automated phone service</span>
                  <p className="text-[#3c3c43] text-[15px] m-0 mt-1">Call 1-800-959-1956 for automated refund information</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Get your refund faster with direct deposit</h2>
            <div className="bg-white rounded-[10px] p-4">
              <div className="flex items-start gap-3">
                <CreditCard className="h-6 w-6 text-[#007AFF] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-[#3c3c43] text-[17px] m-0 mb-3">
                    Direct deposit is the fastest, most secure, and most convenient way to receive your refund. Your refund is automatically deposited into your bank account.
                  </p>
                  <p className="text-[#3c3c43] text-[17px] m-0">
                    You can set up or update your direct deposit information in your profile settings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Why might my refund be delayed?</h2>
            <div className="bg-white rounded-[10px] p-4">
              <p className="text-[#3c3c43] text-[17px] m-0 mb-3">
                Your refund may be delayed if:
              </p>
              <ul className="list-disc m-0 pl-5 space-y-2">
                <li className="text-[#3c3c43] text-[17px]">The CRA needs to verify information on your return</li>
                <li className="text-[#3c3c43] text-[17px]">You have an outstanding balance or debt with the CRA</li>
                <li className="text-[#3c3c43] text-[17px]">Your return is selected for a more detailed review</li>
                <li className="text-[#3c3c43] text-[17px]">You filed during peak filing season (March to May)</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#fff9e6] rounded-[10px] border-l-4 border-[#ffcc00] p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-[#ffcc00] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[#3c3c43] text-[15px] m-0 mb-2">
                  <strong className="text-black">Note:</strong> The CRA may apply your refund to pay outstanding balances or debts you owe, such as:
                </p>
                <ul className="list-disc m-0 pl-5 space-y-1">
                  <li className="text-[#3c3c43] text-[15px]">Previous year tax balances</li>
                  <li className="text-[#3c3c43] text-[15px]">Canada Student Loan payments</li>
                  <li className="text-[#3c3c43] text-[15px]">Court-ordered support payments</li>
                  <li className="text-[#3c3c43] text-[15px]">Other government program debts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}