import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface IOSPickerProps {
  isOpen: boolean;
  onClose: () => void;
  options: { value: string; label: string; description?: string }[];
  selectedValue: string;
  onSelect: (value: string) => void;
  title?: string;
}

export function IOSPicker({ isOpen, onClose, options, selectedValue, onSelect, title }: IOSPickerProps) {
  const [tempValue, setTempValue] = useState(selectedValue);
  const [expandedOption, setExpandedOption] = useState<string | null>(null);

  const handleDone = () => {
    onSelect(tempValue);
    onClose();
  };

  const handleCancel = () => {
    setTempValue(selectedValue);
    setExpandedOption(null);
    onClose();
  };

  const handleOptionClick = (value: string) => {
    setTempValue(value);
    // Toggle expansion if option has a description
    const option = options.find(opt => opt.value === value);
    if (option?.description) {
      setExpandedOption(expandedOption === value ? null : value);
    } else {
      setExpandedOption(null);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCancel}
            className="fixed inset-0 bg-black/40 z-[300]"
          />

          {/* Picker Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-[301] bg-[#f2f2f7] rounded-t-[13px] overflow-hidden"
          >
            {/* Toolbar */}
            <div className="flex justify-between items-center px-4 py-2 bg-[#f9f9f9] border-b border-[#E5E5EA]">
              <button
                onClick={handleCancel}
                className="text-[17px] text-[#007AFF] font-normal bg-transparent border-0 cursor-pointer active:opacity-70 py-2"
              >
                Cancel
              </button>
              {title && <span className="text-[13px] font-semibold text-[#8E8E93]">{title}</span>}
              <button
                onClick={handleDone}
                className="text-[17px] text-[#007AFF] font-semibold bg-transparent border-0 cursor-pointer active:opacity-70 py-2"
              >
                Done
              </button>
            </div>

            {/* Picker Options */}
            <div className="bg-white max-h-[260px] overflow-y-auto">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionClick(option.value)}
                  className={`w-full px-4 py-4 text-left border-b border-[#E5E5EA] last:border-b-0 cursor-pointer active:bg-[#f2f2f7] transition-colors ${
                    tempValue === option.value ? 'bg-[#E5F0FF]' : 'bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[17px] ${tempValue === option.value ? 'text-[#007AFF] font-semibold' : 'text-black'}`}>
                      {option.label}
                    </span>
                    {tempValue === option.value && (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M16.667 5L7.5 14.167L3.333 10" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  {expandedOption === option.value && option.description && (
                    <div className="mt-2 text-[15px] text-black whitespace-pre-line">
                      {option.description.split(/(canada\.ca\/[a-z-]+)/gi).map((part, index) => {
                        // Check if this part is a URL
                        if (part.match(/canada\.ca\/[a-z-]+/i)) {
                          return <span key={index} className="text-[#007AFF]">{part}</span>;
                        }
                        return part;
                      })}
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Safe area padding for bottom */}
            <div className="h-[env(safe-area-inset-bottom,20px)] bg-white" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}