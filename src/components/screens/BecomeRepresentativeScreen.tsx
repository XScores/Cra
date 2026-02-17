import { ChevronLeft, Check, Info, Building2, User, ChevronRight } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'motion/react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { toast } from 'sonner@2.0.3';
import { IPhoneKeyboard } from '../IPhoneKeyboard';
import { IPhoneEmailKeyboard } from '../IPhoneEmailKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';
import { formatPhoneNumber, unformatPhoneNumber } from '../../utils/formatPhone';
import { formatSIN, unformatSIN } from '../../utils/formatSIN';

interface BecomeRepresentativeScreenProps {
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
  // Search navigation handlers
  onViewRefundDetails?: () => void;
  onViewNoticeOfAssessment?: () => void;
  onGSTHSTCredit?: () => void;
  onAccountDetails?: () => void;
  onProfile?: () => void;
  onViewTaxReturns?: () => void;
  onHomeBuyersPlan?: () => void;
  onFHSAEligibility?: () => void;
  onBecomeRepresentative?: () => void;
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

export function BecomeRepresentativeScreen({ 
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
  // Search navigation handlers
  onViewRefundDetails,
  onViewNoticeOfAssessment,
  onGSTHSTCredit,
  onAccountDetails,
  onProfile,
  onViewTaxReturns,
  onHomeBuyersPlan,
  onFHSAEligibility,
  onBecomeRepresentative,
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
}: BecomeRepresentativeScreenProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  
  // Step 1: Choose Type
  const [representativeType, setRepresentativeType] = useState<'individual' | 'business' | null>(null);
  
  // Step 2: Individual Information
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sin, setSin] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  // Step 2: Business Information
  const [businessName, setBusinessName] = useState('');
  const [businessNumber, setBusinessNumber] = useState('');
  const [contactName, setContactName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [businessPhone, setBusinessPhone] = useState('');
  const [professionalDesignation, setProfessionalDesignation] = useState('');
  
  // Step 3: Confirmation
  const [confirmed, setConfirmed] = useState(false);
  
  // Step 4: Generated RepID
  const [repId, setRepId] = useState<string>('');
  
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

  const handleNext = () => {
    if (currentStep < 3) {
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

  const handleSubmit = () => {
    // Generate mock RepID (in real app would come from backend)
    const mockRepId = representativeType === 'individual' ? 'IND' + Math.random().toString(36).substr(2, 5).toUpperCase() : 'BUS' + Math.random().toString(36).substr(2, 5).toUpperCase();
    
    toast.success('Application submitted successfully!', {
      description: `Your RepID is: ${mockRepId}. You'll receive confirmation via email.`,
      duration: 5000
    });
    
    setRepId(mockRepId);
    setCurrentStep(4);
    
    // Scroll to top of step 4
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  };

  const canProceedStep1 = representativeType !== null;
  const canProceedStep2Individual = firstName.trim() !== '' && lastName.trim() !== '' && sin.length === 9 && email.trim() !== '' && phone.length === 10;
  const canProceedStep2Business = businessName.trim() !== '' && businessNumber.length === 9 && contactName.trim() !== '' && businessEmail.trim() !== '' && businessPhone.length === 10;
  const canProceedStep2 = representativeType === 'individual' ? canProceedStep2Individual : canProceedStep2Business;
  const canSubmit = confirmed;

  return (
    <div className="flex flex-col h-full bg-white relative overflow-hidden">
      {/* Header - Sticky */}
      <div className="flex-shrink-0 sticky top-0 z-10 bg-white">
        <HeaderMaster 
          title="My Account"
          onNavigateHome={onNavigateHome}
          onLogoClick={onNavigateHome}
          hasUnreadMail={false}
          showSearch={true}
          showMenu={true}
          largeTitle={true}
          onFileTaxes={onFileTaxes}
          onViewAllBenefits={onBenefitsAndCredits}
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
          onHomeBuyersPlan={onHomeBuyersPlan}
          onFHSAEligibility={onFHSAEligibility}
          onBecomeRepresentative={onBecomeRepresentative}
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-tight">Become a representative</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px] mt-2">
          {currentStep === 1 && 'Choose your representative type'}
          {currentStep === 2 && 'Enter your information'}
          {currentStep === 3 && 'Review and submit your application'}
          {currentStep === 4 && 'Your RepID'}
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
            {[1, 2, 3, 4].map((step, index) => (
              <div key={step} className="flex items-center flex-1">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step < currentStep ? 'bg-[#34c759] text-white' :
                  step === currentStep ? 'bg-[#007AFF] text-white' :
                  'bg-[#e5e5ea] text-[#8e8e93]'
                }`}>
                  {step < currentStep ? <Check className="h-4 w-4" /> : step}
                </div>
                {index < 3 && (
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
          {/* Step 1: Choose Type */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Step 1: Representative Type</h2>
              
              {/* Info Card */}
              <div className="mb-4 card-ios overflow-hidden border-l-4 border-[#007AFF] p-4">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-[#8e8e93] text-[15px] m-0">
                      Choose whether you want to become a representative as an individual or as a tax professional/business.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                {/* Individual Option */}
                <button
                  onClick={() => setRepresentativeType('individual')}
                  className={`w-full card-ios p-4 text-left border-l-4 transition-all ${
                    representativeType === 'individual' 
                      ? 'border-[#007AFF] bg-[#f2f2f7]' 
                      : 'border-transparent hover:border-[#c6c6c8]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full ${
                      representativeType === 'individual' ? 'bg-[#007AFF]' : 'bg-[#e5e5ea]'
                    } flex-shrink-0`}>
                      <User className={`h-6 w-6 ${representativeType === 'individual' ? 'text-white' : 'text-[#8e8e93]'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-black font-semibold text-[17px] mb-1">Individual</h3>
                      <p className="text-[#8e8e93] text-[15px] m-0">
                        File taxes for family members or help others with their tax affairs on a personal basis.
                      </p>
                    </div>
                    {representativeType === 'individual' && (
                      <Check className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-1" />
                    )}
                  </div>
                </button>

                {/* Business Option */}
                <button
                  onClick={() => setRepresentativeType('business')}
                  className={`w-full card-ios p-4 text-left border-l-4 transition-all ${
                    representativeType === 'business' 
                      ? 'border-[#007AFF] bg-[#f2f2f7]' 
                      : 'border-transparent hover:border-[#c6c6c8]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full ${
                      representativeType === 'business' ? 'bg-[#007AFF]' : 'bg-[#e5e5ea]'
                    } flex-shrink-0`}>
                      <Building2 className={`h-6 w-6 ${representativeType === 'business' ? 'text-white' : 'text-[#8e8e93]'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-black font-semibold text-[17px] mb-1">Tax Professional / Business</h3>
                      <p className="text-[#8e8e93] text-[15px] m-0">
                        Provide professional tax services to clients as an accountant, bookkeeper, or tax preparation business.
                      </p>
                    </div>
                    {representativeType === 'business' && (
                      <Check className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-1" />
                    )}
                  </div>
                </button>
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

          {/* Step 2: Information Form */}
          {currentStep === 2 && representativeType === 'individual' && (
            <div>
              <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Step 2: Your Information</h2>
              
              <div className="card-ios overflow-hidden mb-4 border-l-4 border-[#34C759]">
                <div className="px-4 py-3 space-y-4">
                  {/* First Name */}
                  <div>
                    <Label htmlFor="firstName" className="text-black mb-2 block text-[17px]">
                      First name <span className="text-[#FF3B30]">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter your first name"
                      className="h-12 bg-white border-[#c6c6c8] rounded-[8px] text-[18px] focus:border-[#007AFF] focus:ring-[#007AFF]"
                      onFocus={() => { setShowKeyboard(true); setActiveField('firstName'); setKeyboardType('default'); }}
                      onBlur={() => { setShowKeyboard(false); setActiveField(null); }}
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <Label htmlFor="lastName" className="text-black mb-2 block text-[17px]">
                      Last name <span className="text-[#FF3B30]">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Enter your last name"
                      className="h-12 bg-white border-[#c6c6c8] rounded-[8px] text-[18px] focus:border-[#007AFF] focus:ring-[#007AFF]"
                      onFocus={() => { setShowKeyboard(true); setActiveField('lastName'); setKeyboardType('default'); }}
                      onBlur={() => { setShowKeyboard(false); setActiveField(null); }}
                    />
                  </div>

                  {/* SIN */}
                  <div>
                    <Label htmlFor="sin" className="text-black mb-2 block text-[17px]">
                      Social Insurance Number (SIN) <span className="text-[#FF3B30]">*</span>
                    </Label>
                    <Input
                      id="sin"
                      type="text"
                      inputMode="numeric"
                      value={formatSIN(sin)}
                      onChange={(e) => setSin(unformatSIN(e.target.value).slice(0, 9))}
                      placeholder="9 digits"
                      className="h-12 bg-white border-[#c6c6c8] rounded-[8px] text-[18px] focus:border-[#007AFF] focus:ring-[#007AFF]"
                      onFocus={() => { setShowKeyboard(true); setActiveField('sin'); setKeyboardType('numeric'); }}
                      onBlur={() => { setShowKeyboard(false); setActiveField(null); }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-black mb-2 block text-[17px]">
                      Email address <span className="text-[#FF3B30]">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="h-12 bg-white border-[#c6c6c8] rounded-[8px] text-[18px] focus:border-[#007AFF] focus:ring-[#007AFF]"
                      onFocus={() => { setShowKeyboard(true); setActiveField('email'); setKeyboardType('default'); }}
                      onBlur={() => { setShowKeyboard(false); setActiveField(null); }}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="text-black mb-2 block text-[17px]">
                      Phone number <span className="text-[#FF3B30]">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      inputMode="numeric"
                      value={formatPhoneNumber(phone)}
                      onChange={(e) => setPhone(unformatPhoneNumber(e.target.value).slice(0, 10))}
                      placeholder="10 digits"
                      className="h-12 bg-white border-[#c6c6c8] rounded-[8px] text-[18px] focus:border-[#007AFF] focus:ring-[#007AFF]"
                      onFocus={() => { setShowKeyboard(true); setActiveField('phone'); setKeyboardType('numeric'); }}
                      onBlur={() => { setShowKeyboard(false); setActiveField(null); }}
                    />
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

          {/* Step 2: Business Information Form */}
          {currentStep === 2 && representativeType === 'business' && (
            <div>
              <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Step 2: Business Information</h2>
              
              <div className="card-ios overflow-hidden mb-4 border-l-4 border-[#34C759]">
                <div className="px-4 py-3 space-y-4">
                  {/* Business Name */}
                  <div>
                    <Label htmlFor="businessName" className="text-black mb-2 block text-[17px]">
                      Business name <span className="text-[#FF3B30]">*</span>
                    </Label>
                    <Input
                      id="businessName"
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="Enter business name"
                      className="h-12 bg-white border-[#c6c6c8] rounded-[8px] text-[18px] focus:border-[#007AFF] focus:ring-[#007AFF]"
                      onFocus={() => { setShowKeyboard(true); setActiveField('businessName'); setKeyboardType('default'); }}
                      onBlur={() => { setShowKeyboard(false); setActiveField(null); }}
                    />
                  </div>

                  {/* Business Number */}
                  <div>
                    <Label htmlFor="businessNumber" className="text-black mb-2 block text-[17px]">
                      Business number <span className="text-[#FF3B30]">*</span>
                    </Label>
                    <Input
                      id="businessNumber"
                      type="text"
                      inputMode="numeric"
                      value={businessNumber}
                      onChange={(e) => setBusinessNumber(e.target.value.replace(/\D/g, '').slice(0, 9))}
                      placeholder="9 digits"
                      className="h-12 bg-white border-[#c6c6c8] rounded-[8px] text-[18px] focus:border-[#007AFF] focus:ring-[#007AFF]"
                      onFocus={() => { setShowKeyboard(true); setActiveField('businessNumber'); setKeyboardType('numeric'); }}
                      onBlur={() => { setShowKeyboard(false); setActiveField(null); }}
                    />
                    <p className="text-[#8e8e93] text-[13px] mt-1">Business registration number</p>
                  </div>

                  {/* Contact Name */}
                  <div>
                    <Label htmlFor="contactName" className="text-black mb-2 block text-[17px]">
                      Primary contact name <span className="text-[#FF3B30]">*</span>
                    </Label>
                    <Input
                      id="contactName"
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Full name of primary contact"
                      className="h-12 bg-white border-[#c6c6c8] rounded-[8px] text-[18px] focus:border-[#007AFF] focus:ring-[#007AFF]"
                      onFocus={() => { setShowKeyboard(true); setActiveField('contactName'); setKeyboardType('default'); }}
                      onBlur={() => { setShowKeyboard(false); setActiveField(null); }}
                    />
                  </div>

                  {/* Professional Designation */}
                  <div>
                    <Label htmlFor="professionalDesignation" className="text-black mb-2 block text-[17px]">
                      Professional designation <span className="text-[#8e8e93]">(optional)</span>
                    </Label>
                    <Input
                      id="professionalDesignation"
                      type="text"
                      value={professionalDesignation}
                      onChange={(e) => setProfessionalDesignation(e.target.value)}
                      placeholder="e.g., CPA, CA, CGA"
                      className="h-12 bg-white border-[#c6c6c8] rounded-[8px] text-[18px] focus:border-[#007AFF] focus:ring-[#007AFF]"
                      onFocus={() => { setShowKeyboard(true); setActiveField('professionalDesignation'); setKeyboardType('default'); }}
                      onBlur={() => { setShowKeyboard(false); setActiveField(null); }}
                    />
                  </div>

                  {/* Business Email */}
                  <div>
                    <Label htmlFor="businessEmail" className="text-black mb-2 block text-[17px]">
                      Business email <span className="text-[#FF3B30]">*</span>
                    </Label>
                    <Input
                      id="businessEmail"
                      type="email"
                      value={businessEmail}
                      onChange={(e) => setBusinessEmail(e.target.value)}
                      placeholder="business@example.com"
                      className="h-12 bg-white border-[#c6c6c8] rounded-[8px] text-[18px] focus:border-[#007AFF] focus:ring-[#007AFF]"
                      onFocus={() => { setShowKeyboard(true); setActiveField('businessEmail'); setKeyboardType('default'); }}
                      onBlur={() => { setShowKeyboard(false); setActiveField(null); }}
                    />
                  </div>

                  {/* Business Phone */}
                  <div>
                    <Label htmlFor="businessPhone" className="text-black mb-2 block text-[17px]">
                      Business phone <span className="text-[#FF3B30]">*</span>
                    </Label>
                    <Input
                      id="businessPhone"
                      type="tel"
                      inputMode="numeric"
                      value={formatPhoneNumber(businessPhone)}
                      onChange={(e) => setBusinessPhone(unformatPhoneNumber(e.target.value).slice(0, 10))}
                      placeholder="10 digits"
                      className="h-12 bg-white border-[#c6c6c8] rounded-[8px] text-[18px] focus:border-[#007AFF] focus:ring-[#007AFF]"
                      onFocus={() => { setShowKeyboard(true); setActiveField('businessPhone'); setKeyboardType('numeric'); }}
                      onBlur={() => { setShowKeyboard(false); setActiveField(null); }}
                    />
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

          {/* Step 3: Review and Confirm */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Step 3: Review Application</h2>
              
              <div className="card-ios overflow-hidden mb-4 border-l-4 border-[#34C759]">
                <div className="px-4 py-3">
                  <h3 className="text-black font-semibold text-[17px] mb-3">Application summary</h3>
                  
                  {/* Type */}
                  <div className="mb-4 pb-4 border-b border-[rgba(60,60,67,0.174)]">
                    <h4 className="text-[#8e8e93] text-[13px] uppercase tracking-wider mb-2">Representative Type</h4>
                    <div className="flex items-center gap-2">
                      {representativeType === 'individual' ? (
                        <User className="h-5 w-5 text-[#007AFF]" />
                      ) : (
                        <Building2 className="h-5 w-5 text-[#007AFF]" />
                      )}
                      <span className="text-black text-[15px] font-semibold capitalize">
                        {representativeType === 'individual' ? 'Individual' : 'Tax Professional / Business'}
                      </span>
                    </div>
                  </div>

                  {/* Information */}
                  <div className="mb-4 pb-4 border-b border-[rgba(60,60,67,0.174)]">
                    <h4 className="text-[#8e8e93] text-[13px] uppercase tracking-wider mb-2">
                      {representativeType === 'individual' ? 'Personal Information' : 'Business Information'}
                    </h4>
                    <div className="space-y-2">
                      {representativeType === 'individual' ? (
                        <>
                          <div className="flex justify-between">
                            <span className="text-[#8e8e93] text-[15px]">Name:</span>
                            <span className="text-black text-[15px] font-semibold">{firstName} {lastName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#8e8e93] text-[15px]">SIN:</span>
                            <span className="text-black text-[15px] font-semibold">***-***-{sin.slice(-3)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#8e8e93] text-[15px]">Email:</span>
                            <span className="text-black text-[15px] font-semibold">{email}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#8e8e93] text-[15px]">Phone:</span>
                            <span className="text-black text-[15px] font-semibold">{formatPhoneNumber(phone)}</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex justify-between">
                            <span className="text-[#8e8e93] text-[15px]">Business name:</span>
                            <span className="text-black text-[15px] font-semibold">{businessName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#8e8e93] text-[15px]">Business number:</span>
                            <span className="text-black text-[15px] font-semibold">{businessNumber}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#8e8e93] text-[15px]">Contact name:</span>
                            <span className="text-black text-[15px] font-semibold">{contactName}</span>
                          </div>
                          {professionalDesignation && (
                            <div className="flex justify-between">
                              <span className="text-[#8e8e93] text-[15px]">Designation:</span>
                              <span className="text-black text-[15px] font-semibold">{professionalDesignation}</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span className="text-[#8e8e93] text-[15px]">Email:</span>
                            <span className="text-black text-[15px] font-semibold">{businessEmail}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#8e8e93] text-[15px]">Phone:</span>
                            <span className="text-black text-[15px] font-semibold">{formatPhoneNumber(businessPhone)}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Confirmation Checkbox */}
                  <div className="card-ios p-4">
                    <h4 className="text-[#8e8e93] text-[13px] uppercase tracking-wider mb-2">Terms</h4>
                    <p className="text-black text-[15px] mb-4 m-0">
                      The information above will be displayed:
                    </p>
                    <ul className="text-black text-[15px] mb-4 space-y-2 pl-5 list-disc">
                      <li>To anyone trying to authorize me;</li>
                      <li>Online or in written correspondence to clients when they authorize me; and/or</li>
                      <li>To any administrator associating my RepID to a business or GroupID.</li>
                    </ul>
                    <div className="pt-3 border-t border-[rgba(60,60,67,0.174)]">
                      <p className="text-black text-[15px] mb-3 m-0">
                        I confirm that the information provided is accurate and I agree to the terms and conditions for becoming a CRA representative.
                      </p>
                      <div className="flex items-center gap-3">
                        <Checkbox 
                          id="confirm-application" 
                          checked={confirmed}
                          onCheckedChange={(checked) => setConfirmed(checked as boolean)}
                          className="border-2 border-[#007AFF]"
                        />
                        <Label 
                          htmlFor="confirm-application" 
                          className="text-[#007AFF] text-[17px] cursor-pointer"
                        >
                          I confirm
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!canSubmit}
                className={`w-full py-3 px-4 rounded-[10px] text-[17px] font-semibold transition-colors text-center mb-6 ${
                  canSubmit
                    ? 'bg-[#007AFF] text-white hover:bg-[#0051d5] active:bg-[#004bb8]'
                    : 'bg-[#e5e5ea] text-[#8e8e93] cursor-not-allowed'
                }`}
              >
                Submit Application
              </button>

              <p className="text-[#8e8e93] text-[13px] text-center">
                After submission, you'll receive your RepID via email. Processing typically takes 2-3 business days.
              </p>
            </div>
          )}

          {/* Step 4: Generated RepID */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Confirmation</h2>
              
              {/* Success Header */}
              <div className="card-ios overflow-hidden mb-4 border-l-4 border-[#34C759] p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#34C759]">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-black font-semibold text-[20px] m-0">Registration Complete</h3>
                </div>
                <p className="text-black text-[17px] mb-3">
                  Your registration is complete. Your RepID is <span className="font-semibold text-[#007AFF]">{repId}</span>
                </p>
                <p className="text-black text-[17px] m-0">
                  Your RepID information will be saved in your "Profile" section.
                </p>
              </div>

              {/* Instructions */}
              <div className="card-ios p-4 mb-4">
                <p className="text-black text-[15px] mb-4">
                  You can give this RepID to any individual or any business that wants to authorize you to access their account online.
                </p>
                
                <p className="text-black text-[15px] mb-4">
                  Individual clients can authorize you online through My Account or by paper using Form T1013. Businesses can authorize you online through My Business Account. Online authorizations will give you immediate access.
                </p>
                
                <p className="text-black text-[15px] m-0">
                  You can give this RepID to an administrator to be associated to their business or their GroupID. Once associated, you will be able to access the accounts of anyone who has authorized their business or their GroupID.
                </p>
              </div>

              {/* Action Buttons */}
              <button
                onClick={onBack}
                className="w-full py-3 px-4 rounded-[10px] text-[17px] font-semibold transition-colors text-center mb-3 bg-[#007AFF] text-white hover:bg-[#0051d5] active:bg-[#004bb8]"
              >
                Done
              </button>

              <button
                onClick={onNavigateHome}
                className="w-full py-3 px-4 rounded-[10px] text-[17px] font-semibold transition-colors text-center mb-6 bg-[#e5e5ea] text-[#3c3c43] hover:bg-[#d1d1d6] active:bg-[#c7c7cc]"
              >
                Return to Home
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Keyboard */}
      {showKeyboard && portalContainer && createPortal(
        <AnimatePresence>
          {activeField === 'email' || activeField === 'businessEmail' ? (
            <IPhoneEmailKeyboard
              onKeyPress={(key) => {
                if (key === 'backspace') {
                  if (activeField === 'email') setEmail(prev => prev.slice(0, -1));
                  else if (activeField === 'businessEmail') setBusinessEmail(prev => prev.slice(0, -1));
                } else {
                  if (activeField === 'email') setEmail(prev => prev + key);
                  else if (activeField === 'businessEmail') setBusinessEmail(prev => prev + key);
                }
              }}
              onDone={() => {
                setShowKeyboard(false);
                setActiveField(null);
              }}
            />
          ) : (
            <IPhoneKeyboard
              keyboardType={keyboardType}
              onKeyPress={(key) => {
                if (key === 'backspace') {
                  if (activeField === 'firstName') setFirstName(prev => prev.slice(0, -1));
                  else if (activeField === 'lastName') setLastName(prev => prev.slice(0, -1));
                  else if (activeField === 'sin') setSin(prev => prev.slice(0, -1));
                  else if (activeField === 'email') setEmail(prev => prev.slice(0, -1));
                  else if (activeField === 'phone') setPhone(prev => prev.slice(0, -1));
                  else if (activeField === 'businessName') setBusinessName(prev => prev.slice(0, -1));
                  else if (activeField === 'businessNumber') setBusinessNumber(prev => prev.slice(0, -1));
                  else if (activeField === 'contactName') setContactName(prev => prev.slice(0, -1));
                  else if (activeField === 'professionalDesignation') setProfessionalDesignation(prev => prev.slice(0, -1));
                  else if (activeField === 'businessEmail') setBusinessEmail(prev => prev.slice(0, -1));
                  else if (activeField === 'businessPhone') setBusinessPhone(prev => prev.slice(0, -1));
                } else {
                  if (activeField === 'firstName') setFirstName(prev => prev + key);
                  else if (activeField === 'lastName') setLastName(prev => prev + key);
                  else if (activeField === 'sin' && sin.length < 9 && /\d/.test(key)) setSin(prev => prev + key);
                  else if (activeField === 'email') setEmail(prev => prev + key);
                  else if (activeField === 'phone' && phone.length < 10 && /\d/.test(key)) setPhone(prev => prev + key);
                  else if (activeField === 'businessName') setBusinessName(prev => prev + key);
                  else if (activeField === 'businessNumber' && businessNumber.length < 9 && /\d/.test(key)) setBusinessNumber(prev => prev + key);
                  else if (activeField === 'contactName') setContactName(prev => prev + key);
                  else if (activeField === 'professionalDesignation') setProfessionalDesignation(prev => prev + key);
                  else if (activeField === 'businessEmail') setBusinessEmail(prev => prev + key);
                  else if (activeField === 'businessPhone' && businessPhone.length < 10 && /\d/.test(key)) setBusinessPhone(prev => prev + key);
                }
              }}
              onDone={() => {
                setShowKeyboard(false);
                setActiveField(null);
              }}
            />
          )}
        </AnimatePresence>,
        portalContainer
      )}
    </div>
  );
}