import { Check } from 'lucide-react';

interface AuditEnquiriesConfirmationScreenProps {
  onReturnHome: () => void;
}

export function AuditEnquiriesConfirmationScreen({
  onReturnHome
}: AuditEnquiriesConfirmationScreenProps) {
  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col items-center justify-center px-6">
      {/* Success Icon */}
      <div className="w-20 h-20 rounded-full bg-[#34C759] flex items-center justify-center mb-6">
        <Check className="w-12 h-12 text-white stroke-[3]" />
      </div>

      {/* Success Message */}
      <h1 className="text-[28px] text-text-gray-ios mb-3 text-center">
        Enquiry submitted
      </h1>

      <p className="text-[17px] text-[#3C3C43] text-center mb-8 leading-relaxed max-w-[280px]">
        Your audit enquiry has been submitted successfully. We will review your enquiry and respond as soon as possible.
      </p>

      {/* Reference Number */}
      <div className="bg-white rounded-[10px] px-6 py-4 mb-8">
        <p className="text-[13px] text-[#3C3C43] mb-1 text-center">
          Reference number
        </p>
        <p className="text-[20px] text-text-gray-ios text-center tracking-wider">
          AE-{Math.floor(100000 + Math.random() * 900000)}
        </p>
      </div>

      {/* Return to Home Button */}
      <button
        onClick={onReturnHome}
        className="w-full max-w-[280px] bg-[#007AFF] text-white py-3.5 rounded-[10px] active:opacity-70 transition-opacity"
      >
        Return to home
      </button>
    </div>
  );
}