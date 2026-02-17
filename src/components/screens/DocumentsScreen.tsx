import { HeaderMaster } from '../HeaderMaster';
import { Card } from '../ui/card';
import { FileText, Download, ChevronRight, ChevronLeft, Calendar } from 'lucide-react';
import { Badge } from '../ui/badge';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

const documents = [
  {
    title: 'Notice of Assessment – 2025',
    type: 'PDF',
    date: 'Mar 12, 2026',
    size: '245 KB',
    category: 'Tax documents',
    badge: 'New',
  },
  {
    title: 'T4 Statement of Remuneration Paid',
    type: 'PDF',
    date: 'Feb 28, 2025',
    size: '128 KB',
    category: 'Tax slips',
    badge: null,
  },
  {
    title: 'Correspondence – March 2025',
    type: 'PDF',
    date: 'Mar 5, 2025',
    size: '89 KB',
    category: 'Correspondence',
    badge: null,
  },
  {
    title: 'Notice of Assessment – 2024',
    type: 'PDF',
    date: 'Apr 20, 2025',
    size: '238 KB',
    category: 'Tax documents',
    badge: null,
  },
  {
    title: 'T4A Statement of Pension Income',
    type: 'PDF',
    date: 'Feb 15, 2025',
    size: '156 KB',
    category: 'Tax slips',
    badge: null,
  },
  {
    title: 'Canada Child Benefit Statement 2025',
    type: 'PDF',
    date: 'Jan 10, 2026',
    size: '102 KB',
    category: 'Benefits',
    badge: null,
  },
];

interface DocumentsScreenProps {
  onViewMail?: () => void;
  onNavigateHome?: () => void;
  onLogoClick?: () => void;
  hasUnreadMail?: boolean;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onUserFeedback?: () => void;
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

export function DocumentsScreen({ onViewMail, onNavigateHome, onLogoClick, hasUnreadMail, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onUserFeedback, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onBecomeRepresentative, onBecomeRepresentativeAsRep, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments }: DocumentsScreenProps) {
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Documents</h1>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Section Header */}
        <div className="section-header-ios">
          Tax documents and forms
        </div>

        {/* Documents List */}
        <div className="px-4 pb-4 space-y-3">
          {documents.map((doc, index) => (
            <button
              key={index}
              className="card-ios p-4 w-full text-left hover:opacity-70 active:opacity-50 transition-opacity border-0 bg-white"
            >
              <div className="flex items-start gap-3">
                <div className="bg-[#007AFF] bg-opacity-10 rounded-[10px] p-2.5 flex-shrink-0">
                  <FileText className="h-5 w-5 text-[#007AFF]" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-[17px] font-semibold text-black m-0">{doc.title}</h4>
                        {doc.badge && (
                          <Badge className="bg-[#007AFF] text-white border-0 hover:bg-[#007AFF] rounded-full text-[11px] px-2 py-0.5">
                            {doc.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-ios text-[13px] m-0">{doc.category}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-[#c7c7cc] flex-shrink-0 mt-1" />
                  </div>
                  
                  <div className="flex items-center gap-2 text-[13px] text-gray-ios">
                    <span>{doc.date}</span>
                    <span>•</span>
                    <span>{doc.size}</span>
                    <span>•</span>
                    <span>{doc.type}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Request Document */}
        <div className="px-4 mt-1">
          <div className="card-ios p-4 border-2 border-dashed border-[#c7c7cc]">
            <div className="border-l-4 border-[#007AFF] pl-4 py-2">
              <h3 className="text-[17px] font-semibold text-black mb-2">Can't find what you're looking for?</h3>
              <p className="text-gray-ios text-[15px] m-0 mb-4">
                Request a copy of a document from CRA
              </p>
              <button className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity flex items-center gap-1">
                Request a document
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}