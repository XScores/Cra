interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  onStepClick?: (step: number) => void;
}

export function StepIndicator({ currentStep, totalSteps, onStepClick }: StepIndicatorProps) {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isPast = stepNumber < currentStep;
          const isClickable = onStepClick && (isPast || isActive);
          
          return (
            <div key={stepNumber} className="flex items-center flex-1">
              <button
                onClick={() => isClickable && onStepClick(stepNumber)}
                disabled={!isClickable}
                className={`flex items-center justify-center w-8 h-8 rounded-full text-[15px] font-semibold transition-all ${
                  isActive
                    ? 'bg-[#007AFF] text-white'
                    : isPast
                    ? 'bg-[#34C759] text-white'
                    : 'bg-[#E5E5EA] text-[#8E8E93]'
                } ${
                  isClickable
                    ? 'cursor-pointer hover:opacity-80 active:opacity-60'
                    : 'cursor-default'
                }`}
              >
                {stepNumber}
              </button>
              {index < totalSteps - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-1 ${
                    stepNumber < currentStep ? 'bg-[#34C759]' : 'bg-[#E5E5EA]'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
