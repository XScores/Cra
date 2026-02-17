import { HeaderMaster } from '../HeaderMaster';
import { ChevronLeft, ChevronRight, DollarSign } from 'lucide-react';
import { useState } from 'react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface RESPGrantProgramsScreenProps {
  onBack: () => void;
  onViewMail?: () => void;
  onNavigateHome: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onHowToOpenRESP?: () => void;
  onRESPWithdrawalRules?: () => void;
  onApplyCanadaLearningBond?: () => void;
  onProvincialEducationSavings?: () => void;
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

export function RESPGrantProgramsScreen({ onBack, onViewMail, onNavigateHome, onFileTaxes, onMakePayment, onBenefitsAndCredits, onRegisteredPlans, onHelp, onSignOut, onTaxSlips, onProofOfIncome, onHowToOpenRESP, onRESPWithdrawalRules, onApplyCanadaLearningBond, onProvincialEducationSavings, onViewRefundDetails, onViewNoticeOfAssessment, onGSTHSTCredit, onAccountDetails, onProfile, onViewTaxReturns, onHomeBuyersPlan, onFHSAEligibility, onBecomeRepresentative, onLifelongLearningPlan, onCustomize, onUncashedCheques, onRemittanceVoucher, onCPPEIRuling, onAuditEnquiries, onCarryoverAmounts, onChangeMyReturn, onRegisterFormalDispute, onNonResidentAccount, onResidencyDetermination, onPersonalIdentificationNumber, onProgressTrackerService, onReliefOfPenalties, onSubmitDocuments }: RESPGrantProgramsScreenProps) {
  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      <HeaderMaster 
        title="My Account"
        largeTitle={true}
        showSearch={true}
        showMenu={true}
        onNavigateHome={onNavigateHome}
        onLogoClick={onNavigateHome}
        onSearchClick={onNavigateHome}
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
            <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[1.1]">RESP grant programs</h1>
            <p className="text-black text-[15px] m-0 opacity-80 mt-1">Learn how the government helps you save for your child's education</p>
          </div>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Overview */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h2 className="text-black text-[20px] m-0 mb-3">Government grants for education savings</h2>
            <p className="text-[#3c3c43] text-[17px] mb-3 leading-snug">
              The Government of Canada offers several grant programs to help families save for a child's post-secondary education. These grants are deposited directly into a Registered Education Savings Plan (RESP).
            </p>
            <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">
              You don't need to apply separately for most grants—they are automatically paid when you open an RESP and make contributions.
            </p>
          </div>
        </div>

        {/* CESG */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <div className="flex items-start gap-3 mb-3">
              <DollarSign className="h-6 w-6 text-[#28a745] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
              <h3 className="text-black text-[20px] m-0">Canada Education Savings Grant (CESG)</h3>
            </div>
            <p className="text-[#3c3c43] text-[17px] mb-4 leading-snug">
              The CESG is the primary government grant that matches a percentage of your RESP contributions.
            </p>
            
            <div className="bg-[#f2f2f7] rounded-[10px] p-4 mb-4">
              <h4 className="text-black text-[17px] mb-3">Basic CESG</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-[#c6c6c8]">
                  <span className="text-[#3c3c43] text-[17px]">Matching rate</span>
                  <span className="text-[#28a745] text-[17px] text-right">20%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#c6c6c8]">
                  <span className="text-[#3c3c43] text-[17px]">Maximum per year</span>
                  <span className="text-[#28a745] text-[17px] text-right">$500</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-[#3c3c43] text-[17px]">Lifetime maximum</span>
                  <span className="text-[#28a745] text-[17px] text-right">$7,200</span>
                </div>
              </div>
            </div>

            <div className="bg-[#e8f5e9] rounded-[10px] p-4 mb-4">
              <h4 className="text-black text-[17px] mb-2">Additional CESG (for lower-income families)</h4>
              <p className="text-[#3c3c43] text-[15px] mb-3 leading-snug">
                Families with lower net income may qualify for an additional 10% or 20% grant on the first $500 contributed annually:
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <span className="text-[#3c3c43] text-[15px] flex-1">Net family income up to $55,867</span>
                  <span className="text-[#28a745] text-[15px] text-right ml-2">+20% on first $500</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-[#3c3c43] text-[15px] flex-1">Net family income $55,867 to $111,733</span>
                  <span className="text-[#28a745] text-[15px] text-right ml-2">+10% on first $500</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <ul className="list-disc m-0 pl-5 space-y-2">
                <li className="text-[#3c3c43] text-[17px] leading-snug">Available until December 31 of the year the beneficiary turns 17</li>
                <li className="text-[#3c3c43] text-[17px] leading-snug">Unused grant room can be carried forward to future years</li>
                <li className="text-[#3c3c43] text-[17px] leading-snug">Automatically paid when you contribute to an RESP</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CLB */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <div className="flex items-start gap-3 mb-3">
              <DollarSign className="h-6 w-6 text-[#28a745] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
              <h3 className="text-black text-[20px] m-0">Canada Learning Bond (CLB)</h3>
            </div>
            <p className="text-[#3c3c43] text-[17px] mb-4 leading-snug">
              The CLB provides money for education savings for children from low-income families. No personal contributions are required to receive the CLB.
            </p>
            
            <div className="bg-[#f2f2f7] rounded-[10px] p-4 mb-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-[#c6c6c8]">
                  <span className="text-[#3c3c43] text-[17px]">Initial payment</span>
                  <span className="text-[#28a745] text-[17px] text-right">$500</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#c6c6c8]">
                  <span className="text-[#3c3c43] text-[17px]">Annual payment</span>
                  <span className="text-[#28a745] text-[17px] text-right">$100/year</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-[#3c3c43] text-[17px]">Maximum benefit</span>
                  <span className="text-[#28a745] text-[17px] text-right">$2,000</span>
                </div>
              </div>
            </div>

            <div className="bg-[#fff9e6] rounded-[10px] p-4 border-l-4 border-[#ffcc00] mb-4">
              <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
                <strong className="text-black">Eligibility:</strong> Children born on or after January 1, 2004, from families receiving the Canada Child Benefit (CCB) with net income below the threshold (approximately $55,867 for 2025).
              </p>
            </div>

            <div className="space-y-2">
              <ul className="list-disc m-0 pl-5 space-y-2">
                <li className="text-[#3c3c43] text-[17px] leading-snug">No RESP contributions required to receive the CLB</li>
                <li className="text-[#3c3c43] text-[17px] leading-snug">Paid annually until the child turns 15</li>
                <li className="text-[#3c3c43] text-[17px] leading-snug">Retroactive payments available if eligible in previous years</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Provincial Programs */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-3">Provincial and territorial programs</h3>
            <p className="text-[#3c3c43] text-[17px] mb-4 leading-snug">
              Some provinces and territories offer additional education savings incentives:
            </p>

            <div className="space-y-4">
              <div className="pb-4 border-b border-[#c6c6c8]">
                <p className="text-black text-[17px] mb-2">British Columbia Training and Education Savings Grant (BCTESG)</p>
                <p className="text-[#3c3c43] text-[15px] mb-2 leading-snug">
                  A one-time $1,200 grant for eligible children residing in BC on their 6th birthday.
                </p>
                <p className="text-[#28a745] text-[15px]">No contributions required</p>
              </div>

              <div className="pb-4 border-b border-[#c6c6c8]">
                <p className="text-black text-[17px] mb-2">Quebec Education Savings Incentive (QESI)</p>
                <p className="text-[#3c3c43] text-[15px] mb-2 leading-snug">
                  Matches 10% of annual RESP contributions, up to $250 per year. Additional amounts for low-income families.
                </p>
                <p className="text-[#28a745] text-[15px]">Maximum lifetime benefit: $3,600</p>
              </div>

              <div>
                <p className="text-black text-[17px] mb-2">Saskatchewan Advantage Grant for Education Savings (SAGES)</p>
                <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
                  Currently suspended but may be reinstated. Check with Service Canada for updates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grant Example */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-3">Example: Maximizing grants</h3>
            <p className="text-[#3c3c43] text-[17px] mb-4 leading-snug">
              Here's how a family could maximize government grants by contributing $2,500 per year:
            </p>
            
            <div className="bg-[#f2f2f7] rounded-[10px] p-4">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#3c3c43] text-[17px]">Your contribution (annual)</span>
                  <span className="text-black text-[17px] text-right">$2,500</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#3c3c43] text-[17px]">Basic CESG (20%)</span>
                  <span className="text-[#28a745] text-[17px] text-right">+$500</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t border-[#c6c6c8] pt-2">
                  <span className="text-black text-[17px]">Total annual deposit</span>
                  <span className="text-[#28a745] text-[17px] text-right">$3,000</span>
                </div>
              </div>
              <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">
                Over 14 years (until child turns 17), this could result in:<br />
                <strong className="text-black">Your contributions: $35,000</strong><br />
                <strong className="text-[#28a745]">Government grants: $7,000+</strong><br />
                Plus investment growth (tax-deferred)
              </p>
            </div>
          </div>
        </div>

        {/* Important Rules */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-3">Important rules and limits</h3>
            <ul className="space-y-2 ml-5 text-[#3c3c43] text-[17px] list-disc pl-0">
              <li className="pl-2 leading-snug">RESP lifetime contribution limit per beneficiary: $50,000</li>
              <li className="pl-2 leading-snug">Grants must be repaid if not used for post-secondary education</li>
              <li className="pl-2 leading-snug">CESG room can be carried forward, but maximum $1,000 grant in any single year</li>
              <li className="pl-2 leading-snug">Beneficiary must enroll in qualifying post-secondary education to withdraw grants</li>
            </ul>
          </div>
        </div>

        {/* How to Apply */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-[10px] p-4">
            <h3 className="text-black text-[20px] m-0 mb-4">How to receive grants</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-[#007AFF] text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[15px]">1</span>
                </div>
                <div>
                  <p className="text-black text-[17px] mb-1">Open an RESP</p>
                  <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">Contact a financial institution that offers RESPs and provide your child's Social Insurance Number (SIN).</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#007AFF] text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[15px]">2</span>
                </div>
                <div>
                  <p className="text-black text-[17px] mb-1">Make contributions</p>
                  <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">Contribute to the RESP. For CESG, you need to contribute to receive the grant. CLB requires no contributions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#007AFF] text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[15px]">3</span>
                </div>
                <div>
                  <p className="text-black text-[17px] mb-1">Automatic grant payments</p>
                  <p className="text-[#3c3c43] text-[15px] m-0 leading-snug">Your financial institution requests the grants on your behalf. They are deposited directly into the RESP.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <div className="px-4 mb-4">
          <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Related links</h2>
          <div className="bg-white rounded-[10px] overflow-hidden divide-y divide-[#c6c6c8]">
            {onHowToOpenRESP && (
              <button 
                onClick={onHowToOpenRESP}
                className="w-full px-4 py-3 flex items-center justify-between bg-white hover:opacity-70 active:opacity-50 transition-opacity border-0 cursor-pointer"
              >
                <span className="text-[#007AFF] text-[17px] text-left">How to open an RESP</span>
                <ChevronRight className="h-5 w-5 text-[#c7c7cc] flex-shrink-0" strokeWidth={2.5} />
              </button>
            )}
            {onRESPWithdrawalRules && (
              <button 
                onClick={onRESPWithdrawalRules}
                className="w-full px-4 py-3 flex items-center justify-between bg-white hover:opacity-70 active:opacity-50 transition-opacity border-0 cursor-pointer"
              >
                <span className="text-[#007AFF] text-[17px] text-left">RESP withdrawal rules</span>
                <ChevronRight className="h-5 w-5 text-[#c7c7cc] flex-shrink-0" strokeWidth={2.5} />
              </button>
            )}
            {onApplyCanadaLearningBond && (
              <button 
                onClick={onApplyCanadaLearningBond}
                className="w-full px-4 py-3 flex items-center justify-between bg-white hover:opacity-70 active:opacity-50 transition-opacity border-0 cursor-pointer"
              >
                <span className="text-[#007AFF] text-[17px] text-left">Apply for the Canada Learning Bond</span>
                <ChevronRight className="h-5 w-5 text-[#c7c7cc] flex-shrink-0" strokeWidth={2.5} />
              </button>
            )}
            {onProvincialEducationSavings && (
              <button 
                onClick={onProvincialEducationSavings}
                className="w-full px-4 py-3 flex items-center justify-between bg-white hover:opacity-70 active:opacity-50 transition-opacity border-0 cursor-pointer"
              >
                <span className="text-[#007AFF] text-[17px] text-left">Provincial education savings programs</span>
                <ChevronRight className="h-5 w-5 text-[#c7c7cc] flex-shrink-0" strokeWidth={2.5} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}