'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

const FLOATING_EMOJIS = [
  { emoji: '📚', x: '10%', y: '20%', delay: 0, duration: 7 },
  { emoji: '🧠', x: '85%', y: '15%', delay: 1.2, duration: 8 },
  { emoji: '⏰', x: '75%', y: '70%', delay: 0.5, duration: 6 },
  { emoji: '🎯', x: '15%', y: '75%', delay: 2, duration: 9 },
  { emoji: '💡', x: '90%', y: '45%', delay: 0.8, duration: 7.5 },
  { emoji: '🚀', x: '5%', y: '50%', delay: 1.5, duration: 6.5 },
  { emoji: '📖', x: '50%', y: '10%', delay: 0.3, duration: 8.5 },
  { emoji: '✨', x: '60%', y: '80%', delay: 1.8, duration: 7 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient background mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-purple-50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/20 rounded-full blur-3xl" />
      </div>

      {/* Floating emojis */}
      {FLOATING_EMOJIS.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-3xl md:text-4xl select-none pointer-events-none opacity-20"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [-20, 20, -20],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: 'easeInOut',
          }}
        >
          {item.emoji}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
              <BookOpen size={14} />
              500+ Book Summaries
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl font-bold tracking-tight text-surface-900 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Master Productivity,{' '}
            <span className="bg-gradient-to-r from-brand-500 via-purple-500 to-brand-600 bg-clip-text text-transparent">
              One Book at a Time
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-lg text-surface-600 leading-relaxed sm:text-xl"
          >
            Discover key insights from 500+ of the world&apos;s best
            productivity, self-improvement, and business books — distilled into
            powerful, actionable summaries.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/books"
              className="group inline-flex items-center gap-2 rounded-xl bg-surface-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-surface-900/25 transition-all hover:bg-surface-800 hover:shadow-xl hover:shadow-surface-900/30"
            >
              Explore Books
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/categories"
              className="inline-flex items-center gap-2 rounded-xl border border-surface-200 bg-white px-6 py-3.5 text-sm font-semibold text-surface-700 shadow-sm transition-all hover:bg-surface-50 hover:border-surface-300"
            >
              Browse Categories
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto"
          >
            {[
              { value: '500+', label: 'Books' },
              { value: '14', label: 'Categories' },
              { value: '5min', label: 'Avg. Read' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl font-bold text-surface-900">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-sm text-surface-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
