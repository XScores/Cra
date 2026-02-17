import { HeaderMaster } from '../HeaderMaster';
import { Card } from '../ui/card';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Shield, 
  Bell, 
  Globe, 
  ChevronRight,
  ChevronLeft,
  LogOut,
  CreditCard,
  FileText,
  Landmark,
  LayoutGrid,
  Users,
  Key,
  Baby,
  Send,
  Gift,
  Receipt,
  FileCheck,
  HelpCircle,
  Plus,
  Calendar,
  PiggyBank,
  Home,
  GraduationCap,
  BadgeDollarSign,
  Coins,
  TrendingUp,
  Target,
  LockKeyhole,
  Lock,
  Smartphone
} from 'lucide-react';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { Separator } from '../ui/separator';
import { HamburgerMenu } from '../HamburgerMenu';
import { useState, useEffect } from 'react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface ProfileScreenProps {
  onLogout: () => void;
  onEditName: () => void;
  onEditEmail: () => void;
  onEditPhone: () => void;
  onEditAddress: () => void;
  onEditDirectDeposit: () => void;
  onManageCards: () => void;
  onInstalmentPaymentsReminders?: () => void;
  onTwoStepVerification: () => void;
  onChangePassword: () => void;
  onPersonalIdentificationNumber?: () => void;
  onLockAccount?: () => void;
  onTrustedDevices?: () => void;
  onCustomizeHomeScreen?: () => void;
  onLanguagePreference: () => void;
  onPrivacy: () => void;
  onTerms: () => void;
  onHelp: () => void;
  onShowAppVersion?: () => void;
  onViewMail?: () => void;
  onNavigateHome?: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onSpouseDetails?: () => void;
  onChildDetails?: (childName: string) => void;
  onAddDependant?: () => void;
  onBecomeRepresentative?: () => void;
  onBecomeRepresentativeAsRep?: () => void;
  onViewRepresentative?: () => void;
  onHomeBuyersPlan?: () => void;
  onLifelongLearningPlan?: () => void;
  onCustomize?: () => void;
  onUncashedCheques?: () => void;
  onRemittanceVoucher?: () => void;
  hasUnreadMail?: boolean;
  // Search navigation handlers
  onViewRefundDetails?: () => void;
  onViewNoticeOfAssessment?: () => void;
  onGSTHSTCredit?: () => void;
  onAccountDetails?: () => void;
  onProfile?: () => void;
  onViewTaxReturns?: () => void;
  onFHSAEligibility?: () => void;
  onCPPEIRuling?: () => void;
  onAuditEnquiries?: () => void;
  onCarryoverAmounts?: () => void;
  onChangeMyReturn?: () => void;
  onRegisterFormalDispute?: () => void;
  onNonResidentAccount?: () => void;
  onResidencyDetermination?: () => void;
  onProgressTrackerService?: () => void;
  onReliefOfPenalties?: () => void;
  onSubmitDocuments?: () => void;
}

