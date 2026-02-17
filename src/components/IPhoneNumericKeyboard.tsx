import { motion } from 'motion/react';

interface IPhoneNumericKeyboardProps {
  onKeyPress: (key: string) => void;
  onDone: () => void;
}

export function IPhoneNumericKeyboard({ onKeyPress, onDone }: IPhoneNumericKeyboardProps) {
  const keys = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['', '0', 'backspace']
  ];

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
          onClick={onDone}
          className="text-[17px] text-[#007aff] font-semibold"
        >
          Done
        </button>
      </div>

      {/* Keyboard rows */}
      <div className="px-1 pt-2">
        {/* Row 1: 1, 2, 3 */}
        <div className="grid grid-cols-3 gap-[6px] mb-[6px]">
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onKeyPress('1')}
            className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none active:bg-gray-200"
          >
            1
          </button>
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onKeyPress('2')}
            className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none active:bg-gray-200"
          >
            2
          </button>
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onKeyPress('3')}
            className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none active:bg-gray-200"
          >
            3
          </button>
        </div>

        {/* Row 2: 4, 5, 6 */}
        <div className="grid grid-cols-3 gap-[6px] mb-[6px]">
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onKeyPress('4')}
            className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none active:bg-gray-200"
          >
            4
          </button>
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onKeyPress('5')}
            className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none active:bg-gray-200"
          >
            5
          </button>
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onKeyPress('6')}
            className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none active:bg-gray-200"
          >
            6
          </button>
        </div>

        {/* Row 3: 7, 8, 9 */}
        <div className="grid grid-cols-3 gap-[6px] mb-[6px]">
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onKeyPress('7')}
            className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none active:bg-gray-200"
          >
            7
          </button>
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onKeyPress('8')}
            className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none active:bg-gray-200"
          >
            8
          </button>
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onKeyPress('9')}
            className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none active:bg-gray-200"
          >
            9
          </button>
        </div>
        
        {/* Row 4: Decimal, 0, Backspace */}
        <div className="grid grid-cols-3 gap-[6px] mb-[6px]">
          {/* Decimal point */}
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onKeyPress('.')}
            className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none active:bg-gray-200"
          >
            .
          </button>
          
          {/* Zero key */}
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onKeyPress('0')}
            className="bg-white rounded-[5px] shadow-sm py-3 text-center text-[28px] text-[#000000] select-none active:bg-gray-200"
          >
            0
          </button>
          
          {/* Backspace key */}
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onKeyPress('backspace')}
            className="bg-[#afb3ba] rounded-[5px] shadow-sm py-3 px-2 flex items-center justify-center active:bg-[#9599a0]"
          >
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none" className="text-[#000000]">
              <path d="M6 0L0 10L6 20H28V0H6Z" fill="currentColor" fillOpacity="0.3"/>
              <path d="M12 6L20 14M20 6L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}