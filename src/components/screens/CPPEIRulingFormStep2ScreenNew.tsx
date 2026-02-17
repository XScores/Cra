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
import { StepIndicator } from '../StepIndicator';

interface CPPEIRulingFormStep2ScreenNewProps {
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
}

export function CPPEIRulingFormStep2ScreenNew({
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
  onCPPEIRuling
}: CPPEIRulingFormStep2ScreenNewProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Part B - Period of employment
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isOngoing, setIsOngoing] = useState(false);

  // Keyboard and Calendar states
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<'start' | 'end' | null>(null);
  const [activeCalendar, setActiveCalendar] = useState<'start' | 'end' | null>(null);
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

  const handleCalendarOpen = (field: 'start' | 'end') => {
    // Hide keyboard if it's visible
    if (showKeyboard) {
      setShowKeyboard(false);
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    }

    setActiveCalendar(field);
    
    let dateValue = '';
    if (field === 'start') dateValue = startDate;
    else if (field === 'end') dateValue = endDate;

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
    if (tempSelectedDate && activeCalendar) {
      const year = tempSelectedDate.getFullYear();
      const month = String(tempSelectedDate.getMonth() + 1).padStart(2, '0');
      const day = String(tempSelectedDate.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;

      if (activeCalendar === 'start') {
        setStartDate(formattedDate);
      } else if (activeCalendar === 'end') {
        setEndDate(formattedDate);
      }
    }
    setActiveCalendar(null);
    setTempSelectedDate(undefined);
  };

  const handleDateChange = (field: 'start' | 'end', value: string) => {
    const formatted = formatDate(value);
    if (field === 'start') {
      setStartDate(formatted);
    } else if (field === 'end') {
      setEndDate(formatted);
    }
  };

  const handleKeyPress = (key: string) => {
    if (!activeField) return;

    if (key === 'delete') {
      if (activeField === 'start') {
        setStartDate(prev => prev.slice(0, -1));
      } else if (activeField === 'end') {
        setEndDate(prev => prev.slice(0, -1));
      }
    } else {
      const currentValue = activeField === 'start' ? startDate : endDate;
      const numbers = currentValue.replace(/\D/g, '');
      
      if (numbers.length < 8) {
        const newValue = formatDate(numbers + key);
        if (activeField === 'start') {
          setStartDate(newValue);
        } else if (activeField === 'end') {
          setEndDate(newValue);
        }
      }
    }
  };

  const isFormStarted = startDate.length > 0;

  const handleContinue = () => {
    if (isFormStarted && onNext) {
      onNext();
    }
  };

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
        <StepIndicator currentStep={2} totalSteps={5} onStepClick={onStepClick} />
      </div>

      {/* Scrollable Content */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto px-4 pb-32">
        {/* Part B - Period of employment */}
        <div className="bg-white rounded-[10px] overflow-hidden mb-4">
          <div className="p-4 border-b border-[#E5E5EA]">
            <h2 className="text-[17px] text-black font-semibold">
              Part B – Period of employment
            </h2>
          </div>
          
          <div className="p-4 space-y-4">
            {/* Start date */}
            <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px]">
              <Label className="text-black text-[17px] block mb-2">Start date</Label>
              <div className="flex gap-2 items-center">
                <Input
                  type="text"
                  inputMode="none"
                  placeholder="yyyy-mm-dd"
                  value={startDate}
                  onChange={(e) => handleDateChange('start', e.target.value)}
                  onFocus={() => {
                    setActiveField('start');
                    setShowKeyboard(true);
                  }}
                  className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF] flex-1 font-mono"
                  maxLength={10}
                />
                <button
                  type="button"
                  onClick={() => handleCalendarOpen('start')}
                  className="flex items-center justify-center bg-transparent hover:opacity-70 active:opacity-50 transition-opacity p-1 border-0"
                  aria-label="Open calendar"
                >
                  <CalendarIcon className="h-7 w-7 text-[#007AFF]" />
                </button>
              </div>
            </div>

            {/* End date */}
            {!isOngoing && (
              <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px]">
                <Label className="text-black text-[17px] block mb-2">End date</Label>
                <div className="flex gap-2 items-center">
                  <Input
                    type="text"
                    inputMode="none"
                    placeholder="yyyy-mm-dd"
                    value={endDate}
                    onChange={(e) => handleDateChange('end', e.target.value)}
                    onFocus={() => {
                      setActiveField('end');
                      setShowKeyboard(true);
                    }}
                    className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF] flex-1 font-mono"
                    maxLength={10}
                  />
                  <button
                    type="button"
                    onClick={() => handleCalendarOpen('end')}
                    className="flex items-center justify-center bg-transparent hover:opacity-70 active:opacity-50 transition-opacity p-1 border-0"
                    aria-label="Open calendar"
                  >
                    <CalendarIcon className="h-7 w-7 text-[#007AFF]" />
                  </button>
                </div>
              </div>
            )}
            
            {/* Employment is ongoing checkbox */}
            <button
              onClick={() => {
                setIsOngoing(!isOngoing);
                if (!isOngoing) setEndDate('');
              }}
              className="flex items-center gap-3 p-3 rounded-[10px] hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors w-full"
            >
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                isOngoing 
                  ? 'border-[#007AFF] bg-[#007AFF]' 
                  : 'border-[#8E8E93]'
              }`}>
                {isOngoing && (
                  <CheckCircle className="w-4 h-4 text-white" strokeWidth={3} />
                )}
              </div>
              <span className="text-[15px] text-black">Employment is ongoing</span>
            </button>
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
          Continue to Step 3
        </button>
      </div>

      {/* Calendar Modal */}
      {activeCalendar && portalContainer && createPortal(
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 z-50 flex items-end justify-center bg-black/40"
          onClick={handleCalendarCancel}
        >
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full bg-white rounded-t-[14px] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Calendar Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E5EA]">
              <button
                onClick={handleCalendarCancel}
                className="text-[17px] text-[#007AFF] hover:opacity-70 active:opacity-50"
              >
                Cancel
              </button>
              <span className="text-[17px] font-semibold text-black">
                {activeCalendar === 'start' ? 'Start date' : 'End date'}
              </span>
              <button
                onClick={handleCalendarConfirm}
                className="text-[17px] font-semibold text-[#007AFF] hover:opacity-70 active:opacity-50"
              >
                Done
              </button>
            </div>

            {/* Calendar Body */}
            <div className="p-4">
              <Calendar
                mode="single"
                selected={tempSelectedDate}
                onSelect={handleCalendarSelect}
                month={calendarMonth}
                onMonthChange={setCalendarMonth}
                className="rounded-md"
                selectedDateTooltip={activeCalendar === 'start' ? 'Start date' : 'End date'}
              />
            </div>
          </motion.div>
        </motion.div>,
        portalContainer
      )}

      {/* Numeric Keyboard */}
      <AnimatePresence>
        {showKeyboard && (
          <IPhoneNumericKeyboard
            onKeyPress={handleKeyPress}
            onClose={() => {
              setShowKeyboard(false);
              setActiveField(null);
              if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
              }
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
