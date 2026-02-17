import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Info, HelpCircle } from 'lucide-react';
import { IPhoneNumericKeyboard } from '../IPhoneNumericKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';
import regHeaderImg from 'figma:asset/f3f82fb93af1b2177d8464ea9850e7d9c259ddc7.png';
import { formatSIN } from '../../utils/formatSIN';

interface ValidateIdentityScreenProps {
  onBack: () => void;
  onNext: () => void;
  onExit: () => void;
  onShowHelp?: () => void;
}

export function ValidateIdentityScreen({ onBack, onNext, onExit, onShowHelp }: ValidateIdentityScreenProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [sin, setSin] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [taxAmount, setTaxAmount] = useState('');
  const [showDayPicker, setShowDayPicker] = useState(false);
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));
  const months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' }
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => String(currentYear - i));

  const handleSinChange = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 9) {
      setSin(formatSIN(numbers));
    }
  };

  const getMonthLabel = () => {
    if (!month) return 'Month';
    const monthObj = months.find(m => m.value === month);
    return monthObj ? monthObj.label : 'Month';
  };

  const isFormValid = sin.replace(/\D/g, '').length === 9 && day && month && year && taxAmount.length > 0;

  const handleFieldFocus = (fieldName: string) => {
    setActiveField(fieldName);
    setShowKeyboard(true);
  };

  const handleDismissKeyboard = () => {
    setShowKeyboard(false);
    setActiveField(null);
    // Remove focus from input
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  // Use keyboard scroll hook with container ref
  useKeyboardScroll({ 
    isKeyboardVisible: showKeyboard, 
    activeField,
    keyboardHeight: 290,
    scrollContainerRef
  });

  return (
    <motion.div 
      className="h-full bg-[#f2f2f7] flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: isMounted ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Registration Header - Fixed at top */}
      <div className="flex-shrink-0 relative sticky top-0 z-10">
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

      {/* Back Button and Title - Sticky below header */}
      <div className="flex-shrink-0 sticky top-[73px] z-10 bg-[#f2f2f7] px-4 pt-3 pb-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0">Validate your identity</h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto px-4 pb-4"
        style={{ 
          maxHeight: showKeyboard ? 'calc(100vh - 290px)' : 'auto',
          paddingBottom: showKeyboard ? '150px' : '16px'
        }}
      >
        {/* Info Message */}
        <div className="bg-white rounded-[12px] p-4 mb-6">
          <p className="text-[15px] text-[#333] m-0">
            If you have a non-resident representative number, you must enter{' '}
            <button className="text-[15px] text-[#007AFF] underline bg-transparent border-0 p-0 cursor-pointer">
              different information
            </button>.
          </p>
        </div>

        {/* Social Insurance Number */}
        <div className="mb-6">
          <label htmlFor="sin" className="flex items-center gap-2 text-[15px] text-black mb-2">
            <span className="text-[#ff3b30]">*</span>
            <span className="font-semibold">Social insurance number</span>
            <span className="text-[#ff3b30] italic">(required)</span>
            <button className="bg-transparent border-0 p-0 cursor-pointer">
              <Info className="h-5 w-5 text-[#007AFF]" strokeWidth={2} />
            </button>
          </label>
          <input
            id="sin"
            type="text"
            inputMode="none"
            value={sin}
            onChange={(e) => handleSinChange(e.target.value)}
            onFocus={() => handleFieldFocus('sin')}
            className="w-full px-4 py-3 border border-[#c7c7cc] rounded-[10px] text-[17px] text-black bg-white focus:outline-none focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
            placeholder="000-000-000"
            style={{ 
              color: sin ? '#000' : '#999',
              caretColor: '#000'
            }}
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-[15px] text-black mb-2">
            <span className="text-[#ff3b30]">*</span>
            <span className="font-semibold">Date of birth</span>
            <span className="text-[#ff3b30] italic">(required)</span>
          </label>
          <div className="grid grid-cols-[70px_1fr_85px] gap-2">
            {/* Day Picker */}
            <button
              type="button"
              onClick={() => setShowDayPicker(true)}
              className="w-full h-11 bg-white border border-[#c7c7cc] rounded-[10px] px-2 focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] text-[17px] text-left flex items-center justify-between"
            >
              <span className={day ? 'text-black' : 'text-[#8e8e93]'}>
                {day || 'Day'}
              </span>
              <ChevronRight className="h-4 w-4 text-[#c7c7cc] flex-shrink-0" strokeWidth={2} />
            </button>

            {/* Month Picker */}
            <button
              type="button"
              onClick={() => setShowMonthPicker(true)}
              className="w-full h-11 bg-white border border-[#c7c7cc] rounded-[10px] px-2 focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] text-[17px] text-left flex items-center justify-between"
            >
              <span className={month ? 'text-black' : 'text-[#8e8e93]'}>
                {getMonthLabel()}
              </span>
              <ChevronRight className="h-4 w-4 text-[#c7c7cc] flex-shrink-0" strokeWidth={2} />
            </button>

            {/* Year Picker */}
            <button
              type="button"
              onClick={() => setShowYearPicker(true)}
              className="w-full h-11 bg-white border border-[#c7c7cc] rounded-[10px] px-2 focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] text-[17px] text-left flex items-center justify-between"
            >
              <span className={year ? 'text-black' : 'text-[#8e8e93]'}>
                {year || 'Year'}
              </span>
              <ChevronRight className="h-4 w-4 text-[#c7c7cc] flex-shrink-0" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Tax Information */}
        <div className="mb-6">
          <label htmlFor="tax" className="flex items-start gap-2 text-[15px] text-black mb-2">
            <span className="text-[#ff3b30] mt-0.5">*</span>
            <div className="flex-1">
              <div className="font-semibold mb-1">Tax information</div>
              <div className="text-[#666] leading-relaxed">
                Enter line 15000 from your 2024 income tax and benefit return. If your 2024 return has not been filed and assessed, enter line 15000 from your 2023 return - enter dollars only{' '}
                <span className="text-[#ff3b30] italic">(required)</span>
              </div>
            </div>
            <button className="bg-transparent border-0 p-0 cursor-pointer flex-shrink-0 mt-0.5">
              <Info className="h-5 w-5 text-[#007AFF]" strokeWidth={2} />
            </button>
          </label>
          <div 
            className="flex gap-2 items-center bg-white rounded-[10px] border border-[#c7c7cc] px-4 py-3 focus-within:border-[#007AFF] focus-within:ring-2 focus-within:ring-[#007AFF]/20"
          >
            <span className="text-[17px] text-[#666]">$</span>
            <input
              id="tax"
              type="text"
              inputMode="none"
              value={taxAmount}
              onChange={(e) => {
                // Allow only numbers from physical keyboard
                const value = e.target.value.replace(/\D/g, '');
                setTaxAmount(value);
              }}
              onFocus={() => handleFieldFocus('tax')}
              className="flex-1 border-0 text-[17px] text-black bg-transparent focus:outline-none"
              placeholder="0"
            />
            <span className="text-[17px] text-[#666]">.00</span>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="bg-white rounded-[12px] p-4 mb-6">
          <p className="text-[13px] text-[#666] m-0">
            For more information on how your privacy is protected, refer to our{' '}
            <button className="text-[13px] text-[#007AFF] underline bg-transparent border-0 p-0 cursor-pointer">
              Personal Information Collection Statement
            </button>.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-4">
          <button
            onClick={onExit}
            className="flex-1 bg-white text-[#007AFF] text-[17px] font-semibold py-3.5 px-4 rounded-[10px] border border-[#007AFF] cursor-pointer hover:bg-[#f2f2f7] active:bg-[#e5e5e5] transition-colors text-center"
          >
            Exit
          </button>
          
          <button
            onClick={onNext}
            disabled={!isFormValid}
            className="flex-1 bg-[#007AFF] text-white text-[17px] font-semibold py-3.5 px-4 rounded-[10px] border-0 cursor-pointer hover:bg-[#0051D5] active:bg-[#004BB8] transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-center"
          >
            Next
          </button>
        </div>
      </div>

      {/* Day Picker Modal */}
      <AnimatePresence>
        {showDayPicker && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDayPicker(false)}
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
                  onClick={() => setShowDayPicker(false)}
                  className="text-[17px] text-[#007AFF]"
                >
                  Cancel
                </button>
                <h3 className="text-[17px] font-semibold text-black">Select Day</h3>
                <button
                  onClick={() => setShowDayPicker(false)}
                  className="text-[17px] text-[#007AFF] font-semibold"
                >
                  Done
                </button>
              </div>

              {/* List */}
              <div className="flex-1 overflow-y-auto">
                {days.map((d) => (
                  <button
                    key={d}
                    onClick={() => {
                      setDay(d);
                      setShowDayPicker(false);
                    }}
                    className="w-full px-4 py-3 text-left border-b border-[#c7c7cc] last:border-b-0 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors flex items-center justify-between"
                  >
                    <span className="text-[17px] text-black">{d}</span>
                    {day === d && (
                      <svg className="h-5 w-5 text-[#007AFF]" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Month Picker Modal */}
      <AnimatePresence>
        {showMonthPicker && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMonthPicker(false)}
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
                  onClick={() => setShowMonthPicker(false)}
                  className="text-[17px] text-[#007AFF]"
                >
                  Cancel
                </button>
                <h3 className="text-[17px] font-semibold text-black">Select Month</h3>
                <button
                  onClick={() => setShowMonthPicker(false)}
                  className="text-[17px] text-[#007AFF] font-semibold"
                >
                  Done
                </button>
              </div>

              {/* List */}
              <div className="flex-1 overflow-y-auto">
                {months.map((m) => (
                  <button
                    key={m.value}
                    onClick={() => {
                      setMonth(m.value);
                      setShowMonthPicker(false);
                    }}
                    className="w-full px-4 py-3 text-left border-b border-[#c7c7cc] last:border-b-0 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors flex items-center justify-between"
                  >
                    <span className="text-[17px] text-black">{m.label}</span>
                    {month === m.value && (
                      <svg className="h-5 w-5 text-[#007AFF]" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Year Picker Modal */}
      <AnimatePresence>
        {showYearPicker && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowYearPicker(false)}
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
                  onClick={() => setShowYearPicker(false)}
                  className="text-[17px] text-[#007AFF]"
                >
                  Cancel
                </button>
                <h3 className="text-[17px] font-semibold text-black">Select Year</h3>
                <button
                  onClick={() => setShowYearPicker(false)}
                  className="text-[17px] text-[#007AFF] font-semibold"
                >
                  Done
                </button>
              </div>

              {/* List */}
              <div className="flex-1 overflow-y-auto">
                {years.map((y) => (
                  <button
                    key={y}
                    onClick={() => {
                      setYear(y);
                      setShowYearPicker(false);
                    }}
                    className="w-full px-4 py-3 text-left border-b border-[#c7c7cc] last:border-b-0 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors flex items-center justify-between"
                  >
                    <span className="text-[17px] text-black">{y}</span>
                    {year === y && (
                      <svg className="h-5 w-5 text-[#007AFF]" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Keyboard Backdrop */}
      <AnimatePresence>
        {showKeyboard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismissKeyboard}
            className="absolute inset-0 z-[90]"
            style={{ pointerEvents: 'auto' }}
          />
        )}
      </AnimatePresence>

      {/* iPhone Numeric Keyboard */}
      <AnimatePresence>
        {showKeyboard && activeField && (activeField === 'sin' || activeField === 'tax') && (
          <div className="keyboard-area">
            <IPhoneNumericKeyboard 
              key="numeric-keyboard"
              onKeyPress={(key) => {
                if (activeField === 'sin') {
                  if (key === 'backspace') {
                    const numbers = sin.replace(/\D/g, '');
                    handleSinChange(numbers.slice(0, -1));
                  } else if (sin.replace(/\D/g, '').length < 9) {
                    const numbers = sin.replace(/\D/g, '');
                    handleSinChange(numbers + key);
                  }
                } else if (activeField === 'tax') {
                  if (key === 'backspace') {
                    setTaxAmount(taxAmount.slice(0, -1));
                  } else if (/^\d$/.test(key)) {
                    setTaxAmount(taxAmount + key);
                  }
                }
              }}
              onDone={handleDismissKeyboard}
            />
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}