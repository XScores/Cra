import { useState } from 'react';
import { User, Calendar, DollarSign, Heart, Baby, CreditCard, ChevronLeft, Send, Gift, Mail, Receipt, FileCheck, HelpCircle, LogOut, Plus, X } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { AnimatePresence } from 'motion/react';
import { IPhoneKeyboard } from '../IPhoneKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';
import { toast } from 'sonner';
import { formatSIN, unformatSIN } from '../../utils/formatSIN';

interface SpouseDetailsScreenProps {
  onBack: () => void;
  onNavigateHome?: () => void;
  onViewMail?: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onUpdateSpouse?: () => void;
  hasUnreadMail?: boolean;
  onViewAllBenefits?: () => void;
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
  onBecomeRepresentativeAsRep?: () => void;
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

export function SpouseDetailsScreen({ 
  onBack, 
  onNavigateHome,
  onViewMail,
  onFileTaxes,
  onMakePayment,
  onBenefitsAndCredits,
  onRegisteredPlans,
  onHelp,
  onSignOut,
  onTaxSlips,
  onProofOfIncome,
  onUpdateSpouse,
  hasUnreadMail = false,
  onViewAllBenefits,
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
  onBecomeRepresentativeAsRep,
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
}: SpouseDetailsScreenProps) {
  // Form state
  const [firstName, setFirstName] = useState('Michelle');
  const [middleNames, setMiddleNames] = useState<string[]>(['Elizabeth']);
  const [lastName, setLastName] = useState('Rath');
  const [sin, setSin] = useState('***-***-789');
  const [dateOfBirth, setDateOfBirth] = useState('June 12, 1988');
  const [maritalStatus, setMaritalStatus] = useState('Married');
  const [dateOfMarriage, setDateOfMarriage] = useState('August 15, 2014');
  const [netIncome, setNetIncome] = useState('$58,750');
  const [ccbEligibility, setCcbEligibility] = useState('Primary caregiver (shared custody 50/50)');
  
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
      } else if (activeField?.startsWith('middleName')) {
        const index = parseInt(activeField.split('-')[1]);
        updateMiddleName(index, middleNames[index].slice(0, -1));
      } else if (activeField === 'lastName') {
        setLastName(prev => prev.slice(0, -1));
      } else if (activeField === 'sin') {
        setSin(prev => prev.slice(0, -1));
      } else if (activeField === 'dateOfBirth') {
        setDateOfBirth(prev => prev.slice(0, -1));
      } else if (activeField === 'maritalStatus') {
        setMaritalStatus(prev => prev.slice(0, -1));
      } else if (activeField === 'dateOfMarriage') {
        setDateOfMarriage(prev => prev.slice(0, -1));
      } else if (activeField === 'netIncome') {
        setNetIncome(prev => prev.slice(0, -1));
      } else if (activeField === 'ccbEligibility') {
        setCcbEligibility(prev => prev.slice(0, -1));
      }
    } else {
      if (activeField === 'firstName') {
        setFirstName(prev => prev + key);
      } else if (activeField?.startsWith('middleName')) {
        const index = parseInt(activeField.split('-')[1]);
        updateMiddleName(index, middleNames[index] + key);
      } else if (activeField === 'lastName') {
        setLastName(prev => prev + key);
      } else if (activeField === 'sin' && sin.length < 9 && /\d/.test(key)) {
        setSin(prev => prev + key);
      } else if (activeField === 'dateOfBirth') {
        setDateOfBirth(prev => prev + key);
      } else if (activeField === 'maritalStatus') {
        setMaritalStatus(prev => prev + key);
      } else if (activeField === 'dateOfMarriage') {
        setDateOfMarriage(prev => prev + key);
      } else if (activeField === 'netIncome') {
        setNetIncome(prev => prev + key);
      } else if (activeField === 'ccbEligibility') {
        setCcbEligibility(prev => prev + key);
      }
    }
  };

  const handleKeyboardDone = () => {
    setShowKeyboard(false);
    setActiveField(null);
  };

  const handleSave = () => {
    toast.success('Spouse information has been updated successfully.');
    onBack();
  };

  const canSave = firstName.length > 0 && lastName.length > 0 && sin.length > 0 && dateOfBirth.length > 0;

  // Get the appropriate label for the date field based on marital status
  const getDateFieldLabel = () => {
    switch (maritalStatus) {
      case 'Married':
        return 'Date of marriage';
      case 'Common-law':
        return 'Date relationship began';
      case 'Separated':
        return 'Date of separation';
      case 'Divorced':
        return 'Date of divorce';
      case 'Widowed':
        return 'Date of death of spouse';
      default:
        return 'Date of marriage';
    }
  };

  const handleMaritalStatusChange = (newStatus: string) => {
    setMaritalStatus(newStatus);
    // Clear the date field when status changes so user knows to update it
    setDateOfMarriage('');
  };

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
          onHomeBuyersPlan={onHomeBuyersPlan}
          onFHSAEligibility={onFHSAEligibility}
          onLifelongLearningPlan={onLifelongLearningPlan}
          onCustomize={onCustomize}
          onUncashedCheques={onUncashedCheques}
          onBecomeRepresentative={onBecomeRepresentative}
          onBecomeRepresentativeAsRep={onBecomeRepresentativeAsRep}
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Spouse details</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Update your spouse's information for tax and benefit purposes</p>
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

            <div className="mb-4">
              <Label htmlFor="middleNames" className="text-black text-[15px] block mb-2">
                <User className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                Middle name(s) <span className="text-[#8e8e93] font-normal">(optional)</span>
              </Label>
              <div className="flex flex-col gap-2">
                {middleNames.map((middleName, index) => (
                  <div key={index} className="relative">
                    <Input
                      id={`middleName${index}`}
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
                ))}
              </div>
            </div>

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
              <Label htmlFor="sin" className="text-black text-[15px] block mb-2">
                <CreditCard className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                Social Insurance Number
              </Label>
              <Input
                id="sin"
                type="text"
                value={formatSIN(sin)}
                onChange={(e) => setSin(unformatSIN(e.target.value))}
                onFocus={() => { setShowKeyboard(true); setActiveField('sin'); }}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              />
            </div>

            <div>
              <Label htmlFor="dateOfBirth" className="text-black text-[15px] block mb-2">
                <Calendar className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                Date of birth
              </Label>
              <Input
                id="dateOfBirth"
                type="text"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                onFocus={() => { setShowKeyboard(true); setActiveField('dateOfBirth'); }}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              />
            </div>
          </div>
        </div>

        {/* Marital Status */}
        <div className="section-header-ios">
          Marital status
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios p-4">
            <div className="mb-4">
              <Label htmlFor="maritalStatus" className="text-black text-[15px] block mb-2">
                <Heart className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                Status
              </Label>
              <select
                id="maritalStatus"
                value={maritalStatus}
                onChange={(e) => handleMaritalStatusChange(e.target.value)}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              >
                <option value="Married">Married</option>
                <option value="Common-law">Common-law</option>
                <option value="Separated">Separated</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>
            </div>

            <div>
              <Label htmlFor="dateOfMarriage" className="text-black text-[15px] block mb-2">
                <Calendar className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                {getDateFieldLabel()}
              </Label>
              <Input
                id="dateOfMarriage"
                type="text"
                value={dateOfMarriage}
                onChange={(e) => setDateOfMarriage(e.target.value)}
                onFocus={() => { setShowKeyboard(true); setActiveField('dateOfMarriage'); }}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              />
            </div>
          </div>
        </div>

        {/* Tax and Benefit Information */}
        <div className="section-header-ios">
          Tax and benefit information
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios p-4">
            <div className="mb-4">
              <Label htmlFor="netIncome" className="text-black text-[15px] block mb-2">
                <DollarSign className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                2024 Net income (Line 23600)
              </Label>
              <Input
                id="netIncome"
                type="text"
                value={netIncome}
                onChange={(e) => setNetIncome(e.target.value)}
                onFocus={() => { setShowKeyboard(true); setActiveField('netIncome'); }}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              />
            </div>

            <div className="mb-4">
              <Label className="text-black text-[15px] block mb-2">
                <DollarSign className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                Spousal amount credit
              </Label>
              <div className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-[#f2f2f7] text-[#8e8e93] text-[17px]">
                Not applicable (income exceeds threshold)
              </div>
              <p className="text-black text-[13px] mt-1 opacity-60">Automatically calculated based on net income</p>
            </div>

            <div className="mb-4">
              <Label htmlFor="ccbEligibility" className="text-black text-[15px] block mb-2">
                <Baby className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                Canada Child Benefit (CCB) eligibility
              </Label>
              <select
                id="ccbEligibility"
                value={ccbEligibility}
                onChange={(e) => setCcbEligibility(e.target.value)}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              >
                <option value="Primary caregiver (shared custody 50/50)">Primary caregiver (shared custody 50/50)</option>
                <option value="Primary caregiver (full custody)">Primary caregiver (full custody)</option>
                <option value="Secondary caregiver">Secondary caregiver</option>
                <option value="Not applicable">Not applicable</option>
              </select>
            </div>

            <div>
              <Label className="text-black text-[15px] block mb-2">
                <DollarSign className="h-4 w-4 text-[#007AFF] inline-block mr-2" />
                GST/HST credit status
              </Label>
              <div className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-[#f2f2f7] text-[#8e8e93] text-[17px]">
                Eligible (based on family net income)
              </div>
              <p className="text-black text-[13px] mt-1 opacity-60">Automatically calculated based on family net income</p>
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
                  Your spouse's income affects your family's eligibility for certain tax credits and benefits including the Canada Child Benefit, GST/HST credit, and various provincial benefits. Make sure to update marital status changes within 1 month to ensure accurate benefit payments.
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