'use client';

import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md';
}

export default function StarRating({ rating, size = 'md' }: StarRatingProps) {
  const starSize = size === 'sm' ? 14 : 18;
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.25 && rating - fullStars < 0.75;
  const emptyStars = totalStars - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-0.5">
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            size={starSize}
            className="fill-amber-400 text-amber-400"
          />
        ))}

        {/* Half star */}
        {hasHalf && (
          <div className="relative" style={{ width: starSize, height: starSize }}>
            <Star
              size={starSize}
              className="absolute inset-0 text-surface-300"
            />
            <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
              <Star
                size={starSize}
                className="fill-amber-400 text-amber-400"
              />
            </div>
          </div>
        )}

        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star
            key={`empty-${i}`}
            size={starSize}
            className="text-surface-300"
          />
        ))}
      </div>

      <span
        className={cn(
          'font-medium text-surface-600',
          size === 'sm' ? 'text-xs' : 'text-sm'
        )}
      >
        {rating.toFixed(1)}
      </span>
    </div>
  );
}
