import { HeaderMaster } from '../HeaderMaster';
import { QuickActions } from '../QuickActions';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ChevronRight, Calendar, AlertTriangle, CheckCircle, CircleDollarSign, X } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface DashboardScreenProps {
  onMakePayment: () => void;
  onFileTaxes?: () => void;
  onViewNoticeOfAssessment?: () => void;
  onViewMail?: () => void;
  onRegisteredPlans?: () => void;
  onNavigateHome?: () => void;
  onLogoClick?: () => void;
  hasUnreadMail?: boolean;
  onViewBalanceOwingDetails?: () => void;
  onViewRefundDetails?: () => void;
  onViewAllBenefits?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onBecomeRepresentative?: () => void;
  onBecomeRepresentativeAsRep?: () => void;
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
  onUserFeedback?: () => void;
  customMostRequested?: any[];
  customNumberOfRows?: number;
  customMenuItems?: any[];
  onSwapMostRequested?: (sourceIndex: number, targetIndex: number) => void;
  onGSTHSTCredit?: () => void;
  onAccountDetails?: () => void;
  onProfile?: () => void;
  onViewTaxReturns?: () => void;
  onHomeBuyersPlan?: () => void;
  onFHSAEligibility?: () => void;
  onLifelongLearningPlan?: () => void;
}

