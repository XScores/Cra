import { MessageCircle, Compass, Camera, Image, Music, Mail, Calendar, Phone, Video, Map } from 'lucide-react';
import { useState } from 'react';
import canadaWordmark from 'figma:asset/2c7bc543dd2a2003e1bba67aa3bf551b7dfcb638.png';
import peaceTowerBg from 'figma:asset/0fa94d398d10b76b79642a039089a3a336995699.png';
import mapleLeafOfficial from 'figma:asset/0cee2d53f7fca8a1b0ef562333de1e17db7f850c.png';
import wavePattern from 'figma:asset/f44a668c6d40a5298cc850dd3256344b18552f80.png';
import diamondPattern from 'figma:asset/cdae35e03425f8cacad1e21440ec04ecbc6957e1.png';
import curvedLinesPattern from 'figma:asset/1ac46f22d3a5d8487381368974d4caa52fc5b00b.png';
import weatherCANIcon from 'figma:asset/225cf7ae6c78fc76a36a45def1f9ba90dc82486f.png';
import statsCANIcon from 'figma:asset/4bbb5687cfb6f9ea24e84c1ffe2073b7217c46cb.png';
import myESDCIcon from 'figma:asset/9f879d06849c1c6e624f14f87a1fb661aac2fa21.png';
import parksCanadaIcon from 'figma:asset/cc0189b1c06d6e9d70686b90b0842648948ea9af.png';
import arriveCANIcon from 'figma:asset/1c2438d6ab9b9006a75fcf1572756c3c5d4b280a.png';

interface HomeScreenIPhoneProps {
  onOpenCRAApp: () => void;
  onOpenSettings?: () => void;
  onOpenIconExploration?: () => void;
}

function CRAAppIcon({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 bg-transparent border-0 p-0"
    >
      {/* Icon Square */}
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        {/* Top 65% - Dark blue with CRA text */}
        <div className="absolute top-0 left-0 right-0 bg-[#26374a] flex items-center justify-center" style={{ height: '65%' }}>
          <span className="text-white" style={{ fontSize: '22px', fontWeight: '600', letterSpacing: '0.5px' }}>CRA</span>
        </div>
        
        {/* Bottom 35% - Canada wordmark */}
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img 
            src={canadaWordmark} 
            alt="Canada" 
            className="h-auto"
            style={{ width: '80%' }}
          />
        </div>
      </div>
      
      {/* App Name */}
      <span className="text-white text-[11px]">My Account</span>
    </button>
  );
}

// Icon Variation 1: 50px Wide Shield - Blue with Red Maple Leaf (White Outline)
function CRAIconVariation1({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 bg-transparent border-0 p-0"
    >
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
      <span className="text-white text-[11px]">My Account</span>
    </button>
  );
}

// Icon Variation 2: 50px Wide Shield - Dark Navy with Red Maple Leaf (White Outline)
function CRAIconVariation2({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 bg-transparent border-0 p-0"
    >
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
      <span className="text-white text-[11px]">My Account</span>
    </button>
  );
}

// Icon Variation 3: 50px Wide Shield - Dark Navy with Red Maple Leaf
function CRAIconVariation3({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 bg-transparent border-0 p-0"
    >
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
      <span className="text-white text-[11px]">My Account</span>
    </button>
  );
}

// Icon Variation 4: 50px Wide Shield - Dark Navy with White Maple Leaf
function CRAIconVariation4({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 bg-transparent border-0 p-0"
    >
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 bg-[#26374a] flex items-center justify-center" style={{ height: '65%' }}>
          <svg width="50" height="40" viewBox="0 0 50 40" fill="none">
            <path d="M25 3C25 3 7 6 7 6V18C7 26 25 35 25 35C25 35 43 26 43 18V6C43 6 25 3 25 3Z" fill="#1D3557" stroke="#FFFFFF" strokeWidth="2.5"/>
          </svg>
          <div className="absolute" style={{ width: '28px', height: '28px', top: '48%', left: '50%', transform: 'translate(-50%, -50%)', filter: 'brightness(0) invert(1)' }}>
            <img src={mapleLeafOfficial} alt="Maple Leaf" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px]">My Account</span>
    </button>
  );
}

