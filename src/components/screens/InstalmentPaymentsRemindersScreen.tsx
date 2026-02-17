import { ChevronLeft, ChevronRight, ChevronDown, Calendar as CalendarIcon, Mail, Gift, Receipt, FileCheck, HelpCircle, LogOut, CreditCard, Check, Landmark, AlertCircle, CheckCircle, FileText } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar } from '../ui/calendar';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

interface InstalmentPaymentsRemindersScreenProps {
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
  onConfirmPayment?: (data: any) => void;
  hasUnreadMail?: boolean;
  onViewAllBenefits?: () => void;
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

export function InstalmentPaymentsRemindersScreen({ 
  onBack, 
  onViewMail, 
  onNavigateHome, 
  onFileTaxes, 
  onMakePayment, 
  onBenefitsAndCredits,
  onRegisteredPlans, 
  onHelp, 
  onSignOut, 
  onTaxSlips,
  onProofOfIncome,
  onConfirmPayment,
  hasUnreadMail = false,
  onViewAllBenefits,
  onViewRefundDetails,
  onViewNoticeOfAssessment,
  onGSTHSTCredit,
  onAccountDetails,
  onProfile,
  onViewTaxReturns,
  onHomeBuyersPlan,
  onFHSAEligibility,
  onBecomeRepresentative,
  onBecomeRepresentativeAsRep,
  onLifelongLearningPlan,
  onCustomize,
  onUncashedCheques,
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
}: InstalmentPaymentsRemindersScreenProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  
  // Step 1: Frequency
  const [frequency, setFrequency] = useState('');
  const [showFrequencyDropdown, setShowFrequencyDropdown] = useState(false);
  
  // Step 2: Start Date
  const [startDate, setStartDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [tempSelectedDate, setTempSelectedDate] = useState<Date | undefined>(undefined);
  const [calendarMonth, setCalendarMonth] = useState<Date>(new Date());
  
  // Step 3: Amount
  const [amount, setAmount] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('rbc-debit');
  
  // Step 4: Reminder
  const [reminderEnabled, setReminderEnabled] = useState(false);
  const [reminderDaysBefore, setReminderDaysBefore] = useState('3');
  const [reminderType, setReminderType] = useState<'text' | 'email' | 'both'>('email');
  const [reminderEmail, setReminderEmail] = useState('');
  const [useOtherEmail, setUseOtherEmail] = useState(false);

  // Step 5: Confirmation
  const [confirmChecked, setConfirmChecked] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPortalContainer(document.getElementById('iphone-screen'));
  }, []);

  const frequencies = [
    { value: 'weekly', label: 'Weekly' },
    { value: 'biweekly', label: 'Bi-weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' },
    { value: 'annually', label: 'Annually' }
  ];

  const paymentMethods = [
    { id: 'rbc-debit', name: 'Royal Bank Debit Card', details: 'Debit ending in 4532' },
    { id: 'td-chequing', name: 'Toronto Dominion Bank', details: 'Chequing ending in 8863' },
    { id: 'visa', name: 'Visa', details: 'Visa ending in 8921' },
    { id: 'mastercard', name: 'Mastercard', details: 'Mastercard ending in 3456' }
  ];

