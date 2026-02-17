import { HeaderMaster } from '../HeaderMaster';
import { ChevronRight } from 'lucide-react';

interface TaxFilingChangesScreenProps {
  onBack: () => void;
  onNavigateHome?: () => void;
  onViewMail?: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  hasUnreadMail?: boolean;
  unreadMailCount?: number;
}

export function TaxFilingChangesScreen({ 
  onBack,
  onNavigateHome, 
  onViewMail, 
  onFileTaxes, 
  onMakePayment, 
  onBenefitsAndCredits,
  onRegisteredPlans, 
  onHelp, 
  onSignOut, 
  onTaxSlips,
  onProofOfIncome,
  hasUnreadMail = false, 
  unreadMailCount = 0 
}: TaxFilingChangesScreenProps) {
  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      <HeaderMaster 
        title="My Account"
        showBackButton={false}
        onViewMail={onViewMail}
        onNavigateHome={onNavigateHome}
        onFileTaxes={onFileTaxes}
        onMakePayment={onMakePayment}
        onViewAllBenefits={onBenefitsAndCredits}
        onRegisteredPlans={onRegisteredPlans}
        onHelp={onHelp}
        onSignOut={onSignOut}
        onTaxSlips={onTaxSlips}
        onProofOfIncome={onProofOfIncome}
        hasUnreadMail={hasUnreadMail}
      />
      
      <main className="pb-4">
        {/* Breadcrumb */}
        <div className="sticky top-0 z-10 bg-[#f5f5f5] px-4 py-3 border-b border-[#e1e4e7]">
          <div className="text-[13px] text-[#333333]">
            <span>My Account</span>
            <span className="mx-2">{'>'}</span>
            <button 
              onClick={onNavigateHome}
              className="text-[13px] text-[#26374a] hover:text-[#af3c43] underline bg-transparent border-0 p-0"
            >
              Home
            </button>
            <span className="mx-2">{'>'}</span>
            <button 
              onClick={onBack}
              className="text-[13px] text-[#26374a] hover:text-[#af3c43] underline bg-transparent border-0 p-0"
            >
              File taxes
            </button>
            <span className="mx-2">{'>'}</span>
            <span className="font-bold underline">Tax filing changes for 2025</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="px-4 py-6 bg-white border-b border-[#e1e4e7]">
          <h1 className="text-[#26374a] m-0 mb-2 font-bold text-xl">2025 Tax filing and regulation changes</h1>
          <p className="text-[#333333] text-[15px] m-0">
            Major tax filing changes in Canada for the 2025 tax year include a reduction in the lowest federal income tax rate (to a blended 14.5% rate for 2025), an increase in the Basic Personal Amount (BPA), and new digital filing requirements for businesses and digital platform operators.
          </p>
        </div>

        {/* Content */}
        <div className="bg-[#f5f5f5] px-4 py-4">
          
          {/* For Individuals Section */}
          <div className="bg-white border border-[#e1e4e7] rounded-none mb-4 overflow-hidden">
            <div className="bg-[#f8f8f8] px-5 py-4 border-b border-[#e1e4e7]">
              <h2 className="text-[#26374a] m-0 font-bold">For Individuals</h2>
            </div>
            <div className="p-5 space-y-5">
              
              {/* Federal Income Tax Rate Reduction */}
              <div>
                <h3 className="text-[#26374a] m-0 mb-2 font-bold">Federal Income Tax Rate Reduction</h3>
                <p className="text-[#333333] text-[14px] m-0">
                  The lowest federal personal income tax rate is reduced from 15% to 14%, effective July 1, 2025. This results in a blended federal tax rate of 14.5% for the entire 2025 tax year.
                </p>
              </div>

              {/* Increased Basic Personal Amount */}
              <div>
                <h3 className="text-[#26374a] m-0 mb-2 font-bold">Increased Basic Personal Amount (BPA)</h3>
                <p className="text-[#333333] text-[14px] m-0">
                  The maximum tax-exempt income threshold (BPA) has increased and is set at approximately $16,129 for the 2025 tax year, up from 2024 levels. This means more income can be earned before federal tax is owed.
                </p>
              </div>

              {/* Adjustments to Non-Refundable Tax Credits */}
              <div>
                <h3 className="text-[#26374a] m-0 mb-2 font-bold">Adjustments to Non-Refundable Tax Credits</h3>
                <p className="text-[#333333] text-[14px] m-0">
                  The value of most non-refundable tax credits, which is tied to the lowest federal tax rate, will also see a slight decrease in value due to the rate reduction. This may slightly offset the benefit for some low-income earners who rely heavily on these credits.
                </p>
              </div>

              {/* Federal Tax Bracket Indexation */}
              <div>
                <h3 className="text-[#26374a] m-0 mb-2 font-bold">Federal Tax Bracket Indexation</h3>
                <p className="text-[#333333] text-[14px] m-0">
                  All federal income tax brackets are adjusted for inflation (by 2.7% for 2025), ensuring taxpayers are not automatically pushed into higher brackets due to cost of living increases.
                </p>
              </div>

              {/* CPP and EI Changes */}
              <div>
                <h3 className="text-[#26374a] m-0 mb-2 font-bold">CPP and EI Changes</h3>
                <p className="text-[#333333] text-[14px] m-0">
                  The Year's Maximum Pensionable Earnings (YMPE) for Canada Pension Plan (CPP) contributions is increasing to $71,300 in 2025, with an additional earnings ceiling (YAMPE) introduced at $81,200. Maximum insurable earnings for Employment Insurance (EI) are also rising to $65,700.
                </p>
              </div>

              {/* Automatic Filing Expansion */}
              <div>
                <h3 className="text-[#26374a] m-0 mb-2 font-bold">Automatic Filing Expansion</h3>
                <p className="text-[#333333] text-[14px] m-0">
                  The CRA's "SimpleFile by Phone" service is being expanded to include more low- or fixed-income individuals with simple tax situations, allowing them to file automatically via phone.
                </p>
              </div>

            </div>
          </div>

          {/* For Businesses Section */}
          <div className="bg-white border border-[#e1e4e7] rounded-none mb-4 overflow-hidden">
            <div className="bg-[#f8f8f8] px-5 py-4 border-b border-[#e1e4e7]">
              <h2 className="text-[#26374a] m-0 font-bold">For Businesses and Digital Platform Operators</h2>
            </div>
            <div className="p-5 space-y-5">
              
              {/* Mandatory Online Mail */}
              <div>
                <h3 className="text-[#26374a] m-0 mb-2 font-bold">Mandatory Online Mail</h3>
                <p className="text-[#333333] text-[14px] m-0">
                  Starting in spring 2025, the CRA is making online mail the default for most business correspondence, sending notices and updates through the "My Business Account" portal instead of by paper.
                </p>
              </div>

              {/* Digital Platform Reporting Rules */}
              <div>
                <h3 className="text-[#26374a] m-0 mb-2 font-bold">Digital Platform Reporting Rules</h3>
                <p className="text-[#333333] text-[14px] m-0">
                  New reporting rules for digital platform operators (Part XX Information Return) can be submitted to the CRA starting in January 2025. This requires operators to fulfill due diligence and reporting requirements related to platform users' income.
                </p>
              </div>

              {/* Electronic Filing Simplification */}
              <div>
                <h3 className="text-[#26374a] m-0 mb-2 font-bold">Electronic Filing Simplification</h3>
                <p className="text-[#333333] text-[14px] m-0">
                  For information returns (e.g., T4s), submissions will be limited to a single return type per file, simplifying validation and processing but requiring businesses to adjust their filing processes.
                </p>
              </div>

            </div>
          </div>

          {/* Implementation Note */}
          <div className="bg-[#fef9e7] border-l-4 border-[#fcba19] p-4 rounded-none">
            <p className="text-[#26374a] m-0 text-[14px]">
              <span className="font-bold">Note:</span> Taxpayers can realize the impact of the federal tax rate reduction either through updated payroll deductions starting in July 2025 or when they file their 2025 tax returns in spring 2026.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}