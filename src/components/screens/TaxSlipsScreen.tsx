import { HeaderMaster } from '../HeaderMaster';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Textarea } from '../ui/textarea';
import { IPhoneKeyboard } from '../IPhoneKeyboard';
import { useKeyboardScroll } from '../useKeyboardScroll';
import { 
  Mail, 
  ChevronLeft, 
  Download, 
  FileText, 
  Eye, 
  X, 
  Bold, 
  Italic, 
  Underline, 
  Link, 
  Image, 
  Smile, 
  Paperclip 
} from 'lucide-react';
import craHeader from 'figma:asset/fec27de527fdcac8633bffc5456b4f486d9a260e.png';

interface TaxSlipsScreenProps {
  onBack: () => void;
  onViewMail?: () => void;
  onNavigateHome: () => void;
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
  onUserFeedback?: () => void;
  openNoticeOfAssessmentOnMount?: boolean;
  hasUnreadMail?: boolean;
}

const taxSlips = [
  {
    year: 2024,
    slips: [
      { type: 'Notice of Assessment', name: '2024 Tax Year Assessment', issuer: 'Canada Revenue Agency', amount: '$850.00', status: 'Available' },
      { type: 'T4', name: 'Statement of Remuneration Paid', employer: 'ABC Corporation', amount: '$65,234.50', status: 'Available' },
      { type: 'T5', name: 'Statement of Investment Income', issuer: 'Royal Bank', amount: '$1,842.30', status: 'Available' },
      { type: 'T4A', name: 'Statement of Pension, Retirement, Annuity', issuer: 'Canadian Pension Plan', amount: '$0.00', status: 'Not issued' },
    ]
  },
  {
    year: 2023,
    slips: [
      { type: 'T4', name: 'Statement of Remuneration Paid', employer: 'ABC Corporation', amount: '$62,150.00', status: 'Available' },
      { type: 'T5', name: 'Statement of Investment Income', issuer: 'Royal Bank', amount: '$1,523.75', status: 'Available' },
      { type: 'T3', name: 'Statement of Trust Income Allocations', issuer: 'Vanguard Investments', amount: '$425.80', status: 'Available' },
      { type: 'T5007', name: 'Statement of Benefits', issuer: 'Service Canada', amount: '$0.00', status: 'Available' },
    ]
  },
  {
    year: 2022,
    slips: [
      { type: 'T4', name: 'Statement of Remuneration Paid', employer: 'ABC Corporation', amount: '$58,900.00', status: 'Available' },
      { type: 'T5', name: 'Statement of Investment Income', issuer: 'Royal Bank', amount: '$982.45', status: 'Available' },
      { type: 'T4E', name: 'Statement of Employment Insurance', issuer: 'Service Canada', amount: '$3,240.00', status: 'Available' },
    ]
  }
];

