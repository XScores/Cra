import { Phone, Video, Mic, MicOff, Volume2, UserPlus, Info } from 'lucide-react';
import { useState, useEffect } from 'react';

interface IPhoneCallingScreenProps {
  phoneNumber: string;
  label?: string;
  onEndCall: () => void;
}

export function IPhoneCallingScreen({ phoneNumber, label = 'CRA', onEndCall }: IPhoneCallingScreenProps) {
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaker, setIsSpeaker] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: false 
  });

  useEffect(() => {
    // Simulate call connecting after 2 seconds
    const connectTimer = setTimeout(() => {
      setIsConnected(true);
    }, 2000);

    return () => clearTimeout(connectTimer);
  }, []);

  useEffect(() => {
    if (!isConnected) return;

    // Start counting call duration once connected
    const interval = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isConnected]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatPhoneNumber = (number: string) => {
    // Format like: 1 (800) 959-8281
    const cleaned = number.replace(/\D/g, '');
    if (cleaned.length === 11 && cleaned.startsWith('1')) {
      return `${cleaned[0]} (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
    }
    return number;
  };

  return (
    <div className="h-full w-full bg-gradient-to-b from-[#3d4f5f] via-[#2d3e4f] to-[#1d2e4f] text-white flex flex-col relative">
      {/* Status bar */}
      <div className="flex items-center justify-between px-6 pt-2 pb-2 text-[13px]">
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

      {/* Info button */}
      <div className="absolute top-16 right-6">
        <button className="w-7 h-7 rounded-full border-2 border-white/40 flex items-center justify-center">
          <Info className="w-4 h-4 text-white/80" />
        </button>
      </div>

      {/* Call info */}
      <div className="flex-1 flex flex-col items-start px-8 pt-12">
        <div className="flex items-center gap-4 mb-2">
          {/* Avatar */}
          <div className="w-20 h-20 bg-[#5a6b7c] rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
            <div className="w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 80 80" className="w-full h-full">
                <circle cx="40" cy="30" r="12" fill="#8a9bac" />
                <path d="M 20 65 Q 20 45 40 45 Q 60 45 60 65 Z" fill="#8a9bac" />
              </svg>
            </div>
          </div>

          <div className="flex-1">
            {/* Status text */}
            <div className="text-white/70 text-sm mb-1">
              {isConnected ? formatDuration(callDuration) : 'Calling Work Cell...'}
            </div>
            
            {/* Name */}
            <div className="text-white text-3xl font-normal">{label}</div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="pb-8 px-6">
        {/* Top row buttons */}
        <div className="grid grid-cols-3 gap-8 mb-6">
          {/* Speaker button */}
          <button
            onClick={() => setIsSpeaker(!isSpeaker)}
            className="flex flex-col items-center gap-2"
          >
            <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-colors ${isSpeaker ? 'bg-white' : 'bg-[#4a5f77]'}`}>
              <Volume2 className={`w-8 h-8 ${isSpeaker ? 'text-[#2d3e4f]' : 'text-white'}`} />
            </div>
            <span className="text-sm text-white">Speaker</span>
          </button>

          {/* FaceTime button */}
          <button className="flex flex-col items-center gap-2 opacity-50">
            <div className="w-20 h-20 bg-[#4a5f77] rounded-full flex items-center justify-center">
              <Video className="w-8 h-8 text-white" />
            </div>
            <span className="text-sm text-white">FaceTime</span>
          </button>

          {/* Mute button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="flex flex-col items-center gap-2"
          >
            <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-colors ${isMuted ? 'bg-white' : 'bg-[#4a5f77]'}`}>
              {isMuted ? (
                <Mic className="w-8 h-8 text-[#2d3e4f] relative">
                  <line x1="0" y1="0" x2="32" y2="32" stroke="#2d3e4f" strokeWidth="2" className="absolute inset-0" />
                </Mic>
              ) : (
                <Mic className="w-8 h-8 text-white" />
              )}
            </div>
            <span className="text-sm text-white">Mute</span>
          </button>
        </div>

        {/* Bottom row buttons */}
        <div className="grid grid-cols-3 gap-8 items-end">
          {/* Add button */}
          <button className="flex flex-col items-center gap-2 opacity-50">
            <div className="w-20 h-20 bg-[#4a5f77] rounded-full flex items-center justify-center">
              <UserPlus className="w-7 h-7 text-white" />
            </div>
            <span className="text-sm text-white">Add</span>
          </button>

          {/* End call button */}
          <button
            onClick={onEndCall}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-20 h-20 bg-[#ff3b30] rounded-full flex items-center justify-center shadow-lg hover:bg-[#ff453a] transition-colors active:scale-95">
              <Phone className="w-8 h-8 text-white transform rotate-[135deg]" />
            </div>
            <span className="text-sm text-white">End</span>
          </button>

          {/* Keypad button */}
          <button className="flex flex-col items-center gap-2 opacity-50">
            <div className="w-20 h-20 bg-[#4a5f77] rounded-full flex items-center justify-center">
              <div className="grid grid-cols-3 gap-1.5">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-white rounded-full" />
                ))}
              </div>
            </div>
            <span className="text-sm text-white">Keypad</span>
          </button>
        </div>
      </div>

      {/* Bottom spacing for iPhone gestures */}
      <div className="h-6 flex items-center justify-center">
        <div className="w-32 h-1 bg-white/30 rounded-full"></div>
      </div>
    </div>
  );
}
