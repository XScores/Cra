import { HeaderMaster } from '../HeaderMaster';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Share2, ChevronLeft, ChevronDown, Check, Save, Printer, Mail } from 'lucide-react';
import craLogo from 'figma:asset/fec27de527fdcac8633bffc5456b4f486d9a260e.png';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface ProofOfIncomeScreenProps {
  onBack: () => void;
  onNavigateHome: () => void;
  onLogoClick: () => void;
  hasUnreadMail?: boolean;
  onFileTaxes?: () => void;
  onViewAllBenefits?: () => void;
  onMakePayment?: () => void;
  onViewMail?: () => void;
  onRegisteredPlans?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onSearchClick?: () => void;
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
  onRemittanceVoucher?: () => void;
  onBecomeRepresentative?: () => void;
  onBecomeRepresentativeAsRep?: () => void;
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
  onUserFeedback?: () => void;
}

export function ProofOfIncomeScreen({ 
  onBack, 
  onNavigateHome, 
  onLogoClick,
  hasUnreadMail = false,
  onFileTaxes,
  onViewAllBenefits,
  onMakePayment,
  onViewMail,
  onRegisteredPlans,
  onTaxSlips,
  onProofOfIncome,
  onHelp,
  onSignOut,
  onSearchClick,
  // Search navigation handlers
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
  onRemittanceVoucher,
  onBecomeRepresentative,
  onBecomeRepresentativeAsRep,
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
  onSubmitDocuments,
  onUserFeedback
}: ProofOfIncomeScreenProps) {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [emailSent, setEmailSent] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleEmailStatement = () => {
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 3000);
  };

  const handleSaveToDocuments = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  // Sample income data
  const incomeData = {
    '2024': {
      employmentIncome: '65,234.50',
      investmentIncome: '1,842.30',
      pensionIncome: '0.00',
      otherIncome: '0.00',
      totalIncome: '67,076.80',
    },
    '2023': {
      employmentIncome: '62,150.00',
      investmentIncome: '1,523.75',
      pensionIncome: '0.00',
      otherIncome: '0.00',
      totalIncome: '63,673.75',
    },
    '2022': {
      employmentIncome: '58,900.00',
      investmentIncome: '982.45',
      pensionIncome: '0.00',
      otherIncome: '3,240.00',
      totalIncome: '63,122.45',
    },
  };

  const currentData = incomeData[selectedYear as keyof typeof incomeData];

  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      <HeaderMaster 
        title="My Account"
        largeTitle={true}
        showSearch={true}
        showMenu={true}
        onNavigateHome={onNavigateHome}
        onLogoClick={onNavigateHome}
        onSearchClick={onSearchClick}
        hasUnreadMail={hasUnreadMail}
        onFileTaxes={onFileTaxes}
        onViewAllBenefits={onViewAllBenefits}
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
        onRemittanceVoucher={onRemittanceVoucher}
        onBecomeRepresentative={onBecomeRepresentative}
        onBecomeRepresentativeAsRep={onBecomeRepresentativeAsRep}
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
        onUserFeedback={onUserFeedback}
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[34px]">Proof of income statement</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Generate an official proof of income statement for your records</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Info Note */}
        <div className="px-4 mb-4">
          <div className="bg-[#fff9e6] rounded-[10px] p-4 border-l-4 border-[#ffcc00]">
            <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
              <strong className="text-black">Note:</strong> This statement is based on information the CRA has received from employers, financial institutions, and other sources. It may not include all sources of income.
            </p>
          </div>
        </div>

        {/* Year Selection */}
        <div className="px-4 mb-4">
          <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Select tax year</h2>
          <div className="bg-white rounded-[10px] p-4">
            <div className="flex gap-3">
              {['2024', '2023', '2022'].map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`flex-1 py-3 rounded-[10px] transition-all border-0 cursor-pointer text-center ${
                    selectedYear === year
                      ? 'bg-[#007AFF] text-white'
                      : 'bg-[#f2f2f7] text-black hover:opacity-70 active:opacity-50'
                  }`}
                >
                  <span className="text-[17px]">{year}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Statement Preview */}
        <div className="px-4 mb-4">
          <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Statement preview</h2>
          <div className="bg-white rounded-[10px] p-5">
            {/* CRA Header */}
            <div className="border-b-2 border-[#ff3b30] pb-4 mb-5">
              <img src={craLogo} alt="Canada Revenue Agency" className="h-8 mb-2" />
              <h3 className="text-black text-[20px] m-0">Proof of Income Statement</h3>
              <p className="text-[#3c3c43] text-[15px] m-0 mt-1">Tax Year {selectedYear}</p>
            </div>

            {/* Taxpayer Information */}
            <div className="mb-5">
              <h4 className="text-black text-[17px] mb-3 m-0">Taxpayer Information</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-[#c6c6c8]">
                  <span className="text-[#3c3c43] text-[17px]">Name</span>
                  <span className="text-black text-[17px] text-right">Jonathan Rath</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#c6c6c8]">
                  <span className="text-[#3c3c43] text-[17px]">Social Insurance Number</span>
                  <span className="text-black text-[17px] text-right">*** *** 456</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-[#3c3c43] text-[17px]">Statement Date</span>
                  <span className="text-black text-[17px] text-right">{new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
            </div>

            {/* Income Summary */}
            <div className="mb-5">
              <h4 className="text-black text-[17px] mb-3 m-0">Income Summary</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-[#c6c6c8]">
                  <span className="text-[#3c3c43] text-[17px]">Employment income (T4)</span>
                  <span className="text-black text-[17px] text-right">${currentData.employmentIncome}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#c6c6c8]">
                  <span className="text-[#3c3c43] text-[17px]">Investment income (T5)</span>
                  <span className="text-black text-[17px] text-right">${currentData.investmentIncome}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#c6c6c8]">
                  <span className="text-[#3c3c43] text-[17px]">Pension income (T4A)</span>
                  <span className="text-black text-[17px] text-right">${currentData.pensionIncome}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#c6c6c8]">
                  <span className="text-[#3c3c43] text-[17px]">Other income</span>
                  <span className="text-black text-[17px] text-right">${currentData.otherIncome}</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-[#f2f2f7] -mx-5 px-5 mt-3">
                  <span className="text-black text-[17px]">Total reported income</span>
                  <span className="text-black text-[17px] text-right">${currentData.totalIncome}</span>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-[#f2f2f7] rounded-[10px] p-4">
              <p className="text-[#3c3c43] text-[13px] m-0 leading-snug">
                This statement reflects income information reported to the Canada Revenue Agency for the {selectedYear} tax year. 
                This document is generated from official CRA records and can be used as verification of income for financial, 
                rental, or other official purposes.
              </p>
            </div>

            {/* Official Statement Footer */}
            <div className="mt-5 pt-4 border-t border-[#c6c6c8]">
              <p className="text-[#8e8e93] text-[11px] m-0 text-center">
                Document ID: CRA-POI-{selectedYear}-{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
              <p className="text-[#8e8e93] text-[11px] m-0 text-center mt-1">
                Generated: {new Date().toLocaleDateString('en-CA')} at {new Date().toLocaleTimeString('en-CA', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-4 mb-4">
          <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Actions</h2>
          <div className="bg-white rounded-[10px] overflow-hidden divide-y divide-[#c6c6c8]">
            {/* Email Button */}
            <button
              onClick={handleEmailStatement}
              disabled={emailSent}
              className="w-full px-4 py-4 flex items-center gap-3 bg-white hover:opacity-70 active:opacity-50 transition-opacity border-0 cursor-pointer disabled:opacity-50"
            >
              {emailSent ? (
                <>
                  <div className="bg-[#28a745] bg-opacity-10 rounded-full p-2">
                    <Check className="h-5 w-5 text-[#28a745]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[#28a745] text-[17px]">Statement emailed successfully!</span>
                </>
              ) : (
                <>
                  <div className="bg-[#007AFF] rounded-full p-2">
                    <Mail className="h-5 w-5 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-black text-[17px]">Email statement</span>
                </>
              )}
            </button>

            {/* Save to Documents Button */}
            <button
              onClick={handleSaveToDocuments}
              disabled={isSaved}
              className="flex items-center justify-center gap-2 w-full bg-white text-black border border-[#c7c7cc] px-4 py-3.5 rounded-[10px] hover:bg-[#f2f2f7] active:bg-[#e5e5e5] transition-colors cursor-pointer"
            >
              {isSaved ? (
                <>
                  <div className="bg-[#28a745] bg-opacity-10 rounded-full p-2">
                    <Check className="h-5 w-5 text-[#28a745]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[#28a745] text-[17px]">Saved to Tax slips and documents!</span>
                </>
              ) : (
                <>
                  <div className="bg-[#007AFF] rounded-full p-2">
                    <Save className="h-5 w-5 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-black text-[17px]">Save to Tax slips and documents</span>
                </>
              )}
            </button>

            {/* Download PDF Button */}
            <button
              className="w-full px-4 py-4 flex items-center gap-3 bg-white hover:opacity-70 active:opacity-50 transition-opacity border-0 cursor-pointer"
            >
              <div className="bg-[#007AFF] rounded-full p-2">
                <Download className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-black text-[17px]">Download PDF</span>
            </button>

            {/* Print Button */}
            <button
              className="w-full px-4 py-4 flex items-center gap-3 bg-white hover:opacity-70 active:opacity-50 transition-opacity border-0 cursor-pointer"
            >
              <div className="bg-[#007AFF] rounded-full p-2">
                <Printer className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-black text-[17px]">Print statement</span>
            </button>
          </div>
        </div>

        {/* Help Information */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">About this statement</h2>
            <div className="space-y-3">
              <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
                <strong className="text-black">Official document:</strong> This proof of income statement is an official CRA document that can be used for verification purposes.
              </p>
              <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
                <strong className="text-black">Updates:</strong> Income information is updated when the CRA receives tax slips from employers and financial institutions.
              </p>
              <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
                <strong className="text-black">Questions?</strong> If you have questions about the income shown on this statement, contact the CRA at 1-800-959-8281.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}