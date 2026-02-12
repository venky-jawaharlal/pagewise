import { books } from '@/data/books';
import { getRelatedBooks } from '@/lib/utils';
import { CATEGORY_ICONS } from '@/types/book';
import BookCover from '@/components/BookCover';
import BookCard from '@/components/BookCard';
import CategoryBadge from '@/components/CategoryBadge';
import StarRating from '@/components/StarRating';
import QuoteCard from '@/components/QuoteCard';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Clock,
  BookOpen,
  Calendar,
  FileText,
  User,
  ChevronRight,
  Lightbulb,
  Target,
  MessageSquareQuote,
  Users,
  BookMarked,
} from 'lucide-react';

// Generate static params for all books
export function generateStaticParams() {
  return books.map((book) => ({
    slug: book.slug,
  }));
}

// Generate metadata for each book page
export function generateMetadata({ params }: { params: { slug: string } }) {
  const book = books.find((b) => b.slug === params.slug);
  if (!book) return { title: 'Book Not Found' };

  return {
    title: `${book.title} by ${book.author} — Summary | PageWise`,
    description: book.oneLiner,
    openGraph: {
      title: `${book.title} — Book Summary`,
      description: book.oneLiner,
    },
  };
}

export default function BookDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const book = books.find((b) => b.slug === params.slug);

  if (!book) {
    notFound();
  }

  const relatedBooks = getRelatedBooks(books, book, 4);

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
            <li className="text-surface-900 font-medium truncate max-w-[200px]">
              {book.title}
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Book Cover */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="sticky top-24">
              <BookCover book={book} size="lg" />

              {/* Quick Stats under cover */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="bg-surface-50 rounded-xl p-3 text-center">
                  <Calendar className="w-4 h-4 mx-auto text-surface-400 mb-1" />
                  <div className="text-sm font-semibold text-surface-700">
                    {book.year}
                  </div>
                  <div className="text-xs text-surface-500">Published</div>
                </div>
                <div className="bg-surface-50 rounded-xl p-3 text-center">
                  <FileText className="w-4 h-4 mx-auto text-surface-400 mb-1" />
                  <div className="text-sm font-semibold text-surface-700">
                    {book.pages}
                  </div>
                  <div className="text-xs text-surface-500">Pages</div>
                </div>
                <div className="bg-surface-50 rounded-xl p-3 text-center">
                  <Clock className="w-4 h-4 mx-auto text-surface-400 mb-1" />
                  <div className="text-sm font-semibold text-surface-700">
                    {book.readingTime}
                  </div>
                  <div className="text-xs text-surface-500">Summary</div>
                </div>
                <div className="bg-surface-50 rounded-xl p-3 text-center">
                  <BookOpen className="w-4 h-4 mx-auto text-surface-400 mb-1" />
                  <div className="text-sm font-semibold text-surface-700">
                    {book.chapters.length}
                  </div>
                  <div className="text-xs text-surface-500">Chapters</div>
                </div>
              </div>
            </div>
          </div>

          {/* Book Info */}
          <div className="lg:col-span-8">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <CategoryBadge category={book.category} size="md" clickable />
              <StarRating rating={book.rating} size="md" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-surface-900 tracking-tight mb-3">
              {book.title}
            </h1>

            <div className="flex items-center gap-2 mb-6">
              <User className="w-4 h-4 text-surface-400" />
              <span className="text-lg text-surface-600">
                by{' '}
                <span className="font-semibold text-surface-800">
                  {book.author}
                </span>
              </span>
            </div>

            <p className="text-xl text-surface-600 leading-relaxed mb-6 font-medium">
              {book.oneLiner}
            </p>

            {/* Author Bio */}
            <div className="bg-surface-50 rounded-2xl p-5 mb-8">
              <h3 className="text-sm font-semibold text-surface-500 uppercase tracking-wider mb-2">
                About the Author
              </h3>
              <p className="text-surface-700 leading-relaxed">
                {book.authorBio}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {book.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-50 rounded-xl">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-surface-900">
                  Key Takeaways
                </h2>
              </div>
              <div className="space-y-3">
                {book.keyTakeaways.map((takeaway, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 bg-gradient-to-r from-amber-50/50 to-transparent rounded-xl border border-amber-100/50"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-100 text-amber-700 font-bold text-sm flex items-center justify-center">
                      {index + 1}
                    </div>
                    <p className="text-surface-700 leading-relaxed flex-1">
                      {takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-brand-50 rounded-xl">
                  <Target className="w-5 h-5 text-brand-600" />
                </div>
                <h2 className="text-2xl font-bold text-surface-900">
                  Book Summary
                </h2>
              </div>
              <div className="prose-summary">
                {book.summary.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Chapter Summaries */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-50 rounded-xl">
                  <BookMarked className="w-5 h-5 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-surface-900">
                  Chapter Highlights
                </h2>
              </div>
              <div className="space-y-4">
                {book.chapters.map((chapter, index) => (
                  <details
                    key={index}
                    className="group bg-white border border-surface-200 rounded-2xl overflow-hidden hover:border-surface-300 transition-colors"
                  >
                    <summary className="flex items-center gap-4 p-5 cursor-pointer select-none list-none">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-sm flex items-center justify-center group-open:bg-emerald-600 group-open:text-white transition-colors">
                        {index + 1}
                      </div>
                      <h3 className="font-semibold text-surface-800 flex-1">
                        {chapter.title}
                      </h3>
                      <ChevronRight className="w-5 h-5 text-surface-400 group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="px-5 pb-5 pl-[4.5rem]">
                      <p className="text-surface-600 leading-relaxed">
                        {chapter.summary}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Quotes */}
            {book.quotes.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-50 rounded-xl">
                    <MessageSquareQuote className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-surface-900">
                    Notable Quotes
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {book.quotes.map((quote, index) => (
                    <QuoteCard key={index} quote={quote} />
                  ))}
                </div>
              </div>
            )}

            {/* Who Should Read */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-50 rounded-xl">
                  <Users className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-surface-900">
                  Who Should Read This?
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {book.whoShouldRead.map((reader, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-indigo-50/50 rounded-xl border border-indigo-100/50"
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                    <span className="text-surface-700">{reader}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Books */}
        {relatedBooks.length > 0 && (
          <section className="border-t border-surface-200 pt-16">
            <h2 className="section-heading mb-3">You Might Also Like</h2>
            <p className="section-subheading mb-8">
              Explore more books in similar categories
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedBooks.map((relBook) => (
                <BookCard key={relBook.slug} book={relBook} />
              ))}
            </div>
          </section>
        )}

        {/* Back to Books */}
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
