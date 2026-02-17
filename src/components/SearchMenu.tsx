import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Search, X, ChevronRight } from 'lucide-react';
import { Input } from './ui/input';
import { AnimatePresence } from 'motion/react';
import { IPhoneKeyboard } from './IPhoneKeyboard';

interface SearchMenuProps {
  isOpen: boolean;
  onClose: () => void;
  // Navigation handlers
  onViewRefundDetails?: () => void;
  onViewNoticeOfAssessment?: () => void;
  onRegisteredPlans?: () => void;
  onViewAllBenefits?: () => void;
  onTaxSlips?: () => void;
  onGSTHSTCredit?: () => void;
  onAccountDetails?: () => void;
  onProfile?: () => void;
  onViewMail?: () => void;
  onProofOfIncome?: () => void;
  onViewTaxReturns?: () => void;
  onBecomeRepresentative?: () => void;
  onBecomeRepresentativeAsRep?: () => void;
  onHomeBuyersPlan?: () => void;
  onFHSAEligibility?: () => void;
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

export function SearchMenu({
  isOpen,
  onClose,
  onViewRefundDetails,
  onViewNoticeOfAssessment,
  onRegisteredPlans,
  onViewAllBenefits,
  onTaxSlips,
  onGSTHSTCredit,
  onAccountDetails,
  onProfile,
  onViewMail,
  onProofOfIncome,
  onViewTaxReturns,
  onBecomeRepresentative,
  onBecomeRepresentativeAsRep,
  onHomeBuyersPlan,
  onFHSAEligibility,
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
}: SearchMenuProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPortalContainer(document.getElementById('iphone-screen'));
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleCloseSearch = () => {
    onClose();
    setSearchQuery('');
    setShowKeyboard(false);
  };

  if (!isOpen || !portalContainer) return null;

  return createPortal(
    <>
      {/* Full Screen Overlay */}
      <div
        className="absolute inset-0 z-[9999] bg-black/40"
        onClick={handleCloseSearch}
      >
        <div
          className="absolute bottom-0 left-0 right-0 bg-[#F2F2F7] rounded-t-[13px] shadow-lg"
          onClick={(e) => e.stopPropagation()}
          style={{
            maxHeight: '70vh',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Header */}
          <div className="px-4 py-3 border-b border-[rgba(60,60,67,0.29)]">
            <div className="flex items-center justify-between">
              <h2 className="text-[20px] font-semibold text-black m-0">Search</h2>
              <button 
                onClick={handleCloseSearch}
                className="text-[#007AFF] hover:opacity-70 active:opacity-50 bg-transparent border-0 p-0 text-[17px] font-normal"
                aria-label="Close"
              >
                Done
              </button>
            </div>
          </div>
        
          {/* Content area */}
          <div 
            className="px-4 py-4 overflow-y-auto max-h-[calc(70vh-70px)]"
            onClick={(e) => {
              const target = e.target as HTMLElement;
              if (!target.closest('input') && !target.closest('button[type="button"]')) {
                setShowKeyboard(false);
              }
            }}
          >
            {/* Search Input */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-ios" />
                <Input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => {
                    setShowKeyboard(true);
                    setTimeout(() => {
                      searchInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 100);
                  }}
                  className="h-[36px] w-full bg-[rgba(142,142,147,0.12)] border-0 rounded-[10px] pl-10 text-[17px] focus:ring-0 focus:outline-none placeholder:text-gray-ios"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-ios bg-gray-ios rounded-full p-0.5 hover:opacity-70"
                  >
                    <X className="h-3.5 w-3.5 text-white" />
                  </button>
                )}
              </div>
            </div>

            {/* Search Results Placeholder */}
            {searchQuery && (
              <div className="mt-4">
                <p className="text-gray-ios text-[15px]">
                  Search results for "{searchQuery}" will appear here
                </p>
              </div>
            )}

            {!searchQuery && (
              <div className="mt-2">
                <h3 className="text-[13px] font-semibold text-gray-ios uppercase tracking-wide mb-3">Topics list</h3>
                <div className="space-y-0">
                  {[
                    { label: 'Account details and balance', handler: onAccountDetails },
                    { label: 'Address and telephone numbers (View, Update)', handler: onProfile },
                    { label: 'Advanced Canada workers benefit payments', handler: onViewAllBenefits },
                    { label: 'Audit and other enquiries', handler: onAuditEnquiries },
                    { label: 'Authorize a representative', handler: onBecomeRepresentative },
                    { label: 'Become a representative', handler: onBecomeRepresentativeAsRep },
                    { label: 'Benefits and credits overview', handler: onViewAllBenefits },
                    { label: 'Canada Child Benefit (View, Apply)', handler: onViewAllBenefits },
                    { label: 'Carryover amounts', handler: onCarryoverAmounts },
                    { label: 'Change my return', handler: onChangeMyReturn },
                    { label: 'Children/Dependants in my care (View, Update)', handler: onProfile },
                    { label: 'CPP/EI (Request a ruling)', handler: onCPPEIRuling },
                    { label: 'Customize online preferences', handler: onCustomize },
                    { label: 'Direct deposit (View, Update)', handler: onProfile },
                    { label: 'Disability tax credit (View)', handler: onViewAllBenefits },
                    { label: 'Formal dispute (Register)', handler: onRegisterFormalDispute },
                    { label: 'First Home Savings Account (FHSA)', handler: onFHSAEligibility },
                    { label: 'GST/HST rebate (View, Apply)', handler: onViewAllBenefits },
                    { label: "Home Buyers' Plan", handler: onHomeBuyersPlan },
                    { label: 'Instalments (View, Apply)', handler: onProfile },
                    { label: 'Lifelong Learning Plan', handler: onLifelongLearningPlan },
                    { label: 'Mail', handler: onViewMail },
                    { label: 'Marital status (View, Update)', handler: onProfile },
                    { label: 'Non-resident account (View, Open)', handler: onNonResidentAccount },
                    { label: 'Notice of assessment or reassessment', handler: onViewNoticeOfAssessment },
                    { label: 'Notification preferences', handler: onProfile },
                    { label: 'Personal Identification Number (PIN)', handler: onPersonalIdentificationNumber },
                    { label: 'Pre-authorized debit (View, Update)', handler: onProfile },
                    { label: 'Progress Tracker Service', handler: onProgressTrackerService },
                    { label: 'Proof of income statement', handler: onProofOfIncome },
                    { label: 'Relief of penalties and interest', handler: onReliefOfPenalties },
                    { label: 'Remittance voucher (Request)', handler: onRemittanceVoucher },
                    { label: 'Registered retirement savings plan (RRSP)', handler: onViewNoticeOfAssessment },
                    { label: 'Status of tax return', handler: onViewTaxReturns },
                    { label: 'Submit documents', handler: onSubmitDocuments },
                    { label: 'Tax information slips (View, Request)', handler: onTaxSlips },
                    { label: 'Tax free savings account (TFSA)', handler: onViewNoticeOfAssessment },
                    { label: 'Uncashed cheques', handler: onUncashedCheques }
                  ].map((item, index) => {
                    const hasNavigation = !!item.handler;
                    
                    return (
                      <button
                        key={index}
                        className="w-full text-left py-3 px-0 text-[#007AFF] text-[17px] bg-transparent border-0 hover:opacity-70 active:opacity-50 transition-opacity border-b border-[rgba(60,60,67,0.29)] last:border-0 flex items-center justify-between"
                        onClick={() => {
                          handleCloseSearch();
                          if (item.handler) {
                            item.handler();
                          }
                        }}
                      >
                        <span>{item.label}</span>
                        {hasNavigation && <ChevronRight className="h-5 w-5 text-gray-ios flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Keyboard */}
      <AnimatePresence>
        {showKeyboard && <IPhoneKeyboard />}
      </AnimatePresence>
    </>,
    portalContainer
  );
}