import { ChevronLeft, CheckCircle } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';
import { useState, useRef, useEffect } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { IPhoneNumericKeyboard } from '../IPhoneNumericKeyboard';
import { IPhoneKeyboard } from '../IPhoneKeyboard';
import { IPhoneAlphanumericKeyboard } from '../IPhoneAlphanumericKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';
import { StepIndicator } from '../StepIndicator';
import { AnimatePresence } from 'motion/react';

interface CPPEIRulingFormStep2ScreenProps {
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
}

export function CPPEIRulingFormStep2Screen({
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
}: CPPEIRulingFormStep2ScreenProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Worker information fields
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [sin, setSin] = useState('');
  const [sinUnknown, setSinUnknown] = useState(false);
  const [mailingAddress, setMailingAddress] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [workPhone, setWorkPhone] = useState('');
  const [homePhone, setHomePhone] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState<'english' | 'french' | null>(null);

  // Keyboard states
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [showQwertyKeyboard, setShowQwertyKeyboard] = useState(false);
  const [showAlphanumericKeyboard, setShowAlphanumericKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<'firstName' | 'lastName' | 'sin' | 'mailingAddress' | 'jobTitle' | 'cell' | 'work' | 'home' | null>(null);

  const formatSIN = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 3)} ${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)} ${numbers.slice(3, 6)} ${numbers.slice(6, 9)}`;
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  const handleSinChange = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 9) {
      setSin(formatSIN(numbers));
    }
  };

  const handlePhoneChange = (field: 'cell' | 'work' | 'home', value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 10) {
      const formatted = formatPhone(numbers);
      if (field === 'cell') setCellPhone(formatted);
      else if (field === 'work') setWorkPhone(formatted);
      else if (field === 'home') setHomePhone(formatted);
    }
  };

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      if (activeField === 'sin') {
        setSin(prev => {
          const numbers = prev.replace(/\D/g, '');
          return formatSIN(numbers.slice(0, -1));
        });
      } else if (activeField === 'cell') {
        setCellPhone(prev => {
          const numbers = prev.replace(/\D/g, '');
          return formatPhone(numbers.slice(0, -1));
        });
      } else if (activeField === 'work') {
        setWorkPhone(prev => {
          const numbers = prev.replace(/\D/g, '');
          return formatPhone(numbers.slice(0, -1));
        });
      } else if (activeField === 'home') {
        setHomePhone(prev => {
          const numbers = prev.replace(/\D/g, '');
          return formatPhone(numbers.slice(0, -1));
        });
      }
    } else {
      if (activeField === 'sin') {
        const currentNumbers = sin.replace(/\D/g, '');
        if (currentNumbers.length < 9) {
          setSin(formatSIN(currentNumbers + key));
        }
      } else if (activeField === 'cell') {
        const currentNumbers = cellPhone.replace(/\D/g, '');
        if (currentNumbers.length < 10) {
          setCellPhone(formatPhone(currentNumbers + key));
        }
      } else if (activeField === 'work') {
        const currentNumbers = workPhone.replace(/\D/g, '');
        if (currentNumbers.length < 10) {
          setWorkPhone(formatPhone(currentNumbers + key));
        }
      } else if (activeField === 'home') {
        const currentNumbers = homePhone.replace(/\D/g, '');
        if (currentNumbers.length < 10) {
          setHomePhone(formatPhone(currentNumbers + key));
        }
      }
    }
  };

  const handleKeyboardDone = () => {
    setShowKeyboard(false);
    setActiveField(null);
  };

  const handleQwertyKeyPress = (key: string) => {
    if (key === 'backspace') {
      if (activeField === 'firstName') {
        setFirstName(prev => prev.slice(0, -1));
      } else if (activeField === 'lastName') {
        setLastName(prev => prev.slice(0, -1));
      } else if (activeField === 'mailingAddress') {
        setMailingAddress(prev => prev.slice(0, -1));
      } else if (activeField === 'jobTitle') {
        setJobTitle(prev => prev.slice(0, -1));
      }
    } else {
      if (activeField === 'firstName') {
        setFirstName(prev => prev + key);
      } else if (activeField === 'lastName') {
        setLastName(prev => prev + key);
      } else if (activeField === 'mailingAddress') {
        setMailingAddress(prev => prev + key);
      } else if (activeField === 'jobTitle') {
        setJobTitle(prev => prev + key);
      }
    }
  };

  const handleQwertyKeyboardDone = () => {
    setShowQwertyKeyboard(false);
    setActiveField(null);
  };

  const handleAlphanumericKeyPress = (key: string) => {
    if (key === 'backspace') {
      if (activeField === 'mailingAddress') {
        setMailingAddress(prev => prev.slice(0, -1));
      }
    } else {
      if (activeField === 'mailingAddress') {
        setMailingAddress(prev => prev + key);
      }
    }
  };

  const handleAlphanumericKeyboardDone = () => {
    setShowAlphanumericKeyboard(false);
    setActiveField(null);
  };

  // Use keyboard scroll hook
  useKeyboardScroll({
    isKeyboardVisible: showKeyboard || showQwertyKeyboard || showAlphanumericKeyboard,
    activeField,
    keyboardHeight: 270,
    scrollContainerRef
  });

  const handleContinue = () => {
    if (onNext) {
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
        <StepIndicator currentStep={3} totalSteps={5} onStepClick={onStepClick} />
      </div>

      {/* Scrollable Content */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto px-4 pb-32">
        <div className="mb-4">
          <h2 className="text-[20px] font-semibold text-black mb-1">Part C – Worker</h2>
          <p className="text-[15px] text-[#8E8E93]">
            Provide information about the worker for this ruling request.
          </p>
        </div>

        <div className="space-y-4">

          {/* First name */}
          <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px]">
            <Label className="text-black text-[17px] block mb-2">First name of worker</Label>
            <Input
              id="firstName"
              type="text"
              inputMode="none"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onFocus={() => {
                setActiveField('firstName');
                setShowQwertyKeyboard(true);
                setShowKeyboard(false);
              }}
              autoComplete="off"
              className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF]"
              placeholder="Enter first name"
            />
          </div>

          {/* Last name */}
          <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px]">
            <Label className="text-black text-[17px] block mb-2">Last name of worker</Label>
            <Input
              id="lastName"
              type="text"
              inputMode="none"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onFocus={() => {
                setActiveField('lastName');
                setShowQwertyKeyboard(true);
                setShowKeyboard(false);
              }}
              autoComplete="off"
              className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF]"
              placeholder="Enter last name"
            />
          </div>

          {/* Social insurance number */}
          <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px]">
            <Label className="text-black text-[17px] block mb-2">Social insurance number</Label>
            <Input
              id="sin"
              type="text"
              inputMode="none"
              value={sin}
              onChange={(e) => handleSinChange(e.target.value)}
              onFocus={() => {
                if (!sinUnknown) {
                  setActiveField('sin');
                  setShowKeyboard(true);
                  setShowQwertyKeyboard(false);
                }
              }}
              disabled={sinUnknown}
              className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF] font-mono disabled:bg-[#f2f2f7] disabled:text-gray-ios"
              placeholder="000 000 000"
              maxLength={11}
            />
            <div className="flex items-center gap-2 mt-3">
              <Checkbox
                id="sin-unknown"
                checked={sinUnknown}
                onCheckedChange={(checked) => {
                  setSinUnknown(checked as boolean);
                  if (checked) {
                    setSin('');
                    setShowKeyboard(false);
                    setShowQwertyKeyboard(false);
                    setActiveField(null);
                  }
                }}
                className="border-[#c6c6c8] data-[state=checked]:bg-[#007AFF] data-[state=checked]:border-[#007AFF]"
              />
              <label
                htmlFor="sin-unknown"
                className="text-[15px] text-black cursor-pointer"
              >
                Unknown
              </label>
            </div>
          </div>

          {/* Mailing address */}
          <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px]">
            <Label className="text-black text-[17px] block mb-2">Mailing address</Label>
            <textarea
              id="mailingAddress"
              inputMode="none"
              value={mailingAddress}
              onChange={(e) => setMailingAddress(e.target.value)}
              onFocus={() => {
                setActiveField('mailingAddress');
                setShowAlphanumericKeyboard(true);
                setShowKeyboard(false);
                setShowQwertyKeyboard(false);
              }}
              className="w-full bg-white border border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] outline-none p-3 min-h-[100px] resize-none"
              placeholder="Enter street address, city, province, postal code"
            />
          </div>

          {/* Job title */}
          <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px]">
            <Label className="text-black text-[17px] block mb-2">Job title / position / trade or occupation</Label>
            <Input
              id="jobTitle"
              type="text"
              inputMode="none"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              onFocus={() => {
                setActiveField('jobTitle');
                setShowQwertyKeyboard(true);
                setShowKeyboard(false);
              }}
              autoComplete="off"
              className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF]"
              placeholder="Enter job title or occupation"
            />
          </div>

          {/* Telephone numbers */}
          <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px] space-y-4">
            <Label className="text-black text-[17px] block">Telephone numbers</Label>
            
            {/* Cell */}
            <div>
              <Label className="text-gray-ios text-[15px] block mb-2">Cell</Label>
              <Input
                id="cell"
                type="text"
                inputMode="none"
                value={cellPhone}
                onChange={(e) => handlePhoneChange('cell', e.target.value)}
                onFocus={() => {
                  setActiveField('cell');
                  setShowKeyboard(true);
                  setShowQwertyKeyboard(false);
                }}
                className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF] font-mono"
                placeholder="000-000-0000"
                maxLength={12}
              />
            </div>

            {/* Work */}
            <div>
              <Label className="text-gray-ios text-[15px] block mb-2">Work</Label>
              <Input
                id="work"
                type="text"
                inputMode="none"
                value={workPhone}
                onChange={(e) => handlePhoneChange('work', e.target.value)}
                onFocus={() => {
                  setActiveField('work');
                  setShowKeyboard(true);
                  setShowQwertyKeyboard(false);
                }}
                className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF] font-mono"
                placeholder="000-000-0000"
                maxLength={12}
              />
            </div>

            {/* Home */}
            <div>
              <Label className="text-gray-ios text-[15px] block mb-2">Home</Label>
              <Input
                id="home"
                type="text"
                inputMode="none"
                value={homePhone}
                onChange={(e) => handlePhoneChange('home', e.target.value)}
                onFocus={() => {
                  setActiveField('home');
                  setShowKeyboard(true);
                  setShowQwertyKeyboard(false);
                }}
                className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF] font-mono"
                placeholder="000-000-0000"
                maxLength={12}
              />
            </div>
          </div>

          {/* Preferred language */}
          <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px]">
            <Label className="text-black text-[17px] block mb-3">Preferred language for interview</Label>
            <RadioGroup 
              value={preferredLanguage || ''} 
              onValueChange={(value) => setPreferredLanguage(value as 'english' | 'french')}
            >
              <div className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value="english" id="english" className="border-[#c6c6c8] text-[#007AFF]" />
                <label htmlFor="english" className="text-[17px] text-black cursor-pointer">
                  English
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="french" id="french" className="border-[#c6c6c8] text-[#007AFF]" />
                <label htmlFor="french" className="text-[17px] text-black cursor-pointer">
                  French
                </label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="flex-shrink-0 bg-white border-t border-[#E5E5EA] p-4">
        <button
          onClick={handleContinue}
          className="w-full py-3 px-4 rounded-[10px] bg-[#007AFF] text-white hover:bg-[#0051D5] active:bg-[#004BB8] transition-all"
        >
          Continue to Step 4
        </button>
      </div>

      {/* Numeric Keyboard */}
      <AnimatePresence>
        {showKeyboard && <IPhoneNumericKeyboard key="numeric-keyboard" onKeyPress={handleKeyPress} onDone={handleKeyboardDone} />}
      </AnimatePresence>

      {/* QWERTY Keyboard */}
      <AnimatePresence>
        {showQwertyKeyboard && <IPhoneKeyboard key="qwerty-keyboard" onKeyPress={handleQwertyKeyPress} onDone={handleQwertyKeyboardDone} />}
      </AnimatePresence>

      {/* Alphanumeric Keyboard */}
      <AnimatePresence>
        {showAlphanumericKeyboard && <IPhoneAlphanumericKeyboard key="alphanumeric-keyboard" onKeyPress={handleAlphanumericKeyPress} onDone={handleAlphanumericKeyboardDone} />}
      </AnimatePresence>
    </div>
  );
}