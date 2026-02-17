import { ChevronLeft, AlertCircle } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';
import { useState, useRef } from 'react';
import { IPhoneNumericKeyboard } from '../IPhoneNumericKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';
import { AnimatePresence } from 'motion/react';

interface ChangeReturnFormScreenProps {
  year: string;
  onBack: () => void;
  onSubmit?: () => void;
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

export function ChangeReturnFormScreen({
  year,
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
}: ChangeReturnFormScreenProps) {
  // Mock existing data for the selected year
  const [formData, setFormData] = useState({
    incomeInformation: '72,500.00',
    deductionsAndCredits: '8,450.00',
    rrspContributions: '12,000.00',
    charitableDonations: '850.00',
    medicalExpenses: '2,100.00',
    childCareExpenses: '6,500.00'
  });

  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<keyof typeof formData | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Use keyboard scroll hook for automatic scrolling
  const { keyboardPadding } = useKeyboardScroll({
    isKeyboardVisible: showKeyboard,
    activeField: activeField || null,
    keyboardHeight: 290,
    scrollContainerRef
  });

  const inputRefs = {
    income: useRef<HTMLInputElement>(null),
    deductions: useRef<HTMLInputElement>(null),
    rrsp: useRef<HTMLInputElement>(null),
    donations: useRef<HTMLInputElement>(null),
    medical: useRef<HTMLInputElement>(null),
    childcare: useRef<HTMLInputElement>(null)
  };

  const handleInputFocus = (field: keyof typeof formData) => {
    setActiveField(field);
    setShowKeyboard(true);
  };

  const handleKeyPress = (key: string) => {
    if (!activeField) return;
    
    if (key === 'backspace') {
      setFormData(prev => ({
        ...prev,
        [activeField]: prev[activeField].slice(0, -1)
      }));
    } else if (key === '.' && !formData[activeField].includes('.')) {
      // Only allow one decimal point
      setFormData(prev => ({
        ...prev,
        [activeField]: prev[activeField] + key
      }));
    } else if (/^\d$/.test(key)) {
      setFormData(prev => ({
        ...prev,
        [activeField]: prev[activeField] + key
      }));
    }
  };

  const handleKeyboardDone = () => {
    setShowKeyboard(false);
    setActiveField(null);
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit();
    }
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Change {year} tax return</h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div 
        className="flex-1 overflow-y-auto" 
        ref={scrollContainerRef}
        style={{ paddingBottom: keyboardPadding }}
      >
        <div className="px-4 pt-4 pb-24">

          {/* Information banner */}
          <div className="bg-white rounded-xl p-4 mb-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-gray-ios">
                Review and update the information below. Current values are shown from your {year} tax return.
              </p>
            </div>
          </div>

          {/* Form fields */}
          <div className="space-y-4">
            {/* Income information */}
            <div className="bg-white rounded-xl p-4">
              <label htmlFor="incomeInformation" className="block mb-2 text-black">
                Income information
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-ios">$</span>
                <input
                  id="incomeInformation"
                  type="text"
                  value={formData.incomeInformation}
                  readOnly
                  className="w-full pl-8 pr-4 py-3 bg-[#F2F2F7] border border-[#E5E5EA] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                  inputMode="none"
                  ref={inputRefs.income}
                  onFocus={() => handleInputFocus('incomeInformation')}
                />
              </div>
              <p className="text-[13px] text-[#3C3C43] mt-2">
                Total employment and self-employment income
              </p>
            </div>

            {/* Deductions and credits */}
            <div className="bg-white rounded-xl p-4">
              <label htmlFor="deductionsAndCredits" className="block mb-2 text-black">
                Deductions and credits
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-ios">$</span>
                <input
                  id="deductionsAndCredits"
                  type="text"
                  value={formData.deductionsAndCredits}
                  readOnly
                  className="w-full pl-8 pr-4 py-3 bg-[#F2F2F7] border border-[#E5E5EA] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                  inputMode="none"
                  ref={inputRefs.deductions}
                  onFocus={() => handleInputFocus('deductionsAndCredits')}
                />
              </div>
              <p className="text-[13px] text-[#3C3C43] mt-2">
                Total deductions and non-refundable tax credits
              </p>
            </div>

            {/* RRSP contributions */}
            <div className="bg-white rounded-xl p-4">
              <label htmlFor="rrspContributions" className="block mb-2 text-black">
                RRSP contributions
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-ios">$</span>
                <input
                  id="rrspContributions"
                  type="text"
                  value={formData.rrspContributions}
                  readOnly
                  className="w-full pl-8 pr-4 py-3 bg-[#F2F2F7] border border-[#E5E5EA] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                  inputMode="none"
                  ref={inputRefs.rrsp}
                  onFocus={() => handleInputFocus('rrspContributions')}
                />
              </div>
              <p className="text-[13px] text-[#3C3C43] mt-2">
                Contributions made during the year
              </p>
            </div>

            {/* Charitable donations */}
            <div className="bg-white rounded-xl p-4">
              <label htmlFor="charitableDonations" className="block mb-2 text-black">
                Charitable donations
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-ios">$</span>
                <input
                  id="charitableDonations"
                  type="text"
                  value={formData.charitableDonations}
                  readOnly
                  className="w-full pl-8 pr-4 py-3 bg-[#F2F2F7] border border-[#E5E5EA] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                  inputMode="none"
                  ref={inputRefs.donations}
                  onFocus={() => handleInputFocus('charitableDonations')}
                />
              </div>
              <p className="text-[13px] text-[#3C3C43] mt-2">
                Total eligible charitable donations
              </p>
            </div>

            {/* Medical expenses */}
            <div className="bg-white rounded-xl p-4">
              <label htmlFor="medicalExpenses" className="block mb-2 text-black">
                Medical expenses
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-ios">$</span>
                <input
                  id="medicalExpenses"
                  type="text"
                  value={formData.medicalExpenses}
                  readOnly
                  className="w-full pl-8 pr-4 py-3 bg-[#F2F2F7] border border-[#E5E5EA] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                  inputMode="none"
                  ref={inputRefs.medical}
                  onFocus={() => handleInputFocus('medicalExpenses')}
                />
              </div>
              <p className="text-[13px] text-[#3C3C43] mt-2">
                Eligible medical expenses for you and your dependents
              </p>
            </div>

            {/* Child care expenses */}
            <div className="bg-white rounded-xl p-4">
              <label htmlFor="childCareExpenses" className="block mb-2 text-black">
                Child care expenses
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-ios">$</span>
                <input
                  id="childCareExpenses"
                  type="text"
                  value={formData.childCareExpenses}
                  readOnly
                  className="w-full pl-8 pr-4 py-3 bg-[#F2F2F7] border border-[#E5E5EA] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                  inputMode="none"
                  ref={inputRefs.childcare}
                  onFocus={() => handleInputFocus('childCareExpenses')}
                />
              </div>
              <p className="text-[13px] text-[#3C3C43] mt-2">
                Eligible child care expenses claimed
              </p>
            </div>

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              className="w-full mt-6 py-3 px-4 rounded-lg bg-[#007AFF] text-white active:bg-[#0051D5] cursor-pointer transition-all"
            >
              Submit changes
            </button>
          </div>

          {/* Supporting documents notice */}
          <div className="mt-6 bg-white rounded-xl p-4">
            <h3 className="mb-3">Supporting documents</h3>
            <p className="text-gray-ios mb-3">
              You may be asked to provide supporting documents for these changes, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li className="text-gray-ios">Updated T4 or T4A slips</li>
              <li className="text-gray-ios">RRSP contribution receipts</li>
              <li className="text-gray-ios">Donation receipts</li>
              <li className="text-gray-ios">Medical expense receipts</li>
              <li className="text-gray-ios">Child care expense receipts</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Numeric Keyboard */}
      <AnimatePresence>
        {showKeyboard && (
          <IPhoneNumericKeyboard
            onKeyPress={handleKeyPress}
            onDone={handleKeyboardDone}
          />
        )}
      </AnimatePresence>
    </div>
  );
}