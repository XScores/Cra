import { HeaderMaster } from '../HeaderMaster';
import { HamburgerMenu } from '../HamburgerMenu';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IPhoneKeyboard } from '../IPhoneKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';
import { ChevronLeft, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface LiveChatScreenProps {
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
  onSaveChatToMail?: () => void;
  onSearchClick?: () => void;
  onPersonalClick?: () => void;
  onBusinessClick?: () => void;
  onRepresentativeClick?: () => void;
  activeAccountType?: 'personal' | 'business' | 'representative';
  initialTab?: 'agent' | 'ai';
  hasUnreadMail?: boolean;
}

interface ChatMessage {
  id: string;
  sender: 'agent' | 'user';
  text: string;
  time: string;
  agentName?: string;
}

export function LiveChatScreen({ 
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
  onSubmitDocuments,
  onSaveChatToMail, 
  onSearchClick, 
  onPersonalClick, 
  onBusinessClick, 
  onRepresentativeClick, 
  activeAccountType, 
  initialTab = 'agent', 
  hasUnreadMail 
}: LiveChatScreenProps) {
  const [message, setMessage] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'agent' | 'ai'>(initialTab);
  const [showMenu, setShowMenu] = useState(false);

  // Use keyboard scroll hook
  useKeyboardScroll({ 
    isKeyboardVisible: showKeyboard, 
    activeField: 'input',
    keyboardHeight: 260
  });

  const handleSearchClick = () => {
    console.log('Search clicked in LiveChatScreen', onSearchClick);
    if (onSearchClick) {
      onSearchClick();
    }
  };

  const menuItems = [
    { icon: Send, label: 'File taxes', type: 'lucide' as const, onClick: () => { setShowMenu(false); onBack(); if (onFileTaxes) onFileTaxes(); } },
    { icon: Gift, label: 'Benefits & credits', type: 'lucide' as const, onClick: () => { setShowMenu(false); onBack(); if (onBenefitsAndCredits) onBenefitsAndCredits(); } },
    { icon: CreditCard, label: 'Make a payment', type: 'lucide' as const, onClick: () => { setShowMenu(false); onBack(); if (onMakePayment) onMakePayment(); } },
    { icon: Mail, label: 'CRA mail', type: 'lucide' as const, onClick: () => { setShowMenu(false); onBack(); if (onViewMail) onViewMail(); } },
    { icon: null, label: 'Registered plans', type: 'image' as const, imageSrc: mapleLeafIcon, onClick: () => { setShowMenu(false); onBack(); if (onRegisteredPlans) onRegisteredPlans(); } },
    { icon: Receipt, label: 'Tax slips and documents', type: 'lucide' as const, onClick: () => { setShowMenu(false); onBack(); if (onTaxSlips) onTaxSlips(); } },
    { icon: FileCheck, label: 'Proof of income', type: 'lucide' as const, onClick: () => { setShowMenu(false); onBack(); if (onProofOfIncome) onProofOfIncome(); } },
    { icon: HelpCircle, label: 'Help and support', type: 'lucide' as const, onClick: () => { setShowMenu(false); onBack(); if (onHelp) onHelp(); } },
    { icon: LogOut, label: 'Sign out and exit', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onSignOut) onSignOut(); }, danger: true },
  ];

  useEffect(() => {
    setSelectedTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showMenu]);
  
  const agentChatMessages: ChatMessage[] = [
    {
      id: '1',
      sender: 'agent',
      text: 'Hello! Welcome to CRA Live Chat Support. My name is Sarah, and I\'ll be assisting you today. How can I help you?',
      time: '2:15 PM',
      agentName: 'Sarah - CRA Support Agent'
    },
    {
      id: '2',
      sender: 'user',
      text: 'Hi Sarah, I filed my 2024 tax return about 3 weeks ago and I haven\'t received my refund yet. Can you help me check on the status?',
      time: '2:16 PM'
    },
    {
      id: '3',
      sender: 'agent',
      text: 'I\'d be happy to help you check on your refund status, Jonathan. Let me pull up your account information.',
      time: '2:16 PM',
      agentName: 'Sarah - CRA Support Agent'
    },
    {
      id: '4',
      sender: 'agent',
      text: 'I can see that your 2024 tax return was received on October 4, 2025. The CRA is currently processing your return, and I can confirm that your refund of $1,847.00 has been approved.',
      time: '2:17 PM',
      agentName: 'Sarah - CRA Support Agent'
    },
    {
      id: '5',
      sender: 'user',
      text: 'That\'s great! When should I expect to receive it?',
      time: '2:17 PM'
    },
    {
      id: '6',
      sender: 'agent',
      text: 'Based on our records, your refund is scheduled to be deposited via direct deposit to your registered bank account ending in 4521 on October 29, 2025. You should see it within 1-2 business days after that date.',
      time: '2:18 PM',
      agentName: 'Sarah - CRA Support Agent'
    },
    {
      id: '7',
      sender: 'user',
      text: 'Perfect, thank you! Is there anything else I need to do?',
      time: '2:18 PM'
    },
    {
      id: '8',
      sender: 'agent',
      text: 'No action is required on your part. Your Notice of Assessment will be available in your CRA My Account under "Tax returns" > "Notice of Assessment" within the next few days. Is there anything else I can help you with today?',
      time: '2:19 PM',
      agentName: 'Sarah - CRA Support Agent'
    },
    {
      id: '9',
      sender: 'user',
      text: 'No, that\'s all I needed. Thank you for your help!',
      time: '2:19 PM'
    },
    {
      id: '10',
      sender: 'agent',
      text: 'You\'re welcome, Jonathan! If you have any other questions in the future, feel free to contact us. Have a great day!',
      time: '2:20 PM',
      agentName: 'Sarah - CRA Support Agent'
    }
  ];

  const aiChatMessages: ChatMessage[] = [
    {
      id: '1',
      sender: 'agent',
      text: 'Hello! I\'m the CRA AI Assistant, powered by artificial intelligence to help you with common questions and tasks. How can I assist you today?',
      time: '2:15 PM',
      agentName: 'CRA AI Assistant'
    },
    {
      id: '2',
      sender: 'user',
      text: 'What is the TFSA contribution limit for 2024?',
      time: '2:16 PM'
    },
    {
      id: '3',
      sender: 'agent',
      text: 'The TFSA annual contribution limit for 2024 is $7,000. This is in addition to any unused contribution room from previous years. You can view your total available TFSA contribution room in your CRA My Account.',
      time: '2:16 PM',
      agentName: 'CRA AI Assistant'
    },
    {
      id: '4',
      sender: 'user',
      text: 'Where can I find that in the app?',
      time: '2:17 PM'
    },
    {
      id: '5',
      sender: 'agent',
      text: 'You can find your TFSA contribution room by going to: Home > Registered plans > TFSA > View your TFSA contribution room. This will show your total available contribution room and your transaction history.',
      time: '2:17 PM',
      agentName: 'CRA AI Assistant'
    },
    {
      id: '6',
      sender: 'user',
      text: 'Thank you, that\'s helpful!',
      time: '2:18 PM'
    },
    {
      id: '7',
      sender: 'agent',
      text: 'You\'re welcome! If you need more detailed assistance or have complex questions, I can connect you with a CRA support agent. Is there anything else I can help you with?',
      time: '2:18 PM',
      agentName: 'CRA AI Assistant'
    }
  ];

  const chatMessages = selectedTab === 'agent' ? agentChatMessages : aiChatMessages;

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage('');
    }
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
        onSearchClick={handleSearchClick}
        onPersonalClick={onPersonalClick}
        onBusinessClick={onBusinessClick}
        onRepresentativeClick={onRepresentativeClick}
        activeAccountType={activeAccountType || 'personal'}
        hasUnreadMail={hasUnreadMail}
        onFileTaxes={onFileTaxes}
        onViewAllBenefits={onBenefitsAndCredits}
        onMakePayment={onMakePayment}
        onViewMail={onViewMail}
        onRegisteredPlans={onRegisteredPlans}
        onTaxSlips={onTaxSlips}
        onProofOfIncome={onProofOfIncome}
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
        onHelp={onHelp}
        onSignOut={onSignOut}
      />

      <div 
        className="flex-1 min-h-0 flex flex-col bg-[#f2f2f7]"
        style={{ paddingBottom: showKeyboard ? '260px' : '0px' }}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (!target.closest('input') && !target.closest('textarea') && !target.closest('button[type="button"]')) {
            setShowKeyboard(false);
          }
        }}
      >
        {/* Back Button and Page Title */}
        <div className="px-4 pt-2 pb-3 bg-[#f2f2f7] flex-shrink-0">
          <div className="flex items-center gap-3 mb-1">
            <button
              onClick={onBack}
              className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={3} />
            </button>
            <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Live chat</h1>
          </div>
          <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Chat with a CRA support agent or AI assistant</p>
        </div>

        {/* Chat Header with Tabs */}
        <div className="px-4 pb-3 bg-[#f2f2f7] flex-shrink-0">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setSelectedTab('agent')}
                className={`text-black pb-1 border-b-2 transition-colors bg-transparent border-0 border-b-2 cursor-pointer text-[17px] ${
                  selectedTab === 'agent' ? 'border-[#007AFF]' : 'border-transparent opacity-60'
                }`}
              >
                Live Agent
              </button>
              <button 
                onClick={() => setSelectedTab('ai')}
                className={`text-black pb-1 border-b-2 transition-colors bg-transparent border-0 border-b-2 cursor-pointer text-[17px] ${
                  selectedTab === 'ai' ? 'border-[#007AFF]' : 'border-transparent opacity-60'
                }`}
              >
                AI Agent
              </button>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#28a745] rounded-full"></div>
              <span className="text-[#3c3c43] text-[13px]">Connected</span>
            </div>
          </div>
          <div className="bg-[#fff9e6] rounded-[10px] p-3 border-l-4 border-[#ffcc00]">
            <p className="text-[#3c3c43] text-[15px] m-0">
              <strong className="text-black">Note:</strong> {selectedTab === 'agent' ? 'Average wait time is less than 5 minutes. Please do not share personal identification numbers (PINs) or passwords.' : 'AI responses are generated automatically and may not be accurate. For complex questions, please connect with a CRA agent.'}
            </p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
          {chatMessages.map((msg) => (
            <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
              {msg.sender === 'agent' && msg.agentName && (
                <div className="text-gray-ios text-[11px] mb-1 px-2">{msg.agentName}</div>
              )}
              <div className={`max-w-[75%] ${
                msg.sender === 'user' 
                  ? 'bg-[#007AFF] rounded-[18px] rounded-tr-[4px]' 
                  : 'bg-[#E5E5EA] rounded-[18px] rounded-tl-[4px]'
              } px-4 py-2`}>
                <p className={`m-0 text-[16px] leading-[21px] ${msg.sender === 'user' ? 'text-white' : 'text-black'}`}>
                  {msg.text}
                </p>
              </div>
              <div className="text-[11px] text-gray-ios mt-1 px-2">
                {msg.time}
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="sticky bottom-0 bg-[#f2f2f7] border-t border-[#c6c6c8] p-3 flex-shrink-0">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              onFocus={() => setShowKeyboard(true)}
              placeholder="Message"
              className="flex-1 px-4 py-2 bg-white border border-[#d1d1d6] rounded-[18px] text-[17px] focus:outline-none focus:border-[#007AFF]"
            />
            <button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="w-9 h-9 rounded-full flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition-opacity border-0"
              style={{
                backgroundColor: message.trim() ? '#007AFF' : '#d1d1d6'
              }}
            >
              <Send className="h-5 w-5 text-white" fill="white" />
            </button>
          </div>
          <div className="mt-2 text-[11px] text-gray-ios text-center">
            Chat session ends after 10 minutes of inactivity
          </div>
          
          {/* Save Chat Button */}
          <button
            onClick={onSaveChatToMail}
            className="mt-3 w-full py-3 bg-[#007AFF] text-white rounded-[10px] border-0 cursor-pointer transition-opacity hover:opacity-90 active:opacity-80 text-center"
          >
            <span className="text-[17px]">Save Chat to CRA Mail</span>
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {showKeyboard && <IPhoneKeyboard key="keyboard" />}
      </AnimatePresence>

      {/* Hamburger Menu */}
      <HamburgerMenu 
        isOpen={showMenu}
        onClose={() => setShowMenu(false)}
        menuItems={menuItems}
      />
    </div>
  );
}