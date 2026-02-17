import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Search, Menu, FileText, CreditCard, Mail, HelpCircle, LogOut, Receipt, X, ExternalLink, FileCheck, Gift, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Input } from './ui/input';
import { AnimatePresence } from 'motion/react';
import { IPhoneKeyboard } from './IPhoneKeyboard';
import { useKeyboardScroll } from './useKeyboardScroll';
import craLogo from 'figma:asset/fec27de527fdcac8633bffc5456b4f486d9a260e.png';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';

interface HeaderProps {
  onViewMail?: () => void;
  onNavigateHome?: () => void;
  onLogoClick?: () => void;
  hasUnreadMail?: boolean;
  unreadMailCount?: number;
  onFileTaxes?: () => void;
  onBenefitsAndCredits?: () => void;
  onMakePayment?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onViewNoticeOfAssessment?: () => void;
  onShowRefundDetails?: () => void;
  onShowGSTHSTCredit?: () => void;
  customMenuItems?: Array<{
    icon: any;
    label: string;
    id: string;
    type: 'lucide' | 'image';
    imageSrc?: string;
    visible: boolean;
  }>;
  hideMenu?: boolean;
}

export function Header({ 
  onViewMail, 
  onNavigateHome, 
  onLogoClick, 
  hasUnreadMail = false,
  unreadMailCount = 1,
  onFileTaxes,
  onBenefitsAndCredits,
  onMakePayment,
  onRegisteredPlans,
  onHelp,
  onSignOut,
  onTaxSlips,
  onProofOfIncome,
  onViewNoticeOfAssessment,
  onShowRefundDetails,
  onShowGSTHSTCredit,
  customMenuItems,
  hideMenu = false
}: HeaderProps) {
  const [showSearchDialog, setShowSearchDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<'search' | null>(null);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Use keyboard scroll hook
  useKeyboardScroll({ 
    isKeyboardVisible: showKeyboard, 
    activeField: activeField || 'search',
    keyboardHeight: 260
  });

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      setSearchQuery(prev => prev.slice(0, -1));
    } else if (key === '\n') {
      // Return key pressed - trigger search
      handleSearch();
    } else {
      setSearchQuery(prev => prev + key);
    }
  };

  const handleKeyboardDone = () => {
    setShowKeyboard(false);
    setActiveField(null);
  };

  const handleSearch = () => {
    // Implement search logic here
  };

  // Default menu items
  const defaultMenuItems = [
    { icon: Send, label: 'File taxes', id: 'file-taxes', type: 'lucide' as const, handler: onFileTaxes },
    { icon: Gift, label: 'Benefits and credits', id: 'benefits-credits', type: 'lucide' as const, handler: onBenefitsAndCredits },
    { icon: CreditCard, label: 'Make a payment', id: 'make-payment', type: 'lucide' as const, handler: onMakePayment },
    { icon: Mail, label: 'CRA mail', id: 'mail', type: 'lucide' as const, handler: onViewMail },
    { icon: null, label: 'Registered plans', id: 'registered-plans', type: 'image' as const, imageSrc: mapleLeafIcon, handler: onRegisteredPlans },
    { icon: Receipt, label: 'Tax slips and documents', id: 'tax-slips', type: 'lucide' as const, handler: onTaxSlips },
    { icon: FileCheck, label: 'Proof of income', id: 'proof-income', type: 'lucide' as const, handler: onProofOfIncome },
    { icon: HelpCircle, label: 'Help and support', id: 'help', type: 'lucide' as const, handler: onHelp },
    { icon: LogOut, label: 'Sign out and exit', id: 'sign-out', type: 'lucide' as const, handler: onSignOut },
  ];

  // Function to get handler for menu item ID
  function getHandlerForId(id: string) {
    switch(id) {
      case 'file-taxes': return onFileTaxes;
      case 'benefits-credits': return onBenefitsAndCredits;
      case 'make-payment': return onMakePayment;
      case 'mail': return onViewMail;
      case 'registered-plans': return onRegisteredPlans;
      case 'tax-slips': return onTaxSlips;
      case 'proof-income': return onProofOfIncome;
      case 'help': return onHelp;
      case 'sign-out': return onSignOut;
      default: return undefined;
    }
  }

  // IDs that must always be visible in the menu
  const alwaysVisibleIds = ['make-payment', 'proof-income', 'help', 'sign-out'];

  // Use custom menu items if provided and has items, otherwise use default
  let menuItems;
  if (customMenuItems && customMenuItems.length > 0) {
    // Force always-visible items to be visible, then filter and map
    const processedItems = customMenuItems.map(item => ({
      ...item,
      visible: alwaysVisibleIds.includes(item.id) ? true : item.visible
    }));
    
    menuItems = processedItems
      .filter(item => item.visible)
      .map(item => ({
        ...item,
        handler: getHandlerForId(item.id)
      }));
  } else {
    menuItems = defaultMenuItems;
  }

  useEffect(() => {
    setPortalContainer(document.getElementById('iphone-screen'));
  }, []);

  useEffect(() => {
    if (showSearchDialog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [showSearchDialog]);

  const handleSearchClick = () => {
    setShowSearchDialog(true);
  };

  const handleCloseSearch = () => {
    setShowSearchDialog(false);
    setSearchQuery('');
    setShowKeyboard(false);
  };

  return (
    <>
    <header className="bg-white sticky top-0 z-50 extend-over-gutter">
      <div className="py-5">
        <div className="flex items-center justify-between px-6">
          <button
            onClick={onLogoClick || onNavigateHome}
            className="flex items-center gap-3 bg-transparent border-0 p-0 cursor-pointer flex-shrink-0"
          >
            <img src={craLogo} alt="Canada Revenue Agency / Agence du revenu du Canada" className="h-6 w-auto flex-shrink-0" />
          </button>
          <div className="flex items-center mr-[-10px]">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleSearchClick}
              className="text-[#26374a] hover:bg-[#f5f5f5] active:bg-[#e9e9e9] h-9 w-9 rounded-none transition-colors"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            {!hideMenu && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button 
                  className="text-[#26374a] hover:bg-[#f5f5f5] active:bg-[#e9e9e9] h-9 w-9 rounded-none transition-colors inline-flex items-center justify-center bg-transparent border-0 cursor-pointer"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-56 rounded-none border-2 border-[#26374a] shadow-[6px_6px_20px_rgba(0,0,0,0.45)] bg-white p-0"
              >
                {menuItems.map(item => (
                  <DropdownMenuItem 
                    key={item.id}
                    onSelect={() => {
                      if (item.handler) {
                        item.handler();
                      }
                    }}
                    className="text-[#26374a] hover:!bg-[#f5f5f5] active:!bg-[#e9e9e9] data-[highlighted]:!bg-[#f5f5f5] cursor-pointer px-4 py-3 rounded-none focus:!bg-[#f5f5f5] focus:!text-[#26374a] transition-colors"
                  >
                    {item.type === 'lucide' && item.icon && <item.icon className="mr-3 h-5 w-5" />}
                    {item.type === 'image' && item.imageSrc && <img src={item.imageSrc} alt="" className="mr-3 w-auto" style={{ height: '22px' }} />}
                    <span>{item.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            )}
          </div>
        </div>
      </div>
      {/* Red accent bar - extends to actual edge */}
      <div className="h-1 bg-[#af3c43] -mr-2"></div>
    </header>

    {/* Search Dialog */}
    {showSearchDialog && portalContainer && createPortal(
      <>
        <div className="absolute inset-0 z-[100] flex items-start justify-center p-4 bg-black/50">
          <div 
            className="bg-white w-[calc(100%-20px)] max-w-[500px] shadow-lg border-l-4 border-l-[#af3c43] mt-4"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-[#e1e4e7] relative bg-white">
              <h2 className="text-[#26374a] m-0 pr-8">Search in My Account Mobile App</h2>
              <button 
                onClick={handleCloseSearch}
                className="absolute top-4 right-4 text-[#333333] hover:text-[#af3c43] bg-transparent border-0 p-0"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          
            {/* Content area */}
            <div 
              className="px-6"
              style={{ paddingTop: '16px', paddingBottom: '15px' }}
              onClick={(e) => {
                const target = e.target as HTMLElement;
                if (!target.closest('input') && !target.closest('button[type="button"]')) {
                  setShowKeyboard(false);
                }
              }}
            >
              {/* Search Input */}
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#333333]" />
                  <Input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search for tax information, forms, benefits..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => {
                      setShowKeyboard(true);
                      setActiveField('search');
                      setTimeout(() => {
                        searchInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }, 100);
                    }}
                    className="h-12 w-full bg-white border-[#333333] rounded-none pl-11 text-[16px] focus:border-[#af3c43] focus:ring-[#af3c43]"
                  />
                </div>
              </div>

              {/* Search Results Placeholder */}
              {searchQuery && (
                <div className="mt-4">
                  <p className="text-[#333333] text-[14px]">
                    Search results for "{searchQuery}" will appear here
                  </p>
                </div>
              )}

              {!searchQuery && (
                <div className="mt-2">
                  <h3 className="text-[#26374a] mb-3 font-bold">Popular searches</h3>
                  <ul className="space-y-2 list-none p-0 m-0">
                    <li>
                      <button 
                        onClick={() => {
                          handleCloseSearch();
                          if (onShowRefundDetails) onShowRefundDetails();
                        }}
                        className="text-[#284162] underline hover:text-[#0535d2] text-left w-full"
                      >
                        Tax refund status
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => {
                          handleCloseSearch();
                          if (onViewNoticeOfAssessment) onViewNoticeOfAssessment();
                        }}
                        className="text-[#284162] underline hover:text-[#0535d2] text-left w-full"
                      >
                        Notice of assessment
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => {
                          handleCloseSearch();
                          if (onRegisteredPlans) onRegisteredPlans();
                        }}
                        className="text-[#284162] underline hover:text-[#0535d2] text-left w-full"
                      >
                        RRSP contribution limit
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => {
                          handleCloseSearch();
                          if (onShowGSTHSTCredit) onShowGSTHSTCredit();
                        }}
                        className="text-[#284162] underline hover:text-[#0535d2] text-left w-full"
                      >
                        GST/HST credit
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => {
                          handleCloseSearch();
                          if (onTaxSlips) onTaxSlips();
                        }}
                        className="text-[#284162] underline hover:text-[#0535d2] text-left w-full"
                      >
                        T4 slips
                      </button>
                    </li>
                    <li>
                      <button className="text-[#284162] underline hover:text-[#0535d2] text-left w-full flex items-center gap-1">
                        Search the CRA website
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Keyboard */}
        <AnimatePresence>
          {showKeyboard && <IPhoneKeyboard onKeyPress={handleKeyPress} onDone={handleKeyboardDone} />}
        </AnimatePresence>
      </>,
      portalContainer
    )}
    </>
  );
}