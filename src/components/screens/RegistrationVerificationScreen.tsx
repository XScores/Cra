import { ChevronLeft, Mail, Smartphone, RefreshCw, HelpCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IPhoneKeyboard } from '../IPhoneKeyboard';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import regHeaderImg from 'figma:asset/f3f82fb93af1b2177d8464ea9850e7d9c259ddc7.png';
import { StepIndicator } from '../StepIndicator';

interface RegistrationVerificationScreenProps {
  email: string;
  phone: string;
  onVerify: (code: string) => void;
  onBack: () => void;
  onShowHelp?: () => void;
  onStepClick?: (step: number) => void;
}

export function RegistrationVerificationScreen({ email, phone, onVerify, onBack, onShowHelp, onStepClick }: RegistrationVerificationScreenProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [method, setMethod] = useState<'email' | 'sms'>('email');
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const codeInputContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  useEffect(() => {
    // Auto-submit when all digits are entered
    if (code.every(digit => digit !== '')) {
      const fullCode = code.join('');
      setTimeout(() => {
        onVerify(fullCode);
      }, 300);
    }
  }, [code, onVerify]);

  // Scroll code input into view when keyboard shows
  useEffect(() => {
    if (showKeyboard && codeInputContainerRef.current && scrollContainerRef.current) {
      setTimeout(() => {
        const container = scrollContainerRef.current;
        const codeInput = codeInputContainerRef.current;
        
        if (container && codeInput) {
          const containerRect = container.getBoundingClientRect();
          const codeInputRect = codeInput.getBoundingClientRect();
          
          // Calculate how much to scroll to position code input with some padding above
          const targetScrollTop = container.scrollTop + (codeInputRect.top - containerRect.top) - 20;
          
          container.scrollTo({
            top: targetScrollTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [showKeyboard]);

  const handleCodeChange = (index: number, value: string) => {
    // Only allow numeric input
    if (value && !/^[0-9]$/.test(value)) {
      return;
    }

    if (value.length > 1) {
      value = value.slice(-1);
    }

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    if (canResend) {
      setCode(['', '', '', '', '', '']);
      setResendTimer(60);
      setCanResend(false);
      inputRefs.current[0]?.focus();
    }
  };

  const maskEmail = (email: string) => {
    const [name, domain] = email.split('@');
    if (name.length <= 2) return email;
    return `${name[0]}${'*'.repeat(name.length - 2)}${name[name.length - 1]}@${domain}`;
  };

  const maskPhone = (phone: string) => {
    const digits = phone.replace(/\D/g, '');
    return `(***) ***-${digits.slice(-4)}`;
  };

  return (
    <motion.div 
      className="h-full bg-[#f2f2f7] flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: isMounted ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        // Don't close keyboard if clicking on input, button, or keyboard itself
        if (!target.closest('input') && !target.closest('[data-keyboard="true"]') && !target.closest('button')) {
          setShowKeyboard(false);
        }
      }}
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
        <StepIndicator currentStep={5} totalSteps={5} onStepClick={onStepClick} />
      </div>

      <div 
        className="flex-1 overflow-y-auto px-4"
        style={{ paddingBottom: showKeyboard ? '280px' : '96px' }}
        ref={scrollContainerRef}
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
            <h1 className="text-[28px] font-bold text-black m-0">Verify your identity</h1>
          </div>
          <p className="text-[15px] text-black opacity-80 m-0 ml-[42.6px]">
            Choose how you'd like to receive your verification code, then enter the 6-digit code.
          </p>
        </div>

        {/* Verification Method Radio Buttons */}
        <div className="card-ios p-4 mb-6">
          <h2 className="text-[17px] font-semibold text-black m-0 mb-3">Delivery method</h2>
          <RadioGroup 
            value={method} 
            onValueChange={(value) => setMethod(value as 'email' | 'sms')}
            className="gap-3"
          >
            {/* Email Option */}
            <label 
              htmlFor="method-email"
              className="flex items-center gap-3 p-3 rounded-[10px] border border-[#c7c7cc] bg-white cursor-pointer hover:bg-[#f2f2f7] active:opacity-70 transition-all"
            >
              <RadioGroupItem 
                value="email" 
                id="method-email"
                className="border-[#007AFF] text-[#007AFF]"
              />
              <Mail className="h-5 w-5 text-[#007AFF]" strokeWidth={2} />
              <div className="flex-1">
                <div className="text-[15px] text-black font-medium">Email</div>
                <div className="text-[13px] text-black opacity-60">{maskEmail(email)}</div>
              </div>
            </label>

            {/* SMS Option */}
            <label 
              htmlFor="method-sms"
              className="flex items-center gap-3 p-3 rounded-[10px] border border-[#c7c7cc] bg-white cursor-pointer hover:bg-[#f2f2f7] active:opacity-70 transition-all"
            >
              <RadioGroupItem 
                value="sms" 
                id="method-sms"
                className="border-[#007AFF] text-[#007AFF]"
              />
              <Smartphone className="h-5 w-5 text-[#007AFF]" strokeWidth={2} />
              <div className="flex-1">
                <div className="text-[15px] text-black font-medium">Text message</div>
                <div className="text-[13px] text-black opacity-60">{maskPhone(phone)}</div>
              </div>
            </label>
          </RadioGroup>
        </div>

        {/* Code Input */}
        <div className="mb-6" ref={codeInputContainerRef}>
          <div className="flex gap-2 justify-center mb-4">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => inputRefs.current[index] = el}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onFocus={() => setShowKeyboard(true)}
                className="w-12 h-14 text-center text-[24px] font-semibold bg-white border-2 border-[#c7c7cc] rounded-[10px] focus:border-[#007AFF] focus:ring-0 focus:outline-none transition-colors"
              />
            ))}
          </div>

          {/* Resend Code */}
          <div className="text-center">
            {canResend ? (
              <button
                onClick={handleResend}
                className="flex items-center justify-center gap-2 text-[#007AFF] text-[15px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity mx-auto"
              >
                <RefreshCw className="h-4 w-4" strokeWidth={2} />
                <span>Resend code</span>
              </button>
            ) : (
              <p className="text-[15px] text-black opacity-60 m-0">
                Resend code in {resendTimer}s
              </p>
            )}
          </div>
        </div>

        {/* Help Text */}
        <div className="card-ios p-4 bg-[#f2f2f7]">
          <p className="text-[13px] text-black opacity-60 m-0 text-center">
            Didn't receive the code? Check your spam folder or try resending.
          </p>
        </div>
      </div>

      {/* iPhone Keyboard */}
      <AnimatePresence>
        {showKeyboard && (
          <IPhoneKeyboard 
            key="numeric-keyboard"
            onKeyPress={(key) => {
              const activeElement = document.activeElement as HTMLInputElement;
              if (activeElement && activeElement.tagName === 'INPUT') {
                // Find which input is currently focused
                const currentIndex = inputRefs.current.indexOf(activeElement);
                if (currentIndex === -1) return;

                if (key === 'backspace') {
                  // Clear current field or move to previous
                  if (code[currentIndex]) {
                    const newCode = [...code];
                    newCode[currentIndex] = '';
                    setCode(newCode);
                  } else if (currentIndex > 0) {
                    const newCode = [...code];
                    newCode[currentIndex - 1] = '';
                    setCode(newCode);
                    inputRefs.current[currentIndex - 1]?.focus();
                  }
                } else if (/^[0-9]$/.test(key)) {
                  // Only accept numeric digits
                  const newCode = [...code];
                  newCode[currentIndex] = key;
                  setCode(newCode);
                  
                  // Auto-advance to next field
                  if (currentIndex < 5) {
                    inputRefs.current[currentIndex + 1]?.focus();
                  }
                }
              }
            }}
            onDone={() => setShowKeyboard(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}