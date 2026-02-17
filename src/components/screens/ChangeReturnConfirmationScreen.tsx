import { Check } from 'lucide-react';

interface ChangeReturnConfirmationScreenProps {
  year: string;
  onReturnHome: () => void;
}

export function ChangeReturnConfirmationScreen({
  year,
  onReturnHome
}: ChangeReturnConfirmationScreenProps) {
  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col items-center justify-center px-6">
      {/* Success Icon */}
      <div className="w-20 h-20 rounded-full bg-[#34C759] flex items-center justify-center mb-6">
        <Check className="w-12 h-12 text-white stroke-[3]" />
      </div>

      {/* Success Message */}
      <h1 className="text-[28px] text-text-gray-ios mb-3 text-center">
        Changes submitted
      </h1>

      <p className="text-[17px] text-[#3C3C43] text-center mb-8 leading-relaxed max-w-[320px]">
        Your request to change your {year} tax return has been submitted successfully.
      </p>

      {/* Processing Time Info */}
      <div className="bg-white rounded-[10px] px-6 py-4 mb-8 w-full max-w-[320px]">
        <p className="text-[13px] text-[#3C3C43] mb-1 text-center">
          Processing time
        </p>
        <p className="text-[20px] text-text-gray-ios text-center">
          8 weeks
        </p>
        <p className="text-[13px] text-[#3C3C43] mt-2 text-center">
          Reference: CR-{Math.floor(100000 + Math.random() * 900000)}
        </p>
      </div>

      {/* Additional Info */}
      <p className="text-[15px] text-[#3C3C43] text-center mb-8 max-w-[320px]">
        You will receive a notice of reassessment once your changes have been processed.
      </p>

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
