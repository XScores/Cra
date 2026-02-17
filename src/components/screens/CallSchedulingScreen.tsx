import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, Calendar as CalendarIcon, Clock, Phone, Check, Download, Mail, Gift, CreditCard, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Calendar } from '../ui/calendar';
import { IPhoneNumericKeyboard } from '../IPhoneNumericKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner@2.0.3';
import { formatPhoneNumber as formatPhone } from '../../utils/formatPhone';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';
import { HamburgerMenu } from '../HamburgerMenu';

interface CallSchedulingScreenProps {
  onBack: () => void;
  onViewMail?: () => void;
  onNavigateHome?: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  hasUnreadMail?: boolean;
  onViewAllBenefits?: () => void;
  onViewRefundDetails?: () => void;
  onViewNoticeOfAssessment?: () => void;
  onGSTHSTCredit?: () => void;
  onAccountDetails?: () => void;
  onProfile?: () => void;
  onViewTaxReturns?: () => void;
  // Search navigation handlers
  onHomeBuyersPlan?: () => void;
  onFHSAEligibility?: () => void;
  onBecomeRepresentative?: () => void;
  onBecomeRepresentativeAsRep?: () => void;
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
  onSearchClick?: () => void;
  onPersonalClick?: () => void;
  onBusinessClick?: () => void;
  onRepresentativeClick?: () => void;
  activeAccountType?: 'personal' | 'business' | 'representative';
}