// Icon Variation 5: Diamond Pattern with Red Maple Leaf (White Outline)
function CRAIconVariation5({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 bg-transparent border-0 p-0"
    >
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '65%' }}>
          <img 
            src={diamondPattern} 
            alt="Diamond Pattern" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <img 
            src={mapleLeafOfficial} 
            alt="Maple Leaf" 
            className="absolute z-10"
            style={{ 
              width: '24px', 
              height: '24px', 
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
      <span className="text-white text-[11px]">My Account</span>
    </button>
  );
}

// Icon Variation 6: Curved Lines Pattern with Black Maple Leaf (White Outline)
function CRAIconVariation6({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 bg-transparent border-0 p-0"
    >
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 flex items-center justify-center overflow-hidden" style={{ height: '65%' }}>
          <img 
            src={curvedLinesPattern} 
            alt="Curved Lines Pattern" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute z-10" style={{ 
            width: '24px', 
            height: '24px', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            filter: 'brightness(0) drop-shadow(0 0 2px white) drop-shadow(0 0 2px white) drop-shadow(0 0 3px white) drop-shadow(0 0 4px white)'
          }}>
            <img src={mapleLeafOfficial} alt="Maple Leaf" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px]">My Account</span>
    </button>
  );
}

// Icon Variation 7: Wave Pattern with Red Maple Leaf (White Outline)
function CRAIconVariation7({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 bg-transparent border-0 p-0"
    >
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 bg-white flex items-center justify-center overflow-hidden" style={{ height: '65%' }}>
          <img 
            src={wavePattern} 
            alt="Wave Pattern" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <img 
            src={mapleLeafOfficial} 
            alt="Maple Leaf" 
            className="absolute z-10"
            style={{ 
              width: '24px', 
              height: '24px', 
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
      <span className="text-white text-[11px]">My Account</span>
    </button>
  );
}

// Icon Variation 8: Curved Lines Pattern with White Maple Leaf (Black Outline)
function CRAIconVariation8({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 bg-transparent border-0 p-0"
    >
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md relative">
        <div className="absolute top-0 left-0 right-0 flex items-center justify-center overflow-hidden" style={{ height: '65%' }}>
          <img 
            src={curvedLinesPattern} 
            alt="Curved Lines Pattern" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute z-10" style={{ 
            width: '24px', 
            height: '24px', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            filter: 'brightness(0) invert(1) drop-shadow(0 0 2px black) drop-shadow(0 0 2px black) drop-shadow(0 0 3px black) drop-shadow(0 0 4px black)'
          }}>
            <img src={mapleLeafOfficial} alt="Maple Leaf" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center" style={{ height: '35%' }}>
          <img src={canadaWordmark} alt="Canada" className="h-auto" style={{ width: '80%' }} />
        </div>
      </div>
      <span className="text-white text-[11px]">My Account</span>
    </button>
  );
}

function DefaultAppIcon({ icon: Icon, name, color, onClick }: { icon: any; name: string; color: string; onClick?: () => void }) {
  const content = (
    <>
      <div 
        className="w-[60px] h-[60px] rounded-[13px] flex items-center justify-center shadow-md"
        style={{ backgroundColor: color }}
      >
        <Icon className="text-white" size={32} strokeWidth={1.5} />
      </div>
      <span className="text-white text-[11px]">{name}</span>
    </>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="flex flex-col items-center gap-1 bg-transparent border-0 p-0">
        {content}
      </button>
    );
  }

  return (
    <div className="flex flex-col items-center gap-1">
      {content}
    </div>
  );
}

function WeatherCANIcon() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md">
        <img 
          src={weatherCANIcon}
          alt="WeatherCAN"
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-white text-[11px]">WeatherCAN</span>
    </div>
  );
}

function StatsCANIcon() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md">
        <img 
          src={statsCANIcon}
          alt="StatsCAN"
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-white text-[11px]">StatsCAN</span>
    </div>
  );
}

