import React, { RefObject, useEffect } from 'react';
import { IOSFilePicker } from './IOSFilePicker';
import { FileText, X, Image } from 'lucide-react';

interface SupportingDocsProps {
  reasonValue: string;
  reasonLabel: string;
  supportingDocs: any;
  naturalDisasterDocs: any;
  deathIllnessDocs: any;
  craErrorDocs: any;
  handleSupportingDocChange: (field: string) => void;
  handleNaturalDisasterDocChange: (field: string) => void;
  handleDeathIllnessDocChange: (field: string) => void;
  handleCraErrorDocChange: (field: string) => void;
  otherDocType: string;
  setOtherDocType: (value: string) => void;
  naturalDisasterOtherDocType: string;
  setNaturalDisasterOtherDocType: (value: string) => void;
  deathIllnessOtherDocType: string;
  setDeathIllnessOtherDocType: (value: string) => void;
  craErrorOtherDocType: string;
  setCraErrorOtherDocType: (value: string) => void;
  otherDocTypeRef: RefObject<HTMLInputElement>;
  naturalDisasterOtherDocTypeRef: RefObject<HTMLInputElement>;
  deathIllnessOtherDocTypeRef: RefObject<HTMLInputElement>;
  craErrorOtherDocTypeRef: RefObject<HTMLInputElement>;
  scrollContainerRef: RefObject<HTMLDivElement>;
  setActiveField: (field: string) => void;
  setShowKeyboard: (show: boolean) => void;
  setShowTextKeyboard: (show: boolean) => void;
  onOpenFilePicker: (documentType: string, checkboxField: string, category: 'financial' | 'natural' | 'death' | 'cra') => void;
  selectedFiles: {
    natural: { [key: string]: Array<{name: string, type: string}> };
    financial: { [key: string]: Array<{name: string, type: string}> };
    death: { [key: string]: Array<{name: string, type: string}> };
    cra: { [key: string]: Array<{name: string, type: string}> };
  };
  onRemoveFile: (checkboxField: string, category: 'financial' | 'natural' | 'death' | 'cra') => void;
}

