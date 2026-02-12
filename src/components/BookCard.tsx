'use client';

import { useState, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Book, BookCardData } from '@/types/book';
import CategoryBadge from './CategoryBadge';
import StarRating from './StarRating';

interface BookCardProps {
  book: BookCardData | Book;
}

function getOpenLibraryCoverUrl(isbn: string): string {
  return `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
}

function BookCardInner({ book }: BookCardProps) {
  const [imgError, setImgError] = useState(false);
  const hasRealCover = book.isbn && !imgError;

  return (
    <Link
      href={`/books/${book.slug}`}
      className="group block h-full rounded-2xl bg-white border border-surface-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-surface-200/50 hover:-translate-y-1"
    >
      {/* Book cover header */}
      <div className="relative h-48 overflow-hidden">
        {hasRealCover ? (
          <>
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${book.coverColor}, ${book.coverColor}cc)`,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center py-3">
              <Image
                src={getOpenLibraryCoverUrl(book.isbn!)}
                alt={`${book.title} by ${book.author}`}
                width={120}
                height={180}
                className="h-full w-auto object-contain rounded-sm shadow-lg transition-transform duration-300 group-hover:scale-105"
                onError={() => setImgError(true)}
                loading="lazy"
              />
            </div>
          </>
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${book.coverColor}, ${book.coverColor}cc, ${book.coverColor}88)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-7xl drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                {book.coverEmoji}
              </span>
            </div>
          </>
        )}

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <CategoryBadge category={book.category} size="sm" />
        </div>

        {/* Reading time */}
        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-2.5 py-1 text-xs text-white font-medium">
          <Clock size={12} />
          {book.readingTime}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-surface-900 text-lg leading-tight line-clamp-2 group-hover:text-brand-600 transition-colors">
          {book.title}
        </h3>
        <p className="mt-1 text-sm text-surface-500 font-medium">
          by {book.author}
        </p>
        <p className="mt-2.5 text-sm text-surface-600 leading-relaxed line-clamp-2">
          {book.oneLiner}
        </p>
        <div className="mt-3 pt-3 border-t border-surface-100">
          <StarRating rating={book.rating} size="sm" />
        </div>
      </div>
    </Link>
  );
}

// Memoize to prevent re-renders when parent state changes (search, filter, pagination)
const BookCard = memo(BookCardInner, (prev, next) => prev.book.slug === next.book.slug);
BookCard.displayName = 'BookCard';

export default BookCard;
