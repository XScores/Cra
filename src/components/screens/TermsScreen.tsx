import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, ChevronRight, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface TermsScreenProps {
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

export function TermsScreen({ 
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
}: TermsScreenProps) {
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
            <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Terms and conditions</h1>
          </div>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Terms of use for CRA My Account services</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        <div className="px-4 pb-3">
          <div className="card-ios p-4">
            <div className="space-y-4">
              <div>
                <h2 className="text-black mb-2">Acceptance of terms</h2>
                <p className="text-black text-[15px] leading-[20px] m-0 opacity-80">
                  By accessing and using CRA My Account, you agree to be bound by these terms and conditions. If you do not agree to these terms, please do not use this service.
                </p>
              </div>

              <div>
                <h3 className="text-black mb-2">Service description</h3>
                <p className="text-black text-[15px] leading-[20px] m-0 opacity-80">
                  CRA My Account is a secure portal that allows you to view and manage your personal tax and benefit information online. The service provides access to tax returns, notices of assessment, benefit information, and the ability to make payments and update your personal information.
                </p>
              </div>

              <div>
                <h3 className="text-black mb-2">Account security</h3>
                <p className="text-black text-[15px] leading-[20px] mb-2 m-0 opacity-80">
                  You are responsible for:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-black text-[15px] leading-[20px] opacity-80">
                  <li>Maintaining the confidentiality of your login credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying the CRA immediately of any unauthorized use</li>
                  <li>Logging out after each session</li>
                  <li>Using secure networks when accessing your account</li>
                </ul>
              </div>

              <div>
                <h3 className="text-black mb-2">Acceptable use</h3>
                <p className="text-black text-[15px] leading-[20px] mb-2 m-0 opacity-80">
                  You agree not to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-black text-[15px] leading-[20px] opacity-80">
                  <li>Use the service for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to any systems or networks</li>
                  <li>Interfere with or disrupt the service or servers</li>
                  <li>Share your login credentials with others</li>
                  <li>Use automated systems to access the service</li>
                </ul>
              </div>

              <div>
                <h3 className="text-black mb-2">Accuracy of information</h3>
                <p className="text-black text-[15px] leading-[20px] m-0 opacity-80">
                  While we strive to provide accurate and up-to-date information, the CRA does not guarantee the accuracy, completeness, or timeliness of information available through My Account. Always verify important information through official CRA notices and correspondence.
                </p>
              </div>

              <div>
                <h3 className="text-black mb-2">Service availability</h3>
                <p className="text-black text-[15px] leading-[20px] m-0 opacity-80">
                  The CRA reserves the right to modify, suspend, or discontinue the service at any time without notice. We are not liable for any interruption or termination of service.
                </p>
              </div>

              <div>
                <h3 className="text-black mb-2">Limitation of liability</h3>
                <p className="text-black text-[15px] leading-[20px] m-0 opacity-80">
                  The Government of Canada and the CRA shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use this service.
                </p>
              </div>

              <div>
                <h3 className="text-black mb-2">Governing law</h3>
                <p className="text-black text-[15px] leading-[20px] m-0 opacity-80">
                  These terms and conditions are governed by the laws of Canada and the province or territory in which you reside.
                </p>
              </div>

              <div>
                <h3 className="text-black mb-2">Changes to terms</h3>
                <p className="text-black text-[15px] leading-[20px] m-0 opacity-80">
                  The CRA reserves the right to update these terms and conditions at any time. Continued use of the service after changes constitutes acceptance of the modified terms.
                </p>
              </div>

              <div className="bg-[#e3f2fd] border-l-4 border-[#007AFF] p-4 rounded-[8px]">
                <p className="text-black text-[15px] leading-[18px] m-0">
                  <strong>Last updated:</strong> October 20, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}