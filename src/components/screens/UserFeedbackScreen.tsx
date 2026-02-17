import { useState } from 'react';
import { ChevronLeft, Star, Send, CheckCircle2 } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';

interface UserFeedbackScreenProps {
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
  hasUnreadMail?: boolean;
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
  currentPageContext?: string; // Context of the page user is coming from
}

export function UserFeedbackScreen({
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
  hasUnreadMail,
  onViewRefundDetails,
  onViewNoticeOfAssessment,
  onGSTHSTCredit,
  onAccountDetails,
  onProfile,
  onViewTaxReturns,
  onHomeBuyersPlan,
  onFHSAEligibility,
  onBecomeRepresentative,
  onBecomeRepresentativeAsRep,
  onLifelongLearningPlan,
  onCustomize,
  onUncashedCheques,
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
  onSubmitDocuments,
  onUserFeedback,
  currentPageContext = 'Home'
}: UserFeedbackScreenProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [feedbackContext, setFeedbackContext] = useState(`${currentPageContext} page`);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating > 0) {
      setIsSubmitted(true);
      // Simulate submission delay
      setTimeout(() => {
        onBack();
      }, 2000);
    }
  };

  const canSubmit = rating > 0;

  const getRatingLabel = (stars: number) => {
    switch(stars) {
      case 1: return 'Poor';
      case 2: return 'Fair';
      case 3: return 'Good';
      case 4: return 'Very good';
      case 5: return 'Excellent';
      default: return '';
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col h-full bg-[#f2f2f7]">
        <HeaderMaster
          title="My Account"
          largeTitle={true}
          showSearch={true}
          showMenu={true}
          onNavigateHome={onNavigateHome}
          onLogoClick={onNavigateHome}
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
          onBecomeRepresentative={onBecomeRepresentative}
          onBecomeRepresentativeAsRep={onBecomeRepresentativeAsRep}
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
          <div className="flex items-center gap-3 mb-1">
            <button
              onClick={onBack}
              className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={3} />
            </button>
            <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">User feedback</h1>
          </div>
          <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Help us improve the CRA My Account app</p>
        </div>

        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-[#34C759] flex items-center justify-center">
                <CheckCircle2 className="h-12 w-12 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <h2 className="text-[28px] font-bold text-black mb-3">Thank you!</h2>
            <p className="text-[17px] text-gray-ios">
              Your feedback has been submitted successfully and will help us improve the app.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#f2f2f7]">
      <HeaderMaster
        title="My Account"
        largeTitle={true}
        showSearch={true}
        showMenu={true}
        onNavigateHome={onNavigateHome}
        onLogoClick={onNavigateHome}
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
        onBecomeRepresentative={onBecomeRepresentative}
        onBecomeRepresentativeAsRep={onBecomeRepresentativeAsRep}
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
        <div className="flex items-center gap-3 mb-1">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">User feedback</h1>
        </div>
        <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Help us improve the CRA My Account app</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Privacy Notice */}
        <div className="px-4 pt-3 pb-4">
          <div className="card-ios p-4">
            <p className="text-[15px] text-gray-ios leading-[1.4] m-0">
              Your feedback is anonymous and will be used to improve the CRA My Account app. We will not contact you directly about your feedback. If you need assistance, please visit{' '}
              <span className="text-[#007AFF] font-medium">Help and support</span>.
            </p>
          </div>
        </div>

        {/* Star Rating */}
        <div className="px-4 pb-4">
          <div className="card-ios p-4">
            <h3 className="text-[17px] font-semibold text-black m-0 mb-3">
              How would you rate your experience?
            </h3>
            
            <div className="flex items-center justify-center gap-3 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="bg-transparent border-0 cursor-pointer p-0 transition-transform active:scale-90"
                  aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                >
                  <Star
                    className={`h-10 w-10 transition-colors ${
                      star <= (hoveredRating || rating)
                        ? 'fill-[#FFB800] text-[#FFB800]'
                        : 'fill-none text-[#C7C7CC]'
                    }`}
                    strokeWidth={2}
                  />
                </button>
              ))}
            </div>

            <div className="text-center text-[15px] text-gray-ios h-[21px] flex items-center justify-center">
              {(rating > 0 || hoveredRating > 0) && (
                <span>{getRatingLabel(hoveredRating || rating)}</span>
              )}
            </div>
          </div>
        </div>

        {/* Context Information */}
        <div className="px-4 pb-4">
          <div className="card-ios p-4">
            <h3 className="text-[17px] font-semibold text-black m-0 mb-3">
              Feedback about
            </h3>
            <input
              type="text"
              value={feedbackContext}
              onChange={(e) => setFeedbackContext(e.target.value)}
              placeholder="e.g., Home page, Tax filing, etc."
              className="w-full px-3 py-2 border border-[rgba(60,60,67,0.29)] rounded-[8px] text-[17px] text-black placeholder:text-[rgba(60,60,67,0.3)] focus:outline-none focus:border-[#007AFF] transition-colors"
              maxLength={50}
            />
          </div>
        </div>

        {/* Detailed Feedback */}
        <div className="px-4 pb-4">
          <div className="card-ios p-4">
            <h3 className="text-[17px] font-semibold text-black m-0 mb-3">
              Tell us more (optional)
            </h3>
            
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="What can we do to improve your experience?"
              className="w-full min-h-[120px] px-3 py-2 border border-[rgba(60,60,67,0.29)] rounded-[8px] text-[17px] text-black placeholder:text-[rgba(60,60,67,0.3)] resize-none focus:outline-none focus:border-[#007AFF] transition-colors"
              maxLength={500}
            />
            
            <div className="text-right text-[13px] text-gray-ios mt-2">
              {feedback.length}/500 characters
            </div>
          </div>
        </div>

        {/* Feedback Tips */}
        <div className="px-4 pb-6">
          <div className="card-ios p-4">
            <h3 className="text-[15px] font-semibold text-black m-0 mb-2">
              Helpful feedback includes:
            </h3>
            <ul className="text-[15px] text-gray-ios leading-[1.4] m-0 pl-5 space-y-1 list-disc">
              <li>What you were trying to do</li>
              <li>What worked well or didn't work</li>
              <li>Suggestions for improvement</li>
              <li>Any features you'd like to see</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Submit Button - Fixed at bottom */}
      <div className="flex-shrink-0 px-4 pb-6 pt-3 bg-[#f2f2f7]">
        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className={`w-full py-3.5 rounded-[10px] font-semibold text-[17px] transition-all flex items-center justify-center gap-2 ${
            canSubmit
              ? 'bg-[#007AFF] text-white active:bg-[#0051D5] cursor-pointer'
              : 'bg-[rgba(60,60,67,0.12)] text-[rgba(60,60,67,0.3)] cursor-not-allowed'
          }`}
        >
          <Send className="h-5 w-5" />
          Submit feedback
        </button>
      </div>
    </div>
  );
}