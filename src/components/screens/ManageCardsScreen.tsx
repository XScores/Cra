import { useState } from 'react';
import { HeaderMaster } from '../HeaderMaster';
import { Card } from '../ui/card';
import { CreditCard, Plus, Trash2, ChevronLeft, Send, Gift, Mail, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';

interface ManageCardsScreenProps {
  onBack: () => void;
  onViewMail?: () => void;
  onNavigateHome?: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onViewDocuments?: () => void;
  onViewProfile?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onHelp?: () => void;
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

export function ManageCardsScreen({
  onBack,
  onViewMail,
  onNavigateHome,
  onFileTaxes,
  onMakePayment,
  onBenefitsAndCredits,
  onRegisteredPlans,
  onViewDocuments,
  onViewProfile,
  onSignOut,
  onTaxSlips,
  onProofOfIncome,
  onHelp,
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
}: ManageCardsScreenProps) {
  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col relative">
      {/* Header - Sticky */}
      <div className="flex-shrink-0 sticky top-0 z-10 bg-white">
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
      </div>

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7] sticky top-[47px] z-[5]">
        <div className="flex items-center gap-3 mb-1">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Credit or Debit cards</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Manage your payment cards for making CRA payments</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Your Cards */}
        <div className="section-header-ios">
          Your cards
        </div>
        
        <div className="px-4 pb-3">
          {/* Visa Card */}
          <div className="card-ios mb-3 p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-8 bg-[#1434cb] rounded-[6px] flex items-center justify-center text-white text-[10px]">
                VISA
              </div>
              <div className="flex-1">
                <div className="text-black mb-1">Visa Credit Card</div>
                <div className="text-black text-[15px] opacity-80">•••• •••• •••• 8921</div>
                <div className="text-[#8e8e93] text-[15px] mt-1">Expires 12/2028</div>
              </div>
            </div>
            
            <div className="flex gap-2 pt-3 border-t border-[rgba(60,60,67,0.29)]">
              <button className="flex-1 flex items-center justify-center px-3 py-2 bg-white border border-[#007AFF] text-[#007AFF] rounded-[8px] text-[15px] hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors">
                Edit
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-[#ff3b30] text-[#ff3b30] rounded-[8px] text-[15px] hover:bg-[#ffebee] active:bg-[#fdd] transition-colors">
                <Trash2 className="h-4 w-4" />
                Remove
              </button>
            </div>
          </div>

          {/* Mastercard */}
          <div className="card-ios mb-3 p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-8 bg-gradient-to-r from-[#eb001b] to-[#f79e1b] rounded-[6px] flex items-center justify-center">
                <div className="flex">
                  <div className="w-3 h-3 rounded-full bg-[#eb001b] opacity-80"></div>
                  <div className="w-3 h-3 rounded-full bg-[#f79e1b] -ml-1.5 opacity-80"></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="text-black mb-1">Mastercard Credit Card</div>
                <div className="text-black text-[15px] opacity-80">•••• •••• •••• 3456</div>
                <div className="text-[#8e8e93] text-[15px] mt-1">Expires 08/2027</div>
              </div>
            </div>
            
            <div className="flex gap-2 pt-3 border-t border-[rgba(60,60,67,0.29)]">
              <button className="flex-1 flex items-center justify-center px-3 py-2 bg-white border border-[#007AFF] text-[#007AFF] rounded-[8px] text-[15px] hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors">
                Edit
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-[#ff3b30] text-[#ff3b30] rounded-[8px] text-[15px] hover:bg-[#ffebee] active:bg-[#fdd] transition-colors">
                <Trash2 className="h-4 w-4" />
                Remove
              </button>
            </div>
          </div>

          {/* RBC Debit Card */}
          <div className="card-ios mb-3 p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-8 bg-[#005daa] rounded-[6px] flex items-center justify-center text-white text-[9px]">
                RBC
              </div>
              <div className="flex-1">
                <div className="text-black mb-1">Royal Bank Debit Card</div>
                <div className="text-black text-[15px] opacity-80">•••• •••• •••• 4532</div>
                <div className="text-[#8e8e93] text-[15px] mt-1">Expires 06/2029</div>
              </div>
            </div>
            
            <div className="flex gap-2 pt-3 border-t border-[rgba(60,60,67,0.29)]">
              <button className="flex-1 flex items-center justify-center px-3 py-2 bg-white border border-[#007AFF] text-[#007AFF] rounded-[8px] text-[15px] hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors">
                Edit
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-[#ff3b30] text-[#ff3b30] rounded-[8px] text-[15px] hover:bg-[#ffebee] active:bg-[#fdd] transition-colors">
                <Trash2 className="h-4 w-4" />
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* Add New Card Button */}
        <div className="px-4 pb-3">
          <button className="w-full p-4 bg-[#007AFF] text-white rounded-[10px] border-0 transition-opacity hover:opacity-90 active:opacity-80">
            <div className="flex items-center justify-center gap-2">
              <Plus className="h-5 w-5" />
              <span className="text-[17px]">Add new card</span>
            </div>
          </button>
        </div>

        {/* Information Box */}
        <div className="px-4 pb-3">
          <div className="bg-[#fff3cd] border-l-4 border-[#ffc107] p-4 rounded-[8px] mb-3">
            <h3 className="text-black mb-2">Note:</h3>
            <p className="text-black text-[15px] m-0 mb-2 opacity-80">
              Your saved cards can be used to make payments to the CRA through third-party payment service providers.
            </p>
            <p className="text-black text-[15px] m-0 opacity-80">
              Payment processing fees may apply when using credit or debit cards. These fees are charged by the payment service provider, not the CRA.
            </p>
          </div>

          {/* Security Info */}
          <div className="card-ios p-4">
            <div className="flex items-start gap-3">
              <CreditCard className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-black mb-2">Secure payment information</h3>
                <p className="text-black text-[15px] m-0 mb-2 opacity-80">
                  Your card information is encrypted and stored securely. The CRA does not store your full card number.
                </p>
                <p className="text-black text-[15px] m-0 opacity-80">
                  You can remove a card at any time from this page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}