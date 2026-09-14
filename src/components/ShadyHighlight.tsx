import React from 'react';

export type ShadyHighlightColor =
  | 'turquoise' // #11FEEE — Shady Side Academy signature fluorescent turquoise
  | 'green' // #1FFF01 — Shady Side Academy fluorescent green
  | 'yellow' // #FFFF01 — Shady Side Academy fluorescent yellow
  | 'pink' // #FF1CA5 — Shady Side Academy fluorescent pink
  | 'amber'; // #FFB81C — Shady Side Academy warm yellow

interface ShadyHighlightProps {
  children: React.ReactNode;
  color?: ShadyHighlightColor;
  className?: string;
  heightPercent?: number; // default: 42% matching SSA's 40%
}

const COLOR_MAP: Record<ShadyHighlightColor, string> = {
  turquoise: '#11FEEE',
  green: '#1FFF01',
  yellow: '#FFFF01',
  pink: '#FF1CA5',
  amber: '#FFB81C',
};

/**
 * ShadyHighlight:
 * Faithful recreation of the heading highlighter effect from Shady Side Academy (https://www.shadysideacademy.org/).
 *
 * Characteristics:
 * - Permanent highlight that stays there continuously across all views and devices ("i want it to stay there")
 * - Exact fluorescent turquoise `#11FEEE` (plus SSA fluorescent green, yellow, pink, and amber variants)
 * - Highlights the lower 42% of text line height from the baseline upward, letting dark typography stand out crisp and clean
 * - Uses inline decoration clone so wrapped phrases render seamlessly with proper padding
 */
export const ShadyHighlight: React.FC<ShadyHighlightProps> = ({
  children,
  color = 'turquoise',
  className = '',
  heightPercent = 42,
}) => {
  const hexColor = COLOR_MAP[color] || COLOR_MAP.turquoise;

  return (
    <span
      className={`relative inline font-inherit text-inherit px-1 -mx-0.5 rounded-[2px] select-text ${className}`}
      style={{
        backgroundImage: `linear-gradient(to top, ${hexColor} 0%, ${hexColor} ${heightPercent}%, transparent ${heightPercent}%)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 100%',
        backgroundSize: '100% 100%',
        WebkitBoxDecorationBreak: 'clone',
        boxDecorationBreak: 'clone',
      }}
    >
      {children}
    </span>
  );
};

export default ShadyHighlight;
