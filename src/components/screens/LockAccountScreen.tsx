import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, Lock, Smartphone, AlertCircle, Shield, Key, Monitor, Tablet } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { Switch } from '../ui/switch';

interface LockAccountScreenProps {
  onBack: () => void;
  onChangePassword?: () => void;
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
  onLifelongLearningPlan?: () => void;
  onCustomize?: () => void;
  onUncashedCheques?: () => void;
  onBecomeRepresentative?: () => void;
  onBecomeRepresentativeAsRep?: () => void;
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

export function LockAccountScreen({
  onBack,
  onChangePassword,
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
}: LockAccountScreenProps) {
  const [isLocked, setIsLocked] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [macbookEnabled, setMacbookEnabled] = useState(true);
  const [ipadEnabled, setIpadEnabled] = useState(true);
  const [desktopEnabled, setDesktopEnabled] = useState(false);

  const handleLockOtherDevices = () => {
    setShowConfirmDialog(true);
  };

  const confirmLockDevices = () => {
    setIsLocked(true);
    setMacbookEnabled(false);
    setIpadEnabled(false);
    setDesktopEnabled(false);
    setShowConfirmDialog(false);
    toast.success('All other devices have been locked out');
  };

  const cancelLockDevices = () => {
    setShowConfirmDialog(false);
  };

  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      <HeaderMaster 
        title="Security"
        largeTitle={true}
        showSearch={true}
        showMenu={true}
        onNavigateHome={onNavigateHome}
        onLogoClick={onNavigateHome}
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

      <div className="flex-1 overflow-y-auto">
        {/* Page Title with Back Button */}
        <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={3} />
            </button>
            <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Lock account</h1>
          </div>
        </div>

        {/* Combined Security Alert and Lock Devices */}
        <div className="px-4 pb-3">
          <div className="card-ios overflow-hidden">
            <div className="p-4">
              <div className="flex gap-3 mb-4">
                <AlertCircle className="h-5 w-5 text-[#FF9500] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-black text-[17px] font-semibold mb-2">
                    Concerned about fraud or unauthorized access?
                  </div>
                  <div className="text-gray-ios text-[15px] leading-[1.4]">
                    If you suspect someone may have access to your account, you can lock out all other devices immediately and secure your account.
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Shield className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-black text-[17px] font-semibold mb-2">
                    Lock out all other devices
                  </div>
                  <div className="text-gray-ios text-[15px] leading-[1.4] mb-3">
                    This will immediately sign out and lock all devices accessing your CRA account except this phone. You'll need to verify your identity on those devices to sign in again.
                  </div>
                  {isLocked && (
                    <div className="bg-[#34C759]/10 border border-[#34C759] rounded-lg p-3 mb-3">
                      <div className="flex items-start gap-2">
                        <Shield className="h-4 w-4 text-[#34C759] flex-shrink-0 mt-0.5" />
                        <div className="text-[#34C759] text-[15px] font-medium">
                          All other devices have been locked out
                        </div>
                      </div>
                    </div>
                  )}
                  <button
                    onClick={handleLockOtherDevices}
                    disabled={isLocked}
                    className={`w-full py-3 rounded-lg font-semibold text-[17px] transition-all ${
                      isLocked 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-[#FF3B30] text-white active:bg-[#FF3B30]/80'
                    }`}
                  >
                    {isLocked ? 'Devices Locked' : 'Lock All Other Devices'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Device Info */}
        <div className="section-header-ios">
          Current device
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#007AFF] flex items-center justify-center flex-shrink-0">
                <Smartphone className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-black text-[17px] font-semibold mb-1">
                  iPhone 14 Pro
                </div>
                <div className="text-gray-ios text-[15px]">
                  This device will remain active
                </div>
                <div className="text-gray-ios text-[13px] mt-1">
                  Last active: Just now
                </div>
              </div>
              <div className="flex items-center gap-1 text-[#34C759] text-[13px] font-semibold">
                <div className="w-2 h-2 rounded-full bg-[#34C759]" />
                Active
              </div>
            </div>
          </div>
        </div>

        {/* Trusted Devices */}
        <div className="section-header-ios">
          Trusted devices
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios overflow-hidden">
            {/* MacBook Pro */}
            <div className="list-item-ios flex items-center justify-between px-4 py-3">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <Monitor className="h-5 w-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="text-black text-[17px] font-semibold mb-1">
                    MacBook Pro
                  </div>
                  <div className="text-gray-ios text-[13px]">
                    Last active: 2 hours ago
                  </div>
                </div>
              </div>
              <Switch 
                checked={macbookEnabled} 
                onCheckedChange={setMacbookEnabled}
                disabled={isLocked}
              />
            </div>

            {/* iPad Air */}
            <div className="list-item-ios flex items-center justify-between px-4 py-3">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <Tablet className="h-5 w-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="text-black text-[17px] font-semibold mb-1">
                    iPad Air
                  </div>
                  <div className="text-gray-ios text-[13px]">
                    Last active: Yesterday
                  </div>
                </div>
              </div>
              <Switch 
                checked={ipadEnabled} 
                onCheckedChange={setIpadEnabled}
                disabled={isLocked}
              />
            </div>

            {/* Desktop PC */}
            <div className="list-item-ios flex items-center justify-between px-4 py-3">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <Monitor className="h-5 w-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="text-black text-[17px] font-semibold mb-1">
                    Desktop PC
                  </div>
                  <div className="text-gray-ios text-[13px]">
                    Last active: 3 days ago
                  </div>
                </div>
              </div>
              <Switch 
                checked={desktopEnabled} 
                onCheckedChange={setDesktopEnabled}
                disabled={isLocked}
              />
            </div>
          </div>
        </div>

        {/* Additional Security Steps */}
        <div className="section-header-ios">
          Additional security steps
        </div>
        <div className="px-4 pb-6">
          <div className="card-ios overflow-hidden">
            <div className="p-4 border-b border-[#E5E5EA]">
              <div className="flex gap-3 mb-3">
                <Key className="h-5 w-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-black text-[17px] font-semibold mb-2">
                    Change your password
                  </div>
                  <div className="text-gray-ios text-[15px] leading-[1.4] mb-3">
                    If you're concerned about unauthorized access, we strongly recommend changing your password immediately.
                  </div>
                  <button
                    onClick={onChangePassword}
                    className="w-full py-3 rounded-lg font-semibold text-[17px] bg-[#007AFF] text-white active:bg-[#007AFF]/80 transition-all"
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="text-gray-ios text-[15px] leading-[1.4]">
                <div className="font-semibold text-black mb-2">What happens next?</div>
                <ul className="space-y-2 list-disc pl-5">
                  <li>All other devices will be signed out immediately</li>
                  <li>You'll receive an email notification about this security action</li>
                  <li>Other devices will need to verify identity to sign in again</li>
                  <li>Consider enabling two-step verification for added security</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Help Information */}
        <div className="px-4 pb-6">
          <div className="card-ios p-4">
            <div className="text-gray-ios text-[15px] leading-[1.4]">
              <div className="font-semibold text-black mb-2">Need more help?</div>
              <div>
                If you suspect fraudulent activity or need additional assistance securing your account, please contact CRA immediately at 1-800-959-8281.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirm Lock Devices Dialog */}
      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[14px] w-full max-w-[300px] overflow-hidden">
            {/* Dialog Header */}
            <div className="p-4 text-center border-b border-[#E5E5EA]">
              <div className="text-black text-[17px] font-semibold">
                Confirmation
              </div>
            </div>

            {/* Dialog Content */}
            <div className="p-4">
              <div className="text-gray-ios text-[15px] leading-[1.4]">
                <div className="font-semibold text-black mb-3">What happens next?</div>
                <ul className="space-y-2 list-disc pl-5 text-left">
                  <li>All other devices will be signed out immediately</li>
                  <li>You'll receive an email notification about this security action</li>
                  <li>Other devices will need to verify identity to sign in again</li>
                  <li>Consider enabling two-step verification for added security</li>
                </ul>
              </div>
            </div>

            {/* Dialog Actions */}
            <div className="flex border-t border-[#E5E5EA]">
              <button
                onClick={cancelLockDevices}
                className="flex-1 py-3 text-[17px] text-[#007AFF] font-normal border-r border-[#E5E5EA] active:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmLockDevices}
                className="flex-1 py-3 text-[17px] text-[#FF3B30] font-semibold active:bg-gray-100 transition-colors"
              >
                Lock Devices
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}