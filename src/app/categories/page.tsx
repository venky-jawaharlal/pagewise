import { books } from '@/data/books';
import { CATEGORIES, CATEGORY_ICONS, CATEGORY_COLORS, Category } from '@/types/book';
import { getBooksByCategory, formatCategorySlug } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight, Grid3X3 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Browse Categories — PageWise',
  description:
    'Explore productivity book summaries organized by category. From habits and routines to leadership and entrepreneurship.',
};

export default function CategoriesPage() {
  return (
    <div className="page-padding">
      <div className="container-wide">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-brand-50 rounded-xl">
              <Grid3X3 className="w-6 h-6 text-brand-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-surface-900 tracking-tight">
              Browse Categories
            </h1>
          </div>
          <p className="text-surface-500 text-lg max-w-2xl">
            Explore our collection organized by topic. Find books that match your
            current goals and interests.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category) => {
            const categoryBooks = getBooksByCategory(books, category);
            if (categoryBooks.length === 0) return null;

            const topBooks = categoryBooks.slice(0, 3);

            return (
              <Link
                key={category}
                href={`/categories/${formatCategorySlug(category)}`}
                className="group block bg-white border border-surface-200 rounded-2xl p-6 hover:border-brand-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl ${CATEGORY_COLORS[category]} flex items-center justify-center text-3xl shadow-md`}
                  >
                    {CATEGORY_ICONS[category]}
                  </div>
                  <span className="text-sm font-medium text-surface-400 bg-surface-50 px-3 py-1 rounded-full">
                    {categoryBooks.length}{' '}
                    {categoryBooks.length === 1 ? 'book' : 'books'}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-surface-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {category}
                </h2>

                <div className="mb-4">
                  <p className="text-sm text-surface-500 line-clamp-2">
                    {topBooks.map((b) => b.title).join(', ')}
                    {categoryBooks.length > 3 && ` and ${categoryBooks.length - 3} more`}
                  </p>
                </div>

                {/* Mini book covers */}
                <div className="flex items-center gap-2 mb-4">
                  {topBooks.map((book) => (
                    <div
                      key={book.slug}
                      className={`w-10 h-14 rounded-md bg-gradient-to-br ${book.coverColor} flex items-center justify-center text-sm shadow-sm`}
                    >
                      {book.coverEmoji}
                    </div>
                  ))}
                  {categoryBooks.length > 3 && (
                    <div className="w-10 h-14 rounded-md bg-surface-100 flex items-center justify-center text-xs text-surface-500 font-medium">
                      +{categoryBooks.length - 3}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-brand-600 group-hover:text-brand-700">
                  Explore category
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
