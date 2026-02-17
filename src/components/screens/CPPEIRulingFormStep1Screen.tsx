import { ChevronLeft, CheckCircle } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';
import { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Calendar } from '../ui/calendar';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { IPhoneNumericKeyboard } from '../IPhoneNumericKeyboard';
import { toast } from 'sonner@2.0.3';
import { StepIndicator } from '../StepIndicator';

interface CPPEIRulingFormStep1ScreenProps {
  onBack: () => void;
  onNext?: () => void;
  onStepClick?: (step: number) => void;
  onNavigateHome?: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onViewMail?: () => void;
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
  onBecomeRepresentative?: () => void;
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
  // Form data props
  requester: 'worker' | 'workerRep' | 'payer' | 'payerRep' | null;
  setRequester: (value: 'worker' | 'workerRep' | 'payer' | 'payerRep' | null) => void;
  rulingReason: 'employeeOrSelfEmployed' | 'relatedToEmployer' | 'shareholder' | 'foreignNational' | 'other' | null;
  setRulingReason: (value: 'employeeOrSelfEmployed' | 'relatedToEmployer' | 'shareholder' | 'foreignNational' | 'other' | null) => void;
  relationship: string;
  setRelationship: (value: string) => void;
  otherReason: string;
  setOtherReason: (value: string) => void;
  isRestructuring: 'yes' | 'no' | null;
  setIsRestructuring: (value: 'yes' | 'no' | null) => void;
  restructuringDate: string;
  setRestructuringDate: (value: string) => void;
}

