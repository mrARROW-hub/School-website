import React from 'react';
import { motion } from 'motion/react';

/**
 * Replicated visual shape language inspired by the International School of Brussels (ISB - isb.be):
 * 1. Purple Stairs (#861fce) - Growth, structured progression, academic levels
 * 2. Pink Circle/Arch (#fe76b4) - Inclusivity, community, welcoming spirit
 * 3. Blue Hourglass/Prism (#0064ec) - Focus, intellect, symmetry, rigor
 * 4. Yellow Rhythmic Bars (#FFC548) - Vibrancy, diversity, expression
 * 5. Green Quatrefoil Flower (#00b273) - Flourishing, creativity, environment
 * 6. Coral Red Triangle (#FF3D37) - Empowerment, leadership, forward drive
 */

export interface ShapeProps {
  className?: string;
  size?: number | string;
  color?: string;
}

// 1. Purple Stairs (Stepped geometric progression)
export const ShapePurpleStairs: React.FC<ShapeProps> = ({
  className = '',
  size = 28,
  color = '#861fce',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block transition-transform duration-300 hover:scale-110 ${className}`}
    aria-hidden="true"
  >
    <path
      d="M3 29V3h9v9h9v9h8v8H3z"
      fill={color}
    />
  </svg>
);

// 2. Pink Circle / Arch (Soft welcoming community)
export const ShapePinkCircle: React.FC<ShapeProps> = ({
  className = '',
  size = 28,
  color = '#fe76b4',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block transition-transform duration-300 hover:scale-110 ${className}`}
    aria-hidden="true"
  >
    <circle cx="16" cy="16" r="13.5" fill={color} />
  </svg>
);

// 3. Blue Hourglass / Prism (Pinched polygon)
export const ShapeBlueHourglass: React.FC<ShapeProps> = ({
  className = '',
  size = 28,
  color = '#0064ec',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block transition-transform duration-300 hover:scale-110 ${className}`}
    aria-hidden="true"
  >
    <path
      d="M3 3 L11 16 L3 29 H29 L21 16 L29 3 Z"
      fill={color}
    />
  </svg>
);

// 4. Yellow Rhythmic Bars (Triple horizontal pill stack)
export const ShapeYellowBars: React.FC<ShapeProps> = ({
  className = '',
  size = 28,
  color = '#FFC548',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block transition-transform duration-300 hover:scale-110 ${className}`}
    aria-hidden="true"
  >
    <rect x="3" y="4" width="26" height="5.5" rx="2.75" fill={color} />
    <rect x="3" y="13.25" width="26" height="5.5" rx="2.75" fill={color} />
    <rect x="3" y="22.5" width="26" height="5.5" rx="2.75" fill={color} />
  </svg>
);

// 5. Green Quatrefoil Flower (4-lobe organic bloom)
export const ShapeGreenFlower: React.FC<ShapeProps> = ({
  className = '',
  size = 28,
  color = '#00b273',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block transition-transform duration-300 hover:scale-110 ${className}`}
    aria-hidden="true"
  >
    <path
      d="M16 2.5C18.5 2.5 21 4.5 21.5 7C24.5 6.5 27.5 9 27.5 12C27.5 14.5 25.5 17 23 17.5C23.5 20.5 21 23.5 18 23.5C15.5 23.5 13 21.5 12.5 19C9.5 19.5 6.5 17 6.5 14C6.5 11.5 8.5 9 11 8.5C10.5 5.5 13 2.5 16 2.5Z"
      fill={color}
      transform="translate(1, 1)"
    />
    {/* Geometric 4-circle bloom */}
    <circle cx="11.5" cy="11.5" r="7" fill={color} />
    <circle cx="20.5" cy="11.5" r="7" fill={color} />
    <circle cx="11.5" cy="20.5" r="7" fill={color} />
    <circle cx="20.5" cy="20.5" r="7" fill={color} />
    <rect x="11.5" y="11.5" width="9" height="9" fill={color} />
  </svg>
);

// 6. Coral Red Triangle (Empowerment / forward peak)
export const ShapeRedTriangle: React.FC<ShapeProps> = ({
  className = '',
  size = 28,
  color = '#FF3D37',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block transition-transform duration-300 hover:scale-110 ${className}`}
    aria-hidden="true"
  >
    <polygon points="16,3 30,29 2,29" fill={color} />
  </svg>
);

// 7. Pink Bubble / Arch (ISB quadrant arch motif)
export const ShapePinkArch: React.FC<ShapeProps> = ({
  className = '',
  size = 28,
  color = '#fe76b4',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block transition-transform duration-300 hover:scale-110 ${className}`}
    aria-hidden="true"
  >
    <path
      d="M3 3h13a13 13 0 0 1 13 13v13H3V3z"
      fill={color}
    />
  </svg>
);

// 8. Cyan/Blue Wave Zigzag
export const ShapeCyanWave: React.FC<ShapeProps> = ({
  className = '',
  size = 28,
  color = '#0284c7',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block transition-transform duration-300 hover:scale-110 ${className}`}
    aria-hidden="true"
  >
    <path
      d="M3 11L10 4l7 7 7-7 5 5v7l-5-5-7 7-7-7-7 7V11z"
      fill={color}
    />
  </svg>
);

