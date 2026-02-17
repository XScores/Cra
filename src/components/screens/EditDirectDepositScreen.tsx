import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut, Shield, Smartphone, Lock } from 'lucide-react';
import { useState, useRef } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { IPhoneKeyboard } from '../IPhoneKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';
import { toast } from 'sonner';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';
import { HeaderMaster } from '../HeaderMaster';

interface EditDirectDepositScreenProps {
  onBack: () => void;
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
}

export function EditDirectDepositScreen({ 
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
  onSubmitDocuments
}: EditDirectDepositScreenProps) {
  const [institutionNumber, setInstitutionNumber] = useState('');
  const [branchNumber, setBranchNumber] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<'institutionNumber' | 'branchNumber' | 'accountNumber' | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [requireAuthentication, setRequireAuthentication] = useState(true);
  const [authMethod, setAuthMethod] = useState<'faceId' | 'pin'>('faceId');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Use keyboard scroll hook
  const { keyboardPadding } = useKeyboardScroll({ 
    isKeyboardVisible: showKeyboard, 
    activeField: activeField || 'input',
    keyboardHeight: 260,
    scrollContainerRef
  });

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      if (activeField === 'institutionNumber') {
        setInstitutionNumber(prev => prev.slice(0, -1));
      } else if (activeField === 'branchNumber') {
        setBranchNumber(prev => prev.slice(0, -1));
      } else if (activeField === 'accountNumber') {
        setAccountNumber(prev => prev.slice(0, -1));
      }
    } else {
      if (activeField === 'institutionNumber') {
        setInstitutionNumber(prev => prev + key);
      } else if (activeField === 'branchNumber') {
        setBranchNumber(prev => prev + key);
      } else if (activeField === 'accountNumber') {
        setAccountNumber(prev => prev + key);
      }
    }
  };

  const handleKeyboardDone = () => {
    setShowKeyboard(false);
    setActiveField(null);
  };

  const handleSave = () => {
    toast.success('Your direct deposit information has been updated successfully.');
    onBack();
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
        onSearchClick={onNavigateHome}
        hasUnreadMail={false}
        onFileTaxes={onFileTaxes}
        onViewAllBenefits={onBenefitsAndCredits}
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
      />

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7] sticky top-[47px] z-10">
        <div className="flex items-center gap-3 mb-1">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Direct deposit</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Set up or update your direct deposit information for faster refunds and benefit payments</p>
      </div>

      {/* Scrollable Content Area */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7]"
        style={{ paddingBottom: `${keyboardPadding + 80}px` }}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (!target.closest('input') && !target.closest('button[type="button"]')) {
            setShowKeyboard(false);
          }
        }}
      >
        {/* Current Direct Deposit Information */}
        <div className="section-header-ios">
          Current direct deposit information
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios overflow-hidden">
            <div className="list-item-ios px-4 py-3">
              <div>
                <div className="text-gray-ios text-[15px] mb-1">Financial institution</div>
                <div className="text-black text-[17px]">Royal Bank</div>
              </div>
            </div>

            <div className="list-item-ios px-4 py-3">
              <div>
                <div className="text-gray-ios text-[15px] mb-1">Institution number</div>
                <div className="text-black text-[17px]">003</div>
              </div>
            </div>

            <div className="list-item-ios px-4 py-3">
              <div>
                <div className="text-gray-ios text-[15px] mb-1">Branch number</div>
                <div className="text-black text-[17px]">12345</div>
              </div>
            </div>

            <div className="list-item-ios px-4 py-3">
              <div>
                <div className="text-gray-ios text-[15px] mb-1">Account number</div>
                <div className="text-black text-[17px]">*********4532</div>
              </div>
            </div>
          </div>
        </div>

        {/* Authentication Challenge Section */}
        <div className="section-header-ios">
          Security
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios overflow-hidden">
            {/* Require Authentication Toggle */}
            <div className="list-item-ios px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-8 h-8 rounded-full bg-[#007AFF]/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-4 w-4 text-[#007AFF]" />
                </div>
                <div className="flex-1">
                  <div className="text-black text-[17px]">Require authentication</div>
                  <div className="text-gray-ios text-[13px] mt-0.5">Verify changes with Face ID or PIN</div>
                </div>
              </div>
              <button
                onClick={() => setRequireAuthentication(!requireAuthentication)}
                className={`relative w-[51px] h-[31px] rounded-full transition-colors ${
                  requireAuthentication ? 'bg-[#34C759]' : 'bg-[#E5E5EA]'
                }`}
                aria-label="Toggle require authentication"
              >
                <div
                  className={`absolute top-[2px] w-[27px] h-[27px] rounded-full bg-white shadow-md transition-transform ${
                    requireAuthentication ? 'translate-x-[22px]' : 'translate-x-[2px]'
                  }`}
                />
              </button>
            </div>

            {/* Authentication Method Selector - Only visible when authentication is enabled */}
            {requireAuthentication && (
              <>
                <div className="list-item-ios px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-[#F2F2F2] transition-colors" onClick={() => setAuthMethod('faceId')}>
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-8 h-8 rounded-full bg-[#007AFF]/10 flex items-center justify-center flex-shrink-0">
                      <Smartphone className="h-4 w-4 text-[#007AFF]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-black text-[17px]">Face ID</div>
                    </div>
                  </div>
                  {authMethod === 'faceId' && (
                    <div className="w-5 h-5 rounded-full bg-[#007AFF] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  )}
                  {authMethod !== 'faceId' && (
                    <div className="w-5 h-5 rounded-full border-2 border-[#C7C7CC]" />
                  )}
                </div>

                <div className="list-item-ios px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-[#F2F2F2] transition-colors" onClick={() => setAuthMethod('pin')}>
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-8 h-8 rounded-full bg-[#007AFF]/10 flex items-center justify-center flex-shrink-0">
                      <Lock className="h-4 w-4 text-[#007AFF]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-black text-[17px]">PIN number</div>
                    </div>
                  </div>
                  {authMethod === 'pin' && (
                    <div className="w-5 h-5 rounded-full bg-[#007AFF] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  )}
                  {authMethod !== 'pin' && (
                    <div className="w-5 h-5 rounded-full border-2 border-[#C7C7CC]" />
                  )}
                </div>
              </>
            )}
          </div>

          {/* Information about authentication */}
          {requireAuthentication && (
            <div className="mt-3">
              <div className="bg-[#FFF9E6] border-l-4 border-[#FFB800] p-3 rounded-[8px]">
                <p className="text-black text-[13px] m-0 leading-[1.4]">
                  <strong>Enhanced security:</strong> When enabled, you'll be required to authenticate with {authMethod === 'faceId' ? 'Face ID' : 'your PIN'} before making changes to your direct deposit information. This helps protect your account from unauthorized changes.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Edit Form */}
        <div className="section-header-ios">
          Change direct deposit information
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios p-4">
            <div className="mb-4">
              <Label htmlFor="institutionNumber" className="text-black text-[15px] block mb-2">
                Institution number (3 digits)
              </Label>
              <Input
                id="institutionNumber"
                type="text"
                inputMode="numeric"
                value={institutionNumber}
                onChange={(e) => setInstitutionNumber(e.target.value)}
                onFocus={() => { setShowKeyboard(true); setActiveField('institutionNumber'); }}
                maxLength={3}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
                placeholder="003"
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="branchNumber" className="text-black text-[15px] block mb-2">
                Branch number (5 digits)
              </Label>
              <Input
                id="branchNumber"
                type="text"
                inputMode="numeric"
                value={branchNumber}
                onChange={(e) => setBranchNumber(e.target.value)}
                onFocus={() => { setShowKeyboard(true); setActiveField('branchNumber'); }}
                maxLength={5}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
                placeholder="12345"
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="accountNumber" className="text-black text-[15px] block mb-2">
                Account number (up to 12 digits)
              </Label>
              <Input
                id="accountNumber"
                type="text"
                inputMode="numeric"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                onFocus={() => { setShowKeyboard(true); setActiveField('accountNumber'); }}
                maxLength={12}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
                placeholder="123456789"
              />
            </div>

            <div className="bg-[#e3f2fd] border-l-4 border-[#007AFF] p-3 rounded-[8px]">
              <p className="text-black text-[15px] m-0">
                <strong>Important:</strong> Verify your banking information carefully. This account will be used for all benefit payments and tax refunds.
              </p>
              <p className="text-black text-[15px] m-0 mt-2 opacity-80">
                You can find these numbers on a cheque or by contacting your financial institution.
              </p>
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
            className="flex-1 bg-[#007AFF] text-white px-6 py-3 rounded-[10px] hover:opacity-90 active:opacity-80 transition-opacity text-[17px] text-center"
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