export function CPPEIRulingFormStep1Screen({
  onBack,
  onNext,
  onStepClick,
  onNavigateHome,
  onFileTaxes,
  onMakePayment,
  onBenefitsAndCredits,
  onRegisteredPlans,
  onHelp,
  onSignOut,
  onTaxSlips,
  onProofOfIncome,
  onViewMail,
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
  onBecomeRepresentative,
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
}: CPPEIRulingFormStep1ScreenProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // Part A - Request
  const [requester, setRequester] = useState<'worker' | 'workerRep' | 'payer' | 'payerRep' | null>(null);
  const [rulingReason, setRulingReason] = useState<'employeeOrSelfEmployed' | 'relatedToEmployer' | 'shareholder' | 'foreignNational' | 'other' | null>(null);
  const [relationship, setRelationship] = useState('');
  const [otherReason, setOtherReason] = useState('');
  const [isRestructuring, setIsRestructuring] = useState<'yes' | 'no' | null>(null);
  const [restructuringDate, setRestructuringDate] = useState('');

  // Keyboard and Calendar states
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<'restructuring' | null>(null);
  const [activeCalendar, setActiveCalendar] = useState<'restructuring' | null>(null);
  const [tempSelectedDate, setTempSelectedDate] = useState<Date | undefined>(undefined);
  const [calendarMonth, setCalendarMonth] = useState(new Date());
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalContainer(document.getElementById('iphone-screen'));
  }, []);

  const formatDate = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 4) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 4)}-${numbers.slice(4)}`;
    return `${numbers.slice(0, 4)}-${numbers.slice(4, 6)}-${numbers.slice(6, 8)}`;
  };

  const getDateFromFields = (dateValue: string) => {
    const numbers = dateValue.replace(/\D/g, '');
    if (numbers.length === 8) {
      const year = parseInt(numbers.slice(0, 4));
      const month = parseInt(numbers.slice(4, 6));
      const day = parseInt(numbers.slice(6, 8));
      
      if (year && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
        return new Date(year, month - 1, day);
      }
    }
    return undefined;
  };

  const handleCalendarOpen = (field: 'restructuring') => {
    // Hide keyboard if it's visible
    if (showKeyboard) {
      setShowKeyboard(false);
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    }

    setActiveCalendar(field);
    
    const dateValue = restructuringDate;

    const enteredDate = getDateFromFields(dateValue);
    if (enteredDate) {
      setCalendarMonth(enteredDate);
      setTempSelectedDate(enteredDate);
    } else {
      setTempSelectedDate(undefined);
    }
  };

  const handleCalendarSelect = (date: Date | undefined) => {
    setTempSelectedDate(date);
  };

  const handleCalendarCancel = () => {
    setActiveCalendar(null);
    setTempSelectedDate(undefined);
  };

  const handleCalendarConfirm = () => {
    if (tempSelectedDate) {
      const year = tempSelectedDate.getFullYear().toString();
      const month = (tempSelectedDate.getMonth() + 1).toString().padStart(2, '0');
      const day = tempSelectedDate.getDate().toString().padStart(2, '0');
      
      const formattedDate = `${year}-${month}-${day}`;
      
      if (activeCalendar === 'restructuring') {
        setRestructuringDate(formattedDate);
      }
      setCalendarMonth(tempSelectedDate);
    }
    setActiveCalendar(null);
    setTempSelectedDate(undefined);
  };

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      if (activeField === 'restructuring') {
        setRestructuringDate(prev => {
          const numbers = prev.replace(/\D/g, '');
          return formatDate(numbers.slice(0, -1));
        });
      }
    } else {
      if (activeField === 'restructuring') {
        const currentNumbers = restructuringDate.replace(/\D/g, '');
        if (currentNumbers.length < 8) {
          setRestructuringDate(formatDate(currentNumbers + key));
        }
      }
    }
  };

  const handleDateChange = (field: 'restructuring', value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 8) {
      if (field === 'restructuring') {
        setRestructuringDate(formatDate(numbers));
      }
    }
  };

  const handleKeyboardDone = () => {
    setShowKeyboard(false);
    setActiveField(null);
  };

  // Scroll to active field when keyboard appears
  useEffect(() => {
    if (showKeyboard && activeField && scrollContainerRef.current) {
      const timer = setTimeout(() => {
        const activeInput = document.activeElement as HTMLElement;
        if (activeInput && scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const inputRect = activeInput.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const keyboardHeight = 260; // Approximate keyboard height
          const targetScroll = inputRect.top - containerRect.top + container.scrollTop - 100;
          
          container.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
          });
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [showKeyboard, activeField]);

  const handleContinue = () => {
    // Validate required fields
    if (!requester || !rulingReason) {
      toast.error('Please complete all required fields before continuing.');
      return;
    }
    
    if (rulingReason === 'relatedToEmployer' && !relationship) {
      toast.error('Please specify the relationship to the employer.');
      return;
    }
    
    if (rulingReason === 'other' && !otherReason) {
      toast.error('Please specify the other reason.');
      return;
    }
    
    if (isRestructuring === null) {
      toast.error('Please indicate if this is an employer restructuring request.');
      return;
    }
    
    if (isRestructuring === 'yes' && !restructuringDate) {
      toast.error('Please provide the restructuring date.');
      return;
    }
    
    // Navigate to next step
    if (onNext) {
      onNext();
    }
  };

  // Check if form has minimum required entries to enable Continue button
  const isFormStarted = requester !== null || rulingReason !== null || isRestructuring !== null;

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
        onLifelongLearningPlan={onLifelongLearningPlan}
        onCustomize={onCustomize}
        onUncashedCheques={onUncashedCheques}
        onBecomeRepresentative={onBecomeRepresentative}
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
        <div className="flex items-center gap-3 mb-2">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">
            Request a ruling
          </h1>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="flex-shrink-0 bg-[#f2f2f7]">
        <StepIndicator currentStep={1} totalSteps={5} onStepClick={onStepClick} />
      </div>

      {/* Scrollable Content */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto px-4 pb-32">
        {/* Part A - Request */}
        <div className="bg-white rounded-[10px] overflow-hidden mb-4">
          <div className="p-4 border-b border-[#E5E5EA]">
            <h2 className="text-[17px] text-black font-semibold">
              Part A – Request
            </h2>
          </div>
          
          <div className="p-4">
            {/* Who is asking for the ruling? */}
            <div className="mb-6">
              <label className="block text-[15px] text-black font-semibold mb-3">
                Who is asking for the ruling?
              </label>
              <div className="space-y-2">
                {[
                  { value: 'worker', label: 'Worker' },
                  { value: 'workerRep', label: "Worker's representative" },
                  { value: 'payer', label: 'Payer' },
                  { value: 'payerRep', label: "Payer's representative" }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setRequester(option.value as any)}
                    className="w-full flex items-center gap-3 p-3 rounded-[10px] border border-[#E5E5EA] hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left"
                  >
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                      requester === option.value 
                        ? 'border-[#007AFF] bg-[#007AFF]' 
                        : 'border-[#8E8E93]'
                    }`}>
                      {requester === option.value && (
                        <CheckCircle className="w-4 h-4 text-white" strokeWidth={3} />
                      )}
                    </div>
                    <span className="text-[15px] text-black">{option.label}</span>
                  </button>
                ))}
              </div>
              {(requester === 'workerRep' || requester === 'payerRep') && (
                <div className="mt-3 p-3 bg-[#E8F4FD] rounded-[10px]">
                  <p className="text-[13px] text-[#1D1D1F] leading-[18px]">
                    <strong>Note:</strong> If you are a representative, attach your client's consent form (AUT-01 or CPT139) or a letter authorizing the Canada Revenue Agency (CRA) to discuss confidential matters with you, unless already filed with the CRA.
                  </p>
                </div>
              )}
            </div>

            {/* Why do you want a ruling? */}
            <div className="mb-6">
              <label className="block text-[15px] text-black font-semibold mb-3">
                Why do you want a ruling?
              </label>
              <div className="space-y-2">
                <button
                  onClick={() => setRulingReason('employeeOrSelfEmployed')}
                  className="w-full flex items-start gap-3 p-3 rounded-[10px] border border-[#E5E5EA] hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left"
                >
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    rulingReason === 'employeeOrSelfEmployed' 
                      ? 'border-[#007AFF] bg-[#007AFF]' 
                      : 'border-[#8E8E93]'
                  }`}>
                    {rulingReason === 'employeeOrSelfEmployed' && (
                      <CheckCircle className="w-4 h-4 text-white" strokeWidth={3} />
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="text-[15px] text-black">Not sure if a worker is an employee or is self-employed.</span>
                    <p className="text-[13px] text-[#8E8E93] mt-1">Include a copy of any employment contract.</p>
                  </div>
                </button>

                <button
                  onClick={() => setRulingReason('relatedToEmployer')}
                  className="w-full flex items-start gap-3 p-3 rounded-[10px] border border-[#E5E5EA] hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left"
                >
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    rulingReason === 'relatedToEmployer' 
                      ? 'border-[#007AFF] bg-[#007AFF]' 
                      : 'border-[#8E8E93]'
                  }`}>
                    {rulingReason === 'relatedToEmployer' && (
                      <CheckCircle className="w-4 h-4 text-white" strokeWidth={3} />
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="text-[15px] text-black">Worker is related to the employer, and not sure if employment is insurable.</span>
                  </div>
                </button>
                {rulingReason === 'relatedToEmployer' && (
                  <div className="ml-8">
                    <label className="block text-[13px] text-[#8E8E93] mb-1">State relationship:</label>
                    <input
                      type="text"
                      value={relationship}
                      onChange={(e) => setRelationship(e.target.value)}
                      className="w-full px-3 py-2 text-[15px] border border-[#E5E5EA] rounded-[10px] focus:outline-none focus:border-[#007AFF]"
                      placeholder="e.g., Spouse, Parent, Child"
                    />
                  </div>
                )}

                <button
                  onClick={() => setRulingReason('shareholder')}
                  className="w-full flex items-start gap-3 p-3 rounded-[10px] border border-[#E5E5EA] hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left"
                >
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    rulingReason === 'shareholder' 
                      ? 'border-[#007AFF] bg-[#007AFF]' 
                      : 'border-[#8E8E93]'
                  }`}>
                    {rulingReason === 'shareholder' && (
                      <CheckCircle className="w-4 h-4 text-white" strokeWidth={3} />
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="text-[15px] text-black">Worker is a shareholder, and not sure if employment is insurable.</span>
                    <p className="text-[13px] text-[#8E8E93] mt-1">Include a copy of the articles of incorporation and the shareholder registry.</p>
                  </div>
                </button>

                <button
                  onClick={() => setRulingReason('foreignNational')}
                  className="w-full flex items-start gap-3 p-3 rounded-[10px] border border-[#E5E5EA] hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left"
                >
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    rulingReason === 'foreignNational' 
                      ? 'border-[#007AFF] bg-[#007AFF]' 
                      : 'border-[#8E8E93]'
                  }`}>
                    {rulingReason === 'foreignNational' && (
                      <CheckCircle className="w-4 h-4 text-white" strokeWidth={3} />
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="text-[15px] text-black">Worker is a foreign national in Canada, and not sure if employment is pensionable or insurable.</span>
                    <p className="text-[13px] text-[#8E8E93] mt-1">Include a copy of the work or study permit.</p>
                  </div>
                </button>

                <button
                  onClick={() => setRulingReason('other')}
                  className="w-full flex items-start gap-3 p-3 rounded-[10px] border border-[#E5E5EA] hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left"
                >
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    rulingReason === 'other' 
                      ? 'border-[#007AFF] bg-[#007AFF]' 
                      : 'border-[#8E8E93]'
                  }`}>
                    {rulingReason === 'other' && (
                      <CheckCircle className="w-4 h-4 text-white" strokeWidth={3} />
                    )}
                  </div>
                  <span className="text-[15px] text-black">Other reason</span>
                </button>
                {rulingReason === 'other' && (
                  <div className="ml-8">
                    <label className="block text-[13px] text-[#8E8E93] mb-1">Please specify:</label>
                    <textarea
                      value={otherReason}
                      onChange={(e) => setOtherReason(e.target.value)}
                      className="w-full px-3 py-2 text-[15px] border border-[#E5E5EA] rounded-[10px] focus:outline-none focus:border-[#007AFF] min-h-[80px]"
                      placeholder="Describe the reason for your ruling request"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Is this an employer restructuring request? */}
            <div className="mb-6">
              <label className="block text-[15px] text-black font-semibold mb-2">
                Is this an employer restructuring request?
              </label>
              <p className="text-[13px] text-[#8E8E93] mb-3 leading-[18px]">
                Tick "Yes", if you do not know if the employees' employment is continuous (and if the employer can consider the amount of CPP contributions and EI premiums previously withheld during the year). Only fill out parts D and E and include a copy of the contractual agreement with the former employer.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setIsRestructuring('yes')}
                  className={`flex-1 py-3 px-4 rounded-[10px] border-2 text-[15px] font-semibold transition-all ${
                    isRestructuring === 'yes'
                      ? 'border-[#007AFF] bg-[#007AFF] text-white'
                      : 'border-[#E5E5EA] bg-white text-black hover:bg-[#f2f2f7]'
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => setIsRestructuring('no')}
                  className={`flex-1 py-3 px-4 rounded-[10px] border-2 text-[15px] font-semibold transition-all ${
                    isRestructuring === 'no'
                      ? 'border-[#007AFF] bg-[#007AFF] text-white'
                      : 'border-[#E5E5EA] bg-white text-black hover:bg-[#f2f2f7]'
                  }`}
                >
                  No
                </button>
              </div>
              {isRestructuring === 'yes' && (
                <div className="mt-3 p-4 bg-white border border-[#E5E5EA] rounded-[10px]">
                  <Label className="text-black text-[17px] block mb-2">Date of the restructuring</Label>
                  <div className="flex gap-2 items-center">
                    <Input
                      type="text"
                      inputMode="none"
                      placeholder="yyyy-mm-dd"
                      value={restructuringDate}
                      onChange={(e) => handleDateChange('restructuring', e.target.value)}
                      onFocus={() => {
                        setActiveField('restructuring');
                        setShowKeyboard(true);
                      }}
                      className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF] flex-1 font-mono"
                      maxLength={10}
                    />
                    <button
                      type="button"
                      onClick={() => handleCalendarOpen('restructuring')}
                      className="flex items-center justify-center bg-transparent hover:opacity-70 active:opacity-50 transition-opacity p-1 border-0"
                      aria-label="Open calendar"
                    >
                      <CalendarIcon className="h-7 w-7 text-[#007AFF]" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="flex-shrink-0 bg-white border-t border-[#E5E5EA] p-4">
        <button
          onClick={handleContinue}
          disabled={!isFormStarted}
          className={`w-full py-3 px-4 rounded-[10px] transition-all ${
            isFormStarted
              ? 'bg-[#007AFF] text-white hover:bg-[#0051D5] active:bg-[#004BB8]'
              : 'bg-[#E5E5EA] text-[#8E8E93] cursor-not-allowed'
          }`}
        >
          Continue to Step 2
        </button>
      </div>

      {/* Calendar Modal */}
      {activeCalendar && portalContainer && createPortal(
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
              <h2 className="text-black mb-3 text-[17px] text-center font-semibold">
                Date of the restructuring
              </h2>
              <Calendar
                mode="single"
                selected={tempSelectedDate}
                month={calendarMonth}
                onMonthChange={setCalendarMonth}
                onSelect={handleCalendarSelect}
                className="w-full"
                selectedDateTooltip="Restructuring date"
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

      <AnimatePresence>
        {showKeyboard && <IPhoneNumericKeyboard key="keyboard" onKeyPress={handleKeyPress} onDone={handleKeyboardDone} />}
      </AnimatePresence>
    </div>
  );
}