export function TaxSlipsScreen({ onBack, onViewMail, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onBecomeRepresentative, onBecomeRepresentativeAsRep, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments, onUserFeedback, openNoticeOfAssessmentOnMount, hasUnreadMail }: TaxSlipsScreenProps) {
  const [composeOpen, setComposeOpen] = useState(false);
  const [showCc, setShowCc] = useState(false);
  const [showBcc, setShowBcc] = useState(false);
  const [composeTo, setComposeTo] = useState('');
  const [composeCc, setComposeCc] = useState('');
  const [composeBcc, setComposeBcc] = useState('');
  const [composeSubject, setComposeSubject] = useState('');
  const [composeMessage, setComposeMessage] = useState('');
  const [showDiscardConfirm, setShowDiscardConfirm] = useState(false);
  const [showDownloadDialog, setShowDownloadDialog] = useState(false);
  const [downloadingSlip, setDownloadingSlip] = useState<{ type: string; year: number; employer: string } | null>(null);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [showPDFViewer, setShowPDFViewer] = useState(false);
  const [viewingSlip, setViewingSlip] = useState<{ type: string; year: number; employer: string } | null>(null);
  const [showKeyboard, setShowKeyboard] = useState(false);

  // Use keyboard scroll hook
  useKeyboardScroll({ 
    isKeyboardVisible: showKeyboard, 
    activeField: 'input',
    keyboardHeight: 260
  });

  // Open Notice of Assessment PDF when prop is true
  useEffect(() => {
    if (openNoticeOfAssessmentOnMount) {
      const noticeSlip = taxSlips[0].slips.find(slip => slip.type === 'Notice of Assessment');
      if (noticeSlip) {
        setViewingSlip({ type: noticeSlip.type, year: 2024, employer: noticeSlip.issuer });
        setShowPDFViewer(true);
      }
    }
  }, [openNoticeOfAssessmentOnMount]);

  useEffect(() => {
    if (showDownloadDialog && !downloadComplete) {
      // Simulate download progress
      const interval = setInterval(() => {
        setDownloadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setDownloadComplete(true);
            return 100;
          }
          return prev + 10;
        });
      }, 150);
      
      return () => clearInterval(interval);
    }
  }, [showDownloadDialog, downloadComplete]);

  const handleEmailT4 = () => {
    setComposeOpen(true);
    setComposeTo('');
    setComposeSubject('2024 T4 Statement Request');
    setComposeMessage('');
  };

  const handleEmailSlip = (slip: any, year: number) => {
    setComposeOpen(true);
    setComposeTo('');
    if (slip.type === 'Notice of Assessment') {
      setComposeSubject(`${year} Notice of Assessment`);
    } else {
      setComposeSubject(`${year} ${slip.type} Statement Request`);
    }
    setComposeMessage('');
  };

  const handleDownload = (slip: any, year: number) => {
    setDownloadingSlip({
      type: slip.type,
      year: year,
      employer: slip.employer || slip.issuer
    });
    setDownloadProgress(0);
    setDownloadComplete(false);
    setShowDownloadDialog(true);
  };

  const handleCloseDownload = () => {
    setShowDownloadDialog(false);
    setDownloadingSlip(null);
    setDownloadProgress(0);
    setDownloadComplete(false);
  };

  const handleViewSlip = (slip: any, year: number) => {
    setViewingSlip({
      type: slip.type,
      year: year,
      employer: slip.employer || slip.issuer
    });
    setShowPDFViewer(true);
  };

  const handleClosePDFViewer = () => {
    setShowPDFViewer(false);
    setViewingSlip(null);
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
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Tax slips and documents</h1>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Info Note */}
        <div className="px-4 mb-4">
          <div className="bg-[#fff9e6] rounded-[10px] p-4 border-l-4 border-[#ffcc00]">
            <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
              <strong className="text-black">Note:</strong> Tax slips are typically available by the end of February for the previous tax year. You can view and download your slips here for filing your tax return.
            </p>
          </div>
        </div>

        {/* Overview */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Overview</h2>
            <p className="text-[#3c3c43] text-[17px] mb-4 leading-snug">
              The CRA receives tax information slips from employers, financial institutions, and other organizations. You can view and download your tax slips here.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b border-[#c6c6c8]">
                <span className="text-[#3c3c43] text-[17px]">Available slips (2024)</span>
                <span className="text-black text-[17px] text-right">2 slips</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-[#3c3c43] text-[17px]">Total years available</span>
                <span className="text-black text-[17px] text-right">3 years (2022-2024)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tax Slips by Year */}
        {taxSlips.map((yearData) => (
          <div key={yearData.year} className="px-4 mb-4">
            <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">{yearData.year} Tax Year</h2>
            
            <div className="bg-white rounded-[10px] overflow-hidden divide-y divide-[#c6c6c8]">
              {yearData.slips.map((slip, index) => (
                <div key={index} className="p-4">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <FileText className="h-5 w-5 text-[#007AFF]" strokeWidth={2.5} />
                        <h3 className="text-black text-[17px] m-0">{slip.type}</h3>
                        {slip.status === 'Available' && (
                          <span className="bg-[#28a745] text-white px-2 py-0.5 text-[11px] rounded-full font-bold">
                            Available
                          </span>
                        )}
                        {slip.status === 'Not issued' && (
                          <span className="bg-gray-ios text-white px-2 py-0.5 text-[11px] rounded-full font-bold">
                            Not issued
                          </span>
                        )}
                      </div>
                      <p className="text-[#3c3c43] text-[15px] m-0 mb-2 leading-snug">{slip.name}</p>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-ios text-[15px]">Issuer</span>
                          <span className="text-black text-[15px] text-right">{slip.employer || slip.issuer}</span>
                        </div>
                        {slip.amount !== '$0.00' && (
                          <div className="flex justify-between items-center">
                            <span className="text-gray-ios text-[15px]">Amount</span>
                            <span className="text-[#28a745] text-[15px] text-right">{slip.amount}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {slip.status === 'Available' && (
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleViewSlip(slip, yearData.year)}
                        className="flex-1 flex items-center justify-center gap-1 bg-[#007AFF] text-white px-3 py-2.5 rounded-[10px] hover:opacity-80 active:opacity-60 transition-opacity border-0 cursor-pointer"
                      >
                        <Eye className="h-4 w-4" strokeWidth={2.5} />
                        <span className="text-[15px]">View</span>
                      </button>
                      <button 
                        onClick={() => handleDownload(slip, yearData.year)}
                        className="flex-1 flex items-center justify-center gap-1 bg-[#007AFF] text-white px-3 py-2.5 rounded-[10px] hover:opacity-80 active:opacity-60 transition-opacity border-0 cursor-pointer"
                      >
                        <Download className="h-4 w-4" strokeWidth={2.5} />
                        <span className="text-[15px]">Download</span>
                      </button>
                      <button 
                        onClick={() => yearData.year === 2024 && slip.type === 'T4' ? handleEmailT4() : handleEmailSlip(slip, yearData.year)}
                        className="flex-1 flex items-center justify-center gap-1 bg-[#007AFF] text-white px-3 py-2.5 rounded-[10px] hover:opacity-80 active:opacity-60 transition-opacity border-0 cursor-pointer"
                      >
                        <Mail className="h-4 w-4" strokeWidth={2.5} />
                        <span className="text-[15px]">Email</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* About Tax Slips */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">About tax slips</h2>
            <div className="space-y-3">
              <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
                <strong className="text-black">Notice of Assessment:</strong> Official document from the CRA showing your tax return results, including any refund or balance owing, RRSP deduction limit, TFSA contribution room and details of your assessment
              </p>
              <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
                <strong className="text-black">T4:</strong> Employment income slip showing salary, wages, and deductions
              </p>
              <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
                <strong className="text-black">T5:</strong> Investment income slip for interest, dividends, and capital gains
              </p>
              <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
                <strong className="text-black">T4A:</strong> Pension, retirement, annuity, and other income
              </p>
              <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
                <strong className="text-black">T4E:</strong> Employment Insurance benefits
              </p>
              <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
                <strong className="text-black">T3:</strong> Trust income allocations and designations
              </p>
              <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
                <strong className="text-black">T5007:</strong> Statement of benefits (social assistance, workers' compensation)
              </p>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Need help?</h2>
            <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
              If you believe a tax slip is missing or contains incorrect information, contact the issuer directly.
            </p>
          </div>
        </div>
      </div>

      {/* Compose Dialog */}
      {composeOpen && (
        <>
          <div className="absolute inset-0 z-[100] flex items-start justify-center p-4 bg-black/50">
            <div className="bg-white w-[calc(100%-20px)] max-w-[500px] shadow-lg rounded-[20px] h-[calc(100%-260px)] flex flex-col mt-4 overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 border-b border-[#c6c6c8] relative bg-white flex-shrink-0">
                <h2 className="text-black text-[20px] m-0 pr-8">New Message</h2>
                <button 
                  onClick={() => setComposeOpen(false)}
                  className="absolute top-4 right-4 text-gray-ios hover:opacity-70 active:opacity-50 bg-transparent border-0 p-0"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            
              {/* Scrollable content area */}
              <div 
                className="px-6 flex-1 overflow-y-auto flex flex-col"
                style={{ paddingTop: '16px', paddingBottom: showKeyboard ? '260px' : '16px' }}
                onClick={(e) => {
                  const target = e.target as HTMLElement;
                  if (!target.closest('input') && !target.closest('textarea') && !target.closest('button[type="button"]')) {
                    setShowKeyboard(false);
                  }
                }}
              >
                {/* To field */}
                <div className="mb-3 pb-3 border-b border-[#c6c6c8]">
                  <div className="flex items-center gap-3">
                    <label className="text-gray-ios text-[15px] min-w-[40px]">To:</label>
                    <input
                      type="text"
                      value={composeTo}
                      onChange={(e) => setComposeTo(e.target.value)}
                      onFocus={() => setShowKeyboard(true)}
                      placeholder="Enter recipient"
                      className="flex-1 border-0 outline-none text-[15px] text-black bg-transparent p-0"
                    />
                    <div className="flex items-center gap-2">
                      {!showCc && (
                        <button 
                          onClick={() => setShowCc(true)}
                          className="text-[#007AFF] hover:opacity-70 active:opacity-50 text-[13px] bg-transparent border-0 p-0"
                        >
                          Cc
                        </button>
                      )}
                      {!showBcc && (
                        <button 
                          onClick={() => setShowBcc(true)}
                          className="text-[#007AFF] hover:opacity-70 active:opacity-50 text-[13px] bg-transparent border-0 p-0"
                        >
                          Bcc
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Cc field */}
                {showCc && (
                  <div className="mb-3 pb-3 border-b border-[#c6c6c8]">
                    <div className="flex items-center gap-3">
                      <label className="text-gray-ios text-[15px] min-w-[40px]">Cc:</label>
                      <input
                        type="text"
                        value={composeCc}
                        onChange={(e) => setComposeCc(e.target.value)}
                        onFocus={() => setShowKeyboard(true)}
                        placeholder="Enter recipients"
                        className="flex-1 border-0 outline-none text-[15px] text-black bg-transparent p-0"
                      />
                      <button 
                        onClick={() => {
                          setShowCc(false);
                          setComposeCc('');
                        }}
                        className="text-[#8e8e93] hover:opacity-70 active:opacity-50 bg-transparent border-0 p-0"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Bcc field */}
                {showBcc && (
                  <div className="mb-3 pb-3 border-b border-[#c6c6c8]">
                    <div className="flex items-center gap-3">
                      <label className="text-gray-ios text-[15px] min-w-[40px]">Bcc:</label>
                      <input
                        type="text"
                        value={composeBcc}
                        onChange={(e) => setComposeBcc(e.target.value)}
                        onFocus={() => setShowKeyboard(true)}
                        placeholder="Enter recipients"
                        className="flex-1 border-0 outline-none text-[15px] text-black bg-transparent p-0"
                      />
                      <button 
                        onClick={() => {
                          setShowBcc(false);
                          setComposeBcc('');
                        }}
                        className="text-[#8e8e93] hover:opacity-70 active:opacity-50 bg-transparent border-0 p-0"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Subject field */}
                <div className="mb-4 pb-3 border-b border-[#c6c6c8]">
                  <div className="flex items-center gap-3">
                    <label className="text-gray-ios text-[15px] min-w-[40px]">Subject:</label>
                    <input
                      type="text"
                      value={composeSubject}
                      onChange={(e) => setComposeSubject(e.target.value)}
                      onFocus={() => setShowKeyboard(true)}
                      placeholder="Enter subject"
                      className="flex-1 border-0 outline-none text-[15px] text-black bg-transparent p-0"
                    />
                  </div>
                </div>

                {/* Attachment - T4 Document */}
                <div className="mb-4 pb-3 border-b border-[#c6c6c8]">
                  <div className="flex items-center gap-2 bg-[#f2f2f7] p-3 rounded-[10px]">
                    <Paperclip className="h-4 w-4 text-[#007AFF]" />
                    <div className="flex-1">
                      <div className="text-black text-[15px]">T4-2024-ABC-Corporation.pdf</div>
                      <div className="text-gray-ios text-[13px]">248 KB</div>
                    </div>
                    <button 
                      className="text-[#8e8e93] hover:opacity-70 active:opacity-50 bg-transparent border-0 p-0"
                      aria-label="Remove attachment"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Message body */}
                <div className="mb-4">
                  <Textarea
                    value={composeMessage}
                    onChange={(e) => setComposeMessage(e.target.value)}
                    onFocus={() => setShowKeyboard(true)}
                    placeholder="Type your message here..."
                    style={{ height: showKeyboard ? '120px' : '180px' }}
                    className="w-full border border-[#c6c6c8] rounded-[10px] resize-none overflow-y-auto text-[17px] text-black focus:outline-none focus:border-[#007AFF] p-3"
                  />
                </div>

                {/* Formatting toolbar */}
                <div className="mb-4 pb-4 border-b border-[#c6c6c8]">
                  <div className="flex items-center gap-1">
                    <button 
                      className="p-2 hover:bg-[#f2f2f7] rounded-[8px] transition-colors bg-transparent border-0 text-gray-ios"
                      aria-label="Bold"
                      title="Bold"
                    >
                      <Bold className="h-4 w-4" />
                    </button>
                    <button 
                      className="p-2 hover:bg-[#f2f2f7] rounded-[8px] transition-colors bg-transparent border-0 text-gray-ios"
                      aria-label="Italic"
                      title="Italic"
                    >
                      <Italic className="h-4 w-4" />
                    </button>
                    <button 
                      className="p-2 hover:bg-[#f2f2f7] rounded-[8px] transition-colors bg-transparent border-0 text-gray-ios"
                      aria-label="Underline"
                      title="Underline"
                    >
                      <Underline className="h-4 w-4" />
                    </button>
                    <div className="w-px h-5 bg-[#c6c6c8] mx-1" />
                    <button 
                      className="p-2 hover:bg-[#f2f2f7] rounded-[8px] transition-colors bg-transparent border-0 text-gray-ios"
                      aria-label="Insert link"
                      title="Insert link"
                    >
                      <Link className="h-4 w-4" />
                    </button>
                    <button 
                      className="p-2 hover:bg-[#f2f2f7] rounded-[8px] transition-colors bg-transparent border-0 text-gray-ios"
                      aria-label="Insert image"
                      title="Insert image"
                    >
                      <Image className="h-4 w-4" />
                    </button>
                    <button 
                      className="p-2 hover:bg-[#f2f2f7] rounded-[8px] transition-colors bg-transparent border-0 text-gray-ios"
                      aria-label="Insert emoji"
                      title="Insert emoji"
                    >
                      <Smile className="h-4 w-4" />
                    </button>
                    <div className="w-px h-5 bg-[#c6c6c8] mx-1" />
                    <button 
                      className="p-2 hover:bg-[#f2f2f7] rounded-[8px] transition-colors bg-transparent border-0 text-gray-ios flex items-center gap-2"
                      aria-label="Attach file"
                      title="Attach file"
                    >
                      <Paperclip className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action buttons - Fixed at bottom */}
              <div className="px-6 py-4 border-t border-[#c6c6c8] bg-white flex-shrink-0">
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => setShowDiscardConfirm(true)}
                    className="text-[#ff3b30] hover:opacity-70 active:opacity-50 text-[17px] bg-transparent border-0 p-0"
                  >
                    Discard
                  </button>
                  <button 
                    onClick={() => {
                      // Handle send logic
                      setComposeOpen(false);
                      // Reset form
                      setComposeTo('');
                      setComposeCc('');
                      setComposeBcc('');
                      setComposeSubject('');
                      setComposeMessage('');
                      setShowCc(false);
                      setShowBcc(false);
                    }}
                    className="bg-[#007AFF] text-white px-6 py-2.5 rounded-[10px] hover:opacity-80 active:opacity-60 transition-opacity border-0"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {showKeyboard && <IPhoneKeyboard key="keyboard" />}
          </AnimatePresence>

          {/* Discard Confirmation Dialog */}
          {showDiscardConfirm && (
            <div className="absolute inset-0 z-[300] flex items-center justify-center p-4">
              {/* Backdrop */}
              <div 
                className="absolute inset-0 bg-black/50"
                onClick={() => setShowDiscardConfirm(false)}
              />
              
              {/* Dialog */}
              <div className="relative bg-white rounded-[20px] shadow-lg max-w-[320px] w-full overflow-hidden">
                {/* Content */}
                <div className="p-6">
                  <h2 className="text-black text-[20px] mb-4 m-0">
                    Discard message?
                  </h2>
                  <p className="text-[#3c3c43] text-[17px] mb-6 m-0 leading-snug">
                    This message will not be saved. This action cannot be undone.
                  </p>
                  
                  {/* Buttons */}
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => {
                        setComposeOpen(false);
                        setComposeTo('');
                        setComposeCc('');
                        setComposeBcc('');
                        setComposeSubject('');
                        setComposeMessage('');
                        setShowCc(false);
                        setShowBcc(false);
                        setShowDiscardConfirm(false);
                      }}
                      className="w-full bg-[#ff3b30] text-white px-4 py-3 rounded-[10px] hover:opacity-80 active:opacity-60 transition-opacity text-center border-0"
                    >
                      Yes, discard message
                    </button>
                    <button
                      onClick={() => setShowDiscardConfirm(false)}
                      className="w-full bg-[#f2f2f7] text-black px-4 py-3 rounded-[10px] hover:opacity-80 active:opacity-60 transition-opacity text-center border-0"
                    >
                      No, keep editing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Download Dialog */}
      {showDownloadDialog && downloadingSlip && (
        <div className="absolute inset-0 z-[100] flex items-center justify-center p-4 bg-black/50">
          <div className="relative bg-white rounded-[20px] shadow-lg max-w-[340px] w-full overflow-hidden">
            {/* Content */}
            <div className="p-6">
              {!downloadComplete ? (
                <>
                  <h2 className="text-black text-[20px] mb-4 m-0">
                    Downloading to Files
                  </h2>
                  <div className="mb-4">
                    <p className="text-[#3c3c43] text-[15px] mb-2 m-0 leading-snug">
                      {downloadingSlip.type}-{downloadingSlip.year}-{downloadingSlip.employer.replace(/\s+/g, '-')}.pdf
                    </p>
                    <div className="w-full bg-[#c6c6c8] rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-[#007AFF] h-full transition-all duration-300"
                        style={{ width: `${downloadProgress}%` }}
                      />
                    </div>
                    <p className="text-[#8e8e93] text-[13px] mt-2 m-0">
                      {downloadProgress}% complete
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-black text-[20px] mb-4 m-0">
                    Download Complete
                  </h2>
                  <div className="mb-6">
                    <p className="text-[#3c3c43] text-[17px] mb-3 m-0 leading-snug">
                      Your document has been saved to:
                    </p>
                    <div className="bg-[#f2f2f7] p-3 rounded-[10px]">
                      <p className="text-black text-[15px] break-all m-0">
                        Files → Downloads → {downloadingSlip.type}-{downloadingSlip.year}-{downloadingSlip.employer.replace(/\s+/g, '-')}.pdf
                      </p>
                    </div>
                  </div>
                  
                  {/* Buttons */}
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={handleCloseDownload}
                      className="w-full bg-[#007AFF] text-white px-4 py-3 rounded-[10px] hover:opacity-80 active:opacity-60 transition-opacity text-center border-0"
                    >
                      Done
                    </button>
                    <button
                      className="w-full bg-[#f2f2f7] text-black px-4 py-3 rounded-[10px] hover:opacity-80 active:opacity-60 transition-opacity text-center border-0"
                    >
                      Open in Files
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* PDF Viewer */}
      {showPDFViewer && viewingSlip && (
        <div className="absolute inset-0 z-[200] bg-white">
          {/* Header with back button and close button */}
          <div className="h-[60px] bg-[#007AFF] flex items-center justify-between px-4">
            <div className="flex items-center gap-3 flex-1">
              <button
                onClick={handleClosePDFViewer}
                className="text-white hover:opacity-70 active:opacity-50 bg-transparent border-2 border-white rounded-full p-1.5 flex items-center justify-center w-8 h-8"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <p className="text-white text-[15px] m-0 truncate">
                {viewingSlip.type === 'Notice of Assessment' 
                  ? `${viewingSlip.type}-${viewingSlip.year}.pdf`
                  : `${viewingSlip.type}-${viewingSlip.year}-${viewingSlip.employer.replace(/\s+/g, '-')}.pdf`
                }
              </p>
            </div>
            <button
              onClick={handleClosePDFViewer}
              className="text-white hover:opacity-70 active:opacity-50 bg-transparent border-0 p-1 ml-2"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* PDF Content Area */}
          <div className="h-[calc(100%-60px)] overflow-y-auto bg-[#f2f2f7] p-4">
            {viewingSlip.type === 'Notice of Assessment' ? (
              // Notice of Assessment with separate white panels
              <div className="space-y-4 max-w-[600px] mx-auto">
                {/* First white panel - Notice information */}
                <div className="bg-white rounded-[10px] p-6 shadow-sm">
                  {/* Mock PDF Content */}
                  <div className="border-b-2 border-[#ff3b30] pb-4 mb-6">
                    <img src={craHeader} alt="Canada Revenue Agency" className="h-auto w-auto max-h-8 mb-2 object-contain" />
                    <h2 className="text-black text-[20px] font-bold m-0">Notice of assessment</h2>
                  </div>

                  {/* Name and Address */}
                  <div className="mb-6">
                    <p className="text-black text-[17px] m-0 leading-snug">Jonathan Rath</p>
                    <p className="text-black text-[17px] m-0 leading-snug">123 Main Street</p>
                    <p className="text-black text-[17px] m-0 leading-snug">Ottawa ON. H0H 0H0</p>
                  </div>
                  
                  {/* Notice details */}
                  <div className="mb-6">
                    <h3 className="text-black text-[17px] font-bold mb-2 m-0">Notice details</h3>
                    <div className="space-y-0">
                      <div className="flex justify-between py-1.5 border-b border-[#c6c6c8]">
                        <span className="text-[#3c3c43] text-[17px]">Social insurance number</span>
                        <span className="text-black text-[17px] text-right">*** *** 456</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-[#c6c6c8]">
                        <span className="text-[#3c3c43] text-[17px]">Tax year</span>
                        <span className="text-black text-[17px] text-right">{viewingSlip.year}</span>
                      </div>
                      <div className="flex justify-between py-1.5">
                        <span className="text-[#3c3c43] text-[17px]">Date issued</span>
                        <span className="text-black text-[17px] text-right">May 5, 2025</span>
                      </div>
                    </div>
                  </div>

                  {/* Account Summary */}
                  <div>
                    <h3 className="text-black text-[17px] font-bold mb-3 m-0">Account Summary</h3>
                    <div className="space-y-3">
                      <p className="text-black text-[17px] m-0 leading-snug mb-3">
                        We assessed your 2024 income tax and benefit return and calculated your balance.
                      </p>
                      <p className="text-black text-[17px] m-0 leading-snug mb-3">
                        You have an amount owing of <strong className="text-[#ff3b30]">$1,250.00</strong>.
                      </p>
                      <p className="text-black text-[17px] m-0 leading-snug">
                        Please make a payment by <strong>April 30th 2025</strong>.
                      </p>
                      <div className="mt-4">
                        <p className="text-black text-[17px] m-0 leading-snug">Thank you,</p>
                        <p className="text-black text-[17px] m-0 leading-snug mt-2"><strong>Bob Hamilton</strong></p>
                        <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">Commissioner of Revenue</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second white panel - Tax assessment */}
                <div className="bg-white rounded-[10px] p-6 shadow-sm">
                  <h3 className="text-black text-[17px] font-bold mb-3 m-0">Tax assessment</h3>
                  <div className="space-y-3">
                    <p className="text-black text-[15px] m-0 leading-snug">
                      We calculated your taxes using the amounts below. The following summary is based on the information we have or you gave us.
                    </p>
                    
                    <p className="text-black text-[15px] m-0 leading-snug">
                      We may review your return later to verify income you reported or deductions or credits you claimed. For more information, go to <span className="text-[#007AFF]">canada.ca/taxes-reviews</span>. Keep all your slips, receipts, and other supporting documents in case we ask to see them.
                    </p>
                    
                    <p className="text-[#3c3c43] text-[15px] m-0 leading-snug italic">
                      Note, DR (debit) is the amount you owe us and CR (credit) is the amount we owe you.
                    </p>

                    {/* Summary Table */}
                    <div className="mt-4">
                      <h4 className="text-black text-[17px] font-bold mb-3 m-0">Summary</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b-2 border-[#c6c6c8]">
                              <th className="text-left text-black text-[13px] font-bold py-2 px-1">Line</th>
                              <th className="text-left text-black text-[13px] font-bold py-2 px-1">Description</th>
                              <th className="text-right text-black text-[13px] font-bold py-2 px-1">$ Final amount</th>
                              <th className="text-center text-black text-[13px] font-bold py-2 px-1 w-[50px]">CR/DR</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1 whitespace-nowrap">15000</td>
                              <td className="text-black text-[15px] py-2.5 px-1">Total income</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right whitespace-nowrap">166,303</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-center"></td>
                            </tr>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1"></td>
                              <td className="text-black text-[15px] py-2.5 px-1">Deductions from total income</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right whitespace-nowrap">46,475</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-center"></td>
                            </tr>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1 whitespace-nowrap">23600</td>
                              <td className="text-black text-[15px] py-2.5 px-1">Net income</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right whitespace-nowrap">119,828</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-center"></td>
                            </tr>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1 whitespace-nowrap">26000</td>
                              <td className="text-black text-[15px] py-2.5 px-1 whitespace-nowrap">Taxable income</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right whitespace-nowrap">119,828</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-center"></td>
                            </tr>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1 whitespace-nowrap">35000</td>
                              <td className="text-black text-[15px] py-2.5 px-1">Total federal non-refundable tax credits</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right whitespace-nowrap">3,210</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-center"></td>
                            </tr>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1 whitespace-nowrap">61500</td>
                              <td className="text-black text-[15px] py-2.5 px-1">Total Ontario non-refundable tax credits</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right whitespace-nowrap">841</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-center"></td>
                            </tr>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1 whitespace-nowrap">42000</td>
                              <td className="text-black text-[15px] py-2.5 px-1">Net federal tax</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right whitespace-nowrap">18,726.14</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-center"></td>
                            </tr>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1 whitespace-nowrap">42800</td>
                              <td className="text-black text-[15px] py-2.5 px-1 whitespace-nowrap">Net Ontario tax</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right whitespace-nowrap">10,112.49</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-center"></td>
                            </tr>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1 font-bold whitespace-nowrap">43500</td>
                              <td className="text-black text-[15px] py-2.5 px-1 font-bold">Total payable</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right font-bold whitespace-nowrap">28,838.63</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-center"></td>
                            </tr>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1 whitespace-nowrap">43700</td>
                              <td className="text-black text-[15px] py-2.5 px-1">Total income tax deducted</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right whitespace-nowrap">27,588.63</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-center"></td>
                            </tr>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1 font-bold whitespace-nowrap">48200</td>
                              <td className="text-black text-[15px] py-2.5 px-1 font-bold">Total credits</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right font-bold whitespace-nowrap">27,588.63</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-center"></td>
                            </tr>
                            <tr className="border-b-2 border-[#c6c6c8]">
                              <td className="text-black text-[15px] py-2.5 px-1"></td>
                              <td className="text-black text-[15px] py-2.5 px-1 font-bold">Total payable minus Total credits</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right font-bold whitespace-nowrap">1,250.00</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-center font-bold">DR</td>
                            </tr>
                            <tr>
                              <td className="text-black text-[15px] py-2.5 px-1"></td>
                              <td className="text-black text-[15px] py-2.5 px-1 font-bold">Pay balance from this assessment</td>
                              <td className="text-[#ff3b30] text-[15px] py-2.5 px-1 text-right font-bold whitespace-nowrap">1,250.00</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-center font-bold">DR</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Third white panel - RRSP information */}
                <div className="bg-white rounded-[10px] p-6 shadow-sm">
                  <h3 className="text-black text-[17px] font-bold mb-3 m-0">RRSP deduction limit and available contribution room statement</h3>
                  <div className="space-y-4">
                    <p className="text-black text-[15px] m-0 leading-snug">
                      References to RRSP contributions also include contributions to your pooled registered pension plan (PRPP) and to your and your spouse's or common-law partner's specified pension plan (SPP). For more information, go to <span className="text-[#007AFF]">canada.ca/rrsp</span> or see Guide T4040, RRSPs and Other Registered Plans for Retirement.
                    </p>

                    {/* Unused RRSP deduction room at the end of 2024 */}
                    <div>
                      <h4 className="text-black text-[17px] font-bold mb-2 m-0">Your unused RRSP deduction room at the end of 2024</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b-2 border-[#c6c6c8]">
                              <th className="text-left text-black text-[13px] font-bold py-2 px-1">Description</th>
                              <th className="text-right text-black text-[13px] font-bold py-2 px-1">$ Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1">RRSP deduction limit for 2024</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right whitespace-nowrap">41,787</td>
                            </tr>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1">Minus: Employer's PRPP contributions for 2024</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right whitespace-nowrap">0</td>
                            </tr>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1">Minus: Allowable RRSP contributions deducted for 2024</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right whitespace-nowrap">30,000</td>
                            </tr>
                            <tr>
                              <td className="text-black text-[15px] py-2.5 px-1 font-bold">Equals: Your unused RRSP deduction room at the end of 2024</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right font-bold whitespace-nowrap">11,787</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Additional RRSP deduction limit earned in 2024 */}
                    <div>
                      <h4 className="text-black text-[17px] font-bold mb-2 m-0">Your additional RRSP deduction limit earned in 2024</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b-2 border-[#c6c6c8]">
                              <th className="text-left text-black text-[13px] font-bold py-2 px-1">Description</th>
                              <th className="text-right text-black text-[13px] font-bold py-2 px-1">$ Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1">18% of 2024 earned income, up to a maximum of $32,490</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right whitespace-nowrap">29,934</td>
                            </tr>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1">Minus: 2024 pension adjustment (PA)</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right whitespace-nowrap">23,777</td>
                            </tr>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1">Minus: 2024 prescribed amount for connected persons</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right whitespace-nowrap">0</td>
                            </tr>
                            <tr>
                              <td className="text-black text-[15px] py-2.5 px-1 font-bold">Equals: Additional RRSP deduction limit you earned in 2024 (if negative, will be "0")</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right font-bold whitespace-nowrap">6,157</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* 2025 RRSP deduction limit */}
                    <div>
                      <h4 className="text-black text-[17px] font-bold mb-2 m-0">Your 2025 RRSP deduction limit</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b-2 border-[#c6c6c8]">
                              <th className="text-left text-black text-[13px] font-bold py-2 px-1">Description</th>
                              <th className="text-right text-black text-[13px] font-bold py-2 px-1">$ Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1">Unused RRSP deduction room at the end of 2024</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right whitespace-nowrap">11,787</td>
                            </tr>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1">Plus: Additional RRSP deduction limit earned in 2024</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right whitespace-nowrap">6,157</td>
                            </tr>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1">Minus: 2025 net past service pension adjustment (PSPA)</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right whitespace-nowrap">0</td>
                            </tr>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1">Plus: 2025 pension adjustment reversal (PAR)</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right whitespace-nowrap">0</td>
                            </tr>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1 font-bold">Equals: RRSP deduction limit for 2025</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right font-bold whitespace-nowrap">17,944</td>
                            </tr>
                            <tr className="border-b border-[#e5e5ea]">
                              <td className="text-black text-[15px] py-2.5 px-1">Minus: Unused RRSP contributions previously reported and available to deduct for 2025</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right whitespace-nowrap">0</td>
                            </tr>
                            <tr>
                              <td className="text-black text-[15px] py-2.5 px-1 font-bold">Your available RRSP contribution room for 2025</td>
                              <td className="text-black text-[15px] py-2.5 px-1 text-right font-bold whitespace-nowrap">17,944</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <p className="text-[#3c3c43] text-[15px] m-0 leading-snug italic">
                      Note: If your available RRSP contribution room is a negative amount (shown in brackets), you have no contribution room for 2025. You may have over contributed to your RRSP and have to pay a 1% monthly tax on any excess contributions. If you have, you must file a T1-OVP, Individual Tax Return for RRSP, PRPP and SPP Excess Contributions, and pay the taxes owing.
                    </p>
                  </div>
                </div>

                {/* Fourth white panel - More information */}
                <div className="bg-white rounded-[10px] p-6 shadow-sm">
                  <h3 className="text-black text-[17px] font-bold mb-3 m-0">More information</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-black text-[15px] m-0 leading-snug mb-3">
                        If you need more information about your income tax and benefit return, go to <span className="text-[#007AFF]">canada.ca/taxes</span>, go to My Account at <span className="text-[#007AFF]">canada.ca/my-cra-account</span>, or call <strong>1-800-959-8281</strong>. For individuals living in the territories (area code 867), call <strong>1-866-426-1527</strong>.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-black text-[15px] font-bold mb-2 m-0">If you move</h4>
                      <p className="text-black text-[15px] m-0 leading-snug">
                        Let us know your new address as soon as possible. For more information, go to <span className="text-[#007AFF]">canada.ca/cra-change-address</span>.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-black text-[15px] font-bold mb-2 m-0">If you have new information and want to change your return:</h4>
                      <ul className="list-none m-0 p-0 space-y-2">
                        <li className="text-black text-[15px] leading-snug">
                          <span className="mr-2">•</span>go to <span className="text-[#007AFF]">canada.ca/change-tax-return</span> for faster service; or
                        </li>
                        <li className="text-black text-[15px] leading-snug">
                          <span className="mr-2">•</span>write to your tax centre, and include your social insurance number and any documents supporting the change. To find your tax centre, go to <span className="text-[#007AFF]">canada.ca/cra-offices</span>.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-black text-[15px] font-bold mb-2 m-0">If you want to register a formal dispute:</h4>
                      <ul className="list-none m-0 p-0">
                        <li className="text-black text-[15px] leading-snug">
                          <span className="mr-2">•</span>go to <span className="text-[#007AFF]">canada.ca/cra-complaints-disputes</span>; you have 90 days from the date of this notice to register your dispute.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-black text-[15px] font-bold mb-2 m-0">Help for persons with hearing, speech, or visual impairments</h4>
                      <p className="text-black text-[15px] m-0 leading-snug mb-2">
                        You can get this notice in braille, large print, electronic text, or audio format. For more information, go to <span className="text-[#007AFF]">canada.ca/cra-multiple-formats</span>.
                      </p>
                      <p className="text-black text-[15px] m-0 leading-snug">
                        If you use a teletypewriter, you can get tax information by calling <strong>1-800-665-0354</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // T4 and other tax slips - single white panel
              <div className="bg-white rounded-[10px] p-6 max-w-[600px] mx-auto shadow-sm">
                {/* Mock PDF Content */}
                <div className="border-b-2 border-[#ff3b30] pb-4 mb-6">
                  <img src={craHeader} alt="Canada Revenue Agency" className="h-auto w-auto max-h-8 mb-2 object-contain" />
                  <h2 className="text-black text-[20px] font-bold m-0">
                    {viewingSlip.type} Statement of Remuneration Paid
                  </h2>
                  <p className="text-[#3c3c43] text-[15px] m-0 mt-1">Tax Year {viewingSlip.year}</p>
                </div>

                {/* Employee Information and Income Details */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-black text-[17px] mb-2 m-0">Employee Information</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b border-[#c6c6c8]">
                        <span className="text-[#3c3c43] text-[17px]">Name</span>
                        <span className="text-black text-[17px] text-right">Jonathan Rath</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-[#c6c6c8]">
                        <span className="text-[#3c3c43] text-[17px]">SIN</span>
                        <span className="text-black text-[17px] text-right">*** *** 456</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-[#3c3c43] text-[17px]">Employer</span>
                        <span className="text-black text-[17px] text-right">{viewingSlip.employer}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="text-black text-[17px] mb-2 m-0">Income Details</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b border-[#c6c6c8]">
                        <span className="text-[#3c3c43] text-[17px]">Employment Income</span>
                        <span className="text-black text-[17px] text-right">$65,234.50</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-[#c6c6c8]">
                        <span className="text-[#3c3c43] text-[17px]">CPP Contributions</span>
                        <span className="text-black text-[17px] text-right">$3,499.80</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-[#c6c6c8]">
                        <span className="text-[#3c3c43] text-[17px]">EI Premiums</span>
                        <span className="text-black text-[17px] text-right">$1,002.45</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-[#3c3c43] text-[17px]">Income Tax Deducted</span>
                        <span className="text-black text-[17px] text-right">$12,450.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#c6c6c8]">
                    <p className="text-[#8e8e93] text-[11px] m-0 text-center">
                      Official CRA Document - {viewingSlip.year} Tax Year
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}