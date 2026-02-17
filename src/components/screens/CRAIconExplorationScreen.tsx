import { ChevronLeft, DollarSign, FileText, Wallet, Receipt, PiggyBank, Building2, Home, User, Shield, Calculator, TrendingUp, CreditCard, Landmark } from 'lucide-react';
import canadaWordmark from 'figma:asset/2c7bc543dd2a2003e1bba67aa3bf551b7dfcb638.png';
import mapleLeafOfficial from 'figma:asset/0cee2d53f7fca8a1b0ef562333de1e17db7f850c.png';
import mapleLeafOutlined from 'figma:asset/edd3751f86ea897d1248f70bfa4b48f1bde21483.png';
import peaceTowerBg from 'figma:asset/0fa94d398d10b76b79642a039089a3a336995699.png';
import savingsIcon from 'figma:asset/aa5448e357579698f58023bcfc7442a8dde9c084.png';
import usersIcon from 'figma:asset/5b396e2c086f666cbe4bd9ae9c676f6bbaa59c61.png';

interface CRAIconExplorationScreenProps {
  onBack: () => void;
}

// Icon template components
function IconTemplate1({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 bg-[#26374a] flex items-center justify-center" style={{ height: '65%' }}>
          <span className="text-white" style={{ fontSize: '22px', fontWeight: '600', letterSpacing: '0.5px' }}>CRA</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate2({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 bg-[#007AFF] flex items-center justify-center" style={{ height: '65%' }}>
          <DollarSign className="text-white" size={32} strokeWidth={2.5} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate3({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 bg-[#ff3b30] flex items-center justify-center" style={{ height: '65%' }}>
          <FileText className="text-white" size={32} strokeWidth={2.5} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate4({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative bg-gradient-to-br from-[#ff3b30] to-[#ff6b60]">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={mapleLeafOfficial} 
            alt="Maple Leaf" 
            style={{ 
              width: '35px', 
              height: '35px',
              filter: 'brightness(0) invert(1)'
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white/90 flex items-center justify-center" style={{ height: '28%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '75%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate5({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 bg-[#26374a] flex items-center justify-center" style={{ height: '65%' }}>
          <svg width="50" height="40" viewBox="0 0 50 40" fill="none">
            <path d="M25 3C25 3 7 6 7 6V18C7 26 25 35 25 35C25 35 43 26 43 18V6C43 6 25 3 25 3Z" fill="#007AFF" stroke="#FFFFFF" strokeWidth="2.5"/>
          </svg>
          <img 
            src={mapleLeafOfficial} 
            alt="Maple Leaf" 
            className="absolute"
            style={{ 
              width: '28px', 
              height: '28px', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              filter: 'drop-shadow(0 0 2px white) drop-shadow(0 0 2px white) drop-shadow(0 0 3px white)'
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate6({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 bg-[#34C759] flex items-center justify-center" style={{ height: '65%' }}>
          <Wallet className="text-white" size={32} strokeWidth={2.5} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate7({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative bg-white">
        <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center" style={{ height: '65%' }}>
          <img 
            src={mapleLeafOfficial} 
            alt="Maple Leaf" 
            style={{ width: '32px', height: '32px', marginBottom: '2px' }}
          />
          <span className="text-black" style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.3px' }}>CRA</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate8({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative bg-gradient-to-b from-[#26374a] to-[#1a2635]">
        <div className="absolute inset-0 flex items-center justify-center">
          <Receipt className="text-white mb-1" size={28} strokeWidth={2.5} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white/90 flex items-center justify-center" style={{ height: '25%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '70%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate9({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 bg-[#FF9500] flex items-center justify-center" style={{ height: '65%' }}>
          <PiggyBank className="text-white" size={32} strokeWidth={2.5} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate10({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 bg-[#5856D6] flex items-center justify-center" style={{ height: '65%' }}>
          <Calculator className="text-white" size={32} strokeWidth={2.5} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate11({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative bg-[#ff3b30]">
        <div className="absolute top-0 left-0 right-0 flex items-center justify-center" style={{ height: '65%' }}>
          <img 
            src={mapleLeafOfficial} 
            alt="Maple Leaf" 
            style={{ 
              width: '38px', 
              height: '38px',
              filter: 'brightness(0) invert(1)'
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate12({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-br from-[#007AFF] to-[#0051D5] flex items-center justify-center" style={{ height: '70%' }}>
          <Building2 className="text-white" size={30} strokeWidth={2.5} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '30%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '75%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate13({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative bg-white border-2 border-[#ff3b30]">
        <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center" style={{ height: '65%' }}>
          <img 
            src={mapleLeafOfficial} 
            alt="Maple Leaf" 
            style={{ width: '30px', height: '30px', marginBottom: '3px' }}
          />
          <span className="text-[#26374a]" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.5px' }}>CRA</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate14({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 bg-[#26374a] flex items-center justify-center" style={{ height: '65%' }}>
          <Shield className="text-[#007AFF]" size={32} strokeWidth={2.5} fill="#007AFF" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate15({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 bg-[#FF2D55] flex items-center justify-center" style={{ height: '65%' }}>
          <TrendingUp className="text-white" size={32} strokeWidth={2.5} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate16({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative bg-gradient-to-br from-[#26374a] via-[#1a2635] to-[#0f1419]">
        <div className="absolute top-0 left-0 right-0 flex items-center justify-center" style={{ height: '65%' }}>
          <img 
            src={mapleLeafOfficial} 
            alt="Maple Leaf" 
            style={{ 
              width: '38px', 
              height: '38px',
              filter: 'brightness(0) invert(1)'
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate17({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 bg-[#00C7BE] flex items-center justify-center" style={{ height: '65%' }}>
          <CreditCard className="text-white" size={30} strokeWidth={2.5} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate18({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 bg-[#26374a] flex items-center justify-center" style={{ height: '65%' }}>
          <Landmark className="text-[#ff3b30]" size={30} strokeWidth={2.5} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate19({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative bg-white">
        <div className="absolute top-0 left-0 right-0 flex items-center justify-center" style={{ height: '65%' }}>
          <div className="w-[48px] h-[48px] rounded-full bg-[#ff3b30] flex items-center justify-center">
            <img 
              src={mapleLeafOfficial} 
              alt="Maple Leaf" 
              style={{ 
                width: '28px', 
                height: '28px',
                filter: 'brightness(0) invert(1)'
              }}
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate20({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative bg-[#26374a]">
        <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center" style={{ height: '65%' }}>
          <div className="bg-[#007AFF] rounded-lg px-2 py-1">
            <span className="text-white" style={{ fontSize: '16px', fontWeight: '700', letterSpacing: '0.5px' }}>CRA</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate21({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 bg-[#26374a] flex items-center justify-center" style={{ height: '65%' }}>
          <Landmark className="text-white" size={30} strokeWidth={2.5} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate22({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{ height: '41px' }}>
          <img 
            src={mapleLeafOutlined} 
            alt="Maple Leaf Outlined" 
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '19px' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate23({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{ height: '41px' }}>
          <img 
            src={savingsIcon} 
            alt="Savings" 
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '19px' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

function IconTemplate24({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{ height: '44px', marginTop: '-1px' }}>
          <img 
            src={usersIcon} 
            alt="Users" 
            style={{ 
              width: '100%', 
              height: 'calc(100% + 2px)',
              objectFit: 'cover',
              marginTop: '-1px'
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '16px' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

// Shield Icon Variation 1: Blue Shield with Red Maple Leaf (White Outline)
function ShieldIconVariation1({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 bg-[#26374a] flex items-center justify-center" style={{ height: '65%' }}>
          <svg width="50" height="40" viewBox="0 0 50 40" fill="none">
            <path d="M25 3C25 3 7 6 7 6V18C7 26 25 35 25 35C25 35 43 26 43 18V6C43 6 25 3 25 3Z" fill="#007AFF" stroke="#FFFFFF" strokeWidth="2.5"/>
          </svg>
          <img 
            src={mapleLeafOfficial} 
            alt="Maple Leaf" 
            className="absolute"
            style={{ 
              width: '28px', 
              height: '28px', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              filter: 'drop-shadow(0 0 2px white) drop-shadow(0 0 2px white) drop-shadow(0 0 3px white)'
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

// Shield Icon Variation 2: Navy Shield with Red Maple Leaf (White Outline)
function ShieldIconVariation2({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 bg-[#26374a] flex items-center justify-center" style={{ height: '65%' }}>
          <svg width="50" height="40" viewBox="0 0 50 40" fill="none">
            <path d="M25 3C25 3 7 6 7 6V18C7 26 25 35 25 35C25 35 43 26 43 18V6C43 6 25 3 25 3Z" fill="#1D3557" stroke="#FFFFFF" strokeWidth="2.5"/>
          </svg>
          <img 
            src={mapleLeafOfficial} 
            alt="Maple Leaf" 
            className="absolute"
            style={{ 
              width: '28px', 
              height: '28px', 
              top: '48%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              filter: 'drop-shadow(0 0 2px white) drop-shadow(0 0 2px white) drop-shadow(0 0 3px white)'
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

// Shield Icon Variation 3: Navy Shield with Red Maple Leaf (No Outline)
function ShieldIconVariation3({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 bg-[#26374a] flex items-center justify-center" style={{ height: '65%' }}>
          <svg width="50" height="40" viewBox="0 0 50 40" fill="none">
            <path d="M25 3C25 3 7 6 7 6V18C7 26 25 35 25 35C25 35 43 26 43 18V6C43 6 25 3 25 3Z" fill="#1D3557" stroke="#FFFFFF" strokeWidth="2.5"/>
          </svg>
          <img 
            src={mapleLeafOfficial} 
            alt="Maple Leaf" 
            className="absolute"
            style={{ width: '28px', height: '28px', top: '48%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px] text-center">{label}</span>
    </div>
  );
}

export function CRAIconExplorationScreen({ onBack }: CRAIconExplorationScreenProps) {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={peaceTowerBg} 
          alt="Background" 
          className="w-full h-full object-cover"
          style={{ filter: 'blur(40px) brightness(0.7)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Status Bar */}
      <div className="relative z-10 flex justify-between items-center px-6 pt-3 pb-2">
        <div className="text-white text-[15px]" style={{ fontWeight: '600' }}>9:41</div>
        <div className="flex items-center gap-1">
          <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
            <rect opacity="0.4" x="0.5" y="0.5" width="15" height="11" rx="2" stroke="white"/>
            <rect x="1.5" y="1.5" width="5" height="9" rx="1" fill="white"/>
            <rect x="7" y="1.5" width="5" height="9" rx="1" fill="white"/>
            <rect x="12.5" y="1.5" width="3" height="9" rx="1" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Back Button */}
      <div className="relative z-10 px-6 pt-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border-0 cursor-pointer hover:bg-white/20 active:bg-white/30 transition-colors"
        >
          <ChevronLeft className="text-white" size={20} strokeWidth={2.5} />
          <span className="text-white text-[15px]" style={{ fontWeight: '500' }}>Back to Home</span>
        </button>
      </div>

      {/* Title */}
      <div className="relative z-10 px-6 pt-6 pb-4">
        <h1 className="text-white text-[28px] m-0" style={{ fontWeight: '700' }}>CRA Icon Designs</h1>
        <p className="text-white/80 text-[15px] mt-1 m-0">Exploring different visual approaches</p>
      </div>

      {/* Icon Grid */}
      <div className="relative z-10 px-6 pb-32 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 240px)' }}>
        <div className="grid grid-cols-4 gap-y-6 gap-x-4">
          {/* Row 1 */}
          <IconTemplate1 label="Classic" />
          <IconTemplate2 label="Dollar" />
          <IconTemplate3 label="Document" />
          
          {/* Row 2 */}
          <IconTemplate8 label="Receipt" />
          <IconTemplate10 label="Calculator" />
          <IconTemplate11 label="Red Maple" />
          <IconTemplate12 label="Building" />
          
          {/* Row 3 */}
          <IconTemplate16 label="Dark Maple" />
          <IconTemplate18 label="Institution" />
          <IconTemplate21 label="Government" />
          <IconTemplate19 label="Circle" />
          
          {/* Row 4 */}
          <IconTemplate22 label="Outlined Maple" />
          <IconTemplate23 label="Savings" />
          <IconTemplate24 label="Users" />
          
          {/* Row 5 */}
          <ShieldIconVariation2 label="Shield Navy" />
          <ShieldIconVariation3 label="Shield Navy No Outline" />
        </div>
      </div>

      {/* Bottom Indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
        <div className="w-32 h-1 bg-white/30 rounded-full"></div>
      </div>
    </div>
  );
}