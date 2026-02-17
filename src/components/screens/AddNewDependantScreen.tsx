import { ChevronLeft, ChevronDown, Info, Plus, X } from 'lucide-react';
import { useState, useRef } from 'react';
import { HeaderMaster } from '../HeaderMaster';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { IPhoneKeyboard } from '../IPhoneKeyboard';
import { IPhoneNumericKeyboard } from '../IPhoneNumericKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';
import { Send, Gift, Mail, Receipt, FileCheck, HelpCircle, LogOut, CreditCard } from 'lucide-react';
import { formatSIN } from '../../utils/formatSIN';

interface AddNewDependantScreenProps {
  onBack: () => void;
  onSave?: (data: DependantData) => void;
  onNavigateHome?: () => void;
  onLogoClick?: () => void;
  hasUnreadMail?: boolean;
  onViewMail?: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onViewAllBenefits?: () => void;
  onViewRefundDetails?: () => void;
  onViewNoticeOfAssessment?: () => void;
  onGSTHSTCredit?: () => void;
  onAccountDetails?: () => void;
  onProfile?: () => void;
  onViewTaxReturns?: () => void;
}

export interface DependantData {
  relationship: string;
  sin: string;
  firstName: string;
  middleNames: string[];
  lastName: string;
  dateOfBirth: string;
}

