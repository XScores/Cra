import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, FileText, Building2, DollarSign, Calendar, AlertCircle, ExternalLink, Globe, Monitor, Smartphone } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface TaxFilingScreenProps {
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
  onBecomeRepresentativeAsRep?: () => void;
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
  onTaxFilingChanges?: () => void;
  onUserFeedback?: () => void;
}

interface TaxSoftware {
  name: string;
  pricing: string[];
  platforms: string[];
  url: string;
}

const taxSoftwareData: TaxSoftware[] = [
  {
    name: 'WebTax4U.ca',
    pricing: ['Paid', 'Free offerings based on tax situation'],
    platforms: ['Online'],
    url: 'https://secure.macront.com/WebTax4U.ca/'
  },
  {
    name: 'TaxFreeway',
    pricing: ['Paid', 'Free offerings based on tax situation'],
    platforms: ['Computer download', 'Mobile app'],
    url: 'https://www.taxfreeway.ca'
  },
  {
    name: 'Wealthsimple Tax',
    pricing: ['Free', 'Optional paid services'],
    platforms: ['Online'],
    url: 'https://www.wealthsimple.com/en-ca/tax'
  },
  {
    name: 'StudioTax',
    pricing: ['Free (mobile app)', 'Paid (computer download)', 'Free offerings based on tax situation'],
    platforms: ['Computer download', 'Mobile app'],
    url: 'https://www.studiotax.com'
  },
  {
    name: 'EachTax',
    pricing: ['Free', 'Paid', 'Free offerings based on tax situation'],
    platforms: ['Online'],
    url: 'https://www.eachtax.com/secure/home.php'
  },
  {
    name: 'FutureTax',
    pricing: ['Paid', 'Free offerings based on tax situation'],
    platforms: ['Computer download'],
    url: 'https://www.futuretax.ca'
  },
  {
    name: 'CloudTax',
    pricing: ['Free', 'Optional paid services'],
    platforms: ['Online', 'Mobile app'],
    url: 'https://www.cloudtax.ca'
  },
  {
    name: 'H&R Block Tax Software Free',
    pricing: ['Paid', 'Free offerings based on tax situation'],
    platforms: ['Online'],
    url: 'https://www.hrblock.ca/online-tax-software'
  },
  {
    name: 'AdvTax',
    pricing: ['Paid', 'Free offerings based on tax situation'],
    platforms: ['Online'],
    url: 'https://www.aclasssoft.com/'
  },
  {
    name: 'TaxTron',
    pricing: ['Free (online)', 'Paid (computer download)', 'Free offerings based on tax situation'],
    platforms: ['Online', 'Computer download'],
    url: 'https://www.taxtron.ca'
  },
  {
    name: 'myTaxExpress',
    pricing: ['Paid', 'Free offerings based on tax situation'],
    platforms: ['Computer download'],
    url: 'https://www.mytaxexpress.com'
  },
  {
    name: 'Tax Chopper',
    pricing: ['Paid', 'Free offerings based on tax situation'],
    platforms: ['Online'],
    url: 'https://www.taxchopper.ca'
  },
  {
    name: 'FastnEasyTax',
    pricing: ['Paid', 'Free offerings based on tax situation'],
    platforms: ['Online', 'Mobile app'],
    url: 'https://www.fastneasytax.ca'
  },
  {
    name: 'GenuTax Standard',
    pricing: ['Free'],
    platforms: ['Computer download'],
    url: 'https://www.genutax.ca'
  },
  {
    name: 'TurboTax',
    pricing: ['Paid', 'Free offerings based on tax situation'],
    platforms: ['Online', 'Computer download', 'Mobile app'],
    url: 'https://turbotax.intuit.ca'
  },
  {
    name: 'UFile',
    pricing: ['Paid', 'Free offerings based on tax situation'],
    platforms: ['Online', 'Computer download'],
    url: 'https://www.ufile.ca'
  },
  {
    name: 'Better Tax',
    pricing: ['Free'],
    platforms: ['Online'],
    url: 'https://bettertax.ca/en'
  }
];

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function getPlatformIcon(platform: string) {
  if (platform === 'Online') return <Globe className="h-4 w-4" />;
  if (platform === 'Computer download') return <Monitor className="h-4 w-4" />;
  if (platform === 'Mobile app') return <Smartphone className="h-4 w-4" />;
  return null;
}

export function TaxFilingScreen({ onBack, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onViewMail, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onLifelongLearningPlan, onCustomize, onUncashedCheques, onBecomeRepresentative, onBecomeRepresentativeAsRep, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments, onTaxFilingChanges, onUserFeedback }: TaxFilingScreenProps) {
  const [shuffledSoftware, setShuffledSoftware] = useState<TaxSoftware[]>([]);

  useEffect(() => {
    setShuffledSoftware(shuffleArray(taxSoftwareData));
  }, []);

  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      {/* Header with integrated menu */}
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
        onBecomeRepresentative={onBecomeRepresentative}
        onBecomeRepresentativeAsRep={onBecomeRepresentativeAsRep}
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
        onTaxFilingChanges={onTaxFilingChanges}
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
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">File taxes</h1>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Page Content */}
        <div className="px-4 pb-4 bg-[#f2f2f7]">
          <div className="card-ios p-4 mb-3">
            <h2 className="text-[17px] font-semibold text-black m-0 mb-2">Certified tax software for 2025</h2>
            <p className="text-[#3a3a3c] text-[15px] m-0 mb-4">
              Choose from the list of CRA-certified tax software below. The list loads in random order.
            </p>

            <div className="bg-[#fff9e6] p-3 rounded-lg border-l-4 border-[#FF9500]">
              <p className="text-[#3a3a3c] text-[13px] m-0">
                <strong className="text-black">Note:</strong> You will exit the CRA app when you choose a link below. The CRA does not endorse any particular software product. Visit the software provider's website to determine if the product meets your needs. These providers use the NETFILE service which is available 24/7 and you'll receive your notice of assessment within 2 weeks of filing.
              </p>
            </div>
          </div>

          {/* Software List */}
          <div className="space-y-3">
            {shuffledSoftware.map((software, index) => (
              <a
                key={index}
                href={software.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block card-ios p-4 hover:opacity-80 active:opacity-60 transition-opacity no-underline"
              >
                <div className="flex justify-between items-start gap-3 mb-3">
                  <h3 className="text-[#007AFF] m-0 font-semibold flex-1">{software.name}</h3>
                  <ExternalLink className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                </div>
                
                {/* Pricing */}
                <div className="mb-3">
                  <div className="text-gray-ios text-[13px] mb-1 font-semibold">Pricing:</div>
                  <ul className="list-disc p-0 m-0 pl-5 space-y-1">
                    {software.pricing.map((price, idx) => (
                      <li key={idx} className="text-[#3a3a3c] text-[14px]">
                        {price}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Platforms */}
                <div>
                  <div className="text-gray-ios text-[13px] mb-2 font-semibold">Available on:</div>
                  <div className="flex flex-wrap gap-2">
                    {software.platforms.map((platform, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-1.5 bg-[#f2f2f7] px-3 py-1.5 rounded-lg"
                      >
                        {getPlatformIcon(platform)}
                        <span className="text-[#3a3a3c] text-[13px]">{platform}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}