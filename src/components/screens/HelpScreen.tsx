import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, Phone, Mail, MessageCircle, FileText, ChevronRight, ExternalLink, PhoneCall, Bot, Send, Gift, CreditCard, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface HelpScreenProps {
  onBack: () => void;
  onViewMail?: () => void;
  onNavigateHome?: () => void;
  onFAQFileTaxes?: () => void;
  onFAQRefund?: () => void;
  onFAQMakePayment?: () => void;
  onFAQUpdateAddress?: () => void;
  onFAQNoticeOfAssessment?: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onLiveChat?: () => void;
  onAIChat?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onCall?: (phoneNumber: string, label: string) => void;
  onSendMessage?: (to?: string, subject?: string) => void;
  onCallScheduling?: () => void;
  onShowAppVersion?: () => void;
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
  onUserFeedback?: () => void;
}

export function HelpScreen({ onBack, onFAQFileTaxes, onFAQRefund, onFAQMakePayment, onFAQUpdateAddress, onFAQNoticeOfAssessment, onLiveChat, onAIChat, onViewMail, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onCall, onSendMessage, onCallScheduling, onShowAppVersion, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onBecomeRepresentative, onBecomeRepresentativeAsRep, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments, onUserFeedback, hasUnreadMail }: HelpScreenProps) {
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
        onUserFeedback={onUserFeedback}
      />

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-center gap-3 mb-1">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Help and support</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Get help with your CRA My Account</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        <div className="px-4 py-2">
          {/* Contact Us */}
          <div className="mb-4">
            <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Contact us</h2>
            <div className="bg-white rounded-[10px] overflow-hidden divide-y divide-[#c6c6c8]">
              <button onClick={onAIChat} className="flex items-center gap-3 px-4 py-4 w-full bg-white hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors border-0 text-left">
                <Bot className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-0.5">AI chat</div>
                  <div className="text-gray-ios text-[15px] opacity-80">Get instant answers from an AI Assistant</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </button>

              <button onClick={onLiveChat} className="flex items-center gap-3 px-4 py-4 w-full bg-white hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors border-0 text-left">
                <MessageCircle className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-0.5">Live chat</div>
                  <div className="text-gray-ios text-[15px] opacity-80">Chat with a CRA Support Agent</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </button>

              <button onClick={() => onSendMessage?.('CRASupport@cra-arc.gc.ca', '')} className="flex items-center gap-3 px-4 py-4 w-full bg-white hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors border-0 text-left">
                <Mail className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-0.5">Send us a message</div>
                  <div className="text-gray-ios text-[15px] opacity-80">We'll respond within 2 business days</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </button>

              <button 
                onClick={() => onCall?.('1-800-959-8281', 'CRA Support')}
                className="flex items-center gap-3 px-4 py-4 w-full bg-white hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors border-0 text-left"
              >
                <Phone className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-0.5">Call us</div>
                  <div className="text-gray-ios text-[15px] opacity-80">CRA Support: 1-800-959-8281</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </button>

              <button onClick={onCallScheduling} className="flex items-center gap-3 px-4 py-4 w-full bg-white hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors border-0 text-left">
                <PhoneCall className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-0.5">Call scheduling</div>
                  <div className="text-gray-ios text-[15px] opacity-80">Schedule a callback from the CRA</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </button>
            </div>
          </div>

          {/* Service hours */}
          <div className="mb-4">
            <div className="bg-white rounded-[10px] p-4">
              <h3 className="text-black text-[20px] m-0 mb-3">Service hours</h3>
              <div className="space-y-2 text-[17px]">
                <div className="flex justify-between text-gray-ios">
                  <span>Monday to Friday:</span>
                  <span className="text-black">8:00 AM - 8:00 PM (ET)</span>
                </div>
                <div className="flex justify-between text-gray-ios">
                  <span>Saturday and Sunday:</span>
                  <span className="text-black">Closed</span>
                </div>
              </div>
              <div className="bg-[#fff9e6] rounded-[10px] p-4 border-l-4 border-[#ffcc00] mt-3">
                <p className="text-gray-ios text-[15px] m-0">
                  <strong className="text-black">Note:</strong> Service hours may be extended during peak periods (March to May)
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-4">
            <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Frequently asked questions</h2>
            <div className="bg-white rounded-[10px] overflow-hidden divide-y divide-[#c6c6c8]">
              <button onClick={onFAQFileTaxes} className="flex items-center justify-between px-4 py-3 w-full bg-white hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors border-0">
                <span className="text-black text-[17px]">How do I file my taxes?</span>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </button>
              <button onClick={onFAQRefund} className="flex items-center justify-between px-4 py-3 w-full bg-white hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors border-0">
                <span className="text-black text-[17px]">When will I receive my refund?</span>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </button>
              <button onClick={onFAQMakePayment} className="flex items-center justify-between px-4 py-3 w-full bg-white hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors border-0">
                <span className="text-black text-[17px]">How do I make a payment?</span>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </button>
              <button onClick={onFAQUpdateAddress} className="flex items-center justify-between px-4 py-3 w-full bg-white hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors border-0">
                <span className="text-black text-[17px]">How do I update my address?</span>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </button>
              <button onClick={onFAQNoticeOfAssessment} className="flex items-center justify-between px-4 py-3 w-full bg-white hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors border-0">
                <span className="text-black text-[17px]">What is a Notice of Assessment?</span>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </button>
            </div>
          </div>

          {/* Resources */}
          <div className="mb-4">
            <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">External resources on the CRA website</h2>
            <div className="bg-white rounded-[10px] overflow-hidden divide-y divide-[#c6c6c8]">
              <a href="https://www.canada.ca/en/revenue-agency.html" className="group flex items-center gap-3 px-4 py-4 hover:opacity-70 active:opacity-50 transition-opacity no-underline">
                <FileText className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-0.5">CRA website</div>
                  <div className="text-gray-ios text-[15px] opacity-80">canada.ca/taxes</div>
                </div>
                <ExternalLink className="h-5 w-5 text-[#c6c6c8] group-hover:text-[#007AFF] flex-shrink-0 transition-colors" />
              </a>

              <a href="#" className="group flex items-center gap-3 px-4 py-4 hover:opacity-70 active:opacity-50 transition-opacity no-underline">
                <FileText className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-0.5">Tax tips and guides</div>
                  <div className="text-gray-ios text-[15px] opacity-80">Helpful information for taxpayers</div>
                </div>
                <ExternalLink className="h-5 w-5 text-[#c6c6c8] group-hover:text-[#007AFF] flex-shrink-0 transition-colors" />
              </a>

              <a href="#" className="group flex items-center gap-3 px-4 py-4 hover:opacity-70 active:opacity-50 transition-opacity no-underline">
                <FileText className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px] mb-0.5">Forms and publications</div>
                  <div className="text-gray-ios text-[15px] opacity-80">Download tax forms and guides</div>
                </div>
                <ExternalLink className="h-5 w-5 text-[#c6c6c8] group-hover:text-[#007AFF] flex-shrink-0 transition-colors" />
              </a>
            </div>
          </div>

          {/* App version */}
          <div className="bg-white rounded-[10px] p-4">
            <div className="text-center">
              <p className="text-gray-ios text-[15px] m-0">
                App version: <button 
                  onClick={onShowAppVersion}
                  className="text-[#007AFF] hover:opacity-70 active:opacity-50 bg-transparent border-0 p-0 transition-opacity text-[15px]"
                >
                  Alpha 1.0.0
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}