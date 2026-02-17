import { ChevronLeft, ChevronRight, Plus, X, Info, HelpCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { IPhoneKeyboard } from '../IPhoneKeyboard';
import { IPhoneNumericKeyboard } from '../IPhoneNumericKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';
import regHeaderImg from 'figma:asset/f3f82fb93af1b2177d8464ea9850e7d9c259ddc7.png';
import { formatSIN } from '../../utils/formatSIN';
import { StepIndicator } from '../StepIndicator';

interface RegistrationPersonalInfoScreenProps {
  onNext: (data: PersonalInfoData) => void;
  onBack: () => void;
  onShowHelp?: () => void;
  onStepClick?: (step: number) => void;
}

export interface PersonalInfoData {
  sin: string;
  firstName: string;
  middleNames: string[];
  lastName: string;
  dateOfBirth: string;
}

export function RegistrationPersonalInfoScreen({ onNext, onBack, onShowHelp, onStepClick }: RegistrationPersonalInfoScreenProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [sin, setSin] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleNames, setMiddleNames] = useState<string[]>(['']);
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const addMiddleName = () => {
    setMiddleNames([...middleNames, '']);
  };

  const removeMiddleName = (index: number) => {
    if (middleNames.length > 1) {
      setMiddleNames(middleNames.filter((_, i) => i !== index));
    }
  };

  const updateMiddleName = (index: number, value: string) => {
    const newMiddleNames = [...middleNames];
    newMiddleNames[index] = value;
    setMiddleNames(newMiddleNames);
  };

  const formatDate = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 4) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 4)}-${numbers.slice(4)}`;
    return `${numbers.slice(0, 4)}-${numbers.slice(4, 6)}-${numbers.slice(6, 8)}`;
  };

  const handleSinChange = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 9) {
      setSin(formatSIN(numbers));
    }
  };

  const handleDateChange = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 8) {
      setDateOfBirth(formatDate(numbers));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ sin, firstName, middleNames, lastName, dateOfBirth });
  };

  // Disabled for demonstration purposes - allow navigation without filling fields
  const isValid = true; // sin.replace(/\D/g, '').length === 9 && 
                  // firstName.trim() && 
                  // lastName.trim() && 
                  // dateOfBirth.replace(/\D/g, '').length === 8;

  const handleFieldFocus = (fieldName: string) => {
    setActiveField(fieldName);
    setShowKeyboard(true);
  };

  const handleFieldBlur = () => {
    // Don't immediately hide keyboard to allow switching between fields
  };

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      if (activeField === 'sin') {
        const numbers = sin.replace(/\D/g, '');
        setSin(formatSIN(numbers.slice(0, -1)));
      } else if (activeField === 'dob') {
        const numbers = dateOfBirth.replace(/\D/g, '');
        setDateOfBirth(formatDate(numbers.slice(0, -1)));
      } else if (activeField === 'firstName') {
        setFirstName(prev => prev.slice(0, -1));
      } else if (activeField === 'lastName') {
        setLastName(prev => prev.slice(0, -1));
      } else if (activeField?.startsWith('middleName')) {
        const index = parseInt(activeField.replace('middleName', ''));
        updateMiddleName(index, middleNames[index].slice(0, -1));
      }
    } else {
      if (activeField === 'sin') {
        const numbers = sin.replace(/\D/g, '') + key;
        if (numbers.length <= 9) {
          setSin(formatSIN(numbers));
        }
      } else if (activeField === 'dob') {
        const numbers = dateOfBirth.replace(/\D/g, '') + key;
        if (numbers.length <= 8) {
          setDateOfBirth(formatDate(numbers));
        }
      } else if (activeField === 'firstName') {
        setFirstName(prev => prev + key);
      } else if (activeField === 'lastName') {
        setLastName(prev => prev + key);
      } else if (activeField?.startsWith('middleName')) {
        const index = parseInt(activeField.replace('middleName', ''));
        updateMiddleName(index, middleNames[index] + key);
      }
    }
  };

  const handleKeyboardDone = () => {
    setShowKeyboard(false);
    setActiveField(null);
  };

  // Determine keyboard height based on active field
  // Numeric keyboard (sin, dob): 290px
  // Text keyboard (names): 220px
  const isNumericKeyboard = activeField === 'sin' || activeField === 'dob';
  const keyboardHeight = isNumericKeyboard ? 290 : 220;

  // Use keyboard scroll hook
  useKeyboardScroll({ 
    isKeyboardVisible: showKeyboard, 
    activeField,
    keyboardHeight,
    scrollContainerRef,
    headerOffset: 100 // Account for sticky header height
  });

  return (
    <motion.div 
      className="h-full bg-[#f2f2f7] flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: isMounted ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Registration Header - Fixed at top */}
      <div className="flex-shrink-0 relative">
        <img 
          src={regHeaderImg} 
          alt="My Account" 
          className="w-full h-auto block"
          style={{ objectFit: 'cover' }}
        />
        {/* Help Button */}
        {onShowHelp && (
          <button
            onClick={onShowHelp}
            className="absolute top-[23px] right-4 flex items-center gap-1.5 bg-transparent border-0 cursor-pointer hover:opacity-70 active:opacity-50 transition-opacity z-10"
          >
            <HelpCircle className="h-5 w-5 text-[#007AFF]" strokeWidth={2} />
            <span className="text-[#007AFF] text-[15px]">Help</span>
          </button>
        )}
      </div>

      {/* Progress - Fixed outside scrolling area */}
      <div className="flex-shrink-0 bg-[#f2f2f7]">
        <StepIndicator currentStep={1} totalSteps={5} onStepClick={onStepClick} />
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto px-4"
        style={{ 
          paddingBottom: showKeyboard ? `${keyboardHeight + 150}px` : '96px'
        }}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-[#f2f2f7] z-10 py-3">
          <div className="flex items-center gap-3 mb-2">
            <button
              onClick={onBack}
              className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={3} />
            </button>
            <h1 className="text-[28px] font-bold text-black m-0">Personal information</h1>
          </div>
          <p className="text-[15px] text-black opacity-80 m-0 ml-[42.6px]">
            Enter your information exactly as it appears on your tax documents.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* SIN */}
          <div className="card-ios p-4 space-y-3">
            <div className="space-y-2">
              <Label htmlFor="sin" className="text-black text-[15px] font-medium">
                Social Insurance Number (SIN)
              </Label>
              <Input
                id="sin"
                type="text"
                inputMode="none"
                value={sin}
                onChange={(e) => handleSinChange(e.target.value)}
                onFocus={() => handleFieldFocus('sin')}
                onBlur={handleFieldBlur}
                placeholder="000-000-000"
                className="h-11 bg-[#f2f2f7] border-[#c7c7cc] rounded-[10px] focus:border-[#007AFF] focus:ring-[#007AFF] text-[17px] placeholder:text-[#8e8e93]"
              />
            </div>
            
            <div className="flex items-start gap-2 bg-[#007AFF]/5 p-3 rounded-[8px] border-l-4 border-l-[#007AFF]">
              <Info className="h-4 w-4 text-[#007AFF] flex-shrink-0 mt-0.5" strokeWidth={2} />
              <p className="text-[13px] text-black opacity-80 m-0">
                Your SIN is required to verify your identity with CRA records.
              </p>
            </div>
          </div>

          {/* Name */}
          <div className="card-ios p-4 space-y-3">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-black text-[15px] font-medium">
                First name
              </Label>
              <Input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onFocus={() => handleFieldFocus('firstName')}
                onBlur={handleFieldBlur}
                placeholder="Enter your first name"
                className="h-11 bg-[#f2f2f7] border-[#c7c7cc] rounded-[10px] focus:border-[#007AFF] focus:ring-[#007AFF] text-[17px] placeholder:text-[#8e8e93]"
              />
            </div>

            {middleNames.map((middleName, index) => (
              <div key={index} className="space-y-2">
                <Label htmlFor={`middleName${index}`} className="text-black text-[15px] font-medium">
                  Middle name(s) {middleNames.length > 1 ? `${index + 1}` : ''}
                  <span className="text-[#8e8e93] font-normal ml-1">(optional)</span>
                </Label>
                <div className="relative">
                  <Input
                    id={`middleName${index}`}
                    type="text"
                    value={middleName}
                    onChange={(e) => updateMiddleName(index, e.target.value)}
                    onFocus={() => handleFieldFocus(`middleName${index}`)}
                    onBlur={handleFieldBlur}
                    placeholder="Enter your middle name(s)"
                    className={`h-11 bg-[#f2f2f7] border-[#c7c7cc] rounded-[10px] focus:border-[#007AFF] focus:ring-[#007AFF] text-[17px] placeholder:text-[#8e8e93] ${middleNames.length > 1 ? 'pr-20' : 'pr-12'}`}
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                    {middleNames.length > 1 && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          removeMiddleName(index);
                        }}
                        className="p-1.5 text-[#ff3b30] hover:opacity-70 transition-opacity bg-transparent border-0"
                      >
                        <X size={20} />
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        addMiddleName();
                      }}
                      className="p-1.5 text-[#007AFF] hover:opacity-70 transition-opacity bg-transparent border-0"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-black text-[15px] font-medium">
                Last name
              </Label>
              <Input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onFocus={() => handleFieldFocus('lastName')}
                onBlur={handleFieldBlur}
                placeholder="Enter your last name"
                className="h-11 bg-[#f2f2f7] border-[#c7c7cc] rounded-[10px] focus:border-[#007AFF] focus:ring-[#007AFF] text-[17px] placeholder:text-[#8e8e93]"
              />
            </div>
          </div>

          {/* Date of Birth */}
          <div className="card-ios p-4 space-y-2">
            <Label htmlFor="dob" className="text-black text-[15px] font-medium">
              Date of birth
            </Label>
            <div className="relative">
              {/* Placeholder overlay that stays visible */}
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[17px] text-[#8e8e93] pointer-events-none select-none font-mono">
                {dateOfBirth.length > 0 ? (
                  <>
                    {dateOfBirth.split('').map((char, idx) => (
                      <span key={idx} className="invisible">{char}</span>
                    ))}
                    {"YYYY-MM-DD".slice(dateOfBirth.length)}
                  </>
                ) : (
                  "YYYY-MM-DD"
                )}
              </div>
              <Input
                id="dob"
                type="text"
                inputMode="none"
                value={dateOfBirth}
                onChange={(e) => handleDateChange(e.target.value)}
                onFocus={() => handleFieldFocus('dob')}
                onBlur={handleFieldBlur}
                placeholder=""
                className="h-11 bg-[#f2f2f7] border-[#c7c7cc] rounded-[10px] focus:border-[#007AFF] focus:ring-[#007AFF] text-[17px] font-mono"
              />
            </div>
          </div>

          {/* Continue Button */}
          <div className="mt-6 mb-4">
            <button
              onClick={handleSubmit}
              disabled={!isValid}
              className="btn-filled-ios w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Continue</span>
              <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
            </button>
          </div>
        </form>
      </div>

      {/* iPhone Keyboard */}
      <AnimatePresence>
        {showKeyboard && activeField && (activeField === 'sin' || activeField === 'dob') && (
          <IPhoneNumericKeyboard 
            key={activeField}
            onKeyPress={handleKeyPress}
            onDone={handleKeyboardDone}
          />
        )}
        {showKeyboard && activeField && (activeField === 'firstName' || activeField === 'lastName' || activeField.startsWith('middleName')) && (
          <IPhoneKeyboard key={activeField} onKeyPress={handleKeyPress} onDone={handleKeyboardDone} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}