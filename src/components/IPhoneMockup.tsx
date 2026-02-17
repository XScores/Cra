interface IPhoneMockupProps {
  children: React.ReactNode;
  showNotch?: boolean;
}

export function IPhoneMockup({ children, showNotch = true }: IPhoneMockupProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8 relative">
      {/* iPhone Frame */}
      <div className="relative">
        {/* Outer bezel */}
        <div className="bg-gray-900 rounded-[3.5rem] p-3 shadow-2xl">
          {/* Screen area */}
          <div className="bg-black rounded-[3rem] overflow-hidden relative">
            {/* Screen content */}
            <div id="iphone-screen" className="w-[390px] h-[844px] bg-white relative overflow-hidden">
              {children}
            </div>
          </div>
        </div>
        
        {/* Power button */}
        <div className="absolute -right-1 top-32 w-1 h-16 bg-gray-800 rounded-l"></div>
        
        {/* Volume buttons */}
        <div className="absolute -left-1 top-28 w-1 h-8 bg-gray-800 rounded-r"></div>
        <div className="absolute -left-1 top-40 w-1 h-12 bg-gray-800 rounded-r"></div>
      </div>
    </div>
  );
}