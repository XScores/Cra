import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner';
import { Mail, Gift, CreditCard } from 'lucide-react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';
import { Header } from './components/Header';
import { HomeScreenIPhone } from './components/screens/HomeScreenIPhone';
import { LaunchScreen } from './components/screens/LaunchScreen';
import { LoginScreen } from './components/screens/LoginScreen';
import { DashboardScreen } from './components/screens/DashboardScreen';
import { HomeWithPaymentConfirmationScreen } from './components/screens/HomeWithPaymentConfirmationScreen';
import { TaxReturnsScreen } from './components/screens/TaxReturnsScreen';
import { TaxFilingScreen } from './components/screens/TaxFilingScreen';
import { TaxFilingChangesScreen } from './components/screens/TaxFilingChangesScreen';
import { PaymentsScreen } from './components/screens/PaymentsScreen';
import { OnlineBankingScreen } from './components/screens/OnlineBankingScreen';
import { DocumentsScreen } from './components/screens/DocumentsScreen';
import { MessagesScreen } from './components/screens/MessagesScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';
import { InstalmentPaymentsRemindersScreen } from './components/screens/InstalmentPaymentsRemindersScreen';
import { PaymentFrequencyScreen } from './components/screens/PaymentFrequencyScreen';
import { SimplifiedMakePaymentScreen } from './components/screens/SimplifiedMakePaymentScreen';
import { MorePaymentInfoScreen } from './components/screens/MorePaymentInfoScreen';
import { ConfirmPaymentScreen } from './components/screens/ConfirmPaymentScreen';
import { CreditCardConfirmPaymentScreen } from './components/screens/CreditCardConfirmPaymentScreen';
import { PaymentSuccessScreen } from './components/screens/PaymentSuccessScreen';
import { CreditCardPaymentSuccessScreen } from './components/screens/CreditCardPaymentSuccessScreen';
import { CRAMailScreen, MailMessage } from './components/screens/CRAMailScreen';
import { SentMessagesScreen } from './components/screens/SentMessagesScreen';
import { ArchiveScreen, ArchivedMessage } from './components/screens/ArchiveScreen';
import { RegisteredPlansScreen } from './components/screens/RegisteredPlansScreen';
import { LearnRegisteredPlansScreen } from './components/screens/LearnRegisteredPlansScreen';
import { RRSPCalculatorScreen } from './components/screens/RRSPCalculatorScreen';
import { FHSAEligibilityScreen } from './components/screens/FHSAEligibilityScreen';
import { TFSAContributionRulesScreen } from './components/screens/TFSAContributionRulesScreen';
import { RESPGrantProgramsScreen } from './components/screens/RESPGrantProgramsScreen';
import { EditNameScreen } from './components/screens/EditNameScreen';
import { EditEmailScreen } from './components/screens/EditEmailScreen';
import { EditPhoneScreen } from './components/screens/EditPhoneScreen';
import { EditAddressScreen } from './components/screens/EditAddressScreen';
import { EditDirectDepositScreen } from './components/screens/EditDirectDepositScreen';
import { ManageCardsScreen } from './components/screens/ManageCardsScreen';
import { TwoStepVerificationScreen } from './components/screens/TwoStepVerificationScreen';
import { ChangePasswordScreen } from './components/screens/ChangePasswordScreen';
import { LanguagePreferenceScreen } from './components/screens/LanguagePreferenceScreen';
import { PrivacyScreen } from './components/screens/PrivacyScreen';
import { TermsScreen } from './components/screens/TermsScreen';
import { HelpScreen } from './components/screens/HelpScreen';
import { AppVersionScreen } from './components/screens/AppVersionScreen';
import { SignInHelpScreen } from './components/screens/SignInHelpScreen';
import { CRAWebViewScreen } from './components/screens/CRAWebViewScreen';
import { BalanceOwingDetailsScreen } from './components/screens/BalanceOwingDetailsScreen';
import { RefundDetailsScreen } from './components/screens/RefundDetailsScreen';
import { GSTHSTCreditScreen } from './components/screens/GSTHSTCreditScreen';
import { AllBenefitsScreen } from './components/screens/AllBenefitsScreen';
import { FAQFileTaxesScreen } from './components/screens/FAQFileTaxesScreen';
import { FAQRefundScreen } from './components/screens/FAQRefundScreen';
import { FAQMakePaymentScreen } from './components/screens/FAQMakePaymentScreen';
import { FAQUpdateAddressScreen } from './components/screens/FAQUpdateAddressScreen';
import { FAQNoticeOfAssessmentScreen } from './components/screens/FAQNoticeOfAssessmentScreen';
import { LiveChatScreen } from './components/screens/LiveChatScreen';
import { IPhoneCallingScreen } from './components/screens/IPhoneCallingScreen';
import { TaxSlipsScreen } from './components/screens/TaxSlipsScreen';
import { HowToOpenFHSAScreen } from './components/screens/HowToOpenFHSAScreen';
import { FHSAQualifyingWithdrawalScreen } from './components/screens/FHSAQualifyingWithdrawalScreen';
import { FHSAvsHBPScreen } from './components/screens/FHSAvsHBPScreen';
import { ViewFHSAContributionRoomScreen } from './components/screens/ViewFHSAContributionRoomScreen';
import { ViewTFSAContributionRoomScreen } from './components/screens/ViewTFSAContributionRoomScreen';
import { CorrectTFSAOverContributionScreen } from './components/screens/CorrectTFSAOverContributionScreen';
import { TFSAInvestorsInfoScreen } from './components/screens/TFSAInvestorsInfoScreen';
import { RequestWaiveTFSATaxScreen } from './components/screens/RequestWaiveTFSATaxScreen';
import { HowToOpenRESPScreen } from './components/screens/HowToOpenRESPScreen';
import { RESPWithdrawalRulesScreen } from './components/screens/RESPWithdrawalRulesScreen';
import { ApplyCanadaLearningBondScreen } from './components/screens/ApplyCanadaLearningBondScreen';
import { ProvincialEducationSavingsScreen } from './components/screens/ProvincialEducationSavingsScreen';
import { ProofOfIncomeScreen } from './components/screens/ProofOfIncomeScreen';
import { RepresentativeScreenStepByStep } from './components/screens/RepresentativeScreenStepByStep';
import { BecomeRepresentativeScreen } from './components/screens/BecomeRepresentativeScreen';
import { ViewRepresentativeScreen } from './components/screens/ViewRepresentativeScreen';
import { HomeBuyersPlanScreen } from './components/screens/HomeBuyersPlanScreen';
import { LifelongLearningPlanScreen } from './components/screens/LifelongLearningPlanScreen';
import { UncashedChequesScreen } from './components/screens/UncashedChequesScreen';
import { RemittanceVoucherScreen } from './components/screens/RemittanceVoucherScreen';
import { CPPEIRulingScreen } from './components/screens/CPPEIRulingScreen';
import { CPPEIRulingFormStep1Screen } from './components/screens/CPPEIRulingFormStep1Screen';
import { CPPEIRulingFormStep2ScreenNew } from './components/screens/CPPEIRulingFormStep2ScreenNew';
import { CPPEIRulingFormStep2Screen } from './components/screens/CPPEIRulingFormStep2Screen';
import { CPPEIRulingFormStep3Screen } from './components/screens/CPPEIRulingFormStep3Screen';
import { CPPEIRulingFormStep4Screen } from './components/screens/CPPEIRulingFormStep4Screen';
import { CPPEIRulingConfirmationScreen } from './components/screens/CPPEIRulingConfirmationScreen';
import { AuditEnquiriesScreen } from './components/screens/AuditEnquiriesScreen';
import { AuditEnquiriesConfirmationScreen } from './components/screens/AuditEnquiriesConfirmationScreen';
import { RegisterFormalDisputeScreen } from './components/screens/RegisterFormalDisputeScreen';
import { RegisterFormalDisputeConfirmationScreen } from './components/screens/RegisterFormalDisputeConfirmationScreen';
import { NonResidentAccountScreen } from './components/screens/NonResidentAccountScreen';
import { ResidencyDeterminationScreen } from './components/screens/ResidencyDeterminationScreen';
import { PersonalIdentificationNumberScreen } from './components/screens/PersonalIdentificationNumberScreen';
import { CreatePINConfirmationScreen } from './components/screens/CreatePINConfirmationScreen';
import { LockAccountScreen } from './components/screens/LockAccountScreen';
import { ProgressTrackerServiceScreen } from './components/screens/ProgressTrackerServiceScreen';
import { ReliefOfPenaltiesScreen } from './components/screens/ReliefOfPenaltiesScreen';
import { RequestReliefFormScreen } from './components/screens/RequestReliefFormScreen';
import { ReliefRequestPDFViewer } from './components/screens/ReliefRequestPDFViewer';
import { SubmitDocumentsScreen } from './components/screens/SubmitDocumentsScreen';
import { CarryoverAmountsScreen } from './components/screens/CarryoverAmountsScreen';
import { CarryoverAmountRulesScreen } from './components/screens/CarryoverAmountRulesScreen';
import { ChangeMyReturnScreen } from './components/screens/ChangeMyReturnScreen';
import { ChangeReturnFormScreen } from './components/screens/ChangeReturnFormScreen';
import { ChangeReturnConfirmationScreen } from './components/screens/ChangeReturnConfirmationScreen';
import { CustomizeHomeScreen } from './components/screens/CustomizeHomeScreen';
import { CallSchedulingScreen } from './components/screens/CallSchedulingScreen';
import { SpouseDetailsScreen } from './components/screens/SpouseDetailsScreen';
import { ChildDetailsScreen } from './components/screens/ChildDetailsScreen';
import { UserFeedbackScreen } from './components/screens/UserFeedbackScreen';
import { AddNewDependantScreen } from './components/screens/AddNewDependantScreen';
import { RegistrationIntroScreen } from './components/screens/RegistrationIntroScreen';
import { RegistrationIntroMailScreen } from './components/screens/RegistrationIntroMailScreen';
import { RegistrationIDPhotoScreen } from './components/screens/RegistrationIDPhotoScreen';
import { PhotoLibraryScreen } from './components/screens/PhotoLibraryScreen';
import { RegistrationMethodChoiceScreen } from './components/screens/RegistrationMethodChoiceScreen';
import { RegistrationSignInPartnerInfoScreen } from './components/screens/RegistrationSignInPartnerInfoScreen';
import { RegistrationPersonalInfoScreen, PersonalInfoData } from './components/screens/RegistrationPersonalInfoScreen';
import { RegistrationAddressScreen, AddressData } from './components/screens/RegistrationAddressScreen';
import { RegistrationContactScreen, ContactData } from './components/screens/RegistrationContactScreen';
import { RegistrationSecurityScreen, SecurityData } from './components/screens/RegistrationSecurityScreen';
import { RegistrationVerificationScreen } from './components/screens/RegistrationVerificationScreen';
import { RegistrationSuccessScreen } from './components/screens/RegistrationSuccessScreen';
import { DashboardLimitedMailScreen } from './components/screens/DashboardLimitedMailScreen';
import { CRAIconExplorationScreen } from './components/screens/CRAIconExplorationScreen';
import { SearchMenu } from './components/SearchMenu';
import { BottomNav, Screen } from './components/BottomNav';
import { IPhoneMockup } from './components/IPhoneMockup';
import { ScreenTransition } from './components/ScreenTransition';

