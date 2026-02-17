import { HeaderMaster } from '../HeaderMaster';
import { AnimatePresence } from 'motion/react';
import { ChevronLeft, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { IPhoneKeyboard } from '../IPhoneKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';
import { useState, useRef } from 'react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface RRSPCalculatorScreenProps {
  onBack: () => void;
  onViewMail?: () => void;
  onNavigateHome: () => void;
  onLogoClick: () => void;
  hasUnreadMail?: boolean;
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

export function RRSPCalculatorScreen({ onBack, onViewMail, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onBecomeRepresentative, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments }: RRSPCalculatorScreenProps) {
  const [earnedIncome, setEarnedIncome] = useState('');
  const [unusedRoom, setUnusedRoom] = useState('');
  const [pensionAdjustment, setPensionAdjustment] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Use keyboard scroll hook
  const { keyboardPadding } = useKeyboardScroll({ 
    isKeyboardVisible: showKeyboard, 
    activeField: 'input',
    keyboardHeight: 260,
    scrollContainerRef
  });

  const calculateLimit = () => {
    const income = parseFloat(earnedIncome) || 0;
    const unused = parseFloat(unusedRoom) || 0;
    const pension = parseFloat(pensionAdjustment) || 0;
    
    const currentYearLimit = Math.min(income * 0.18, 31560); // 2025 max
    const totalLimit = currentYearLimit + unused - pension;
    
    setShowResult(true);
    return Math.max(0, totalLimit);
  };

  const limit = showResult ? calculateLimit() : 0;

  return (
    <div 
      className="h-full bg-[#f2f2f7] flex flex-col"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (!target.closest('input') && !target.closest('button[type="button"]')) {
          setShowKeyboard(false);
        }
      }}
    >
      {/* Header - Fixed */}
      <div className="flex-shrink-0">
        <HeaderMaster 
          title="My Account"
          largeTitle={true}
          showSearch={true}
          showMenu={true}
          onNavigateHome={onNavigateHome}
          onLogoClick={onNavigateHome}
          onSearchClick={onNavigateHome}
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
          onBecomeRepresentative={onBecomeRepresentative}
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
          onHelp={onHelp}
          onSignOut={onSignOut}
        />
      </div>

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-start gap-3 mb-1">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[1.1]">Calculate your RRSP<br />deduction limit</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Use this calculator to estimate your RRSP deduction limit for 2025</p>
      </div>

      {/* Scrollable Content Area */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7]"
        style={{ paddingBottom: `${keyboardPadding + 80}px` }}
      >
        {/* Calculator Form */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-4">Enter your information</h3>
            
            <div className="space-y-4">
              {/* Earned Income */}
              <div>
                <label className="block text-black text-[17px] mb-1">
                  2024 earned income
                </label>
                <p className="text-[#3c3c43] text-[15px] mb-2 opacity-60">
                  Found on line 26000 of your 2024 tax return
                </p>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3c3c43]">$</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    value={earnedIncome}
                    onChange={(e) => {
                      setEarnedIncome(e.target.value);
                      setShowResult(false);
                    }}
                    onFocus={() => setShowKeyboard(true)}
                    className="w-full pl-7 pr-3 py-3 border border-[#c6c6c8] rounded-[10px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] focus:outline-none"
                    placeholder="0.00"
                  />
                </div>
              </div>

              {/* Unused Room */}
              <div>
                <label className="block text-black text-[17px] mb-1">
                  Unused RRSP contribution room from previous years
                </label>
                <p className="text-[#3c3c43] text-[15px] mb-2 opacity-60">
                  Found on your most recent Notice of Assessment
                </p>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3c3c43]">$</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    value={unusedRoom}
                    onChange={(e) => {
                      setUnusedRoom(e.target.value);
                      setShowResult(false);
                    }}
                    onFocus={() => setShowKeyboard(true)}
                    className="w-full pl-7 pr-3 py-3 border border-[#c6c6c8] rounded-[10px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] focus:outline-none"
                    placeholder="0.00"
                  />
                </div>
              </div>

              {/* Pension Adjustment */}
              <div>
                <label className="block text-black text-[17px] mb-1">
                  2024 pension adjustment (if applicable)
                </label>
                <p className="text-[#3c3c43] text-[15px] mb-2 opacity-60">
                  Found on your T4 slip, box 52
                </p>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3c3c43]">$</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    value={pensionAdjustment}
                    onChange={(e) => {
                      setPensionAdjustment(e.target.value);
                      setShowResult(false);
                    }}
                    onFocus={() => setShowKeyboard(true)}
                    className="w-full pl-7 pr-3 py-3 border border-[#c6c6c8] rounded-[10px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] focus:outline-none"
                    placeholder="0.00"
                  />
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={() => setShowResult(true)}
                className="w-full px-6 py-3 bg-[#007AFF] hover:opacity-80 active:opacity-60 text-white rounded-[10px] text-[17px] transition-opacity border-0 cursor-pointer"
              >
                Calculate limit
              </button>
            </div>
          </div>
        </div>

        {/* Result */}
        {showResult && (
          <div className="px-4 mb-4">
            <div className="bg-white rounded-[10px] p-4">
              <h3 className="text-black text-[20px] m-0 mb-4">Your estimated 2025 RRSP deduction limit</h3>
              <div className="bg-[#f2f2f7] rounded-[10px] p-4 mb-4">
                <p className="text-[#3c3c43] text-[15px] mb-1 opacity-60">Estimated deduction limit</p>
                <p className="text-[#28a745] text-[28px] m-0">
                  ${limit.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </p>
              </div>
              <div className="divide-y divide-[#c6c6c8] mb-4">
                <div className="flex justify-between py-3">
                  <span className="text-black text-[17px]">18% of earned income</span>
                  <span className="text-black text-[17px] text-right">
                    ${Math.min((parseFloat(earnedIncome) || 0) * 0.18, 31560).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-black text-[17px]">Unused room carried forward</span>
                  <span className="text-black text-[17px] text-right">
                    ${(parseFloat(unusedRoom) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-black text-[17px]">Pension adjustment</span>
                  <span className="text-[#ff3b30] text-[17px] text-right">
                    -${(parseFloat(pensionAdjustment) || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </span>
                </div>
              </div>
              <div className="bg-[#fff9e6] rounded-[10px] p-4 border-l-4 border-[#ffcc00]">
                <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
                  <strong className="text-black">Note:</strong> This is an estimate. Your actual deduction limit may differ based on additional factors. Check your Notice of Assessment for your official limit.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* How It Works */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-3">How your RRSP deduction limit is calculated</h3>
            <p className="text-[#3c3c43] text-[17px] mb-4 leading-snug">
              Your RRSP deduction limit is calculated using the following formula:
            </p>
            <div className="bg-[#f2f2f7] rounded-[10px] p-4 mb-4">
              <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
                Lesser of 18% of previous year's earned income or annual maximum ($31,560 for 2025)
                <br />+ Unused RRSP room from previous years
                <br />- Pension adjustment (if applicable)
                <br />= RRSP deduction limit
              </p>
            </div>
            <div className="space-y-2">
              <ul className="list-disc m-0 pl-5 space-y-2">
                <li className="text-[#3c3c43] text-[17px] leading-snug"><strong className="text-black">Earned income</strong> includes employment income, rental income, and business income</li>
                <li className="text-[#3c3c43] text-[17px] leading-snug"><strong className="text-black">Unused room</strong> accumulates from previous years when you don't contribute the full amount</li>
                <li className="text-[#3c3c43] text-[17px] leading-snug"><strong className="text-black">Pension adjustment</strong> reduces your limit if you contributed to an employer pension plan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {showKeyboard && <IPhoneKeyboard key="keyboard" />}
      </AnimatePresence>
    </div>
  );
}