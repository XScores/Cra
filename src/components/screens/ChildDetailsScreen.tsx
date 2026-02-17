import { useState } from 'react';
import { User, Calendar, CreditCard, Baby, GraduationCap, DollarSign, Heart, AlertCircle, ChevronLeft, Send, Gift, Mail, Receipt, FileCheck, HelpCircle, LogOut, Plus, X } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { AnimatePresence } from 'motion/react';
import { IPhoneKeyboard } from '../IPhoneKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';
import { toast } from 'sonner';

interface ChildDetailsScreenProps {
  onBack: () => void;
  onNavigateHome?: () => void;
  childName: string;
  childFirstName: string;
  sin: string;
  age: number;
  dateOfBirth: string;
  onViewMail?: () => void;
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
  onBecomeRepresentative?: () => void;
  onBecomeRepresentativeAsRep?: () => void;
  onHomeBuyersPlan?: () => void;
  onFHSAEligibility?: () => void;
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

export function ChildDetailsScreen({ 
  onBack, 
  onNavigateHome, 
  childName, 
  childFirstName, 
  sin, 
  age, 
  dateOfBirth,
  onViewMail,
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
  onBecomeRepresentative,
  onBecomeRepresentativeAsRep,
  onHomeBuyersPlan,
  onFHSAEligibility,
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
}: ChildDetailsScreenProps) {
  // Parse childName into first, middle, and last names
  const nameParts = childName.split(' ');
  const initialFirstName = nameParts[0] || childFirstName;
  const initialLastName = nameParts[nameParts.length - 1] || 'Rath';
  const initialMiddleNames = nameParts.length > 2 ? nameParts.slice(1, -1) : nameParts.length === 2 ? [] : [''];
  
  // Form state
  const [firstName, setFirstName] = useState(initialFirstName);
  const [middleNames, setMiddleNames] = useState<string[]>(initialMiddleNames.length > 0 ? initialMiddleNames : ['']);
  const [lastName, setLastName] = useState(initialLastName);
  const [childSin, setChildSin] = useState(sin);
  const [childAge, setChildAge] = useState(age.toString());
  const [childDob, setChildDob] = useState(dateOfBirth);
  const [grade, setGrade] = useState(age === 8 ? 'Grade 3' : 'Kindergarten');
  const [school, setSchool] = useState('Elmwood Public School');
  const [custodyArrangement, setCustodyArrangement] = useState('Primary residence with both parents');
  const [dtcStatus, setDtcStatus] = useState('Not registered');
  const [childCareExpenses, setChildCareExpenses] = useState(age === 8 ? '$5,600' : '$6,200');
  
  // Keyboard state
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  // Middle names management
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

  // Use keyboard scroll hook
  useKeyboardScroll({ 
    isKeyboardVisible: showKeyboard, 
    activeField: activeField || 'input',
    keyboardHeight: 260
  });

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      if (activeField === 'firstName') {
        setFirstName(prev => prev.slice(0, -1));
      } else if (activeField === 'middleNames') {
        const index = parseInt(activeField.split('-')[1]);
        updateMiddleName(index, middleNames[index].slice(0, -1));
      } else if (activeField === 'lastName') {
        setLastName(prev => prev.slice(0, -1));
      } else if (activeField === 'childSin') {
        setChildSin(prev => prev.slice(0, -1));
      } else if (activeField === 'childAge') {
        setChildAge(prev => prev.slice(0, -1));
      } else if (activeField === 'childDob') {
        setChildDob(prev => prev.slice(0, -1));
      } else if (activeField === 'grade') {
        setGrade(prev => prev.slice(0, -1));
      } else if (activeField === 'school') {
        setSchool(prev => prev.slice(0, -1));
      } else if (activeField === 'childCareExpenses') {
        setChildCareExpenses(prev => prev.slice(0, -1));
      }
    } else {
      if (activeField === 'firstName') {
        setFirstName(prev => prev + key);
      } else if (activeField === 'middleNames') {
        const index = parseInt(activeField.split('-')[1]);
        updateMiddleName(index, middleNames[index] + key);
      } else if (activeField === 'lastName') {
        setLastName(prev => prev + key);
      } else if (activeField === 'childSin') {
        setChildSin(prev => prev + key);
      } else if (activeField === 'childAge') {
        setChildAge(prev => prev + key);
      } else if (activeField === 'childDob') {
        setChildDob(prev => prev + key);
      } else if (activeField === 'grade') {
        setGrade(prev => prev + key);
      } else if (activeField === 'school') {
        setSchool(prev => prev + key);
      } else if (activeField === 'childCareExpenses') {
        setChildCareExpenses(prev => prev + key);
      }
    }
  };

  const handleKeyboardDone = () => {
    setShowKeyboard(false);
    setActiveField(null);
  };

  const handleSave = () => {
    toast.success(`${firstName}'s information has been updated successfully.`);
    onBack();
  };

  const canSave = firstName.length > 0 && lastName.length > 0 && childSin.length > 0 && childDob.length > 0;

  // Calculate grade based on age
  const getGradeInfo = (age: number) => {
    if (age === 8) return { grade: 'Grade 3', school: 'Elmwood Public School' };
    if (age === 5) return { grade: 'Kindergarten', school: 'Elmwood Public School' };
    return { grade: 'N/A', school: 'N/A' };
  };

  const numericAge = parseInt(childAge) || age;
  const gradeInfo = getGradeInfo(numericAge);

  // RESP contribution room based on age
  const getRESPInfo = (age: number) => {
    if (age === 8) {
      return {
        lifetimeLimit: '$50,000',
        contributedToDate: '$22,400',
        availableRoom: '$27,600',
        cesgReceived: '$4,480',
        cesgEligibility: 'Eligible for $500 annual CESG (20% on first $2,500)'
      };
    } else {
      return {
        lifetimeLimit: '$50,000',
        contributedToDate: '$14,000',
        availableRoom: '$36,000',
        cesgReceived: '$2,800',
        cesgEligibility: 'Eligible for $500 annual CESG (20% on first $2,500)'
      };
    }
  };

  const respInfo = getRESPInfo(numericAge);

  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col relative">
      {/* Header - Fixed */}
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
          onBecomeRepresentative={onBecomeRepresentative}
          onBecomeRepresentativeAsRep={onBecomeRepresentativeAsRep}
          onHomeBuyersPlan={onHomeBuyersPlan}
          onFHSAEligibility={onFHSAEligibility}
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
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7] sticky top-[47px] z-10">
        <div className="flex items-center gap-3 mb-1">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Child details - {firstName}</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Update {firstName}'s information for tax credits and benefits</p>
      </div>

      {/* Scrollable Content Area */}
      <div 
        className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7]"
        style={{ paddingBottom: showKeyboard ? '260px' : '80px' }}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (!target.closest('input') && !target.closest('select') && !target.closest('button[type="button"]')) {
            setShowKeyboard(false);
          }
        }}
      >
        {/* Personal Information */}
        <div className="section-header-ios">
          Personal information
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios p-4">
            <div className="mb-4">
              <Label htmlFor="firstName" className="text-black text-[15px] block mb-2">
                <User className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                First name
              </Label>
              <Input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onFocus={() => { setShowKeyboard(true); setActiveField('firstName'); }}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              />
            </div>

            {middleNames.map((middleName, index) => (
              <div key={index} className="mb-4">
                <Label htmlFor={`middleNames-${index}`} className="text-black text-[15px] block mb-2">
                  <User className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                  Middle name(s) {middleNames.length > 1 ? `${index + 1}` : ''}
                  <span className="text-[#8e8e93] font-normal ml-1">(optional)</span>
                </Label>
                <div className="relative">
                  <Input
                    id={`middleNames-${index}`}
                    type="text"
                    value={middleName}
                    onChange={(e) => updateMiddleName(index, e.target.value)}
                    onFocus={() => { setShowKeyboard(true); setActiveField(`middleName-${index}`); }}
                    className={`w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] ${middleNames.length > 1 ? 'pr-20' : 'pr-12'}`}
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                    {middleNames.length > 1 && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          removeMiddleName(index);
                        }}
                        className="p-1.5 text-[#ff3b30] hover:opacity-70 transition-opacity bg-transparent border-0"
                      >
                        <X size={20} />
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        addMiddleName();
                      }}
                      className="p-1.5 text-[#007AFF] hover:opacity-70 transition-opacity bg-transparent border-0"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="mb-4">
              <Label htmlFor="lastName" className="text-black text-[15px] block mb-2">
                <User className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                Last name
              </Label>
              <Input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onFocus={() => { setShowKeyboard(true); setActiveField('lastName'); }}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="childSin" className="text-black text-[15px] block mb-2">
                <CreditCard className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                Social Insurance Number
              </Label>
              <Input
                id="childSin"
                type="text"
                value={childSin}
                onChange={(e) => setChildSin(e.target.value)}
                onFocus={() => { setShowKeyboard(true); setActiveField('childSin'); }}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="childDob" className="text-black text-[15px] block mb-2">
                <Calendar className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                Date of birth
              </Label>
              <Input
                id="childDob"
                type="text"
                value={childDob}
                onChange={(e) => setChildDob(e.target.value)}
                onFocus={() => { setShowKeyboard(true); setActiveField('childDob'); }}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="childAge" className="text-black text-[15px] block mb-2">
                <Baby className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                Age
              </Label>
              <Input
                id="childAge"
                type="text"
                value={childAge}
                onChange={(e) => setChildAge(e.target.value)}
                onFocus={() => { setShowKeyboard(true); setActiveField('childAge'); }}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="grade" className="text-black text-[15px] block mb-2">
                <GraduationCap className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                Grade
              </Label>
              <Input
                id="grade"
                type="text"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                onFocus={() => { setShowKeyboard(true); setActiveField('grade'); }}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              />
            </div>

            <div>
              <Label htmlFor="school" className="text-black text-[15px] block mb-2">
                <GraduationCap className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                School
              </Label>
              <Input
                id="school"
                type="text"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                onFocus={() => { setShowKeyboard(true); setActiveField('school'); }}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              />
            </div>
          </div>
        </div>

        {/* Canada Child Benefit (CCB) */}
        <div className="section-header-ios">
          Canada Child Benefit (CCB)
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios p-4">
            <div className="mb-4">
              <Label className="text-black text-[15px] block mb-2">
                <DollarSign className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                CCB eligibility
              </Label>
              <div className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-[#f2f2f7] text-[#8e8e93] text-[17px]">
                {numericAge < 18 ? 'Eligible (under 18 years)' : 'Not eligible (18 or older)'}
              </div>
              <p className="text-black text-[13px] mt-1 opacity-60">Automatically calculated based on age</p>
            </div>

            <div className="mb-4">
              <Label className="text-black text-[15px] block mb-2">
                <DollarSign className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                Monthly benefit (2024-2025)
              </Label>
              <div className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-[#f2f2f7] text-[#8e8e93] text-[17px]">
                $483.33 (based on family net income)
              </div>
              <p className="text-black text-[13px] mt-1 opacity-60">Automatically calculated based on family net income</p>
            </div>

            <div className="mb-4">
              <Label htmlFor="custodyArrangement" className="text-black text-[15px] block mb-2">
                <Heart className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                Custody arrangement
              </Label>
              <select
                id="custodyArrangement"
                value={custodyArrangement}
                onChange={(e) => setCustodyArrangement(e.target.value)}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              >
                <option value="Primary residence with both parents">Primary residence with both parents</option>
                <option value="Shared custody (50/50)">Shared custody (50/50)</option>
                <option value="Primary residence with one parent">Primary residence with one parent</option>
                <option value="Other arrangement">Other arrangement</option>
              </select>
            </div>

            <div>
              <Label htmlFor="dtcStatus" className="text-black text-[15px] block mb-2">
                <AlertCircle className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                Disability Tax Credit (DTC)
              </Label>
              <select
                id="dtcStatus"
                value={dtcStatus}
                onChange={(e) => setDtcStatus(e.target.value)}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              >
                <option value="Not registered">Not registered</option>
                <option value="Registered and approved">Registered and approved</option>
                <option value="Application pending">Application pending</option>
              </select>
            </div>
          </div>
        </div>

        {/* RESP Information */}
        <div className="section-header-ios">
          Registered Education Savings Plan (RESP)
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios p-4">
            <div className="mb-4">
              <Label className="text-black text-[15px] block mb-2">
                <GraduationCap className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                RESP status
              </Label>
              <div className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-[#f2f2f7] text-[#8e8e93] text-[17px]">
                Active beneficiary
              </div>
            </div>

            <div className="mb-4">
              <Label className="text-black text-[15px] block mb-2">
                <DollarSign className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                Lifetime contribution limit
              </Label>
              <div className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-[#f2f2f7] text-[#8e8e93] text-[17px]">
                {respInfo.lifetimeLimit}
              </div>
            </div>

            <div className="mb-4">
              <Label className="text-black text-[15px] block mb-2">
                <DollarSign className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                Contributions to date
              </Label>
              <div className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-[#f2f2f7] text-[#8e8e93] text-[17px]">
                {respInfo.contributedToDate}
              </div>
            </div>

            <div className="mb-4">
              <Label className="text-black text-[15px] block mb-2">
                <DollarSign className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                Available contribution room
              </Label>
              <div className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-[#f2f2f7] text-[#8e8e93] text-[17px]">
                {respInfo.availableRoom}
              </div>
            </div>

            <div className="mb-4">
              <Label className="text-black text-[15px] block mb-2">
                <DollarSign className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                CESG received to date
              </Label>
              <div className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-[#f2f2f7] text-[#8e8e93] text-[17px]">
                {respInfo.cesgReceived} (lifetime limit: $7,200)
              </div>
            </div>

            <div>
              <Label className="text-black text-[15px] block mb-2">
                <DollarSign className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                CESG eligibility (2025)
              </Label>
              <div className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-[#f2f2f7] text-[#8e8e93] text-[17px]">
                {respInfo.cesgEligibility}
              </div>
            </div>
          </div>
        </div>

        {/* Child Care Expenses */}
        <div className="section-header-ios">
          Child care expenses deduction
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios p-4">
            <div className="mb-4">
              <Label htmlFor="childCareExpenses" className="text-black text-[15px] block mb-2">
                <DollarSign className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                2024 eligible expenses
              </Label>
              <Input
                id="childCareExpenses"
                type="text"
                value={childCareExpenses}
                onChange={(e) => setChildCareExpenses(e.target.value)}
                onFocus={() => { setShowKeyboard(true); setActiveField('childCareExpenses'); }}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              />
              <p className="text-black text-[13px] mt-1 opacity-60">After-school care and summer programs</p>
            </div>

            <div>
              <Label className="text-black text-[15px] block mb-2">
                <DollarSign className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                Maximum deduction limit
              </Label>
              <div className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-[#f2f2f7] text-[#8e8e93] text-[17px]">
                {numericAge < 7 ? '$8,000 per child (under 7)' : '$5,000 per child (7-16)'}
              </div>
              <p className="text-black text-[13px] mt-1 opacity-60">Automatically calculated based on age</p>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="px-4 pb-3">
          <div className="bg-[#fff3cd] border-l-4 border-[#ffc107] p-4 rounded-[8px]">
            <div className="flex items-start gap-2">
              <div className="flex-1">
                <div className="text-black mb-2">Note:</div>
                <div className="text-black text-[15px] leading-[20px] opacity-80">
                  You must notify the CRA within 1 month of any changes to your child's custody arrangement, living situation, or if they turn 18. These changes may affect your Canada Child Benefit and other related benefits.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-4 pb-3 flex gap-3">
          <button
            onClick={onBack}
            className="flex-1 bg-white text-[#007AFF] px-6 py-3 rounded-[10px] border border-[#007AFF] hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-[17px] text-center"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            disabled={!canSave}
            className={`flex-1 px-6 py-3 rounded-[10px] transition-opacity text-[17px] text-center ${
              canSave 
                ? 'bg-[#007AFF] text-white hover:opacity-90 active:opacity-80 cursor-pointer' 
                : 'bg-[#c7c7cc] text-white cursor-not-allowed opacity-50'
            }`}
          >
            Save changes
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showKeyboard && <IPhoneKeyboard key="keyboard" onKeyPress={handleKeyPress} onDone={handleKeyboardDone} />}
      </AnimatePresence>
    </div>
  );
}