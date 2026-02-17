import { ChevronLeft, Upload, FileText, X, CheckCircle, Info, Image as ImageIcon, File } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';
import { useState, useRef } from 'react';

interface SubmitDocumentsScreenProps {
  onBack: () => void;
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
}

interface UploadedDocument {
  id: string;
  name: string;
  size: string;
  type: 'pdf' | 'image' | 'other';
  date: Date;
}

export function SubmitDocumentsScreen({
  onBack,
  onNavigateHome,
  onFileTaxes,
  onMakePayment,
  onBenefitsAndCredits,
  onRegisteredPlans,
  onHelp,
  onSignOut,
  onTaxSlips,
  onProofOfIncome,
  onViewMail,
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
  onReliefOfPenalties
}: SubmitDocumentsScreenProps) {
  const [uploadedDocuments, setUploadedDocuments] = useState<UploadedDocument[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [additionalNotes, setAdditionalNotes] = useState<string>('');
  const [otherDocumentDescription, setOtherDocumentDescription] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const documentCategories = [
    { value: 'tax-return', label: 'Tax Return Documentation' },
    { value: 'proof-income', label: 'Proof of Income' },
    { value: 'medical', label: 'Medical Expenses' },
    { value: 'charitable', label: 'Charitable Donations' },
    { value: 'tuition', label: 'Tuition and Education' },
    { value: 'childcare', label: 'Childcare Expenses' },
    { value: 'rrsp', label: 'RRSP Contributions' },
    { value: 'moving', label: 'Moving Expenses' },
    { value: 'support', label: 'Support Documents' },
    { value: 'other', label: 'Other Documents' }
  ];

  const handleDocumentUpload = () => {
    // Simulate document upload
    const fileTypes = ['pdf', 'image', 'other'] as const;
    const randomType = fileTypes[Math.floor(Math.random() * fileTypes.length)];
    const randomSize = (Math.random() * 5 + 0.5).toFixed(1);
    
    const newDoc: UploadedDocument = {
      id: `doc_${Date.now()}`,
      name: `Document_${uploadedDocuments.length + 1}.${randomType === 'pdf' ? 'pdf' : randomType === 'image' ? 'jpg' : 'doc'}`,
      size: `${randomSize} MB`,
      type: randomType,
      date: new Date()
    };
    
    setUploadedDocuments([...uploadedDocuments, newDoc]);
  };

  const removeDocument = (id: string) => {
    setUploadedDocuments(uploadedDocuments.filter(doc => doc.id !== id));
  };

  const handleSubmit = () => {
    setShowSuccess(true);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, 0);
    }
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="w-6 h-6 text-[#FF3B30]" />;
      case 'image':
        return <ImageIcon className="w-6 h-6 text-[#007AFF]" />;
      default:
        return <File className="w-6 h-6 text-[#8E8E93]" />;
    }
  };

  if (showSuccess) {
    return (
      <div className="bg-[#f2f2f7] flex flex-col">
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
          onViewRefundDetails={onViewRefundDetails}
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
          onRemittanceVoucher={onRemittanceVoucher}
          onCPPEIRuling={onCPPEIRuling}
          onViewNoticeOfAssessment={onViewNoticeOfAssessment}
          onHelp={onHelp}
          onSignOut={onSignOut}
          onAuditEnquiries={onAuditEnquiries}
          onCarryoverAmounts={onCarryoverAmounts}
          onChangeMyReturn={onChangeMyReturn}
          onRegisterFormalDispute={onRegisterFormalDispute}
          onNonResidentAccount={onNonResidentAccount}
          onResidencyDetermination={onResidencyDetermination}
          onPersonalIdentificationNumber={onPersonalIdentificationNumber}
          onProgressTrackerService={onProgressTrackerService}
          onReliefOfPenalties={onReliefOfPenalties}
        />

        <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[34px]">Documents Submitted</h1>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="px-4 pt-4 pb-24">
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-20 h-20 bg-[#34C759] rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-[22px] font-semibold text-black mb-2 text-center">Documents Successfully Submitted</h2>
              <p className="text-[15px] text-text-gray-ios text-center mb-6 max-w-md">
                Your documents have been submitted to the CRA for processing.
              </p>
            </div>

            <div className="card-ios overflow-hidden mb-6">
              <div className="px-4 py-4 border-b border-[#E5E5EA]">
                <h3 className="text-[17px] font-semibold text-black">Submission Details</h3>
              </div>
              <div className="px-4 py-3 border-b border-[#E5E5EA]">
                <div className="flex justify-between items-center">
                  <span className="text-[15px] text-text-gray-ios">Reference Number</span>
                  <span className="text-[15px] text-black font-semibold">DOC-2024-{Math.floor(Math.random() * 10000)}</span>
                </div>
              </div>
              <div className="px-4 py-3 border-b border-[#E5E5EA]">
                <div className="flex justify-between items-center">
                  <span className="text-[15px] text-text-gray-ios">Submission Date</span>
                  <span className="text-[15px] text-black">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </div>
              <div className="px-4 py-3 border-b border-[#E5E5EA]">
                <div className="flex justify-between items-center">
                  <span className="text-[15px] text-text-gray-ios">Document Category</span>
                  <span className="text-[15px] text-black">{documentCategories.find(cat => cat.value === selectedCategory)?.label || 'N/A'}</span>
                </div>
              </div>
              <div className="px-4 py-3">
                <div className="flex justify-between items-center">
                  <span className="text-[15px] text-text-gray-ios">Documents Uploaded</span>
                  <span className="text-[15px] text-black">{uploadedDocuments.length}</span>
                </div>
              </div>
            </div>

            <div className="card-ios overflow-hidden mb-6">
              <div className="px-4 py-4">
                <h3 className="text-[17px] font-semibold text-black mb-3">What happens next?</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-[13px] font-semibold">1</div>
                    <div>
                      <p className="text-[15px] text-black font-semibold mb-1">Document Review</p>
                      <p className="text-[13px] text-text-gray-ios">The CRA will review your submitted documents. This typically takes 10-15 business days.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-[13px] font-semibold">2</div>
                    <div>
                      <p className="text-[15px] text-black font-semibold mb-1">Processing</p>
                      <p className="text-[13px] text-text-gray-ios">If additional documents are needed, we'll contact you via CRA Mail or by phone.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-[13px] font-semibold">3</div>
                    <div>
                      <p className="text-[15px] text-black font-semibold mb-1">Confirmation</p>
                      <p className="text-[13px] text-text-gray-ios">You'll receive a confirmation when your documents have been processed and added to your file.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#E5F0FF] border border-[#B3D7FF] rounded-xl p-4 mb-6">
              <div className="flex gap-3">
                <Info className="w-5 h-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[13px] text-text-gray-ios">
                    A confirmation email has been sent to your registered email address. You can track the status of your document submission in CRA Mail.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onBack}
              className="w-full bg-[#007AFF] text-white py-[14px] px-4 rounded-[10px] text-[17px] font-semibold border-0 cursor-pointer active:opacity-70 transition-opacity"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f2f2f7] flex flex-col">
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
        onViewRefundDetails={onViewRefundDetails}
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
        onRemittanceVoucher={onRemittanceVoucher}
        onCPPEIRuling={onCPPEIRuling}
        onViewNoticeOfAssessment={onViewNoticeOfAssessment}
        onHelp={onHelp}
        onSignOut={onSignOut}
        onAuditEnquiries={onAuditEnquiries}
        onCarryoverAmounts={onCarryoverAmounts}
        onChangeMyReturn={onChangeMyReturn}
        onRegisterFormalDispute={onRegisterFormalDispute}
        onNonResidentAccount={onNonResidentAccount}
        onResidencyDetermination={onResidencyDetermination}
        onPersonalIdentificationNumber={onPersonalIdentificationNumber}
        onProgressTrackerService={onProgressTrackerService}
        onReliefOfPenalties={onReliefOfPenalties}
      />

      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-start gap-3">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0 mt-[6px]"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <div className="flex-1">
            <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[34px]">Submit Documents</h1>
            <p className="text-[15px] text-text-gray-ios mt-1">Upload supporting documents to CRA</p>
          </div>
        </div>
      </div>

      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto">
        <div className="px-4 pt-4 pb-24">
          
          {/* Information Banner */}
          <div className="bg-[#E5F0FF] border border-[#B3D7FF] rounded-xl p-4 mb-6">
            <div className="flex gap-3">
              <Info className="w-5 h-5 text-[#007AFF] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[15px] text-black font-semibold mb-2">Secure Document Upload</p>
                <p className="text-[13px] text-text-gray-ios">
                  You can securely submit documents to support your tax returns, requests, or other CRA correspondence. All uploads are encrypted and stored securely.
                </p>
              </div>
            </div>
          </div>

          {/* Document Guidelines */}
          <div className="card-ios overflow-hidden mb-6">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <h2 className="text-[17px] font-semibold text-black">Document Guidelines</h2>
            </div>
            <div className="px-4 py-4">
              <ul className="space-y-2 list-disc pl-5">
                <li className="text-[15px] text-text-gray-ios">
                  Ensure all documents are clear and legible
                </li>
                <li className="text-[15px] text-text-gray-ios">
                  Include all pages of multi-page documents
                </li>
                <li className="text-[15px] text-text-gray-ios">
                  Do not submit documents containing personal information of others
                </li>
                <li className="text-[15px] text-text-gray-ios">
                  Keep a copy of all documents for your records
                </li>
                <li className="text-[15px] text-text-gray-ios">
                  Maximum file size: 10MB per document
                </li>
              </ul>
            </div>
          </div>

          {/* Document Category Selection */}
          <div className="card-ios overflow-hidden mb-6">
            <div className="px-4 py-4 border-b border-[#E5E5EA]">
              <h2 className="text-[17px] font-semibold text-black">Document Category</h2>
            </div>
            <div className="px-4 py-4">
              <p className="text-[15px] text-text-gray-ios mb-4">
                Select the category that best describes the documents you're submitting.
              </p>
              
              <div className="space-y-2">
                {documentCategories.map((category) => (
                  <div key={category.value}>
                    <label className="flex items-center gap-3 cursor-pointer py-2">
                      <input
                        type="radio"
                        name="category"
                        value={category.value}
                        checked={selectedCategory === category.value}
                        onChange={(e) => {
                          setSelectedCategory(e.target.value);
                          if (e.target.value !== 'other') {
                            setOtherDocumentDescription('');
                          }
                        }}
                        className="w-5 h-5 text-[#007AFF] focus:ring-[#007AFF]"
                      />
                      <span className="text-[15px] text-black">{category.label}</span>
                    </label>
                    
                    {/* Accordion for Other Documents Description */}
                    {category.value === 'other' && selectedCategory === 'other' && (
                      <div className="mt-3 ml-8 animate-in slide-in-from-top-2 duration-200">
                        <div className="bg-white border border-[#E5E5EA] rounded-[10px] p-4">
                          <label className="block mb-2">
                            <span className="text-[15px] text-black font-semibold">Description</span>
                            <span className="text-[15px] text-text-gray-ios ml-1">(required)</span>
                          </label>
                          <textarea
                            value={otherDocumentDescription}
                            onChange={(e) => setOtherDocumentDescription(e.target.value)}
                            className="w-full h-20 bg-white border border-[#E5E5EA] rounded-[8px] px-3 py-2 text-[15px] resize-none focus:outline-none focus:border-[#007AFF] transition-colors"
                            placeholder="Please describe the type of document you're submitting..."
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upload Section */}
          {selectedCategory && (
            <div className="card-ios overflow-hidden mb-6">
              <div className="px-4 py-4 border-b border-[#E5E5EA]">
                <h2 className="text-[17px] font-semibold text-black">Upload Documents</h2>
              </div>
              <div className="px-4 py-4">
                <p className="text-[15px] text-text-gray-ios mb-4">
                  Upload one or more documents. Accepted formats: PDF, JPG, PNG (max 10MB per file).
                </p>

                <button
                  onClick={handleDocumentUpload}
                  className="w-full bg-white border-2 border-dashed border-[#C6C6C8] rounded-[10px] py-8 px-4 cursor-pointer hover:border-[#007AFF] hover:bg-[#F0F7FF] transition-all"
                >
                  <Upload className="w-10 h-10 text-[#007AFF] mx-auto mb-3" />
                  <p className="text-[17px] text-[#007AFF] font-semibold">Upload Document</p>
                  <p className="text-[13px] text-[#3C3C43] mt-1">Tap to select files</p>
                </button>

                {uploadedDocuments.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-[15px] font-semibold text-black mb-3">
                      Uploaded Documents ({uploadedDocuments.length})
                    </h3>
                    <div className="space-y-2">
                      {uploadedDocuments.map((doc) => (
                        <div
                          key={doc.id}
                          className="flex items-center justify-between bg-white border border-[#E5E5EA] rounded-[10px] px-4 py-3"
                        >
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            {getFileIcon(doc.type)}
                            <div className="flex-1 min-w-0">
                              <p className="text-[15px] text-black truncate">{doc.name}</p>
                              <p className="text-[13px] text-text-gray-ios">{doc.size}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeDocument(doc.id)}
                            className="ml-3 w-8 h-8 rounded-full bg-[#FF3B30] text-white flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Additional Notes */}
          {selectedCategory && uploadedDocuments.length > 0 && (
            <div className="card-ios overflow-hidden mb-6">
              <div className="px-4 py-4 border-b border-[#E5E5EA]">
                <h2 className="text-[17px] font-semibold text-black">Additional Notes</h2>
              </div>
              <div className="px-4 py-4">
                <p className="text-[15px] text-text-gray-ios mb-3">
                  Explain what the documents are for or provide any additional context.
                </p>
                <textarea
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  className="w-full h-24 bg-white border border-[#E5E5EA] rounded-[10px] px-4 py-3 text-[15px] resize-none focus:outline-none focus:border-[#007AFF] transition-colors"
                  placeholder="Enter any additional notes or instructions for the CRA..."
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          {selectedCategory && uploadedDocuments.length > 0 && (
            <button
              onClick={handleSubmit}
              className="w-full bg-[#007AFF] text-white py-[14px] px-4 rounded-[10px] text-[17px] font-semibold border-0 cursor-pointer active:opacity-70 transition-opacity"
            >
              Submit Documents
            </button>
          )}
        </div>
      </div>
    </div>
  );
}