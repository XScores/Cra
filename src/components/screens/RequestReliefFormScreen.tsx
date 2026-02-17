import { ChevronLeft, Info, Upload, CheckCircle, AlertCircle, FileText, DollarSign, Calendar, ChevronDown } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';
import { useState, useRef, useEffect } from 'react';
import { StepIndicator } from '../StepIndicator';
import { IPhoneNumericKeyboard } from '../IPhoneNumericKeyboard';
import { IPhoneTextKeyboard } from '../IPhoneTextKeyboard';
import { IPhoneKeyboard } from '../IPhoneKeyboard';
import { IOSPicker } from '../IOSPicker';
import { IOSMultiPicker } from '../IOSMultiPicker';
import { AnimatePresence } from 'motion/react';
import { SupportingDocsForReason } from '../RequestReliefSupportingDocs';
import { IOSFilePicker } from '../IOSFilePicker';

interface RequestReliefFormScreenProps {
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
  onSubmitDocuments?: () => void;
}

export function RequestReliefFormScreen({
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
  onReliefOfPenalties,
  onSubmitDocuments
}: RequestReliefFormScreenProps) {
  const [step, setStep] = useState(1);
  const totalSteps = 6;
  const [showSubmitConfirmation, setShowSubmitConfirmation] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Step 1: Type of Relief
  const [reliefType, setReliefType] = useState<string[]>([]);

  // Step 2: Tax Years and Amounts
  const [taxYears, setTaxYears] = useState([{ year: '', penaltyAmount: '' }]);
  const [interestAmount, setInterestAmount] = useState('');
  const [accountType, setAccountType] = useState('');
  const [hasOtherAccountType, setHasOtherAccountType] = useState<'yes' | 'no' | ''>('');
  const [otherAccountDetails, setOtherAccountDetails] = useState('');
  
  // Representative section
  const [submittingOnBehalf, setSubmittingOnBehalf] = useState<'yes' | 'no' | ''>('');
  const [hasLevel2Auth, setHasLevel2Auth] = useState<'yes' | 'no' | ''>('');
  const [representativeName, setRepresentativeName] = useState('');
  const [representativeId, setRepresentativeId] = useState('');
  const [representativeTelephone, setRepresentativeTelephone] = useState('');
  const [representativeFirm, setRepresentativeFirm] = useState('');
  const [representativeAddress, setRepresentativeAddress] = useState('');
  const [representativeCity, setRepresentativeCity] = useState('');
  const [representativeProvince, setRepresentativeProvince] = useState('');
  const [representativePostalCode, setRepresentativePostalCode] = useState('');
  const [representativeCountry, setRepresentativeCountry] = useState('');
  
  // Interest relief types
  const [interestReliefTypes, setInterestReliefTypes] = useState({
    arrearsInterest: false,
    instalmentInterest: false,
    other: false
  });
  const [interestReliefOther, setInterestReliefOther] = useState('');
  const [interestReliefTaxYears, setInterestReliefTaxYears] = useState([{ year: '', interestAmount: '' }]);
  const [chargedOnOtherAccount, setChargedOnOtherAccount] = useState<'yes' | 'no' | ''>('');
  
  const [penaltyTypes, setPenaltyTypes] = useState({
    lateFiling: false,
    failureToFile: false,
    repeatedFailure: false,
    lateRemitting: false,
    failureToFileElectronically: false,
    failureToRemit: false,
    instalmentPenalty: false,
    other: false
  });
  const [penaltyTypeOther, setPenaltyTypeOther] = useState('');
  const [businessNumbers, setBusinessNumbers] = useState({
    corporation: { part1: '', part2: '' },
    employer: { part1: '', part2: '' },
    gstHst: { part1: '', part2: '' },
    informationReturns: { part1: '', part2: '' },
    other: { part1: '', part2: '', part3: '' }
  });

  // Step 3: Reason for Request
  const [reasonCategory, setReasonCategory] = useState<string[]>([]);
  const [reasonDetails, setReasonDetails] = useState('');
  const [otherReasonText, setOtherReasonText] = useState('');
  const [supportingDocs, setSupportingDocs] = useState({
    rc376Form: false,
    bankStatements: false,
    mortgageRental: false,
    loansAndBills: false,
    other: false,
    noDocuments: false
  });
  const [otherDocType, setOtherDocType] = useState('');
  const [deathIllnessDocs, setDeathIllnessDocs] = useState({
    deathCertificate: false,
    doctorCertificate: false,
    other: false,
    noDocuments: false
  });
  const [deathIllnessOtherDocType, setDeathIllnessOtherDocType] = useState('');
  const [craErrorDocs, setCraErrorDocs] = useState({
    errorProof: false,
    other: false,
    noDocuments: false
  });
  const [craErrorOtherDocType, setCraErrorOtherDocType] = useState('');
  const [naturalDisasterDocs, setNaturalDisasterDocs] = useState({
    fireReport: false,
    insuranceReport: false,
    newsArticle: false,
    other: false,
    noDocuments: false
  });
  const [naturalDisasterOtherDocType, setNaturalDisasterOtherDocType] = useState('');

  // Track selected files for each document type
  const [selectedFiles, setSelectedFiles] = useState<{
    natural: { [key: string]: Array<{name: string, type: string}> };
    financial: { [key: string]: Array<{name: string, type: string}> };
    death: { [key: string]: Array<{name: string, type: string}> };
    cra: { [key: string]: Array<{name: string, type: string}> };
  }>({
    natural: {},
    financial: {},
    death: {},
    cra: {}
  });

  // Step 4: Circumstances
  const [circumstancesDetails, setCircumstancesDetails] = useState('');
  const [preventionSteps, setPreventionSteps] = useState('');

  // Step 4: Previous Decision
  const [isReconsideration, setIsReconsideration] = useState('');
  const [previousCaseNumber, setPreviousCaseNumber] = useState('');
  const [reconsiderationReason, setReconsiderationReason] = useState('');

  // Step 5: Supporting Details
  const [uploadedDocuments, setUploadedDocuments] = useState<string[]>([]);
  const [supportingDetails, setSupportingDetails] = useState('');
  const [keyDates, setKeyDates] = useState('');

  // Step 6: Review and Submit
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // Keyboard state
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [showTextKeyboard, setShowTextKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const taxYearRefs = useRef<(HTMLInputElement | null)[]>([]);
  const penaltyAmountRefs = useRef<(HTMLInputElement | null)[]>([]);
  const interestAmountRef = useRef<HTMLInputElement>(null);
  const circumstancesRef = useRef<HTMLTextAreaElement>(null);
  const preventionRef = useRef<HTMLTextAreaElement>(null);
  const reconsiderationReasonRef = useRef<HTMLTextAreaElement>(null);
  const previousCaseNumberRef = useRef<HTMLInputElement>(null);
  const reasonDetailsRef = useRef<HTMLTextAreaElement>(null);
  const supportingDetailsRef = useRef<HTMLTextAreaElement>(null);
  const keyDatesRef = useRef<HTMLTextAreaElement>(null);
  const otherDocTypeRef = useRef<HTMLInputElement>(null);
  const deathIllnessOtherDocTypeRef = useRef<HTMLInputElement>(null);
  const craErrorOtherDocTypeRef = useRef<HTMLInputElement>(null);
  const naturalDisasterOtherDocTypeRef = useRef<HTMLInputElement>(null);
  const penaltyTypeOtherRef = useRef<HTMLInputElement>(null);
  const corporationPart1Ref = useRef<HTMLInputElement>(null);
  const corporationPart2Ref = useRef<HTMLInputElement>(null);
  const employerPart1Ref = useRef<HTMLInputElement>(null);
  const employerPart2Ref = useRef<HTMLInputElement>(null);
  const gstHstPart1Ref = useRef<HTMLInputElement>(null);
  const gstHstPart2Ref = useRef<HTMLInputElement>(null);
  const informationReturnsPart1Ref = useRef<HTMLInputElement>(null);
  const informationReturnsPart2Ref = useRef<HTMLInputElement>(null);
  const businessOtherPart1Ref = useRef<HTMLInputElement>(null);
  const businessOtherPart2Ref = useRef<HTMLInputElement>(null);
  const businessOtherPart3Ref = useRef<HTMLInputElement>(null);
  const otherAccountDetailsRef = useRef<HTMLTextAreaElement>(null);
  const representativeNameRef = useRef<HTMLInputElement>(null);
  const representativeIdRef = useRef<HTMLInputElement>(null);
  const representativeTelephoneRef = useRef<HTMLInputElement>(null);
  const representativeFirmRef = useRef<HTMLInputElement>(null);
  const representativeAddressRef = useRef<HTMLInputElement>(null);
  const representativeCityRef = useRef<HTMLInputElement>(null);
  const representativeProvinceRef = useRef<HTMLInputElement>(null);
  const representativePostalCodeRef = useRef<HTMLInputElement>(null);
  const representativeCountryRef = useRef<HTMLInputElement>(null);
  const interestReliefOtherRef = useRef<HTMLInputElement>(null);
  const interestReliefTaxYearRefs = useRef<(HTMLInputElement | null)[]>([]);
  const interestReliefAmountRefs = useRef<(HTMLInputElement | null)[]>([]);

  // iOS Picker state
  const [showAccountTypePicker, setShowAccountTypePicker] = useState(false);
  const [showReasonPicker, setShowReasonPicker] = useState(false);

  // File Picker state
  const [showFilePicker, setShowFilePicker] = useState(false);
  const [filePickerDocType, setFilePickerDocType] = useState('');
  const [filePickerCategory, setFilePickerCategory] = useState<'financial' | 'natural' | 'death' | 'cra' | ''>('');
  const [filePickerField, setFilePickerField] = useState('');

  const accountTypeOptions = [
    { value: 'individual', label: 'Individual' },
    { value: 'business', label: 'Business' }
  ];

  const reasonOptions = [
    { 
      value: 'natural-disaster', 
      label: 'Natural or human-made disaster',
      description: 'For example, flood, fire, severe weather event, pandemic.\n\nFor more details on active disaster relief initiatives, go to canada.ca/cra-disaster-support.'
    },
    { 
      value: 'death-illness', 
      label: 'Death, accident, serious illness, emotional or mental distress',
      description: 'For example, death of a significant person in your life, death of the taxpayer, motor vehicle accident, depression.'
    },
    { 
      value: 'civil-disturbance', 
      label: 'Civil disturbance or disruption in services',
      description: 'For example, postal strike, protests.'
    },
    { 
      value: 'financial-hardship-individual', 
      label: 'Financial hardship - individual',
      description: 'Refers to a situation where you have difficulty affording basic necessities such as food, shelter, and clothing.'
    },
    { 
      value: 'financial-hardship-business', 
      label: 'Financial hardship - business',
      description: 'Refers to a situation when the continuity of operations, employees\' jobs or the welfare of the community as a whole is at risk.'
    },
    { 
      value: 'cra-error', 
      label: 'CRA error',
      description: 'For example, incorrect information provided by the CRA.'
    },
    { 
      value: 'cra-delay', 
      label: 'CRA delay',
      description: 'For example, a delay without cause that exceeded the service standards to resolve an audit or objection.'
    },
    { 
      value: 'other', 
      label: 'Other circumstances (Specify)',
      description: 'Note: Only use this field if your reason does not fit within the previous categories.'
    }
  ];

  // Scroll active field into view when iOS keyboard appears
  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTimeout(() => {
      const element = event.target;
      if (scrollContainerRef.current && element) {
        const container = scrollContainerRef.current;
        const elementRect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const scrollTop = container.scrollTop;
        const elementTop = elementRect.top - containerRect.top + scrollTop;
        const keyboardHeight = 300; // Approximate iOS keyboard height
        const targetScroll = elementTop - 100; // Position 100px from top

        container.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo(0, 0);
      }
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo(0, 0);
      }
    } else {
      onBack();
    }
  };

  const handleStepClick = (targetStep: number) => {
    setStep(targetStep);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, 0);
    }
  };

  const handleSubmit = () => {
    setShowSubmitConfirmation(true);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, 0);
    }
  };

  const handleSupportingDocChange = (key: keyof typeof supportingDocs) => {
    console.log(`handleSupportingDocChange called for ${key}, current value:`, supportingDocs[key]);
    setSupportingDocs(prev => {
      // If "no documents" is being checked, uncheck all others
      if (key === 'noDocuments') {
        return {
          rc376Form: false,
          bankStatements: false,
          mortgageRental: false,
          loansAndBills: false,
          other: false,
          noDocuments: !prev.noDocuments
        };
      }
      // If any other checkbox is checked, uncheck "no documents"
      return {
        ...prev,
        [key]: !prev[key],
        noDocuments: false
      };
    });
  };

  const handleDeathIllnessDocChange = (key: keyof typeof deathIllnessDocs) => {
    console.log(`handleDeathIllnessDocChange called for ${key}, current value:`, deathIllnessDocs[key]);
    setDeathIllnessDocs(prev => {
      // If "no documents" is being checked, uncheck all others
      if (key === 'noDocuments') {
        return {
          deathCertificate: false,
          doctorCertificate: false,
          other: false,
          noDocuments: !prev.noDocuments
        };
      }
      // If any other checkbox is checked, uncheck "no documents"
      return {
        ...prev,
        [key]: !prev[key],
        noDocuments: false
      };
    });
  };

  const handleCraErrorDocChange = (key: keyof typeof craErrorDocs) => {
    console.log(`handleCraErrorDocChange called for ${key}, current value:`, craErrorDocs[key]);
    setCraErrorDocs(prev => {
      // If "no documents" is being checked, uncheck all others
      if (key === 'noDocuments') {
        return {
          errorProof: false,
          other: false,
          noDocuments: !prev.noDocuments
        };
      }
      // If any other checkbox is checked, uncheck "no documents"
      return {
        ...prev,
        [key]: !prev[key],
        noDocuments: false
      };
    });
  };

  const handleNaturalDisasterDocChange = (key: keyof typeof naturalDisasterDocs) => {
    console.log(`handleNaturalDisasterDocChange called for ${key}, current value:`, naturalDisasterDocs[key]);
    setNaturalDisasterDocs(prev => {
      // If "no documents" is being checked, uncheck all others
      if (key === 'noDocuments') {
        return {
          fireReport: false,
          insuranceReport: false,
          newsArticle: false,
          other: false,
          noDocuments: !prev.noDocuments
        };
      }
      // If any other checkbox is checked, uncheck "no documents"
      return {
        ...prev,
        [key]: !prev[key],
        noDocuments: false
      };
    });
  };

  const handleInterestReliefChange = (key: keyof typeof interestReliefTypes) => {
    console.log(`handleInterestReliefChange called for ${key}, current value:`, interestReliefTypes[key]);
    setInterestReliefTypes(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleKeyPress = (key: string) => {
    if (activeField?.startsWith('taxYear-')) {
      const index = parseInt(activeField.split('-')[1]);
      const newTaxYears = [...taxYears];
      if (key === 'backspace') {
        newTaxYears[index].year = newTaxYears[index].year.slice(0, -1);
      } else if (/^\d$/.test(key) && newTaxYears[index].year.length < 4) {
        newTaxYears[index].year += key;
      }
      setTaxYears(newTaxYears);
    } else if (activeField?.startsWith('penaltyAmount-')) {
      const index = parseInt(activeField.split('-')[1]);
      const newTaxYears = [...taxYears];
      if (key === 'backspace') {
        newTaxYears[index].penaltyAmount = newTaxYears[index].penaltyAmount.slice(0, -1);
      } else if (/^[\d.]$/.test(key)) {
        // Allow only one decimal point
        if (key === '.' && newTaxYears[index].penaltyAmount.includes('.')) {
          return;
        }
        newTaxYears[index].penaltyAmount += key;
      }
      setTaxYears(newTaxYears);
    } else if (activeField === 'interestAmount') {
      setInterestAmount((prev) => {
        if (key === 'backspace') {
          return prev.slice(0, -1);
        }
        if (/^[\d.]$/.test(key)) {
          // Allow only one decimal point
          if (key === '.' && prev.includes('.')) {
            return prev;
          }
          return prev + key;
        }
        return prev;
      });
    } else if (activeField?.startsWith('interestReliefTaxYear-')) {
      const index = parseInt(activeField.split('-')[1]);
      const newTaxYears = [...interestReliefTaxYears];
      if (key === 'backspace') {
        newTaxYears[index].year = newTaxYears[index].year.slice(0, -1);
      } else if (/^\d$/.test(key) && newTaxYears[index].year.length < 4) {
        newTaxYears[index].year += key;
      }
      setInterestReliefTaxYears(newTaxYears);
    } else if (activeField?.startsWith('interestReliefAmount-')) {
      const index = parseInt(activeField.split('-')[1]);
      const newTaxYears = [...interestReliefTaxYears];
      if (key === 'backspace') {
        newTaxYears[index].interestAmount = newTaxYears[index].interestAmount.slice(0, -1);
      } else if (/^[\d.]$/.test(key)) {
        // Allow only one decimal point
        if (key === '.' && newTaxYears[index].interestAmount.includes('.')) {
          return;
        }
        newTaxYears[index].interestAmount += key;
      }
      setInterestReliefTaxYears(newTaxYears);
    } else if (activeField?.startsWith('corporation-') || activeField?.startsWith('employer-') || 
               activeField?.startsWith('gstHst-') || activeField?.startsWith('informationReturns-') || 
               activeField?.startsWith('businessOther-')) {
      const [fieldName, partName] = activeField.split('-');
      setBusinessNumbers((prev) => {
        const field = prev[fieldName as keyof typeof prev] as any;
        const currentValue = field[partName] || '';
        let newValue = currentValue;
        let maxLength = 9; // Default for part1
        
        if (partName === 'part2' && fieldName === 'businessOther') {
          maxLength = 2;
        } else if (partName === 'part2') {
          maxLength = 4;
        } else if (partName === 'part3') {
          maxLength = 4;
        }
        
        if (key === 'backspace') {
          newValue = currentValue.slice(0, -1);
        } else if (/^\d$/.test(key) && currentValue.length < maxLength) {
          newValue = currentValue + key;
        }
        
        return {
          ...prev,
          [fieldName]: {
            ...field,
            [partName]: newValue
          }
        };
      });
    } else if (activeField === 'representativeTelephone') {
      setRepresentativeTelephone((prev) => {
        if (key === 'backspace') {
          return prev.slice(0, -1);
        }
        if (/^[\d\s\-\+\(\)]$/.test(key)) {
          return prev + key;
        }
        return prev;
      });
    } else if (activeField === 'previousCaseNumber') {
      setPreviousCaseNumber((prev) => {
        if (key === 'backspace') {
          return prev.slice(0, -1);
        }
        return prev + key;
      });
    } else if (activeField === 'reconsiderationReason') {
      setReconsiderationReason((prev) => {
        if (key === 'backspace') {
          return prev.slice(0, -1);
        }
        return prev + key;
      });
    } else if (activeField === 'interestReliefOther') {
      setInterestReliefOther((prev) => {
        if (key === 'backspace') {
          return prev.slice(0, -1);
        }
        return prev + key;
      });
    } else if (activeField === 'otherDocType') {
      setOtherDocType((prev) => {
        if (key === 'backspace') {
          return prev.slice(0, -1);
        }
        return prev + key;
      });
    } else if (activeField === 'deathIllnessOtherDocType') {
      setDeathIllnessOtherDocType((prev) => {
        if (key === 'backspace') {
          return prev.slice(0, -1);
        }
        return prev + key;
      });
    } else if (activeField === 'craErrorOtherDocType') {
      setCraErrorOtherDocType((prev) => {
        if (key === 'backspace') {
          return prev.slice(0, -1);
        }
        return prev + key;
      });
    } else if (activeField === 'naturalDisasterOtherDocType') {
      setNaturalDisasterOtherDocType((prev) => {
        if (key === 'backspace') {
          return prev.slice(0, -1);
        }
        return prev + key;
      });
    } else if (activeField === 'supportingDetails') {
      setSupportingDetails((prev) => {
        if (key === 'backspace') {
          return prev.slice(0, -1);
        }
        return prev + key;
      });
    } else if (activeField === 'keyDates') {
      setKeyDates((prev) => {
        if (key === 'backspace') {
          return prev.slice(0, -1);
        }
        return prev + key;
      });
    }
  };

  const handleKeyboardDone = () => {
    setShowKeyboard(false);
    setActiveField(null);
  };

  const handleTextKeyboardDone = () => {
    setShowTextKeyboard(false);
    setActiveField(null);
  };

  const toggleReliefType = (type: string) => {
    if (reliefType.includes(type)) {
      setReliefType(reliefType.filter(t => t !== type));
    } else {
      setReliefType([...reliefType, type]);
    }
  };

  const handleDocumentUpload = () => {
    // Simulate document upload
    const newDoc = `Document_${uploadedDocuments.length + 1}.pdf`;
    setUploadedDocuments([...uploadedDocuments, newDoc]);
  };

  const removeDocument = (index: number) => {
    setUploadedDocuments(uploadedDocuments.filter((_, i) => i !== index));
  };

  // File Picker handlers
  const handleOpenFilePicker = (documentType: string, checkboxField: string, category: 'financial' | 'natural' | 'death' | 'cra') => {
    setFilePickerDocType(documentType);
    setFilePickerField(checkboxField);
    setFilePickerCategory(category);
    setShowFilePicker(true);
  };

  const handleFileSelect = (fileName: string) => {
    // Store the selected file name and type
    const fileExtension = fileName.split('.').pop()?.toLowerCase() || '';
    const fileType = ['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension) ? 'image' : 'pdf';
    
    setSelectedFiles(prev => {
      const categoryFiles = prev[filePickerCategory as keyof typeof prev] || {};
      const existingFiles = categoryFiles[filePickerField] || [];
      
      return {
        ...prev,
        [filePickerCategory]: {
          ...categoryFiles,
          [filePickerField]: [...existingFiles, { name: fileName, type: fileType }]
        }
      };
    });

    // When a file is selected, mark the checkbox as checked (only if not already checked)
    if (filePickerCategory === 'natural') {
      if (!naturalDisasterDocs[filePickerField as keyof typeof naturalDisasterDocs]) {
        handleNaturalDisasterDocChange(filePickerField as keyof typeof naturalDisasterDocs);
      }
    } else if (filePickerCategory === 'financial') {
      if (!supportingDocs[filePickerField as keyof typeof supportingDocs]) {
        handleSupportingDocChange(filePickerField as keyof typeof supportingDocs);
      }
    } else if (filePickerCategory === 'death') {
      if (!deathIllnessDocs[filePickerField as keyof typeof deathIllnessDocs]) {
        handleDeathIllnessDocChange(filePickerField as keyof typeof deathIllnessDocs);
      }
    } else if (filePickerCategory === 'cra') {
      if (!craErrorDocs[filePickerField as keyof typeof craErrorDocs]) {
        handleCraErrorDocChange(filePickerField as keyof typeof craErrorDocs);
      }
    }
  };

  const handleCloseFilePicker = () => {
    setShowFilePicker(false);
    setFilePickerDocType('');
    setFilePickerField('');
    setFilePickerCategory('');
  };

  const handleRemoveFile = (checkboxField: string, category: 'financial' | 'natural' | 'death' | 'cra') => {
    // Remove the selected files for this field
    setSelectedFiles(prev => {
      const categoryFiles = prev[category] || {};
      const updatedCategoryFiles = { ...categoryFiles };
      delete updatedCategoryFiles[checkboxField];
      
      return {
        ...prev,
        [category]: updatedCategoryFiles
      };
    });

    // Uncheck the checkbox
    if (category === 'natural') {
      handleNaturalDisasterDocChange(checkboxField as keyof typeof naturalDisasterDocs);
    } else if (category === 'financial') {
      handleSupportingDocChange(checkboxField as keyof typeof supportingDocs);
    } else if (category === 'death') {
      handleDeathIllnessDocChange(checkboxField as keyof typeof deathIllnessDocs);
    } else if (category === 'cra') {
      handleCraErrorDocChange(checkboxField as keyof typeof craErrorDocs);
    }
  };

  // Temporarily disabled validation to allow free navigation during development
  const isStep1Valid = true; // reliefType.length > 0;
  const isStep2Valid = true; // accountType && (...);
  const isStep3Valid = true; // reasonCategory && reasonDetails.length >= 50;
  const isStep4Valid = true; // circumstancesDetails.length >= 50 && preventionSteps.length >= 50;
  const isStep5Valid = true; // uploadedDocuments.length > 0;
  const isStep6Valid = true; // agreeToTerms;

  if (showSubmitConfirmation) {
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
          onSubmitDocuments={onSubmitDocuments}
        />

        <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[34px]">Request Submitted</h1>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="px-4 pt-4 pb-24">
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-20 h-20 bg-[#34C759] rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-[22px] font-semibold text-black mb-2 text-center">Request Successfully Submitted</h2>
              <p className="text-[15px] text-text-gray-ios text-center mb-6 max-w-md">
                Your taxpayer relief request (Form RC4288) has been submitted to the CRA.
              </p>
            </div>

            <div className="card-ios overflow-hidden mb-6">
              <div className="px-4 py-4 border-b border-[#E5E5EA]">
                <h3 className="text-[17px] font-semibold text-black">Confirmation Details</h3>
              </div>
              <div className="px-4 py-3 border-b border-[#E5E5EA]">
                <div className="flex justify-between items-center">
                  <span className="text-[15px] text-text-gray-ios">Reference Number</span>
                  <span className="text-[15px] text-black font-semibold">RC4288-2024-{Math.floor(Math.random() * 10000)}</span>
                </div>
              </div>
              <div className="px-4 py-3 border-b border-[#E5E5EA]">
                <div className="flex justify-between items-center">
                  <span className="text-[15px] text-text-gray-ios">Submission Date</span>
                  <span className="text-[15px] text-black">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </div>
              <div className="px-4 py-3">
                <div className="flex justify-between items-center">
                  <span className="text-[15px] text-text-gray-ios">Status</span>
                  <span className="text-[15px] text-[#FF9500] font-semibold">Under Review</span>
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
                      <p className="text-[15px] text-black font-semibold mb-1">Review Process</p>
                      <p className="text-[13px] text-text-gray-ios">The CRA will review your request and supporting documentation. This typically takes 90 business days.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-[13px] font-semibold">2</div>
                    <div>
                      <p className="text-[15px] text-black font-semibold mb-1">Additional Information</p>
                      <p className="text-[13px] text-text-gray-ios">If we need more information, we'll contact you by mail or phone.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-[13px] font-semibold">3</div>
                    <div>
                      <p className="text-[15px] text-black font-semibold mb-1">Decision Letter</p>
                      <p className="text-[13px] text-text-gray-ios">You'll receive a letter explaining our decision and any actions taken on your account.</p>
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
                    A confirmation email has been sent to your registered email address. You can track the status of your request in the Progress Tracker Service.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onBack}
              className="w-full bg-[#007AFF] text-white py-[14px] px-4 rounded-[10px] text-[17px] font-semibold border-0 cursor-pointer active:opacity-70 transition-opacity"
            >
              Return to Relief of Penalties
            </button>
          </div>
        </div>
      </div>
    );
  }

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
            onClick={handlePrevious}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0 mt-[6px]"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <div className="flex-1">
            <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[34px]">Request relief</h1>
            <p className="text-[15px] text-text-gray-ios mt-1">Step {step} of {totalSteps}</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex-shrink-0 px-4 pb-4 bg-[#f2f2f7]">
        <StepIndicator currentStep={step} totalSteps={totalSteps} onStepClick={handleStepClick} />
      </div>

      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto" style={{ paddingBottom: (showKeyboard || showTextKeyboard) ? '280px' : '16px' }}>
        <div className="px-4 pt-2 pb-24">
          
          {/* Step 1: Type of Relief */}
          {step === 1 && (
            <div>
              <div className="card-ios overflow-hidden mb-3">
                <div className="px-4 py-4 border-b border-[#E5E5EA]">
                  <h2 className="text-[17px] font-semibold text-black">Type of relief requested</h2>
                </div>
                <div className="px-4 py-4">
                  <p className="text-[15px] text-text-gray-ios mb-4">
                    Select the type(s) of relief you are requesting. You can select more than one.
                  </p>
                  
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={reliefType.includes('penalties')}
                        onChange={() => toggleReliefType('penalties')}
                        className="mt-1 w-5 h-5 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF]"
                      />
                      <div className="flex-1">
                        <span className="text-[15px] text-black font-semibold">Cancel or waive penalties</span>
                        <p className="text-[13px] text-text-gray-ios mt-1">
                          Request relief from late-filing penalties, failure to remit penalties, or other assessed penalties.
                        </p>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={reliefType.includes('interest')}
                        onChange={() => toggleReliefType('interest')}
                        className="mt-1 w-5 h-5 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF]"
                      />
                      <div className="flex-1">
                        <span className="text-[15px] text-black font-semibold">Cancel or waive interest</span>
                        <p className="text-[13px] text-text-gray-ios mt-1">
                          Request relief from interest charges on outstanding balances.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <button
                onClick={handleNext}
                disabled={!isStep1Valid}
                className="w-full bg-[#007AFF] text-white py-[14px] px-4 rounded-[10px] text-[17px] font-semibold border-0 cursor-pointer active:opacity-70 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2: Tax Years and Amounts */}
          {step === 2 && (
            <div>
              {/* Representative Section */}
              <div className="card-ios overflow-hidden mb-6">
                <div className="px-4 py-4 border-b border-[#E5E5EA]">
                  <h2 className="text-[17px] font-semibold text-black">Representative Information</h2>
                </div>
                <div className="px-4 py-4">
                  <p className="text-[15px] text-black mb-3">
                    I am submitting this form for:
                  </p>
                  <div className="flex items-center gap-6 mb-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="submittingOnBehalf"
                        checked={submittingOnBehalf === 'no'}
                        onChange={() => {
                          setSubmittingOnBehalf('no');
                          setHasLevel2Auth('');
                          setRepresentativeName('');
                          setRepresentativeId('');
                          setRepresentativeTelephone('');
                          setRepresentativeFirm('');
                          setRepresentativeAddress('');
                          setRepresentativeCity('');
                          setRepresentativeProvince('');
                          setRepresentativePostalCode('');
                          setRepresentativeCountry('');
                        }}
                        className="w-5 h-5 text-[#007AFF] border-gray-300 focus:ring-[#007AFF]"
                      />
                      <span className="text-[15px] text-black">Myself</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="submittingOnBehalf"
                        checked={submittingOnBehalf === 'yes'}
                        onChange={() => {
                          setSubmittingOnBehalf('yes');
                          setHasLevel2Auth('');
                        }}
                        className="w-5 h-5 text-[#007AFF] border-gray-300 focus:ring-[#007AFF]"
                      />
                      <span className="text-[15px] text-black">For someone else</span>
                    </label>
                  </div>

                  {/* Level 2 Authorization Section */}
                  {submittingOnBehalf === 'yes' && (
                    <div className="mt-4 bg-[#F2F2F7] rounded-[10px] p-4">
                      <p className="text-[15px] text-black mb-2">
                        Are you a representative with at least level 2 authorization for all the accounts involved in this relief request?
                      </p>
                      <p className="text-[13px] text-[#3C3C43] mb-3">
                        Note: Level 2 authorization allows you to view and update certain information.
                      </p>
                      
                      <div className="flex items-center gap-6 mb-4">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="hasLevel2Auth"
                            checked={hasLevel2Auth === 'yes'}
                            onChange={() => setHasLevel2Auth('yes')}
                            className="w-5 h-5 text-[#007AFF] border-gray-300 focus:ring-[#007AFF]"
                          />
                          <span className="text-[15px] text-black">Yes</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="hasLevel2Auth"
                            checked={hasLevel2Auth === 'no'}
                            onChange={() => {
                              setHasLevel2Auth('no');
                              setRepresentativeName('');
                              setRepresentativeId('');
                              setRepresentativeTelephone('');
                              setRepresentativeFirm('');
                              setRepresentativeAddress('');
                              setRepresentativeCity('');
                              setRepresentativeProvince('');
                              setRepresentativePostalCode('');
                              setRepresentativeCountry('');
                            }}
                            className="w-5 h-5 text-[#007AFF] border-gray-300 focus:ring-[#007AFF]"
                          />
                          <span className="text-[15px] text-black">No</span>
                        </label>
                      </div>

                      {/* No Level 2 Auth Warning */}
                      {hasLevel2Auth === 'no' && (
                        <div className="bg-[#FFE5E5] border border-[#FFCCCC] rounded-[10px] p-4">
                          <div className="flex gap-3">
                            <AlertCircle className="w-5 h-5 text-[#D32F2F] flex-shrink-0 mt-0.5" />
                            <p className="text-[15px] text-[#D32F2F]">
                              You cannot submit this form on behalf of someone else. For information on becoming an authorized representative, go to canada.ca/taxes-authorize-representative.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Representative Details Form */}
                      {hasLevel2Auth === 'yes' && (
                        <div className="space-y-4 mt-4">
                          <div>
                            <label className="block text-[13px] font-semibold text-black mb-2">Name of representative:</label>
                            <input
                              ref={representativeNameRef}
                              type="text"
                              value={representativeName}
                              onChange={(e) => setRepresentativeName(e.target.value)}
                              onFocus={() => {
                                setActiveField('representativeName');
                                setShowTextKeyboard(true);
                              }}
                              placeholder="Enter representative name"
                              inputMode="none"
                              className="w-full px-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                            />
                          </div>

                          <div>
                            <label className="block text-[13px] font-semibold text-black mb-2">Representative ID (RepID):</label>
                            <input
                              ref={representativeIdRef}
                              type="text"
                              value={representativeId}
                              onChange={(e) => setRepresentativeId(e.target.value)}
                              onFocus={() => {
                                setActiveField('representativeId');
                                setShowTextKeyboard(true);
                              }}
                              placeholder="Enter RepID"
                              inputMode="none"
                              className="w-full px-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                            />
                          </div>

                          <div>
                            <label className="block text-[13px] font-semibold text-black mb-2">Telephone number:</label>
                            <input
                              ref={representativeTelephoneRef}
                              type="text"
                              value={representativeTelephone}
                              onChange={(e) => setRepresentativeTelephone(e.target.value)}
                              onFocus={() => {
                                setActiveField('representativeTelephone');
                                setShowKeyboard(true);
                              }}
                              placeholder="Enter telephone number"
                              inputMode="none"
                              className="w-full px-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                            />
                          </div>

                          <div>
                            <label className="block text-[13px] font-semibold text-black mb-2">Representative's firm (if applicable):</label>
                            <input
                              ref={representativeFirmRef}
                              type="text"
                              value={representativeFirm}
                              onChange={(e) => setRepresentativeFirm(e.target.value)}
                              onFocus={() => {
                                setActiveField('representativeFirm');
                                setShowTextKeyboard(true);
                              }}
                              placeholder="Enter firm name"
                              inputMode="none"
                              className="w-full px-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                            />
                          </div>

                          <div>
                            <label className="block text-[13px] font-semibold text-black mb-2">Mailing address:</label>
                            <input
                              ref={representativeAddressRef}
                              type="text"
                              value={representativeAddress}
                              onChange={(e) => setRepresentativeAddress(e.target.value)}
                              onFocus={() => {
                                setActiveField('representativeAddress');
                                setShowTextKeyboard(true);
                              }}
                              placeholder="Enter mailing address"
                              inputMode="none"
                              className="w-full px-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                            />
                          </div>

                          <div>
                            <label className="block text-[13px] font-semibold text-black mb-2">City, town or community:</label>
                            <input
                              ref={representativeCityRef}
                              type="text"
                              value={representativeCity}
                              onChange={(e) => setRepresentativeCity(e.target.value)}
                              onFocus={() => {
                                setActiveField('representativeCity');
                                setShowTextKeyboard(true);
                              }}
                              placeholder="Enter city/town"
                              inputMode="none"
                              className="w-full px-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                            />
                          </div>

                          <div>
                            <label className="block text-[13px] font-semibold text-black mb-2">Province, territory or state:</label>
                            <input
                              ref={representativeProvinceRef}
                              type="text"
                              value={representativeProvince}
                              onChange={(e) => setRepresentativeProvince(e.target.value)}
                              onFocus={() => {
                                setActiveField('representativeProvince');
                                setShowTextKeyboard(true);
                              }}
                              placeholder="Enter province/state"
                              inputMode="none"
                              className="w-full px-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                            />
                          </div>

                          <div>
                            <label className="block text-[13px] font-semibold text-black mb-2">Postal or ZIP code:</label>
                            <input
                              ref={representativePostalCodeRef}
                              type="text"
                              value={representativePostalCode}
                              onChange={(e) => setRepresentativePostalCode(e.target.value.toUpperCase())}
                              onFocus={() => {
                                setActiveField('representativePostalCode');
                                setShowTextKeyboard(true);
                              }}
                              placeholder="Enter postal/ZIP code"
                              inputMode="none"
                              className="w-full px-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                            />
                          </div>

                          <div>
                            <label className="block text-[13px] font-semibold text-black mb-2">Country (if other than Canada):</label>
                            <input
                              ref={representativeCountryRef}
                              type="text"
                              value={representativeCountry}
                              onChange={(e) => setRepresentativeCountry(e.target.value)}
                              onFocus={() => {
                                setActiveField('representativeCountry');
                                setShowTextKeyboard(true);
                              }}
                              placeholder="Enter country"
                              inputMode="none"
                              className="w-full px-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Penalty relief section - Only show when penalties relief is selected */}
              {reliefType.includes('penalties') && (
              <div className="card-ios overflow-hidden mb-6">
                <div className="px-4 py-4 border-b border-[#E5E5EA]">
                  <h2 className="text-[17px] font-semibold text-black">Penalty relief - Tax Year and Account Information</h2>
                </div>
                <div className="px-4 py-4">
                  <p className="text-[15px] text-text-gray-ios mb-4">
                    Provide details about the tax year(s) and amounts affected by your request.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <p className="text-[15px] text-black mb-3">Account type:</p>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="accountType"
                            checked={accountType === 'individual'}
                            onChange={() => setAccountType('individual')}
                            className="w-5 h-5 text-[#007AFF] border-gray-300 focus:ring-[#007AFF]"
                          />
                          <span className="text-[15px] text-black">Individual</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="accountType"
                            checked={accountType === 'business'}
                            onChange={() => setAccountType('business')}
                            className="w-5 h-5 text-[#007AFF] border-gray-300 focus:ring-[#007AFF]"
                          />
                          <span className="text-[15px] text-black">Business</span>
                        </label>
                      </div>
                    </div>

                    {accountType === 'business' && (
                      <div>
                        <p className="text-[15px] text-black mb-4">
                          Specify only the business number(s) for the accounts that received the penalty and/or interest:
                        </p>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-[13px] font-semibold text-black mb-2">Corporation</label>
                            <div className="flex items-center gap-1.5">
                              <input
                                ref={corporationPart1Ref}
                                type="text"
                                value={businessNumbers.corporation.part1}
                                onChange={(e) => setBusinessNumbers({ 
                                  ...businessNumbers, 
                                  corporation: { ...businessNumbers.corporation, part1: e.target.value }
                                })}
                                onFocus={() => {
                                  setActiveField('corporation-part1');
                                  setShowKeyboard(true);
                                  setTimeout(() => {
                                    if (scrollContainerRef.current && corporationPart1Ref.current) {
                                      const container = scrollContainerRef.current;
                                      const element = corporationPart1Ref.current;
                                      const elementRect = element.getBoundingClientRect();
                                      const containerRect = container.getBoundingClientRect();
                                      const scrollTop = container.scrollTop;
                                      const elementTop = elementRect.top - containerRect.top + scrollTop;
                                      const targetScroll = elementTop - 80;
                                      
                                      container.scrollTo({
                                        top: targetScroll,
                                        behavior: 'smooth'
                                      });
                                    }
                                  }, 150);
                                }}
                                placeholder="123456789"
                                maxLength={9}
                                inputMode="none"
                                className="w-[160px] px-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                              />
                              <span className="text-[15px] text-black font-semibold">RC</span>
                              <input
                                ref={corporationPart2Ref}
                                type="text"
                                value={businessNumbers.corporation.part2}
                                onChange={(e) => setBusinessNumbers({ 
                                  ...businessNumbers, 
                                  corporation: { ...businessNumbers.corporation, part2: e.target.value }
                                })}
                                onFocus={() => {
                                  setActiveField('corporation-part2');
                                  setShowKeyboard(true);
                                  setTimeout(() => {
                                    if (scrollContainerRef.current && corporationPart2Ref.current) {
                                      const container = scrollContainerRef.current;
                                      const element = corporationPart2Ref.current;
                                      const elementRect = element.getBoundingClientRect();
                                      const containerRect = container.getBoundingClientRect();
                                      const scrollTop = container.scrollTop;
                                      const elementTop = elementRect.top - containerRect.top + scrollTop;
                                      const targetScroll = elementTop - 80;
                                      
                                      container.scrollTo({
                                        top: targetScroll,
                                        behavior: 'smooth'
                                      });
                                    }
                                  }, 150);
                                }}
                                placeholder="0001"
                                maxLength={4}
                                inputMode="none"
                                className="w-[72px] px-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[13px] font-semibold text-black mb-2">Employer</label>
                            <div className="flex items-center gap-1.5">
                              <input
                                ref={employerPart1Ref}
                                type="text"
                                value={businessNumbers.employer.part1}
                                onChange={(e) => setBusinessNumbers({ 
                                  ...businessNumbers, 
                                  employer: { ...businessNumbers.employer, part1: e.target.value }
                                })}
                                onFocus={() => {
                                  setActiveField('employer-part1');
                                  setShowKeyboard(true);
                                  setTimeout(() => {
                                    if (scrollContainerRef.current && employerPart1Ref.current) {
                                      const container = scrollContainerRef.current;
                                      const element = employerPart1Ref.current;
                                      const elementRect = element.getBoundingClientRect();
                                      const containerRect = container.getBoundingClientRect();
                                      const scrollTop = container.scrollTop;
                                      const elementTop = elementRect.top - containerRect.top + scrollTop;
                                      const targetScroll = elementTop - 80;
                                      
                                      container.scrollTo({
                                        top: targetScroll,
                                        behavior: 'smooth'
                                      });
                                    }
                                  }, 150);
                                }}
                                placeholder="123456789"
                                maxLength={9}
                                inputMode="none"
                                className="w-[160px] px-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                              />
                              <span className="text-[15px] text-black font-semibold">RP</span>
                              <input
                                ref={employerPart2Ref}
                                type="text"
                                value={businessNumbers.employer.part2}
                                onChange={(e) => setBusinessNumbers({ 
                                  ...businessNumbers, 
                                  employer: { ...businessNumbers.employer, part2: e.target.value }
                                })}
                                onFocus={() => {
                                  setActiveField('employer-part2');
                                  setShowKeyboard(true);
                                  setTimeout(() => {
                                    if (scrollContainerRef.current && employerPart2Ref.current) {
                                      const container = scrollContainerRef.current;
                                      const element = employerPart2Ref.current;
                                      const elementRect = element.getBoundingClientRect();
                                      const containerRect = container.getBoundingClientRect();
                                      const scrollTop = container.scrollTop;
                                      const elementTop = elementRect.top - containerRect.top + scrollTop;
                                      const targetScroll = elementTop - 80;
                                      
                                      container.scrollTo({
                                        top: targetScroll,
                                        behavior: 'smooth'
                                      });
                                    }
                                  }, 150);
                                }}
                                placeholder="0001"
                                maxLength={4}
                                inputMode="none"
                                className="w-[72px] px-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[13px] font-semibold text-black mb-2">GST/HST</label>
                            <div className="flex items-center gap-1.5">
                              <input
                                ref={gstHstPart1Ref}
                                type="text"
                                value={businessNumbers.gstHst.part1}
                                onChange={(e) => setBusinessNumbers({ 
                                  ...businessNumbers, 
                                  gstHst: { ...businessNumbers.gstHst, part1: e.target.value }
                                })}
                                onFocus={() => {
                                  setActiveField('gstHst-part1');
                                  setShowKeyboard(true);
                                  setTimeout(() => {
                                    if (scrollContainerRef.current && gstHstPart1Ref.current) {
                                      const container = scrollContainerRef.current;
                                      const element = gstHstPart1Ref.current;
                                      const elementRect = element.getBoundingClientRect();
                                      const containerRect = container.getBoundingClientRect();
                                      const scrollTop = container.scrollTop;
                                      const elementTop = elementRect.top - containerRect.top + scrollTop;
                                      const targetScroll = elementTop - 80;
                                      
                                      container.scrollTo({
                                        top: targetScroll,
                                        behavior: 'smooth'
                                      });
                                    }
                                  }, 150);
                                }}
                                placeholder="123456789"
                                maxLength={9}
                                inputMode="none"
                                className="w-[160px] px-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                              />
                              <span className="text-[15px] text-black font-semibold">RT</span>
                              <input
                                ref={gstHstPart2Ref}
                                type="text"
                                value={businessNumbers.gstHst.part2}
                                onChange={(e) => setBusinessNumbers({ 
                                  ...businessNumbers, 
                                  gstHst: { ...businessNumbers.gstHst, part2: e.target.value }
                                })}
                                onFocus={() => {
                                  setActiveField('gstHst-part2');
                                  setShowKeyboard(true);
                                  setTimeout(() => {
                                    if (scrollContainerRef.current && gstHstPart2Ref.current) {
                                      const container = scrollContainerRef.current;
                                      const element = gstHstPart2Ref.current;
                                      const elementRect = element.getBoundingClientRect();
                                      const containerRect = container.getBoundingClientRect();
                                      const scrollTop = container.scrollTop;
                                      const elementTop = elementRect.top - containerRect.top + scrollTop;
                                      const targetScroll = elementTop - 80;
                                      
                                      container.scrollTo({
                                        top: targetScroll,
                                        behavior: 'smooth'
                                      });
                                    }
                                  }, 150);
                                }}
                                placeholder="0001"
                                maxLength={4}
                                inputMode="none"
                                className="w-[72px] px-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[13px] font-semibold text-black mb-2">Information Returns</label>
                            <div className="flex items-center gap-1.5">
                              <input
                                ref={informationReturnsPart1Ref}
                                type="text"
                                value={businessNumbers.informationReturns.part1}
                                onChange={(e) => setBusinessNumbers({ 
                                  ...businessNumbers, 
                                  informationReturns: { ...businessNumbers.informationReturns, part1: e.target.value }
                                })}
                                onFocus={() => {
                                  setActiveField('informationReturns-part1');
                                  setShowKeyboard(true);
                                  setTimeout(() => {
                                    if (scrollContainerRef.current && informationReturnsPart1Ref.current) {
                                      const container = scrollContainerRef.current;
                                      const element = informationReturnsPart1Ref.current;
                                      const elementRect = element.getBoundingClientRect();
                                      const containerRect = container.getBoundingClientRect();
                                      const scrollTop = container.scrollTop;
                                      const elementTop = elementRect.top - containerRect.top + scrollTop;
                                      const targetScroll = elementTop - 80;
                                      
                                      container.scrollTo({
                                        top: targetScroll,
                                        behavior: 'smooth'
                                      });
                                    }
                                  }, 150);
                                }}
                                placeholder="123456789"
                                maxLength={9}
                                inputMode="none"
                                className="w-[160px] px-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                              />
                              <span className="text-[15px] text-black font-semibold">RZ</span>
                              <input
                                ref={informationReturnsPart2Ref}
                                type="text"
                                value={businessNumbers.informationReturns.part2}
                                onChange={(e) => setBusinessNumbers({ 
                                  ...businessNumbers, 
                                  informationReturns: { ...businessNumbers.informationReturns, part2: e.target.value }
                                })}
                                onFocus={() => {
                                  setActiveField('informationReturns-part2');
                                  setShowKeyboard(true);
                                  setTimeout(() => {
                                    if (scrollContainerRef.current && informationReturnsPart2Ref.current) {
                                      const container = scrollContainerRef.current;
                                      const element = informationReturnsPart2Ref.current;
                                      const elementRect = element.getBoundingClientRect();
                                      const containerRect = container.getBoundingClientRect();
                                      const scrollTop = container.scrollTop;
                                      const elementTop = elementRect.top - containerRect.top + scrollTop;
                                      const targetScroll = elementTop - 80;
                                      
                                      container.scrollTo({
                                        top: targetScroll,
                                        behavior: 'smooth'
                                      });
                                    }
                                  }, 150);
                                }}
                                placeholder="0001"
                                maxLength={4}
                                inputMode="none"
                                className="w-[72px] px-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[13px] font-semibold text-black mb-2">Other</label>
                            <div className="flex items-center gap-1.5">
                              <input
                                ref={businessOtherPart1Ref}
                                type="text"
                                value={businessNumbers.other.part1}
                                onChange={(e) => setBusinessNumbers({ 
                                  ...businessNumbers, 
                                  other: { ...businessNumbers.other, part1: e.target.value }
                                })}
                                onFocus={() => {
                                  setActiveField('businessOther-part1');
                                  setShowKeyboard(true);
                                  setTimeout(() => {
                                    if (scrollContainerRef.current && businessOtherPart1Ref.current) {
                                      const container = scrollContainerRef.current;
                                      const element = businessOtherPart1Ref.current;
                                      const elementRect = element.getBoundingClientRect();
                                      const containerRect = container.getBoundingClientRect();
                                      const scrollTop = container.scrollTop;
                                      const elementTop = elementRect.top - containerRect.top + scrollTop;
                                      const targetScroll = elementTop - 80;
                                      
                                      container.scrollTo({
                                        top: targetScroll,
                                        behavior: 'smooth'
                                      });
                                    }
                                  }, 150);
                                }}
                                placeholder="123456789"
                                maxLength={9}
                                inputMode="none"
                                className="w-[160px] px-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                              />
                              <input
                                ref={businessOtherPart2Ref}
                                type="text"
                                value={businessNumbers.other.part2}
                                onChange={(e) => {
                                  const value = e.target.value.toUpperCase().slice(0, 2);
                                  setBusinessNumbers({ 
                                    ...businessNumbers, 
                                    other: { ...businessNumbers.other, part2: value }
                                  });
                                }}
                                onFocus={() => {
                                  setActiveField('businessOther-part2');
                                  setShowTextKeyboard(true);
                                  setTimeout(() => {
                                    if (scrollContainerRef.current && businessOtherPart2Ref.current) {
                                      const container = scrollContainerRef.current;
                                      const element = businessOtherPart2Ref.current;
                                      const elementRect = element.getBoundingClientRect();
                                      const containerRect = container.getBoundingClientRect();
                                      const scrollTop = container.scrollTop;
                                      const elementTop = elementRect.top - containerRect.top + scrollTop;
                                      const targetScroll = elementTop - 80;
                                      
                                      container.scrollTo({
                                        top: targetScroll,
                                        behavior: 'smooth'
                                      });
                                    }
                                  }, 150);
                                }}
                                placeholder="00"
                                maxLength={2}
                                inputMode="none"
                                className="w-[56px] px-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                              />
                              <input
                                ref={businessOtherPart3Ref}
                                type="text"
                                value={businessNumbers.other.part3}
                                onChange={(e) => setBusinessNumbers({ 
                                  ...businessNumbers, 
                                  other: { ...businessNumbers.other, part3: e.target.value }
                                })}
                                onFocus={() => {
                                  setActiveField('businessOther-part3');
                                  setShowKeyboard(true);
                                  setTimeout(() => {
                                    if (scrollContainerRef.current && businessOtherPart3Ref.current) {
                                      const container = scrollContainerRef.current;
                                      const element = businessOtherPart3Ref.current;
                                      const elementRect = element.getBoundingClientRect();
                                      const containerRect = container.getBoundingClientRect();
                                      const scrollTop = container.scrollTop;
                                      const elementTop = elementRect.top - containerRect.top + scrollTop;
                                      const targetScroll = elementTop - 80;
                                      
                                      container.scrollTo({
                                        top: targetScroll,
                                        behavior: 'smooth'
                                      });
                                    }
                                  }, 150);
                                }}
                                placeholder="0001"
                                maxLength={4}
                                inputMode="none"
                                className="w-[72px] px-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {reliefType.includes('penalties') && (
                      <div>
                        <label className="block text-[13px] font-semibold text-black mb-2">Penalty Type</label>
                        <div className="space-y-3">
                          <label className="flex items-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={penaltyTypes.lateFiling}
                              onChange={() => setPenaltyTypes({ ...penaltyTypes, lateFiling: !penaltyTypes.lateFiling })}
                              className="mt-1 w-5 h-5 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF]"
                            />
                            <span className="text-[15px] text-black">Late filing</span>
                          </label>

                          <label className="flex items-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={penaltyTypes.failureToFile}
                              onChange={() => setPenaltyTypes({ ...penaltyTypes, failureToFile: !penaltyTypes.failureToFile })}
                              className="mt-1 w-5 h-5 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF]"
                            />
                            <span className="text-[15px] text-black">Failure to file</span>
                          </label>

                          <label className="flex items-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={penaltyTypes.repeatedFailure}
                              onChange={() => setPenaltyTypes({ ...penaltyTypes, repeatedFailure: !penaltyTypes.repeatedFailure })}
                              className="mt-1 w-5 h-5 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF]"
                            />
                            <span className="text-[15px] text-black">Repeated failure to report income</span>
                          </label>

                          <label className="flex items-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={penaltyTypes.lateRemitting}
                              onChange={() => setPenaltyTypes({ ...penaltyTypes, lateRemitting: !penaltyTypes.lateRemitting })}
                              className="mt-1 w-5 h-5 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF]"
                            />
                            <span className="text-[15px] text-black">Late remitting</span>
                          </label>

                          <label className="flex items-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={penaltyTypes.failureToFileElectronically}
                              onChange={() => setPenaltyTypes({ ...penaltyTypes, failureToFileElectronically: !penaltyTypes.failureToFileElectronically })}
                              className="mt-1 w-5 h-5 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF]"
                            />
                            <span className="text-[15px] text-black">Failure to file electronically</span>
                          </label>

                          <label className="flex items-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={penaltyTypes.failureToRemit}
                              onChange={() => setPenaltyTypes({ ...penaltyTypes, failureToRemit: !penaltyTypes.failureToRemit })}
                              className="mt-1 w-5 h-5 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF]"
                            />
                            <span className="text-[15px] text-black">Failure to remit</span>
                          </label>

                          <label className="flex items-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={penaltyTypes.instalmentPenalty}
                              onChange={() => setPenaltyTypes({ ...penaltyTypes, instalmentPenalty: !penaltyTypes.instalmentPenalty })}
                              className="mt-1 w-5 h-5 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF]"
                            />
                            <span className="text-[15px] text-black">Instalment penalty</span>
                          </label>

                          <label className="flex items-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={penaltyTypes.other}
                              onChange={() => setPenaltyTypes({ ...penaltyTypes, other: !penaltyTypes.other })}
                              className="mt-1 w-5 h-5 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF]"
                            />
                            <span className="text-[15px] text-black">Other</span>
                          </label>

                          {penaltyTypes.other && (
                            <div className="ml-8">
                              <input
                                ref={penaltyTypeOtherRef}
                                type="text"
                                value={penaltyTypeOther}
                                onChange={(e) => setPenaltyTypeOther(e.target.value)}
                                onFocus={() => {
                                  setActiveField('penaltyTypeOther');
                                  setShowTextKeyboard(true);
                                  setTimeout(() => {
                                    if (scrollContainerRef.current && penaltyTypeOtherRef.current) {
                                      const container = scrollContainerRef.current;
                                      const element = penaltyTypeOtherRef.current;
                                      const elementRect = element.getBoundingClientRect();
                                      const containerRect = container.getBoundingClientRect();
                                      const scrollTop = container.scrollTop;
                                      const elementTop = elementRect.top - containerRect.top + scrollTop;
                                      const targetScroll = elementTop - 80;
                                      
                                      container.scrollTo({
                                        top: targetScroll,
                                        behavior: 'smooth'
                                      });
                                    }
                                  }, 150);
                                }}
                                placeholder="Specify other penalty type"
                                inputMode="none"
                                className="w-full px-4 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {reliefType.includes('penalties') && (
                      <div>
                        <label className="block text-[13px] font-semibold text-black mb-4">Tax Year(s) and Penalty Amount(s)</label>
                        {taxYears.map((taxYearItem, index) => (
                          <div key={index} className="mb-4">
                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <label className="block text-[13px] font-semibold text-black mb-2">Tax Year</label>
                                <input
                                  ref={(el) => { taxYearRefs.current[index] = el; }}
                                  type="text"
                                  value={taxYearItem.year}
                                  onChange={(e) => {
                                    const newTaxYears = [...taxYears];
                                    newTaxYears[index].year = e.target.value;
                                    setTaxYears(newTaxYears);
                                  }}
                                  onFocus={() => {
                                    setActiveField(`taxYear-${index}`);
                                    setShowKeyboard(true);
                                    setTimeout(() => {
                                      if (scrollContainerRef.current && taxYearRefs.current[index]) {
                                        const container = scrollContainerRef.current;
                                        const element = taxYearRefs.current[index];
                                        const elementRect = element!.getBoundingClientRect();
                                        const containerRect = container.getBoundingClientRect();
                                        const scrollTop = container.scrollTop;
                                        const elementTop = elementRect.top - containerRect.top + scrollTop;
                                        const targetScroll = elementTop - 80;
                                        
                                        container.scrollTo({
                                          top: targetScroll,
                                          behavior: 'smooth'
                                        });
                                      }
                                    }, 150);
                                  }}
                                  placeholder="e.g., 2024"
                                  inputMode="none"
                                  className="w-full px-4 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                                />
                              </div>
                              <div>
                                <label className="block text-[13px] font-semibold text-black mb-2">Penalty Amount</label>
                                <div className="relative">
                                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[17px] text-[#3C3C43]">$</span>
                                  <input
                                    ref={(el) => { penaltyAmountRefs.current[index] = el; }}
                                    type="text"
                                    value={taxYearItem.penaltyAmount}
                                    onChange={(e) => {
                                      const newTaxYears = [...taxYears];
                                      newTaxYears[index].penaltyAmount = e.target.value;
                                      setTaxYears(newTaxYears);
                                    }}
                                    onFocus={() => {
                                      setActiveField(`penaltyAmount-${index}`);
                                      setShowKeyboard(true);
                                      setTimeout(() => {
                                        if (scrollContainerRef.current && penaltyAmountRefs.current[index]) {
                                          const container = scrollContainerRef.current;
                                          const element = penaltyAmountRefs.current[index];
                                          const elementRect = element!.getBoundingClientRect();
                                          const containerRect = container.getBoundingClientRect();
                                          const scrollTop = container.scrollTop;
                                          const elementTop = elementRect.top - containerRect.top + scrollTop;
                                          const targetScroll = elementTop - 80;
                                          
                                          container.scrollTo({
                                            top: targetScroll,
                                            behavior: 'smooth'
                                          });
                                        }
                                      }, 150);
                                    }}
                                    placeholder="0.00"
                                    inputMode="none"
                                    className="w-full pl-8 pr-4 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                                  />
                                </div>
                              </div>
                            </div>
                            {index > 0 && (
                              <button
                                onClick={() => {
                                  const newTaxYears = taxYears.filter((_, i) => i !== index);
                                  setTaxYears(newTaxYears);
                                }}
                                className="mt-2 text-[#ff3b30] text-[15px] underline bg-transparent border-0 p-0 cursor-pointer hover:opacity-70"
                              >
                                Remove this tax year
                              </button>
                            )}
                          </div>
                        ))}
                        <button
                          onClick={() => setTaxYears([...taxYears, { year: '', penaltyAmount: '' }])}
                          className="w-full px-4 py-3 bg-white border-2 border-[#007AFF] text-[#007AFF] rounded-[10px] text-[17px] font-semibold hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors"
                        >
                          + Add Additional Tax Year
                        </button>
                      </div>
                    )}

                    {reliefType.includes('interest') && (
                      <div>
                        <label className="block text-[13px] font-semibold text-black mb-2">Interest Amount</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[17px] text-[#3C3C43]">$</span>
                          <input
                            ref={interestAmountRef}
                            type="text"
                            value={interestAmount}
                            onChange={(e) => setInterestAmount(e.target.value)}
                            onFocus={() => {
                              setActiveField('interestAmount');
                              setShowKeyboard(true);
                              setTimeout(() => {
                                if (scrollContainerRef.current && interestAmountRef.current) {
                                  const container = scrollContainerRef.current;
                                  const element = interestAmountRef.current;
                                  const elementRect = element.getBoundingClientRect();
                                  const containerRect = container.getBoundingClientRect();
                                  const scrollTop = container.scrollTop;
                                  const elementTop = elementRect.top - containerRect.top + scrollTop;
                                  const targetScroll = elementTop - 80;
                                  
                                  container.scrollTo({
                                    top: targetScroll,
                                    behavior: 'smooth'
                                  });
                                }
                              }, 150);
                            }}
                            placeholder="0.00"
                            inputMode="none"
                            className="w-full pl-8 pr-4 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                          />
                        </div>
                        <p className="text-[13px] text-[#3C3C43] mt-1">Enter the total interest amount</p>
                      </div>
                    )}

                  </div>
                </div>
              </div>
              )}

              {/* Interest Relief Section - Only show when interest relief is selected */}
              {reliefType.includes('interest') && (
              <div className="card-ios overflow-hidden mb-6">
                <div className="px-4 py-4 border-b border-[#E5E5EA]">
                  <h2 className="text-[17px] font-semibold text-black">Interest relief - Tax Year and Account Information</h2>
                </div>
                <div className="px-4 py-4">
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={interestReliefTypes.arrearsInterest}
                        onChange={() => handleInterestReliefChange('arrearsInterest')}
                        className="w-5 h-5 text-[#007AFF] border-gray-300 rounded focus:ring-[#007AFF]"
                      />
                      <span className="text-[15px] text-black">Arrears interest</span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={interestReliefTypes.instalmentInterest}
                        onChange={() => handleInterestReliefChange('instalmentInterest')}
                        className="w-5 h-5 text-[#007AFF] border-gray-300 rounded focus:ring-[#007AFF]"
                      />
                      <span className="text-[15px] text-black">Instalment interest</span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={interestReliefTypes.other}
                        onChange={() => handleInterestReliefChange('other')}
                        className="w-5 h-5 text-[#007AFF] border-gray-300 rounded focus:ring-[#007AFF]"
                      />
                      <span className="text-[15px] text-black">Other</span>
                    </label>
                  </div>

                  {/* Show "Other" text field only when "Other" is checked */}
                  {interestReliefTypes.other && (
                    <div className="mt-4">
                      <input
                        ref={interestReliefOtherRef}
                        type="text"
                        value={interestReliefOther}
                        onChange={(e) => setInterestReliefOther(e.target.value)}
                        onClick={() => {
                          console.log('Clicked interestReliefOther field');
                          setActiveField('interestReliefOther');
                          setShowKeyboard(true);
                        }}
                        onFocus={() => {
                          console.log('Focused interestReliefOther field');
                          setActiveField('interestReliefOther');
                          setShowKeyboard(true);
                          setTimeout(() => {
                            if (scrollContainerRef.current && interestReliefOtherRef.current) {
                              const container = scrollContainerRef.current;
                              const element = interestReliefOtherRef.current;
                              const elementRect = element.getBoundingClientRect();
                              const containerRect = container.getBoundingClientRect();
                              const scrollTop = container.scrollTop;
                              const elementTop = elementRect.top - containerRect.top + scrollTop;
                              const targetScroll = elementTop - 80;
                              
                              container.scrollTo({
                                top: targetScroll,
                                behavior: 'smooth'
                              });
                            }
                          }, 150);
                        }}
                        placeholder="Please specify"
                        inputMode="none"
                        className="w-full px-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                      />
                    </div>
                  )}

                  {/* Show tax year fields when ANY checkbox is selected */}
                  {(interestReliefTypes.arrearsInterest || interestReliefTypes.instalmentInterest || interestReliefTypes.other) && (
                    <div className="mt-4">
                      <p className="text-[13px] font-semibold text-black mb-3">Tax Year(s) and Interest Amount(s)</p>
                            {interestReliefTaxYears.map((taxYearItem, index) => (
                              <div key={index} className="mb-4">
                                <div className="grid grid-cols-2 gap-3">
                                  <div>
                                    <label className="block text-[13px] font-semibold text-black mb-2">Tax Year</label>
                                    <input
                                      ref={(el) => { interestReliefTaxYearRefs.current[index] = el; }}
                                      type="text"
                                      value={taxYearItem.year}
                                      onChange={(e) => {
                                        const newTaxYears = [...interestReliefTaxYears];
                                        newTaxYears[index].year = e.target.value;
                                        setInterestReliefTaxYears(newTaxYears);
                                      }}
                                      onFocus={() => {
                                        setActiveField(`interestReliefTaxYear-${index}`);
                                        setShowKeyboard(true);
                                        setTimeout(() => {
                                          if (scrollContainerRef.current && interestReliefTaxYearRefs.current[index]) {
                                            const container = scrollContainerRef.current;
                                            const element = interestReliefTaxYearRefs.current[index];
                                            const elementRect = element.getBoundingClientRect();
                                            const containerRect = container.getBoundingClientRect();
                                            const scrollTop = container.scrollTop;
                                            const elementTop = elementRect.top - containerRect.top + scrollTop;
                                            const targetScroll = elementTop - 80;
                                            
                                            container.scrollTo({
                                              top: targetScroll,
                                              behavior: 'smooth'
                                            });
                                          }
                                        }, 150);
                                      }}
                                      placeholder="YYYY"
                                      inputMode="none"
                                      maxLength={4}
                                      className="w-full px-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-[13px] font-semibold text-black mb-2">Interest Amount</label>
                                    <div className="relative">
                                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[17px] text-[#3C3C43]">$</span>
                                      <input
                                        ref={(el) => { interestReliefAmountRefs.current[index] = el; }}
                                        type="text"
                                        value={taxYearItem.interestAmount}
                                        onChange={(e) => {
                                          const newTaxYears = [...interestReliefTaxYears];
                                          newTaxYears[index].interestAmount = e.target.value;
                                          setInterestReliefTaxYears(newTaxYears);
                                        }}
                                        onFocus={() => {
                                          setActiveField(`interestReliefAmount-${index}`);
                                          setShowKeyboard(true);
                                          setTimeout(() => {
                                            if (scrollContainerRef.current && interestReliefAmountRefs.current[index]) {
                                              const container = scrollContainerRef.current;
                                              const element = interestReliefAmountRefs.current[index];
                                              const elementRect = element.getBoundingClientRect();
                                              const containerRect = container.getBoundingClientRect();
                                              const scrollTop = container.scrollTop;
                                              const elementTop = elementRect.top - containerRect.top + scrollTop;
                                              const targetScroll = elementTop - 80;
                                              
                                              container.scrollTo({
                                                top: targetScroll,
                                                behavior: 'smooth'
                                              });
                                            }
                                          }, 150);
                                        }}
                                        placeholder="0.00"
                                        inputMode="none"
                                        className="w-full pl-8 pr-3 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                                      />
                                    </div>
                                  </div>
                                </div>
                                {interestReliefTaxYears.length > 1 && (
                                  <button
                                    onClick={() => {
                                      const newTaxYears = interestReliefTaxYears.filter((_, i) => i !== index);
                                      setInterestReliefTaxYears(newTaxYears);
                                    }}
                                    className="mt-2 text-[#ff3b30] text-[15px] underline bg-transparent border-0 p-0 cursor-pointer hover:opacity-70"
                                  >
                                    Remove this tax year
                                  </button>
                                )}
                              </div>
                            ))}
                      <button
                        onClick={() => setInterestReliefTaxYears([...interestReliefTaxYears, { year: '', interestAmount: '' }])}
                        className="w-full px-4 py-3 bg-white border-2 border-[#007AFF] text-[#007AFF] rounded-[10px] text-[17px] font-semibold hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors"
                      >
                        + Add Additional Tax Year
                      </button>
                    </div>
                  )}
                </div>
              </div>
              )}

              {/* Other Account Type Question - Separate block shown when penalties OR interest is selected */}
              {(reliefType.includes('penalties') || reliefType.includes('interest')) && (
              <div className="card-ios overflow-hidden mb-6">
                <div className="px-4 py-4">
                  <p className="text-[15px] text-black mb-4">
                    Were you charged the penalty and/or interest on another type of account? For example, trust (T3), non-resident (NR).
                  </p>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="chargedOnOtherAccount"
                        checked={chargedOnOtherAccount === 'yes'}
                        onChange={() => setChargedOnOtherAccount('yes')}
                        className="w-5 h-5 text-[#007AFF] border-gray-300 focus:ring-[#007AFF]"
                      />
                      <span className="text-[15px] text-black">Yes</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="chargedOnOtherAccount"
                        checked={chargedOnOtherAccount === 'no'}
                        onChange={() => setChargedOnOtherAccount('no')}
                        className="w-5 h-5 text-[#007AFF] border-gray-300 focus:ring-[#007AFF]"
                      />
                      <span className="text-[15px] text-black">No</span>
                    </label>
                  </div>
                </div>
              </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={handlePrevious}
                  className="flex-1 bg-[#E5E5EA] text-[#007AFF] py-[14px] px-4 rounded-[10px] text-[17px] font-semibold border-0 cursor-pointer active:opacity-70 transition-opacity"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!isStep2Valid}
                  className="flex-1 bg-[#007AFF] text-white py-[14px] px-4 rounded-[10px] text-[17px] font-semibold border-0 cursor-pointer active:opacity-70 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Reason for Request */}
          {step === 3 && (
            <div>
              <div className="card-ios overflow-hidden mb-6">
                <div className="px-4 py-4 border-b border-[#E5E5EA]">
                  <h2 className="text-[17px] font-semibold text-black">Reason for Your Request</h2>
                </div>
                <div className="px-4 py-4">
                  <p className="text-[15px] text-text-gray-ios mb-4">
                    Select the primary reason for your relief request and provide detailed information.
                  </p>

                  <div className="space-y-4">
                    {reasonCategory.length === 0 && (
                      <div>
                        <label className="block text-[13px] font-semibold text-black mb-2">Primary Reason Category</label>
                        <button
                          onClick={() => setShowReasonPicker(true)}
                          className="w-full px-4 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-left focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent flex items-center justify-between"
                        >
                          <span className="text-[#3C3C43]">Select reasons</span>
                          <ChevronDown className="w-5 h-5 text-[#3C3C43]" />
                        </button>
                      </div>
                    )}

                    {/* Other Reason Text Input */}
                    {reasonCategory.includes('other') && (
                      <div>
                        <label className="block text-[13px] font-semibold text-black mb-2">Specify Other Reason</label>
                        <input
                          type="text"
                          value={otherReasonText}
                          onChange={(e) => setOtherReasonText(e.target.value)}
                          placeholder="Enter your reason"
                          className="w-full px-4 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                        />
                      </div>
                    )}

                    {/* Render supporting documents in the order of selected reasons */}
                    {reasonCategory.map(reason => (
                      <SupportingDocsForReason
                        key={reason}
                        reasonValue={reason}
                        reasonLabel={reasonOptions.find(opt => opt.value === reason)?.label || ''}
                        supportingDocs={supportingDocs}
                        naturalDisasterDocs={naturalDisasterDocs}
                        deathIllnessDocs={deathIllnessDocs}
                        craErrorDocs={craErrorDocs}
                        handleSupportingDocChange={handleSupportingDocChange}
                        handleNaturalDisasterDocChange={handleNaturalDisasterDocChange}
                        handleDeathIllnessDocChange={handleDeathIllnessDocChange}
                        handleCraErrorDocChange={handleCraErrorDocChange}
                        otherDocType={otherDocType}
                        setOtherDocType={setOtherDocType}
                        naturalDisasterOtherDocType={naturalDisasterOtherDocType}
                        setNaturalDisasterOtherDocType={setNaturalDisasterOtherDocType}
                        deathIllnessOtherDocType={deathIllnessOtherDocType}
                        setDeathIllnessOtherDocType={setDeathIllnessOtherDocType}
                        craErrorOtherDocType={craErrorOtherDocType}
                        setCraErrorOtherDocType={setCraErrorOtherDocType}
                        otherDocTypeRef={otherDocTypeRef}
                        naturalDisasterOtherDocTypeRef={naturalDisasterOtherDocTypeRef}
                        deathIllnessOtherDocTypeRef={deathIllnessOtherDocTypeRef}
                        craErrorOtherDocTypeRef={craErrorOtherDocTypeRef}
                        scrollContainerRef={scrollContainerRef}
                        setActiveField={setActiveField}
                        setShowKeyboard={setShowKeyboard}
                        setShowTextKeyboard={setShowTextKeyboard}
                        onOpenFilePicker={handleOpenFilePicker}
                        selectedFiles={selectedFiles}
                        onRemoveFile={handleRemoveFile}
                      />
                    ))}

                    {/* Keep the old sections temporarily as backup */}
                    {false && (reasonCategory.includes('financial-hardship-individual') || reasonCategory.includes('financial-hardship-business')) && (
                      <div className="bg-white border border-[#C6C6C8] rounded-[10px] overflow-hidden">
                        <div className="px-4 py-3 border-b border-[#E5E5EA]">
                          <h3 className="text-[15px] font-semibold text-black">Supporting documents</h3>
                        </div>
                        <div className="px-4 py-3">
                          <p className="text-[13px] font-semibold text-black mb-3">It is strongly recommended that you include:</p>
                          
                          <label className="flex items-start gap-3 mb-3 cursor-pointer active:opacity-70">
                            <input
                              type="checkbox"
                              checked={supportingDocs.rc376Form}
                              onChange={() => handleSupportingDocChange('rc376Form')}
                              className="mt-1 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
                            />
                            <div className="flex-1">
                              <span className="text-[15px] text-black leading-snug">
                                Form RC376, Taxpayer Relief Request – Statement of Income and Expenses and Assets and Liabilities for Individuals{' '}
                                <span className="text-[#007AFF]">(canada.ca/cra-rc376)</span>
                              </span>
                            </div>
                          </label>

                          <label className="flex items-start gap-3 mb-4 cursor-pointer active:opacity-70">
                            <input
                              type="checkbox"
                              checked={supportingDocs.bankStatements}
                              onChange={() => handleSupportingDocChange('bankStatements')}
                              className="mt-1 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
                            />
                            <span className="text-[15px] text-black leading-snug">
                              Bank and credit card statements for the last 3 months
                            </span>
                          </label>

                          <p className="text-[13px] font-semibold text-black mb-3">Other documents you can include:</p>

                          <label className="flex items-start gap-3 mb-3 cursor-pointer active:opacity-70">
                            <input
                              type="checkbox"
                              checked={supportingDocs.mortgageRental}
                              onChange={() => handleSupportingDocChange('mortgageRental')}
                              className="mt-1 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
                            />
                            <span className="text-[15px] text-black leading-snug">
                              Current mortgage statements or rental agreements
                            </span>
                          </label>

                          <label className="flex items-start gap-3 mb-3 cursor-pointer active:opacity-70">
                            <input
                              type="checkbox"
                              checked={supportingDocs.loansAndBills}
                              onChange={() => handleSupportingDocChange('loansAndBills')}
                              className="mt-1 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
                            />
                            <span className="text-[15px] text-black leading-snug">
                              Loans and monthly bills
                            </span>
                          </label>

                          <label className="flex items-start gap-3 mb-4 cursor-pointer active:opacity-70">
                            <input
                              type="checkbox"
                              checked={supportingDocs.other}
                              onChange={() => handleSupportingDocChange('other')}
                              className="mt-1 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
                            />
                            <span className="text-[15px] text-black leading-snug">
                              Other:
                            </span>
                          </label>

                          {supportingDocs.other && (
                            <div className="ml-8 mb-4">
                              <input
                                ref={otherDocTypeRef}
                                type="text"
                                value={otherDocType}
                                onChange={(e) => setOtherDocType(e.target.value)}
                                onClick={() => {
                                  console.log('Clicked otherDocType field');
                                  setActiveField('otherDocType');
                                  setShowKeyboard(true);
                                }}
                                onFocus={() => {
                                  console.log('Focused otherDocType field');
                                  setActiveField('otherDocType');
                                  setShowKeyboard(true);
                                  setTimeout(() => {
                                    if (scrollContainerRef.current && otherDocTypeRef.current) {
                                      const container = scrollContainerRef.current;
                                      const element = otherDocTypeRef.current;
                                      const elementRect = element.getBoundingClientRect();
                                      const containerRect = container.getBoundingClientRect();
                                      const scrollTop = container.scrollTop;
                                      const elementTop = elementRect.top - containerRect.top + scrollTop;
                                      const targetScroll = elementTop - 80;
                                      
                                      container.scrollTo({
                                        top: targetScroll,
                                        behavior: 'smooth'
                                      });
                                    }
                                  }, 150);
                                }}
                                placeholder="Specify document type"
                                inputMode="none"
                                className="w-full px-4 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                              />
                            </div>
                          )}

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
                    )}

                    {/* Supporting Documents Accordion for Natural Disaster */}
                    {false && reasonCategory.includes('natural-disaster') && (
                      <div className="bg-white border border-[#C6C6C8] rounded-[10px] overflow-hidden">
                        <div className="px-4 py-3 border-b border-[#E5E5EA]">
                          <h3 className="text-[15px] font-semibold text-black">Supporting documents</h3>
                        </div>
                        <div className="px-4 py-3">
                          <label className="flex items-start gap-3 mb-3 cursor-pointer active:opacity-70">
                            <input
                              type="checkbox"
                              checked={naturalDisasterDocs.fireReport}
                              onChange={() => handleNaturalDisasterDocChange('fireReport')}
                              className="mt-1 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
                            />
                            <span className="text-[15px] text-black leading-snug">
                              Fire report
                            </span>
                          </label>

                          <label className="flex items-start gap-3 mb-3 cursor-pointer active:opacity-70">
                            <input
                              type="checkbox"
                              checked={naturalDisasterDocs.insuranceReport}
                              onChange={() => handleNaturalDisasterDocChange('insuranceReport')}
                              className="mt-1 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
                            />
                            <span className="text-[15px] text-black leading-snug">
                              Insurance report
                            </span>
                          </label>

                          <label className="flex items-start gap-3 mb-3 cursor-pointer active:opacity-70">
                            <input
                              type="checkbox"
                              checked={naturalDisasterDocs.newsArticle}
                              onChange={() => handleNaturalDisasterDocChange('newsArticle')}
                              className="mt-1 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
                            />
                            <span className="text-[15px] text-black leading-snug">
                              News article
                            </span>
                          </label>

                          <label className="flex items-start gap-3 mb-4 cursor-pointer active:opacity-70">
                            <input
                              type="checkbox"
                              checked={naturalDisasterDocs.other}
                              onChange={() => handleNaturalDisasterDocChange('other')}
                              className="mt-1 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
                            />
                            <span className="text-[15px] text-black leading-snug">
                              Other:
                            </span>
                          </label>

                          {naturalDisasterDocs.other && (
                            <div className="ml-8 mb-4">
                              <input
                                ref={naturalDisasterOtherDocTypeRef}
                                type="text"
                                value={naturalDisasterOtherDocType}
                                onChange={(e) => setNaturalDisasterOtherDocType(e.target.value)}
                                onClick={() => {
                                  console.log('Clicked naturalDisasterOtherDocType field');
                                  setActiveField('naturalDisasterOtherDocType');
                                  setShowKeyboard(true);
                                }}
                                onFocus={() => {
                                  console.log('Focused naturalDisasterOtherDocType field');
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
                                      const targetScroll = elementTop - 80;
                                      
                                      container.scrollTo({
                                        top: targetScroll,
                                        behavior: 'smooth'
                                      });
                                    }
                                  }, 150);
                                }}
                                placeholder="Specify document type"
                                inputMode="none"
                                className="w-full px-4 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                              />
                            </div>
                          )}

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
                    )}

                    {/* Supporting Documents Accordion for Civil Disturbance */}
                    {false && reasonCategory.includes('civil-disturbance') && (
                      <div className="bg-white border border-[#C6C6C8] rounded-[10px] overflow-hidden">
                        <div className="px-4 py-3 border-b border-[#E5E5EA]">
                          <h3 className="text-[15px] font-semibold text-black">Supporting documents</h3>
                        </div>
                        <div className="px-4 py-3">
                          <p className="text-[15px] text-black leading-snug">
                            Supporting documents are usually not required if the event is public knowledge in Canada. If the event occurred outside of Canada, it may be helpful to provide supporting documentation (for example, a news article).
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Supporting Documents Accordion for Death/Illness */}
                    {false && reasonCategory.includes('death-illness') && (
                      <div className="bg-white border border-[#C6C6C8] rounded-[10px] overflow-hidden">
                        <div className="px-4 py-3 border-b border-[#E5E5EA]">
                          <h3 className="text-[15px] font-semibold text-black">Supporting documents</h3>
                        </div>
                        <div className="px-4 py-3">
                          <label className="flex items-start gap-3 mb-3 cursor-pointer active:opacity-70">
                            <input
                              type="checkbox"
                              checked={deathIllnessDocs.deathCertificate}
                              onChange={() => handleDeathIllnessDocChange('deathCertificate')}
                              className="mt-1 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
                            />
                            <span className="text-[15px] text-black leading-snug">
                              Death certificate or obituary
                            </span>
                          </label>

                          <label className="flex items-start gap-3 mb-4 cursor-pointer active:opacity-70">
                            <input
                              type="checkbox"
                              checked={deathIllnessDocs.doctorCertificate}
                              onChange={() => handleDeathIllnessDocChange('doctorCertificate')}
                              className="mt-1 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
                            />
                            <span className="text-[15px] text-black leading-snug">
                              Doctor's certificate or letter with treatment length, any hospital dates, and how the medical condition impacted you
                            </span>
                          </label>

                          <label className="flex items-start gap-3 mb-4 cursor-pointer active:opacity-70">
                            <input
                              type="checkbox"
                              checked={deathIllnessDocs.other}
                              onChange={() => handleDeathIllnessDocChange('other')}
                              className="mt-1 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
                            />
                            <span className="text-[15px] text-black leading-snug">
                              Other:
                            </span>
                          </label>

                          {deathIllnessDocs.other && (
                            <div className="ml-8 mb-4">
                              <input
                                ref={deathIllnessOtherDocTypeRef}
                                type="text"
                                value={deathIllnessOtherDocType}
                                onChange={(e) => setDeathIllnessOtherDocType(e.target.value)}
                                onClick={() => {
                                  console.log('Clicked deathIllnessOtherDocType field');
                                  setActiveField('deathIllnessOtherDocType');
                                  setShowKeyboard(true);
                                }}
                                onFocus={() => {
                                  console.log('Focused deathIllnessOtherDocType field');
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
                                      const targetScroll = elementTop - 80;
                                      
                                      container.scrollTo({
                                        top: targetScroll,
                                        behavior: 'smooth'
                                      });
                                    }
                                  }, 150);
                                }}
                                placeholder="Specify document type"
                                inputMode="none"
                                className="w-full px-4 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                              />
                            </div>
                          )}

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
                    )}

                    {/* Supporting Documents Accordion for CRA Error */}
                    {false && reasonCategory.includes('cra-error') && (
                      <div className="bg-white border border-[#C6C6C8] rounded-[10px] overflow-hidden">
                        <div className="px-4 py-3 border-b border-[#E5E5EA]">
                          <h3 className="text-[15px] font-semibold text-black">Supporting documents</h3>
                        </div>
                        <div className="px-4 py-3">
                          <label className="flex items-start gap-3 mb-4 cursor-pointer active:opacity-70">
                            <input
                              type="checkbox"
                              checked={craErrorDocs.errorProof}
                              onChange={() => handleCraErrorDocChange('errorProof')}
                              className="mt-1 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
                            />
                            <span className="text-[15px] text-black leading-snug">
                              Document or screenshot that gives proof of the error
                            </span>
                          </label>

                          <label className="flex items-start gap-3 mb-4 cursor-pointer active:opacity-70">
                            <input
                              type="checkbox"
                              checked={craErrorDocs.other}
                              onChange={() => handleCraErrorDocChange('other')}
                              className="mt-1 w-5 h-5 flex-shrink-0 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF] cursor-pointer"
                            />
                            <span className="text-[15px] text-black leading-snug">
                              Other:
                            </span>
                          </label>

                          {craErrorDocs.other && (
                            <div className="ml-8 mb-4">
                              <input
                                ref={craErrorOtherDocTypeRef}
                                type="text"
                                value={craErrorOtherDocType}
                                onChange={(e) => setCraErrorOtherDocType(e.target.value)}
                                onClick={() => {
                                  console.log('Clicked craErrorOtherDocType field');
                                  setActiveField('craErrorOtherDocType');
                                  setShowKeyboard(true);
                                }}
                                onFocus={() => {
                                  console.log('Focused craErrorOtherDocType field');
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
                                      const targetScroll = elementTop - 80;
                                      
                                      container.scrollTo({
                                        top: targetScroll,
                                        behavior: 'smooth'
                                      });
                                    }
                                  }, 150);
                                }}
                                placeholder="Specify document type"
                                inputMode="none"
                                className="w-full px-4 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                              />
                            </div>
                          )}

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
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handlePrevious}
                  className="flex-1 bg-[#E5E5EA] text-[#007AFF] py-[14px] px-4 rounded-[10px] text-[17px] font-semibold border-0 cursor-pointer active:opacity-70 transition-opacity"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!isStep3Valid}
                  className="flex-1 bg-[#007AFF] text-white py-[14px] px-4 rounded-[10px] text-[17px] font-semibold border-0 cursor-pointer active:opacity-70 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Previous Decision */}
          {step === 4 && (
            <div>
              <div className="card-ios overflow-hidden mb-6">
                <div className="px-4 py-4 border-b border-[#E5E5EA]">
                  <h2 className="text-[17px] font-semibold text-black">Previous decision</h2>
                </div>
                <div className="px-4 py-4">
                  <p className="text-[15px] text-black mb-4">
                    Is this a request to reconsider a previous taxpayer relief decision that you received?
                  </p>

                  <div className="flex items-center gap-6 mb-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="isReconsideration"
                        checked={isReconsideration === 'yes'}
                        onChange={() => setIsReconsideration('yes')}
                        className="w-5 h-5 text-[#007AFF] border-gray-300 focus:ring-[#007AFF]"
                      />
                      <span className="text-[15px] text-black">Yes</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="isReconsideration"
                        checked={isReconsideration === 'no'}
                        onChange={() => setIsReconsideration('no')}
                        className="w-5 h-5 text-[#007AFF] border-gray-300 focus:ring-[#007AFF]"
                      />
                      <span className="text-[15px] text-black">No</span>
                    </label>
                  </div>

                  {isReconsideration === 'yes' && (
                    <div className="space-y-4 pt-4 border-t border-[#E5E5EA]">
                      <div>
                        <label className="block text-[15px] text-black mb-2">
                          Provide the case number from the decision letter, if known.
                        </label>
                        <div className="flex items-center gap-2">
                          <span className="text-[17px] text-black font-medium">GB</span>
                          <input
                            ref={previousCaseNumberRef}
                            type="text"
                            value={previousCaseNumber}
                            onChange={(e) => setPreviousCaseNumber(e.target.value)}
                            onFocus={() => {
                              setActiveField('previousCaseNumber');
                              setShowKeyboard(true);
                              setTimeout(() => {
                                if (scrollContainerRef.current && previousCaseNumberRef.current) {
                                  const container = scrollContainerRef.current;
                                  const element = previousCaseNumberRef.current;
                                  const elementRect = element.getBoundingClientRect();
                                  const containerRect = container.getBoundingClientRect();
                                  const scrollTop = container.scrollTop;
                                  const elementTop = elementRect.top - containerRect.top + scrollTop;
                                  const targetScroll = elementTop - 80;
                                  
                                  container.scrollTo({
                                    top: targetScroll,
                                    behavior: 'smooth'
                                  });
                                }
                              }, 150);
                            }}
                            placeholder="Enter case number"
                            inputMode="none"
                            className="flex-1 px-4 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[15px] text-black mb-2">
                          Explain why you disagree with the previous decision, including any new information that was not previously considered.
                        </label>
                        <textarea
                          ref={reconsiderationReasonRef}
                          value={reconsiderationReason}
                          onChange={(e) => setReconsiderationReason(e.target.value)}
                          onFocus={() => {
                            setActiveField('reconsiderationReason');
                            setShowKeyboard(true);
                            setTimeout(() => {
                              if (scrollContainerRef.current && reconsiderationReasonRef.current) {
                                const container = scrollContainerRef.current;
                                const element = reconsiderationReasonRef.current;
                                const elementRect = element.getBoundingClientRect();
                                const containerRect = container.getBoundingClientRect();
                                const scrollTop = container.scrollTop;
                                const elementTop = elementRect.top - containerRect.top + scrollTop;
                                const targetScroll = elementTop - 80;
                                
                                container.scrollTo({
                                  top: targetScroll,
                                  behavior: 'smooth'
                                });
                              }
                            }, 150);
                          }}
                          placeholder="Provide a detailed explanation..."
                          rows={8}
                          inputMode="none"
                          className="w-full px-4 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent resize-none"
                        />
                        <p className="text-[13px] text-[#3C3C43] mt-1">
                          {reconsiderationReason.length} characters
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handlePrevious}
                  className="flex-1 bg-[#E5E5EA] text-[#007AFF] py-[14px] px-4 rounded-[10px] text-[17px] font-semibold border-0 cursor-pointer active:opacity-70 transition-opacity"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!isStep4Valid}
                  className="flex-1 bg-[#007AFF] text-white py-[14px] px-4 rounded-[10px] text-[17px] font-semibold border-0 cursor-pointer active:opacity-70 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Supporting Details */}
          {step === 5 && (
            <div>
              <div className="card-ios overflow-hidden mb-6">
                <div className="px-4 py-4 border-b border-[#E5E5EA]">
                  <h2 className="text-[17px] font-semibold text-black">Supporting details</h2>
                </div>
                <div className="px-4 py-4">
                  <p className="text-[15px] text-text-gray-ios mb-4">
                    Provide any additional details about why you were unable to file your return on time or make your payment.
                  </p>

                  <textarea
                    ref={supportingDetailsRef}
                    value={supportingDetails}
                    onChange={(e) => setSupportingDetails(e.target.value)}
                    onClick={() => {
                      setActiveField('supportingDetails');
                      setShowKeyboard(true);
                      setTimeout(() => {
                        if (scrollContainerRef.current && supportingDetailsRef.current) {
                          const container = scrollContainerRef.current;
                          const element = supportingDetailsRef.current;
                          const elementRect = element.getBoundingClientRect();
                          const containerRect = container.getBoundingClientRect();
                          const scrollTop = container.scrollTop;
                          const elementTop = elementRect.top - containerRect.top + scrollTop;
                          const targetScroll = elementTop - 80;
                          
                          container.scrollTo({
                            top: targetScroll,
                            behavior: 'smooth'
                          });
                        }
                      }, 150);
                    }}
                    onFocus={() => {
                      setActiveField('supportingDetails');
                      setShowKeyboard(true);
                    }}
                    placeholder="Enter additional details here..."
                    inputMode="none"
                    className="w-full min-h-[200px] max-h-[400px] px-4 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent resize-none overflow-y-auto"
                  />
                </div>
              </div>

              <div className="card-ios overflow-hidden mb-6">
                <div className="px-4 py-4 border-b border-[#E5E5EA]">
                  <h2 className="text-[17px] font-semibold text-black">Key dates</h2>
                </div>
                <div className="px-4 py-4">
                  <p className="text-[15px] text-text-gray-ios mb-4">
                    Provide any key dates that show why you were unable to meet your tax obligations (for example, a fire on April 29 destroyed your books and records causing you to miss the filing deadline on April 30).
                  </p>

                  <textarea
                    ref={keyDatesRef}
                    value={keyDates}
                    onChange={(e) => setKeyDates(e.target.value)}
                    onClick={() => {
                      setActiveField('keyDates');
                      setShowKeyboard(true);
                      setTimeout(() => {
                        if (scrollContainerRef.current && keyDatesRef.current) {
                          const container = scrollContainerRef.current;
                          const element = keyDatesRef.current;
                          const elementRect = element.getBoundingClientRect();
                          const containerRect = container.getBoundingClientRect();
                          const scrollTop = container.scrollTop;
                          const elementTop = elementRect.top - containerRect.top + scrollTop;
                          const targetScroll = elementTop - 80;
                          
                          container.scrollTo({
                            top: targetScroll,
                            behavior: 'smooth'
                          });
                        }
                      }, 150);
                    }}
                    onFocus={() => {
                      setActiveField('keyDates');
                      setShowKeyboard(true);
                    }}
                    placeholder="Enter key dates here..."
                    inputMode="none"
                    className="w-full min-h-[200px] max-h-[400px] px-4 py-3 bg-white border border-[#C6C6C8] rounded-[10px] text-[17px] text-black placeholder:text-[#3C3C43] focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent resize-none overflow-y-auto"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handlePrevious}
                  className="flex-1 bg-[#E5E5EA] text-[#007AFF] py-[14px] px-4 rounded-[10px] text-[17px] font-semibold border-0 cursor-pointer active:opacity-70 transition-opacity"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!isStep5Valid}
                  className="flex-1 bg-[#007AFF] text-white py-[14px] px-4 rounded-[10px] text-[17px] font-semibold border-0 cursor-pointer active:opacity-70 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 6: Review and Submit */}
          {step === 6 && (
            <div>
              <div className="card-ios overflow-hidden mb-6">
                <div className="px-4 py-4 border-b border-[#E5E5EA]">
                  <h2 className="text-[17px] font-semibold text-black">Review Your Request</h2>
                </div>
                <div className="px-4 py-4">
                  <p className="text-[15px] text-text-gray-ios mb-4">
                    Please review your information before submitting. You can go back to make changes if needed.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-[13px] font-semibold text-black mb-2">Type of Relief</h3>
                      <div className="flex flex-wrap gap-2">
                        {reliefType.map((type) => (
                          <span key={type} className="px-3 py-1 bg-[#E5F0FF] text-[#007AFF] rounded-full text-[13px] font-semibold">
                            {type === 'penalties' ? 'Cancel penalties' : type === 'interest' ? 'Cancel interest' : 'Accept late payment'}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-[#E5E5EA] pt-4">
                      <h3 className="text-[13px] font-semibold text-black mb-2">Tax Year Information</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-[15px] text-text-gray-ios">Account Type</span>
                          <span className="text-[15px] text-black">{accountType || 'N/A'}</span>
                        </div>
                        {reliefType.includes('penalties') && taxYears.length > 0 && (
                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="text-[15px] text-text-gray-ios font-semibold">Tax Years & Penalties</span>
                            </div>
                            {taxYears.map((ty, index) => (
                              <div key={index} className="flex justify-between mb-1 ml-4">
                                <span className="text-[15px] text-text-gray-ios">{ty.year}</span>
                                <span className="text-[15px] text-black">${ty.penaltyAmount}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {reliefType.includes('interest') && interestReliefTaxYears.length > 0 && interestReliefTaxYears.some(ty => ty.year || ty.interestAmount) && (
                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="text-[15px] text-text-gray-ios font-semibold">Tax Years & Interest</span>
                            </div>
                            {interestReliefTaxYears.filter(ty => ty.year || ty.interestAmount).map((ty, index) => (
                              <div key={index} className="flex justify-between mb-1 ml-4">
                                <span className="text-[15px] text-text-gray-ios">{ty.year || 'N/A'}</span>
                                <span className="text-[15px] text-black">${ty.interestAmount || '0'}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="border-t border-[#E5E5EA] pt-4">
                      <h3 className="text-[13px] font-semibold text-black mb-2">Reason Categories</h3>
                      <div className="flex flex-wrap gap-2">
                        {reasonCategory.map((reason) => {
                          const reasonOption = reasonOptions.find(opt => opt.value === reason);
                          return (
                            <span key={reason} className="px-3 py-1 bg-[#E5F0FF] text-[#007AFF] rounded-full text-[13px] font-semibold">
                              {reasonOption?.label || reason}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Supporting Documents Section */}
                    <div className="border-t border-[#E5E5EA] pt-4">
                      <h3 className="text-[13px] font-semibold text-black mb-2">Supporting Documents</h3>
                      {(() => {
                        // Group documents by category
                        const categoryMap: { [key: string]: { title: string, docs: string[] } } = {
                          'natural': { title: 'Natural or human-made disaster', docs: [] },
                          'financial': { title: 'Financial hardship', docs: [] },
                          'death': { title: 'Death, accident, serious illness, emotional or mental distress', docs: [] },
                          'cra': { title: 'CRA error or delay', docs: [] }
                        };
                        
                        // Natural disaster documents
                        if (naturalDisasterDocs.fireReport) categoryMap.natural.docs.push('Fire department report');
                        if (naturalDisasterDocs.insuranceReport) categoryMap.natural.docs.push('Insurance report');
                        if (naturalDisasterDocs.newsArticle) categoryMap.natural.docs.push('News article');
                        if (naturalDisasterDocs.other && naturalDisasterOtherDocType) categoryMap.natural.docs.push(naturalDisasterOtherDocType);
                        
                        // Financial hardship documents
                        if (supportingDocs.rc376Form) categoryMap.financial.docs.push('Form RC376');
                        if (supportingDocs.bankStatements) categoryMap.financial.docs.push('Bank and credit card statements');
                        if (supportingDocs.mortgageRental) categoryMap.financial.docs.push('Mortgage or rental receipts');
                        if (supportingDocs.loansAndBills) categoryMap.financial.docs.push('Loans, bills, or collection notices');
                        if (supportingDocs.other && otherDocType) categoryMap.financial.docs.push(otherDocType);
                        
                        // Death/Illness documents
                        if (deathIllnessDocs.deathCertificate) categoryMap.death.docs.push('Death certificate');
                        if (deathIllnessDocs.doctorCertificate) categoryMap.death.docs.push('Doctor/Medical certificate');
                        if (deathIllnessDocs.other && deathIllnessOtherDocType) categoryMap.death.docs.push(deathIllnessOtherDocType);
                        
                        // CRA Error documents
                        if (craErrorDocs.errorProof) categoryMap.cra.docs.push('Proof of CRA error');
                        if (craErrorDocs.other && craErrorOtherDocType) categoryMap.cra.docs.push(craErrorOtherDocType);
                        
                        // Filter out empty categories
                        const categoriesWithDocs = Object.values(categoryMap).filter(cat => cat.docs.length > 0);
                        
                        return categoriesWithDocs.length > 0 ? (
                          <div className="space-y-4">
                            {categoriesWithDocs.map((category, catIndex) => (
                              <div key={catIndex}>
                                <h4 className="text-[15px] font-semibold text-black mb-2">{category.title}</h4>
                                <div className="space-y-1">
                                  {category.docs.map((doc, docIndex) => (
                                    <div key={docIndex} className="flex items-start gap-2 ml-4">
                                      <FileText className="h-4 w-4 text-[#ff3b30] flex-shrink-0 mt-[3px]" />
                                      <p className="text-[15px] text-black m-0">{doc}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-[15px] text-text-gray-ios">No documents attached</p>
                        );
                      })()}
                    </div>

                    <div className="border-t border-[#E5E5EA] pt-4">
                      <h3 className="text-[13px] font-semibold text-black mb-2">Supporting details</h3>
                      <p className="text-[15px] text-black whitespace-pre-wrap">{supportingDetails || 'No additional details provided'}</p>
                    </div>

                    <div className="border-t border-[#E5E5EA] pt-4">
                      <h3 className="text-[13px] font-semibold text-black mb-2">Key dates</h3>
                      {keyDates ? (
                        <p className="text-[15px] text-black whitespace-pre-wrap">{keyDates}</p>
                      ) : (
                        <p className="text-[15px] text-black">No key dates provided</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-ios overflow-hidden mb-6">
                <div className="px-4 py-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreeToTerms}
                      onChange={(e) => setAgreeToTerms(e.target.checked)}
                      className="mt-1 w-5 h-5 text-[#007AFF] rounded border-gray-300 focus:ring-[#007AFF]"
                    />
                    <div className="flex-1">
                      <p className="text-[15px] text-black">
                        I certify that the information I have provided is true, complete, and correct to the best of my knowledge. I understand that the CRA may request additional information or documentation to support my request.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handlePrevious}
                  className="flex-1 bg-[#E5E5EA] text-[#007AFF] py-[14px] px-4 rounded-[10px] text-[17px] font-semibold border-0 cursor-pointer active:opacity-70 transition-opacity"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!isStep6Valid}
                  className="flex-1 bg-[#007AFF] text-white py-[14px] px-4 rounded-[10px] text-[17px] font-semibold border-0 cursor-pointer active:opacity-70 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Submit form
                </button>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* iOS Numeric Keyboard */}
      <AnimatePresence>
        {showKeyboard && 
         activeField !== 'previousCaseNumber' && 
         activeField !== 'reconsiderationReason' && 
         activeField !== 'supportingDetails' && 
         activeField !== 'keyDates' && 
         activeField !== 'interestReliefOther' && 
         activeField !== 'otherDocType' && 
         activeField !== 'deathIllnessOtherDocType' && 
         activeField !== 'craErrorOtherDocType' && 
         activeField !== 'naturalDisasterOtherDocType' && (
          <IPhoneNumericKeyboard key="keyboard" onKeyPress={handleKeyPress} onDone={handleKeyboardDone} />
        )}
      </AnimatePresence>

      {/* iOS Text Keyboard */}
      <AnimatePresence>
        {showTextKeyboard && activeField === 'reasonDetails' && (
          <IPhoneTextKeyboard 
            key="textKeyboard" 
            value={reasonDetails}
            onChange={setReasonDetails}
            onClose={handleTextKeyboardDone}
            multiline={true}
          />
        )}
        {showTextKeyboard && activeField === 'circumstances' && (
          <IPhoneTextKeyboard 
            key="textKeyboard" 
            value={circumstancesDetails}
            onChange={setCircumstancesDetails}
            onClose={handleTextKeyboardDone}
            multiline={true}
          />
        )}
        {showTextKeyboard && activeField === 'prevention' && (
          <IPhoneTextKeyboard 
            key="textKeyboard" 
            value={preventionSteps}
            onChange={setPreventionSteps}
            onClose={handleTextKeyboardDone}
            multiline={true}
          />
        )}
        {showTextKeyboard && activeField === 'otherAccountDetails' && (
          <IPhoneTextKeyboard 
            key="textKeyboard" 
            value={otherAccountDetails}
            onChange={setOtherAccountDetails}
            onClose={handleTextKeyboardDone}
            multiline={true}
          />
        )}
        {showTextKeyboard && activeField === 'businessOther-part2' && (
          <IPhoneTextKeyboard 
            key="textKeyboard" 
            value={businessNumbers.other.part2}
            onChange={(value) => {
              const upperValue = value.toUpperCase().slice(0, 2);
              setBusinessNumbers({ 
                ...businessNumbers, 
                other: { ...businessNumbers.other, part2: upperValue }
              });
            }}
            onClose={handleTextKeyboardDone}
            multiline={false}
          />
        )}
        {showTextKeyboard && activeField === 'representativeName' && (
          <IPhoneTextKeyboard 
            key="textKeyboard" 
            value={representativeName}
            onChange={setRepresentativeName}
            onClose={handleTextKeyboardDone}
            multiline={false}
          />
        )}
        {showTextKeyboard && activeField === 'representativeId' && (
          <IPhoneTextKeyboard 
            key="textKeyboard" 
            value={representativeId}
            onChange={setRepresentativeId}
            onClose={handleTextKeyboardDone}
            multiline={false}
          />
        )}
        {showTextKeyboard && activeField === 'representativeFirm' && (
          <IPhoneTextKeyboard 
            key="textKeyboard" 
            value={representativeFirm}
            onChange={setRepresentativeFirm}
            onClose={handleTextKeyboardDone}
            multiline={false}
          />
        )}
        {showTextKeyboard && activeField === 'representativeAddress' && (
          <IPhoneTextKeyboard 
            key="textKeyboard" 
            value={representativeAddress}
            onChange={setRepresentativeAddress}
            onClose={handleTextKeyboardDone}
            multiline={false}
          />
        )}
        {showTextKeyboard && activeField === 'representativeCity' && (
          <IPhoneTextKeyboard 
            key="textKeyboard" 
            value={representativeCity}
            onChange={setRepresentativeCity}
            onClose={handleTextKeyboardDone}
            multiline={false}
          />
        )}
        {showTextKeyboard && activeField === 'representativeProvince' && (
          <IPhoneTextKeyboard 
            key="textKeyboard" 
            value={representativeProvince}
            onChange={setRepresentativeProvince}
            onClose={handleTextKeyboardDone}
            multiline={false}
          />
        )}
        {showTextKeyboard && activeField === 'representativePostalCode' && (
          <IPhoneTextKeyboard 
            key="textKeyboard" 
            value={representativePostalCode}
            onChange={(value) => setRepresentativePostalCode(value.toUpperCase())}
            onClose={handleTextKeyboardDone}
            multiline={false}
          />
        )}
        {showTextKeyboard && activeField === 'representativeCountry' && (
          <IPhoneTextKeyboard 
            key="textKeyboard" 
            value={representativeCountry}
            onChange={setRepresentativeCountry}
            onClose={handleTextKeyboardDone}
            multiline={false}
          />
        )}
      </AnimatePresence>

      {/* iOS Full Keyboard */}
      <AnimatePresence>
        {showKeyboard && (activeField === 'previousCaseNumber' || activeField === 'reconsiderationReason' || activeField === 'supportingDetails' || activeField === 'keyDates') && (
          <IPhoneKeyboard 
            key={activeField}
            onKeyPress={handleKeyPress}
            onDone={handleKeyboardDone}
          />
        )}
        {showKeyboard && (
          activeField === 'interestReliefOther' || 
          activeField === 'otherDocType' || 
          activeField === 'deathIllnessOtherDocType' || 
          activeField === 'craErrorOtherDocType' || 
          activeField === 'naturalDisasterOtherDocType'
        ) && (
          <IPhoneKeyboard 
            key={activeField}
            onKeyPress={handleKeyPress}
            onDone={handleKeyboardDone}
          />
        )}
      </AnimatePresence>

      {/* iOS Picker for Account Type */}
      <IOSPicker
        isOpen={showAccountTypePicker}
        onClose={() => setShowAccountTypePicker(false)}
        options={accountTypeOptions}
        selectedValue={accountType}
        onSelect={(value) => setAccountType(value)}
        title="Select Account Type"
      />

      {/* iOS Multi-Picker for Reason Category */}
      <IOSMultiPicker
        isOpen={showReasonPicker}
        onClose={() => setShowReasonPicker(false)}
        options={reasonOptions}
        selectedValues={reasonCategory}
        onSelect={(values) => setReasonCategory(values)}
        title="Select Reasons"
      />

      {/* iOS File Picker */}
      <IOSFilePicker
        isOpen={showFilePicker}
        onClose={handleCloseFilePicker}
        onSelectFile={handleFileSelect}
        documentType={filePickerDocType}
      />
    </div>
  );
}