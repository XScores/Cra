import { HeaderMaster } from '../HeaderMaster';
import { Card } from '../ui/card';
import { Mail, MailOpen, X, Archive, ChevronLeft, AlertCircle, PenSquare, Bold, Italic, Underline, Link, Image, Smile, Paperclip, Send } from 'lucide-react';
import { Badge } from '../ui/badge';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Textarea } from '../ui/textarea';
import { IPhoneKeyboard } from '../IPhoneKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface CRAMailScreenProps {
  onBack: () => void;
  onArchive?: (message: MailMessage) => void;
  onArchiveMessage?: (message: MailMessage) => void;
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
  onSendMessage?: (message: { to: string; subject: string; body: string; dateSent: string; timeSent: string }) => void;
  onViewNoticeOfAssessment?: () => void;
  noticeOfAssessmentRead?: boolean;
  onMarkNoticeAsRead?: () => void;
  hasSavedChat?: boolean;
  showComposeOnMount?: boolean;
  onViewSentMessages?: () => void;
  sentMessagesCount?: number;
  onViewArchive?: () => void;
  archivedCount?: number;
  initialComposeTo?: string;
  initialComposeSubject?: string;
  onMessageSentWhenNotLoggedIn?: () => void;
  hasUnreadMail?: boolean;
  onViewAllBenefits?: () => void;
  onViewRefundDetails?: () => void;
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
  onUserFeedback?: () => void;
}

export interface MailMessage {
  id: string;
  subject: string;
  date: string;
  isRead: boolean;
  hasAttachment: boolean;
  category: 'notice' | 'benefit' | 'payment' | 'reminder' | 'general' | 'saved';
  isSaved?: boolean;
}

