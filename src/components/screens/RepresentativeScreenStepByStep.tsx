import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Check, Info } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar } from '../ui/calendar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { toast } from 'sonner@2.0.3';
import { IPhoneKeyboard } from '../IPhoneKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';

interface RepresentativeScreenStepByStepProps {
  onBack: () => void;
  onViewMail?: () => void;
  onNavigateHome: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  hasUnreadMail?: boolean;
  onViewAllBenefits?: () => void;
  onViewRefundDetails?: () => void;
  onViewNoticeOfAssessment?: () => void;
  onGSTHSTCredit?: () => void;
  onAccountDetails?: () => void;
  onProfile?: () => void;
  onViewTaxReturns?: () => void;
  onSuccess?: () => void;
  // Extended search menu handlers
  onBecomeRepresentative?: () => void;
  onBecomeRepresentativeAsRep?: () => void;
  onHomeBuyersPlan?: () => void;
  onFHSAEligibility?: () => void;
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

export function RepresentativeScreenStepByStep({ 
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
  hasUnreadMail = false,
  onViewAllBenefits,
  onViewRefundDetails,
  onViewNoticeOfAssessment,
  onGSTHSTCredit,
  onAccountDetails,
  onProfile,
  onViewTaxReturns,
  onSuccess,
  // Extended search menu handlers
  onBecomeRepresentative,
  onBecomeRepresentativeAsRep,
  onHomeBuyersPlan,
  onFHSAEligibility,
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
}: RepresentativeScreenStepByStepProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  
  // Step 1: Representative Information
  const [repId, setRepId] = useState('');
  const [groupId, setGroupId] = useState('');
  const [businessNumber, setBusinessNumber] = useState('');
  const [fullName, setFullName] = useState('');
  
  // Step 2: Authorization Level
  const [authLevel, setAuthLevel] = useState<'full' | 'limited'>('full');
  
  // Step 3: Tax Years
  const [taxYears, setTaxYears] = useState<string[]>([]);
  
  // Step 4: Authorization Period
  const [dateOption, setDateOption] = useState<'open-ended' | 'specific'>('open-ended');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showStartDateCalendar, setShowStartDateCalendar] = useState(false);
  const [showEndDateCalendar, setShowEndDateCalendar] = useState(false);
  const [tempStartDate, setTempStartDate] = useState<Date | undefined>(undefined);
  const [tempEndDate, setTempEndDate] = useState<Date | undefined>(undefined);
  const [startCalendarMonth, setStartCalendarMonth] = useState<Date>(new Date());
  const [endCalendarMonth, setEndCalendarMonth] = useState<Date>(new Date());
  
  // Step 5: Confirmation
  const [confirmed, setConfirmed] = useState(false);

  // Keyboard state
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [keyboardType, setKeyboardType] = useState<'default' | 'numeric'>('default');

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Use keyboard scroll hook
  const { keyboardPadding } = useKeyboardScroll({ 
    isKeyboardVisible: showKeyboard, 
    activeField: activeField || 'input',
    keyboardHeight: 260,
    scrollContainerRef
  });

  useEffect(() => {
    setPortalContainer(document.getElementById('iphone-screen'));
  }, []);

  useEffect(() => {
    if (showStartDateCalendar || showEndDateCalendar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showStartDateCalendar, showEndDateCalendar]);

  const currentYear = new Date().getFullYear();
  const availableYears = Array.from({ length: 10 }, (_, i) => (currentYear - i).toString());

  const toggleTaxYear = (year: string) => {
    setTaxYears(prev => 
      prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]
    );
  };

  const formatDisplayDate = (dateString: string) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const handleStartDateConfirm = () => {
    if (tempStartDate) {
      const year = tempStartDate.getFullYear().toString();
      const month = (tempStartDate.getMonth() + 1).toString().padStart(2, '0');
      const day = tempStartDate.getDate().toString().padStart(2, '0');
      setStartDate(`${year}-${month}-${day}`);
      setStartCalendarMonth(tempStartDate);
    }
    setShowStartDateCalendar(false);
    setTempStartDate(undefined);
  };

