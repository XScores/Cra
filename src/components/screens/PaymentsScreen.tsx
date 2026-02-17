import { HeaderMaster } from '../HeaderMaster';
import { Card } from '../ui/card';
import { ChevronRight, DollarSign, ChevronLeft, AlertTriangle, ExternalLink } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

const transactions = [
  { date: 'Sep 15, 2025', description: 'Payment Received', amount: '+$300.00', type: 'credit' },
  { date: 'Aug 10, 2026', description: 'Payment Received', amount: '+$450.00', type: 'credit' },
  { date: 'Jun 30, 2026', description: 'Interest Charged', amount: '-$12.50', type: 'debit' },
  { date: 'May 1, 2026', description: '2024 Tax Balance', amount: '-$1,250.00', type: 'debit' },
  { date: 'Mar 12, 2026', description: '2024 Tax Refund', amount: '+$850.00', type: 'credit' },
  { date: 'Dec 15, 2025', description: 'Instalment Payment', amount: '+$200.00', type: 'credit' },
  { date: 'Nov 8, 2025', description: 'Payment Received', amount: '+$375.00', type: 'credit' },
  { date: 'Sep 15, 2025', description: 'Instalment Payment', amount: '+$200.00', type: 'credit' },
  { date: 'Jun 15, 2025', description: 'Instalment Payment', amount: '+$200.00', type: 'credit' },
  { date: 'May 5, 2025', description: '2024 Tax Balance', amount: '-$1,125.00', type: 'debit' },
  { date: 'Apr 2, 2025', description: 'Interest Charged', amount: '-$8.75', type: 'debit' },
  { date: 'Mar 15, 2025', description: 'Instalment Payment', amount: '+$200.00', type: 'credit' },
  { date: 'Feb 20, 2025', description: 'Payment Received', amount: '+$500.00', type: 'credit' },
  { date: 'Jan 10, 2025', description: 'Payment Received', amount: '+$250.00', type: 'credit' },
  { date: 'Dec 15, 2023', description: 'Instalment Payment', amount: '+$180.00', type: 'credit' },
  { date: 'Nov 5, 2023', description: '2023 Tax Refund', amount: '+$1,240.00', type: 'credit' },
  { date: 'Sep 15, 2023', description: 'Instalment Payment', amount: '+$180.00', type: 'credit' },
  { date: 'Aug 22, 2023', description: 'Payment Received', amount: '+$300.00', type: 'credit' },
  { date: 'Jun 15, 2023', description: 'Instalment Payment', amount: '+$180.00', type: 'credit' },
  { date: 'May 12, 2023', description: '2022 Tax Balance', amount: '-$950.00', type: 'debit' },
];

interface PaymentsScreenProps {
  onMakePayment: () => void;
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
  onViewAllBenefits?: () => void;
  onOnlineBanking?: () => void;
  onDirectDeposit?: () => void;
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

export function PaymentsScreen({ onMakePayment, onViewMail, onNavigateHome, onLogoClick, onFileTaxes, hasUnreadMail, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onOnlineBanking, onDirectDeposit, onUserFeedback, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onBecomeRepresentative, onBecomeRepresentativeAsRep, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments }: PaymentsScreenProps) {
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
            onClick={onNavigateHome}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Account Details</h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        <div className="px-4 pb-4 pt-4">
          {/* Alert - Balance Owing */}
          <div className="mb-4 card-ios p-4 border-l-4 border-[#ff3b30]">
            <div className="flex gap-3">
              <AlertTriangle className="h-5 w-5 text-[#ff3b30] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-[17px] font-semibold text-black mb-2">Balance owing on 2024 Tax return</h3>
                <div className="mb-3">
                  <div className="flex justify-between items-start text-[15px]">
                    <span className="text-gray-ios">Amount due:</span>
                    <div className="text-right">
                      <div className="text-[#ff3b30] font-semibold text-[20px]">$1,250.00</div>
                      <div className="text-gray-ios text-[13px]">Apr 30, 2026</div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <button className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity flex items-center gap-1">
                    View details
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                <button onClick={onMakePayment} className="btn-filled-ios w-full text-center">
                  Make a payment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="section-header-ios">
          Transaction History
        </div>

        <div className="px-4 pb-4">
          {/* Transaction History */}
          <div className="mb-4">
            <div className="bg-white rounded-[10px] border border-[rgba(60,60,67,0.29)] overflow-hidden">
              <div className="overflow-x-auto">
                <Table className="bg-white w-full">
                  <TableHeader className="bg-white">
                    <TableRow className="!bg-white hover:!bg-white border-b separator-ios">
                      <TableHead className="text-black h-11 w-[75px] font-semibold bg-white pl-3 pr-1">Date</TableHead>
                      <TableHead className="text-black h-11 font-semibold bg-white pl-1 pr-1">Description</TableHead>
                      <TableHead className="text-right text-black h-11 w-[100px] font-semibold bg-white pl-2 pr-3">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="bg-white">
                    {transactions.map((transaction, index) => (
                      <TableRow key={index} className="!bg-white hover:!bg-white border-b separator-ios last:border-0">
                        <TableCell className="text-[15px] text-black whitespace-nowrap w-[75px] bg-white pl-3 pr-1">
                          {transaction.date}
                        </TableCell>
                        <TableCell className="bg-white pl-1 pr-1">
                          <span className="text-[15px] text-black truncate">{transaction.description}</span>
                        </TableCell>
                        <TableCell className="text-right w-[100px] bg-white pl-2 pr-3">
                          <span className={`text-[15px] font-semibold whitespace-nowrap ${
                            transaction.type === 'credit' ? 'text-[#28a745]' : 'text-[#ff3b30]'
                          }`}>
                            {transaction.amount}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          {/* Section Header */}
          <div className="section-header-ios -mx-4">
            Payment Options
          </div>

          {/* Payment Options */}
          <div className="space-y-3">
            <div className="card-ios p-4">
              <h4 className="text-[17px] font-semibold text-black mb-1">Online banking</h4>
              <p className="text-gray-ios text-[15px] m-0 mb-3">Pay through your financial institution's online banking service</p>
              <button 
                onClick={onOnlineBanking}
                className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity flex items-center gap-1"
              >
                Learn how to pay
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="card-ios p-4">
              <h4 className="text-[17px] font-semibold text-black mb-1">Direct deposit</h4>
              <p className="text-gray-ios text-[15px] m-0 mb-3">Set up automatic deposits from the CRA to your bank account for faster refunds and benefit payments.</p>
              <button 
                onClick={onDirectDeposit}
                className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity flex items-center gap-1"
              >
                Set up direct deposit
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="card-ios p-4">
              <h4 className="text-[17px] font-semibold text-black mb-1">PaySimply</h4>
              <div className="mb-3">
                <p className="text-gray-ios text-[15px] m-0 mb-2">PaySimply is a third-party payment service provider that allows you to pay your CRA balance using:</p>
                <ul className="list-disc text-gray-ios text-[15px] pl-5 space-y-1 m-0">
                  <li>Credit card (Visa, Mastercard)</li>
                  <li>Debit card (Visa Debit, Debit Mastercard)</li>
                  <li>Interac e-Transfer</li>
                </ul>
              </div>
              <button className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity flex items-center gap-1">
                Go to PaySimply
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}