function MyESDCIcon({ onClick }: { onClick?: () => void }) {
  return (
    <div className="flex flex-col items-center gap-1" onClick={onClick}>
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md">
        <img 
          src={myESDCIcon}
          alt="My ESDC"
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-white text-[11px]">My ESDC</span>
    </div>
  );
}

function ParksCanadaIcon() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md">
        <img 
          src={parksCanadaIcon}
          alt="Parks Canada"
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-white text-[11px]">Parks Canada</span>
    </div>
  );
}

function ArriveCANIcon() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-[60px] h-[60px] rounded-[13px] overflow-hidden shadow-md">
        <img 
          src={arriveCANIcon}
          alt="ArriveCAN"
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-white text-[11px]">ArriveCAN</span>
    </div>
  );
}

export function HomeScreenIPhone({ onOpenCRAApp, onOpenSettings, onOpenIconExploration }: HomeScreenIPhoneProps) {
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: false 
  });

  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="h-full relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={peaceTowerBg}
          alt="Parliament Peace Tower"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 pt-2 px-6 flex justify-between items-center text-white text-[13px] z-10">
        <span>{currentTime}</span>
        <div className="flex items-center gap-1">
          {/* Signal bars */}
          <div className="flex gap-0.5 items-end">
            <div className="w-0.5 h-1 bg-white"></div>
            <div className="w-0.5 h-1.5 bg-white"></div>
            <div className="w-0.5 h-2 bg-white"></div>
            <div className="w-0.5 h-2.5 bg-white"></div>
          </div>
          {/* WiFi icon */}
          <svg className="w-3.5 h-3.5 ml-1" fill="white" viewBox="0 0 24 24">
            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
          </svg>
          {/* Battery */}
          <div className="ml-1 flex items-center">
            <div className="w-5 h-2.5 border border-white rounded-sm relative">
              <div className="absolute inset-0.5 bg-white rounded-sm"></div>
            </div>
            <div className="w-0.5 h-1.5 bg-white ml-px rounded-r-sm"></div>
          </div>
        </div>
      </div>

      {/* Time and Date */}
      <div className="absolute left-0 right-0 text-center text-white px-6" style={{ top: '39px' }}>
        <div className="text-[72px] leading-none" style={{ fontWeight: '200' }}>{currentTime}</div>
        <div className="text-[17px] mt-1" style={{ fontWeight: '500' }}>{currentDate}</div>
      </div>

      {/* App Icons Grid */}
      <div className="absolute left-0 right-0 px-6" style={{ top: '174px' }}>
        <div className="grid grid-cols-4 gap-y-6 gap-x-4">
          {/* Row 1 */}
          <DefaultAppIcon icon={Camera} name="Camera" color="#5e5e5e" onClick={onOpenIconExploration} />
          <DefaultAppIcon icon={Mail} name="Mail" color="#007aff" />
          <DefaultAppIcon icon={Compass} name="Safari" color="#1e88e5" />
          <DefaultAppIcon icon={Music} name="Music" color="#fa233b" />
          
          {/* Row 2 */}
          <DefaultAppIcon icon={Map} name="Maps" color="#4caf50" />
          <DefaultAppIcon icon={Calendar} name="Calendar" color="#ff3b30" />
          <ArriveCANIcon />
          <ParksCanadaIcon />
          
          {/* Row 3 */}
          <WeatherCANIcon />
          <StatsCANIcon />
          <MyESDCIcon onClick={onOpenSettings} />
          <CRAIconVariation4 onClick={onOpenCRAApp} />
        </div>
      </div>

      {/* Dock */}
      <div className="absolute left-0 right-0 px-6" style={{ bottom: '41px' }}>
        <div className="bg-white/20 backdrop-blur-xl rounded-[27px] p-3">
          <div className="grid grid-cols-4 gap-x-4">
            <DefaultAppIcon icon={Phone} name="Phone" color="#00c853" />
            <DefaultAppIcon icon={MessageCircle} name="Messages" color="#00c853" />
            <DefaultAppIcon icon={Compass} name="Safari" color="#1e88e5" />
            <DefaultAppIcon icon={Video} name="FaceTime" color="#00c853" />
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
    </div>
  );
}