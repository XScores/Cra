import { ChevronLeft, ChevronRight, Eye, EyeOff, Info, Shield, HelpCircle, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { IPhoneKeyboard } from '../IPhoneKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';
import regHeaderImg from 'figma:asset/f3f82fb93af1b2177d8464ea9850e7d9c259ddc7.png';
import { StepIndicator } from '../StepIndicator';

interface RegistrationSecurityScreenProps {
  onNext: (data: SecurityData) => void;
  onBack: () => void;
  onShowHelp?: () => void;
  onStepClick?: (step: number) => void;
}

export interface SecurityData {
  password: string;
  securityQuestion: string;
  securityAnswer: string;
}

const SECURITY_QUESTIONS = [
  "What was your first pet's name?",
  "What is your mother's maiden name?",
  "What elementary school did you attend?",
  "In what city were you born?",
  "What was your childhood nickname?",
  "Who was your favorite teacher?",
];

export function RegistrationSecurityScreen({ onNext, onBack, onShowHelp, onStepClick }: RegistrationSecurityScreenProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [showQuestionPicker, setShowQuestionPicker] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Use keyboard scroll hook
  useKeyboardScroll({ 
    isKeyboardVisible: showKeyboard, 
    activeField,
    keyboardHeight: 260
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ password, securityQuestion, securityAnswer });
  };

  const passwordRequirements = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const isPasswordValid = Object.values(passwordRequirements).every(Boolean);
  const passwordsMatch = password === confirmPassword && password.length > 0;

  // Disabled for demonstration purposes - allow navigation without filling fields
  const isValid = true; // isPasswordValid && 
                  // passwordsMatch && 
                  // securityQuestion && 
                  // securityAnswer.trim().length >= 3;

  const handleFieldFocus = (fieldName: string) => {
    setActiveField(fieldName);
    setShowKeyboard(true);
  };

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      if (activeField === 'password') {
        setPassword(prev => prev.slice(0, -1));
      } else if (activeField === 'confirmPassword') {
        setConfirmPassword(prev => prev.slice(0, -1));
      } else if (activeField === 'answer') {
        setSecurityAnswer(prev => prev.slice(0, -1));
      }
    } else {
      if (activeField === 'password') {
        setPassword(prev => prev + key);
      } else if (activeField === 'confirmPassword') {
        setConfirmPassword(prev => prev + key);
      } else if (activeField === 'answer') {
        setSecurityAnswer(prev => prev + key);
      }
    }
  };

  const handleKeyboardDone = () => {
    setShowKeyboard(false);
    setActiveField(null);
  };

  return (
    <motion.div 
      className="h-full bg-[#f2f2f7] flex flex-col relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: isMounted ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        // Check if click is on keyboard or its children
        const isKeyboard = target.closest('[data-keyboard="true"]');
        if (!target.closest('input') && 
            !target.closest('button[type="button"]') && 
            !isKeyboard) {
          setShowKeyboard(false);
          setActiveField(null);
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
        <StepIndicator currentStep={4} totalSteps={5} onStepClick={onStepClick} />
      </div>

      <div 
        className="flex-1 overflow-y-auto px-4"
        style={{ paddingBottom: showKeyboard ? '460px' : '96px' }}
      >
        {/* Header */}
        <div className="bg-[#f2f2f7] py-3">
          <div className="flex items-center gap-3 mb-2">
            <button
              onClick={onBack}
              className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={3} />
            </button>
            <h1 className="text-[28px] font-bold text-black m-0">Security setup</h1>
          </div>
          <p className="text-[15px] text-black opacity-80 m-0 ml-[42.6px]">
            Create a strong password and security question to protect your account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Password */}
          <div className="card-ios p-4 space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-5 w-5 text-[#007AFF]" strokeWidth={2} />
              <h2 className="text-[17px] font-semibold text-black m-0">Create password</h2>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-black text-[15px] font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => handleFieldFocus('password')}
                  placeholder="Create a strong password"
                  className="h-11 bg-[#f2f2f7] border-[#c7c7cc] rounded-[10px] pr-11 focus:border-[#007AFF] focus:ring-[#007AFF] text-[17px] placeholder:text-[#8e8e93]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8e8e93] hover:text-[#007AFF] transition-colors bg-transparent border-0 p-0"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-black text-[15px] font-medium">
                Confirm password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onFocus={() => handleFieldFocus('confirmPassword')}
                  placeholder="Re-enter your password"
                  className="h-11 bg-[#f2f2f7] border-[#c7c7cc] rounded-[10px] pr-11 focus:border-[#007AFF] focus:ring-[#007AFF] text-[17px] placeholder:text-[#8e8e93]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8e8e93] hover:text-[#007AFF] transition-colors bg-transparent border-0 p-0"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {confirmPassword && !passwordsMatch && (
                <p className="text-[13px] text-[#ff3b30] m-0">Passwords do not match</p>
              )}
            </div>

            {/* Password Requirements */}
            <div className="bg-[#f2f2f7] p-3 rounded-[8px] space-y-1.5">
              <p className="text-[15px] font-semibold text-black m-0 mb-2">Password must contain:</p>
              <div className="space-y-1">
                <div className={`flex items-center justify-between gap-2 px-2 py-1 rounded-[6px] transition-all ${passwordRequirements.length ? 'bg-[#d1f4da]' : ''}`}>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${passwordRequirements.length ? 'bg-[#1d7a35]' : 'bg-[#8e8e93]'}`}></div>
                    <span className={`text-[15px] ${passwordRequirements.length ? 'text-[#1d7a35] font-medium' : 'text-black opacity-60'}`}>
                      At least 8 characters
                    </span>
                  </div>
                  {passwordRequirements.length && (
                    <Check className="h-4 w-4 text-[#1d7a35] flex-shrink-0" strokeWidth={3} />
                  )}
                </div>
                <div className={`flex items-center justify-between gap-2 px-2 py-1 rounded-[6px] transition-all ${passwordRequirements.uppercase ? 'bg-[#d1f4da]' : ''}`}>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${passwordRequirements.uppercase ? 'bg-[#1d7a35]' : 'bg-[#8e8e93]'}`}></div>
                    <span className={`text-[15px] ${passwordRequirements.uppercase ? 'text-[#1d7a35] font-medium' : 'text-black opacity-60'}`}>
                      One uppercase letter
                    </span>
                  </div>
                  {passwordRequirements.uppercase && (
                    <Check className="h-4 w-4 text-[#1d7a35] flex-shrink-0" strokeWidth={3} />
                  )}
                </div>
                <div className={`flex items-center justify-between gap-2 px-2 py-1 rounded-[6px] transition-all ${passwordRequirements.lowercase ? 'bg-[#d1f4da]' : ''}`}>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${passwordRequirements.lowercase ? 'bg-[#1d7a35]' : 'bg-[#8e8e93]'}`}></div>
                    <span className={`text-[15px] ${passwordRequirements.lowercase ? 'text-[#1d7a35] font-medium' : 'text-black opacity-60'}`}>
                      One lowercase letter
                    </span>
                  </div>
                  {passwordRequirements.lowercase && (
                    <Check className="h-4 w-4 text-[#1d7a35] flex-shrink-0" strokeWidth={3} />
                  )}
                </div>
                <div className={`flex items-center justify-between gap-2 px-2 py-1 rounded-[6px] transition-all ${passwordRequirements.number ? 'bg-[#d1f4da]' : ''}`}>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${passwordRequirements.number ? 'bg-[#1d7a35]' : 'bg-[#8e8e93]'}`}></div>
                    <span className={`text-[15px] ${passwordRequirements.number ? 'text-[#1d7a35] font-medium' : 'text-black opacity-60'}`}>
                      One number
                    </span>
                  </div>
                  {passwordRequirements.number && (
                    <Check className="h-4 w-4 text-[#1d7a35] flex-shrink-0" strokeWidth={3} />
                  )}
                </div>
                <div className={`flex items-center justify-between gap-2 px-2 py-1 rounded-[6px] transition-all ${passwordRequirements.special ? 'bg-[#d1f4da]' : ''}`}>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${passwordRequirements.special ? 'bg-[#1d7a35]' : 'bg-[#8e8e93]'}`}></div>
                    <span className={`text-[15px] ${passwordRequirements.special ? 'text-[#1d7a35] font-medium' : 'text-black opacity-60'}`}>
                      One special character
                    </span>
                  </div>
                  {passwordRequirements.special && (
                    <Check className="h-4 w-4 text-[#1d7a35] flex-shrink-0" strokeWidth={3} />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Security Question */}
          <div className="card-ios p-4 space-y-3">
            <div className="flex items-start gap-2 mb-2">
              <Info className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <h2 className="text-[17px] font-semibold text-black m-0 mb-1">Security question</h2>
                <p className="text-[13px] text-black opacity-60 m-0">Used for account recovery</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="question" className="text-black text-[15px] font-medium">
                Select a question
              </Label>
              <button
                type="button"
                onClick={() => {
                  setShowQuestionPicker(true);
                  setShowKeyboard(false);
                  setActiveField(null);
                }}
                className="w-full h-11 bg-[#f2f2f7] border border-[#c7c7cc] rounded-[10px] px-3 focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] text-[17px] text-left flex items-center justify-between"
              >
                <span className={securityQuestion ? 'text-black' : 'text-[#8e8e93]'}>
                  {securityQuestion || 'Choose a question'}
                </span>
                <ChevronRight className="h-5 w-5 text-[#c7c7cc]" strokeWidth={2} />
              </button>
            </div>

            {securityQuestion && (
              <div className="space-y-2">
                <Label htmlFor="answer" className="text-black text-[15px] font-medium">
                  Your answer
                </Label>
                <Input
                  id="answer"
                  type="text"
                  value={securityAnswer}
                  onChange={(e) => setSecurityAnswer(e.target.value)}
                  onFocus={() => handleFieldFocus('answer')}
                  placeholder="Enter your answer"
                  className="h-11 bg-[#f2f2f7] border-[#c7c7cc] rounded-[10px] focus:border-[#007AFF] focus:ring-[#007AFF] text-[17px] placeholder:text-[#8e8e93]"
                />
              </div>
            )}
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
        {showKeyboard && activeField && (
          <IPhoneKeyboard key="keyboard" onKeyPress={handleKeyPress} onDone={handleKeyboardDone} />
        )}
      </AnimatePresence>

      {/* Question Picker Modal */}
      <AnimatePresence>
        {showQuestionPicker && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowQuestionPicker(false)}
              className="absolute inset-0 bg-black/40 z-[100]"
            />
            
            {/* Picker Modal */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute bottom-0 left-0 right-0 z-[101] bg-white rounded-t-[20px] max-h-[70vh] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-[#c7c7cc]">
                <button
                  onClick={() => setShowQuestionPicker(false)}
                  className="text-[17px] text-[#007AFF]"
                >
                  Cancel
                </button>
                <h3 className="text-[17px] font-semibold text-black">Select a Question</h3>
                <button
                  onClick={() => setShowQuestionPicker(false)}
                  className="text-[17px] text-[#007AFF] font-semibold"
                >
                  Done
                </button>
              </div>

              {/* List */}
              <div className="flex-1 overflow-y-auto">
                {SECURITY_QUESTIONS.map((question) => (
                  <button
                    key={question}
                    onClick={() => {
                      setSecurityQuestion(question);
                      setShowQuestionPicker(false);
                    }}
                    className="w-full px-4 py-3 text-left border-b border-[#c7c7cc] last:border-b-0 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors flex items-center justify-between"
                  >
                    <span className="text-[17px] text-black pr-4">{question}</span>
                    {securityQuestion === question && (
                      <svg className="h-5 w-5 text-[#007AFF] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}