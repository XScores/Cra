import { Search, Menu, ChevronLeft } from 'lucide-react';
import mapleLeafIcon from 'figma:asset/0cee2d53f7fca8a1b0ef562333de1e17db7f850c.png';
import newHeaderImage from 'figma:asset/4f0462fc147a81b616ab25b7867acf6adeab7292.png';

interface HeaderIOSProps {
  title?: string;
  showBackButton?: boolean;
  onBack?: () => void;
  onNavigateHome?: () => void;
  onLogoClick?: () => void;
  hasUnreadMail?: boolean;
  unreadMailCount?: number;
  onMenuClick?: () => void;
  onSearchClick?: () => void;
  showSearch?: boolean;
  showMenu?: boolean;
  largeTitle?: boolean;
  transparent?: boolean;
  onPersonalClick?: () => void;
  onBusinessClick?: () => void;
  onRepresentativeClick?: () => void;
  activeAccountType?: 'personal' | 'business' | 'representative';
}

export function HeaderIOS({ 
  title = 'My Account',
  showBackButton = false,
  onBack,
  onNavigateHome,
  onLogoClick,
  hasUnreadMail = false,
  unreadMailCount = 1,
  onMenuClick,
  onSearchClick,
  showSearch = true,
  showMenu = true,
  largeTitle = false,
  transparent = false,
  onPersonalClick,
  onBusinessClick,
  onRepresentativeClick,
  activeAccountType = 'personal'
}: HeaderIOSProps) {
  return (
    <header 
      className={`sticky top-0 z-50 ${transparent ? 'bg-transparent' : 'navbar-ios'}`}
      style={{
        paddingTop: '2px',
        paddingBottom: largeTitle ? '0px' : '6px',
        height: largeTitle ? '90px' : 'auto'
      }}
    >
      <div className={largeTitle ? "relative h-full" : "px-3"}>
        {largeTitle ? (
          <>
            {/* Background Image */}
            <img 
              src={newHeaderImage} 
              alt="CRA My Account" 
              className="absolute inset-0 w-full h-full object-cover object-left"
            />
            
            {/* Clickable areas for Personal, Business, and Representative */}
            <div className="absolute inset-0 flex items-end pb-[6px] px-[15px] z-[5]">
              {/* Personal Button */}
              <button
                onClick={onPersonalClick}
                className={`flex-1 h-[32px] bg-transparent border-0 p-0 cursor-pointer transition-opacity ${ 
                  activeAccountType === 'personal' 
                    ? 'opacity-100' 
                    : 'opacity-70 hover:opacity-90 active:opacity-100'
                }`}
                aria-label="Personal Account"
                disabled={!onPersonalClick}
                style={{ visibility: onPersonalClick ? 'visible' : 'hidden' }}
              >
                <span className="sr-only">Personal</span>
              </button>
              
              {/* Business Button */}
              <button
                onClick={onBusinessClick}
                className={`flex-1 h-[32px] bg-transparent border-0 p-0 cursor-pointer transition-opacity ${ 
                  activeAccountType === 'business' 
                    ? 'opacity-100' 
                    : 'opacity-70 hover:opacity-90 active:opacity-100'
                }`}
                aria-label="Business Account"
                disabled={!onBusinessClick}
                style={{ visibility: onBusinessClick ? 'visible' : 'hidden' }}
              >
                <span className="sr-only">Business</span>
              </button>
              
              {/* Representative Button */}
              <button
                onClick={onRepresentativeClick}
                className={`flex-1 h-[32px] bg-transparent border-0 p-0 cursor-pointer transition-opacity ${ 
                  activeAccountType === 'representative' 
                    ? 'opacity-100' 
                    : 'opacity-70 hover:opacity-90 active:opacity-100'
                }`}
                aria-label="Representative Account"
                disabled={!onRepresentativeClick}
                style={{ visibility: onRepresentativeClick ? 'visible' : 'hidden' }}
              >
                <span className="sr-only">Representative</span>
              </button>
            </div>
            
            {/* Icons on top of image */}
            <div className="absolute top-[26px] right-3 flex items-center gap-1 z-10">
              {showSearch && onSearchClick && (
                <button
                  onClick={onSearchClick}
                  className="text-[#007AFF] bg-transparent border-0 p-0 cursor-pointer hover:opacity-70 active:opacity-50 transition-opacity"
                >
                  <Search className="h-5 w-5" strokeWidth={2} />
                </button>
              )}
              
              {showMenu && onMenuClick && (
                <button
                  onClick={onMenuClick}
                  className="text-[#007AFF] bg-transparent border-0 p-0 cursor-pointer hover:opacity-70 active:opacity-50 transition-opacity"
                >
                  <Menu className="h-5 w-5" strokeWidth={2} />
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Navigation Bar */}
            <div className="flex items-start justify-between">
              {/* Left Side */}
              <div className="flex-1 flex items-center h-8">
                {showBackButton && onBack ? (
                  <button
                    onClick={onBack}
                    className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
                  >
                    <ChevronLeft className="h-5 w-5" strokeWidth={3} />
                  </button>
                ) : null}
              </div>

              {/* Center Title */}
              <div className="flex-1 flex justify-center items-center h-8">
                <button
                  onClick={onLogoClick || onNavigateHome}
                  className="text-[15px] font-semibold text-black bg-transparent border-0 p-0 cursor-pointer leading-none"
                >
                  {title}
                </button>
              </div>

              {/* Right Side */}
              <div className="flex-1 flex items-center justify-end gap-1 pr-[10px] h-8">
                {showSearch && onSearchClick && (
                  <button
                    onClick={onSearchClick}
                    className="text-[#007AFF] bg-transparent border-0 p-0 cursor-pointer hover:opacity-70 active:opacity-50 transition-opacity relative top-[5px]"
                  >
                    <Search className="h-5 w-5" strokeWidth={2} />
                  </button>
                )}
                
                {showMenu && onMenuClick && (
                  <button
                    onClick={onMenuClick}
                    className="text-[#007AFF] bg-transparent border-0 p-0 cursor-pointer hover:opacity-70 active:opacity-50 transition-opacity relative top-[5px]"
                  >
                    <Menu className="h-5 w-5" strokeWidth={2} />
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}