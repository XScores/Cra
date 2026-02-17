import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, ChevronRight, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface PrivacyScreenProps {
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

export function PrivacyScreen({ 
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
}: PrivacyScreenProps) {
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
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-start gap-3 mb-1">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0 mt-[2px]"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <div className="flex-1">
            <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Privacy</h1>
          </div>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">How the CRA protects your personal information</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        <div className="px-4 pb-3">
          <div className="card-ios p-4">
            <div className="space-y-4">
              <div>
                <h2 className="text-black mb-2">Our commitment to privacy</h2>
                <p className="text-black text-[15px] leading-[20px] m-0 opacity-80">
                  The Canada Revenue Agency is committed to protecting the privacy and confidentiality of personal information under its control. We adhere to the Privacy Act and other applicable legislation governing the protection of personal information.
                </p>
              </div>

              <div>
                <h3 className="text-black mb-2">Information we collect</h3>
                <p className="text-black text-[15px] leading-[20px] mb-2 m-0 opacity-80">
                  We collect only the personal information necessary to administer tax and benefit programs, including:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-black text-[15px] leading-[20px] opacity-80">
                  <li>Name and Social Insurance Number</li>
                  <li>Contact information (address, phone, email)</li>
                  <li>Income and tax information</li>
                  <li>Banking information for direct deposit</li>
                  <li>Family and dependent information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-black mb-2">How we use your information</h3>
                <p className="text-black text-[15px] leading-[20px] m-0 opacity-80">
                  Your personal information is used to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-black text-[15px] leading-[20px] opacity-80">
                  <li>Assess and collect taxes</li>
                  <li>Administer benefit and credit programs</li>
                  <li>Verify your identity and prevent fraud</li>
                  <li>Communicate with you about your account</li>
                  <li>Comply with legal requirements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-black mb-2">Information sharing</h3>
                <p className="text-black text-[15px] leading-[20px] m-0 opacity-80">
                  The CRA may share your information with other government departments and agencies as authorized by law, including provincial and territorial governments for the administration of tax and benefit programs.
                </p>
              </div>

              <div>
                <h3 className="text-black mb-2">Your privacy rights</h3>
                <p className="text-black text-[15px] leading-[20px] mb-2 m-0 opacity-80">
                  Under the Privacy Act, you have the right to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-black text-[15px] leading-[20px] opacity-80">
                  <li>Access your personal information held by the CRA</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>File a complaint with the Privacy Commissioner of Canada</li>
                </ul>
              </div>

              <div className="bg-[#e3f2fd] border-l-4 border-[#007AFF] p-4 rounded-[8px]">
                <p className="text-black text-[15px] leading-[18px] m-0">
                  <strong>For more information:</strong> Visit <a href="https://www.canada.ca/en/revenue-agency/corporate/privacy-notice.html" className="text-[#007AFF] underline hover:opacity-70">canada.ca/cra-privacy</a> or contact the CRA Privacy Coordinator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}