export type ISBShapeType =
  | 'purple-stairs'
  | 'pink-circle'
  | 'blue-hourglass'
  | 'yellow-bars'
  | 'green-flower'
  | 'red-triangle'
  | 'pink-arch';

export const ISBShape: React.FC<{
  type: ISBShapeType;
  size?: number | string;
  className?: string;
  color?: string;
}> = ({ type, size = 28, className = '', color }) => {
  switch (type) {
    case 'purple-stairs':
      return <ShapePurpleStairs size={size} className={className} color={color} />;
    case 'pink-circle':
      return <ShapePinkCircle size={size} className={className} color={color} />;
    case 'blue-hourglass':
      return <ShapeBlueHourglass size={size} className={className} color={color} />;
    case 'yellow-bars':
      return <ShapeYellowBars size={size} className={className} color={color} />;
    case 'green-flower':
      return <ShapeGreenFlower size={size} className={className} color={color} />;
    case 'red-triangle':
      return <ShapeRedTriangle size={size} className={className} color={color} />;
    case 'pink-arch':
      return <ShapePinkArch size={size} className={className} color={color} />;
    default:
      return null;
  }
};

/**
 * Word Highlight with companion ISB Shape tag
 * Replicates ISB's <span class="shape_blue_hourglass">school</span> pattern
 */
export const ISBWordBadge: React.FC<{
  children: React.ReactNode;
  shape: ISBShapeType;
  label?: string;
}> = ({ children, shape, label }) => {
  return (
    <span className="inline-flex items-center gap-1.5 font-semibold text-[#111] group cursor-default">
      <span className="relative inline-block border-b-2 border-transparent group-hover:border-current transition-colors">
        {children}
      </span>
      <span
        title={label}
        className="inline-flex items-center justify-center -translate-y-0.5 transition-transform duration-200 group-hover:scale-125 group-hover:rotate-6"
      >
        <ISBShape type={shape} size={18} />
      </span>
    </span>
  );
};

/**
 * Exact signature row from ISB Footer (footer--decorative--icons)
 * 6 colorful symbols in a sleek horizontal row with hover reactions
 */
export const ISBFooterIconsRow: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shapes: { type: ISBShapeType; name: string; desc: string; color: string }[] = [
    { type: 'purple-stairs', name: 'Progress', desc: 'Pre-K to Grade 12 growth stages', color: '#861fce' },
    { type: 'pink-circle', name: 'Community', desc: 'Inclusivity and belonging', color: '#fe76b4' },
    { type: 'blue-hourglass', name: 'Intellect', desc: 'Academic rigor and inquiry', color: '#0064ec' },
    { type: 'yellow-bars', name: 'Expression', desc: 'Diversity of voices and talents', color: '#FFC548' },
    { type: 'green-flower', name: 'Flourishing', desc: 'Holistic character and nature', color: '#00b273' },
    { type: 'red-triangle', name: 'Empowerment', desc: 'Leadership, courage, and action', color: '#FF3D37' },
  ];

  return (
    <div className={`isb-footer-shapes py-6 ${className}`}>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
          {shapes.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-2 rounded-xl hover:bg-neutral-50 transition-all duration-200 cursor-pointer"
              title={`${item.name} — ${item.desc}`}
            >
              <div className="transform transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-115">
                <ISBShape type={item.type} size={30} />
              </div>
              <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#111] px-2 py-0.5 text-[10px] font-bold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 z-20 shadow-md">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Floating decorative shapes cluster (deprecated in favor of ISBBigSectionEdgeShape)
 */
export const ISBSectionShapeAccents: React.FC<{
  leftShape?: ISBShapeType;
  rightShape?: ISBShapeType;
  className?: string;
}> = () => {
  return null;
};

/**
 * Scroll-Triggered Pop-Out Edge Shape
 * Sits flush against the section/screen edge (left or right).
 * Only half of the shape pops out into the viewport; the other half remains outside the edge.
 * As the user scrolls down, it smoothly transitions in with a spring pop effect.
 * Does NOT add any vertical space (absolute positioning within relative section).
 */
export const ISBScrollPopEdgeShape: React.FC<{
  shape: ISBShapeType;
  align?: 'left' | 'right';
  topPosition?: string;
  className?: string;
}> = ({ shape, align = 'right', topPosition = 'top-1/2', className = '' }) => {
  const isRight = align === 'right';

  return (
    <div
      className={`absolute ${topPosition} ${
        isRight ? 'right-0' : 'left-0'
      } -translate-y-1/2 z-20 select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="pointer-events-auto cursor-pointer"
        initial={{
          x: isRight ? '85%' : '-85%',
          opacity: 0.75,
          scale: 0.92,
          rotate: isRight ? 12 : -12,
        }}
        whileInView={{
          x: isRight ? '50%' : '-50%',
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        viewport={{ once: false, amount: 0.02, margin: '120px 0px' }}
        transition={{
          type: 'spring',
          stiffness: 95,
          damping: 14,
          mass: 0.6,
        }}
        whileHover={{
          x: isRight ? '35%' : '-35%',
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 drop-shadow-lg filter transition-transform">
          <ISBShape type={shape} size="100%" className="w-full h-full" />
        </div>
      </motion.div>
    </div>
  );
};

/**
 * Legacy placeholder for backward compatibility
 */
export const ISBBigSectionEdgeShape: React.FC<{
  shape: ISBShapeType;
  align?: 'left' | 'right';
  className?: string;
}> = () => null;