export function AddNewDependantScreen({ 
  onBack, 
  onSave,
  onNavigateHome,
  onLogoClick,
  hasUnreadMail,
  onViewMail,
  onFileTaxes,
  onMakePayment,
  onBenefitsAndCredits,
  onRegisteredPlans,
  onHelp,
  onSignOut,
  onTaxSlips,
  onProofOfIncome,
  onViewAllBenefits,
  onViewRefundDetails,
  onViewNoticeOfAssessment,
  onGSTHSTCredit,
  onAccountDetails,
  onProfile,
  onViewTaxReturns
}: AddNewDependantScreenProps) {
  const [relationship, setRelationship] = useState('');
  const [sin, setSin] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleNames, setMiddleNames] = useState<string[]>(['']);
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const addMiddleName = () => {
    setMiddleNames([...middleNames, '']);
  };

  const removeMiddleName = (index: number) => {
    if (middleNames.length > 1) {
      setMiddleNames(middleNames.filter((_, i) => i !== index));
    }
  };

  const updateMiddleName = (index: number, value: string) => {
    const newMiddleNames = [...middleNames];
    newMiddleNames[index] = value;
    setMiddleNames(newMiddleNames);
  };

  const formatDate = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 4) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 4)}-${numbers.slice(4)}`;
    return `${numbers.slice(0, 4)}-${numbers.slice(4, 6)}-${numbers.slice(6, 8)}`;
  };

  const handleSinChange = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 9) {
      setSin(formatSIN(numbers));
    }
  };

  const handleDateChange = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 8) {
      setDateOfBirth(formatDate(numbers));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSave) {
      onSave({ relationship, sin, firstName, middleNames, lastName, dateOfBirth });
    }
    onBack();
  };

  const isValid = relationship.trim() &&
                  sin.replace(/\D/g, '').length === 9 && 
                  firstName.trim() && 
                  lastName.trim() && 
                  dateOfBirth.replace(/\D/g, '').length === 8;

  const handleFieldFocus = (fieldName: string) => {
    setActiveField(fieldName);
    setShowKeyboard(true);
  };

  const handleFieldBlur = () => {
    // Don't immediately hide keyboard to allow switching between fields
  };

  // Determine keyboard height based on active field
  const isNumericKeyboard = activeField === 'sin' || activeField === 'dob';
  const keyboardHeight = isNumericKeyboard ? 290 : 220;

  // Use keyboard scroll hook
  useKeyboardScroll({ 
    isKeyboardVisible: showKeyboard, 
    activeField,
    keyboardHeight,
    scrollContainerRef
  });

  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col relative">
      {/* Header - Fixed */}
      <div className="flex-shrink-0">
        <HeaderMaster 
          title="My Account"
          onNavigateHome={onNavigateHome}
          onLogoClick={onLogoClick}
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

      {/* Content - Scrollable */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7]"
        style={{ paddingBottom: showKeyboard ? `${keyboardHeight}px` : '80px' }}
      >
        {/* Page Title with Circular Back Button */}
        <div className="px-4 pt-2 pb-3 bg-[#f2f2f7]">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={3} />
            </button>
            <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Add new dependant</h1>
          </div>
          <p className="text-black text-[15px] m-0 opacity-80 mt-2 ml-[42.6px]">Enter the dependant's information below</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Relationship */}
          <div className="px-4 pb-3">
            <div className="card-ios p-4">
              <Label htmlFor="relationship" className="text-black text-[15px] font-semibold mb-2 block">
                Relationship
              </Label>
              <div className="relative group">
                <select
                  id="relationship"
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                  className="w-full p-3 pr-12 border border-[#c7c7cc] rounded-[10px] text-[17px] bg-white text-black appearance-none focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent cursor-pointer"
                  style={{
                    color: relationship === '' ? '#8e8e93' : 'black'
                  }}
                >
                  <option value="" disabled>Select relationship</option>
                  <option value="spouse">Spouse or common-law partner</option>
                  <option value="child">Child</option>
                  <option value="parent">Parent or grandparent</option>
                  <option value="other">Other eligible dependant</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none chevron-button-ios group-hover:bg-[rgba(0,122,255,0.15)] group-active:bg-[rgba(0,122,255,0.25)] transition-colors">
                  <ChevronDown className="w-5 h-5 text-[#007AFF]" strokeWidth={3} />
                </div>
              </div>
              <div className="flex items-start gap-2 mt-3">
                <Info className="h-4 w-4 text-[#007AFF] flex-shrink-0 mt-0.5" strokeWidth={2} />
                <p className="text-black text-[13px] m-0 opacity-60">
                  Select the dependant's relationship to you
                </p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="section-header-ios">
            Personal Information
          </div>
          <div className="px-4 pb-3">
            <div className="card-ios p-4 space-y-4">
              {/* SIN */}
              <div>
                <Label htmlFor="sin" className="text-black text-[15px] font-semibold mb-2 block">
                  Social Insurance Number (SIN)
                </Label>
                <Input
                  id="sin"
                  data-field-name="sin"
                  type="text"
                  inputMode="numeric"
                  value={sin}
                  onChange={(e) => handleSinChange(e.target.value)}
                  onFocus={() => handleFieldFocus('sin')}
                  onBlur={handleFieldBlur}
                  placeholder="000-000-000"
                  className="w-full p-3 border border-[#c7c7cc] rounded-[8px] text-[17px] bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                />
                <div className="flex items-start gap-2 mt-2">
                  <Info className="h-4 w-4 text-[#007AFF] flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <p className="text-black text-[13px] m-0 opacity-60">
                    9-digit number issued by Service Canada
                  </p>
                </div>
              </div>

              {/* First Name */}
              <div>
                <Label htmlFor="firstName" className="text-black text-[15px] font-semibold mb-2 block">
                  First name
                </Label>
                <Input
                  id="firstName"
                  data-field-name="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  onFocus={() => handleFieldFocus('firstName')}
                  onBlur={handleFieldBlur}
                  placeholder="Enter first name"
                  className="w-full p-3 border border-[#c7c7cc] rounded-[8px] text-[17px] bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                />
              </div>

              {/* Middle Name(s) */}
              <div>
                <Label className="text-black text-[15px] font-semibold mb-2 block">
                  Middle name(s) <span className="text-[#8e8e93] font-normal">(Optional)</span>
                </Label>
                {middleNames.map((middleName, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <Input
                      data-field-name={`middleName${index}`}
                      type="text"
                      value={middleName}
                      onChange={(e) => updateMiddleName(index, e.target.value)}
                      onFocus={() => handleFieldFocus(`middleName${index}`)}
                      onBlur={handleFieldBlur}
                      placeholder="Enter middle name"
                      className="flex-1 p-3 border border-[#c7c7cc] rounded-[8px] text-[17px] bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                    />
                    {middleNames.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeMiddleName(index)}
                        className="flex items-center justify-center w-9 h-9 rounded-full bg-[#ff3b30] text-white border-0 cursor-pointer hover:opacity-80 active:opacity-60 transition-opacity flex-shrink-0"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addMiddleName}
                  className="flex items-center gap-2 text-[#007AFF] bg-transparent border-0 p-0 cursor-pointer hover:opacity-70 active:opacity-50 transition-opacity text-[15px] mt-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add another middle name</span>
                </button>
              </div>

              {/* Last Name */}
              <div>
                <Label htmlFor="lastName" className="text-black text-[15px] font-semibold mb-2 block">
                  Last name
                </Label>
                <Input
                  id="lastName"
                  data-field-name="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  onFocus={() => handleFieldFocus('lastName')}
                  onBlur={handleFieldBlur}
                  placeholder="Enter last name"
                  className="w-full p-3 border border-[#c7c7cc] rounded-[8px] text-[17px] bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <Label htmlFor="dob" className="text-black text-[15px] font-semibold mb-2 block">
                  Date of birth
                </Label>
                <div className="relative">
                  {/* Placeholder overlay that stays visible */}
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[17px] text-[#8e8e93] pointer-events-none select-none font-mono">
                    {dateOfBirth.length > 0 ? (
                      <>
                        {dateOfBirth.split('').map((char, idx) => (
                          <span key={idx} className="invisible">{char}</span>
                        ))}
                        {"YYYY-MM-DD".slice(dateOfBirth.length)}
                      </>
                    ) : (
                      "YYYY-MM-DD"
                    )}
                  </div>
                  <Input
                    id="dob"
                    data-field-name="dob"
                    type="text"
                    inputMode="numeric"
                    value={dateOfBirth}
                    onChange={(e) => handleDateChange(e.target.value)}
                    onFocus={() => handleFieldFocus('dob')}
                    onBlur={handleFieldBlur}
                    placeholder=""
                    className="w-full p-3 border border-[#c7c7cc] rounded-[8px] text-[17px] bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent font-mono"
                    maxLength={10}
                  />
                </div>
                <div className="flex items-start gap-2 mt-2">
                  <Info className="h-4 w-4 text-[#007AFF] flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <p className="text-black text-[13px] m-0 opacity-60">
                    Format: YYYY-MM-DD (e.g., 2015-06-15)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="px-4 pb-6">
            <button
              type="submit"
              disabled={!isValid}
              className={`w-full py-3.5 px-4 rounded-[10px] text-white text-[17px] font-semibold border-0 cursor-pointer transition-all ${
                isValid
                  ? 'bg-[#007AFF] hover:bg-[#0051D5] active:bg-[#004BB8]'
                  : 'bg-[#c7c7cc] cursor-not-allowed opacity-50'
              }`}
            >
              Add Dependant
            </button>
          </div>
        </form>
      </div>

      {/* iOS Keyboard */}
      {showKeyboard && activeField && (
        <>
          {(activeField === 'sin' || activeField === 'dob') ? (
            <IPhoneNumericKeyboard
              onKeyPress={(key) => {
                if (activeField === 'sin') {
                  if (key === 'backspace') {
                    handleSinChange(sin.slice(0, -1));
                  } else if (key !== 'done') {
                    handleSinChange(sin + key);
                  } else {
                    setShowKeyboard(false);
                    setActiveField(null);
                  }
                } else if (activeField === 'dob') {
                  if (key === 'backspace') {
                    handleDateChange(dateOfBirth.slice(0, -1));
                  } else if (key !== 'done') {
                    handleDateChange(dateOfBirth + key);
                  } else {
                    setShowKeyboard(false);
                    setActiveField(null);
                  }
                }
              }}
              onDone={() => {
                setShowKeyboard(false);
                setActiveField(null);
              }}
            />
          ) : (
            <IPhoneKeyboard
              onKeyPress={(key) => {
                if (activeField === 'firstName') {
                  if (key === 'backspace') {
                    setFirstName(firstName.slice(0, -1));
                  } else if (key !== 'done') {
                    setFirstName(firstName + key);
                  } else {
                    setShowKeyboard(false);
                    setActiveField(null);
                  }
                } else if (activeField === 'lastName') {
                  if (key === 'backspace') {
                    setLastName(lastName.slice(0, -1));
                  } else if (key !== 'done') {
                    setLastName(lastName + key);
                  } else {
                    setShowKeyboard(false);
                    setActiveField(null);
                  }
                } else if (activeField?.startsWith('middleName')) {
                  const index = parseInt(activeField.replace('middleName', ''));
                  const currentValue = middleNames[index] || '';
                  if (key === 'backspace') {
                    updateMiddleName(index, currentValue.slice(0, -1));
                  } else if (key !== 'done') {
                    updateMiddleName(index, currentValue + key);
                  } else {
                    setShowKeyboard(false);
                    setActiveField(null);
                  }
                }
              }}
              onDone={() => {
                setShowKeyboard(false);
                setActiveField(null);
              }}
            />
          )}
        </>
      )}
    </div>
  );
}