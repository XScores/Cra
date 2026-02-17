import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';

interface IPhoneEmailKeyboardProps {
  onKeyPress?: (key: string) => void;
  onDone?: () => void;
}

export function IPhoneEmailKeyboard({ onKeyPress, onDone }: IPhoneEmailKeyboardProps = {}) {
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  const [shifted, setShifted] = useState(true); // Start with capital letters
  const [showSymbols, setShowSymbols] = useState(false); // Track symbols view

  useEffect(() => {
    const container = document.getElementById('iphone-screen');
    setPortalContainer(container);
  }, []);

  const keys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'delete']
  ];

  const symbolKeys = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['-', '/', ':', ';', '(', ')', '$', '&', '@', '"'],
    ['#+=', '.', ',', '?', '!', "'", 'delete']
  ];

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
      if (shifted && key.match(/[a-z]/i)) {
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

      {showSymbols ? (
        // Symbols/Numbers Keyboard View
        <div className="px-1 pt-1">
          {/* First row - Numbers */}
          <div className="flex gap-[2px] mb-[6px] justify-center">
            {symbolKeys[0].map((key) => (
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

          {/* Second row - Symbols including @ */}
          <div className="flex gap-[2px] mb-[6px] justify-center">
            {symbolKeys[1].map((key) => (
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

          {/* Third row */}
          <div className="flex gap-[2px] mb-[6px] justify-center">
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setShowSymbols(false)}
              className="flex-[1.3] bg-[#afb3ba] rounded-[5px] shadow-sm py-3 px-2 flex items-center justify-center text-[15px] text-[#000000] select-none border-0 cursor-pointer active:opacity-70 transition-opacity"
            >
              ABC
            </button>
            {symbolKeys[2].slice(1, -1).map((key) => (
              <button
                key={key}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => onKeyPress?.(key)}
                className="flex-1 bg-white rounded-[5px] shadow-sm py-3 text-center text-[20px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200 transition-colors"
              >
                {key}
              </button>
            ))}
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

          {/* Bottom row */}
          <div className="flex gap-[6px] justify-center">
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setShowSymbols(false)}
              className="flex-[1.3] bg-[#afb3ba] rounded-[5px] shadow-sm py-2 px-2 flex items-center justify-center text-[15px] text-[#000000] select-none border-0 cursor-pointer active:opacity-70 transition-opacity"
            >
              ABC
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onKeyPress?.('@')}
              className="flex-[1.3] bg-white rounded-[5px] shadow-sm py-2 px-2 flex items-center justify-center text-[20px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200 transition-colors"
            >
              @
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
              onClick={() => onKeyPress?.('.')}
              className="flex-[1.3] bg-white rounded-[5px] shadow-sm py-2 px-2 flex items-center justify-center text-[20px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200 transition-colors"
            >
              .
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

          {/* Bottom row with @ symbol */}
          <div className="flex gap-[6px] justify-center">
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setShowSymbols(true)}
              className="flex-[1.3] bg-[#afb3ba] rounded-[5px] shadow-sm py-2 px-2 flex items-center justify-center text-[15px] text-[#000000] select-none border-0 cursor-pointer active:opacity-70 transition-opacity"
            >
              123
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onKeyPress?.('@')}
              className="flex-[1.3] bg-white rounded-[5px] shadow-sm py-2 px-2 flex items-center justify-center text-[20px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200 transition-colors"
            >
              @
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
              onClick={() => onKeyPress?.('.')}
              className="flex-[1.3] bg-white rounded-[5px] shadow-sm py-2 px-2 flex items-center justify-center text-[20px] text-[#000000] select-none border-0 cursor-pointer active:bg-gray-200 transition-colors"
            >
              .
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
