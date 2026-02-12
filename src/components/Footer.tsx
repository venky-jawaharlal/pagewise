import Link from 'next/link';
import { Heart } from 'lucide-react';
import { type Category } from '@/types/book';
import { formatCategorySlug } from '@/lib/utils';

const FEATURED_CATEGORIES: Category[] = [
  'Habits & Routines',
  'Focus & Deep Work',
  'Mindset & Psychology',
  'Time Management',
  'Leadership & Management',
  'Personal Development',
];

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'All Books', href: '/books' },
  { label: 'Categories', href: '/categories' },
];

export default function Footer() {
  return (
    <footer className="bg-surface-900 text-surface-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl">📖</span>
              <span className="font-display text-xl font-bold text-white">
                PageWise
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-surface-400 max-w-xs">
              Unlock the wisdom of 500+ productivity books. Key insights
              distilled into powerful, actionable summaries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-surface-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Categories
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {FEATURED_CATEGORIES.map((category) => (
                <li key={category}>
                  <Link
                    href={`/categories/${formatCategorySlug(category)}`}
                    className="text-sm text-surface-400 hover:text-white transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-surface-800 py-5">
          <p className="text-[11px] text-surface-600 leading-relaxed max-w-3xl">
            <strong className="text-surface-500">Disclaimer:</strong> All book summaries on PageWise
            are original editorial content written for informational and educational purposes. Book
            titles, author names, and publication details are factual information. Short quotes are
            used under fair use for commentary and review. Book cover images are sourced from Open
            Library and used for identification purposes. All trademarks and copyrights belong to
            their respective owners. PageWise is not affiliated with any publisher or author.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-surface-800 py-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-surface-500">
            &copy; {new Date().getFullYear()} PageWise. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-surface-500">
            Made with <Heart size={12} className="text-red-400 fill-red-400" /> for book lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
