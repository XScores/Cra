import { HeaderMaster } from '../HeaderMaster';
import { Card } from '../ui/card';
import { Mail, AlertCircle, CheckCircle2, Info, ChevronRight, ChevronLeft } from 'lucide-react';
import { Badge } from '../ui/badge';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

const messages = [
  {
    title: 'Notice of Assessment Available',
    preview: 'Your 2024 tax return has been assessed. View your Notice of Assessment for details on your refund or balance.',
    date: 'Oct 8, 2026',
    time: '10:30 AM',
    unread: true,
    priority: 'high',
    icon: AlertCircle,
    iconColor: 'text-[#ff3b30]',
    iconBg: 'bg-[#ff3b30] bg-opacity-10',
  },
  {
    title: 'Payment Reminder',
    preview: 'Your payment of $1,250.00 is due on Apr 30, 2026. You can set up a payment arrangement to avoid interest charges.',
    date: 'Oct 5, 2025',
    time: '2:15 PM',
    unread: true,
    priority: 'medium',
    icon: Info,
    iconColor: 'text-[#007AFF]',
    iconBg: 'bg-[#007AFF] bg-opacity-10',
  },
  {
    title: 'Direct Deposit Information Updated',
    preview: 'Your direct deposit information has been successfully updated. Future payments will be deposited to the new account.',
    date: 'Oct 3, 2025',
    time: '4:45 PM',
    unread: false,
    priority: 'low',
    icon: CheckCircle2,
    iconColor: 'text-[#28a745]',
    iconBg: 'bg-[#28a745] bg-opacity-10',
  },
  {
    title: 'Tax Return Received',
    preview: 'We have received your 2024 tax return filed on Mar 15, 2026. You will receive a Notice of Assessment within 2 weeks.',
    date: 'Sep 28, 2026',
    time: '11:20 AM',
    unread: false,
    priority: 'low',
    icon: CheckCircle2,
    iconColor: 'text-[#28a745]',
    iconBg: 'bg-[#28a745] bg-opacity-10',
  },
  {
    title: 'Benefits Payment Schedule',
    preview: 'Your Canada Child Benefit payment schedule for October-December 2025 is now available in your account.',
    date: 'Sep 20, 2025',
    time: '9:00 AM',
    unread: false,
    priority: 'low',
    icon: Info,
    iconColor: 'text-[#007AFF]',
    iconBg: 'bg-[#007AFF] bg-opacity-10',
  },
];

interface MessagesScreenProps {
  onViewMail?: () => void;
  onNavigateHome?: () => void;
  onLogoClick?: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onUserFeedback?: () => void;
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
  onRemittanceVoucher?: () => void;
  onBecomeRepresentative?: () => void;
  onBecomeRepresentativeAsRep?: () => void;
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

export function MessagesScreen({ onViewMail, onNavigateHome, onLogoClick, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onUserFeedback, hasUnreadMail, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onBecomeRepresentative, onBecomeRepresentativeAsRep, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments }: MessagesScreenProps) {
  const unreadCount = messages.filter(m => m.unread).length;

  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      {/* Header with integrated menu */}
      <HeaderMaster 
        title="My Account"
        largeTitle={true}
        showSearch={true}
        showMenu={true}
        onNavigateHome={onNavigateHome}
        onLogoClick={onLogoClick}
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
        onUserFeedback={onUserFeedback}
        onViewRefundDetails={onViewRefundDetails}
        onViewNoticeOfAssessment={onViewNoticeOfAssessment}
        onGSTHSTCredit={onGSTHSTCredit}
        onAccountDetails={onAccountDetails}
        onProfile={onProfile}
        onViewTaxReturns={onViewTaxReturns}
        onHomeBuyersPlan={onHomeBuyersPlan}
        onFHSAEligibility={onFHSAEligibility}
        onLifelongLearningPlan={onLifelongLearningPlan}
        onCustomize={onCustomize}
        onUncashedCheques={onUncashedCheques}
        onRemittanceVoucher={onRemittanceVoucher}
        onBecomeRepresentative={onBecomeRepresentative}
        onBecomeRepresentativeAsRep={onBecomeRepresentativeAsRep}
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
        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateHome}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">CRA Mail</h1>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Unread Count Header */}
        <div className="px-4 pb-3 bg-[#f2f2f7]">
          <div className="flex items-center justify-between">
            <p className="text-gray-ios text-[15px] m-0">
              {unreadCount} unread message{unreadCount !== 1 ? 's' : ''}
            </p>
            <button className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity">
              Mark all as read
            </button>
          </div>
        </div>

        {/* Messages List */}
        <div className="px-4 pb-4 space-y-3">
          {messages.map((message, index) => (
            <button
              key={index}
              className={`card-ios p-4 w-full text-left hover:opacity-70 active:opacity-50 transition-opacity border-0 ${
                message.unread ? 'border-l-4 border-l-[#007AFF]' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`${message.iconBg} rounded-[10px] p-2.5 flex-shrink-0`}>
                  <message.icon className={`h-5 w-5 ${message.iconColor}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-[17px] font-semibold text-black m-0">
                          {message.title}
                        </h4>
                        {message.unread && (
                          <div className="w-2 h-2 bg-[#007AFF] rounded-full flex-shrink-0"></div>
                        )}
                      </div>
                      <p className="text-gray-ios text-[15px] m-0 line-clamp-2">
                        {message.preview}
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-[#c7c7cc] flex-shrink-0 mt-1" />
                  </div>
                  
                  <div className="flex items-center gap-2 text-[13px] text-gray-ios">
                    <span>{message.date}</span>
                    <span>•</span>
                    <span>{message.time}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Compose Message */}
        <div className="px-4 mt-1">
          <div className="card-ios p-4 border-2 border-dashed border-[#c7c7cc]">
            <div className="border-l-4 border-[#007AFF] pl-4 py-2">
              <h3 className="text-[17px] font-semibold text-black mb-2">Need to contact CRA?</h3>
              <p className="text-gray-ios text-[15px] m-0 mb-4">
                Send a secure message to the Canada Revenue Agency
              </p>
              <button className="btn-filled-ios w-full text-center">
                Compose message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}