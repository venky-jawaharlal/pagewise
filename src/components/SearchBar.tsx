'use client';

import { useRef } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search books, authors, topics...',
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    onChange('');
    inputRef.current?.focus();
  };

  return (
    <div className="relative group w-full">
      {/* Search icon */}
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <Search
          size={18}
          className="text-surface-400 transition-colors group-focus-within:text-brand-500"
        />
      </div>

      {/* Input */}
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          'w-full rounded-xl border border-surface-200 bg-white py-3 pl-11 pr-10',
          'text-sm text-surface-900 placeholder:text-surface-400',
          'outline-none transition-all duration-200',
          'focus:border-brand-300 focus:ring-4 focus:ring-brand-100',
          'hover:border-surface-300'
        )}
      />

      {/* Clear button */}
      {value && (
        <button
          type="button"
          onClick={handleClear}
          className={cn(
            'absolute inset-y-0 right-0 flex items-center pr-4',
            'text-surface-400 hover:text-surface-600 transition-colors'
          )}
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
