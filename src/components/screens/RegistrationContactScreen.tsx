import { ChevronLeft, ChevronRight, HelpCircle, Info, Mail, Smartphone } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { IPhoneEmailKeyboard } from '../IPhoneEmailKeyboard';
import { IPhoneNumericKeyboard } from '../IPhoneNumericKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';
import regHeaderImg from 'figma:asset/f3f82fb93af1b2177d8464ea9850e7d9c259ddc7.png';
import { formatPhoneNumber } from '../../utils/formatPhone';
import { StepIndicator } from '../StepIndicator';

interface RegistrationContactScreenProps {
  onNext: (data: ContactData) => void;
  onBack: () => void;
  onShowHelp?: () => void;
  onStepClick?: (step: number) => void;
}

export interface ContactData {
  email: string;
  phone: string;
  preferredContact: 'email' | 'sms' | 'both';
}

export function RegistrationContactScreen({ onNext, onBack, onShowHelp, onStepClick }: RegistrationContactScreenProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Use keyboard scroll hook
  useKeyboardScroll({ 
    isKeyboardVisible: showKeyboard, 
    activeField,
    keyboardHeight: 270,
    scrollContainerRef,
    headerOffset: 100
  });

  const handlePhoneChange = (value: string) => {
    setPhone(formatPhoneNumber(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ email, phone, preferredContact: 'both' });
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Disabled for demonstration purposes - allow navigation without filling fields
  const isValid = true; // isValidEmail(email) && 
                  // email === confirmEmail && 
                  // phone.replace(/\D/g, '').length === 10;

  const handleFieldFocus = (fieldName: string) => {
    setActiveField(fieldName);
    setShowKeyboard(true);
  };

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      if (activeField === 'email') {
        setEmail(prev => prev.slice(0, -1));
      } else if (activeField === 'confirmEmail') {
        setConfirmEmail(prev => prev.slice(0, -1));
      } else if (activeField === 'phone') {
        const cleaned = phone.replace(/\D/g, '');
        setPhone(formatPhoneNumber(cleaned.slice(0, -1)));
      }
    } else {
      if (activeField === 'email') {
        setEmail(prev => prev + key);
      } else if (activeField === 'confirmEmail') {
        setConfirmEmail(prev => prev + key);
      } else if (activeField === 'phone') {
        const cleaned = phone.replace(/\D/g, '') + key;
        if (cleaned.length <= 10) {
          setPhone(formatPhoneNumber(cleaned));
        }
      }
    }
  };

  const handleKeyboardDone = () => {
    setShowKeyboard(false);
    setActiveField(null);
  };

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
        <StepIndicator currentStep={3} totalSteps={5} onStepClick={onStepClick} />
      </div>

      <div 
        className="flex-1 overflow-y-auto px-4"
        style={{ paddingBottom: showKeyboard ? '350px' : '96px' }}
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
            <h1 className="text-[28px] font-bold text-black m-0">Contact information</h1>
          </div>
          <p className="text-[15px] text-black opacity-80 m-0 ml-[42.6px]">
            Provide an email and phone number for account security and notifications.
          </p>
        </div>

        {/* Info Alert */}
        <div className="card-ios p-4 bg-[#007AFF]/5 border border-[#007AFF]/20 mb-4">
          <div className="flex items-start gap-2">
            <Info className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-[15px] text-black m-0">
              We'll send a verification code to confirm your contact information.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="card-ios p-4 space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="h-5 w-5 text-[#007AFF]" strokeWidth={2} />
              <h2 className="text-[17px] font-semibold text-black m-0">Email address</h2>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-black text-[15px] font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                inputMode="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => handleFieldFocus('email')}
                placeholder="your.email@example.com"
                className="h-11 bg-[#f2f2f7] border-[#c7c7cc] rounded-[10px] focus:border-[#007AFF] focus:ring-[#007AFF] text-[17px] placeholder:text-[#8e8e93]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmEmail" className="text-black text-[15px] font-medium">
                Confirm email
              </Label>
              <Input
                id="confirmEmail"
                type="email"
                inputMode="email"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
                onFocus={() => handleFieldFocus('confirmEmail')}
                placeholder="Confirm your email"
                className="h-11 bg-[#f2f2f7] border-[#c7c7cc] rounded-[10px] focus:border-[#007AFF] focus:ring-[#007AFF] text-[17px] placeholder:text-[#8e8e93]"
              />
              {confirmEmail && email !== confirmEmail && (
                <p className="text-[13px] text-[#ff3b30] m-0">Email addresses do not match</p>
              )}
            </div>
          </div>

          {/* Phone */}
          <div className="card-ios p-4 space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <Smartphone className="h-5 w-5 text-[#007AFF]" strokeWidth={2} />
              <h2 className="text-[17px] font-semibold text-black m-0">Mobile number</h2>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-black text-[15px] font-medium">
                Phone number
              </Label>
              <Input
                id="phone"
                type="tel"
                inputMode="tel"
                value={phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                onFocus={() => handleFieldFocus('phone')}
                placeholder="(555) 123-4567"
                className="h-11 bg-[#f2f2f7] border-[#c7c7cc] rounded-[10px] focus:border-[#007AFF] focus:ring-[#007AFF] text-[17px] placeholder:text-[#8e8e93]"
              />
            </div>

            <p className="text-[13px] text-black opacity-60 m-0">
              Used for two-step verification and account security alerts
            </p>
          </div>
        </form>
      </div>

      {/* Fixed bottom button */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#c7c7cc] px-4 pt-3 pb-[20px]">
        <button
          onClick={handleSubmit}
          disabled={!isValid}
          className="btn-filled-ios w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>Continue</span>
          <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
        </button>
      </div>

      {/* iPhone Keyboard */}
      <AnimatePresence>
        {showKeyboard && activeField && activeField === 'phone' && (
          <IPhoneNumericKeyboard 
            key={activeField}
            onKeyPress={handleKeyPress}
            onDone={handleKeyboardDone}
          />
        )}
        {showKeyboard && activeField && (activeField === 'email' || activeField === 'confirmEmail') && (
          <IPhoneEmailKeyboard key={activeField} onKeyPress={handleKeyPress} onDone={handleKeyboardDone} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}