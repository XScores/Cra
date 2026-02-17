import { ChevronLeft, Mail, Gift, Receipt, FileCheck, HelpCircle, LogOut, CreditCard } from 'lucide-react';
import { HeaderMaster } from '../HeaderMaster';
import { useState } from 'react';

interface MorePaymentInfoScreenProps {
  onBack: () => void;
  onViewMail?: () => void;
  onNavigateHome?: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  hasUnreadMail?: boolean;
  onViewAllBenefits?: () => void;
  onViewRefundDetails?: () => void;
  onViewNoticeOfAssessment?: () => void;
  onGSTHSTCredit?: () => void;
  onAccountDetails?: () => void;
  onProfile?: () => void;
  onViewTaxReturns?: () => void;
}

export function MorePaymentInfoScreen({ 
  onBack, 
  onViewMail, 
  onNavigateHome, 
  onFileTaxes, 
  onMakePayment, 
  onBenefitsAndCredits,
  onRegisteredPlans, 
  onHelp, 
  onSignOut, 
  onTaxSlips,
  onProofOfIncome,
  hasUnreadMail = false,
  onViewAllBenefits,
  onViewRefundDetails,
  onViewNoticeOfAssessment,
  onGSTHSTCredit,
  onAccountDetails,
  onProfile,
  onViewTaxReturns
}: MorePaymentInfoScreenProps) {
  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col relative">
      <div className="flex-shrink-0 sticky top-0 z-10 bg-white">
        <HeaderMaster 
          title="My Account"
          onNavigateHome={onNavigateHome}
          onLogoClick={onNavigateHome}
          hasUnreadMail={hasUnreadMail}
          showSearch={true}
          showMenu={true}
          largeTitle={true}
          onFileTaxes={onFileTaxes}
          onViewAllBenefits={onViewAllBenefits || onBenefitsAndCredits}
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
        />
      </div>

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-start gap-3">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0 mt-1"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[1.2]">Payment information</h1>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] px-4 pb-4">
        <div className="space-y-4">
          {/* Setting up PAD Plan */}
          <div className="card-ios">
            <div className="px-4 py-2 bg-[#f2f2f7] border-b border-[#c6c6c8] flex items-center justify-between rounded-t-[10px]">
              <h2 className="text-black m-0 text-[17px]">Setting up a Pre-Authorized Debit (PAD) instalment plan (Recommended)</h2>
            </div>
            <div className="px-4 py-3 space-y-3">
              <p className="text-black text-[17px] m-0 leading-relaxed mb-4">
                You can set up instalment payments with the CRA primarily through pre-authorized debit (PAD) in the "Profile" area or through your own online banking service.
              </p>
              
              <div className="space-y-3">
                <div>
                  <div className="text-black font-semibold mb-1">Step 1: Choose Payment Frequency</div>
                  <div className="text-black opacity-80">Select how often you want to make instalment payments (Weekly, Bi-weekly, Monthly, Quarterly, or Annually).</div>
                </div>
                
                <div>
                  <div className="text-black font-semibold mb-1">Step 2: Choose Starting Date</div>
                  <div className="text-black opacity-80">Select when you want to start your instalment payments using the calendar picker. To allow for processing, the first start date that you can select will be the next instalment due date that is at least 10 days from today.</div>
                </div>
                
                <div>
                  <div className="text-black font-semibold mb-1">Step 3: Choose Payment Amount</div>
                  <div className="text-black opacity-80">Enter the dollar amount for each instalment payment and select your preferred payment method from your saved payment options.</div>
                </div>
                
                <div>
                  <div className="text-black font-semibold mb-1">Step 4: Add Optional Reminder</div>
                  <div className="text-black opacity-80">Optionally enable payment reminders by choosing how many days before the payment you'd like to be notified and whether you want to receive notifications via text message, email, or both.</div>
                </div>
                
                <div>
                  <div className="text-black font-semibold mb-1">Step 5: Confirm Payment Schedule</div>
                  <div className="text-black opacity-80">Review all your payment details including frequency, first payment date, instalment amount, and payment method, then confirm to activate your payment schedule.</div>
                </div>
              </div>
              
              <p className="text-black text-[17px] m-0 leading-relaxed mt-4">
                Your pre-authorized payment plan will be submitted, but is still subject to review by the CRA. To confirm your plan, you will receive a notification letter in the mail. The CRA will take the steps necessary to withdraw from your financial institution the funds you have authorized at the payment interval you have chosen.
              </p>
            </div>
          </div>

          {/* Online Banking */}
          <div className="card-ios">
            <div className="px-4 py-2 bg-[#f2f2f7] border-b border-[#c6c6c8] flex items-center justify-between rounded-t-[10px]">
              <h2 className="text-black m-0 text-[17px]">Paying via Online Banking</h2>
            </div>
            <div className="px-4 py-3 space-y-3">
              <p className="text-black text-[17px] m-0 leading-relaxed">
                You can also use your bank or credit union's online banking service to make payments, either as a one-time payment or a series of future payments.
              </p>
              
              <div className="space-y-3">
                <div>
                  <div className="text-black font-semibold mb-1">Sign in:</div>
                  <div className="text-black opacity-80">Log in to your bank's online banking website or mobile app.</div>
                </div>
                
                <div>
                  <div className="text-black font-semibold mb-1">Add the CRA as a payee:</div>
                  <div className="text-black opacity-80">Search for the Canada Revenue Agency and select the correct option, typically "CRA (revenue) – tax instalment".</div>
                </div>
                
                <div>
                  <div className="text-black font-semibold mb-1">Enter account number:</div>
                  <ul className="list-disc pl-5 space-y-1 text-black opacity-80">
                    <li>For individuals, use your 9-digit social insurance number (SIN).</li>
                    <li>For businesses, use your 15-digit business number.</li>
                  </ul>
                </div>
                
                <div>
                  <div className="text-black font-semibold mb-1">Enter payment details:</div>
                  <div className="text-black opacity-80">Enter the amount and the date you want the payment to be processed.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Payment Methods */}
          <div className="card-ios">
            <div className="px-4 py-2 bg-[#f2f2f7] border-b border-[#c6c6c8] flex items-center justify-between rounded-t-[10px]">
              <h2 className="text-black m-0 text-[17px]">Other Payment Methods</h2>
            </div>
            <div className="px-4 py-3 space-y-3">
              <div>
                <div className="text-black font-semibold mb-1">CRA My Payment service:</div>
                <div className="text-black opacity-80">Use your Visa Debit or Interac Online card directly through the CRA website's "My Payment" service.</div>
              </div>
              
              <div>
                <div className="text-black font-semibold mb-1">Third-party service provider:</div>
                <div className="text-black opacity-80">Pay by credit card, PayPal, or Interac e-Transfer through a third-party service like PaySimply (service fees apply).</div>
              </div>
              
              <div>
                <div className="text-black font-semibold mb-1">Mail:</div>
                <div className="text-black opacity-80">Send a post-dated cheque with a personalized remittance voucher (Form INNS3 or RC160 for corporations).</div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="card-ios">
            <div className="px-4 py-2 bg-[#f2f2f7] border-b border-[#c6c6c8] flex items-center justify-between rounded-t-[10px]">
              <h2 className="text-black m-0 text-[17px]">Important Notes</h2>
            </div>
            <div className="px-4 py-3 space-y-3">
              <div className="flex gap-2">
                <div className="text-black mt-1">•</div>
                <div className="text-black opacity-80 flex-1">If you choose a fixed payment amount that is different from the CRA's suggested amount, you are responsible for ensuring it is enough to avoid interest and penalties.</div>
              </div>
              
              <div className="flex gap-2">
                <div className="text-black mt-1">•</div>
                <div className="text-black opacity-80 flex-1">You can view your instalment reminders and payment history in your CRA My Account.</div>
              </div>
              
              <div className="flex gap-2">
                <div className="text-black mt-1">•</div>
                <div className="text-black opacity-80 flex-1">If you have trouble setting up payments online or need to discuss a specific payment arrangement for existing debt, you can call the CRA's automated service at 1-800-959-8281.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}