export function ProfileScreen({ 
  onLogout, 
  onEditName, 
  onEditEmail, 
  onEditPhone, 
  onEditAddress, 
  onEditDirectDeposit,
  onManageCards,
  onInstalmentPaymentsReminders,
  onTwoStepVerification,
  onChangePassword,
  onPersonalIdentificationNumber,
  onLockAccount,
  onTrustedDevices,
  onCustomizeHomeScreen,
  onLanguagePreference,
  onPrivacy,
  onTerms,
  onHelp,
  onShowAppVersion,
  onViewMail,
  onNavigateHome,
  onFileTaxes,
  onMakePayment,
  onBenefitsAndCredits,
  onRegisteredPlans,
  onSignOut,
  onTaxSlips,
  onProofOfIncome,
  onSpouseDetails,
  onChildDetails,
  onAddDependant,
  onBecomeRepresentative,
  onBecomeRepresentativeAsRep,
  onViewRepresentative,
  onHomeBuyersPlan,
  onLifelongLearningPlan,
  onCustomize,
  onUncashedCheques,
  onRemittanceVoucher,
  hasUnreadMail = false,
  // Search navigation handlers
  onViewRefundDetails,
  onViewNoticeOfAssessment,
  onGSTHSTCredit,
  onAccountDetails,
  onProfile,
  onViewTaxReturns,
  onFHSAEligibility,
  onCPPEIRuling,
  onAuditEnquiries,
  onCarryoverAmounts,
  onChangeMyReturn,
  onRegisterFormalDispute,
  onNonResidentAccount,
  onResidencyDetermination,
  onProgressTrackerService,
  onReliefOfPenalties,
  onSubmitDocuments
}: ProfileScreenProps) {
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
        onBecomeRepresentative={onBecomeRepresentative}
        onViewRefundDetails={onViewRefundDetails}
        onViewNoticeOfAssessment={onViewNoticeOfAssessment}
        onGSTHSTCredit={onGSTHSTCredit}
        onAccountDetails={onAccountDetails}
        onProfile={onProfile}
        onViewTaxReturns={onViewTaxReturns}
        onHomeBuyersPlan={onHomeBuyersPlan}
        onFHSAEligibility={onFHSAEligibility}
        onCPPEIRuling={onCPPEIRuling}
        onAuditEnquiries={onAuditEnquiries}
        onCarryoverAmounts={onCarryoverAmounts}
        onChangeMyReturn={onChangeMyReturn}
        onRegisterFormalDispute={onRegisterFormalDispute}
        onNonResidentAccount={onNonResidentAccount}
        onResidencyDetermination={onResidencyDetermination}
        onProgressTrackerService={onProgressTrackerService}
        onReliefOfPenalties={onReliefOfPenalties}
        onSubmitDocuments={onSubmitDocuments}
        onLifelongLearningPlan={onLifelongLearningPlan}
        onCustomize={onCustomize}
        onUncashedCheques={onUncashedCheques}
        onRemittanceVoucher={onRemittanceVoucher}
      />

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateHome}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Profile</h1>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Personal Information */}
        <div className="section-header-ios">
          Edit Personal Information
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios overflow-hidden">
            <button onClick={onEditName} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-1">Name</div>
                  <div className="text-gray-ios text-[15px]">Jonathan Rath (SIN: ***-***-456)</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </div>
            </button>

            <button onClick={onEditEmail} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-1">Email address</div>
                  <div className="text-gray-ios text-[15px]">jonathan.rath@email.com</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </div>
            </button>
            
            <button onClick={onEditPhone} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-1">Phone numbers</div>
                  <div className="text-gray-ios text-[15px]">(555) 123-4567</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </div>
            </button>
            
            <button onClick={onEditAddress} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-1">Mailing address</div>
                  <div className="text-gray-ios text-[15px]">123 Main Street, Toronto, ON M5H 2N2</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Family Information */}
        <div className="section-header-ios">
          Edit Family Information
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios overflow-hidden">
            <button onClick={onSpouseDetails} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-1">Spouse</div>
                  <div className="text-gray-ios text-[15px]">Michelle Rath (SIN: ***-***-789)</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </div>
            </button>

            <button onClick={() => onChildDetails?.('Emma Rath')} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3">
                <Baby className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-1">Child</div>
                  <div className="text-gray-ios text-[15px]">Emma Rath (Age 8, SIN: ***-***-234)</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </div>
            </button>

            <button onClick={() => onChildDetails?.('Lucas Rath')} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3">
                <Baby className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-1">Child</div>
                  <div className="text-gray-ios text-[15px]">Lucas Rath (Age 5, SIN: ***-***-567)</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </div>
            </button>

            <button onClick={onAddDependant} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3">
                <Plus className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <span className="text-[#007AFF] text-[17px]">Add new dependant</span>
              </div>
            </button>
          </div>
        </div>

        {/* Direct Deposit and Payments */}
        <div className="section-header-ios">
          Edit Direct Deposit, Payments and Reminders
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios overflow-hidden">
            <button onClick={onEditDirectDeposit} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3">
                <Landmark className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-1">Direct deposit</div>
                  <div className="text-gray-ios text-[15px]">Bank account ending in ****4567</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </div>
            </button>

            <button onClick={onManageCards} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-1">Credit or Debit cards</div>
                  <div className="text-gray-ios text-[15px]">Manage your payment cards</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </div>
            </button>

            <button onClick={onInstalmentPaymentsReminders} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-1">Instalment payments</div>
                  <div className="text-gray-ios text-[15px]">Schedule payments and alerts</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Representatives */}
        <div className="section-header-ios">
          Representatives
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios overflow-hidden">
            <button 
              onClick={onViewRepresentative} 
              className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-1">Current Representative</div>
                  <div className="text-gray-ios text-[15px]">H&R Block</div>
                  <div className="text-gray-ios text-[15px]">John Smith, RepID INDA2K5P</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </div>
            </button>

            <button onClick={onBecomeRepresentative} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3">
                <Plus className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <span className="text-[#007AFF] text-[17px]">Authorize a representative</span>
              </div>
            </button>

            <button onClick={onBecomeRepresentativeAsRep} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3">
                <Plus className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <span className="text-[#007AFF] text-[17px]">Become a representative as rep</span>
              </div>
            </button>
          </div>
        </div>

        {/* Registered Plans */}
        <div className="section-header-ios">
          Registered plans
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios overflow-hidden">
            <button onClick={onRegisteredPlans} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-1">RRSP</div>
                  <div className="text-gray-ios text-[15px]">Registered Retirement Savings Plan</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </div>
            </button>

            <button onClick={onRegisteredPlans} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3">
                <Coins className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-1">TFSA</div>
                  <div className="text-gray-ios text-[15px]">Tax-Free Savings Account</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </div>
            </button>

            <button onClick={onRegisteredPlans} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0 w-5 h-5">
                  <GraduationCap className="h-5 w-5 text-[#007AFF] absolute top-0 left-0" />
                  <Baby className="h-3.5 w-3.5 text-[#007AFF] absolute -bottom-1 left-1/2 -translate-x-1/2" />
                </div>
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-1">RESP</div>
                  <div className="text-gray-ios text-[15px]">Registered Education Savings Plan</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </div>
            </button>

            <button onClick={onHomeBuyersPlan} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <Home className="h-5 w-5 text-[#007AFF]" />
                  <span className="absolute -top-1 -right-1 text-[#007AFF] text-[10px] font-bold">$</span>
                </div>
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-1">Home Buyers' Plan</div>
                  <div className="text-gray-ios text-[15px]">Withdraw from RRSP for home purchase</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </div>
            </button>

            <button onClick={onRegisteredPlans} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-1">FHSA</div>
                  <div className="text-gray-ios text-[15px]">First Home Savings Account</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </div>
            </button>

            <button onClick={onLifelongLearningPlan} className="list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-1">Lifelong Learning Plan</div>
                  <div className="text-gray-ios text-[15px]">Withdraw from RRSP for education</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Security Settings */}
        <div className="section-header-ios">
          Edit Security Settings
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios overflow-hidden">
            <button onClick={onTwoStepVerification} className="list-item-ios flex items-center justify-between px-4 py-3 w-full hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3 flex-1">
                <Shield className="h-5 w-5 text-[#007AFF]" />
                <div>
                  <div className="text-black text-[17px]">Two-step verification</div>
                  <div className="text-gray-ios text-[15px]">Extra security for your account</div>
                </div>
              </div>
              <div className="chevron-button-ios">
                <ChevronRight />
              </div>
            </button>

            <button onClick={onChangePassword} className="list-item-ios flex items-center justify-between px-4 py-3 w-full hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3 flex-1">
                <LockKeyhole className="h-5 w-5 text-[#007AFF]" />
                <span className="text-black text-[17px]">Change password</span>
              </div>
              <div className="chevron-button-ios">
                <ChevronRight />
              </div>
            </button>

            <button onClick={onPersonalIdentificationNumber} className="list-item-ios flex items-center justify-between px-4 py-3 w-full hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3 flex-1">
                <Key className="h-5 w-5 text-[#007AFF]" />
                <span className="text-black text-[17px]">Personal identification number</span>
              </div>
              <div className="chevron-button-ios">
                <ChevronRight />
              </div>
            </button>

            <button onClick={onLockAccount} className="list-item-ios flex items-center justify-between px-4 py-3 w-full hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3 flex-1">
                <Lock className="h-5 w-5 text-[#007AFF]" />
                <span className="text-black text-[17px]">Lock account & Trusted devices</span>
              </div>
              <div className="chevron-button-ios">
                <ChevronRight />
              </div>
            </button>
          </div>
        </div>

        {/* Preferences */}
        <div className="section-header-ios">
          Preferences
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios overflow-hidden">
            <button onClick={onCustomizeHomeScreen} className="list-item-ios flex items-center justify-between px-4 py-3 w-full hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3 flex-1">
                <LayoutGrid className="h-5 w-5 text-[#007AFF]" />
                <div className="text-left">
                  <div className="text-black text-[17px]">Customize</div>
                  <div className="text-gray-ios text-[15px]">Personalize your dashboard</div>
                </div>
              </div>
              <div className="chevron-button-ios">
                <ChevronRight />
              </div>
            </button>

            <div className="list-item-ios flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-[#007AFF]" />
                <div>
                  <div className="text-black text-[17px]">Email notifications</div>
                  <div className="text-gray-ios text-[15px]">Receive updates about your account</div>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <button onClick={onLanguagePreference} className="list-item-ios flex items-center justify-between px-4 py-3 w-full hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <div className="flex items-center gap-3 flex-1">
                <Globe className="h-5 w-5 text-[#007AFF]" />
                <div className="text-left">
                  <div className="text-black text-[17px]">Language preference</div>
                  <div className="text-gray-ios text-[15px]">English</div>
                </div>
              </div>
              <div className="chevron-button-ios">
                <ChevronRight />
              </div>
            </button>
          </div>
        </div>

        {/* About */}
        <div className="section-header-ios">
          About
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios overflow-hidden">
            <button onClick={onPrivacy} className="list-item-ios flex items-center justify-between px-4 py-3 w-full hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <span className="text-black text-[17px]">Privacy</span>
              <div className="chevron-button-ios">
                <ChevronRight />
              </div>
            </button>
            <button onClick={onTerms} className="list-item-ios flex items-center justify-between px-4 py-3 w-full hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <span className="text-black text-[17px]">Terms and conditions</span>
              <div className="chevron-button-ios">
                <ChevronRight />
              </div>
            </button>
            <button onClick={onHelp} className="list-item-ios flex items-center justify-between px-4 py-3 w-full hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left">
              <span className="text-black text-[17px]">Help and support</span>
              <div className="chevron-button-ios">
                <ChevronRight />
              </div>
            </button>
          </div>
        </div>

        {/* App Version */}
        <div className="mt-6 text-center pb-4">
          <button
            onClick={onShowAppVersion}
            className="text-gray-ios hover:opacity-70 active:opacity-50 bg-transparent border-0 p-0 transition-opacity text-[13px] cursor-pointer"
          >
            CRA My Account for mobile Alpha V1.0.0
          </button>
        </div>
      </div>
    </div>
  );
}