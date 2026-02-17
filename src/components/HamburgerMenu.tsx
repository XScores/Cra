import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import { LucideIcon } from 'lucide-react';

interface MenuItem {
  icon?: LucideIcon | null;
  label: string;
  id: string;
  type: 'lucide' | 'image';
  imageSrc?: string;
  onClick: () => void;
  danger?: boolean;
}

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

export function HamburgerMenu({ isOpen, onClose, menuItems }: HamburgerMenuProps) {
  // Disable body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 z-[200]"
            onClick={onClose}
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#f2f2f7] shadow-lg z-[201] overflow-y-auto"
          >
            {/* Menu Header */}
            <div className="bg-white border-b border-[rgba(60,60,67,0.29)] px-4 py-3 sticky top-0 z-10">
              <div className="flex items-center justify-between">
                <h2 className="text-[17px] text-black">Menu</h2>
                <button
                  onClick={onClose}
                  className="text-[#007AFF] text-[17px] bg-transparent border-0 p-0 cursor-pointer hover:opacity-70 active:opacity-50 transition-opacity"
                >
                  Done
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="px-4 py-3">
              <div className="card-ios overflow-hidden">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={item.onClick}
                    className={`list-item-ios flex items-center justify-between px-4 py-3 w-full hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left ${
                      item.danger ? 'text-[#ff3b30]' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.type === 'lucide' && item.icon && (
                        <item.icon className={`h-5 w-5 ${item.danger ? 'text-[#ff3b30]' : 'text-[#007AFF]'}`} />
                      )}
                      {item.type === 'image' && item.imageSrc && (
                        <img src={item.imageSrc} alt="" className="h-5 w-5" />
                      )}
                      <span className={`text-[17px] ${item.danger ? 'text-[#ff3b30]' : 'text-black'}`}>
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight className={`h-5 w-5 ${item.danger ? 'text-[#ff3b30]' : 'text-[#c7c7cc]'}`} />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}