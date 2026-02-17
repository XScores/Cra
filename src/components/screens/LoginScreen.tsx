import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion';
import { AnimatePresence, motion } from 'motion/react';
import { Eye, EyeOff, ScanFace, AlertCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import myAccountLogo from 'figma:asset/410ea9c9d166fa940bdb6bca126988eb10ac0278.png';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { IPhoneKeyboard } from '../IPhoneKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';

interface LoginScreenProps {
  onLogin: () => void;
  onShowSignInHelp?: (accordionItem?: string) => void;
  onShowPrivacy?: () => void;
  onShowTerms?: () => void;
  onShowWebView?: () => void;
  onBackToHomeScreen?: () => void;
  onShowHelp?: () => void;
  onShowAppVersion?: () => void;
  onStartRegistration?: (verificationType: 'instant' | 'mail') => void;
}

export function LoginScreen({ onLogin, onShowSignInHelp, onShowPrivacy, onShowTerms, onShowWebView, onBackToHomeScreen, onShowHelp, onShowAppVersion, onStartRegistration }: LoginScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFaceIDActive, setIsFaceIDActive] = useState(false);
  const [faceIDStatus, setFaceIDStatus] = useState<'scanning' | 'success' | null>(null);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<'email' | 'password' | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedVerificationMethod, setSelectedVerificationMethod] = useState<'instant' | 'mail'>('instant');
  const accordionRef = useRef<HTMLDivElement>(null);
  const registrationAccordionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Use keyboard scroll hook
  const { keyboardPadding } = useKeyboardScroll({ 
    isKeyboardVisible: showKeyboard, 
    activeField: activeField || 'input',
    keyboardHeight: 260,
    scrollContainerRef
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      if (activeField === 'email') {
        setEmail(prev => prev.slice(0, -1));
      } else if (activeField === 'password') {
        setPassword(prev => prev.slice(0, -1));
      }
    } else if (key === '\n') {
      // Return key pressed - submit form
      handleSubmit(new Event('submit') as any);
    } else {
      if (activeField === 'email') {
        setEmail(prev => prev + key);
      } else if (activeField === 'password') {
        setPassword(prev => prev + key);
      }
    }
  };

  const handleKeyboardDone = () => {
    setShowKeyboard(false);
    setActiveField(null);
  };

  const handleFaceID = () => {
    setIsFaceIDActive(true);
    setFaceIDStatus('scanning');
    
    // Simulate Face ID scanning (2 seconds)
    setTimeout(() => {
      setFaceIDStatus('success');
      
      // After success animation, login (1.5 seconds)
      setTimeout(() => {
        onLogin();
      }, 1500);
    }, 2000);
  };

  useEffect(() => {
    // Reset Face ID state when component mounts
    return () => {
      setIsFaceIDActive(false);
      setFaceIDStatus(null);
    };
  }, []);

  const handleAccordionChange = (value: string) => {
    if (value === 'help' && accordionRef.current && scrollContainerRef.current) {
      // Delay to allow accordion animation to complete
      setTimeout(() => {
        const accordion = accordionRef.current;
        const scrollContainer = scrollContainerRef.current;
        
        if (!accordion || !scrollContainer) return;
        
        // Get the accordion's position and dimensions
        const accordionRect = accordion.getBoundingClientRect();
        const containerRect = scrollContainer.getBoundingClientRect();
        
        // Calculate the bottom position of the accordion relative to the container
        const accordionBottom = accordion.offsetTop + accordion.offsetHeight;
        
        // Calculate scroll position to place accordion bottom 10px above the container bottom
        const targetScroll = accordionBottom - scrollContainer.clientHeight + 10;
        
        scrollContainer.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      }, 200);
    }
  };

  const handleRegistrationAccordionChange = (value: string) => {
    if (value === 'register' && registrationAccordionRef.current && scrollContainerRef.current) {
      // Delay to allow accordion animation to complete
      setTimeout(() => {
        const accordion = registrationAccordionRef.current;
        const scrollContainer = scrollContainerRef.current;
        
        if (!accordion || !scrollContainer) return;
        
        // Calculate the bottom position of the accordion relative to the container
        const accordionBottom = accordion.offsetTop + accordion.offsetHeight;
        
        // Calculate scroll position to place accordion bottom 10px above the container bottom
        const targetScroll = accordionBottom - scrollContainer.clientHeight + 10;
        
        scrollContainer.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      }, 200);
    }
  };

  return (
    <motion.div 
      className="h-full bg-[#fafafa] flex flex-col relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: isMounted ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Face ID Overlay */}
      {isFaceIDActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-white z-50 flex flex-col items-center justify-center"
        >
          <div className="text-center flex flex-col items-center">
            {/* Scanning Animation Container */}
            <div className="relative mb-6 flex flex-col items-center">
              {/* Face ID Icon with Scanning Rings */}
              <div className="relative flex items-center justify-center" style={{ width: '120px', height: '120px' }}>
                {/* Scanning Rings - iOS style */}
                {faceIDStatus === 'scanning' && (
                  <>
                    <motion.div
                      className="absolute border-[4px] border-[#007AFF] rounded-full"
                      style={{ width: '120px', height: '120px' }}
                      initial={{ scale: 1, opacity: 0.6 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute border-[4px] border-[#007AFF] rounded-full"
                      style={{ width: '120px', height: '120px' }}
                      initial={{ scale: 1, opacity: 0.6 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                    />
                    <motion.div
                      className="absolute border-[3px] border-[#007AFF]/50 rounded-full"
                      style={{ width: '120px', height: '120px' }}
                      initial={{ scale: 1, opacity: 0.4 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 1 }}
                    />
                  </>
                )}
                
                {/* Face ID Icon */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <ScanFace className="text-gray-ios" style={{ width: '80px', height: '80px' }} />
                </motion.div>
              </div>
              
              {/* Success Checkmark - Below Face ID */}
              {faceIDStatus === 'success' && (
                <motion.div
                  initial={{ scale: 0, opacity: 0, y: -10 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                  className="bg-[#28a745] rounded-full p-2 -mt-3"
                >
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              )}
            </div>
            
            {/* Status Text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-black text-[20px] font-semibold mb-2"
            >
              {faceIDStatus === 'scanning' && 'Face ID'}
              {faceIDStatus === 'success' && 'Success'}
            </motion.p>
            
            {faceIDStatus === 'scanning' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-ios text-[15px]"
              >
                Position your face in the frame
              </motion.p>
            )}
          </div>
        </motion.div>
      )}
      
      <div className="w-full flex flex-col h-full">
        {/* Logo/Title Area - Fixed at top */}
        <div className="text-center flex-shrink-0">
          <img src={myAccountLogo} alt="My Account - Canada Revenue Agency" className="w-full h-auto" />
        </div>

        {/* Content */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto px-4"
          style={{ paddingTop: '24px', paddingBottom: `${keyboardPadding + 24}px` }}
          onClick={(e) => {
            // Hide keyboard when clicking outside input fields
            const target = e.target as HTMLElement;
            if (!target.closest('input') && !target.closest('button[type=\"button\"]')) {
              setShowKeyboard(false);
            }
          }}
        >

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Login Card */}
            <div className="card-ios p-4 space-y-4">
              {/* Email Input */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-black text-[15px] font-medium">User ID or Email</Label>
                <Input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => { setShowKeyboard(true); setActiveField('email'); }}
                  placeholder="Enter your credentials"
                  className="h-11 bg-[#f2f2f7] border-[#c7c7cc] rounded-[10px] focus:border-[#007AFF] focus:ring-[#007AFF] text-[17px] placeholder-gray-ios"
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-black text-[15px] font-medium">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => { setShowKeyboard(true); setActiveField('password'); }}
                    placeholder="Enter your password"
                    className="h-11 bg-[#f2f2f7] border-[#c7c7cc] rounded-[10px] pr-11 focus:border-[#007AFF] focus:ring-[#007AFF] text-[17px] placeholder-gray-ios"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-ios hover:text-[#007AFF] transition-colors bg-transparent border-0 p-0"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => onShowSignInHelp?.('item-1')}
                  className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity"
                >
                  Forgot password?
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="btn-filled-ios w-full text-center"
            >
              Sign In
            </button>

            {/* Face ID Button */}
            <button
              type="button"
              onClick={handleFaceID}
              disabled={isFaceIDActive}
              className="w-full bg-white border border-[#c7c7cc] text-black py-3 rounded-[10px] transition-all h-11 flex items-center justify-center gap-2 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              <ScanFace className="h-5 w-5 text-[#007AFF]" />
              <span className="text-[17px]">Sign in with Face ID</span>
            </button>
          </form>

          {/* Registration Section */}
          <div ref={registrationAccordionRef} className="mt-6 card-ios border-l-4 border-[#28a745] overflow-hidden">
            <Accordion type="single" collapsible className="w-full" onValueChange={handleRegistrationAccordionChange}>
              <AccordionItem value="register" className="border-0">
                <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-[#28a745] flex-shrink-0" />
                    <span className="text-black text-[15px] font-medium">Need to register for an account?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3">
                  <div className="pl-8 space-y-3">
                    <p className="text-black text-[15px] m-0 mb-3">
                      Choose between two verification options during registration:
                    </p>
                    
                    <div className="space-y-3">
                      <button
                        onClick={() => setSelectedVerificationMethod('instant')}
                        className="flex items-start gap-3 w-full text-left"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                            selectedVerificationMethod === 'instant' 
                              ? 'border-[#34C759]' 
                              : 'border-[#c7c7cc]'
                          }`}>
                            {selectedVerificationMethod === 'instant' && (
                              <div className="w-3 h-3 rounded-full bg-[#34C759]"></div>
                            )}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-black text-[15px] font-semibold m-0 mb-2">Instant verification (recommended):</h3>
                          <ul className="list-disc space-y-2 m-0 pl-5 text-[15px] text-black opacity-80">
                            <li>Use your iPhone camera to verify your accepted government-issued photo ID</li>
                            <li>Get immediate full access to all features</li>
                          </ul>
                        </div>
                      </button>
                      
                      <button
                        onClick={() => setSelectedVerificationMethod('mail')}
                        className="flex items-start gap-3 w-full text-left"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                            selectedVerificationMethod === 'mail' 
                              ? 'border-[#007AFF]' 
                              : 'border-[#c7c7cc]'
                          }`}>
                            {selectedVerificationMethod === 'mail' && (
                              <div className="w-3 h-3 rounded-full bg-[#007AFF]"></div>
                            )}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-black text-[15px] font-semibold m-0 mb-2">Mail verification:</h3>
                          <ul className="list-disc space-y-2 m-0 pl-5 text-[15px] text-black opacity-80">
                            <li>Receive a CRA security code within 10 business days</li>
                            <li>Limited access until you enter the verification code</li>
                          </ul>
                        </div>
                      </button>
                    </div>

                    <div className="pt-2">
                      <button 
                        onClick={() => onStartRegistration?.(selectedVerificationMethod)}
                        className="w-full bg-[#28a745] text-white py-2.5 rounded-[10px] text-[15px] font-semibold border-0 hover:bg-[#218838] active:bg-[#1e7e34] transition-colors text-center"
                      >
                        Start registration
                      </button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Help Section */}
          <div ref={accordionRef} className="mt-4 card-ios border-l-4 border-[#007AFF] overflow-hidden">
            <Accordion type="single" collapsible className="w-full" onValueChange={handleAccordionChange}>
              <AccordionItem value="help" className="border-0">
                <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                    <span className="text-black text-[15px] font-medium">Need help signing in?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3">
                  <div className="pl-8">
                    <p className="text-black text-[15px] m-0 mb-3">
                      If you're having trouble accessing your account, we're here to help.
                    </p>
                    <button 
                      onClick={onShowSignInHelp}
                      className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity"
                    >
                      Get help with sign in
                    </button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 pt-4 pb-[40px] border-t separator-ios bg-white">
          <div className="flex items-center justify-between text-[11px]">
            <button
              onClick={onShowTerms}
              className="text-[#007AFF] hover:opacity-70 active:opacity-50 bg-transparent border-0 p-0 transition-opacity"
            >
              Terms and conditions
            </button>
            <button
              onClick={onShowPrivacy}
              className="text-[#007AFF] hover:opacity-70 active:opacity-50 bg-transparent border-0 p-0 transition-opacity"
            >
              Privacy
            </button>
            <button
              onClick={onShowAppVersion}
              className="text-[#007AFF] hover:opacity-70 active:opacity-50 bg-transparent border-0 p-0 transition-opacity"
            >
              v1.0.0
            </button>
          </div>
        </div>
      </div>
      
      {/* iPhone Keyboard */}
      <AnimatePresence>
        {showKeyboard && <IPhoneKeyboard key="keyboard" onKeyPress={handleKeyPress} onDone={handleKeyboardDone} />}
      </AnimatePresence>
    </motion.div>
  );
}