export function DashboardScreen({ onMakePayment, onFileTaxes, onViewNoticeOfAssessment, onViewMail, onRegisteredPlans, onNavigateHome, onLogoClick, hasUnreadMail, onViewBalanceOwingDetails, onViewRefundDetails, onViewAllBenefits, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onBecomeRepresentative, onBecomeRepresentativeAsRep, onCustomize, onUncashedCheques, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments, onUserFeedback, customMostRequested, customNumberOfRows, customMenuItems, onSwapMostRequested, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onLifelongLearningPlan }: DashboardScreenProps) {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col relative">
      {/* Header with integrated menu */}
      <HeaderMaster 
        title="My Account"
        largeTitle={true}
        showSearch={true}
        showMenu={true}
        onNavigateHome={onNavigateHome}
        onLogoClick={onLogoClick}
        hasUnreadMail={hasUnreadMail}
        // Menu handlers
        onFileTaxes={onFileTaxes}
        onViewAllBenefits={onViewAllBenefits}
        onMakePayment={onMakePayment}
        onViewMail={onViewMail}
        onRegisteredPlans={onRegisteredPlans}
        onTaxSlips={onTaxSlips}
        onProofOfIncome={onProofOfIncome}
        onHelp={onHelp}
        onSignOut={onSignOut}
        onBecomeRepresentative={onBecomeRepresentative}
        onBecomeRepresentativeAsRep={onBecomeRepresentativeAsRep}
        // Search navigation handlers
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
        // Account switching is handled internally by HeaderMaster when largeTitle={true}
        activeAccountType="personal"
        customMenuItems={customMenuItems}
      />

      {/* Content - Scrollable */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Greeting Section */}
        <div className="px-4 py-4 bg-[#f2f2f7]">
          <div className="py-4 pr-4">
            <h2 className="text-[20px] font-semibold text-black m-0 mb-1">{greeting}, Jonathan</h2>
            <p className="text-gray-ios text-[15px] m-0">Last login: October 9, 2025 at 2:30 PM</p>
          </div>
        </div>

        {/* Quick Links */}
        <QuickActions 
          onFileTaxes={onFileTaxes} 
          onMakePayment={onMakePayment} 
          onViewMail={onViewMail} 
          onRegisteredPlans={onRegisteredPlans}
          onBenefitsAndCredits={onViewAllBenefits}
          onCustomize={onCustomize} 
          hasUnreadMail={hasUnreadMail} 
          unreadMailCount={1}
          customActions={customMostRequested}
          numberOfRows={customNumberOfRows}
          onSwapActions={onSwapMostRequested}
        />

        <div className="bg-[#f2f2f7] px-4 py-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-[22px] font-semibold text-black">News Feed</h2>
            <button onClick={onCustomize} className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity">
              Customize
            </button>
          </div>

          {/* Alert - Balance Owing */}
          <div className="mb-3 card-ios p-4 border-l-4 border-[#ff3b30]">
            <div className="flex gap-3">
              <AlertTriangle className="h-5 w-5 text-[#ff3b30] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-[17px] font-semibold text-black mb-2">Balance owing on 2024 Tax return</h3>
                <div className="mb-3">
                  <div className="flex justify-between items-start text-[15px]">
                    <span className="text-gray-ios">Amount due:</span>
                    <div className="flex items-start gap-2">
                      <div className="text-right">
                        <div className="text-[#ff3b30] font-semibold text-[20px]">$1,250.00</div>
                        <div className="text-gray-ios text-[13px]">Apr 30, 2026</div>
                      </div>
                      <button 
                        onClick={onViewBalanceOwingDetails}
                        className="flex items-center justify-center w-[24px] h-[24px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] hover:bg-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0 mt-1"
                        aria-label="View balance owing details"
                      >
                        <ChevronRight className="h-4 w-4" strokeWidth={3} />
                      </button>
                    </div>
                  </div>
                </div>
                <button onClick={onMakePayment} className="btn-filled-ios w-full text-center">
                  Make a payment
                </button>
              </div>
            </div>
          </div>

          {/* Success - Refund */}
          <div className="mb-3 card-ios p-4 border-l-4 border-[#28a745]">
            <div className="flex gap-3">
              <CheckCircle className="h-5 w-5 text-[#28a745] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-[17px] font-semibold text-black mb-2">Latest refund processed</h3>
                <div className="mb-3">
                  <div className="flex justify-between items-start text-[15px]">
                    <span className="text-gray-ios">Amount:</span>
                    <div className="flex items-start gap-2">
                      <div className="text-right">
                        <div className="text-[#28a745] font-semibold text-[20px]">$850.00</div>
                        <div className="text-gray-ios text-[13px]">Mar 12, 2025</div>
                      </div>
                      <button 
                        onClick={onViewRefundDetails}
                        className="flex items-center justify-center w-[24px] h-[24px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] hover:bg-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0 mt-1"
                        aria-label="View refund details"
                      >
                        <ChevronRight className="h-4 w-4" strokeWidth={3} />
                      </button>
                    </div>
                  </div>
                </div>
                <button onClick={onViewRefundDetails} className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity flex items-center gap-1">
                  View details
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Benefits Card */}
          <div className="mb-3 card-ios p-4 border-l-4 border-[#28a745]">
            <div className="flex gap-3 mb-4">
              <CircleDollarSign className="h-5 w-5 text-[#28a745] flex-shrink-0 mt-0.5" />
              <h3 className="text-[17px] font-semibold text-black m-0">Benefits and credits</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="text-black text-[15px] mb-1">Canada Child Benefit</div>
                  <div className="text-gray-ios text-[13px]">Next payment</div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-right flex-shrink-0">
                    <div className="text-[#28a745] font-semibold text-[20px]">$360.00</div>
                    <div className="text-gray-ios text-[13px]">Nov 20, 2025</div>
                  </div>
                  <button 
                    onClick={onViewAllBenefits}
                    className="flex items-center justify-center w-[24px] h-[24px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] hover:bg-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0 mt-1"
                    aria-label="View Canada Child Benefit details"
                  >
                    <ChevronRight className="h-4 w-4" strokeWidth={3} />
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="text-black text-[15px] mb-1">GST/HST Credit</div>
                  <div className="text-gray-ios text-[13px]">Next payment</div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-right flex-shrink-0">
                    <div className="text-[#28a745] font-semibold text-[20px]">$145.00</div>
                    <div className="text-gray-ios text-[13px]">Jan 5, 2026</div>
                  </div>
                  <button 
                    onClick={onGSTHSTCredit}
                    className="flex items-center justify-center w-[24px] h-[24px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] hover:bg-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0 mt-1"
                    aria-label="View GST/HST Credit details"
                  >
                    <ChevronRight className="h-4 w-4" strokeWidth={3} />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4">
              <button onClick={onViewAllBenefits} className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity flex items-center gap-1">
                View all benefits
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Tax filing status */}
          <div className="mb-3 card-ios p-4 border-l-4 border-[#28a745]">
            <div className="flex gap-3 mb-4">
              <CheckCircle className="h-5 w-5 text-[#28a745] flex-shrink-0 mt-0.5" />
              <h3 className="text-[17px] font-semibold text-black m-0">Tax filing status</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="text-black text-[15px] mb-1">2024 Tax Return</div>
                  <div className="text-gray-ios text-[13px]">Filed: Mar 15, 2026</div>
                </div>
                <Badge className="bg-[#28a745] text-white border-0 hover:bg-[#28a745] rounded-full px-3 py-1 text-[12px] flex-shrink-0">
                  Assessed
                </Badge>
              </div>
              <div className="pt-1">
                <button 
                  onClick={onViewNoticeOfAssessment}
                  className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity flex items-center gap-1"
                >
                  View notice of assessment
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}