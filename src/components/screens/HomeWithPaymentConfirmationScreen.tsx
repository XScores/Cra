import { HeaderMaster } from '../HeaderMaster';
import { QuickActions } from '../QuickActions';
import { Badge } from '../ui/badge';
import { CheckCircle, CircleDollarSign, AlertTriangle, ChevronLeft, Mail, Gift, CreditCard, Receipt, FileCheck, HelpCircle, LogOut, Send } from 'lucide-react';
import { HamburgerMenu } from '../HamburgerMenu';
import { useState } from 'react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface HomeWithPaymentConfirmationScreenProps {
  onMakePayment: () => void;
  onFileTaxes?: () => void;
  onViewNoticeOfAssessment?: () => void;
  onViewMail?: () => void;
  onRegisteredPlans?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onNavigateHome?: () => void;
  onBenefitsAndCredits?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onProfile?: () => void;
  // Search navigation handlers
  onViewRefundDetails?: () => void;
  onGSTHSTCredit?: () => void;
  onAccountDetails?: () => void;
  onViewTaxReturns?: () => void;
  onHomeBuyersPlan?: () => void;
  onFHSAEligibility?: () => void;
  onBecomeRepresentative?: () => void;
  onBecomeRepresentativeAsRep?: () => void;
  lastLoginTime?: Date | null;
}

