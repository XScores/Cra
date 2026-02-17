import { ChevronLeft, Mail, Gift, Receipt, FileCheck, HelpCircle, LogOut, CreditCard, CheckCircle2 } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';
import { useState, useRef, useEffect } from 'react';

interface PaymentFrequencyScreenProps {
  onBack: () => void;
  currentFrequency: string;
  onSelectFrequency: (frequency: string) => void;
  type?: 'payment' | 'reminder';
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
  onViewAllBenefits?: () => void;
  onViewRefundDetails?: () => void;
  onViewNoticeOfAssessment?: () => void;
  onGSTHSTCredit?: () => void;
  onAccountDetails?: () => void;
  onProfile?: () => void;
  onViewTaxReturns?: () => void;
}

export function PaymentFrequencyScreen({ 
  onBack, 
  currentFrequency,
  onSelectFrequency,
  type = 'payment',
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
  hasUnreadMail = false,
  onViewAllBenefits,
  onViewRefundDetails,
  onViewNoticeOfAssessment,
  onGSTHSTCredit,
  onAccountDetails,
  onProfile,
  onViewTaxReturns
}: PaymentFrequencyScreenProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const paymentFrequencies = [
    { value: 'weekly', label: 'Weekly', description: 'Payment withdrawals every week' },
    { value: 'biweekly', label: 'Bi-weekly', description: 'Payment withdrawals every 2 weeks' },
    { value: 'monthly', label: 'Monthly', description: 'Payment withdrawals every month' },
    { value: 'quarterly', label: 'Quarterly', description: 'Payment withdrawals every 3 months' },
    { value: 'annual', label: 'Annual', description: 'Payment withdrawals once per year' }
  ];

  const reminderFrequencies = [
    { value: 'weekly', label: 'Weekly', description: 'Reminder notifications every week' },
    { value: 'monthly', label: 'Monthly', description: 'Reminder notifications every month' },
    { value: 'quarterly', label: 'Quarterly', description: 'Reminder notifications every 3 months' },
    { value: 'annual', label: 'Annual', description: 'Reminder notifications once per year' }
  ];

  const frequencies = type === 'payment' ? paymentFrequencies : reminderFrequencies;

  const handleSelectFrequency = (frequency: string) => {
    onSelectFrequency(frequency);
    onBack();
  };

  return (
    <div className="flex flex-col h-full bg-white relative">
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
        />
      </div>

      {/* Content - Scrollable */}
      <div ref={scrollContainerRef} className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Back Button and Page Title */}
        <div className="px-4 pt-2 pb-3 bg-[#f2f2f7]">
          <div className="flex items-start gap-3">
            <button
              onClick={onBack}
              className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0 mt-[2px]"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={3} />
            </button>
            <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">
              {type === 'payment' ? 'Payment Frequency' : 'Reminder Frequency'}
            </h1>
          </div>
          <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px] mt-2">
            {type === 'payment' 
              ? 'Choose how often you want to make instalment payments'
              : 'Choose how often you want to receive payment reminders'}
          </p>
        </div>

        {/* Main Content */}
        <div className="px-4">
          <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Select Frequency</h2>
          <div className="card-ios overflow-hidden">
            {frequencies.map((freq, index) => (
              <button
                key={freq.value}
                onClick={() => handleSelectFrequency(freq.value)}
                className={`list-item-ios block w-full px-4 py-3 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left group ${
                  index !== frequencies.length - 1 ? 'border-b border-[#c6c6c8]' : ''
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-black text-[17px]">{freq.label}</div>
                    <div className="text-[#8e8e93] text-[15px]">{freq.description}</div>
                  </div>
                  <CheckCircle2 
                    className={`h-6 w-6 flex-shrink-0 transition-colors ${
                      currentFrequency === freq.value 
                        ? 'text-[#007AFF] fill-[#007AFF]' 
                        : 'text-[#c7c7cc] group-hover:text-[#007AFF]'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}