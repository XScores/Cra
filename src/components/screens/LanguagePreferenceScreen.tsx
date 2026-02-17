import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, ChevronRight, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';
import { toast } from 'sonner';

interface LanguagePreferenceScreenProps {
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
  hasUnreadMail?: boolean;
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

export function LanguagePreferenceScreen({ 
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
  hasUnreadMail,
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
}: LanguagePreferenceScreenProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'fr'>('en');

  const handleSave = () => {
    toast.success('Your language preference has been saved successfully.');
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Language preference</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Choose your preferred language for the CRA My Account app</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Language Options */}
        <div className="section-header-ios">
          Select language
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios overflow-hidden">
            <button
              onClick={() => setSelectedLanguage('en')}
              className={`list-item-ios px-4 py-3 w-full text-left hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors ${
                selectedLanguage === 'en' ? 'bg-[#f2f2f7]' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                  selectedLanguage === 'en' ? 'border-[#007AFF]' : 'border-[#c7c7cc]'
                }`}>
                  {selectedLanguage === 'en' && (
                    <div className="h-3 w-3 rounded-full bg-[#007AFF]" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-1">English</div>
                  <div className="text-gray-ios text-[15px]">Display all content in English</div>
                </div>
              </div>
            </button>

            <button
              onClick={() => setSelectedLanguage('fr')}
              className={`list-item-ios px-4 py-3 w-full text-left hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors ${
                selectedLanguage === 'fr' ? 'bg-[#f2f2f7]' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                  selectedLanguage === 'fr' ? 'border-[#007AFF]' : 'border-[#c7c7cc]'
                }`}>
                  {selectedLanguage === 'fr' && (
                    <div className="h-3 w-3 rounded-full bg-[#007AFF]" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-1">Français</div>
                  <div className="text-gray-ios text-[15px]">Afficher tout le contenu en français</div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Note */}
        <div className="px-4 pb-3">
          <div className="bg-[#fff3cd] border-l-4 border-[#ffc107] p-4 rounded-[8px]">
            <p className="text-black text-[15px] m-0">
              <strong>Note:</strong> This setting only affects the language of the CRA My Account app. To change your communication preference with the CRA, please visit your profile settings.
            </p>
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
    </div>
  );
}