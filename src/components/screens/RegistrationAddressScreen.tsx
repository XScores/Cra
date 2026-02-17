import { ChevronLeft, ChevronRight, Info, HelpCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { IPhoneKeyboard } from '../IPhoneKeyboard';
import { IPhoneNumericKeyboard } from '../IPhoneNumericKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';
import regHeaderImg from 'figma:asset/f3f82fb93af1b2177d8464ea9850e7d9c259ddc7.png';
import { StepIndicator } from '../StepIndicator';

interface RegistrationAddressScreenProps {
  onNext: (data: AddressData) => void;
  onBack: () => void;
  onShowHelp?: () => void;
  onStepClick?: (step: number) => void;
}

export interface AddressData {
  streetAddress: string;
  unit: string;
  city: string;
  province: string;
  postalCode: string;
}

export function RegistrationAddressScreen({ onNext, onBack, onShowHelp, onStepClick }: RegistrationAddressScreenProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [streetAddress, setStreetAddress] = useState('');
  const [unit, setUnit] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [showProvincePicker, setShowProvincePicker] = useState(false);
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

  const formatPostalCode = (value: string) => {
    const cleaned = value.replace(/\s/g, '').toUpperCase();
    if (cleaned.length <= 3) return cleaned;
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)}`;
  };

  const handlePostalCodeChange = (value: string) => {
    const formatted = formatPostalCode(value);
    if (formatted.replace(/\s/g, '').length <= 6) {
      setPostalCode(formatted);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ streetAddress, unit, city, province, postalCode });
  };

  // Disabled for demonstration purposes - allow navigation without filling fields
  const isValid = true; // streetAddress.trim() && 
                  // city.trim() && 
                  // province.trim() && 
                  // postalCode.replace(/\s/g, '').length === 6;

  const handleFieldFocus = (fieldName: string) => {
    setActiveField(fieldName);
    setShowKeyboard(true);
  };

  const handleFieldBlur = () => {
    // Don't immediately hide keyboard to allow switching between fields
  };

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      if (activeField === 'street') {
        setStreetAddress(prev => prev.slice(0, -1));
      } else if (activeField === 'unit') {
        setUnit(prev => prev.slice(0, -1));
      } else if (activeField === 'city') {
        setCity(prev => prev.slice(0, -1));
      } else if (activeField === 'postal') {
        const cleaned = postalCode.replace(/\s/g, '');
        setPostalCode(formatPostalCode(cleaned.slice(0, -1)));
      }
    } else {
      if (activeField === 'street') {
        setStreetAddress(prev => prev + key);
      } else if (activeField === 'unit') {
        setUnit(prev => prev + key);
      } else if (activeField === 'city') {
        setCity(prev => prev + key);
      } else if (activeField === 'postal') {
        const cleaned = postalCode.replace(/\s/g, '') + key;
        if (cleaned.length <= 6) {
          setPostalCode(formatPostalCode(cleaned));
        }
      }
    }
  };

  const handleKeyboardDone = () => {
    setShowKeyboard(false);
    setActiveField(null);
  };

  const provinces = [
    { code: 'AB', name: 'Alberta' },
    { code: 'BC', name: 'British Columbia' },
    { code: 'MB', name: 'Manitoba' },
    { code: 'NB', name: 'New Brunswick' },
    { code: 'NL', name: 'Newfoundland and Labrador' },
    { code: 'NT', name: 'Northwest Territories' },
    { code: 'NS', name: 'Nova Scotia' },
    { code: 'NU', name: 'Nunavut' },
    { code: 'ON', name: 'Ontario' },
    { code: 'PE', name: 'Prince Edward Island' },
    { code: 'QC', name: 'Quebec' },
    { code: 'SK', name: 'Saskatchewan' },
    { code: 'YT', name: 'Yukon' }
  ];

  return (
    <motion.div 
      className="h-full bg-[#f2f2f7] flex flex-col relative"
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
        <StepIndicator currentStep={2} totalSteps={5} onStepClick={onStepClick} />
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto px-4"
        style={{ paddingBottom: showKeyboard ? '350px' : '96px' }}
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
            <h1 className="text-[28px] font-bold text-black m-0">Verify your address</h1>
          </div>
          <p className="text-[15px] text-black opacity-80 m-0 ml-[42.6px]">
            Enter your current mailing address on file with the CRA.
          </p>
        </div>

        {/* Info Alert */}
        <div className="card-ios p-4 bg-[#007AFF]/5 border border-[#007AFF]/20 border-l-4 border-l-[#007AFF] mb-4">
          <div className="flex items-start gap-2">
            <Info className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-[15px] text-black m-0">
              This address will be verified against your CRA records for security purposes.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Street Address */}
          <div className="card-ios p-4 space-y-2">
            <Label htmlFor="street" className="text-black text-[15px] font-medium">
              Street address
            </Label>
            <Input
              id="street"
              type="text"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              onFocus={() => handleFieldFocus('street')}
              placeholder="123 Main Street"
              className="h-11 bg-[#f2f2f7] border-[#c7c7cc] rounded-[10px] focus:border-[#007AFF] focus:ring-[#007AFF] text-[17px] placeholder:text-[#8e8e93]"
            />
          </div>

          {/* Unit */}
          <div className="card-ios p-4 space-y-2">
            <Label htmlFor="unit" className="text-black text-[15px] font-medium">
              Unit (optional)
            </Label>
            <Input
              id="unit"
              type="text"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              onFocus={() => handleFieldFocus('unit')}
              placeholder="Apt 123"
              className="h-11 bg-[#f2f2f7] border-[#c7c7cc] rounded-[10px] focus:border-[#007AFF] focus:ring-[#007AFF] text-[17px] placeholder:text-[#8e8e93]"
            />
          </div>

          {/* City and Province */}
          <div className="card-ios p-4 space-y-3">
            <div className="space-y-2">
              <Label htmlFor="city" className="text-black text-[15px] font-medium">
                City
              </Label>
              <Input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onFocus={() => handleFieldFocus('city')}
                placeholder="City Name"
                className="h-11 bg-[#f2f2f7] border-[#c7c7cc] rounded-[10px] focus:border-[#007AFF] focus:ring-[#007AFF] text-[17px] placeholder:text-[#8e8e93]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="province" className="text-black text-[15px] font-medium">
                Province/Territory
              </Label>
              <button
                type="button"
                onClick={() => {
                  setShowProvincePicker(true);
                  setShowKeyboard(false);
                  setActiveField(null);
                }}
                className="w-full h-11 bg-[#f2f2f7] border border-[#c7c7cc] rounded-[10px] px-3 focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] text-[17px] text-left flex items-center justify-between"
              >
                <span className={province ? 'text-black' : 'text-[#8e8e93]'}>
                  {province ? provinces.find(p => p.code === province)?.name : 'Select province'}
                </span>
                <ChevronRight className="h-5 w-5 text-[#c7c7cc]" strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Postal Code */}
          <div className="card-ios p-4 space-y-2">
            <Label htmlFor="postal" className="text-black text-[15px] font-medium">
              Postal code
            </Label>
            <Input
              id="postal"
              type="text"
              value={postalCode}
              onChange={(e) => handlePostalCodeChange(e.target.value)}
              onFocus={() => handleFieldFocus('postal')}
              placeholder="A1A 1A1"
              className="h-11 bg-[#f2f2f7] border-[#c7c7cc] rounded-[10px] focus:border-[#007AFF] focus:ring-[#007AFF] text-[17px] placeholder:text-[#8e8e93]"
            />
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
          <IPhoneKeyboard key={activeField} onKeyPress={handleKeyPress} onDone={handleKeyboardDone} />
        )}
      </AnimatePresence>

      {/* Province Picker Modal */}
      <AnimatePresence>
        {showProvincePicker && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowProvincePicker(false)}
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
                  onClick={() => setShowProvincePicker(false)}
                  className="text-[17px] text-[#007AFF]"
                >
                  Cancel
                </button>
                <h3 className="text-[17px] font-semibold text-black">Select Province</h3>
                <button
                  onClick={() => setShowProvincePicker(false)}
                  className="text-[17px] text-[#007AFF] font-semibold"
                >
                  Done
                </button>
              </div>

              {/* List */}
              <div className="flex-1 overflow-y-auto">
                {provinces.map((prov) => (
                  <button
                    key={prov.code}
                    onClick={() => {
                      setProvince(prov.code);
                      setShowProvincePicker(false);
                    }}
                    className="w-full px-4 py-3 text-left border-b border-[#c7c7cc] last:border-b-0 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors flex items-center justify-between"
                  >
                    <span className="text-[17px] text-black">{prov.name}</span>
                    {province === prov.code && (
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
    </motion.div>
  );
}