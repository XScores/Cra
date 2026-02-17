import React from 'react';

interface MapleLeafDollarProps {
  className?: string;
}

export function MapleLeafDollar({ className = "h-6 w-6" }: MapleLeafDollarProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      {/* Canadian Maple Leaf Outline */}
      <path d="M12 2L11.5 6L9 5L9.5 8.5L6 9.5L9 12L6.5 13L10 15L9 18.5L12 17L15 18.5L14 15L17.5 13L15 12L18 9.5L14.5 8.5L15 5L12.5 6L12 2Z" />
      <path d="M10.5 16L10.5 20L12 22L13.5 20L13.5 16" />
    </svg>
  );
}