export function CallSchedulingScreen({ 
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
  hasUnreadMail = false,
  onViewAllBenefits,
  onViewRefundDetails,
  onViewNoticeOfAssessment,
  onGSTHSTCredit,
  onAccountDetails,
  onProfile,
  onViewTaxReturns,
  // Search navigation handlers
  onHomeBuyersPlan,
  onFHSAEligibility,
  onBecomeRepresentative,
  onBecomeRepresentativeAsRep,
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
  onSubmitDocuments,
  onSearchClick,
  onPersonalClick,
  onBusinessClick,
  onRepresentativeClick,
  activeAccountType
}: CallSchedulingScreenProps) {
  const [callbackDate, setCallbackDate] = useState('');
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  const [calendarMonth, setCalendarMonth] = useState<Date>(new Date());
  const [tempSelectedDate, setTempSelectedDate] = useState<Date | undefined>(undefined);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeFieldId, setActiveFieldId] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [timePickerOpen, setTimePickerOpen] = useState(false);
  const [tempSelectedTime, setTempSelectedTime] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [topic, setTopic] = useState('');
  const [topicPickerOpen, setTopicPickerOpen] = useState(false);
  const [tempSelectedTopic, setTempSelectedTopic] = useState('');
  const [isScheduled, setIsScheduled] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const dateRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Use keyboard scroll hook
  useKeyboardScroll({ 
    isKeyboardVisible: showKeyboard, 
    activeField: activeFieldId,
    keyboardHeight: 270,
    scrollContainerRef
  });

  useEffect(() => {
    setPortalContainer(document.getElementById('iphone-screen'));
  }, []);

  const menuItems = [
    { icon: Mail, label: 'File taxes', id: 'file-taxes', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onFileTaxes) onFileTaxes(); } },
    { icon: Gift, label: 'Benefits & credits', id: 'benefits-credits', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onBenefitsAndCredits) onBenefitsAndCredits(); } },
    { icon: CreditCard, label: 'Make a payment', id: 'make-payment', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onMakePayment) onMakePayment(); } },
    { icon: Mail, label: 'CRA mail', id: 'mail', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onViewMail) onViewMail(); } },
    { icon: null, label: 'Registered plans', id: 'registered-plans', type: 'image' as const, imageSrc: mapleLeafIcon, onClick: () => { setShowMenu(false); if (onRegisteredPlans) onRegisteredPlans(); } },
    { icon: Receipt, label: 'Tax slips and documents', id: 'tax-slips', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onTaxSlips) onTaxSlips(); } },
    { icon: FileCheck, label: 'Proof of income', id: 'proof-income', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onProofOfIncome) onProofOfIncome(); } },
    { icon: HelpCircle, label: 'Help and support', id: 'help', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onHelp) onHelp(); } },
    { icon: LogOut, label: 'Sign out and exit', id: 'sign-out', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onSignOut) onSignOut(); }, danger: true },
  ];

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showMenu]);

  useEffect(() => {
    if (isScheduled) {
      const iphoneScreen = document.getElementById('iphone-screen');
      if (iphoneScreen) {
        const scrollContainer = iphoneScreen.querySelector('.overflow-y-auto');
        if (scrollContainer) {
          scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  }, [isScheduled]);

  useEffect(() => {
    if (calendarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [calendarOpen]);

  const formatDate = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 4) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 4)}-${numbers.slice(4)}`;
    return `${numbers.slice(0, 4)}-${numbers.slice(4, 6)}-${numbers.slice(6, 8)}`;
  };

  const handleDateChange = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 8) {
      setCallbackDate(formatDate(numbers));
    }
  };

  const getDateFromFields = () => {
    if (callbackDate.length === 10) {
      const [year, month, day] = callbackDate.split('-').map(Number);
      if (year && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
        return new Date(year, month - 1, day);
      }
    }
    return undefined;
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhone(value);
    setPhoneNumber(formatted);
  };

  const handleCalendarSelect = (date: Date | undefined) => {
    setTempSelectedDate(date);
  };

  const handleCalendarConfirm = () => {
    if (tempSelectedDate) {
      const year = tempSelectedDate.getFullYear().toString();
      const month = (tempSelectedDate.getMonth() + 1).toString().padStart(2, '0');
      const day = tempSelectedDate.getDate().toString().padStart(2, '0');
      
      setCallbackDate(`${year}-${month}-${day}`);
      setCalendarMonth(tempSelectedDate);
    }
    setCalendarOpen(false);
    setTempSelectedDate(undefined);
  };

  const handleCalendarCancel = () => {
    setCalendarOpen(false);
    setTempSelectedDate(undefined);
  };

  const handleCalendarOpenChange = (open: boolean) => {
    if (open) {
      const enteredDate = getDateFromFields();
      if (enteredDate) {
        setCalendarMonth(enteredDate);
        setTempSelectedDate(enteredDate);
      } else {
        setTempSelectedDate(undefined);
      }
      // Hide keyboard when calendar opens
      setShowKeyboard(false);
    }
    setCalendarOpen(open);
  };

  const handleTimePickerOpen = () => {
    setTempSelectedTime(selectedTime);
    setTimePickerOpen(true);
    setShowKeyboard(false);
  };

  const handleTimePickerConfirm = () => {
    if (tempSelectedTime) {
      setSelectedTime(tempSelectedTime);
    }
    setTimePickerOpen(false);
  };

  const handleTimePickerCancel = () => {
    setTimePickerOpen(false);
    setTempSelectedTime('');
  };

  const handleTopicPickerOpen = () => {
    setTempSelectedTopic(topic);
    setTopicPickerOpen(true);
    setShowKeyboard(false);
  };

  const handleTopicPickerConfirm = () => {
    if (tempSelectedTopic) {
      setTopic(tempSelectedTopic);
    }
    setTopicPickerOpen(false);
  };

  const handleTopicPickerCancel = () => {
    setTopicPickerOpen(false);
    setTempSelectedTopic('');
  };

  const handleSchedule = () => {
    const confNumber = 'CB' + Math.random().toString(36).substr(2, 9).toUpperCase();
    setConfirmationNumber(confNumber);
    setIsScheduled(true);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCalendar = () => {
    const displayDate = getDateFromFields()?.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    toast.success(
      <div className="text-[15px]">
        <div className="mb-2">Calendar event created:</div>
        <div className="space-y-1 pl-2">
          <div><strong>CRA Callback Appointment</strong></div>
          <div>{displayDate} at {selectedTime}</div>
          <div>Phone: {phoneNumber}</div>
          <div>Topic: {topic}</div>
        </div>
      </div>,
      {
        duration: 5000,
        style: {
          background: 'white',
          border: '1px solid #c6c6c8',
          color: '#000000',
        },
      }
    );
  };

  const timeSlots = [
    '9:00 AM - 9:30 AM',
    '9:30 AM - 10:00 AM',
    '10:00 AM - 10:30 AM',
    '10:30 AM - 11:00 AM',
    '11:00 AM - 11:30 AM',
    '11:30 AM - 12:00 PM',
    '1:00 PM - 1:30 PM',
    '1:30 PM - 2:00 PM',
    '2:00 PM - 2:30 PM',
    '2:30 PM - 3:00 PM',
    '3:00 PM - 3:30 PM',
    '3:30 PM - 4:00 PM',
    '4:00 PM - 4:30 PM',
    '4:30 PM - 5:00 PM',
  ];

  const topics = [
    'Tax return inquiry',
    'Payment arrangement',
    'Benefits and credits',
    'Notice of assessment',
    'Tax slip request',
    'Update personal information',
    'Registered plans (RRSP, TFSA, etc.)',
    'Other',
  ];

  const formatDisplayDate = () => {
    const date = getDateFromFields();
    if (date) {
      return date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
    return callbackDate;
  };

  if (isScheduled) {
    return (
      <div className="h-full bg-[#f2f2f7] flex flex-col relative">
        <div className="flex-shrink-0">
          <HeaderMaster 
            title="My Account"
            onNavigateHome={onNavigateHome}
            onLogoClick={onNavigateHome}
            hasUnreadMail={hasUnreadMail}
            showSearch={true}
            showMenu={true}
            largeTitle={true}
            onFileTaxes={onFileTaxes}
            onViewAllBenefits={onViewAllBenefits || onBenefitsAndCredits}
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
          />
        </div>

        {/* Fixed Page Title Area */}
        <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
          <div className="flex items-center gap-3 mb-1">
            <button
              onClick={onBack}
              className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={3} />
            </button>
            <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Callback Confirmed</h1>
          </div>
          <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Your appointment has been scheduled</p>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
          <div className="px-4 py-4">
            {/* Success message */}
            <div className="bg-[#d4f4dd] rounded-[10px] p-4 mb-4 border-l-4 border-[#28a745]">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#28a745] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-black mb-1">
                    <strong>Callback scheduled successfully</strong>
                  </div>
                  <div className="text-black text-[15px]">
                    Your confirmation number is: <strong>{confirmationNumber}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment details */}
            <div className="card-ios p-4 mb-4">
              <h2 className="text-black mb-4 text-[20px]">Appointment details</h2>
              
              <div className="space-y-3 text-[17px]">
                <div className="flex items-center gap-3 pb-3 border-b border-[rgba(60,60,67,0.29)]">
                  <CalendarIcon className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                  <div className="flex-1 flex items-center gap-2">
                    <span className="text-[#8e8e93]">Date:</span>
                    <span className="text-black">{formatDisplayDate()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pb-3 border-b border-[rgba(60,60,67,0.29)]">
                  <Clock className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                  <div className="flex-1 flex items-center gap-2">
                    <span className="text-[#8e8e93]">Time:</span>
                    <span className="text-black">{selectedTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pb-3 border-b border-[rgba(60,60,67,0.29)]">
                  <Phone className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                  <div className="flex-1 flex items-center gap-2">
                    <span className="text-[#8e8e93]">Callback number:</span>
                    <span className="text-black">{phoneNumber}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 flex-shrink-0" />
                  <div className="flex-1 flex items-center gap-2">
                    <span className="text-[#8e8e93]">Topic:</span>
                    <span className="text-black">{topic}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleAddToCalendar}
                className="w-full mt-6 px-6 py-3 bg-[#007AFF] text-white rounded-[10px] hover:opacity-90 active:opacity-80 transition-opacity flex items-center justify-center gap-2 border-0"
              >
                <Download className="h-4 w-4" />
                <span className="text-[17px]">Add to iPhone Calendar</span>
              </button>

              <button
                onClick={onBack}
                className="w-full mt-3 px-6 py-3 bg-white text-[#007AFF] border border-[#007AFF] rounded-[10px] hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors flex items-center justify-center"
              >
                <span className="text-[17px]">Back to Help and support</span>
              </button>
            </div>

            {/* Before your callback */}
            <div className="card-ios p-4 mb-4">
              <h3 className="text-black mb-3 text-[17px]">Before your callback</h3>
              <ul className="space-y-2 text-[15px] text-black opacity-80">
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] mt-1">•</span>
                  <span>Have your Social Insurance Number (SIN) ready</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] mt-1">•</span>
                  <span>Gather any relevant documents (notices, T4s, receipts, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] mt-1">•</span>
                  <span>Ensure you're in a quiet location where you can discuss personal information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] mt-1">•</span>
                  <span>Allow up to 15 minutes past your scheduled time for the agent to call</span>
                </li>
              </ul>
            </div>

            {/* What to expect */}
            <div className="card-ios p-4">
              <h3 className="text-black mb-3 text-[17px]">What to expect</h3>
              <ul className="space-y-2 text-[15px] text-black opacity-80">
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] mt-1">•</span>
                  <span>The CRA agent will identify themselves with their name and employee number</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] mt-1">•</span>
                  <span>You will be asked to verify your identity before discussing your account</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] mt-1">•</span>
                  <span>The call typically lasts 15-30 minutes depending on your inquiry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] mt-1">•</span>
                  <span>A confirmation email will be sent to your registered email address</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hamburger Menu */}
        <HamburgerMenu 
          isOpen={showMenu}
          onClose={() => setShowMenu(false)}
          menuItems={menuItems}
        />
      </div>
    );
  }

  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      <div className="flex-shrink-0">
        <HeaderMaster 
          title="My Account"
          onNavigateHome={onNavigateHome}
          onLogoClick={onNavigateHome}
          hasUnreadMail={hasUnreadMail}
          onMenuClick={() => setShowMenu(true)}
          showSearch={true}
          showMenu={true}
          largeTitle={true}
          onSearchClick={onSearchClick}
          onPersonalClick={onPersonalClick}
          onBusinessClick={onBusinessClick}
          onRepresentativeClick={onRepresentativeClick}
          activeAccountType={activeAccountType || 'personal'}
          onFileTaxes={onFileTaxes}
          onViewAllBenefits={onViewAllBenefits || onBenefitsAndCredits}
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
          onBecomeRepresentativeAsRep={onBecomeRepresentativeAsRep}
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

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-center gap-3 mb-1">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Schedule a callback</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Book a time for a CRA agent to call you</p>
      </div>

      {/* Scrollable Content Area */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7]"
        style={{ paddingBottom: showKeyboard ? '260px' : '16px' }}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (!target.closest('input') && !target.closest('button[type="button"]') && !target.closest('select')) {
            setShowKeyboard(false);
          }
        }}
      >
        <div className="px-4 pt-1">
          <div className="bg-[#fff9e6] rounded-[10px] p-4 mb-4 border-l-4 border-[#ffcc00]">
            <p className="text-black text-[15px] m-0">
              <strong className="block mb-1">Note:</strong>
              Schedule a callback from a CRA agent. We'll call you at your preferred time during business hours (Monday to Friday, 9:00 AM to 5:00 PM ET).
            </p>
          </div>

          {/* Date Selection */}
          <div className="card-ios p-4 mb-4">
            <Label htmlFor="callback-date" className="text-black mb-2 block text-[17px]">
              Callback date <span className="text-[#ff3b30]">*</span>
            </Label>
            
            <div className="relative">
              {/* Placeholder overlay that stays visible */}
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[17px] text-[#8e8e93] pointer-events-none select-none font-mono">
                {callbackDate.length > 0 ? (
                  <>
                    {callbackDate.split('').map((char, idx) => (
                      <span key={idx} className="invisible">{char}</span>
                    ))}
                    {"YYYY-MM-DD".slice(callbackDate.length)}
                  </>
                ) : (
                  "YYYY-MM-DD"
                )}
              </div>
              <Input
                ref={dateRef}
                id="callback-date"
                type="text"
                inputMode="none"
                placeholder=""
                value={callbackDate}
                onChange={(e) => handleDateChange(e.target.value)}
                onFocus={() => {
                  setShowKeyboard(true);
                  setActiveFieldId('callback-date');
                }}
                className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF] pr-12 font-mono"
              />
              <button
                type="button"
                onClick={() => handleCalendarOpenChange(true)}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center bg-transparent hover:opacity-70 active:opacity-50 transition-opacity p-1 border-0"
                aria-label="Open calendar"
              >
                <CalendarIcon className="h-6 w-6 text-[#007AFF]" />
              </button>
            </div>
          </div>

          {/* Time Selection */}
          <div className="card-ios p-4 mb-4">
            <Label htmlFor="callback-time" className="text-black mb-2 block text-[17px]">
              Preferred time <span className="text-[#ff3b30]">*</span>
            </Label>
            <button
              type="button"
              onClick={handleTimePickerOpen}
              className="w-full h-11 px-3 border border-[#c6c6c8] rounded-[8px] text-[17px] bg-white text-left flex items-center justify-between hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors"
            >
              <span className={selectedTime ? 'text-black' : 'text-[#8e8e93]'}>
                {selectedTime || 'Select a time slot'}
              </span>
              <Clock className="h-5 w-5 text-[#8e8e93] flex-shrink-0" />
            </button>
          </div>

          {/* Phone Number */}
          <div className="card-ios p-4 mb-4">
            <Label htmlFor="callback-phone" className="text-black mb-2 block text-[17px]">
              Callback number <span className="text-[#ff3b30]">*</span>
            </Label>
            <Input
              ref={phoneRef}
              id="callback-phone"
              type="tel"
              inputMode="tel"
              placeholder="(555) 555-5555"
              value={phoneNumber}
              onChange={(e) => handlePhoneChange(e.target.value)}
              onFocus={() => {
                setShowKeyboard(true);
                setActiveFieldId('callback-phone');
              }}
              className="h-11 text-[17px] rounded-[8px] border-[#c6c6c8] focus:border-[#007AFF] focus:ring-[#007AFF]"
            />
          </div>

          {/* Topic */}
          <div className="card-ios p-4 mb-4">
            <Label htmlFor="callback-topic" className="text-black mb-2 block text-[17px]">
              What is your inquiry about? <span className="text-[#ff3b30]">*</span>
            </Label>
            <button
              type="button"
              onClick={handleTopicPickerOpen}
              className="w-full h-11 px-3 border border-[#c6c6c8] rounded-[8px] text-[17px] bg-white text-left flex items-center justify-between hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors"
            >
              <span className={topic ? 'text-black' : 'text-[#8e8e93]'}>
                {topic || 'Select a topic'}
              </span>
              <ChevronLeft className="h-5 w-5 text-[#8e8e93] rotate-180 flex-shrink-0" />
            </button>
          </div>

          <button
            onClick={handleSchedule}
            disabled={!callbackDate || callbackDate.length !== 10 || !selectedTime || !phoneNumber || !topic}
            className="w-full mt-6 px-6 py-3 bg-[#007AFF] text-white rounded-[10px] hover:opacity-90 active:opacity-80 transition-opacity disabled:bg-[#c7c7cc] disabled:text-white disabled:opacity-40 disabled:cursor-not-allowed border-0 h-12 flex items-center justify-center"
          >
            <span className="text-[17px]">Schedule callback</span>
          </button>

          <button
            onClick={onBack}
            className="w-full mt-3 px-6 py-3 bg-white text-[#007AFF] border border-[#007AFF] rounded-[10px] hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors h-12 flex items-center justify-center"
          >
            <span className="text-[17px]">Cancel</span>
          </button>
        </div>
      </div>

      {showKeyboard && portalContainer && createPortal(
        <IPhoneNumericKeyboard 
          onKeyPress={(key) => {
            if (key === 'backspace') {
              if (activeFieldId === 'callback-date') {
                const numbers = callbackDate.replace(/\D/g, '');
                const newNumbers = numbers.slice(0, -1);
                handleDateChange(newNumbers);
              } else if (activeFieldId === 'callback-phone') {
                const numbers = phoneNumber.replace(/\D/g, '');
                const newNumbers = numbers.slice(0, -1);
                const formatted = formatPhone(newNumbers);
                setPhoneNumber(formatted);
              }
            } else {
              if (activeFieldId === 'callback-date') {
                const numbers = callbackDate.replace(/\D/g, '');
                const newNumbers = numbers + key;
                handleDateChange(newNumbers);
              } else if (activeFieldId === 'callback-phone') {
                const numbers = phoneNumber.replace(/\D/g, '');
                const newNumbers = numbers + key;
                const formatted = formatPhone(newNumbers);
                setPhoneNumber(formatted);
              }
            }
          }}
          onDone={() => setShowKeyboard(false)}
        />,
        portalContainer
      )}

      {calendarOpen && portalContainer && createPortal(
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 z-[100] flex items-end justify-center bg-black/40"
          onClick={handleCalendarCancel}
        >
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="bg-white w-full rounded-t-[20px] shadow-lg max-h-[75vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center pt-2 pb-1">
              <div className="w-10 h-1 bg-[#c7c7cc] rounded-full"></div>
            </div>
            <div className="p-4">
              <h2 className="text-black mb-3 text-[17px] text-center font-semibold">Select callback date</h2>
              <Calendar
                mode="single"
                selected={tempSelectedDate}
                month={calendarMonth}
                onMonthChange={setCalendarMonth}
                onSelect={handleCalendarSelect}
                selectedDateTooltip="Callback date"
                disabled={(date) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                  return date < today || isWeekend;
                }}
                className="w-full"
              />
              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleCalendarCancel}
                  className="flex-1 py-3 text-[#007AFF] bg-white hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors rounded-[10px] border border-[#007AFF] text-[17px] text-center"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCalendarConfirm}
                  className="flex-1 py-3 text-white bg-[#007AFF] hover:opacity-90 active:opacity-80 transition-opacity rounded-[10px] border-0 text-[17px] text-center"
                >
                  Confirm
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>,
        portalContainer
      )}

      {/* Time Picker Modal */}
      {timePickerOpen && portalContainer && createPortal(
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 z-[100] flex items-end justify-center bg-black/40"
          onClick={handleTimePickerCancel}
        >
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="bg-white w-full rounded-t-[20px] shadow-lg max-h-[75vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center pt-2 pb-1">
              <div className="w-10 h-1 bg-[#c7c7cc] rounded-full"></div>
            </div>
            <div className="p-4">
              <h2 className="text-black mb-3 text-[17px] text-center font-semibold">Select a time slot</h2>
              <div className="max-h-[50vh] overflow-y-auto">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setTempSelectedTime(slot)}
                    className={`w-full py-3 px-4 text-left text-[17px] border-b border-[#c6c6c8] last:border-b-0 transition-colors ${
                      tempSelectedTime === slot 
                        ? 'bg-[#007AFF]/10 text-[#007AFF]' 
                        : 'bg-white text-black hover:bg-[#f2f2f7]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{slot}</span>
                      {tempSelectedTime === slot && (
                        <Check className="h-5 w-5 text-[#007AFF]" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleTimePickerCancel}
                  className="flex-1 py-3 text-[#007AFF] bg-white hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors rounded-[10px] border border-[#007AFF] text-[17px] text-center"
                >
                  Cancel
                </button>
                <button
                  onClick={handleTimePickerConfirm}
                  className="flex-1 py-3 text-white bg-[#007AFF] hover:opacity-90 active:opacity-80 transition-opacity rounded-[10px] border-0 text-[17px] text-center"
                >
                  Confirm
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>,
        portalContainer
      )}

      {/* Topic Picker Modal */}
      {topicPickerOpen && portalContainer && createPortal(
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 z-[100] flex items-end justify-center bg-black/40"
          onClick={handleTopicPickerCancel}
        >
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="bg-white w-full rounded-t-[20px] shadow-lg max-h-[75vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center pt-2 pb-1">
              <div className="w-10 h-1 bg-[#c7c7cc] rounded-full"></div>
            </div>
            <div className="p-4">
              <h2 className="text-black mb-3 text-[17px] text-center font-semibold">What is your inquiry about?</h2>
              <div className="max-h-[50vh] overflow-y-auto">
                {topics.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTempSelectedTopic(t)}
                    className={`w-full py-3 px-4 text-left text-[17px] border-b border-[#c6c6c8] last:border-b-0 transition-colors ${
                      tempSelectedTopic === t 
                        ? 'bg-[#007AFF]/10 text-[#007AFF]' 
                        : 'bg-white text-black hover:bg-[#f2f2f7]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{t}</span>
                      {tempSelectedTopic === t && (
                        <Check className="h-5 w-5 text-[#007AFF]" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleTopicPickerCancel}
                  className="flex-1 py-3 text-[#007AFF] bg-white hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors rounded-[10px] border border-[#007AFF] text-[17px] text-center"
                >
                  Cancel
                </button>
                <button
                  onClick={handleTopicPickerConfirm}
                  className="flex-1 py-3 text-white bg-[#007AFF] hover:opacity-90 active:opacity-80 transition-opacity rounded-[10px] border-0 text-[17px] text-center"
                >
                  Confirm
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>,
        portalContainer
      )}

      {/* Hamburger Menu */}
      <HamburgerMenu 
        isOpen={showMenu}
        onClose={() => setShowMenu(false)}
        menuItems={menuItems}
      />
    </div>
  );
}