import { HeaderMaster } from '../HeaderMaster';
import { HamburgerMenu } from '../HamburgerMenu';
import { Card } from '../ui/card';
import { Send, CheckCircle2, Mail, PenSquare, X, Archive, ChevronRight, ChevronLeft, Gift, CreditCard, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { Badge } from '../ui/badge';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

export interface SentMessage {
  id: string;
  to: string;
  subject: string;
  message: string;
  dateSent: string;
  timeSent: string;
  category?: 'notice' | 'benefit' | 'payment' | 'reminder' | 'general' | 'saved';
}

interface SentMessagesScreenProps {
  onBack: () => void;
  onNavigateHome?: () => void;
  onViewMail?: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  sentMessages: SentMessage[];
  onCompose?: () => void;
  onArchiveMessage?: (messageId: string) => void;
  onViewArchive?: () => void;
  archivedCount?: number;
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

export function SentMessagesScreen({ 
  onBack, 
  onNavigateHome, 
  onViewMail,
  onFileTaxes, 
  onMakePayment, 
  onBenefitsAndCredits,
  onRegisteredPlans, 
  onHelp, 
  onSignOut, 
  onTaxSlips,
  onProofOfIncome,
  sentMessages,
  onCompose,
  onArchiveMessage,
  onViewArchive,
  archivedCount = 0,
  onViewRefundDetails,
  onViewNoticeOfAssessment,
  onGSTHSTCredit,
  onAccountDetails,
  onProfile,
  onViewTaxReturns,
  onHomeBuyersPlan,
  onFHSAEligibility,
  onLifelongLearningPlan,
  onCustomize,
  onUncashedCheques,
  onBecomeRepresentative,
  onBecomeRepresentativeAsRep,
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
}: SentMessagesScreenProps) {
  const [selectedMessage, setSelectedMessage] = useState<SentMessage | null>(null);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'notice' | 'benefit' | 'payment' | 'saved'>('all');
  const [showMenu, setShowMenu] = useState(false);

  // Default menu items
  const defaultMenuItems = [
    { icon: Send, label: 'File taxes', id: 'file-taxes', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onFileTaxes) onFileTaxes(); } },
    { icon: Gift, label: 'Benefits & credits', id: 'benefits-credits', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onBenefitsAndCredits) onBenefitsAndCredits(); } },
    { icon: CreditCard, label: 'Make a payment', id: 'make-payment', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onMakePayment) onMakePayment(); } },
    { icon: Mail, label: 'CRA mail', id: 'mail', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onViewMail) onViewMail(); } },
    { icon: null, label: 'Registered plans', id: 'registered-plans', type: 'image' as const, imageSrc: mapleLeafIcon, onClick: () => { setShowMenu(false); if (onRegisteredPlans) onRegisteredPlans(); } },
    { icon: Receipt, label: 'Tax slips and documents', id: 'tax-slips', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onTaxSlips) onTaxSlips(); } },
    { icon: FileCheck, label: 'Proof of income', id: 'proof-income', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onProofOfIncome) onProofOfIncome(); } },
    { icon: HelpCircle, label: 'Help and support', id: 'help', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onHelp) onHelp(); } },
    { icon: LogOut, label: 'Sign out and exit', id: 'sign-out', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onSignOut) onSignOut(); }, danger: true },
  ];

  useEffect(() => {
    setPortalContainer(document.getElementById('iphone-screen'));
  }, []);

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'notice': return 'bg-[#ff3b30]';
      case 'benefit': return 'bg-[#28a745]';
      case 'payment': return 'bg-[#007AFF]';
      case 'reminder': return 'bg-[#ff9500]';
      case 'saved': return 'bg-[#5856d6]';
      default: return 'bg-[#8e8e93]';
    }
  };

  const getCategoryLabel = (category?: string) => {
    switch (category) {
      case 'notice': return 'Notice';
      case 'benefit': return 'Benefit';
      case 'payment': return 'Payment';
      case 'reminder': return 'Reminder';
      default: return 'General';
    }
  };

  const filteredMessages = selectedCategory === 'all' 
    ? sentMessages 
    : selectedCategory === 'saved'
    ? sentMessages.filter(m => m.category === 'saved')
    : sentMessages.filter(m => m.category === selectedCategory);

  // Disable scrolling when message dialog is open or menu is open
  useEffect(() => {
    if (selectedMessage || showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedMessage, showMenu]);

  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      <HeaderMaster 
        title="My Account"
        largeTitle={true}
        showSearch={true}
        showMenu={true}
        onNavigateHome={onNavigateHome}
        onLogoClick={onNavigateHome}
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
        onLifelongLearningPlan={onLifelongLearningPlan}
        onCustomize={onCustomize}
        onUncashedCheques={onUncashedCheques}
        onBecomeRepresentative={onBecomeRepresentative}
        onBecomeRepresentativeAsRep={onBecomeRepresentativeAsRep}
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
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">CRA mail - Sent items</h1>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Mail Action Buttons */}
        <div className="px-4 pb-3">
          <div className="flex gap-2 justify-between">
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onBack();
              }}
              className="flex-1 flex flex-col items-center gap-1 py-3 bg-white rounded-[10px] border-0 text-[#007AFF] hover:opacity-70 active:opacity-50 transition-opacity"
            >
              <Mail className="h-6 w-6" />
              <span className="text-[11px] text-black">Inbox</span>
            </button>
            <div className="flex-1 flex flex-col items-center gap-1 py-3 bg-[#007AFF]/10 rounded-[10px] border-2 border-[#007AFF]">
              <Send className="h-6 w-6 text-[#007AFF]" />
              <span className="text-[11px] text-[#007AFF] font-semibold">{sentMessages.length} Sent</span>
            </div>
            <button 
              type="button"
              onClick={onViewArchive}
              className="flex-1 flex flex-col items-center gap-1 py-3 bg-white rounded-[10px] border-0 text-[#007AFF] hover:opacity-70 active:opacity-50 transition-opacity"
            >
              <Archive className="h-6 w-6" />
              <span className="text-[11px] text-black">{archivedCount} Archive</span>
            </button>
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (onCompose) onCompose();
              }}
              className="flex-1 flex flex-col items-center gap-1 py-3 bg-white rounded-[10px] border-0 text-[#007AFF] hover:opacity-70 active:opacity-50 transition-opacity"
              aria-label="Compose new message"
            >
              <PenSquare className="h-6 w-6" />
              <span className="text-[11px] text-black">Compose</span>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="px-4 pb-3">
          <div className="flex gap-2 overflow-x-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-[14px] transition-all border-0 rounded-full whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-[#007AFF] text-white'
                  : 'bg-white text-black hover:opacity-70'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory('notice')}
              className={`px-4 py-2 text-[14px] transition-all border-0 rounded-full whitespace-nowrap ${
                selectedCategory === 'notice'
                  ? 'bg-[#007AFF] text-white'
                  : 'bg-white text-black hover:opacity-70'
              }`}
            >
              Notices
            </button>
            <button
              onClick={() => setSelectedCategory('benefit')}
              className={`px-4 py-2 text-[14px] transition-all border-0 rounded-full whitespace-nowrap ${
                selectedCategory === 'benefit'
                  ? 'bg-[#007AFF] text-white'
                  : 'bg-white text-black hover:opacity-70'
              }`}
            >
              Benefits
            </button>
            <button
              onClick={() => setSelectedCategory('payment')}
              className={`px-4 py-2 text-[14px] transition-all border-0 rounded-full whitespace-nowrap ${
                selectedCategory === 'payment'
                  ? 'bg-[#007AFF] text-white'
                  : 'bg-white text-black hover:opacity-70'
              }`}
            >
              Payments
            </button>
            <button
              onClick={() => setSelectedCategory('saved')}
              className={`px-4 py-2 text-[14px] transition-all border-0 rounded-full whitespace-nowrap ${
                selectedCategory === 'saved'
                  ? 'bg-[#007AFF] text-white'
                  : 'bg-white text-black hover:opacity-70'
              }`}
            >
              Chats
            </button>
          </div>
        </div>

        {/* Messages List */}
        <div className="px-4 pb-4">
          {filteredMessages.length === 0 ? (
            <div className="card-ios p-6 text-center border-l-4 border-[#007AFF]">
              <Send className="h-12 w-12 text-[#c7c7cc] mx-auto mb-3" />
              <p className="text-[#6e6e73] text-[14px] m-0">No sent messages</p>
            </div>
          ) : (
            <div className="space-y-1">
              {filteredMessages.map((message, index) => (
                <div
                  key={message.id}
                  className="card-ios border-l-4 border-[#007AFF] relative"
                >
                  <button
                    onClick={() => setSelectedMessage(message)}
                    className="w-full text-left bg-transparent border-0 p-4 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors"
                  >
                    <div className="flex items-start gap-3 pr-8">
                      <div className="flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-5 w-5 text-[#007AFF]" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-black text-[17px] m-0 mb-0.5">
                          Subject: {message.subject || '(No subject)'}
                        </h3>
                        <p className="text-[#6e6e73] text-[14px] m-0 mb-1">
                          To: {message.to}
                        </p>
                        <div className="flex items-center gap-2 flex-wrap mt-1">
                          <span className="px-2 py-0.5 text-[11px] rounded-full bg-[#007AFF] text-white">
                            Sent
                          </span>
                          {message.category && (
                            <span className={`px-2 py-0.5 text-[11px] rounded-full ${getCategoryColor(message.category)} text-white`}>
                              {getCategoryLabel(message.category)}
                            </span>
                          )}
                          <span className="text-[#6e6e73] text-[13px]">{message.dateSent}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onArchiveMessage) {
                        onArchiveMessage(message.id);
                      }
                    }}
                    className="absolute top-3 right-3 p-2 text-[#007AFF] hover:opacity-70 active:opacity-50 bg-transparent border-0 transition-opacity"
                    aria-label="Archive message"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Message Detail Dialog */}
      {selectedMessage && portalContainer && createPortal(
        <div className="absolute inset-0 z-[100] flex items-start justify-center p-4 bg-black/50">
          <div 
            className="bg-white w-[calc(100%-20px)] max-w-[500px] shadow-lg border-l-4 border-l-[#2d8a3e] flex flex-col mt-4"
            style={{ 
              height: 'calc(100% - 140px)'
            }}
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-[#e1e4e7] relative bg-white flex-shrink-0">
              <h2 className="text-[#26374a] m-0 pr-8">Message</h2>
              <button 
                onClick={() => setSelectedMessage(null)}
                className="absolute top-4 right-4 text-[#333333] hover:text-[#af3c43] bg-transparent border-0 p-0"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Message Content */}
            <div className="px-6 py-4 flex-1 overflow-y-auto">
              {/* From */}
              <div className="mb-2 pb-2 border-b border-[#e1e4e7]">
                <div className="flex gap-3">
                  <span className="text-[#333333] text-[14px] min-w-[60px]">From:</span>
                  <span className="text-[#26374a] text-[14px]">Jonathan Rath</span>
                </div>
              </div>

              {/* To */}
              <div className="mb-2 pb-2 border-b border-[#e1e4e7]">
                <div className="flex gap-3">
                  <span className="text-[#333333] text-[14px] min-w-[60px]">To:</span>
                  <span className="text-[#26374a] text-[14px]">{selectedMessage.to}</span>
                </div>
              </div>

              {/* Subject */}
              <div className="mb-2 pb-2 border-b border-[#e1e4e7]">
                <div className="flex gap-3">
                  <span className="text-[#333333] text-[14px] min-w-[60px]">Subject:</span>
                  <span className="text-[#26374a] text-[14px]">{selectedMessage.subject || '(No subject)'}</span>
                </div>
              </div>

              {/* Date/Time */}
              <div className="mb-2 pb-2 border-b border-[#e1e4e7]">
                <div className="flex gap-3">
                  <span className="text-[#333333] text-[14px] min-w-[60px]">Date:</span>
                  <span className="text-[#26374a] text-[14px]">{selectedMessage.dateSent} at {selectedMessage.timeSent}</span>
                </div>
              </div>

              {/* Message Body */}
              <div className="mb-4">
                <p className="text-[#26374a] text-[14px] m-0 whitespace-pre-wrap">
                  {selectedMessage.message}
                </p>
              </div>

              {/* Sent Badge */}
              <div className="mt-6">
                <Badge className="bg-[#2d8a3e] text-white border-0 hover:bg-[#2d8a3e] rounded-none px-3 py-1 text-[12px]">
                  ✓ Sent successfully
                </Badge>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-[#e1e4e7] bg-white flex-shrink-0">
              <button 
                onClick={() => setSelectedMessage(null)}
                className="w-full bg-[#26374a] hover:bg-[#335075] active:bg-[#1e2938] text-white border-0 px-4 py-3 text-[14px] transition-colors text-center"
              >
                Close
              </button>
            </div>
          </div>
        </div>,
        portalContainer
      )}

      {/* Hamburger Menu */}
      <HamburgerMenu 
        isOpen={showMenu}
        onClose={() => setShowMenu(false)}
        menuItems={defaultMenuItems}
      />
    </div>
  );
}