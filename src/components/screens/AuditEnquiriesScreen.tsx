import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronDown, Check } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';
import { IPhoneNumericKeyboard } from '../IPhoneNumericKeyboard';
import { IPhoneTextKeyboard } from '../IPhoneTextKeyboard';

interface AuditEnquiriesScreenProps {
  onBack: () => void;
  onSubmit: () => void;
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

const SUBJECTS = [
  'Assessment review',
  'Audit enquiry',
  'Deadline extension',
  'Document submission',
  'General enquiry',
  'Other',
  'Payment enquiry',
  'Request for information'
];

export function AuditEnquiriesScreen({
  onBack,
  onSubmit,
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
}: AuditEnquiriesScreenProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const caseNumberRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const detailsRef = useRef<HTMLTextAreaElement>(null);
  const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Form fields
  const [caseNumber, setCaseNumber] = useState('');
  const [selectedTaxYears, setSelectedTaxYears] = useState<string[]>([]);
  const [subject, setSubject] = useState('');
  const [daytimePhone, setDaytimePhone] = useState('');
  const [enquiryDetails, setEnquiryDetails] = useState('');
  const [emailNotification, setEmailNotification] = useState<'yes' | 'no' | null>(null);
  const [emailAddress, setEmailAddress] = useState('');
  
  // UI states
  const [showSubjectPicker, setShowSubjectPicker] = useState(false);
  const [showPhoneKeyboard, setShowPhoneKeyboard] = useState(false);
  const [showEmailKeyboard, setShowEmailKeyboard] = useState(false);
  const [showDetailsKeyboard, setShowDetailsKeyboard] = useState(false);
  const [showCaseNumberKeyboard, setShowCaseNumberKeyboard] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  const [characterCount, setCharacterCount] = useState(0);
  const [activeField, setActiveField] = useState<string | null>(null);

  useEffect(() => {
    setPortalContainer(document.getElementById('iphone-screen'));
  }, []);

  useEffect(() => {
    setCharacterCount(enquiryDetails.length);
  }, [enquiryDetails]);

  // Scroll field into view when keyboard appears
  useEffect(() => {
    if (activeField && scrollContainerRef.current) {
      let element: HTMLElement | null = null;
      
      if (activeField === 'caseNumber') element = caseNumberRef.current;
      else if (activeField === 'phone') element = phoneRef.current;
      else if (activeField === 'email') element = emailRef.current;
      else if (activeField === 'details') element = detailsRef.current;
      
      if (element) {
        // Add a small delay to ensure keyboard is rendered
        setTimeout(() => {
          if (element && scrollContainerRef.current) {
            const elementRect = element.getBoundingClientRect();
            const containerRect = scrollContainerRef.current.getBoundingClientRect();
            const scrollTop = scrollContainerRef.current.scrollTop;
            
            // For email and details fields (QWERTY keyboard), use very aggressive scroll
            // Position the field near the top of the visible area
            const isQwertyKeyboard = activeField === 'email' || activeField === 'details';
            
            let targetScrollTop;
            if (isQwertyKeyboard) {
              // For QWERTY: scroll so field is positioned 120px from top of container
              targetScrollTop = scrollTop + elementRect.top - containerRect.top - 120;
            } else {
              // For numeric: use less aggressive scroll
              targetScrollTop = scrollTop + elementRect.top - containerRect.top - 100;
            }
            
            scrollContainerRef.current.scrollTo({
              top: targetScrollTop,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    }
  }, [activeField, showCaseNumberKeyboard, showPhoneKeyboard, showEmailKeyboard, showDetailsKeyboard]);

  const currentYear = new Date().getFullYear();
  const availableYears = Array.from({ length: 10 }, (_, i) => (currentYear - i).toString());

  const toggleTaxYear = (year: string) => {
    setSelectedTaxYears(prev => 
      prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]
    );
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  const handleCaseNumberInput = (value: string) => {
    if (value === 'backspace') {
      setCaseNumber(prev => prev.slice(0, -1));
    } else {
      setCaseNumber(prev => prev + value);
    }
  };

  const handlePhoneKeyPress = (key: string) => {
    const currentNumbers = daytimePhone.replace(/\D/g, '');
    if (key === 'backspace') {
      const newValue = currentNumbers.slice(0, -1);
      setDaytimePhone(formatPhoneNumber(newValue));
    } else if (currentNumbers.length < 10) {
      setDaytimePhone(formatPhoneNumber(currentNumbers + key));
    }
  };

  const handleSubmit = () => {
    // Validate all required fields
    const phoneNumbers = daytimePhone.replace(/\D/g, '');
    
    if (selectedTaxYears.length === 0) {
      alert('Please select at least one tax year.');
      return;
    }
    
    if (!subject) {
      alert('Please select a subject.');
      return;
    }
    
    // Case number is required only for Audit enquiry
    if (subject === 'Audit enquiry' && !caseNumber.trim()) {
      alert('Please enter a case number for audit enquiries.');
      return;
    }
    
    if (phoneNumbers.length !== 10) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
    
    if (!enquiryDetails.trim()) {
      alert('Please enter details of your enquiry.');
      return;
    }
    
    if (emailNotification === null) {
      alert('Please select whether you want email notification.');
      return;
    }
    
    if (emailNotification === 'yes' && !emailAddress.trim()) {
      alert('Please enter your email address.');
      return;
    }
    
    // All validation passed
    onSubmit();
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
        onViewNoticeOfAssessment={onViewNoticeOfAssessment}
        onHelp={onHelp}
        onSignOut={onSignOut}
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

      {/* Fixed Page Title Header with Back Button */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Audit and other enquiries</h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto">
        <div className={`px-4 pt-4 ${showEmailKeyboard || showDetailsKeyboard ? 'pb-[400px]' : 'pb-24'}`}>
          {/* Intro Text */}
          <div className="mb-6">
            <p className="text-[15px] text-text-gray-ios leading-relaxed">
              Use this form to submit an enquiry related to an audit or other subject. All fields are required.
            </p>
          </div>

          {/* Tax Year Selection */}
          <div className="mb-6">
            <label className="block text-[13px] text-[#3C3C43] mb-1.5 ml-4">
              Tax year
            </label>
            <div className="card-ios overflow-hidden">
              <div className="px-4 py-3">
                <p className="text-[#8e8e93] text-[13px] mb-3">Select the tax year(s) for your enquiry:</p>
                <div className="grid grid-cols-3 gap-2">
                  {availableYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => toggleTaxYear(year)}
                      className={`px-3 py-2 rounded-[8px] border-2 text-[15px] transition-all ${
                        selectedTaxYears.includes(year)
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
          </div>

          {/* Subject */}
          <div className="mb-6">
            <label className="block text-[13px] text-[#3C3C43] mb-1.5 ml-4">
              Subject
            </label>
            <div className="bg-white rounded-[10px] overflow-hidden">
              <button
                onClick={() => setShowSubjectPicker(true)}
                className="w-full px-4 py-3 flex items-center justify-between active:bg-[#E5E5EA] transition-colors"
              >
                <span className={subject ? 'text-text-gray-ios' : 'text-[#3C3C43]'}>
                  {subject || 'Select a subject'}
                </span>
                <ChevronDown className="w-5 h-5 text-[#3C3C43]" />
              </button>
            </div>
            <p className="text-[13px] text-[#3C3C43] mt-1.5 ml-4">
              Select the subject that applies to your enquiry
            </p>
          </div>

          {/* Case Number (conditional - only for Audit enquiry) */}
          {subject === 'Audit enquiry' && (
            <div className="mb-6">
              <label className="block text-[13px] text-[#3C3C43] mb-1.5 ml-4">
                Case number
              </label>
              <div className="bg-white rounded-[10px] overflow-hidden">
                <input
                  ref={caseNumberRef}
                  type="text"
                  value={caseNumber}
                  onChange={(e) => setCaseNumber(e.target.value)}
                  onFocus={() => {
                    setShowCaseNumberKeyboard(true);
                    setActiveField('caseNumber');
                  }}
                  onBlur={() => {
                    blurTimeoutRef.current = setTimeout(() => {
                      setShowCaseNumberKeyboard(false);
                      setActiveField(null);
                    }, 100);
                  }}
                  placeholder="Enter case number"
                  className="w-full px-4 py-3 bg-white text-text-gray-ios placeholder:text-[#3C3C43] outline-none border-none"
                />
              </div>
              <p className="text-[13px] text-[#3C3C43] mt-1.5 ml-4">
                Enter the case number provided by the CRA auditor
              </p>
            </div>
          )}

          {/* Daytime Phone */}
          <div className="mb-6">
            <label className="block text-[13px] text-[#3C3C43] mb-1.5 ml-4">
              Daytime phone
            </label>
            <div className="bg-white rounded-[10px] overflow-hidden">
              <input
                ref={phoneRef}
                type="tel"
                value={daytimePhone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  if (value.length <= 10) {
                    setDaytimePhone(formatPhoneNumber(value));
                  }
                }}
                onFocus={() => {
                  setShowPhoneKeyboard(true);
                  setActiveField('phone');
                }}
                onBlur={() => {
                  blurTimeoutRef.current = setTimeout(() => {
                    setShowPhoneKeyboard(false);
                    setActiveField(null);
                  }, 100);
                }}
                placeholder="000-000-0000"
                className="w-full px-4 py-3 bg-white text-text-gray-ios placeholder:text-[#3C3C43] outline-none border-none"
              />
            </div>
            <p className="text-[13px] text-[#3C3C43] mt-1.5 ml-4">
              10-digit phone number for us to contact you if needed
            </p>
          </div>

          {/* Details of Enquiry */}
          <div className="mb-6">
            <label className="block text-[13px] text-[#3C3C43] mb-1.5 ml-4">
              Details of your enquiry
            </label>
            <div className="bg-white rounded-[10px] overflow-hidden">
              <textarea
                ref={detailsRef}
                value={enquiryDetails}
                onChange={(e) => {
                  if (e.target.value.length <= 3000) {
                    setEnquiryDetails(e.target.value);
                  }
                }}
                onFocus={() => {
                  setShowDetailsKeyboard(true);
                  setActiveField('details');
                }}
                onBlur={() => {
                  blurTimeoutRef.current = setTimeout(() => {
                    setShowDetailsKeyboard(false);
                    setActiveField(null);
                  }, 100);
                }}
                placeholder="Enter details here..."
                rows={5}
                className="w-full px-4 py-3 bg-white text-text-gray-ios placeholder:text-[#3C3C43] outline-none border-none resize-none"
              />
            </div>
            <p className="text-[13px] text-[#3C3C43] mt-1.5 ml-4">
              {characterCount} / 3,000 characters
            </p>
          </div>

          {/* Email Notification */}
          <div className="mb-6">
            <label className="block text-[13px] text-[#3C3C43] mb-1.5 ml-4">
              Email notification
            </label>
            <div className="bg-white rounded-[10px] overflow-hidden">
              <button
                onClick={() => setEmailNotification('yes')}
                className="w-full px-4 py-3 flex items-center justify-between border-b border-[#E5E5EA] active:bg-[#E5E5EA] transition-colors"
              >
                <span className="text-text-gray-ios">Yes</span>
                {emailNotification === 'yes' && (
                  <Check className="w-5 h-5 text-[#007AFF]" />
                )}
              </button>
              <button
                onClick={() => {
                  setEmailNotification('no');
                  setEmailAddress('');
                }}
                className="w-full px-4 py-3 flex items-center justify-between active:bg-[#E5E5EA] transition-colors"
              >
                <span className="text-text-gray-ios">No</span>
                {emailNotification === 'no' && (
                  <Check className="w-5 h-5 text-[#007AFF]" />
                )}
              </button>
            </div>
            <p className="text-[13px] text-[#3C3C43] mt-1.5 ml-4">
              Get notified when a reply is available
            </p>
          </div>

          {/* Email Address (conditional) */}
          {emailNotification === 'yes' && (
            <div className="mb-6">
              <label className="block text-[13px] text-[#3C3C43] mb-1.5 ml-4">
                Email address
              </label>
              <div className="bg-white rounded-[10px] overflow-hidden">
                <input
                  ref={emailRef}
                  type="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  onFocus={() => {
                    setShowEmailKeyboard(true);
                    setActiveField('email');
                  }}
                  onBlur={() => {
                    blurTimeoutRef.current = setTimeout(() => {
                      setShowEmailKeyboard(false);
                      setActiveField(null);
                    }, 100);
                  }}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-white text-text-gray-ios placeholder:text-[#3C3C43] outline-none border-none"
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="mt-8">
            <button
              onClick={handleSubmit}
              className="w-full bg-[#007AFF] text-white py-3.5 rounded-[10px] active:opacity-70 transition-opacity"
            >
              Submit enquiry
            </button>
          </div>
        </div>
      </div>

      {/* Subject Picker */}
      {showSubjectPicker && portalContainer && (
        <div className="fixed inset-0 z-50 flex items-end">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowSubjectPicker(false)} />
          <div className="relative w-full bg-[#F2F2F7] rounded-t-[14px] pb-safe">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#C6C6C8]/50">
              <button
                onClick={() => setShowSubjectPicker(false)}
                className="text-[#007AFF] active:opacity-50"
              >
                Cancel
              </button>
              <span className="text-text-gray-ios">Subject</span>
              <button
                onClick={() => setShowSubjectPicker(false)}
                className="text-[#007AFF] active:opacity-50"
              >
                Done
              </button>
            </div>
            <div className="bg-white max-h-[250px] overflow-y-auto">
              {SUBJECTS.map((subj, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSubject(subj);
                    setShowSubjectPicker(false);
                  }}
                  className={`w-full px-4 py-3 text-left border-b border-[#E5E5EA] active:bg-[#E5E5EA] transition-colors ${
                    subject === subj ? 'text-[#007AFF]' : 'text-text-gray-ios'
                  }`}
                >
                  {subj}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Case Number Keyboard */}
      {showCaseNumberKeyboard && (
        <IPhoneNumericKeyboard
          onKeyPress={handleCaseNumberInput}
          onDone={() => {
            if (blurTimeoutRef.current) {
              clearTimeout(blurTimeoutRef.current);
            }
            setShowCaseNumberKeyboard(false);
            setActiveField(null);
          }}
        />
      )}

      {/* Phone Keyboard */}
      {showPhoneKeyboard && (
        <IPhoneNumericKeyboard
          onKeyPress={handlePhoneKeyPress}
          onDone={() => {
            if (blurTimeoutRef.current) {
              clearTimeout(blurTimeoutRef.current);
            }
            setShowPhoneKeyboard(false);
            setActiveField(null);
          }}
        />
      )}

      {/* Email Keyboard */}
      {showEmailKeyboard && (
        <IPhoneTextKeyboard
          value={emailAddress}
          onChange={setEmailAddress}
          onClose={() => {
            if (blurTimeoutRef.current) {
              clearTimeout(blurTimeoutRef.current);
            }
            setShowEmailKeyboard(false);
            setActiveField(null);
          }}
          placeholder="your.email@example.com"
          autoCapitalize="none"
        />
      )}

      {/* Details Keyboard */}
      {showDetailsKeyboard && (
        <IPhoneTextKeyboard
          value={enquiryDetails}
          onChange={(val) => {
            if (val.length <= 3000) {
              setEnquiryDetails(val);
            }
          }}
          onClose={() => {
            if (blurTimeoutRef.current) {
              clearTimeout(blurTimeoutRef.current);
            }
            setShowDetailsKeyboard(false);
            setActiveField(null);
          }}
          placeholder="Enter details of your enquiry..."
          multiline={true}
        />
      )}
    </div>
  );
}