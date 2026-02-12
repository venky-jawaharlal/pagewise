import { books } from '@/data/books';
import type { BookCardData } from '@/types/book';
import type { Metadata } from 'next';
import BooksPageClient from '@/components/BooksPageClient';

export const metadata: Metadata = {
  title: 'All Book Summaries — PageWise',
  description:
    'Browse 500+ productivity book summaries. Search, filter, and discover key insights from the world\'s best books.',
};

/**
 * Server component that extracts only the lightweight fields needed for
 * card display, preventing the full book data (~1MB of summaries, chapters,
 * quotes) from being shipped to the client JS bundle.
 */
export default function BooksPage() {
  // Extract only card-relevant fields (server-side only)
  const booksIndex: BookCardData[] = books.map((book) => ({
    slug: book.slug,
    title: book.title,
    author: book.author,
    year: book.year,
    category: book.category,
    tags: book.tags,
    coverColor: book.coverColor,
    coverEmoji: book.coverEmoji,
    isbn: book.isbn,
    rating: book.rating,
    readingTime: book.readingTime,
    oneLiner: book.oneLiner,
  }));

  return <BooksPageClient books={booksIndex} totalCount={books.length} />;
}
