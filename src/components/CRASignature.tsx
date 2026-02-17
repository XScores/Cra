export function CRASignature({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Canada Revenue Agency text */}
      <text
        x="0"
        y="25"
        fontSize="11"
        fontFamily="Arial, sans-serif"
        fill="#26374a"
        fontWeight="400"
      >
        Canada Revenue Agency
      </text>
      
      {/* Agence du revenu du Canada text */}
      <text
        x="0"
        y="37"
        fontSize="9"
        fontFamily="Arial, sans-serif"
        fill="#26374a"
        fontWeight="300"
      >
        Agence du revenu du Canada
      </text>
      
      {/* Canadian Flag */}
      <g transform="translate(0, 42)">
        {/* Flag pole/base */}
        <rect x="0" y="0" width="40" height="12" fill="#af3c43" />
        
        {/* Maple leaf simplified */}
        <path
          d="M 20 2 L 18 5 L 15 5 L 17 7 L 16 10 L 20 8 L 24 10 L 23 7 L 25 5 L 22 5 Z"
          fill="white"
        />
      </g>
    </svg>
  );
}

export function CanadaWordmark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* "Canada" wordmark */}
      <text
        x="0"
        y="28"
        fontSize="24.2"
        fontFamily="Arial, sans-serif"
        fill="#26374a"
        fontWeight="400"
        letterSpacing="0.5"
      >
        Canada
      </text>
      
      {/* Canadian Flag above the last 'a' */}
      <g transform="translate(121, 0)">
        {/* Red rectangle */}
        <rect x="0" y="0" width="29.04" height="19.36" fill="#af3c43" />
        
        {/* White maple leaf */}
        <path
          d="M 14.52 3.63 L 12.705 7.26 L 9.075 7.26 L 11.495 9.68 L 10.285 13.31 L 14.52 10.89 L 18.755 13.31 L 17.545 9.68 L 19.965 7.26 L 16.335 7.26 Z"
          fill="white"
        />
      </g>
    </svg>
  );
}
