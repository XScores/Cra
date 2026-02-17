import { ChevronLeft, CheckCircle } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';
import { useState, useRef } from 'react';
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

interface CPPEIRulingFormStep3ScreenProps {
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

export function CPPEIRulingFormStep3Screen({
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
}: CPPEIRulingFormStep3ScreenProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Payer information fields
  const [legalBusinessName, setLegalBusinessName] = useState('');
  const [tradingName, setTradingName] = useState('');
  const [mailingAddress, setMailingAddress] = useState('');
  const [businessNumber, setBusinessNumber] = useState('');
  const [bnUnknown, setBnUnknown] = useState(false);
  const [bnNone, setBnNone] = useState(false);
  const [provinceTerritory, setProvinceTerritory] = useState('');
  const [natureOfBusiness, setNatureOfBusiness] = useState('');

  // Contact 1 fields
  const [contact1Name, setContact1Name] = useState('');
  const [contact1Title, setContact1Title] = useState('');
  const [contact1Cell, setContact1Cell] = useState('');
  const [contact1Work, setContact1Work] = useState('');
  const [contact1Language, setContact1Language] = useState<'english' | 'french' | null>(null);

  // Contact 2 fields
  const [contact2Name, setContact2Name] = useState('');
  const [contact2Title, setContact2Title] = useState('');
  const [contact2Cell, setContact2Cell] = useState('');
  const [contact2Work, setContact2Work] = useState('');
  const [contact2Language, setContact2Language] = useState<'english' | 'french' | null>(null);

  // Keyboard states
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [showQwertyKeyboard, setShowQwertyKeyboard] = useState(false);
  const [showAlphanumericKeyboard, setShowAlphanumericKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  const formatBusinessNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 9) return numbers;
    return `${numbers.slice(0, 9)} ${numbers.slice(9, 11)} ${numbers.slice(11, 15)}`;
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  const handleBusinessNumberChange = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 15) {
      setBusinessNumber(formatBusinessNumber(numbers));
    }
  };

  const handlePhoneChange = (field: string, value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 10) {
      const formatted = formatPhone(numbers);
      if (field === 'contact1Cell') setContact1Cell(formatted);
      else if (field === 'contact1Work') setContact1Work(formatted);
      else if (field === 'contact2Cell') setContact2Cell(formatted);
      else if (field === 'contact2Work') setContact2Work(formatted);
    }
  };

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      if (activeField === 'businessNumber') {
        setBusinessNumber(prev => {
          const numbers = prev.replace(/\D/g, '');
          return formatBusinessNumber(numbers.slice(0, -1));
        });
      } else if (activeField === 'contact1Cell') {
        setContact1Cell(prev => {
          const numbers = prev.replace(/\D/g, '');
          return formatPhone(numbers.slice(0, -1));
        });
      } else if (activeField === 'contact1Work') {
        setContact1Work(prev => {
          const numbers = prev.replace(/\D/g, '');
          return formatPhone(numbers.slice(0, -1));
        });
      } else if (activeField === 'contact2Cell') {
        setContact2Cell(prev => {
          const numbers = prev.replace(/\D/g, '');
          return formatPhone(numbers.slice(0, -1));
        });
      } else if (activeField === 'contact2Work') {
        setContact2Work(prev => {
          const numbers = prev.replace(/\D/g, '');
          return formatPhone(numbers.slice(0, -1));
        });
      }
    } else {
      if (activeField === 'businessNumber') {
        const currentNumbers = businessNumber.replace(/\D/g, '');
        if (currentNumbers.length < 15) {
          setBusinessNumber(formatBusinessNumber(currentNumbers + key));
        }
      } else if (activeField === 'contact1Cell') {
        const currentNumbers = contact1Cell.replace(/\D/g, '');
        if (currentNumbers.length < 10) {
          setContact1Cell(formatPhone(currentNumbers + key));
        }
      } else if (activeField === 'contact1Work') {
        const currentNumbers = contact1Work.replace(/\D/g, '');
        if (currentNumbers.length < 10) {
          setContact1Work(formatPhone(currentNumbers + key));
        }
      } else if (activeField === 'contact2Cell') {
        const currentNumbers = contact2Cell.replace(/\D/g, '');
        if (currentNumbers.length < 10) {
          setContact2Cell(formatPhone(currentNumbers + key));
        }
      } else if (activeField === 'contact2Work') {
        const currentNumbers = contact2Work.replace(/\D/g, '');
        if (currentNumbers.length < 10) {
          setContact2Work(formatPhone(currentNumbers + key));
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
      if (activeField === 'legalBusinessName') {
        setLegalBusinessName(prev => prev.slice(0, -1));
      } else if (activeField === 'tradingName') {
        setTradingName(prev => prev.slice(0, -1));
      } else if (activeField === 'mailingAddress') {
        setMailingAddress(prev => prev.slice(0, -1));
      } else if (activeField === 'provinceTerritory') {
        setProvinceTerritory(prev => prev.slice(0, -1));
      } else if (activeField === 'natureOfBusiness') {
        setNatureOfBusiness(prev => prev.slice(0, -1));
      } else if (activeField === 'contact1Name') {
        setContact1Name(prev => prev.slice(0, -1));
      } else if (activeField === 'contact1Title') {
        setContact1Title(prev => prev.slice(0, -1));
      } else if (activeField === 'contact2Name') {
        setContact2Name(prev => prev.slice(0, -1));
      } else if (activeField === 'contact2Title') {
        setContact2Title(prev => prev.slice(0, -1));
      }
    } else {
      if (activeField === 'legalBusinessName') {
        setLegalBusinessName(prev => prev + key);
      } else if (activeField === 'tradingName') {
        setTradingName(prev => prev + key);
      } else if (activeField === 'mailingAddress') {
        setMailingAddress(prev => prev + key);
      } else if (activeField === 'provinceTerritory') {
        setProvinceTerritory(prev => prev + key);
      } else if (activeField === 'natureOfBusiness') {
        setNatureOfBusiness(prev => prev + key);
      } else if (activeField === 'contact1Name') {
        setContact1Name(prev => prev + key);
      } else if (activeField === 'contact1Title') {
        setContact1Title(prev => prev + key);
      } else if (activeField === 'contact2Name') {
        setContact2Name(prev => prev + key);
      } else if (activeField === 'contact2Title') {
        setContact2Title(prev => prev + key);
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
        <StepIndicator currentStep={4} totalSteps={5} onStepClick={onStepClick} />
      </div>

      {/* Scrollable Content */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto px-4 pb-32">
        <div className="mb-4">
          <h2 className="text-[20px] font-semibold text-black mb-1">Part D – Payer</h2>
          <p className="text-[15px] text-[#8E8E93]">
            Provide information about the payer for this ruling request.
          </p>
        </div>

        <div className="space-y-4">

          {/* Legal business name */}
          <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px]">
            <Label className="text-black text-[17px] block mb-2">Legal business name</Label>
            <Input
              id="legalBusinessName"
              type="text"
              inputMode="none"
              value={legalBusinessName}
              onChange={(e) => setLegalBusinessName(e.target.value)}
              onFocus={() => {
                setActiveField('legalBusinessName');
                setShowQwertyKeyboard(true);
                setShowKeyboard(false);
              }}
              autoComplete="off"
              className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF]"
              placeholder="Enter legal business name"
            />
          </div>

          {/* Business trading or operating name */}
          <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px]">
            <Label className="text-black text-[17px] block mb-2">Business trading or operating name</Label>
            <p className="text-[13px] text-[#8E8E93] mb-2">If different from its legal name</p>
            <Input
              id="tradingName"
              type="text"
              inputMode="none"
              value={tradingName}
              onChange={(e) => setTradingName(e.target.value)}
              onFocus={() => {
                setActiveField('tradingName');
                setShowQwertyKeyboard(true);
                setShowKeyboard(false);
              }}
              autoComplete="off"
              className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF]"
              placeholder="Enter trading or operating name"
            />
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

          {/* Business number */}
          <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px]">
            <Label className="text-black text-[17px] block mb-2">Business number (BN)</Label>
            <Input
              id="businessNumber"
              type="text"
              inputMode="none"
              value={businessNumber}
              onChange={(e) => handleBusinessNumberChange(e.target.value)}
              onFocus={() => {
                if (!bnUnknown && !bnNone) {
                  setActiveField('businessNumber');
                  setShowKeyboard(true);
                  setShowQwertyKeyboard(false);
                }
              }}
              disabled={bnUnknown || bnNone}
              className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF] font-mono disabled:bg-[#f2f2f7] disabled:text-gray-ios"
              placeholder="000000000 AA 0000"
              maxLength={17}
            />
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="bn-unknown"
                  checked={bnUnknown}
                  onCheckedChange={(checked) => {
                    setBnUnknown(checked as boolean);
                    if (checked) {
                      setBusinessNumber('');
                      setBnNone(false);
                      setShowKeyboard(false);
                      setShowQwertyKeyboard(false);
                      setActiveField(null);
                    }
                  }}
                  className="border-[#c6c6c8] data-[state=checked]:bg-[#007AFF] data-[state=checked]:border-[#007AFF]"
                />
                <label
                  htmlFor="bn-unknown"
                  className="text-[15px] text-black cursor-pointer"
                >
                  Unknown
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="bn-none"
                  checked={bnNone}
                  onCheckedChange={(checked) => {
                    setBnNone(checked as boolean);
                    if (checked) {
                      setBusinessNumber('');
                      setBnUnknown(false);
                      setShowKeyboard(false);
                      setShowQwertyKeyboard(false);
                      setActiveField(null);
                    }
                  }}
                  className="border-[#c6c6c8] data-[state=checked]:bg-[#007AFF] data-[state=checked]:border-[#007AFF]"
                />
                <label
                  htmlFor="bn-none"
                  className="text-[15px] text-black cursor-pointer"
                >
                  None
                </label>
              </div>
            </div>
          </div>

          {/* Province or territory */}
          <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px]">
            <Label className="text-black text-[17px] block mb-2">Province or territory where the work is, or was, done</Label>
            <Input
              id="provinceTerritory"
              type="text"
              inputMode="none"
              value={provinceTerritory}
              onChange={(e) => setProvinceTerritory(e.target.value)}
              onFocus={() => {
                setActiveField('provinceTerritory');
                setShowQwertyKeyboard(true);
                setShowKeyboard(false);
              }}
              autoComplete="off"
              className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF]"
              placeholder="Enter province or territory"
            />
          </div>

          {/* Nature of the business */}
          <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px]">
            <Label className="text-black text-[17px] block mb-2">Nature of the business</Label>
            <Input
              id="natureOfBusiness"
              type="text"
              inputMode="none"
              value={natureOfBusiness}
              onChange={(e) => setNatureOfBusiness(e.target.value)}
              onFocus={() => {
                setActiveField('natureOfBusiness');
                setShowQwertyKeyboard(true);
                setShowKeyboard(false);
              }}
              autoComplete="off"
              className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF]"
              placeholder="Enter nature of the business"
            />
          </div>

          {/* Contact 1 Section */}
          <div className="mt-6 pt-4 border-t border-[#E5E5EA]">
            <h3 className="text-[17px] font-semibold text-black mb-1">Contact 1</h3>
            <p className="text-[13px] text-[#8E8E93] mb-4">
              Who can give the CRA information on the day-to-day operation of the business and on the employment conditions of the worker?
            </p>

            <div className="space-y-4">
              {/* Contact 1 Name */}
              <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px]">
                <Label className="text-black text-[17px] block mb-2">Name</Label>
                <Input
                  id="contact1Name"
                  type="text"
                  inputMode="none"
                  value={contact1Name}
                  onChange={(e) => setContact1Name(e.target.value)}
                  onFocus={() => {
                    setActiveField('contact1Name');
                    setShowQwertyKeyboard(true);
                    setShowKeyboard(false);
                  }}
                  autoComplete="off"
                  className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF]"
                  placeholder="Enter name"
                />
              </div>

              {/* Contact 1 Title */}
              <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px]">
                <Label className="text-black text-[17px] block mb-2">Title or position</Label>
                <Input
                  id="contact1Title"
                  type="text"
                  inputMode="none"
                  value={contact1Title}
                  onChange={(e) => setContact1Title(e.target.value)}
                  onFocus={() => {
                    setActiveField('contact1Title');
                    setShowQwertyKeyboard(true);
                    setShowKeyboard(false);
                  }}
                  autoComplete="off"
                  className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF]"
                  placeholder="Enter title or position"
                />
              </div>

              {/* Contact 1 Phone Numbers */}
              <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px] space-y-4">
                <Label className="text-black text-[17px] block">Telephone numbers</Label>
                
                {/* Cell */}
                <div>
                  <Label className="text-gray-ios text-[15px] block mb-2">Cell phone</Label>
                  <Input
                    id="contact1Cell"
                    type="text"
                    inputMode="none"
                    value={contact1Cell}
                    onChange={(e) => handlePhoneChange('contact1Cell', e.target.value)}
                    onFocus={() => {
                      setActiveField('contact1Cell');
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
                  <Label className="text-gray-ios text-[15px] block mb-2">Work telephone</Label>
                  <Input
                    id="contact1Work"
                    type="text"
                    inputMode="none"
                    value={contact1Work}
                    onChange={(e) => handlePhoneChange('contact1Work', e.target.value)}
                    onFocus={() => {
                      setActiveField('contact1Work');
                      setShowKeyboard(true);
                      setShowQwertyKeyboard(false);
                    }}
                    className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF] font-mono"
                    placeholder="000-000-0000"
                    maxLength={12}
                  />
                </div>
              </div>

              {/* Contact 1 Preferred language */}
              <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px]">
                <Label className="text-black text-[17px] block mb-3">Preferred language for interview</Label>
                <RadioGroup 
                  value={contact1Language || ''} 
                  onValueChange={(value) => setContact1Language(value as 'english' | 'french')}
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <RadioGroupItem value="english" id="contact1-english" className="border-[#c6c6c8] text-[#007AFF]" />
                    <label htmlFor="contact1-english" className="text-[17px] text-black cursor-pointer">
                      English
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="french" id="contact1-french" className="border-[#c6c6c8] text-[#007AFF]" />
                    <label htmlFor="contact1-french" className="text-[17px] text-black cursor-pointer">
                      French
                    </label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          {/* Contact 2 Section */}
          <div className="mt-6 pt-4 border-t border-[#E5E5EA]">
            <h3 className="text-[17px] font-semibold text-black mb-4">Contact 2 (optional)</h3>

            <div className="space-y-4">
              {/* Contact 2 Name */}
              <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px]">
                <Label className="text-black text-[17px] block mb-2">Name</Label>
                <Input
                  id="contact2Name"
                  type="text"
                  inputMode="none"
                  value={contact2Name}
                  onChange={(e) => setContact2Name(e.target.value)}
                  onFocus={() => {
                    setActiveField('contact2Name');
                    setShowQwertyKeyboard(true);
                    setShowKeyboard(false);
                  }}
                  autoComplete="off"
                  className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF]"
                  placeholder="Enter name"
                />
              </div>

              {/* Contact 2 Title */}
              <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px]">
                <Label className="text-black text-[17px] block mb-2">Title or position</Label>
                <Input
                  id="contact2Title"
                  type="text"
                  inputMode="none"
                  value={contact2Title}
                  onChange={(e) => setContact2Title(e.target.value)}
                  onFocus={() => {
                    setActiveField('contact2Title');
                    setShowQwertyKeyboard(true);
                    setShowKeyboard(false);
                  }}
                  autoComplete="off"
                  className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF]"
                  placeholder="Enter title or position"
                />
              </div>

              {/* Contact 2 Phone Numbers */}
              <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px] space-y-4">
                <Label className="text-black text-[17px] block">Telephone numbers</Label>
                
                {/* Cell */}
                <div>
                  <Label className="text-gray-ios text-[15px] block mb-2">Cell phone</Label>
                  <Input
                    id="contact2Cell"
                    type="text"
                    inputMode="none"
                    value={contact2Cell}
                    onChange={(e) => handlePhoneChange('contact2Cell', e.target.value)}
                    onFocus={() => {
                      setActiveField('contact2Cell');
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
                  <Label className="text-gray-ios text-[15px] block mb-2">Work telephone</Label>
                  <Input
                    id="contact2Work"
                    type="text"
                    inputMode="none"
                    value={contact2Work}
                    onChange={(e) => handlePhoneChange('contact2Work', e.target.value)}
                    onFocus={() => {
                      setActiveField('contact2Work');
                      setShowKeyboard(true);
                      setShowQwertyKeyboard(false);
                    }}
                    className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF] font-mono"
                    placeholder="000-000-0000"
                    maxLength={12}
                  />
                </div>
              </div>

              {/* Contact 2 Preferred language */}
              <div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px]">
                <Label className="text-black text-[17px] block mb-3">Preferred language for interview</Label>
                <RadioGroup 
                  value={contact2Language || ''} 
                  onValueChange={(value) => setContact2Language(value as 'english' | 'french')}
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <RadioGroupItem value="english" id="contact2-english" className="border-[#c6c6c8] text-[#007AFF]" />
                    <label htmlFor="contact2-english" className="text-[17px] text-black cursor-pointer">
                      English
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="french" id="contact2-french" className="border-[#c6c6c8] text-[#007AFF]" />
                    <label htmlFor="contact2-french" className="text-[17px] text-black cursor-pointer">
                      French
                    </label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="flex-shrink-0 bg-white border-t border-[#E5E5EA] p-4">
        <button
          onClick={handleContinue}
          className="w-full py-3 px-4 rounded-[10px] bg-[#007AFF] text-white hover:bg-[#0051D5] active:bg-[#004BB8] transition-all"
        >
          Continue to Step 5
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

      {/* Alphanumeric Keyboard (for mailing address) */}
      <AnimatePresence>
        {showAlphanumericKeyboard && (
          <>
            {console.log('Rendering alphanumeric keyboard')}
            <IPhoneAlphanumericKeyboard key="alphanumeric-keyboard" onKeyPress={handleAlphanumericKeyPress} onDone={handleAlphanumericKeyboardDone} />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}