export function SupportingDocsForReason({
  reasonValue,
  reasonLabel,
  supportingDocs,
  naturalDisasterDocs,
  deathIllnessDocs,
  craErrorDocs,
  handleSupportingDocChange,
  handleNaturalDisasterDocChange,
  handleDeathIllnessDocChange,
  handleCraErrorDocChange,
  otherDocType,
  setOtherDocType,
  naturalDisasterOtherDocType,
  setNaturalDisasterOtherDocType,
  deathIllnessOtherDocType,
  setDeathIllnessOtherDocType,
  craErrorOtherDocType,
  setCraErrorOtherDocType,
  otherDocTypeRef,
  naturalDisasterOtherDocTypeRef,
  deathIllnessOtherDocTypeRef,
  craErrorOtherDocTypeRef,
  scrollContainerRef,
  setActiveField,
  setShowKeyboard,
  setShowTextKeyboard,
  onOpenFilePicker,
  selectedFiles,
  onRemoveFile
}: SupportingDocsProps) {
  
  // Wrapper handlers to focus input immediately after checkbox is checked (for iPhone keyboard)
  const handleFinancialOtherChange = () => {
    const isNowChecked = !supportingDocs.other;
    handleSupportingDocChange('other');
    if (isNowChecked && otherDocTypeRef.current) {
      // Focus immediately in the same event - input must already exist in DOM
      otherDocTypeRef.current.focus();
    }
  };

  const handleScroll = (ref: RefObject<HTMLInputElement>, fieldName: string) => {
    // Removed - let native keyboard and scroll behavior work
  };
  
  // Helper function to render file icon based on type
  const renderFileIcon = (files: Array<{name: string, type: string}>) => {
    if (!files || files.length === 0) return null;
    
    const firstFile = files[0];
    const IconComponent = firstFile.type === 'image' ? Image : FileText;
    const iconColor = firstFile.type === 'image' ? 'text-[#007AFF]' : 'text-[#FF3B30]';
    
    return (
      <div className="relative flex-shrink-0">
        <IconComponent className={`w-5 h-5 ${iconColor}`} />
        {files.length > 1 && (
          <div className="absolute -top-1 -left-1 w-4 h-4 bg-[#007AFF] rounded-full flex items-center justify-center">
            <span className="text-[10px] font-semibold text-white">{files.length}</span>
          </div>
        )}
      </div>
    );
  };
  
  switch (reasonValue) {
    case 'financial-hardship-individual':
    case 'financial-hardship-business':
      return (
        <div key={reasonValue} className="bg-white border border-[#C6C6C8] rounded-[10px] overflow-hidden">
          <div className="px-4 py-3 border-b border-[#E5E5EA]">
            <h3 className="text-[15px] font-semibold text-black">{reasonLabel} - Supporting documents</h3>
          </div>
          <div className="px-4 py-3">
            <p className="text-[13px] font-semibold text-black mb-3">It is strongly recommended that you include:</p>
            
            <label className="flex items-start gap-3 mb-3 cursor-pointer active:opacity-70">
              <input
                type="checkbox"
                checked={supportingDocs.rc376Form}
                onChange={(e) => {
                  if (e.target.checked) {
                    onOpenFilePicker('Form RC376', 'rc376Form', 'financial');
                  } else {
                    handleSupportingDocChange('rc376Form');
                  }
                }}
                className="mt-0.5 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
              />
              <div className="flex-1 min-w-0">
                <span className="text-[15px] text-black leading-snug">
                  Form RC376, Taxpayer Relief Request – Statement of Income and Expenses and Assets and Liabilities for Individuals{' '}
                  <span className="text-[#007AFF]">(canada.ca/cra-rc376)</span>
                </span>
              </div>
              <div className="w-[190px] flex-shrink-0" />
              {selectedFiles.financial.rc376Form && selectedFiles.financial.rc376Form.length > 0 && (
                <>
                  {renderFileIcon(selectedFiles.financial.rc376Form)}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onRemoveFile('rc376Form', 'financial');
                    }}
                    className="w-[22px] h-[22px] flex items-center justify-center bg-[#FF3B30] rounded-md flex-shrink-0 active:opacity-70"
                  >
                    <X className="w-3.5 h-3.5 text-white" />
                  </button>
                </>
              )}
            </label>

            <label className="flex items-start gap-3 mb-4 cursor-pointer active:opacity-70">
              <input
                type="checkbox"
                checked={supportingDocs.bankStatements}
                onChange={(e) => {
                  if (e.target.checked) {
                    onOpenFilePicker('Bank and credit card statements', 'bankStatements', 'financial');
                  } else {
                    handleSupportingDocChange('bankStatements');
                  }
                }}
                className="mt-0.5 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
              />
              <span className="text-[15px] text-black leading-snug flex-1 min-w-0">
                Bank and credit card statements for the last 3 months
              </span>
              <div className="w-[190px] flex-shrink-0" />
              {selectedFiles.financial.bankStatements && selectedFiles.financial.bankStatements.length > 0 && (
                <>
                  {renderFileIcon(selectedFiles.financial.bankStatements)}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onRemoveFile('bankStatements', 'financial');
                    }}
                    className="w-[22px] h-[22px] flex items-center justify-center bg-[#FF3B30] rounded-md flex-shrink-0 active:opacity-70"
                  >
                    <X className="w-3.5 h-3.5 text-white" />
                  </button>
                </>
              )}
            </label>

            <p className="text-[13px] font-semibold text-black mb-3">Other documents you can include:</p>

            <label className="flex items-start gap-3 mb-3 cursor-pointer active:opacity-70">
              <input
                type="checkbox"
                checked={supportingDocs.mortgageRental}
                onChange={(e) => {
                  if (e.target.checked) {
                    onOpenFilePicker('Mortgage statements or rental agreements', 'mortgageRental', 'financial');
                  } else {
                    handleSupportingDocChange('mortgageRental');
                  }
                }}
                className="mt-0.5 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
              />
              <span className="text-[15px] text-black leading-snug flex-1 min-w-0">
                Current mortgage statements or rental agreements
              </span>
              <div className="w-[190px] flex-shrink-0" />
              {selectedFiles.financial.mortgageRental && selectedFiles.financial.mortgageRental.length > 0 && (
                <>
                  {renderFileIcon(selectedFiles.financial.mortgageRental)}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onRemoveFile('mortgageRental', 'financial');
                    }}
                    className="w-[22px] h-[22px] flex items-center justify-center bg-[#FF3B30] rounded-md flex-shrink-0 active:opacity-70"
                  >
                    <X className="w-3.5 h-3.5 text-white" />
                  </button>
                </>
              )}
            </label>

            <label className="flex items-start gap-3 mb-3 cursor-pointer active:opacity-70">
              <input
                type="checkbox"
                checked={supportingDocs.loansAndBills}
                onChange={(e) => {
                  if (e.target.checked) {
                    onOpenFilePicker('Loans and monthly bills', 'loansAndBills', 'financial');
                  } else {
                    handleSupportingDocChange('loansAndBills');
                  }
                }}
                className="mt-0.5 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
              />
              <span className="text-[15px] text-black leading-snug flex-1 min-w-0">
                Loans and monthly bills
              </span>
              <div className="w-[190px] flex-shrink-0" />
              {selectedFiles.financial.loansAndBills && selectedFiles.financial.loansAndBills.length > 0 && (
                <>
                  {renderFileIcon(selectedFiles.financial.loansAndBills)}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onRemoveFile('loansAndBills', 'financial');
                    }}
                    className="w-[22px] h-[22px] flex items-center justify-center bg-[#FF3B30] rounded-md flex-shrink-0 active:opacity-70"
                  >
                    <X className="w-3.5 h-3.5 text-white" />
                  </button>
                </>
              )}
            </label>

            <div className="flex items-start gap-3 mb-4">
              <label className="flex items-start gap-3 cursor-pointer active:opacity-70">
                <input
                  type="checkbox"
                  checked={supportingDocs.other}
                  onChange={handleFinancialOtherChange}
                  className="mt-0.5 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
                />
                <span className="text-[15px] text-black leading-snug">
                  Other:
                </span>
              </label>
              <input
                ref={otherDocTypeRef}
                type="text"
                inputMode="text"
                autoComplete="off"
                value={otherDocType}
                onChange={(e) => setOtherDocType(e.target.value)}
                onClick={(e) => {
                  if (!supportingDocs.other) {
                    handleSupportingDocChange('other');
                  }
                  e.currentTarget.focus();
                }}
                onTouchStart={(e) => {
                  if (!supportingDocs.other) {
                    handleSupportingDocChange('other');
                  }
                }}
                onBlur={() => {
                  if (otherDocType.trim()) {
                    onOpenFilePicker(otherDocType, 'other', 'financial');
                  }
                }}
                placeholder="Specify type"
                className="max-w-[120px] px-2 py-0.5 bg-white border border-[#C6C6C8] rounded-[6px] text-[15px] text-black placeholder:text-[#8E8E93] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent -ml-2.5"
                style={{ WebkitUserSelect: 'text', userSelect: 'text', WebkitTouchCallout: 'default' }}
              />
              <div className="flex-1 min-w-0" />
              {supportingDocs.other && selectedFiles.financial.other && selectedFiles.financial.other.length > 0 && (
                <>
                  {renderFileIcon(selectedFiles.financial.other)}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onRemoveFile('other', 'financial');
                    }}
                    className="w-[22px] h-[22px] flex items-center justify-center bg-[#FF3B30] rounded-md flex-shrink-0 active:opacity-70"
                  >
                    <X className="w-3.5 h-3.5 text-white" />
                  </button>
                </>
              )}
            </div>

            <div className="pt-3 border-t border-[#E5E5EA]">
              <label className="flex items-start gap-3 cursor-pointer active:opacity-70">
                <input
                  type="checkbox"
                  checked={supportingDocs.noDocuments}
                  onChange={() => handleSupportingDocChange('noDocuments')}
                  className="mt-1 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
                />
                <span className="text-[15px] text-black leading-snug">
                  I will not be providing supporting documents
                </span>
              </label>
            </div>
          </div>
        </div>
      );

    case 'natural-disaster':
      return (
        <div key={reasonValue} className="bg-white border border-[#C6C6C8] rounded-[10px] overflow-hidden">
          <div className="px-4 py-3 border-b border-[#E5E5EA]">
            <h3 className="text-[15px] font-semibold text-black">{reasonLabel} - Supporting documents</h3>
          </div>
          <div className="px-4 py-3">
            <label className="flex items-center gap-3 mb-3 cursor-pointer active:opacity-70">
              <input
                type="checkbox"
                checked={naturalDisasterDocs.fireReport}
                onChange={(e) => {
                  if (e.target.checked) {
                    onOpenFilePicker('Fire report', 'fireReport', 'natural');
                  } else {
                    handleNaturalDisasterDocChange('fireReport');
                  }
                }}
                className="w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
              />
              <span className="text-[15px] text-black leading-snug flex-1">
                Fire report
              </span>
              {selectedFiles.natural.fireReport && selectedFiles.natural.fireReport.length > 0 && (
                <>
                  {renderFileIcon(selectedFiles.natural.fireReport)}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onRemoveFile('fireReport', 'natural');
                    }}
                    className="w-[22px] h-[22px] flex items-center justify-center bg-[#FF3B30] rounded-md flex-shrink-0 active:opacity-70"
                  >
                    <X className="w-3.5 h-3.5 text-white" />
                  </button>
                </>
              )}
            </label>

            <label className="flex items-center gap-3 mb-3 cursor-pointer active:opacity-70">
              <input
                type="checkbox"
                checked={naturalDisasterDocs.insuranceReport}
                onChange={(e) => {
                  if (e.target.checked) {
                    onOpenFilePicker('Insurance report', 'insuranceReport', 'natural');
                  } else {
                    handleNaturalDisasterDocChange('insuranceReport');
                  }
                }}
                className="w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
              />
              <span className="text-[15px] text-black leading-snug flex-1">
                Insurance report
              </span>
              {selectedFiles.natural.insuranceReport && selectedFiles.natural.insuranceReport.length > 0 && (
                <>
                  {renderFileIcon(selectedFiles.natural.insuranceReport)}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onRemoveFile('insuranceReport', 'natural');
                    }}
                    className="w-[22px] h-[22px] flex items-center justify-center bg-[#FF3B30] rounded-md flex-shrink-0 active:opacity-70"
                  >
                    <X className="w-3.5 h-3.5 text-white" />
                  </button>
                </>
              )}
            </label>

            <label className="flex items-center gap-3 mb-3 cursor-pointer active:opacity-70">
              <input
                type="checkbox"
                checked={naturalDisasterDocs.newsArticle}
                onChange={(e) => {
                  if (e.target.checked) {
                    onOpenFilePicker('News article', 'newsArticle', 'natural');
                  } else {
                    handleNaturalDisasterDocChange('newsArticle');
                  }
                }}
                className="w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
              />
              <span className="text-[15px] text-black leading-snug flex-1">
                News article
              </span>
              {selectedFiles.natural.newsArticle && selectedFiles.natural.newsArticle.length > 0 && (
                <>
                  {renderFileIcon(selectedFiles.natural.newsArticle)}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onRemoveFile('newsArticle', 'natural');
                    }}
                    className="w-[22px] h-[22px] flex items-center justify-center bg-[#FF3B30] rounded-md flex-shrink-0 active:opacity-70"
                  >
                    <X className="w-3.5 h-3.5 text-white" />
                  </button>
                </>
              )}
            </label>

            <div className="flex items-center gap-3 mb-4">
              <label className="flex items-center gap-3 cursor-pointer active:opacity-70">
                <input
                  type="checkbox"
                  checked={naturalDisasterDocs.other}
                  onChange={(e) => {
                    e.stopPropagation();
                    handleNaturalDisasterDocChange('other');
                  }}
                  className="w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
                />
                <span className="text-[15px] text-black leading-snug">
                  Other:
                </span>
              </label>
              <input
                ref={naturalDisasterOtherDocTypeRef}
                type="text"
                value={naturalDisasterOtherDocType}
                onChange={(e) => setNaturalDisasterOtherDocType(e.target.value)}
                onClick={() => {
                  setActiveField('naturalDisasterOtherDocType');
                  setShowKeyboard(true);
                  setTimeout(() => {
                    if (scrollContainerRef.current && naturalDisasterOtherDocTypeRef.current) {
                      const container = scrollContainerRef.current;
                      const element = naturalDisasterOtherDocTypeRef.current;
                      const elementRect = element.getBoundingClientRect();
                      const containerRect = container.getBoundingClientRect();
                      const scrollTop = container.scrollTop;
                      const elementTop = elementRect.top - containerRect.top + scrollTop;
                      const offset = 100;
                      container.scrollTo({
                        top: elementTop - offset,
                        behavior: 'smooth'
                      });
                    }
                  }, 100);
                }}
                onFocus={() => {
                  setActiveField('naturalDisasterOtherDocType');
                  setShowKeyboard(true);
                  setTimeout(() => {
                    if (scrollContainerRef.current && naturalDisasterOtherDocTypeRef.current) {
                      const container = scrollContainerRef.current;
                      const element = naturalDisasterOtherDocTypeRef.current;
                      const elementRect = element.getBoundingClientRect();
                      const containerRect = container.getBoundingClientRect();
                      const scrollTop = container.scrollTop;
                      const elementTop = elementRect.top - containerRect.top + scrollTop;
                      const offset = 100;
                      container.scrollTo({
                        top: elementTop - offset,
                        behavior: 'smooth'
                      });
                    }
                  }, 100);
                }}
                onBlur={() => {
                  if (naturalDisasterOtherDocType.trim()) {
                    onOpenFilePicker(naturalDisasterOtherDocType, 'other', 'natural');
                  }
                }}
                inputMode="none"
                placeholder="Specify type"
                className="max-w-[120px] px-2 py-0.5 bg-white border border-[#C6C6C8] rounded-[6px] text-[15px] text-black placeholder:text-[#8E8E93] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent -ml-2.5"
              />
              <div className="flex-1 min-w-0" />
              {selectedFiles.natural.other && selectedFiles.natural.other.length > 0 && (
                <>
                  {renderFileIcon(selectedFiles.natural.other)}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onRemoveFile('other', 'natural');
                    }}
                    className="w-[22px] h-[22px] flex items-center justify-center bg-[#FF3B30] rounded-md flex-shrink-0 active:opacity-70"
                  >
                    <X className="w-3.5 h-3.5 text-white" />
                  </button>
                </>
              )}
            </div>

            <div className="pt-3 border-t border-[#E5E5EA]">
              <label className="flex items-start gap-3 cursor-pointer active:opacity-70">
                <input
                  type="checkbox"
                  checked={naturalDisasterDocs.noDocuments}
                  onChange={() => handleNaturalDisasterDocChange('noDocuments')}
                  className="mt-1 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
                />
                <span className="text-[15px] text-black leading-snug">
                  I will not be providing supporting documents
                </span>
              </label>
            </div>
          </div>
        </div>
      );

    case 'civil-disturbance':
      return (
        <div key={reasonValue} className="bg-white border border-[#C6C6C8] rounded-[10px] overflow-hidden">
          <div className="px-4 py-3 border-b border-[#E5E5EA]">
            <h3 className="text-[15px] font-semibold text-black">{reasonLabel} - Supporting documents</h3>
          </div>
          <div className="px-4 py-3">
            <p className="text-[15px] text-black leading-snug">
              Supporting documents are usually not required if the event is public knowledge in Canada. If the event occurred outside of Canada, it may be helpful to provide supporting documentation (for example, a news article).
            </p>
          </div>
        </div>
      );

    case 'death-illness':
      return (
        <div key={reasonValue} className="bg-white border border-[#C6C6C8] rounded-[10px] overflow-hidden">
          <div className="px-4 py-3 border-b border-[#E5E5EA]">
            <h3 className="text-[15px] font-semibold text-black">{reasonLabel} - Supporting documents</h3>
          </div>
          <div className="px-4 py-3">
            <label className="flex items-start gap-3 mb-3 cursor-pointer active:opacity-70">
              <input
                type="checkbox"
                checked={deathIllnessDocs.deathCertificate}
                onChange={(e) => {
                  if (e.target.checked) {
                    onOpenFilePicker('Death certificate or obituary', 'deathCertificate', 'death');
                  } else {
                    handleDeathIllnessDocChange('deathCertificate');
                  }
                }}
                className="mt-0.5 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
              />
              <span className="text-[15px] text-black leading-snug flex-1">
                Death certificate or obituary
              </span>
              {selectedFiles.death.deathCertificate && selectedFiles.death.deathCertificate.length > 0 && (
                <>
                  {renderFileIcon(selectedFiles.death.deathCertificate)}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onRemoveFile('deathCertificate', 'death');
                    }}
                    className="w-[22px] h-[22px] flex items-center justify-center bg-[#FF3B30] rounded-md flex-shrink-0 active:opacity-70"
                  >
                    <X className="w-3.5 h-3.5 text-white" />
                  </button>
                </>
              )}
            </label>

            <label className="flex items-start gap-3 mb-3 cursor-pointer active:opacity-70">
              <input
                type="checkbox"
                checked={deathIllnessDocs.doctorCertificate}
                onChange={(e) => {
                  if (e.target.checked) {
                    onOpenFilePicker('Doctor\'s certificate', 'doctorCertificate', 'death');
                  } else {
                    handleDeathIllnessDocChange('doctorCertificate');
                  }
                }}
                className="mt-0.5 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
              />
              <span className="text-[15px] text-black leading-snug flex-1">
                Doctor's certificate or letter with treatment length, any hospital dates, and how the medical condition impacted you
              </span>
              {selectedFiles.death.doctorCertificate && selectedFiles.death.doctorCertificate.length > 0 && (
                <>
                  {renderFileIcon(selectedFiles.death.doctorCertificate)}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onRemoveFile('doctorCertificate', 'death');
                    }}
                    className="w-[22px] h-[22px] flex items-center justify-center bg-[#FF3B30] rounded-md flex-shrink-0 active:opacity-70"
                  >
                    <X className="w-3.5 h-3.5 text-white" />
                  </button>
                </>
              )}
            </label>

            <div className="flex items-start gap-3 mb-4">
              <label className="flex items-start gap-3 cursor-pointer active:opacity-70">
                <input
                  type="checkbox"
                  checked={deathIllnessDocs.other}
                  onChange={() => handleDeathIllnessDocChange('other')}
                  className="mt-0.5 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
                />
                <span className="text-[15px] text-black leading-snug">
                  Other:
                </span>
              </label>
              <input
                ref={deathIllnessOtherDocTypeRef}
                type="text"
                value={deathIllnessOtherDocType}
                onChange={(e) => setDeathIllnessOtherDocType(e.target.value)}
                onClick={() => {
                  setActiveField('deathIllnessOtherDocType');
                  setShowKeyboard(true);
                  setTimeout(() => {
                    if (scrollContainerRef.current && deathIllnessOtherDocTypeRef.current) {
                      const container = scrollContainerRef.current;
                      const element = deathIllnessOtherDocTypeRef.current;
                      const elementRect = element.getBoundingClientRect();
                      const containerRect = container.getBoundingClientRect();
                      const scrollTop = container.scrollTop;
                      const elementTop = elementRect.top - containerRect.top + scrollTop;
                      const offset = 100;
                      container.scrollTo({
                        top: elementTop - offset,
                        behavior: 'smooth'
                      });
                    }
                  }, 100);
                }}
                onFocus={() => {
                  setActiveField('deathIllnessOtherDocType');
                  setShowKeyboard(true);
                  setTimeout(() => {
                    if (scrollContainerRef.current && deathIllnessOtherDocTypeRef.current) {
                      const container = scrollContainerRef.current;
                      const element = deathIllnessOtherDocTypeRef.current;
                      const elementRect = element.getBoundingClientRect();
                      const containerRect = container.getBoundingClientRect();
                      const scrollTop = container.scrollTop;
                      const elementTop = elementRect.top - containerRect.top + scrollTop;
                      const offset = 100;
                      container.scrollTo({
                        top: elementTop - offset,
                        behavior: 'smooth'
                      });
                    }
                  }, 100);
                }}
                onBlur={() => {
                  if (deathIllnessOtherDocType.trim()) {
                    onOpenFilePicker(deathIllnessOtherDocType, 'other', 'death');
                  }
                }}
                inputMode="none"
                placeholder="Specify type"
                className="max-w-[120px] px-2 py-0.5 bg-white border border-[#C6C6C8] rounded-[6px] text-[15px] text-black placeholder:text-[#8E8E93] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent -ml-2.5"
              />
              <div className="flex-1 min-w-0" />
              {selectedFiles.death.other && selectedFiles.death.other.length > 0 && (
                <>
                  {renderFileIcon(selectedFiles.death.other)}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onRemoveFile('other', 'death');
                    }}
                    className="w-[22px] h-[22px] flex items-center justify-center bg-[#FF3B30] rounded-md flex-shrink-0 active:opacity-70"
                  >
                    <X className="w-3.5 h-3.5 text-white" />
                  </button>
                </>
              )}
            </div>

            <div className="pt-3 border-t border-[#E5E5EA]">
              <label className="flex items-start gap-3 cursor-pointer active:opacity-70">
                <input
                  type="checkbox"
                  checked={deathIllnessDocs.noDocuments}
                  onChange={() => handleDeathIllnessDocChange('noDocuments')}
                  className="mt-1 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
                />
                <span className="text-[15px] text-black leading-snug">
                  I will not be providing supporting documents
                </span>
              </label>
            </div>
          </div>
        </div>
      );

    case 'cra-error':
    case 'cra-delay':
      return (
        <div key={reasonValue} className="bg-white border border-[#C6C6C8] rounded-[10px] overflow-hidden">
          <div className="px-4 py-3 border-b border-[#E5E5EA]">
            <h3 className="text-[15px] font-semibold text-black">{reasonLabel} - Supporting documents</h3>
          </div>
          <div className="px-4 py-3">
            <label className="flex items-start gap-3 mb-3 cursor-pointer active:opacity-70">
              <input
                type="checkbox"
                checked={craErrorDocs.errorProof}
                onChange={(e) => {
                  if (e.target.checked) {
                    onOpenFilePicker('Document or screenshot that gives proof of the error', 'errorProof', 'cra');
                  } else {
                    handleCraErrorDocChange('errorProof');
                  }
                }}
                className="mt-0.5 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
              />
              <span className="text-[15px] text-black leading-snug flex-1">
                Document or screenshot that gives proof of the error
              </span>
              {selectedFiles.cra.errorProof && selectedFiles.cra.errorProof.length > 0 && (
                <>
                  {renderFileIcon(selectedFiles.cra.errorProof)}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onRemoveFile('errorProof', 'cra');
                    }}
                    className="w-[22px] h-[22px] flex items-center justify-center bg-[#FF3B30] rounded-md flex-shrink-0 active:opacity-70"
                  >
                    <X className="w-3.5 h-3.5 text-white" />
                  </button>
                </>
              )}
            </label>

            <div className="flex items-start gap-3 mb-4">
              <label className="flex items-start gap-3 cursor-pointer active:opacity-70">
                <input
                  type="checkbox"
                  checked={craErrorDocs.other}
                  onChange={() => handleCraErrorDocChange('other')}
                  className="mt-0.5 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
                />
                <span className="text-[15px] text-black leading-snug">
                  Other:
                </span>
              </label>
              <input
                ref={craErrorOtherDocTypeRef}
                type="text"
                value={craErrorOtherDocType}
                onChange={(e) => setCraErrorOtherDocType(e.target.value)}
                onClick={() => {
                  setActiveField('craErrorOtherDocType');
                  setShowKeyboard(true);
                  setTimeout(() => {
                    if (scrollContainerRef.current && craErrorOtherDocTypeRef.current) {
                      const container = scrollContainerRef.current;
                      const element = craErrorOtherDocTypeRef.current;
                      const elementRect = element.getBoundingClientRect();
                      const containerRect = container.getBoundingClientRect();
                      const scrollTop = container.scrollTop;
                      const elementTop = elementRect.top - containerRect.top + scrollTop;
                      const offset = 100;
                      container.scrollTo({
                        top: elementTop - offset,
                        behavior: 'smooth'
                      });
                    }
                  }, 100);
                }}
                onFocus={() => {
                  setActiveField('craErrorOtherDocType');
                  setShowKeyboard(true);
                  setTimeout(() => {
                    if (scrollContainerRef.current && craErrorOtherDocTypeRef.current) {
                      const container = scrollContainerRef.current;
                      const element = craErrorOtherDocTypeRef.current;
                      const elementRect = element.getBoundingClientRect();
                      const containerRect = container.getBoundingClientRect();
                      const scrollTop = container.scrollTop;
                      const elementTop = elementRect.top - containerRect.top + scrollTop;
                      const offset = 100;
                      container.scrollTo({
                        top: elementTop - offset,
                        behavior: 'smooth'
                      });
                    }
                  }, 100);
                }}
                onBlur={() => {
                  if (craErrorOtherDocType.trim()) {
                    onOpenFilePicker(craErrorOtherDocType, 'other', 'cra');
                  }
                }}
                inputMode="none"
                placeholder="Specify type"
                className="max-w-[120px] px-2 py-0.5 bg-white border border-[#C6C6C8] rounded-[6px] text-[15px] text-black placeholder:text-[#8E8E93] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent -ml-2.5"
              />
              <div className="flex-1 min-w-0" />
              {selectedFiles.cra.other && selectedFiles.cra.other.length > 0 && (
                <>
                  {renderFileIcon(selectedFiles.cra.other)}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onRemoveFile('other', 'cra');
                    }}
                    className="w-[22px] h-[22px] flex items-center justify-center bg-[#FF3B30] rounded-md flex-shrink-0 active:opacity-70"
                  >
                    <X className="w-3.5 h-3.5 text-white" />
                  </button>
                </>
              )}
            </div>

            <div className="pt-3 border-t border-[#E5E5EA]">
              <label className="flex items-start gap-3 cursor-pointer active:opacity-70">
                <input
                  type="checkbox"
                  checked={craErrorDocs.noDocuments}
                  onChange={() => handleCraErrorDocChange('noDocuments')}
                  className="mt-1 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
                />
                <span className="text-[15px] text-black leading-snug">
                  I will not be providing supporting documents
                </span>
              </label>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}