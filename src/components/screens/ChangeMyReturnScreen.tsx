import { ChevronLeft, AlertCircle, ChevronDown, Check } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';
import { useState, useRef, useEffect } from 'react';

interface ChangeMyReturnScreenProps {
  onBack: () => void;
  onRequestChange?: (year: string) => void;
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

interface TaxReturn {
  year: string;
  status: string;
  canChange: boolean;
  deadline?: string;
}

const taxReturns: TaxReturn[] = [
  {
    year: '2024',
    status: 'Assessed',
    canChange: true,
    deadline: 'April 30, 2025'
  },
  {
    year: '2023',
    status: 'Assessed',
    canChange: true,
    deadline: 'December 31, 2024'
  },
  {
    year: '2022',
    status: 'Assessed',
    canChange: false
  }
];

export function ChangeMyReturnScreen({
  onBack,
  onRequestChange,
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
}: ChangeMyReturnScreenProps) {
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Generate current year and previous 10 years
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 11 }, (_, i) => currentYear - i);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Change my return</h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 pt-4 pb-24">{/* Changed from py-6 pb-32 to pt-4 pb-24 */}

          {/* Information banner */}
          <div className="bg-white rounded-xl p-4 mb-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-gray-ios mb-2">
                You can request changes to your tax return for the current year and previous 10 years.
              </p>
              <p className="text-gray-ios">
                Processing time: 8 weeks for online submissions, 16 weeks for paper submissions.
              </p>
            </div>
          </div>

          {/* 1st area - Before you start */}
          <div className="mt-6 bg-white rounded-xl p-4">
            <h3 className="mb-3">Before you start</h3>
            <p className="text-gray-ios mb-3">
              Make sure you have:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li className="text-gray-ios">Your notice of assessment</li>
              <li className="text-gray-ios">Supporting documents for your changes</li>
              <li className="text-gray-ios">Updated tax slips or receipts</li>
            </ul>
          </div>

          {/* 2nd area - What you can change */}
          <div className="mt-6 bg-white rounded-xl p-4">
            <h3 className="mb-3">What you can change</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li className="text-gray-ios">Income information</li>
              <li className="text-gray-ios">Deductions and credits</li>
              <li className="text-gray-ios">RRSP contributions</li>
              <li className="text-gray-ios">Charitable donations</li>
              <li className="text-gray-ios">Medical expenses</li>
              <li className="text-gray-ios">Child care expenses</li>
            </ul>
          </div>

          {/* 3rd area - Select tax year */}
          <div className="mt-6 mb-3">
            <h2 className="px-4">Select tax year</h2>
          </div>

          {/* Year selector and Request Change button */}
          <div className="bg-white rounded-xl p-4 mb-6">
            <label htmlFor="year-select" className="block mb-2 text-gray-ios">
              Tax year
            </label>
            <div className="relative" ref={dropdownRef}>
              <button
                className="w-full px-4 py-3 bg-[#F2F2F7] border border-[#E5E5EA] rounded-lg text-black text-left appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent flex items-center justify-between"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className={selectedYear ? 'text-black' : 'text-[#8E8E93]'}>
                  {selectedYear ? selectedYear : 'Select a year'}
                </span>
                <ChevronDown className={`w-4 h-4 text-[#007AFF] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 w-full bg-white border border-[#E5E5EA] rounded-lg shadow-lg mt-1 max-h-[240px] overflow-y-auto">
                  {years.map((year) => (
                    <button
                      key={year}
                      className="w-full px-4 py-3 text-left hover:bg-[#F2F2F7] active:bg-[#E5E5EA] cursor-pointer border-b border-[#E5E5EA] last:border-b-0 flex items-center justify-between"
                      onClick={() => {
                        setSelectedYear(year.toString());
                        setIsDropdownOpen(false);
                      }}
                    >
                      <span className="text-black">{year}</span>
                      {selectedYear === year.toString() && (
                        <Check className="w-5 h-5 text-[#007AFF]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              disabled={!selectedYear}
              className={`w-full mt-4 py-3 px-4 rounded-lg transition-all ${
                selectedYear
                  ? 'bg-[#007AFF] text-white active:bg-[#0051D5] cursor-pointer'
                  : 'bg-[#E5E5EA] text-[#8E8E93] cursor-not-allowed'
              }`}
              onClick={() => onRequestChange && selectedYear && onRequestChange(selectedYear)}
            >
              Request change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}