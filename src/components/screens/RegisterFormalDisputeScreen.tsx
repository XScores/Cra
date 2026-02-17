import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, AlertCircle, ChevronDown, Check, Calendar as CalendarIcon } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';
import { IPhoneNumericKeyboard } from '../IPhoneNumericKeyboard';
import { IPhoneTextKeyboard } from '../IPhoneTextKeyboard';
import { Calendar } from '../ui/calendar';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useKeyboardScroll } from '../useKeyboardScroll';

interface RegisterFormalDisputeScreenProps {
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

const DISPUTE_TYPES = [
  'Notice of Assessment',
  'Notice of Reassessment',
  'Notice of Determination',
  'Benefits calculation',
  'Penalty or interest',
  'Collection action',
  'Other'
];

const TAX_YEARS = Array.from({ length: 11 }, (_, i) => {
  const currentYear = new Date().getFullYear();
  return currentYear - i;
});

export function RegisterFormalDisputeScreen({
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
}: RegisterFormalDisputeScreenProps) {
  const [disputeType, setDisputeType] = useState('');
  const [taxYear, setTaxYear] = useState('');
  const [noticeDate, setNoticeDate] = useState('');
  const [amountInDispute, setAmountInDispute] = useState('');
  const [description, setDescription] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [isDisputeTypeOpen, setIsDisputeTypeOpen] = useState(false);
  const [isTaxYearOpen, setIsTaxYearOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [tempSelectedDate, setTempSelectedDate] = useState<Date | undefined>(undefined);
  const [calendarMonth, setCalendarMonth] = useState(new Date());
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const disputeTypeRef = useRef<HTMLDivElement>(null);
  const taxYearRef = useRef<HTMLDivElement>(null);
  const noticeDateRef = useRef<HTMLInputElement>(null);

  const keyboardHeight = 290;

  // Use keyboard scroll hook
  useKeyboardScroll({ 
    isKeyboardVisible: showKeyboard, 
    activeField: activeField,
    keyboardHeight: 290,
    scrollContainerRef
  });

  useEffect(() => {
    setPortalContainer(document.getElementById('iphone-screen'));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (disputeTypeRef.current && !disputeTypeRef.current.contains(event.target as Node)) {
        setIsDisputeTypeOpen(false);
      }
      if (taxYearRef.current && !taxYearRef.current.contains(event.target as Node)) {
        setIsTaxYearOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCalendarOpenChange = (open: boolean) => {
    // Close keyboard when opening calendar
    if (open) {
      setShowKeyboard(false);
      setActiveField(null);
    }
    
    setCalendarOpen(open);
    if (open && noticeDate) {
      setTempSelectedDate(new Date(noticeDate));
    } else if (open) {
      setTempSelectedDate(new Date());
    }
  };

  const handleCalendarSelect = (date: Date | undefined) => {
    setTempSelectedDate(date);
  };

  const handleCalendarCancel = () => {
    setCalendarOpen(false);
  };

  const handleCalendarConfirm = () => {
    if (tempSelectedDate) {
      setNoticeDate(tempSelectedDate.toISOString().split('T')[0]);
      setCalendarOpen(false);
    }
  };

  const handleInputFocus = (field: string) => {
    setActiveField(field);
    setShowKeyboard(true);
  };

  const handleKeyPress = (key: string) => {
    if (activeField === 'amountInDispute') {
      setAmountInDispute(prev => {
        if (key === 'delete') {
          return prev.slice(0, -1);
        }
        if (key === '.' && prev.includes('.')) {
          return prev;
        }
        if (key === '.' || /^\d$/.test(key)) {
          return prev + key;
        }
        return prev;
      });
    } else if (activeField === 'noticeDate') {
      setNoticeDate(prev => {
        if (key === 'delete') {
          return prev.slice(0, -1);
        }
        if (/^\d$/.test(key)) {
          // Auto-format as YYYY-MM-DD
          const newValue = prev + key;
          if (newValue.length === 4 || newValue.length === 7) {
            return newValue + '-';
          }
          if (newValue.length <= 10) {
            return newValue;
          }
        }
        return prev;
      });
    }
  };

  const handleTextInput = (text: string) => {
    if (activeField === 'description') {
      setDescription(text);
    }
  };

  // Computer keyboard handlers for each field
  const handleNoticeDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow manual typing from computer keyboard
    const cleaned = value.replace(/[^\d-]/g, '');
    if (cleaned.length <= 10) {
      setNoticeDate(cleaned);
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow digits and one decimal point
    const cleaned = value.replace(/[^\d.]/g, '');
    const parts = cleaned.split('.');
    if (parts.length <= 2) {
      setAmountInDispute(cleaned);
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleKeyboardDone = () => {
    setShowKeyboard(false);
    setActiveField(null);
  };

  const handleSubmitForm = () => {
    if (disputeType && taxYear && noticeDate && amountInDispute && description) {
      onSubmit();
    }
  };

  const isFormValid = disputeType && taxYear && noticeDate && amountInDispute && description;

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

      {/* Fixed Page Title Header with Back Button */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Register a formal dispute</h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div 
        className="flex-1 overflow-y-auto" 
        ref={scrollContainerRef}
        style={{ paddingBottom: showKeyboard ? keyboardHeight : 0 }}
      >
        <div className="px-4 pt-4 pb-24">

          {/* Information banner */}
          <div className="bg-white rounded-xl p-4 mb-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-gray-ios mb-2">
                You can register a formal dispute (objection) if you disagree with your notice of assessment or reassessment.
              </p>
              <p className="text-gray-ios">
                You have 90 days from the date of your notice to file an objection.
              </p>
            </div>
          </div>

          {/* Before you start */}
          <div className="mt-6 bg-white rounded-xl p-4">
            <h3 className="mb-3">Before you start</h3>
            <p className="text-gray-ios mb-3">
              Make sure you have:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li className="text-gray-ios">Your notice of assessment or reassessment</li>
              <li className="text-gray-ios">Details of the items you're disputing</li>
              <li className="text-gray-ios">Supporting documents and facts</li>
              <li className="text-gray-ios">Reasons for your objection</li>
            </ul>
          </div>

          {/* Form section */}
          <div className="mt-6 mb-3">
            <h2 className="px-4">Dispute information</h2>
          </div>

          <div className="space-y-4">
            {/* Dispute type dropdown */}
            <div className="bg-white rounded-xl p-4">
              <label className="block mb-2 text-black">
                Type of dispute
              </label>
              <div className="relative" ref={disputeTypeRef}>
                <button
                  className="w-full px-4 py-3 bg-[#F2F2F7] border border-[#E5E5EA] rounded-lg text-black text-left appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent flex items-center justify-between"
                  onClick={() => setIsDisputeTypeOpen(!isDisputeTypeOpen)}
                >
                  <span className={disputeType ? 'text-black' : 'text-[#8E8E93]'}>
                    {disputeType || 'Select dispute type'}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[#007AFF] transition-transform ${isDisputeTypeOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDisputeTypeOpen && (
                  <div className="absolute z-10 w-full bg-white border border-[#E5E5EA] rounded-lg shadow-lg mt-1 max-h-[240px] overflow-y-auto">
                    {DISPUTE_TYPES.map((type) => (
                      <button
                        key={type}
                        className="w-full px-4 py-3 text-left hover:bg-[#F2F2F7] active:bg-[#E5E5EA] cursor-pointer border-b border-[#E5E5EA] last:border-b-0 flex items-center justify-between"
                        onClick={() => {
                          setDisputeType(type);
                          setIsDisputeTypeOpen(false);
                        }}
                      >
                        <span className="text-black">{type}</span>
                        {disputeType === type && (
                          <Check className="w-5 h-5 text-[#007AFF]" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Tax year dropdown */}
            <div className="bg-white rounded-xl p-4">
              <label className="block mb-2 text-black">
                Tax year
              </label>
              <div className="relative" ref={taxYearRef}>
                <button
                  className="w-full px-4 py-3 bg-[#F2F2F7] border border-[#E5E5EA] rounded-lg text-black text-left appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent flex items-center justify-between"
                  onClick={() => setIsTaxYearOpen(!isTaxYearOpen)}
                >
                  <span className={taxYear ? 'text-black' : 'text-[#8E8E93]'}>
                    {taxYear || 'Select tax year'}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[#007AFF] transition-transform ${isTaxYearOpen ? 'rotate-180' : ''}`} />
                </button>
                {isTaxYearOpen && (
                  <div className="absolute z-10 w-full bg-white border border-[#E5E5EA] rounded-lg shadow-lg mt-1 max-h-[240px] overflow-y-auto">
                    {TAX_YEARS.map((year) => (
                      <button
                        key={year}
                        className="w-full px-4 py-3 text-left hover:bg-[#F2F2F7] active:bg-[#E5E5EA] cursor-pointer border-b border-[#E5E5EA] last:border-b-0 flex items-center justify-between"
                        onClick={() => {
                          setTaxYear(year.toString());
                          setIsTaxYearOpen(false);
                        }}
                      >
                        <span className="text-black">{year}</span>
                        {taxYear === year.toString() && (
                          <Check className="w-5 h-5 text-[#007AFF]" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Notice date */}
            <div className="bg-white rounded-xl p-4">
              <label htmlFor="noticeDate" className="block mb-2 text-black">
                Notice date
              </label>
              <div className="relative">
                <input
                  id="noticeDate"
                  type="text"
                  value={noticeDate}
                  placeholder="YYYY-MM-DD"
                  className="w-full px-4 py-3 bg-[#F2F2F7] border border-[#E5E5EA] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                  onFocus={() => handleInputFocus('noticeDate')}
                  ref={noticeDateRef}
                  onChange={handleNoticeDateChange}
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#007AFF] cursor-pointer"
                  onClick={() => handleCalendarOpenChange(true)}
                >
                  <CalendarIcon className="w-5 h-5" />
                </button>
              </div>
              <p className="text-[13px] text-[#3C3C43] mt-2">
                Date shown on your notice of assessment or reassessment
              </p>
            </div>

            {/* Amount in dispute */}
            <div className="bg-white rounded-xl p-4">
              <label htmlFor="amountInDispute" className="block mb-2 text-black">
                Amount in dispute
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-ios">$</span>
                <input
                  id="amountInDispute"
                  type="text"
                  value={amountInDispute}
                  placeholder="0.00"
                  className="w-full pl-8 pr-4 py-3 bg-[#F2F2F7] border border-[#E5E5EA] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                  onFocus={() => handleInputFocus('amountInDispute')}
                  onChange={handleAmountChange}
                />
              </div>
              <p className="text-[13px] text-[#3C3C43] mt-2">
                Total amount you are disputing
              </p>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl p-4">
              <label htmlFor="description" className="block mb-2 text-black">
                Description and reasons
              </label>
              <textarea
                id="description"
                value={description}
                placeholder="Explain why you disagree and provide relevant facts..."
                className="w-full px-4 py-3 bg-[#F2F2F7] border border-[#E5E5EA] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent resize-none h-32"
                onFocus={() => handleInputFocus('description')}
                onChange={handleDescriptionChange}
              />
              <p className="text-[13px] text-[#3C3C43] mt-2">
                Provide details about the items you're disputing and your reasons
              </p>
            </div>
          </div>

          {/* Submit button */}
          <div className="mt-6">
            <button
              disabled={!isFormValid}
              className={`w-full py-3 px-4 rounded-lg transition-all ${
                isFormValid
                  ? 'bg-[#007AFF] text-white active:bg-[#0051D5] cursor-pointer'
                  : 'bg-[#E5E5EA] text-[#8E8E93] cursor-not-allowed'
              }`}
              onClick={handleSubmitForm}
            >
              Submit dispute
            </button>
          </div>
        </div>
      </div>

      {/* iOS Keyboard */}
      {showKeyboard && (
        <div className="fixed bottom-0 left-0 right-0 z-50">
          {activeField === 'description' ? (
            <IPhoneTextKeyboard
              value={description}
              onChange={handleTextInput}
              onClose={handleKeyboardDone}
              multiline={true}
            />
          ) : (
            <IPhoneNumericKeyboard
              onKeyPress={handleKeyPress}
              onDone={handleKeyboardDone}
              showDecimal={activeField === 'amountInDispute'}
            />
          )}
        </div>
      )}

      {/* Calendar Modal */}
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
              <h2 className="text-black mb-3 text-[17px] text-center font-semibold">Select notice date</h2>
              <Calendar
                mode="single"
                selected={tempSelectedDate}
                month={calendarMonth}
                onMonthChange={setCalendarMonth}
                onSelect={handleCalendarSelect}
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
    </div>
  );
}