  const handleStartDateCancel = () => {
    setShowStartDateCalendar(false);
    setTempStartDate(undefined);
  };

  const handleEndDateConfirm = () => {
    if (tempEndDate) {
      const year = tempEndDate.getFullYear().toString();
      const month = (tempEndDate.getMonth() + 1).toString().padStart(2, '0');
      const day = tempEndDate.getDate().toString().padStart(2, '0');
      setEndDate(`${year}-${month}-${day}`);
      setEndCalendarMonth(tempEndDate);
    }
    setShowEndDateCalendar(false);
    setTempEndDate(undefined);
  };

  const handleEndDateCancel = () => {
    setShowEndDateCalendar(false);
    setTempEndDate(undefined);
  };

  const handleNext = () => {
    if (currentStep < 6) {
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

  const handleConfirm = () => {
    toast.success('Representative authorized successfully!', {
      description: 'Your representative can now access your authorized information.',
      duration: 3000
    });
    
    if (onSuccess) {
      onSuccess();
    } else {
      onBack();
    }
  };

  const canProceedStep1 = (repId.length === 8 || groupId.trim().length > 0 || businessNumber.length === 9) && fullName.trim().length > 0;
  const canProceedStep2 = true; // Always can proceed from authorization level
  const canProceedStep3 = taxYears.length > 0;
  const canProceedStep4 = dateOption === 'open-ended' || (startDate !== '' && endDate !== '');
  const canConfirm = confirmed;

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
          // Extended search menu handlers
          onBecomeRepresentative={onBecomeRepresentative}
          onBecomeRepresentativeAsRep={onBecomeRepresentativeAsRep}
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-tight">Authorize representative</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px] mt-2">
          {currentStep === 1 && 'Enter your representative\'s information'}
          {currentStep === 2 && 'Choose the level of authorization'}
          {currentStep === 3 && 'Select the tax years they can access'}
          {currentStep === 4 && 'Set the authorization period'}
          {currentStep === 5 && 'Review and confirm your authorization'}
        </p>
      </div>

      {/* Content - Scrollable */}
      <div 
        ref={scrollContainerRef} 
        className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7]"
        style={{ paddingBottom: `${keyboardPadding + 80}px` }}
      >

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
          {/* Step 1: Representative Information */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Step 1: Representative Information</h2>
              
              {/* Info Card */}
              <div className="mb-4 card-ios overflow-hidden border-l-4 border-[#007AFF] p-4">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-[#8e8e93] text-[15px] m-0 mb-2">
                      Any one of the following can be used as your Represent a Client (RAC) identifier:
                    </p>
                    <ul className="text-[#8e8e93] text-[15px] m-0 pl-5 space-y-1 list-disc">
                      <li>RepID</li>
                      <li>GroupID</li>
                      <li>Business number (BN), when you have registered it with RAC</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card-ios overflow-hidden mb-4 border-l-4 border-[#34C759]">
                <div className="px-4 py-3 space-y-4">
                  {/* RepID */}
                  <div>
                    <Label htmlFor="rep-id" className="text-black mb-2 block text-[17px]">
                      RepID number
                    </Label>
                    <Input
                      id="rep-id"
                      type="text"
                      value={repId}
                      onChange={(e) => setRepId(e.target.value.slice(0, 8))}
                      placeholder="8 characters"
                      maxLength={8}
                      className="h-12 bg-white border-[#c6c6c8] rounded-[8px] text-[18px] focus:border-[#007AFF] focus:ring-[#007AFF]"
                      onFocus={() => { setShowKeyboard(true); setActiveField('rep-id'); setKeyboardType('default'); }}
                      onBlur={() => { setShowKeyboard(false); setActiveField(null); }}
                    />
                    <p className="text-[#8e8e93] text-[13px] mt-1">Representative identifier</p>
                  </div>

                  {/* GroupID */}
                  <div>
                    <Label htmlFor="group-id" className="text-black mb-2 block text-[17px]">
                      GroupID
                    </Label>
                    <Input
                      id="group-id"
                      type="text"
                      value={groupId}
                      onChange={(e) => setGroupId(e.target.value)}
                      placeholder="If part of a group or firm"
                      className="h-12 bg-white border-[#c6c6c8] rounded-[8px] text-[18px] focus:border-[#007AFF] focus:ring-[#007AFF]"
                      onFocus={() => { setShowKeyboard(true); setActiveField('group-id'); setKeyboardType('default'); }}
                      onBlur={() => { setShowKeyboard(false); setActiveField(null); }}
                    />
                  </div>

                  {/* Business Number */}
                  <div>
                    <Label htmlFor="business-number" className="text-black mb-2 block text-[17px]">
                      Business number
                    </Label>
                    <Input
                      id="business-number"
                      type="text"
                      inputMode="numeric"
                      value={businessNumber}
                      onChange={(e) => setBusinessNumber(e.target.value.replace(/\D/g, '').slice(0, 9))}
                      placeholder="9 digits"
                      maxLength={9}
                      className="h-12 bg-white border-[#c6c6c8] rounded-[8px] text-[18px] focus:border-[#007AFF] focus:ring-[#007AFF]"
                      onFocus={() => { setShowKeyboard(true); setActiveField('business-number'); setKeyboardType('numeric'); }}
                      onBlur={() => { setShowKeyboard(false); setActiveField(null); }}
                    />
                    <p className="text-[#8e8e93] text-[13px] mt-1">Business registration number</p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <Label htmlFor="full-name" className="text-black mb-2 block text-[17px]">
                      Full name <span className="text-[#FF3B30]">*</span>
                    </Label>
                    <Input
                      id="full-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Legal name of representative or firm"
                      className="h-12 bg-white border-[#c6c6c8] rounded-[8px] text-[18px] focus:border-[#007AFF] focus:ring-[#007AFF]"
                      onFocus={() => { setShowKeyboard(true); setActiveField('full-name'); setKeyboardType('default'); }}
                      onBlur={() => { setShowKeyboard(false); setActiveField(null); }}
                    />
                  </div>
                </div>
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

          {/* Step 2: Authorization Level */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Step 2: Authorization Level</h2>
              
              <div className="card-ios overflow-hidden mb-4 border-l-4 border-[#34C759]">
                <div className="px-4 py-3">
                  <Label className="text-black mb-3 block text-[17px]">
                    Level of authorization
                  </Label>
                  <div className="space-y-2">
                    <label className="flex items-start gap-3 p-3 border-2 rounded-[10px] cursor-pointer transition-colors hover:bg-[#f2f2f7] border-[#c6c6c8]"
                      style={authLevel === 'full' ? { borderColor: '#007AFF', backgroundColor: '#f2f2f7' } : {}}>
                      <input
                        type="radio"
                        name="authLevel"
                        value="full"
                        checked={authLevel === 'full'}
                        onChange={(e) => setAuthLevel(e.target.value as 'full' | 'limited')}
                        className="mt-0.5 w-5 h-5 text-[#007AFF] border-[#8e8e93] focus:ring-[#007AFF] cursor-pointer"
                      />
                      <div className="flex-1">
                        <div className="text-black text-[15px] font-semibold">Full access</div>
                        <div className="text-[#8e8e93] text-[13px] mt-0.5">Representative can view and manage all tax information</div>
                      </div>
                    </label>
                    <label className="flex items-start gap-3 p-3 border-2 rounded-[10px] cursor-pointer transition-colors hover:bg-[#f2f2f7] border-[#c6c6c8]"
                      style={authLevel === 'limited' ? { borderColor: '#007AFF', backgroundColor: '#f2f2f7' } : {}}>
                      <input
                        type="radio"
                        name="authLevel"
                        value="limited"
                        checked={authLevel === 'limited'}
                        onChange={(e) => setAuthLevel(e.target.value as 'full' | 'limited')}
                        className="mt-0.5 w-5 h-5 text-[#007AFF] border-[#8e8e93] focus:ring-[#007AFF] cursor-pointer"
                      />
                      <div className="flex-1">
                        <div className="text-black text-[15px] font-semibold">Limited access</div>
                        <div className="text-[#8e8e93] text-[13px] mt-0.5">Representative can view information but cannot make changes</div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

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

          {/* Step 3: Tax Years */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Step 3: Tax Years</h2>
              
              <div className="card-ios overflow-hidden mb-4 border-l-4 border-[#34C759]">
                <div className="px-4 py-3">
                  <Label className="text-black mb-2 block text-[17px]">
                    Select tax years
                  </Label>
                  <p className="text-[#8e8e93] text-[13px] mb-3">Choose which tax years your representative can access:</p>
                  <div className="grid grid-cols-3 gap-2">
                    {availableYears.map((year) => (
                      <button
                        key={year}
                        onClick={() => toggleTaxYear(year)}
                        className={`px-3 py-2 rounded-[8px] border-2 text-[15px] transition-all ${
                          taxYears.includes(year)
                            ? 'bg-[#007AFF] border-[#007AFF] text-white'
                            : 'bg-white border-[#c6c6c8] text-black hover:bg-[#f2f2f7]'
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
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

          {/* Step 4: Authorization Period */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Step 4: Authorization Period</h2>
              
              <div className="card-ios overflow-hidden mb-4 border-l-4 border-[#34C759]">
                <div className="px-4 py-3">
                  <Label className="text-black mb-3 block text-[17px]">
                    Authorization period
                  </Label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="dateOption"
                        value="open-ended"
                        checked={dateOption === 'open-ended'}
                        onChange={(e) => setDateOption(e.target.value as 'open-ended' | 'specific')}
                        className="w-5 h-5 text-[#007AFF] border-[#8e8e93] focus:ring-[#007AFF] cursor-pointer"
                      />
                      <span className="text-black text-[15px]">Open-ended (no end date)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="dateOption"
                        value="specific"
                        checked={dateOption === 'specific'}
                        onChange={(e) => setDateOption(e.target.value as 'open-ended' | 'specific')}
                        className="w-5 h-5 text-[#007AFF] border-[#8e8e93] focus:ring-[#007AFF] cursor-pointer"
                      />
                      <span className="text-black text-[15px]">Specific date range</span>
                    </label>
                    
                    {dateOption === 'specific' && (
                      <div className="ml-8 space-y-3 pt-2">
                        <div>
                          <Label htmlFor="start-date" className="text-black mb-1 block text-[13px]">Start date</Label>
                          <button
                            type="button"
                            onClick={() => {
                              if (startDate) {
                                const [year, month, day] = startDate.split('-').map(Number);
                                const date = new Date(year, month - 1, day);
                                setTempStartDate(date);
                              } else {
                                setTempStartDate(undefined);
                              }
                              setShowStartDateCalendar(true);
                            }}
                            className="w-full px-4 py-3 bg-white border border-[#c6c6c8] rounded-[8px] text-black text-[17px] text-left focus:outline-none focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] flex items-center justify-between hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors"
                          >
                            <span className={startDate ? 'text-black' : 'text-[#8e8e93]'}>
                              {startDate ? formatDisplayDate(startDate) : 'Select start date'}
                            </span>
                            <CalendarIcon className="h-5 w-5 text-[#007AFF]" />
                          </button>
                        </div>
                        <div>
                          <Label htmlFor="end-date" className="text-black mb-1 block text-[13px]">End date</Label>
                          <button
                            type="button"
                            onClick={() => {
                              if (endDate) {
                                const [year, month, day] = endDate.split('-').map(Number);
                                const date = new Date(year, month - 1, day);
                                setTempEndDate(date);
                              } else {
                                setTempEndDate(undefined);
                              }
                              setShowEndDateCalendar(true);
                            }}
                            className="w-full px-4 py-3 bg-white border border-[#c6c6c8] rounded-[8px] text-black text-[17px] text-left focus:outline-none focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] flex items-center justify-between hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors"
                          >
                            <span className={endDate ? 'text-black' : 'text-[#8e8e93]'}>
                              {endDate ? formatDisplayDate(endDate) : 'Select end date'}
                            </span>
                            <CalendarIcon className="h-5 w-5 text-[#007AFF]" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={handleNext}
                disabled={!canProceedStep4}
                className={`w-full py-3 px-4 rounded-[10px] text-[17px] font-semibold transition-colors text-center mb-6 ${
                  canProceedStep4
                    ? 'bg-[#007AFF] text-white hover:bg-[#0051d5] active:bg-[#004bb8]'
                    : 'bg-[#e5e5ea] text-[#8e8e93] cursor-not-allowed'
                }`}
              >
                Next step
              </button>
            </div>
          )}

          {/* Step 5: Review and Confirm */}
          {currentStep === 5 && (
            <div>
              <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Step 5: Review and Confirm</h2>
              
              <div className="card-ios overflow-hidden mb-4 border-l-4 border-[#34C759]">
                <div className="px-4 py-3">
                  <h3 className="text-black font-semibold text-[17px] mb-3">Authorization summary</h3>
                  
                  {/* Representative Information */}
                  <div className="mb-4 pb-4 border-b border-[rgba(60,60,67,0.174)]">
                    <h4 className="text-[#8e8e93] text-[13px] uppercase tracking-wider mb-2">Representative Information</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-[#8e8e93] text-[15px]">RepID number:</span>
                        <span className="text-black text-[15px] font-semibold">{repId}</span>
                      </div>
                      {groupId && (
                        <div className="flex justify-between">
                          <span className="text-[#8e8e93] text-[15px]">GroupID:</span>
                          <span className="text-black text-[15px] font-semibold">{groupId}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-[#8e8e93] text-[15px]">Business number:</span>
                        <span className="text-black text-[15px] font-semibold">{businessNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#8e8e93] text-[15px]">Full name:</span>
                        <span className="text-black text-[15px] font-semibold">{fullName}</span>
                      </div>
                    </div>
                  </div>

                  {/* Authorization Details */}
                  <div className="mb-4 pb-4 border-b border-[rgba(60,60,67,0.174)]">
                    <h4 className="text-[#8e8e93] text-[13px] uppercase tracking-wider mb-2">Authorization Details</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-[#8e8e93] text-[15px]">Access level:</span>
                        <span className="text-black text-[15px] font-semibold capitalize">{authLevel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#8e8e93] text-[15px]">Tax years:</span>
                        <span className="text-black text-[15px] font-semibold">
                          {taxYears.sort().reverse().join(', ')}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#8e8e93] text-[15px]">Authorization period:</span>
                        <span className="text-black text-[15px] font-semibold capitalize">
                          {dateOption === 'open-ended' ? 'Open-ended' : 
                           `${formatDisplayDate(startDate)} to ${formatDisplayDate(endDate)}`}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Confirmation Checkbox */}
                  <label className="flex items-start gap-3 p-3 bg-[#f2f2f7] rounded-[10px] cursor-pointer">
                    <input
                      type="checkbox"
                      id="confirm-auth"
                      checked={confirmed}
                      onChange={(e) => setConfirmed(e.target.checked)}
                      className="mt-0.5 w-5 h-5 rounded border-2 border-[#c6c6c8] text-[#007AFF] focus:ring-2 focus:ring-[#007AFF] focus:ring-offset-0 cursor-pointer checked:bg-[#007AFF] checked:border-[#007AFF]"
                    />
                    <div className="flex-1">
                      <span className="text-black text-[15px]">
                        I confirm that the information provided is accurate and I authorize this representative to act on my behalf with the CRA.
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <button
                onClick={handleConfirm}
                disabled={!canConfirm}
                className={`w-full py-3 px-4 rounded-[10px] text-[17px] font-semibold transition-colors text-center mb-6 ${
                  canConfirm
                    ? 'bg-[#007AFF] text-white hover:bg-[#0051d5] active:bg-[#004bb8]'
                    : 'bg-[#e5e5ea] text-[#8e8e93] cursor-not-allowed'
                }`}
              >
                Confirm and Submit
              </button>

              <p className="text-[#8e8e93] text-[13px] text-center">
                After submission, your representative will receive a confirmation and can begin accessing your authorized information.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Start Date Calendar Modal */}
      {showStartDateCalendar && portalContainer && createPortal(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-[200] flex items-end justify-center bg-black/40"
          onClick={handleStartDateCancel}
        >
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="bg-white w-full rounded-t-[20px] shadow-lg p-4 pb-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={handleStartDateCancel}
                className="text-[#007AFF] text-[17px] font-medium hover:opacity-70"
              >
                Cancel
              </button>
              <h3 className="text-[17px] font-semibold text-black">Select Start Date</h3>
              <button
                onClick={handleStartDateConfirm}
                className="text-[#007AFF] text-[17px] font-semibold hover:opacity-70"
              >
                Done
              </button>
            </div>
            <Calendar
              mode="single"
              selected={tempStartDate}
              onSelect={setTempStartDate}
              month={startCalendarMonth}
              onMonthChange={setStartCalendarMonth}
              className="mx-auto"
            />
          </motion.div>
        </motion.div>,
        portalContainer
      )}

      {/* End Date Calendar Modal */}
      {showEndDateCalendar && portalContainer && createPortal(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-[200] flex items-end justify-center bg-black/40"
          onClick={handleEndDateCancel}
        >
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="bg-white w-full rounded-t-[20px] shadow-lg p-4 pb-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={handleEndDateCancel}
                className="text-[#007AFF] text-[17px] font-medium hover:opacity-70"
              >
                Cancel
              </button>
              <h3 className="text-[17px] font-semibold text-black">Select End Date</h3>
              <button
                onClick={handleEndDateConfirm}
                className="text-[#007AFF] text-[17px] font-semibold hover:opacity-70"
              >
                Done
              </button>
            </div>
            <Calendar
              mode="single"
              selected={tempEndDate}
              onSelect={setTempEndDate}
              month={endCalendarMonth}
              onMonthChange={setEndCalendarMonth}
              fromDate={tempStartDate}
              className="mx-auto"
            />
          </motion.div>
        </motion.div>,
        portalContainer
      )}

      {/* Keyboard */}
      {showKeyboard && portalContainer && createPortal(
        <AnimatePresence>
          <IPhoneKeyboard
            keyboardType={keyboardType}
            onKeyPress={(key) => {
              if (key === 'backspace') {
                if (activeField === 'rep-id') {
                  setRepId(prev => prev.slice(0, -1));
                } else if (activeField === 'group-id') {
                  setGroupId(prev => prev.slice(0, -1));
                } else if (activeField === 'business-number') {
                  setBusinessNumber(prev => prev.slice(0, -1));
                } else if (activeField === 'full-name') {
                  setFullName(prev => prev.slice(0, -1));
                }
              } else {
                if (activeField === 'rep-id' && repId.length < 8) {
                  setRepId(prev => prev + key);
                } else if (activeField === 'group-id') {
                  setGroupId(prev => prev + key);
                } else if (activeField === 'business-number' && businessNumber.length < 9 && /\d/.test(key)) {
                  setBusinessNumber(prev => prev + key);
                } else if (activeField === 'full-name') {
                  setFullName(prev => prev + key);
                }
              }
            }}
            onDone={() => {
              setShowKeyboard(false);
              setActiveField(null);
            }}
          />
        </AnimatePresence>,
        portalContainer
      )}
    </div>
  );
}