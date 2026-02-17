import { ChevronLeft } from 'lucide-react';
import { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { IPhoneKeyboard } from '../IPhoneKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';
import { toast } from 'sonner';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';
import { HeaderMaster } from '../HeaderMaster';
import { HamburgerMenu } from '../HamburgerMenu';

interface EditAddressScreenProps {
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

export function EditAddressScreen({ 
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
}: EditAddressScreenProps) {
  const [street, setStreet] = useState('123 Main Street');
  const [apartment, setApartment] = useState('');
  const [city, setCity] = useState('Toronto');
  const [province, setProvince] = useState('ON');
  const [postalCode, setPostalCode] = useState('M5H 2N2');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<'street' | 'apartment' | 'city' | 'province' | 'postalCode' | null>(null);
  const [showMenu, setShowMenu] = useState(false);
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
      if (activeField === 'street') {
        setStreet(prev => prev.slice(0, -1));
      } else if (activeField === 'apartment') {
        setApartment(prev => prev.slice(0, -1));
      } else if (activeField === 'city') {
        setCity(prev => prev.slice(0, -1));
      } else if (activeField === 'province') {
        setProvince(prev => prev.slice(0, -1));
      } else if (activeField === 'postalCode') {
        setPostalCode(prev => prev.slice(0, -1));
      }
    } else {
      if (activeField === 'street') {
        setStreet(prev => prev + key);
      } else if (activeField === 'apartment') {
        setApartment(prev => prev + key);
      } else if (activeField === 'city') {
        setCity(prev => prev + key);
      } else if (activeField === 'province') {
        setProvince(prev => prev + key);
      } else if (activeField === 'postalCode') {
        setPostalCode(prev => prev + key);
      }
    }
  };

  const handleKeyboardDone = () => {
    setShowKeyboard(false);
    setActiveField(null);
  };

  const handleSave = () => {
    toast.success('Your mailing address has been updated successfully.');
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Edit mailing address</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Update your residential or mailing address on file with the CRA</p>
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
        {/* Form */}
        <div className="px-4 pb-3">
          <div className="card-ios p-4">
            <div className="mb-4">
              <label htmlFor="street" className="text-black text-[15px] block mb-2">
                Street address
              </label>
              <input
                id="street"
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                onFocus={() => { setShowKeyboard(true); setActiveField('street'); }}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="apartment" className="text-black text-[15px] block mb-2">
                Apartment, suite, etc.
              </label>
              <input
                id="apartment"
                type="text"
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
                onFocus={() => { setShowKeyboard(true); setActiveField('apartment'); }}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="city" className="text-black text-[15px] block mb-2">
                City
              </label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onFocus={() => { setShowKeyboard(true); setActiveField('city'); }}
                className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="province" className="text-black text-[15px] block mb-2">
                  Province
                </label>
                <input
                  id="province"
                  type="text"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  onFocus={() => { setShowKeyboard(true); setActiveField('province'); }}
                  className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
                />
              </div>

              <div>
                <label htmlFor="postalCode" className="text-black text-[15px] block mb-2">
                  Postal code
                </label>
                <input
                  id="postalCode"
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  onFocus={() => { setShowKeyboard(true); setActiveField('postalCode'); }}
                  className="w-full px-3 py-2 border border-[#c7c7cc] rounded-[8px] bg-white text-black text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
                />
              </div>
            </div>

            <div className="bg-[#e3f2fd] border-l-4 border-[#007AFF] p-3 rounded-[8px]">
              <p className="text-black text-[15px] m-0">
                <strong>Important:</strong> This address will be used for all official CRA correspondence.
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