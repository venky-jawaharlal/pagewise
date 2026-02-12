import { books } from '@/data/books';
import { CATEGORIES, CATEGORY_ICONS, CATEGORY_COLORS } from '@/types/book';
import { getFeaturedBooks, getCategoryCount, formatCategorySlug } from '@/lib/utils';
import HeroSection from '@/components/HeroSection';
import BookCard from '@/components/BookCard';
import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Star, Zap } from 'lucide-react';

export default function HomePage() {
  const featured = getFeaturedBooks(books, 8);
  const categoryCounts = getCategoryCount(books);

  return (
    <>
      <HeroSection />

      {/* Featured Books Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="section-heading">Featured Summaries</h2>
              <p className="section-subheading">
                Our most popular and highest-rated book summaries
              </p>
            </div>
            <Link
              href="/books"
              className="hidden md:flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
            >
              View all books
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featured.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/books"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
            >
              View all books
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-surface-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-heading">Browse by Category</h2>
            <p className="section-subheading mx-auto">
              Find books that match your current goals and interests
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {CATEGORIES.map((category) => {
              const count = categoryCounts[category] || 0;
              if (count === 0) return null;
              return (
                <Link
                  key={category}
                  href={`/categories/${formatCategorySlug(category)}`}
                  className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-surface-200 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl ${CATEGORY_COLORS[category]} flex items-center justify-center text-2xl`}
                  >
                    {CATEGORY_ICONS[category]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-surface-900 group-hover:text-brand-600 transition-colors truncate">
                      {category}
                    </h3>
                    <p className="text-sm text-surface-500">
                      {count} {count === 1 ? 'book' : 'books'}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-surface-400 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats / Value Prop Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="bg-gradient-to-br from-surface-900 to-surface-800 rounded-3xl p-10 md:p-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Why PageWise?
              </h2>
              <p className="text-surface-400 mt-3 text-lg max-w-2xl mx-auto">
                We distill the world&apos;s best books into actionable insights you can apply today
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: BookOpen,
                  stat: `${books.length}+`,
                  label: 'Book Summaries',
                  desc: 'Curated from the best productivity literature',
                },
                {
                  icon: Zap,
                  stat: '10 min',
                  label: 'Average Read Time',
                  desc: 'Get key insights in a fraction of the time',
                },
                {
                  icon: Star,
                  stat: '4.5+',
                  label: 'Avg Rating',
                  desc: 'Only the highest quality summaries',
                },
                {
                  icon: Users,
                  stat: `${CATEGORIES.length}`,
                  label: 'Categories',
                  desc: 'From habits to entrepreneurship',
                },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-500/20 mb-4">
                    <item.icon className="w-7 h-7 text-brand-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {item.stat}
                  </div>
                  <div className="text-brand-300 font-semibold mb-1">
                    {item.label}
                  </div>
                  <div className="text-surface-400 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface-50">
        <div className="container-wide text-center">
          <h2 className="section-heading">
            Ready to Level Up Your Productivity?
          </h2>
          <p className="section-subheading mx-auto mb-8">
            Start exploring our collection of {books.length}+ book summaries and find
            your next breakthrough idea.
          </p>
          <Link
            href="/books"
            className="inline-flex items-center gap-2 px-8 py-4 bg-surface-900 text-white rounded-full font-semibold hover:bg-surface-800 transition-colors text-lg"
          >
            Explore All Books
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
