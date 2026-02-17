import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface ProvincialEducationSavingsScreenProps {
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
}

export function ProvincialEducationSavingsScreen({ onBack, onViewMail, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onBecomeRepresentative, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments }: ProvincialEducationSavingsScreenProps) {
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
        onViewNoticeOfAssessment={onViewNoticeOfAssessment}
        onGSTHSTCredit={onGSTHSTCredit}
        onAccountDetails={onAccountDetails}
        onProfile={onProfile}
        onViewTaxReturns={onViewTaxReturns}
        onHomeBuyersPlan={onHomeBuyersPlan}
        onFHSAEligibility={onFHSAEligibility}
        onBecomeRepresentative={onBecomeRepresentative}
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
          <div>
            <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[1.1]">Provincial education<br />savings programs</h1>
            <p className="text-black text-[15px] m-0 opacity-80 mt-1">Additional provincial grants to help you save for education</p>
          </div>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Overview */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Overview</h2>
            <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
              In addition to federal RESP grants, some provinces offer their own education savings incentives. These provincial programs provide extra money to help families save for their children's post-secondary education.
            </p>
          </div>
        </div>

        {/* British Columbia */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">British Columbia - BC Training and Education Savings Grant (BCTESG)</h3>
            <p className="text-[#3c3c43] text-[17px] mb-4 leading-snug">
              A one-time grant of $1,200 for eligible children.
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-black text-[17px] mb-2">Eligibility</p>
                <ul className="list-disc m-0 pl-5 space-y-2">
                  <li className="text-[#3c3c43] text-[17px] leading-snug">Child must be born in 2006 or later</li>
                  <li className="text-[#3c3c43] text-[17px] leading-snug">Must be BC resident at time of application</li>
                  <li className="text-[#3c3c43] text-[17px] leading-snug">Child and parent/guardian must have valid SINs</li>
                  <li className="text-[#3c3c43] text-[17px] leading-snug">Apply between child's 6th and 9th birthday</li>
                  <li className="text-[#3c3c43] text-[17px] leading-snug">Must have an RESP with a participating provider</li>
                </ul>
              </div>
              <div className="bg-[#f2f2f7] rounded-[10px] p-3">
                <p className="text-black text-[17px] mb-1">Grant amount: <span className="text-[#28a745]">$1,200</span> (one-time payment)</p>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">How to apply: Through your RESP provider</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quebec */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">Quebec - Quebec Education Savings Incentive (QESI)</h3>
            <p className="text-[#3c3c43] text-[17px] mb-4 leading-snug">
              An annual grant that matches a portion of RESP contributions.
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-black text-[17px] mb-2">Eligibility</p>
                <ul className="list-disc m-0 pl-5 space-y-2">
                  <li className="text-[#3c3c43] text-[17px] leading-snug">Beneficiary must be Quebec resident</li>
                  <li className="text-[#3c3c43] text-[17px] leading-snug">Contributions must be made by a Quebec resident</li>
                  <li className="text-[#3c3c43] text-[17px] leading-snug">RESP must be with a participating provider</li>
                </ul>
              </div>
              <div>
                <p className="text-black text-[17px] mb-2">Grant amounts</p>
                <ul className="list-disc m-0 pl-5 space-y-2">
                  <li className="text-[#3c3c43] text-[17px] leading-snug">Basic rate: 10% of contributions (max $250/year)</li>
                  <li className="text-[#3c3c43] text-[17px] leading-snug">Additional 5% for low-income families (max $50/year)</li>
                  <li className="text-[#3c3c43] text-[17px] leading-snug">Additional 10% for families with 3+ children (max $50/year)</li>
                  <li className="text-[#3c3c43] text-[17px] leading-snug">Lifetime maximum: <span className="text-[#28a745]">$3,600</span> per child</li>
                </ul>
              </div>
              <div className="bg-[#f2f2f7] rounded-[10px] p-3">
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">How to apply: Automatic through participating RESP providers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Saskatchewan */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-2">Saskatchewan - No provincial grant program</h3>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              Saskatchewan does not currently offer a provincial RESP grant program. Residents can access:
            </p>
            <ul className="list-disc m-0 pl-5 space-y-2">
              <li className="text-[#3c3c43] text-[17px] leading-snug">Canada Education Savings Grant (CESG)</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Canada Learning Bond (CLB)</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">Standard federal RESP benefits</li>
            </ul>
          </div>
        </div>

        {/* Combining Programs */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Combining federal and provincial programs</h2>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              You can receive both federal and provincial grants in the same RESP:
            </p>
            <div className="bg-[#f2f2f7] rounded-[10px] p-4">
              <p className="text-black text-[17px] mb-3">Example: BC family contributing $2,500/year</p>
              <ul className="list-disc m-0 pl-5 space-y-2">
                <li className="text-[#3c3c43] text-[17px] leading-snug">Federal CESG: $500/year (20% of $2,500)</li>
                <li className="text-[#3c3c43] text-[17px] leading-snug">BCTESG: $1,200 (one-time when child turns 6)</li>
                <li className="text-[#28a745] text-[17px] leading-snug">Total grants in first eligible year: $1,700</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] overflow-hidden">
            <div className="px-4 pt-4 pb-3 border-b border-[#c6c6c8]">
              <h2 className="text-black text-[20px] m-0">Provincial grants comparison</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#f2f2f7] border-b border-[#c6c6c8]">
                    <th className="px-4 py-2 text-left text-black text-[15px]">Province</th>
                    <th className="px-4 py-2 text-left text-black text-[15px]">Program</th>
                    <th className="px-4 py-2 text-left text-black text-[15px]">Maximum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c6c6c8]">
                  <tr>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">British Columbia</td>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">BCTESG</td>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">$1,200 (one-time)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">Quebec</td>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">QESI</td>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">$3,600 (lifetime)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">Other Provinces</td>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">None</td>
                    <td className="px-4 py-2 text-[#3c3c43] text-[17px]">Federal only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Residency Requirements */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Residency requirements</h2>
            <ul className="list-disc m-0 pl-5 space-y-2">
              <li className="text-[#3c3c43] text-[17px] leading-snug"><strong className="text-black">BCTESG:</strong> Child must be BC resident when you apply (between ages 6-9)</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug"><strong className="text-black">QESI:</strong> Beneficiary and subscriber must be Quebec residents at time of contribution</li>
              <li className="text-[#3c3c43] text-[17px] leading-snug">If you move provinces, contact your RESP provider to update your information</li>
            </ul>
          </div>
        </div>

        {/* Important Note */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <div className="bg-[#fff9e6] rounded-[10px] p-4 border-l-4 border-[#ffcc00]">
              <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
                <strong className="text-black">Note:</strong> Provincial grant programs can change. Check with your RESP provider or provincial government for the most current information and eligibility requirements.
              </p>
            </div>
          </div>
        </div>

        {/* How to Apply */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">How to apply</h2>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">1.</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Open an RESP with a participating provider</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">2.</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Confirm your provider participates in your province's program</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">3.</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Provide required documentation (SINs, proof of residency)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#007AFF] mt-1">4.</span>
                <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">Your provider will apply for grants on your behalf</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}