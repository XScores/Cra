import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';

interface IPhoneKeyboardProps {
  onKeyPress?: (key: string) => void;
  onDone?: () => void;
  keyboardType?: 'default' | 'numeric'; // Allow specifying keyboard type
}

export function IPhoneKeyboard({ onKeyPress, onDone, keyboardType = 'default' }: IPhoneKeyboardProps = {}) {
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  const [shifted, setShifted] = useState(true); // Start with capital letters
  const [showNumeric, setShowNumeric] = useState(keyboardType === 'numeric'); // Track keyboard mode
  const [showSpecial, setShowSpecial] = useState(false); // Track special characters mode

  useEffect(() => {
    const container = document.getElementById('iphone-screen');
    setPortalContainer(container);
  }, []);

  const keys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'delete']
  ];

  const numberKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  const specialCharsRow1 = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
  const specialCharsRow2 = ['-', '_', '=', '+', '[', ']', '{', '}', ';', ':'];
  const specialCharsRow3 = ['"', "'", '<', '>', ',', '.', '?', '/', '\\', '|'];

  const handleKeyClick = (key: string) => {
    if (!onKeyPress) return;

    if (key === 'shift') {
      setShifted(!shifted);
    } else if (key === 'delete') {
      onKeyPress('backspace');
    } else if (key === 'space') {
      onKeyPress(' ');
    } else if (key === 'return') {
      onKeyPress('\n');
    } else {
      onKeyPress(shifted ? key.toUpperCase() : key);
      // Auto-unshift after typing a letter
      if (shifted) {
        setShifted(false);
      }
    }
  };

  const keyboardContent = (
    <motion.div 
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className="absolute bottom-0 left-0 right-0 z-[200] bg-[#d1d5db] pb-2 pt-1 border-t border-[#a1a5ab]"
      data-keyboard="true"
      onClick={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
    >
      {/* Toolbar with Done button (only if onDone is provided) */}
      {onDone && (
        <div className="flex justify-between items-center px-3 py-2 border-b border-[#a1a5ab]">
          <div></div>
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={onDone}
            className="text-[17px] text-[#007aff] font-semibold bg-transparent border-0 cursor-pointer hover:opacity-70 active:opacity-50"
          >
            Done
          </button>
        </div>
      )}

      {showSpecial ? (
        // Special Characters Keyboard View
        <div className="px-1 pt-1">
          {/* Row 1: Special characters */}
          <div className="flex gap-[2px] mb-[6px] justify-center">
            {specialCharsRow1.map((key) => (
              <button
                key={key}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => onKeyPress?.(key)}
                className="flex-1 bg-white rounded-[5px] shadow-sm py-2 text-center text-[20px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200 transition-colors"
              >
                {key}
              </button>
            ))}
          </div>

          {/* Row 2: More special characters */}
          <div className="flex gap-[2px] mb-[6px] justify-center">
            {specialCharsRow2.map((key) => (
              <button
                key={key}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => onKeyPress?.(key)}
                className="flex-1 bg-white rounded-[5px] shadow-sm py-3 text-center text-[20px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200 transition-colors"
              >
                {key}
              </button>
            ))}
          </div>

          {/* Row 3: Additional special characters */}
          <div className="flex gap-[2px] mb-[6px] justify-center px-3">
            {specialCharsRow3.map((key) => (
              <button
                key={key}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => onKeyPress?.(key)}
                className="flex-1 bg-white rounded-[5px] shadow-sm py-3 text-center text-[20px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200 transition-colors"
              >
                {key}
              </button>
            ))}
          </div>

          {/* Bottom row with ABC toggle */}
          <div className="flex gap-[6px] justify-center">
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setShowSpecial(false)}
              className="flex-[1.3] bg-[#afb3ba] rounded-[5px] shadow-sm py-2 px-2 flex items-center justify-center text-[15px] text-[#000000] select-none border-0 cursor-pointer active:opacity-70 transition-opacity"
            >
              ABC
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              className="flex-[1.3] bg-[#afb3ba] rounded-[5px] shadow-sm py-2 px-2 flex items-center justify-center border-0 cursor-pointer active:opacity-70 transition-opacity"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#000000]">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M6 10 L14 10" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleKeyClick('space')}
              className="flex-[5] bg-white rounded-[5px] shadow-sm py-2 text-center text-[17px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200 transition-colors"
            >
              space
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onKeyPress?.('backspace')}
              className="flex-[1.3] bg-[#afb3ba] rounded-[5px] shadow-sm py-3 px-2 flex items-center justify-center border-0 cursor-pointer active:bg-[#9599a0] transition-colors"
            >
              <svg width="22" height="18" viewBox="0 0 22 18" fill="none" className="text-[#000000]">
                <path d="M20 2L8 14L2 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M22 0L20 2L18 0" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      ) : showNumeric ? (
        // Numeric Keyboard View
        <div className="px-1 pt-2">
          {/* Row 1: 1, 2, 3 */}
          <div className="grid grid-cols-3 gap-[6px] mb-[6px]">
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onKeyPress?.('1')}
              className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200"
            >
              1
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onKeyPress?.('2')}
              className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200"
            >
              2
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onKeyPress?.('3')}
              className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200"
            >
              3
            </button>
          </div>

          {/* Row 2: 4, 5, 6 */}
          <div className="grid grid-cols-3 gap-[6px] mb-[6px]">
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onKeyPress?.('4')}
              className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200"
            >
              4
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onKeyPress?.('5')}
              className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200"
            >
              5
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onKeyPress?.('6')}
              className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200"
            >
              6
            </button>
          </div>

          {/* Row 3: 7, 8, 9 */}
          <div className="grid grid-cols-3 gap-[6px] mb-[6px]">
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onKeyPress?.('7')}
              className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200"
            >
              7
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onKeyPress?.('8')}
              className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200"
            >
              8
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onKeyPress?.('9')}
              className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200"
            >
              9
            </button>
          </div>
          
          {/* Row 4: ABC, 0, Backspace */}
          <div className="grid grid-cols-3 gap-[6px] mb-[6px]">
            {/* ABC button to switch back to QWERTY */}
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setShowNumeric(false)}
              className="bg-[#afb3ba] rounded-[5px] shadow-sm py-3 text-center text-[15px] text-[#000000] select-none border-0 cursor-pointer active:opacity-70 transition-opacity"
            >
              ABC
            </button>
            
            {/* Zero key */}
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onKeyPress?.('0')}
              className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200"
            >
              0
            </button>
            
            {/* Backspace key */}
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onKeyPress?.('backspace')}
              className="bg-[#afb3ba] rounded-[5px] shadow-sm py-3 px-2 flex items-center justify-center border-0 cursor-pointer active:bg-[#9599a0] transition-colors"
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
          {/* Number row */}
          <div className="flex gap-[2px] mb-[6px] justify-center">
            {numberKeys.map((key) => (
              <button
                key={key}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => onKeyPress?.(key)}
                className="flex-1 bg-white rounded-[5px] shadow-sm py-2 text-center text-[20px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200 transition-colors"
              >
                {key}
              </button>
            ))}
          </div>

          {/* First row */}
          <div className="flex gap-[2px] mb-[6px] justify-center">
            {keys[0].map((key) => (
              <button
                key={key}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleKeyClick(key)}
                className="flex-1 bg-white rounded-[5px] shadow-sm py-3 text-center text-[20px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200 transition-colors"
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
                className="flex-1 bg-white rounded-[5px] shadow-sm py-3 text-center text-[20px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200 transition-colors"
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
              className={`flex-[1.3] ${shifted ? 'bg-white' : 'bg-[#afb3ba]'} rounded-[5px] shadow-sm py-3 px-2 flex items-center justify-center border-0 cursor-pointer active:opacity-70 transition-all`}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#000000]">
                <path d="M3 10L10 3L10 7L17 7L17 13L10 13L10 17L3 10Z" fill="currentColor"/>
              </svg>
            </button>
            {keys[2].slice(1, -1).map((key) => (
              <button
                key={key}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleKeyClick(key)}
                className="flex-1 bg-white rounded-[5px] shadow-sm py-3 text-center text-[20px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200 transition-colors"
              >
                {shifted ? key.toUpperCase() : key.toLowerCase()}
              </button>
            ))}
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleKeyClick('delete')}
              className="flex-[1.3] bg-[#afb3ba] rounded-[5px] shadow-sm py-3 px-2 flex items-center justify-center border-0 cursor-pointer active:bg-[#9599a0] transition-colors"
            >
              <svg width="22" height="18" viewBox="0 0 22 18" fill="none" className="text-[#000000]">
                <path d="M20 2L8 14L2 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M22 0L20 2L18 0" fill="currentColor"/>
              </svg>
            </button>
          </div>

          {/* Bottom row */}
          <div className="flex gap-[6px] justify-center">
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setShowNumeric(true)}
              className="flex-[1.3] bg-[#afb3ba] rounded-[5px] shadow-sm py-2 px-2 flex items-center justify-center text-[15px] text-[#000000] select-none border-0 cursor-pointer active:opacity-70 transition-opacity"
            >
              123
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setShowSpecial(true)}
              className="flex-[1.3] bg-[#afb3ba] rounded-[5px] shadow-sm py-2 px-2 flex items-center justify-center text-[15px] text-[#000000] select-none border-0 cursor-pointer active:opacity-70 transition-opacity"
            >
              #+=
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleKeyClick('space')}
              className="flex-[5] bg-white rounded-[5px] shadow-sm py-2 text-center text-[17px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200 transition-colors"
            >
              space
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleKeyClick('return')}
              className="flex-[1.3] bg-[#007AFF] rounded-[5px] shadow-sm py-2 px-2 flex items-center justify-center text-[15px] text-white select-none border-0 cursor-pointer active:opacity-70 transition-opacity"
            >
              return
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );

  if (!portalContainer) return null;
  return createPortal(keyboardContent, portalContainer);
}