import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, Laptop, FileText, ChevronRight, Calendar, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface FAQFileTaxesScreenProps {
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
  onSearchClick?: () => void;
  onPersonalClick?: () => void;
  onBusinessClick?: () => void;
  onRepresentativeClick?: () => void;
  activeAccountType?: 'personal' | 'business' | 'representative';
  onViewAllBenefits?: () => void;
}

export function FAQFileTaxesScreen({ onBack, onViewMail, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, hasUnreadMail, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onBecomeRepresentative, onBecomeRepresentativeAsRep, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments, onSearchClick, onPersonalClick, onBusinessClick, onRepresentativeClick, activeAccountType, onViewAllBenefits }: FAQFileTaxesScreenProps) {
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
        onPersonalClick={onPersonalClick}
        onBusinessClick={onBusinessClick}
        onRepresentativeClick={onRepresentativeClick}
        activeAccountType={activeAccountType || 'personal'}
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">How do I file my taxes?</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Learn about the different ways to file your income tax return</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        <div className="px-4 py-2">
          <div className="bg-white rounded-[10px] p-4 mb-4">
            <p className="text-[#3c3c43] text-[17px] m-0">
              There are several ways to file your income tax and benefit return with the CRA. Choose the method that works best for you.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Filing methods</h2>
            
            <button onClick={onFileTaxes} className="bg-white rounded-[10px] mb-3 w-full text-left hover:opacity-70 active:opacity-50 transition-opacity border-0 p-4">
              <div className="flex items-start gap-3 mb-3">
                <Laptop className="h-6 w-6 text-[#007AFF] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-black text-[20px] m-0 mb-2">NETFILE (online filing)</h3>
                  <p className="text-[#3c3c43] text-[17px] m-0 mb-2">
                    The fastest and most popular way to file. Use certified tax software to prepare and electronically file your return.
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-[#c6c6c8] flex-shrink-0 mt-1" />
              </div>
              <div className="bg-[#e3f2fd] rounded-[10px] border-l-4 border-[#007AFF] p-3">
                <p className="text-[#3c3c43] text-[15px] m-0">
                  <strong className="text-black">Recommended:</strong> NETFILE is available 24/7 and you'll receive your notice of assessment within 2 weeks (8 weeks if you file by paper).
                </p>
              </div>
            </button>

            <div className="bg-white rounded-[10px] p-4">
              <div className="flex items-start gap-3">
                <FileText className="h-6 w-6 text-[#007AFF] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-black text-[20px] m-0 mb-2">Paper filing</h3>
                  <p className="text-[#3c3c43] text-[17px] m-0">
                    Complete a paper return and mail it to your tax centre. This method takes longer to process (up to 8 weeks).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Important filing deadlines</h2>
            <div className="bg-white rounded-[10px] p-4">
              <div className="flex items-start gap-3 mb-3">
                <Calendar className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="text-[#3c3c43] text-[17px]">Most Canadians:</span>
                    <span className="text-black text-[17px]">April 30, 2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#3c3c43] text-[17px]">Self-employed:</span>
                    <span className="text-black text-[17px]">June 15, 2026</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#fff9e6] rounded-[10px] border-l-4 border-[#ffcc00] p-3">
                <p className="text-[#3c3c43] text-[15px] m-0">
                  <strong className="text-black">Note:</strong> Even if the filing deadline is June 15 for self-employed individuals, any balance owing must still be paid by April 30 to avoid interest charges.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">What you need to file</h2>
            <div className="bg-white rounded-[10px] p-4">
              <ul className="list-none m-0 p-0 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] flex-shrink-0 leading-none mt-[3px]">•</span>
                  <span className="text-[#3c3c43] text-[17px]">Social Insurance Number (SIN)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] flex-shrink-0 leading-none mt-[3px]">•</span>
                  <span className="text-[#3c3c43] text-[17px]">T4 slips (employment income)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] flex-shrink-0 leading-none mt-[3px]">•</span>
                  <span className="text-[#3c3c43] text-[17px]">T5 slips (investment income)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] flex-shrink-0 leading-none mt-[3px]">•</span>
                  <span className="text-[#3c3c43] text-[17px]">Receipts for deductions and credits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] flex-shrink-0 leading-none mt-[3px]">•</span>
                  <span className="text-[#3c3c43] text-[17px]">RRSP contribution receipts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] flex-shrink-0 leading-none mt-[3px]">•</span>
                  <span className="text-[#3c3c43] text-[17px]">Medical expense receipts</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Need help filing?</h2>
            
            <a
              href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/community-volunteer-income-tax-program.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-[10px] p-4 mb-3 hover:opacity-70 active:opacity-50 transition-opacity no-underline"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-[#3c3c43] text-[17px] m-0">
                  The Community Volunteer Income Tax Program offers free tax clinics for eligible individuals with a modest income and simple tax situation.
                </p>
                <ExternalLink className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
              </div>
            </a>

            <button
              onClick={onFileTaxes}
              className="w-full bg-white rounded-[10px] p-4 hover:opacity-70 active:opacity-50 transition-opacity text-left border-0"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-[#3c3c43] text-[17px] m-0 mb-3">
                    If your tax situation is complex or you simply prefer professional assistance, you can hire a tax preparer, accountant, or discounter.
                  </p>
                  <p className="text-[#3c3c43] text-[17px] m-0 mb-3">
                    <span className="text-black">Discounter:</span> A discounter will pay you part of your refund immediately for a fee.
                  </p>
                  <p className="text-[#3c3c43] text-[17px] m-0">
                    <span className="text-black">Examples:</span> Services like H&R Block or local accounting firms are available for a service fee.
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-[#c6c6c8] flex-shrink-0 mt-0.5" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}