export default function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [screenKey, setScreenKey] = useState(0);
  const [showHomeScreen, setShowHomeScreen] = useState(true);
  const [showLaunchScreen, setShowLaunchScreen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeScreen, setActiveScreen] = useState<Screen>('home');
  const [showHomeWithPaymentConfirmation, setShowHomeWithPaymentConfirmation] = useState(false);
  const [showMakePayment, setShowMakePayment] = useState(false);
  const [showSimplifiedMakePayment, setShowSimplifiedMakePayment] = useState(false);
  const [showOnlineBanking, setShowOnlineBanking] = useState(false);
  const [showMorePaymentInfo, setShowMorePaymentInfo] = useState(false);
  const [showConfirmPayment, setShowConfirmPayment] = useState(false);
  const [showCreditCardConfirmPayment, setShowCreditCardConfirmPayment] = useState(false);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [showCreditCardPaymentSuccess, setShowCreditCardPaymentSuccess] = useState(false);
  const [showTaxFiling, setShowTaxFiling] = useState(false);
  const [showTaxFilingChanges, setShowTaxFilingChanges] = useState(false);
  const [showNoticeOfAssessment, setShowNoticeOfAssessment] = useState(false);
  const [showCRAMail, setShowCRAMail] = useState(false);
  const [showRegisteredPlans, setShowRegisteredPlans] = useState(false);
  const [showLearnRegisteredPlans, setShowLearnRegisteredPlans] = useState(false);
  const [showRRSPCalculator, setShowRRSPCalculator] = useState(false);
  const [showFHSAEligibility, setShowFHSAEligibility] = useState(false);
  const [showTFSAContributionRules, setShowTFSAContributionRules] = useState(false);
  const [showRESPGrantPrograms, setShowRESPGrantPrograms] = useState(false);
  const [showEditName, setShowEditName] = useState(false);
  const [showEditEmail, setShowEditEmail] = useState(false);
  const [showEditPhone, setShowEditPhone] = useState(false);
  const [showEditAddress, setShowEditAddress] = useState(false);
  const [showEditDirectDeposit, setShowEditDirectDeposit] = useState(false);
  const [showManageCards, setShowManageCards] = useState(false);
  const [showInstalmentPaymentsReminders, setShowInstalmentPaymentsReminders] = useState(false);
  const [showPaymentFrequency, setShowPaymentFrequency] = useState(false);
  const [showReminderFrequency, setShowReminderFrequency] = useState(false);
  const [paymentFrequency, setPaymentFrequency] = useState<string>('');
  const [reminderFrequency, setReminderFrequency] = useState<string>('');
  const [showTwoStepVerification, setShowTwoStepVerification] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showLanguagePreference, setShowLanguagePreference] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showAppVersion, setShowAppVersion] = useState(false);
  const [showSignInHelp, setShowSignInHelp] = useState(false);
  const [signInHelpAccordionItem, setSignInHelpAccordionItem] = useState<string | undefined>(undefined);
  const [showPrivacyFromLogin, setShowPrivacyFromLogin] = useState(false);
  const [showTermsFromLogin, setShowTermsFromLogin] = useState(false);
  const [showAppVersionFromLogin, setShowAppVersionFromLogin] = useState(false);
  const [showCRAWebView, setShowCRAWebView] = useState(false);
  const [privacyTermsReturnTo, setPrivacyTermsReturnTo] = useState<'login' | 'signInPartner'>('login');
  const [showBalanceOwingDetails, setShowBalanceOwingDetails] = useState(false);
  const [showRefundDetails, setShowRefundDetails] = useState(false);
  const [showGSTHSTCredit, setShowGSTHSTCredit] = useState(false);
  const [showAllBenefits, setShowAllBenefits] = useState(false);
  const [showFAQFileTaxes, setShowFAQFileTaxes] = useState(false);
  const [showFAQRefund, setShowFAQRefund] = useState(false);
  const [showFAQMakePayment, setShowFAQMakePayment] = useState(false);
  const [showFAQUpdateAddress, setShowFAQUpdateAddress] = useState(false);
  const [showFAQNoticeOfAssessment, setShowFAQNoticeOfAssessment] = useState(false);
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [liveChatInitialTab, setLiveChatInitialTab] = useState<'agent' | 'ai'>('agent');
  const [showCallScheduling, setShowCallScheduling] = useState(false);
  const [paymentData, setPaymentData] = useState({
    amount: '1250.00',
    selectedAccount: 'checking' as 'checking' | 'savings',
    paymentDate: '',
    paymentMethod: 'rbc-debit' as 'rbc-debit' | 'visa' | 'mastercard'
  });
  const [noticeOfAssessmentRead, setNoticeOfAssessmentRead] = useState(false);
  const [accountType, setAccountType] = useState<'individual' | 'representative'>('individual');
  const hasUnreadMail = !noticeOfAssessmentRead;
  const [hasSavedChat, setHasSavedChat] = useState(false);
  const [showCalling, setShowCalling] = useState(false);
  const [sentMessages, setSentMessages] = useState<Array<{
    id: string;
    to: string;
    subject: string;
    message: string;
    dateSent: string;
    timeSent: string;
  }>>([]);
  const [showSentMessages, setShowSentMessages] = useState(false);
  const [archivedMessages, setArchivedMessages] = useState<ArchivedMessage[]>([]);
  const [showArchive, setShowArchive] = useState(false);
  const [callingNumber, setCallingNumber] = useState('');
  const [callingLabel, setCallingLabel] = useState('');
  const [showCRAMailCompose, setShowCRAMailCompose] = useState(false);
  const [initialMailTo, setInitialMailTo] = useState('Canada Revenue Agency');
  const [initialMailSubject, setInitialMailSubject] = useState('');
  const [showTaxSlips, setShowTaxSlips] = useState(false);
  const [openNoticeOfAssessmentOnMount, setOpenNoticeOfAssessmentOnMount] = useState(false);
  const [showHowToOpenFHSA, setShowHowToOpenFHSA] = useState(false);
  const [showFHSAQualifyingWithdrawal, setShowFHSAQualifyingWithdrawal] = useState(false);
  const [showFHSAvsHBP, setShowFHSAvsHBP] = useState(false);
  const [showViewFHSAContributionRoom, setShowViewFHSAContributionRoom] = useState(false);
  const [showViewTFSAContributionRoom, setShowViewTFSAContributionRoom] = useState(false);
  const [showCorrectTFSAOverContribution, setShowCorrectTFSAOverContribution] = useState(false);
  const [showTFSAInvestorsInfo, setShowTFSAInvestorsInfo] = useState(false);
  const [showRequestWaiveTFSATax, setShowRequestWaiveTFSATax] = useState(false);
  const [showHowToOpenRESP, setShowHowToOpenRESP] = useState(false);
  const [showRESPWithdrawalRules, setShowRESPWithdrawalRules] = useState(false);
  const [showApplyCanadaLearningBond, setShowApplyCanadaLearningBond] = useState(false);
  const [showProvincialEducationSavings, setShowProvincialEducationSavings] = useState(false);
  const [showProofOfIncome, setShowProofOfIncome] = useState(false);
  const [showRepresentative, setShowRepresentative] = useState(false);
  const [showViewRepresentative, setShowViewRepresentative] = useState(false);
  const [showBecomeRepresentativeAsRep, setShowBecomeRepresentativeAsRep] = useState(false);
  const [showHomeBuyersPlan, setShowHomeBuyersPlan] = useState(false);
  const [showLifelongLearningPlan, setShowLifelongLearningPlan] = useState(false);
  const [showUncashedCheques, setShowUncashedCheques] = useState(false);
  const [showRemittanceVoucher, setShowRemittanceVoucher] = useState(false);
  const [showCPPEIRuling, setShowCPPEIRuling] = useState(false);
  const [showCPPEIRulingForm, setShowCPPEIRulingForm] = useState(false);
  const [showCPPEIRulingFormStep2New, setShowCPPEIRulingFormStep2New] = useState(false);
  const [showCPPEIRulingFormStep2, setShowCPPEIRulingFormStep2] = useState(false);
  const [showCPPEIRulingFormStep3, setShowCPPEIRulingFormStep3] = useState(false);
  const [showCPPEIRulingFormStep4, setShowCPPEIRulingFormStep4] = useState(false);
  const [showCPPEIRulingConfirmation, setShowCPPEIRulingConfirmation] = useState(false);
  const [showAuditEnquiries, setShowAuditEnquiries] = useState(false);
  const [showAuditEnquiriesConfirmation, setShowAuditEnquiriesConfirmation] = useState(false);
  const [showCarryoverAmounts, setShowCarryoverAmounts] = useState(false);
  const [showCarryoverAmountRules, setShowCarryoverAmountRules] = useState(false);
  const [showChangeMyReturn, setShowChangeMyReturn] = useState(false);
  const [showChangeReturnForm, setShowChangeReturnForm] = useState(false);
  const [showChangeReturnConfirmation, setShowChangeReturnConfirmation] = useState(false);
  const [changeReturnYear, setChangeReturnYear] = useState<string>('');
  const [showRegisterFormalDispute, setShowRegisterFormalDispute] = useState(false);
  const [showRegisterFormalDisputeConfirmation, setShowRegisterFormalDisputeConfirmation] = useState(false);
  const [showNonResidentAccount, setShowNonResidentAccount] = useState(false);
  const [showResidencyDetermination, setShowResidencyDetermination] = useState(false);
  const [showPersonalIdentificationNumber, setShowPersonalIdentificationNumber] = useState(false);
  const [showCreatePINConfirmation, setShowCreatePINConfirmation] = useState(false);
  const [showLockAccount, setShowLockAccount] = useState(false);
  const [showTrustedDevices, setShowTrustedDevices] = useState(false);
  const [showProgressTrackerService, setShowProgressTrackerService] = useState(false);
  const [showReliefOfPenalties, setShowReliefOfPenalties] = useState(false);
  const [showUserFeedback, setShowUserFeedback] = useState(false);
  const [feedbackContext, setFeedbackContext] = useState('Home');
  const [showRequestReliefForm, setShowRequestReliefForm] = useState(false);
  const [showReliefRequestPDFViewer, setShowReliefRequestPDFViewer] = useState(false);
  const [showSubmitDocuments, setShowSubmitDocuments] = useState(false);
  
  // CPP/EI Ruling Form Data State
  // Step 1 data
  const [cppeiRequester, setCppeiRequester] = useState<'worker' | 'workerRep' | 'payer' | 'payerRep' | null>(null);
  const [cppeiRulingReason, setCppeiRulingReason] = useState<'employeeOrSelfEmployed' | 'relatedToEmployer' | 'shareholder' | 'foreignNational' | 'other' | null>(null);
  const [cppeiRelationship, setCppeiRelationship] = useState('');
  const [cppeiOtherReason, setCppeiOtherReason] = useState('');
  const [cppeiIsRestructuring, setCppeiIsRestructuring] = useState<'yes' | 'no' | null>(null);
  const [cppeiRestructuringDate, setCppeiRestructuringDate] = useState('');
  // Step 2 data (Period of employment)
  const [cppeiStartDate, setCppeiStartDate] = useState('');
  const [cppeiEndDate, setCppeiEndDate] = useState('');
  const [cppeiIsOngoing, setCppeiIsOngoing] = useState(false);
  // Step 3 data (Payer information)
  const [cppeiLegalBusinessName, setCppeiLegalBusinessName] = useState('');
  const [cppeiTradingName, setCppeiTradingName] = useState('');
  const [cppeiMailingAddress, setCppeiMailingAddress] = useState('');
  const [cppeiBusinessNumber, setCppeiBusinessNumber] = useState('');
  const [cppeiBnUnknown, setCppeiBnUnknown] = useState(false);
  const [cppeiBnNone, setCppeiBnNone] = useState(false);
  const [cppeiProvinceTerritory, setCppeiProvinceTerritory] = useState('');
  const [cppeiNatureOfBusiness, setCppeiNatureOfBusiness] = useState('');
  const [cppeiContact1Name, setCppeiContact1Name] = useState('');
  const [cppeiContact1Title, setCppeiContact1Title] = useState('');
  const [cppeiContact1Cell, setCppeiContact1Cell] = useState('');
  const [cppeiContact1Work, setCppeiContact1Work] = useState('');
  const [cppeiContact1Language, setCppeiContact1Language] = useState<'english' | 'french' | null>(null);
  const [cppeiContact2Name, setCppeiContact2Name] = useState('');
  const [cppeiContact2Title, setCppeiContact2Title] = useState('');
  const [cppeiContact2Cell, setCppeiContact2Cell] = useState('');
  const [cppeiContact2Work, setCppeiContact2Work] = useState('');
  const [cppeiContact2Language, setCppeiContact2Language] = useState<'english' | 'french' | null>(null);
  // Step 4 data (Declaration)
  const [cppeiDeclarationAccepted, setCppeiDeclarationAccepted] = useState(false);
  
  const [showCustomizeHomeScreen, setShowCustomizeHomeScreen] = useState(false);
  const [showCustomizedDashboard, setShowCustomizedDashboard] = useState(false);
  const [showSpouseDetails, setShowSpouseDetails] = useState(false);
  const [showChildDetails, setShowChildDetails] = useState(false);
  const [selectedChild, setSelectedChild] = useState<string>('');
  const [showAddNewDependant, setShowAddNewDependant] = useState(false);
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  
  // Registration flow state
  const [showRegistrationIntro, setShowRegistrationIntro] = useState(false);
  const [showRegistrationIDPhoto, setShowRegistrationIDPhoto] = useState(false);
  const [showPhotoLibrary, setShowPhotoLibrary] = useState(false);
  const [photoLibraryComplete, setPhotoLibraryComplete] = useState(false);
  const [showRegistrationMethodChoice, setShowRegistrationMethodChoice] = useState(false);
  const [showRegistrationSignInPartnerInfo, setShowRegistrationSignInPartnerInfo] = useState(false);
  const [showRegistrationPersonalInfo, setShowRegistrationPersonalInfo] = useState(false);
  const [showRegistrationAddress, setShowRegistrationAddress] = useState(false);
  const [showRegistrationContact, setShowRegistrationContact] = useState(false);
  const [showRegistrationSecurity, setShowRegistrationSecurity] = useState(false);
  const [showRegistrationVerification, setShowRegistrationVerification] = useState(false);
  const [showRegistrationSuccess, setShowRegistrationSuccess] = useState(false);
  const [registrationData, setRegistrationData] = useState<{
    personalInfo?: PersonalInfoData;
    address?: AddressData;
    contact?: ContactData;
    security?: SecurityData;
  }>({});
  const [registrationVerificationType, setRegistrationVerificationType] = useState<'instant' | 'mail'>('instant');
  const [showLimitedDashboard, setShowLimitedDashboard] = useState(false);
  const [showIconExploration, setShowIconExploration] = useState(false);

  // Customization data state
  const [customizedMostRequested, setCustomizedMostRequested] = useState<any[]>([]);
  const [customizedMenuItems, setCustomizedMenuItems] = useState<any[]>([]);
  const [customizedNumberOfRows, setCustomizedNumberOfRows] = useState<number>(1);
  const [customizedBottomNavItems, setCustomizedBottomNavItems] = useState<any[]>([]);
  const [customizedHomeContentItems, setCustomizedHomeContentItems] = useState<any[]>([]);

  // State snapshot for restoring from home screen
  const [savedAppState, setSavedAppState] = useState<any>(null);

  // Launch screen timer - hide after 3 seconds (2s animation + 1s pause) and show login
  useEffect(() => {
    if (showLaunchScreen) {
      const timer = setTimeout(() => {
        setShowLaunchScreen(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showLaunchScreen]);

  // Track screen changes for transitions
  useEffect(() => {
    setScreenKey(prev => prev + 1);
  }, [
    showHomeScreen, showLaunchScreen, isLoggedIn, activeScreen,
    showHomeWithPaymentConfirmation, showMakePayment, showSimplifiedMakePayment, showOnlineBanking,
    showConfirmPayment, showCreditCardConfirmPayment, showPaymentSuccess,
    showCreditCardPaymentSuccess, showTaxFiling, showTaxFilingChanges, showNoticeOfAssessment,
    showCRAMail, showRegisteredPlans, showLearnRegisteredPlans, showRRSPCalculator,
    showFHSAEligibility, showTFSAContributionRules, showRESPGrantPrograms,
    showEditName, showEditEmail, showEditPhone, showEditAddress, showEditDirectDeposit,
    showManageCards, showTwoStepVerification, showChangePassword, showLanguagePreference,
    showPrivacy, showTerms, showHelp, showSignInHelp, showPrivacyFromLogin,
    showTermsFromLogin, showCRAWebView, showBalanceOwingDetails, showRefundDetails,
    showGSTHSTCredit, showAllBenefits, showFAQFileTaxes, showFAQRefund, showFAQMakePayment,
    showFAQUpdateAddress, showFAQNoticeOfAssessment, showLiveChat, showCallScheduling,
    showSentMessages, showArchive, showCRAMailCompose, showTaxSlips,
    showHowToOpenFHSA, showFHSAQualifyingWithdrawal, showFHSAvsHBP,
    showViewFHSAContributionRoom, showViewTFSAContributionRoom,
    showCorrectTFSAOverContribution, showTFSAInvestorsInfo, showRequestWaiveTFSATax,
    showHowToOpenRESP, showRESPWithdrawalRules, showApplyCanadaLearningBond,
    showProvincialEducationSavings, showProofOfIncome, showRepresentative, showBecomeRepresentativeAsRep, showHomeBuyersPlan, showLifelongLearningPlan, showUncashedCheques, showCustomizeHomeScreen,
    showCustomizedDashboard, showSpouseDetails, showChildDetails, showCalling,
    showAddNewDependant,
    showRegistrationIntro, showRegistrationIDPhoto, showPhotoLibrary, showRegistrationMethodChoice, showRegistrationPersonalInfo, showRegistrationAddress,
    showRegistrationContact, showRegistrationSecurity, showRegistrationVerification,
    showRegistrationSuccess
  ]);

  // Scroll to top helper function
  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, 0);
    }
  };

  const handleOpenCRAApp = () => {
    setShowHomeScreen(false);
    setShowLaunchScreen(true);
  };

  const handleOpenIconExploration = () => {
    setShowHomeScreen(false);
    setShowIconExploration(true);
    setScreenKey(prev => prev + 1);
  };

  const handleBackToHomeScreen = () => {
    // Save current state before going to home screen
    setSavedAppState({
      isLoggedIn,
      activeScreen,
      showHomeWithPaymentConfirmation,
      showMakePayment,
      showSimplifiedMakePayment,
      showConfirmPayment,
      showCreditCardConfirmPayment,
      showPaymentSuccess,
      showCreditCardPaymentSuccess,
      showTaxFiling,
      showNoticeOfAssessment,
      showCRAMail,
      showRegisteredPlans,
      showLearnRegisteredPlans,
      showRRSPCalculator,
      showFHSAEligibility,
      showTFSAContributionRules,
      showRESPGrantPrograms,
      showEditName,
      showEditEmail,
      showEditPhone,
      showEditAddress,
      showEditDirectDeposit,
      showManageCards,
      showTwoStepVerification,
      showChangePassword,
      showLanguagePreference,
      showPrivacy,
      showTerms,
      showHelp,
      showSignInHelp,
      showPrivacyFromLogin,
      showTermsFromLogin,
      showCRAWebView,
      showBalanceOwingDetails,
      showRefundDetails,
      showGSTHSTCredit,
      showAllBenefits,
      showFAQFileTaxes,
      showFAQRefund,
      showFAQMakePayment,
      showFAQUpdateAddress,
      showFAQNoticeOfAssessment,
      showLiveChat,
      showCallScheduling,
      showSentMessages,
      showArchive,
      showCRAMailCompose,
      showTaxSlips,
      showHowToOpenFHSA,
      showFHSAQualifyingWithdrawal,
      showFHSAvsHBP,
      showViewFHSAContributionRoom,
      showViewTFSAContributionRoom,
      showCorrectTFSAOverContribution,
      showTFSAInvestorsInfo,
      showRequestWaiveTFSATax,
      showHowToOpenRESP,
      showRESPWithdrawalRules,
      showApplyCanadaLearningBond,
      showProvincialEducationSavings,
      showProofOfIncome,
      showRepresentative,
      showHomeBuyersPlan,
      showLifelongLearningPlan,
      showUncashedCheques,
      showCustomizeHomeScreen,
      showCustomizedDashboard,
      showSpouseDetails,
      showChildDetails,
      selectedChild,
      customizedMostRequested,
      customizedMenuItems,
      customizedNumberOfRows,
      customizedBottomNavItems,
      customizedHomeContentItems,
    });

    setShowHomeScreen(true);
    setShowLaunchScreen(false);
    setIsLoggedIn(false);
    setShowSignInHelp(false);
    setShowPrivacyFromLogin(false);
    setShowTermsFromLogin(false);
    setShowCRAWebView(false);
    setShowCustomizedDashboard(false);
    // Reset customization state
    setCustomizedMostRequested([]);
    setCustomizedMenuItems([]);
    setCustomizedNumberOfRows(1);
    scrollToTop();
  };

  const handleRestoreFromHomeScreen = () => {
    if (!savedAppState) {
      // If no saved state, just open the CRA app normally
      handleOpenCRAApp();
      return;
    }

    // Restore all saved state
    setIsLoggedIn(savedAppState.isLoggedIn);
    setActiveScreen(savedAppState.activeScreen);
    setShowHomeWithPaymentConfirmation(savedAppState.showHomeWithPaymentConfirmation);
    setShowMakePayment(savedAppState.showMakePayment);
    setShowSimplifiedMakePayment(savedAppState.showSimplifiedMakePayment);
    setShowConfirmPayment(savedAppState.showConfirmPayment);
    setShowCreditCardConfirmPayment(savedAppState.showCreditCardConfirmPayment);
    setShowPaymentSuccess(savedAppState.showPaymentSuccess);
    setShowCreditCardPaymentSuccess(savedAppState.showCreditCardPaymentSuccess);
    setShowTaxFiling(savedAppState.showTaxFiling);
    setShowNoticeOfAssessment(savedAppState.showNoticeOfAssessment);
    setShowCRAMail(savedAppState.showCRAMail);
    setShowRegisteredPlans(savedAppState.showRegisteredPlans);
    setShowLearnRegisteredPlans(savedAppState.showLearnRegisteredPlans);
    setShowRRSPCalculator(savedAppState.showRRSPCalculator);
    setShowFHSAEligibility(savedAppState.showFHSAEligibility);
    setShowTFSAContributionRules(savedAppState.showTFSAContributionRules);
    setShowRESPGrantPrograms(savedAppState.showRESPGrantPrograms);
    setShowEditName(savedAppState.showEditName);
    setShowEditEmail(savedAppState.showEditEmail);
    setShowEditPhone(savedAppState.showEditPhone);
    setShowEditAddress(savedAppState.showEditAddress);
    setShowEditDirectDeposit(savedAppState.showEditDirectDeposit);
    setShowManageCards(savedAppState.showManageCards);
    setShowTwoStepVerification(savedAppState.showTwoStepVerification);
    setShowChangePassword(savedAppState.showChangePassword);
    setShowLanguagePreference(savedAppState.showLanguagePreference);
    setShowPrivacy(savedAppState.showPrivacy);
    setShowTerms(savedAppState.showTerms);
    setShowHelp(savedAppState.showHelp);
    setShowSignInHelp(savedAppState.showSignInHelp);
    setShowPrivacyFromLogin(savedAppState.showPrivacyFromLogin);
    setShowTermsFromLogin(savedAppState.showTermsFromLogin);
    setShowCRAWebView(savedAppState.showCRAWebView);
    setShowBalanceOwingDetails(savedAppState.showBalanceOwingDetails);
    setShowRefundDetails(savedAppState.showRefundDetails);
    setShowGSTHSTCredit(savedAppState.showGSTHSTCredit);
    setShowAllBenefits(savedAppState.showAllBenefits);
    setShowFAQFileTaxes(savedAppState.showFAQFileTaxes);
    setShowFAQRefund(savedAppState.showFAQRefund);
    setShowFAQMakePayment(savedAppState.showFAQMakePayment);
    setShowFAQUpdateAddress(savedAppState.showFAQUpdateAddress);
    setShowFAQNoticeOfAssessment(savedAppState.showFAQNoticeOfAssessment);
    setShowLiveChat(savedAppState.showLiveChat);
    setShowCallScheduling(savedAppState.showCallScheduling);
    setShowSentMessages(savedAppState.showSentMessages);
    setShowArchive(savedAppState.showArchive);
    setShowCRAMailCompose(savedAppState.showCRAMailCompose);
    setShowTaxSlips(savedAppState.showTaxSlips);
    setShowHowToOpenFHSA(savedAppState.showHowToOpenFHSA);
    setShowFHSAQualifyingWithdrawal(savedAppState.showFHSAQualifyingWithdrawal);
    setShowFHSAvsHBP(savedAppState.showFHSAvsHBP);
    setShowViewFHSAContributionRoom(savedAppState.showViewFHSAContributionRoom);
    setShowViewTFSAContributionRoom(savedAppState.showViewTFSAContributionRoom);
    setShowCorrectTFSAOverContribution(savedAppState.showCorrectTFSAOverContribution);
    setShowTFSAInvestorsInfo(savedAppState.showTFSAInvestorsInfo);
    setShowRequestWaiveTFSATax(savedAppState.showRequestWaiveTFSATax);
    setShowHowToOpenRESP(savedAppState.showHowToOpenRESP);
    setShowRESPWithdrawalRules(savedAppState.showRESPWithdrawalRules);
    setShowApplyCanadaLearningBond(savedAppState.showApplyCanadaLearningBond);
    setShowProvincialEducationSavings(savedAppState.showProvincialEducationSavings);
    setShowProofOfIncome(savedAppState.showProofOfIncome);
    setShowRepresentative(savedAppState.showRepresentative);
    setShowHomeBuyersPlan(savedAppState.showHomeBuyersPlan);
    setShowLifelongLearningPlan(savedAppState.showLifelongLearningPlan);
    setShowUncashedCheques(savedAppState.showUncashedCheques);
    setShowCustomizeHomeScreen(savedAppState.showCustomizeHomeScreen);
    setShowCustomizedDashboard(savedAppState.showCustomizedDashboard);
    setShowSpouseDetails(savedAppState.showSpouseDetails);
    setShowChildDetails(savedAppState.showChildDetails);
    setSelectedChild(savedAppState.selectedChild);
    setCustomizedMostRequested(savedAppState.customizedMostRequested);
    setCustomizedMenuItems(savedAppState.customizedMenuItems);
    setCustomizedNumberOfRows(savedAppState.customizedNumberOfRows);
    setCustomizedBottomNavItems(savedAppState.customizedBottomNavItems);
    setCustomizedHomeContentItems(savedAppState.customizedHomeContentItems);

    // Go back into the app
    setShowHomeScreen(false);
    setShowLaunchScreen(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Registration flow handlers
  const handleStartRegistration = (verificationType: 'instant' | 'mail' = 'instant') => {
    setRegistrationVerificationType(verificationType);
    setShowRegistrationIntro(true);
    setShowSignInHelp(false);
    scrollToTop();
  };

  const handleShowHelpFromRegistration = () => {
    // Hide all registration screens
    setShowRegistrationIntro(false);
    setShowRegistrationIDPhoto(false);
    setShowPhotoLibrary(false);
    setShowRegistrationMethodChoice(false);
    setShowRegistrationSignInPartnerInfo(false);
    setShowRegistrationPersonalInfo(false);
    setShowRegistrationAddress(false);
    setShowRegistrationContact(false);
    setShowRegistrationSecurity(false);
    setShowRegistrationVerification(false);
    // Show help screen
    setShowSignInHelp(true);
    scrollToTop();
  };

  const handleRegistrationIntroStart = () => {
    setShowRegistrationIntro(false);
    // Skip ID photo for mail verification
    if (registrationVerificationType === 'mail') {
      setShowRegistrationMethodChoice(true);
    } else {
      setShowRegistrationIDPhoto(true);
    }
    scrollToTop();
  };

  const handleRegistrationIntroBack = () => {
    setShowRegistrationIntro(false);
    scrollToTop();
  };

  const handleRegistrationIDPhotoNext = () => {
    setShowRegistrationIDPhoto(false);
    setPhotoLibraryComplete(false);
    setShowRegistrationMethodChoice(true);
    scrollToTop();
  };

  const handleRegistrationIDPhotoBack = () => {
    setShowRegistrationIDPhoto(false);
    setPhotoLibraryComplete(false);
    setShowRegistrationIntro(true);
    scrollToTop();
  };

  const handleChooseFromLibrary = () => {
    setShowRegistrationIDPhoto(false);
    setShowPhotoLibrary(true);
    scrollToTop();
  };

  const handlePhotoLibraryBack = () => {
    setShowPhotoLibrary(false);
    setShowRegistrationIDPhoto(true);
    scrollToTop();
  };

  const handlePhotoLibrarySelect = () => {
    setShowPhotoLibrary(false);
    setPhotoLibraryComplete(true);
    setShowRegistrationIDPhoto(true);
    scrollToTop();
  };

  const handleRegistrationMethodSelect = (method: string, usePhotoID: boolean) => {
    // For now, all methods go to the same flow
    // In a real app, different methods would have different flows
    // usePhotoID flag indicates if user wants immediate verification via photo ID
    setShowRegistrationMethodChoice(false);
    setShowRegistrationPersonalInfo(true);
    scrollToTop();
  };

  const handleRegistrationMethodChoiceBack = () => {
    setShowRegistrationMethodChoice(false);
    setShowRegistrationIDPhoto(true);
    scrollToTop();
  };

  const handleShowSignInPartnerInfo = () => {
    setShowRegistrationMethodChoice(false);
    setShowRegistrationSignInPartnerInfo(true);
    scrollToTop();
  };

  const handleRegistrationSignInPartnerInfoBack = () => {
    setShowRegistrationSignInPartnerInfo(false);
    scrollToTop();
  };

  const handleRegistrationSignInPartnerSelectBank = (bankName: string) => {
    // In a real app, this would redirect to the bank's login page
    // For now, we'll continue to the registration flow
    setShowRegistrationSignInPartnerInfo(false);
    setShowRegistrationPersonalInfo(true);
    scrollToTop();
  };

  const handleShowPrivacyFromSignInPartner = () => {
    setShowRegistrationSignInPartnerInfo(false);
    setShowPrivacyFromLogin(true);
    scrollToTop();
  };

  const handleShowTermsFromSignInPartner = () => {
    setShowRegistrationSignInPartnerInfo(false);
    setShowTermsFromLogin(true);
    scrollToTop();
  };

  const handleRegistrationPersonalInfoNext = (data: PersonalInfoData) => {
    setRegistrationData(prev => ({ ...prev, personalInfo: data }));
    setShowRegistrationPersonalInfo(false);
    setShowRegistrationAddress(true);
    scrollToTop();
  };

  const handleRegistrationPersonalInfoBack = () => {
    setShowRegistrationPersonalInfo(false);
    setShowRegistrationMethodChoice(true);
    scrollToTop();
  };

  const handleRegistrationAddressNext = (data: AddressData) => {
    setRegistrationData(prev => ({ ...prev, address: data }));
    setShowRegistrationAddress(false);
    setShowRegistrationContact(true);
    scrollToTop();
  };

  const handleRegistrationAddressBack = () => {
    setShowRegistrationAddress(false);
    setShowRegistrationPersonalInfo(true);
    scrollToTop();
  };

  const handleRegistrationContactNext = (data: ContactData) => {
    setRegistrationData(prev => ({ ...prev, contact: data }));
    setShowRegistrationContact(false);
    setShowRegistrationSecurity(true);
    scrollToTop();
  };

  const handleRegistrationContactBack = () => {
    setShowRegistrationContact(false);
    setShowRegistrationAddress(true);
    scrollToTop();
  };

  const handleRegistrationSecurityNext = (data: SecurityData) => {
    setRegistrationData(prev => ({ ...prev, security: data }));
    setShowRegistrationSecurity(false);
    setShowRegistrationVerification(true);
    scrollToTop();
  };

  const handleRegistrationSecurityBack = () => {
    setShowRegistrationSecurity(false);
    setShowRegistrationContact(true);
    scrollToTop();
  };

  const handleRegistrationVerify = (code: string) => {
    // In a real app, verify the code here
    setShowRegistrationVerification(false);
    setShowRegistrationSuccess(true);
    scrollToTop();
  };

  const handleRegistrationVerificationBack = () => {
    setShowRegistrationVerification(false);
    setShowRegistrationSecurity(true);
    scrollToTop();
  };

  const handleRegistrationComplete = () => {
    // Reset registration flow
    setShowRegistrationSuccess(false);
    setRegistrationData({});
    
    // For mail verification, go to limited dashboard
    if (registrationVerificationType === 'mail') {
      setShowLimitedDashboard(true);
      setIsLoggedIn(true);
    }
    
    scrollToTop();
  };

  const handleRegistrationStepClick = (step: number) => {
    // Navigate to the clicked step
    // Hide all registration screens first
    setShowRegistrationPersonalInfo(false);
    setShowRegistrationAddress(false);
    setShowRegistrationContact(false);
    setShowRegistrationSecurity(false);
    setShowRegistrationVerification(false);
    
    // Show the selected step
    switch (step) {
      case 1:
        setShowRegistrationPersonalInfo(true);
        break;
      case 2:
        setShowRegistrationAddress(true);
        break;
      case 3:
        setShowRegistrationContact(true);
        break;
      case 4:
        setShowRegistrationSecurity(true);
        break;
      case 5:
        setShowRegistrationVerification(true);
        break;
    }
    scrollToTop();
  };

  const handleLogout = () => {
    setShowHomeScreen(true);
    setShowLaunchScreen(false);
    setIsLoggedIn(false);
    setActiveScreen('home');
    setShowHomeWithPaymentConfirmation(false);
    setShowLimitedDashboard(false);
    setShowMakePayment(false);
    setShowConfirmPayment(false);
    setShowCreditCardConfirmPayment(false);
    setShowPaymentSuccess(false);
    setShowCreditCardPaymentSuccess(false);
    setShowTaxFiling(false);
    setShowTaxFilingChanges(false);
    setShowNoticeOfAssessment(false);
    setShowCRAMail(false);
    setShowRegisteredPlans(false);
    setShowLearnRegisteredPlans(false);
    setShowRRSPCalculator(false);
    setShowFHSAEligibility(false);
    setShowTFSAContributionRules(false);
    setShowRESPGrantPrograms(false);
    setShowEditName(false);
    setShowEditEmail(false);
    setShowEditPhone(false);
    setShowEditAddress(false);
    setShowEditDirectDeposit(false);
    setShowManageCards(false);
    setShowTwoStepVerification(false);
    setShowChangePassword(false);
    setShowLanguagePreference(false);
    setShowPrivacy(false);
    setShowTerms(false);
    setShowHelp(false);
    setShowLiveChat(false);
    setShowCallScheduling(false);
    setShowFAQFileTaxes(false);
    setShowFAQRefund(false);
    setShowFAQMakePayment(false);
    setShowFAQUpdateAddress(false);
    setShowFAQNoticeOfAssessment(false);
    setShowTaxSlips(false);
    setShowProofOfIncome(false);
    setShowAppVersion(false);
    setNoticeOfAssessmentRead(false);
    // Reset customization state
    setCustomizedMostRequested([]);
    setCustomizedMenuItems([]);
    setCustomizedNumberOfRows(1);
    scrollToTop();
  };

  const handleNavigate = (screen: Screen) => {
    setActiveScreen(screen);
    setShowHomeWithPaymentConfirmation(false);
    setShowMakePayment(false);
    setShowSimplifiedMakePayment(false);
    setShowConfirmPayment(false);
    setShowCreditCardConfirmPayment(false);
    setShowPaymentSuccess(false);
    setShowCreditCardPaymentSuccess(false);
    setShowTaxFiling(false);
    setShowTaxFilingChanges(false);
    setShowNoticeOfAssessment(false);
    setShowCRAMail(false);
    setShowSentMessages(false);
    setShowArchive(false);
    setShowCRAMailCompose(false);
    setShowRegisteredPlans(false);
    setShowLearnRegisteredPlans(false);
    setShowRRSPCalculator(false);
    setShowFHSAEligibility(false);
    setShowTFSAContributionRules(false);
    setShowRESPGrantPrograms(false);
    setShowHowToOpenFHSA(false);
    setShowFHSAQualifyingWithdrawal(false);
    setShowFHSAvsHBP(false);
    setShowViewFHSAContributionRoom(false);
    setShowViewTFSAContributionRoom(false);
    setShowCorrectTFSAOverContribution(false);
    setShowTFSAInvestorsInfo(false);
    setShowRequestWaiveTFSATax(false);
    setShowHowToOpenRESP(false);
    setShowRESPWithdrawalRules(false);
    setShowApplyCanadaLearningBond(false);
    setShowProvincialEducationSavings(false);
    setShowRepresentative(false);
    setShowBecomeRepresentativeAsRep(false);
    setShowEditName(false);
    setShowEditEmail(false);
    setShowEditPhone(false);
    setShowEditAddress(false);
    setShowEditDirectDeposit(false);
    setShowManageCards(false);
    setShowInstalmentPaymentsReminders(false);
    setShowTwoStepVerification(false);
    setShowChangePassword(false);
    setShowLanguagePreference(false);
    setShowPrivacy(false);
    setShowTerms(false);
    setShowHelp(false);
    setShowCallScheduling(false);
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowGSTHSTCredit(false);
    setShowAllBenefits(false);
    setShowLiveChat(false);
    setShowFAQFileTaxes(false);
    setShowFAQRefund(false);
    setShowFAQMakePayment(false);
    setShowFAQUpdateAddress(false);
    setShowFAQNoticeOfAssessment(false);
    setShowTaxSlips(false);
    setShowProofOfIncome(false);
    setShowCustomizeHomeScreen(false);
    setShowCustomizedDashboard(false);
    setShowSpouseDetails(false);
    setShowChildDetails(false);
    setShowUserFeedback(false);
    setShowAddNewDependant(false);
    setShowMorePaymentInfo(false);
    setShowPaymentFrequency(false);
    setShowReminderFrequency(false);
    setShowCalling(false);
    setShowRegistrationIntro(false);
    setShowRegistrationIDPhoto(false);
    setShowPhotoLibrary(false);
    setShowRegistrationMethodChoice(false);
    setShowRegistrationSignInPartnerInfo(false);
    setShowRegistrationPersonalInfo(false);
    setShowRegistrationAddress(false);
    setShowRegistrationContact(false);
    setShowRegistrationSecurity(false);
    setShowRegistrationVerification(false);
    setShowRegistrationSuccess(false);
    setShowAppVersion(false);
    setShowHomeBuyersPlan(false);
    setShowLifelongLearningPlan(false);
    setShowUncashedCheques(false);
    setShowRemittanceVoucher(false);
    setShowCPPEIRuling(false);
    setShowCPPEIRulingForm(false);
    setShowCPPEIRulingFormStep2New(false);
    setShowCPPEIRulingFormStep2(false);
    setShowCPPEIRulingFormStep3(false);
    setShowCPPEIRulingFormStep4(false);
    setShowCPPEIRulingConfirmation(false);
    setShowAuditEnquiries(false);
    setShowAuditEnquiriesConfirmation(false);
    setShowCarryoverAmounts(false);
    setShowCarryoverAmountRules(false);
    setShowChangeMyReturn(false);
    setShowChangeReturnForm(false);
    setShowChangeReturnConfirmation(false);
    setChangeReturnYear('');
    setShowProgressTrackerService(false);
    setShowReliefOfPenalties(false);
    setShowSubmitDocuments(false);
    setShowOnlineBanking(false);
    setShowSignInHelp(false);
    setShowPrivacyFromLogin(false);
    setShowTermsFromLogin(false);
    setShowAppVersionFromLogin(false);
    setShowCRAWebView(false);
    setShowRegisterFormalDispute(false);
    setShowRegisterFormalDisputeConfirmation(false);
    setShowNonResidentAccount(false);
    setShowResidencyDetermination(false);
    setShowPersonalIdentificationNumber(false);
    setShowCreatePINConfirmation(false);
    setShowRequestReliefForm(false);
    setShowSearchMenu(false);
    setShowLimitedDashboard(false);
    setShowIconExploration(false);
    scrollToTop();
  };

  const handleUnlockFullAccount = () => {
    setShowLimitedDashboard(false);
    scrollToTop();
  };

  const handleShowOnlineBanking = () => {
    setShowOnlineBanking(true);
    scrollToTop();
  };

  const handleShowMakePayment = () => {
    // Redirect to simplified make payment screen
    setShowSimplifiedMakePayment(true);
    setShowConfirmPayment(false);
    setShowCreditCardConfirmPayment(false);
    setShowPaymentSuccess(false);
    setShowCreditCardPaymentSuccess(false);
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowFAQFileTaxes(false);
    setShowFAQRefund(false);
    setShowFAQMakePayment(false);
    setShowFAQUpdateAddress(false);
    setShowFAQNoticeOfAssessment(false);
    setShowHelp(false);
    setShowLiveChat(false);
    setShowCRAMail(false);
    setShowTaxFiling(false);
    setShowTaxFilingChanges(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowTaxSlips(false);
    setShowEditDirectDeposit(false);
    setShowEditName(false);
    setShowEditEmail(false);
    setShowEditPhone(false);
    setShowEditAddress(false);
    setShowInstalmentPaymentsReminders(false);
    setShowPaymentFrequency(false);
    setShowReminderFrequency(false);
    setShowAddNewDependant(false);
    setShowCustomizeHomeScreen(false);
    setShowAppVersion(false);
    scrollToTop();
  };

  const handleShowProfile = () => {
    // Close all dedicated screens before showing profile
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowFAQFileTaxes(false);
    setShowFAQRefund(false);
    setShowFAQMakePayment(false);
    setShowFAQUpdateAddress(false);
    setShowFAQNoticeOfAssessment(false);
    setShowHelp(false);
    setShowLiveChat(false);
    setShowCRAMail(false);
    setShowTaxFiling(false);
    setShowTaxFilingChanges(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowTaxSlips(false);
    setShowProofOfIncome(false);
    setShowGSTHSTCredit(false);
    setShowHomeBuyersPlan(false);
    setShowFHSAEligibility(false);
    setShowLifelongLearningPlan(false);
    setShowUncashedCheques(false);
    setShowRemittanceVoucher(false);
    setShowCPPEIRuling(false);
    setShowCPPEIRulingForm(false);
    setShowCPPEIRulingFormStep2New(false);
    setShowCPPEIRulingFormStep2(false);
    setShowCPPEIRulingFormStep3(false);
    setShowCPPEIRulingFormStep4(false);
    setShowCPPEIRulingConfirmation(false);
    setShowAuditEnquiries(false);
    setShowAuditEnquiriesConfirmation(false);
    setShowCarryoverAmounts(false);
    setShowCarryoverAmountRules(false);
    setShowChangeMyReturn(false);
    setShowChangeReturnForm(false);
    setShowChangeReturnConfirmation(false);
    setShowProgressTrackerService(false);
    setShowReliefOfPenalties(false);
    setShowRequestReliefForm(false);
    setShowSubmitDocuments(false);
    setShowRegisterFormalDispute(false);
    setShowRegisterFormalDisputeConfirmation(false);
    setShowNonResidentAccount(false);
    setShowResidencyDetermination(false);
    setShowPersonalIdentificationNumber(false);
    setShowCreatePINConfirmation(false);
    setShowRepresentative(false);
    setShowBecomeRepresentativeAsRep(false);
    setShowCallScheduling(false);
    setShowCalling(false);
    setShowSearchMenu(false);
    setShowSimplifiedMakePayment(false);
    setShowConfirmPayment(false);
    setShowCreditCardConfirmPayment(false);
    setShowPaymentSuccess(false);
    setShowCreditCardPaymentSuccess(false);
    setShowMorePaymentInfo(false);
    setShowOnlineBanking(false);
    setShowEditDirectDeposit(false);
    setShowEditName(false);
    setShowEditEmail(false);
    setShowEditPhone(false);
    setShowEditAddress(false);
    setShowInstalmentPaymentsReminders(false);
    setShowPaymentFrequency(false);
    setShowReminderFrequency(false);
    setShowAddNewDependant(false);
    setShowCustomizeHomeScreen(false);
    setShowAppVersion(false);
    setShowSpouseDetails(false);
    setShowChildDetails(false);
    setShowUserFeedback(false);
    
    // Now navigate to profile
    setActiveScreen('profile');
    scrollToTop();
  };

  const handleShowMenu = () => {
    // Menu handler - could show a menu drawer
  };

  const handleShowNotifications = () => {
    // Notifications handler - could show notifications
  };

  const handleShowSimplifiedMakePayment = () => {
    setShowSimplifiedMakePayment(true);
    setShowConfirmPayment(false);
    setShowCreditCardConfirmPayment(false);
    setShowPaymentSuccess(false);
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowFAQFileTaxes(false);
    setShowFAQRefund(false);
    setShowFAQMakePayment(false);
    setShowFAQUpdateAddress(false);
    setShowFAQNoticeOfAssessment(false);
    setShowHelp(false);
    setShowLiveChat(false);
    setShowCRAMail(false);
    setShowTaxFiling(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowTaxSlips(false);
    scrollToTop();
  };

  const handleShowMorePaymentInfo = () => {
    setShowMorePaymentInfo(true);
    setShowSimplifiedMakePayment(false);
    scrollToTop();
  };

  const handleBackFromPayment = () => {
    setShowMakePayment(false);
    setShowSimplifiedMakePayment(false);
    setShowMorePaymentInfo(false);
    setShowConfirmPayment(false);
    setShowPaymentSuccess(false);
    scrollToTop();
  };

  const handleContinueToConfirm = (amount: string, account: 'checking' | 'savings', paymentDate: string) => {
    setPaymentData({ 
      amount, 
      selectedAccount: account, 
      paymentDate,
      paymentMethod: 'rbc-debit'
    });
    setShowMakePayment(false);
    setShowConfirmPayment(true);
    scrollToTop();
  };

  const handleSimplifiedContinueToConfirm = (amount: string, paymentMethod: string, paymentDate: string) => {
    setPaymentData({ 
      amount, 
      selectedAccount: 'checking', 
      paymentDate,
      paymentMethod: paymentMethod as 'rbc-debit' | 'visa' | 'mastercard'
    });
    setShowSimplifiedMakePayment(false);
    
    // Route to appropriate confirmation screen based on payment method
    if (paymentMethod === 'visa' || paymentMethod === 'mastercard') {
      setShowCreditCardConfirmPayment(true);
      setShowConfirmPayment(false);
    } else {
      setShowConfirmPayment(true);
      setShowCreditCardConfirmPayment(false);
    }
    
    scrollToTop();
  };

  const handleBackFromConfirm = () => {
    setShowConfirmPayment(false);
    setShowCreditCardConfirmPayment(false);
    // Go back to simplified payment screen
    setShowSimplifiedMakePayment(true);
    scrollToTop();
  };

  const handleBackToPaymentsFromConfirm = () => {
    setShowConfirmPayment(false);
    setShowCreditCardConfirmPayment(false);
    setShowMakePayment(false);
    setShowSimplifiedMakePayment(false);
    setActiveScreen('payments');
    scrollToTop();
  };

  const handleConfirmPayment = () => {
    // Handle payment confirmation - show success screen, then home with confirmation
    // Route to appropriate success screen based on payment method
    const isCreditCard = paymentData.paymentMethod === 'visa' || paymentData.paymentMethod === 'mastercard';
    
    setShowConfirmPayment(false);
    setShowCreditCardConfirmPayment(false);
    setShowMakePayment(false);
    setShowSimplifiedMakePayment(false);
    
    if (isCreditCard) {
      setShowCreditCardPaymentSuccess(true);
      setShowPaymentSuccess(false);
    } else {
      setShowPaymentSuccess(true);
      setShowCreditCardPaymentSuccess(false);
    }
    
    setShowHomeWithPaymentConfirmation(true);
    scrollToTop();
  };

  const handleReturnHome = () => {
    setShowPaymentSuccess(false);
    setShowCreditCardPaymentSuccess(false);
    setShowNoticeOfAssessment(false);
    setShowCRAMail(false);
    setShowSentMessages(false);
    setShowArchive(false);
    setShowCRAMailCompose(false);
    setShowTaxFiling(false);
    setShowRegisteredPlans(false);
    setShowLiveChat(false);
    setShowHelp(false);
    setShowCallScheduling(false);
    setShowMakePayment(false);
    setShowSimplifiedMakePayment(false);
    setShowConfirmPayment(false);
    setShowCreditCardConfirmPayment(false);
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowFAQFileTaxes(false);
    setShowFAQRefund(false);
    setShowFAQMakePayment(false);
    setShowFAQUpdateAddress(false);
    setShowFAQNoticeOfAssessment(false);
    setShowLearnRegisteredPlans(false);
    setShowRRSPCalculator(false);
    setShowFHSAEligibility(false);
    setShowTFSAContributionRules(false);
    setShowRESPGrantPrograms(false);
    setShowHowToOpenFHSA(false);
    setShowFHSAQualifyingWithdrawal(false);
    setShowFHSAvsHBP(false);
    setShowViewFHSAContributionRoom(false);
    setShowViewTFSAContributionRoom(false);
    setShowCorrectTFSAOverContribution(false);
    setShowTFSAInvestorsInfo(false);
    setShowRequestWaiveTFSATax(false);
    setShowHowToOpenRESP(false);
    setShowRESPWithdrawalRules(false);
    setShowApplyCanadaLearningBond(false);
    setShowProvincialEducationSavings(false);
    setShowRepresentative(false);
    setShowEditName(false);
    setShowEditEmail(false);
    setShowEditPhone(false);
    setShowEditAddress(false);
    setShowEditDirectDeposit(false);
    setShowManageCards(false);
    setShowInstalmentPaymentsReminders(false);
    setShowPaymentFrequency(false);
    setShowReminderFrequency(false);
    setShowAddNewDependant(false);
    setShowTwoStepVerification(false);
    setShowChangePassword(false);
    setShowLanguagePreference(false);
    setShowPrivacy(false);
    setShowTerms(false);
    setShowTaxSlips(false);
    setShowProofOfIncome(false);
    setShowCustomizeHomeScreen(false);
    setShowAppVersion(false);
    setShowCPPEIRuling(false);
    setShowCPPEIRulingForm(false);
    setShowCPPEIRulingFormStep2New(false);
    setShowCPPEIRulingFormStep2(false);
    setShowCPPEIRulingFormStep3(false);
    setShowCPPEIRulingFormStep4(false);
    setShowCPPEIRulingConfirmation(false);
    setShowAuditEnquiries(false);
    setShowAuditEnquiriesConfirmation(false);
    setShowCarryoverAmounts(false);
    setShowCarryoverAmountRules(false);
    setShowRegisterFormalDispute(false);
    setShowRegisterFormalDisputeConfirmation(false);
    setShowNonResidentAccount(false);
    setShowResidencyDetermination(false);
    
    // Reset CPP/EI form data
    setCppeiRequester(null);
    setCppeiRulingReason(null);
    setCppeiRelationship('');
    setCppeiOtherReason('');
    setCppeiIsRestructuring(null);
    setCppeiRestructuringDate('');
    setCppeiStartDate('');
    setCppeiEndDate('');
    setCppeiIsOngoing(false);
    setCppeiLegalBusinessName('');
    setCppeiTradingName('');
    setCppeiMailingAddress('');
    setCppeiBusinessNumber('');
    setCppeiBnUnknown(false);
    setCppeiBnNone(false);
    setCppeiProvinceTerritory('');
    setCppeiNatureOfBusiness('');
    setCppeiContact1Name('');
    setCppeiContact1Title('');
    setCppeiContact1Cell('');
    setCppeiContact1Work('');
    setCppeiContact1Language(null);
    setCppeiContact2Name('');
    setCppeiContact2Title('');
    setCppeiContact2Cell('');
    setCppeiContact2Work('');
    setCppeiContact2Language(null);
    setCppeiDeclarationAccepted(false);
    
    setActiveScreen('home');
    scrollToTop();
  };

  const handleReturnHomeAfterPayment = () => {
    setShowPaymentSuccess(false);
    setShowCreditCardPaymentSuccess(false);
    setShowNoticeOfAssessment(false);
    setShowCRAMail(false);
    setShowTaxFiling(false);
    setShowRegisteredPlans(false);
    setShowHomeWithPaymentConfirmation(true);
    setActiveScreen('home');
    scrollToTop();
  };

  const handleExitApp = () => {
    // Exit app and return to iPhone home screen
    setShowHomeScreen(true);
    setShowLaunchScreen(false);
    setIsLoggedIn(false);
    setShowPaymentSuccess(false);
    setActiveScreen('home');
    setShowMakePayment(false);
    setShowConfirmPayment(false);
    setShowHomeWithPaymentConfirmation(false);
    scrollToTop();
  };

  const handleStartFiling = () => {
    setShowTaxFiling(true);
    setShowTaxFilingChanges(false);
    setShowMakePayment(false);
    setShowConfirmPayment(false);
    setShowPaymentSuccess(false);
    setShowFAQFileTaxes(false);
    setShowFAQRefund(false);
    setShowFAQMakePayment(false);
    setShowFAQUpdateAddress(false);
    setShowFAQNoticeOfAssessment(false);
    setShowHelp(false);
    setShowLiveChat(false);
    setShowCallScheduling(false);
    setShowCRAMail(false);
    setShowRegisteredPlans(false);
    setShowNoticeOfAssessment(false);
    setShowEditDirectDeposit(false);
    setShowEditName(false);
    setShowEditEmail(false);
    setShowEditPhone(false);
    setShowEditAddress(false);
    setShowInstalmentPaymentsReminders(false);
    setShowPaymentFrequency(false);
    setShowReminderFrequency(false);
    setShowAddNewDependant(false);
    setShowCustomizeHomeScreen(false);
    setShowAppVersion(false);
    scrollToTop();
  };

  const handleBackFromFiling = () => {
    setShowTaxFiling(false);
    setActiveScreen('home');
    scrollToTop();
  };

  const handleShowTaxFilingChanges = () => {
    setShowTaxFilingChanges(true);
    setShowTaxFiling(false);
    scrollToTop();
  };

  const handleBackFromTaxFilingChanges = () => {
    setShowTaxFilingChanges(false);
    setShowTaxFiling(true);
    scrollToTop();
  };

  const handleViewNoticeOfAssessment = () => {
    setShowSearchMenu(false);
    setOpenNoticeOfAssessmentOnMount(true);
    setShowTaxSlips(true);
    setShowMakePayment(false);
    setShowConfirmPayment(false);
    setShowPaymentSuccess(false);
    setShowTaxFiling(false);
    setShowRegisteredPlans(false);
    setShowCRAMail(false);
    setShowProofOfIncome(false);
    setShowFAQFileTaxes(false);
    setShowFAQRefund(false);
    setShowFAQMakePayment(false);
    setShowFAQUpdateAddress(false);
    setShowFAQNoticeOfAssessment(false);
    setShowHelp(false);
    setShowLiveChat(false);
    scrollToTop();
  };

  const handleShowRegisteredPlans = () => {
    setShowRegisteredPlans(true);
    setShowTaxFilingChanges(false);
    setShowMakePayment(false);
    setShowConfirmPayment(false);
    setShowPaymentSuccess(false);
    setShowTaxFiling(false);
    setShowNoticeOfAssessment(false);
    setShowCRAMail(false);
    setShowFAQFileTaxes(false);
    setShowFAQRefund(false);
    setShowFAQMakePayment(false);
    setShowFAQUpdateAddress(false);
    setShowFAQNoticeOfAssessment(false);
    setShowHelp(false);
    setShowLiveChat(false);
    setShowEditDirectDeposit(false);
    setShowEditName(false);
    setShowEditEmail(false);
    setShowEditPhone(false);
    setShowEditAddress(false);
    setShowInstalmentPaymentsReminders(false);
    setShowPaymentFrequency(false);
    setShowReminderFrequency(false);
    setShowAddNewDependant(false);
    setShowCustomizeHomeScreen(false);
    setShowAppVersion(false);
    scrollToTop();
  };

  const handleBackFromRegisteredPlans = () => {
    setShowRegisteredPlans(false);
    scrollToTop();
  };

  const handleBackFromNoticeOfAssessment = () => {
    setShowNoticeOfAssessment(false);
    setActiveScreen('returns');
    scrollToTop();
  };

  const handleShowCRAMail = () => {
    setShowCRAMail(true);
    setShowMakePayment(false);
    setShowConfirmPayment(false);
    setShowPaymentSuccess(false);
    setShowTaxFiling(false);
    setShowTaxFilingChanges(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowFAQFileTaxes(false);
    setShowFAQRefund(false);
    setShowFAQMakePayment(false);
    setShowFAQUpdateAddress(false);
    setShowFAQNoticeOfAssessment(false);
    setShowHelp(false);
    setShowLiveChat(false);
    setShowEditDirectDeposit(false);
    setShowEditName(false);
    setShowEditEmail(false);
    setShowEditPhone(false);
    setShowEditAddress(false);
    setShowInstalmentPaymentsReminders(false);
    setShowPaymentFrequency(false);
    setShowReminderFrequency(false);
    setShowAddNewDependant(false);
    setShowCustomizeHomeScreen(false);
    setShowAppVersion(false);
    scrollToTop();
  };

  const handleBackFromCRAMail = () => {
    setShowCRAMail(false);
    setShowCRAMailCompose(false);
    scrollToTop();
  };

  const handleMessageSentFromSignInHelp = () => {
    // When user sends a message from SignInHelp context, return them to login
    setShowCRAMail(false);
    setShowCRAMailCompose(false);
    setShowSignInHelp(false);
    scrollToTop();
  };

  const handleSendMessage = (to?: string, subject?: string) => {
    setInitialMailTo(to || 'CRA');
    setInitialMailSubject(subject || '');
    setShowCRAMail(true);
    setShowCRAMailCompose(true);
    setShowHelp(false);
    setShowSignInHelp(false);
    setShowMakePayment(false);
    setShowSimplifiedMakePayment(false);
    setShowConfirmPayment(false);
    setShowCreditCardConfirmPayment(false);
    setShowPaymentSuccess(false);
    setShowCreditCardPaymentSuccess(false);
    setShowTaxFiling(false);
    setShowTaxFilingChanges(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowFAQFileTaxes(false);
    setShowFAQRefund(false);
    setShowFAQMakePayment(false);
    setShowFAQUpdateAddress(false);
    setShowFAQNoticeOfAssessment(false);
    setShowLiveChat(false);
    // Don't set isLoggedIn to true - user may be accessing from SignInHelp
    scrollToTop();
  };

  const handleMarkNoticeAsRead = () => {
    setNoticeOfAssessmentRead(true);
  };

  const handleArchiveInboxMessage = (message: MailMessage) => {
    // Create archived message with full details
    const archivedMessage: ArchivedMessage = {
      id: `archived-inbox-${message.id}-${Date.now()}`,
      subject: message.subject,
      date: message.date,
      type: 'inbox',
      from: 'Canada Revenue Agency',
      category: message.category,
      hasAttachment: message.hasAttachment
    };
    setArchivedMessages([archivedMessage, ...archivedMessages]);
  };

  const handleArchiveSentMessage = (messageId: string) => {
    const message = sentMessages.find(m => m.id === messageId);
    if (message) {
      const archivedMessage: ArchivedMessage = {
        id: `archived-sent-${messageId}-${Date.now()}`,
        subject: message.subject,
        date: message.dateSent,
        type: 'sent',
        to: message.to
      };
      setArchivedMessages([archivedMessage, ...archivedMessages]);
      setSentMessages(sentMessages.filter(m => m.id !== messageId));
    }
  };

  const handleRestoreMessage = (messageId: string) => {
    const message = archivedMessages.find(m => m.id === messageId);
    if (message) {
      if (message.type === 'sent') {
        // Restore to sent messages
        const restoredMessage = {
          id: message.id,
          to: message.to || '',
          subject: message.subject,
          message: '',
          dateSent: message.date,
          timeSent: '12:00 PM'
        };
        setSentMessages([restoredMessage, ...sentMessages]);
      }
      // Remove from archived
      setArchivedMessages(archivedMessages.filter(m => m.id !== messageId));
    }
  };

  const handleShowArchive = () => {
    setShowSentMessages(false);
    setShowCRAMail(false);
    setShowArchive(true);
    scrollToTop();
  };

  const handleBackFromArchive = () => {
    setShowArchive(false);
    scrollToTop();
  };

  const handleShowLearnRegisteredPlans = () => {
    setShowLearnRegisteredPlans(true);
    setShowRegisteredPlans(false);
    scrollToTop();
  };

  const handleBackFromLearnRegisteredPlans = () => {
    setShowLearnRegisteredPlans(false);
    setShowRegisteredPlans(true);
    scrollToTop();
  };

  const handleShowRRSPCalculator = () => {
    setShowRRSPCalculator(true);
    setShowRegisteredPlans(false);
    scrollToTop();
  };

  const handleBackFromRRSPCalculator = () => {
    setShowRRSPCalculator(false);
    setShowRegisteredPlans(true);
    scrollToTop();
  };

  const handleShowFHSAEligibility = () => {
    // Close all dedicated screens before showing FHSA Eligibility
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowGSTHSTCredit(false);
    setShowHomeBuyersPlan(false);
    setShowLifelongLearningPlan(false);
    setShowUncashedCheques(false);
    setShowRemittanceVoucher(false);
    setShowCPPEIRuling(false);
    setShowAuditEnquiries(false);
    setShowCarryoverAmounts(false);
    setShowChangeMyReturn(false);
    setShowProgressTrackerService(false);
    setShowReliefOfPenalties(false);
    setShowSubmitDocuments(false);
    setShowRegisterFormalDispute(false);
    setShowNonResidentAccount(false);
    setShowPersonalIdentificationNumber(false);
    setShowSearchMenu(false);
    setShowProofOfIncome(false);
    setShowRegisteredPlans(false);
    setShowCRAMail(false);
    setShowSentMessages(false);
    setShowArchive(false);
    setShowLiveChat(false);
    setShowCallScheduling(false);
    setShowTaxSlips(false);
    setShowHelp(false);
    setShowCalling(false);
    setShowNoticeOfAssessment(false);
    setShowFHSAEligibility(true);
    scrollToTop();
  };

  const handleBackFromFHSAEligibility = () => {
    setShowFHSAEligibility(false);
    setShowRegisteredPlans(true);
    scrollToTop();
  };

  const handleShowTFSAContributionRules = () => {
    setShowTFSAContributionRules(true);
    setShowRegisteredPlans(false);
    scrollToTop();
  };

  const handleBackFromTFSAContributionRules = () => {
    setShowTFSAContributionRules(false);
    setShowRegisteredPlans(true);
    scrollToTop();
  };

  const handleShowRESPGrantPrograms = () => {
    setShowRESPGrantPrograms(true);
    setShowRegisteredPlans(false);
    scrollToTop();
  };

  const handleBackFromRESPGrantPrograms = () => {
    setShowRESPGrantPrograms(false);
    setShowRegisteredPlans(true);
    scrollToTop();
  };

  // FHSA Related Links Handlers
  const handleShowHowToOpenFHSA = () => {
    setShowHowToOpenFHSA(true);
    setShowFHSAEligibility(false);
    scrollToTop();
  };

  const handleBackFromHowToOpenFHSA = () => {
    setShowHowToOpenFHSA(false);
    setShowFHSAEligibility(true);
    scrollToTop();
  };

  const handleShowFHSAQualifyingWithdrawal = () => {
    setShowFHSAQualifyingWithdrawal(true);
    setShowFHSAEligibility(false);
    scrollToTop();
  };

  const handleBackFromFHSAQualifyingWithdrawal = () => {
    setShowFHSAQualifyingWithdrawal(false);
    setShowFHSAEligibility(true);
    scrollToTop();
  };

  const handleShowFHSAvsHBP = () => {
    setShowFHSAvsHBP(true);
    setShowFHSAEligibility(false);
    scrollToTop();
  };

  const handleBackFromFHSAvsHBP = () => {
    setShowFHSAvsHBP(false);
    setShowFHSAEligibility(true);
    scrollToTop();
  };

  const handleShowViewFHSAContributionRoom = () => {
    setShowViewFHSAContributionRoom(true);
    setShowFHSAEligibility(false);
    scrollToTop();
  };

  const handleBackFromViewFHSAContributionRoom = () => {
    setShowViewFHSAContributionRoom(false);
    setShowFHSAEligibility(true);
    scrollToTop();
  };

  // TFSA Related Links Handlers
  const handleShowViewTFSAContributionRoom = () => {
    setShowViewTFSAContributionRoom(true);
    setShowTFSAContributionRules(false);
    scrollToTop();
  };

  const handleBackFromViewTFSAContributionRoom = () => {
    setShowViewTFSAContributionRoom(false);
    setShowTFSAContributionRules(true);
    scrollToTop();
  };

  const handleShowCorrectTFSAOverContribution = () => {
    setShowCorrectTFSAOverContribution(true);
    setShowTFSAContributionRules(false);
    scrollToTop();
  };

  const handleBackFromCorrectTFSAOverContribution = () => {
    setShowCorrectTFSAOverContribution(false);
    setShowTFSAContributionRules(true);
    scrollToTop();
  };

  const handleShowTFSAInvestorsInfo = () => {
    setShowTFSAInvestorsInfo(true);
    setShowTFSAContributionRules(false);
    scrollToTop();
  };

  const handleBackFromTFSAInvestorsInfo = () => {
    setShowTFSAInvestorsInfo(false);
    setShowTFSAContributionRules(true);
    scrollToTop();
  };

  const handleShowRequestWaiveTFSATax = () => {
    setShowRequestWaiveTFSATax(true);
    setShowTFSAContributionRules(false);
    scrollToTop();
  };

  const handleBackFromRequestWaiveTFSATax = () => {
    setShowRequestWaiveTFSATax(false);
    setShowTFSAContributionRules(true);
    scrollToTop();
  };

  // RESP Related Links Handlers
  const handleShowHowToOpenRESP = () => {
    setShowHowToOpenRESP(true);
    setShowRESPGrantPrograms(false);
    scrollToTop();
  };

  const handleBackFromHowToOpenRESP = () => {
    setShowHowToOpenRESP(false);
    setShowRESPGrantPrograms(true);
    scrollToTop();
  };

  const handleShowRESPWithdrawalRules = () => {
    setShowRESPWithdrawalRules(true);
    setShowRESPGrantPrograms(false);
    scrollToTop();
  };

  const handleBackFromRESPWithdrawalRules = () => {
    setShowRESPWithdrawalRules(false);
    setShowRESPGrantPrograms(true);
    scrollToTop();
  };

  const handleShowApplyCanadaLearningBond = () => {
    setShowApplyCanadaLearningBond(true);
    setShowRESPGrantPrograms(false);
    scrollToTop();
  };

  const handleBackFromApplyCanadaLearningBond = () => {
    setShowApplyCanadaLearningBond(false);
    setShowRESPGrantPrograms(true);
    scrollToTop();
  };

  const handleShowProvincialEducationSavings = () => {
    setShowProvincialEducationSavings(true);
    setShowRESPGrantPrograms(false);
    scrollToTop();
  };

  const handleBackFromProvincialEducationSavings = () => {
    setShowProvincialEducationSavings(false);
    setShowRESPGrantPrograms(true);
    scrollToTop();
  };

  const handleBecomeRepresentative = () => {
    // Close all dedicated screens before showing Become Representative
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowGSTHSTCredit(false);
    setShowHomeBuyersPlan(false);
    setShowFHSAEligibility(false);
    setShowLifelongLearningPlan(false);
    setShowUncashedCheques(false);
    setShowRemittanceVoucher(false);
    setShowCPPEIRuling(false);
    setShowAuditEnquiries(false);
    setShowCarryoverAmounts(false);
    setShowChangeMyReturn(false);
    setShowProgressTrackerService(false);
    setShowReliefOfPenalties(false);
    setShowSubmitDocuments(false);
    setShowRegisterFormalDispute(false);
    setShowNonResidentAccount(false);
    setShowPersonalIdentificationNumber(false);
    setShowSearchMenu(false);
    setShowProofOfIncome(false);
    setShowTaxSlips(false);
    setShowCRAMail(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowRepresentative(true);
    scrollToTop();
  };

  const handleShowBecomeRepresentative = handleBecomeRepresentative;

  const handleBackFromRepresentative = () => {
    setShowRepresentative(false);
    scrollToTop();
  };

  const handleBecomeRepresentativeAsRep = () => {
    setShowBecomeRepresentativeAsRep(true);
    scrollToTop();
  };

  const handleBackFromBecomeRepresentativeAsRep = () => {
    setShowBecomeRepresentativeAsRep(false);
    scrollToTop();
  };

  const handleShowCustomizeHomeScreen = () => {
    setShowSearchMenu(false);
    setShowProofOfIncome(false);
    setShowCustomizeHomeScreen(true);
    scrollToTop();
  };

  const handleBackFromCustomizeHomeScreen = () => {
    setShowCustomizeHomeScreen(false);
    scrollToTop();
  };

  const handleSaveCustomization = (mostRequested: any[], menuItems: any[], numberOfRows: number, bottomNavItems: any[], homeContentItems: any[]) => {
    setCustomizedMostRequested(mostRequested);
    setCustomizedMenuItems(menuItems);
    setCustomizedNumberOfRows(numberOfRows);
    setCustomizedBottomNavItems(bottomNavItems);
    setCustomizedHomeContentItems(homeContentItems);
    setShowCustomizeHomeScreen(false);
    setShowCustomizedDashboard(true);
    scrollToTop();
  };

  const handleBackFromCustomizedDashboard = () => {
    setShowCustomizedDashboard(false);
    // Clear customization data to return to default
    setCustomizedMostRequested([]);
    setCustomizedMenuItems([]);
    setCustomizedNumberOfRows(1);
    setCustomizedBottomNavItems([]);
    setCustomizedHomeContentItems([]);
    scrollToTop();
  };

  const handleShowEditName = () => {
    setShowEditName(true);
    scrollToTop();
  };

  const handleBackFromEditName = () => {
    setShowEditName(false);
    scrollToTop();
  };

  const handleShowEditEmail = () => {
    setShowEditEmail(true);
    scrollToTop();
  };

  const handleBackFromEditEmail = () => {
    setShowEditEmail(false);
    scrollToTop();
  };

  const handleShowEditPhone = () => {
    setShowSearchMenu(false);
    setShowEditPhone(true);
    scrollToTop();
  };

  const handleBackFromEditPhone = () => {
    setShowEditPhone(false);
    scrollToTop();
  };

  const handleShowEditAddress = () => {
    setShowEditAddress(true);
    scrollToTop();
  };

  const handleBackFromEditAddress = () => {
    setShowEditAddress(false);
    scrollToTop();
  };

  const handleShowEditDirectDeposit = () => {
    setShowEditDirectDeposit(true);
    scrollToTop();
  };

  const handleBackFromEditDirectDeposit = () => {
    setShowEditDirectDeposit(false);
    scrollToTop();
  };

  const handleShowManageCards = () => {
    setShowSearchMenu(false);
    setShowManageCards(true);
    scrollToTop();
  };

  const handleBackFromManageCards = () => {
    setShowManageCards(false);
    scrollToTop();
  };

  const handleShowInstalmentPaymentsReminders = () => {
    setShowInstalmentPaymentsReminders(true);
    scrollToTop();
  };

  const handleBackFromInstalmentPaymentsReminders = () => {
    setShowInstalmentPaymentsReminders(false);
    scrollToTop();
  };

  const handleShowPaymentFrequency = () => {
    setShowPaymentFrequency(true);
    scrollToTop();
  };

  const handleBackFromPaymentFrequency = () => {
    setShowPaymentFrequency(false);
    scrollToTop();
  };

  const handleSelectPaymentFrequency = (frequency: string) => {
    setPaymentFrequency(frequency);
  };

  const handleConfirmPaymentSchedule = (data: any) => {
    // Handle the payment schedule confirmation
    // Could navigate to a success screen or back to the previous screen
    setShowInstalmentPaymentsReminders(false);
    scrollToTop();
  };

  const handleShowReminderFrequency = () => {
    setShowReminderFrequency(true);
    scrollToTop();
  };

  const handleBackFromReminderFrequency = () => {
    setShowReminderFrequency(false);
    scrollToTop();
  };

  const handleSelectReminderFrequency = (frequency: string) => {
    setReminderFrequency(frequency);
  };

  const handleShowTwoStepVerification = () => {
    setShowSearchMenu(false);
    setShowTwoStepVerification(true);
    scrollToTop();
  };

  const handleBackFromTwoStepVerification = () => {
    setShowTwoStepVerification(false);
    scrollToTop();
  };

  const handleShowChangePassword = () => {
    setShowSearchMenu(false);
    setShowLockAccount(false);
    setShowChangePassword(true);
    scrollToTop();
  };

  const handleBackFromChangePassword = () => {
    setShowChangePassword(false);
    scrollToTop();
  };

  const handleShowLanguagePreference = () => {
    setShowSearchMenu(false);
    setShowLanguagePreference(true);
    scrollToTop();
  };

  const handleBackFromLanguagePreference = () => {
    setShowLanguagePreference(false);
    scrollToTop();
  };

  const handleShowPrivacy = () => {
    setShowSearchMenu(false);
    setShowPrivacy(true);
    scrollToTop();
  };

  const handleBackFromPrivacy = () => {
    setShowPrivacy(false);
    scrollToTop();
  };

  const handleShowTerms = () => {
    setShowSearchMenu(false);
    setShowTerms(true);
    scrollToTop();
  };

  const handleBackFromTerms = () => {
    setShowTerms(false);
    scrollToTop();
  };

  const handleShowHelp = () => {
    setShowSearchMenu(false);
    setShowHelp(true);
    setShowFAQFileTaxes(false);
    setShowFAQRefund(false);
    setShowFAQMakePayment(false);
    setShowFAQUpdateAddress(false);
    setShowFAQNoticeOfAssessment(false);
    setShowNoticeOfAssessment(false);
    setShowMakePayment(false);
    setShowTaxFiling(false);
    setShowTaxFilingChanges(false);
    setShowRegisteredPlans(false);
    setShowCRAMail(false);
    setShowLiveChat(false);
    setShowTaxSlips(false);
    setShowProofOfIncome(false);
    setShowEditDirectDeposit(false);
    setShowEditName(false);
    setShowEditEmail(false);
    setShowEditPhone(false);
    setShowEditAddress(false);
    setShowInstalmentPaymentsReminders(false);
    setShowPaymentFrequency(false);
    setShowReminderFrequency(false);
    setShowAddNewDependant(false);
    setShowCustomizeHomeScreen(false);
    setShowAppVersion(false);
    scrollToTop();
  };

  const handleBackFromHelp = () => {
    setShowHelp(false);
    scrollToTop();
  };

  const handleShowAppVersion = () => {
    setShowSearchMenu(false);
    setShowAppVersion(true);
    setShowHelp(false);
    scrollToTop();
  };

  const handleBackFromAppVersion = () => {
    setShowAppVersion(false);
    setActiveScreen('profile');
    scrollToTop();
  };

  const handleNavigateToProfile = () => {
    setShowAppVersion(false);
    setShowHelp(false);
    setActiveScreen('profile');
    scrollToTop();
  };

  const handleShowCallScheduling = () => {
    setShowCallScheduling(true);
    setShowHelp(false);
    scrollToTop();
  };

  const handleBackFromCallScheduling = () => {
    setShowCallScheduling(false);
    setShowHelp(true);
    scrollToTop();
  };

  const handleShowProofOfIncome = () => {
    setShowProofOfIncome(true);
    setShowFAQFileTaxes(false);
    setShowFAQRefund(false);
    setShowFAQMakePayment(false);
    setShowFAQUpdateAddress(false);
    setShowFAQNoticeOfAssessment(false);
    setShowNoticeOfAssessment(false);
    setShowMakePayment(false);
    setShowSimplifiedMakePayment(false);
    setShowConfirmPayment(false);
    setShowCreditCardConfirmPayment(false);
    setShowPaymentSuccess(false);
    setShowCreditCardPaymentSuccess(false);
    setShowTaxFiling(false);
    setShowTaxFilingChanges(false);
    setShowRegisteredPlans(false);
    setShowLearnRegisteredPlans(false);
    setShowRRSPCalculator(false);
    setShowFHSAEligibility(false);
    setShowTFSAContributionRules(false);
    setShowCRAMail(false);
    setShowHelp(false);
    setShowLiveChat(false);
    setShowTaxSlips(false);
    setShowEditDirectDeposit(false);
    setShowEditName(false);
    setShowEditEmail(false);
    setShowEditPhone(false);
    setShowEditAddress(false);
    setShowInstalmentPaymentsReminders(false);
    setShowPaymentFrequency(false);
    setShowReminderFrequency(false);
    setShowAddNewDependant(false);
    setShowCustomizeHomeScreen(false);
    setShowAppVersion(false);
    scrollToTop();
  };

  const handleShowHomeBuyersPlan = () => {
    setShowSearchMenu(false);
    setShowProofOfIncome(false);
    setShowHomeBuyersPlan(true);
    scrollToTop();
    setShowRESPGrantPrograms(false);
    setShowCRAMail(false);
    setShowSentMessages(false);
    setShowArchive(false);
    setShowLiveChat(false);
    setShowCallScheduling(false);
    setShowTaxSlips(false);
    setShowHelp(false);
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowCalling(false);
    setShowHowToOpenFHSA(false);
    setShowFHSAQualifyingWithdrawal(false);
    setShowFHSAvsHBP(false);
    setShowViewFHSAContributionRoom(false);
    setShowViewTFSAContributionRoom(false);
    setShowCorrectTFSAOverContribution(false);
    setShowTFSAInvestorsInfo(false);
    setShowRequestWaiveTFSATax(false);
    setShowHowToOpenRESP(false);
    setShowRESPWithdrawalRules(false);
    setShowApplyCanadaLearningBond(false);
    setShowProvincialEducationSavings(false);
    setShowRepresentative(false);
    setShowInstalmentPaymentsReminders(false);
    setShowPaymentFrequency(false);
    setShowReminderFrequency(false);
    setShowAddNewDependant(false);
    setShowCustomizeHomeScreen(false);
    setShowAppVersion(false);
    scrollToTop();
  };

  const handleShowLifelongLearningPlan = () => {
    // Close all dedicated screens before showing Lifelong Learning Plan
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowGSTHSTCredit(false);
    setShowHomeBuyersPlan(false);
    setShowFHSAEligibility(false);
    setShowUncashedCheques(false);
    setShowRemittanceVoucher(false);
    setShowCPPEIRuling(false);
    setShowAuditEnquiries(false);
    setShowCarryoverAmounts(false);
    setShowChangeMyReturn(false);
    setShowProgressTrackerService(false);
    setShowReliefOfPenalties(false);
    setShowSubmitDocuments(false);
    setShowRegisterFormalDispute(false);
    setShowNonResidentAccount(false);
    setShowPersonalIdentificationNumber(false);
    setShowSearchMenu(false);
    setShowProofOfIncome(false);
    setShowTaxSlips(false);
    setShowCRAMail(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowLifelongLearningPlan(true);
    scrollToTop();
  };

  const handleShowUncashedCheques = () => {
    // Close all dedicated screens before showing Uncashed Cheques
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowGSTHSTCredit(false);
    setShowHomeBuyersPlan(false);
    setShowFHSAEligibility(false);
    setShowLifelongLearningPlan(false);
    setShowRemittanceVoucher(false);
    setShowCPPEIRuling(false);
    setShowAuditEnquiries(false);
    setShowCarryoverAmounts(false);
    setShowChangeMyReturn(false);
    setShowProgressTrackerService(false);
    setShowReliefOfPenalties(false);
    setShowSubmitDocuments(false);
    setShowRegisterFormalDispute(false);
    setShowNonResidentAccount(false);
    setShowPersonalIdentificationNumber(false);
    setShowSearchMenu(false);
    setShowProofOfIncome(false);
    setShowTaxSlips(false);
    setShowCRAMail(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowUncashedCheques(true);
    scrollToTop();
  };

  const handleBackFromUncashedCheques = () => {
    setShowUncashedCheques(false);
    scrollToTop();
  };

  const handleShowRemittanceVoucher = () => {
    // Close all dedicated screens before showing Remittance Voucher
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowGSTHSTCredit(false);
    setShowHomeBuyersPlan(false);
    setShowFHSAEligibility(false);
    setShowLifelongLearningPlan(false);
    setShowUncashedCheques(false);
    setShowCPPEIRuling(false);
    setShowAuditEnquiries(false);
    setShowCarryoverAmounts(false);
    setShowChangeMyReturn(false);
    setShowProgressTrackerService(false);
    setShowReliefOfPenalties(false);
    setShowSubmitDocuments(false);
    setShowRegisterFormalDispute(false);
    setShowNonResidentAccount(false);
    setShowPersonalIdentificationNumber(false);
    setShowSearchMenu(false);
    setShowProofOfIncome(false);
    setShowTaxSlips(false);
    setShowCRAMail(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowRemittanceVoucher(true);
    scrollToTop();
  };

  const handleBackFromRemittanceVoucher = () => {
    setShowRemittanceVoucher(false);
    scrollToTop();
  };

  const handleShowCPPEIRuling = () => {
    // Close all dedicated screens before showing CPP/EI Ruling
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowGSTHSTCredit(false);
    setShowHomeBuyersPlan(false);
    setShowFHSAEligibility(false);
    setShowLifelongLearningPlan(false);
    setShowUncashedCheques(false);
    setShowRemittanceVoucher(false);
    setShowAuditEnquiries(false);
    setShowCarryoverAmounts(false);
    setShowChangeMyReturn(false);
    setShowProgressTrackerService(false);
    setShowReliefOfPenalties(false);
    setShowSubmitDocuments(false);
    setShowRegisterFormalDispute(false);
    setShowNonResidentAccount(false);
    setShowPersonalIdentificationNumber(false);
    setShowSearchMenu(false);
    setShowProofOfIncome(false);
    setShowTaxSlips(false);
    setShowCRAMail(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowCPPEIRuling(true);
    scrollToTop();
  };

  const handleBackFromCPPEIRuling = () => {
    setShowCPPEIRuling(false);
    scrollToTop();
  };

  const handleStartCPPEIRulingForm = () => {
    setShowCPPEIRuling(false);
    setShowCPPEIRulingForm(true);
    scrollToTop();
  };

  const handleShowAuditEnquiries = () => {
    // Close all dedicated screens before showing Audit Enquiries
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowGSTHSTCredit(false);
    setShowHomeBuyersPlan(false);
    setShowFHSAEligibility(false);
    setShowLifelongLearningPlan(false);
    setShowUncashedCheques(false);
    setShowRemittanceVoucher(false);
    setShowCPPEIRuling(false);
    setShowCarryoverAmounts(false);
    setShowChangeMyReturn(false);
    setShowProgressTrackerService(false);
    setShowReliefOfPenalties(false);
    setShowSubmitDocuments(false);
    setShowRegisterFormalDispute(false);
    setShowNonResidentAccount(false);
    setShowPersonalIdentificationNumber(false);
    setShowSearchMenu(false);
    setShowProofOfIncome(false);
    setShowTaxSlips(false);
    setShowCRAMail(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowAuditEnquiries(true);
    scrollToTop();
  };

  const handleBackFromAuditEnquiries = () => {
    setShowAuditEnquiries(false);
    scrollToTop();
  };

  const handleAuditEnquiriesSubmit = () => {
    setShowAuditEnquiries(false);
    setShowAuditEnquiriesConfirmation(true);
    scrollToTop();
  };

  const handleShowRegisterFormalDispute = () => {
    // Close all dedicated screens before showing Register Formal Dispute
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowGSTHSTCredit(false);
    setShowHomeBuyersPlan(false);
    setShowFHSAEligibility(false);
    setShowLifelongLearningPlan(false);
    setShowUncashedCheques(false);
    setShowRemittanceVoucher(false);
    setShowCPPEIRuling(false);
    setShowAuditEnquiries(false);
    setShowCarryoverAmounts(false);
    setShowChangeMyReturn(false);
    setShowProgressTrackerService(false);
    setShowReliefOfPenalties(false);
    setShowSubmitDocuments(false);
    setShowNonResidentAccount(false);
    setShowPersonalIdentificationNumber(false);
    setShowSearchMenu(false);
    setShowProofOfIncome(false);
    setShowTaxSlips(false);
    setShowCRAMail(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowRegisterFormalDispute(true);
    scrollToTop();
  };

  const handleBackFromRegisterFormalDispute = () => {
    setShowRegisterFormalDispute(false);
    scrollToTop();
  };

  const handleRegisterFormalDisputeSubmit = () => {
    setShowRegisterFormalDispute(false);
    setShowRegisterFormalDisputeConfirmation(true);
    scrollToTop();
  };

  const handleShowNonResidentAccount = () => {
    // Close all dedicated screens before showing Non-Resident Account
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowGSTHSTCredit(false);
    setShowHomeBuyersPlan(false);
    setShowFHSAEligibility(false);
    setShowLifelongLearningPlan(false);
    setShowUncashedCheques(false);
    setShowRemittanceVoucher(false);
    setShowCPPEIRuling(false);
    setShowAuditEnquiries(false);
    setShowCarryoverAmounts(false);
    setShowChangeMyReturn(false);
    setShowProgressTrackerService(false);
    setShowReliefOfPenalties(false);
    setShowSubmitDocuments(false);
    setShowRegisterFormalDispute(false);
    setShowPersonalIdentificationNumber(false);
    setShowSearchMenu(false);
    setShowProofOfIncome(false);
    setShowTaxSlips(false);
    setShowCRAMail(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowNonResidentAccount(true);
    scrollToTop();
  };

  const handleBackFromNonResidentAccount = () => {
    setShowNonResidentAccount(false);
    scrollToTop();
  };

  const handleShowResidencyDetermination = () => {
    setShowNonResidentAccount(false);
    setShowResidencyDetermination(true);
    scrollToTop();
  };

  const handleBackFromResidencyDetermination = () => {
    setShowResidencyDetermination(false);
    setShowNonResidentAccount(true);
    scrollToTop();
  };

  const handleShowPersonalIdentificationNumber = () => {
    // Close all dedicated screens before showing Personal Identification Number
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowGSTHSTCredit(false);
    setShowHomeBuyersPlan(false);
    setShowFHSAEligibility(false);
    setShowLifelongLearningPlan(false);
    setShowUncashedCheques(false);
    setShowRemittanceVoucher(false);
    setShowCPPEIRuling(false);
    setShowAuditEnquiries(false);
    setShowCarryoverAmounts(false);
    setShowChangeMyReturn(false);
    setShowProgressTrackerService(false);
    setShowReliefOfPenalties(false);
    setShowSubmitDocuments(false);
    setShowRegisterFormalDispute(false);
    setShowNonResidentAccount(false);
    setShowSearchMenu(false);
    setShowProofOfIncome(false);
    setShowTaxSlips(false);
    setShowCRAMail(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowPersonalIdentificationNumber(true);
    scrollToTop();
  };

  const handleBackFromPersonalIdentificationNumber = () => {
    setShowPersonalIdentificationNumber(false);
    scrollToTop();
  };

  const handleCreatePIN = () => {
    setShowPersonalIdentificationNumber(false);
    setShowCreatePINConfirmation(true);
    scrollToTop();
  };

  const handleBackFromCreatePINConfirmation = () => {
    setShowCreatePINConfirmation(false);
    setShowPersonalIdentificationNumber(true);
    scrollToTop();
  };

  const handleShowLockAccount = () => {
    // Close all dedicated screens before showing Lock Account
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowGSTHSTCredit(false);
    setShowHomeBuyersPlan(false);
    setShowFHSAEligibility(false);
    setShowLifelongLearningPlan(false);
    setShowUncashedCheques(false);
    setShowRemittanceVoucher(false);
    setShowCPPEIRuling(false);
    setShowAuditEnquiries(false);
    setShowCarryoverAmounts(false);
    setShowChangeMyReturn(false);
    setShowProgressTrackerService(false);
    setShowReliefOfPenalties(false);
    setShowSubmitDocuments(false);
    setShowRegisterFormalDispute(false);
    setShowNonResidentAccount(false);
    setShowSearchMenu(false);
    setShowProofOfIncome(false);
    setShowTaxSlips(false);
    setShowCRAMail(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowLockAccount(true);
    scrollToTop();
  };

  const handleBackFromLockAccount = () => {
    setShowLockAccount(false);
    scrollToTop();
  };

  const handleShowTrustedDevices = () => {
    // Close all dedicated screens before showing Trusted Devices
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowGSTHSTCredit(false);
    setShowHomeBuyersPlan(false);
    setShowFHSAEligibility(false);
    setShowLifelongLearningPlan(false);
    setShowUncashedCheques(false);
    setShowRemittanceVoucher(false);
    setShowCPPEIRuling(false);
    setShowAuditEnquiries(false);
    setShowCarryoverAmounts(false);
    setShowChangeMyReturn(false);
    setShowProgressTrackerService(false);
    setShowReliefOfPenalties(false);
    setShowSubmitDocuments(false);
    setShowRegisterFormalDispute(false);
    setShowNonResidentAccount(false);
    setShowSearchMenu(false);
    setShowProofOfIncome(false);
    setShowTaxSlips(false);
    setShowCRAMail(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowTrustedDevices(true);
    scrollToTop();
  };

  const handleShowProgressTrackerService = () => {
    // Close all dedicated screens before showing Progress Tracker Service
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowGSTHSTCredit(false);
    setShowHomeBuyersPlan(false);
    setShowFHSAEligibility(false);
    setShowLifelongLearningPlan(false);
    setShowUncashedCheques(false);
    setShowRemittanceVoucher(false);
    setShowCPPEIRuling(false);
    setShowAuditEnquiries(false);
    setShowCarryoverAmounts(false);
    setShowChangeMyReturn(false);
    setShowReliefOfPenalties(false);
    setShowSubmitDocuments(false);
    setShowRegisterFormalDispute(false);
    setShowNonResidentAccount(false);
    setShowPersonalIdentificationNumber(false);
    setShowSearchMenu(false);
    setShowProofOfIncome(false);
    setShowTaxSlips(false);
    setShowCRAMail(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowProgressTrackerService(true);
    scrollToTop();
  };

  const handleBackFromProgressTrackerService = () => {
    setShowProgressTrackerService(false);
    scrollToTop();
  };

  const handleShowReliefOfPenalties = () => {
    // Close all dedicated screens before showing Relief of Penalties
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowGSTHSTCredit(false);
    setShowHomeBuyersPlan(false);
    setShowFHSAEligibility(false);
    setShowLifelongLearningPlan(false);
    setShowUncashedCheques(false);
    setShowRemittanceVoucher(false);
    setShowCPPEIRuling(false);
    setShowAuditEnquiries(false);
    setShowCarryoverAmounts(false);
    setShowChangeMyReturn(false);
    setShowProgressTrackerService(false);
    setShowSubmitDocuments(false);
    setShowRegisterFormalDispute(false);
    setShowNonResidentAccount(false);
    setShowPersonalIdentificationNumber(false);
    setShowSearchMenu(false);
    setShowProofOfIncome(false);
    setShowTaxSlips(false);
    setShowCRAMail(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowReliefOfPenalties(true);
    scrollToTop();
  };

  const handleBackFromReliefOfPenalties = () => {
    setShowReliefOfPenalties(false);
    scrollToTop();
  };

  const handleShowRequestReliefForm = () => {
    setShowReliefOfPenalties(false);
    setShowRequestReliefForm(true);
    scrollToTop();
  };

  const handleBackFromRequestReliefForm = () => {
    setShowRequestReliefForm(false);
    setShowReliefOfPenalties(true);
    scrollToTop();
  };

  const handleShowReliefRequestPDFViewer = () => {
    setShowReliefOfPenalties(false);
    setShowReliefRequestPDFViewer(true);
    scrollToTop();
  };

  const handleBackFromReliefRequestPDFViewer = () => {
    setShowReliefRequestPDFViewer(false);
    setShowReliefOfPenalties(true);
    scrollToTop();
  };

  const handleShowSubmitDocuments = () => {
    // Close all dedicated screens before showing Submit Documents
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowGSTHSTCredit(false);
    setShowHomeBuyersPlan(false);
    setShowFHSAEligibility(false);
    setShowLifelongLearningPlan(false);
    setShowUncashedCheques(false);
    setShowRemittanceVoucher(false);
    setShowCPPEIRuling(false);
    setShowAuditEnquiries(false);
    setShowCarryoverAmounts(false);
    setShowChangeMyReturn(false);
    setShowProgressTrackerService(false);
    setShowReliefOfPenalties(false);
    setShowRegisterFormalDispute(false);
    setShowNonResidentAccount(false);
    setShowPersonalIdentificationNumber(false);
    setShowSearchMenu(false);
    setShowProofOfIncome(false);
    setShowTaxSlips(false);
    setShowCRAMail(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowSubmitDocuments(true);
    scrollToTop();
  };

  const handleBackFromSubmitDocuments = () => {
    setShowSubmitDocuments(false);
    scrollToTop();
  };

  const handleShowUserFeedback = (context: string = 'Home') => {
    setFeedbackContext(context);
    setShowUserFeedback(true);
    scrollToTop();
  };

  const handleBackFromUserFeedback = () => {
    setShowUserFeedback(false);
    scrollToTop();
  };

  const handleShowCarryoverAmounts = () => {
    // Close all dedicated screens before showing Carryover Amounts
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowGSTHSTCredit(false);
    setShowHomeBuyersPlan(false);
    setShowFHSAEligibility(false);
    setShowLifelongLearningPlan(false);
    setShowUncashedCheques(false);
    setShowRemittanceVoucher(false);
    setShowCPPEIRuling(false);
    setShowAuditEnquiries(false);
    setShowChangeMyReturn(false);
    setShowProgressTrackerService(false);
    setShowReliefOfPenalties(false);
    setShowSubmitDocuments(false);
    setShowRegisterFormalDispute(false);
    setShowNonResidentAccount(false);
    setShowPersonalIdentificationNumber(false);
    setShowSearchMenu(false);
    setShowProofOfIncome(false);
    setShowTaxSlips(false);
    setShowCRAMail(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowCarryoverAmounts(true);
    scrollToTop();
  };

  const handleBackFromCarryoverAmounts = () => {
    setShowCarryoverAmounts(false);
    scrollToTop();
  };

  const handleShowCarryoverAmountRules = () => {
    setShowCarryoverAmounts(false);
    setShowCarryoverAmountRules(true);
    scrollToTop();
  };

  const handleBackFromCarryoverAmountRules = () => {
    setShowCarryoverAmountRules(false);
    setShowCarryoverAmounts(true);
    scrollToTop();
  };

  const handleShowChangeMyReturn = () => {
    // Close all dedicated screens before showing Change My Return
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowGSTHSTCredit(false);
    setShowHomeBuyersPlan(false);
    setShowFHSAEligibility(false);
    setShowLifelongLearningPlan(false);
    setShowUncashedCheques(false);
    setShowRemittanceVoucher(false);
    setShowCPPEIRuling(false);
    setShowAuditEnquiries(false);
    setShowCarryoverAmounts(false);
    setShowProgressTrackerService(false);
    setShowReliefOfPenalties(false);
    setShowSubmitDocuments(false);
    setShowRegisterFormalDispute(false);
    setShowNonResidentAccount(false);
    setShowPersonalIdentificationNumber(false);
    setShowSearchMenu(false);
    setShowProofOfIncome(false);
    setShowTaxSlips(false);
    setShowCRAMail(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowChangeMyReturn(true);
    scrollToTop();
  };

  const handleBackFromChangeMyReturn = () => {
    setShowChangeMyReturn(false);
    scrollToTop();
  };

  const handleRequestChangeReturn = (year: string) => {
    setChangeReturnYear(year);
    setShowChangeReturnForm(true);
    scrollToTop();
  };

  const handleBackFromChangeReturnForm = () => {
    setShowChangeReturnForm(false);
    scrollToTop();
  };

  const handleSubmitChangeReturn = () => {
    setShowChangeReturnForm(false);
    setShowChangeReturnConfirmation(true);
    scrollToTop();
  };

  const handleBackFromChangeReturnConfirmation = () => {
    setShowChangeReturnConfirmation(false);
    setShowChangeMyReturn(false);
    scrollToTop();
  };

  const handleBackFromCPPEIRulingForm = () => {
    setShowCPPEIRulingForm(false);
    setShowCPPEIRuling(true);
    scrollToTop();
  };

  const handleCPPEIRulingFormStep1Next = () => {
    setShowCPPEIRulingForm(false);
    setShowCPPEIRulingFormStep2New(true);
    scrollToTop();
  };

  const handleBackFromCPPEIRulingFormStep2New = () => {
    setShowCPPEIRulingFormStep2New(false);
    setShowCPPEIRulingForm(true);
    scrollToTop();
  };

  const handleCPPEIRulingFormStep2NewNext = () => {
    setShowCPPEIRulingFormStep2New(false);
    setShowCPPEIRulingFormStep2(true);
    scrollToTop();
  };

  const handleBackFromCPPEIRulingFormStep2 = () => {
    setShowCPPEIRulingFormStep2(false);
    setShowCPPEIRulingFormStep2New(true);
    scrollToTop();
  };

  const handleCPPEIRulingFormStep2Next = () => {
    setShowCPPEIRulingFormStep2(false);
    setShowCPPEIRulingFormStep3(true);
    scrollToTop();
  };

  const handleBackFromCPPEIRulingFormStep3 = () => {
    setShowCPPEIRulingFormStep3(false);
    setShowCPPEIRulingFormStep2(true);
    scrollToTop();
  };

  const handleCPPEIRulingFormStep3Next = () => {
    setShowCPPEIRulingFormStep3(false);
    setShowCPPEIRulingFormStep4(true);
    scrollToTop();
  };

  const handleBackFromCPPEIRulingFormStep4 = () => {
    setShowCPPEIRulingFormStep4(false);
    setShowCPPEIRulingFormStep3(true);
    scrollToTop();
  };

  const handleCPPEIRulingFormStep4Submit = () => {
    setShowCPPEIRulingFormStep4(false);
    setShowCPPEIRulingConfirmation(true);
    scrollToTop();
  };

  const handleBackFromCPPEIRulingConfirmation = () => {
    setShowCPPEIRulingConfirmation(false);
    setShowCPPEIRulingFormStep4(true);
    scrollToTop();
  };

  const handleCPPEIRulingStepNavigation = (step: number) => {
    // Hide all steps first
    setShowCPPEIRulingForm(false);
    setShowCPPEIRulingFormStep2New(false);
    setShowCPPEIRulingFormStep2(false);
    setShowCPPEIRulingFormStep3(false);
    setShowCPPEIRulingFormStep4(false);
    setShowCPPEIRulingConfirmation(false);

    // Show the selected step
    switch (step) {
      case 1:
        setShowCPPEIRulingForm(true);
        break;
      case 2:
        setShowCPPEIRulingFormStep2New(true);
        break;
      case 3:
        setShowCPPEIRulingFormStep2(true);
        break;
      case 4:
        setShowCPPEIRulingFormStep3(true);
        break;
      case 5:
        setShowCPPEIRulingFormStep4(true);
        break;
    }
    scrollToTop();
  };

  const handleBackFromProofOfIncome = () => {
    setShowProofOfIncome(false);
    scrollToTop();
  };

  const handleShowSignInHelp = (accordionItem?: string) => {
    setShowSignInHelp(true);
    setSignInHelpAccordionItem(accordionItem);
    scrollToTop();
  };

  const handleBackFromSignInHelp = () => {
    setShowSignInHelp(false);
    setSignInHelpAccordionItem(undefined);
    scrollToTop();
  };

  const handleShowCRAWebView = () => {
    setShowCRAWebView(true);
    scrollToTop();
  };

  const handleBackFromCRAWebView = () => {
    setShowCRAWebView(false);
    scrollToTop();
  };

  const handleShowPrivacyFromWebView = () => {
    setShowCRAWebView(false);
    setShowPrivacyFromLogin(true);
    scrollToTop();
  };

  const handleShowTermsFromWebView = () => {
    setShowCRAWebView(false);
    setShowTermsFromLogin(true);
    scrollToTop();
  };

  const handleShowHelpFromWebView = () => {
    setShowCRAWebView(false);
    setShowHelp(true);
    scrollToTop();
  };

  const handleShowPrivacyFromLogin = () => {
    setShowPrivacyFromLogin(true);
    scrollToTop();
  };

  const handleBackFromPrivacyToLogin = () => {
    setShowPrivacyFromLogin(false);
    // Check if we should return to Sign-In Partner screen
    if (showRegistrationSignInPartnerInfo) {
      setShowRegistrationSignInPartnerInfo(true);
    }
    scrollToTop();
  };

  const handleShowTermsFromLogin = () => {
    setShowTermsFromLogin(true);
    scrollToTop();
  };

  const handleBackFromTermsToLogin = () => {
    setShowTermsFromLogin(false);
    // Check if we should return to Sign-In Partner screen
    if (showRegistrationSignInPartnerInfo) {
      setShowRegistrationSignInPartnerInfo(true);
    }
    scrollToTop();
  };

  const handleShowAppVersionFromLogin = () => {
    setShowAppVersionFromLogin(true);
    scrollToTop();
  };

  const handleBackFromAppVersionToLogin = () => {
    setShowAppVersionFromLogin(false);
    scrollToTop();
  };

  const handleShowBalanceOwingDetails = () => {
    setShowBalanceOwingDetails(true);
    scrollToTop();
  };

  const handleBackFromBalanceOwingDetails = () => {
    setShowBalanceOwingDetails(false);
    scrollToTop();
  };

  const handleShowRefundDetails = () => {
    setShowSearchMenu(false);
    setShowRefundDetails(true);
    scrollToTop();
  };

  const handleBackFromRefundDetails = () => {
    setShowRefundDetails(false);
    scrollToTop();
  };

  const handleShowGSTHSTCredit = () => {
    // Close all dedicated screens before showing GST/HST Credit
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowHomeBuyersPlan(false);
    setShowFHSAEligibility(false);
    setShowLifelongLearningPlan(false);
    setShowUncashedCheques(false);
    setShowRemittanceVoucher(false);
    setShowCPPEIRuling(false);
    setShowAuditEnquiries(false);
    setShowCarryoverAmounts(false);
    setShowChangeMyReturn(false);
    setShowProgressTrackerService(false);
    setShowReliefOfPenalties(false);
    setShowSubmitDocuments(false);
    setShowRegisterFormalDispute(false);
    setShowNonResidentAccount(false);
    setShowPersonalIdentificationNumber(false);
    setShowSearchMenu(false);
    setShowProofOfIncome(false);
    setShowTaxSlips(false);
    setShowCRAMail(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowGSTHSTCredit(true);
    scrollToTop();
  };

  const handleBackFromGSTHSTCredit = () => {
    setShowGSTHSTCredit(false);
    scrollToTop();
  };

  const handleShowAccountDetails = () => {
    // Close all dedicated screens before showing Account Details
    setShowRefundDetails(false);
    setShowAllBenefits(false);
    setShowGSTHSTCredit(false);
    setShowHomeBuyersPlan(false);
    setShowFHSAEligibility(false);
    setShowLifelongLearningPlan(false);
    setShowUncashedCheques(false);
    setShowRemittanceVoucher(false);
    setShowCPPEIRuling(false);
    setShowAuditEnquiries(false);
    setShowCarryoverAmounts(false);
    setShowChangeMyReturn(false);
    setShowProgressTrackerService(false);
    setShowReliefOfPenalties(false);
    setShowSubmitDocuments(false);
    setShowRegisterFormalDispute(false);
    setShowNonResidentAccount(false);
    setShowPersonalIdentificationNumber(false);
    setShowSearchMenu(false);
    setShowProofOfIncome(false);
    setShowTaxSlips(false);
    setShowCRAMail(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowBalanceOwingDetails(true);
    scrollToTop();
  };

  const handleShowAllBenefits = () => {
    setShowAllBenefits(true);
    setShowMakePayment(false);
    setShowConfirmPayment(false);
    setShowPaymentSuccess(false);
    setShowTaxFiling(false);
    setShowTaxFilingChanges(false);
    setShowNoticeOfAssessment(false);
    setShowRegisteredPlans(false);
    setShowLearnRegisteredPlans(false);
    setShowRRSPCalculator(false);
    setShowFHSAEligibility(false);
    setShowTFSAContributionRules(false);
    setShowRESPGrantPrograms(false);
    setShowHowToOpenFHSA(false);
    setShowFHSAQualifyingWithdrawal(false);
    setShowFHSAvsHBP(false);
    setShowViewFHSAContributionRoom(false);
    setShowViewTFSAContributionRoom(false);
    setShowCorrectTFSAOverContribution(false);
    setShowTFSAInvestorsInfo(false);
    setShowRequestWaiveTFSATax(false);
    setShowHowToOpenRESP(false);
    setShowRESPWithdrawalRules(false);
    setShowApplyCanadaLearningBond(false);
    setShowProvincialEducationSavings(false);
    setShowRepresentative(false);
    setShowCRAMail(false);
    setShowSentMessages(false);
    setShowArchive(false);
    setShowTaxSlips(false);
    setShowProofOfIncome(false);
    setShowBalanceOwingDetails(false);
    setShowRefundDetails(false);
    setShowHelp(false);
    setShowFAQFileTaxes(false);
    setShowFAQRefund(false);
    setShowFAQMakePayment(false);
    setShowFAQUpdateAddress(false);
    setShowFAQNoticeOfAssessment(false);
    setShowLiveChat(false);
    setShowEditDirectDeposit(false);
    setShowEditName(false);
    setShowEditEmail(false);
    setShowEditPhone(false);
    setShowEditAddress(false);
    setShowInstalmentPaymentsReminders(false);
    setShowPaymentFrequency(false);
    setShowReminderFrequency(false);
    setShowAddNewDependant(false);
    setShowCustomizeHomeScreen(false);
    setShowAppVersion(false);
    scrollToTop();
  };

  const handleShowTaxReturns = () => {
    setActiveScreen('returns');
    scrollToTop();
  };

  const handleShowFAQFileTaxes = () => {
    setShowHelp(false);
    setShowFAQFileTaxes(true);
    setShowNoticeOfAssessment(false);
    setShowMakePayment(false);
    setShowTaxFiling(false);
    setShowRegisteredPlans(false);
    setShowCRAMail(false);
    scrollToTop();
  };

  const handleBackFromFAQFileTaxes = () => {
    setShowFAQFileTaxes(false);
    setShowHelp(true);
    scrollToTop();
  };

  const handleShowFAQRefund = () => {
    setShowHelp(false);
    setShowFAQRefund(true);
    setShowNoticeOfAssessment(false);
    setShowMakePayment(false);
    setShowTaxFiling(false);
    setShowRegisteredPlans(false);
    setShowCRAMail(false);
    scrollToTop();
  };

  const handleBackFromFAQRefund = () => {
    setShowFAQRefund(false);
    setShowHelp(true);
    scrollToTop();
  };

  const handleShowFAQMakePayment = () => {
    setShowHelp(false);
    setShowFAQMakePayment(true);
    setShowNoticeOfAssessment(false);
    setShowMakePayment(false);
    setShowTaxFiling(false);
    setShowRegisteredPlans(false);
    setShowCRAMail(false);
    scrollToTop();
  };

  const handleBackFromFAQMakePayment = () => {
    setShowFAQMakePayment(false);
    setShowHelp(true);
    scrollToTop();
  };

  const handleShowFAQUpdateAddress = () => {
    setShowHelp(false);
    setShowFAQUpdateAddress(true);
    setShowEditAddress(false);
    setShowNoticeOfAssessment(false);
    setShowMakePayment(false);
    setShowTaxFiling(false);
    setShowRegisteredPlans(false);
    setShowCRAMail(false);
    scrollToTop();
  };

  const handleBackFromFAQUpdateAddress = () => {
    setShowFAQUpdateAddress(false);
    setShowHelp(true);
    scrollToTop();
  };

  const handleShowFAQNoticeOfAssessment = () => {
    setShowHelp(false);
    setShowFAQNoticeOfAssessment(true);
    setShowNoticeOfAssessment(false);
    setShowEditAddress(false);
    setShowMakePayment(false);
    setShowTaxFiling(false);
    setShowRegisteredPlans(false);
    setShowCRAMail(false);
    scrollToTop();
  };

  const handleBackFromFAQNoticeOfAssessment = () => {
    setShowFAQNoticeOfAssessment(false);
    setShowHelp(true);
    scrollToTop();
  };

  const handleShowLiveChat = () => {
    setLiveChatInitialTab('agent');
    setShowHelp(false);
    setShowLiveChat(true);
    scrollToTop();
  };

  const handleShowAIChat = () => {
    // First hide help and set the tab
    setShowHelp(false);
    setShowLiveChat(false); // Ensure it's unmounted first
    setLiveChatInitialTab('ai');
    
    // Then show LiveChat in next tick to ensure state is updated
    setTimeout(() => {
      setShowLiveChat(true);
      scrollToTop();
    }, 0);
  };

  const handleBackFromLiveChat = () => {
    setShowLiveChat(false);
    setShowHelp(true);
    scrollToTop();
  };

  const handleSaveChatToMail = () => {
    setShowLiveChat(false);
    setShowCRAMail(true);
    setHasSavedChat(true);
    scrollToTop();
  };

  const handleBackFromAllBenefits = () => {
    setShowAllBenefits(false);
    scrollToTop();
  };

  const handleShowCalling = (phoneNumber: string, label: string = 'CRA') => {
    setCallingNumber(phoneNumber);
    setCallingLabel(label);
    setShowCalling(true);
    scrollToTop();
  };

  const handleEndCall = () => {
    setShowCalling(false);
    setCallingNumber('');
    setCallingLabel('');
  };

  const handleShowTaxSlips = () => {
    setShowTaxSlips(true);
    setShowMakePayment(false);
    setShowConfirmPayment(false);
    setShowPaymentSuccess(false);
    setShowTaxFiling(false);
    setShowTaxFilingChanges(false);
    setShowNoticeOfAssessment(false);
    setShowCRAMail(false);
    setShowRegisteredPlans(false);
    setShowFAQFileTaxes(false);
    setShowFAQRefund(false);
    setShowFAQMakePayment(false);
    setShowFAQUpdateAddress(false);
    setShowFAQNoticeOfAssessment(false);
    setShowHelp(false);
    setShowLiveChat(false);
    setShowProofOfIncome(false);
    setShowEditDirectDeposit(false);
    setShowEditName(false);
    setShowEditEmail(false);
    setShowEditPhone(false);
    setShowEditAddress(false);
    setShowInstalmentPaymentsReminders(false);
    setShowPaymentFrequency(false);
    setShowReminderFrequency(false);
    setShowAddNewDependant(false);
    setShowCustomizeHomeScreen(false);
    setShowAppVersion(false);
    scrollToTop();
  };

  const handleBackFromTaxSlips = () => {
    setShowTaxSlips(false);
    setOpenNoticeOfAssessmentOnMount(false);
    scrollToTop();
  };

  const handleSwapMostRequested = (sourceIndex: number, targetIndex: number) => {
    // If customizedMostRequested is empty, initialize it with default actions first
    const defaultQuickActions = [
      { icon: Mail, label: 'CRA mail', id: 'mail', type: 'lucide' as const },
      { icon: Gift, label: 'Benefits and credits', id: 'benefits-credits', type: 'lucide' as const },
      { icon: null, label: 'Registered plans', id: 'registered-plans', type: 'image' as const, imageSrc: mapleLeafIcon },
      { icon: CreditCard, label: 'Make a payment', id: 'make-payment', type: 'lucide' as const },
    ];
    
    const workingArray = customizedMostRequested.length === 0 ? defaultQuickActions : customizedMostRequested;
    const newMostRequested = [...workingArray];
    const temp = newMostRequested[sourceIndex];
    newMostRequested[sourceIndex] = newMostRequested[targetIndex];
    newMostRequested[targetIndex] = temp;
    setCustomizedMostRequested(newMostRequested);
  };

  // Debug: Track navigation and add back handler
  // Show calling screen (highest priority - overlays everything)
  if (showCalling) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <IPhoneCallingScreen 
              phoneNumber={callingNumber}
              label={callingLabel}
              onEndCall={handleEndCall}
            />
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  // Show Icon Exploration screen
  if (showIconExploration) {
    return (
      <>
        <Toaster position="top-center" />
        <IPhoneMockup showNotch={false}>
          <AnimatePresence mode="wait">
            <ScreenTransition transitionKey={screenKey}>
              <CRAIconExplorationScreen 
                onBack={() => {
                  setShowIconExploration(false);
                  setShowHomeScreen(true);
                  setScreenKey(prev => prev + 1);
                }}
              />
            </ScreenTransition>
          </AnimatePresence>
        </IPhoneMockup>
      </>
    );
  }

  // Show iPhone home screen first
  if (showHomeScreen) {
    return (
      <>
        <Toaster position="top-center" />
        <IPhoneMockup showNotch={false}>
          <AnimatePresence mode="wait">
            <ScreenTransition transitionKey={screenKey}>
              <HomeScreenIPhone onOpenCRAApp={handleOpenCRAApp} onOpenSettings={handleRestoreFromHomeScreen} onOpenIconExploration={handleOpenIconExploration} />
            </ScreenTransition>
          </AnimatePresence>
        </IPhoneMockup>
      </>
    );
  }

  // Show launch screen after CRA app is opened with fade to login
  if (showLaunchScreen || (!isLoggedIn && !showSignInHelp && !showCRAMail && !showPrivacyFromLogin && !showTermsFromLogin && !showAppVersionFromLogin && !showCRAWebView && !showRegistrationIntro && !showRegistrationIDPhoto && !showPhotoLibrary && !showRegistrationMethodChoice && !showRegistrationSignInPartnerInfo && !showRegistrationPersonalInfo && !showRegistrationAddress && !showRegistrationContact && !showRegistrationSecurity && !showRegistrationVerification && !showRegistrationSuccess)) {
    return (
      <>
        <Toaster position="top-center" />
        <IPhoneMockup showNotch={false}>
          <AnimatePresence mode="wait">
            {showLaunchScreen ? (
              <LaunchScreen key="launch" />
            ) : (
              <LoginScreen 
                key="login"
                onLogin={handleLogin} 
                onShowSignInHelp={handleShowSignInHelp} 
                onShowPrivacy={handleShowPrivacyFromLogin} 
                onShowTerms={handleShowTermsFromLogin} 
                onShowWebView={handleShowCRAWebView}
                onBackToHomeScreen={handleBackToHomeScreen}
                onShowHelp={handleShowHelp}
                onShowAppVersion={handleShowAppVersionFromLogin}
                onStartRegistration={handleStartRegistration}
              />
            )}
          </AnimatePresence>
        </IPhoneMockup>
      </>
    );
  }

  if (!isLoggedIn) {
    // Check for CRAMail first so it can be accessed from SignInHelp
    if (showCRAMail) {
      return (
        <IPhoneMockup>
          <AnimatePresence mode="wait">
            <ScreenTransition transitionKey={screenKey}>
              <div className="h-full bg-[#F2F2F2] flex flex-col">
                <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                  <CRAMailScreen 
                    onBack={handleBackFromCRAMail} 
                    onNavigateHome={handleReturnHome} 
                    onViewNoticeOfAssessment={() => {
                      setShowCRAMail(false);
                      handleViewNoticeOfAssessment();
                      scrollToTop();
                    }}
                    onViewMail={handleShowCRAMail} 
                    noticeOfAssessmentRead={noticeOfAssessmentRead}
                    onMarkNoticeAsRead={handleMarkNoticeAsRead}
                    onFileTaxes={() => {
                      setShowCRAMail(false);
                      handleStartFiling();
                      scrollToTop();
                    }}
                    onMakePayment={() => {
                      setShowCRAMail(false);
                      handleShowSimplifiedMakePayment();
                      scrollToTop();
                    }}
                    onBenefitsAndCredits={() => {
                      setShowCRAMail(false);
                      handleShowAllBenefits();
                      scrollToTop();
                    }}
                    onRegisteredPlans={() => {
                      setShowCRAMail(false);
                      handleShowRegisteredPlans();
                      scrollToTop();
                    }}
                    onHelp={() => {
                      setShowCRAMail(false);
                      handleShowHelp();
                      scrollToTop();
                    }}
                    hasSavedChat={hasSavedChat}
                    onSignOut={handleLogout}
                    onTaxSlips={() => {
                      setShowCRAMail(false);
                      setOpenNoticeOfAssessmentOnMount(true);
                      handleShowTaxSlips();
                      scrollToTop();
                    }}
                    onProofOfIncome={() => {
                      setShowCRAMail(false);
                      handleShowProofOfIncome();
                      scrollToTop();
                    }}
                    showComposeOnMount={showCRAMailCompose}
                    onViewSentMessages={() => {
                      setShowCRAMail(false);
                      setShowSentMessages(true);
                    }}
                    onSendMessage={(message) => {
                      const newMessage = {
                        ...message,
                        id: `sent-${Date.now()}`
                      };
                      setSentMessages([newMessage, ...sentMessages]);
                    }}
                    sentMessagesCount={sentMessages.length}
                    onArchiveMessage={handleArchiveInboxMessage}
                    onViewArchive={handleShowArchive}
                    archivedCount={archivedMessages.length}
                    initialComposeTo={initialMailTo}
                    initialComposeSubject={initialMailSubject}
                    onMessageSentWhenNotLoggedIn={handleMessageSentFromSignInHelp}
                    onViewAllBenefits={() => {
                      setShowCRAMail(false);
                      handleShowAllBenefits();
                      scrollToTop();
                    }}
                    onViewRefundDetails={() => {
                      setShowCRAMail(false);
                      handleShowRefundDetails();
                      scrollToTop();
                    }}
                    onGSTHSTCredit={() => {
                      setShowCRAMail(false);
                      handleShowGSTHSTCredit();
                      scrollToTop();
                    }}
                    onAccountDetails={() => {
                      setShowCRAMail(false);
                      handleShowAccountDetails();
                      scrollToTop();
                    }}
                    onProfile={() => {
                      setShowCRAMail(false);
                      handleShowProfile();
                      scrollToTop();
                    }}
                    onViewTaxReturns={() => {
                      setShowCRAMail(false);
                      handleShowTaxReturns();
                      scrollToTop();
                    }}
                    onHomeBuyersPlan={() => {
                      setShowCRAMail(false);
                      handleShowHomeBuyersPlan();
                      scrollToTop();
                    }}
                    onFHSAEligibility={() => {
                      setShowCRAMail(false);
                      handleShowFHSAEligibility();
                      scrollToTop();
                    }}
                    onLifelongLearningPlan={() => {
                      setShowCRAMail(false);
                      handleShowLifelongLearningPlan();
                      scrollToTop();
                    }}
                    onCustomize={() => {
                      setShowCRAMail(false);
                      handleShowCustomizeHomeScreen();
                      scrollToTop();
                    }}
                    onUncashedCheques={() => {
                      setShowCRAMail(false);
                      handleShowUncashedCheques();
                      scrollToTop();
                    }}
                    onBecomeRepresentative={() => {
                      setShowCRAMail(false);
                      handleShowBecomeRepresentative();
                      scrollToTop();
                    }}
                    onBecomeRepresentativeAsRep={() => {
                      setShowCRAMail(false);
                      handleBecomeRepresentativeAsRep();
                      scrollToTop();
                    }}
                    onRemittanceVoucher={() => {
                      setShowCRAMail(false);
                      handleShowRemittanceVoucher();
                      scrollToTop();
                    }}
                    onCPPEIRuling={() => {
                      setShowCRAMail(false);
                      handleShowCPPEIRuling();
                      scrollToTop();
                    }}
                    onAuditEnquiries={() => {
                      setShowCRAMail(false);
                      handleShowAuditEnquiries();
                      scrollToTop();
                    }}
                    onCarryoverAmounts={() => {
                      setShowCRAMail(false);
                      handleShowCarryoverAmounts();
                      scrollToTop();
                    }}
                    onChangeMyReturn={() => {
                      setShowCRAMail(false);
                      handleShowChangeMyReturn();
                      scrollToTop();
                    }}
                    onRegisterFormalDispute={() => {
                      setShowCRAMail(false);
                      handleShowRegisterFormalDispute();
                      scrollToTop();
                    }}
                    onNonResidentAccount={() => {
                      setShowCRAMail(false);
                      handleShowNonResidentAccount();
                      scrollToTop();
                    }}
                    onResidencyDetermination={() => {
                      setShowCRAMail(false);
                      handleShowResidencyDetermination();
                      scrollToTop();
                    }}
                    onPersonalIdentificationNumber={() => {
                      setShowCRAMail(false);
                      handleShowPersonalIdentificationNumber();
                      scrollToTop();
                    }}
                    onProgressTrackerService={() => {
                      setShowCRAMail(false);
                      handleShowProgressTrackerService();
                      scrollToTop();
                    }}
                    onReliefOfPenalties={() => {
                      setShowCRAMail(false);
                      handleShowReliefOfPenalties();
                      scrollToTop();
                    }}
                    onSubmitDocuments={() => {
                      setShowCRAMail(false);
                      handleShowSubmitDocuments();
                      scrollToTop();
                    }}
                    onUserFeedback={() => {
                      setShowCRAMail(false);
                      handleShowUserFeedback('CRA Mail');
                      scrollToTop();
                    }}
                  />
                </div>
              </div>
            </ScreenTransition>
          </AnimatePresence>
        </IPhoneMockup>
      );
    }

    if (showSignInHelp) {
      return (
        <IPhoneMockup>
          <AnimatePresence mode="wait">
            <ScreenTransition transitionKey={screenKey}>
              <div className="h-full bg-[#F2F2F2] flex flex-col">
                <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                  <SignInHelpScreen 
                    onBack={handleBackFromSignInHelp} 
                    defaultAccordionItem={signInHelpAccordionItem} 
                    onCall={handleShowCalling} 
                    onSendMessage={handleSendMessage}
                    onNavigateHome={handleBackToHomeScreen}
                    onViewMail={handleShowCRAMail}
                    onFileTaxes={handleStartFiling}
                    onMakePayment={handleShowSimplifiedMakePayment}
                    onBenefitsAndCredits={handleShowAllBenefits}
                    onRegisteredPlans={handleShowRegisteredPlans}
                    onHelp={handleShowHelp}
                    onSignOut={handleBackToHomeScreen}
                    onTaxSlips={handleShowTaxSlips}
                    onProofOfIncome={handleShowProofOfIncome}
                  />
                </div>
              </div>
            </ScreenTransition>
          </AnimatePresence>
        </IPhoneMockup>
      );
    }

    if (showPrivacyFromLogin) {
      return (
        <IPhoneMockup>
          <AnimatePresence mode="wait">
            <ScreenTransition transitionKey={screenKey}>
              <div className="h-full bg-[#F2F2F2] flex flex-col">
                <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                  <PrivacyScreen onBack={handleBackFromPrivacyToLogin} />
                </div>
              </div>
            </ScreenTransition>
          </AnimatePresence>
        </IPhoneMockup>
      );
    }

    if (showTermsFromLogin) {
      return (
        <IPhoneMockup>
          <AnimatePresence mode="wait">
            <ScreenTransition transitionKey={screenKey}>
              <div className="h-full bg-[#F2F2F2] flex flex-col">
                <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                  <TermsScreen onBack={handleBackFromTermsToLogin} />
                </div>
              </div>
            </ScreenTransition>
          </AnimatePresence>
        </IPhoneMockup>
      );
    }

    if (showAppVersionFromLogin) {
      return (
        <IPhoneMockup>
          <AnimatePresence mode="wait">
            <ScreenTransition transitionKey={screenKey}>
              <div className="h-full bg-[#F2F2F2] flex flex-col">
                <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                  <AppVersionScreen onBack={handleBackFromAppVersionToLogin} />
                </div>
              </div>
            </ScreenTransition>
          </AnimatePresence>
        </IPhoneMockup>
      );
    }

    if (showCRAWebView) {
      return (
        <IPhoneMockup>
          <AnimatePresence mode="wait">
            <ScreenTransition transitionKey={screenKey}>
              <div className="h-full bg-[#F2F2F2] flex flex-col">
                <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                  <CRAWebViewScreen 
                    onBack={handleBackFromCRAWebView}
                    onShowPrivacy={handleShowPrivacyFromWebView}
                    onShowTerms={handleShowTermsFromWebView}
                    onShowHelp={handleShowHelpFromWebView}
                  />
                </div>
              </div>
            </ScreenTransition>
          </AnimatePresence>
        </IPhoneMockup>
      );
    }

    // Registration Flow
    if (showRegistrationIntro) {
      return (
        <IPhoneMockup>
          <AnimatePresence mode="wait">
            <ScreenTransition transitionKey={screenKey}>
              {registrationVerificationType === 'mail' ? (
                <RegistrationIntroMailScreen 
                  onStart={handleRegistrationIntroStart}
                  onBack={handleRegistrationIntroBack}
                  onShowHelp={handleShowHelpFromRegistration}
                />
              ) : (
                <RegistrationIntroScreen 
                  onStart={handleRegistrationIntroStart}
                  onBack={handleRegistrationIntroBack}
                  onShowHelp={handleShowHelpFromRegistration}
                />
              )}
            </ScreenTransition>
          </AnimatePresence>
        </IPhoneMockup>
      );
    }

    if (showRegistrationIDPhoto) {
      return (
        <IPhoneMockup>
          <AnimatePresence mode="wait">
            <ScreenTransition transitionKey={screenKey}>
              <RegistrationIDPhotoScreen 
                onContinue={handleRegistrationIDPhotoNext}
                onBack={handleRegistrationIDPhotoBack}
                onShowHelp={handleShowHelpFromRegistration}
                onChooseFromLibrary={handleChooseFromLibrary}
                startWithPhotoCaptured={photoLibraryComplete}
              />
            </ScreenTransition>
          </AnimatePresence>
        </IPhoneMockup>
      );
    }

    if (showPhotoLibrary) {
      return (
        <IPhoneMockup>
          <AnimatePresence mode="wait">
            <ScreenTransition transitionKey={screenKey}>
              <PhotoLibraryScreen 
                onBack={handlePhotoLibraryBack}
                onSelect={handlePhotoLibrarySelect}
              />
            </ScreenTransition>
          </AnimatePresence>
        </IPhoneMockup>
      );
    }

    if (showRegistrationMethodChoice) {
      return (
        <IPhoneMockup>
          <AnimatePresence mode="wait">
            <ScreenTransition transitionKey={screenKey}>
              <RegistrationMethodChoiceScreen 
                onSelectMethod={handleRegistrationMethodSelect}
                onBack={handleRegistrationMethodChoiceBack}
                onShowSignInPartnerInfo={handleShowSignInPartnerInfo}
                onShowHelp={handleShowHelpFromRegistration}
              />
            </ScreenTransition>
          </AnimatePresence>
        </IPhoneMockup>
      );
    }

    if (showRegistrationSignInPartnerInfo) {
      return (
        <IPhoneMockup>
          <AnimatePresence mode="wait">
            <ScreenTransition transitionKey={screenKey}>
              <RegistrationSignInPartnerInfoScreen 
                onBack={handleRegistrationSignInPartnerInfoBack}
                onSelectBank={handleRegistrationSignInPartnerSelectBank}
                onShowPrivacy={handleShowPrivacyFromSignInPartner}
                onShowTerms={handleShowTermsFromSignInPartner}
                onShowHelp={handleShowHelpFromRegistration}
              />
            </ScreenTransition>
          </AnimatePresence>
        </IPhoneMockup>
      );
    }

    if (showRegistrationPersonalInfo) {
      return (
        <IPhoneMockup>
          <AnimatePresence mode="wait">
            <ScreenTransition transitionKey={screenKey}>
              <RegistrationPersonalInfoScreen 
                onNext={handleRegistrationPersonalInfoNext}
                onBack={handleRegistrationPersonalInfoBack}
                onShowHelp={handleShowHelpFromRegistration}
                onStepClick={handleRegistrationStepClick}
              />
            </ScreenTransition>
          </AnimatePresence>
        </IPhoneMockup>
      );
    }

    if (showRegistrationAddress) {
      return (
        <IPhoneMockup>
          <AnimatePresence mode="wait">
            <ScreenTransition transitionKey={screenKey}>
              <RegistrationAddressScreen 
                onNext={handleRegistrationAddressNext}
                onBack={handleRegistrationAddressBack}
                onShowHelp={handleShowHelpFromRegistration}
                onStepClick={handleRegistrationStepClick}
              />
            </ScreenTransition>
          </AnimatePresence>
        </IPhoneMockup>
      );
    }

    if (showRegistrationContact) {
      return (
        <IPhoneMockup>
          <AnimatePresence mode="wait">
            <ScreenTransition transitionKey={screenKey}>
              <RegistrationContactScreen 
                onNext={handleRegistrationContactNext}
                onBack={handleRegistrationContactBack}
                onShowHelp={handleShowHelpFromRegistration}
                onStepClick={handleRegistrationStepClick}
              />
            </ScreenTransition>
          </AnimatePresence>
        </IPhoneMockup>
      );
    }

    if (showRegistrationSecurity) {
      return (
        <IPhoneMockup>
          <AnimatePresence mode="wait">
            <ScreenTransition transitionKey={screenKey}>
              <RegistrationSecurityScreen 
                onNext={handleRegistrationSecurityNext}
                onBack={handleRegistrationSecurityBack}
                onShowHelp={handleShowHelpFromRegistration}
                onStepClick={handleRegistrationStepClick}
              />
            </ScreenTransition>
          </AnimatePresence>
        </IPhoneMockup>
      );
    }

    if (showRegistrationVerification) {
      return (
        <IPhoneMockup>
          <AnimatePresence mode="wait">
            <ScreenTransition transitionKey={screenKey}>
              <RegistrationVerificationScreen 
                email={registrationData.contact?.email || ''}
                phone={registrationData.contact?.phone || ''}
                onVerify={handleRegistrationVerify}
                onBack={handleRegistrationVerificationBack}
                onShowHelp={handleShowHelpFromRegistration}
                onStepClick={handleRegistrationStepClick}
              />
            </ScreenTransition>
          </AnimatePresence>
        </IPhoneMockup>
      );
    }

    if (showRegistrationSuccess) {
      return (
        <IPhoneMockup>
          <AnimatePresence mode="wait">
            <ScreenTransition transitionKey={screenKey}>
              <RegistrationSuccessScreen 
                onContinue={handleRegistrationComplete}
                verificationType={registrationVerificationType}
              />
            </ScreenTransition>
          </AnimatePresence>
        </IPhoneMockup>
      );
    }
  }

  // FAQ Screens - check these before other screens to prevent conflicts
  if (showFAQFileTaxes) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <FAQFileTaxesScreen 
                  onBack={handleBackFromFAQFileTaxes} 
                  onViewMail={() => {
                    setShowFAQFileTaxes(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={() => {
                    setShowFAQFileTaxes(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowFAQFileTaxes(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowFAQFileTaxes(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowFAQFileTaxes(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowFAQFileTaxes(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowFAQFileTaxes(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowFAQFileTaxes(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowFAQFileTaxes(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowFAQFileTaxes(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowFAQFileTaxes(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowFAQFileTaxes(false);
                    handleShowBalanceOwingDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowFAQFileTaxes(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowFAQFileTaxes(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowFAQFileTaxes(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowFAQFileTaxes(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowFAQFileTaxes(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowFAQFileTaxes(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowFAQFileTaxes(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowFAQFileTaxes(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowFAQFileTaxes(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowFAQFileTaxes(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowFAQFileTaxes(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowFAQFileTaxes(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowFAQFileTaxes(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowFAQFileTaxes(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowFAQFileTaxes(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowFAQFileTaxes(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowFAQFileTaxes(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowFAQFileTaxes(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowFAQFileTaxes(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowFAQFileTaxes(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowFAQFileTaxes(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                  onSearchClick={() => setShowSearchMenu(true)}
                  onPersonalClick={() => {
                    setAccountType('personal');
                    setShowFAQFileTaxes(false);
                    handleReturnHome();
                  }}
                  onBusinessClick={() => {
                    setAccountType('business');
                    setShowFAQFileTaxes(false);
                    handleShowBusinessHome();
                  }}
                  onRepresentativeClick={() => {
                    setAccountType('representative');
                    setShowFAQFileTaxes(false);
                    handleShowRepresentativeHome();
                  }}
                  activeAccountType={accountType}
                  hasUnreadMail={hasUnreadMail}
                  onViewAllBenefits={() => {
                    setShowFAQFileTaxes(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showFAQRefund) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <FAQRefundScreen 
                  onBack={handleBackFromFAQRefund} 
                  onViewMail={() => {
                    setShowFAQRefund(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={() => {
                    setShowFAQRefund(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowFAQRefund(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowFAQRefund(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowFAQRefund(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowFAQRefund(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowFAQRefund(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowFAQRefund(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowFAQRefund(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowFAQRefund(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowFAQRefund(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowFAQRefund(false);
                    handleShowBalanceOwingDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowFAQRefund(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowFAQRefund(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowFAQRefund(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowFAQRefund(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowFAQRefund(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowFAQRefund(false);
                    handleShowBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowFAQRefund(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowFAQRefund(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowFAQRefund(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowFAQRefund(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowFAQRefund(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowFAQRefund(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowFAQRefund(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowFAQRefund(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowFAQRefund(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowFAQRefund(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowFAQRefund(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowFAQRefund(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowFAQRefund(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowFAQRefund(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowFAQRefund(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showFAQMakePayment) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <FAQMakePaymentScreen 
                  onBack={handleBackFromFAQMakePayment} 
                  onViewMail={() => {
                    setShowFAQMakePayment(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onNavigateHome={handleReturnHome}
                  onMakePayment={() => {
                    setShowFAQMakePayment(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowFAQMakePayment(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowFAQMakePayment(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowFAQMakePayment(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowFAQMakePayment(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowFAQMakePayment(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowFAQMakePayment(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowFAQMakePayment(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowFAQMakePayment(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowFAQMakePayment(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowFAQMakePayment(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowFAQMakePayment(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowFAQMakePayment(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowFAQMakePayment(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowFAQMakePayment(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowFAQMakePayment(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowFAQMakePayment(false);
                    handleShowBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowFAQMakePayment(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowFAQMakePayment(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowFAQMakePayment(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowFAQMakePayment(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowFAQMakePayment(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowFAQMakePayment(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowFAQMakePayment(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowFAQMakePayment(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowFAQMakePayment(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowFAQMakePayment(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowFAQMakePayment(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowFAQMakePayment(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowFAQMakePayment(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowFAQMakePayment(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowFAQMakePayment(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showFAQUpdateAddress) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <FAQUpdateAddressScreen 
                  onBack={handleBackFromFAQUpdateAddress} 
                  onViewMail={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onNavigateHome={handleReturnHome}
                  onEditAddress={handleShowEditAddress}
                  onFileTaxes={() => {
                    setShowFAQUpdateAddress(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowFAQUpdateAddress(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowFAQUpdateAddress(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showFAQNoticeOfAssessment) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <FAQNoticeOfAssessmentScreen 
                  onBack={handleBackFromFAQNoticeOfAssessment} 
                  onViewMail={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onNavigateHome={handleReturnHome}
                  onViewNoticeOfAssessment={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowFAQNoticeOfAssessment(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showLiveChat) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <LiveChatScreen 
                  key={`livechat-${liveChatInitialTab}`}
                  onBack={handleBackFromLiveChat} 
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSaveChatToMail={handleSaveChatToMail}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onSearchClick={() => setShowSearchMenu(true)}
                  initialTab={liveChatInitialTab}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onBecomeRepresentative={handleShowBecomeRepresentative}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentativeAsRep={() => {
                    setShowLiveChat(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showPaymentSuccess) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <PaymentSuccessScreen 
                  paymentAmount={paymentData.amount}
                  selectedAccount={paymentData.selectedAccount}
                  paymentDate={paymentData.paymentDate}
                  paymentMethod={paymentData.paymentMethod}
                  onGoHome={handleReturnHomeAfterPayment}
                  onDownloadReceipt={() => {}}
                  onViewMail={() => {
                    setShowPaymentSuccess(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={() => {
                    setShowPaymentSuccess(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowPaymentSuccess(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowPaymentSuccess(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowPaymentSuccess(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowPaymentSuccess(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowPaymentSuccess(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={() => {
                    setShowPaymentSuccess(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowPaymentSuccess(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowPaymentSuccess(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowPaymentSuccess(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowPaymentSuccess(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowPaymentSuccess(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowPaymentSuccess(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowPaymentSuccess(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowPaymentSuccess(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowPaymentSuccess(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowPaymentSuccess(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowPaymentSuccess(false);
                    handleBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowPaymentSuccess(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowPaymentSuccess(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showCreditCardPaymentSuccess) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <CreditCardPaymentSuccessScreen 
                  paymentAmount={paymentData.amount}
                  selectedPaymentMethod={paymentData.paymentMethod as 'visa' | 'mastercard'}
                  onReturnHome={handleReturnHomeAfterPayment}
                  onExitApp={handleExitApp}
                  onViewMail={() => {
                    setShowCreditCardPaymentSuccess(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={() => {
                    setShowCreditCardPaymentSuccess(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowCreditCardPaymentSuccess(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowCreditCardPaymentSuccess(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowCreditCardPaymentSuccess(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowCreditCardPaymentSuccess(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowCreditCardPaymentSuccess(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showConfirmPayment) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <ConfirmPaymentScreen 
                  onBack={handleBackFromConfirm}
                  onConfirmPayment={handleConfirmPayment}
                  paymentData={{
                    amount: paymentData.amount,
                    account: paymentData.selectedAccount,
                    date: paymentData.paymentDate,
                    paymentMethod: paymentData.paymentMethod
                  }}
                  onViewMail={() => {
                    setShowConfirmPayment(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onNavigateHome={handleReturnHome}
                  onLogoClick={handleReturnHome}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onFileTaxes={() => {
                    setShowConfirmPayment(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowConfirmPayment(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowConfirmPayment(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowConfirmPayment(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowConfirmPayment(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowConfirmPayment(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowConfirmPayment(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowConfirmPayment(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowConfirmPayment(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowConfirmPayment(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowConfirmPayment(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowConfirmPayment(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowConfirmPayment(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowConfirmPayment(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowConfirmPayment(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowConfirmPayment(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowConfirmPayment(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowConfirmPayment(false);
                    handleBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowConfirmPayment(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowConfirmPayment(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showCreditCardConfirmPayment) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <CreditCardConfirmPaymentScreen 
                  onBack={handleBackFromConfirm}
                  onBackToPayments={handleBackToPaymentsFromConfirm}
                  onConfirm={handleConfirmPayment}
                  paymentAmount={paymentData.amount}
                  selectedPaymentMethod={paymentData.paymentMethod as 'visa' | 'mastercard'}
                  onViewMail={() => {
                    setShowCreditCardConfirmPayment(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={() => {
                    setShowCreditCardConfirmPayment(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowCreditCardConfirmPayment(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowCreditCardConfirmPayment(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowCreditCardConfirmPayment(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowCreditCardConfirmPayment(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowCreditCardConfirmPayment(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showTaxFiling) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <TaxFilingScreen 
                  onBack={handleBackFromFiling} 
                  onNavigateToReturns={handleBackFromFiling} 
                  onNavigateHome={handleReturnHome} 
                  onViewMail={() => {
                    setShowTaxFiling(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowTaxFiling(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowTaxFiling(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowTaxFiling(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowTaxFiling(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowTaxFiling(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowTaxFiling(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowTaxFiling(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowTaxFiling(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowTaxFiling(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowTaxFiling(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowTaxFiling(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowTaxFiling(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowTaxFiling(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowTaxFiling(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowTaxFiling(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowTaxFiling(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowTaxFiling(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowTaxFiling(false);
                    handleBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowTaxFiling(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onTaxFilingChanges={handleShowTaxFilingChanges}
                  onUncashedCheques={() => {
                    setShowTaxFiling(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowTaxFiling(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowTaxFiling(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowTaxFiling(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowTaxFiling(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowTaxFiling(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowTaxFiling(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowTaxFiling(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowTaxFiling(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowTaxFiling(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowTaxFiling(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowTaxFiling(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowTaxFiling(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                  onUserFeedback={() => {
                    setShowTaxFiling(false);
                    handleShowUserFeedback('File Taxes');
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showTaxFilingChanges) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <TaxFilingChangesScreen 
                  onBack={handleBackFromTaxFilingChanges}
                  onNavigateHome={handleReturnHome} 
                  onViewMail={() => {
                    setShowTaxFilingChanges(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowTaxFilingChanges(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowTaxFilingChanges(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowTaxFilingChanges(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowTaxFilingChanges(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowTaxFilingChanges(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowTaxFilingChanges(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowTaxFilingChanges(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  unreadMailCount={noticeOfAssessmentRead ? 0 : 1}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (false && showNoticeOfAssessment) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <NoticeOfAssessmentScreen 
                  onBack={handleBackFromNoticeOfAssessment} 
                  onNavigateHome={handleReturnHome} 
                  onViewMail={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowNoticeOfAssessment(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onSearchClick={() => setShowSearchMenu(true)}
                  onViewRefundDetails={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowNoticeOfAssessment(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowNoticeOfAssessment(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowNoticeOfAssessment(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showCRAMail) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <CRAMailScreen 
                  onBack={handleBackFromCRAMail} 
                  onNavigateHome={handleReturnHome} 
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment} 
                  onViewMail={handleShowCRAMail} 
                  noticeOfAssessmentRead={noticeOfAssessmentRead}
                  onMarkNoticeAsRead={handleMarkNoticeAsRead}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  hasSavedChat={hasSavedChat}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  showComposeOnMount={showCRAMailCompose}
                  onViewSentMessages={() => {
                    setShowCRAMail(false);
                    setShowSentMessages(true);
                  }}
                  onSendMessage={(message) => {
                    const newMessage = {
                      ...message,
                      id: `sent-${Date.now()}`
                    };
                    setSentMessages([newMessage, ...sentMessages]);
                  }}
                  sentMessagesCount={sentMessages.length}
                  onArchiveMessage={handleArchiveInboxMessage}
                  onViewArchive={handleShowArchive}
                  archivedCount={archivedMessages.length}
                  initialComposeTo={initialMailTo}
                  initialComposeSubject={initialMailSubject}
                  onMessageSentWhenNotLoggedIn={isLoggedIn ? undefined : handleMessageSentFromSignInHelp}
                  onViewAllBenefits={handleShowAllBenefits}
                  onViewRefundDetails={handleShowRefundDetails}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleShowBecomeRepresentative}
                  onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                  onUserFeedback={() => {
                    setShowCRAMail(false);
                    handleShowUserFeedback('CRA Mail');
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showArchive) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <ArchiveScreen 
                  onBack={() => {
                    setShowArchive(false);
                    setShowCRAMail(true);
                    setShowCRAMailCompose(false);
                  }}
                  onNavigateHome={handleReturnHome}
                  onViewMail={() => {
                    setShowArchive(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowArchive(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowArchive(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowArchive(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowArchive(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowArchive(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowArchive(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowArchive(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  archivedMessages={archivedMessages}
                  onRestoreMessage={handleRestoreMessage}
                  onViewSentMessages={() => {
                    setShowArchive(false);
                    setShowSentMessages(true);
                  }}
                  onCompose={() => {
                    setShowArchive(false);
                    setShowCRAMail(true);
                    setShowCRAMailCompose(true);
                  }}
                  onViewRefundDetails={() => {
                    setShowArchive(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowArchive(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowArchive(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowArchive(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowArchive(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowArchive(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowArchive(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowArchive(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowArchive(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowArchive(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowArchive(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowArchive(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowArchive(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowArchive(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowArchive(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowArchive(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowArchive(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowArchive(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowArchive(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowArchive(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowArchive(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowArchive(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowArchive(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowArchive(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowArchive(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showSentMessages) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <SentMessagesScreen 
                  onBack={() => {
                    setShowSentMessages(false);
                    setShowCRAMail(true);
                    setShowCRAMailCompose(false);
                  }}
                  onNavigateHome={handleReturnHome}
                  onViewMail={() => {
                    setShowSentMessages(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowSentMessages(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowSentMessages(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowSentMessages(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowSentMessages(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowSentMessages(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowSentMessages(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowSentMessages(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  sentMessages={sentMessages}
                  onCompose={() => {
                    setShowSentMessages(false);
                    setShowCRAMail(true);
                    setShowCRAMailCompose(true);
                    scrollToTop();
                  }}
                  onArchiveMessage={handleArchiveSentMessage}
                  onViewArchive={handleShowArchive}
                  archivedCount={archivedMessages.length}
                  onViewRefundDetails={() => {
                    setShowSentMessages(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowSentMessages(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowSentMessages(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowSentMessages(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowSentMessages(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowSentMessages(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowSentMessages(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowSentMessages(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowSentMessages(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowSentMessages(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowSentMessages(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowSentMessages(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowSentMessages(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowSentMessages(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowSentMessages(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowSentMessages(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowSentMessages(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowSentMessages(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowSentMessages(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowSentMessages(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowSentMessages(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowSentMessages(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowSentMessages(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowSentMessages(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowSentMessages(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showRegisteredPlans) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <RegisteredPlansScreen 
                  onBack={handleBackFromRegisteredPlans} 
                  onNavigateHome={handleReturnHome} 
                  onViewMail={() => {
                    setShowRegisteredPlans(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowRegisteredPlans(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onLearnRegisteredPlans={handleShowLearnRegisteredPlans}
                  onRRSPCalculator={handleShowRRSPCalculator}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onTFSAContributionRules={handleShowTFSAContributionRules}
                  onRESPGrantPrograms={handleShowRESPGrantPrograms}
                  onFileTaxes={() => {
                    setShowRegisteredPlans(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowRegisteredPlans(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowRegisteredPlans(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowRegisteredPlans(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowRegisteredPlans(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowRegisteredPlans(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowRegisteredPlans(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowRegisteredPlans(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowRegisteredPlans(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowRegisteredPlans(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowRegisteredPlans(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowRegisteredPlans(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowRegisteredPlans(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowRegisteredPlans(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowRegisteredPlans(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowRegisteredPlans(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowRegisteredPlans(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowRegisteredPlans(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowRegisteredPlans(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowRegisteredPlans(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowRegisteredPlans(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowRegisteredPlans(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowRegisteredPlans(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowRegisteredPlans(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowRegisteredPlans(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowRegisteredPlans(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowRegisteredPlans(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowRegisteredPlans(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowRegisteredPlans(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowRegisteredPlans(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                  onUserFeedback={() => {
                    setShowRegisteredPlans(false);
                    handleShowUserFeedback('Registered Plans');
                    scrollToTop();
                  }}
                  hasUnreadMail={!noticeOfAssessmentRead}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showTaxSlips) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <TaxSlipsScreen 
                  onBack={handleBackFromTaxSlips}
                  onNavigateHome={handleReturnHome}
                  onViewMail={() => {
                    setShowTaxSlips(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowTaxSlips(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowTaxSlips(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowTaxSlips(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowTaxSlips(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowTaxSlips(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowTaxSlips(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowTaxSlips(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowTaxSlips(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowTaxSlips(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowTaxSlips(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowTaxSlips(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowTaxSlips(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowTaxSlips(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowTaxSlips(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowTaxSlips(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowTaxSlips(false);
                    handleBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowTaxSlips(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowTaxSlips(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowTaxSlips(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowTaxSlips(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowTaxSlips(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowTaxSlips(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowTaxSlips(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowTaxSlips(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowTaxSlips(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowTaxSlips(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowTaxSlips(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowTaxSlips(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowTaxSlips(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowTaxSlips(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowTaxSlips(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowTaxSlips(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                  onUserFeedback={() => {
                    setShowTaxSlips(false);
                    handleShowUserFeedback('Tax Slips');
                    scrollToTop();
                  }}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  openNoticeOfAssessmentOnMount={openNoticeOfAssessmentOnMount}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showLearnRegisteredPlans) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <LearnRegisteredPlansScreen 
                  onBack={handleBackFromLearnRegisteredPlans} 
                  onNavigateHome={handleReturnHome}
                  onLogoClick={handleReturnHome}
                  onHowToOpenFHSA={handleShowHowToOpenFHSA}
                  onFHSAvsHBP={handleShowFHSAvsHBP}
                  onViewTFSAContributionRoom={handleShowViewTFSAContributionRoom}
                  onCorrectTFSAOverContribution={handleShowCorrectTFSAOverContribution}
                  onViewMail={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowLearnRegisteredPlans(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowLearnRegisteredPlans(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowLearnRegisteredPlans(false);
                    handleBecomeRepresentative();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowLearnRegisteredPlans(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showRRSPCalculator) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <RRSPCalculatorScreen 
                  onBack={handleBackFromRRSPCalculator} 
                  onNavigateHome={handleReturnHome}
                  onLogoClick={handleReturnHome}
                  onViewMail={() => {
                    setShowRRSPCalculator(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowRRSPCalculator(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowRRSPCalculator(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowRRSPCalculator(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowRRSPCalculator(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowRRSPCalculator(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowRRSPCalculator(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowRRSPCalculator(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowRRSPCalculator(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowRRSPCalculator(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowRRSPCalculator(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowRRSPCalculator(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowRRSPCalculator(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowRRSPCalculator(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowRRSPCalculator(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowRRSPCalculator(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowRRSPCalculator(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowRRSPCalculator(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowRRSPCalculator(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowRRSPCalculator(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowRRSPCalculator(false);
                    handleBecomeRepresentative();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowRRSPCalculator(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowRRSPCalculator(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowRRSPCalculator(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowRRSPCalculator(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowRRSPCalculator(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowRRSPCalculator(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowRRSPCalculator(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowRRSPCalculator(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowRRSPCalculator(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowRRSPCalculator(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowRRSPCalculator(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showFHSAEligibility) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <FHSAEligibilityScreen 
                  onBack={handleBackFromFHSAEligibility} 
                  onNavigateHome={handleReturnHome} 
                  onNavigateToRegisteredPlans={handleBackFromFHSAEligibility}
                  onViewMail={() => {
                    setShowFHSAEligibility(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowFHSAEligibility(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowFHSAEligibility(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowFHSAEligibility(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowFHSAEligibility(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowFHSAEligibility(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowFHSAEligibility(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowFHSAEligibility(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onHowToOpenFHSA={handleShowHowToOpenFHSA}
                  onFHSAQualifyingWithdrawal={handleShowFHSAQualifyingWithdrawal}
                  onFHSAvsHBP={handleShowFHSAvsHBP}
                  onViewFHSAContributionRoom={handleShowViewFHSAContributionRoom}
                  onViewRefundDetails={() => {
                    setShowFHSAEligibility(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowFHSAEligibility(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowFHSAEligibility(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowFHSAEligibility(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowFHSAEligibility(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowFHSAEligibility(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowFHSAEligibility(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowFHSAEligibility(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowFHSAEligibility(false);
                    handleBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowFHSAEligibility(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowFHSAEligibility(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowFHSAEligibility(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowFHSAEligibility(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowFHSAEligibility(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowFHSAEligibility(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowFHSAEligibility(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowFHSAEligibility(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowFHSAEligibility(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowFHSAEligibility(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowFHSAEligibility(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowFHSAEligibility(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowFHSAEligibility(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowFHSAEligibility(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowFHSAEligibility(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowFHSAEligibility(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showTFSAContributionRules) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <TFSAContributionRulesScreen 
                  onBack={handleBackFromTFSAContributionRules} 
                  onNavigateHome={handleReturnHome}
                  onViewMail={() => {
                    setShowTFSAContributionRules(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowTFSAContributionRules(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowTFSAContributionRules(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowTFSAContributionRules(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowTFSAContributionRules(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowTFSAContributionRules(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowTFSAContributionRules(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowTFSAContributionRules(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowTFSAContributionRules(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowTFSAContributionRules(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowTFSAContributionRules(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowTFSAContributionRules(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowTFSAContributionRules(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowTFSAContributionRules(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowTFSAContributionRules(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowTFSAContributionRules(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowTFSAContributionRules(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowTFSAContributionRules(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowTFSAContributionRules(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowTFSAContributionRules(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowTFSAContributionRules(false);
                    handleBecomeRepresentative();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowTFSAContributionRules(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowTFSAContributionRules(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowTFSAContributionRules(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowTFSAContributionRules(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowTFSAContributionRules(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowTFSAContributionRules(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowTFSAContributionRules(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowTFSAContributionRules(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowTFSAContributionRules(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowTFSAContributionRules(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowTFSAContributionRules(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showRESPGrantPrograms) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <RESPGrantProgramsScreen 
                  onBack={handleBackFromRESPGrantPrograms} 
                  onNavigateHome={handleReturnHome} 
                  onNavigateToRegisteredPlans={handleBackFromRESPGrantPrograms}
                  onViewMail={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowRESPGrantPrograms(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onHowToOpenRESP={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowHowToOpenRESP();
                    scrollToTop();
                  }}
                  onRESPWithdrawalRules={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowRESPWithdrawalRules();
                    scrollToTop();
                  }}
                  onApplyCanadaLearningBond={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowApplyCanadaLearningBond();
                    scrollToTop();
                  }}
                  onProvincialEducationSavings={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowProvincialEducationSavings();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowRESPGrantPrograms(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowRESPGrantPrograms(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  // FHSA Related Screens
  if (showHowToOpenFHSA) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <HowToOpenFHSAScreen 
                  onBack={handleBackFromHowToOpenFHSA}
                  onNavigateHome={handleReturnHome}
                  onViewMail={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowHowToOpenFHSA(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowHowToOpenFHSA(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowHowToOpenFHSA(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showFHSAQualifyingWithdrawal) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <FHSAQualifyingWithdrawalScreen 
                  onBack={handleBackFromFHSAQualifyingWithdrawal}
                  onNavigateHome={handleReturnHome}
                  onViewMail={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowFHSAQualifyingWithdrawal(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showFHSAvsHBP) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <FHSAvsHBPScreen 
                  onBack={handleBackFromFHSAvsHBP}
                  onNavigateHome={handleReturnHome}
                  onViewMail={() => {
                    setShowFHSAvsHBP(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowFHSAvsHBP(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowFHSAvsHBP(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowFHSAvsHBP(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowFHSAvsHBP(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowFHSAvsHBP(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowFHSAvsHBP(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowFHSAvsHBP(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowFHSAvsHBP(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowFHSAvsHBP(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowFHSAvsHBP(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowFHSAvsHBP(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowFHSAvsHBP(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowFHSAvsHBP(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowFHSAvsHBP(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowFHSAvsHBP(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowFHSAvsHBP(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowFHSAvsHBP(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowFHSAvsHBP(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowFHSAvsHBP(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowFHSAvsHBP(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowFHSAvsHBP(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowFHSAvsHBP(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowFHSAvsHBP(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowFHSAvsHBP(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowFHSAvsHBP(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowFHSAvsHBP(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowFHSAvsHBP(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowFHSAvsHBP(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowFHSAvsHBP(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowFHSAvsHBP(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowFHSAvsHBP(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showViewFHSAContributionRoom) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <ViewFHSAContributionRoomScreen 
                  onBack={handleBackFromViewFHSAContributionRoom}
                  onNavigateHome={handleReturnHome}
                  onViewMail={() => {
                    setShowViewFHSAContributionRoom(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowViewFHSAContributionRoom(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowViewFHSAContributionRoom(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowViewFHSAContributionRoom(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowViewFHSAContributionRoom(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowViewFHSAContributionRoom(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowViewFHSAContributionRoom(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowViewFHSAContributionRoom(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowViewFHSAContributionRoom(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowViewFHSAContributionRoom(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowViewFHSAContributionRoom(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowViewFHSAContributionRoom(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowViewFHSAContributionRoom(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowViewFHSAContributionRoom(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowViewFHSAContributionRoom(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowViewFHSAContributionRoom(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowViewFHSAContributionRoom(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  // TFSA Related Screens
  if (showViewTFSAContributionRoom) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <ViewTFSAContributionRoomScreen 
                  onBack={handleBackFromViewTFSAContributionRoom}
                  onNavigateHome={handleReturnHome}
                  onViewMail={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowViewTFSAContributionRoom(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showCorrectTFSAOverContribution) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <CorrectTFSAOverContributionScreen 
                  onBack={handleBackFromCorrectTFSAOverContribution}
                  onNavigateHome={handleReturnHome}
                  onViewMail={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowCorrectTFSAOverContribution(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showTFSAInvestorsInfo) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <TFSAInvestorsInfoScreen 
                  onBack={handleBackFromTFSAInvestorsInfo}
                  onNavigateHome={handleReturnHome}
                  onViewMail={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowTFSAInvestorsInfo(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showRequestWaiveTFSATax) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <RequestWaiveTFSATaxScreen 
                  onBack={handleBackFromRequestWaiveTFSATax}
                  onNavigateHome={handleReturnHome}
                  onViewMail={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowRequestWaiveTFSATax(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  // RESP Related Screens
  if (showHowToOpenRESP) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <HowToOpenRESPScreen 
                  onBack={handleBackFromHowToOpenRESP}
                  onNavigateHome={handleReturnHome}
                  onViewMail={() => {
                    setShowHowToOpenRESP(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowHowToOpenRESP(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowHowToOpenRESP(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowHowToOpenRESP(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowHowToOpenRESP(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowHowToOpenRESP(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowHowToOpenRESP(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowHowToOpenRESP(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowHowToOpenRESP(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowHowToOpenRESP(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowHowToOpenRESP(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowHowToOpenRESP(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowHowToOpenRESP(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowHowToOpenRESP(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowHowToOpenRESP(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowHowToOpenRESP(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowHowToOpenRESP(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowHowToOpenRESP(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowHowToOpenRESP(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowHowToOpenRESP(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowHowToOpenRESP(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowHowToOpenRESP(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowHowToOpenRESP(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowHowToOpenRESP(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowHowToOpenRESP(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowHowToOpenRESP(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowHowToOpenRESP(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowHowToOpenRESP(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowHowToOpenRESP(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowHowToOpenRESP(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowHowToOpenRESP(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowHowToOpenRESP(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showRESPWithdrawalRules) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <RESPWithdrawalRulesScreen 
                  onBack={handleBackFromRESPWithdrawalRules}
                  onNavigateHome={handleReturnHome}
                  onViewMail={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowRESPWithdrawalRules(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowRESPWithdrawalRules(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowRESPWithdrawalRules(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showApplyCanadaLearningBond) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <ApplyCanadaLearningBondScreen 
                  onBack={handleBackFromApplyCanadaLearningBond}
                  onNavigateHome={handleReturnHome}
                  onViewMail={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowApplyCanadaLearningBond(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showProvincialEducationSavings) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <ProvincialEducationSavingsScreen 
                  onBack={handleBackFromProvincialEducationSavings}
                  onNavigateHome={handleReturnHome}
                  onViewMail={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowProvincialEducationSavings(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowProvincialEducationSavings(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowProvincialEducationSavings(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showRepresentative) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <RepresentativeScreenStepByStep 
                  onBack={handleBackFromRepresentative}
                  onNavigateHome={handleReturnHome}
                  onViewMail={handleShowCRAMail}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewAllBenefits={handleShowAllBenefits}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onSuccess={handleBackFromRepresentative}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onBecomeRepresentativeAsRep={() => {
                    setShowRepresentative(false);
                    setShowBecomeRepresentative(true);
                    setBecomeRepresentativeMode('representative');
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showBecomeRepresentativeAsRep) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <BecomeRepresentativeScreen 
                  onBack={handleBackFromBecomeRepresentativeAsRep}
                  onNavigateHome={handleReturnHome}
                  onViewMail={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewAllBenefits={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowBecomeRepresentativeAsRep(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                  onSuccess={handleBackFromBecomeRepresentativeAsRep}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showViewRepresentative) {
    return (
      <IPhoneMockup>
        <Toaster position="bottom-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <ViewRepresentativeScreen 
                  onBack={() => { setShowViewRepresentative(false); scrollToTop(); }}
                  onNavigateHome={handleReturnHome}
                  onViewMail={handleShowCRAMail}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showCustomizeHomeScreen) {
    return (
      <DndProvider backend={HTML5Backend}>
        <IPhoneMockup>
          <AnimatePresence mode="wait">
            <ScreenTransition transitionKey={screenKey}>
              <Toaster position="top-center" />
              <div className="h-full bg-[#F2F2F2] flex flex-col">
                <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                  <CustomizeHomeScreen 
                    onNavigateHome={handleBackFromCustomizeHomeScreen}
                    onNavigateProfile={() => {
                      setShowCustomizeHomeScreen(false);
                      handleNavigate('profile');
                      scrollToTop();
                    }}
                    onViewMail={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowCRAMail();
                      scrollToTop();
                    }}
                    onFileTaxes={() => {
                      setShowCustomizeHomeScreen(false);
                      handleStartFiling();
                      scrollToTop();
                    }}
                    onMakePayment={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowMakePayment();
                      scrollToTop();
                    }}
                    onBenefitsAndCredits={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowAllBenefits();
                      scrollToTop();
                    }}
                    onRegisteredPlans={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowRegisteredPlans();
                      scrollToTop();
                    }}
                    onHelp={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowHelp();
                      scrollToTop();
                    }}
                    onSignOut={handleLogout}
                    onTaxSlips={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowTaxSlips();
                      scrollToTop();
                    }}
                    onProofOfIncome={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowProofOfIncome();
                      scrollToTop();
                    }}
                    onSaveChanges={handleSaveCustomization}
                    scrollContainerRef={scrollContainerRef}
                    hasUnreadMail={!noticeOfAssessmentRead}
                    onViewAllBenefits={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowAllBenefits();
                      scrollToTop();
                    }}
                    onViewRefundDetails={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowRefundDetails();
                      scrollToTop();
                    }}
                    onViewNoticeOfAssessment={() => {
                      setShowCustomizeHomeScreen(false);
                      handleViewNoticeOfAssessment();
                      scrollToTop();
                    }}
                    onGSTHSTCredit={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowGSTHSTCredit();
                      scrollToTop();
                    }}
                    onAccountDetails={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowAccountDetails();
                      scrollToTop();
                    }}
                    onProfile={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowProfile();
                      scrollToTop();
                    }}
                    onViewTaxReturns={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowTaxReturns();
                      scrollToTop();
                    }}
                    onHomeBuyersPlan={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowHomeBuyersPlan();
                      scrollToTop();
                    }}
                    onFHSAEligibility={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowFHSAEligibility();
                      scrollToTop();
                    }}
                    onLifelongLearningPlan={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowLifelongLearningPlan();
                      scrollToTop();
                    }}
                    onCustomize={handleShowCustomizeHomeScreen}
                    onUncashedCheques={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowUncashedCheques();
                      scrollToTop();
                    }}
                    onBecomeRepresentative={() => {
                      setShowCustomizeHomeScreen(false);
                      handleBecomeRepresentative();
                      scrollToTop();
                    }}
                    onBecomeRepresentativeAsRep={() => {
                      setShowCustomizeHomeScreen(false);
                      handleBecomeRepresentativeAsRep();
                      scrollToTop();
                    }}
                    onRemittanceVoucher={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowRemittanceVoucher();
                      scrollToTop();
                    }}
                    onCPPEIRuling={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowCPPEIRuling();
                      scrollToTop();
                    }}
                    onAuditEnquiries={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowAuditEnquiries();
                      scrollToTop();
                    }}
                    onCarryoverAmounts={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowCarryoverAmounts();
                      scrollToTop();
                    }}
                    onChangeMyReturn={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowChangeMyReturn();
                      scrollToTop();
                    }}
                    onRegisterFormalDispute={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowRegisterFormalDispute();
                      scrollToTop();
                    }}
                    onNonResidentAccount={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowNonResidentAccount();
                      scrollToTop();
                    }}
                    onResidencyDetermination={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowResidencyDetermination();
                      scrollToTop();
                    }}
                    onPersonalIdentificationNumber={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowPersonalIdentificationNumber();
                      scrollToTop();
                    }}
                    onProgressTrackerService={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowProgressTrackerService();
                      scrollToTop();
                    }}
                    onReliefOfPenalties={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowReliefOfPenalties();
                      scrollToTop();
                    }}
                    onSubmitDocuments={() => {
                      setShowCustomizeHomeScreen(false);
                      handleShowSubmitDocuments();
                      scrollToTop();
                    }}
                  />
                </div>
                <BottomNav active={'none'} onNavigate={handleNavigate} />
              </div>
            </ScreenTransition>
          </AnimatePresence>
        </IPhoneMockup>
      </DndProvider>
    );
  }

  if (showSpouseDetails) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <SpouseDetailsScreen 
                  onBack={() => {
                    setShowSpouseDetails(false);
                    scrollToTop();
                  }}
                  onNavigateHome={handleReturnHome}
                  onViewMail={() => {
                    setShowSpouseDetails(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onFileTaxes={() => {
                    setShowSpouseDetails(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowSpouseDetails(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowSpouseDetails(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowSpouseDetails(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowSpouseDetails(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowSpouseDetails(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowSpouseDetails(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onUpdateSpouse={() => {
                    toast.info('Spouse information update feature coming soon. Contact CRA at 1-800-959-8281 to update your spouse details.');
                  }}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewAllBenefits={() => {
                    setShowSpouseDetails(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowSpouseDetails(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowSpouseDetails(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowSpouseDetails(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowSpouseDetails(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowSpouseDetails(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowSpouseDetails(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowSpouseDetails(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowSpouseDetails(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowSpouseDetails(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowSpouseDetails(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowSpouseDetails(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowSpouseDetails(false);
                    handleBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowSpouseDetails(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowSpouseDetails(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowSpouseDetails(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowSpouseDetails(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowSpouseDetails(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowSpouseDetails(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowSpouseDetails(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowSpouseDetails(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowSpouseDetails(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowSpouseDetails(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowSpouseDetails(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowSpouseDetails(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowSpouseDetails(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showChildDetails) {
    const childData = selectedChild === 'Emma Rath' 
      ? { name: 'Emma Rath', firstName: 'Emma', sin: '***-***-234', age: 8, dateOfBirth: 'March 15, 2017' }
      : { name: 'Lucas Rath', firstName: 'Lucas', sin: '***-***-567', age: 5, dateOfBirth: 'July 22, 2020' };

    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <ChildDetailsScreen 
                  onBack={() => {
                    setShowChildDetails(false);
                    setSelectedChild('');
                    scrollToTop();
                  }}
                  onNavigateHome={handleReturnHome}
                  childName={childData.name}
                  childFirstName={childData.firstName}
                  sin={childData.sin}
                  age={childData.age}
                  dateOfBirth={childData.dateOfBirth}
                  onViewMail={handleShowCRAMail}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewAllBenefits={handleShowAllBenefits}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onBecomeRepresentative={handleShowBecomeRepresentative}
                  onBecomeRepresentativeAsRep={() => {
                    setShowChildDetails(false);
                    setSelectedChild('');
                    setShowBecomeRepresentative(true);
                    setBecomeRepresentativeMode('representative');
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showUserFeedback) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <UserFeedbackScreen 
                  onBack={() => {
                    setShowUserFeedback(false);
                    scrollToTop();
                  }}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={() => {
                    setShowUserFeedback(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowUserFeedback(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowUserFeedback(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowUserFeedback(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowUserFeedback(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowUserFeedback(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowUserFeedback(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onViewMail={() => {
                    setShowUserFeedback(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={() => {
                    setShowUserFeedback(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowUserFeedback(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowUserFeedback(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowUserFeedback(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowUserFeedback(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowUserFeedback(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowUserFeedback(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowUserFeedback(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowUserFeedback(false);
                    handleBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowUserFeedback(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowUserFeedback(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowUserFeedback(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowUserFeedback(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowUserFeedback(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowUserFeedback(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowUserFeedback(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowUserFeedback(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowUserFeedback(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowUserFeedback(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowUserFeedback(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowUserFeedback(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowUserFeedback(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowUserFeedback(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowUserFeedback(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowUserFeedback(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                  onUserFeedback={() => {
                    setShowUserFeedback(false);
                    handleShowUserFeedback('User Feedback');
                    scrollToTop();
                  }}
                  currentPageContext={feedbackContext}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showCustomizedDashboard) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <DashboardScreen 
                  onMakePayment={handleShowSimplifiedMakePayment} 
                  onFileTaxes={handleStartFiling} 
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment} 
                  onViewMail={handleShowCRAMail} 
                  onRegisteredPlans={handleShowRegisteredPlans} 
                  onLogoClick={handleBackFromCustomizedDashboard} 
                  hasUnreadMail={!noticeOfAssessmentRead} 
                  onViewBalanceOwingDetails={handleShowBalanceOwingDetails} 
                  onViewRefundDetails={handleShowRefundDetails} 
                  onViewAllBenefits={handleShowAllBenefits} 
                  onHelp={handleShowHelp} 
                  onSignOut={handleLogout} 
                  onTaxSlips={handleShowTaxSlips} 
                  onProofOfIncome={handleShowProofOfIncome} 
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
                  onCustomize={handleShowCustomizeHomeScreen}
                  customMostRequested={customizedMostRequested}
                  customNumberOfRows={customizedNumberOfRows}
                  customMenuItems={customizedMenuItems}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onUncashedCheques={handleShowUncashedCheques}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                />
              </div>
              <BottomNav active={activeScreen} onNavigate={handleNavigate} customNavItems={customizedBottomNavItems.length > 0 ? customizedBottomNavItems : undefined} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showEditName) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <EditNameScreen 
                  onBack={handleBackFromEditName} 
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onViewRefundDetails={() => {
                    setShowEditName(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowEditName(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowEditName(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowEditName(false);
                    handleShowBalanceOwingDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowEditName(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowEditName(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowEditName(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowEditName(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowEditName(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowEditName(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowEditName(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowEditName(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowEditName(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowEditName(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowEditName(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowEditName(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowEditName(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowEditName(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowEditName(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowEditName(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowEditName(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowEditName(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowEditName(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowEditName(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowEditName(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showEditEmail) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <EditEmailScreen 
                  onBack={handleBackFromEditEmail} 
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onViewRefundDetails={() => {
                    setShowEditEmail(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowEditEmail(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowEditEmail(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowEditEmail(false);
                    handleShowBalanceOwingDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowEditEmail(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowEditEmail(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowEditEmail(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowEditEmail(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowEditEmail(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowEditEmail(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowEditEmail(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowEditEmail(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowEditEmail(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowEditEmail(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowEditEmail(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowEditEmail(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowEditEmail(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowEditEmail(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowEditEmail(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowEditEmail(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowEditEmail(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowEditEmail(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowEditEmail(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowEditEmail(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowEditEmail(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showEditPhone) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <EditPhoneScreen 
                  onBack={handleBackFromEditPhone} 
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewRefundDetails={() => {
                    setShowEditPhone(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowEditPhone(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowEditPhone(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowEditPhone(false);
                    handleShowBalanceOwingDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowEditPhone(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowEditPhone(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowEditPhone(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowEditPhone(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowEditPhone(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowEditPhone(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowEditPhone(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowEditPhone(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowEditPhone(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowEditPhone(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowEditPhone(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowEditPhone(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowEditPhone(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowEditPhone(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowEditPhone(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowEditPhone(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowEditPhone(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowEditPhone(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowEditPhone(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowEditPhone(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowEditPhone(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showEditAddress) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <EditAddressScreen 
                  onBack={handleBackFromEditAddress} 
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onViewRefundDetails={() => {
                    setShowEditAddress(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowEditAddress(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowEditAddress(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowEditAddress(false);
                    handleShowBalanceOwingDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowEditAddress(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowEditAddress(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowEditAddress(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowEditAddress(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowEditAddress(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowEditAddress(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowEditAddress(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowEditAddress(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowEditAddress(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowEditAddress(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowEditAddress(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowEditAddress(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowEditAddress(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowEditAddress(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowEditAddress(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowEditAddress(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowEditAddress(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowEditAddress(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowEditAddress(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowEditAddress(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowEditAddress(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showEditDirectDeposit) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <EditDirectDepositScreen 
                  onBack={handleBackFromEditDirectDeposit} 
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewRefundDetails={() => {
                    setShowEditDirectDeposit(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowEditDirectDeposit(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowEditDirectDeposit(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowEditDirectDeposit(false);
                    handleShowBalanceOwingDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowEditDirectDeposit(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowEditDirectDeposit(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowEditDirectDeposit(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowEditDirectDeposit(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowEditDirectDeposit(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowEditDirectDeposit(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowEditDirectDeposit(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowEditDirectDeposit(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowEditDirectDeposit(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowEditDirectDeposit(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowEditDirectDeposit(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowEditDirectDeposit(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowEditDirectDeposit(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowEditDirectDeposit(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowEditDirectDeposit(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowEditDirectDeposit(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowEditDirectDeposit(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowEditDirectDeposit(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowEditDirectDeposit(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowEditDirectDeposit(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowEditDirectDeposit(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showManageCards) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <ManageCardsScreen 
                  onBack={handleBackFromManageCards} 
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={() => handleNavigate('home')}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onViewDocuments={() => handleNavigate('documents')}
                  onViewProfile={() => handleNavigate('profile')}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewRefundDetails={() => {
                    setShowManageCards(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowManageCards(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowManageCards(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowManageCards(false);
                    handleShowBalanceOwingDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowManageCards(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowManageCards(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowManageCards(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowManageCards(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowManageCards(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowManageCards(false);
                    setShowBecomeRepresentative(true);
                    setBecomeRepresentativeMode('representative');
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowManageCards(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowManageCards(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowManageCards(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowManageCards(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowManageCards(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowManageCards(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowManageCards(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowManageCards(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowManageCards(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowManageCards(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowManageCards(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowManageCards(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowManageCards(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowManageCards(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowManageCards(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showPaymentFrequency) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <PaymentFrequencyScreen 
                  onBack={handleBackFromPaymentFrequency} 
                  currentFrequency={paymentFrequency}
                  onSelectFrequency={handleSelectPaymentFrequency}
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  hasUnreadMail={!noticeOfAssessmentRead}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showReminderFrequency) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <PaymentFrequencyScreen 
                  type="reminder"
                  onBack={handleBackFromReminderFrequency} 
                  currentFrequency={reminderFrequency}
                  onSelectFrequency={handleSelectReminderFrequency}
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  hasUnreadMail={!noticeOfAssessmentRead}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showInstalmentPaymentsReminders) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <InstalmentPaymentsRemindersScreen 
                  onBack={handleBackFromInstalmentPaymentsReminders} 
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onConfirmPayment={handleConfirmPaymentSchedule}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewAllBenefits={handleShowAllBenefits}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={() => {}}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onBecomeRepresentative={handleShowBecomeRepresentative}
                  onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showTwoStepVerification) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <TwoStepVerificationScreen 
                  onBack={handleBackFromTwoStepVerification} 
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={() => {
                    setShowTwoStepVerification(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowTwoStepVerification(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowTwoStepVerification(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowTwoStepVerification(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowTwoStepVerification(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowTwoStepVerification(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowTwoStepVerification(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowTwoStepVerification(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowTwoStepVerification(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowTwoStepVerification(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowTwoStepVerification(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowTwoStepVerification(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
                  onRemittanceVoucher={() => {
                    setShowTwoStepVerification(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowTwoStepVerification(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowTwoStepVerification(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowTwoStepVerification(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowTwoStepVerification(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowTwoStepVerification(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowTwoStepVerification(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowTwoStepVerification(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowTwoStepVerification(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowTwoStepVerification(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowTwoStepVerification(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowTwoStepVerification(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showChangePassword) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <ChangePasswordScreen 
                  onBack={handleBackFromChangePassword} 
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={() => {
                    setShowChangePassword(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowChangePassword(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowChangePassword(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowChangePassword(false);
                    handleShowBalanceOwingDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowChangePassword(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowChangePassword(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowChangePassword(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowChangePassword(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowChangePassword(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
                  onLifelongLearningPlan={() => {
                    setShowChangePassword(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowChangePassword(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowChangePassword(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowChangePassword(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowChangePassword(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowChangePassword(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowChangePassword(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowChangePassword(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowChangePassword(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowChangePassword(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowChangePassword(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowChangePassword(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowChangePassword(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowChangePassword(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowChangePassword(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showLanguagePreference) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <LanguagePreferenceScreen 
                  onBack={handleBackFromLanguagePreference} 
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={() => {
                    setShowLanguagePreference(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowLanguagePreference(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowLanguagePreference(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowLanguagePreference(false);
                    handleShowBalanceOwingDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowLanguagePreference(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowLanguagePreference(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowLanguagePreference(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowLanguagePreference(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowLanguagePreference(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
                  onLifelongLearningPlan={() => {
                    setShowLanguagePreference(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowLanguagePreference(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowLanguagePreference(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowLanguagePreference(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowLanguagePreference(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowLanguagePreference(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowLanguagePreference(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowLanguagePreference(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowLanguagePreference(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowLanguagePreference(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowLanguagePreference(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowLanguagePreference(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowLanguagePreference(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowLanguagePreference(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowLanguagePreference(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showPrivacy) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <PrivacyScreen 
                  onBack={handleBackFromPrivacy} 
                  onViewMail={handleShowCRAMail} 
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={() => {
                    setShowPrivacy(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowPrivacy(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowPrivacy(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowPrivacy(false);
                    handleShowBalanceOwingDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowPrivacy(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowPrivacy(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowPrivacy(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowPrivacy(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowPrivacy(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
                  onLifelongLearningPlan={() => {
                    setShowPrivacy(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowPrivacy(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowPrivacy(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowPrivacy(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowPrivacy(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowPrivacy(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowPrivacy(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowPrivacy(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowPrivacy(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowPrivacy(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowPrivacy(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowPrivacy(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowPrivacy(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowPrivacy(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowPrivacy(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showTerms) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <TermsScreen 
                  onBack={handleBackFromTerms} 
                  onViewMail={handleShowCRAMail} 
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={() => {
                    setShowTerms(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowTerms(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowTerms(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowTerms(false);
                    handleShowBalanceOwingDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowTerms(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowTerms(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowTerms(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowTerms(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowTerms(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
                  onLifelongLearningPlan={() => {
                    setShowTerms(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowTerms(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowTerms(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowTerms(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowTerms(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowTerms(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowTerms(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowTerms(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowTerms(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowTerms(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowTerms(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowTerms(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowTerms(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowTerms(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowTerms(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showHelp) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <HelpScreen 
                  onBack={handleBackFromHelp} 
                  onViewMail={handleShowCRAMail} 
                  onNavigateHome={handleReturnHome}
                  onFAQFileTaxes={handleShowFAQFileTaxes}
                  onFAQRefund={handleShowFAQRefund}
                  onFAQMakePayment={handleShowFAQMakePayment}
                  onFAQUpdateAddress={handleShowFAQUpdateAddress}
                  onFAQNoticeOfAssessment={handleShowFAQNoticeOfAssessment}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onLiveChat={handleShowLiveChat}
                  onAIChat={handleShowAIChat}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onCall={handleShowCalling}
                  onSendMessage={handleSendMessage}
                  onCallScheduling={handleShowCallScheduling}
                  onShowAppVersion={handleShowAppVersion}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                  onUserFeedback={() => {
                    setShowHelp(false);
                    handleShowUserFeedback('Help');
                    scrollToTop();
                  }}
                  hasUnreadMail={!noticeOfAssessmentRead}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showAppVersion) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <AppVersionScreen 
                  onBack={handleBackFromAppVersion} 
                  onViewMail={handleShowCRAMail} 
                  onNavigateHome={handleReturnHome}
                  onNavigateProfile={handleNavigateToProfile}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onUserFeedback={() => { setShowUserFeedback(true); scrollToTop(); }}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewAllBenefits={handleShowAllBenefits}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showAddNewDependant) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <AddNewDependantScreen 
                  onBack={() => { setShowAddNewDependant(false); scrollToTop(); }}
                  onNavigateHome={handleReturnHome}
                  onLogoClick={handleReturnHome}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewMail={handleShowCRAMail}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewAllBenefits={handleShowAllBenefits}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showCallScheduling) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <Toaster position="top-center" />
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <CallSchedulingScreen 
                  onBack={handleBackFromCallScheduling}
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onSearchClick={() => setShowSearchMenu(true)}
                  onPersonalClick={() => {
                    setAccountType('personal');
                    setShowCallScheduling(false);
                    handleReturnHome();
                  }}
                  onBusinessClick={() => {
                    setAccountType('business');
                    setShowCallScheduling(false);
                    handleShowBusinessHome();
                  }}
                  onRepresentativeClick={() => {
                    setAccountType('representative');
                    setShowCallScheduling(false);
                    handleShowRepresentativeHome();
                  }}
                  activeAccountType={accountType}
                  hasUnreadMail={hasUnreadMail}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onBecomeRepresentative={handleShowBecomeRepresentative}
                  onBecomeRepresentativeAsRep={() => {
                    setShowCallScheduling(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showLiveChat) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <LiveChatScreen 
                  key={`livechat-${liveChatInitialTab}`}
                  onBack={handleBackFromLiveChat}
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onSearchClick={() => setShowSearchMenu(true)}
                  initialTab={liveChatInitialTab}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowBalanceOwingDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onBecomeRepresentative={handleShowBecomeRepresentative}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentativeAsRep={() => {
                    setShowLiveChat(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showBalanceOwingDetails) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <BalanceOwingDetailsScreen 
                  onBack={handleBackFromBalanceOwingDetails} 
                  onMakePayment={handleShowMakePayment}
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onShowPrivacy={handleShowPrivacy}
                  onShowTerms={handleShowTerms}
                  onShowHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onCall={handleShowCalling}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onBecomeRepresentative={handleShowBecomeRepresentative}
                  onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showRefundDetails) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <RefundDetailsScreen 
                  onBack={handleBackFromRefundDetails} 
                  onMakePayment={handleShowMakePayment}
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onShowPrivacy={handleShowPrivacy}
                  onShowTerms={handleShowTerms}
                  onShowHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onCall={handleShowCalling}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showGSTHSTCredit) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <GSTHSTCreditScreen 
                  onBack={handleBackFromGSTHSTCredit} 
                  onMakePayment={handleShowMakePayment}
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onShowPrivacy={handleShowPrivacy}
                  onShowTerms={handleShowTerms}
                  onShowHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onCall={handleShowCalling}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                  onUserFeedback={() => handleShowUserFeedback('GST/HST Credit')}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showAllBenefits) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <AllBenefitsScreen 
                  onBack={handleBackFromAllBenefits} 
                  onMakePayment={handleShowMakePayment}
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onShowPrivacy={handleShowPrivacy}
                  onShowTerms={handleShowTerms}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleShowBecomeRepresentative}
                  onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                  onUserFeedback={() => {
                    setShowAllBenefits(false);
                    handleShowUserFeedback('Benefits and Credits');
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showTaxSlips) {
    return (
      <IPhoneMockup>
        <div className="h-full bg-[#F2F2F2] flex flex-col">
          <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
            <TaxSlipsScreen 
              onBack={handleBackFromTaxSlips} 
              onViewMail={handleShowCRAMail}
              onNavigateHome={handleReturnHome}
              onFileTaxes={handleStartFiling}
              onMakePayment={handleShowMakePayment}
              onBenefitsAndCredits={handleShowAllBenefits}
              onRegisteredPlans={handleShowRegisteredPlans}
              onHelp={handleShowHelp}
              onSignOut={handleLogout}
              onTaxSlips={handleShowTaxSlips}
              onProofOfIncome={handleShowProofOfIncome}
              hasUnreadMail={!noticeOfAssessmentRead}
              onViewRefundDetails={handleShowRefundDetails}
              onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
              onGSTHSTCredit={handleShowGSTHSTCredit}
              onAccountDetails={handleShowAccountDetails}
              onProfile={handleShowProfile}
              onViewTaxReturns={handleShowTaxReturns}
              onHomeBuyersPlan={handleShowHomeBuyersPlan}
              onFHSAEligibility={handleShowFHSAEligibility}
              onBecomeRepresentative={handleBecomeRepresentative}
              onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
              onLifelongLearningPlan={handleShowLifelongLearningPlan}
              onCustomize={handleShowCustomizeHomeScreen}
              onUncashedCheques={handleShowUncashedCheques}
              onRemittanceVoucher={handleShowRemittanceVoucher}
              onCPPEIRuling={handleShowCPPEIRuling}
              onAuditEnquiries={handleShowAuditEnquiries}
              onCarryoverAmounts={handleShowCarryoverAmounts}
              onChangeMyReturn={handleShowChangeMyReturn}
              onRegisterFormalDispute={handleShowRegisterFormalDispute}
              onNonResidentAccount={handleShowNonResidentAccount}
              onResidencyDetermination={handleShowResidencyDetermination}
              onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
              onProgressTrackerService={handleShowProgressTrackerService}
              onReliefOfPenalties={handleShowReliefOfPenalties}
              onSubmitDocuments={handleShowSubmitDocuments}
              openNoticeOfAssessmentOnMount={openNoticeOfAssessmentOnMount}
            />
          </div>
          <BottomNav active={'none'} onNavigate={handleNavigate} />
        </div>
      </IPhoneMockup>
    );
  }

  if (showProofOfIncome) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <ProofOfIncomeScreen 
                  onBack={handleBackFromProofOfIncome} 
                  onViewMail={() => {
                    setShowProofOfIncome(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onNavigateHome={handleReturnHome}
                  onLogoClick={handleReturnHome}
                  onFileTaxes={() => {
                    setShowProofOfIncome(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowProofOfIncome(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onViewAllBenefits={() => {
                    setShowProofOfIncome(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowProofOfIncome(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowProofOfIncome(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowProofOfIncome(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowProofOfIncome(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  onSearchClick={() => setShowSearchMenu(true)}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={() => {
                    setShowProofOfIncome(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowProofOfIncome(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowProofOfIncome(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowProofOfIncome(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowProofOfIncome(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowProofOfIncome(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowProofOfIncome(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowProofOfIncome(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowProofOfIncome(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowProofOfIncome(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowProofOfIncome(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowProofOfIncome(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onBecomeRepresentative={() => {
                    setShowProofOfIncome(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowProofOfIncome(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowProofOfIncome(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowProofOfIncome(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowProofOfIncome(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowProofOfIncome(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowProofOfIncome(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowProofOfIncome(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowProofOfIncome(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowProofOfIncome(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowProofOfIncome(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowProofOfIncome(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowProofOfIncome(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                  onUserFeedback={() => {
                    setShowProofOfIncome(false);
                    handleShowUserFeedback('Proof of Income');
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showHomeBuyersPlan) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <HomeBuyersPlanScreen 
                  onBack={() => { setShowHomeBuyersPlan(false); scrollToTop(); }}
                  onViewMail={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={() => {
                    setShowHomeBuyersPlan(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onBecomeRepresentative={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowHomeBuyersPlan(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onFHSA={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowHomeBuyersPlan(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowHomeBuyersPlan(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showLifelongLearningPlan) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <LifelongLearningPlanScreen 
                  onBack={() => { setShowLifelongLearningPlan(false); scrollToTop(); }}
                  onViewMail={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowCRAMail();
                    scrollToTop();
                  }}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={() => {
                    setShowLifelongLearningPlan(false);
                    handleStartFiling();
                    scrollToTop();
                  }}
                  onMakePayment={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowMakePayment();
                    scrollToTop();
                  }}
                  onBenefitsAndCredits={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowAllBenefits();
                    scrollToTop();
                  }}
                  onRegisteredPlans={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowRegisteredPlans();
                    scrollToTop();
                  }}
                  onHelp={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowHelp();
                    scrollToTop();
                  }}
                  onSignOut={handleLogout}
                  onTaxSlips={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowTaxSlips();
                    scrollToTop();
                  }}
                  onProofOfIncome={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowProofOfIncome();
                    scrollToTop();
                  }}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onBecomeRepresentative={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowBecomeRepresentative();
                    scrollToTop();
                  }}
                  onBecomeRepresentativeAsRep={() => {
                    setShowLifelongLearningPlan(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onViewRefundDetails={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowRefundDetails();
                    scrollToTop();
                  }}
                  onViewNoticeOfAssessment={() => {
                    setShowLifelongLearningPlan(false);
                    handleViewNoticeOfAssessment();
                    scrollToTop();
                  }}
                  onGSTHSTCredit={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowGSTHSTCredit();
                    scrollToTop();
                  }}
                  onAccountDetails={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowAccountDetails();
                    scrollToTop();
                  }}
                  onProfile={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowProfile();
                    scrollToTop();
                  }}
                  onViewTaxReturns={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowTaxReturns();
                    scrollToTop();
                  }}
                  onHomeBuyersPlan={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowHomeBuyersPlan();
                    scrollToTop();
                  }}
                  onFHSAEligibility={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowFHSAEligibility();
                    scrollToTop();
                  }}
                  onLifelongLearningPlan={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowLifelongLearningPlan();
                    scrollToTop();
                  }}
                  onCustomize={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowCustomizeHomeScreen();
                    scrollToTop();
                  }}
                  onUncashedCheques={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowUncashedCheques();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowRemittanceVoucher();
                    scrollToTop();
                  }}
                  onCPPEIRuling={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowCPPEIRuling();
                    scrollToTop();
                  }}
                  onAuditEnquiries={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowAuditEnquiries();
                    scrollToTop();
                  }}
                  onCarryoverAmounts={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowCarryoverAmounts();
                    scrollToTop();
                  }}
                  onChangeMyReturn={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowChangeMyReturn();
                    scrollToTop();
                  }}
                  onRegisterFormalDispute={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowRegisterFormalDispute();
                    scrollToTop();
                  }}
                  onNonResidentAccount={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowNonResidentAccount();
                    scrollToTop();
                  }}
                  onResidencyDetermination={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowResidencyDetermination();
                    scrollToTop();
                  }}
                  onPersonalIdentificationNumber={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowPersonalIdentificationNumber();
                    scrollToTop();
                  }}
                  onProgressTrackerService={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowProgressTrackerService();
                    scrollToTop();
                  }}
                  onReliefOfPenalties={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowReliefOfPenalties();
                    scrollToTop();
                  }}
                  onSubmitDocuments={() => {
                    setShowLifelongLearningPlan(false);
                    handleShowSubmitDocuments();
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showUncashedCheques) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <UncashedChequesScreen 
                  onBack={handleBackFromUncashedCheques}
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
                  onUncashedCheques={handleShowUncashedCheques}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showRemittanceVoucher) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <RemittanceVoucherScreen 
                  onBack={handleBackFromRemittanceVoucher}
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showCPPEIRuling) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <CPPEIRulingScreen 
                  onBack={handleBackFromCPPEIRuling}
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onStartForm={handleStartCPPEIRulingForm}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showCPPEIRulingForm) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <CPPEIRulingFormStep1Screen 
                  onBack={handleBackFromCPPEIRulingForm}
                  onNext={handleCPPEIRulingFormStep1Next}
                  onStepClick={handleCPPEIRulingStepNavigation}
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                  requester={cppeiRequester}
                  setRequester={setCppeiRequester}
                  rulingReason={cppeiRulingReason}
                  setRulingReason={setCppeiRulingReason}
                  relationship={cppeiRelationship}
                  setRelationship={setCppeiRelationship}
                  otherReason={cppeiOtherReason}
                  setOtherReason={setCppeiOtherReason}
                  isRestructuring={cppeiIsRestructuring}
                  setIsRestructuring={setCppeiIsRestructuring}
                  restructuringDate={cppeiRestructuringDate}
                  setRestructuringDate={setCppeiRestructuringDate}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showCPPEIRulingFormStep2New) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <CPPEIRulingFormStep2ScreenNew 
                  onBack={handleBackFromCPPEIRulingFormStep2New}
                  onNext={handleCPPEIRulingFormStep2NewNext}
                  onStepClick={handleCPPEIRulingStepNavigation}
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                  startDate={cppeiStartDate}
                  setStartDate={setCppeiStartDate}
                  endDate={cppeiEndDate}
                  setEndDate={setCppeiEndDate}
                  isOngoing={cppeiIsOngoing}
                  setIsOngoing={setCppeiIsOngoing}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showCPPEIRulingFormStep2) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <CPPEIRulingFormStep2Screen 
                  onBack={handleBackFromCPPEIRulingFormStep2}
                  onNext={handleCPPEIRulingFormStep2Next}
                  onStepClick={handleCPPEIRulingStepNavigation}
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                  firstName={cppeiFirstName}
                  setFirstName={setCppeiFirstName}
                  lastName={cppeiLastName}
                  setLastName={setCppeiLastName}
                  sin={cppeiSin}
                  setSin={setCppeiSin}
                  phoneNumber={cppeiPhoneNumber}
                  setPhoneNumber={setCppeiPhoneNumber}
                  email={cppeiEmail}
                  setEmail={setCppeiEmail}
                  address={cppeiAddress}
                  setAddress={setCppeiAddress}
                  city={cppeiCity}
                  setCity={setCppeiCity}
                  province={cppeiProvince}
                  setProvince={setCppeiProvince}
                  postalCode={cppeiPostalCode}
                  setPostalCode={setCppeiPostalCode}
                  country={cppeiCountry}
                  setCountry={setCppeiCountry}
                  additionalInfo={cppeiAdditionalInfo}
                  setAdditionalInfo={setCppeiAdditionalInfo}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showCPPEIRulingFormStep3) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <CPPEIRulingFormStep3Screen 
                  onBack={handleBackFromCPPEIRulingFormStep3}
                  onNext={handleCPPEIRulingFormStep3Next}
                  onStepClick={handleCPPEIRulingStepNavigation}
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                  legalBusinessName={cppeiLegalBusinessName}
                  setLegalBusinessName={setCppeiLegalBusinessName}
                  tradingName={cppeiTradingName}
                  setTradingName={setCppeiTradingName}
                  mailingAddress={cppeiMailingAddress}
                  setMailingAddress={setCppeiMailingAddress}
                  businessNumber={cppeiBusinessNumber}
                  setBusinessNumber={setCppeiBusinessNumber}
                  bnUnknown={cppeiBnUnknown}
                  setBnUnknown={setCppeiBnUnknown}
                  bnNone={cppeiBnNone}
                  setBnNone={setCppeiBnNone}
                  provinceTerritory={cppeiProvinceTerritory}
                  setProvinceTerritory={setCppeiProvinceTerritory}
                  natureOfBusiness={cppeiNatureOfBusiness}
                  setNatureOfBusiness={setCppeiNatureOfBusiness}
                  contact1Name={cppeiContact1Name}
                  setContact1Name={setCppeiContact1Name}
                  contact1Title={cppeiContact1Title}
                  setContact1Title={setCppeiContact1Title}
                  contact1Cell={cppeiContact1Cell}
                  setContact1Cell={setCppeiContact1Cell}
                  contact1Work={cppeiContact1Work}
                  setContact1Work={setCppeiContact1Work}
                  contact1Language={cppeiContact1Language}
                  setContact1Language={setCppeiContact1Language}
                  contact2Name={cppeiContact2Name}
                  setContact2Name={setCppeiContact2Name}
                  contact2Title={cppeiContact2Title}
                  setContact2Title={setCppeiContact2Title}
                  contact2Cell={cppeiContact2Cell}
                  setContact2Cell={setCppeiContact2Cell}
                  contact2Work={cppeiContact2Work}
                  setContact2Work={setCppeiContact2Work}
                  contact2Language={cppeiContact2Language}
                  setContact2Language={setCppeiContact2Language}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showCPPEIRulingFormStep4) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <CPPEIRulingFormStep4Screen 
                  onBack={handleBackFromCPPEIRulingFormStep4}
                  onNext={handleCPPEIRulingFormStep4Submit}
                  onStepClick={handleCPPEIRulingStepNavigation}
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                  declarationAccepted={cppeiDeclarationAccepted}
                  setDeclarationAccepted={setCppeiDeclarationAccepted}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showCPPEIRulingConfirmation) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <CPPEIRulingConfirmationScreen 
                  onBack={handleBackFromCPPEIRulingConfirmation}
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showAuditEnquiries) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <AuditEnquiriesScreen 
                  onBack={handleBackFromAuditEnquiries}
                  onSubmit={handleAuditEnquiriesSubmit}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewMail={handleShowCRAMail}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showAuditEnquiriesConfirmation) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <AuditEnquiriesConfirmationScreen 
                  onReturnHome={handleReturnHome}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showRegisterFormalDispute) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <RegisterFormalDisputeScreen 
                  onBack={handleBackFromRegisterFormalDispute}
                  onSubmit={handleRegisterFormalDisputeSubmit}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewMail={handleShowCRAMail}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showRegisterFormalDisputeConfirmation) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <RegisterFormalDisputeConfirmationScreen 
                  onDone={handleReturnHome}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewMail={handleShowCRAMail}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showNonResidentAccount) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <NonResidentAccountScreen 
                  onBack={handleBackFromNonResidentAccount}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewMail={handleShowCRAMail}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showResidencyDetermination) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <ResidencyDeterminationScreen 
                  onBack={handleBackFromResidencyDetermination}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewMail={handleShowCRAMail}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showPersonalIdentificationNumber) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <PersonalIdentificationNumberScreen 
                  onBack={handleBackFromPersonalIdentificationNumber}
                  onCreatePIN={handleCreatePIN}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewMail={handleShowCRAMail}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onBecomeRepresentativeAsRep={() => {
                    setShowPersonalIdentificationNumber(false);
                    handleBecomeRepresentativeAsRep();
                    scrollToTop();
                  }}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showCreatePINConfirmation) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <CreatePINConfirmationScreen 
                  onBack={handleBackFromCreatePINConfirmation}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewMail={handleShowCRAMail}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showLockAccount) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <LockAccountScreen 
                  onBack={handleBackFromLockAccount}
                  onChangePassword={handleShowChangePassword}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewMail={handleShowCRAMail}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showProgressTrackerService) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <ProgressTrackerServiceScreen 
                  onBack={handleBackFromProgressTrackerService}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewMail={handleShowCRAMail}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} customNavItems={customizedBottomNavItems.length > 0 ? customizedBottomNavItems : undefined} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showReliefOfPenalties) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <ReliefOfPenaltiesScreen 
                  onBack={handleBackFromReliefOfPenalties}
                  onRequestRelief={handleShowRequestReliefForm}
                  onViewReliefRequestPDF={handleShowReliefRequestPDFViewer}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewMail={handleShowCRAMail}
                  onSearchClick={() => setShowSearchMenu(true)}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} customNavItems={customizedBottomNavItems.length > 0 ? customizedBottomNavItems : undefined} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showRequestReliefForm) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <RequestReliefFormScreen 
                  onBack={handleBackFromRequestReliefForm}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewMail={handleShowCRAMail}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} customNavItems={customizedBottomNavItems.length > 0 ? customizedBottomNavItems : undefined} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showReliefRequestPDFViewer) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <ReliefRequestPDFViewer 
              onBack={handleBackFromReliefRequestPDFViewer}
            />
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showSubmitDocuments) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <SubmitDocumentsScreen 
                  onBack={handleBackFromSubmitDocuments}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewMail={handleShowCRAMail}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} customNavItems={customizedBottomNavItems.length > 0 ? customizedBottomNavItems : undefined} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showUserFeedback) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <UserFeedbackScreen 
                  onBack={handleBackFromUserFeedback}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewMail={handleShowCRAMail}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                  onUserFeedback={() => handleShowUserFeedback(feedbackContext)}
                  currentPageContext={feedbackContext}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} customNavItems={customizedBottomNavItems.length > 0 ? customizedBottomNavItems : undefined} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showCarryoverAmounts) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <CarryoverAmountsScreen 
                  onBack={handleBackFromCarryoverAmounts}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewMail={handleShowCRAMail}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onViewCarryForwardRules={handleShowCarryoverAmountRules}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showCarryoverAmountRules) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <CarryoverAmountRulesScreen 
                  onBack={handleBackFromCarryoverAmountRules}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewMail={handleShowCRAMail}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showChangeReturnConfirmation) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <ChangeReturnConfirmationScreen
              year={changeReturnYear}
              onReturnHome={handleBackFromChangeReturnConfirmation}
            />
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showChangeReturnForm) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <ChangeReturnFormScreen 
                  year={changeReturnYear}
                  onBack={handleBackFromChangeReturnForm}
                  onSubmit={handleSubmitChangeReturn}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewMail={handleShowCRAMail}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showChangeMyReturn) {
    return (
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
                <ChangeMyReturnScreen 
                  onBack={handleBackFromChangeMyReturn}
                  onRequestChange={handleRequestChangeReturn}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onViewMail={handleShowCRAMail}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onBecomeRepresentative={handleBecomeRepresentative}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showCustomizeHomeScreen) {
    return (
      <DndProvider backend={HTML5Backend}>
        <IPhoneMockup>
          <Toaster position="top-center" />
          <div className="h-full bg-[#F2F2F2] flex flex-col">
            <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
              <CustomizeHomeScreen 
                onNavigateHome={handleReturnHome}
                onNavigateProfile={() => handleNavigate('profile')}
                onViewMail={handleShowCRAMail}
                onFileTaxes={handleStartFiling}
                onMakePayment={handleShowMakePayment}
                onBenefitsAndCredits={handleShowAllBenefits}
                onRegisteredPlans={handleShowRegisteredPlans}
                onHelp={handleShowHelp}
                onSignOut={handleLogout}
                onTaxSlips={handleShowTaxSlips}
                onProofOfIncome={handleShowProofOfIncome}
                onSaveChanges={handleSaveCustomization}
                scrollContainerRef={scrollContainerRef}
                hasUnreadMail={!noticeOfAssessmentRead}
                onViewAllBenefits={handleShowAllBenefits}
                onViewRefundDetails={handleShowRefundDetails}
                onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                onGSTHSTCredit={handleShowGSTHSTCredit}
                onAccountDetails={handleShowAccountDetails}
                onProfile={handleShowProfile}
                onViewTaxReturns={handleShowTaxReturns}
                onHomeBuyersPlan={handleShowHomeBuyersPlan}
                onFHSAEligibility={handleShowFHSAEligibility}
                onLifelongLearningPlan={handleShowLifelongLearningPlan}
                onCustomize={handleShowCustomizeHomeScreen}
                onUncashedCheques={handleShowUncashedCheques}
                onBecomeRepresentative={handleBecomeRepresentative}
                onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
                onRemittanceVoucher={handleShowRemittanceVoucher}
                onCPPEIRuling={handleShowCPPEIRuling}
                onAuditEnquiries={handleShowAuditEnquiries}
                onCarryoverAmounts={handleShowCarryoverAmounts}
                onChangeMyReturn={handleShowChangeMyReturn}
                onRegisterFormalDispute={handleShowRegisterFormalDispute}
                onNonResidentAccount={handleShowNonResidentAccount}
                onResidencyDetermination={handleShowResidencyDetermination}
                onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                onProgressTrackerService={handleShowProgressTrackerService}
                onReliefOfPenalties={handleShowReliefOfPenalties}
                onSubmitDocuments={handleShowSubmitDocuments}
              />
            </div>
            <BottomNav active={'none'} onNavigate={handleNavigate} />
          </div>
        </IPhoneMockup>
      </DndProvider>
    );
  }

  if (showSimplifiedMakePayment) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div id="scrollable-content" ref={scrollContainerRef} className="flex-1 overflow-y-auto relative app-scroll-container">
                <SimplifiedMakePaymentScreen 
                  onBack={handleBackFromPayment}
                  onContinue={handleSimplifiedContinueToConfirm}
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowSimplifiedMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  onMorePaymentInfo={handleShowMorePaymentInfo}
                  hasUnreadMail={!noticeOfAssessmentRead}
                  onViewRefundDetails={handleShowRefundDetails}
                  onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
                  onGSTHSTCredit={handleShowGSTHSTCredit}
                  onAccountDetails={handleShowAccountDetails}
                  onProfile={handleShowProfile}
                  onViewTaxReturns={handleShowTaxReturns}
                  onHomeBuyersPlan={handleShowHomeBuyersPlan}
                  onFHSAEligibility={handleShowFHSAEligibility}
                  onBecomeRepresentative={handleShowBecomeRepresentative}
                  onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
                  onLifelongLearningPlan={handleShowLifelongLearningPlan}
                  onCustomize={handleShowCustomizeHomeScreen}
                  onUncashedCheques={handleShowUncashedCheques}
                  onRemittanceVoucher={handleShowRemittanceVoucher}
                  onCPPEIRuling={handleShowCPPEIRuling}
                  onAuditEnquiries={handleShowAuditEnquiries}
                  onCarryoverAmounts={handleShowCarryoverAmounts}
                  onChangeMyReturn={handleShowChangeMyReturn}
                  onRegisterFormalDispute={handleShowRegisterFormalDispute}
                  onNonResidentAccount={handleShowNonResidentAccount}
                  onResidencyDetermination={handleShowResidencyDetermination}
                  onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
                  onProgressTrackerService={handleShowProgressTrackerService}
                  onReliefOfPenalties={handleShowReliefOfPenalties}
                  onSubmitDocuments={handleShowSubmitDocuments}
                  onUserFeedback={() => {
                    setShowSimplifiedMakePayment(false);
                    handleShowUserFeedback('Make a Payment');
                    scrollToTop();
                  }}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showMorePaymentInfo) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div id="scrollable-content" ref={scrollContainerRef} className="flex-1 overflow-y-auto relative app-scroll-container">
                <MorePaymentInfoScreen 
                  onBack={() => { setShowMorePaymentInfo(false); setShowSimplifiedMakePayment(true); scrollToTop(); }}
                  onViewMail={handleShowCRAMail}
                  onNavigateHome={handleReturnHome}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowSimplifiedMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  hasUnreadMail={!noticeOfAssessmentRead}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showOnlineBanking) {
    return (
      <IPhoneMockup>
        <AnimatePresence mode="wait">
          <ScreenTransition transitionKey={screenKey}>
            <div className="h-full bg-[#F2F2F2] flex flex-col">
              <div id="scrollable-content" ref={scrollContainerRef} className="flex-1 overflow-y-auto relative app-scroll-container">
                <OnlineBankingScreen 
                  onBack={() => { setShowOnlineBanking(false); scrollToTop(); }}
                  onNavigateHome={handleReturnHome}
                  onViewMail={handleShowCRAMail}
                  onFileTaxes={handleStartFiling}
                  onMakePayment={handleShowMakePayment}
                  onBenefitsAndCredits={handleShowAllBenefits}
                  onRegisteredPlans={handleShowRegisteredPlans}
                  onHelp={handleShowHelp}
                  onSignOut={handleLogout}
                  onTaxSlips={handleShowTaxSlips}
                  onProofOfIncome={handleShowProofOfIncome}
                  hasUnreadMail={!noticeOfAssessmentRead}
                />
              </div>
              <BottomNav active={'none'} onNavigate={handleNavigate} />
            </div>
          </ScreenTransition>
        </AnimatePresence>
      </IPhoneMockup>
    );
  }

  if (showAllBenefits) {
    return (
      <IPhoneMockup>
        <div className="h-full bg-[#F2F2F2] flex flex-col">
          <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
            <AllBenefitsScreen 
              onBack={() => { setShowAllBenefits(false); scrollToTop(); }}
              onNavigateHome={handleReturnHome}
              onViewMail={handleShowCRAMail}
              onFileTaxes={handleStartFiling}
              onMakePayment={handleShowMakePayment}
              onBenefitsAndCredits={handleShowAllBenefits}
              onRegisteredPlans={handleShowRegisteredPlans}
              onHelp={handleShowHelp}
              onSignOut={handleLogout}
              onTaxSlips={handleShowTaxSlips}
              onProofOfIncome={handleShowProofOfIncome}
              hasUnreadMail={!noticeOfAssessmentRead}
              onShowPrivacy={handleShowPrivacy}
              onShowTerms={handleShowTerms}
              onGSTHSTCredit={handleShowGSTHSTCredit}
              onViewRefundDetails={handleShowRefundDetails}
              onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
              onAccountDetails={handleShowAccountDetails}
              onProfile={handleShowProfile}
              onViewTaxReturns={handleShowTaxReturns}
              onHomeBuyersPlan={handleShowHomeBuyersPlan}
              onFHSAEligibility={handleShowFHSAEligibility}
              onLifelongLearningPlan={handleShowLifelongLearningPlan}
              onCustomize={handleShowCustomizeHomeScreen}
              onUncashedCheques={handleShowUncashedCheques}
              onBecomeRepresentative={handleShowBecomeRepresentative}
              onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
              onRemittanceVoucher={handleShowRemittanceVoucher}
              onCPPEIRuling={handleShowCPPEIRuling}
              onAuditEnquiries={handleShowAuditEnquiries}
              onCarryoverAmounts={handleShowCarryoverAmounts}
              onChangeMyReturn={handleShowChangeMyReturn}
              onRegisterFormalDispute={handleShowRegisterFormalDispute}
              onNonResidentAccount={handleShowNonResidentAccount}
              onResidencyDetermination={handleShowResidencyDetermination}
              onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
              onProgressTrackerService={handleShowProgressTrackerService}
              onReliefOfPenalties={handleShowReliefOfPenalties}
              onSubmitDocuments={handleShowSubmitDocuments}
            />
          </div>
          <BottomNav active={'none'} onNavigate={handleNavigate} />
        </div>
      </IPhoneMockup>
    );
  }

  if (showBalanceOwingDetails) {
    return (
      <IPhoneMockup>
        <div className="h-full bg-[#F2F2F2] flex flex-col">
          <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
            <BalanceOwingDetailsScreen 
              onBack={() => { setShowBalanceOwingDetails(false); scrollToTop(); }}
              onNavigateHome={handleReturnHome}
              onViewMail={handleShowCRAMail}
              onFileTaxes={handleStartFiling}
              onMakePayment={handleShowMakePayment}
              onBenefitsAndCredits={handleShowAllBenefits}
              onRegisteredPlans={handleShowRegisteredPlans}
              onHelp={handleShowHelp}
              onSignOut={handleLogout}
              onTaxSlips={handleShowTaxSlips}
              onProofOfIncome={handleShowProofOfIncome}
              hasUnreadMail={!noticeOfAssessmentRead}
              onViewRefundDetails={handleShowRefundDetails}
              onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
              onGSTHSTCredit={handleShowGSTHSTCredit}
              onAccountDetails={handleShowAccountDetails}
              onProfile={handleShowProfile}
              onViewTaxReturns={handleShowTaxReturns}
              onHomeBuyersPlan={handleShowHomeBuyersPlan}
              onFHSAEligibility={handleShowFHSAEligibility}
              onBecomeRepresentative={handleBecomeRepresentative}
              onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
              onLifelongLearningPlan={handleShowLifelongLearningPlan}
              onCustomize={handleShowCustomizeHomeScreen}
              onUncashedCheques={handleShowUncashedCheques}
              onRemittanceVoucher={handleShowRemittanceVoucher}
              onCPPEIRuling={handleShowCPPEIRuling}
              onAuditEnquiries={handleShowAuditEnquiries}
              onCarryoverAmounts={handleShowCarryoverAmounts}
              onChangeMyReturn={handleShowChangeMyReturn}
              onRegisterFormalDispute={handleShowRegisterFormalDispute}
              onNonResidentAccount={handleShowNonResidentAccount}
              onResidencyDetermination={handleShowResidencyDetermination}
              onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
              onProgressTrackerService={handleShowProgressTrackerService}
              onReliefOfPenalties={handleShowReliefOfPenalties}
              onSubmitDocuments={handleShowSubmitDocuments}
            />
          </div>
          <BottomNav active={'none'} onNavigate={handleNavigate} />
        </div>
      </IPhoneMockup>
    );
  }

  if (showRefundDetails) {
    return (
      <IPhoneMockup>
        <div className="h-full bg-[#F2F2F2] flex flex-col">
          <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
            <RefundDetailsScreen 
              onBack={() => { setShowRefundDetails(false); scrollToTop(); }}
              onNavigateHome={handleReturnHome}
              onViewMail={handleShowCRAMail}
              onFileTaxes={handleStartFiling}
              onMakePayment={handleShowMakePayment}
              onBenefitsAndCredits={handleShowAllBenefits}
              onRegisteredPlans={handleShowRegisteredPlans}
              onHelp={handleShowHelp}
              onSignOut={handleLogout}
              onTaxSlips={handleShowTaxSlips}
              onProofOfIncome={handleShowProofOfIncome}
              onViewRefundDetails={handleShowRefundDetails}
              onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
              onGSTHSTCredit={handleShowGSTHSTCredit}
              onAccountDetails={handleShowAccountDetails}
              onProfile={handleShowProfile}
              onViewTaxReturns={handleShowTaxReturns}
              onHomeBuyersPlan={handleShowHomeBuyersPlan}
              onFHSAEligibility={handleShowFHSAEligibility}
              onBecomeRepresentative={handleBecomeRepresentative}
              onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep}
              onLifelongLearningPlan={handleShowLifelongLearningPlan}
              onCustomize={handleShowCustomizeHomeScreen}
              onUncashedCheques={handleShowUncashedCheques}
              onRemittanceVoucher={handleShowRemittanceVoucher}
              onCPPEIRuling={handleShowCPPEIRuling}
              onAuditEnquiries={handleShowAuditEnquiries}
              onCarryoverAmounts={handleShowCarryoverAmounts}
              onChangeMyReturn={handleShowChangeMyReturn}
              onRegisterFormalDispute={handleShowRegisterFormalDispute}
              onNonResidentAccount={handleShowNonResidentAccount}
              onResidencyDetermination={handleShowResidencyDetermination}
              onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
              onProgressTrackerService={handleShowProgressTrackerService}
              onReliefOfPenalties={handleShowReliefOfPenalties}
              onSubmitDocuments={handleShowSubmitDocuments}
            />
          </div>
          <BottomNav active={'none'} onNavigate={handleNavigate} />
        </div>
      </IPhoneMockup>
    );
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <IPhoneMockup>
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          <motion.div 
            key="main-app"
            className="h-full bg-[#F2F2F2] flex flex-col overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div ref={scrollContainerRef} className="flex-1 overflow-y-auto app-scroll-container">
              {activeScreen === 'home' && !showHomeWithPaymentConfirmation && !showLimitedDashboard && <DashboardScreen onMakePayment={handleShowSimplifiedMakePayment} onFileTaxes={handleStartFiling} onViewNoticeOfAssessment={handleViewNoticeOfAssessment} onViewMail={handleShowCRAMail} onRegisteredPlans={handleShowRegisteredPlans} onLogoClick={handleLogout} hasUnreadMail={!noticeOfAssessmentRead} onViewBalanceOwingDetails={handleShowBalanceOwingDetails} onViewRefundDetails={handleShowRefundDetails} onViewAllBenefits={handleShowAllBenefits} onHelp={handleShowHelp} onSignOut={handleLogout} onTaxSlips={handleShowTaxSlips} onProofOfIncome={handleShowProofOfIncome} onBecomeRepresentative={handleBecomeRepresentative} onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep} onCustomize={handleShowCustomizeHomeScreen} customMostRequested={customizedMostRequested} customNumberOfRows={customizedNumberOfRows} customMenuItems={customizedMenuItems} onSwapMostRequested={handleSwapMostRequested} onGSTHSTCredit={handleShowGSTHSTCredit} onAccountDetails={handleShowAccountDetails} onProfile={handleShowProfile} onViewTaxReturns={handleShowTaxReturns} onHomeBuyersPlan={handleShowHomeBuyersPlan} onFHSAEligibility={handleShowFHSAEligibility} onLifelongLearningPlan={handleShowLifelongLearningPlan} onUncashedCheques={handleShowUncashedCheques} onRemittanceVoucher={handleShowRemittanceVoucher} onCPPEIRuling={handleShowCPPEIRuling} onAuditEnquiries={handleShowAuditEnquiries} onCarryoverAmounts={handleShowCarryoverAmounts} onChangeMyReturn={handleShowChangeMyReturn} onRegisterFormalDispute={handleShowRegisterFormalDispute} onNonResidentAccount={handleShowNonResidentAccount} onResidencyDetermination={handleShowResidencyDetermination} onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber} onProgressTrackerService={handleShowProgressTrackerService} onReliefOfPenalties={handleShowReliefOfPenalties} onSubmitDocuments={handleShowSubmitDocuments} onUserFeedback={() => handleShowUserFeedback('Home')} />}
              {activeScreen === 'home' && !showHomeWithPaymentConfirmation && showLimitedDashboard && <DashboardLimitedMailScreen onNavigateHome={handleUnlockFullAccount} onLogoClick={handleLogout} onFileTaxes={handleStartFiling} onBenefitsAndCredits={handleShowAllBenefits} onMakePayment={handleShowSimplifiedMakePayment} onViewMail={handleShowCRAMail} onRegisteredPlans={handleShowRegisteredPlans} onHelp={handleShowHelp} onSignOut={handleLogout} hasUnreadMail={!noticeOfAssessmentRead} onRemittanceVoucher={handleShowRemittanceVoucher} />}
              {activeScreen === 'home' && showHomeWithPaymentConfirmation && <HomeWithPaymentConfirmationScreen onMakePayment={handleShowSimplifiedMakePayment} onFileTaxes={handleStartFiling} onViewNoticeOfAssessment={handleViewNoticeOfAssessment} onViewMail={handleShowCRAMail} onRegisteredPlans={handleShowRegisteredPlans} onNavigateHome={handleReturnHome} onBenefitsAndCredits={handleShowAllBenefits} onHelp={handleShowHelp} onSignOut={handleLogout} onTaxSlips={handleShowTaxSlips} onProofOfIncome={handleShowProofOfIncome} onProfile={handleShowProfile} onViewRefundDetails={handleShowRefundDetails} onGSTHSTCredit={handleShowGSTHSTCredit} onAccountDetails={handleShowAccountDetails} onViewTaxReturns={handleShowTaxReturns} onHomeBuyersPlan={handleShowHomeBuyersPlan} onFHSAEligibility={handleShowFHSAEligibility} onBecomeRepresentative={handleBecomeRepresentative} onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep} />}
              {activeScreen === 'returns' && <TaxReturnsScreen onBack={handleReturnHome} onStartFiling={handleStartFiling} onViewMail={handleShowCRAMail} onNavigateHome={handleReturnHome} onViewNotice={handleViewNoticeOfAssessment} hasUnreadMail={!noticeOfAssessmentRead} onFileTaxes={handleStartFiling} onMakePayment={handleShowMakePayment} onBenefitsAndCredits={handleShowAllBenefits} onRegisteredPlans={handleShowRegisteredPlans} onHelp={handleShowHelp} onSignOut={handleLogout} onTaxSlips={handleShowTaxSlips} onProofOfIncome={handleShowProofOfIncome} onUserFeedback={() => handleShowUserFeedback('Tax Returns')} onViewRefundDetails={handleShowRefundDetails} onViewNoticeOfAssessment={handleViewNoticeOfAssessment} onGSTHSTCredit={handleShowGSTHSTCredit} onAccountDetails={handleShowAccountDetails} onProfile={handleShowProfile} onViewTaxReturns={handleShowTaxReturns} onHomeBuyersPlan={handleShowHomeBuyersPlan} onFHSAEligibility={handleShowFHSAEligibility} onLifelongLearningPlan={handleShowLifelongLearningPlan} onCustomize={handleShowCustomizeHomeScreen} onUncashedCheques={handleShowUncashedCheques} onRemittanceVoucher={handleShowRemittanceVoucher} onBecomeRepresentative={handleBecomeRepresentative} onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep} onCPPEIRuling={handleShowCPPEIRuling} onAuditEnquiries={handleShowAuditEnquiries} onCarryoverAmounts={handleShowCarryoverAmounts} onChangeMyReturn={handleShowChangeMyReturn} onRegisterFormalDispute={handleShowRegisterFormalDispute} onNonResidentAccount={handleShowNonResidentAccount} onResidencyDetermination={handleShowResidencyDetermination} onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber} onProgressTrackerService={handleShowProgressTrackerService} onReliefOfPenalties={handleShowReliefOfPenalties} onSubmitDocuments={handleShowSubmitDocuments} />}
              {activeScreen === 'payments' && <PaymentsScreen onMakePayment={handleShowMakePayment} onViewMail={handleShowCRAMail} onNavigateHome={handleReturnHome} onFileTaxes={handleStartFiling} onBenefitsAndCredits={handleShowAllBenefits} onRegisteredPlans={handleShowRegisteredPlans} onHelp={handleShowHelp} onSignOut={handleLogout} onTaxSlips={handleShowTaxSlips} onProofOfIncome={handleShowProofOfIncome} onOnlineBanking={handleShowOnlineBanking} onDirectDeposit={handleShowEditDirectDeposit} onUserFeedback={() => handleShowUserFeedback('Payments')} onViewRefundDetails={handleShowRefundDetails} onViewNoticeOfAssessment={handleViewNoticeOfAssessment} onGSTHSTCredit={handleShowGSTHSTCredit} onAccountDetails={handleShowAccountDetails} onProfile={handleShowProfile} onViewTaxReturns={handleShowTaxReturns} onHomeBuyersPlan={handleShowHomeBuyersPlan} onFHSAEligibility={handleShowFHSAEligibility} onLifelongLearningPlan={handleShowLifelongLearningPlan} onCustomize={handleShowCustomizeHomeScreen} onUncashedCheques={handleShowUncashedCheques} onRemittanceVoucher={handleShowRemittanceVoucher} onBecomeRepresentative={handleBecomeRepresentative} onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep} onCPPEIRuling={handleShowCPPEIRuling} onAuditEnquiries={handleShowAuditEnquiries} onCarryoverAmounts={handleShowCarryoverAmounts} onChangeMyReturn={handleShowChangeMyReturn} onRegisterFormalDispute={handleShowRegisterFormalDispute} onNonResidentAccount={handleShowNonResidentAccount} onResidencyDetermination={handleShowResidencyDetermination} onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber} onProgressTrackerService={handleShowProgressTrackerService} onReliefOfPenalties={handleShowReliefOfPenalties} onSubmitDocuments={handleShowSubmitDocuments} hasUnreadMail={!noticeOfAssessmentRead} />}
              {activeScreen === 'documents' && <DocumentsScreen onViewMail={handleShowCRAMail} onNavigateHome={handleReturnHome} onLogoClick={handleReturnHome} hasUnreadMail={!noticeOfAssessmentRead} onFileTaxes={handleStartFiling} onMakePayment={handleShowMakePayment} onBenefitsAndCredits={handleShowAllBenefits} onRegisteredPlans={handleShowRegisteredPlans} onHelp={handleShowHelp} onSignOut={handleLogout} onTaxSlips={handleShowTaxSlips} onProofOfIncome={handleShowProofOfIncome} onUserFeedback={() => handleShowUserFeedback('Documents')} onViewRefundDetails={handleShowRefundDetails} onViewNoticeOfAssessment={handleViewNoticeOfAssessment} onGSTHSTCredit={handleShowGSTHSTCredit} onAccountDetails={handleShowAccountDetails} onProfile={handleShowProfile} onViewTaxReturns={handleShowTaxReturns} onHomeBuyersPlan={handleShowHomeBuyersPlan} onFHSAEligibility={handleShowFHSAEligibility} onLifelongLearningPlan={handleShowLifelongLearningPlan} onCustomize={handleShowCustomizeHomeScreen} onUncashedCheques={handleShowUncashedCheques} onRemittanceVoucher={handleShowRemittanceVoucher} onBecomeRepresentative={handleBecomeRepresentative} onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep} onCPPEIRuling={handleShowCPPEIRuling} onAuditEnquiries={handleShowAuditEnquiries} onCarryoverAmounts={handleShowCarryoverAmounts} onChangeMyReturn={handleShowChangeMyReturn} onRegisterFormalDispute={handleShowRegisterFormalDispute} onNonResidentAccount={handleShowNonResidentAccount} onResidencyDetermination={handleShowResidencyDetermination} onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber} onProgressTrackerService={handleShowProgressTrackerService} onReliefOfPenalties={handleShowReliefOfPenalties} onSubmitDocuments={handleShowSubmitDocuments} />}
              {activeScreen === 'messages' && <MessagesScreen onViewMail={handleShowCRAMail} onNavigateHome={handleReturnHome} onFileTaxes={handleStartFiling} onMakePayment={handleShowMakePayment} onBenefitsAndCredits={handleShowAllBenefits} onRegisteredPlans={handleShowRegisteredPlans} onHelp={handleShowHelp} onSignOut={handleLogout} onTaxSlips={handleShowTaxSlips} onProofOfIncome={handleShowProofOfIncome} onUserFeedback={() => handleShowUserFeedback('Messages')} onViewRefundDetails={handleShowRefundDetails} onViewNoticeOfAssessment={handleViewNoticeOfAssessment} onGSTHSTCredit={handleShowGSTHSTCredit} onAccountDetails={handleShowAccountDetails} onProfile={handleShowProfile} onViewTaxReturns={handleShowTaxReturns} onHomeBuyersPlan={handleShowHomeBuyersPlan} onFHSAEligibility={handleShowFHSAEligibility} onLifelongLearningPlan={handleShowLifelongLearningPlan} onCustomize={handleShowCustomizeHomeScreen} onUncashedCheques={handleShowUncashedCheques} onRemittanceVoucher={handleShowRemittanceVoucher} onBecomeRepresentative={handleBecomeRepresentative} onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep} onCPPEIRuling={handleShowCPPEIRuling} onAuditEnquiries={handleShowAuditEnquiries} onCarryoverAmounts={handleShowCarryoverAmounts} onChangeMyReturn={handleShowChangeMyReturn} onRegisterFormalDispute={handleShowRegisterFormalDispute} onNonResidentAccount={handleShowNonResidentAccount} onResidencyDetermination={handleShowResidencyDetermination} onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber} onProgressTrackerService={handleShowProgressTrackerService} onReliefOfPenalties={handleShowReliefOfPenalties} onSubmitDocuments={handleShowSubmitDocuments} hasUnreadMail={!noticeOfAssessmentRead} />}
              {activeScreen === 'profile' && <ProfileScreen onLogout={handleLogout} onEditName={handleShowEditName} onEditEmail={handleShowEditEmail} onEditPhone={handleShowEditPhone} onEditAddress={handleShowEditAddress} onEditDirectDeposit={handleShowEditDirectDeposit} onManageCards={handleShowManageCards} onInstalmentPaymentsReminders={handleShowInstalmentPaymentsReminders} onTwoStepVerification={handleShowTwoStepVerification} onChangePassword={handleShowChangePassword} onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber} onLockAccount={handleShowLockAccount} onTrustedDevices={handleShowTrustedDevices} onCustomizeHomeScreen={handleShowCustomizeHomeScreen} onLanguagePreference={handleShowLanguagePreference} onPrivacy={handleShowPrivacy} onTerms={handleShowTerms} onHelp={handleShowHelp} onViewMail={handleShowCRAMail} onNavigateHome={handleReturnHome} onFileTaxes={handleStartFiling} onMakePayment={handleShowMakePayment} onBenefitsAndCredits={handleShowAllBenefits} onRegisteredPlans={handleShowRegisteredPlans} onSignOut={handleLogout} onTaxSlips={handleShowTaxSlips} onProofOfIncome={handleShowProofOfIncome} onSpouseDetails={() => { setShowSpouseDetails(true); scrollToTop(); }} onChildDetails={(childName) => { setSelectedChild(childName); setShowChildDetails(true); scrollToTop(); }} onUserFeedback={() => { setShowUserFeedback(true); scrollToTop(); }} onShowAppVersion={handleShowAppVersion} onAddDependant={() => { setShowAddNewDependant(true); scrollToTop(); }} onBecomeRepresentative={handleBecomeRepresentative} onBecomeRepresentativeAsRep={handleBecomeRepresentativeAsRep} onHomeBuyersPlan={handleShowHomeBuyersPlan} onLifelongLearningPlan={handleShowLifelongLearningPlan} onViewRefundDetails={handleShowRefundDetails} onViewNoticeOfAssessment={handleViewNoticeOfAssessment} onGSTHSTCredit={handleShowGSTHSTCredit} onAccountDetails={handleShowAccountDetails} onProfile={handleShowProfile} onViewTaxReturns={handleShowTaxReturns} onFHSAEligibility={handleShowFHSAEligibility} onCPPEIRuling={handleShowCPPEIRuling} onAuditEnquiries={handleShowAuditEnquiries} onCarryoverAmounts={handleShowCarryoverAmounts} onChangeMyReturn={handleShowChangeMyReturn} onRegisterFormalDispute={handleShowRegisterFormalDispute} onNonResidentAccount={handleShowNonResidentAccount} onResidencyDetermination={handleShowResidencyDetermination} onProgressTrackerService={handleShowProgressTrackerService} onReliefOfPenalties={handleShowReliefOfPenalties} onSubmitDocuments={handleShowSubmitDocuments} onCustomize={handleShowCustomizeHomeScreen} onUncashedCheques={handleShowUncashedCheques} onRemittanceVoucher={handleShowRemittanceVoucher} onViewRepresentative={() => { setShowViewRepresentative(true); scrollToTop(); }} hasUnreadMail={!noticeOfAssessmentRead} />}
            </div>
            <BottomNav active={activeScreen} onNavigate={handleNavigate} />
          </motion.div>
        </AnimatePresence>
      </IPhoneMockup>
      
      {/* Global Search Menu */}
      <SearchMenu
        isOpen={showSearchMenu}
        onClose={() => setShowSearchMenu(false)}
        onViewRefundDetails={handleShowRefundDetails}
        onViewNoticeOfAssessment={handleViewNoticeOfAssessment}
        onRegisteredPlans={handleShowRegisteredPlans}
        onViewAllBenefits={handleShowAllBenefits}
        onTaxSlips={handleShowTaxSlips}
        onGSTHSTCredit={handleShowGSTHSTCredit}
        onAccountDetails={handleShowAccountDetails}
        onProfile={handleShowProfile}
        onViewMail={handleShowCRAMail}
        onProofOfIncome={handleShowProofOfIncome}
        onViewTaxReturns={handleShowTaxReturns}
        onBecomeRepresentative={handleBecomeRepresentative}
        onHomeBuyersPlan={handleShowHomeBuyersPlan}
        onFHSAEligibility={handleShowFHSAEligibility}
        onLifelongLearningPlan={handleShowLifelongLearningPlan}
        onCustomize={handleShowCustomizeHomeScreen}
        onUncashedCheques={handleShowUncashedCheques}
        onRemittanceVoucher={handleShowRemittanceVoucher}
        onCPPEIRuling={handleShowCPPEIRuling}
        onAuditEnquiries={handleShowAuditEnquiries}
        onCarryoverAmounts={handleShowCarryoverAmounts}
        onChangeMyReturn={handleShowChangeMyReturn}
        onRegisterFormalDispute={handleShowRegisterFormalDispute}
        onNonResidentAccount={handleShowNonResidentAccount}
        onResidencyDetermination={handleShowResidencyDetermination}
        onPersonalIdentificationNumber={handleShowPersonalIdentificationNumber}
        onProgressTrackerService={handleShowProgressTrackerService}
        onReliefOfPenalties={handleShowReliefOfPenalties}
        onSubmitDocuments={handleShowSubmitDocuments}
      />
    </DndProvider>
  );
}
