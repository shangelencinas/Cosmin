import React from 'react';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export function Logo({ className = '', showSubtitle = true }: LogoProps) {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div className="flex items-center gap-1.5 select-none">
        <svg
          id="cosmin-brand-logo"
          viewBox="0 0 320 85"
          className="h-10 w-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Mask to cut a beautiful gap in the yellow 'M' where the diagonal slash line passes */}
            <mask id="m-slash-mask">
              {/* Everything starts fully visible (white) */}
              <rect x="0" y="0" width="320" height="85" fill="#FFFFFF" />
              {/* Diagonal strip in black cuts a gap in the element utilizing this mask */}
              <line
                x1="105"
                y1="82"
                x2="200"
                y2="-5"
                stroke="#000000"
                strokeWidth="11"
                strokeLinecap="square"
              />
            </mask>
          </defs>

          {/* 'COS' text portion in bold white sans-serif */}
          <text
            x="5"
            y="62"
            fill="#FFFFFF"
            fontSize="54"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="-0.012em"
          >
            COS
          </text>

          {/* 'M' Letter in premium high-contrast Yellow with diagonal mask split */}
          <path
            d="M 125 62 L 125 15 L 140 15 L 153 39 L 166 15 L 181 15 L 181 62 L 167 62 L 167 33 L 153 58 L 139 33 L 139 62 Z"
            fill="#FAD000"
            mask="url(#m-slash-mask)"
          />

          {/* 'I' Letter in high-contrast Orange/Peach */}
          <rect x="196" y="15" width="13" height="47" rx="0.5" fill="#FE8C4B" />

          {/* 'N' Letter in high-contrast Orange/Peach */}
          <path
            d="M 224 62 L 224 15 L 238 15 L 255 43 L 255 15 L 268 15 L 268 62 L 255 62 L 238 34 L 238 62 Z"
            fill="#FE8C4B"
          />

          {/* Sharp diagonal yellow slash overlay crossing M */}
          <line
            x1="110"
            y1="78"
            x2="195"
            y2="0"
            stroke="#FAD000"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {showSubtitle && (
        <p className="text-[8px] text-zinc-400 tracking-[0.24em] uppercase font-mono leading-none mt-1 pl-1">
          INGENIERÍA & MINERÍA
        </p>
      )}
    </div>
  );
}

export default Logo;
