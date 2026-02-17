import { HeaderMaster } from '../HeaderMaster';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ChevronRight, FileText, CheckCircle2, AlertCircle, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface TaxReturnsScreenProps {
  onBack: () => void;
  onStartFiling?: () => void;
  onViewMail?: () => void;
  onNavigateHome?: () => void;
  onLogoClick?: () => void;
  onViewNotice?: () => void;
  hasUnreadMail?: boolean;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onUserFeedback?: () => void;
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
}

const taxReturns = [
  {
    year: '2024',
    status: 'Assessed',
    statusType: 'success',
    icon: CheckCircle2,
    refundAmount: '$850.00',
    filedDate: 'Mar 15, 2025',
    processedDate: 'Mar 12, 2025',
    description: 'Completed',
  },
  {
    year: '2023',
    status: 'Assessed',
    statusType: 'success',
    icon: CheckCircle2,
    refundAmount: '$1,240.00',
    filedDate: 'Apr 2, 2025',
    processedDate: 'Apr 20, 2025',
    description: 'Completed',
  },
  {
    year: '2022',
    status: 'Reassessed',
    statusType: 'warning',
    icon: AlertCircle,
    refundAmount: '-$320.00',
    filedDate: 'Mar 28, 2023',
    processedDate: 'Apr 15, 2023',
    description: 'Reassessment notice issued',
  },
];

export function TaxReturnsScreen({ onBack, onStartFiling, onViewMail, onNavigateHome, onLogoClick, onViewNotice, hasUnreadMail, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onUserFeedback, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onBecomeRepresentative, onBecomeRepresentativeAsRep, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments }: TaxReturnsScreenProps) {
  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      {/* Header with integrated menu */}
      <HeaderMaster 
        title="My Account"
        largeTitle={true}
        showSearch={true}
        showMenu={true}
        onNavigateHome={onNavigateHome}
        onLogoClick={onLogoClick}
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
        onUserFeedback={onUserFeedback}
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
      />

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Tax Returns</h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Section Header */}
        <div className="section-header-ios">
          Tax filing and history
        </div>

        {/* File New Return */}
        <div className="px-4 pb-3 bg-[#f2f2f7]">
          <div className="card-ios p-4 border-l-4 border-[#007AFF]">
            <h3 className="text-[17px] font-semibold text-black mb-2">File your 2024 tax return</h3>
            <p className="text-gray-ios text-[15px] m-0 mb-3">Start your tax filing for the current year</p>
            <p className="text-[15px] m-0 mb-4">
              <button 
                onClick={onViewNotice}
                className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity text-left flex items-center gap-1"
              >
                Notice of assessment available
                <ChevronRight className="h-4 w-4" />
              </button>
            </p>
            <button 
              onClick={onStartFiling}
              className="btn-filled-ios w-full text-center"
            >
              Start filing
            </button>
          </div>
        </div>

        {/* Section Header */}
        <div className="section-header-ios">
          Previous Returns
        </div>

        {/* Returns List */}
        <div className="px-4 pb-4 space-y-3 bg-[#f2f2f7]">
          {taxReturns.map((returnItem, index) => (
            <div
              key={index}
              className="card-ios p-4 border-l-4 border-[#007AFF]"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-[17px] font-semibold text-black mb-1">{returnItem.year} Tax Year</h3>
                  <p className="text-gray-ios text-[15px] m-0">{returnItem.description}</p>
                </div>
                <Badge className={`
                  ${returnItem.statusType === 'success' ? 'bg-[#28a745] text-white border-0' : ''}
                  ${returnItem.statusType === 'warning' ? 'bg-[#FF9500] text-white border-0' : ''}
                  rounded-full px-3 py-1 text-[12px]
                `}>
                  {returnItem.status}
                </Badge>
              </div>

              <div className="bg-[#f2f2f7] rounded-[10px] p-3 mb-3">
                <div className="flex justify-between items-start text-[15px]">
                  <span className="text-gray-ios">Refund/Balance:</span>
                  <div className="text-right">
                    <div className={`font-semibold text-[17px] ${returnItem.refundAmount.startsWith('-') ? 'text-[#ff3b30]' : 'text-[#28a745]'}`}>
                      {returnItem.refundAmount}
                    </div>
                    <div className="text-gray-ios text-[13px]">{returnItem.processedDate}</div>
                  </div>
                </div>
              </div>

              <button className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity flex items-center gap-1">
                View detailed return
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}