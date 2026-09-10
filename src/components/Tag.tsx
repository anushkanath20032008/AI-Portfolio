import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'accent' | 'subtle' | 'palo-red' | 'palo-orange' | 'palo-cyan' | 'palo-emerald';
  className?: string;
  prefix?: string;
}

export const Tag: React.FC<TagProps> = ({ 
  label, 
  variant = 'default', 
  className = '',
  prefix = ''
}) => {
  const cleanLabel = label.startsWith('>') ? label : (prefix ? `${prefix} ${label}` : label);
  
  if (variant === 'palo-red' || variant === 'accent') {
    return (
      <span 
        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium rounded-full border border-[#3ECF8E]/30 bg-[#3ECF8E]/10 text-[#3ECF8E] tracking-tight transition-colors ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E]" />
        {cleanLabel}
      </span>
    );
  }

  if (variant === 'palo-emerald') {
    return (
      <span 
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded border border-[#10B981]/30 bg-[#10B981]/10 text-[#10B981] tracking-tight transition-colors ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
        {cleanLabel}
      </span>
    );
  }

  if (variant === 'palo-cyan') {
    return (
      <span 
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8] tracking-tight transition-colors ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
        {cleanLabel}
      </span>
    );
  }

  if (variant === 'subtle') {
    return (
      <span 
        className={`inline-flex items-center px-2 py-0.5 text-[11px] font-mono text-[#94A3B8] bg-[#141B21]/80 rounded border border-[#232F3B] tracking-tight ${className}`}
      >
        {cleanLabel}
      </span>
    );
  }

  return (
    <span 
      className={`inline-flex items-center px-2.5 py-1 text-xs text-[#94A3B8] bg-[#10161C] rounded-md border border-[#202C38] tracking-tight hover:border-[#3ECF8E]/40 hover:text-white transition-colors ${className}`}
    >
      {cleanLabel}
    </span>
  );
};
