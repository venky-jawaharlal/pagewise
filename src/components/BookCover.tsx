'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { Book } from '@/types/book';

interface BookCoverProps {
  book: Book;
  size?: 'sm' | 'md' | 'lg';
}

const sizeConfig = {
  sm: {
    wrapper: 'w-24 h-36',
    emoji: 'text-3xl',
    title: 'text-[10px] leading-tight',
    author: 'text-[8px]',
    padding: 'p-2',
    spine: 'w-2',
    imgWidth: 96,
    imgHeight: 144,
  },
  md: {
    wrapper: 'w-36 h-52',
    emoji: 'text-5xl',
    title: 'text-xs leading-tight',
    author: 'text-[10px]',
    padding: 'p-3',
    spine: 'w-3',
    imgWidth: 144,
    imgHeight: 208,
  },
  lg: {
    wrapper: 'w-48 h-72',
    emoji: 'text-7xl',
    title: 'text-sm leading-tight',
    author: 'text-xs',
    padding: 'p-4',
    spine: 'w-4',
    imgWidth: 192,
    imgHeight: 288,
  },
};

function getOpenLibraryCoverUrl(isbn: string, size: 'S' | 'M' | 'L' = 'L'): string {
  return `https://covers.openlibrary.org/b/isbn/${isbn}-${size}.jpg`;
}

function GradientCover({ book, config }: { book: Book; config: (typeof sizeConfig)['md'] }) {
  return (
    <div
      className={cn(
        'absolute inset-0 rounded-r-md rounded-l-sm overflow-hidden',
        'shadow-lg group-hover:shadow-xl transition-shadow duration-300'
      )}
    >
      <div className={cn('absolute inset-0 bg-gradient-to-br', book.coverColor)} />
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />

      <div className={cn('relative z-10 flex flex-col items-center justify-between h-full', config.padding)}>
        <div className="w-full text-center">
          <h3 className={cn('font-bold text-white/95 line-clamp-2', config.title)}>
            {book.title}
          </h3>
        </div>
        <div className={cn('flex-1 flex items-center justify-center', config.emoji)}>
          <span className="drop-shadow-lg filter">{book.coverEmoji}</span>
        </div>
        <div className="w-full text-center">
          <p className={cn('text-white/80 font-medium truncate', config.author)}>
            {book.author}
          </p>
        </div>
      </div>

      <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-white/20" />
    </div>
  );
}

export default function BookCover({ book, size = 'md' }: BookCoverProps) {
  const config = sizeConfig[size];
  const [imgError, setImgError] = useState(false);
  const hasRealCover = book.isbn && !imgError;

  return (
    <div
      className={cn('relative group', config.wrapper)}
      style={{ perspective: '800px' }}
    >
      <div
        className="relative w-full h-full transition-transform duration-300 group-hover:rotate-y-[-5deg]"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateY(-3deg)',
        }}
      >
        {hasRealCover ? (
          <div
            className={cn(
              'absolute inset-0 rounded-r-md rounded-l-sm overflow-hidden',
              'shadow-lg group-hover:shadow-xl transition-shadow duration-300'
            )}
          >
            <Image
              src={getOpenLibraryCoverUrl(book.isbn!)}
              alt={`${book.title} by ${book.author}`}
              width={config.imgWidth}
              height={config.imgHeight}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
              loading="lazy"
            />
            <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-black/10" />
          </div>
        ) : (
          <GradientCover book={book} config={config} />
        )}

        {/* Spine shadow */}
        <div
          className={cn(
            'absolute top-0 bottom-0 left-0 bg-black/20 rounded-l-sm',
            config.spine
          )}
          style={{ transform: 'translateZ(-2px)' }}
        />
      </div>

      {/* Bottom shadow */}
      <div className="absolute -bottom-2 left-2 right-0 h-4 bg-black/10 blur-md rounded-full" />
    </div>
  );
}
