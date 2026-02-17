import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';
import { useState } from 'react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface RequestWaiveTFSATaxScreenProps {
  onBack: () => void;
  onNavigateHome: () => void;
  onLogoClick: () => void;
  hasUnreadMail?: boolean;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onViewMail?: () => void;
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
}

export function RequestWaiveTFSATaxScreen({ onBack, onViewMail, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome }: RequestWaiveTFSATaxScreenProps) {
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
        onHelp={onHelp}
        onSignOut={onSignOut}
      />

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-start gap-3 mb-1">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[1.1]">Request to waive<br />TFSA tax</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">How to request relief from TFSA tax penalties and what information you need to provide</p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Overview */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Overview</h2>
            <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
              If you were assessed a TFSA tax (for over-contributions, non-qualified investments, prohibited investments, or advantage), you may request relief if the tax arose due to reasonable error and you've taken steps to rectify the situation.
            </p>
          </div>
        </div>

        {/* When You Can Request a Waiver */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">When you can request a waiver</h2>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              The CRA may consider waiving or cancelling TFSA taxes if:
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">The situation resulted from a reasonable error</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">You took reasonable steps to correct the error promptly</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">The taxes arose through circumstances beyond your control</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">You acted in good faith based on incorrect information from your financial institution</p>
              </div>
            </div>
          </div>
        </div>

        {/* Types of TFSA Taxes */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-3">Types of TFSA taxes</h3>
            <div className="space-y-3">
              <div>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug"><strong className="text-black">Over-contribution tax:</strong> 1% per month on excess contributions</p>
              </div>
              <div>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug"><strong className="text-black">Non-qualified investment tax:</strong> 50% of fair market value if you acquire a non-qualified investment</p>
              </div>
              <div>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug"><strong className="text-black">Prohibited investment tax:</strong> 50% of fair market value for prohibited investments, plus 100% of income earned</p>
              </div>
              <div>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug"><strong className="text-black">Advantage tax:</strong> 100% of the advantage amount for certain improper benefits</p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Request a Waiver */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">How to request a waiver</h3>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              Follow these steps to request taxpayer relief:
            </p>
            <div className="space-y-2 ml-4">
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">1.</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Complete Form RC4288, Request for Taxpayer Relief – Cancel or Waive Penalties or Interest</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">2.</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Write a detailed letter explaining the circumstances that led to the tax</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">3.</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Include supporting documents (account statements, correspondence, medical records if applicable)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">4.</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Demonstrate the steps you took to correct the situation</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">5.</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Submit your request to your tax services office</p>
              </div>
            </div>
          </div>
        </div>

        {/* What to Include in Your Letter */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">What to include in your letter</h2>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              Your request should clearly explain:
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">What happened and why the error occurred</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">When you became aware of the problem</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">What actions you took to fix it and when</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Why you believe the circumstances warrant relief</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Any financial hardship the tax would cause</p>
              </div>
            </div>
          </div>
        </div>

        {/* After You Submit */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">After you submit your request</h2>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">The CRA will review your request (typically 4-8 weeks)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">You'll receive a letter with the decision</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">The CRA may grant full relief, partial relief, or deny the request</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">If denied, you can file a second request with additional information</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">You may also have the right to object to the original assessment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <div className="bg-[#fff9e6] rounded-[10px] p-4 border-l-4 border-[#ffcc00]">
              <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
                <strong className="text-black">Note:</strong> Requesting a waiver does not stop interest from accruing on any amounts owing. Consider paying the tax while your request is being reviewed. If granted relief, the CRA will refund the amount with interest.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Contact information</h2>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug"><strong className="text-black">Phone:</strong> 1-800-959-8281</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug"><strong className="text-black">Hours:</strong> Monday to Friday, 9:00 AM to 6:00 PM (local time)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">•</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug"><strong className="text-black">Mail:</strong> Send your completed form to your tax services office</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}