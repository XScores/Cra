import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, Home, MapPin, Mail, Phone, Building, AlertTriangle, Smartphone } from 'lucide-react';

interface FAQUpdateAddressScreenProps {
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

export function FAQUpdateAddressScreen({ onBack, onViewMail, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onBecomeRepresentative, onBecomeRepresentativeAsRep, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments }: FAQUpdateAddressScreenProps) {
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
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-start gap-3 mb-1">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0 mt-[3px]"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[1.2]">How do I update my address?</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Learn how to change your address with the CRA</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        <div className="px-4 py-2">
          <div className="bg-[#fff9e6] rounded-[10px] border-l-4 border-[#ffcc00] p-4 mb-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-[#ffcc00] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[#3c3c43] text-[15px] m-0">
                  <strong className="text-black">Important:</strong> It's your responsibility to keep your address up to date with the CRA. An outdated address can result in missed correspondence, delayed refunds, or missed benefits.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Ways to update your address</h2>
            
            <div className="bg-white rounded-[10px] mb-3 p-4">
              <div className="flex items-start gap-3 mb-3">
                <Smartphone className="h-6 w-6 text-[#007AFF] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-black text-[20px] m-0 mb-2">CRA My Account (Recommended)</h3>
                  <p className="text-[#3c3c43] text-[17px] m-0 mb-3">
                    The fastest and easiest way to update your address. Changes are applied immediately to your CRA account.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="bg-[#e3f2fd] rounded-[10px] border-l-4 border-[#007AFF] p-3">
                    <p className="text-[#3c3c43] text-[15px] m-0">
                      <strong className="text-black">Tip:</strong> When you update your address in My Account, it automatically updates your address for income tax, GST/HST credit, and benefit programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[10px] mb-3 p-4">
              <div className="flex items-start gap-3">
                <Phone className="h-6 w-6 text-[#007AFF] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-black text-[20px] m-0 mb-2">By phone</h3>
                  <p className="text-[#3c3c43] text-[17px] m-0 mb-2">
                    Call the CRA to update your address over the phone.
                  </p>
                  <div className="bg-[#f2f2f7] rounded-[10px] p-3">
                    <p className="text-black text-[15px] m-0 mb-2">
                      Individual tax enquiries:
                    </p>
                    <p className="text-[#3c3c43] text-[15px] m-0 mb-2">
                      CRA Support: 1-800-959-8281
                    </p>
                    <p className="text-[#3c3c43] text-[15px] m-0">
                      <span className="text-black">Hours:</span> Monday to Friday, 8:00 AM - 8:00 PM (ET)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[10px] mb-3 p-4">
              <div className="flex items-start gap-3">
                <Mail className="h-6 w-6 text-[#007AFF] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-black text-[20px] m-0 mb-2">By mail</h3>
                  <p className="text-[#3c3c43] text-[17px] m-0 mb-2">
                    Send a signed written request with your name, old address, new address, SIN, and date to your tax centre.
                  </p>
                  <p className="text-[#3c3c43] text-[15px] m-0">
                    Find your tax centre address at canada.ca/cra-tax-centres
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[10px] p-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-[#007AFF] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-black text-[20px] m-0 mb-2">Through your tax return</h3>
                  <p className="text-[#3c3c43] text-[17px] m-0">
                    You can update your address when you file your next income tax return. However, this method may result in a delay, so it's recommended to update it as soon as possible using one of the other methods.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">What gets updated?</h2>
            <div className="bg-white rounded-[10px] p-4">
              <p className="text-[#3c3c43] text-[17px] m-0 mb-3">
                When you update your address with the CRA, it automatically updates your address for:
              </p>
              <ul className="list-none m-0 p-0 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] flex-shrink-0 mt-1">•</span>
                  <span className="text-[#3c3c43] text-[17px]">Income tax</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] flex-shrink-0 mt-1">•</span>
                  <span className="text-[#3c3c43] text-[17px]">GST/HST credit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] flex-shrink-0 mt-1">•</span>
                  <span className="text-[#3c3c43] text-[17px]">Canada Child Benefit (CCB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007AFF] flex-shrink-0 mt-1">•</span>
                  <span className="text-[#3c3c43] text-[17px]">Other benefit and credit programs</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Moving outside of Canada?</h2>
            <div className="bg-white rounded-[10px] p-4">
              <p className="text-[#3c3c43] text-[17px] m-0 mb-3">
                If you're moving outside of Canada, you need to notify the CRA. Your tax obligations may change depending on your residency status.
              </p>
              <p className="text-[#3c3c43] text-[17px] m-0 mb-3">
                Use Form NR73 (Determination of Residency Status) to determine if you're considered a resident or non-resident of Canada for tax purposes.
              </p>
              <div className="bg-[#fff9e6] rounded-[10px] border-l-4 border-[#ffcc00] p-3">
                <p className="text-[#3c3c43] text-[15px] m-0">
                  <strong className="text-black">Note:</strong> Even if you move abroad, you may still have Canadian tax obligations. Contact the CRA or visit canada.ca/taxes-international for more information.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">Verify your address change</h3>
            <p className="text-[#3c3c43] text-[17px] m-0 mb-2">
              After updating your address:
            </p>
            <ul className="list-none m-0 p-0 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#007AFF] flex-shrink-0 mt-1">•</span>
                <span className="text-[#3c3c43] text-[17px]">Check your My Account to confirm the change</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#007AFF] flex-shrink-0 mt-1">•</span>
                <span className="text-[#3c3c43] text-[17px]">Allow up to 2 weeks for the change to take effect if submitted by mail</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#007AFF] flex-shrink-0 mt-1">•</span>
                <span className="text-[#3c3c43] text-[17px]">Contact the CRA if you don't receive expected mail at your new address</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}