const mailMessages: MailMessage[] = [
  {
    id: '1',
    subject: '2025 Notice of Assessment Available',
    date: 'Oct 15, 2025',
    isRead: false,
    hasAttachment: true,
    category: 'notice'
  },
  {
    id: '2',
    subject: 'Payment Received - Account Updated',
    date: 'Oct 10, 2025',
    isRead: true,
    hasAttachment: false,
    category: 'payment'
  },
  {
    id: '3',
    subject: 'Balance Owing Reminder',
    date: 'Sep 28, 2025',
    isRead: true,
    hasAttachment: false,
    category: 'reminder'
  },
  {
    id: '4',
    subject: 'Canada Child Benefit Payment Schedule Updated',
    date: 'Sep 15, 2025',
    isRead: true,
    hasAttachment: false,
    category: 'benefit'
  },
  {
    id: '5',
    subject: 'GST/HST Credit Payment Issued',
    date: 'Jul 5, 2025',
    isRead: true,
    hasAttachment: false,
    category: 'benefit'
  },
  {
    id: '6',
    subject: 'Important: File Your 2024 Tax Return',
    date: 'Apr 15, 2026',
    isRead: true,
    hasAttachment: false,
    category: 'reminder'
  },
  {
    id: '7',
    subject: 'Refund Processed - Direct Deposit Confirmation',
    date: 'Mar 12, 2025',
    isRead: true,
    hasAttachment: true,
    category: 'payment'
  },
  {
    id: '8',
    subject: '2023 Notice of Assessment Available',
    date: 'Mar 8, 2025',
    isRead: true,
    hasAttachment: true,
    category: 'notice'
  },
  {
    id: '9',
    subject: 'Your 2023 Tax Return Has Been Received',
    date: 'Feb 28, 2025',
    isRead: true,
    hasAttachment: false,
    category: 'general'
  },
  {
    id: '10',
    subject: 'Canada Child Benefit - Annual Review',
    date: 'Jan 20, 2025',
    isRead: true,
    hasAttachment: false,
    category: 'benefit'
  },
  {
    id: '11',
    subject: 'GST/HST Credit Payment Issued',
    date: 'Jan 5, 2025',
    isRead: true,
    hasAttachment: false,
    category: 'benefit'
  },
  {
    id: '12',
    subject: 'Year-End Tax Summary Available',
    date: 'Dec 31, 2025',
    isRead: true,
    hasAttachment: true,
    category: 'general'
  },
  {
    id: '13',
    subject: 'Canada Child Benefit Payment Issued',
    date: 'Nov 20, 2025',
    isRead: true,
    hasAttachment: false,
    category: 'benefit'
  },
  {
    id: '14',
    subject: 'GST/HST Credit Payment Issued',
    date: 'Oct 5, 2025',
    isRead: true,
    hasAttachment: false,
    category: 'benefit'
  },
  {
    id: '15',
    subject: 'Payment Received - Thank You',
    date: 'Sep 10, 2025',
    isRead: true,
    hasAttachment: false,
    category: 'payment'
  },
  {
    id: '16',
    subject: 'Canada Child Benefit - Payment Schedule',
    date: 'Jul 15, 2025',
    isRead: true,
    hasAttachment: false,
    category: 'benefit'
  },
  {
    id: '17',
    subject: 'GST/HST Credit Payment Issued',
    date: 'Jul 5, 2025',
    isRead: true,
    hasAttachment: false,
    category: 'benefit'
  },
  {
    id: '18',
    subject: 'Reminder: 2024 Tax Filing Deadline Approaching',
    date: 'Apr 20, 2025',
    isRead: true,
    hasAttachment: false,
    category: 'reminder'
  },
  {
    id: '19',
    subject: 'GST/HST Credit Payment Issued',
    date: 'Apr 5, 2025',
    isRead: true,
    hasAttachment: false,
    category: 'benefit'
  },
  {
    id: '20',
    subject: '2022 Notice of Assessment Available',
    date: 'Mar 18, 2024',
    isRead: true,
    hasAttachment: true,
    category: 'notice'
  },
  {
    id: '21',
    subject: 'Refund Issued - Direct Deposit',
    date: 'Mar 15, 2024',
    isRead: true,
    hasAttachment: true,
    category: 'payment'
  },
  {
    id: '22',
    subject: 'Your 2022 Tax Return Has Been Assessed',
    date: 'Mar 10, 2024',
    isRead: true,
    hasAttachment: false,
    category: 'general'
  },
  {
    id: '23',
    subject: 'Canada Child Benefit Annual Review Required',
    date: 'Jan 25, 2024',
    isRead: true,
    hasAttachment: false,
    category: 'benefit'
  },
  {
    id: '24',
    subject: 'GST/HST Credit Payment Issued',
    date: 'Jan 5, 2024',
    isRead: true,
    hasAttachment: false,
    category: 'benefit'
  },
  {
    id: '25',
    subject: 'Important Account Security Update',
    date: 'Nov 30, 2023',
    isRead: true,
    hasAttachment: false,
    category: 'general'
  },
  {
    id: '26',
    subject: 'Canada Child Benefit Payment Issued',
    date: 'Nov 20, 2023',
    isRead: true,
    hasAttachment: false,
    category: 'benefit'
  },
  {
    id: '27',
    subject: 'GST/HST Credit Payment Issued',
    date: 'Oct 5, 2023',
    isRead: true,
    hasAttachment: false,
    category: 'benefit'
  },
  {
    id: '28',
    subject: 'Payment Plan Confirmation',
    date: 'Aug 20, 2023',
    isRead: true,
    hasAttachment: true,
    category: 'payment'
  },
  {
    id: '29',
    subject: 'GST/HST Credit Payment Issued',
    date: 'Jul 5, 2023',
    isRead: true,
    hasAttachment: false,
    category: 'benefit'
  },
  {
    id: '30',
    subject: '2022 Tax Filing Deadline - Important Reminder',
    date: 'Apr 25, 2023',
    isRead: true,
    hasAttachment: false,
    category: 'reminder'
  },
  {
    id: '31',
    subject: 'GST/HST Credit Payment Issued',
    date: 'Apr 5, 2023',
    isRead: true,
    hasAttachment: false,
    category: 'benefit'
  },
  {
    id: '32',
    subject: '2021 Notice of Assessment Available',
    date: 'Mar 20, 2023',
    isRead: true,
    hasAttachment: true,
    category: 'notice'
  },
  {
    id: '33',
    subject: 'Refund Processed Successfully',
    date: 'Mar 18, 2023',
    isRead: true,
    hasAttachment: true,
    category: 'payment'
  },
  {
    id: '34',
    subject: 'Your 2021 Tax Return Has Been Received',
    date: 'Feb 15, 2023',
    isRead: true,
    hasAttachment: false,
    category: 'general'
  },
  {
    id: '35',
    subject: 'GST/HST Credit Payment Issued',
    date: 'Jan 5, 2023',
    isRead: true,
    hasAttachment: false,
    category: 'benefit'
  },
  {
    id: '36',
    subject: 'Canada Child Benefit - Annual Notice',
    date: 'Dec 15, 2022',
    isRead: true,
    hasAttachment: false,
    category: 'benefit'
  },
  {
    id: '37',
    subject: 'GST/HST Credit Payment Issued',
    date: 'Oct 5, 2022',
    isRead: true,
    hasAttachment: false,
    category: 'benefit'
  },
  {
    id: '38',
    subject: 'Payment Confirmation - Balance Updated',
    date: 'Sep 12, 2022',
    isRead: true,
    hasAttachment: false,
    category: 'payment'
  },
  {
    id: '39',
    subject: 'GST/HST Credit Payment Issued',
    date: 'Jul 5, 2022',
    isRead: true,
    hasAttachment: false,
    category: 'benefit'
  },
  {
    id: '40',
    subject: '2021 Tax Filing Information',
    date: 'Apr 10, 2022',
    isRead: true,
    hasAttachment: false,
    category: 'reminder'
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'notice':
      return 'bg-[#26374a] text-white';
    case 'benefit':
      return 'bg-[#2d8a3e] text-white';
    case 'payment':
      return 'bg-[#26374a] text-white';
    case 'reminder':
      return 'bg-[#fcba19] text-[#333333]';
    case 'saved':
      return 'bg-[#6c40b5] text-white';
    default:
      return 'bg-[#e1e4e7] text-[#333333]';
  }
};

