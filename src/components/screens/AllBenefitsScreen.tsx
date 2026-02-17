import { HeaderMaster } from '../HeaderMaster';
import { ArrowLeft, CircleDollarSign, Calendar, Users, Baby, Home, Heart, Calendar as CalendarIcon, ExternalLink, ChevronRight, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { DayPicker } from 'react-day-picker@8.10.1';
import { ChevronLeft } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '../ui/tooltip';
import { cn } from '../ui/utils';
import { buttonVariants } from '../ui/button';
import { motion, AnimatePresence } from 'motion/react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface AllBenefitsScreenProps {
  onBack: () => void;
  onMakePayment: () => void;
  onNavigateHome?: () => void;
  onLogoClick?: () => void;
  onViewMail?: () => void;
  onFileTaxes?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  hasUnreadMail?: boolean;
  onShowPrivacy?: () => void;
  onShowTerms?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onGSTHSTCredit?: () => void;
  // Search navigation handlers
  onViewRefundDetails?: () => void;
  onViewNoticeOfAssessment?: () => void;
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
  onUserFeedback?: () => void;
}

export function AllBenefitsScreen({ onBack, onViewMail, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onGSTHSTCredit, onViewRefundDetails, onViewNoticeOfAssessment, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onLifelongLearningPlan, onCustomize, onUncashedCheques, onBecomeRepresentative, onBecomeRepresentativeAsRep, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments, onUserFeedback }: AllBenefitsScreenProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [calendarMonth, setCalendarMonth] = useState(new Date());

  const isCCBPaymentDate = (date: Date) => {
    // CCB payments are on the 20th of each month
    return date.getDate() === 20;
  };

  const isGSTPaymentDate = (date: Date) => {
    // GST/HST payments are quarterly on the 5th of January, April, July, October
    const month = date.getMonth(); // 0-11
    const day = date.getDate();
    return day === 5 && (month === 0 || month === 3 || month === 6 || month === 9); // Jan, Apr, Jul, Oct
  };

  const isBenefitPaymentDate = (date: Date) => {
    return isCCBPaymentDate(date) || isGSTPaymentDate(date);
  };

  const getBenefitInfo = (date: Date) => {
    const isCCB = isCCBPaymentDate(date);
    const isGST = isGSTPaymentDate(date);
    
    if (isCCB && isGST) {
      return {
        label: 'Multiple Benefits',
        amount: 505.00,
        details: 'CCB + GST/HST Credit'
      };
    } else if (isCCB) {
      return {
        label: 'Canada Child Benefit',
        amount: 360.00,
        details: 'Monthly CCB Payment'
      };
    } else if (isGST) {
      return {
        label: 'GST/HST Credit',
        amount: 145.00,
        details: 'Quarterly Payment'
      };
    }
    return null;
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const handleCalendarClose = () => {
    setShowCalendar(false);
    setSelectedDate(undefined);
  };

  const monthlyTotal = (() => {
    const daysInMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 0).getDate();
    let total = 0;
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), day);
      const benefitInfo = getBenefitInfo(date);
      if (benefitInfo) {
        total += benefitInfo.amount;
      }
    }
    return total;
  })();

  const DayContentWithBenefitTooltip = ({ date, modifiers }: { date: Date, modifiers?: any }) => {
    // Check if this date is a benefit payment date
    const isBenefitDay = isBenefitPaymentDate(date);
    const benefitInfo = getBenefitInfo(date);
    
    const dayContent = <>{date.getDate()}</>;
    
    if (!isBenefitDay || !benefitInfo) {
      return dayContent;
    }

    // Determine tooltip alignment based on day of week to avoid viewport overflow
    const dayOfWeek = date.getDay();
    let tooltipAlign: "start" | "center" | "end" = "center";
    
    if (dayOfWeek === 0) {
      // Sunday (leftmost column) - align to the left
      tooltipAlign = "start";
    } else if (dayOfWeek === 6) {
      // Saturday (rightmost column) - align to the right
      tooltipAlign = "end";
    }

    // Always render the green circle for benefit dates, regardless of selection
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="relative z-[4] text-[#28a745] font-bold cursor-pointer">
            {dayContent}
          </span>
        </TooltipTrigger>
        <TooltipContent 
          className="!bg-[#007AFF] !text-white !border-0 !rounded-[8px] !z-[9999]"
          sideOffset={8}
          side="top"
          align={tooltipAlign}
          collisionPadding={30}
          avoidCollisions={true}
        >
          <div className="text-center">
            <div className="font-semibold text-[11px] mb-0.5">{benefitInfo.label}</div>
            <div className="text-[10px] mb-0.5">{benefitInfo.details}</div>
            <div className="font-bold text-[12px]">${benefitInfo.amount.toFixed(2)}</div>
          </div>
        </TooltipContent>
      </Tooltip>
    );
  };

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
        onUserFeedback={onUserFeedback}
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Benefits and credits</h1>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        <div className="bg-[#f2f2f7] px-4 py-4">
          {/* View Payment Calendar Button */}
          <div className="mb-3">
            <button
              onClick={() => setShowCalendar(true)}
              className="btn-filled-ios w-full flex items-center justify-center gap-2"
            >
              <CalendarIcon className="h-5 w-5" />
              View benefit payment calendar
            </button>
          </div>

          {/* Benefit Payment Method */}
          <div className="mb-3 card-ios p-4">
            <h2 className="text-[17px] font-semibold text-black mb-3">Benefit Payment method</h2>
            <div className="flex items-start gap-3">
              <CircleDollarSign className="h-5 w-5 text-[#007AFF] mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-[#3a3a3c] text-[15px] mb-2">
                  All benefit payments are deposited to your registered bank account:
                </div>
                <div className="space-y-1 text-[15px]">
                  <div className="flex justify-between">
                    <span className="text-gray-ios">Financial institution:</span>
                    <span className="text-black font-semibold">Royal Bank</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-ios">Account number:</span>
                    <span className="text-black font-semibold">****7890</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Active Benefits */}
          <div className="mb-3">
            <h2 className="text-[22px] font-semibold text-black mb-3">Active benefits</h2>

            {/* Canada Child Benefit */}
            <div className="mb-3 card-ios p-4 border-l-4 border-[#28a745]">
              <div className="flex items-start gap-3 mb-3">
                <Baby className="h-5 w-5 text-[#28a745] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="text-[17px] font-semibold text-black m-0 mb-1">Canada Child Benefit (CCB)</h3>
                  <p className="text-gray-ios text-[14px] m-0">
                    Tax-free monthly payment for families with children under 18
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="pb-3 border-b border-[#e5e5ea]">
                  <div className="flex justify-between items-start mb-2 bg-[#e8f5e9] rounded-lg p-3">
                    <span className="text-[#3a3a3c] text-[15px] font-semibold">Next payment:</span>
                    <div className="text-right">
                      <div className="text-[#28a745] font-semibold text-[20px]">$360.00</div>
                      <div className="text-gray-ios text-[13px]">November 20, 2025</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-[15px]">
                    <span className="text-gray-ios">Payment frequency:</span>
                    <span className="text-black">Monthly</span>
                  </div>
                  <div className="flex justify-between text-[15px]">
                    <span className="text-gray-ios">Benefit year:</span>
                    <span className="text-black">July 2025 - June 2026</span>
                  </div>
                  <div className="flex justify-between text-[15px]">
                    <span className="text-gray-ios">Annual benefit:</span>
                    <span className="text-[#28a745] font-semibold">$4,320.00</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#e5e5ea]">
                  <div className="text-black font-semibold mb-2 text-[15px]">Eligible children:</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[15px]">
                      <span className="text-[#3a3a3c]">Emma Rath (Age 8)</span>
                      <span className="text-[#28a745]">$180.00/month</span>
                    </div>
                    <div className="flex justify-between text-[15px]">
                      <span className="text-[#3a3a3c]">Lucas Rath (Age 5)</span>
                      <span className="text-[#28a745]">$180.00/month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GST/HST Credit */}
            <div className="mb-3 card-ios p-4 border-l-4 border-[#28a745]">
              <div className="flex items-start gap-3 mb-3">
                <CircleDollarSign className="h-5 w-5 text-[#28a745] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="text-[17px] font-semibold text-black m-0 mb-1">GST/HST Credit</h3>
                  <p className="text-gray-ios text-[14px] m-0">
                    Tax-free quarterly payment to help offset the GST or HST you pay
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="pb-3 border-b border-[#e5e5ea]">
                  <div className="flex justify-between items-start mb-2 bg-[#e8f5e9] rounded-lg p-3">
                    <span className="text-[#3a3a3c] text-[15px] font-semibold">Next payment:</span>
                    <div className="text-right">
                      <div className="text-[#28a745] font-semibold text-[20px]">$145.00</div>
                      <div className="text-gray-ios text-[13px]">January 5, 2026</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-[15px]">
                    <span className="text-gray-ios">Payment frequency:</span>
                    <span className="text-black">Quarterly</span>
                  </div>
                  <div className="flex justify-between text-[15px]">
                    <span className="text-gray-ios">Benefit year:</span>
                    <span className="text-black">July 2025 - June 2026</span>
                  </div>
                  <div className="flex justify-between text-[15px]">
                    <span className="text-gray-ios">Annual benefit:</span>
                    <span className="text-[#28a745] font-semibold">$580.00</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#e5e5ea]">
                  <div className="text-black font-semibold mb-2 text-[15px]">Upcoming payments:</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[15px]">
                      <span className="text-[#3a3a3c]">January 5, 2026</span>
                      <span className="text-[#28a745]">$145.00</span>
                    </div>
                    <div className="flex justify-between text-[15px]">
                      <span className="text-[#3a3a3c]">April 5, 2026</span>
                      <span className="text-[#28a745]">$145.00</span>
                    </div>
                    <div className="flex justify-between text-[15px]">
                      <span className="text-[#3a3a3c]">July 5, 2026</span>
                      <span className="text-[#28a745]">$145.00</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#e5e5ea]">
                  <button 
                    onClick={onGSTHSTCredit}
                    className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity flex items-center gap-1"
                  >
                    View full details
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Canada Workers Benefit */}
            <div className="mb-3 card-ios p-4 border-l-4 border-[#28a745]">
              <div className="flex items-start gap-3 mb-3">
                <Users className="h-5 w-5 text-[#28a745] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="text-[17px] font-semibold text-black m-0 mb-1">Canada Workers Benefit (CWB)</h3>
                  <p className="text-gray-ios text-[14px] m-0">
                    Refundable tax credit for low-income individuals and families
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="pb-3 border-b border-[#e5e5ea]">
                  <div className="flex justify-between items-start mb-2 bg-[#e8f5e9] rounded-lg p-3">
                    <span className="text-[#3a3a3c] text-[15px]">2024 Benefit amount:</span>
                    <div className="text-right">
                      <div className="text-[#28a745] font-semibold text-[20px]">$450.00</div>
                      <div className="text-gray-ios text-[13px]">Paid with refund</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-[15px]">
                    <span className="text-gray-ios">Payment method:</span>
                    <span className="text-black">Annual with tax refund</span>
                  </div>
                  <div className="flex justify-between text-[15px]">
                    <span className="text-gray-ios">Based on:</span>
                    <span className="text-black">2024 Tax Return</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="mb-3 card-ios p-4 border-l-4 border-[#28a745]">
            <h2 className="text-[17px] font-semibold text-black mb-3">Total annual benefits</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-[15px]">
                <span className="text-gray-ios">Canada Child Benefit</span>
                <span className="text-[#28a745]">$4,320.00</span>
              </div>
              <div className="flex justify-between text-[15px]">
                <span className="text-gray-ios">GST/HST Credit</span>
                <span className="text-[#28a745]">$580.00</span>
              </div>
              <div className="flex justify-between text-[15px]">
                <span className="text-gray-ios">Canada Workers Benefit</span>
                <span className="text-[#28a745]">$450.00</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-[#e5e5ea] bg-[#e8f5e9] rounded-lg p-3 -mx-3 -mb-3">
                <span className="text-black font-semibold text-[17px]">Annual Total:</span>
                <span className="text-[#28a745] font-semibold text-[24px]">$5,350.00</span>
              </div>
            </div>
          </div>

          {/* Additional benefits */}
          <div className="mb-3 card-ios p-4">
            <h2 className="text-[17px] font-semibold text-black mb-3">Additional benefits</h2>
            <p className="text-gray-ios text-[15px] m-0 mb-3">
              Search for many other additional Federal and Provincial Government benefits.
            </p>
            <a 
              href="https://www.canada.ca/en/services/benefits/finder.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#007AFF] text-[15px] inline-flex items-center gap-1 hover:opacity-70 active:opacity-50 transition-opacity"
            >
              Government of Canada Benefits Finder
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Information Note */}
          <div className="mb-3 card-ios p-4 border-l-4 border-[#ff9500]">
            <h3 className="text-[17px] font-semibold text-black mb-2">Note:</h3>
            <p className="text-[#3a3a3c] text-[15px] m-0 mb-2">
              Your benefit eligibility is determined by your previous year's tax return. To continue receiving benefits, ensure you file your taxes on time each year.
            </p>
            <p className="text-[#3a3a3c] text-[15px] m-0">
              Changes to your family situation (marriage, separation, birth of a child) may affect your benefit amounts. Update your information as soon as possible.
            </p>
          </div>

          {/* Contact Information */}
          <div className="card-ios p-4">
            <h2 className="text-[17px] font-semibold text-black mb-3">Questions about your benefits?</h2>
            <div className="space-y-3 text-[15px]">
              <div className="flex items-start gap-2">
                <Calendar className="h-4 w-4 text-[#007AFF] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-black font-semibold mb-1">Benefits enquiries</div>
                  <div className="text-[#3a3a3c]">1-800-387-1193</div>
                  <div className="text-gray-ios text-[14px]">Monday to Friday, 9 AM to 6 PM ET</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Modal */}
      {showCalendar && createPortal(
        <TooltipProvider delayDuration={0}>
          <div className="absolute inset-0 z-[100] flex justify-center pt-[60px] bg-black/50">
            <div className="bg-white w-[calc(100%-20px)] max-w-[500px] rounded-xl shadow-lg self-start">
              <div className="p-4">
                <h2 className="text-[20px] font-semibold text-black mb-3 text-center">Benefit Payment Calendar</h2>
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  month={calendarMonth}
                  onMonthChange={setCalendarMonth}
                  onSelect={handleDateSelect}
                  showOutsideDays={true}
                  modifiers={{
                    benefitPayment: isBenefitPaymentDate,
                  }}
                  modifiersClassNames={{
                    benefitPayment: "benefit-payment-day",
                  }}
                  classNames={{ 
                    months: "flex flex-col sm:flex-row gap-2",
                    month: "flex flex-col gap-4",
                    caption: "flex justify-center pt-1 relative items-center w-full",
                    caption_label: "text-sm font-medium",
                    nav: "flex items-center gap-1",
                    nav_button: cn(
                      buttonVariants({ variant: "outline" }),
                      "size-5.5 bg-white p-0 border-2 border-[#007AFF] hover:bg-[#007AFF] hover:text-white transition-colors rounded-lg",
                    ),
                    nav_button_previous: "absolute left-1",
                    nav_button_next: "absolute right-1",
                    table: "w-full border-collapse table-fixed",
                    head_row: "flex w-full",
                    head_cell:
                      "text-muted-foreground w-[calc(100%/7)] font-bold text-[0.8rem] text-center",
                    row: "flex w-full mt-2",
                    cell: cn(
                      "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 w-[calc(100%/7)] flex items-center justify-center",
                    ),
                    day: cn(
                      buttonVariants({ variant: "ghost" }),
                      "size-10 p-0 font-normal aria-selected:opacity-100 relative z-[2] cursor-pointer",
                    ),
                    day_selected:
                      "!bg-transparent !text-black hover:!bg-transparent focus:!bg-transparent relative z-[3] after:!hidden before:!hidden",
                    day_today: "bg-accent text-accent-foreground",
                    day_outside:
                      "day-outside text-muted-foreground aria-selected:text-muted-foreground",
                    day_disabled: "text-muted-foreground opacity-50",
                    day_hidden: "invisible",
                  }}
                  components={{
                    IconLeft: ({ className, ...props }) => (
                      <ChevronLeft className={cn("size-5", className)} {...props} />
                    ),
                    IconRight: ({ className, ...props }) => (
                      <ChevronRight className={cn("size-5", className)} {...props} />
                    ),
                    DayContent: DayContentWithBenefitTooltip,
                  }}
                  className="w-full px-0"
                />
                <div className="mt-4">
                  <div className="card-ios p-4 border-l-4 border-[#28a745]">
                    <div className="flex justify-between items-center">
                      <span className="text-black font-semibold text-[15px]">
                        {calendarMonth.toLocaleString('default', { month: 'long', year: 'numeric' })} Total:
                      </span>
                      <span className="text-[#28a745] font-semibold text-[20px]">
                        ${monthlyTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  {selectedDate && isBenefitPaymentDate(selectedDate) && (() => {
                    const benefitInfo = getBenefitInfo(selectedDate);
                    const isCCB = isCCBPaymentDate(selectedDate);
                    const isGST = isGSTPaymentDate(selectedDate);
                    
                    return (
                      <div className="bg-[#007AFF] text-white rounded-lg p-4 shadow-md">
                        <div className="text-center">
                          <div className="text-[15px] mb-3">
                            {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                          </div>
                          <div className="space-y-2 text-[14px] bg-white/10 rounded-lg p-3 mb-3">
                            {isCCB && (
                              <div className="flex justify-between items-center">
                                <span>Canada Child Benefit:</span>
                                <span className="font-semibold">$360.00</span>
                              </div>
                            )}
                            {isGST && (
                              <div className="flex justify-between items-center">
                                <span>GST/HST Credit:</span>
                                <span className="font-semibold">$145.00</span>
                              </div>
                            )}
                          </div>
                          <div className="text-left bg-white/10 rounded-lg p-3 text-[13px]">
                            <div className="font-semibold mb-1">Deposited to:</div>
                            <div className="flex justify-between mb-0.5">
                              <span className="text-white/80">Royal Bank</span>
                              <span className="font-mono">****7890</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
                <div className="mt-3">
                  <button
                    onClick={handleCalendarClose}
                    className="btn-filled-ios w-full text-center"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TooltipProvider>,
        document.getElementById('iphone-screen')!
      )}
    </div>
  );
}