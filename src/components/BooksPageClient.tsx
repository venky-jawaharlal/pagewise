'use client';

import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { CATEGORIES, Category, type BookCardData } from '@/types/book';
import BookCard from '@/components/BookCard';
import SearchBar from '@/components/SearchBar';
import CategoryBadge from '@/components/CategoryBadge';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, SlidersHorizontal, X, ChevronDown } from 'lucide-react';

type SortOption = 'title' | 'author' | 'rating' | 'year';

const BOOKS_PER_PAGE = 24;

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}

function searchBooks(books: BookCardData[], query: string): BookCardData[] {
  const lowered = query.toLowerCase().trim();
  if (!lowered) return books;
  return books.filter(
    (book) =>
      book.title.toLowerCase().includes(lowered) ||
      book.author.toLowerCase().includes(lowered) ||
      book.oneLiner.toLowerCase().includes(lowered) ||
      book.tags.some((tag) => tag.toLowerCase().includes(lowered)) ||
      book.category.toLowerCase().includes(lowered)
  );
}

function sortBooks(books: BookCardData[], sortBy: SortOption): BookCardData[] {
  return [...books].sort((a, b) => {
    switch (sortBy) {
      case 'title':
        return a.title.localeCompare(b.title);
      case 'author':
        return a.author.localeCompare(b.author);
      case 'rating':
        return b.rating - a.rating;
      case 'year':
        return b.year - a.year;
      default:
        return 0;
    }
  });
}

interface BooksPageClientProps {
  books: BookCardData[];
  totalCount: number;
}

export default function BooksPageClient({ books, totalCount }: BooksPageClientProps) {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>('rating');
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(BOOKS_PER_PAGE);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const debouncedQuery = useDebounce(query, 250);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(BOOKS_PER_PAGE);
  }, [debouncedQuery, selectedCategory, sortBy]);

  const filteredBooks = useMemo(() => {
    let result = searchBooks(books, debouncedQuery);
    if (selectedCategory) {
      result = result.filter((book) => book.category === selectedCategory);
    }
    return sortBooks(result, sortBy);
  }, [books, debouncedQuery, selectedCategory, sortBy]);

  const visibleBooks = useMemo(
    () => filteredBooks.slice(0, visibleCount),
    [filteredBooks, visibleCount]
  );

  const hasMore = visibleCount < filteredBooks.length;

  // Intersection observer for infinite scroll
  useEffect(() => {
    if (!hasMore) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + BOOKS_PER_PAGE, filteredBooks.length));
        }
      },
      { rootMargin: '200px' }
    );
    const el = loadMoreRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [hasMore, filteredBooks.length]);

  const clearFilters = useCallback(() => {
    setQuery('');
    setSelectedCategory(null);
    setSortBy('rating');
  }, []);

  const hasActiveFilters = query || selectedCategory || sortBy !== 'rating';

  return (
    <div className="page-padding">
      <div className="container-wide">
        {/* Page Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-brand-50 rounded-xl">
              <BookOpen className="w-6 h-6 text-brand-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-surface-900 tracking-tight">
              All Book Summaries
            </h1>
          </div>
          <p className="text-surface-500 text-lg max-w-2xl">
            Browse our collection of {totalCount}+ productivity book summaries.
            Search, filter, and find your next great read.
          </p>
        </div>

        {/* Search & Filters Bar */}
        <div className="sticky top-16 z-30 bg-white/80 backdrop-blur-xl -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 py-4 mb-8 border-b border-surface-200/50">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex-1 w-full sm:max-w-md">
              <SearchBar
                value={query}
                onChange={setQuery}
                placeholder="Search books, authors, topics..."
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                  showFilters || selectedCategory
                    ? 'border-brand-200 bg-brand-50 text-brand-700'
                    : 'border-surface-200 text-surface-600 hover:border-surface-300'
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {selectedCategory && (
                  <span className="w-5 h-5 rounded-full bg-brand-500 text-white text-xs flex items-center justify-center">
                    1
                  </span>
                )}
              </button>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="appearance-none px-4 py-2.5 pr-10 rounded-xl border border-surface-200 text-sm font-medium text-surface-600 hover:border-surface-300 focus:outline-none focus:ring-2 focus:ring-brand-100 focus:border-brand-300 bg-white transition-all cursor-pointer"
                >
                  <option value="rating">Top Rated</option>
                  <option value="title">Title A-Z</option>
                  <option value="author">Author A-Z</option>
                  <option value="year">Newest First</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400 pointer-events-none" />
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 text-sm text-surface-500 hover:text-surface-700 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="pt-4 flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                      !selectedCategory
                        ? 'bg-surface-900 text-white'
                        : 'bg-surface-100 text-surface-600 hover:bg-surface-200'
                    }`}
                  >
                    All Categories
                  </button>
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() =>
                        setSelectedCategory(
                          selectedCategory === category ? null : category
                        )
                      }
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-brand-600 text-white'
                          : 'bg-surface-100 text-surface-600 hover:bg-surface-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-surface-500">
            Showing{' '}
            <span className="font-semibold text-surface-700">
              {visibleBooks.length}
            </span>{' '}
            of{' '}
            <span className="font-semibold text-surface-700">
              {filteredBooks.length}
            </span>{' '}
            {filteredBooks.length === 1 ? 'book' : 'books'}
            {selectedCategory && (
              <span>
                {' '}
                in{' '}
                <CategoryBadge
                  category={selectedCategory}
                  size="sm"
                  clickable={false}
                />
              </span>
            )}
            {debouncedQuery && (
              <span>
                {' '}
                matching &ldquo;
                <span className="font-medium text-surface-700">{debouncedQuery}</span>
                &rdquo;
              </span>
            )}
          </p>
        </div>

        {/* Book Grid */}
        {visibleBooks.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {visibleBooks.map((book) => (
                <BookCard key={book.slug} book={book} />
              ))}
            </div>

            {/* Infinite scroll sentinel */}
            {hasMore && (
              <div ref={loadMoreRef} className="flex justify-center py-12">
                <div className="flex items-center gap-3 text-sm text-surface-400">
                  <div className="w-5 h-5 border-2 border-surface-300 border-t-brand-500 rounded-full animate-spin" />
                  Loading more books...
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-surface-100 mb-4">
              <BookOpen className="w-8 h-8 text-surface-400" />
            </div>
            <h3 className="text-xl font-semibold text-surface-700 mb-2">
              No books found
            </h3>
            <p className="text-surface-500 mb-6">
              Try adjusting your search or filters to find what you&apos;re looking
              for.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-600 text-white rounded-full font-medium hover:bg-brand-700 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