const getCategoryLabel = (category: string) => {
  switch (category) {
    case 'notice':
      return 'Notice';
    case 'benefit':
      return 'Benefit';
    case 'payment':
      return 'Payment';
    case 'reminder':
      return 'Reminder';
    case 'saved':
      return 'Saved';
    default:
      return 'General';
  }
};

export function CRAMailScreen({ onBack, onArchive, onArchiveMessage, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onViewMail, onSendMessage, onViewNoticeOfAssessment, noticeOfAssessmentRead, onMarkNoticeAsRead, hasSavedChat, showComposeOnMount, onViewSentMessages, sentMessagesCount, onViewArchive, archivedCount, initialComposeTo, initialComposeSubject, onMessageSentWhenNotLoggedIn, hasUnreadMail, onViewAllBenefits, onViewRefundDetails, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onLifelongLearningPlan, onCustomize, onUncashedCheques, onBecomeRepresentative, onBecomeRepresentativeAsRep, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments, onUserFeedback }: CRAMailScreenProps) {
  const [viewingNoticeOfAssessment, setViewingNoticeOfAssessment] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'notice' | 'benefit' | 'payment' | 'saved'>('all');
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);
  const [composeOpen, setComposeOpen] = useState(false);
  const [showCc, setShowCc] = useState(false);
  const [showBcc, setShowBcc] = useState(false);
  const [composeTo, setComposeTo] = useState(initialComposeTo || 'CRA');
  const [composeCc, setComposeCc] = useState('');
  const [composeBcc, setComposeBcc] = useState('');
  const [composeSubject, setComposeSubject] = useState(initialComposeSubject || '');
  const [composeMessage, setComposeMessage] = useState('');
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  const [showDiscardConfirm, setShowDiscardConfirm] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<'to' | 'cc' | 'bcc' | 'subject' | 'message' | null>(null);
  const [archivedMessageIds, setArchivedMessageIds] = useState<string[]>([]);
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
      if (activeField === 'to') {
        setComposeTo(prev => prev.slice(0, -1));
      } else if (activeField === 'cc') {
        setComposeCc(prev => prev.slice(0, -1));
      } else if (activeField === 'bcc') {
        setComposeBcc(prev => prev.slice(0, -1));
      } else if (activeField === 'subject') {
        setComposeSubject(prev => prev.slice(0, -1));
      } else if (activeField === 'message') {
        setComposeMessage(prev => prev.slice(0, -1));
      }
    } else {
      if (activeField === 'to') {
        setComposeTo(prev => prev + key);
      } else if (activeField === 'cc') {
        setComposeCc(prev => prev + key);
      } else if (activeField === 'bcc') {
        setComposeBcc(prev => prev + key);
      } else if (activeField === 'subject') {
        setComposeSubject(prev => prev + key);
      } else if (activeField === 'message') {
        setComposeMessage(prev => prev + key);
      }
    }
  };

  const handleKeyboardDone = () => {
    setShowKeyboard(false);
    setActiveField(null);
  };

  useEffect(() => {
    setPortalContainer(document.getElementById('iphone-screen'));
  }, []);

  // Open compose window if showComposeOnMount is true
  useEffect(() => {
    if (showComposeOnMount) {
      setComposeOpen(true);
    }
  }, [showComposeOnMount]);

  // Disable scrolling when compose dialog is open and show keyboard
  useEffect(() => {
    if (composeOpen) {
      document.body.style.overflow = 'hidden';
      // Show keyboard when compose opens
      setShowKeyboard(true);
    } else {
      document.body.style.overflow = '';
      // Hide keyboard when compose closes
      setShowKeyboard(false);
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [composeOpen]);
  
  // Add saved chat message if hasSavedChat is true
  const savedChatMessage: MailMessage = {
    id: 'saved-chat',
    subject: 'Live Chat Transcript - Refund Status Inquiry',
    date: 'Oct 25, 2025',
    isRead: false,
    hasAttachment: false,
    category: 'saved',
    isSaved: true
  };
  
  // Update the first message's read status based on the prop
  let updatedMessages = mailMessages.map((message, index) => 
    index === 0 ? { ...message, isRead: false } : message
  );
  
  // Prepend saved chat message if needed
  if (hasSavedChat) {
    updatedMessages = [savedChatMessage, ...updatedMessages];
  }
  
  // Filter out archived messages
  updatedMessages = updatedMessages.filter(m => !archivedMessageIds.includes(m.id));
  
  // Filter messages by category
  let filteredMessages = selectedCategory === 'all' 
    ? updatedMessages 
    : updatedMessages.filter(m => m.category === selectedCategory);
  
  // Filter by unread status if enabled
  if (showUnreadOnly) {
    filteredMessages = filteredMessages.filter(m => !m.isRead);
  }
  
  const unreadCount = updatedMessages.filter(m => !m.isRead).length;

  const handleMessageClick = (messageId: string) => {
    // Handle 2025 Notice of Assessment - navigate to Tax Slips screen with PDF open
    if (messageId === '1') {
      if (onViewNoticeOfAssessment) {
        onViewNoticeOfAssessment();
      }
    }
  };

  const handleBackToMessages = () => {
    setViewingNoticeOfAssessment(false);
  };

  const handleBackClick = () => {
    onBack();
  };

  // Notice of Assessment view
  if (viewingNoticeOfAssessment) {
    return (
      <div className="h-full bg-[#f2f2f7] flex flex-col relative">
        {/* Header - Fixed */}
        <div className="flex-shrink-0">
          <HeaderMaster 
            title="My Account"
            onNavigateHome={onNavigateHome}
            onLogoClick={onNavigateHome}
            hasUnreadMail={unreadCount > 0}
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
            onUserFeedback={onUserFeedback}
          />
        </div>

        {/* Fixed Page Title Area */}
        <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBackToMessages}
              className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={3} />
            </button>
            <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Notice of Assessment</h1>
          </div>
          <p className="text-[#6e6e73] text-[15px] m-0 mt-1">2024 Tax Year</p>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
          <div className="px-4 py-4 bg-[#f2f2f7]">
            {/* Assessment Summary */}
            <div className="mb-4 p-4 card-ios border-l-4 border-[#007AFF]">
              <h3 className="text-black text-[17px] m-0 mb-4">Assessment Summary</h3>
              
              <div className="mb-4 pb-4 border-b border-[#e1e4e7]">
                <div className="text-[#333333] text-[14px] mb-1">Notice date</div>
                <div className="text-[#26374a]">March 28, 2025</div>
              </div>

              <div className="mb-4 pb-4 border-b border-[#e1e4e7]">
                <div className="text-[#333333] text-[14px] mb-1">Tax year</div>
                <div className="text-[#26374a]">2024</div>
              </div>

              <div>
                <div className="text-[#333333] text-[14px] mb-1">Social Insurance Number</div>
                <div className="text-[#26374a]">XXX XXX 123</div>
              </div>
            </div>

            {/* Income and Deductions */}
            <div className="mb-4 p-4 card-ios border-l-4 border-[#007AFF]">
              <h3 className="text-black text-[17px] m-0 mb-4">Income and Deductions</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-[#333333] text-[14px]">Total income</span>
                  <span className="text-[#26374a] font-bold">$68,450.00</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-[#333333] text-[14px]">Net income</span>
                  <span className="text-[#26374a] font-bold">$65,200.00</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-[#333333] text-[14px]">Taxable income</span>
                  <span className="text-[#26374a] font-bold">$62,850.00</span>
                </div>
              </div>
            </div>

            {/* Tax Calculation */}
            <div className="mb-4 p-4 card-ios border-l-4 border-[#007AFF]">
              <h3 className="text-black text-[17px] m-0 mb-4">Tax Calculation</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-[#333333] text-[14px]">Federal tax</span>
                  <span className="text-[#26374a] font-bold">$8,924.00</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-[#333333] text-[14px]">Provincial tax</span>
                  <span className="text-[#26374a] font-bold">$3,752.00</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-[#333333] text-[14px]">CPP contributions</span>
                  <span className="text-[#26374a] font-bold">$3,754.45</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-[#333333] text-[14px]">EI premiums</span>
                  <span className="text-[#26374a] font-bold">$1,049.12</span>
                </div>
                <div className="pt-3 border-t border-[#e1e4e7] flex justify-between items-start">
                  <span className="text-[#26374a] font-bold">Total payable</span>
                  <span className="text-[#26374a] font-bold">$17,479.57</span>
                </div>
              </div>
            </div>

            {/* Tax Credits */}
            <div className="mb-4 p-4 card-ios border-l-4 border-[#007AFF]">
              <h3 className="text-black text-[17px] m-0 mb-4">Non-Refundable Tax Credits</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-[#333333] text-[14px]">Basic personal amount</span>
                  <span className="text-[#26374a] font-bold">$15,000.00</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-[#333333] text-[14px]">Canada employment amount</span>
                  <span className="text-[#26374a] font-bold">$1,368.00</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-[#333333] text-[14px]">EI premiums</span>
                  <span className="text-[#26374a] font-bold">$1,049.12</span>
                </div>
                <div className="pt-3 border-t border-[#e1e4e7] flex justify-between items-start">
                  <span className="text-[#26374a] font-bold">Total credits claimed</span>
                  <span className="text-[#26374a] font-bold">$17,417.12</span>
                </div>
              </div>
            </div>

            {/* Balance Summary */}
            <div className="mb-4 p-4 card-ios border-l-4 border-[#ff3b30]">
              <h3 className="text-black text-[17px] m-0 mb-4">Balance Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-[#333333] text-[14px]">Total payable</span>
                  <span className="text-[#26374a] font-bold">$17,479.57</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-[#333333] text-[14px]">Total income tax deducted</span>
                  <span className="text-[#2d8a3e] font-bold">+$16,229.57</span>
                </div>
                <div className="pt-3 border-t border-[#e1e4e7] flex justify-between items-start">
                  <span className="text-[#26374a] font-bold">Balance owing</span>
                  <div className="text-right">
                    <div className="text-[#d3080c] font-bold">$1,250.00</div>
                    <div className="text-[#333333] text-[13px]">Apr 30, 2026</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RRSP Information */}
            <div className="mb-4 p-4 card-ios border-l-4 border-[#007AFF]">
              <h3 className="text-black text-[17px] m-0 mb-4">RRSP Deduction Limit</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-[#333333] text-[14px]">RRSP deduction limit for 2025</span>
                  <span className="text-[#26374a] font-bold">$18,450.00</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-[#333333] text-[14px]">Unused RRSP contributions</span>
                  <span className="text-[#26374a] font-bold">$2,500.00</span>
                </div>
              </div>
            </div>

            {/* TFSA Contribution Room */}
            <div className="mb-4 p-4 card-ios border-l-4 border-[#007AFF]">
              <h3 className="text-black text-[17px] m-0 mb-4">TFSA Contribution Room</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-[#333333] text-[14px]">TFSA contribution room for 2025</span>
                  <span className="text-[#26374a] font-bold">$12,500.00</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-[#333333] text-[14px]">Unused TFSA contributions from previous years</span>
                  <span className="text-[#26374a] font-bold">$6,000.00</span>
                </div>
              </div>
            </div>

            {/* Important Information */}
            <div className="p-4 card-ios border-l-4 border-[#007AFF]">
              <h3 className="text-black text-[17px] m-0 mb-4">Important Information</h3>
              <ul className="text-[#333333] text-[14px] m-0 pl-5 space-y-2">
                <li>Keep this notice for your records</li>
                <li>If you disagree with this assessment, you have 90 days from the notice date to file an objection</li>
                <li>Payment is due by April 30, 2026 to avoid interest charges</li>
                <li>You can view and download a PDF copy of this notice from the Documents section</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default message list view
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
        onUserFeedback={onUserFeedback}
      />

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-center gap-3">
          <button
            onClick={handleBackClick}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">CRA mail - Inbox</h1>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7]" 
        style={{ paddingBottom: `${keyboardPadding + 80}px` }}
      >
        {/* Mail Action Buttons */}
        <div className="px-4 pb-3">
          <div className="flex gap-2 justify-between">
            <button 
              onClick={() => {
                setShowUnreadOnly(!showUnreadOnly);
                setSelectedCategory('all');
              }}
              className="flex-1 flex flex-col items-center gap-1 py-2 bg-[#007AFF]/10 rounded-[10px] border-2 border-[#007AFF] hover:opacity-70 active:opacity-50 transition-opacity"
            >
              <Mail className="h-6 w-6 text-[#007AFF]" />
              <div className="flex flex-col items-center gap-0">
                <span className="text-[11px] text-black">Inbox</span>
                {unreadCount > 0 && <span className="text-[11px] font-bold text-[#ff3b30]">{unreadCount} unread</span>}
              </div>
            </button>
            <button 
              onClick={onViewSentMessages}
              className="flex-1 flex flex-col items-center gap-1 py-2 bg-white rounded-[10px] border-0 text-[#007AFF] hover:opacity-70 active:opacity-50 transition-opacity"
              aria-label="View sent messages"
            >
              <Send className="h-6 w-6" />
              <span className="text-[11px] text-black">Sent {sentMessagesCount ? `(${sentMessagesCount})` : ''}</span>
            </button>
            <button 
              onClick={onViewArchive}
              className="flex-1 flex flex-col items-center gap-1 py-2 bg-white rounded-[10px] border-0 text-[#007AFF] hover:opacity-70 active:opacity-50 transition-opacity"
              aria-label="View archived messages"
            >
              <Archive className="h-6 w-6" />
              <span className="text-[11px] text-black">Archive {archivedCount ? `(${archivedCount})` : ''}</span>
            </button>
            <button 
              onClick={() => setComposeOpen(true)}
              className="flex-1 flex flex-col items-center gap-1 py-2 bg-white rounded-[10px] border-0 text-[#007AFF] hover:opacity-70 active:opacity-50 transition-opacity"
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
              onClick={() => {
                setSelectedCategory('all');
                setShowUnreadOnly(false);
              }}
              className={`px-4 py-2 text-[14px] transition-all border-0 rounded-full whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-[#007AFF] text-white'
                  : 'bg-white text-black hover:opacity-70'
              }`}
            >
              All
            </button>
            <button
              onClick={() => {
                setSelectedCategory('notice');
                setShowUnreadOnly(false);
              }}
              className={`px-4 py-2 text-[14px] transition-all border-0 rounded-full whitespace-nowrap ${
                selectedCategory === 'notice'
                  ? 'bg-[#007AFF] text-white'
                  : 'bg-white text-black hover:opacity-70'
              }`}
            >
              Notices
            </button>
            <button
              onClick={() => {
                setSelectedCategory('benefit');
                setShowUnreadOnly(false);
              }}
              className={`px-4 py-2 text-[14px] transition-all border-0 rounded-full whitespace-nowrap ${
                selectedCategory === 'benefit'
                  ? 'bg-[#007AFF] text-white'
                  : 'bg-white text-black hover:opacity-70'
              }`}
            >
              Benefits
            </button>
            <button
              onClick={() => {
                setSelectedCategory('payment');
                setShowUnreadOnly(false);
              }}
              className={`px-4 py-2 text-[14px] transition-all border-0 rounded-full whitespace-nowrap ${
                selectedCategory === 'payment'
                  ? 'bg-[#007AFF] text-white'
                  : 'bg-white text-black hover:opacity-70'
              }`}
            >
              Payments
            </button>
            <button
              onClick={() => {
                setSelectedCategory('saved');
                setShowUnreadOnly(false);
              }}
              className={`px-3 py-3 text-[14px] transition-colors border-0 bg-transparent whitespace-nowrap ${
                selectedCategory === 'saved'
                  ? 'text-[#af3c43] border-b-4 border-b-[#af3c43] font-bold'
                  : 'text-[#333333] border-b-4 border-b-transparent hover:text-[#26374a]'
              }`}
            >
              Chats
            </button>
          </div>
        </div>

        <div className="px-4 py-4">
          {/* Mail Messages */}
          <div className="space-y-1">
            {filteredMessages.map((message, index) => (
              <div
                key={message.id}
                className={`card-ios border-l-4 ${!message.isRead ? 'border-[#ff3b30]' : 'border-[#007AFF]'} relative`}
              >
                <button
                  onClick={() => handleMessageClick(message.id)}
                  className="w-full text-left bg-transparent border-0 p-4 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors"
                >
                  <div className="flex items-start gap-3 pr-8">
                    <div className="flex-shrink-0 mt-0.5">
                      {message.isRead ? (
                        <MailOpen className="h-5 w-5 text-gray-ios" />
                      ) : (
                        <Mail className="h-5 w-5 text-[#007AFF]" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-black text-[17px] m-0 mb-0.5 ${!message.isRead ? '' : ''}`}>
                        {message.subject}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap mt-1">
                        <span className={`px-2 py-0.5 text-[11px] rounded-full ${getCategoryColor(message.category)} text-white`}>
                          {getCategoryLabel(message.category)}
                        </span>
                        {message.hasAttachment && (
                          <span className="text-[#6e6e73] text-[11px]">📎</span>
                        )}
                        <span className="text-[#6e6e73] text-[13px]">{message.date}</span>
                      </div>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add to local archived IDs to remove from display
                    setArchivedMessageIds([...archivedMessageIds, message.id]);
                    // Call parent handler with full message object
                    if (onArchive) {
                      onArchive(message);
                    }
                    if (onArchiveMessage) {
                      onArchiveMessage(message);
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
        </div>
      </div>

      {/* Compose Message Dialog - iOS Style */}
      {composeOpen && portalContainer && createPortal(
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`absolute inset-0 z-[100] flex justify-center bg-black/40 ${showKeyboard ? 'items-start' : 'items-end'}`}
            onClick={() => setShowDiscardConfirm(true)}
          >
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className={`bg-[#f2f2f7] w-full shadow-lg flex flex-col ${showKeyboard ? 'rounded-none' : 'rounded-t-[20px]'}`}
              style={{ 
                height: showKeyboard ? 'calc(100% - 250px)' : 'calc(100% - 100px)',
                maxHeight: showKeyboard ? 'calc(100% - 250px)' : '90%'
              }}
              onClick={(e) => e.stopPropagation()}
            >
            {/* Handle Bar */}
            <div className="flex justify-center pt-2 pb-1 flex-shrink-0">
              <div className="w-10 h-1 bg-[#c7c7cc] rounded-full"></div>
            </div>

            {/* Header */}
            <div className="px-4 py-3 border-b border-[rgba(60,60,67,0.29)] bg-[#f2f2f7] flex-shrink-0">
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => setShowDiscardConfirm(true)}
                  className="text-[#007AFF] text-[17px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity"
                >
                  Cancel
                </button>
                <h2 className="text-[17px] text-black m-0">New Message</h2>
                <button 
                  onClick={() => {
                    if (onSendMessage) {
                      const now = new Date();
                      const dateSent = now.toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      });
                      const timeSent = now.toLocaleTimeString('en-US', { 
                        hour: 'numeric', 
                        minute: '2-digit',
                        hour12: true 
                      });
                      
                      onSendMessage({
                        to: composeTo,
                        subject: composeSubject,
                        body: composeMessage,
                        dateSent,
                        timeSent
                      });
                    }
                    
                    setComposeOpen(false);
                    setComposeTo('CRA');
                    setComposeCc('');
                    setComposeBcc('');
                    setComposeSubject('');
                    setComposeMessage('');
                    setShowCc(false);
                    setShowBcc(false);
                    
                    // If user is not logged in, navigate back to login screen
                    if (onMessageSentWhenNotLoggedIn) {
                      onMessageSentWhenNotLoggedIn();
                    }
                  }}
                  className="text-[#007AFF] text-[17px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity disabled:opacity-40"
                  disabled={!composeSubject.trim() || !composeMessage.trim()}
                >
                  Send
                </button>
              </div>
            </div>
          
          {/* Form Fields Section */}
          <div className="bg-white flex-shrink-0">
            {/* To field */}
            <div className="px-4 py-3 border-b border-[rgba(60,60,67,0.29)]">
              <div className="flex items-center gap-3">
                <label className="text-gray-ios text-[17px] min-w-[50px]">To:</label>
                <input
                  type="text"
                  value={composeTo}
                  onChange={(e) => setComposeTo(e.target.value)}
                  onFocus={() => { setShowKeyboard(true); setActiveField('to'); }}
                  placeholder="Enter recipient"
                  className="flex-1 border-0 outline-none text-[17px] text-black bg-transparent p-0"
                />
                <div className="flex items-center gap-2">
                  {!showCc && (
                    <button 
                      onClick={() => setShowCc(true)}
                      className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity"
                    >
                      Cc
                    </button>
                  )}
                  {!showBcc && (
                    <button 
                      onClick={() => setShowBcc(true)}
                      className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity"
                    >
                      Bcc
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* From field */}
            <div className="px-4 py-3 border-b border-[rgba(60,60,67,0.29)]">
              <div className="flex items-center gap-3">
                <label className="text-gray-ios text-[17px] min-w-[50px]">From:</label>
                <div className="flex-1 text-[17px] text-black">
                  myaccount@cra-arc.gc.ca
                </div>
              </div>
            </div>

            {/* Cc field */}
            {showCc && (
              <div className="px-4 py-3 border-b border-[rgba(60,60,67,0.29)]">
                <div className="flex items-center gap-3">
                  <label className="text-gray-ios text-[17px] min-w-[50px]">Cc:</label>
                  <input
                    type="text"
                    value={composeCc}
                    onChange={(e) => setComposeCc(e.target.value)}
                    onFocus={() => { setShowKeyboard(true); setActiveField('cc'); }}
                    placeholder="Enter recipients"
                    className="flex-1 border-0 outline-none text-[17px] text-black bg-transparent p-0"
                  />
                  <button 
                    onClick={() => {
                      setShowCc(false);
                      setComposeCc('');
                    }}
                    className="text-gray-ios hover:opacity-70 active:opacity-50 bg-transparent border-0 p-0 transition-opacity"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Bcc field */}
            {showBcc && (
              <div className="px-4 py-3 border-b border-[rgba(60,60,67,0.29)]">
                <div className="flex items-center gap-3">
                  <label className="text-gray-ios text-[17px] min-w-[50px]">Bcc:</label>
                  <input
                    type="text"
                    value={composeBcc}
                    onChange={(e) => setComposeBcc(e.target.value)}
                    onFocus={() => { setShowKeyboard(true); setActiveField('bcc'); }}
                    placeholder="Enter recipients"
                    className="flex-1 border-0 outline-none text-[17px] text-black bg-transparent p-0"
                  />
                  <button 
                    onClick={() => {
                      setShowBcc(false);
                      setComposeBcc('');
                    }}
                    className="text-gray-ios hover:opacity-70 active:opacity-50 bg-transparent border-0 p-0 transition-opacity"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Subject field */}
            <div className="px-4 py-3 border-b border-[rgba(60,60,67,0.29)]">
              <div className="flex items-center gap-3">
                <label className="text-gray-ios text-[17px] min-w-[50px]">Subject:</label>
                <input
                  type="text"
                  value={composeSubject}
                  onChange={(e) => setComposeSubject(e.target.value)}
                  onFocus={() => { setShowKeyboard(true); setActiveField('subject'); }}
                  placeholder="Enter subject"
                  className="flex-1 border-0 outline-none text-[17px] text-black bg-transparent p-0"
                />
              </div>
            </div>
          </div>

          {/* Message body - Scrollable */}
          <div className="flex-1 overflow-y-auto px-4 py-4 bg-white">
            <Textarea
              value={composeMessage}
              onChange={(e) => setComposeMessage(e.target.value)}
              onFocus={() => { setShowKeyboard(true); setActiveField('message'); }}
              placeholder="Type your message here..."
              className="w-full h-full border-2 border-[#007AFF] rounded-[10px] resize-none text-[17px] text-black focus:outline-none p-3 bg-white"
            />
          </div>

          {/* Formatting toolbar */}
          <div className="bg-white border-t border-[rgba(60,60,67,0.29)] px-4 py-2 flex-shrink-0">
            <div className="flex items-center gap-1">
              <button 
                className="p-2 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] rounded-lg transition-colors bg-transparent border-0 text-[#007AFF]"
                aria-label="Bold"
              >
                <Bold className="h-5 w-5" />
              </button>
              <button 
                className="p-2 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] rounded-lg transition-colors bg-transparent border-0 text-[#007AFF]"
                aria-label="Italic"
              >
                <Italic className="h-5 w-5" />
              </button>
              <button 
                className="p-2 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] rounded-lg transition-colors bg-transparent border-0 text-[#007AFF]"
                aria-label="Underline"
              >
                <Underline className="h-5 w-5" />
              </button>
              <div className="w-px h-5 bg-[#c7c7cc] mx-1" />
              <button 
                className="p-2 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] rounded-lg transition-colors bg-transparent border-0 text-[#007AFF]"
                aria-label="Insert link"
              >
                <Link className="h-5 w-5" />
              </button>
              <button 
                className="p-2 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] rounded-lg transition-colors bg-transparent border-0 text-[#007AFF]"
                aria-label="Insert image"
              >
                <Image className="h-5 w-5" />
              </button>
              <button 
                className="p-2 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] rounded-lg transition-colors bg-transparent border-0 text-[#007AFF]"
                aria-label="Insert emoji"
              >
                <Smile className="h-5 w-5" />
              </button>
              <div className="w-px h-5 bg-[#c7c7cc] mx-1" />
              <button 
                className="p-2 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] rounded-lg transition-colors bg-transparent border-0 text-[#007AFF]"
                aria-label="Attach file"
              >
                <Paperclip className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {showKeyboard && <IPhoneKeyboard key="keyboard" onKeyPress={handleKeyPress} onDone={handleKeyboardDone} />}
      </AnimatePresence>
      
      {/* Discard Confirmation - iOS Action Sheet */}
      {showDiscardConfirm && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 z-[300] flex items-end justify-center p-2"
          onClick={() => setShowDiscardConfirm(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Action Sheet */}
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative w-full max-w-[500px] mb-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main Actions */}
            <div className="bg-white rounded-[14px] overflow-hidden mb-2">
              <div className="px-4 py-3 text-center border-b border-[rgba(60,60,67,0.29)]">
                <div className="text-[13px] text-gray-ios mb-1">
                  Discard Message?
                </div>
                <div className="text-[13px] text-gray-ios">
                  This message will not be saved
                </div>
              </div>
              <button
                onClick={() => {
                  setComposeOpen(false);
                  setComposeTo('Canada Revenue Agency');
                  setComposeCc('');
                  setComposeBcc('');
                  setComposeSubject('');
                  setComposeMessage('');
                  setShowCc(false);
                  setShowBcc(false);
                  setShowDiscardConfirm(false);
                }}
                className="w-full py-4 text-[20px] text-[#ff3b30] bg-white hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-center border-0"
              >
                Discard Message
              </button>
            </div>
            
            {/* Cancel Button */}
            <button
              onClick={() => setShowDiscardConfirm(false)}
              className="w-full py-4 text-[20px] text-[#007AFF] bg-white hover:bg-[#f2f2f7] active:bg-[#e5e5ea] rounded-[14px] transition-colors text-center border-0"
            >
              Cancel
            </button>
          </motion.div>
        </motion.div>
      )}
    </>,
    portalContainer
  )}
    </div>
  );
}