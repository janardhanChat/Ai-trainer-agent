import React from 'react';

export default function EndCallIcon() {
  return (
    <svg
      className="cursor-pointer w-[120px] h-[60px]"
      xmlns="http://www.w3.org/2000/svg"
      width="130"
      height="80"
      viewBox="0 0 130 80"
      fill="none"
    >
      {/* Centered the red background */}
      <rect x="25" width="80" height="80" rx="100" fill="#F83B3C" />

      {/* Adjusted path to be centered */}
      <g transform="translate(3, 0)"> 
        <path
          d="M80.9433 36.2491C73.9399 29.2457 55.3775 29.2549 48.3832 36.2491C46.8525 37.7798 46 39.7873 46 41.8957L46.1374 43.8665C46.1374 45.9932 47.9341 47.7899 50.1524 47.7899C50.2075 47.7899 54.1124 47.2766 54.1124 47.2766C56.2574 47.2215 57.9899 45.489 58.0357 43.3533L58.3016 40.9423C62.4816 39.2557 66.6524 39.2649 71.025 40.9607L71.2999 43.3624C71.3366 45.5074 73.0783 47.2491 75.2233 47.2857C75.2233 47.2857 79.1283 47.7991 79.1832 47.7991C81.4016 47.7991 83.1982 46.0024 83.1982 43.7841L83.3266 41.9874C83.3357 39.7966 82.4833 37.7891 80.9524 36.2582L80.9433 36.2491Z"
          fill="white"
        />
      </g>
    </svg>
  );
}
