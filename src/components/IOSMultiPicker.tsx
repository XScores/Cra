import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface IOSMultiPickerProps {
  isOpen: boolean;
  onClose: () => void;
  options: { value: string; label: string; description?: string }[];
  selectedValues: string[];
  onSelect: (values: string[]) => void;
  title?: string;
}

export function IOSMultiPicker({ isOpen, onClose, options, selectedValues, onSelect, title }: IOSMultiPickerProps) {
  const [tempValues, setTempValues] = useState<string[]>(selectedValues);
  const [expandedOption, setExpandedOption] = useState<string | null>(null);

  const handleDone = () => {
    onSelect(tempValues);
    onClose();
  };

  const handleCancel = () => {
    setTempValues(selectedValues);
    setExpandedOption(null);
    onClose();
  };

  const handleOptionClick = (value: string) => {
    // Toggle selection
    if (tempValues.includes(value)) {
      setTempValues(tempValues.filter(v => v !== value));
    } else {
      setTempValues([...tempValues, value]);
    }
    
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
              {options.map((option) => {
                const isSelected = tempValues.includes(option.value);
                return (
                  <button
                    key={option.value}
                    onClick={() => handleOptionClick(option.value)}
                    className="w-full px-4 py-4 text-left border-b border-[#E5E5EA] last:border-b-0 cursor-pointer active:bg-[#f2f2f7] transition-colors bg-white"
                  >
                    <div className="flex items-start gap-3">
                      {/* Checkbox */}
                      <div className={`w-[22px] h-[22px] rounded-[6px] border-2 flex items-center justify-center flex-shrink-0 mt-[2px] ${
                        isSelected ? 'bg-[#007AFF] border-[#007AFF]' : 'border-[#C6C6C8] bg-white'
                      }`}>
                        {isSelected && (
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M11.667 3.5L5.25 9.917L2.333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <span className="text-[17px] text-black">
                          {option.label}
                        </span>
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
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Safe area padding for bottom */}
            <div className="h-[env(safe-area-inset-bottom,20px)] bg-white" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}