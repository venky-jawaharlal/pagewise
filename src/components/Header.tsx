'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Categories', href: '/categories' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-surface-200/50 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <span className="text-xl">📖</span>
            <span className="font-display text-xl font-bold text-surface-900">
              PageWise
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-brand-600'
                      : 'text-surface-600 hover:text-surface-900 hover:bg-surface-100'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-x-1 -bottom-[1px] h-0.5 rounded-full bg-brand-500"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Search button */}
            <Link
              href="/books"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-surface-500 hover:text-surface-900 hover:bg-surface-100 transition-colors"
              aria-label="Search books"
            >
              <Search size={18} />
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-surface-500 hover:text-surface-900 hover:bg-surface-100 transition-colors md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-16 right-0 bottom-0 w-72 bg-white/95 backdrop-blur-xl border-l border-surface-200 shadow-2xl md:hidden"
            >
              <div className="flex flex-col p-6 gap-1">
                {NAV_LINKS.map((link, index) => {
                  const isActive =
                    link.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(link.href);

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          'flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-colors',
                          isActive
                            ? 'bg-brand-50 text-brand-600'
                            : 'text-surface-600 hover:bg-surface-50 hover:text-surface-900'
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Divider */}
                <div className="my-3 h-px bg-surface-200" />

                {/* Search link in mobile */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.05 }}
                >
                  <Link
                    href="/books"
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-surface-600 hover:bg-surface-50 hover:text-surface-900 transition-colors"
                  >
                    <Search size={18} />
                    Search Books
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
