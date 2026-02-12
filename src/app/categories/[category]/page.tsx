import { books } from '@/data/books';
import {
  CATEGORIES,
  CATEGORY_ICONS,
  CATEGORY_COLORS,
} from '@/types/book';
import {
  getBooksByCategory,
  formatCategorySlug,
  parseCategorySlug,
  getCategoryCount,
} from '@/lib/utils';
import BookCard from '@/components/BookCard';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ChevronRight, ArrowRight } from 'lucide-react';

// Pre-compute category counts once at build time (not per-render)
const categoryCounts = getCategoryCount(books);

// Generate static params for all categories
export function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    category: formatCategorySlug(category),
  }));
}

// Generate metadata
export function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  const category = parseCategorySlug(params.category);
  if (!category) return { title: 'Category Not Found' };

  return {
    title: `${category} Books — PageWise`,
    description: `Explore ${categoryCounts[category] || 0}+ book summaries in ${category}. Discover key insights from the world's best productivity books.`,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = parseCategorySlug(params.category);

  if (!category) {
    notFound();
  }

  const categoryBooks = getBooksByCategory(books, category);
  const icon = CATEGORY_ICONS[category];
  const colorClass = CATEGORY_COLORS[category];

  // Filter other categories with book counts (pre-computed)
  const otherCategories = CATEGORIES.filter(
    (c) => c !== category && (categoryCounts[c] || 0) > 0
  );

  return (
    <div className="page-padding">
      <div className="container-wide">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-surface-500">
            <li>
              <Link href="/" className="hover:text-brand-600 transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li>
              <Link
                href="/books"
                className="hover:text-brand-600 transition-colors"
              >
                Books
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-surface-900 font-medium">{category}</li>
          </ol>
        </nav>

        {/* Category Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div
              className={`w-16 h-16 rounded-2xl ${colorClass} flex items-center justify-center text-3xl shadow-lg`}
            >
              {icon}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-surface-900 tracking-tight">
                {category}
              </h1>
              <p className="text-surface-500 mt-1">
                {categoryBooks.length}{' '}
                {categoryBooks.length === 1 ? 'book' : 'books'} in this category
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Book Grid */}
          <div className="lg:col-span-3">
            {categoryBooks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {categoryBooks.map((book) => (
                  <BookCard key={book.slug} book={book} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-surface-500 text-lg">
                  No books found in this category yet.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar - Other Categories (using pre-computed counts) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-sm font-semibold text-surface-500 uppercase tracking-wider mb-4">
                Other Categories
              </h3>
              <div className="space-y-1">
                {otherCategories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/categories/${formatCategorySlug(cat)}`}
                    className="group flex items-center gap-3 p-3 rounded-xl hover:bg-surface-50 transition-colors"
                  >
                    <span className="text-lg">{CATEGORY_ICONS[cat]}</span>
                    <span className="flex-1 text-sm text-surface-600 group-hover:text-surface-900 transition-colors">
                      {cat}
                    </span>
                    <span className="text-xs text-surface-400 bg-surface-100 px-2 py-0.5 rounded-full">
                      {categoryCounts[cat]}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-surface-200">
                <Link
                  href="/books"
                  className="flex items-center gap-2 text-sm text-brand-600 font-medium hover:text-brand-700 transition-colors"
                >
                  View all books
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-16 text-center">
          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all books
          </Link>
        </div>
      </div>
    </div>
  );
}