  useEffect(() => {
    if (showCalendar || showFrequencyDropdown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showCalendar, showFrequencyDropdown]);

  const formatDisplayDate = (dateString: string) => {
    if (!dateString) return '';
    // Parse the date string as local time to avoid timezone issues
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const getFrequencyLabel = (value: string) => {
    return frequencies.find(f => f.value === value)?.label || '';
  };

  const handleCalendarConfirm = () => {
    if (tempSelectedDate) {
      const year = tempSelectedDate.getFullYear().toString();
      const month = (tempSelectedDate.getMonth() + 1).toString().padStart(2, '0');
      const day = tempSelectedDate.getDate().toString().padStart(2, '0');
      
      const formattedDate = `${year}-${month}-${day}`;
      setStartDate(formattedDate);
      setCalendarMonth(tempSelectedDate);
    }
    setShowCalendar(false);
    setTempSelectedDate(undefined);
  };

  const handleCalendarCancel = () => {
    setShowCalendar(false);
    setTempSelectedDate(undefined);
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }
  };

  const handleCancel = () => {
    onBack();
  };

  const handleConfirm = () => {
    setCurrentStep(6);
    setConfirmChecked(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  };

  const handleAmountChange = (value: string) => {
    // Allow only numbers and one decimal point
    const filtered = value.replace(/[^0-9.]/g, '');
    // Prevent multiple decimal points
    const parts = filtered.split('.');
    if (parts.length > 2) {
      return; // Don't update if more than one decimal point
    }
    setAmount(filtered);
  };

  const canProceedStep1 = frequency !== '';
  const canProceedStep2 = startDate !== '';
  const canProceedStep3 = amount !== '' && parseFloat(amount) > 0;
  const canProceedStep4 = true; // Optional step
  const canConfirmPayment = confirmChecked;

  return (
    <div className="flex flex-col h-full bg-white relative overflow-hidden">
      {/* Header - Sticky */}
      <div className="flex-shrink-0 sticky top-0 z-10 bg-white">
        <HeaderMaster 
          title="My Account"
          onNavigateHome={onNavigateHome}
          onLogoClick={onNavigateHome}
          hasUnreadMail={hasUnreadMail}
          showSearch={true}
          showMenu={true}
          largeTitle={true}
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
        />
      </div>

      {/* Back Button and Page Title - Sticky */}
      <div className="flex-shrink-0 sticky top-[calc(44px+env(safe-area-inset-top))] z-[5] bg-[#f2f2f7] px-4 pt-2 pb-3">
        <div className="flex items-center gap-3">
          <button
            onClick={currentStep === 1 ? onBack : handlePrevious}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-tight">Instalment payments</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px] mt-2">
          {currentStep === 1 && 'Select how often you want to make instalment payments'}
          {currentStep === 2 && 'Choose when to start your instalment payments'}
          {currentStep === 3 && 'Enter the amount for each instalment payment'}
          {currentStep === 4 && 'Set up optional payment reminders'}
          {currentStep === 5 && 'Review your payment schedule'}
        </p>
      </div>

      {/* Content - Scrollable */}
      <div ref={scrollContainerRef} className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">

        {/* Step Indicator */}
        <div className="px-4 mb-4">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4, 5].map((step, index) => (
              <div key={step} className="flex items-center flex-1">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step < currentStep ? 'bg-[#34c759] text-white' :
                  step === currentStep ? 'bg-[#007AFF] text-white' :
                  'bg-[#e5e5ea] text-[#8e8e93]'
                }`}>
                  {step < currentStep ? <Check className="h-4 w-4" /> : step}
                </div>
                {index < 4 && (
                  <div className={`flex-1 h-0.5 mx-1 ${
                    step < currentStep ? 'bg-[#34c759]' : 'bg-[#e5e5ea]'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4">
          {/* Step 1: Choose Frequency */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Step 1: Choose Payment Frequency</h2>
              <div className="card-ios overflow-hidden mb-4 border-l-4 border-[#34C759]">
                <button
                  onClick={() => setShowFrequencyDropdown(true)}
                  className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex-1">
                      <div className="text-black text-[17px]">Payment Frequency</div>
                      <div className="text-[#8e8e93] text-[15px]">
                        {frequency ? getFrequencyLabel(frequency) : 'Select frequency'}
                      </div>
                    </div>
                    <ChevronDown className="h-5 w-5 text-[#c7c7cc]" />
                  </div>
                </button>
              </div>

              <button
                onClick={handleNext}
                disabled={!canProceedStep1}
                className={`w-full py-3 px-4 rounded-[10px] text-[17px] font-semibold transition-colors text-center mb-6 ${
                  canProceedStep1
                    ? 'bg-[#007AFF] text-white hover:bg-[#0051d5] active:bg-[#004bb8]'
                    : 'bg-[#e5e5ea] text-[#8e8e93] cursor-not-allowed'
                }`}
              >
                Next step
              </button>
            </div>
          )}

          {/* Step 2: Choose Start Date */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Step 2: Choose Starting Date</h2>
              <div className="card-ios overflow-hidden mb-4 border-l-4 border-[#34C759]">
                <button
                  onClick={() => {
                    if (startDate) {
                      // Parse the date string as local time to avoid timezone issues
                      const [year, month, day] = startDate.split('-').map(Number);
                      const date = new Date(year, month - 1, day);
                      setTempSelectedDate(date);
                    } else {
                      setTempSelectedDate(undefined);
                    }
                    setShowCalendar(true);
                  }}
                  className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-black text-[17px]">Start Date</div>
                      <div className="text-[#8e8e93] text-[15px]">
                        {startDate ? formatDisplayDate(startDate) : 'Select start date'}
                      </div>
                    </div>
                    <div className="chevron-button-ios">
                      <ChevronRight />
                    </div>
                  </div>
                </button>
              </div>

              <p className="text-[#8e8e93] text-[15px] px-4 mb-4 leading-relaxed">
                To allow for processing, the first start date that you can select will be the next instalment due date that is at least 10 days from today.
              </p>

              <button
                onClick={handleNext}
                disabled={!canProceedStep2}
                className={`w-full py-3 px-4 rounded-[10px] text-[17px] font-semibold transition-colors text-center mb-6 ${
                  canProceedStep2
                    ? 'bg-[#007AFF] text-white hover:bg-[#0051d5] active:bg-[#004bb8]'
                    : 'bg-[#e5e5ea] text-[#8e8e93] cursor-not-allowed'
                }`}
              >
                Next step
              </button>
            </div>
          )}

          {/* Step 3: Choose Amount */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Step 3: Choose Payment Amount</h2>
              <div className="card-ios overflow-hidden mb-4 border-l-4 border-[#34C759]">
                <div className="px-4 py-3">
                  <Label htmlFor="instalment-amount" className="text-black mb-2 block text-[17px]">Instalment payment amount</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-[18px]">$</span>
                    <Input
                      id="instalment-amount"
                      type="text"
                      inputMode="decimal"
                      value={amount}
                      onChange={(e) => handleAmountChange(e.target.value)}
                      placeholder=""
                      className="h-12 bg-white border-[#c6c6c8] rounded-[8px] pl-8 text-[18px] focus:border-[#007AFF] focus:ring-[#007AFF]"
                    />
                  </div>
                </div>
              </div>

              <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Payment Method</h2>
              <div className="card-ios overflow-hidden mb-4">
                <div className="px-4 py-3">
                  <RadioGroup value={selectedPaymentMethod} onValueChange={setSelectedPaymentMethod}>
                    <div className="space-y-2">
                      {paymentMethods.map((method) => (
                        <div 
                          key={method.id}
                          className={`flex items-center space-x-3 p-3 border-2 transition-colors cursor-pointer rounded-[8px] ${
                            selectedPaymentMethod === method.id 
                              ? 'border-[#007AFF] bg-[#f2f2f7]' 
                              : 'border-[#c6c6c8] hover:border-[#007AFF]'
                          }`}
                          onClick={() => setSelectedPaymentMethod(method.id)}
                        >
                          <RadioGroupItem value={method.id} id={method.id} className="border-[#8e8e93]" />
                          {method.id === 'td-chequing' ? (
                            <Landmark className="h-5 w-5 text-[#007AFF]" />
                          ) : (
                            <CreditCard className="h-5 w-5 text-[#007AFF]" />
                          )}
                          <Label htmlFor={method.id} className="flex-1 cursor-pointer">
                            <div>
                              <div className="text-black text-[17px]">{method.name}</div>
                              <div className="text-black opacity-60 text-[15px]">{method.details}</div>
                            </div>
                          </Label>
                          {selectedPaymentMethod === method.id && (
                            <Check className="h-5 w-5 text-[#007AFF]" />
                          )}
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <button
                onClick={handleNext}
                disabled={!canProceedStep3}
                className={`w-full py-3 px-4 rounded-[10px] text-[17px] font-semibold transition-colors text-center mb-6 ${
                  canProceedStep3
                    ? 'bg-[#007AFF] text-white hover:bg-[#0051d5] active:bg-[#004bb8]'
                    : 'bg-[#e5e5ea] text-[#8e8e93] cursor-not-allowed'
                }`}
              >
                Next step
              </button>
            </div>
          )}

          {/* Step 4: Optional Reminder */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Step 4: Add Optional Reminder</h2>
              <div className="card-ios overflow-hidden mb-4 border-l-4 border-[#34C759]">
                <div className="px-4 py-3 border-b border-[#c6c6c8]">
                  <div className="flex items-center justify-between">
                    <div className="text-black text-[17px]">Enable Reminder</div>
                    <button
                      onClick={() => setReminderEnabled(!reminderEnabled)}
                      className={`relative w-[51px] h-[31px] rounded-full transition-colors ${
                        reminderEnabled ? 'bg-[#34c759]' : 'bg-[#e5e5ea]'
                      }`}
                    >
                      <div className={`absolute top-[2px] w-[27px] h-[27px] rounded-full bg-white shadow-md transition-transform ${
                        reminderEnabled ? 'translate-x-[22px]' : 'translate-x-[2px]'
                      }`} />
                    </button>
                  </div>
                </div>

                {reminderEnabled && (
                  <>
                    <div className="px-4 py-3 border-b border-[#c6c6c8]">
                      <label className="text-black text-[17px] block mb-2">Days Before Payment</label>
                      <input
                        type="number"
                        value={reminderDaysBefore}
                        onChange={(e) => setReminderDaysBefore(e.target.value)}
                        className="w-full bg-[#f2f2f7] border border-[#c6c6c8] rounded-[10px] px-3 py-2 text-black text-[17px]"
                        min="1"
                        max="30"
                      />
                    </div>

                    <div className="px-4 py-3 border-b border-[#c6c6c8]">
                      <div className="text-black text-[17px] mb-3">Notification Type</div>
                      <div className="space-y-2">
                        {[
                          { value: 'text' as const, label: 'Text Message' },
                          { value: 'email' as const, label: 'Email' },
                          { value: 'both' as const, label: 'Both Text & Email' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => setReminderType(option.value)}
                            className="w-full flex items-center justify-between px-3 py-2 rounded-[10px] hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors"
                          >
                            <span className="text-black text-[17px]">{option.label}</span>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              reminderType === option.value
                                ? 'border-[#007AFF] bg-[#007AFF]'
                                : 'border-[#c7c7cc]'
                            }`}>
                              {reminderType === option.value && (
                                <div className="w-2 h-2 rounded-full bg-white" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {(reminderType === 'email' || reminderType === 'both') && (
                      <div className="px-4 py-3">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-black text-[17px]">Add additional Email</div>
                          <button
                            onClick={() => setUseOtherEmail(!useOtherEmail)}
                            className={`relative w-[51px] h-[31px] rounded-full transition-colors ${
                              useOtherEmail ? 'bg-[#34c759]' : 'bg-[#e5e5ea]'
                            }`}
                          >
                            <div className={`absolute top-[2px] w-[27px] h-[27px] rounded-full bg-white shadow-md transition-transform ${
                              useOtherEmail ? 'translate-x-[22px]' : 'translate-x-[2px]'
                            }`} />
                          </button>
                        </div>
                        {!useOtherEmail && (
                          <div className="text-[#8e8e93] text-[15px]">
                            Reminders will be sent to your CRA email
                          </div>
                        )}
                        {useOtherEmail && (
                          <>
                            <input
                              type="email"
                              value={reminderEmail}
                              onChange={(e) => setReminderEmail(e.target.value)}
                              placeholder="Enter email address"
                              className="w-full bg-[#f2f2f7] border border-[#c6c6c8] rounded-[10px] px-3 py-2 text-black text-[17px]"
                            />
                            <div className="text-[#8e8e93] text-[15px] mt-2">
                              Reminders will be sent to your CRA email
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>

              <button
                onClick={handleNext}
                className="w-full py-3 px-4 rounded-[10px] text-[17px] font-semibold bg-[#007AFF] text-white hover:bg-[#0051d5] active:bg-[#004bb8] transition-colors text-center mb-6"
              >
                Next step
              </button>
            </div>
          )}

          {/* Step 5: Confirm Payment */}
          {currentStep === 5 && (
            <div>
              <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Step 5: Confirm Payment Schedule</h2>
              
              {/* Important Notice */}
              <div className="mb-4 p-4 bg-[#fff9e6] border-l-4 border-[#ffcc00] rounded-[10px]">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-[#cc9900] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-[#cc9900] mb-1 text-[17px]">Important</h3>
                    <p className="text-black text-[15px] m-0">
                      Please review all details carefully. Once confirmed, this instalment payment schedule will begin on the selected date.
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Summary */}
              <div className="mb-4 p-4 card-ios border-l-4 border-[#ff3b30]">
                <div className="mb-4">
                  <h3 className="text-black mb-1 text-[17px]">Payment schedule summary</h3>
                  <p className="text-black opacity-80 text-[15px] m-0">Recurring instalment payment details</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-[#c6c6c8]">
                    <span className="text-black opacity-80 text-[17px]">Payment frequency:</span>
                    <span className="text-black text-[17px]">{getFrequencyLabel(frequency)}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-[#c6c6c8]">
                    <span className="text-black opacity-80 text-[17px]">First payment date:</span>
                    <span className="text-black text-[17px]">{formatDisplayDate(startDate)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-black text-[17px]">Instalment amount:</span>
                    <span className="text-[#ff3b30] text-[17px] font-bold">${amount}</span>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-4 p-4 card-ios border-l-4 border-[#ff3b30]">
                <h3 className="text-black mb-4 text-[17px]">Payment method</h3>

                <div className="p-3 bg-[#f2f2f7] border border-[#c6c6c8] rounded-[8px]">
                  <div className="flex items-start gap-3">
                    {selectedPaymentMethod.includes('debit') ? (
                      <div className="h-10 w-10 bg-[#007AFF] rounded-full flex items-center justify-center flex-shrink-0">
                        <Landmark className="h-5 w-5 text-white" />
                      </div>
                    ) : (
                      <div className="h-10 w-10 bg-[#007AFF] rounded-full flex items-center justify-center flex-shrink-0">
                        <CreditCard className="h-5 w-5 text-white" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="text-black text-[17px]">{paymentMethods.find(m => m.id === selectedPaymentMethod)?.name}</div>
                          <div className="text-black opacity-80 text-[15px]">{paymentMethods.find(m => m.id === selectedPaymentMethod)?.details}</div>
                        </div>
                        <div className="h-6 w-6 bg-[#007AFF] rounded-full flex items-center justify-center">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reminder Information */}
              {reminderEnabled && (
                <div className="mb-4 p-4 card-ios">
                  <h3 className="text-black mb-3 text-[17px]">Payment reminders</h3>
                  <div className="space-y-2">
                    <p className="text-black text-[15px] m-0">
                      You will receive a reminder {reminderDaysBefore} days before each payment via {reminderType === 'text' ? 'Text Message' : reminderType === 'email' ? 'Email' : 'Text & Email'}.
                    </p>
                    {(reminderType === 'text' || reminderType === 'both') && (
                      <p className="text-black opacity-80 text-[15px] m-0">
                        Text: (•••) •••-4567
                      </p>
                    )}
                    {(reminderType === 'email' || reminderType === 'both') && (
                      <p className="text-black opacity-80 text-[15px] m-0">
                        Email: {useOtherEmail ? reminderEmail : 'CRA registered email'}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Processing Information */}
              <div className="mb-4 p-4 card-ios">
                <h3 className="text-black mb-3 text-[17px]">Processing information</h3>
                <p className="text-black text-[15px] mb-3 leading-relaxed">
                  Your pre-authorized payment plan will be submitted, but is still subject to review by the CRA. To confirm your plan, you will receive a notification letter in the mail. The CRA will take the steps necessary to withdraw from your financial institution the funds you have authorized at the payment interval you have chosen.
                </p>
                <ul className="space-y-2 ml-5 text-black text-[15px] list-disc">
                  <li>Funds will be withdrawn on the scheduled payment dates</li>
                  <li>Payments will be posted to your CRA account within 1-2 business days</li>
                  <li>You can modify or cancel this schedule anytime in your My Account settings</li>
                  <li>Confirmation will be sent to your My CRA Mail</li>
                </ul>
              </div>

              {/* Confirmation Checkbox */}
              <div className="mb-4 p-4 card-ios">
                <p className="text-black text-[15px] mb-3 m-0">
                  I confirm that I have reviewed all payment details and authorize the Canada Revenue Agency to withdraw the amount of <span className="text-[#ff3b30] font-bold">${amount}</span> on a {getFrequencyLabel(frequency).toLowerCase()} basis starting {formatDisplayDate(startDate)} using {paymentMethods.find(m => m.id === selectedPaymentMethod)?.name}.
                </p>
                <div className="flex items-center gap-3">
                  <Checkbox 
                    id="confirm-instalment" 
                    checked={confirmChecked}
                    onCheckedChange={(checked) => setConfirmChecked(checked as boolean)}
                    className="border-2 border-[#007AFF]"
                  />
                  <Label 
                    htmlFor="confirm-instalment" 
                    className="text-[#007AFF] text-[17px] cursor-pointer font-bold"
                  >
                    I confirm
                  </Label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-4">
                <button 
                  onClick={handleConfirm}
                  disabled={!canConfirmPayment}
                  className={`w-full py-3 rounded-[10px] transition-opacity h-12 flex items-center justify-center text-white border-0 ${
                    canConfirmPayment 
                      ? 'bg-[#007AFF] hover:opacity-90 active:opacity-80' 
                      : 'bg-[#c6c6c8] cursor-not-allowed'
                  }`}
                >
                  <span className="text-[17px]">Submit payment schedule</span>
                </button>
                <button 
                  onClick={handleCancel}
                  className="w-full bg-white border border-[#007AFF] py-3 rounded-[10px] transition-colors hover:bg-[#f2f2f7] active:bg-[#e5e5ea] h-12 flex items-center justify-center text-[#007AFF]"
                >
                  <span className="text-[17px]">Cancel</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 6: Success */}
          {currentStep === 6 && (
            <div>
              <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Payment Schedule Submitted</h2>
              
              {/* Success Banner */}
              <div className="mb-4 p-6 card-ios border-l-4 border-[#28a745]">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 bg-[#28a745] rounded-full flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-[#28a745] font-semibold mb-2 m-0 text-[20px]">Schedule confirmed</h2>
                    <p className="text-black text-[15px] m-0">
                      Your instalment payment schedule of <span className="text-[#28a745] font-semibold">${amount}</span> on a {getFrequencyLabel(frequency).toLowerCase()} basis has been set up successfully.
                    </p>
                  </div>
                </div>
              </div>

              {/* Confirmation Details */}
              <div className="mb-4 p-4 card-ios border-l-4 border-[#007AFF]">
                <div className="mb-4">
                  <h3 className="text-black mb-1 text-[17px]">Schedule details</h3>
                  <p className="text-black opacity-80 text-[15px] m-0">The details of your payment schedule will be sent to your CRA mailbox</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-start pb-3 border-b border-[#c6c6c8]">
                    <span className="text-black opacity-80 text-[17px]">Confirmation number:</span>
                    <div className="text-right">
                      <div className="text-black text-[17px]">CRA{Date.now().toString().slice(-8)}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start pb-3 border-b border-[#c6c6c8]">
                    <span className="text-black opacity-80 text-[17px]">Payment amount:</span>
                    <div className="text-right">
                      <div className="text-[#28a745] font-semibold text-[17px]">${amount}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start pb-3 border-b border-[#c6c6c8]">
                    <span className="text-black opacity-80 text-[17px]">Payment frequency:</span>
                    <div className="text-right">
                      <div className="text-black text-[17px]">{getFrequencyLabel(frequency)}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start pb-3 border-b border-[#c6c6c8]">
                    <span className="text-black opacity-80 text-[17px]">First payment date:</span>
                    <div className="text-right">
                      <div className="text-black text-[17px]">{formatDisplayDate(startDate)}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start pb-3 border-b border-[#c6c6c8]">
                    <span className="text-black opacity-80 text-[17px]">Payment method:</span>
                    <div className="text-right">
                      <div className="text-black text-[17px]">{paymentMethods.find(m => m.id === selectedPaymentMethod)?.name}</div>
                      <div className="text-black opacity-80 text-[15px]">{paymentMethods.find(m => m.id === selectedPaymentMethod)?.details}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-black opacity-80 text-[17px]">Payment for:</span>
                    <div className="text-right">
                      <div className="text-black text-[17px]">Tax instalments</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="mb-4 p-4 card-ios">
                <h3 className="text-black mb-3 text-[17px]">What happens next</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-[15px]">
                      1
                    </div>
                    <div className="flex-1">
                      <p className="text-black text-[15px] m-0">
                        Your first payment will be processed<br />on {formatDisplayDate(startDate)}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-[15px]">
                      2
                    </div>
                    <div className="flex-1">
                      <p className="text-black text-[15px] m-0">
                        {reminderEnabled ? `You will receive reminders ${reminderDaysBefore} days before each payment` : 'Payments will continue on the scheduled frequency'}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-[15px]">
                      3
                    </div>
                    <div className="flex-1">
                      <p className="text-black text-[15px] m-0">
                        Your account balance will be updated as each payment is posted
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-[15px]">
                      4
                    </div>
                    <div className="flex-1">
                      <p className="text-black text-[15px] m-0">
                        Payment receipts will be available in your My CRA Mail area
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-[15px]">
                      5
                    </div>
                    <div className="flex-1">
                      <p className="text-black text-[15px] m-0">
                        Your pre-authorized payment plan will be submitted, but is still subject to review by the CRA. To confirm your plan, you will receive a notification letter in the mail. The CRA will take the steps necessary to withdraw from your financial institution the funds you have authorized at the payment interval you have chosen.
                      </p>
                    </div>
                  </div>
                  {reminderEnabled && (
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-[15px]">
                        6
                      </div>
                      <div className="flex-1">
                        <p className="text-black text-[15px] m-0">
                          Reminders will be sent {reminderDaysBefore} days before each payment via {reminderType === 'text' ? 'text message' : reminderType === 'email' ? 'email' : 'text message and email'}
                          {(reminderType === 'text' || reminderType === 'both') && (
                            <span className="block mt-1 opacity-80">Text: (•••) •••-4567</span>
                          )}
                          {(reminderType === 'email' || reminderType === 'both') && (
                            <span className="block mt-1 opacity-80">Email: {useOtherEmail ? reminderEmail : 'CRA email'}</span>
                          )}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Schedule Notice */}
              <div className="mb-4 p-4 bg-[#fff9e6] border-l-4 border-[#ffcc00] rounded-[10px]">
                <div className="flex gap-3">
                  <FileText className="h-5 w-5 text-[#cc9900] flex-shrink-0" />
                  <div>
                    <h4 className="text-[#cc9900] mb-1 m-0 text-[17px]">Manage your schedule</h4>
                    <p className="text-black text-[15px] m-0">
                      You can view, modify, or cancel this payment schedule anytime in your Profile settings under "Instalment payments".
                    </p>
                  </div>
                </div>
              </div>

              {/* Return Home Button */}
              <div className="mb-4">
                <button 
                  onClick={onBack}
                  className="w-full bg-[#007AFF] py-3 rounded-[10px] transition-colors hover:opacity-90 active:opacity-80 h-12 flex items-center justify-center text-white"
                >
                  <span className="text-[17px]">Return to Profile</span>
                </button>
              </div>
            </div>
          )}

          {/* Help Section */}
          <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Need Help?</h2>
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="what-are-instalments" className="card-ios overflow-hidden border-l-4 border-[#007AFF]">
              <AccordionTrigger className="text-black hover:no-underline py-3 px-4 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] text-[15px]">
                What are instalment payments?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <p className="text-black text-[15px] m-0 opacity-80 mb-3">
                  Instalment payments help you spread out your tax payments throughout the year. Reminders notify you when payments are due.
                </p>
                <p className="text-black text-[15px] m-0 opacity-80">
                  You can set up instalment payments with the CRA primarily through pre-authorized debit (PAD) above or My Business Account (for businesses), or through your own online banking service.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="online-banking" className="card-ios overflow-hidden border-l-4 border-[#007AFF]">
              <AccordionTrigger className="text-black hover:no-underline py-3 px-4 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] text-[15px]">
                How to pay via online banking
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <p className="text-black text-[15px] m-0 opacity-80 mb-3">
                  You can also use your bank or credit union's online banking service to make payments, either as a one-time payment or a series of future payments.
                </p>
                <div className="ml-2">
                  <p className="text-black text-[15px] m-0 opacity-80 mb-2">
                    <strong>Sign in:</strong> Log in to your bank's online banking website or mobile app.
                  </p>
                  <p className="text-black text-[15px] m-0 opacity-80 mb-2">
                    <strong>Add the CRA as a payee:</strong> Search for the Canada Revenue Agency and select the correct option, typically "CRA (revenue) – tax instalment".
                  </p>
                  <p className="text-black text-[15px] m-0 opacity-80 mb-2">
                    <strong>Enter account number:</strong>
                  </p>
                  <ul className="list-disc ml-6 mb-2">
                    <li className="text-black text-[15px] opacity-80 mb-1">For individuals, use your 9-digit social insurance number (SIN).</li>
                    <li className="text-black text-[15px] opacity-80 mb-1">For businesses, use your 15-digit business number.</li>
                  </ul>
                  <p className="text-black text-[15px] m-0 opacity-80">
                    <strong>Enter payment details:</strong> Enter the amount and the date you want the payment to be processed.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="other-methods" className="card-ios overflow-hidden border-l-4 border-[#007AFF]">
              <AccordionTrigger className="text-black hover:no-underline py-3 px-4 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] text-[15px]">
                Other payment methods
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <ul className="list-disc ml-6">
                  <li className="text-black text-[15px] opacity-80 mb-2"><strong>CRA My Payment service:</strong> Use your Visa Debit or Interac Online card directly through the CRA website's "My Payment" service.</li>
                  <li className="text-black text-[15px] opacity-80 mb-2"><strong>Third-party service provider:</strong> Pay by credit card, PayPal, or Interac e-Transfer through a third-party service like PaySimply (service fees apply).</li>
                  <li className="text-black text-[15px] opacity-80"><strong>Mail:</strong> Send a post-dated cheque with a personalized remittance voucher (Form INNS3 or RC160 for corporations).</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="important-notes" className="card-ios overflow-hidden border-l-4 border-[#007AFF]">
              <AccordionTrigger className="text-black hover:no-underline py-3 px-4 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] text-[15px]">
                Important notes
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <ul className="list-disc ml-6">
                  <li className="text-black text-[15px] opacity-80 mb-2">If you choose a fixed payment amount that is different from the CRA's suggested amount, you are responsible for ensuring it is enough to avoid interest and penalties.</li>
                  <li className="text-black text-[15px] opacity-80 mb-2">You can view your instalment reminders and payment history in your CRA My Account.</li>
                  <li className="text-black text-[15px] opacity-80">If you have trouble setting up payments online or need to discuss a specific payment arrangement for existing debt, you can call the CRA's automated service at 1-800-959-8281.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="contact-support" className="card-ios overflow-hidden border-l-4 border-[#007AFF]">
              <AccordionTrigger className="text-black hover:no-underline py-3 px-4 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] text-[15px]">
                Contact CRA support
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <p className="text-black text-[15px] m-0 mb-3 opacity-80">
                  If you're having trouble setting up your instalment payment schedule, contact CRA support.
                </p>
                <button className="text-[#007AFF] text-[17px] bg-transparent border-0 p-0 transition-opacity hover:opacity-70 active:opacity-50">
                  Contact CRA support →
                </button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Frequency Dropdown Modal */}
      <AnimatePresence>
        {showFrequencyDropdown && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/30 z-40"
              onClick={() => setShowFrequencyDropdown(false)}
            />
            
            {/* Dropdown Panel */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[12px] shadow-lg z-50 overflow-hidden"
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#c6c6c8]">
                <button
                  onClick={() => setShowFrequencyDropdown(false)}
                  className="text-[#007AFF] text-[17px] bg-transparent border-0 cursor-pointer hover:opacity-70 active:opacity-50 transition-opacity"
                >
                  Cancel
                </button>
                <h2 className="text-[17px] font-semibold text-black m-0">Select Frequency</h2>
                <div className="w-[60px]" />
              </div>
              <div className="max-h-[300px] overflow-y-auto">
                {frequencies.map((freq) => (
                  <button
                    key={freq.value}
                    onClick={() => {
                      setFrequency(freq.value);
                      setShowFrequencyDropdown(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors border-b border-[#c6c6c8] last:border-b-0"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-black text-[17px]">{freq.label}</span>
                      {frequency === freq.value && (
                        <Check className="h-5 w-5 text-[#007AFF]" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Calendar Modal */}
      {showCalendar && portalContainer && createPortal(
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 z-[100] flex items-end justify-center bg-black/40"
          onClick={handleCalendarCancel}
        >
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="bg-white w-full rounded-t-[20px] shadow-lg max-h-[75vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center pt-2 pb-1">
              <div className="w-10 h-1 bg-[#c7c7cc] rounded-full"></div>
            </div>
            <div className="p-4">
              <h2 className="text-black mb-3 text-[17px] text-center font-semibold">Instalment start date</h2>
              <Calendar
                mode="single"
                selected={tempSelectedDate}
                month={calendarMonth}
                onMonthChange={setCalendarMonth}
                onSelect={setTempSelectedDate}
                disabled={(date) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  const minDate = new Date(today);
                  minDate.setDate(today.getDate() + 10);
                  return date < minDate;
                }}
                className="w-full"
                recurringFrequency={frequency as 'weekly' | 'biweekly' | 'monthly' | 'quarterly' | 'annually' || null}
                recurringStartDate={tempSelectedDate}
                selectedDateTooltip="Instalment withdrawal"
              />
              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleCalendarCancel}
                  className="flex-1 py-3 text-[#007AFF] bg-white hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors rounded-[10px] border border-[#007AFF] text-[17px] text-center"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCalendarConfirm}
                  className="flex-1 py-3 text-white bg-[#007AFF] hover:opacity-90 active:opacity-80 transition-opacity rounded-[10px] border-0 text-[17px] text-center"
                >
                  Confirm
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>,
        portalContainer
      )}
    </div>
  );
}