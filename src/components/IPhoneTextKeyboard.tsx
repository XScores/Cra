import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface IPhoneTextKeyboardProps {
  value: string;
  onChange: (value: string) => void;
  onClose: () => void;
  placeholder?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  multiline?: boolean;
}

export function IPhoneTextKeyboard({
  value,
  onChange,
  onClose,
  placeholder = '',
  autoCapitalize = 'sentences',
  multiline = false
}: IPhoneTextKeyboardProps) {
  const [shifted, setShifted] = useState(autoCapitalize !== 'none');
  const [showNumeric, setShowNumeric] = useState(false);

  const keys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'delete']
  ];

  const handleKeyClick = (key: string) => {
    if (key === 'shift') {
      setShifted(!shifted);
    } else if (key === 'delete') {
      onChange(value.slice(0, -1));
    } else if (key === 'space') {
      onChange(value + ' ');
    } else if (key === 'return') {
      if (multiline) {
        onChange(value + '\\n');
      } else {
        onClose();
      }
    } else {
      const char = shifted ? key.toUpperCase() : key;
      onChange(value + char);
      
      // Auto-unshift after typing a letter (except for all caps mode)
      if (shifted && autoCapitalize !== 'characters') {
        setShifted(false);
      }
    }
  };

  const handleNumericKeyPress = (key: string) => {
    if (key === 'backspace') {
      onChange(value.slice(0, -1));
    } else {
      onChange(value + key);
    }
  };

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className="absolute bottom-0 left-0 right-0 z-[200] bg-[#d1d5db] pb-2 pt-1 border-t border-[#a1a5ab]"
    >
      {/* Toolbar with Done button */}
      <div className="flex justify-between items-center px-3 py-2 border-b border-[#a1a5ab]">
        <div></div>
        <button
          onMouseDown={(e) => e.preventDefault()}
          onClick={onClose}
          className="text-[17px] text-[#007aff] font-semibold"
        >
          Done
        </button>
      </div>

      {showNumeric ? (
        // Numeric Keyboard View
        <div className="px-1 pt-2">
          {/* Row 1: 1, 2, 3 */}
          <div className="grid grid-cols-3 gap-[6px] mb-[6px]">
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleNumericKeyPress('1')}
              className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none active:bg-gray-200"
            >
              1
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleNumericKeyPress('2')}
              className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none active:bg-gray-200"
            >
              2
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleNumericKeyPress('3')}
              className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none active:bg-gray-200"
            >
              3
            </button>
          </div>

          {/* Row 2: 4, 5, 6 */}
          <div className="grid grid-cols-3 gap-[6px] mb-[6px]">
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleNumericKeyPress('4')}
              className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none active:bg-gray-200"
            >
              4
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleNumericKeyPress('5')}
              className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none active:bg-gray-200"
            >
              5
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleNumericKeyPress('6')}
              className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none active:bg-gray-200"
            >
              6
            </button>
          </div>

          {/* Row 3: 7, 8, 9 */}
          <div className="grid grid-cols-3 gap-[6px] mb-[6px]">
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleNumericKeyPress('7')}
              className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none active:bg-gray-200"
            >
              7
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleNumericKeyPress('8')}
              className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none active:bg-gray-200"
            >
              8
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleNumericKeyPress('9')}
              className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none active:bg-gray-200"
            >
              9
            </button>
          </div>

          {/* Row 4: ABC, 0, Backspace */}
          <div className="grid grid-cols-3 gap-[6px] mb-[6px]">
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setShowNumeric(false)}
              className="bg-[#afb3ba] rounded-[5px] shadow-sm py-3 text-center text-[15px] text-[#000000] select-none active:opacity-70"
            >
              ABC
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleNumericKeyPress('0')}
              className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none active:bg-gray-200"
            >
              0
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleNumericKeyPress('backspace')}
              className="bg-[#afb3ba] rounded-[5px] shadow-sm py-3 px-2 flex items-center justify-center active:bg-[#9599a0]"
            >
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none" className="text-[#000000]">
                <path d="M6 0L0 10L6 20H28V0H6Z" fill="currentColor" fillOpacity="0.3"/>
                <path d="M12 6L20 14M20 6L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      ) : (
        // QWERTY Keyboard View
        <div className="px-1 pt-1">
          {/* First row */}
          <div className="flex gap-[2px] mb-[6px] justify-center">
            {keys[0].map((key) => (
              <button
                key={key}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleKeyClick(key)}
                className="flex-1 bg-white rounded-[5px] shadow-sm py-3 text-center text-[20px] text-[#000000] select-none active:bg-gray-200"
              >
                {shifted ? key.toUpperCase() : key.toLowerCase()}
              </button>
            ))}
          </div>

          {/* Second row */}
          <div className="flex gap-[2px] mb-[6px] justify-center px-3">
            {keys[1].map((key) => (
              <button
                key={key}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleKeyClick(key)}
                className="flex-1 bg-white rounded-[5px] shadow-sm py-3 text-center text-[20px] text-[#000000] select-none active:bg-gray-200"
              >
                {shifted ? key.toUpperCase() : key.toLowerCase()}
              </button>
            ))}
          </div>

          {/* Third row */}
          <div className="flex gap-[2px] mb-[6px] justify-center">
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleKeyClick('shift')}
              className={`flex-[1.3] ${shifted ? 'bg-white' : 'bg-[#afb3ba]'} rounded-[5px] shadow-sm py-3 px-2 flex items-center justify-center active:opacity-70`}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#000000]">
                <path d="M10 2L3 10H7V18H13V10H17L10 2Z" fill="currentColor"/>
              </svg>
            </button>
            {keys[2].slice(1, -1).map((key) => (
              <button
                key={key}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleKeyClick(key)}
                className="flex-1 bg-white rounded-[5px] shadow-sm py-3 text-center text-[20px] text-[#000000] select-none active:bg-gray-200"
              >
                {shifted ? key.toUpperCase() : key.toLowerCase()}
              </button>
            ))}
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleKeyClick('delete')}
              className="flex-[1.3] bg-[#afb3ba] rounded-[5px] shadow-sm py-3 px-2 flex items-center justify-center active:bg-[#9599a0]"
            >
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none" className="text-[#000000]">
                <path d="M6 0L0 10L6 20H28V0H6Z" fill="currentColor" fillOpacity="0.3"/>
                <path d="M12 6L20 14M20 6L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Bottom row */}
          <div className="flex gap-[6px] justify-center">
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setShowNumeric(true)}
              className="flex-[1.3] bg-[#afb3ba] rounded-[5px] shadow-sm py-2 px-2 flex items-center justify-center text-[15px] text-[#000000] select-none active:opacity-70"
            >
              123
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              className="flex-[1.3] bg-[#afb3ba] rounded-[5px] shadow-sm py-2 px-2 flex items-center justify-center active:opacity-70"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#000000]">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M6 10 L14 10" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleKeyClick('space')}
              className="flex-[5] bg-white rounded-[5px] shadow-sm py-2 text-center text-[17px] text-[#000000] select-none active:bg-gray-200"
            >
              space
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleKeyClick('return')}
              className="flex-[1.3] bg-[#007AFF] rounded-[5px] shadow-sm py-2 px-2 flex items-center justify-center text-[15px] text-white select-none active:opacity-70"
            >
              {multiline ? 'return' : 'done'}
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
