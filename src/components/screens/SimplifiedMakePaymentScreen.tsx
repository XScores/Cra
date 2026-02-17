import { ChevronLeft, ChevronRight, CreditCard, Check, Calendar as CalendarIcon, Landmark, HelpCircle, LogOut } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Calendar } from '../ui/calendar';
import { IPhoneNumericKeyboard } from '../IPhoneNumericKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface SimplifiedMakePaymentScreenProps {
  onBack: () => void;
  onContinue: (amount: string, paymentMethod: string, paymentDate: string) => void;
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
  onMorePaymentInfo?: () => void;
  hasUnreadMail?: boolean;
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
  onUserFeedback?: () => void;
}

export function SimplifiedMakePaymentScreen({ 
  onBack, 
  onContinue, 
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
  onMorePaymentInfo,
  hasUnreadMail = false,
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
  onUserFeedback,
}: SimplifiedMakePaymentScreenProps) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('rbc-debit');
  const [paymentAmount, setPaymentAmount] = useState('1250.00');
  const [paymentDate, setPaymentDate] = useState('');
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  const [calendarMonth, setCalendarMonth] = useState<Date>(new Date());
  const [tempSelectedDate, setTempSelectedDate] = useState<Date | undefined>(undefined);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<'amount' | 'date' | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Use keyboard scroll hook
  useKeyboardScroll({ 
    isKeyboardVisible: showKeyboard, 
    activeField: activeField === 'amount' ? 'amount' : activeField === 'date' ? 'payment-date' : null,
    keyboardHeight: 260,
    scrollContainerRef
  });
  
  const amountRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const menuItems = [
    { icon: CreditCard, label: 'Make a payment', id: 'make-payment', type: 'lucide' as const, onClick: () => { if (onMakePayment) onMakePayment(); } },
    { icon: Landmark, label: 'Registered plans', id: 'registered-plans', type: 'image' as const, imageSrc: mapleLeafIcon, onClick: () => { if (onRegisteredPlans) onRegisteredPlans(); } },
    { icon: HelpCircle, label: 'Help and support', id: 'help', type: 'lucide' as const, onClick: () => { if (onHelp) onHelp(); } },
    { icon: LogOut, label: 'Sign out and exit', id: 'sign-out', type: 'lucide' as const, onClick: () => { if (onSignOut) onSignOut(); }, danger: true },
  ];
  
  useEffect(() => {
    setPortalContainer(document.getElementById('iphone-screen'));
  }, []);
  
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
      setPaymentDate(formatDate(numbers));
    }
  };

  const getDateFromFields = () => {
    const numbers = paymentDate.replace(/\D/g, '');
    if (numbers.length === 8) {
      const year = parseInt(numbers.slice(0, 4));
      const month = parseInt(numbers.slice(4, 6));
      const day = parseInt(numbers.slice(6, 8));
      
      if (year && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
        return new Date(year, month - 1, day);
      }
    }
    return undefined;
  };
  
  const handleCalendarSelect = (date: Date | undefined) => {
    setTempSelectedDate(date);
  };

  const handleCalendarConfirm = () => {
    if (tempSelectedDate) {
      const year = tempSelectedDate.getFullYear().toString();
      const month = (tempSelectedDate.getMonth() + 1).toString().padStart(2, '0');
      const day = tempSelectedDate.getDate().toString().padStart(2, '0');
      
      setPaymentDate(`${year}-${month}-${day}`);
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
      // Hide keyboard if it's visible to ensure calendar is not hidden
      if (showKeyboard) {
        setShowKeyboard(false);
        // Blur any active input
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      }
      
      const enteredDate = getDateFromFields();
      if (enteredDate) {
        setCalendarMonth(enteredDate);
        setTempSelectedDate(enteredDate);
      } else {
        setTempSelectedDate(undefined);
      }
    }
    setCalendarOpen(open);
  };

  const handleContinue = () => {
    if ((selectedPaymentMethod === 'rbc-debit' || selectedPaymentMethod === 'td-chequing') && !paymentDate) {
      setShowErrorDialog(true);
    } else {
      const dateToPass = (selectedPaymentMethod === 'rbc-debit' || selectedPaymentMethod === 'td-chequing') ? paymentDate : '';
      onContinue(paymentAmount, selectedPaymentMethod, dateToPass);
    }
  };

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      if (activeField === 'amount') {
        setPaymentAmount(prev => prev.slice(0, -1));
      } else if (activeField === 'date') {
        setPaymentDate(prev => {
          const numbers = prev.replace(/\D/g, '');
          return formatDate(numbers.slice(0, -1));
        });
      }
    } else {
      if (activeField === 'amount') {
        setPaymentAmount(prev => prev + key);
      } else if (activeField === 'date') {
        const currentNumbers = paymentDate.replace(/\D/g, '');
        if (currentNumbers.length < 8) {
          setPaymentDate(formatDate(currentNumbers + key));
        }
      }
    }
  };

  const handleKeyboardDone = () => {
    setShowKeyboard(false);
    setActiveField(null);
  };

  const paymentMethods = [
    { id: 'rbc-debit', name: 'Royal Bank Debit Card', details: 'Debit ending in 4532' },
    { id: 'td-chequing', name: 'Toronto Dominion Bank', details: 'Chequing ending in 8863' },
    { id: 'visa', name: 'Visa', details: 'Visa ending in 8921' },
    { id: 'mastercard', name: 'Mastercard', details: 'Mastercard ending in 3456' }
  ];

  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      <HeaderMaster 
        title="My Account"
        largeTitle={true}
        showSearch={true}
        showMenu={true}
        onNavigateHome={onNavigateHome}
        onLogoClick={onNavigateHome}
        hasUnreadMail={hasUnreadMail}
        onFileTaxes={onFileTaxes}
        onViewAllBenefits={onBenefitsAndCredits}
        onMakePayment={onMakePayment}
        onViewMail={onViewMail}
        onRegisteredPlans={onRegisteredPlans}
        onTaxSlips={onTaxSlips}
        onProofOfIncome={onProofOfIncome}
        onHelp={onHelp}
        onSignOut={onSignOut}
        // Search navigation handlers
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
        onUserFeedback={onUserFeedback}
      />

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-center gap-3 mb-1">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Make a payment</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Complete your payment in 3 easy steps</p>
      </div>

      {/* Scrollable Content Area */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7]"
        style={{ paddingBottom: showKeyboard ? '260px' : '16px' }}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (!target.closest('input') && !target.closest('button[type="button"]')) {
            setShowKeyboard(false);
          }
        }}
      >
        <div className="px-4 space-y-3">
          {/* Step 1: Payment Amount */}
          <div className="card-ios">
            <div className="px-4 py-2 bg-[#f2f2f7] border-b border-[#c6c6c8] flex items-center justify-between rounded-t-[10px]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#007AFF] text-white flex items-center justify-center text-[15px]">1</div>
                <h2 className="text-black m-0 text-[17px]">Payment amount</h2>
              </div>
            </div>
            <div className="px-4 py-3">
              <Label htmlFor="amount" className="text-black mb-2 block text-[17px]">Amount to pay</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-[18px]">$</span>
                <Input
                  ref={amountRef}
                  id="amount"
                  type="text"
                  inputMode="none"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value.replace(/[^0-9.]/g, ''))}
                  onFocus={() => {
                    setActiveField('amount');
                    setShowKeyboard(true);
                    setTimeout(() => {
                      amountRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 100);
                  }}
                  className="h-12 bg-white border-[#c6c6c8] rounded-[8px] pl-8 text-[18px] focus:border-[#007AFF] focus:ring-[#007AFF]"
                />
              </div>
              <p className="text-black opacity-80 text-[15px] mt-2 m-0">Amount due by Apr 30, 2026: <span className="text-[#ff3b30] font-bold">$1,250.00</span></p>
            </div>
          </div>

          {/* Step 2: Payment Method */}
          <div className="card-ios">
            <div className="px-4 py-2 bg-[#f2f2f7] border-b border-[#c6c6c8] flex items-center justify-between rounded-t-[10px]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#007AFF] text-white flex items-center justify-center text-[15px]">2</div>
                <h2 className="text-black m-0 text-[17px]">Payment method</h2>
              </div>
            </div>
            <div className="px-4 py-3">
              <RadioGroup value={selectedPaymentMethod} onValueChange={setSelectedPaymentMethod}>
                <div className="space-y-2">
                  {paymentMethods.map((method) => (
                    <div 
                      key={method.id}
                      className={`flex items-center space-x-3 p-3 border-2 transition-colors cursor-pointer rounded-[8px] ${
                        selectedPaymentMethod === method.id 
                          ? 'border-[#007AFF] bg-[#f2f2f7]' 
                          : 'border-[#c6c6c8] hover:border-[#007AFF]'
                      }`}
                      onClick={() => setSelectedPaymentMethod(method.id)}
                    >
                      <RadioGroupItem value={method.id} id={method.id} className="border-gray-ios" />
                      {method.id === 'td-chequing' ? (
                        <Landmark className="h-5 w-5 text-[#007AFF]" />
                      ) : (
                        <CreditCard className="h-5 w-5 text-[#007AFF]" />
                      )}
                      <Label htmlFor={method.id} className="flex-1 cursor-pointer">
                        <div>
                          <div className="text-black text-[17px]">{method.name}</div>
                          <div className="text-black opacity-60 text-[15px]">{method.details}</div>
                        </div>
                      </Label>
                      {selectedPaymentMethod === method.id && (
                        <div className="h-5 w-5 rounded-full bg-[#007AFF] flex items-center justify-center">
                          <Check className="h-3 w-3 text-white" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </RadioGroup>

              {/* Other Ways to Pay Accordion */}
              <div className="mt-4">
                <Accordion type="single" collapsible className="space-y-3">
                  <AccordionItem value="other-ways" className="card-ios overflow-hidden border-l-4 border-[#007AFF]">
                    <AccordionTrigger className="text-black hover:no-underline py-3 px-4 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] text-[15px]">
                      Other ways to pay
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="space-y-3 text-[15px] text-black">
                        <div className="p-3 bg-white border border-[#c6c6c8] rounded-[8px]">
                          <div className="font-semibold mb-1">Online banking</div>
                          <div className="opacity-80">Pay through your financial institution's online banking service</div>
                        </div>
                        
                        <div className="p-3 bg-white border border-[#c6c6c8] rounded-[8px]">
                          <div className="font-semibold mb-1">Pre-authorized debit and instalments</div>
                          <div className="opacity-80">Set up automatic instalment payments from your bank account in consultation with the CRA. This can be set up in your "Profile" area.</div>
                        </div>
                        
                        <div className="p-3 bg-white border border-[#c6c6c8] rounded-[8px]">
                          <div className="font-semibold mb-1">Wire transfer</div>
                          <div className="opacity-80">For international payments or large amounts</div>
                        </div>
                        
                        <div className="p-3 bg-white border border-[#c6c6c8] rounded-[8px]">
                          <div className="font-semibold mb-1">At your financial institution</div>
                          <div className="opacity-80">Pay in person at your bank or credit union</div>
                        </div>
                        
                        <div className="p-3 bg-white border border-[#c6c6c8] rounded-[8px]">
                          <div className="font-semibold mb-1">By mail</div>
                          <div className="opacity-80">Send a cheque or money order to the CRA</div>
                        </div>
                        
                        <button
                          onClick={onMorePaymentInfo}
                          className="w-full p-3 bg-white border border-[#c6c6c8] rounded-[8px] flex items-center justify-between hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors"
                        >
                          <div className="text-left">
                            <div className="font-semibold mb-1 text-black">Detailed payment information</div>
                            <div className="opacity-80 text-black">Detailed information and help with payments</div>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-ios flex-shrink-0" />
                        </button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>

          {/* Step 3: Payment Date */}
          <div className="card-ios">
            <div className="px-4 py-2 bg-[#f2f2f7] border-b border-[#c6c6c8] flex items-center justify-between rounded-t-[10px]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#007AFF] text-white flex items-center justify-center text-[15px]">3</div>
                <h2 className="text-black m-0 text-[17px]">Payment date</h2>
              </div>
            </div>
            <div className="px-4 py-3">
              {(selectedPaymentMethod === 'rbc-debit' || selectedPaymentMethod === 'td-chequing') && (
                <>
                  <Label className="text-black mb-2 block text-[17px]">Date to withdraw payment</Label>
                  <div className="relative">
                    {/* Placeholder overlay that stays visible */}
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[17px] text-[#8e8e93] pointer-events-none select-none font-mono">
                      {paymentDate.length > 0 ? (
                        <>
                          {paymentDate.split('').map((char, idx) => (
                            <span key={idx} className="invisible">{char}</span>
                          ))}
                          {"YYYY-MM-DD".slice(paymentDate.length)}
                        </>
                      ) : (
                        "YYYY-MM-DD"
                      )}
                    </div>
                    <Input
                      ref={dateRef}
                      id="payment-date"
                      type="text"
                      inputMode="none"
                      placeholder=""
                      value={paymentDate}
                      onChange={(e) => handleDateChange(e.target.value)}
                      onFocus={() => {
                        setActiveField('date');
                        setShowKeyboard(true);
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

                  <div className="bg-[#fff9e6] p-2 mt-3 border-l-4 border-[#ffcc00] rounded-[10px]">
                    <p className="text-black text-[15px] m-0">
                      <strong className="text-black">Note:</strong> Funds will be withdrawn from your account on the date you have indicated. Some banks will only process payments between Monday to Friday.
                    </p>
                  </div>
                </>
              )}

              {(selectedPaymentMethod === 'visa' || selectedPaymentMethod === 'mastercard') && (
                <div className="bg-[#fff9e6] p-2 border-l-4 border-[#ffcc00] rounded-[10px]">
                  <p className="text-black text-[15px] m-0">
                    <strong className="text-black">Note:</strong> Your credit card will be billed within 1-2 business days.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Review & Submit */}
          <div className="card-ios">
            <div className="px-4 py-3">
              <h3 className="text-black mb-2 text-[17px]">Review your payment</h3>
              <div className="space-y-2 mb-2">
                <div className="flex justify-between items-center pb-2 border-b border-[#c6c6c8]">
                  <span className="text-black opacity-80 text-[17px]">Amount:</span>
                  <span className="text-[#ff3b30] text-[17px] font-bold">${paymentAmount}</span>
                </div>
                <div className={`flex justify-between items-center ${(selectedPaymentMethod === 'rbc-debit' || selectedPaymentMethod === 'td-chequing') ? 'pb-2 border-b border-[#c6c6c8]' : ''}`}>
                  <span className="text-black opacity-80 text-[17px]">Payment method:</span>
                  <span className="text-black text-[17px]">
                    {paymentMethods.find(m => m.id === selectedPaymentMethod)?.name}
                  </span>
                </div>
                {(selectedPaymentMethod === 'rbc-debit' || selectedPaymentMethod === 'td-chequing') && (
                  <div className="flex justify-between items-center">
                    <span className="text-black opacity-80 text-[17px]">Payment date:</span>
                    <span className="text-black text-[17px]">
                      {paymentDate || 'Not selected'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pb-4">
            <button 
              onClick={handleContinue}
              className="w-full bg-[#007AFF] text-white py-3 rounded-[10px] transition-opacity hover:opacity-90 active:opacity-80 h-12 flex items-center justify-center gap-2 border-0"
            >
              <span className="text-[17px]">Continue to confirm payment</span>
              <ChevronRight className="h-5 w-5" />
            </button>
            <button 
              onClick={onBack}
              className="w-full bg-white border border-[#007AFF] py-3 rounded-[10px] transition-colors hover:bg-[#f2f2f7] active:bg-[#e5e5ea] h-12 flex items-center justify-center text-[#007AFF]"
            >
              <span className="text-[17px]">Cancel</span>
            </button>
          </div>
        </div>
      </div>
      
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
              <h2 className="text-black mb-3 text-[17px] text-center font-semibold">Select date for withdrawal</h2>
              <Calendar
                mode="single"
                selected={tempSelectedDate}
                month={calendarMonth}
                onMonthChange={setCalendarMonth}
                onSelect={handleCalendarSelect}
                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
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
      
      {/* Error Dialog */}
      {showErrorDialog && portalContainer && createPortal(
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 z-[300] flex items-end justify-center p-2"
          onClick={() => setShowErrorDialog(false)}
        >
          <div className="absolute inset-0 bg-black/40" />
          
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative w-full max-w-[500px] mb-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-[14px] overflow-hidden">
              <div className="px-4 py-3 text-center border-b border-[rgba(60,60,67,0.29)]">
                <div className="text-[13px] text-black mb-1">
                  Payment date required
                </div>
                <div className="text-[13px] text-[#8e8e93]">
                  Please select a payment date before continuing
                </div>
              </div>
              <button
                onClick={() => setShowErrorDialog(false)}
                className="w-full py-4 text-[20px] text-[#007AFF] bg-white hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-center border-0"
              >
                OK
              </button>
            </div>
          </motion.div>
        </motion.div>,
        portalContainer
      )}
      
      <AnimatePresence>
        {showKeyboard && <IPhoneNumericKeyboard key="keyboard" onKeyPress={handleKeyPress} onDone={handleKeyboardDone} />}
      </AnimatePresence>
    </div>
  );
}