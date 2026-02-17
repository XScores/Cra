import { useState } from 'react';
import { HeaderMaster } from '../HeaderMaster';
import { Smartphone, Info, AlertCircle, MessageSquarePlus, ChevronLeft, ChevronRight, Send, Gift, CreditCard, Mail, Receipt, FileCheck, HelpCircle, LogOut } from 'lucide-react';

interface AppVersionScreenProps {
  onBack: () => void;
  onViewMail?: () => void;
  onNavigateHome?: () => void;
  onNavigateProfile?: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onUserFeedback?: () => void;
  hasUnreadMail?: boolean;
  onViewAllBenefits?: () => void;
  onViewRefundDetails?: () => void;
  onViewNoticeOfAssessment?: () => void;
  onGSTHSTCredit?: () => void;
  onAccountDetails?: () => void;
  onProfile?: () => void;
  onViewTaxReturns?: () => void;
}

export function AppVersionScreen({ 
  onBack, 
  onViewMail, 
  onNavigateHome, 
  onNavigateProfile, 
  onFileTaxes, 
  onMakePayment, 
  onBenefitsAndCredits, 
  onRegisteredPlans, 
  onHelp, 
  onSignOut, 
  onTaxSlips, 
  onProofOfIncome, 
  onUserFeedback,
  hasUnreadMail = false,
  onViewAllBenefits,
  onViewRefundDetails,
  onViewNoticeOfAssessment,
  onGSTHSTCredit,
  onAccountDetails,
  onProfile,
  onViewTaxReturns
}: AppVersionScreenProps) {
  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col relative">
      {/* Header - Sticky */}
      <div className="flex-shrink-0 sticky top-0 z-10 bg-white">
        <HeaderMaster 
          title="My Account"
          onNavigateHome={onNavigateHome}
          onLogoClick={onNavigateHome}
          hasUnreadMail={hasUnreadMail}
          showSearch={true}
          showMenu={true}
          largeTitle={true}
          onViewAllBenefits={onViewAllBenefits}
          onViewRefundDetails={onViewRefundDetails}
          onViewNoticeOfAssessment={onViewNoticeOfAssessment}
          onGSTHSTCredit={onGSTHSTCredit}
          onAccountDetails={onAccountDetails}
          onProfile={onProfile}
          onViewTaxReturns={onViewTaxReturns}
        />
      </div>

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-start gap-3 mb-1">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0 mt-[4px]"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <div>
            <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[1.2]">Mobile app version information</h1>
            <p className="text-black text-[15px] m-0 opacity-80 mt-1">View details about this app version</p>
          </div>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Submit Feedback */}
        <div className="px-4 pb-3">
          <button
            onClick={onUserFeedback}
            className="card-ios w-full p-5 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <MessageSquarePlus className="h-6 w-6 text-[#007AFF] flex-shrink-0" />
              <div className="flex-1">
                <h2 className="text-black m-0 mb-1">Submit feedback</h2>
                <p className="text-[#8e8e93] text-[15px] m-0">
                  Help us improve the app by sharing your thoughts
                </p>
              </div>
              <ChevronRight className="h-5 w-5 text-[#c7c7cc] flex-shrink-0" />
            </div>
          </button>
        </div>

        {/* Current Version */}
        <div className="px-4 pb-3">
          <div className="card-ios p-5">
            <div className="flex items-start gap-3 mb-4">
              <Smartphone className="h-6 w-6 text-[#007AFF] flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-black m-0 mb-1">Current version</h2>
                <p className="text-black text-[15px] m-0 mb-3 opacity-80">
                  You are currently using:
                </p>
                <div className="bg-[#f2f2f7] border border-[rgba(60,60,67,0.29)] p-4 rounded-[8px]">
                  <p className="text-black text-[16px] m-0">
                    CRA My Account for mobile
                  </p>
                  <p className="text-[#ff3b30] text-[20px] m-0 mt-1">
                    Alpha Version: 1.0.0
                  </p>
                  <p className="text-black text-[16px] m-0 mt-2">
                    Designed by: Jonathan Rath
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alpha Program Info */}
        <div className="px-4 pb-3">
          <div className="card-ios p-5">
            <div className="flex items-start gap-3">
              <Info className="h-6 w-6 text-[#007AFF] flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-black m-0 mb-2">About this Alpha version</h2>
                <p className="text-black text-[15px] m-0 mb-3 opacity-80">
                  This is an Alpha release, demonstration-only version of a proposed CRA "My Account" mobile application. This version is for demonstration purposes only, to allow users to test new features and provide feedback.
                </p>
                <p className="text-black text-[15px] m-0 opacity-80">
                  During the Alpha phase, you may encounter bugs or incomplete features. Your feedback helps us improve the app before the official release.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What's New */}
        <div className="section-header-ios">
          What's new in this version
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios p-5">
            <ul className="text-black text-[15px] m-0 pl-5 space-y-2 opacity-80">
              <li>Complete redesign with iOS design system</li>
              <li>Enhanced navigation and user interface</li>
              <li>Improved accessibility features</li>
              <li>Streamlined payment processing</li>
              <li>Updated tax filing information</li>
              <li>New registered plans section</li>
              <li>Live chat support integration</li>
            </ul>
          </div>
        </div>

        {/* System Requirements */}
        <div className="section-header-ios">
          System requirements
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios overflow-hidden">
            <div className="list-item-ios px-4 py-3">
              <div>
                <p className="text-black text-[17px] m-0 mb-1">iOS</p>
                <p className="text-[#8e8e93] text-[15px] m-0">iOS 14.0 or later</p>
              </div>
            </div>
            <div className="list-item-ios px-4 py-3">
              <div>
                <p className="text-black text-[17px] m-0 mb-1">Android</p>
                <p className="text-[#8e8e93] text-[15px] m-0">Android 8.0 (Oreo) or later</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="px-4 pb-3">
          <div className="bg-[#fff3cd] border-l-4 border-[#ffc107] p-4 rounded-[8px]">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-black text-[15px] m-0">
                  <strong>Note:</strong> As this is an Alpha version, some features may change or be updated in future releases.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Build Information */}
        <div className="section-header-ios">
          Build information
        </div>
        <div className="px-4 pb-3">
          <div className="card-ios p-5">
            <div className="space-y-2 text-[15px]">
              <div className="flex justify-between">
                <span className="text-[#8e8e93]">Version:</span>
                <span className="text-black">Alpha 1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8e8e93]">Build number:</span>
                <span className="text-black">2024.11.001</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8e8e93]">Latest update:</span>
                <span className="text-black">November 3, 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* App version footer */}
        <div className="px-4 mb-6">
          <div className="bg-white rounded-[10px] p-4">
            <div className="text-center">
              <p className="text-[#3c3c43] text-[15px] m-0">
                App version: <button 
                  onClick={onBack}
                  className="text-[#007AFF] hover:opacity-70 active:opacity-50 bg-transparent border-0 p-0 transition-opacity text-[15px]"
                >
                  Alpha 1.0.0
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}