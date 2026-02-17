import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, ChevronRight, ChevronDown, User, UserPlus, Settings, Send, CheckCircle, Info, Calendar as CalendarIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar } from '../ui/calendar';

interface RepresentativeScreenProps {
  onBack: () => void;
  onViewMail?: () => void;
  onNavigateHome: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
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
}

export function RepresentativeScreen({ 
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
  onBecomeRepresentativeAsRep
}: RepresentativeScreenProps) {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  
  // Form state
  const [repId, setRepId] = useState('');
  const [groupId, setGroupId] = useState('');
  const [businessNumber, setBusinessNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [authLevel, setAuthLevel] = useState<'full' | 'limited'>('full');
  const [taxYears, setTaxYears] = useState<string[]>([]);
  const [dateOption, setDateOption] = useState<'open-ended' | 'specific'>('open-ended');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  
  // Calendar state
  const [showStartDateCalendar, setShowStartDateCalendar] = useState(false);
  const [showEndDateCalendar, setShowEndDateCalendar] = useState(false);
  const [tempStartDate, setTempStartDate] = useState<Date | undefined>(undefined);
  const [tempEndDate, setTempEndDate] = useState<Date | undefined>(undefined);
  const [startCalendarMonth, setStartCalendarMonth] = useState<Date>(new Date());
  const [endCalendarMonth, setEndCalendarMonth] = useState<Date>(new Date());
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  
  useEffect(() => {
    setPortalContainer(document.getElementById('iphone-screen'));
  }, []);

  const toggleStep = (step: number) => {
    setExpandedStep(expandedStep === step ? null : step);
  };

  const currentYear = new Date().getFullYear();
  const availableYears = Array.from({ length: 10 }, (_, i) => (currentYear - i).toString());

  const toggleTaxYear = (year: string) => {
    setTaxYears(prev => 
      prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]
    );
  };
  
  // Calendar handlers for Start Date
  const handleStartDateClick = () => {
    setTempStartDate(startDate ? new Date(startDate) : undefined);
    setShowStartDateCalendar(true);
  };
  
  const handleStartDateSelect = (date: Date | undefined) => {
    setTempStartDate(date);
  };
  
  const handleStartDateConfirm = () => {
    if (tempStartDate) {
      setStartDate(tempStartDate.toISOString().split('T')[0]);
    }
    setShowStartDateCalendar(false);
  };
  
  const handleStartDateCancel = () => {
    setShowStartDateCalendar(false);
    setTempStartDate(undefined);
  };
  
  // Calendar handlers for End Date
  const handleEndDateClick = () => {
    setTempEndDate(endDate ? new Date(endDate) : undefined);
    setShowEndDateCalendar(true);
  };
  
  const handleEndDateSelect = (date: Date | undefined) => {
    setTempEndDate(date);
  };
  
  const handleEndDateConfirm = () => {
    if (tempEndDate) {
      setEndDate(tempEndDate.toISOString().split('T')[0]);
    }
    setShowEndDateCalendar(false);
  };
  
  const handleEndDateCancel = () => {
    setShowEndDateCalendar(false);
    setTempEndDate(undefined);
  };
  
  const formatDisplayDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const handleSubmit = () => {
    // Handle form submission
    alert('Representative authorization submitted successfully!');
    onBack();
  };

  const handleCancel = () => {
    if (confirm('Are you sure you want to cancel? All entered information will be lost.')) {
      onBack();
    }
  };

  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      <HeaderMaster 
        title="My Account"
        largeTitle={true}
        showSearch={true}
        showMenu={true}
        onNavigateHome={onNavigateHome}
        onLogoClick={onNavigateHome}
        onSearchClick={onNavigateHome}
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
      />

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-center gap-3 mb-1">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0 self-start"
            style={{ marginTop: '6px' }}
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[34px]">Authorize a representative</h1>
        </div>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        <div className="px-4 py-4">
          {/* Introduction */}
          <div className="mb-4 card-ios overflow-hidden border-l-4 border-[#007AFF] p-4">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h2 className="text-black mb-2 font-semibold text-[17px]">About representative authorization</h2>
                <p className="text-[#8e8e93] text-[15px] m-0 mb-3">
                  You can authorize someone to represent you when dealing with the CRA. This allows them to access your tax information and communicate with the CRA on your behalf.
                </p>
                <p className="text-[#8e8e93] text-[15px] m-0">
                  Follow these steps to add a representative to your account.
                </p>
              </div>
            </div>
          </div>

          {/* Step 1 */}
          <div className="mb-3 card-ios overflow-hidden">
            <button
              onClick={() => toggleStep(1)}
              className="w-full p-4 border-0 cursor-pointer text-left bg-white active:bg-[#f2f2f7] transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#007AFF] text-white flex-shrink-0 mt-0.5">
                  <span className="font-semibold text-[15px]">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-black font-semibold text-[17px] mb-1">Get your representative's information</h3>
                  <p className="text-[#8e8e93] text-[15px] m-0">
                    Collect the required details from your representative
                  </p>
                </div>
                <ChevronDown className={`h-5 w-5 text-[#8e8e93] flex-shrink-0 mt-1 transition-transform ${expandedStep === 1 ? 'rotate-180' : ''}`} />
              </div>
            </button>
            
            {expandedStep === 1 && (
              <div className="px-4 pb-4 bg-white border-t border-[rgba(60,60,67,0.174)]">
                <div className="pt-3">
                  <p className="text-[#8e8e93] text-[15px] mb-3">
                    Before you begin, you'll need the following information from your representative:
                  </p>
                  <ul className="space-y-2 text-[15px] mb-0">
                    <li className="flex items-start gap-2">
                      <span className="text-[#007AFF] flex-shrink-0 mt-1">•</span>
                      <span className="text-black">
                        <strong>RepID number</strong> (8 characters) - This is their representative identifier
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#007AFF] flex-shrink-0 mt-1">•</span>
                      <span className="text-black">
                        <strong>GroupID</strong> (optional) - If they're part of a group or firm
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#007AFF] flex-shrink-0 mt-1">•</span>
                      <span className="text-black">
                        <strong>Business number</strong> - Their business registration number
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#007AFF] flex-shrink-0 mt-1">•</span>
                      <span className="text-black">
                        <strong>Full name</strong> - Legal name of the representative or firm
                      </span>
                    </li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-[rgba(60,60,67,0.174)] text-[#8e8e93] text-[13px]">
                    Your representative should provide all required information to ensure proper authorization.
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Step 2 - Add the representative */}
          <div className="mb-3 card-ios overflow-hidden">
            <button
              onClick={() => toggleStep(2)}
              className="w-full p-4 border-0 cursor-pointer text-left bg-white active:bg-[#f2f2f7] transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#007AFF] text-white flex-shrink-0 mt-0.5">
                  <span className="font-semibold text-[15px]">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-black font-semibold text-[17px] mb-1">Add the representative</h3>
                  <p className="text-[#8e8e93] text-[15px] m-0">
                    Enter your representative's information
                  </p>
                </div>
                <ChevronDown className={`h-5 w-5 text-[#8e8e93] flex-shrink-0 mt-1 transition-transform ${expandedStep === 2 ? 'rotate-180' : ''}`} />
              </div>
            </button>
            
            {expandedStep === 2 && (
              <div className="px-4 pb-4 bg-white border-t border-[rgba(60,60,67,0.174)]">
                <div className="pt-4 space-y-4">
                  {/* RepID Number */}
                  <div>
                    <label className="block text-black text-[15px] mb-2">
                      RepID number <span className="text-[#FF3B30]">*</span>
                    </label>
                    <input
                      type="text"
                      value={repId}
                      onChange={(e) => setRepId(e.target.value)}
                      placeholder="8 characters"
                      maxLength={8}
                      className="w-full px-4 py-3 bg-white border border-[rgba(60,60,67,0.174)] rounded-lg text-black text-[17px] placeholder:text-[#8e8e93] focus:outline-none focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
                    />
                    <p className="text-[#8e8e93] text-[13px] mt-1">Representative identifier provided by your representative</p>
                  </div>

                  {/* GroupID */}
                  <div>
                    <label className="block text-black text-[15px] mb-2">
                      GroupID <span className="text-[#8e8e93]">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={groupId}
                      onChange={(e) => setGroupId(e.target.value)}
                      placeholder="Enter GroupID if applicable"
                      className="w-full px-4 py-3 bg-white border border-[rgba(60,60,67,0.174)] rounded-lg text-black text-[17px] placeholder:text-[#8e8e93] focus:outline-none focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
                    />
                    <p className="text-[#8e8e93] text-[13px] mt-1">If they're part of a group or firm</p>
                  </div>

                  {/* Business Number */}
                  <div>
                    <label className="block text-black text-[15px] mb-2">
                      Business number <span className="text-[#FF3B30]">*</span>
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={businessNumber}
                      onChange={(e) => setBusinessNumber(e.target.value)}
                      placeholder="9 digits"
                      maxLength={9}
                      className="w-full px-4 py-3 bg-white border border-[rgba(60,60,67,0.174)] rounded-lg text-black text-[17px] placeholder:text-[#8e8e93] focus:outline-none focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
                    />
                    <p className="text-[#8e8e93] text-[13px] mt-1">Business registration number</p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-black text-[15px] mb-2">
                      Full name <span className="text-[#FF3B30]">*</span>
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Legal name of representative or firm"
                      className="w-full px-4 py-3 bg-white border border-[rgba(60,60,67,0.174)] rounded-lg text-black text-[17px] placeholder:text-[#8e8e93] focus:outline-none focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
                    />
                    <p className="text-[#8e8e93] text-[13px] mt-1">Legal name of the representative or firm</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Step 3 - Set the authorization details */}
          <div className="mb-3 card-ios overflow-hidden">
            <button
              onClick={() => toggleStep(3)}
              className="w-full p-4 border-0 cursor-pointer text-left bg-white active:bg-[#f2f2f7] transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#007AFF] text-white flex-shrink-0 mt-0.5">
                  <span className="font-semibold text-[15px]">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-black font-semibold text-[17px] mb-1">Set the authorization details</h3>
                  <p className="text-[#8e8e93] text-[15px] m-0">
                    Define what your representative can access
                  </p>
                </div>
                <ChevronDown className={`h-5 w-5 text-[#8e8e93] flex-shrink-0 mt-1 transition-transform ${expandedStep === 3 ? 'rotate-180' : ''}`} />
              </div>
            </button>
            
            {expandedStep === 3 && (
              <div className="px-4 pb-4 bg-white border-t border-[rgba(60,60,67,0.174)]">
                <div className="pt-4 space-y-5">
                  {/* Level of Authorization */}
                  <div>
                    <h4 className="text-black font-semibold text-[15px] mb-3">Level of authorization</h4>
                    <div className="space-y-2">
                      <label className="flex items-start gap-3 p-3 border border-[rgba(60,60,67,0.174)] rounded-lg cursor-pointer hover:bg-[#f2f2f7] transition-colors">
                        <input
                          type="radio"
                          name="authLevel"
                          value="full"
                          checked={authLevel === 'full'}
                          onChange={(e) => setAuthLevel(e.target.value as 'full' | 'limited')}
                          className="mt-0.5 w-5 h-5 text-[#007AFF] border-[#8e8e93] focus:ring-[#007AFF] cursor-pointer"
                        />
                        <div className="flex-1">
                          <div className="text-black text-[15px] font-semibold">Full access</div>
                          <div className="text-[#8e8e93] text-[13px] mt-0.5">Representative can view and manage all tax information</div>
                        </div>
                      </label>
                      <label className="flex items-start gap-3 p-3 border border-[rgba(60,60,67,0.174)] rounded-lg cursor-pointer hover:bg-[#f2f2f7] transition-colors">
                        <input
                          type="radio"
                          name="authLevel"
                          value="limited"
                          checked={authLevel === 'limited'}
                          onChange={(e) => setAuthLevel(e.target.value as 'full' | 'limited')}
                          className="mt-0.5 w-5 h-5 text-[#007AFF] border-[#8e8e93] focus:ring-[#007AFF] cursor-pointer"
                        />
                        <div className="flex-1">
                          <div className="text-black text-[15px] font-semibold">Limited access</div>
                          <div className="text-[#8e8e93] text-[13px] mt-0.5">Representative can view information but cannot make changes</div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Tax Years */}
                  <div>
                    <h4 className="text-black font-semibold text-[15px] mb-3">Tax years</h4>
                    <p className="text-[#8e8e93] text-[13px] mb-3">Select the tax years the representative can access:</p>
                    <div className="grid grid-cols-3 gap-2">
                      {availableYears.map((year) => (
                        <button
                          key={year}
                          onClick={() => toggleTaxYear(year)}
                          className={`px-3 py-2 rounded-lg border text-[15px] transition-all ${
                            taxYears.includes(year)
                              ? 'bg-[#007AFF] border-[#007AFF] text-white'
                              : 'bg-white border-[rgba(60,60,67,0.174)] text-black hover:bg-[#f2f2f7]'
                          }`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Authorization Period */}
                  <div>
                    <h4 className="text-black font-semibold text-[15px] mb-3">Authorization period</h4>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="dateOption"
                          value="open-ended"
                          checked={dateOption === 'open-ended'}
                          onChange={(e) => setDateOption(e.target.value as 'open-ended' | 'specific')}
                          className="w-5 h-5 text-[#007AFF] border-[#8e8e93] focus:ring-[#007AFF] cursor-pointer"
                        />
                        <span className="text-black text-[15px]">Open-ended (no end date)</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="dateOption"
                          value="specific"
                          checked={dateOption === 'specific'}
                          onChange={(e) => setDateOption(e.target.value as 'open-ended' | 'specific')}
                          className="w-5 h-5 text-[#007AFF] border-[#8e8e93] focus:ring-[#007AFF] cursor-pointer"
                        />
                        <span className="text-black text-[15px]">Specific date range</span>
                      </label>
                      
                      {dateOption === 'specific' && (
                        <div className="ml-8 space-y-3 pt-2">
                          <div>
                            <label className="block text-black text-[13px] mb-1">Start date</label>
                            <button
                              type="button"
                              onClick={handleStartDateClick}
                              className="w-full px-4 py-3 bg-white border border-[rgba(60,60,67,0.174)] rounded-lg text-black text-[17px] text-left focus:outline-none focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] flex items-center justify-between"
                            >
                              <span className={startDate ? 'text-black' : 'text-[#8e8e93]'}>
                                {startDate ? formatDisplayDate(startDate) : 'YYYY-MM-DD'}
                              </span>
                              <CalendarIcon className="h-5 w-5 text-[#007AFF]" />
                            </button>
                          </div>
                          <div>
                            <label className="block text-black text-[13px] mb-1">End date</label>
                            <button
                              type="button"
                              onClick={handleEndDateClick}
                              className="w-full px-4 py-3 bg-white border border-[rgba(60,60,67,0.174)] rounded-lg text-black text-[17px] text-left focus:outline-none focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] flex items-center justify-between"
                            >
                              <span className={endDate ? 'text-black' : 'text-[#8e8e93]'}>
                                {endDate ? formatDisplayDate(endDate) : 'YYYY-MM-DD'}
                              </span>
                              <CalendarIcon className="h-5 w-5 text-[#007AFF]" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Step 4 - Submit */}
          <div className="mb-4 card-ios overflow-hidden">
            <button
              onClick={() => toggleStep(4)}
              className="w-full p-4 border-0 cursor-pointer text-left bg-white active:bg-[#f2f2f7] transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#007AFF] text-white flex-shrink-0 mt-0.5">
                  <span className="font-semibold text-[15px]">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-black font-semibold text-[17px] mb-1">Review and submit</h3>
                  <p className="text-[#8e8e93] text-[15px] m-0">
                    Confirm your authorization details
                  </p>
                </div>
                <ChevronDown className={`h-5 w-5 text-[#007AFF] flex-shrink-0 mt-1 transition-transform ${expandedStep === 4 ? 'rotate-180' : ''}`} />
              </div>
            </button>
            
            {expandedStep === 4 && (
              <div className="px-4 pb-4 bg-white border-t border-[rgba(60,60,67,0.174)]">
                <div className="pt-4">
                  <h4 className="text-black font-semibold text-[17px] mb-3">Authorization summary</h4>
                  
                  {/* Representative Information */}
                  <div className="mb-4 pb-4 border-b border-[rgba(60,60,67,0.174)]">
                    <h5 className="text-[#8e8e93] text-[13px] uppercase tracking-wider mb-2">Representative information</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-[#8e8e93] text-[15px]">RepID number:</span>
                        <span className="text-black text-[15px] font-semibold">{repId || '—'}</span>
                      </div>
                      {groupId && (
                        <div className="flex justify-between">
                          <span className="text-[#8e8e93] text-[15px]">GroupID:</span>
                          <span className="text-black text-[15px] font-semibold">{groupId}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-[#8e8e93] text-[15px]">Business number:</span>
                        <span className="text-black text-[15px] font-semibold">{businessNumber || '—'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#8e8e93] text-[15px]">Full name:</span>
                        <span className="text-black text-[15px] font-semibold">{fullName || '—'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Authorization Details */}
                  <div className="mb-4 pb-4 border-b border-[rgba(60,60,67,0.174)]">
                    <h5 className="text-[#8e8e93] text-[13px] uppercase tracking-wider mb-2">Authorization details</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-[#8e8e93] text-[15px]">Access level:</span>
                        <span className="text-black text-[15px] font-semibold capitalize">{authLevel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#8e8e93] text-[15px]">Tax years:</span>
                        <span className="text-black text-[15px] font-semibold">
                          {taxYears.length > 0 ? taxYears.sort().reverse().join(', ') : '—'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#8e8e93] text-[15px]">Authorization period:</span>
                        <span className="text-black text-[15px] font-semibold capitalize">
                          {dateOption === 'open-ended' ? 'Open-ended' : 
                           startDate && endDate ? `${startDate} to ${endDate}` : '—'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Confirmation Checkbox */}
                  <label className="flex items-start gap-3 p-3 mb-4 bg-[#f2f2f7] rounded-lg cursor-pointer">
                    <input
                      type="checkbox"
                      checked={confirmed}
                      onChange={(e) => setConfirmed(e.target.checked)}
                      className="mt-0.5 w-5 h-5 text-[#007AFF] border-[#8e8e93] rounded focus:ring-[#007AFF] cursor-pointer"
                    />
                    <div className="flex-1">
                      <span className="text-black text-[15px]">
                        I confirm that the information provided is accurate and I authorize this representative to act on my behalf with the CRA.
                      </span>
                    </div>
                  </label>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={handleCancel}
                      className="flex-1 px-4 py-3 bg-white border border-[rgba(60,60,67,0.174)] rounded-lg text-black text-[17px] font-semibold hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!confirmed || !repId || !businessNumber || !fullName || taxYears.length === 0}
                      className="flex-1 px-4 py-3 bg-[#007AFF] border border-[#007AFF] rounded-lg text-white text-[17px] font-semibold hover:opacity-90 active:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    >
                      Submit
                    </button>
                  </div>

                  <p className="text-[#8e8e93] text-[13px] mt-3 text-center">
                    After submission, your representative will receive a confirmation and can begin accessing your authorized information.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Important Information */}
          <div className="mb-4 card-ios overflow-hidden border-l-4 border-[#FF9500] p-4">
            <h3 className="text-black mb-2 font-semibold text-[17px]">Important information</h3>
            <ul className="space-y-2 text-[15px] mb-0">
              <li className="flex items-start gap-2">
                <span className="text-[#FF9500] flex-shrink-0 mt-1">•</span>
                <span className="text-[#8e8e93]">
                  Only authorize representatives you trust with your tax information
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF9500] flex-shrink-0 mt-1">•</span>
                <span className="text-[#8e8e93]">
                  You can cancel or modify authorization at any time
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF9500] flex-shrink-0 mt-1">•</span>
                <span className="text-[#8e8e93]">
                  You remain responsible for all information filed on your behalf
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF9500] flex-shrink-0 mt-1">•</span>
                <span className="text-[#8e8e93]">
                  Representatives must have a valid RepID to be authorized
                </span>
              </li>
            </ul>
          </div>

          {/* Need Help */}
          <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Need help?</h2>
          <div className="card-ios p-4">
            <p className="text-[#8e8e93] text-[15px] mb-3">
              If you have questions about authorizing a representative:
            </p>
            <ul className="space-y-2 text-[15px] mb-0">
              <li className="flex items-start gap-2">
                <span className="text-[#007AFF] flex-shrink-0 mt-1">•</span>
                <span className="text-black">
                  Visit the <strong className="text-[#007AFF]">Help and support</strong> section
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#007AFF] flex-shrink-0 mt-1">•</span>
                <span className="text-black">
                  Call <strong>1-800-959-8281</strong> for assistance
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#007AFF] flex-shrink-0 mt-1">•</span>
                <span className="text-black">
                  Contact your representative directly for their RepID
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Start Date Calendar Modal */}
      {showStartDateCalendar && portalContainer && createPortal(
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 z-[100] flex items-end justify-center bg-black/40"
          onClick={handleStartDateCancel}
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
              <h2 className="text-black mb-3 text-[17px] text-center font-semibold">Select authorization start date</h2>
              <Calendar
                mode="single"
                selected={tempStartDate}
                month={startCalendarMonth}
                onMonthChange={setStartCalendarMonth}
                onSelect={handleStartDateSelect}
                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                className="w-full"
              />
              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleStartDateCancel}
                  className="flex-1 py-3 text-[#007AFF] bg-white hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors rounded-[10px] border border-[#007AFF] text-[17px] text-center"
                >
                  Cancel
                </button>
                <button
                  onClick={handleStartDateConfirm}
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
      
      {/* End Date Calendar Modal */}
      {showEndDateCalendar && portalContainer && createPortal(
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 z-[100] flex items-end justify-center bg-black/40"
          onClick={handleEndDateCancel}
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
              <h2 className="text-black mb-3 text-[17px] text-center font-semibold">Select authorization end date</h2>
              <Calendar
                mode="single"
                selected={tempEndDate}
                month={endCalendarMonth}
                onMonthChange={setEndCalendarMonth}
                onSelect={handleEndDateSelect}
                disabled={(date) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  if (date < today) return true;
                  if (startDate) {
                    const start = new Date(startDate);
                    start.setHours(0, 0, 0, 0);
                    if (date < start) return true;
                  }
                  return false;
                }}
                className="w-full"
              />
              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleEndDateCancel}
                  className="flex-1 py-3 text-[#007AFF] bg-white hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors rounded-[10px] border border-[#007AFF] text-[17px] text-center"
                >
                  Cancel
                </button>
                <button
                  onClick={handleEndDateConfirm}
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