import { Home, FileText, CircleDollarSign, User } from 'lucide-react';

export type Screen = 'home' | 'returns' | 'payments' | 'documents' | 'messages' | 'profile';

export interface BottomNavItem {
  icon: any;
  label: string;
  id: Screen;
  type: 'lucide' | 'image';
  imageSrc?: string;
}

interface BottomNavProps {
  active: Screen | 'none';
  onNavigate: (screen: Screen) => void;
  customNavItems?: BottomNavItem[];
}

const defaultNavItems: BottomNavItem[] = [
  { icon: Home, label: 'Home', id: 'home' as Screen, type: 'lucide' },
  { icon: FileText, label: 'Tax\nReturns', id: 'returns' as Screen, type: 'lucide' },
  { icon: CircleDollarSign, label: 'Account Details', id: 'payments' as Screen, type: 'lucide' },
  { icon: User, label: 'Profile', id: 'profile' as Screen, type: 'lucide' },
];

export function BottomNav({ active, onNavigate, customNavItems }: BottomNavProps) {
  const navItems = customNavItems || defaultNavItems;
  
  return (
    <nav className="sticky bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-[#c6c6c8] mt-auto z-40">
      <div className="max-w-md mx-auto grid grid-cols-4 pt-1.5 pb-3 px-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center justify-start gap-1 pt-0.5 pb-1 transition-all ${
              active === item.id
                ? 'text-[#007AFF]'
                : 'text-gray-ios hover:opacity-70 active:opacity-50'
            }`}
          >
            {item.type === 'lucide' && item.icon ? (
              <item.icon className="h-[26px] w-[26px] flex-shrink-0" strokeWidth={active === item.id ? 2.5 : 2} />
            ) : item.type === 'image' && item.imageSrc ? (
              <img src={item.imageSrc} alt="" className="h-[26px] w-auto flex-shrink-0" />
            ) : null}
            <span 
              className="text-center max-w-[70px] block" 
              style={{ 
                fontSize: '10px',
                lineHeight: '12px',
                whiteSpace: 'pre-line'
              }}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}