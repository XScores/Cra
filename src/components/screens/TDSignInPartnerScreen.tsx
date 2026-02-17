import { Eye, EyeOff, Lock, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import interacLogo from 'figma:asset/d3acbe2dc554de34cd01eef84fc398c3b487a220.png';
import tdLogo from 'figma:asset/8418f12e55357c5e53c06a3b55c4045f62f46349.png';
import { InteracTermsScreen } from './InteracTermsScreen';
import { ValidateIdentityScreen } from './ValidateIdentityScreen';

interface TDSignInPartnerScreenProps {
  onCancel: () => void;
  onLoginSuccess: () => void;
  onShowHelp?: () => void;
}

export function TDSignInPartnerScreen({ onCancel, onLoginSuccess, onShowHelp }: TDSignInPartnerScreenProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [showInteracTerms, setShowInteracTerms] = useState(false);
  const [showValidateIdentity, setShowValidateIdentity] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const faqs = [
    {
      question: "What do I do if I forget my EasyWeb password when logging in to this government services site?",
      answer: "If you forget your EasyWeb password, you'll need to reset it through TD EasyWeb before you can use it to sign in to government services. Visit TD.com or contact TD customer service for assistance."
    },
    {
      question: "What do I do if my EasyWeb login doesn't work on this government site?",
      answer: "First, verify that your EasyWeb credentials are working by logging into TD EasyWeb directly. If they work there but not here, clear your browser cache and cookies and try again. Contact CRA if the issue persists."
    },
    {
      question: "Can I use my TD Web Broker or TD Insurance credentials to login to this government site?",
      answer: "No, you must use your TD EasyWeb banking credentials. TD Web Broker and TD Insurance credentials are not supported for Sign-In Partner authentication with government services."
    }
  ];

  const handleLogin = () => {
    // Show Interac Terms screen when login button is clicked
    if (username && password) {
      setShowInteracTerms(true);
    }
  };

  const handleAcceptTerms = () => {
    // After accepting terms, go directly to registration (skip validate identity)
    setShowInteracTerms(false);
    onLoginSuccess();
  };

  const handleDeclineTerms = () => {
    // Return to Sign-In Partners screen
    onCancel();
  };

  const handleValidateIdentityBack = () => {
    // Go back to Interac Terms
    setShowValidateIdentity(false);
    setShowInteracTerms(true);
  };

  const handleValidateIdentityNext = () => {
    // Complete the registration flow
    onLoginSuccess();
  };

  const handleValidateIdentityExit = () => {
    // Exit back to Sign-In Partners screen
    onCancel();
  };

  // If Validate Identity screen is active, show it
  if (showValidateIdentity) {
    return (
      <ValidateIdentityScreen
        onBack={handleValidateIdentityBack}
        onNext={handleValidateIdentityNext}
        onExit={handleValidateIdentityExit}
        onShowHelp={onShowHelp}
      />
    );
  }

  // If Interac Terms screen is active, show it
  if (showInteracTerms) {
    return (
      <InteracTermsScreen
        onAccept={handleAcceptTerms}
        onDecline={handleDeclineTerms}
      />
    );
  }

  return (
    <motion.div 
      className="h-full bg-[#f9f9f9] flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: isMounted ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* TD Bank Header */}
      <div className="bg-[#006937] px-4 py-4 flex items-center justify-between flex-shrink-0">
        <button
          onClick={onCancel}
          className="flex items-center gap-2 bg-transparent border-0 p-0 cursor-pointer hover:opacity-80 active:opacity-60 transition-opacity"
        >
          <img 
            src={tdLogo} 
            alt="TD" 
            className="w-[32px] h-auto"
          />
        </button>
        <Lock className="h-5 w-5 text-white" strokeWidth={2} />
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 overflow-y-auto pb-6">
        {/* Secure Login Title with Interac Logo */}
        <div className="px-4 pt-6 pb-4">
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-[28px] font-normal text-[#333] m-0">Secure Login</h1>
            <img 
              src={interacLogo} 
              alt="Interac" 
              className="w-[60px] h-auto"
            />
          </div>
        </div>

        {/* Login Form */}
        <div className="px-4 pb-4">
          <div className="bg-white rounded-[12px] p-4 shadow-sm">
            {/* Username Field */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-[14px] text-[#333] mb-2">
                Username or Access Card
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2.5 border border-[#ccc] rounded-[4px] text-[16px] text-[#333] bg-white focus:outline-none focus:border-[#006937] focus:ring-1 focus:ring-[#006937]"
                placeholder=""
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-[14px] text-[#333] mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2.5 border border-[#ccc] rounded-[4px] text-[16px] text-[#333] bg-white focus:outline-none focus:border-[#006937] focus:ring-1 focus:ring-[#006937] pr-10"
                  placeholder=""
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] bg-transparent border-0 p-0 cursor-pointer hover:text-[#333] transition-colors"
                  type="button"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" strokeWidth={2} />
                  ) : (
                    <Eye className="h-5 w-5" strokeWidth={2} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="mb-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 border border-[#ccc] rounded cursor-pointer accent-[#006937]"
                />
                <span className="text-[14px] text-[#333]">Remember me</span>
              </label>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              disabled={!username || !password}
              className="w-full bg-[#006937] text-white text-[16px] font-semibold py-3 px-4 rounded-[4px] border-0 cursor-pointer hover:bg-[#005529] active:bg-[#004422] transition-colors mb-3 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Lock className="h-5 w-5" strokeWidth={2} />
              <span>Login</span>
            </button>

            {/* Cancel Button */}
            <button
              onClick={onCancel}
              className="w-full bg-white text-[#006937] text-[16px] font-semibold py-3 px-4 rounded-[4px] border border-[#006937] cursor-pointer hover:bg-[#f5f5f5] active:bg-[#ebebeb] transition-colors text-center"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Description of Service */}
        <div className="px-4 pb-4">
          <button
            onClick={() => setShowDescription(!showDescription)}
            className="w-full bg-white rounded-[12px] shadow-sm border-0 cursor-pointer"
          >
            <div className="px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Plus className="h-5 w-5 text-[#006937]" strokeWidth={2} />
                <span className="text-[16px] text-[#333] font-normal">Description of Service</span>
              </div>
              {showDescription ? (
                <ChevronUp className="h-5 w-5 text-[#666]" strokeWidth={2} />
              ) : (
                <ChevronDown className="h-5 w-5 text-[#666]" strokeWidth={2} />
              )}
            </div>
            {showDescription && (
              <div className="px-4 pb-4 text-left border-t border-[#e5e5e5]">
                <p className="text-[15px] text-[#666] m-0 pt-3 leading-relaxed">
                  Sign-In Partner is a secure service that allows you to access government services using your existing TD EasyWeb banking credentials. Your banking information and the identity of your financial institution are never shared with the Government of Canada.
                </p>
              </div>
            )}
          </button>
        </div>

        {/* Frequently Asked Questions */}
        <div className="px-4 pb-4">
          <div className="bg-white rounded-[12px] shadow-sm overflow-hidden">
            <div className="px-4 py-4 border-b border-[#e5e5e5]">
              <h2 className="text-[18px] text-[#333] font-normal m-0 text-center">Frequently Asked Questions</h2>
            </div>
            
            <div className="divide-y divide-[#e5e5e5]">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-4 py-3 flex items-start gap-2 bg-transparent border-0 cursor-pointer hover:bg-[#f5f5f5] active:bg-[#ebebeb] transition-colors text-left"
                  >
                    <Plus className="h-5 w-5 text-[#006937] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[15px] text-[#333] flex-1">{faq.question}</span>
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-4 pb-4 pl-11 bg-[#f9f9f9]">
                      <p className="text-[15px] text-[#666] m-0 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Read more FAQs */}
            <div className="px-4 py-3 border-t border-[#e5e5e5] text-center">
              <button className="text-[#006937] bg-transparent border-0 text-[15px] cursor-pointer hover:opacity-70 active:opacity-50 transition-opacity">
                Read more FAQs →
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="px-4 pb-6">
          <div className="bg-[#006937] rounded-[12px] px-4 py-6 text-center space-y-3">
            <button className="text-white bg-transparent border-0 text-[15px] cursor-pointer hover:opacity-80 active:opacity-60 transition-opacity block w-full text-center">
              Privacy and Security
            </button>
            <button className="text-white bg-transparent border-0 text-[15px] cursor-pointer hover:opacity-80 active:opacity-60 transition-opacity block w-full text-center">
              Legal
            </button>
            <button className="text-white bg-transparent border-0 text-[15px] cursor-pointer hover:opacity-80 active:opacity-60 transition-opacity block w-full text-center">
              Accessibility
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}