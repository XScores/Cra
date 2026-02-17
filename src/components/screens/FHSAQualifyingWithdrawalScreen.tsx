import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft } from 'lucide-react';

interface FHSAQualifyingWithdrawalScreenProps {
  onBack: () => void;
  onNavigateHome: () => void;
  onViewMail: () => void;
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

export function FHSAQualifyingWithdrawalScreen({ onBack, onNavigateHome, onViewMail, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onBecomeRepresentative, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments }: FHSAQualifyingWithdrawalScreenProps) {
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[1.1]">Making a qualifying<br />withdrawal from your FHSA</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Learn how to make tax-free withdrawals from your First Home Savings Account</p>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7]">
        {/* Introduction */}
        <div className="bg-white px-4 py-5 border-b border-[#e1e4e7]">
          <p className="text-[#333333] text-[15px] mb-4">
            A qualifying withdrawal from your FHSA allows you to use the funds tax-free to purchase your first home. To make a tax-free withdrawal, you must meet specific conditions.
          </p>
        </div>

        {/* Qualifying Conditions */}
        <div className="bg-white px-4 py-5 border-b border-[#e1e4e7]">
          <h2 className="text-[#26374a] font-bold mb-3">Qualifying conditions</h2>
          <p className="text-[#333333] text-[14px] mb-3">
            To make a qualifying withdrawal, you must:
          </p>
          <ul className="space-y-3 ml-5 text-[#333333] text-[14px] list-disc pl-0">
            <li className="pl-2">Be a first-time home buyer at the time of withdrawal</li>
            <li className="pl-2">Have a written agreement to buy or build a qualifying home</li>
            <li className="pl-2">Intend to occupy the home as your principal residence within one year</li>
            <li className="pl-2">Be a Canadian resident when you make the withdrawal</li>
            <li className="pl-2">Complete the withdrawal before October 1 of the year following the purchase year</li>
          </ul>
        </div>

        {/* First-Time Home Buyer Definition */}
        <div className="mb-4 p-4 bg-white border-l-4 border-[#26374a] mt-3 ml-[15px]">
          <h3 className="text-[#26374a] mb-2 font-bold">First-time home buyer definition</h3>
          <p className="text-[#333333] text-[14px] mb-3">
            You're considered a first-time home buyer if:
          </p>
          <ul className="space-y-2 ml-5 text-[#333333] text-[14px] list-disc pl-0">
            <li className="pl-2">You haven't owned a home that you lived in during the current calendar year or the previous four calendar years</li>
            <li className="pl-2">If you have a spouse or common-law partner, they also haven't lived in a home that either of you owned during the same period</li>
          </ul>
        </div>

        {/* Qualifying Home */}
        <div className="mb-4 p-4 bg-white border-l-4 border-[#26374a] ml-[15px]">
          <h3 className="text-[#26374a] mb-2 font-bold">What is a qualifying home?</h3>
          <p className="text-[#333333] text-[14px] mb-3">
            A qualifying home must be located in Canada and can include:
          </p>
          <ul className="space-y-2 ml-5 text-[#333333] text-[14px] list-disc pl-0">
            <li className="pl-2">Single-family homes</li>
            <li className="pl-2">Semi-detached houses</li>
            <li className="pl-2">Townhouses</li>
            <li className="pl-2">Condominiums</li>
            <li className="pl-2">Apartments in duplexes, triplexes, or fourplexes</li>
            <li className="pl-2">Mobile homes</li>
          </ul>
        </div>

        {/* How to Make a Withdrawal */}
        <div className="mb-4 p-4 bg-white border-l-4 border-[#26374a] ml-[15px]">
          <h3 className="text-[#26374a] mb-2 font-bold">How to make a qualifying withdrawal</h3>
          <p className="text-[#333333] text-[14px] mb-3">
            Follow these steps:
          </p>
          <div className="space-y-2 ml-4">
            <div className="flex items-start gap-2">
              <span className="text-[#af3c43] mt-1">1.</span>
              <p className="text-[#333333] text-[14px] m-0">Complete Form RC725, Request to Make a Qualifying Withdrawal from your FHSA</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#af3c43] mt-1">2.</span>
              <p className="text-[#333333] text-[14px] m-0">Submit the form to your FHSA issuer (bank or financial institution)</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#af3c43] mt-1">3.</span>
              <p className="text-[#333333] text-[14px] m-0">Your issuer will process the withdrawal and provide you with the funds</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#af3c43] mt-1">4.</span>
              <p className="text-[#333333] text-[14px] m-0">The withdrawal will not be included in your taxable income</p>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-white px-4 py-5 border-b border-[#e1e4e7]">
          <div className="bg-[#fef9e7] p-3 border-l-4 border-[#fcba19]">
            <p className="text-[#333333] text-[13px] m-0">
              <strong className="text-[#26374a]">Note:</strong> If you don't use your FHSA funds to buy a home, you must close the account by the end of the year you turn 71 or 15 years after opening it, whichever comes first. Any remaining funds can be transferred to an RRSP or RRIF on a tax-deferred basis, or withdrawn as taxable income.
            </p>
          </div>
        </div>

        {/* Non-Qualifying Withdrawals */}
        <div className="bg-white px-4 py-5 border-b border-[#e1e4e7] mb-20">
          <h2 className="text-[#26374a] font-bold mb-3">Non-qualifying withdrawals</h2>
          <p className="text-[#333333] text-[14px] mb-3">
            If you make a withdrawal that doesn't meet the qualifying conditions:
          </p>
          <ul className="space-y-3 ml-5 text-[#333333] text-[14px] list-disc pl-0">
            <li className="pl-2">The amount will be included in your taxable income for the year</li>
            <li className="pl-2">Your FHSA issuer will withhold tax on the withdrawal</li>
            <li className="pl-2">You won't regain the contribution room</li>
          </ul>
        </div>
      </div>
    </div>
  );
}