export function HomeWithPaymentConfirmationScreen({ 
  onNavigateHome, 
  onMakePayment, 
  onFileTaxes, 
  onViewMail, 
  onRegisteredPlans, 
  onTaxSlips, 
  onProofOfIncome, 
  onHelp, 
  onSignOut, 
  onBenefitsAndCredits,
  onViewNoticeOfAssessment,
  onProfile,
  onViewRefundDetails,
  onGSTHSTCredit,
  onAccountDetails,
  onViewTaxReturns,
  onHomeBuyersPlan,
  onFHSAEligibility,
  onBecomeRepresentative,
  onBecomeRepresentativeAsRep,
  lastLoginTime
}: HomeWithPaymentConfirmationScreenProps) {
  const [showMenu, setShowMenu] = useState(false);
  
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

  const menuItems = [
    { icon: Send, label: 'File taxes', id: 'file-taxes', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onFileTaxes) onFileTaxes(); } },
    { icon: Gift, label: 'Benefits and credits', id: 'benefits-credits', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onBenefitsAndCredits) onBenefitsAndCredits(); } },
    { icon: CreditCard, label: 'Make a payment', id: 'make-payment', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onMakePayment) onMakePayment(); } },
    { icon: Mail, label: 'Inbox', id: 'mail', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onViewMail) onViewMail(); } },
    { icon: null, label: 'Registered plans', id: 'registered-plans', type: 'image' as const, imageSrc: mapleLeafIcon, onClick: () => { setShowMenu(false); if (onRegisteredPlans) onRegisteredPlans(); } },
    { icon: Receipt, label: 'Tax slips and documents', id: 'tax-slips', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onTaxSlips) onTaxSlips(); } },
    { icon: FileCheck, label: 'Proof of income', id: 'proof-income', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onProofOfIncome) onProofOfIncome(); } },
    { icon: HelpCircle, label: 'Help and support', id: 'help', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onHelp) onHelp(); } },
    { icon: LogOut, label: 'Sign out and exit', id: 'sign-out', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onSignOut) onSignOut(); }, danger: true },
  ];

  const formatPaymentDate = (dateString: string) => {
    if (!dateString) return 'Not selected';
    // Parse the date string as local date to avoid timezone issues
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const formatLastLogin = (date: Date | null) => {
    if (!date) return 'October 9, 2025 at 2:30 PM';
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    
    return `${month} ${day}, ${year} at ${hours}:${minutesStr} ${ampm}`;
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
      />
      
      {/* Content - Scrollable */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Greeting */}
        <div className="px-4 pt-4 pb-3 bg-[#f2f2f7]">
          <h2 className="text-[22px] font-semibold text-black m-0 mb-1">{greeting}, Jonathan</h2>
          <p className="text-black text-[15px] m-0 opacity-80">Last login: {lastLoginTime ? formatLastLogin(lastLoginTime) : 'Not available'}</p>
        </div>

        {/* Quick Links */}
        <QuickActions 
          onFileTaxes={onFileTaxes} 
          onMakePayment={onMakePayment} 
          onViewMail={onViewMail} 
          onRegisteredPlans={onRegisteredPlans}
          onBenefitsAndCredits={onBenefitsAndCredits}
        />

        <div className="bg-[#f2f2f7] px-4 py-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-[22px] font-semibold text-black m-0">My Account news feed</h2>
          </div>
          {/* Payment Confirmation - Replaces Balance Owing Alert */}
          <div className="mb-3 p-4 card-ios border-l-4 border-[#28a745]">
            <div className="flex gap-3">
              <CheckCircle className="h-5 w-5 text-[#28a745] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-black mb-2 text-[17px]">Payment submitted for 2024 taxes</h3>
                <div className="mb-3">
                  <div className="flex justify-between items-start text-[15px]">
                    <span className="text-black opacity-80">Payment amount:</span>
                    <div className="text-right">
                      <div className="text-[#28a745] text-[17px]">$1,250.00</div>
                      <div className="text-black opacity-80 text-[13px]">Dec 5, 2025</div>
                    </div>
                  </div>
                </div>
                <div className="text-black text-[15px] mb-3 opacity-80">
                  Your payment has been successfully processed. It will be applied to your account within 3-5 business days.
                </div>
                <button className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 transition-opacity hover:opacity-70 active:opacity-50">
                  Payment details →
                </button>
              </div>
            </div>
          </div>

          {/* Success - Refund */}
          <div className="mb-3 p-4 card-ios border-l-4 border-[#28a745]">
            <div className="flex gap-3">
              <CheckCircle className="h-5 w-5 text-[#28a745] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-black mb-2 text-[17px]">Latest refund processed</h3>
                <div className="mb-3">
                  <div className="flex justify-between items-start text-[15px]">
                    <span className="text-black opacity-80">Amount:</span>
                    <div className="text-right">
                      <div className="text-[#28a745] text-[17px]">$850.00</div>
                      <div className="text-black opacity-80 text-[13px]">Mar 12, 2025</div>
                    </div>
                  </div>
                </div>
                <button className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 transition-opacity hover:opacity-70 active:opacity-50">
                  View refund details →
                </button>
              </div>
            </div>
          </div>

          {/* Benefits Card */}
          <div className="mb-3 p-4 card-ios border-l-4 border-[#28a745]">
            <div className="flex gap-3 mb-3">
              <CircleDollarSign className="h-5 w-5 text-[#28a745] flex-shrink-0 mt-0.5" />
              <h3 className="text-black m-0 text-[17px]">Benefits and credits</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-start pb-3 border-b border-[#c6c6c8]">
                <div>
                  <div className="text-black mb-1 text-[15px]">Canada Child Benefit</div>
                  <div className="text-black opacity-80 text-[13px]">Next payment</div>
                </div>
                <div className="text-right">
                  <div className="text-[#28a745] text-[17px]">$360.00</div>
                  <div className="text-black opacity-80 text-[13px]">Nov 20, 2025</div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-black mb-1 text-[15px]">GST/HST Credit</div>
                  <div className="text-black opacity-80 text-[13px]">Next payment</div>
                </div>
                <div className="text-right">
                  <div className="text-[#28a745] text-[17px]">$145.00</div>
                  <div className="text-black opacity-80 text-[13px]">Jan 5, 2026</div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#c6c6c8]">
              <button className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 transition-opacity hover:opacity-70 active:opacity-50">
                View all benefits →
              </button>
            </div>
          </div>

          {/* Tax filing status */}
          <div className="mb-3 p-4 card-ios border-l-4 border-[#28a745]">
            <div className="flex gap-3 mb-3">
              <CheckCircle className="h-5 w-5 text-[#28a745] flex-shrink-0 mt-0.5" />
              <h3 className="text-black m-0 text-[17px]">Tax filing status</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-[#c6c6c8]">
                <div>
                  <div className="text-black mb-1 text-[15px]">2024 Tax Return</div>
                  <div className="text-black opacity-80 text-[13px]">Filed: Mar 15, 2025</div>
                </div>
                <Badge className="bg-[#28a745] text-white border-0 hover:bg-[#28a745] rounded-[6px] px-2 py-1 text-[13px]">
                  Assessed
                </Badge>
              </div>
              <div>
                <button 
                  onClick={onViewNoticeOfAssessment}
                  className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 transition-opacity hover:opacity-70 active:opacity-50"
                >
                  View notice of assessment →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger Menu */}
      <HamburgerMenu 
        isOpen={showMenu}
        onClose={() => setShowMenu(false)}
        menuItems={menuItems}
      />
    </div>
  );
}