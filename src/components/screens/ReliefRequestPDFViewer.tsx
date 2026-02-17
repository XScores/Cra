import { ChevronLeft, X, FileText } from 'lucide-react';
import craHeader from 'figma:asset/fec27de527fdcac8633bffc5456b4f486d9a260e.png';

interface ReliefRequestPDFViewerProps {
  onBack: () => void;
}

export function ReliefRequestPDFViewer({ onBack }: ReliefRequestPDFViewerProps) {
  return (
    <div className="absolute inset-0 z-[200] bg-white">
      {/* Header with back button and close button */}
      <div className="h-[60px] bg-[#007AFF] flex items-center justify-between px-4">
        <div className="flex items-center gap-3 flex-1">
          <button
            onClick={onBack}
            className="text-white hover:opacity-70 active:opacity-50 bg-transparent border-2 border-white rounded-full p-1.5 flex items-center justify-center w-8 h-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <p className="text-white text-[15px] m-0 truncate">
            Taxpayer-Relief-Request-2023.pdf
          </p>
        </div>
        <button
          onClick={onBack}
          className="text-white hover:opacity-70 active:opacity-50 bg-transparent border-0 p-1 ml-2"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* PDF Content Area */}
      <div className="h-[calc(100%-60px)] overflow-y-auto bg-[#f2f2f7] p-4">
        <div className="space-y-4 max-w-[600px] mx-auto pb-8">
          {/* First panel - Form header */}
          <div className="bg-white rounded-[10px] p-6 shadow-sm">
            {/* CRA Header */}
            <div className="border-b-2 border-[#ff3b30] pb-4 mb-6">
              <img src={craHeader} alt="Canada Revenue Agency" className="h-auto w-auto max-h-8 mb-2 object-contain" />
              <h1 className="text-black text-[20px] font-bold m-0 mt-3">Taxpayer Relief Request</h1>
              <p className="text-black text-[15px] m-0 mt-1">Cancel or Waive Penalties and Interest</p>
              <p className="text-[#3c3c43] text-[14px] m-0 mt-2">Form RC4288</p>
            </div>

            {/* Submission info */}
            <div className="mb-6">
              <div className="bg-[#E5F0FF] border border-[#B3D7FF] rounded-lg p-3">
                <p className="text-[#007AFF] text-[15px] font-semibold m-0">Submitted Request</p>
                <p className="text-[#3c3c43] text-[13px] m-0 mt-1">Submitted on October 15, 2024</p>
                <p className="text-[#3c3c43] text-[13px] m-0 mt-0.5">Reference number: TPR-2024-10-15-001234</p>
              </div>
            </div>

            {/* Taxpayer Information */}
            <div className="mb-6">
              <h3 className="text-black text-[17px] font-bold mb-3 m-0">Taxpayer Information</h3>
              <div className="space-y-0">
                <div className="flex justify-between py-2 border-b border-[#c6c6c8]">
                  <span className="text-[#3c3c43] text-[15px]">Name</span>
                  <span className="text-black text-[15px] text-right">Jonathan Rath</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#c6c6c8]">
                  <span className="text-[#3c3c43] text-[15px]">Social Insurance Number</span>
                  <span className="text-black text-[15px] text-right">*** *** 456</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#c6c6c8]">
                  <span className="text-[#3c3c43] text-[15px]">Address</span>
                  <span className="text-black text-[15px] text-right">123 Main Street</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#c6c6c8]">
                  <span className="text-[#3c3c43] text-[15px]">City, Province</span>
                  <span className="text-black text-[15px] text-right">Ottawa, ON</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#c6c6c8]">
                  <span className="text-[#3c3c43] text-[15px]">Postal Code</span>
                  <span className="text-black text-[15px] text-right">H0H 0H0</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#3c3c43] text-[15px]">Phone Number</span>
                  <span className="text-black text-[15px] text-right">(613) 555-0123</span>
                </div>
              </div>
            </div>
          </div>

          {/* Second panel - Relief Request Details */}
          <div className="bg-white rounded-[10px] p-6 shadow-sm">
            <h3 className="text-black text-[17px] font-bold mb-3 m-0">Relief Request Details</h3>
            
            <div className="mb-5">
              <h4 className="text-black text-[15px] font-semibold mb-2 m-0">Tax Year(s) Affected</h4>
              <p className="text-black text-[15px] m-0">2023</p>
            </div>

            <div className="mb-5">
              <h4 className="text-black text-[15px] font-semibold mb-2 m-0">Type of Relief Requested</h4>
              <div className="space-y-1">
                <p className="text-black text-[15px] m-0">☑ Cancel or waive penalties</p>
                <p className="text-black text-[15px] m-0">☑ Cancel or waive interest</p>
              </div>
            </div>

            <div className="mb-5">
              <h4 className="text-black text-[15px] font-semibold mb-2 m-0">Amount Details</h4>
              <div className="bg-[#f2f2f7] rounded-lg p-3">
                <div className="flex justify-between mb-2">
                  <span className="text-[#3c3c43] text-[15px]">Penalties</span>
                  <span className="text-black text-[15px] font-semibold">$245.00</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#c6c6c8]">
                  <span className="text-[#3c3c43] text-[15px]">Interest</span>
                  <span className="text-black text-[15px] font-semibold">$128.50</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-black text-[15px] font-semibold">Total Amount</span>
                  <span className="text-black text-[15px] font-bold">$373.50</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-black text-[15px] font-semibold mb-2 m-0">Reason for Request</h4>
              <p className="text-black text-[15px] m-0">Serious illness or accident</p>
            </div>
          </div>

          {/* Third panel - Circumstances Explanation */}
          <div className="bg-white rounded-[10px] p-6 shadow-sm">
            <h3 className="text-black text-[17px] font-bold mb-3 m-0">Circumstances Beyond Your Control</h3>
            
            <div className="mb-5">
              <h4 className="text-black text-[15px] font-semibold mb-2 m-0">Detailed Explanation</h4>
              <p className="text-black text-[15px] m-0 leading-relaxed">
                In early 2023, I was hospitalized due to a serious medical condition that required emergency surgery and an extended recovery period. During this time, I was unable to manage my tax affairs and subsequently missed the filing deadline for my 2023 tax return.
              </p>
              <p className="text-black text-[15px] m-0 leading-relaxed mt-3">
                I was hospitalized from January 15, 2023 to February 28, 2023, and required an additional three months of recovery at home with limited mobility and cognitive function. This prevented me from accessing my financial documents and completing my tax return on time.
              </p>
              <p className="text-black text-[15px] m-0 leading-relaxed mt-3">
                As soon as I was able, I filed my return and made arrangements to pay the outstanding balance. I have included medical documentation to support this request.
              </p>
            </div>

            <div className="mb-5">
              <h4 className="text-black text-[15px] font-semibold mb-2 m-0">Key Dates</h4>
              <div className="space-y-2">
                <div className="flex justify-between py-1.5">
                  <span className="text-[#3c3c43] text-[15px]">Date of incident</span>
                  <span className="text-black text-[15px] text-right">January 15, 2023</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-[#3c3c43] text-[15px]">End of recovery period</span>
                  <span className="text-black text-[15px] text-right">May 30, 2023</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-[#3c3c43] text-[15px]">Return filed on</span>
                  <span className="text-black text-[15px] text-right">June 15, 2023</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-black text-[15px] font-semibold mb-2 m-0">Supporting Documents Submitted</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <FileText className="h-4 w-4 text-[#ff3b30] flex-shrink-0 mt-[3px]" />
                  <p className="text-black text-[15px] m-0">Hospital admission and discharge records</p>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="h-4 w-4 text-[#ff3b30] flex-shrink-0 mt-[3px]" />
                  <p className="text-black text-[15px] m-0">Medical certificate from attending physician</p>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="h-4 w-4 text-[#ff3b30] flex-shrink-0 mt-[3px]" />
                  <p className="text-black text-[15px] m-0">Pharmacy records for prescribed medications</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth panel - Additional Information */}
          <div className="bg-white rounded-[10px] p-6 shadow-sm">
            <h3 className="text-black text-[17px] font-bold mb-3 m-0">Additional Information</h3>
            
            <div className="mb-5">
              <h4 className="text-black text-[15px] font-semibold mb-2 m-0">Previous Requests</h4>
              <p className="text-black text-[15px] m-0">No previous relief requests have been submitted.</p>
            </div>

            <div className="mb-5">
              <h4 className="text-black text-[15px] font-semibold mb-2 m-0">Payment History</h4>
              <p className="text-black text-[15px] m-0">
                I have consistently filed and paid my taxes on time for all previous years. This is the first time I have experienced difficulties meeting my tax obligations.
              </p>
            </div>

            <div>
              <h4 className="text-black text-[15px] font-semibold mb-2 m-0">Current Status</h4>
              <p className="text-black text-[15px] m-0">
                I have now fully recovered and have taken steps to ensure this situation does not recur. I have set up automatic filing reminders and have appointed a family member to assist with my tax affairs if I am unable to do so in the future.
              </p>
            </div>
          </div>

          {/* Fifth panel - Declaration */}
          <div className="bg-white rounded-[10px] p-6 shadow-sm">
            <h3 className="text-black text-[17px] font-bold mb-3 m-0">Declaration and Signature</h3>
            
            <p className="text-black text-[15px] m-0 leading-relaxed mb-4">
              I certify that the information given on this form and in any attached documents is correct, complete, and fully discloses all my relevant facts.
            </p>

            <div className="border-t border-[#c6c6c8] pt-4 mt-4">
              <div className="mb-4">
                <p className="text-[#3c3c43] text-[13px] m-0 mb-1">Signature</p>
                <p className="text-black text-[18px] m-0 font-signature italic">Jonathan Rath</p>
              </div>
              <div>
                <p className="text-[#3c3c43] text-[13px] m-0 mb-1">Date</p>
                <p className="text-black text-[15px] m-0">October 15, 2024</p>
              </div>
            </div>
          </div>

          {/* Sixth panel - CRA Use Only */}
          <div className="bg-white rounded-[10px] p-6 shadow-sm">
            <h3 className="text-black text-[17px] font-bold mb-3 m-0">For CRA Use Only</h3>
            
            <div className="bg-[#FFF5E5] border border-[#FFD700] rounded-lg p-3 mb-4">
              <p className="text-[#8B7500] text-[15px] font-semibold m-0">Status: Under Review</p>
              <p className="text-[#3c3c43] text-[13px] m-0 mt-1">Received: October 15, 2024</p>
              <p className="text-[#3c3c43] text-[13px] m-0 mt-0.5">Expected decision: January 15, 2025</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between py-1.5">
                <span className="text-[#3c3c43] text-[15px]">File Reference</span>
                <span className="text-black text-[15px] text-right">TPR-2024-10-15-001234</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#3c3c43] text-[15px]">Assigned to</span>
                <span className="text-black text-[15px] text-right">Tax Centre - Ottawa</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#3c3c43] text-[15px]">Review Officer</span>
                <span className="text-black text-[15px] text-right">[To be assigned]</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-white rounded-[10px] p-6 shadow-sm">
            <p className="text-[#3c3c43] text-[13px] m-0 leading-relaxed">
              <strong>Privacy Notice:</strong> The information you provide is collected under the authority of the Income Tax Act and will be used to process your taxpayer relief request. It may be disclosed to other government departments as authorized by law.
            </p>
            <p className="text-[#3c3c43] text-[13px] m-0 mt-3 leading-relaxed">
              For more information about taxpayer relief, visit <span className="text-[#007AFF]">canada.ca/taxpayer-relief</span> or call 1-800-959-8281.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}