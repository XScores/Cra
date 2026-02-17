import { ChevronLeft, Search, Menu, User, FileText, CreditCard, Mail, DollarSign, HelpCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import govCanadaLogo from 'figma:asset/ca6d7bbbdff735ffd104f957137630f039308c6d.png';

interface CRAWebViewScreenProps {
  onBack: () => void;
  onShowPrivacy?: () => void;
  onShowTerms?: () => void;
  onShowHelp?: () => void;
}

export function CRAWebViewScreen({ onBack, onShowPrivacy, onShowTerms, onShowHelp }: CRAWebViewScreenProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Simple Header with Back Button */}
      <div className="flex items-center px-4 py-3 bg-white border-b border-[#e1e4e7]">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-blue-cra bg-transparent border-0 p-0 transition-colors hover:text-[#0535d2]"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-[15px]">Back to Sign in</span>
        </button>
      </div>

      {/* Mock CRA Web Interface */}
      <div className="flex-1 overflow-y-auto bg-white">
        {/* Canada.ca Header */}
        <div className="bg-white border-b border-[#e1e4e7]">
          <div className="flex items-center justify-between px-4 py-2">
            <img src={govCanadaLogo} alt="Government of Canada" className="h-6" />
            <div className="flex items-center gap-2">
              <button className="p-2 text-[#26374a] bg-transparent border-0">
                <Search className="w-4 h-4" />
              </button>
              <button className="p-2 text-[#26374a] bg-transparent border-0">
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="bg-[#26374a] text-white px-4 py-2 text-[13px]">
            <div className="flex justify-between items-center">
              <span>Canada Revenue Agency &gt; My Account</span>
              <span>EN | FR</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 py-4">
          {/* Page Title */}
          <h1 className="text-[#26374a] mb-4">My Account for Individuals</h1>
          
          {/* Login Section */}
          <div className="bg-[#f5f5f5] border border-[#e1e4e7] p-4 mb-6">
            <h2 className="text-[#26374a] font-bold mb-3">Sign in to CRA My Account</h2>
            <p className="text-[#333333] text-[14px] mb-4">
              Access your tax and benefit information, manage your account, and view your notices.
            </p>
            
            <div className="space-y-3">
              <button className="w-full bg-[#26374a] text-white px-4 py-3 border-0 text-[14px] transition-colors hover:bg-[#1c2934]">
                Sign in with CRA user ID and password
              </button>
              
              <button className="w-full bg-white text-[#26374a] px-4 py-3 border border-[#26374a] text-[14px] transition-colors hover:bg-[#f5f5f5]">
                Sign in with a Sign-In Partner
              </button>
              
              <button className="w-full bg-white text-[#26374a] px-4 py-3 border border-[#26374a] text-[14px] transition-colors hover:bg-[#f5f5f5]">
                CRA sign-in services
              </button>
            </div>
          </div>

          {/* Features Overview */}
          <div className="mb-6">
            <h2 className="text-[#26374a] font-bold mb-3">What you can do</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-white border border-[#e1e4e7]">
                <FileText className="w-5 h-5 text-[#26374a] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[#26374a] mb-1">Tax returns and assessments</div>
                  <p className="text-[#333333] text-[13px] m-0">View, change, or file your tax returns and view notices of assessment</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white border border-[#e1e4e7]">
                <CreditCard className="w-5 h-5 text-[#26374a] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[#26374a] mb-1">Payments and balances</div>
                  <p className="text-[#333333] text-[13px] m-0">Make a payment, view your balance, or set up a payment arrangement</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white border border-[#e1e4e7]">
                <DollarSign className="w-5 h-5 text-[#26374a] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[#26374a] mb-1">Benefits and credits</div>
                  <p className="text-[#333333] text-[13px] m-0">Apply for benefits, view payment dates, and update your information</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white border border-[#e1e4e7]">
                <Mail className="w-5 h-5 text-[#26374a] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[#26374a] mb-1">Mail and correspondence</div>
                  <p className="text-[#333333] text-[13px] m-0">View notices, letters, and messages from the CRA</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white border border-[#e1e4e7]">
                <User className="w-5 h-5 text-[#26374a] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[#26374a] mb-1">Profile and settings</div>
                  <p className="text-[#333333] text-[13px] m-0">Update your address, direct deposit, and communication preferences</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-[#fef9e7] border-l-4 border-[#fcba19] p-4 mb-6">
            <p className="text-[#333333] text-[13px] m-0">
              <strong className="text-[#26374a]">Note:</strong> The mobile app provides quick access to your most-used features. For full functionality, including RRSP contributions, tax slips, and detailed account management, please use the web version.
            </p>
          </div>

          {/* Help Links */}
          <div className="mb-6">
            <h2 className="text-[#26374a] font-bold mb-3">Need help?</h2>
            <div className="space-y-2">
              <a href="#" className="flex items-center gap-2 text-blue-cra text-[14px] underline">
                <HelpCircle className="w-4 h-4" />
                Help with CRA login services
              </a>
              <a href="#" className="flex items-center gap-2 text-blue-cra text-[14px] underline">
                <HelpCircle className="w-4 h-4" />
                Register for CRA My Account
              </a>
              <a href="#" className="flex items-center gap-2 text-blue-cra text-[14px] underline">
                <HelpCircle className="w-4 h-4" />
                Recover your CRA user ID or password
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f5f5f5] border-t border-[#e1e4e7] px-4 py-6 mt-6">
          <div className="text-[#333333] text-[12px] space-y-2">
            <p className="m-0">Canada Revenue Agency</p>
            <p className="m-0">1-800-959-8281</p>
            <div className="flex gap-4 mt-3">
              <button onClick={onShowPrivacy} className="text-blue-cra underline bg-transparent border-0 p-0 transition-colors hover:text-[#0535d2]">Privacy</button>
              <button onClick={onShowTerms} className="text-blue-cra underline bg-transparent border-0 p-0 transition-colors hover:text-[#0535d2]">Terms</button>
              <button onClick={onShowHelp} className="text-blue-cra underline bg-transparent border-0 p-0 transition-colors hover:text-[#0535d2]">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
