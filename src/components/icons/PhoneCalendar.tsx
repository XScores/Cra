interface PhoneCalendarProps {
  className?: string;
}

export function PhoneCalendar({ className = "h-5 w-5" }: PhoneCalendarProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Calendar */}
      <rect
        x="3"
        y="4"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <line
        x1="3"
        y1="9"
        x2="21"
        y2="9"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="8"
        y1="2"
        x2="8"
        y2="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="16"
        y1="2"
        x2="16"
        y2="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* White circle background for phone */}
      <circle cx="12" cy="15" r="5.5" fill="white" />
      
      {/* Simplified phone handset icon */}
      <path
        d="M14.5 17.5C14.5 17.5 15.5 16.5 16 16.5C16.5 16.5 18 18 18 18.5C18 19 17 19.5 16.5 19.5C14.5 19.5 9.5 14.5 9.5 12.5C9.5 12 10 11 10.5 11C11 11 12.5 12.5 12.5 13C12.5 13.5 11.5 14.5 11.5 14.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
